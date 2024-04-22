import { keyRoleFromJSON, keyTypeFromJSON } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, isObject } from "../../../helpers";
function createBaseKeygenVoteData() {
    return {
        pubKey: new Uint8Array(),
        groupRecoveryInfo: new Uint8Array()
    };
}
export const KeygenVoteData = {
    typeUrl: "/axelar.tss.v1beta1.KeygenVoteData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pubKey.length !== 0) {
            writer.uint32(10).bytes(message.pubKey);
        }
        if (message.groupRecoveryInfo.length !== 0) {
            writer.uint32(18).bytes(message.groupRecoveryInfo);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
            groupRecoveryInfo: isSet(object.groupRecoveryInfo) ? bytesFromBase64(object.groupRecoveryInfo) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenVoteData();
        message.pubKey = object.pubKey ?? new Uint8Array();
        message.groupRecoveryInfo = object.groupRecoveryInfo ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenVoteData();
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = bytesFromBase64(object.pub_key);
        }
        if (object.group_recovery_info !== undefined && object.group_recovery_info !== null) {
            message.groupRecoveryInfo = bytesFromBase64(object.group_recovery_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
        obj.group_recovery_info = message.groupRecoveryInfo ? base64FromBytes(message.groupRecoveryInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenVoteData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenVoteData.decode(message.value);
    },
    toProto(message) {
        return KeygenVoteData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.KeygenVoteData",
            value: KeygenVoteData.encode(message).finish()
        };
    }
};
function createBaseKeyInfo() {
    return {
        keyId: "",
        keyRole: 0,
        keyType: 0
    };
}
export const KeyInfo = {
    typeUrl: "/axelar.tss.v1beta1.KeyInfo",
    encode(message, writer = BinaryWriter.create()) {
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
    fromJSON(object) {
        return {
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : -1,
            keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseKeyInfo();
        message.keyId = object.keyId ?? "";
        message.keyRole = object.keyRole ?? 0;
        message.keyType = object.keyType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyInfo();
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        if (object.key_role !== undefined && object.key_role !== null) {
            message.keyRole = keyRoleFromJSON(object.key_role);
        }
        if (object.key_type !== undefined && object.key_type !== null) {
            message.keyType = keyTypeFromJSON(object.key_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_id = message.keyId;
        obj.key_role = message.keyRole;
        obj.key_type = message.keyType;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyInfo.decode(message.value);
    },
    toProto(message) {
        return KeyInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.KeyInfo",
            value: KeyInfo.encode(message).finish()
        };
    }
};
function createBaseMultisigInfo() {
    return {
        id: "",
        timeout: BigInt(0),
        targetNum: BigInt(0),
        infos: []
    };
}
export const MultisigInfo = {
    typeUrl: "/axelar.tss.v1beta1.MultisigInfo",
    encode(message, writer = BinaryWriter.create()) {
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
            MultisigInfo_Info.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            timeout: isSet(object.timeout) ? BigInt(object.timeout.toString()) : BigInt(0),
            targetNum: isSet(object.targetNum) ? BigInt(object.targetNum.toString()) : BigInt(0),
            infos: Array.isArray(object?.infos) ? object.infos.map((e) => MultisigInfo_Info.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseMultisigInfo();
        message.id = object.id ?? "";
        message.timeout = object.timeout !== undefined && object.timeout !== null ? BigInt(object.timeout.toString()) : BigInt(0);
        message.targetNum = object.targetNum !== undefined && object.targetNum !== null ? BigInt(object.targetNum.toString()) : BigInt(0);
        message.infos = object.infos?.map(e => MultisigInfo_Info.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMultisigInfo();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = BigInt(object.timeout);
        }
        if (object.target_num !== undefined && object.target_num !== null) {
            message.targetNum = BigInt(object.target_num);
        }
        message.infos = object.infos?.map(e => MultisigInfo_Info.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.timeout = message.timeout ? message.timeout.toString() : undefined;
        obj.target_num = message.targetNum ? message.targetNum.toString() : undefined;
        if (message.infos) {
            obj.infos = message.infos.map(e => e ? MultisigInfo_Info.toAmino(e) : undefined);
        }
        else {
            obj.infos = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MultisigInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MultisigInfo.decode(message.value);
    },
    toProto(message) {
        return MultisigInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.MultisigInfo",
            value: MultisigInfo.encode(message).finish()
        };
    }
};
function createBaseMultisigInfo_Info() {
    return {
        participant: new Uint8Array(),
        data: []
    };
}
export const MultisigInfo_Info = {
    typeUrl: "/axelar.tss.v1beta1.Info",
    encode(message, writer = BinaryWriter.create()) {
        if (message.participant.length !== 0) {
            writer.uint32(10).bytes(message.participant);
        }
        for (const v of message.data) {
            writer.uint32(18).bytes(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
            data: Array.isArray(object?.data) ? object.data.map((e) => bytesFromBase64(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseMultisigInfo_Info();
        message.participant = object.participant ?? new Uint8Array();
        message.data = object.data?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMultisigInfo_Info();
        if (object.participant !== undefined && object.participant !== null) {
            message.participant = bytesFromBase64(object.participant);
        }
        message.data = object.data?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.participant = message.participant ? base64FromBytes(message.participant) : undefined;
        if (message.data) {
            obj.data = message.data.map(e => base64FromBytes(e));
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MultisigInfo_Info.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MultisigInfo_Info.decode(message.value);
    },
    toProto(message) {
        return MultisigInfo_Info.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.Info",
            value: MultisigInfo_Info.encode(message).finish()
        };
    }
};
function createBaseKeyRecoveryInfo_PrivateEntry() {
    return {
        key: "",
        value: new Uint8Array()
    };
}
export const KeyRecoveryInfo_PrivateEntry = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseKeyRecoveryInfo_PrivateEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyRecoveryInfo_PrivateEntry();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value ? base64FromBytes(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyRecoveryInfo_PrivateEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyRecoveryInfo_PrivateEntry.decode(message.value);
    },
    toProto(message) {
        return KeyRecoveryInfo_PrivateEntry.encode(message).finish();
    }
};
function createBaseKeyRecoveryInfo() {
    return {
        keyId: "",
        public: new Uint8Array(),
        private: {}
    };
}
export const KeyRecoveryInfo = {
    typeUrl: "/axelar.tss.v1beta1.KeyRecoveryInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.public.length !== 0) {
            writer.uint32(18).bytes(message.public);
        }
        Object.entries(message.private).forEach(([key, value]) => {
            KeyRecoveryInfo_PrivateEntry.encode({
                key: key,
                value
            }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    fromJSON(object) {
        return {
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            public: isSet(object.public) ? bytesFromBase64(object.public) : new Uint8Array(),
            private: isObject(object.private) ? Object.entries(object.private).reduce((acc, [key, value]) => {
                acc[key] = bytes.fromJSON(value);
                return acc;
            }, {}) : {}
        };
    },
    fromPartial(object) {
        const message = createBaseKeyRecoveryInfo();
        message.keyId = object.keyId ?? "";
        message.public = object.public ?? new Uint8Array();
        message.private = Object.entries(object.private ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = bytes.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyRecoveryInfo();
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        if (object.public !== undefined && object.public !== null) {
            message.public = bytesFromBase64(object.public);
        }
        message.private = Object.entries(object.private ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = bytes.fromAmino(value);
            }
            return acc;
        }, {});
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_id = message.keyId;
        obj.public = message.public ? base64FromBytes(message.public) : undefined;
        obj.private = {};
        if (message.private) {
            Object.entries(message.private).forEach(([k, v]) => {
                obj.private[k] = bytes.toAmino(v);
            });
        }
        return obj;
    },
    fromAminoMsg(object) {
        return KeyRecoveryInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyRecoveryInfo.decode(message.value);
    },
    toProto(message) {
        return KeyRecoveryInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.KeyRecoveryInfo",
            value: KeyRecoveryInfo.encode(message).finish()
        };
    }
};
function createBaseExternalKeys() {
    return {
        chain: "",
        keyIds: []
    };
}
export const ExternalKeys = {
    typeUrl: "/axelar.tss.v1beta1.ExternalKeys",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        for (const v of message.keyIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyIds: Array.isArray(object?.keyIds) ? object.keyIds.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseExternalKeys();
        message.chain = object.chain ?? "";
        message.keyIds = object.keyIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseExternalKeys();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        message.keyIds = object.key_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        if (message.keyIds) {
            obj.key_ids = message.keyIds.map(e => e);
        }
        else {
            obj.key_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ExternalKeys.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExternalKeys.decode(message.value);
    },
    toProto(message) {
        return ExternalKeys.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.ExternalKeys",
            value: ExternalKeys.encode(message).finish()
        };
    }
};
function createBaseValidatorStatus() {
    return {
        validator: new Uint8Array(),
        suspendedUntil: BigInt(0)
    };
}
export const ValidatorStatus = {
    typeUrl: "/axelar.tss.v1beta1.ValidatorStatus",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator.length !== 0) {
            writer.uint32(10).bytes(message.validator);
        }
        if (message.suspendedUntil !== BigInt(0)) {
            writer.uint32(16).uint64(message.suspendedUntil);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
            suspendedUntil: isSet(object.suspendedUntil) ? BigInt(object.suspendedUntil.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorStatus();
        message.validator = object.validator ?? new Uint8Array();
        message.suspendedUntil = object.suspendedUntil !== undefined && object.suspendedUntil !== null ? BigInt(object.suspendedUntil.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorStatus();
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = bytesFromBase64(object.validator);
        }
        if (object.suspended_until !== undefined && object.suspended_until !== null) {
            message.suspendedUntil = BigInt(object.suspended_until);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? base64FromBytes(message.validator) : undefined;
        obj.suspended_until = message.suspendedUntil ? message.suspendedUntil.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorStatus.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ValidatorStatus.decode(message.value);
    },
    toProto(message) {
        return ValidatorStatus.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.ValidatorStatus",
            value: ValidatorStatus.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map