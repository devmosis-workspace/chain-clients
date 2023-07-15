import { KeyRole, KeyType, keyRoleFromJSON, keyTypeFromJSON } from "../exported/v1beta1/types";
import { Long, isSet, bytesFromBase64, isObject } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface KeygenVoteData {
  pubKey: Uint8Array;
  groupRecoveryInfo: Uint8Array;
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
/** KeyInfo holds information about a key */
export interface KeyInfoSDKType {
  key_id: string;
  key_role: KeyRole;
  key_type: KeyType;
}
export interface MultisigInfo {
  id: string;
  timeout: Long;
  targetNum: Long;
  infos: MultisigInfo_Info[];
}
export interface MultisigInfoSDKType {
  id: string;
  timeout: Long;
  target_num: Long;
  infos: MultisigInfo_InfoSDKType[];
}
export interface MultisigInfo_Info {
  participant: Uint8Array;
  data: Uint8Array[];
}
export interface MultisigInfo_InfoSDKType {
  participant: Uint8Array;
  data: Uint8Array[];
}
export interface KeyRecoveryInfo_PrivateEntry {
  key: string;
  value: Uint8Array;
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
export interface ExternalKeysSDKType {
  chain: string;
  key_ids: string[];
}
export interface ValidatorStatus {
  validator: Uint8Array;
  suspendedUntil: Long;
}
export interface ValidatorStatusSDKType {
  validator: Uint8Array;
  suspended_until: Long;
}
function createBaseKeygenVoteData(): KeygenVoteData {
  return {
    pubKey: new Uint8Array(),
    groupRecoveryInfo: new Uint8Array()
  };
}
export const KeygenVoteData = {
  encode(message: KeygenVoteData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: KeyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : 0,
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : 0
    };
  },
  fromPartial(object: Partial<KeyInfo>): KeyInfo {
    const message = createBaseKeyInfo();
    message.keyId = object.keyId ?? "";
    message.keyRole = object.keyRole ?? 0;
    message.keyType = object.keyType ?? 0;
    return message;
  }
};
function createBaseMultisigInfo(): MultisigInfo {
  return {
    id: "",
    timeout: Long.ZERO,
    targetNum: Long.ZERO,
    infos: []
  };
}
export const MultisigInfo = {
  encode(message: MultisigInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (!message.timeout.isZero()) {
      writer.uint32(16).int64(message.timeout);
    }
    if (!message.targetNum.isZero()) {
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
      timeout: isSet(object.timeout) ? Long.fromValue(object.timeout) : Long.ZERO,
      targetNum: isSet(object.targetNum) ? Long.fromValue(object.targetNum) : Long.ZERO,
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => MultisigInfo_Info.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MultisigInfo>): MultisigInfo {
    const message = createBaseMultisigInfo();
    message.id = object.id ?? "";
    message.timeout = object.timeout !== undefined && object.timeout !== null ? Long.fromValue(object.timeout) : Long.ZERO;
    message.targetNum = object.targetNum !== undefined && object.targetNum !== null ? Long.fromValue(object.targetNum) : Long.ZERO;
    message.infos = object.infos?.map(e => MultisigInfo_Info.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMultisigInfo_Info(): MultisigInfo_Info {
  return {
    participant: new Uint8Array(),
    data: []
  };
}
export const MultisigInfo_Info = {
  encode(message: MultisigInfo_Info, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseKeyRecoveryInfo_PrivateEntry(): KeyRecoveryInfo_PrivateEntry {
  return {
    key: "",
    value: new Uint8Array()
  };
}
export const KeyRecoveryInfo_PrivateEntry = {
  encode(message: KeyRecoveryInfo_PrivateEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: KeyRecoveryInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseExternalKeys(): ExternalKeys {
  return {
    chain: "",
    keyIds: []
  };
}
export const ExternalKeys = {
  encode(message: ExternalKeys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseValidatorStatus(): ValidatorStatus {
  return {
    validator: new Uint8Array(),
    suspendedUntil: Long.UZERO
  };
}
export const ValidatorStatus = {
  encode(message: ValidatorStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }
    if (!message.suspendedUntil.isZero()) {
      writer.uint32(16).uint64(message.suspendedUntil);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorStatus {
    return {
      validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
      suspendedUntil: isSet(object.suspendedUntil) ? Long.fromValue(object.suspendedUntil) : Long.UZERO
    };
  },
  fromPartial(object: Partial<ValidatorStatus>): ValidatorStatus {
    const message = createBaseValidatorStatus();
    message.validator = object.validator ?? new Uint8Array();
    message.suspendedUntil = object.suspendedUntil !== undefined && object.suspendedUntil !== null ? Long.fromValue(object.suspendedUntil) : Long.UZERO;
    return message;
  }
};