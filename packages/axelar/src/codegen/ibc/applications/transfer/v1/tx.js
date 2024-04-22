import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../core/client/v1/client";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
function createBaseMsgTransfer() {
    return {
        sourcePort: "",
        sourceChannel: "",
        token: Coin.fromPartial({}),
        sender: "",
        receiver: "",
        timeoutHeight: Height.fromPartial({}),
        timeoutTimestamp: BigInt(0),
        memo: ""
    };
}
export const MsgTransfer = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sourcePort !== "") {
            writer.uint32(10).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(18).string(message.sourceChannel);
        }
        if (message.token !== undefined) {
            Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeoutHeight !== undefined) {
            Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(56).uint64(message.timeoutTimestamp);
        }
        if (message.memo !== "") {
            writer.uint32(66).string(message.memo);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
            sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
            token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            timeoutHeight: isSet(object.timeoutHeight) ? Height.fromJSON(object.timeoutHeight) : undefined,
            timeoutTimestamp: isSet(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0),
            memo: isSet(object.memo) ? String(object.memo) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgTransfer();
        message.sourcePort = object.sourcePort ?? "";
        message.sourceChannel = object.sourceChannel ?? "";
        message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : undefined;
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        message.memo = object.memo ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTransfer();
        if (object.source_port !== undefined && object.source_port !== null) {
            message.sourcePort = object.source_port;
        }
        if (object.source_channel !== undefined && object.source_channel !== null) {
            message.sourceChannel = object.source_channel;
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = Coin.fromAmino(object.token);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = Height.fromAmino(object.timeout_height);
        }
        if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
            message.timeoutTimestamp = BigInt(object.timeout_timestamp);
        }
        if (object.memo !== undefined && object.memo !== null) {
            message.memo = object.memo;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.source_port = message.sourcePort;
        obj.source_channel = message.sourceChannel;
        obj.token = message.token ? Coin.toAmino(message.token) : undefined;
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        obj.timeout_height = message.timeoutHeight ? Height.toAmino(message.timeoutHeight) : {};
        obj.timeout_timestamp = message.timeoutTimestamp ? message.timeoutTimestamp.toString() : undefined;
        obj.memo = message.memo;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransfer",
            value: MsgTransfer.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTransfer.decode(message.value);
    },
    toProto(message) {
        return MsgTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
            value: MsgTransfer.encode(message).finish()
        };
    }
};
function createBaseMsgTransferResponse() {
    return {
        sequence: BigInt(0)
    };
}
export const MsgTransferResponse = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
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
        const message = createBaseMsgTransferResponse();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTransferResponse();
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
        return MsgTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransferResponse",
            value: MsgTransferResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTransferResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
            value: MsgTransferResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map