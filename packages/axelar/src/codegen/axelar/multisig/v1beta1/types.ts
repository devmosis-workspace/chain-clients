import { Snapshot, SnapshotSDKType } from "../../snapshot/exported/v1beta1/types";
import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { KeyState, MultisigState, keyStateFromJSON, multisigStateFromJSON } from "../exported/v1beta1/types";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long, isSet, bytesFromBase64, isObject } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Key_PubKeysEntry {
  key: string;
  value: Uint8Array;
}
export interface Key_PubKeysEntrySDKType {
  key: string;
  value: Uint8Array;
}
export interface Key {
  id: string;
  snapshot?: Snapshot;
  pubKeys: {
    [key: string]: Uint8Array;
  };
  signingThreshold?: Threshold;
  state: KeyState;
}
export interface KeySDKType {
  id: string;
  snapshot?: SnapshotSDKType;
  pub_keys: {
    [key: string]: Uint8Array;
  };
  signing_threshold?: ThresholdSDKType;
  state: KeyState;
}
export interface KeygenSession_IsPubKeyReceivedEntry {
  key: string;
  value: boolean;
}
export interface KeygenSession_IsPubKeyReceivedEntrySDKType {
  key: string;
  value: boolean;
}
export interface KeygenSession {
  key?: Key;
  state: MultisigState;
  keygenThreshold?: Threshold;
  expiresAt: Long;
  completedAt: Long;
  isPubKeyReceived: {
    [key: string]: boolean;
  };
  gracePeriod: Long;
}
export interface KeygenSessionSDKType {
  key?: KeySDKType;
  state: MultisigState;
  keygen_threshold?: ThresholdSDKType;
  expires_at: Long;
  completed_at: Long;
  is_pub_key_received: {
    [key: string]: boolean;
  };
  grace_period: Long;
}
export interface MultiSig_SigsEntry {
  key: string;
  value: Uint8Array;
}
export interface MultiSig_SigsEntrySDKType {
  key: string;
  value: Uint8Array;
}
export interface MultiSig {
  keyId: string;
  payloadHash: Uint8Array;
  sigs: {
    [key: string]: Uint8Array;
  };
}
export interface MultiSigSDKType {
  key_id: string;
  payload_hash: Uint8Array;
  sigs: {
    [key: string]: Uint8Array;
  };
}
export interface SigningSession {
  id: Long;
  multiSig?: MultiSig;
  state: MultisigState;
  key?: Key;
  expiresAt: Long;
  completedAt: Long;
  gracePeriod: Long;
  module: string;
  moduleMetadata?: Any;
}
export interface SigningSessionSDKType {
  id: Long;
  multi_sig?: MultiSigSDKType;
  state: MultisigState;
  key?: KeySDKType;
  expires_at: Long;
  completed_at: Long;
  grace_period: Long;
  module: string;
  module_metadata?: AnySDKType;
}
export interface KeyEpoch {
  epoch: Long;
  chain: string;
  keyId: string;
}
export interface KeyEpochSDKType {
  epoch: Long;
  chain: string;
  key_id: string;
}
function createBaseKey_PubKeysEntry(): Key_PubKeysEntry {
  return {
    key: "",
    value: new Uint8Array()
  };
}
export const Key_PubKeysEntry = {
  encode(message: Key_PubKeysEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): Key_PubKeysEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Key_PubKeysEntry>): Key_PubKeysEntry {
    const message = createBaseKey_PubKeysEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};
function createBaseKey(): Key {
  return {
    id: "",
    snapshot: undefined,
    pubKeys: {},
    signingThreshold: undefined,
    state: 0
  };
}
export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.pubKeys).forEach(([key, value]) => {
      Key_PubKeysEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.signingThreshold !== undefined) {
      Threshold.encode(message.signingThreshold, writer.uint32(34).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    return writer;
  },
  fromJSON(object: any): Key {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      snapshot: isSet(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : undefined,
      pubKeys: isObject(object.pubKeys) ? Object.entries(object.pubKeys).reduce<{
        [key: string]: bytes;
      }>((acc, [key, value]) => {
        acc[key] = bytes.fromJSON(value);
        return acc;
      }, {}) : {},
      signingThreshold: isSet(object.signingThreshold) ? Threshold.fromJSON(object.signingThreshold) : undefined,
      state: isSet(object.state) ? keyStateFromJSON(object.state) : 0
    };
  },
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.id = object.id ?? "";
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.pubKeys = Object.entries(object.pubKeys ?? {}).reduce<{
      [key: string]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bytes.fromPartial(value);
      }
      return acc;
    }, {});
    message.signingThreshold = object.signingThreshold !== undefined && object.signingThreshold !== null ? Threshold.fromPartial(object.signingThreshold) : undefined;
    message.state = object.state ?? 0;
    return message;
  }
};
function createBaseKeygenSession_IsPubKeyReceivedEntry(): KeygenSession_IsPubKeyReceivedEntry {
  return {
    key: "",
    value: false
  };
}
export const KeygenSession_IsPubKeyReceivedEntry = {
  encode(message: KeygenSession_IsPubKeyReceivedEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  fromJSON(object: any): KeygenSession_IsPubKeyReceivedEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false
    };
  },
  fromPartial(object: Partial<KeygenSession_IsPubKeyReceivedEntry>): KeygenSession_IsPubKeyReceivedEntry {
    const message = createBaseKeygenSession_IsPubKeyReceivedEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  }
};
function createBaseKeygenSession(): KeygenSession {
  return {
    key: undefined,
    state: 0,
    keygenThreshold: undefined,
    expiresAt: Long.ZERO,
    completedAt: Long.ZERO,
    isPubKeyReceived: {},
    gracePeriod: Long.ZERO
  };
}
export const KeygenSession = {
  encode(message: KeygenSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.keygenThreshold !== undefined) {
      Threshold.encode(message.keygenThreshold, writer.uint32(26).fork()).ldelim();
    }
    if (!message.expiresAt.isZero()) {
      writer.uint32(32).int64(message.expiresAt);
    }
    if (!message.completedAt.isZero()) {
      writer.uint32(40).int64(message.completedAt);
    }
    Object.entries(message.isPubKeyReceived).forEach(([key, value]) => {
      KeygenSession_IsPubKeyReceivedEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(48).fork()).ldelim();
    });
    if (!message.gracePeriod.isZero()) {
      writer.uint32(56).int64(message.gracePeriod);
    }
    return writer;
  },
  fromJSON(object: any): KeygenSession {
    return {
      key: isSet(object.key) ? Key.fromJSON(object.key) : undefined,
      state: isSet(object.state) ? multisigStateFromJSON(object.state) : 0,
      keygenThreshold: isSet(object.keygenThreshold) ? Threshold.fromJSON(object.keygenThreshold) : undefined,
      expiresAt: isSet(object.expiresAt) ? Long.fromValue(object.expiresAt) : Long.ZERO,
      completedAt: isSet(object.completedAt) ? Long.fromValue(object.completedAt) : Long.ZERO,
      isPubKeyReceived: isObject(object.isPubKeyReceived) ? Object.entries(object.isPubKeyReceived).reduce<{
        [key: string]: bool;
      }>((acc, [key, value]) => {
        acc[key] = bool.fromJSON(value);
        return acc;
      }, {}) : {},
      gracePeriod: isSet(object.gracePeriod) ? Long.fromValue(object.gracePeriod) : Long.ZERO
    };
  },
  fromPartial(object: Partial<KeygenSession>): KeygenSession {
    const message = createBaseKeygenSession();
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
    message.state = object.state ?? 0;
    message.keygenThreshold = object.keygenThreshold !== undefined && object.keygenThreshold !== null ? Threshold.fromPartial(object.keygenThreshold) : undefined;
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? Long.fromValue(object.expiresAt) : Long.ZERO;
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? Long.fromValue(object.completedAt) : Long.ZERO;
    message.isPubKeyReceived = Object.entries(object.isPubKeyReceived ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromPartial(value);
      }
      return acc;
    }, {});
    message.gracePeriod = object.gracePeriod !== undefined && object.gracePeriod !== null ? Long.fromValue(object.gracePeriod) : Long.ZERO;
    return message;
  }
};
function createBaseMultiSig_SigsEntry(): MultiSig_SigsEntry {
  return {
    key: "",
    value: new Uint8Array()
  };
}
export const MultiSig_SigsEntry = {
  encode(message: MultiSig_SigsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): MultiSig_SigsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MultiSig_SigsEntry>): MultiSig_SigsEntry {
    const message = createBaseMultiSig_SigsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};
function createBaseMultiSig(): MultiSig {
  return {
    keyId: "",
    payloadHash: new Uint8Array(),
    sigs: {}
  };
}
export const MultiSig = {
  encode(message: MultiSig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(18).bytes(message.payloadHash);
    }
    Object.entries(message.sigs).forEach(([key, value]) => {
      MultiSig_SigsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): MultiSig {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      sigs: isObject(object.sigs) ? Object.entries(object.sigs).reduce<{
        [key: string]: bytes;
      }>((acc, [key, value]) => {
        acc[key] = bytes.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<MultiSig>): MultiSig {
    const message = createBaseMultiSig();
    message.keyId = object.keyId ?? "";
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.sigs = Object.entries(object.sigs ?? {}).reduce<{
      [key: string]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bytes.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseSigningSession(): SigningSession {
  return {
    id: Long.UZERO,
    multiSig: undefined,
    state: 0,
    key: undefined,
    expiresAt: Long.ZERO,
    completedAt: Long.ZERO,
    gracePeriod: Long.ZERO,
    module: "",
    moduleMetadata: undefined
  };
}
export const SigningSession = {
  encode(message: SigningSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.multiSig !== undefined) {
      MultiSig.encode(message.multiSig, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(34).fork()).ldelim();
    }
    if (!message.expiresAt.isZero()) {
      writer.uint32(40).int64(message.expiresAt);
    }
    if (!message.completedAt.isZero()) {
      writer.uint32(48).int64(message.completedAt);
    }
    if (!message.gracePeriod.isZero()) {
      writer.uint32(56).int64(message.gracePeriod);
    }
    if (message.module !== "") {
      writer.uint32(66).string(message.module);
    }
    if (message.moduleMetadata !== undefined) {
      Any.encode(message.moduleMetadata, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SigningSession {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      multiSig: isSet(object.multiSig) ? MultiSig.fromJSON(object.multiSig) : undefined,
      state: isSet(object.state) ? multisigStateFromJSON(object.state) : 0,
      key: isSet(object.key) ? Key.fromJSON(object.key) : undefined,
      expiresAt: isSet(object.expiresAt) ? Long.fromValue(object.expiresAt) : Long.ZERO,
      completedAt: isSet(object.completedAt) ? Long.fromValue(object.completedAt) : Long.ZERO,
      gracePeriod: isSet(object.gracePeriod) ? Long.fromValue(object.gracePeriod) : Long.ZERO,
      module: isSet(object.module) ? String(object.module) : "",
      moduleMetadata: isSet(object.moduleMetadata) ? Any.fromJSON(object.moduleMetadata) : undefined
    };
  },
  fromPartial(object: Partial<SigningSession>): SigningSession {
    const message = createBaseSigningSession();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.multiSig = object.multiSig !== undefined && object.multiSig !== null ? MultiSig.fromPartial(object.multiSig) : undefined;
    message.state = object.state ?? 0;
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? Long.fromValue(object.expiresAt) : Long.ZERO;
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? Long.fromValue(object.completedAt) : Long.ZERO;
    message.gracePeriod = object.gracePeriod !== undefined && object.gracePeriod !== null ? Long.fromValue(object.gracePeriod) : Long.ZERO;
    message.module = object.module ?? "";
    message.moduleMetadata = object.moduleMetadata !== undefined && object.moduleMetadata !== null ? Any.fromPartial(object.moduleMetadata) : undefined;
    return message;
  }
};
function createBaseKeyEpoch(): KeyEpoch {
  return {
    epoch: Long.UZERO,
    chain: "",
    keyId: ""
  };
}
export const KeyEpoch = {
  encode(message: KeyEpoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epoch.isZero()) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): KeyEpoch {
    return {
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<KeyEpoch>): KeyEpoch {
    const message = createBaseKeyEpoch();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  }
};