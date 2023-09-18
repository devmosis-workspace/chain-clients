import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * Revenue defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface Revenue {
  /** contract_address is the hex address of a registered contract */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the transaction fees it defaults to
   * deployer_address
   */
  withdrawerAddress: string;
}
export interface RevenueProtoMsg {
  typeUrl: "/evmos.revenue.v1.Revenue";
  value: Uint8Array;
}
/**
 * Revenue defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface RevenueAmino {
  /** contract_address is the hex address of a registered contract */
  contract_address: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployer_address: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the transaction fees it defaults to
   * deployer_address
   */
  withdrawer_address: string;
}
export interface RevenueAminoMsg {
  type: "/evmos.revenue.v1.Revenue";
  value: RevenueAmino;
}
/**
 * Revenue defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface RevenueSDKType {
  contract_address: string;
  deployer_address: string;
  withdrawer_address: string;
}
function createBaseRevenue(): Revenue {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}
export const Revenue = {
  typeUrl: "/evmos.revenue.v1.Revenue",
  encode(message: Revenue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  fromJSON(object: any): Revenue {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
    };
  },
  fromPartial(object: Partial<Revenue>): Revenue {
    const message = createBaseRevenue();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  },
  fromAmino(object: RevenueAmino): Revenue {
    return {
      contractAddress: object.contract_address,
      deployerAddress: object.deployer_address,
      withdrawerAddress: object.withdrawer_address
    };
  },
  toAmino(message: Revenue): RevenueAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdrawer_address = message.withdrawerAddress;
    return obj;
  },
  fromAminoMsg(object: RevenueAminoMsg): Revenue {
    return Revenue.fromAmino(object.value);
  },
  fromProtoMsg(message: RevenueProtoMsg): Revenue {
    return Revenue.decode(message.value);
  },
  toProto(message: Revenue): Uint8Array {
    return Revenue.encode(message).finish();
  },
  toProtoMsg(message: Revenue): RevenueProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.Revenue",
      value: Revenue.encode(message).finish()
    };
  }
};