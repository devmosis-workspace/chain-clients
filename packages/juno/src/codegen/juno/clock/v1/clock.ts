import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface ClockContract {
  /** The address of the contract. */
  contractAddress: string;
  /** The jail status of the contract. */
  isJailed: boolean;
}
export interface ClockContractProtoMsg {
  typeUrl: "/juno.clock.v1.ClockContract";
  value: Uint8Array;
}
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface ClockContractAmino {
  /** The address of the contract. */
  contract_address?: string;
  /** The jail status of the contract. */
  is_jailed?: boolean;
}
export interface ClockContractAminoMsg {
  type: "/juno.clock.v1.ClockContract";
  value: ClockContractAmino;
}
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface ClockContractSDKType {
  contract_address: string;
  is_jailed: boolean;
}
function createBaseClockContract(): ClockContract {
  return {
    contractAddress: "",
    isJailed: false
  };
}
export const ClockContract = {
  typeUrl: "/juno.clock.v1.ClockContract",
  encode(message: ClockContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.isJailed === true) {
      writer.uint32(16).bool(message.isJailed);
    }
    return writer;
  },
  fromJSON(object: any): ClockContract {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      isJailed: isSet(object.isJailed) ? Boolean(object.isJailed) : false
    };
  },
  fromPartial(object: Partial<ClockContract>): ClockContract {
    const message = createBaseClockContract();
    message.contractAddress = object.contractAddress ?? "";
    message.isJailed = object.isJailed ?? false;
    return message;
  },
  fromAmino(object: ClockContractAmino): ClockContract {
    const message = createBaseClockContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.is_jailed !== undefined && object.is_jailed !== null) {
      message.isJailed = object.is_jailed;
    }
    return message;
  },
  toAmino(message: ClockContract): ClockContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.is_jailed = message.isJailed;
    return obj;
  },
  fromAminoMsg(object: ClockContractAminoMsg): ClockContract {
    return ClockContract.fromAmino(object.value);
  },
  fromProtoMsg(message: ClockContractProtoMsg): ClockContract {
    return ClockContract.decode(message.value);
  },
  toProto(message: ClockContract): Uint8Array {
    return ClockContract.encode(message).finish();
  },
  toProtoMsg(message: ClockContract): ClockContractProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.ClockContract",
      value: ClockContract.encode(message).finish()
    };
  }
};