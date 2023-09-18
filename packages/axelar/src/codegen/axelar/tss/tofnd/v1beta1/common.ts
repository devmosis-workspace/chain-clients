import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64 } from "../../../../helpers";
export enum KeyPresenceResponse_Response {
  RESPONSE_UNSPECIFIED = 0,
  RESPONSE_PRESENT = 1,
  RESPONSE_ABSENT = 2,
  RESPONSE_FAIL = 3,
  UNRECOGNIZED = -1,
}
export const KeyPresenceResponse_ResponseSDKType = KeyPresenceResponse_Response;
export const KeyPresenceResponse_ResponseAmino = KeyPresenceResponse_Response;
export function keyPresenceResponse_ResponseFromJSON(object: any): KeyPresenceResponse_Response {
  switch (object) {
    case 0:
    case "RESPONSE_UNSPECIFIED":
      return KeyPresenceResponse_Response.RESPONSE_UNSPECIFIED;
    case 1:
    case "RESPONSE_PRESENT":
      return KeyPresenceResponse_Response.RESPONSE_PRESENT;
    case 2:
    case "RESPONSE_ABSENT":
      return KeyPresenceResponse_Response.RESPONSE_ABSENT;
    case 3:
    case "RESPONSE_FAIL":
      return KeyPresenceResponse_Response.RESPONSE_FAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyPresenceResponse_Response.UNRECOGNIZED;
  }
}
export function keyPresenceResponse_ResponseToJSON(object: KeyPresenceResponse_Response): string {
  switch (object) {
    case KeyPresenceResponse_Response.RESPONSE_UNSPECIFIED:
      return "RESPONSE_UNSPECIFIED";
    case KeyPresenceResponse_Response.RESPONSE_PRESENT:
      return "RESPONSE_PRESENT";
    case KeyPresenceResponse_Response.RESPONSE_ABSENT:
      return "RESPONSE_ABSENT";
    case KeyPresenceResponse_Response.RESPONSE_FAIL:
      return "RESPONSE_FAIL";
    case KeyPresenceResponse_Response.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Key presence check types */
export interface KeyPresenceRequest {
  keyUid: string;
  /**
   * SEC1-encoded compressed pub key bytes to find the right
   * mnemonic. Latest is used, if empty.
   */
  pubKey: Uint8Array;
}
export interface KeyPresenceRequestProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceRequest";
  value: Uint8Array;
}
/** Key presence check types */
export interface KeyPresenceRequestAmino {
  key_uid: string;
  /**
   * SEC1-encoded compressed pub key bytes to find the right
   * mnemonic. Latest is used, if empty.
   */
  pub_key: Uint8Array;
}
export interface KeyPresenceRequestAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.KeyPresenceRequest";
  value: KeyPresenceRequestAmino;
}
/** Key presence check types */
export interface KeyPresenceRequestSDKType {
  key_uid: string;
  pub_key: Uint8Array;
}
export interface KeyPresenceResponse {
  response: KeyPresenceResponse_Response;
}
export interface KeyPresenceResponseProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceResponse";
  value: Uint8Array;
}
export interface KeyPresenceResponseAmino {
  response: KeyPresenceResponse_Response;
}
export interface KeyPresenceResponseAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.KeyPresenceResponse";
  value: KeyPresenceResponseAmino;
}
export interface KeyPresenceResponseSDKType {
  response: KeyPresenceResponse_Response;
}
function createBaseKeyPresenceRequest(): KeyPresenceRequest {
  return {
    keyUid: "",
    pubKey: new Uint8Array()
  };
}
export const KeyPresenceRequest = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceRequest",
  encode(message: KeyPresenceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyUid !== "") {
      writer.uint32(10).string(message.keyUid);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(18).bytes(message.pubKey);
    }
    return writer;
  },
  fromJSON(object: any): KeyPresenceRequest {
    return {
      keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<KeyPresenceRequest>): KeyPresenceRequest {
    const message = createBaseKeyPresenceRequest();
    message.keyUid = object.keyUid ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: KeyPresenceRequestAmino): KeyPresenceRequest {
    return {
      keyUid: object.key_uid,
      pubKey: object.pub_key
    };
  },
  toAmino(message: KeyPresenceRequest): KeyPresenceRequestAmino {
    const obj: any = {};
    obj.key_uid = message.keyUid;
    obj.pub_key = message.pubKey;
    return obj;
  },
  fromAminoMsg(object: KeyPresenceRequestAminoMsg): KeyPresenceRequest {
    return KeyPresenceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyPresenceRequestProtoMsg): KeyPresenceRequest {
    return KeyPresenceRequest.decode(message.value);
  },
  toProto(message: KeyPresenceRequest): Uint8Array {
    return KeyPresenceRequest.encode(message).finish();
  },
  toProtoMsg(message: KeyPresenceRequest): KeyPresenceRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceRequest",
      value: KeyPresenceRequest.encode(message).finish()
    };
  }
};
function createBaseKeyPresenceResponse(): KeyPresenceResponse {
  return {
    response: 0
  };
}
export const KeyPresenceResponse = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceResponse",
  encode(message: KeyPresenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },
  fromJSON(object: any): KeyPresenceResponse {
    return {
      response: isSet(object.response) ? keyPresenceResponse_ResponseFromJSON(object.response) : -1
    };
  },
  fromPartial(object: Partial<KeyPresenceResponse>): KeyPresenceResponse {
    const message = createBaseKeyPresenceResponse();
    message.response = object.response ?? 0;
    return message;
  },
  fromAmino(object: KeyPresenceResponseAmino): KeyPresenceResponse {
    return {
      response: isSet(object.response) ? keyPresenceResponse_ResponseFromJSON(object.response) : -1
    };
  },
  toAmino(message: KeyPresenceResponse): KeyPresenceResponseAmino {
    const obj: any = {};
    obj.response = message.response;
    return obj;
  },
  fromAminoMsg(object: KeyPresenceResponseAminoMsg): KeyPresenceResponse {
    return KeyPresenceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyPresenceResponseProtoMsg): KeyPresenceResponse {
    return KeyPresenceResponse.decode(message.value);
  },
  toProto(message: KeyPresenceResponse): Uint8Array {
    return KeyPresenceResponse.encode(message).finish();
  },
  toProtoMsg(message: KeyPresenceResponse): KeyPresenceResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceResponse",
      value: KeyPresenceResponse.encode(message).finish()
    };
  }
};