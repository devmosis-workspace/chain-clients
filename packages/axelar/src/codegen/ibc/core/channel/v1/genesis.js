import { IdentifiedChannel, PacketState } from "./channel";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
function createBaseGenesisState() {
    return {
        channels: [],
        acknowledgements: [],
        commitments: [],
        receipts: [],
        sendSequences: [],
        recvSequences: [],
        ackSequences: [],
        nextChannelSequence: BigInt(0)
    };
}
export const GenesisState = {
    typeUrl: "/ibc.core.channel.v1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.acknowledgements) {
            PacketState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commitments) {
            PacketState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.receipts) {
            PacketState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sendSequences) {
            PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.recvSequences) {
            PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.ackSequences) {
            PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.nextChannelSequence !== BigInt(0)) {
            writer.uint32(64).uint64(message.nextChannelSequence);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => PacketState.fromJSON(e)) : [],
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => PacketState.fromJSON(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => PacketState.fromJSON(e)) : [],
            sendSequences: Array.isArray(object?.sendSequences) ? object.sendSequences.map((e) => PacketSequence.fromJSON(e)) : [],
            recvSequences: Array.isArray(object?.recvSequences) ? object.recvSequences.map((e) => PacketSequence.fromJSON(e)) : [],
            ackSequences: Array.isArray(object?.ackSequences) ? object.ackSequences.map((e) => PacketSequence.fromJSON(e)) : [],
            nextChannelSequence: isSet(object.nextChannelSequence) ? BigInt(object.nextChannelSequence.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
        message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
        message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
        message.receipts = object.receipts?.map(e => PacketState.fromPartial(e)) || [];
        message.sendSequences = object.sendSequences?.map(e => PacketSequence.fromPartial(e)) || [];
        message.recvSequences = object.recvSequences?.map(e => PacketSequence.fromPartial(e)) || [];
        message.ackSequences = object.ackSequences?.map(e => PacketSequence.fromPartial(e)) || [];
        message.nextChannelSequence = object.nextChannelSequence !== undefined && object.nextChannelSequence !== null ? BigInt(object.nextChannelSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.channels = object.channels?.map(e => IdentifiedChannel.fromAmino(e)) || [];
        message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromAmino(e)) || [];
        message.commitments = object.commitments?.map(e => PacketState.fromAmino(e)) || [];
        message.receipts = object.receipts?.map(e => PacketState.fromAmino(e)) || [];
        message.sendSequences = object.send_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
        message.recvSequences = object.recv_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
        message.ackSequences = object.ack_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
        if (object.next_channel_sequence !== undefined && object.next_channel_sequence !== null) {
            message.nextChannelSequence = BigInt(object.next_channel_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.sendSequences) {
            obj.send_sequences = message.sendSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.send_sequences = [];
        }
        if (message.recvSequences) {
            obj.recv_sequences = message.recvSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.recv_sequences = [];
        }
        if (message.ackSequences) {
            obj.ack_sequences = message.ackSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.ack_sequences = [];
        }
        obj.next_channel_sequence = message.nextChannelSequence ? message.nextChannelSequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBasePacketSequence() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0)
    };
}
export const PacketSequence = {
    typeUrl: "/ibc.core.channel.v1.PacketSequence",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBasePacketSequence();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePacketSequence();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PacketSequence.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketSequence",
            value: PacketSequence.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketSequence.decode(message.value);
    },
    toProto(message) {
        return PacketSequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketSequence",
            value: PacketSequence.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map