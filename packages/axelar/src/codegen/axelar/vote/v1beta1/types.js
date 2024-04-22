import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, isObject, base64FromBytes } from "../../../helpers";
function createBaseTalliedVote_IsVoterLateEntry() {
    return {
        key: "",
        value: false
    };
}
export const TalliedVote_IsVoterLateEntry = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value === true) {
            writer.uint32(16).bool(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? Boolean(object.value) : false
        };
    },
    fromPartial(object) {
        const message = createBaseTalliedVote_IsVoterLateEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTalliedVote_IsVoterLateEntry();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return TalliedVote_IsVoterLateEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TalliedVote_IsVoterLateEntry.decode(message.value);
    },
    toProto(message) {
        return TalliedVote_IsVoterLateEntry.encode(message).finish();
    }
};
function createBaseTalliedVote() {
    return {
        tally: new Uint8Array(),
        data: undefined,
        pollId: BigInt(0),
        isVoterLate: {}
    };
}
export const TalliedVote = {
    typeUrl: "/axelar.vote.v1beta1.TalliedVote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tally.length !== 0) {
            writer.uint32(10).bytes(message.tally);
        }
        if (message.data !== undefined) {
            Any.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        if (message.pollId !== BigInt(0)) {
            writer.uint32(32).uint64(message.pollId);
        }
        Object.entries(message.isVoterLate).forEach(([key, value]) => {
            TalliedVote_IsVoterLateEntry.encode({
                key: key,
                value
            }, writer.uint32(40).fork()).ldelim();
        });
        return writer;
    },
    fromJSON(object) {
        return {
            tally: isSet(object.tally) ? bytesFromBase64(object.tally) : new Uint8Array(),
            data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
            pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0),
            isVoterLate: isObject(object.isVoterLate) ? Object.entries(object.isVoterLate).reduce((acc, [key, value]) => {
                acc[key] = bool.fromJSON(value);
                return acc;
            }, {}) : {}
        };
    },
    fromPartial(object) {
        const message = createBaseTalliedVote();
        message.tally = object.tally ?? new Uint8Array();
        message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
        message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
        message.isVoterLate = Object.entries(object.isVoterLate ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = bool.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
    fromAmino(object) {
        const message = createBaseTalliedVote();
        if (object.tally !== undefined && object.tally !== null) {
            message.tally = bytesFromBase64(object.tally);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Github_com_cosmos_codec_ProtoMarshaler_FromAmino(object.data);
        }
        if (object.poll_id !== undefined && object.poll_id !== null) {
            message.pollId = BigInt(object.poll_id);
        }
        message.isVoterLate = Object.entries(object.is_voter_late ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = bool.fromAmino(value);
            }
            return acc;
        }, {});
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tally = message.tally ? base64FromBytes(message.tally) : undefined;
        obj.data = message.data ? Github_com_cosmos_codec_ProtoMarshaler_ToAmino(message.data) : undefined;
        obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
        obj.is_voter_late = {};
        if (message.isVoterLate) {
            Object.entries(message.isVoterLate).forEach(([k, v]) => {
                obj.is_voter_late[k] = bool.toAmino(v);
            });
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TalliedVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TalliedVote.decode(message.value);
    },
    toProto(message) {
        return TalliedVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.vote.v1beta1.TalliedVote",
            value: TalliedVote.encode(message).finish()
        };
    }
};
export const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
export const Github_com_cosmos_codec_ProtoMarshaler_FromAmino = (content) => {
    return Any.fromAmino(content);
};
export const Github_com_cosmos_codec_ProtoMarshaler_ToAmino = (content) => {
    return Any.toAmino(content);
};
//# sourceMappingURL=types.js.map