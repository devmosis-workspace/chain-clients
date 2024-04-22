import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, isObject } from "../../../helpers";
export interface KeygenStarted {
  module: string;
  keyId: string;
  participants: Uint8Array[];
}
export interface KeygenStartedProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenStarted";
  value: Uint8Array;
}
export interface KeygenStartedAmino {
  module?: string;
  key_id?: string;
  participants?: string[];
}
export interface KeygenStartedAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenStarted";
  value: KeygenStartedAmino;
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
export interface KeygenCompletedProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenCompleted";
  value: Uint8Array;
}
export interface KeygenCompletedAmino {
  module?: string;
  key_id?: string;
}
export interface KeygenCompletedAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenCompleted";
  value: KeygenCompletedAmino;
}
export interface KeygenCompletedSDKType {
  module: string;
  key_id: string;
}
export interface KeygenExpired {
  module: string;
  keyId: string;
}
export interface KeygenExpiredProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenExpired";
  value: Uint8Array;
}
export interface KeygenExpiredAmino {
  module?: string;
  key_id?: string;
}
export interface KeygenExpiredAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenExpired";
  value: KeygenExpiredAmino;
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
export interface PubKeySubmittedProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.PubKeySubmitted";
  value: Uint8Array;
}
export interface PubKeySubmittedAmino {
  module?: string;
  key_id?: string;
  participant?: string;
  pub_key?: string;
}
export interface PubKeySubmittedAminoMsg {
  type: "/axelar.multisig.v1beta1.PubKeySubmitted";
  value: PubKeySubmittedAmino;
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
export interface SigningStarted_PubKeysEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface SigningStarted_PubKeysEntryAmino {
  key?: string;
  value?: string;
}
export interface SigningStarted_PubKeysEntryAminoMsg {
  type: string;
  value: SigningStarted_PubKeysEntryAmino;
}
export interface SigningStarted_PubKeysEntrySDKType {
  key: string;
  value: Uint8Array;
}
export interface SigningStarted {
  module: string;
  sigId: bigint;
  keyId: string;
  pubKeys: {
    [key: string]: Uint8Array;
  };
  payloadHash: Uint8Array;
  requestingModule: string;
}
export interface SigningStartedProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.SigningStarted";
  value: Uint8Array;
}
export interface SigningStartedAmino {
  module?: string;
  sig_id?: string;
  key_id?: string;
  pub_keys?: {
    [key: string]: string;
  };
  payload_hash?: string;
  requesting_module?: string;
}
export interface SigningStartedAminoMsg {
  type: "/axelar.multisig.v1beta1.SigningStarted";
  value: SigningStartedAmino;
}
export interface SigningStartedSDKType {
  module: string;
  sig_id: bigint;
  key_id: string;
  pub_keys: {
    [key: string]: Uint8Array;
  };
  payload_hash: Uint8Array;
  requesting_module: string;
}
export interface SigningCompleted {
  module: string;
  sigId: bigint;
}
export interface SigningCompletedProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.SigningCompleted";
  value: Uint8Array;
}
export interface SigningCompletedAmino {
  module?: string;
  sig_id?: string;
}
export interface SigningCompletedAminoMsg {
  type: "/axelar.multisig.v1beta1.SigningCompleted";
  value: SigningCompletedAmino;
}
export interface SigningCompletedSDKType {
  module: string;
  sig_id: bigint;
}
export interface SigningExpired {
  module: string;
  sigId: bigint;
}
export interface SigningExpiredProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.SigningExpired";
  value: Uint8Array;
}
export interface SigningExpiredAmino {
  module?: string;
  sig_id?: string;
}
export interface SigningExpiredAminoMsg {
  type: "/axelar.multisig.v1beta1.SigningExpired";
  value: SigningExpiredAmino;
}
export interface SigningExpiredSDKType {
  module: string;
  sig_id: bigint;
}
export interface SignatureSubmitted {
  module: string;
  sigId: bigint;
  participant: Uint8Array;
  signature: Uint8Array;
}
export interface SignatureSubmittedProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.SignatureSubmitted";
  value: Uint8Array;
}
export interface SignatureSubmittedAmino {
  module?: string;
  sig_id?: string;
  participant?: string;
  signature?: string;
}
export interface SignatureSubmittedAminoMsg {
  type: "/axelar.multisig.v1beta1.SignatureSubmitted";
  value: SignatureSubmittedAmino;
}
export interface SignatureSubmittedSDKType {
  module: string;
  sig_id: bigint;
  participant: Uint8Array;
  signature: Uint8Array;
}
export interface KeyAssigned {
  module: string;
  chain: string;
  keyId: string;
}
export interface KeyAssignedProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeyAssigned";
  value: Uint8Array;
}
export interface KeyAssignedAmino {
  module?: string;
  chain?: string;
  key_id?: string;
}
export interface KeyAssignedAminoMsg {
  type: "/axelar.multisig.v1beta1.KeyAssigned";
  value: KeyAssignedAmino;
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
export interface KeyRotatedProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeyRotated";
  value: Uint8Array;
}
export interface KeyRotatedAmino {
  module?: string;
  chain?: string;
  key_id?: string;
}
export interface KeyRotatedAminoMsg {
  type: "/axelar.multisig.v1beta1.KeyRotated";
  value: KeyRotatedAmino;
}
export interface KeyRotatedSDKType {
  module: string;
  chain: string;
  key_id: string;
}
export interface KeygenOptOut {
  participant: Uint8Array;
}
export interface KeygenOptOutProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptOut";
  value: Uint8Array;
}
export interface KeygenOptOutAmino {
  participant?: string;
}
export interface KeygenOptOutAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenOptOut";
  value: KeygenOptOutAmino;
}
export interface KeygenOptOutSDKType {
  participant: Uint8Array;
}
export interface KeygenOptIn {
  participant: Uint8Array;
}
export interface KeygenOptInProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptIn";
  value: Uint8Array;
}
export interface KeygenOptInAmino {
  participant?: string;
}
export interface KeygenOptInAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenOptIn";
  value: KeygenOptInAmino;
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
  typeUrl: "/axelar.multisig.v1beta1.KeygenStarted",
  encode(message: KeygenStarted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: KeygenStartedAmino): KeygenStarted {
    const message = createBaseKeygenStarted();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    message.participants = object.participants?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: KeygenStarted): KeygenStartedAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.key_id = message.keyId;
    if (message.participants) {
      obj.participants = message.participants.map(e => base64FromBytes(e));
    } else {
      obj.participants = [];
    }
    return obj;
  },
  fromAminoMsg(object: KeygenStartedAminoMsg): KeygenStarted {
    return KeygenStarted.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenStartedProtoMsg): KeygenStarted {
    return KeygenStarted.decode(message.value);
  },
  toProto(message: KeygenStarted): Uint8Array {
    return KeygenStarted.encode(message).finish();
  },
  toProtoMsg(message: KeygenStarted): KeygenStartedProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenStarted",
      value: KeygenStarted.encode(message).finish()
    };
  }
};
function createBaseKeygenCompleted(): KeygenCompleted {
  return {
    module: "",
    keyId: ""
  };
}
export const KeygenCompleted = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenCompleted",
  encode(message: KeygenCompleted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: KeygenCompletedAmino): KeygenCompleted {
    const message = createBaseKeygenCompleted();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    return message;
  },
  toAmino(message: KeygenCompleted): KeygenCompletedAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: KeygenCompletedAminoMsg): KeygenCompleted {
    return KeygenCompleted.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenCompletedProtoMsg): KeygenCompleted {
    return KeygenCompleted.decode(message.value);
  },
  toProto(message: KeygenCompleted): Uint8Array {
    return KeygenCompleted.encode(message).finish();
  },
  toProtoMsg(message: KeygenCompleted): KeygenCompletedProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenCompleted",
      value: KeygenCompleted.encode(message).finish()
    };
  }
};
function createBaseKeygenExpired(): KeygenExpired {
  return {
    module: "",
    keyId: ""
  };
}
export const KeygenExpired = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenExpired",
  encode(message: KeygenExpired, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: KeygenExpiredAmino): KeygenExpired {
    const message = createBaseKeygenExpired();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    return message;
  },
  toAmino(message: KeygenExpired): KeygenExpiredAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: KeygenExpiredAminoMsg): KeygenExpired {
    return KeygenExpired.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenExpiredProtoMsg): KeygenExpired {
    return KeygenExpired.decode(message.value);
  },
  toProto(message: KeygenExpired): Uint8Array {
    return KeygenExpired.encode(message).finish();
  },
  toProtoMsg(message: KeygenExpired): KeygenExpiredProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenExpired",
      value: KeygenExpired.encode(message).finish()
    };
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
  typeUrl: "/axelar.multisig.v1beta1.PubKeySubmitted",
  encode(message: PubKeySubmitted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PubKeySubmittedAmino): PubKeySubmitted {
    const message = createBasePubKeySubmitted();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = bytesFromBase64(object.participant);
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    return message;
  },
  toAmino(message: PubKeySubmitted): PubKeySubmittedAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.key_id = message.keyId;
    obj.participant = message.participant ? base64FromBytes(message.participant) : undefined;
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: PubKeySubmittedAminoMsg): PubKeySubmitted {
    return PubKeySubmitted.fromAmino(object.value);
  },
  fromProtoMsg(message: PubKeySubmittedProtoMsg): PubKeySubmitted {
    return PubKeySubmitted.decode(message.value);
  },
  toProto(message: PubKeySubmitted): Uint8Array {
    return PubKeySubmitted.encode(message).finish();
  },
  toProtoMsg(message: PubKeySubmitted): PubKeySubmittedProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.PubKeySubmitted",
      value: PubKeySubmitted.encode(message).finish()
    };
  }
};
function createBaseSigningStarted_PubKeysEntry(): SigningStarted_PubKeysEntry {
  return {
    key: "",
    value: new Uint8Array()
  };
}
export const SigningStarted_PubKeysEntry = {
  encode(message: SigningStarted_PubKeysEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SigningStarted_PubKeysEntryAmino): SigningStarted_PubKeysEntry {
    const message = createBaseSigningStarted_PubKeysEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: SigningStarted_PubKeysEntry): SigningStarted_PubKeysEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: SigningStarted_PubKeysEntryAminoMsg): SigningStarted_PubKeysEntry {
    return SigningStarted_PubKeysEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: SigningStarted_PubKeysEntryProtoMsg): SigningStarted_PubKeysEntry {
    return SigningStarted_PubKeysEntry.decode(message.value);
  },
  toProto(message: SigningStarted_PubKeysEntry): Uint8Array {
    return SigningStarted_PubKeysEntry.encode(message).finish();
  }
};
function createBaseSigningStarted(): SigningStarted {
  return {
    module: "",
    sigId: BigInt(0),
    keyId: "",
    pubKeys: {},
    payloadHash: new Uint8Array(),
    requestingModule: ""
  };
}
export const SigningStarted = {
  typeUrl: "/axelar.multisig.v1beta1.SigningStarted",
  encode(message: SigningStarted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.sigId !== BigInt(0)) {
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
      sigId: isSet(object.sigId) ? BigInt(object.sigId.toString()) : BigInt(0),
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
    message.sigId = object.sigId !== undefined && object.sigId !== null ? BigInt(object.sigId.toString()) : BigInt(0);
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
  },
  fromAmino(object: SigningStartedAmino): SigningStarted {
    const message = createBaseSigningStarted();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.sig_id !== undefined && object.sig_id !== null) {
      message.sigId = BigInt(object.sig_id);
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    message.pubKeys = Object.entries(object.pub_keys ?? {}).reduce<{
      [key: string]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bytes.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.payload_hash !== undefined && object.payload_hash !== null) {
      message.payloadHash = bytesFromBase64(object.payload_hash);
    }
    if (object.requesting_module !== undefined && object.requesting_module !== null) {
      message.requestingModule = object.requesting_module;
    }
    return message;
  },
  toAmino(message: SigningStarted): SigningStartedAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.sig_id = message.sigId ? message.sigId.toString() : undefined;
    obj.key_id = message.keyId;
    obj.pub_keys = {};
    if (message.pubKeys) {
      Object.entries(message.pubKeys).forEach(([k, v]) => {
        obj.pub_keys[k] = bytes.toAmino(v);
      });
    }
    obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
    obj.requesting_module = message.requestingModule;
    return obj;
  },
  fromAminoMsg(object: SigningStartedAminoMsg): SigningStarted {
    return SigningStarted.fromAmino(object.value);
  },
  fromProtoMsg(message: SigningStartedProtoMsg): SigningStarted {
    return SigningStarted.decode(message.value);
  },
  toProto(message: SigningStarted): Uint8Array {
    return SigningStarted.encode(message).finish();
  },
  toProtoMsg(message: SigningStarted): SigningStartedProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.SigningStarted",
      value: SigningStarted.encode(message).finish()
    };
  }
};
function createBaseSigningCompleted(): SigningCompleted {
  return {
    module: "",
    sigId: BigInt(0)
  };
}
export const SigningCompleted = {
  typeUrl: "/axelar.multisig.v1beta1.SigningCompleted",
  encode(message: SigningCompleted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.sigId !== BigInt(0)) {
      writer.uint32(16).uint64(message.sigId);
    }
    return writer;
  },
  fromJSON(object: any): SigningCompleted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      sigId: isSet(object.sigId) ? BigInt(object.sigId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<SigningCompleted>): SigningCompleted {
    const message = createBaseSigningCompleted();
    message.module = object.module ?? "";
    message.sigId = object.sigId !== undefined && object.sigId !== null ? BigInt(object.sigId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SigningCompletedAmino): SigningCompleted {
    const message = createBaseSigningCompleted();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.sig_id !== undefined && object.sig_id !== null) {
      message.sigId = BigInt(object.sig_id);
    }
    return message;
  },
  toAmino(message: SigningCompleted): SigningCompletedAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.sig_id = message.sigId ? message.sigId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SigningCompletedAminoMsg): SigningCompleted {
    return SigningCompleted.fromAmino(object.value);
  },
  fromProtoMsg(message: SigningCompletedProtoMsg): SigningCompleted {
    return SigningCompleted.decode(message.value);
  },
  toProto(message: SigningCompleted): Uint8Array {
    return SigningCompleted.encode(message).finish();
  },
  toProtoMsg(message: SigningCompleted): SigningCompletedProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.SigningCompleted",
      value: SigningCompleted.encode(message).finish()
    };
  }
};
function createBaseSigningExpired(): SigningExpired {
  return {
    module: "",
    sigId: BigInt(0)
  };
}
export const SigningExpired = {
  typeUrl: "/axelar.multisig.v1beta1.SigningExpired",
  encode(message: SigningExpired, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.sigId !== BigInt(0)) {
      writer.uint32(16).uint64(message.sigId);
    }
    return writer;
  },
  fromJSON(object: any): SigningExpired {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      sigId: isSet(object.sigId) ? BigInt(object.sigId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<SigningExpired>): SigningExpired {
    const message = createBaseSigningExpired();
    message.module = object.module ?? "";
    message.sigId = object.sigId !== undefined && object.sigId !== null ? BigInt(object.sigId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SigningExpiredAmino): SigningExpired {
    const message = createBaseSigningExpired();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.sig_id !== undefined && object.sig_id !== null) {
      message.sigId = BigInt(object.sig_id);
    }
    return message;
  },
  toAmino(message: SigningExpired): SigningExpiredAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.sig_id = message.sigId ? message.sigId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SigningExpiredAminoMsg): SigningExpired {
    return SigningExpired.fromAmino(object.value);
  },
  fromProtoMsg(message: SigningExpiredProtoMsg): SigningExpired {
    return SigningExpired.decode(message.value);
  },
  toProto(message: SigningExpired): Uint8Array {
    return SigningExpired.encode(message).finish();
  },
  toProtoMsg(message: SigningExpired): SigningExpiredProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.SigningExpired",
      value: SigningExpired.encode(message).finish()
    };
  }
};
function createBaseSignatureSubmitted(): SignatureSubmitted {
  return {
    module: "",
    sigId: BigInt(0),
    participant: new Uint8Array(),
    signature: new Uint8Array()
  };
}
export const SignatureSubmitted = {
  typeUrl: "/axelar.multisig.v1beta1.SignatureSubmitted",
  encode(message: SignatureSubmitted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.sigId !== BigInt(0)) {
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
      sigId: isSet(object.sigId) ? BigInt(object.sigId.toString()) : BigInt(0),
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SignatureSubmitted>): SignatureSubmitted {
    const message = createBaseSignatureSubmitted();
    message.module = object.module ?? "";
    message.sigId = object.sigId !== undefined && object.sigId !== null ? BigInt(object.sigId.toString()) : BigInt(0);
    message.participant = object.participant ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SignatureSubmittedAmino): SignatureSubmitted {
    const message = createBaseSignatureSubmitted();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.sig_id !== undefined && object.sig_id !== null) {
      message.sigId = BigInt(object.sig_id);
    }
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = bytesFromBase64(object.participant);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: SignatureSubmitted): SignatureSubmittedAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.sig_id = message.sigId ? message.sigId.toString() : undefined;
    obj.participant = message.participant ? base64FromBytes(message.participant) : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: SignatureSubmittedAminoMsg): SignatureSubmitted {
    return SignatureSubmitted.fromAmino(object.value);
  },
  fromProtoMsg(message: SignatureSubmittedProtoMsg): SignatureSubmitted {
    return SignatureSubmitted.decode(message.value);
  },
  toProto(message: SignatureSubmitted): Uint8Array {
    return SignatureSubmitted.encode(message).finish();
  },
  toProtoMsg(message: SignatureSubmitted): SignatureSubmittedProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.SignatureSubmitted",
      value: SignatureSubmitted.encode(message).finish()
    };
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
  typeUrl: "/axelar.multisig.v1beta1.KeyAssigned",
  encode(message: KeyAssigned, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: KeyAssignedAmino): KeyAssigned {
    const message = createBaseKeyAssigned();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    return message;
  },
  toAmino(message: KeyAssigned): KeyAssignedAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.chain = message.chain;
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: KeyAssignedAminoMsg): KeyAssigned {
    return KeyAssigned.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyAssignedProtoMsg): KeyAssigned {
    return KeyAssigned.decode(message.value);
  },
  toProto(message: KeyAssigned): Uint8Array {
    return KeyAssigned.encode(message).finish();
  },
  toProtoMsg(message: KeyAssigned): KeyAssignedProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeyAssigned",
      value: KeyAssigned.encode(message).finish()
    };
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
  typeUrl: "/axelar.multisig.v1beta1.KeyRotated",
  encode(message: KeyRotated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: KeyRotatedAmino): KeyRotated {
    const message = createBaseKeyRotated();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    return message;
  },
  toAmino(message: KeyRotated): KeyRotatedAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.chain = message.chain;
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: KeyRotatedAminoMsg): KeyRotated {
    return KeyRotated.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyRotatedProtoMsg): KeyRotated {
    return KeyRotated.decode(message.value);
  },
  toProto(message: KeyRotated): Uint8Array {
    return KeyRotated.encode(message).finish();
  },
  toProtoMsg(message: KeyRotated): KeyRotatedProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeyRotated",
      value: KeyRotated.encode(message).finish()
    };
  }
};
function createBaseKeygenOptOut(): KeygenOptOut {
  return {
    participant: new Uint8Array()
  };
}
export const KeygenOptOut = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptOut",
  encode(message: KeygenOptOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: KeygenOptOutAmino): KeygenOptOut {
    const message = createBaseKeygenOptOut();
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = bytesFromBase64(object.participant);
    }
    return message;
  },
  toAmino(message: KeygenOptOut): KeygenOptOutAmino {
    const obj: any = {};
    obj.participant = message.participant ? base64FromBytes(message.participant) : undefined;
    return obj;
  },
  fromAminoMsg(object: KeygenOptOutAminoMsg): KeygenOptOut {
    return KeygenOptOut.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenOptOutProtoMsg): KeygenOptOut {
    return KeygenOptOut.decode(message.value);
  },
  toProto(message: KeygenOptOut): Uint8Array {
    return KeygenOptOut.encode(message).finish();
  },
  toProtoMsg(message: KeygenOptOut): KeygenOptOutProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenOptOut",
      value: KeygenOptOut.encode(message).finish()
    };
  }
};
function createBaseKeygenOptIn(): KeygenOptIn {
  return {
    participant: new Uint8Array()
  };
}
export const KeygenOptIn = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptIn",
  encode(message: KeygenOptIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: KeygenOptInAmino): KeygenOptIn {
    const message = createBaseKeygenOptIn();
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = bytesFromBase64(object.participant);
    }
    return message;
  },
  toAmino(message: KeygenOptIn): KeygenOptInAmino {
    const obj: any = {};
    obj.participant = message.participant ? base64FromBytes(message.participant) : undefined;
    return obj;
  },
  fromAminoMsg(object: KeygenOptInAminoMsg): KeygenOptIn {
    return KeygenOptIn.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenOptInProtoMsg): KeygenOptIn {
    return KeygenOptIn.decode(message.value);
  },
  toProto(message: KeygenOptIn): Uint8Array {
    return KeygenOptIn.encode(message).finish();
  },
  toProtoMsg(message: KeygenOptIn): KeygenOptInProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenOptIn",
      value: KeygenOptIn.encode(message).finish()
    };
  }
};