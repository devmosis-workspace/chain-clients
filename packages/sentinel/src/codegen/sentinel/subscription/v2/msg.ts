import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgCancelRequest defines the SDK message for cancelling a subscription */
export interface MsgCancelRequest {
  from: string;
  id: bigint;
}
export interface MsgCancelRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.MsgCancelRequest";
  value: Uint8Array;
}
/** MsgCancelRequest defines the SDK message for cancelling a subscription */
export interface MsgCancelRequestAmino {
  from?: string;
  id?: string;
}
export interface MsgCancelRequestAminoMsg {
  type: "/sentinel.subscription.v2.MsgCancelRequest";
  value: MsgCancelRequestAmino;
}
/** MsgCancelRequest defines the SDK message for cancelling a subscription */
export interface MsgCancelRequestSDKType {
  from: string;
  id: bigint;
}
/**
 * MsgAllocateRequest defines the SDK message for allocating the bytes of a
 * subscription for an address
 */
export interface MsgAllocateRequest {
  from: string;
  id: bigint;
  address: string;
  bytes: string;
}
export interface MsgAllocateRequestProtoMsg {
  typeUrl: "/sentinel.subscription.v2.MsgAllocateRequest";
  value: Uint8Array;
}
/**
 * MsgAllocateRequest defines the SDK message for allocating the bytes of a
 * subscription for an address
 */
export interface MsgAllocateRequestAmino {
  from?: string;
  id?: string;
  address?: string;
  bytes?: string;
}
export interface MsgAllocateRequestAminoMsg {
  type: "/sentinel.subscription.v2.MsgAllocateRequest";
  value: MsgAllocateRequestAmino;
}
/**
 * MsgAllocateRequest defines the SDK message for allocating the bytes of a
 * subscription for an address
 */
export interface MsgAllocateRequestSDKType {
  from: string;
  id: bigint;
  address: string;
  bytes: string;
}
/** MsgCancelResponse defines the response of message MsgCancelRequest */
export interface MsgCancelResponse {}
export interface MsgCancelResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.MsgCancelResponse";
  value: Uint8Array;
}
/** MsgCancelResponse defines the response of message MsgCancelRequest */
export interface MsgCancelResponseAmino {}
export interface MsgCancelResponseAminoMsg {
  type: "/sentinel.subscription.v2.MsgCancelResponse";
  value: MsgCancelResponseAmino;
}
/** MsgCancelResponse defines the response of message MsgCancelRequest */
export interface MsgCancelResponseSDKType {}
/** MsgAllocateResponse defines the response of message MsgAllocateRequest */
export interface MsgAllocateResponse {}
export interface MsgAllocateResponseProtoMsg {
  typeUrl: "/sentinel.subscription.v2.MsgAllocateResponse";
  value: Uint8Array;
}
/** MsgAllocateResponse defines the response of message MsgAllocateRequest */
export interface MsgAllocateResponseAmino {}
export interface MsgAllocateResponseAminoMsg {
  type: "/sentinel.subscription.v2.MsgAllocateResponse";
  value: MsgAllocateResponseAmino;
}
/** MsgAllocateResponse defines the response of message MsgAllocateRequest */
export interface MsgAllocateResponseSDKType {}
function createBaseMsgCancelRequest(): MsgCancelRequest {
  return {
    from: "",
    id: BigInt(0)
  };
}
export const MsgCancelRequest = {
  typeUrl: "/sentinel.subscription.v2.MsgCancelRequest",
  encode(message: MsgCancelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCancelRequest>): MsgCancelRequest {
    const message = createBaseMsgCancelRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelRequestAmino): MsgCancelRequest {
    const message = createBaseMsgCancelRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCancelRequest): MsgCancelRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelRequestAminoMsg): MsgCancelRequest {
    return MsgCancelRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelRequestProtoMsg): MsgCancelRequest {
    return MsgCancelRequest.decode(message.value);
  },
  toProto(message: MsgCancelRequest): Uint8Array {
    return MsgCancelRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelRequest): MsgCancelRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.MsgCancelRequest",
      value: MsgCancelRequest.encode(message).finish()
    };
  }
};
function createBaseMsgAllocateRequest(): MsgAllocateRequest {
  return {
    from: "",
    id: BigInt(0),
    address: "",
    bytes: ""
  };
}
export const MsgAllocateRequest = {
  typeUrl: "/sentinel.subscription.v2.MsgAllocateRequest",
  encode(message: MsgAllocateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.bytes !== "") {
      writer.uint32(34).string(message.bytes);
    }
    return writer;
  },
  fromJSON(object: any): MsgAllocateRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      bytes: isSet(object.bytes) ? String(object.bytes) : ""
    };
  },
  fromPartial(object: Partial<MsgAllocateRequest>): MsgAllocateRequest {
    const message = createBaseMsgAllocateRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.bytes = object.bytes ?? "";
    return message;
  },
  fromAmino(object: MsgAllocateRequestAmino): MsgAllocateRequest {
    const message = createBaseMsgAllocateRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.bytes !== undefined && object.bytes !== null) {
      message.bytes = object.bytes;
    }
    return message;
  },
  toAmino(message: MsgAllocateRequest): MsgAllocateRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.bytes = message.bytes === "" ? undefined : message.bytes;
    return obj;
  },
  fromAminoMsg(object: MsgAllocateRequestAminoMsg): MsgAllocateRequest {
    return MsgAllocateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAllocateRequestProtoMsg): MsgAllocateRequest {
    return MsgAllocateRequest.decode(message.value);
  },
  toProto(message: MsgAllocateRequest): Uint8Array {
    return MsgAllocateRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgAllocateRequest): MsgAllocateRequestProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.MsgAllocateRequest",
      value: MsgAllocateRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCancelResponse(): MsgCancelResponse {
  return {};
}
export const MsgCancelResponse = {
  typeUrl: "/sentinel.subscription.v2.MsgCancelResponse",
  encode(_: MsgCancelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelResponse>): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  },
  fromAmino(_: MsgCancelResponseAmino): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  },
  toAmino(_: MsgCancelResponse): MsgCancelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelResponseAminoMsg): MsgCancelResponse {
    return MsgCancelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelResponseProtoMsg): MsgCancelResponse {
    return MsgCancelResponse.decode(message.value);
  },
  toProto(message: MsgCancelResponse): Uint8Array {
    return MsgCancelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelResponse): MsgCancelResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.MsgCancelResponse",
      value: MsgCancelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAllocateResponse(): MsgAllocateResponse {
  return {};
}
export const MsgAllocateResponse = {
  typeUrl: "/sentinel.subscription.v2.MsgAllocateResponse",
  encode(_: MsgAllocateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAllocateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAllocateResponse>): MsgAllocateResponse {
    const message = createBaseMsgAllocateResponse();
    return message;
  },
  fromAmino(_: MsgAllocateResponseAmino): MsgAllocateResponse {
    const message = createBaseMsgAllocateResponse();
    return message;
  },
  toAmino(_: MsgAllocateResponse): MsgAllocateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAllocateResponseAminoMsg): MsgAllocateResponse {
    return MsgAllocateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAllocateResponseProtoMsg): MsgAllocateResponse {
    return MsgAllocateResponse.decode(message.value);
  },
  toProto(message: MsgAllocateResponse): Uint8Array {
    return MsgAllocateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAllocateResponse): MsgAllocateResponseProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.MsgAllocateResponse",
      value: MsgAllocateResponse.encode(message).finish()
    };
  }
};