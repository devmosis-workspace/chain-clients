import { Height } from "../../client/v1/client";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export var State;
(function (State) {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
    /** STATE_INIT - A channel has just started the opening handshake. */
    State[State["STATE_INIT"] = 1] = "STATE_INIT";
    /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */
    State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
    /**
     * STATE_OPEN - A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     */
    State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
    /**
     * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
     * packets.
     */
    State[State["STATE_CLOSED"] = 4] = "STATE_CLOSED";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (State = {}));
export const StateSDKType = State;
export const StateAmino = State;
export function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNINITIALIZED_UNSPECIFIED":
            return State.STATE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "STATE_INIT":
            return State.STATE_INIT;
        case 2:
        case "STATE_TRYOPEN":
            return State.STATE_TRYOPEN;
        case 3:
        case "STATE_OPEN":
            return State.STATE_OPEN;
        case 4:
        case "STATE_CLOSED":
            return State.STATE_CLOSED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
export function stateToJSON(object) {
    switch (object) {
        case State.STATE_UNINITIALIZED_UNSPECIFIED:
            return "STATE_UNINITIALIZED_UNSPECIFIED";
        case State.STATE_INIT:
            return "STATE_INIT";
        case State.STATE_TRYOPEN:
            return "STATE_TRYOPEN";
        case State.STATE_OPEN:
            return "STATE_OPEN";
        case State.STATE_CLOSED:
            return "STATE_CLOSED";
        case State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Order defines if a channel is ORDERED or UNORDERED */
export var Order;
(function (Order) {
    /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
    Order[Order["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
    /**
     * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     */
    Order[Order["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
    /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */
    Order[Order["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
    Order[Order["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order || (Order = {}));
export const OrderSDKType = Order;
export const OrderAmino = Order;
export function orderFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_NONE_UNSPECIFIED":
            return Order.ORDER_NONE_UNSPECIFIED;
        case 1:
        case "ORDER_UNORDERED":
            return Order.ORDER_UNORDERED;
        case 2:
        case "ORDER_ORDERED":
            return Order.ORDER_ORDERED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Order.UNRECOGNIZED;
    }
}
export function orderToJSON(object) {
    switch (object) {
        case Order.ORDER_NONE_UNSPECIFIED:
            return "ORDER_NONE_UNSPECIFIED";
        case Order.ORDER_UNORDERED:
            return "ORDER_UNORDERED";
        case Order.ORDER_ORDERED:
            return "ORDER_ORDERED";
        case Order.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: Counterparty.fromPartial({}),
        connectionHops: [],
        version: ""
    };
}
export const Channel = {
    typeUrl: "/ibc.core.channel.v1.Channel",
    encode(message, writer = BinaryWriter.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.connectionHops) {
            writer.uint32(34).string(v);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            connectionHops: Array.isArray(object?.connectionHops) ? object.connectionHops.map((e) => String(e)) : [],
            version: isSet(object.version) ? String(object.version) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseChannel();
        message.state = object.state ?? 0;
        message.ordering = object.ordering ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.connectionHops = object.connectionHops?.map(e => e) || [];
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChannel();
        if (object.state !== undefined && object.state !== null) {
            message.state = stateFromJSON(object.state);
        }
        if (object.ordering !== undefined && object.ordering !== null) {
            message.ordering = orderFromJSON(object.ordering);
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = Counterparty.fromAmino(object.counterparty);
        }
        message.connectionHops = object.connection_hops?.map(e => e) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state;
        obj.ordering = message.ordering;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        if (message.connectionHops) {
            obj.connection_hops = message.connectionHops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return Channel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Channel",
            value: Channel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Channel.decode(message.value);
    },
    toProto(message) {
        return Channel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Channel",
            value: Channel.encode(message).finish()
        };
    }
};
function createBaseIdentifiedChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: Counterparty.fromPartial({}),
        connectionHops: [],
        version: "",
        portId: "",
        channelId: ""
    };
}
export const IdentifiedChannel = {
    typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
    encode(message, writer = BinaryWriter.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.connectionHops) {
            writer.uint32(34).string(v);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.portId !== "") {
            writer.uint32(50).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(58).string(message.channelId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            connectionHops: Array.isArray(object?.connectionHops) ? object.connectionHops.map((e) => String(e)) : [],
            version: isSet(object.version) ? String(object.version) : "",
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseIdentifiedChannel();
        message.state = object.state ?? 0;
        message.ordering = object.ordering ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.connectionHops = object.connectionHops?.map(e => e) || [];
        message.version = object.version ?? "";
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseIdentifiedChannel();
        if (object.state !== undefined && object.state !== null) {
            message.state = stateFromJSON(object.state);
        }
        if (object.ordering !== undefined && object.ordering !== null) {
            message.ordering = orderFromJSON(object.ordering);
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = Counterparty.fromAmino(object.counterparty);
        }
        message.connectionHops = object.connection_hops?.map(e => e) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state;
        obj.ordering = message.ordering;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        if (message.connectionHops) {
            obj.connection_hops = message.connectionHops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        obj.version = message.version;
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return IdentifiedChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedChannel",
            value: IdentifiedChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IdentifiedChannel.decode(message.value);
    },
    toProto(message) {
        return IdentifiedChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
            value: IdentifiedChannel.encode(message).finish()
        };
    }
};
function createBaseCounterparty() {
    return {
        portId: "",
        channelId: ""
    };
}
export const Counterparty = {
    typeUrl: "/ibc.core.channel.v1.Counterparty",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCounterparty();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCounterparty();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return Counterparty.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Counterparty",
            value: Counterparty.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Counterparty.decode(message.value);
    },
    toProto(message) {
        return Counterparty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Counterparty",
            value: Counterparty.encode(message).finish()
        };
    }
};
function createBasePacket() {
    return {
        sequence: BigInt(0),
        sourcePort: "",
        sourceChannel: "",
        destinationPort: "",
        destinationChannel: "",
        data: new Uint8Array(),
        timeoutHeight: Height.fromPartial({}),
        timeoutTimestamp: BigInt(0)
    };
}
export const Packet = {
    typeUrl: "/ibc.core.channel.v1.Packet",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.sourcePort !== "") {
            writer.uint32(18).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(26).string(message.sourceChannel);
        }
        if (message.destinationPort !== "") {
            writer.uint32(34).string(message.destinationPort);
        }
        if (message.destinationChannel !== "") {
            writer.uint32(42).string(message.destinationChannel);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.timeoutHeight !== undefined) {
            Height.encode(message.timeoutHeight, writer.uint32(58).fork()).ldelim();
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(64).uint64(message.timeoutTimestamp);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
            sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
            destinationPort: isSet(object.destinationPort) ? String(object.destinationPort) : "",
            destinationChannel: isSet(object.destinationChannel) ? String(object.destinationChannel) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            timeoutHeight: isSet(object.timeoutHeight) ? Height.fromJSON(object.timeoutHeight) : undefined,
            timeoutTimestamp: isSet(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBasePacket();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.sourcePort = object.sourcePort ?? "";
        message.sourceChannel = object.sourceChannel ?? "";
        message.destinationPort = object.destinationPort ?? "";
        message.destinationChannel = object.destinationChannel ?? "";
        message.data = object.data ?? new Uint8Array();
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : undefined;
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePacket();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.source_port !== undefined && object.source_port !== null) {
            message.sourcePort = object.source_port;
        }
        if (object.source_channel !== undefined && object.source_channel !== null) {
            message.sourceChannel = object.source_channel;
        }
        if (object.destination_port !== undefined && object.destination_port !== null) {
            message.destinationPort = object.destination_port;
        }
        if (object.destination_channel !== undefined && object.destination_channel !== null) {
            message.destinationChannel = object.destination_channel;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = Height.fromAmino(object.timeout_height);
        }
        if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
            message.timeoutTimestamp = BigInt(object.timeout_timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.source_port = message.sourcePort;
        obj.source_channel = message.sourceChannel;
        obj.destination_port = message.destinationPort;
        obj.destination_channel = message.destinationChannel;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.timeout_height = message.timeoutHeight ? Height.toAmino(message.timeoutHeight) : {};
        obj.timeout_timestamp = message.timeoutTimestamp ? message.timeoutTimestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Packet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Packet",
            value: Packet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Packet.decode(message.value);
    },
    toProto(message) {
        return Packet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Packet",
            value: Packet.encode(message).finish()
        };
    }
};
function createBasePacketState() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0),
        data: new Uint8Array()
    };
}
export const PacketState = {
    typeUrl: "/ibc.core.channel.v1.PacketState",
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
        if (message.data.length !== 0) {
            writer.uint32(34).bytes(message.data);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBasePacketState();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePacketState();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PacketState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketState",
            value: PacketState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketState.decode(message.value);
    },
    toProto(message) {
        return PacketState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketState",
            value: PacketState.encode(message).finish()
        };
    }
};
function createBasePacketId() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0)
    };
}
export const PacketId = {
    typeUrl: "/ibc.core.channel.v1.PacketId",
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
        const message = createBasePacketId();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePacketId();
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
        return PacketId.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketId",
            value: PacketId.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketId.decode(message.value);
    },
    toProto(message) {
        return PacketId.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketId",
            value: PacketId.encode(message).finish()
        };
    }
};
function createBaseAcknowledgement() {
    return {
        result: undefined,
        error: undefined
    };
}
export const Acknowledgement = {
    typeUrl: "/ibc.core.channel.v1.Acknowledgement",
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== undefined) {
            writer.uint32(170).bytes(message.result);
        }
        if (message.error !== undefined) {
            writer.uint32(178).string(message.error);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            result: isSet(object.result) ? bytesFromBase64(object.result) : undefined,
            error: isSet(object.error) ? String(object.error) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseAcknowledgement();
        message.result = object.result ?? undefined;
        message.error = object.error ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAcknowledgement();
        if (object.result !== undefined && object.result !== null) {
            message.result = bytesFromBase64(object.result);
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result ? base64FromBytes(message.result) : undefined;
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return Acknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Acknowledgement",
            value: Acknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Acknowledgement.decode(message.value);
    },
    toProto(message) {
        return Acknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Acknowledgement",
            value: Acknowledgement.encode(message).finish()
        };
    }
};
//# sourceMappingURL=channel.js.map