import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, isObject } from "../../../helpers";
function createBaseKeygenStarted() {
    return {
        module: "",
        keyId: "",
        participants: []
    };
}
export const KeygenStarted = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenStarted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        for (const v of message.participants) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            participants: Array.isArray(object?.participants) ? object.participants.map((e) => bytesFromBase64(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenStarted();
        message.module = object.module ?? "";
        message.keyId = object.keyId ?? "";
        message.participants = object.participants?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.key_id = message.keyId;
        if (message.participants) {
            obj.participants = message.participants.map(e => base64FromBytes(e));
        }
        else {
            obj.participants = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenStarted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenStarted.decode(message.value);
    },
    toProto(message) {
        return KeygenStarted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenStarted",
            value: KeygenStarted.encode(message).finish()
        };
    }
};
function createBaseKeygenCompleted() {
    return {
        module: "",
        keyId: ""
    };
}
export const KeygenCompleted = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenCompleted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenCompleted();
        message.module = object.module ?? "";
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenCompleted();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenCompleted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenCompleted.decode(message.value);
    },
    toProto(message) {
        return KeygenCompleted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenCompleted",
            value: KeygenCompleted.encode(message).finish()
        };
    }
};
function createBaseKeygenExpired() {
    return {
        module: "",
        keyId: ""
    };
}
export const KeygenExpired = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenExpired",
    encode(message, writer = BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenExpired();
        message.module = object.module ?? "";
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenExpired();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenExpired.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenExpired.decode(message.value);
    },
    toProto(message) {
        return KeygenExpired.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenExpired",
            value: KeygenExpired.encode(message).finish()
        };
    }
};
function createBasePubKeySubmitted() {
    return {
        module: "",
        keyId: "",
        participant: new Uint8Array(),
        pubKey: new Uint8Array()
    };
}
export const PubKeySubmitted = {
    typeUrl: "/axelar.multisig.v1beta1.PubKeySubmitted",
    encode(message, writer = BinaryWriter.create()) {
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
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBasePubKeySubmitted();
        message.module = object.module ?? "";
        message.keyId = object.keyId ?? "";
        message.participant = object.participant ?? new Uint8Array();
        message.pubKey = object.pubKey ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.key_id = message.keyId;
        obj.participant = message.participant ? base64FromBytes(message.participant) : undefined;
        obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PubKeySubmitted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PubKeySubmitted.decode(message.value);
    },
    toProto(message) {
        return PubKeySubmitted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.PubKeySubmitted",
            value: PubKeySubmitted.encode(message).finish()
        };
    }
};
function createBaseSigningStarted_PubKeysEntry() {
    return {
        key: "",
        value: new Uint8Array()
    };
}
export const SigningStarted_PubKeysEntry = {
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
        const message = createBaseSigningStarted_PubKeysEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSigningStarted_PubKeysEntry();
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
        return SigningStarted_PubKeysEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SigningStarted_PubKeysEntry.decode(message.value);
    },
    toProto(message) {
        return SigningStarted_PubKeysEntry.encode(message).finish();
    }
};
function createBaseSigningStarted() {
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
    encode(message, writer = BinaryWriter.create()) {
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
                key: key,
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
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            sigId: isSet(object.sigId) ? BigInt(object.sigId.toString()) : BigInt(0),
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            pubKeys: isObject(object.pubKeys) ? Object.entries(object.pubKeys).reduce((acc, [key, value]) => {
                acc[key] = bytes.fromJSON(value);
                return acc;
            }, {}) : {},
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            requestingModule: isSet(object.requestingModule) ? String(object.requestingModule) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseSigningStarted();
        message.module = object.module ?? "";
        message.sigId = object.sigId !== undefined && object.sigId !== null ? BigInt(object.sigId.toString()) : BigInt(0);
        message.keyId = object.keyId ?? "";
        message.pubKeys = Object.entries(object.pubKeys ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = bytes.fromPartial(value);
            }
            return acc;
        }, {});
        message.payloadHash = object.payloadHash ?? new Uint8Array();
        message.requestingModule = object.requestingModule ?? "";
        return message;
    },
    fromAmino(object) {
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
        message.pubKeys = Object.entries(object.pub_keys ?? {}).reduce((acc, [key, value]) => {
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
    toAmino(message) {
        const obj = {};
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
    fromAminoMsg(object) {
        return SigningStarted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SigningStarted.decode(message.value);
    },
    toProto(message) {
        return SigningStarted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.SigningStarted",
            value: SigningStarted.encode(message).finish()
        };
    }
};
function createBaseSigningCompleted() {
    return {
        module: "",
        sigId: BigInt(0)
    };
}
export const SigningCompleted = {
    typeUrl: "/axelar.multisig.v1beta1.SigningCompleted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.sigId !== BigInt(0)) {
            writer.uint32(16).uint64(message.sigId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            sigId: isSet(object.sigId) ? BigInt(object.sigId.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseSigningCompleted();
        message.module = object.module ?? "";
        message.sigId = object.sigId !== undefined && object.sigId !== null ? BigInt(object.sigId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSigningCompleted();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        if (object.sig_id !== undefined && object.sig_id !== null) {
            message.sigId = BigInt(object.sig_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.sig_id = message.sigId ? message.sigId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SigningCompleted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SigningCompleted.decode(message.value);
    },
    toProto(message) {
        return SigningCompleted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.SigningCompleted",
            value: SigningCompleted.encode(message).finish()
        };
    }
};
function createBaseSigningExpired() {
    return {
        module: "",
        sigId: BigInt(0)
    };
}
export const SigningExpired = {
    typeUrl: "/axelar.multisig.v1beta1.SigningExpired",
    encode(message, writer = BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.sigId !== BigInt(0)) {
            writer.uint32(16).uint64(message.sigId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            sigId: isSet(object.sigId) ? BigInt(object.sigId.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseSigningExpired();
        message.module = object.module ?? "";
        message.sigId = object.sigId !== undefined && object.sigId !== null ? BigInt(object.sigId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSigningExpired();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        if (object.sig_id !== undefined && object.sig_id !== null) {
            message.sigId = BigInt(object.sig_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.sig_id = message.sigId ? message.sigId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SigningExpired.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SigningExpired.decode(message.value);
    },
    toProto(message) {
        return SigningExpired.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.SigningExpired",
            value: SigningExpired.encode(message).finish()
        };
    }
};
function createBaseSignatureSubmitted() {
    return {
        module: "",
        sigId: BigInt(0),
        participant: new Uint8Array(),
        signature: new Uint8Array()
    };
}
export const SignatureSubmitted = {
    typeUrl: "/axelar.multisig.v1beta1.SignatureSubmitted",
    encode(message, writer = BinaryWriter.create()) {
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
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            sigId: isSet(object.sigId) ? BigInt(object.sigId.toString()) : BigInt(0),
            participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseSignatureSubmitted();
        message.module = object.module ?? "";
        message.sigId = object.sigId !== undefined && object.sigId !== null ? BigInt(object.sigId.toString()) : BigInt(0);
        message.participant = object.participant ?? new Uint8Array();
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.sig_id = message.sigId ? message.sigId.toString() : undefined;
        obj.participant = message.participant ? base64FromBytes(message.participant) : undefined;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignatureSubmitted.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SignatureSubmitted.decode(message.value);
    },
    toProto(message) {
        return SignatureSubmitted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.SignatureSubmitted",
            value: SignatureSubmitted.encode(message).finish()
        };
    }
};
function createBaseKeyAssigned() {
    return {
        module: "",
        chain: "",
        keyId: ""
    };
}
export const KeyAssigned = {
    typeUrl: "/axelar.multisig.v1beta1.KeyAssigned",
    encode(message, writer = BinaryWriter.create()) {
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
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeyAssigned();
        message.module = object.module ?? "";
        message.chain = object.chain ?? "";
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.chain = message.chain;
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyAssigned.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyAssigned.decode(message.value);
    },
    toProto(message) {
        return KeyAssigned.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeyAssigned",
            value: KeyAssigned.encode(message).finish()
        };
    }
};
function createBaseKeyRotated() {
    return {
        module: "",
        chain: "",
        keyId: ""
    };
}
export const KeyRotated = {
    typeUrl: "/axelar.multisig.v1beta1.KeyRotated",
    encode(message, writer = BinaryWriter.create()) {
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
    fromJSON(object) {
        return {
            module: isSet(object.module) ? String(object.module) : "",
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeyRotated();
        message.module = object.module ?? "";
        message.chain = object.chain ?? "";
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.chain = message.chain;
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyRotated.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyRotated.decode(message.value);
    },
    toProto(message) {
        return KeyRotated.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeyRotated",
            value: KeyRotated.encode(message).finish()
        };
    }
};
function createBaseKeygenOptOut() {
    return {
        participant: new Uint8Array()
    };
}
export const KeygenOptOut = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptOut",
    encode(message, writer = BinaryWriter.create()) {
        if (message.participant.length !== 0) {
            writer.uint32(10).bytes(message.participant);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenOptOut();
        message.participant = object.participant ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenOptOut();
        if (object.participant !== undefined && object.participant !== null) {
            message.participant = bytesFromBase64(object.participant);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.participant = message.participant ? base64FromBytes(message.participant) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenOptOut.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenOptOut.decode(message.value);
    },
    toProto(message) {
        return KeygenOptOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenOptOut",
            value: KeygenOptOut.encode(message).finish()
        };
    }
};
function createBaseKeygenOptIn() {
    return {
        participant: new Uint8Array()
    };
}
export const KeygenOptIn = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptIn",
    encode(message, writer = BinaryWriter.create()) {
        if (message.participant.length !== 0) {
            writer.uint32(10).bytes(message.participant);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenOptIn();
        message.participant = object.participant ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenOptIn();
        if (object.participant !== undefined && object.participant !== null) {
            message.participant = bytesFromBase64(object.participant);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.participant = message.participant ? base64FromBytes(message.participant) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenOptIn.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenOptIn.decode(message.value);
    },
    toProto(message) {
        return KeygenOptIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenOptIn",
            value: KeygenOptIn.encode(message).finish()
        };
    }
};
//# sourceMappingURL=events.js.map