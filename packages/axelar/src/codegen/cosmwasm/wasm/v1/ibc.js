import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseMsgIBCSend() {
    return {
        channel: "",
        timeoutHeight: BigInt(0),
        timeoutTimestamp: BigInt(0),
        data: new Uint8Array()
    };
}
export const MsgIBCSend = {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
    encode(message, writer = BinaryWriter.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        if (message.timeoutHeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.timeoutHeight);
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(40).uint64(message.timeoutTimestamp);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            channel: isSet(object.channel) ? String(object.channel) : "",
            timeoutHeight: isSet(object.timeoutHeight) ? BigInt(object.timeoutHeight.toString()) : BigInt(0),
            timeoutTimestamp: isSet(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMsgIBCSend();
        message.channel = object.channel ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt(0);
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgIBCSend();
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = object.channel;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = BigInt(object.timeout_height);
        }
        if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
            message.timeoutTimestamp = BigInt(object.timeout_timestamp);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel = message.channel;
        obj.timeout_height = message.timeoutHeight ? message.timeoutHeight.toString() : undefined;
        obj.timeout_timestamp = message.timeoutTimestamp ? message.timeoutTimestamp.toString() : undefined;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgIBCSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgIBCSend",
            value: MsgIBCSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgIBCSend.decode(message.value);
    },
    toProto(message) {
        return MsgIBCSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
            value: MsgIBCSend.encode(message).finish()
        };
    }
};
function createBaseMsgIBCSendResponse() {
    return {
        sequence: BigInt(0)
    };
}
export const MsgIBCSendResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCSendResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseMsgIBCSendResponse();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgIBCSendResponse();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgIBCSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgIBCSendResponse",
            value: MsgIBCSendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgIBCSendResponse.decode(message.value);
    },
    toProto(message) {
        return MsgIBCSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgIBCSendResponse",
            value: MsgIBCSendResponse.encode(message).finish()
        };
    }
};
function createBaseMsgIBCCloseChannel() {
    return {
        channel: ""
    };
}
export const MsgIBCCloseChannel = {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
    encode(message, writer = BinaryWriter.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            channel: isSet(object.channel) ? String(object.channel) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgIBCCloseChannel();
        message.channel = object.channel ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgIBCCloseChannel();
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = object.channel;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel = message.channel;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgIBCCloseChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgIBCCloseChannel",
            value: MsgIBCCloseChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgIBCCloseChannel.decode(message.value);
    },
    toProto(message) {
        return MsgIBCCloseChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
            value: MsgIBCCloseChannel.encode(message).finish()
        };
    }
};
//# sourceMappingURL=ibc.js.map