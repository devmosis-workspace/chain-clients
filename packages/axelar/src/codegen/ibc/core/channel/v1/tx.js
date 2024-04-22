import { Channel, Packet } from "./channel";
import { Height } from "../../client/v1/client";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export var ResponseResultType;
(function (ResponseResultType) {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = 0] = "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_NOOP"] = 1] = "RESPONSE_RESULT_TYPE_NOOP";
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_SUCCESS"] = 2] = "RESPONSE_RESULT_TYPE_SUCCESS";
    ResponseResultType[ResponseResultType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseResultType || (ResponseResultType = {}));
export const ResponseResultTypeSDKType = ResponseResultType;
export const ResponseResultTypeAmino = ResponseResultType;
export function responseResultTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
            return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
        case 1:
        case "RESPONSE_RESULT_TYPE_NOOP":
            return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
        case 2:
        case "RESPONSE_RESULT_TYPE_SUCCESS":
            return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseResultType.UNRECOGNIZED;
    }
}
export function responseResultTypeToJSON(object) {
    switch (object) {
        case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
            return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
        case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
            return "RESPONSE_RESULT_TYPE_NOOP";
        case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
            return "RESPONSE_RESULT_TYPE_SUCCESS";
        case ResponseResultType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgChannelOpenInit() {
    return {
        portId: "",
        channel: Channel.fromPartial({}),
        signer: ""
    };
}
export const MsgChannelOpenInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channel !== undefined) {
            Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenInit();
        message.portId = object.portId ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenInit();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = Channel.fromAmino(object.channel);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInit",
            value: MsgChannelOpenInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenInit.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
            value: MsgChannelOpenInit.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenInitResponse() {
    return {
        channelId: "",
        version: ""
    };
}
export const MsgChannelOpenInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            version: isSet(object.version) ? String(object.version) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenInitResponse();
        message.channelId = object.channelId ?? "";
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenInitResponse();
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel_id = message.channelId;
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInitResponse",
            value: MsgChannelOpenInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenInitResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
            value: MsgChannelOpenInitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenTry() {
    return {
        portId: "",
        previousChannelId: "",
        channel: Channel.fromPartial({}),
        counterpartyVersion: "",
        proofInit: new Uint8Array(),
        proofHeight: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgChannelOpenTry = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.previousChannelId !== "") {
            writer.uint32(18).string(message.previousChannelId);
        }
        if (message.channel !== undefined) {
            Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(42).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            previousChannelId: isSet(object.previousChannelId) ? String(object.previousChannelId) : "",
            channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
            counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
            proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenTry();
        message.portId = object.portId ?? "";
        message.previousChannelId = object.previousChannelId ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
        message.counterpartyVersion = object.counterpartyVersion ?? "";
        message.proofInit = object.proofInit ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenTry();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.previous_channel_id !== undefined && object.previous_channel_id !== null) {
            message.previousChannelId = object.previous_channel_id;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = Channel.fromAmino(object.channel);
        }
        if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
            message.counterpartyVersion = object.counterparty_version;
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proofInit = bytesFromBase64(object.proof_init);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.previous_channel_id = message.previousChannelId;
        obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
        obj.counterparty_version = message.counterpartyVersion;
        obj.proof_init = message.proofInit ? base64FromBytes(message.proofInit) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTry",
            value: MsgChannelOpenTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenTry.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
            value: MsgChannelOpenTry.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenTryResponse() {
    return {
        version: ""
    };
}
export const MsgChannelOpenTryResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            version: isSet(object.version) ? String(object.version) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenTryResponse();
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenTryResponse();
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTryResponse",
            value: MsgChannelOpenTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenTryResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
            value: MsgChannelOpenTryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenAck() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannelId: "",
        counterpartyVersion: "",
        proofTry: new Uint8Array(),
        proofHeight: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgChannelOpenAck = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannelId !== "") {
            writer.uint32(26).string(message.counterpartyChannelId);
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofTry.length !== 0) {
            writer.uint32(42).bytes(message.proofTry);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            counterpartyChannelId: isSet(object.counterpartyChannelId) ? String(object.counterpartyChannelId) : "",
            counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
            proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenAck();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyChannelId = object.counterpartyChannelId ?? "";
        message.counterpartyVersion = object.counterpartyVersion ?? "";
        message.proofTry = object.proofTry ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenAck();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.counterparty_channel_id !== undefined && object.counterparty_channel_id !== null) {
            message.counterpartyChannelId = object.counterparty_channel_id;
        }
        if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
            message.counterpartyVersion = object.counterparty_version;
        }
        if (object.proof_try !== undefined && object.proof_try !== null) {
            message.proofTry = bytesFromBase64(object.proof_try);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.counterparty_channel_id = message.counterpartyChannelId;
        obj.counterparty_version = message.counterpartyVersion;
        obj.proof_try = message.proofTry ? base64FromBytes(message.proofTry) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAck",
            value: MsgChannelOpenAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenAck.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
            value: MsgChannelOpenAck.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenAckResponse() {
    return {};
}
export const MsgChannelOpenAckResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAckResponse",
            value: MsgChannelOpenAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenAckResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
            value: MsgChannelOpenAckResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenConfirm() {
    return {
        portId: "",
        channelId: "",
        proofAck: new Uint8Array(),
        proofHeight: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgChannelOpenConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofAck.length !== 0) {
            writer.uint32(26).bytes(message.proofAck);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenConfirm();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.proofAck = object.proofAck ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenConfirm();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.proof_ack !== undefined && object.proof_ack !== null) {
            message.proofAck = bytesFromBase64(object.proof_ack);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.proof_ack = message.proofAck ? base64FromBytes(message.proofAck) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirm",
            value: MsgChannelOpenConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenConfirm.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
            value: MsgChannelOpenConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenConfirmResponse() {
    return {};
}
export const MsgChannelOpenConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirmResponse",
            value: MsgChannelOpenConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
            value: MsgChannelOpenConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseInit() {
    return {
        portId: "",
        channelId: "",
        signer: ""
    };
}
export const MsgChannelCloseInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgChannelCloseInit();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelCloseInit();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelCloseInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInit",
            value: MsgChannelCloseInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelCloseInit.decode(message.value);
    },
    toProto(message) {
        return MsgChannelCloseInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
            value: MsgChannelCloseInit.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseInitResponse() {
    return {};
}
export const MsgChannelCloseInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelCloseInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInitResponse",
            value: MsgChannelCloseInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelCloseInitResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelCloseInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
            value: MsgChannelCloseInitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseConfirm() {
    return {
        portId: "",
        channelId: "",
        proofInit: new Uint8Array(),
        proofHeight: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgChannelCloseConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(26).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgChannelCloseConfirm();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.proofInit = object.proofInit ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelCloseConfirm();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proofInit = bytesFromBase64(object.proof_init);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.proof_init = message.proofInit ? base64FromBytes(message.proofInit) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelCloseConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirm",
            value: MsgChannelCloseConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelCloseConfirm.decode(message.value);
    },
    toProto(message) {
        return MsgChannelCloseConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
            value: MsgChannelCloseConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseConfirmResponse() {
    return {};
}
export const MsgChannelCloseConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelCloseConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirmResponse",
            value: MsgChannelCloseConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelCloseConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelCloseConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
            value: MsgChannelCloseConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRecvPacket() {
    return {
        packet: Packet.fromPartial({}),
        proofCommitment: new Uint8Array(),
        proofHeight: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgRecvPacket = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
    encode(message, writer = BinaryWriter.create()) {
        if (message.packet !== undefined) {
            Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofCommitment.length !== 0) {
            writer.uint32(18).bytes(message.proofCommitment);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
            proofCommitment: isSet(object.proofCommitment) ? bytesFromBase64(object.proofCommitment) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgRecvPacket();
        message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
        message.proofCommitment = object.proofCommitment ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecvPacket();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = Packet.fromAmino(object.packet);
        }
        if (object.proof_commitment !== undefined && object.proof_commitment !== null) {
            message.proofCommitment = bytesFromBase64(object.proof_commitment);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
        obj.proof_commitment = message.proofCommitment ? base64FromBytes(message.proofCommitment) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRecvPacket.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacket",
            value: MsgRecvPacket.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRecvPacket.decode(message.value);
    },
    toProto(message) {
        return MsgRecvPacket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
            value: MsgRecvPacket.encode(message).finish()
        };
    }
};
function createBaseMsgRecvPacketResponse() {
    return {
        result: 0
    };
}
export const MsgRecvPacketResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseMsgRecvPacketResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecvPacketResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseResultTypeFromJSON(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRecvPacketResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacketResponse",
            value: MsgRecvPacketResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRecvPacketResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRecvPacketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
            value: MsgRecvPacketResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTimeout() {
    return {
        packet: Packet.fromPartial({}),
        proofUnreceived: new Uint8Array(),
        proofHeight: Height.fromPartial({}),
        nextSequenceRecv: BigInt(0),
        signer: ""
    };
}
export const MsgTimeout = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeout",
    encode(message, writer = BinaryWriter.create()) {
        if (message.packet !== undefined) {
            Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.nextSequenceRecv !== BigInt(0)) {
            writer.uint32(32).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
            proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            nextSequenceRecv: isSet(object.nextSequenceRecv) ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0),
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgTimeout();
        message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
        message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeout();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = Packet.fromAmino(object.packet);
        }
        if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
            message.proofUnreceived = bytesFromBase64(object.proof_unreceived);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
            message.nextSequenceRecv = BigInt(object.next_sequence_recv);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proofUnreceived ? base64FromBytes(message.proofUnreceived) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        obj.next_sequence_recv = message.nextSequenceRecv ? message.nextSequenceRecv.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTimeout.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeout",
            value: MsgTimeout.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTimeout.decode(message.value);
    },
    toProto(message) {
        return MsgTimeout.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeout",
            value: MsgTimeout.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutResponse() {
    return {
        result: 0
    };
}
export const MsgTimeoutResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeoutResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseResultTypeFromJSON(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTimeoutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutResponse",
            value: MsgTimeoutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTimeoutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTimeoutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
            value: MsgTimeoutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutOnClose() {
    return {
        packet: Packet.fromPartial({}),
        proofUnreceived: new Uint8Array(),
        proofClose: new Uint8Array(),
        proofHeight: Height.fromPartial({}),
        nextSequenceRecv: BigInt(0),
        signer: ""
    };
}
export const MsgTimeoutOnClose = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
    encode(message, writer = BinaryWriter.create()) {
        if (message.packet !== undefined) {
            Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofClose.length !== 0) {
            writer.uint32(26).bytes(message.proofClose);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.nextSequenceRecv !== BigInt(0)) {
            writer.uint32(40).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
            proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(),
            proofClose: isSet(object.proofClose) ? bytesFromBase64(object.proofClose) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            nextSequenceRecv: isSet(object.nextSequenceRecv) ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0),
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutOnClose();
        message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
        message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
        message.proofClose = object.proofClose ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeoutOnClose();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = Packet.fromAmino(object.packet);
        }
        if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
            message.proofUnreceived = bytesFromBase64(object.proof_unreceived);
        }
        if (object.proof_close !== undefined && object.proof_close !== null) {
            message.proofClose = bytesFromBase64(object.proof_close);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
            message.nextSequenceRecv = BigInt(object.next_sequence_recv);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proofUnreceived ? base64FromBytes(message.proofUnreceived) : undefined;
        obj.proof_close = message.proofClose ? base64FromBytes(message.proofClose) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        obj.next_sequence_recv = message.nextSequenceRecv ? message.nextSequenceRecv.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTimeoutOnClose.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnClose",
            value: MsgTimeoutOnClose.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTimeoutOnClose.decode(message.value);
    },
    toProto(message) {
        return MsgTimeoutOnClose.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
            value: MsgTimeoutOnClose.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutOnCloseResponse() {
    return {
        result: 0
    };
}
export const MsgTimeoutOnCloseResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutOnCloseResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeoutOnCloseResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseResultTypeFromJSON(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTimeoutOnCloseResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnCloseResponse",
            value: MsgTimeoutOnCloseResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTimeoutOnCloseResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTimeoutOnCloseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
            value: MsgTimeoutOnCloseResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAcknowledgement() {
    return {
        packet: Packet.fromPartial({}),
        acknowledgement: new Uint8Array(),
        proofAcked: new Uint8Array(),
        proofHeight: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgAcknowledgement = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
    encode(message, writer = BinaryWriter.create()) {
        if (message.packet !== undefined) {
            Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        if (message.proofAcked.length !== 0) {
            writer.uint32(26).bytes(message.proofAcked);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
            proofAcked: isSet(object.proofAcked) ? bytesFromBase64(object.proofAcked) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgAcknowledgement();
        message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proofAcked = object.proofAcked ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAcknowledgement();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = Packet.fromAmino(object.packet);
        }
        if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
            message.acknowledgement = bytesFromBase64(object.acknowledgement);
        }
        if (object.proof_acked !== undefined && object.proof_acked !== null) {
            message.proofAcked = bytesFromBase64(object.proof_acked);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
        obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
        obj.proof_acked = message.proofAcked ? base64FromBytes(message.proofAcked) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAcknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgement",
            value: MsgAcknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgAcknowledgement.decode(message.value);
    },
    toProto(message) {
        return MsgAcknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
            value: MsgAcknowledgement.encode(message).finish()
        };
    }
};
function createBaseMsgAcknowledgementResponse() {
    return {
        result: 0
    };
}
export const MsgAcknowledgementResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseMsgAcknowledgementResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAcknowledgementResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseResultTypeFromJSON(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAcknowledgementResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgementResponse",
            value: MsgAcknowledgementResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgAcknowledgementResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAcknowledgementResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
            value: MsgAcknowledgementResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map