import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseVoteRequest() {
    return {
        sender: new Uint8Array(),
        pollId: BigInt(0),
        vote: undefined
    };
}
export const VoteRequest = {
    typeUrl: "/axelar.vote.v1beta1.VoteRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.pollId !== BigInt(0)) {
            writer.uint32(32).uint64(message.pollId);
        }
        if (message.vote !== undefined) {
            Any.encode(message.vote, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0),
            vote: isSet(object.vote) ? Any.fromJSON(object.vote) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseVoteRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
        message.vote = object.vote !== undefined && object.vote !== null ? Any.fromPartial(object.vote) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseVoteRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.poll_id !== undefined && object.poll_id !== null) {
            message.pollId = BigInt(object.poll_id);
        }
        if (object.vote !== undefined && object.vote !== null) {
            message.vote = Github_com_cosmos_codec_ProtoMarshaler_FromAmino(object.vote);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
        obj.vote = message.vote ? Github_com_cosmos_codec_ProtoMarshaler_ToAmino(message.vote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return VoteRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VoteRequest.decode(message.value);
    },
    toProto(message) {
        return VoteRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.vote.v1beta1.VoteRequest",
            value: VoteRequest.encode(message).finish()
        };
    }
};
function createBaseVoteResponse() {
    return {
        log: ""
    };
}
export const VoteResponse = {
    typeUrl: "/axelar.vote.v1beta1.VoteResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.log !== "") {
            writer.uint32(10).string(message.log);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            log: isSet(object.log) ? String(object.log) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseVoteResponse();
        message.log = object.log ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseVoteResponse();
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.log = message.log;
        return obj;
    },
    fromAminoMsg(object) {
        return VoteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VoteResponse.decode(message.value);
    },
    toProto(message) {
        return VoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.vote.v1beta1.VoteResponse",
            value: VoteResponse.encode(message).finish()
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
//# sourceMappingURL=tx.js.map