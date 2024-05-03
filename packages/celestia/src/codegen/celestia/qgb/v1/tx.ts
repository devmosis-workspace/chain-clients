import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgRegisterEVMAddress registers an evm address to a validator. */
export interface MsgRegisterEVMAddress {
  /** The operating address of the validator. */
  validatorAddress: string;
  /** The matching HEX encoded EVM address. */
  evmAddress: string;
}
export interface MsgRegisterEVMAddressProtoMsg {
  typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddress";
  value: Uint8Array;
}
/** MsgRegisterEVMAddress registers an evm address to a validator. */
export interface MsgRegisterEVMAddressAmino {
  /** The operating address of the validator. */
  validator_address?: string;
  /** The matching HEX encoded EVM address. */
  evm_address?: string;
}
export interface MsgRegisterEVMAddressAminoMsg {
  type: "/celestia.qgb.v1.MsgRegisterEVMAddress";
  value: MsgRegisterEVMAddressAmino;
}
/** MsgRegisterEVMAddress registers an evm address to a validator. */
export interface MsgRegisterEVMAddressSDKType {
  validator_address: string;
  evm_address: string;
}
/** MsgRegisterEVMAddressResponse is the response to registering an EVM address. */
export interface MsgRegisterEVMAddressResponse {}
export interface MsgRegisterEVMAddressResponseProtoMsg {
  typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddressResponse";
  value: Uint8Array;
}
/** MsgRegisterEVMAddressResponse is the response to registering an EVM address. */
export interface MsgRegisterEVMAddressResponseAmino {}
export interface MsgRegisterEVMAddressResponseAminoMsg {
  type: "/celestia.qgb.v1.MsgRegisterEVMAddressResponse";
  value: MsgRegisterEVMAddressResponseAmino;
}
/** MsgRegisterEVMAddressResponse is the response to registering an EVM address. */
export interface MsgRegisterEVMAddressResponseSDKType {}
function createBaseMsgRegisterEVMAddress(): MsgRegisterEVMAddress {
  return {
    validatorAddress: "",
    evmAddress: ""
  };
}
export const MsgRegisterEVMAddress = {
  typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddress",
  encode(message: MsgRegisterEVMAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.evmAddress !== "") {
      writer.uint32(18).string(message.evmAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterEVMAddress {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterEVMAddress>): MsgRegisterEVMAddress {
    const message = createBaseMsgRegisterEVMAddress();
    message.validatorAddress = object.validatorAddress ?? "";
    message.evmAddress = object.evmAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterEVMAddressAmino): MsgRegisterEVMAddress {
    const message = createBaseMsgRegisterEVMAddress();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.evm_address !== undefined && object.evm_address !== null) {
      message.evmAddress = object.evm_address;
    }
    return message;
  },
  toAmino(message: MsgRegisterEVMAddress): MsgRegisterEVMAddressAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.evm_address = message.evmAddress === "" ? undefined : message.evmAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterEVMAddressAminoMsg): MsgRegisterEVMAddress {
    return MsgRegisterEVMAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterEVMAddressProtoMsg): MsgRegisterEVMAddress {
    return MsgRegisterEVMAddress.decode(message.value);
  },
  toProto(message: MsgRegisterEVMAddress): Uint8Array {
    return MsgRegisterEVMAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterEVMAddress): MsgRegisterEVMAddressProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddress",
      value: MsgRegisterEVMAddress.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterEVMAddressResponse(): MsgRegisterEVMAddressResponse {
  return {};
}
export const MsgRegisterEVMAddressResponse = {
  typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddressResponse",
  encode(_: MsgRegisterEVMAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterEVMAddressResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterEVMAddressResponse>): MsgRegisterEVMAddressResponse {
    const message = createBaseMsgRegisterEVMAddressResponse();
    return message;
  },
  fromAmino(_: MsgRegisterEVMAddressResponseAmino): MsgRegisterEVMAddressResponse {
    const message = createBaseMsgRegisterEVMAddressResponse();
    return message;
  },
  toAmino(_: MsgRegisterEVMAddressResponse): MsgRegisterEVMAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterEVMAddressResponseAminoMsg): MsgRegisterEVMAddressResponse {
    return MsgRegisterEVMAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterEVMAddressResponseProtoMsg): MsgRegisterEVMAddressResponse {
    return MsgRegisterEVMAddressResponse.decode(message.value);
  },
  toProto(message: MsgRegisterEVMAddressResponse): Uint8Array {
    return MsgRegisterEVMAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterEVMAddressResponse): MsgRegisterEVMAddressResponseProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddressResponse",
      value: MsgRegisterEVMAddressResponse.encode(message).finish()
    };
  }
};