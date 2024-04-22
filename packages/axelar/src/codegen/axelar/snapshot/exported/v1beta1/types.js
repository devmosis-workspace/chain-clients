import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, isObject } from "../../../../helpers";
function createBaseParticipant() {
    return {
        address: new Uint8Array(),
        weight: new Uint8Array()
    };
}
export const Participant = {
    typeUrl: "/axelar.snapshot.exported.v1beta1.Participant",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.weight.length !== 0) {
            writer.uint32(18).bytes(message.weight);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            weight: isSet(object.weight) ? bytesFromBase64(object.weight) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseParticipant();
        message.address = object.address ?? new Uint8Array();
        message.weight = object.weight ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseParticipant();
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = bytesFromBase64(object.weight);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        obj.weight = message.weight ? base64FromBytes(message.weight) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Participant.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Participant.decode(message.value);
    },
    toProto(message) {
        return Participant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.exported.v1beta1.Participant",
            value: Participant.encode(message).finish()
        };
    }
};
function createBaseSnapshot_ParticipantsEntry() {
    return {
        key: "",
        value: undefined
    };
}
export const Snapshot_ParticipantsEntry = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Participant.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? Participant.fromJSON(object.value) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseSnapshot_ParticipantsEntry();
        message.key = object.key ?? "";
        message.value = object.value !== undefined && object.value !== null ? Participant.fromPartial(object.value) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSnapshot_ParticipantsEntry();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Participant.fromAmino(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value ? Participant.toAmino(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Snapshot_ParticipantsEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Snapshot_ParticipantsEntry.decode(message.value);
    },
    toProto(message) {
        return Snapshot_ParticipantsEntry.encode(message).finish();
    }
};
function createBaseSnapshot() {
    return {
        timestamp: Timestamp.fromPartial({}),
        height: BigInt(0),
        participants: {},
        bondedWeight: new Uint8Array()
    };
}
export const Snapshot = {
    typeUrl: "/axelar.snapshot.exported.v1beta1.Snapshot",
    encode(message, writer = BinaryWriter.create()) {
        if (message.timestamp !== undefined) {
            Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        Object.entries(message.participants).forEach(([key, value]) => {
            Snapshot_ParticipantsEntry.encode({
                key: key,
                value
            }, writer.uint32(66).fork()).ldelim();
        });
        if (message.bondedWeight.length !== 0) {
            writer.uint32(74).bytes(message.bondedWeight);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            participants: isObject(object.participants) ? Object.entries(object.participants).reduce((acc, [key, value]) => {
                acc[key] = Participant.fromJSON(value);
                return acc;
            }, {}) : {},
            bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.participants = Object.entries(object.participants ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Participant.fromPartial(value);
            }
            return acc;
        }, {});
        message.bondedWeight = object.bondedWeight ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSnapshot();
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Timestamp.fromAmino(object.timestamp);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        message.participants = Object.entries(object.participants ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Participant.fromAmino(value);
            }
            return acc;
        }, {});
        if (object.bonded_weight !== undefined && object.bonded_weight !== null) {
            message.bondedWeight = bytesFromBase64(object.bonded_weight);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.participants = {};
        if (message.participants) {
            Object.entries(message.participants).forEach(([k, v]) => {
                obj.participants[k] = Participant.toAmino(v);
            });
        }
        obj.bonded_weight = message.bondedWeight ? base64FromBytes(message.bondedWeight) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Snapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Snapshot.decode(message.value);
    },
    toProto(message) {
        return Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.exported.v1beta1.Snapshot",
            value: Snapshot.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map