import { Proof, ProofAmino, ProofSDKType } from "./proof";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** MsgStartRequest defines the SDK message for starting a session */
export interface MsgStartRequest {
  from: string;
  id: bigint;
  address: string;
}
export interface MsgStartRequestProtoMsg {
  typeUrl: "/sentinel.session.v2.MsgStartRequest";
  value: Uint8Array;
}
/** MsgStartRequest defines the SDK message for starting a session */
export interface MsgStartRequestAmino {
  from?: string;
  id?: string;
  address?: string;
}
export interface MsgStartRequestAminoMsg {
  type: "/sentinel.session.v2.MsgStartRequest";
  value: MsgStartRequestAmino;
}
/** MsgStartRequest defines the SDK message for starting a session */
export interface MsgStartRequestSDKType {
  from: string;
  id: bigint;
  address: string;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating a session */
export interface MsgUpdateDetailsRequest {
  from: string;
  proof: Proof;
  signature: Uint8Array;
}
export interface MsgUpdateDetailsRequestProtoMsg {
  typeUrl: "/sentinel.session.v2.MsgUpdateDetailsRequest";
  value: Uint8Array;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating a session */
export interface MsgUpdateDetailsRequestAmino {
  from?: string;
  proof?: ProofAmino;
  signature?: string;
}
export interface MsgUpdateDetailsRequestAminoMsg {
  type: "/sentinel.session.v2.MsgUpdateDetailsRequest";
  value: MsgUpdateDetailsRequestAmino;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating a session */
export interface MsgUpdateDetailsRequestSDKType {
  from: string;
  proof: ProofSDKType;
  signature: Uint8Array;
}
/** MsgEndRequest defines the SDK message for ending a session */
export interface MsgEndRequest {
  from: string;
  id: bigint;
  rating: bigint;
}
export interface MsgEndRequestProtoMsg {
  typeUrl: "/sentinel.session.v2.MsgEndRequest";
  value: Uint8Array;
}
/** MsgEndRequest defines the SDK message for ending a session */
export interface MsgEndRequestAmino {
  from?: string;
  id?: string;
  rating?: string;
}
export interface MsgEndRequestAminoMsg {
  type: "/sentinel.session.v2.MsgEndRequest";
  value: MsgEndRequestAmino;
}
/** MsgEndRequest defines the SDK message for ending a session */
export interface MsgEndRequestSDKType {
  from: string;
  id: bigint;
  rating: bigint;
}
/** MsgStartResponse defines the response of message MsgStartRequest */
export interface MsgStartResponse {}
export interface MsgStartResponseProtoMsg {
  typeUrl: "/sentinel.session.v2.MsgStartResponse";
  value: Uint8Array;
}
/** MsgStartResponse defines the response of message MsgStartRequest */
export interface MsgStartResponseAmino {}
export interface MsgStartResponseAminoMsg {
  type: "/sentinel.session.v2.MsgStartResponse";
  value: MsgStartResponseAmino;
}
/** MsgStartResponse defines the response of message MsgStartRequest */
export interface MsgStartResponseSDKType {}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponse {}
export interface MsgUpdateDetailsResponseProtoMsg {
  typeUrl: "/sentinel.session.v2.MsgUpdateDetailsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponseAmino {}
export interface MsgUpdateDetailsResponseAminoMsg {
  type: "/sentinel.session.v2.MsgUpdateDetailsResponse";
  value: MsgUpdateDetailsResponseAmino;
}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponseSDKType {}
/** MsgEndResponse defines the response of message MsgEndRequest */
export interface MsgEndResponse {}
export interface MsgEndResponseProtoMsg {
  typeUrl: "/sentinel.session.v2.MsgEndResponse";
  value: Uint8Array;
}
/** MsgEndResponse defines the response of message MsgEndRequest */
export interface MsgEndResponseAmino {}
export interface MsgEndResponseAminoMsg {
  type: "/sentinel.session.v2.MsgEndResponse";
  value: MsgEndResponseAmino;
}
/** MsgEndResponse defines the response of message MsgEndRequest */
export interface MsgEndResponseSDKType {}
function createBaseMsgStartRequest(): MsgStartRequest {
  return {
    from: "",
    id: BigInt(0),
    address: ""
  };
}
export const MsgStartRequest = {
  typeUrl: "/sentinel.session.v2.MsgStartRequest",
  encode(message: MsgStartRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgStartRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgStartRequest>): MsgStartRequest {
    const message = createBaseMsgStartRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgStartRequestAmino): MsgStartRequest {
    const message = createBaseMsgStartRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgStartRequest): MsgStartRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgStartRequestAminoMsg): MsgStartRequest {
    return MsgStartRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStartRequestProtoMsg): MsgStartRequest {
    return MsgStartRequest.decode(message.value);
  },
  toProto(message: MsgStartRequest): Uint8Array {
    return MsgStartRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgStartRequest): MsgStartRequestProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.MsgStartRequest",
      value: MsgStartRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDetailsRequest(): MsgUpdateDetailsRequest {
  return {
    from: "",
    proof: Proof.fromPartial({}),
    signature: new Uint8Array()
  };
}
export const MsgUpdateDetailsRequest = {
  typeUrl: "/sentinel.session.v2.MsgUpdateDetailsRequest",
  encode(message: MsgUpdateDetailsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateDetailsRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgUpdateDetailsRequest>): MsgUpdateDetailsRequest {
    const message = createBaseMsgUpdateDetailsRequest();
    message.from = object.from ?? "";
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgUpdateDetailsRequestAmino): MsgUpdateDetailsRequest {
    const message = createBaseMsgUpdateDetailsRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromAmino(object.proof);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: MsgUpdateDetailsRequest): MsgUpdateDetailsRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDetailsRequestAminoMsg): MsgUpdateDetailsRequest {
    return MsgUpdateDetailsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDetailsRequestProtoMsg): MsgUpdateDetailsRequest {
    return MsgUpdateDetailsRequest.decode(message.value);
  },
  toProto(message: MsgUpdateDetailsRequest): Uint8Array {
    return MsgUpdateDetailsRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDetailsRequest): MsgUpdateDetailsRequestProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.MsgUpdateDetailsRequest",
      value: MsgUpdateDetailsRequest.encode(message).finish()
    };
  }
};
function createBaseMsgEndRequest(): MsgEndRequest {
  return {
    from: "",
    id: BigInt(0),
    rating: BigInt(0)
  };
}
export const MsgEndRequest = {
  typeUrl: "/sentinel.session.v2.MsgEndRequest",
  encode(message: MsgEndRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.rating !== BigInt(0)) {
      writer.uint32(24).uint64(message.rating);
    }
    return writer;
  },
  fromJSON(object: any): MsgEndRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      rating: isSet(object.rating) ? BigInt(object.rating.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgEndRequest>): MsgEndRequest {
    const message = createBaseMsgEndRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.rating = object.rating !== undefined && object.rating !== null ? BigInt(object.rating.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgEndRequestAmino): MsgEndRequest {
    const message = createBaseMsgEndRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.rating !== undefined && object.rating !== null) {
      message.rating = BigInt(object.rating);
    }
    return message;
  },
  toAmino(message: MsgEndRequest): MsgEndRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.rating = message.rating !== BigInt(0) ? message.rating.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEndRequestAminoMsg): MsgEndRequest {
    return MsgEndRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEndRequestProtoMsg): MsgEndRequest {
    return MsgEndRequest.decode(message.value);
  },
  toProto(message: MsgEndRequest): Uint8Array {
    return MsgEndRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgEndRequest): MsgEndRequestProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.MsgEndRequest",
      value: MsgEndRequest.encode(message).finish()
    };
  }
};
function createBaseMsgStartResponse(): MsgStartResponse {
  return {};
}
export const MsgStartResponse = {
  typeUrl: "/sentinel.session.v2.MsgStartResponse",
  encode(_: MsgStartResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgStartResponse {
    return {};
  },
  fromPartial(_: Partial<MsgStartResponse>): MsgStartResponse {
    const message = createBaseMsgStartResponse();
    return message;
  },
  fromAmino(_: MsgStartResponseAmino): MsgStartResponse {
    const message = createBaseMsgStartResponse();
    return message;
  },
  toAmino(_: MsgStartResponse): MsgStartResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStartResponseAminoMsg): MsgStartResponse {
    return MsgStartResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStartResponseProtoMsg): MsgStartResponse {
    return MsgStartResponse.decode(message.value);
  },
  toProto(message: MsgStartResponse): Uint8Array {
    return MsgStartResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStartResponse): MsgStartResponseProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.MsgStartResponse",
      value: MsgStartResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDetailsResponse(): MsgUpdateDetailsResponse {
  return {};
}
export const MsgUpdateDetailsResponse = {
  typeUrl: "/sentinel.session.v2.MsgUpdateDetailsResponse",
  encode(_: MsgUpdateDetailsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateDetailsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateDetailsResponse>): MsgUpdateDetailsResponse {
    const message = createBaseMsgUpdateDetailsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDetailsResponseAmino): MsgUpdateDetailsResponse {
    const message = createBaseMsgUpdateDetailsResponse();
    return message;
  },
  toAmino(_: MsgUpdateDetailsResponse): MsgUpdateDetailsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDetailsResponseAminoMsg): MsgUpdateDetailsResponse {
    return MsgUpdateDetailsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDetailsResponseProtoMsg): MsgUpdateDetailsResponse {
    return MsgUpdateDetailsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDetailsResponse): Uint8Array {
    return MsgUpdateDetailsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDetailsResponse): MsgUpdateDetailsResponseProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.MsgUpdateDetailsResponse",
      value: MsgUpdateDetailsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEndResponse(): MsgEndResponse {
  return {};
}
export const MsgEndResponse = {
  typeUrl: "/sentinel.session.v2.MsgEndResponse",
  encode(_: MsgEndResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgEndResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEndResponse>): MsgEndResponse {
    const message = createBaseMsgEndResponse();
    return message;
  },
  fromAmino(_: MsgEndResponseAmino): MsgEndResponse {
    const message = createBaseMsgEndResponse();
    return message;
  },
  toAmino(_: MsgEndResponse): MsgEndResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEndResponseAminoMsg): MsgEndResponse {
    return MsgEndResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEndResponseProtoMsg): MsgEndResponse {
    return MsgEndResponse.decode(message.value);
  },
  toProto(message: MsgEndResponse): Uint8Array {
    return MsgEndResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEndResponse): MsgEndResponseProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.MsgEndResponse",
      value: MsgEndResponse.encode(message).finish()
    };
  }
};