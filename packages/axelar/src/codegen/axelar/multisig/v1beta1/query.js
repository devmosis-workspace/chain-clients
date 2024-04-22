import { keyStateFromJSON, multisigStateFromJSON } from "../exported/v1beta1/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp } from "../../../helpers";
function createBaseKeyIDRequest() {
    return {
        chain: ""
    };
}
export const KeyIDRequest = {
    typeUrl: "/axelar.multisig.v1beta1.KeyIDRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeyIDRequest();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyIDRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyIDRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyIDRequest.decode(message.value);
    },
    toProto(message) {
        return KeyIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeyIDRequest",
            value: KeyIDRequest.encode(message).finish()
        };
    }
};
function createBaseKeyIDResponse() {
    return {
        keyId: ""
    };
}
export const KeyIDResponse = {
    typeUrl: "/axelar.multisig.v1beta1.KeyIDResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeyIDResponse();
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyIDResponse();
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyIDResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyIDResponse.decode(message.value);
    },
    toProto(message) {
        return KeyIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeyIDResponse",
            value: KeyIDResponse.encode(message).finish()
        };
    }
};
function createBaseNextKeyIDRequest() {
    return {
        chain: ""
    };
}
export const NextKeyIDRequest = {
    typeUrl: "/axelar.multisig.v1beta1.NextKeyIDRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseNextKeyIDRequest();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseNextKeyIDRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        return obj;
    },
    fromAminoMsg(object) {
        return NextKeyIDRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NextKeyIDRequest.decode(message.value);
    },
    toProto(message) {
        return NextKeyIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.NextKeyIDRequest",
            value: NextKeyIDRequest.encode(message).finish()
        };
    }
};
function createBaseNextKeyIDResponse() {
    return {
        keyId: ""
    };
}
export const NextKeyIDResponse = {
    typeUrl: "/axelar.multisig.v1beta1.NextKeyIDResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseNextKeyIDResponse();
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseNextKeyIDResponse();
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return NextKeyIDResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NextKeyIDResponse.decode(message.value);
    },
    toProto(message) {
        return NextKeyIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.NextKeyIDResponse",
            value: NextKeyIDResponse.encode(message).finish()
        };
    }
};
function createBaseKeyRequest() {
    return {
        keyId: ""
    };
}
export const KeyRequest = {
    typeUrl: "/axelar.multisig.v1beta1.KeyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeyRequest();
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyRequest();
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyRequest.decode(message.value);
    },
    toProto(message) {
        return KeyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeyRequest",
            value: KeyRequest.encode(message).finish()
        };
    }
};
function createBaseKeygenParticipant() {
    return {
        address: "",
        weight: new Uint8Array(),
        pubKey: ""
    };
}
export const KeygenParticipant = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenParticipant",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight.length !== 0) {
            writer.uint32(18).bytes(message.weight);
        }
        if (message.pubKey !== "") {
            writer.uint32(26).string(message.pubKey);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            weight: isSet(object.weight) ? bytesFromBase64(object.weight) : new Uint8Array(),
            pubKey: isSet(object.pubKey) ? String(object.pubKey) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenParticipant();
        message.address = object.address ?? "";
        message.weight = object.weight ?? new Uint8Array();
        message.pubKey = object.pubKey ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenParticipant();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = bytesFromBase64(object.weight);
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = object.pub_key;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.weight = message.weight ? base64FromBytes(message.weight) : undefined;
        obj.pub_key = message.pubKey;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenParticipant.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenParticipant.decode(message.value);
    },
    toProto(message) {
        return KeygenParticipant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenParticipant",
            value: KeygenParticipant.encode(message).finish()
        };
    }
};
function createBaseKeyResponse() {
    return {
        keyId: "",
        state: 0,
        startedAt: BigInt(0),
        startedAtTimestamp: Timestamp.fromPartial({}),
        thresholdWeight: new Uint8Array(),
        bondedWeight: new Uint8Array(),
        participants: []
    };
}
export const KeyResponse = {
    typeUrl: "/axelar.multisig.v1beta1.KeyResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.startedAt !== BigInt(0)) {
            writer.uint32(24).int64(message.startedAt);
        }
        if (message.startedAtTimestamp !== undefined) {
            Timestamp.encode(message.startedAtTimestamp, writer.uint32(34).fork()).ldelim();
        }
        if (message.thresholdWeight.length !== 0) {
            writer.uint32(42).bytes(message.thresholdWeight);
        }
        if (message.bondedWeight.length !== 0) {
            writer.uint32(50).bytes(message.bondedWeight);
        }
        for (const v of message.participants) {
            KeygenParticipant.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            state: isSet(object.state) ? keyStateFromJSON(object.state) : -1,
            startedAt: isSet(object.startedAt) ? BigInt(object.startedAt.toString()) : BigInt(0),
            startedAtTimestamp: isSet(object.startedAtTimestamp) ? fromJsonTimestamp(object.startedAtTimestamp) : undefined,
            thresholdWeight: isSet(object.thresholdWeight) ? bytesFromBase64(object.thresholdWeight) : new Uint8Array(),
            bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array(),
            participants: Array.isArray(object?.participants) ? object.participants.map((e) => KeygenParticipant.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseKeyResponse();
        message.keyId = object.keyId ?? "";
        message.state = object.state ?? 0;
        message.startedAt = object.startedAt !== undefined && object.startedAt !== null ? BigInt(object.startedAt.toString()) : BigInt(0);
        message.startedAtTimestamp = object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null ? Timestamp.fromPartial(object.startedAtTimestamp) : undefined;
        message.thresholdWeight = object.thresholdWeight ?? new Uint8Array();
        message.bondedWeight = object.bondedWeight ?? new Uint8Array();
        message.participants = object.participants?.map(e => KeygenParticipant.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyResponse();
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = keyStateFromJSON(object.state);
        }
        if (object.started_at !== undefined && object.started_at !== null) {
            message.startedAt = BigInt(object.started_at);
        }
        if (object.started_at_timestamp !== undefined && object.started_at_timestamp !== null) {
            message.startedAtTimestamp = Timestamp.fromAmino(object.started_at_timestamp);
        }
        if (object.threshold_weight !== undefined && object.threshold_weight !== null) {
            message.thresholdWeight = bytesFromBase64(object.threshold_weight);
        }
        if (object.bonded_weight !== undefined && object.bonded_weight !== null) {
            message.bondedWeight = bytesFromBase64(object.bonded_weight);
        }
        message.participants = object.participants?.map(e => KeygenParticipant.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_id = message.keyId;
        obj.state = message.state;
        obj.started_at = message.startedAt ? message.startedAt.toString() : undefined;
        obj.started_at_timestamp = message.startedAtTimestamp ? Timestamp.toAmino(message.startedAtTimestamp) : undefined;
        obj.threshold_weight = message.thresholdWeight ? base64FromBytes(message.thresholdWeight) : undefined;
        obj.bonded_weight = message.bondedWeight ? base64FromBytes(message.bondedWeight) : undefined;
        if (message.participants) {
            obj.participants = message.participants.map(e => e ? KeygenParticipant.toAmino(e) : undefined);
        }
        else {
            obj.participants = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return KeyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyResponse.decode(message.value);
    },
    toProto(message) {
        return KeyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeyResponse",
            value: KeyResponse.encode(message).finish()
        };
    }
};
function createBaseKeygenSessionRequest() {
    return {
        keyId: ""
    };
}
export const KeygenSessionRequest = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenSessionRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenSessionRequest();
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenSessionRequest();
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenSessionRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenSessionRequest.decode(message.value);
    },
    toProto(message) {
        return KeygenSessionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenSessionRequest",
            value: KeygenSessionRequest.encode(message).finish()
        };
    }
};
function createBaseKeygenSessionResponse() {
    return {
        startedAt: BigInt(0),
        startedAtTimestamp: Timestamp.fromPartial({}),
        expiresAt: BigInt(0),
        completedAt: BigInt(0),
        gracePeriod: BigInt(0),
        state: 0,
        keygenThresholdWeight: new Uint8Array(),
        signingThresholdWeight: new Uint8Array(),
        bondedWeight: new Uint8Array(),
        participants: []
    };
}
export const KeygenSessionResponse = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenSessionResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.startedAt !== BigInt(0)) {
            writer.uint32(8).int64(message.startedAt);
        }
        if (message.startedAtTimestamp !== undefined) {
            Timestamp.encode(message.startedAtTimestamp, writer.uint32(18).fork()).ldelim();
        }
        if (message.expiresAt !== BigInt(0)) {
            writer.uint32(24).int64(message.expiresAt);
        }
        if (message.completedAt !== BigInt(0)) {
            writer.uint32(32).int64(message.completedAt);
        }
        if (message.gracePeriod !== BigInt(0)) {
            writer.uint32(40).int64(message.gracePeriod);
        }
        if (message.state !== 0) {
            writer.uint32(48).int32(message.state);
        }
        if (message.keygenThresholdWeight.length !== 0) {
            writer.uint32(58).bytes(message.keygenThresholdWeight);
        }
        if (message.signingThresholdWeight.length !== 0) {
            writer.uint32(66).bytes(message.signingThresholdWeight);
        }
        if (message.bondedWeight.length !== 0) {
            writer.uint32(74).bytes(message.bondedWeight);
        }
        for (const v of message.participants) {
            KeygenParticipant.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            startedAt: isSet(object.startedAt) ? BigInt(object.startedAt.toString()) : BigInt(0),
            startedAtTimestamp: isSet(object.startedAtTimestamp) ? fromJsonTimestamp(object.startedAtTimestamp) : undefined,
            expiresAt: isSet(object.expiresAt) ? BigInt(object.expiresAt.toString()) : BigInt(0),
            completedAt: isSet(object.completedAt) ? BigInt(object.completedAt.toString()) : BigInt(0),
            gracePeriod: isSet(object.gracePeriod) ? BigInt(object.gracePeriod.toString()) : BigInt(0),
            state: isSet(object.state) ? multisigStateFromJSON(object.state) : -1,
            keygenThresholdWeight: isSet(object.keygenThresholdWeight) ? bytesFromBase64(object.keygenThresholdWeight) : new Uint8Array(),
            signingThresholdWeight: isSet(object.signingThresholdWeight) ? bytesFromBase64(object.signingThresholdWeight) : new Uint8Array(),
            bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array(),
            participants: Array.isArray(object?.participants) ? object.participants.map((e) => KeygenParticipant.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenSessionResponse();
        message.startedAt = object.startedAt !== undefined && object.startedAt !== null ? BigInt(object.startedAt.toString()) : BigInt(0);
        message.startedAtTimestamp = object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null ? Timestamp.fromPartial(object.startedAtTimestamp) : undefined;
        message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
        message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? BigInt(object.completedAt.toString()) : BigInt(0);
        message.gracePeriod = object.gracePeriod !== undefined && object.gracePeriod !== null ? BigInt(object.gracePeriod.toString()) : BigInt(0);
        message.state = object.state ?? 0;
        message.keygenThresholdWeight = object.keygenThresholdWeight ?? new Uint8Array();
        message.signingThresholdWeight = object.signingThresholdWeight ?? new Uint8Array();
        message.bondedWeight = object.bondedWeight ?? new Uint8Array();
        message.participants = object.participants?.map(e => KeygenParticipant.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenSessionResponse();
        if (object.started_at !== undefined && object.started_at !== null) {
            message.startedAt = BigInt(object.started_at);
        }
        if (object.started_at_timestamp !== undefined && object.started_at_timestamp !== null) {
            message.startedAtTimestamp = Timestamp.fromAmino(object.started_at_timestamp);
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
        if (object.state !== undefined && object.state !== null) {
            message.state = multisigStateFromJSON(object.state);
        }
        if (object.keygen_threshold_weight !== undefined && object.keygen_threshold_weight !== null) {
            message.keygenThresholdWeight = bytesFromBase64(object.keygen_threshold_weight);
        }
        if (object.signing_threshold_weight !== undefined && object.signing_threshold_weight !== null) {
            message.signingThresholdWeight = bytesFromBase64(object.signing_threshold_weight);
        }
        if (object.bonded_weight !== undefined && object.bonded_weight !== null) {
            message.bondedWeight = bytesFromBase64(object.bonded_weight);
        }
        message.participants = object.participants?.map(e => KeygenParticipant.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.started_at = message.startedAt ? message.startedAt.toString() : undefined;
        obj.started_at_timestamp = message.startedAtTimestamp ? Timestamp.toAmino(message.startedAtTimestamp) : undefined;
        obj.expires_at = message.expiresAt ? message.expiresAt.toString() : undefined;
        obj.completed_at = message.completedAt ? message.completedAt.toString() : undefined;
        obj.grace_period = message.gracePeriod ? message.gracePeriod.toString() : undefined;
        obj.state = message.state;
        obj.keygen_threshold_weight = message.keygenThresholdWeight ? base64FromBytes(message.keygenThresholdWeight) : undefined;
        obj.signing_threshold_weight = message.signingThresholdWeight ? base64FromBytes(message.signingThresholdWeight) : undefined;
        obj.bonded_weight = message.bondedWeight ? base64FromBytes(message.bondedWeight) : undefined;
        if (message.participants) {
            obj.participants = message.participants.map(e => e ? KeygenParticipant.toAmino(e) : undefined);
        }
        else {
            obj.participants = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenSessionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenSessionResponse.decode(message.value);
    },
    toProto(message) {
        return KeygenSessionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenSessionResponse",
            value: KeygenSessionResponse.encode(message).finish()
        };
    }
};
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: "/axelar.multisig.v1beta1.ParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.ParamsRequest",
            value: ParamsRequest.encode(message).finish()
        };
    }
};
function createBaseParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const ParamsResponse = {
    typeUrl: "/axelar.multisig.v1beta1.ParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.ParamsResponse",
            value: ParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map