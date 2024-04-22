import { Snapshot, SnapshotAmino, SnapshotSDKType } from "../../snapshot/exported/v1beta1/types";
import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { KeyState, MultisigState, keyStateFromJSON, multisigStateFromJSON } from "../exported/v1beta1/types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, isObject } from "../../../helpers";
export interface Key_PubKeysEntry {
  key: string;
  value: Uint8Array;
}
export interface Key_PubKeysEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface Key_PubKeysEntryAmino {
  key?: string;
  value?: string;
}
export interface Key_PubKeysEntryAminoMsg {
  type: string;
  value: Key_PubKeysEntryAmino;
}
export interface Key_PubKeysEntrySDKType {
  key: string;
  value: Uint8Array;
}
export interface Key {
  id: string;
  snapshot: Snapshot;
  pubKeys: {
    [key: string]: Uint8Array;
  };
  signingThreshold: Threshold;
  state: KeyState;
}
export interface KeyProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  id?: string;
  snapshot?: SnapshotAmino;
  pub_keys?: {
    [key: string]: string;
  };
  signing_threshold?: ThresholdAmino;
  state?: KeyState;
}
export interface KeyAminoMsg {
  type: "/axelar.multisig.v1beta1.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  id: string;
  snapshot: SnapshotSDKType;
  pub_keys: {
    [key: string]: Uint8Array;
  };
  signing_threshold: ThresholdSDKType;
  state: KeyState;
}
export interface KeygenSession_IsPubKeyReceivedEntry {
  key: string;
  value: boolean;
}
export interface KeygenSession_IsPubKeyReceivedEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface KeygenSession_IsPubKeyReceivedEntryAmino {
  key?: string;
  value?: boolean;
}
export interface KeygenSession_IsPubKeyReceivedEntryAminoMsg {
  type: string;
  value: KeygenSession_IsPubKeyReceivedEntryAmino;
}
export interface KeygenSession_IsPubKeyReceivedEntrySDKType {
  key: string;
  value: boolean;
}
export interface KeygenSession {
  key: Key;
  state: MultisigState;
  keygenThreshold: Threshold;
  expiresAt: bigint;
  completedAt: bigint;
  isPubKeyReceived: {
    [key: string]: boolean;
  };
  gracePeriod: bigint;
}
export interface KeygenSessionProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenSession";
  value: Uint8Array;
}
export interface KeygenSessionAmino {
  key?: KeyAmino;
  state?: MultisigState;
  keygen_threshold?: ThresholdAmino;
  expires_at?: string;
  completed_at?: string;
  is_pub_key_received?: {
    [key: string]: boolean;
  };
  grace_period?: string;
}
export interface KeygenSessionAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenSession";
  value: KeygenSessionAmino;
}
export interface KeygenSessionSDKType {
  key: KeySDKType;
  state: MultisigState;
  keygen_threshold: ThresholdSDKType;
  expires_at: bigint;
  completed_at: bigint;
  is_pub_key_received: {
    [key: string]: boolean;
  };
  grace_period: bigint;
}
export interface MultiSig_SigsEntry {
  key: string;
  value: Uint8Array;
}
export interface MultiSig_SigsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface MultiSig_SigsEntryAmino {
  key?: string;
  value?: string;
}
export interface MultiSig_SigsEntryAminoMsg {
  type: string;
  value: MultiSig_SigsEntryAmino;
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
export interface MultiSigProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.MultiSig";
  value: Uint8Array;
}
export interface MultiSigAmino {
  key_id?: string;
  payload_hash?: string;
  sigs?: {
    [key: string]: string;
  };
}
export interface MultiSigAminoMsg {
  type: "/axelar.multisig.v1beta1.MultiSig";
  value: MultiSigAmino;
}
export interface MultiSigSDKType {
  key_id: string;
  payload_hash: Uint8Array;
  sigs: {
    [key: string]: Uint8Array;
  };
}
export interface SigningSession {
  id: bigint;
  multiSig: MultiSig;
  state: MultisigState;
  key: Key;
  expiresAt: bigint;
  completedAt: bigint;
  gracePeriod: bigint;
  module: string;
  moduleMetadata?: (Any) | undefined;
}
export interface SigningSessionProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.SigningSession";
  value: Uint8Array;
}
export type SigningSessionEncoded = Omit<SigningSession, "moduleMetadata"> & {
  moduleMetadata?: AnyProtoMsg | undefined;
};
export interface SigningSessionAmino {
  id?: string;
  multi_sig?: MultiSigAmino;
  state?: MultisigState;
  key?: KeyAmino;
  expires_at?: string;
  completed_at?: string;
  grace_period?: string;
  module?: string;
  module_metadata?: AnyAmino;
}
export interface SigningSessionAminoMsg {
  type: "/axelar.multisig.v1beta1.SigningSession";
  value: SigningSessionAmino;
}
export interface SigningSessionSDKType {
  id: bigint;
  multi_sig: MultiSigSDKType;
  state: MultisigState;
  key: KeySDKType;
  expires_at: bigint;
  completed_at: bigint;
  grace_period: bigint;
  module: string;
  module_metadata?: AnySDKType | undefined;
}
export interface KeyEpoch {
  epoch: bigint;
  chain: string;
  keyId: string;
}
export interface KeyEpochProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeyEpoch";
  value: Uint8Array;
}
export interface KeyEpochAmino {
  epoch?: string;
  chain?: string;
  key_id?: string;
}
export interface KeyEpochAminoMsg {
  type: "/axelar.multisig.v1beta1.KeyEpoch";
  value: KeyEpochAmino;
}
export interface KeyEpochSDKType {
  epoch: bigint;
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
  encode(message: Key_PubKeysEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: Key_PubKeysEntryAmino): Key_PubKeysEntry {
    const message = createBaseKey_PubKeysEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: Key_PubKeysEntry): Key_PubKeysEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: Key_PubKeysEntryAminoMsg): Key_PubKeysEntry {
    return Key_PubKeysEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Key_PubKeysEntryProtoMsg): Key_PubKeysEntry {
    return Key_PubKeysEntry.decode(message.value);
  },
  toProto(message: Key_PubKeysEntry): Uint8Array {
    return Key_PubKeysEntry.encode(message).finish();
  }
};
function createBaseKey(): Key {
  return {
    id: "",
    snapshot: Snapshot.fromPartial({}),
    pubKeys: {},
    signingThreshold: Threshold.fromPartial({}),
    state: 0
  };
}
export const Key = {
  typeUrl: "/axelar.multisig.v1beta1.Key",
  encode(message: Key, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      state: isSet(object.state) ? keyStateFromJSON(object.state) : -1
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
  },
  fromAmino(object: KeyAmino): Key {
    const message = createBaseKey();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = Snapshot.fromAmino(object.snapshot);
    }
    message.pubKeys = Object.entries(object.pub_keys ?? {}).reduce<{
      [key: string]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bytes.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.signing_threshold !== undefined && object.signing_threshold !== null) {
      message.signingThreshold = Threshold.fromAmino(object.signing_threshold);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = keyStateFromJSON(object.state);
    }
    return message;
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.snapshot = message.snapshot ? Snapshot.toAmino(message.snapshot) : undefined;
    obj.pub_keys = {};
    if (message.pubKeys) {
      Object.entries(message.pubKeys).forEach(([k, v]) => {
        obj.pub_keys[k] = bytes.toAmino(v);
      });
    }
    obj.signing_threshold = message.signingThreshold ? Threshold.toAmino(message.signingThreshold) : undefined;
    obj.state = message.state;
    return obj;
  },
  fromAminoMsg(object: KeyAminoMsg): Key {
    return Key.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyProtoMsg): Key {
    return Key.decode(message.value);
  },
  toProto(message: Key): Uint8Array {
    return Key.encode(message).finish();
  },
  toProtoMsg(message: Key): KeyProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.Key",
      value: Key.encode(message).finish()
    };
  }
};
function createBaseKeygenSession_IsPubKeyReceivedEntry(): KeygenSession_IsPubKeyReceivedEntry {
  return {
    key: "",
    value: false
  };
}
export const KeygenSession_IsPubKeyReceivedEntry = {
  encode(message: KeygenSession_IsPubKeyReceivedEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: KeygenSession_IsPubKeyReceivedEntryAmino): KeygenSession_IsPubKeyReceivedEntry {
    const message = createBaseKeygenSession_IsPubKeyReceivedEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: KeygenSession_IsPubKeyReceivedEntry): KeygenSession_IsPubKeyReceivedEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: KeygenSession_IsPubKeyReceivedEntryAminoMsg): KeygenSession_IsPubKeyReceivedEntry {
    return KeygenSession_IsPubKeyReceivedEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenSession_IsPubKeyReceivedEntryProtoMsg): KeygenSession_IsPubKeyReceivedEntry {
    return KeygenSession_IsPubKeyReceivedEntry.decode(message.value);
  },
  toProto(message: KeygenSession_IsPubKeyReceivedEntry): Uint8Array {
    return KeygenSession_IsPubKeyReceivedEntry.encode(message).finish();
  }
};
function createBaseKeygenSession(): KeygenSession {
  return {
    key: Key.fromPartial({}),
    state: 0,
    keygenThreshold: Threshold.fromPartial({}),
    expiresAt: BigInt(0),
    completedAt: BigInt(0),
    isPubKeyReceived: {},
    gracePeriod: BigInt(0)
  };
}
export const KeygenSession = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenSession",
  encode(message: KeygenSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.keygenThreshold !== undefined) {
      Threshold.encode(message.keygenThreshold, writer.uint32(26).fork()).ldelim();
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(32).int64(message.expiresAt);
    }
    if (message.completedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.completedAt);
    }
    Object.entries(message.isPubKeyReceived).forEach(([key, value]) => {
      KeygenSession_IsPubKeyReceivedEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(48).fork()).ldelim();
    });
    if (message.gracePeriod !== BigInt(0)) {
      writer.uint32(56).int64(message.gracePeriod);
    }
    return writer;
  },
  fromJSON(object: any): KeygenSession {
    return {
      key: isSet(object.key) ? Key.fromJSON(object.key) : undefined,
      state: isSet(object.state) ? multisigStateFromJSON(object.state) : -1,
      keygenThreshold: isSet(object.keygenThreshold) ? Threshold.fromJSON(object.keygenThreshold) : undefined,
      expiresAt: isSet(object.expiresAt) ? BigInt(object.expiresAt.toString()) : BigInt(0),
      completedAt: isSet(object.completedAt) ? BigInt(object.completedAt.toString()) : BigInt(0),
      isPubKeyReceived: isObject(object.isPubKeyReceived) ? Object.entries(object.isPubKeyReceived).reduce<{
        [key: string]: bool;
      }>((acc, [key, value]) => {
        acc[key] = bool.fromJSON(value);
        return acc;
      }, {}) : {},
      gracePeriod: isSet(object.gracePeriod) ? BigInt(object.gracePeriod.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<KeygenSession>): KeygenSession {
    const message = createBaseKeygenSession();
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
    message.state = object.state ?? 0;
    message.keygenThreshold = object.keygenThreshold !== undefined && object.keygenThreshold !== null ? Threshold.fromPartial(object.keygenThreshold) : undefined;
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? BigInt(object.completedAt.toString()) : BigInt(0);
    message.isPubKeyReceived = Object.entries(object.isPubKeyReceived ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromPartial(value);
      }
      return acc;
    }, {});
    message.gracePeriod = object.gracePeriod !== undefined && object.gracePeriod !== null ? BigInt(object.gracePeriod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: KeygenSessionAmino): KeygenSession {
    const message = createBaseKeygenSession();
    if (object.key !== undefined && object.key !== null) {
      message.key = Key.fromAmino(object.key);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = multisigStateFromJSON(object.state);
    }
    if (object.keygen_threshold !== undefined && object.keygen_threshold !== null) {
      message.keygenThreshold = Threshold.fromAmino(object.keygen_threshold);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.completed_at !== undefined && object.completed_at !== null) {
      message.completedAt = BigInt(object.completed_at);
    }
    message.isPubKeyReceived = Object.entries(object.is_pub_key_received ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.grace_period !== undefined && object.grace_period !== null) {
      message.gracePeriod = BigInt(object.grace_period);
    }
    return message;
  },
  toAmino(message: KeygenSession): KeygenSessionAmino {
    const obj: any = {};
    obj.key = message.key ? Key.toAmino(message.key) : undefined;
    obj.state = message.state;
    obj.keygen_threshold = message.keygenThreshold ? Threshold.toAmino(message.keygenThreshold) : undefined;
    obj.expires_at = message.expiresAt ? message.expiresAt.toString() : undefined;
    obj.completed_at = message.completedAt ? message.completedAt.toString() : undefined;
    obj.is_pub_key_received = {};
    if (message.isPubKeyReceived) {
      Object.entries(message.isPubKeyReceived).forEach(([k, v]) => {
        obj.is_pub_key_received[k] = bool.toAmino(v);
      });
    }
    obj.grace_period = message.gracePeriod ? message.gracePeriod.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: KeygenSessionAminoMsg): KeygenSession {
    return KeygenSession.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenSessionProtoMsg): KeygenSession {
    return KeygenSession.decode(message.value);
  },
  toProto(message: KeygenSession): Uint8Array {
    return KeygenSession.encode(message).finish();
  },
  toProtoMsg(message: KeygenSession): KeygenSessionProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenSession",
      value: KeygenSession.encode(message).finish()
    };
  }
};
function createBaseMultiSig_SigsEntry(): MultiSig_SigsEntry {
  return {
    key: "",
    value: new Uint8Array()
  };
}
export const MultiSig_SigsEntry = {
  encode(message: MultiSig_SigsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MultiSig_SigsEntryAmino): MultiSig_SigsEntry {
    const message = createBaseMultiSig_SigsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: MultiSig_SigsEntry): MultiSig_SigsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: MultiSig_SigsEntryAminoMsg): MultiSig_SigsEntry {
    return MultiSig_SigsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiSig_SigsEntryProtoMsg): MultiSig_SigsEntry {
    return MultiSig_SigsEntry.decode(message.value);
  },
  toProto(message: MultiSig_SigsEntry): Uint8Array {
    return MultiSig_SigsEntry.encode(message).finish();
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
  typeUrl: "/axelar.multisig.v1beta1.MultiSig",
  encode(message: MultiSig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MultiSigAmino): MultiSig {
    const message = createBaseMultiSig();
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    if (object.payload_hash !== undefined && object.payload_hash !== null) {
      message.payloadHash = bytesFromBase64(object.payload_hash);
    }
    message.sigs = Object.entries(object.sigs ?? {}).reduce<{
      [key: string]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bytes.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: MultiSig): MultiSigAmino {
    const obj: any = {};
    obj.key_id = message.keyId;
    obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
    obj.sigs = {};
    if (message.sigs) {
      Object.entries(message.sigs).forEach(([k, v]) => {
        obj.sigs[k] = bytes.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: MultiSigAminoMsg): MultiSig {
    return MultiSig.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiSigProtoMsg): MultiSig {
    return MultiSig.decode(message.value);
  },
  toProto(message: MultiSig): Uint8Array {
    return MultiSig.encode(message).finish();
  },
  toProtoMsg(message: MultiSig): MultiSigProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.MultiSig",
      value: MultiSig.encode(message).finish()
    };
  }
};
function createBaseSigningSession(): SigningSession {
  return {
    id: BigInt(0),
    multiSig: MultiSig.fromPartial({}),
    state: 0,
    key: Key.fromPartial({}),
    expiresAt: BigInt(0),
    completedAt: BigInt(0),
    gracePeriod: BigInt(0),
    module: "",
    moduleMetadata: undefined
  };
}
export const SigningSession = {
  typeUrl: "/axelar.multisig.v1beta1.SigningSession",
  encode(message: SigningSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
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
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(40).int64(message.expiresAt);
    }
    if (message.completedAt !== BigInt(0)) {
      writer.uint32(48).int64(message.completedAt);
    }
    if (message.gracePeriod !== BigInt(0)) {
      writer.uint32(56).int64(message.gracePeriod);
    }
    if (message.module !== "") {
      writer.uint32(66).string(message.module);
    }
    if (message.moduleMetadata !== undefined) {
      Any.encode((message.moduleMetadata as Any), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SigningSession {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      multiSig: isSet(object.multiSig) ? MultiSig.fromJSON(object.multiSig) : undefined,
      state: isSet(object.state) ? multisigStateFromJSON(object.state) : -1,
      key: isSet(object.key) ? Key.fromJSON(object.key) : undefined,
      expiresAt: isSet(object.expiresAt) ? BigInt(object.expiresAt.toString()) : BigInt(0),
      completedAt: isSet(object.completedAt) ? BigInt(object.completedAt.toString()) : BigInt(0),
      gracePeriod: isSet(object.gracePeriod) ? BigInt(object.gracePeriod.toString()) : BigInt(0),
      module: isSet(object.module) ? String(object.module) : "",
      moduleMetadata: isSet(object.moduleMetadata) ? Any.fromJSON(object.moduleMetadata) : undefined
    };
  },
  fromPartial(object: Partial<SigningSession>): SigningSession {
    const message = createBaseSigningSession();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.multiSig = object.multiSig !== undefined && object.multiSig !== null ? MultiSig.fromPartial(object.multiSig) : undefined;
    message.state = object.state ?? 0;
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? BigInt(object.completedAt.toString()) : BigInt(0);
    message.gracePeriod = object.gracePeriod !== undefined && object.gracePeriod !== null ? BigInt(object.gracePeriod.toString()) : BigInt(0);
    message.module = object.module ?? "";
    message.moduleMetadata = object.moduleMetadata !== undefined && object.moduleMetadata !== null ? Any.fromPartial(object.moduleMetadata) : undefined;
    return message;
  },
  fromAmino(object: SigningSessionAmino): SigningSession {
    const message = createBaseSigningSession();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.multi_sig !== undefined && object.multi_sig !== null) {
      message.multiSig = MultiSig.fromAmino(object.multi_sig);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = multisigStateFromJSON(object.state);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = Key.fromAmino(object.key);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.completed_at !== undefined && object.completed_at !== null) {
      message.completedAt = BigInt(object.completed_at);
    }
    if (object.grace_period !== undefined && object.grace_period !== null) {
      message.gracePeriod = BigInt(object.grace_period);
    }
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.module_metadata !== undefined && object.module_metadata !== null) {
      message.moduleMetadata = Github_com_cosmos_codec_ProtoMarshaler_FromAmino(object.module_metadata);
    }
    return message;
  },
  toAmino(message: SigningSession): SigningSessionAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.multi_sig = message.multiSig ? MultiSig.toAmino(message.multiSig) : undefined;
    obj.state = message.state;
    obj.key = message.key ? Key.toAmino(message.key) : undefined;
    obj.expires_at = message.expiresAt ? message.expiresAt.toString() : undefined;
    obj.completed_at = message.completedAt ? message.completedAt.toString() : undefined;
    obj.grace_period = message.gracePeriod ? message.gracePeriod.toString() : undefined;
    obj.module = message.module;
    obj.module_metadata = message.moduleMetadata ? Github_com_cosmos_codec_ProtoMarshaler_ToAmino((message.moduleMetadata as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: SigningSessionAminoMsg): SigningSession {
    return SigningSession.fromAmino(object.value);
  },
  fromProtoMsg(message: SigningSessionProtoMsg): SigningSession {
    return SigningSession.decode(message.value);
  },
  toProto(message: SigningSession): Uint8Array {
    return SigningSession.encode(message).finish();
  },
  toProtoMsg(message: SigningSession): SigningSessionProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.SigningSession",
      value: SigningSession.encode(message).finish()
    };
  }
};
function createBaseKeyEpoch(): KeyEpoch {
  return {
    epoch: BigInt(0),
    chain: "",
    keyId: ""
  };
}
export const KeyEpoch = {
  typeUrl: "/axelar.multisig.v1beta1.KeyEpoch",
  encode(message: KeyEpoch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
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
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<KeyEpoch>): KeyEpoch {
    const message = createBaseKeyEpoch();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
  fromAmino(object: KeyEpochAmino): KeyEpoch {
    const message = createBaseKeyEpoch();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    return message;
  },
  toAmino(message: KeyEpoch): KeyEpochAmino {
    const obj: any = {};
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.chain = message.chain;
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: KeyEpochAminoMsg): KeyEpoch {
    return KeyEpoch.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyEpochProtoMsg): KeyEpoch {
    return KeyEpoch.decode(message.value);
  },
  toProto(message: KeyEpoch): Uint8Array {
    return KeyEpoch.encode(message).finish();
  },
  toProtoMsg(message: KeyEpoch): KeyEpochProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeyEpoch",
      value: KeyEpoch.encode(message).finish()
    };
  }
};
export const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Github_com_cosmos_codec_ProtoMarshaler_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const Github_com_cosmos_codec_ProtoMarshaler_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};