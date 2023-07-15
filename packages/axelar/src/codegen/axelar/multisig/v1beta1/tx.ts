import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface StartKeygenRequest {
  sender: string;
  keyId: string;
}
export interface StartKeygenRequestSDKType {
  sender: string;
  key_id: string;
}
export interface StartKeygenResponse {}
export interface StartKeygenResponseSDKType {}
export interface SubmitPubKeyRequest {
  sender: string;
  keyId: string;
  pubKey: Uint8Array;
  signature: Uint8Array;
}
export interface SubmitPubKeyRequestSDKType {
  sender: string;
  key_id: string;
  pub_key: Uint8Array;
  signature: Uint8Array;
}
export interface SubmitPubKeyResponse {}
export interface SubmitPubKeyResponseSDKType {}
export interface SubmitSignatureRequest {
  sender: string;
  sigId: Long;
  signature: Uint8Array;
}
export interface SubmitSignatureRequestSDKType {
  sender: string;
  sig_id: Long;
  signature: Uint8Array;
}
export interface SubmitSignatureResponse {}
export interface SubmitSignatureResponseSDKType {}
export interface RotateKeyRequest {
  sender: Uint8Array;
  chain: string;
  keyId: string;
}
export interface RotateKeyRequestSDKType {
  sender: Uint8Array;
  chain: string;
  key_id: string;
}
export interface RotateKeyResponse {}
export interface RotateKeyResponseSDKType {}
export interface KeygenOptOutRequest {
  sender: Uint8Array;
}
export interface KeygenOptOutRequestSDKType {
  sender: Uint8Array;
}
export interface KeygenOptOutResponse {}
export interface KeygenOptOutResponseSDKType {}
export interface KeygenOptInRequest {
  sender: Uint8Array;
}
export interface KeygenOptInRequestSDKType {
  sender: Uint8Array;
}
export interface KeygenOptInResponse {}
export interface KeygenOptInResponseSDKType {}
function createBaseStartKeygenRequest(): StartKeygenRequest {
  return {
    sender: "",
    keyId: ""
  };
}
export const StartKeygenRequest = {
  encode(message: StartKeygenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): StartKeygenRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<StartKeygenRequest>): StartKeygenRequest {
    const message = createBaseStartKeygenRequest();
    message.sender = object.sender ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  }
};
function createBaseStartKeygenResponse(): StartKeygenResponse {
  return {};
}
export const StartKeygenResponse = {
  encode(_: StartKeygenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): StartKeygenResponse {
    return {};
  },
  fromPartial(_: Partial<StartKeygenResponse>): StartKeygenResponse {
    const message = createBaseStartKeygenResponse();
    return message;
  }
};
function createBaseSubmitPubKeyRequest(): SubmitPubKeyRequest {
  return {
    sender: "",
    keyId: "",
    pubKey: new Uint8Array(),
    signature: new Uint8Array()
  };
}
export const SubmitPubKeyRequest = {
  encode(message: SubmitPubKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(26).bytes(message.pubKey);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): SubmitPubKeyRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SubmitPubKeyRequest>): SubmitPubKeyRequest {
    const message = createBaseSubmitPubKeyRequest();
    message.sender = object.sender ?? "";
    message.keyId = object.keyId ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }
};
function createBaseSubmitPubKeyResponse(): SubmitPubKeyResponse {
  return {};
}
export const SubmitPubKeyResponse = {
  encode(_: SubmitPubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): SubmitPubKeyResponse {
    return {};
  },
  fromPartial(_: Partial<SubmitPubKeyResponse>): SubmitPubKeyResponse {
    const message = createBaseSubmitPubKeyResponse();
    return message;
  }
};
function createBaseSubmitSignatureRequest(): SubmitSignatureRequest {
  return {
    sender: "",
    sigId: Long.UZERO,
    signature: new Uint8Array()
  };
}
export const SubmitSignatureRequest = {
  encode(message: SubmitSignatureRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.sigId.isZero()) {
      writer.uint32(16).uint64(message.sigId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): SubmitSignatureRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SubmitSignatureRequest>): SubmitSignatureRequest {
    const message = createBaseSubmitSignatureRequest();
    message.sender = object.sender ?? "";
    message.sigId = object.sigId !== undefined && object.sigId !== null ? Long.fromValue(object.sigId) : Long.UZERO;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }
};
function createBaseSubmitSignatureResponse(): SubmitSignatureResponse {
  return {};
}
export const SubmitSignatureResponse = {
  encode(_: SubmitSignatureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): SubmitSignatureResponse {
    return {};
  },
  fromPartial(_: Partial<SubmitSignatureResponse>): SubmitSignatureResponse {
    const message = createBaseSubmitSignatureResponse();
    return message;
  }
};
function createBaseRotateKeyRequest(): RotateKeyRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    keyId: ""
  };
}
export const RotateKeyRequest = {
  encode(message: RotateKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): RotateKeyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<RotateKeyRequest>): RotateKeyRequest {
    const message = createBaseRotateKeyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  }
};
function createBaseRotateKeyResponse(): RotateKeyResponse {
  return {};
}
export const RotateKeyResponse = {
  encode(_: RotateKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RotateKeyResponse {
    return {};
  },
  fromPartial(_: Partial<RotateKeyResponse>): RotateKeyResponse {
    const message = createBaseRotateKeyResponse();
    return message;
  }
};
function createBaseKeygenOptOutRequest(): KeygenOptOutRequest {
  return {
    sender: new Uint8Array()
  };
}
export const KeygenOptOutRequest = {
  encode(message: KeygenOptOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): KeygenOptOutRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<KeygenOptOutRequest>): KeygenOptOutRequest {
    const message = createBaseKeygenOptOutRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  }
};
function createBaseKeygenOptOutResponse(): KeygenOptOutResponse {
  return {};
}
export const KeygenOptOutResponse = {
  encode(_: KeygenOptOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): KeygenOptOutResponse {
    return {};
  },
  fromPartial(_: Partial<KeygenOptOutResponse>): KeygenOptOutResponse {
    const message = createBaseKeygenOptOutResponse();
    return message;
  }
};
function createBaseKeygenOptInRequest(): KeygenOptInRequest {
  return {
    sender: new Uint8Array()
  };
}
export const KeygenOptInRequest = {
  encode(message: KeygenOptInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): KeygenOptInRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<KeygenOptInRequest>): KeygenOptInRequest {
    const message = createBaseKeygenOptInRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  }
};
function createBaseKeygenOptInResponse(): KeygenOptInResponse {
  return {};
}
export const KeygenOptInResponse = {
  encode(_: KeygenOptInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): KeygenOptInResponse {
    return {};
  },
  fromPartial(_: Partial<KeygenOptInResponse>): KeygenOptInResponse {
    const message = createBaseKeygenOptInResponse();
    return message;
  }
};