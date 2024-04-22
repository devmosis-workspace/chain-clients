import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export interface KeygenRequest {
  keyUid: string;
  /** used only for logging */
  partyUid: string;
}
export interface KeygenRequestProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenRequest";
  value: Uint8Array;
}
export interface KeygenRequestAmino {
  key_uid?: string;
  /** used only for logging */
  party_uid?: string;
}
export interface KeygenRequestAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.KeygenRequest";
  value: KeygenRequestAmino;
}
export interface KeygenRequestSDKType {
  key_uid: string;
  party_uid: string;
}
export interface KeygenResponse {
  /** SEC1-encoded compressed curve point */
  pubKey?: Uint8Array;
  /** reply with an error message if keygen fails */
  error?: string;
}
export interface KeygenResponseProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenResponse";
  value: Uint8Array;
}
export interface KeygenResponseAmino {
  /** SEC1-encoded compressed curve point */
  pub_key?: string;
  /** reply with an error message if keygen fails */
  error?: string;
}
export interface KeygenResponseAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.KeygenResponse";
  value: KeygenResponseAmino;
}
export interface KeygenResponseSDKType {
  pub_key?: Uint8Array;
  error?: string;
}
export interface SignRequest {
  keyUid: string;
  /** 32-byte pre-hashed message digest */
  msgToSign: Uint8Array;
  /** used only for logging */
  partyUid: string;
  /**
   * SEC1-encoded compressed pub key bytes to find the right
   * mnemonic. Latest is used, if empty.
   */
  pubKey: Uint8Array;
}
export interface SignRequestProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.SignRequest";
  value: Uint8Array;
}
export interface SignRequestAmino {
  key_uid?: string;
  /** 32-byte pre-hashed message digest */
  msg_to_sign?: string;
  /** used only for logging */
  party_uid?: string;
  /**
   * SEC1-encoded compressed pub key bytes to find the right
   * mnemonic. Latest is used, if empty.
   */
  pub_key?: string;
}
export interface SignRequestAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.SignRequest";
  value: SignRequestAmino;
}
export interface SignRequestSDKType {
  key_uid: string;
  msg_to_sign: Uint8Array;
  party_uid: string;
  pub_key: Uint8Array;
}
export interface SignResponse {
  /** ASN.1 DER-encoded ECDSA signature */
  signature?: Uint8Array;
  /** reply with an error message if sign fails */
  error?: string;
}
export interface SignResponseProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.SignResponse";
  value: Uint8Array;
}
export interface SignResponseAmino {
  /** ASN.1 DER-encoded ECDSA signature */
  signature?: string;
  /** reply with an error message if sign fails */
  error?: string;
}
export interface SignResponseAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.SignResponse";
  value: SignResponseAmino;
}
export interface SignResponseSDKType {
  signature?: Uint8Array;
  error?: string;
}
function createBaseKeygenRequest(): KeygenRequest {
  return {
    keyUid: "",
    partyUid: ""
  };
}
export const KeygenRequest = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenRequest",
  encode(message: KeygenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyUid !== "") {
      writer.uint32(10).string(message.keyUid);
    }
    if (message.partyUid !== "") {
      writer.uint32(18).string(message.partyUid);
    }
    return writer;
  },
  fromJSON(object: any): KeygenRequest {
    return {
      keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
      partyUid: isSet(object.partyUid) ? String(object.partyUid) : ""
    };
  },
  fromPartial(object: Partial<KeygenRequest>): KeygenRequest {
    const message = createBaseKeygenRequest();
    message.keyUid = object.keyUid ?? "";
    message.partyUid = object.partyUid ?? "";
    return message;
  },
  fromAmino(object: KeygenRequestAmino): KeygenRequest {
    const message = createBaseKeygenRequest();
    if (object.key_uid !== undefined && object.key_uid !== null) {
      message.keyUid = object.key_uid;
    }
    if (object.party_uid !== undefined && object.party_uid !== null) {
      message.partyUid = object.party_uid;
    }
    return message;
  },
  toAmino(message: KeygenRequest): KeygenRequestAmino {
    const obj: any = {};
    obj.key_uid = message.keyUid;
    obj.party_uid = message.partyUid;
    return obj;
  },
  fromAminoMsg(object: KeygenRequestAminoMsg): KeygenRequest {
    return KeygenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenRequestProtoMsg): KeygenRequest {
    return KeygenRequest.decode(message.value);
  },
  toProto(message: KeygenRequest): Uint8Array {
    return KeygenRequest.encode(message).finish();
  },
  toProtoMsg(message: KeygenRequest): KeygenRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenRequest",
      value: KeygenRequest.encode(message).finish()
    };
  }
};
function createBaseKeygenResponse(): KeygenResponse {
  return {
    pubKey: undefined,
    error: undefined
  };
}
export const KeygenResponse = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenResponse",
  encode(message: KeygenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubKey !== undefined) {
      writer.uint32(10).bytes(message.pubKey);
    }
    if (message.error !== undefined) {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },
  fromJSON(object: any): KeygenResponse {
    return {
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined
    };
  },
  fromPartial(object: Partial<KeygenResponse>): KeygenResponse {
    const message = createBaseKeygenResponse();
    message.pubKey = object.pubKey ?? undefined;
    message.error = object.error ?? undefined;
    return message;
  },
  fromAmino(object: KeygenResponseAmino): KeygenResponse {
    const message = createBaseKeygenResponse();
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: KeygenResponse): KeygenResponseAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: KeygenResponseAminoMsg): KeygenResponse {
    return KeygenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenResponseProtoMsg): KeygenResponse {
    return KeygenResponse.decode(message.value);
  },
  toProto(message: KeygenResponse): Uint8Array {
    return KeygenResponse.encode(message).finish();
  },
  toProtoMsg(message: KeygenResponse): KeygenResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenResponse",
      value: KeygenResponse.encode(message).finish()
    };
  }
};
function createBaseSignRequest(): SignRequest {
  return {
    keyUid: "",
    msgToSign: new Uint8Array(),
    partyUid: "",
    pubKey: new Uint8Array()
  };
}
export const SignRequest = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.SignRequest",
  encode(message: SignRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyUid !== "") {
      writer.uint32(10).string(message.keyUid);
    }
    if (message.msgToSign.length !== 0) {
      writer.uint32(18).bytes(message.msgToSign);
    }
    if (message.partyUid !== "") {
      writer.uint32(26).string(message.partyUid);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(34).bytes(message.pubKey);
    }
    return writer;
  },
  fromJSON(object: any): SignRequest {
    return {
      keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
      msgToSign: isSet(object.msgToSign) ? bytesFromBase64(object.msgToSign) : new Uint8Array(),
      partyUid: isSet(object.partyUid) ? String(object.partyUid) : "",
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SignRequest>): SignRequest {
    const message = createBaseSignRequest();
    message.keyUid = object.keyUid ?? "";
    message.msgToSign = object.msgToSign ?? new Uint8Array();
    message.partyUid = object.partyUid ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SignRequestAmino): SignRequest {
    const message = createBaseSignRequest();
    if (object.key_uid !== undefined && object.key_uid !== null) {
      message.keyUid = object.key_uid;
    }
    if (object.msg_to_sign !== undefined && object.msg_to_sign !== null) {
      message.msgToSign = bytesFromBase64(object.msg_to_sign);
    }
    if (object.party_uid !== undefined && object.party_uid !== null) {
      message.partyUid = object.party_uid;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    return message;
  },
  toAmino(message: SignRequest): SignRequestAmino {
    const obj: any = {};
    obj.key_uid = message.keyUid;
    obj.msg_to_sign = message.msgToSign ? base64FromBytes(message.msgToSign) : undefined;
    obj.party_uid = message.partyUid;
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: SignRequestAminoMsg): SignRequest {
    return SignRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SignRequestProtoMsg): SignRequest {
    return SignRequest.decode(message.value);
  },
  toProto(message: SignRequest): Uint8Array {
    return SignRequest.encode(message).finish();
  },
  toProtoMsg(message: SignRequest): SignRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.SignRequest",
      value: SignRequest.encode(message).finish()
    };
  }
};
function createBaseSignResponse(): SignResponse {
  return {
    signature: undefined,
    error: undefined
  };
}
export const SignResponse = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.SignResponse",
  encode(message: SignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signature !== undefined) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.error !== undefined) {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },
  fromJSON(object: any): SignResponse {
    return {
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined
    };
  },
  fromPartial(object: Partial<SignResponse>): SignResponse {
    const message = createBaseSignResponse();
    message.signature = object.signature ?? undefined;
    message.error = object.error ?? undefined;
    return message;
  },
  fromAmino(object: SignResponseAmino): SignResponse {
    const message = createBaseSignResponse();
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: SignResponse): SignResponseAmino {
    const obj: any = {};
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: SignResponseAminoMsg): SignResponse {
    return SignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SignResponseProtoMsg): SignResponse {
    return SignResponse.decode(message.value);
  },
  toProto(message: SignResponse): Uint8Array {
    return SignResponse.encode(message).finish();
  },
  toProtoMsg(message: SignResponse): SignResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.SignResponse",
      value: SignResponse.encode(message).finish()
    };
  }
};