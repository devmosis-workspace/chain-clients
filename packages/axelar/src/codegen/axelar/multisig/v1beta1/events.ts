import { Long, isSet, bytesFromBase64, isObject } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface KeygenStarted {
  module: string;
  keyId: string;
  participants: Uint8Array[];
}
export interface KeygenStartedSDKType {
  module: string;
  key_id: string;
  participants: Uint8Array[];
}
export interface KeygenCompleted {
  module: string;
  keyId: string;
}
export interface KeygenCompletedSDKType {
  module: string;
  key_id: string;
}
export interface KeygenExpired {
  module: string;
  keyId: string;
}
export interface KeygenExpiredSDKType {
  module: string;
  key_id: string;
}
export interface PubKeySubmitted {
  module: string;
  keyId: string;
  participant: Uint8Array;
  pubKey: Uint8Array;
}
export interface PubKeySubmittedSDKType {
  module: string;
  key_id: string;
  participant: Uint8Array;
  pub_key: Uint8Array;
}
export interface SigningStarted_PubKeysEntry {
  key: string;
  value: Uint8Array;
}
export interface SigningStarted_PubKeysEntrySDKType {
  key: string;
  value: Uint8Array;
}
export interface SigningStarted {
  module: string;
  sigId: Long;
  keyId: string;
  pubKeys: {
    [key: string]: Uint8Array;
  };
  payloadHash: Uint8Array;
  requestingModule: string;
}
export interface SigningStartedSDKType {
  module: string;
  sig_id: Long;
  key_id: string;
  pub_keys: {
    [key: string]: Uint8Array;
  };
  payload_hash: Uint8Array;
  requesting_module: string;
}
export interface SigningCompleted {
  module: string;
  sigId: Long;
}
export interface SigningCompletedSDKType {
  module: string;
  sig_id: Long;
}
export interface SigningExpired {
  module: string;
  sigId: Long;
}
export interface SigningExpiredSDKType {
  module: string;
  sig_id: Long;
}
export interface SignatureSubmitted {
  module: string;
  sigId: Long;
  participant: Uint8Array;
  signature: Uint8Array;
}
export interface SignatureSubmittedSDKType {
  module: string;
  sig_id: Long;
  participant: Uint8Array;
  signature: Uint8Array;
}
export interface KeyAssigned {
  module: string;
  chain: string;
  keyId: string;
}
export interface KeyAssignedSDKType {
  module: string;
  chain: string;
  key_id: string;
}
export interface KeyRotated {
  module: string;
  chain: string;
  keyId: string;
}
export interface KeyRotatedSDKType {
  module: string;
  chain: string;
  key_id: string;
}
export interface KeygenOptOut {
  participant: Uint8Array;
}
export interface KeygenOptOutSDKType {
  participant: Uint8Array;
}
export interface KeygenOptIn {
  participant: Uint8Array;
}
export interface KeygenOptInSDKType {
  participant: Uint8Array;
}
function createBaseKeygenStarted(): KeygenStarted {
  return {
    module: "",
    keyId: "",
    participants: []
  };
}
export const KeygenStarted = {
  encode(message: KeygenStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    for (const v of message.participants) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): KeygenStarted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<KeygenStarted>): KeygenStarted {
    const message = createBaseKeygenStarted();
    message.module = object.module ?? "";
    message.keyId = object.keyId ?? "";
    message.participants = object.participants?.map(e => e) || [];
    return message;
  }
};
function createBaseKeygenCompleted(): KeygenCompleted {
  return {
    module: "",
    keyId: ""
  };
}
export const KeygenCompleted = {
  encode(message: KeygenCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): KeygenCompleted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<KeygenCompleted>): KeygenCompleted {
    const message = createBaseKeygenCompleted();
    message.module = object.module ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  }
};
function createBaseKeygenExpired(): KeygenExpired {
  return {
    module: "",
    keyId: ""
  };
}
export const KeygenExpired = {
  encode(message: KeygenExpired, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): KeygenExpired {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<KeygenExpired>): KeygenExpired {
    const message = createBaseKeygenExpired();
    message.module = object.module ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  }
};
function createBasePubKeySubmitted(): PubKeySubmitted {
  return {
    module: "",
    keyId: "",
    participant: new Uint8Array(),
    pubKey: new Uint8Array()
  };
}
export const PubKeySubmitted = {
  encode(message: PubKeySubmitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    if (message.participant.length !== 0) {
      writer.uint32(26).bytes(message.participant);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(34).bytes(message.pubKey);
    }
    return writer;
  },
  fromJSON(object: any): PubKeySubmitted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<PubKeySubmitted>): PubKeySubmitted {
    const message = createBasePubKeySubmitted();
    message.module = object.module ?? "";
    message.keyId = object.keyId ?? "";
    message.participant = object.participant ?? new Uint8Array();
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  }
};
function createBaseSigningStarted_PubKeysEntry(): SigningStarted_PubKeysEntry {
  return {
    key: "",
    value: new Uint8Array()
  };
}
export const SigningStarted_PubKeysEntry = {
  encode(message: SigningStarted_PubKeysEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): SigningStarted_PubKeysEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SigningStarted_PubKeysEntry>): SigningStarted_PubKeysEntry {
    const message = createBaseSigningStarted_PubKeysEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};
function createBaseSigningStarted(): SigningStarted {
  return {
    module: "",
    sigId: Long.UZERO,
    keyId: "",
    pubKeys: {},
    payloadHash: new Uint8Array(),
    requestingModule: ""
  };
}
export const SigningStarted = {
  encode(message: SigningStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (!message.sigId.isZero()) {
      writer.uint32(16).uint64(message.sigId);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    Object.entries(message.pubKeys).forEach(([key, value]) => {
      SigningStarted_PubKeysEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.payloadHash.length !== 0) {
      writer.uint32(42).bytes(message.payloadHash);
    }
    if (message.requestingModule !== "") {
      writer.uint32(50).string(message.requestingModule);
    }
    return writer;
  },
  fromJSON(object: any): SigningStarted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      pubKeys: isObject(object.pubKeys) ? Object.entries(object.pubKeys).reduce<{
        [key: string]: bytes;
      }>((acc, [key, value]) => {
        acc[key] = bytes.fromJSON(value);
        return acc;
      }, {}) : {},
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      requestingModule: isSet(object.requestingModule) ? String(object.requestingModule) : ""
    };
  },
  fromPartial(object: Partial<SigningStarted>): SigningStarted {
    const message = createBaseSigningStarted();
    message.module = object.module ?? "";
    message.sigId = object.sigId !== undefined && object.sigId !== null ? Long.fromValue(object.sigId) : Long.UZERO;
    message.keyId = object.keyId ?? "";
    message.pubKeys = Object.entries(object.pubKeys ?? {}).reduce<{
      [key: string]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bytes.fromPartial(value);
      }
      return acc;
    }, {});
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.requestingModule = object.requestingModule ?? "";
    return message;
  }
};
function createBaseSigningCompleted(): SigningCompleted {
  return {
    module: "",
    sigId: Long.UZERO
  };
}
export const SigningCompleted = {
  encode(message: SigningCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (!message.sigId.isZero()) {
      writer.uint32(16).uint64(message.sigId);
    }
    return writer;
  },
  fromJSON(object: any): SigningCompleted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<SigningCompleted>): SigningCompleted {
    const message = createBaseSigningCompleted();
    message.module = object.module ?? "";
    message.sigId = object.sigId !== undefined && object.sigId !== null ? Long.fromValue(object.sigId) : Long.UZERO;
    return message;
  }
};
function createBaseSigningExpired(): SigningExpired {
  return {
    module: "",
    sigId: Long.UZERO
  };
}
export const SigningExpired = {
  encode(message: SigningExpired, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (!message.sigId.isZero()) {
      writer.uint32(16).uint64(message.sigId);
    }
    return writer;
  },
  fromJSON(object: any): SigningExpired {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<SigningExpired>): SigningExpired {
    const message = createBaseSigningExpired();
    message.module = object.module ?? "";
    message.sigId = object.sigId !== undefined && object.sigId !== null ? Long.fromValue(object.sigId) : Long.UZERO;
    return message;
  }
};
function createBaseSignatureSubmitted(): SignatureSubmitted {
  return {
    module: "",
    sigId: Long.UZERO,
    participant: new Uint8Array(),
    signature: new Uint8Array()
  };
}
export const SignatureSubmitted = {
  encode(message: SignatureSubmitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (!message.sigId.isZero()) {
      writer.uint32(16).uint64(message.sigId);
    }
    if (message.participant.length !== 0) {
      writer.uint32(26).bytes(message.participant);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): SignatureSubmitted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SignatureSubmitted>): SignatureSubmitted {
    const message = createBaseSignatureSubmitted();
    message.module = object.module ?? "";
    message.sigId = object.sigId !== undefined && object.sigId !== null ? Long.fromValue(object.sigId) : Long.UZERO;
    message.participant = object.participant ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }
};
function createBaseKeyAssigned(): KeyAssigned {
  return {
    module: "",
    chain: "",
    keyId: ""
  };
}
export const KeyAssigned = {
  encode(message: KeyAssigned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): KeyAssigned {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<KeyAssigned>): KeyAssigned {
    const message = createBaseKeyAssigned();
    message.module = object.module ?? "";
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  }
};
function createBaseKeyRotated(): KeyRotated {
  return {
    module: "",
    chain: "",
    keyId: ""
  };
}
export const KeyRotated = {
  encode(message: KeyRotated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): KeyRotated {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<KeyRotated>): KeyRotated {
    const message = createBaseKeyRotated();
    message.module = object.module ?? "";
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  }
};
function createBaseKeygenOptOut(): KeygenOptOut {
  return {
    participant: new Uint8Array()
  };
}
export const KeygenOptOut = {
  encode(message: KeygenOptOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant.length !== 0) {
      writer.uint32(10).bytes(message.participant);
    }
    return writer;
  },
  fromJSON(object: any): KeygenOptOut {
    return {
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<KeygenOptOut>): KeygenOptOut {
    const message = createBaseKeygenOptOut();
    message.participant = object.participant ?? new Uint8Array();
    return message;
  }
};
function createBaseKeygenOptIn(): KeygenOptIn {
  return {
    participant: new Uint8Array()
  };
}
export const KeygenOptIn = {
  encode(message: KeygenOptIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant.length !== 0) {
      writer.uint32(10).bytes(message.participant);
    }
    return writer;
  },
  fromJSON(object: any): KeygenOptIn {
    return {
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<KeygenOptIn>): KeygenOptIn {
    const message = createBaseKeygenOptIn();
    message.participant = object.participant ?? new Uint8Array();
    return message;
  }
};