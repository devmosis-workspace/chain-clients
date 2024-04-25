import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgRegisterClockContract is the Msg/RegisterClockContract request type. */
export interface MsgRegisterClockContract {
  /** The address of the sender. */
  senderAddress: string;
  /** The address of the contract to register. */
  contractAddress: string;
}
export interface MsgRegisterClockContractProtoMsg {
  typeUrl: "/juno.clock.v1.MsgRegisterClockContract";
  value: Uint8Array;
}
/** MsgRegisterClockContract is the Msg/RegisterClockContract request type. */
export interface MsgRegisterClockContractAmino {
  /** The address of the sender. */
  sender_address?: string;
  /** The address of the contract to register. */
  contract_address?: string;
}
export interface MsgRegisterClockContractAminoMsg {
  type: "/juno.clock.v1.MsgRegisterClockContract";
  value: MsgRegisterClockContractAmino;
}
/** MsgRegisterClockContract is the Msg/RegisterClockContract request type. */
export interface MsgRegisterClockContractSDKType {
  sender_address: string;
  contract_address: string;
}
/**
 * MsgRegisterClockContractResponse defines the response structure for executing a
 * MsgRegisterClockContract message.
 */
export interface MsgRegisterClockContractResponse {}
export interface MsgRegisterClockContractResponseProtoMsg {
  typeUrl: "/juno.clock.v1.MsgRegisterClockContractResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterClockContractResponse defines the response structure for executing a
 * MsgRegisterClockContract message.
 */
export interface MsgRegisterClockContractResponseAmino {}
export interface MsgRegisterClockContractResponseAminoMsg {
  type: "/juno.clock.v1.MsgRegisterClockContractResponse";
  value: MsgRegisterClockContractResponseAmino;
}
/**
 * MsgRegisterClockContractResponse defines the response structure for executing a
 * MsgRegisterClockContract message.
 */
export interface MsgRegisterClockContractResponseSDKType {}
/** MsgUnregisterClockContract is the Msg/UnregisterClockContract request type. */
export interface MsgUnregisterClockContract {
  /** The address of the sender. */
  senderAddress: string;
  /** The address of the contract to unregister. */
  contractAddress: string;
}
export interface MsgUnregisterClockContractProtoMsg {
  typeUrl: "/juno.clock.v1.MsgUnregisterClockContract";
  value: Uint8Array;
}
/** MsgUnregisterClockContract is the Msg/UnregisterClockContract request type. */
export interface MsgUnregisterClockContractAmino {
  /** The address of the sender. */
  sender_address?: string;
  /** The address of the contract to unregister. */
  contract_address?: string;
}
export interface MsgUnregisterClockContractAminoMsg {
  type: "/juno.clock.v1.MsgUnregisterClockContract";
  value: MsgUnregisterClockContractAmino;
}
/** MsgUnregisterClockContract is the Msg/UnregisterClockContract request type. */
export interface MsgUnregisterClockContractSDKType {
  sender_address: string;
  contract_address: string;
}
/**
 * MsgUnregisterClockContractResponse defines the response structure for executing a
 * MsgUnregisterClockContract message.
 */
export interface MsgUnregisterClockContractResponse {}
export interface MsgUnregisterClockContractResponseProtoMsg {
  typeUrl: "/juno.clock.v1.MsgUnregisterClockContractResponse";
  value: Uint8Array;
}
/**
 * MsgUnregisterClockContractResponse defines the response structure for executing a
 * MsgUnregisterClockContract message.
 */
export interface MsgUnregisterClockContractResponseAmino {}
export interface MsgUnregisterClockContractResponseAminoMsg {
  type: "/juno.clock.v1.MsgUnregisterClockContractResponse";
  value: MsgUnregisterClockContractResponseAmino;
}
/**
 * MsgUnregisterClockContractResponse defines the response structure for executing a
 * MsgUnregisterClockContract message.
 */
export interface MsgUnregisterClockContractResponseSDKType {}
/** MsgUnjailClockContract is the Msg/UnjailClockContract request type. */
export interface MsgUnjailClockContract {
  /** The address of the sender. */
  senderAddress: string;
  /** The address of the contract to unjail. */
  contractAddress: string;
}
export interface MsgUnjailClockContractProtoMsg {
  typeUrl: "/juno.clock.v1.MsgUnjailClockContract";
  value: Uint8Array;
}
/** MsgUnjailClockContract is the Msg/UnjailClockContract request type. */
export interface MsgUnjailClockContractAmino {
  /** The address of the sender. */
  sender_address?: string;
  /** The address of the contract to unjail. */
  contract_address?: string;
}
export interface MsgUnjailClockContractAminoMsg {
  type: "/juno.clock.v1.MsgUnjailClockContract";
  value: MsgUnjailClockContractAmino;
}
/** MsgUnjailClockContract is the Msg/UnjailClockContract request type. */
export interface MsgUnjailClockContractSDKType {
  sender_address: string;
  contract_address: string;
}
/**
 * MsgUnjailClockContractResponse defines the response structure for executing a
 * MsgUnjailClockContract message.
 */
export interface MsgUnjailClockContractResponse {}
export interface MsgUnjailClockContractResponseProtoMsg {
  typeUrl: "/juno.clock.v1.MsgUnjailClockContractResponse";
  value: Uint8Array;
}
/**
 * MsgUnjailClockContractResponse defines the response structure for executing a
 * MsgUnjailClockContract message.
 */
export interface MsgUnjailClockContractResponseAmino {}
export interface MsgUnjailClockContractResponseAminoMsg {
  type: "/juno.clock.v1.MsgUnjailClockContractResponse";
  value: MsgUnjailClockContractResponseAmino;
}
/**
 * MsgUnjailClockContractResponse defines the response structure for executing a
 * MsgUnjailClockContract message.
 */
export interface MsgUnjailClockContractResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/clock parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/juno.clock.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the x/clock parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/juno.clock.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/juno.clock.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/juno.clock.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterClockContract(): MsgRegisterClockContract {
  return {
    senderAddress: "",
    contractAddress: ""
  };
}
export const MsgRegisterClockContract = {
  typeUrl: "/juno.clock.v1.MsgRegisterClockContract",
  encode(message: MsgRegisterClockContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterClockContract {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterClockContract>): MsgRegisterClockContract {
    const message = createBaseMsgRegisterClockContract();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterClockContractAmino): MsgRegisterClockContract {
    const message = createBaseMsgRegisterClockContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgRegisterClockContract): MsgRegisterClockContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterClockContractAminoMsg): MsgRegisterClockContract {
    return MsgRegisterClockContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterClockContractProtoMsg): MsgRegisterClockContract {
    return MsgRegisterClockContract.decode(message.value);
  },
  toProto(message: MsgRegisterClockContract): Uint8Array {
    return MsgRegisterClockContract.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterClockContract): MsgRegisterClockContractProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.MsgRegisterClockContract",
      value: MsgRegisterClockContract.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterClockContractResponse(): MsgRegisterClockContractResponse {
  return {};
}
export const MsgRegisterClockContractResponse = {
  typeUrl: "/juno.clock.v1.MsgRegisterClockContractResponse",
  encode(_: MsgRegisterClockContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterClockContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterClockContractResponse>): MsgRegisterClockContractResponse {
    const message = createBaseMsgRegisterClockContractResponse();
    return message;
  },
  fromAmino(_: MsgRegisterClockContractResponseAmino): MsgRegisterClockContractResponse {
    const message = createBaseMsgRegisterClockContractResponse();
    return message;
  },
  toAmino(_: MsgRegisterClockContractResponse): MsgRegisterClockContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterClockContractResponseAminoMsg): MsgRegisterClockContractResponse {
    return MsgRegisterClockContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterClockContractResponseProtoMsg): MsgRegisterClockContractResponse {
    return MsgRegisterClockContractResponse.decode(message.value);
  },
  toProto(message: MsgRegisterClockContractResponse): Uint8Array {
    return MsgRegisterClockContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterClockContractResponse): MsgRegisterClockContractResponseProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.MsgRegisterClockContractResponse",
      value: MsgRegisterClockContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnregisterClockContract(): MsgUnregisterClockContract {
  return {
    senderAddress: "",
    contractAddress: ""
  };
}
export const MsgUnregisterClockContract = {
  typeUrl: "/juno.clock.v1.MsgUnregisterClockContract",
  encode(message: MsgUnregisterClockContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnregisterClockContract {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgUnregisterClockContract>): MsgUnregisterClockContract {
    const message = createBaseMsgUnregisterClockContract();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnregisterClockContractAmino): MsgUnregisterClockContract {
    const message = createBaseMsgUnregisterClockContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgUnregisterClockContract): MsgUnregisterClockContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterClockContractAminoMsg): MsgUnregisterClockContract {
    return MsgUnregisterClockContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterClockContractProtoMsg): MsgUnregisterClockContract {
    return MsgUnregisterClockContract.decode(message.value);
  },
  toProto(message: MsgUnregisterClockContract): Uint8Array {
    return MsgUnregisterClockContract.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterClockContract): MsgUnregisterClockContractProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.MsgUnregisterClockContract",
      value: MsgUnregisterClockContract.encode(message).finish()
    };
  }
};
function createBaseMsgUnregisterClockContractResponse(): MsgUnregisterClockContractResponse {
  return {};
}
export const MsgUnregisterClockContractResponse = {
  typeUrl: "/juno.clock.v1.MsgUnregisterClockContractResponse",
  encode(_: MsgUnregisterClockContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnregisterClockContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnregisterClockContractResponse>): MsgUnregisterClockContractResponse {
    const message = createBaseMsgUnregisterClockContractResponse();
    return message;
  },
  fromAmino(_: MsgUnregisterClockContractResponseAmino): MsgUnregisterClockContractResponse {
    const message = createBaseMsgUnregisterClockContractResponse();
    return message;
  },
  toAmino(_: MsgUnregisterClockContractResponse): MsgUnregisterClockContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterClockContractResponseAminoMsg): MsgUnregisterClockContractResponse {
    return MsgUnregisterClockContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterClockContractResponseProtoMsg): MsgUnregisterClockContractResponse {
    return MsgUnregisterClockContractResponse.decode(message.value);
  },
  toProto(message: MsgUnregisterClockContractResponse): Uint8Array {
    return MsgUnregisterClockContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterClockContractResponse): MsgUnregisterClockContractResponseProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.MsgUnregisterClockContractResponse",
      value: MsgUnregisterClockContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnjailClockContract(): MsgUnjailClockContract {
  return {
    senderAddress: "",
    contractAddress: ""
  };
}
export const MsgUnjailClockContract = {
  typeUrl: "/juno.clock.v1.MsgUnjailClockContract",
  encode(message: MsgUnjailClockContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnjailClockContract {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgUnjailClockContract>): MsgUnjailClockContract {
    const message = createBaseMsgUnjailClockContract();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnjailClockContractAmino): MsgUnjailClockContract {
    const message = createBaseMsgUnjailClockContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgUnjailClockContract): MsgUnjailClockContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnjailClockContractAminoMsg): MsgUnjailClockContract {
    return MsgUnjailClockContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnjailClockContractProtoMsg): MsgUnjailClockContract {
    return MsgUnjailClockContract.decode(message.value);
  },
  toProto(message: MsgUnjailClockContract): Uint8Array {
    return MsgUnjailClockContract.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjailClockContract): MsgUnjailClockContractProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.MsgUnjailClockContract",
      value: MsgUnjailClockContract.encode(message).finish()
    };
  }
};
function createBaseMsgUnjailClockContractResponse(): MsgUnjailClockContractResponse {
  return {};
}
export const MsgUnjailClockContractResponse = {
  typeUrl: "/juno.clock.v1.MsgUnjailClockContractResponse",
  encode(_: MsgUnjailClockContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnjailClockContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnjailClockContractResponse>): MsgUnjailClockContractResponse {
    const message = createBaseMsgUnjailClockContractResponse();
    return message;
  },
  fromAmino(_: MsgUnjailClockContractResponseAmino): MsgUnjailClockContractResponse {
    const message = createBaseMsgUnjailClockContractResponse();
    return message;
  },
  toAmino(_: MsgUnjailClockContractResponse): MsgUnjailClockContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnjailClockContractResponseAminoMsg): MsgUnjailClockContractResponse {
    return MsgUnjailClockContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnjailClockContractResponseProtoMsg): MsgUnjailClockContractResponse {
    return MsgUnjailClockContractResponse.decode(message.value);
  },
  toProto(message: MsgUnjailClockContractResponse): Uint8Array {
    return MsgUnjailClockContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjailClockContractResponse): MsgUnjailClockContractResponseProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.MsgUnjailClockContractResponse",
      value: MsgUnjailClockContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/juno.clock.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/juno.clock.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};