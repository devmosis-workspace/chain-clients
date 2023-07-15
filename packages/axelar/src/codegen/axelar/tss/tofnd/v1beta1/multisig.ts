import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../../helpers";
export interface KeygenRequest {
  keyUid: string;
  /** used only for logging */
  partyUid: string;
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
  encode(message: KeygenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseKeygenResponse(): KeygenResponse {
  return {
    pubKey: undefined,
    error: undefined
  };
}
export const KeygenResponse = {
  encode(message: KeygenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: SignRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseSignResponse(): SignResponse {
  return {
    signature: undefined,
    error: undefined
  };
}
export const SignResponse = {
  encode(message: SignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};