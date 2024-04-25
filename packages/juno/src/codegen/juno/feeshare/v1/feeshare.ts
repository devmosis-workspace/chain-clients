import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeShare {
  /**
   * contract_address is the bech32 address of a registered contract in string
   * form
   */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same as the contracts admin address.
   */
  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees.
   */
  withdrawerAddress: string;
}
export interface FeeShareProtoMsg {
  typeUrl: "/juno.feeshare.v1.FeeShare";
  value: Uint8Array;
}
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeShareAmino {
  /**
   * contract_address is the bech32 address of a registered contract in string
   * form
   */
  contract_address?: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same as the contracts admin address.
   */
  deployer_address?: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees.
   */
  withdrawer_address?: string;
}
export interface FeeShareAminoMsg {
  type: "/juno.feeshare.v1.FeeShare";
  value: FeeShareAmino;
}
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeShareSDKType {
  contract_address: string;
  deployer_address: string;
  withdrawer_address: string;
}
function createBaseFeeShare(): FeeShare {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}
export const FeeShare = {
  typeUrl: "/juno.feeshare.v1.FeeShare",
  encode(message: FeeShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }
    return writer;
  },
  fromJSON(object: any): FeeShare {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
    };
  },
  fromPartial(object: Partial<FeeShare>): FeeShare {
    const message = createBaseFeeShare();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  },
  fromAmino(object: FeeShareAmino): FeeShare {
    const message = createBaseFeeShare();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployerAddress = object.deployer_address;
    }
    if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
      message.withdrawerAddress = object.withdrawer_address;
    }
    return message;
  },
  toAmino(message: FeeShare): FeeShareAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdrawer_address = message.withdrawerAddress;
    return obj;
  },
  fromAminoMsg(object: FeeShareAminoMsg): FeeShare {
    return FeeShare.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeShareProtoMsg): FeeShare {
    return FeeShare.decode(message.value);
  },
  toProto(message: FeeShare): Uint8Array {
    return FeeShare.encode(message).finish();
  },
  toProtoMsg(message: FeeShare): FeeShareProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.FeeShare",
      value: FeeShare.encode(message).finish()
    };
  }
};