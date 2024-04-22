import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, IdentifiedChannel, PacketState } from "./channel";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseQueryChannelRequest() {
    return {
        portId: "",
        channelId: ""
    };
}
export const QueryChannelRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
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
        const message = createBaseQueryChannelRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelRequest();
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
        return QueryChannelRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelRequest",
            value: QueryChannelRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
            value: QueryChannelRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelResponse() {
    return {
        channel: undefined,
        proof: new Uint8Array(),
        proofHeight: Height.fromPartial({})
    };
}
export const QueryChannelResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.channel !== undefined) {
            Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryChannelResponse();
        message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelResponse();
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = Channel.fromAmino(object.channel);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = bytesFromBase64(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelResponse",
            value: QueryChannelResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
            value: QueryChannelResponse.encode(message).finish()
        };
    }
};
function createBaseQueryChannelsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryChannelsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelsRequest",
            value: QueryChannelsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
            value: QueryChannelsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelsResponse() {
    return {
        channels: [],
        pagination: undefined,
        height: Height.fromPartial({})
    };
}
export const QueryChannelsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsResponse();
        message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelsResponse();
        message.channels = object.channels?.map(e => IdentifiedChannel.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromAmino(object.height);
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelsResponse",
            value: QueryChannelsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
            value: QueryChannelsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionChannelsRequest() {
    return {
        connection: "",
        pagination: undefined
    };
}
export const QueryConnectionChannelsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.connection !== "") {
            writer.uint32(10).string(message.connection);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            connection: isSet(object.connection) ? String(object.connection) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsRequest();
        message.connection = object.connection ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionChannelsRequest();
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = object.connection;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection = message.connection;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionChannelsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionChannelsRequest",
            value: QueryConnectionChannelsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionChannelsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionChannelsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
            value: QueryConnectionChannelsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionChannelsResponse() {
    return {
        channels: [],
        pagination: undefined,
        height: Height.fromPartial({})
    };
}
export const QueryConnectionChannelsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsResponse();
        message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionChannelsResponse();
        message.channels = object.channels?.map(e => IdentifiedChannel.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromAmino(object.height);
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionChannelsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionChannelsResponse",
            value: QueryConnectionChannelsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionChannelsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionChannelsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
            value: QueryConnectionChannelsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryChannelClientStateRequest() {
    return {
        portId: "",
        channelId: ""
    };
}
export const QueryChannelClientStateRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
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
        const message = createBaseQueryChannelClientStateRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelClientStateRequest();
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
        return QueryChannelClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelClientStateRequest",
            value: QueryChannelClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
            value: QueryChannelClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelClientStateResponse() {
    return {
        identifiedClientState: undefined,
        proof: new Uint8Array(),
        proofHeight: Height.fromPartial({})
    };
}
export const QueryChannelClientStateResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.identifiedClientState !== undefined) {
            IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            identifiedClientState: isSet(object.identifiedClientState) ? IdentifiedClientState.fromJSON(object.identifiedClientState) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryChannelClientStateResponse();
        message.identifiedClientState = object.identifiedClientState !== undefined && object.identifiedClientState !== null ? IdentifiedClientState.fromPartial(object.identifiedClientState) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelClientStateResponse();
        if (object.identified_client_state !== undefined && object.identified_client_state !== null) {
            message.identifiedClientState = IdentifiedClientState.fromAmino(object.identified_client_state);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = bytesFromBase64(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.identified_client_state = message.identifiedClientState ? IdentifiedClientState.toAmino(message.identifiedClientState) : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelClientStateResponse",
            value: QueryChannelClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
            value: QueryChannelClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryChannelConsensusStateRequest() {
    return {
        portId: "",
        channelId: "",
        revisionNumber: BigInt(0),
        revisionHeight: BigInt(0)
    };
}
export const QueryChannelConsensusStateRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.revisionNumber !== BigInt(0)) {
            writer.uint32(24).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.revisionHeight);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            revisionNumber: isSet(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt(0),
            revisionHeight: isSet(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseQueryChannelConsensusStateRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
        message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelConsensusStateRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.revision_number !== undefined && object.revision_number !== null) {
            message.revisionNumber = BigInt(object.revision_number);
        }
        if (object.revision_height !== undefined && object.revision_height !== null) {
            message.revisionHeight = BigInt(object.revision_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.revision_number = message.revisionNumber ? message.revisionNumber.toString() : undefined;
        obj.revision_height = message.revisionHeight ? message.revisionHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelConsensusStateRequest",
            value: QueryChannelConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
            value: QueryChannelConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelConsensusStateResponse() {
    return {
        consensusState: undefined,
        clientId: "",
        proof: new Uint8Array(),
        proofHeight: Height.fromPartial({})
    };
}
export const QueryChannelConsensusStateResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryChannelConsensusStateResponse();
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
        message.clientId = object.clientId ?? "";
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelConsensusStateResponse();
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensusState = Any.fromAmino(object.consensus_state);
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = bytesFromBase64(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
        obj.client_id = message.clientId;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelConsensusStateResponse",
            value: QueryChannelConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
            value: QueryChannelConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentRequest() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0)
    };
}
export const QueryPacketCommitmentRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
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
        const message = createBaseQueryPacketCommitmentRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketCommitmentRequest();
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
        return QueryPacketCommitmentRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentRequest",
            value: QueryPacketCommitmentRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
            value: QueryPacketCommitmentRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentResponse() {
    return {
        commitment: new Uint8Array(),
        proof: new Uint8Array(),
        proofHeight: Height.fromPartial({})
    };
}
export const QueryPacketCommitmentResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.commitment.length !== 0) {
            writer.uint32(10).bytes(message.commitment);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentResponse();
        message.commitment = object.commitment ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketCommitmentResponse();
        if (object.commitment !== undefined && object.commitment !== null) {
            message.commitment = bytesFromBase64(object.commitment);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = bytesFromBase64(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.commitment = message.commitment ? base64FromBytes(message.commitment) : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketCommitmentResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentResponse",
            value: QueryPacketCommitmentResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
            value: QueryPacketCommitmentResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentsRequest() {
    return {
        portId: "",
        channelId: "",
        pagination: undefined
    };
}
export const QueryPacketCommitmentsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketCommitmentsRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketCommitmentsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentsRequest",
            value: QueryPacketCommitmentsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
            value: QueryPacketCommitmentsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentsResponse() {
    return {
        commitments: [],
        pagination: undefined,
        height: Height.fromPartial({})
    };
}
export const QueryPacketCommitmentsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.commitments) {
            PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => PacketState.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsResponse();
        message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketCommitmentsResponse();
        message.commitments = object.commitments?.map(e => PacketState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketCommitmentsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentsResponse",
            value: QueryPacketCommitmentsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
            value: QueryPacketCommitmentsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketReceiptRequest() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0)
    };
}
export const QueryPacketReceiptRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
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
        const message = createBaseQueryPacketReceiptRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketReceiptRequest();
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
        return QueryPacketReceiptRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketReceiptRequest",
            value: QueryPacketReceiptRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketReceiptRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketReceiptRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
            value: QueryPacketReceiptRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketReceiptResponse() {
    return {
        received: false,
        proof: new Uint8Array(),
        proofHeight: Height.fromPartial({})
    };
}
export const QueryPacketReceiptResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.received === true) {
            writer.uint32(16).bool(message.received);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            received: isSet(object.received) ? Boolean(object.received) : false,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryPacketReceiptResponse();
        message.received = object.received ?? false;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketReceiptResponse();
        if (object.received !== undefined && object.received !== null) {
            message.received = object.received;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = bytesFromBase64(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.received = message.received;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketReceiptResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketReceiptResponse",
            value: QueryPacketReceiptResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketReceiptResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketReceiptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
            value: QueryPacketReceiptResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementRequest() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0)
    };
}
export const QueryPacketAcknowledgementRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
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
        const message = createBaseQueryPacketAcknowledgementRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketAcknowledgementRequest();
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
        return QueryPacketAcknowledgementRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementRequest",
            value: QueryPacketAcknowledgementRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
            value: QueryPacketAcknowledgementRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementResponse() {
    return {
        acknowledgement: new Uint8Array(),
        proof: new Uint8Array(),
        proofHeight: Height.fromPartial({})
    };
}
export const QueryPacketAcknowledgementResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.acknowledgement.length !== 0) {
            writer.uint32(10).bytes(message.acknowledgement);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementResponse();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketAcknowledgementResponse();
        if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
            message.acknowledgement = bytesFromBase64(object.acknowledgement);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = bytesFromBase64(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketAcknowledgementResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementResponse",
            value: QueryPacketAcknowledgementResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
            value: QueryPacketAcknowledgementResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementsRequest() {
    return {
        portId: "",
        channelId: "",
        pagination: undefined,
        packetCommitmentSequences: []
    };
}
export const QueryPacketAcknowledgementsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.packetCommitmentSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences) ? object.packetCommitmentSequences.map((e) => BigInt(e.toString())) : []
        };
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.packetCommitmentSequences = object.packetCommitmentSequences?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketAcknowledgementsRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        message.packetCommitmentSequences = object.packet_commitment_sequences?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        if (message.packetCommitmentSequences) {
            obj.packet_commitment_sequences = message.packetCommitmentSequences.map(e => e.toString());
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketAcknowledgementsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
            value: QueryPacketAcknowledgementsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
            value: QueryPacketAcknowledgementsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementsResponse() {
    return {
        acknowledgements: [],
        pagination: undefined,
        height: Height.fromPartial({})
    };
}
export const QueryPacketAcknowledgementsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.acknowledgements) {
            PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => PacketState.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsResponse();
        message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketAcknowledgementsResponse();
        message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketAcknowledgementsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
            value: QueryPacketAcknowledgementsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
            value: QueryPacketAcknowledgementsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedPacketsRequest() {
    return {
        portId: "",
        channelId: "",
        packetCommitmentSequences: []
    };
}
export const QueryUnreceivedPacketsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        writer.uint32(26).fork();
        for (const v of message.packetCommitmentSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences) ? object.packetCommitmentSequences.map((e) => BigInt(e.toString())) : []
        };
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.packetCommitmentSequences = object.packetCommitmentSequences?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUnreceivedPacketsRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        message.packetCommitmentSequences = object.packet_commitment_sequences?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        if (message.packetCommitmentSequences) {
            obj.packet_commitment_sequences = message.packetCommitmentSequences.map(e => e.toString());
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnreceivedPacketsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedPacketsRequest",
            value: QueryUnreceivedPacketsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedPacketsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedPacketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
            value: QueryUnreceivedPacketsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedPacketsResponse() {
    return {
        sequences: [],
        height: Height.fromPartial({})
    };
}
export const QueryUnreceivedPacketsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => BigInt(e.toString())) : [],
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = object.sequences?.map(e => BigInt(e)) || [];
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e.toString());
        }
        else {
            obj.sequences = [];
        }
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnreceivedPacketsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedPacketsResponse",
            value: QueryUnreceivedPacketsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedPacketsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedPacketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
            value: QueryUnreceivedPacketsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedAcksRequest() {
    return {
        portId: "",
        channelId: "",
        packetAckSequences: []
    };
}
export const QueryUnreceivedAcksRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        writer.uint32(26).fork();
        for (const v of message.packetAckSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            packetAckSequences: Array.isArray(object?.packetAckSequences) ? object.packetAckSequences.map((e) => BigInt(e.toString())) : []
        };
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.packetAckSequences = object.packetAckSequences?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUnreceivedAcksRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        message.packetAckSequences = object.packet_ack_sequences?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        if (message.packetAckSequences) {
            obj.packet_ack_sequences = message.packetAckSequences.map(e => e.toString());
        }
        else {
            obj.packet_ack_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnreceivedAcksRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedAcksRequest",
            value: QueryUnreceivedAcksRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedAcksRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedAcksRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
            value: QueryUnreceivedAcksRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedAcksResponse() {
    return {
        sequences: [],
        height: Height.fromPartial({})
    };
}
export const QueryUnreceivedAcksResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => BigInt(e.toString())) : [],
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = object.sequences?.map(e => BigInt(e)) || [];
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e.toString());
        }
        else {
            obj.sequences = [];
        }
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnreceivedAcksResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedAcksResponse",
            value: QueryUnreceivedAcksResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedAcksResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedAcksResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
            value: QueryUnreceivedAcksResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNextSequenceReceiveRequest() {
    return {
        portId: "",
        channelId: ""
    };
}
export const QueryNextSequenceReceiveRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
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
        const message = createBaseQueryNextSequenceReceiveRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryNextSequenceReceiveRequest();
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
        return QueryNextSequenceReceiveRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceReceiveRequest",
            value: QueryNextSequenceReceiveRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNextSequenceReceiveRequest.decode(message.value);
    },
    toProto(message) {
        return QueryNextSequenceReceiveRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
            value: QueryNextSequenceReceiveRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNextSequenceReceiveResponse() {
    return {
        nextSequenceReceive: BigInt(0),
        proof: new Uint8Array(),
        proofHeight: Height.fromPartial({})
    };
}
export const QueryNextSequenceReceiveResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nextSequenceReceive !== BigInt(0)) {
            writer.uint32(8).uint64(message.nextSequenceReceive);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            nextSequenceReceive: isSet(object.nextSequenceReceive) ? BigInt(object.nextSequenceReceive.toString()) : BigInt(0),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceReceiveResponse();
        message.nextSequenceReceive = object.nextSequenceReceive !== undefined && object.nextSequenceReceive !== null ? BigInt(object.nextSequenceReceive.toString()) : BigInt(0);
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryNextSequenceReceiveResponse();
        if (object.next_sequence_receive !== undefined && object.next_sequence_receive !== null) {
            message.nextSequenceReceive = BigInt(object.next_sequence_receive);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = bytesFromBase64(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.next_sequence_receive = message.nextSequenceReceive ? message.nextSequenceReceive.toString() : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryNextSequenceReceiveResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceReceiveResponse",
            value: QueryNextSequenceReceiveResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNextSequenceReceiveResponse.decode(message.value);
    },
    toProto(message) {
        return QueryNextSequenceReceiveResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
            value: QueryNextSequenceReceiveResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map