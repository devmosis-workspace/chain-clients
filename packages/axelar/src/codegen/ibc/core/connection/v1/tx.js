import { Counterparty, Version } from "./connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseMsgConnectionOpenInit() {
    return {
        clientId: "",
        counterparty: Counterparty.fromPartial({}),
        version: undefined,
        delayPeriod: BigInt(0),
        signer: ""
    };
}
export const MsgConnectionOpenInit = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== undefined) {
            Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.delayPeriod !== BigInt(0)) {
            writer.uint32(32).uint64(message.delayPeriod);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
            delayPeriod: isSet(object.delayPeriod) ? BigInt(object.delayPeriod.toString()) : BigInt(0),
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenInit();
        message.clientId = object.clientId ?? "";
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
        message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenInit();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = Counterparty.fromAmino(object.counterparty);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = Version.fromAmino(object.version);
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delayPeriod = BigInt(object.delay_period);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        obj.version = message.version ? Version.toAmino(message.version) : undefined;
        obj.delay_period = message.delayPeriod ? message.delayPeriod.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenInit",
            value: MsgConnectionOpenInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenInit.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
            value: MsgConnectionOpenInit.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenInitResponse() {
    return {};
}
export const MsgConnectionOpenInitResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenInitResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConnectionOpenInitResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenInitResponse",
            value: MsgConnectionOpenInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenInitResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
            value: MsgConnectionOpenInitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenTry() {
    return {
        clientId: "",
        previousConnectionId: "",
        clientState: undefined,
        counterparty: Counterparty.fromPartial({}),
        delayPeriod: BigInt(0),
        counterpartyVersions: [],
        proofHeight: Height.fromPartial({}),
        proofInit: new Uint8Array(),
        proofClient: new Uint8Array(),
        proofConsensus: new Uint8Array(),
        consensusHeight: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgConnectionOpenTry = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.previousConnectionId !== "") {
            writer.uint32(18).string(message.previousConnectionId);
        }
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.delayPeriod !== BigInt(0)) {
            writer.uint32(40).uint64(message.delayPeriod);
        }
        for (const v of message.counterpartyVersions) {
            Version.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(66).bytes(message.proofInit);
        }
        if (message.proofClient.length !== 0) {
            writer.uint32(74).bytes(message.proofClient);
        }
        if (message.proofConsensus.length !== 0) {
            writer.uint32(82).bytes(message.proofConsensus);
        }
        if (message.consensusHeight !== undefined) {
            Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(98).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            previousConnectionId: isSet(object.previousConnectionId) ? String(object.previousConnectionId) : "",
            clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            delayPeriod: isSet(object.delayPeriod) ? BigInt(object.delayPeriod.toString()) : BigInt(0),
            counterpartyVersions: Array.isArray(object?.counterpartyVersions) ? object.counterpartyVersions.map((e) => Version.fromJSON(e)) : [],
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
            proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : new Uint8Array(),
            proofConsensus: isSet(object.proofConsensus) ? bytesFromBase64(object.proofConsensus) : new Uint8Array(),
            consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenTry();
        message.clientId = object.clientId ?? "";
        message.previousConnectionId = object.previousConnectionId ?? "";
        message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
        message.counterpartyVersions = object.counterpartyVersions?.map(e => Version.fromPartial(e)) || [];
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        message.proofInit = object.proofInit ?? new Uint8Array();
        message.proofClient = object.proofClient ?? new Uint8Array();
        message.proofConsensus = object.proofConsensus ?? new Uint8Array();
        message.consensusHeight = object.consensusHeight !== undefined && object.consensusHeight !== null ? Height.fromPartial(object.consensusHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenTry();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.previous_connection_id !== undefined && object.previous_connection_id !== null) {
            message.previousConnectionId = object.previous_connection_id;
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.clientState = Any.fromAmino(object.client_state);
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = Counterparty.fromAmino(object.counterparty);
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delayPeriod = BigInt(object.delay_period);
        }
        message.counterpartyVersions = object.counterparty_versions?.map(e => Version.fromAmino(e)) || [];
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proofInit = bytesFromBase64(object.proof_init);
        }
        if (object.proof_client !== undefined && object.proof_client !== null) {
            message.proofClient = bytesFromBase64(object.proof_client);
        }
        if (object.proof_consensus !== undefined && object.proof_consensus !== null) {
            message.proofConsensus = bytesFromBase64(object.proof_consensus);
        }
        if (object.consensus_height !== undefined && object.consensus_height !== null) {
            message.consensusHeight = Height.fromAmino(object.consensus_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.previous_connection_id = message.previousConnectionId;
        obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        obj.delay_period = message.delayPeriod ? message.delayPeriod.toString() : undefined;
        if (message.counterpartyVersions) {
            obj.counterparty_versions = message.counterpartyVersions.map(e => e ? Version.toAmino(e) : undefined);
        }
        else {
            obj.counterparty_versions = [];
        }
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        obj.proof_init = message.proofInit ? base64FromBytes(message.proofInit) : undefined;
        obj.proof_client = message.proofClient ? base64FromBytes(message.proofClient) : undefined;
        obj.proof_consensus = message.proofConsensus ? base64FromBytes(message.proofConsensus) : undefined;
        obj.consensus_height = message.consensusHeight ? Height.toAmino(message.consensusHeight) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenTry",
            value: MsgConnectionOpenTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenTry.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
            value: MsgConnectionOpenTry.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenTryResponse() {
    return {};
}
export const MsgConnectionOpenTryResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenTryResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConnectionOpenTryResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenTryResponse",
            value: MsgConnectionOpenTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenTryResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
            value: MsgConnectionOpenTryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenAck() {
    return {
        connectionId: "",
        counterpartyConnectionId: "",
        version: undefined,
        clientState: undefined,
        proofHeight: Height.fromPartial({}),
        proofTry: new Uint8Array(),
        proofClient: new Uint8Array(),
        proofConsensus: new Uint8Array(),
        consensusHeight: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgConnectionOpenAck = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
    encode(message, writer = BinaryWriter.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.counterpartyConnectionId !== "") {
            writer.uint32(18).string(message.counterpartyConnectionId);
        }
        if (message.version !== undefined) {
            Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
        }
        if (message.proofTry.length !== 0) {
            writer.uint32(50).bytes(message.proofTry);
        }
        if (message.proofClient.length !== 0) {
            writer.uint32(58).bytes(message.proofClient);
        }
        if (message.proofConsensus.length !== 0) {
            writer.uint32(66).bytes(message.proofConsensus);
        }
        if (message.consensusHeight !== undefined) {
            Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(82).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            counterpartyConnectionId: isSet(object.counterpartyConnectionId) ? String(object.counterpartyConnectionId) : "",
            version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
            clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : new Uint8Array(),
            proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : new Uint8Array(),
            proofConsensus: isSet(object.proofConsensus) ? bytesFromBase64(object.proofConsensus) : new Uint8Array(),
            consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenAck();
        message.connectionId = object.connectionId ?? "";
        message.counterpartyConnectionId = object.counterpartyConnectionId ?? "";
        message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
        message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        message.proofTry = object.proofTry ?? new Uint8Array();
        message.proofClient = object.proofClient ?? new Uint8Array();
        message.proofConsensus = object.proofConsensus ?? new Uint8Array();
        message.consensusHeight = object.consensusHeight !== undefined && object.consensusHeight !== null ? Height.fromPartial(object.consensusHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenAck();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.counterparty_connection_id !== undefined && object.counterparty_connection_id !== null) {
            message.counterpartyConnectionId = object.counterparty_connection_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = Version.fromAmino(object.version);
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.clientState = Any.fromAmino(object.client_state);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = Height.fromAmino(object.proof_height);
        }
        if (object.proof_try !== undefined && object.proof_try !== null) {
            message.proofTry = bytesFromBase64(object.proof_try);
        }
        if (object.proof_client !== undefined && object.proof_client !== null) {
            message.proofClient = bytesFromBase64(object.proof_client);
        }
        if (object.proof_consensus !== undefined && object.proof_consensus !== null) {
            message.proofConsensus = bytesFromBase64(object.proof_consensus);
        }
        if (object.consensus_height !== undefined && object.consensus_height !== null) {
            message.consensusHeight = Height.fromAmino(object.consensus_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        obj.counterparty_connection_id = message.counterpartyConnectionId;
        obj.version = message.version ? Version.toAmino(message.version) : undefined;
        obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        obj.proof_try = message.proofTry ? base64FromBytes(message.proofTry) : undefined;
        obj.proof_client = message.proofClient ? base64FromBytes(message.proofClient) : undefined;
        obj.proof_consensus = message.proofConsensus ? base64FromBytes(message.proofConsensus) : undefined;
        obj.consensus_height = message.consensusHeight ? Height.toAmino(message.consensusHeight) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenAck",
            value: MsgConnectionOpenAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenAck.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
            value: MsgConnectionOpenAck.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenAckResponse() {
    return {};
}
export const MsgConnectionOpenAckResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenAckResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConnectionOpenAckResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenAckResponse",
            value: MsgConnectionOpenAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenAckResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
            value: MsgConnectionOpenAckResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenConfirm() {
    return {
        connectionId: "",
        proofAck: new Uint8Array(),
        proofHeight: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgConnectionOpenConfirm = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
    encode(message, writer = BinaryWriter.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.proofAck.length !== 0) {
            writer.uint32(18).bytes(message.proofAck);
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
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenConfirm();
        message.connectionId = object.connectionId ?? "";
        message.proofAck = object.proofAck ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenConfirm();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
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
        obj.connection_id = message.connectionId;
        obj.proof_ack = message.proofAck ? base64FromBytes(message.proofAck) : undefined;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenConfirm",
            value: MsgConnectionOpenConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenConfirm.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
            value: MsgConnectionOpenConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenConfirmResponse() {
    return {};
}
export const MsgConnectionOpenConfirmResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenConfirmResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConnectionOpenConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
            value: MsgConnectionOpenConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
            value: MsgConnectionOpenConfirmResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map