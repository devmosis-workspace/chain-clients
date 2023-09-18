import { KeyRole, KeyType, keyRoleFromJSON, keyTypeFromJSON } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, isObject } from "../../../helpers";
export interface KeygenVoteData {
  pubKey: Uint8Array;
  groupRecoveryInfo: Uint8Array;
}
export interface KeygenVoteDataProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.KeygenVoteData";
  value: Uint8Array;
}
export interface KeygenVoteDataAmino {
  pub_key: Uint8Array;
  group_recovery_info: Uint8Array;
}
export interface KeygenVoteDataAminoMsg {
  type: "/axelar.tss.v1beta1.KeygenVoteData";
  value: KeygenVoteDataAmino;
}
export interface KeygenVoteDataSDKType {
  pub_key: Uint8Array;
  group_recovery_info: Uint8Array;
}
/** KeyInfo holds information about a key */
export interface KeyInfo {
  keyId: string;
  keyRole: KeyRole;
  keyType: KeyType;
}
export interface KeyInfoProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.KeyInfo";
  value: Uint8Array;
}
/** KeyInfo holds information about a key */
export interface KeyInfoAmino {
  key_id: string;
  key_role: KeyRole;
  key_type: KeyType;
}
export interface KeyInfoAminoMsg {
  type: "/axelar.tss.v1beta1.KeyInfo";
  value: KeyInfoAmino;
}
/** KeyInfo holds information about a key */
export interface KeyInfoSDKType {
  key_id: string;
  key_role: KeyRole;
  key_type: KeyType;
}
export interface MultisigInfo {
  id: string;
  timeout: bigint;
  targetNum: bigint;
  infos: MultisigInfo_Info[];
}
export interface MultisigInfoProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.MultisigInfo";
  value: Uint8Array;
}
export interface MultisigInfoAmino {
  id: string;
  timeout: string;
  target_num: string;
  infos: MultisigInfo_InfoAmino[];
}
export interface MultisigInfoAminoMsg {
  type: "/axelar.tss.v1beta1.MultisigInfo";
  value: MultisigInfoAmino;
}
export interface MultisigInfoSDKType {
  id: string;
  timeout: bigint;
  target_num: bigint;
  infos: MultisigInfo_InfoSDKType[];
}
export interface MultisigInfo_Info {
  participant: Uint8Array;
  data: Uint8Array[];
}
export interface MultisigInfo_InfoProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.Info";
  value: Uint8Array;
}
export interface MultisigInfo_InfoAmino {
  participant: Uint8Array;
  data: Uint8Array[];
}
export interface MultisigInfo_InfoAminoMsg {
  type: "/axelar.tss.v1beta1.Info";
  value: MultisigInfo_InfoAmino;
}
export interface MultisigInfo_InfoSDKType {
  participant: Uint8Array;
  data: Uint8Array[];
}
export interface KeyRecoveryInfo_PrivateEntry {
  key: string;
  value: Uint8Array;
}
export interface KeyRecoveryInfo_PrivateEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface KeyRecoveryInfo_PrivateEntryAmino {
  key: string;
  value: Uint8Array;
}
export interface KeyRecoveryInfo_PrivateEntryAminoMsg {
  type: string;
  value: KeyRecoveryInfo_PrivateEntryAmino;
}
export interface KeyRecoveryInfo_PrivateEntrySDKType {
  key: string;
  value: Uint8Array;
}
export interface KeyRecoveryInfo {
  keyId: string;
  public: Uint8Array;
  private: {
    [key: string]: Uint8Array;
  };
}
export interface KeyRecoveryInfoProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.KeyRecoveryInfo";
  value: Uint8Array;
}
export interface KeyRecoveryInfoAmino {
  key_id: string;
  public: Uint8Array;
  private: {
    [key: string]: Uint8Array;
  };
}
export interface KeyRecoveryInfoAminoMsg {
  type: "/axelar.tss.v1beta1.KeyRecoveryInfo";
  value: KeyRecoveryInfoAmino;
}
export interface KeyRecoveryInfoSDKType {
  key_id: string;
  public: Uint8Array;
  private: {
    [key: string]: Uint8Array;
  };
}
export interface ExternalKeys {
  chain: string;
  keyIds: string[];
}
export interface ExternalKeysProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.ExternalKeys";
  value: Uint8Array;
}
export interface ExternalKeysAmino {
  chain: string;
  key_ids: string[];
}
export interface ExternalKeysAminoMsg {
  type: "/axelar.tss.v1beta1.ExternalKeys";
  value: ExternalKeysAmino;
}
export interface ExternalKeysSDKType {
  chain: string;
  key_ids: string[];
}
export interface ValidatorStatus {
  validator: Uint8Array;
  suspendedUntil: bigint;
}
export interface ValidatorStatusProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.ValidatorStatus";
  value: Uint8Array;
}
export interface ValidatorStatusAmino {
  validator: Uint8Array;
  suspended_until: string;
}
export interface ValidatorStatusAminoMsg {
  type: "/axelar.tss.v1beta1.ValidatorStatus";
  value: ValidatorStatusAmino;
}
export interface ValidatorStatusSDKType {
  validator: Uint8Array;
  suspended_until: bigint;
}
function createBaseKeygenVoteData(): KeygenVoteData {
  return {
    pubKey: new Uint8Array(),
    groupRecoveryInfo: new Uint8Array()
  };
}
export const KeygenVoteData = {
  typeUrl: "/axelar.tss.v1beta1.KeygenVoteData",
  encode(message: KeygenVoteData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubKey.length !== 0) {
      writer.uint32(10).bytes(message.pubKey);
    }
    if (message.groupRecoveryInfo.length !== 0) {
      writer.uint32(18).bytes(message.groupRecoveryInfo);
    }
    return writer;
  },
  fromJSON(object: any): KeygenVoteData {
    return {
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      groupRecoveryInfo: isSet(object.groupRecoveryInfo) ? bytesFromBase64(object.groupRecoveryInfo) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<KeygenVoteData>): KeygenVoteData {
    const message = createBaseKeygenVoteData();
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.groupRecoveryInfo = object.groupRecoveryInfo ?? new Uint8Array();
    return message;
  },
  fromAmino(object: KeygenVoteDataAmino): KeygenVoteData {
    return {
      pubKey: object.pub_key,
      groupRecoveryInfo: object.group_recovery_info
    };
  },
  toAmino(message: KeygenVoteData): KeygenVoteDataAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey;
    obj.group_recovery_info = message.groupRecoveryInfo;
    return obj;
  },
  fromAminoMsg(object: KeygenVoteDataAminoMsg): KeygenVoteData {
    return KeygenVoteData.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenVoteDataProtoMsg): KeygenVoteData {
    return KeygenVoteData.decode(message.value);
  },
  toProto(message: KeygenVoteData): Uint8Array {
    return KeygenVoteData.encode(message).finish();
  },
  toProtoMsg(message: KeygenVoteData): KeygenVoteDataProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.KeygenVoteData",
      value: KeygenVoteData.encode(message).finish()
    };
  }
};
function createBaseKeyInfo(): KeyInfo {
  return {
    keyId: "",
    keyRole: 0,
    keyType: 0
  };
}
export const KeyInfo = {
  typeUrl: "/axelar.tss.v1beta1.KeyInfo",
  encode(message: KeyInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.keyRole !== 0) {
      writer.uint32(16).int32(message.keyRole);
    }
    if (message.keyType !== 0) {
      writer.uint32(24).int32(message.keyType);
    }
    return writer;
  },
  fromJSON(object: any): KeyInfo {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : -1,
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : -1
    };
  },
  fromPartial(object: Partial<KeyInfo>): KeyInfo {
    const message = createBaseKeyInfo();
    message.keyId = object.keyId ?? "";
    message.keyRole = object.keyRole ?? 0;
    message.keyType = object.keyType ?? 0;
    return message;
  },
  fromAmino(object: KeyInfoAmino): KeyInfo {
    return {
      keyId: object.key_id,
      keyRole: isSet(object.key_role) ? keyRoleFromJSON(object.key_role) : -1,
      keyType: isSet(object.key_type) ? keyTypeFromJSON(object.key_type) : -1
    };
  },
  toAmino(message: KeyInfo): KeyInfoAmino {
    const obj: any = {};
    obj.key_id = message.keyId;
    obj.key_role = message.keyRole;
    obj.key_type = message.keyType;
    return obj;
  },
  fromAminoMsg(object: KeyInfoAminoMsg): KeyInfo {
    return KeyInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyInfoProtoMsg): KeyInfo {
    return KeyInfo.decode(message.value);
  },
  toProto(message: KeyInfo): Uint8Array {
    return KeyInfo.encode(message).finish();
  },
  toProtoMsg(message: KeyInfo): KeyInfoProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.KeyInfo",
      value: KeyInfo.encode(message).finish()
    };
  }
};
function createBaseMultisigInfo(): MultisigInfo {
  return {
    id: "",
    timeout: BigInt(0),
    targetNum: BigInt(0),
    infos: []
  };
}
export const MultisigInfo = {
  typeUrl: "/axelar.tss.v1beta1.MultisigInfo",
  encode(message: MultisigInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.timeout !== BigInt(0)) {
      writer.uint32(16).int64(message.timeout);
    }
    if (message.targetNum !== BigInt(0)) {
      writer.uint32(24).int64(message.targetNum);
    }
    for (const v of message.infos) {
      MultisigInfo_Info.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MultisigInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      timeout: isSet(object.timeout) ? BigInt(object.timeout.toString()) : BigInt(0),
      targetNum: isSet(object.targetNum) ? BigInt(object.targetNum.toString()) : BigInt(0),
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => MultisigInfo_Info.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MultisigInfo>): MultisigInfo {
    const message = createBaseMultisigInfo();
    message.id = object.id ?? "";
    message.timeout = object.timeout !== undefined && object.timeout !== null ? BigInt(object.timeout.toString()) : BigInt(0);
    message.targetNum = object.targetNum !== undefined && object.targetNum !== null ? BigInt(object.targetNum.toString()) : BigInt(0);
    message.infos = object.infos?.map(e => MultisigInfo_Info.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MultisigInfoAmino): MultisigInfo {
    return {
      id: object.id,
      timeout: BigInt(object.timeout),
      targetNum: BigInt(object.target_num),
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => MultisigInfo_Info.fromAmino(e)) : []
    };
  },
  toAmino(message: MultisigInfo): MultisigInfoAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.timeout = message.timeout ? message.timeout.toString() : undefined;
    obj.target_num = message.targetNum ? message.targetNum.toString() : undefined;
    if (message.infos) {
      obj.infos = message.infos.map(e => e ? MultisigInfo_Info.toAmino(e) : undefined);
    } else {
      obj.infos = [];
    }
    return obj;
  },
  fromAminoMsg(object: MultisigInfoAminoMsg): MultisigInfo {
    return MultisigInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MultisigInfoProtoMsg): MultisigInfo {
    return MultisigInfo.decode(message.value);
  },
  toProto(message: MultisigInfo): Uint8Array {
    return MultisigInfo.encode(message).finish();
  },
  toProtoMsg(message: MultisigInfo): MultisigInfoProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.MultisigInfo",
      value: MultisigInfo.encode(message).finish()
    };
  }
};
function createBaseMultisigInfo_Info(): MultisigInfo_Info {
  return {
    participant: new Uint8Array(),
    data: []
  };
}
export const MultisigInfo_Info = {
  typeUrl: "/axelar.tss.v1beta1.Info",
  encode(message: MultisigInfo_Info, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.participant.length !== 0) {
      writer.uint32(10).bytes(message.participant);
    }
    for (const v of message.data) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): MultisigInfo_Info {
    return {
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
      data: Array.isArray(object?.data) ? object.data.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<MultisigInfo_Info>): MultisigInfo_Info {
    const message = createBaseMultisigInfo_Info();
    message.participant = object.participant ?? new Uint8Array();
    message.data = object.data?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MultisigInfo_InfoAmino): MultisigInfo_Info {
    return {
      participant: object.participant,
      data: Array.isArray(object?.data) ? object.data.map((e: any) => e) : []
    };
  },
  toAmino(message: MultisigInfo_Info): MultisigInfo_InfoAmino {
    const obj: any = {};
    obj.participant = message.participant;
    if (message.data) {
      obj.data = message.data.map(e => e);
    } else {
      obj.data = [];
    }
    return obj;
  },
  fromAminoMsg(object: MultisigInfo_InfoAminoMsg): MultisigInfo_Info {
    return MultisigInfo_Info.fromAmino(object.value);
  },
  fromProtoMsg(message: MultisigInfo_InfoProtoMsg): MultisigInfo_Info {
    return MultisigInfo_Info.decode(message.value);
  },
  toProto(message: MultisigInfo_Info): Uint8Array {
    return MultisigInfo_Info.encode(message).finish();
  },
  toProtoMsg(message: MultisigInfo_Info): MultisigInfo_InfoProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.Info",
      value: MultisigInfo_Info.encode(message).finish()
    };
  }
};
function createBaseKeyRecoveryInfo_PrivateEntry(): KeyRecoveryInfo_PrivateEntry {
  return {
    key: "",
    value: new Uint8Array()
  };
}
export const KeyRecoveryInfo_PrivateEntry = {
  encode(message: KeyRecoveryInfo_PrivateEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): KeyRecoveryInfo_PrivateEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<KeyRecoveryInfo_PrivateEntry>): KeyRecoveryInfo_PrivateEntry {
    const message = createBaseKeyRecoveryInfo_PrivateEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: KeyRecoveryInfo_PrivateEntryAmino): KeyRecoveryInfo_PrivateEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: KeyRecoveryInfo_PrivateEntry): KeyRecoveryInfo_PrivateEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: KeyRecoveryInfo_PrivateEntryAminoMsg): KeyRecoveryInfo_PrivateEntry {
    return KeyRecoveryInfo_PrivateEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyRecoveryInfo_PrivateEntryProtoMsg): KeyRecoveryInfo_PrivateEntry {
    return KeyRecoveryInfo_PrivateEntry.decode(message.value);
  },
  toProto(message: KeyRecoveryInfo_PrivateEntry): Uint8Array {
    return KeyRecoveryInfo_PrivateEntry.encode(message).finish();
  }
};
function createBaseKeyRecoveryInfo(): KeyRecoveryInfo {
  return {
    keyId: "",
    public: new Uint8Array(),
    private: {}
  };
}
export const KeyRecoveryInfo = {
  typeUrl: "/axelar.tss.v1beta1.KeyRecoveryInfo",
  encode(message: KeyRecoveryInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.public.length !== 0) {
      writer.uint32(18).bytes(message.public);
    }
    Object.entries(message.private).forEach(([key, value]) => {
      KeyRecoveryInfo_PrivateEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): KeyRecoveryInfo {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      public: isSet(object.public) ? bytesFromBase64(object.public) : new Uint8Array(),
      private: isObject(object.private) ? Object.entries(object.private).reduce<{
        [key: string]: bytes;
      }>((acc, [key, value]) => {
        acc[key] = bytes.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<KeyRecoveryInfo>): KeyRecoveryInfo {
    const message = createBaseKeyRecoveryInfo();
    message.keyId = object.keyId ?? "";
    message.public = object.public ?? new Uint8Array();
    message.private = Object.entries(object.private ?? {}).reduce<{
      [key: string]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bytes.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: KeyRecoveryInfoAmino): KeyRecoveryInfo {
    return {
      keyId: object.key_id,
      public: object.public,
      private: isObject(object.private) ? Object.entries(object.private).reduce<{
        [key: string]: bytes;
      }>((acc, [key, value]) => {
        acc[key] = bytes.fromAmino(value);
        return acc;
      }, {}) : {}
    };
  },
  toAmino(message: KeyRecoveryInfo): KeyRecoveryInfoAmino {
    const obj: any = {};
    obj.key_id = message.keyId;
    obj.public = message.public;
    obj.private = {};
    if (message.private) {
      Object.entries(message.private).forEach(([k, v]) => {
        obj.private[k] = bytes.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: KeyRecoveryInfoAminoMsg): KeyRecoveryInfo {
    return KeyRecoveryInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyRecoveryInfoProtoMsg): KeyRecoveryInfo {
    return KeyRecoveryInfo.decode(message.value);
  },
  toProto(message: KeyRecoveryInfo): Uint8Array {
    return KeyRecoveryInfo.encode(message).finish();
  },
  toProtoMsg(message: KeyRecoveryInfo): KeyRecoveryInfoProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.KeyRecoveryInfo",
      value: KeyRecoveryInfo.encode(message).finish()
    };
  }
};
function createBaseExternalKeys(): ExternalKeys {
  return {
    chain: "",
    keyIds: []
  };
}
export const ExternalKeys = {
  typeUrl: "/axelar.tss.v1beta1.ExternalKeys",
  encode(message: ExternalKeys, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    for (const v of message.keyIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ExternalKeys {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyIds: Array.isArray(object?.keyIds) ? object.keyIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ExternalKeys>): ExternalKeys {
    const message = createBaseExternalKeys();
    message.chain = object.chain ?? "";
    message.keyIds = object.keyIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ExternalKeysAmino): ExternalKeys {
    return {
      chain: object.chain,
      keyIds: Array.isArray(object?.key_ids) ? object.key_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: ExternalKeys): ExternalKeysAmino {
    const obj: any = {};
    obj.chain = message.chain;
    if (message.keyIds) {
      obj.key_ids = message.keyIds.map(e => e);
    } else {
      obj.key_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: ExternalKeysAminoMsg): ExternalKeys {
    return ExternalKeys.fromAmino(object.value);
  },
  fromProtoMsg(message: ExternalKeysProtoMsg): ExternalKeys {
    return ExternalKeys.decode(message.value);
  },
  toProto(message: ExternalKeys): Uint8Array {
    return ExternalKeys.encode(message).finish();
  },
  toProtoMsg(message: ExternalKeys): ExternalKeysProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.ExternalKeys",
      value: ExternalKeys.encode(message).finish()
    };
  }
};
function createBaseValidatorStatus(): ValidatorStatus {
  return {
    validator: new Uint8Array(),
    suspendedUntil: BigInt(0)
  };
}
export const ValidatorStatus = {
  typeUrl: "/axelar.tss.v1beta1.ValidatorStatus",
  encode(message: ValidatorStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }
    if (message.suspendedUntil !== BigInt(0)) {
      writer.uint32(16).uint64(message.suspendedUntil);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorStatus {
    return {
      validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
      suspendedUntil: isSet(object.suspendedUntil) ? BigInt(object.suspendedUntil.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ValidatorStatus>): ValidatorStatus {
    const message = createBaseValidatorStatus();
    message.validator = object.validator ?? new Uint8Array();
    message.suspendedUntil = object.suspendedUntil !== undefined && object.suspendedUntil !== null ? BigInt(object.suspendedUntil.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorStatusAmino): ValidatorStatus {
    return {
      validator: object.validator,
      suspendedUntil: BigInt(object.suspended_until)
    };
  },
  toAmino(message: ValidatorStatus): ValidatorStatusAmino {
    const obj: any = {};
    obj.validator = message.validator;
    obj.suspended_until = message.suspendedUntil ? message.suspendedUntil.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorStatusAminoMsg): ValidatorStatus {
    return ValidatorStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorStatusProtoMsg): ValidatorStatus {
    return ValidatorStatus.decode(message.value);
  },
  toProto(message: ValidatorStatus): Uint8Array {
    return ValidatorStatus.encode(message).finish();
  },
  toProtoMsg(message: ValidatorStatus): ValidatorStatusProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.ValidatorStatus",
      value: ValidatorStatus.encode(message).finish()
    };
  }
};