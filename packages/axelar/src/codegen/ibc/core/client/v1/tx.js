import { Any } from "../../../../google/protobuf/any";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseMsgCreateClient() {
    return {
        clientState: undefined,
        consensusState: undefined,
        signer: ""
    };
}
export const MsgCreateClient = {
    typeUrl: "/ibc.core.client.v1.MsgCreateClient",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
            consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgCreateClient();
        message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateClient();
        if (object.client_state !== undefined && object.client_state !== null) {
            message.clientState = Any.fromAmino(object.client_state);
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensusState = Any.fromAmino(object.consensus_state);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
        obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateClient",
            value: MsgCreateClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateClient.decode(message.value);
    },
    toProto(message) {
        return MsgCreateClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgCreateClient",
            value: MsgCreateClient.encode(message).finish()
        };
    }
};
function createBaseMsgCreateClientResponse() {
    return {};
}
export const MsgCreateClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgCreateClientResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateClientResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateClientResponse",
            value: MsgCreateClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateClientResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
            value: MsgCreateClientResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClient() {
    return {
        clientId: "",
        header: undefined,
        signer: ""
    };
}
export const MsgUpdateClient = {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.header !== undefined) {
            Any.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            header: isSet(object.header) ? Any.fromJSON(object.header) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClient();
        message.clientId = object.clientId ?? "";
        message.header = object.header !== undefined && object.header !== null ? Any.fromPartial(object.header) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClient();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = Any.fromAmino(object.header);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.header = message.header ? Any.toAmino(message.header) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateClient",
            value: MsgUpdateClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateClient.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
            value: MsgUpdateClient.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClientResponse() {
    return {};
}
export const MsgUpdateClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateClientResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClientResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateClientResponse",
            value: MsgUpdateClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateClientResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
            value: MsgUpdateClientResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpgradeClient() {
    return {
        clientId: "",
        clientState: undefined,
        consensusState: undefined,
        proofUpgradeClient: new Uint8Array(),
        proofUpgradeConsensusState: new Uint8Array(),
        signer: ""
    };
}
export const MsgUpgradeClient = {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
        }
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
        }
        if (message.proofUpgradeClient.length !== 0) {
            writer.uint32(34).bytes(message.proofUpgradeClient);
        }
        if (message.proofUpgradeConsensusState.length !== 0) {
            writer.uint32(42).bytes(message.proofUpgradeConsensusState);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
            consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
            proofUpgradeClient: isSet(object.proofUpgradeClient) ? bytesFromBase64(object.proofUpgradeClient) : new Uint8Array(),
            proofUpgradeConsensusState: isSet(object.proofUpgradeConsensusState) ? bytesFromBase64(object.proofUpgradeConsensusState) : new Uint8Array(),
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgUpgradeClient();
        message.clientId = object.clientId ?? "";
        message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
        message.proofUpgradeClient = object.proofUpgradeClient ?? new Uint8Array();
        message.proofUpgradeConsensusState = object.proofUpgradeConsensusState ?? new Uint8Array();
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpgradeClient();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.clientState = Any.fromAmino(object.client_state);
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensusState = Any.fromAmino(object.consensus_state);
        }
        if (object.proof_upgrade_client !== undefined && object.proof_upgrade_client !== null) {
            message.proofUpgradeClient = bytesFromBase64(object.proof_upgrade_client);
        }
        if (object.proof_upgrade_consensus_state !== undefined && object.proof_upgrade_consensus_state !== null) {
            message.proofUpgradeConsensusState = bytesFromBase64(object.proof_upgrade_consensus_state);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
        obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
        obj.proof_upgrade_client = message.proofUpgradeClient ? base64FromBytes(message.proofUpgradeClient) : undefined;
        obj.proof_upgrade_consensus_state = message.proofUpgradeConsensusState ? base64FromBytes(message.proofUpgradeConsensusState) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpgradeClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpgradeClient",
            value: MsgUpgradeClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpgradeClient.decode(message.value);
    },
    toProto(message) {
        return MsgUpgradeClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
            value: MsgUpgradeClient.encode(message).finish()
        };
    }
};
function createBaseMsgUpgradeClientResponse() {
    return {};
}
export const MsgUpgradeClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgUpgradeClientResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpgradeClientResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpgradeClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpgradeClientResponse",
            value: MsgUpgradeClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpgradeClientResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpgradeClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
            value: MsgUpgradeClientResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitMisbehaviour() {
    return {
        clientId: "",
        misbehaviour: undefined,
        signer: ""
    };
}
export const MsgSubmitMisbehaviour = {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.misbehaviour !== undefined) {
            Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            misbehaviour: isSet(object.misbehaviour) ? Any.fromJSON(object.misbehaviour) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitMisbehaviour();
        message.clientId = object.clientId ?? "";
        message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? Any.fromPartial(object.misbehaviour) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitMisbehaviour();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
            message.misbehaviour = Any.fromAmino(object.misbehaviour);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.misbehaviour = message.misbehaviour ? Any.toAmino(message.misbehaviour) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitMisbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitMisbehaviour",
            value: MsgSubmitMisbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitMisbehaviour.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitMisbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
            value: MsgSubmitMisbehaviour.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitMisbehaviourResponse() {
    return {};
}
export const MsgSubmitMisbehaviourResponse = {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitMisbehaviourResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSubmitMisbehaviourResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitMisbehaviourResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
            value: MsgSubmitMisbehaviourResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitMisbehaviourResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitMisbehaviourResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
            value: MsgSubmitMisbehaviourResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map