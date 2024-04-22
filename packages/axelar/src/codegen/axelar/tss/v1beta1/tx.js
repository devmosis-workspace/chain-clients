import { KeyInfo } from "./types";
import { SigKeyPair, keyRoleFromJSON } from "../exported/v1beta1/types";
import { TrafficOut, MessageOut_KeygenResult, MessageOut_SignResult } from "../tofnd/v1beta1/tofnd";
import { PollKey } from "../../vote/exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseStartKeygenRequest() {
    return {
        sender: "",
        keyInfo: KeyInfo.fromPartial({})
    };
}
export const StartKeygenRequest = {
    typeUrl: "/axelar.tss.v1beta1.StartKeygenRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.keyInfo !== undefined) {
            KeyInfo.encode(message.keyInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            keyInfo: isSet(object.keyInfo) ? KeyInfo.fromJSON(object.keyInfo) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseStartKeygenRequest();
        message.sender = object.sender ?? "";
        message.keyInfo = object.keyInfo !== undefined && object.keyInfo !== null ? KeyInfo.fromPartial(object.keyInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseStartKeygenRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.key_info !== undefined && object.key_info !== null) {
            message.keyInfo = KeyInfo.fromAmino(object.key_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.key_info = message.keyInfo ? KeyInfo.toAmino(message.keyInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return StartKeygenRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return StartKeygenRequest.decode(message.value);
    },
    toProto(message) {
        return StartKeygenRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.StartKeygenRequest",
            value: StartKeygenRequest.encode(message).finish()
        };
    }
};
function createBaseStartKeygenResponse() {
    return {};
}
export const StartKeygenResponse = {
    typeUrl: "/axelar.tss.v1beta1.StartKeygenResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseStartKeygenResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseStartKeygenResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return StartKeygenResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return StartKeygenResponse.decode(message.value);
    },
    toProto(message) {
        return StartKeygenResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.StartKeygenResponse",
            value: StartKeygenResponse.encode(message).finish()
        };
    }
};
function createBaseRotateKeyRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        keyRole: 0,
        keyId: ""
    };
}
export const RotateKeyRequest = {
    typeUrl: "/axelar.tss.v1beta1.RotateKeyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.keyRole !== 0) {
            writer.uint32(24).int32(message.keyRole);
        }
        if (message.keyId !== "") {
            writer.uint32(34).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : -1,
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseRotateKeyRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.keyRole = object.keyRole ?? 0;
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRotateKeyRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.key_role !== undefined && object.key_role !== null) {
            message.keyRole = keyRoleFromJSON(object.key_role);
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.key_role = message.keyRole;
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return RotateKeyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RotateKeyRequest.decode(message.value);
    },
    toProto(message) {
        return RotateKeyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.RotateKeyRequest",
            value: RotateKeyRequest.encode(message).finish()
        };
    }
};
function createBaseRotateKeyResponse() {
    return {};
}
export const RotateKeyResponse = {
    typeUrl: "/axelar.tss.v1beta1.RotateKeyResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRotateKeyResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRotateKeyResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RotateKeyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RotateKeyResponse.decode(message.value);
    },
    toProto(message) {
        return RotateKeyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.RotateKeyResponse",
            value: RotateKeyResponse.encode(message).finish()
        };
    }
};
function createBaseProcessKeygenTrafficRequest() {
    return {
        sender: new Uint8Array(),
        sessionId: "",
        payload: TrafficOut.fromPartial({})
    };
}
export const ProcessKeygenTrafficRequest = {
    typeUrl: "/axelar.tss.v1beta1.ProcessKeygenTrafficRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.sessionId !== "") {
            writer.uint32(18).string(message.sessionId);
        }
        if (message.payload !== undefined) {
            TrafficOut.encode(message.payload, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
            payload: isSet(object.payload) ? TrafficOut.fromJSON(object.payload) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseProcessKeygenTrafficRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.sessionId = object.sessionId ?? "";
        message.payload = object.payload !== undefined && object.payload !== null ? TrafficOut.fromPartial(object.payload) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseProcessKeygenTrafficRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.session_id !== undefined && object.session_id !== null) {
            message.sessionId = object.session_id;
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = TrafficOut.fromAmino(object.payload);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.session_id = message.sessionId;
        obj.payload = message.payload ? TrafficOut.toAmino(message.payload) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ProcessKeygenTrafficRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProcessKeygenTrafficRequest.decode(message.value);
    },
    toProto(message) {
        return ProcessKeygenTrafficRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.ProcessKeygenTrafficRequest",
            value: ProcessKeygenTrafficRequest.encode(message).finish()
        };
    }
};
function createBaseProcessKeygenTrafficResponse() {
    return {};
}
export const ProcessKeygenTrafficResponse = {
    typeUrl: "/axelar.tss.v1beta1.ProcessKeygenTrafficResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseProcessKeygenTrafficResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseProcessKeygenTrafficResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ProcessKeygenTrafficResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProcessKeygenTrafficResponse.decode(message.value);
    },
    toProto(message) {
        return ProcessKeygenTrafficResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.ProcessKeygenTrafficResponse",
            value: ProcessKeygenTrafficResponse.encode(message).finish()
        };
    }
};
function createBaseProcessSignTrafficRequest() {
    return {
        sender: new Uint8Array(),
        sessionId: "",
        payload: TrafficOut.fromPartial({})
    };
}
export const ProcessSignTrafficRequest = {
    typeUrl: "/axelar.tss.v1beta1.ProcessSignTrafficRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.sessionId !== "") {
            writer.uint32(18).string(message.sessionId);
        }
        if (message.payload !== undefined) {
            TrafficOut.encode(message.payload, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
            payload: isSet(object.payload) ? TrafficOut.fromJSON(object.payload) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseProcessSignTrafficRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.sessionId = object.sessionId ?? "";
        message.payload = object.payload !== undefined && object.payload !== null ? TrafficOut.fromPartial(object.payload) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseProcessSignTrafficRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.session_id !== undefined && object.session_id !== null) {
            message.sessionId = object.session_id;
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = TrafficOut.fromAmino(object.payload);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.session_id = message.sessionId;
        obj.payload = message.payload ? TrafficOut.toAmino(message.payload) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ProcessSignTrafficRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProcessSignTrafficRequest.decode(message.value);
    },
    toProto(message) {
        return ProcessSignTrafficRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.ProcessSignTrafficRequest",
            value: ProcessSignTrafficRequest.encode(message).finish()
        };
    }
};
function createBaseProcessSignTrafficResponse() {
    return {};
}
export const ProcessSignTrafficResponse = {
    typeUrl: "/axelar.tss.v1beta1.ProcessSignTrafficResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseProcessSignTrafficResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseProcessSignTrafficResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ProcessSignTrafficResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProcessSignTrafficResponse.decode(message.value);
    },
    toProto(message) {
        return ProcessSignTrafficResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.ProcessSignTrafficResponse",
            value: ProcessSignTrafficResponse.encode(message).finish()
        };
    }
};
function createBaseVotePubKeyRequest() {
    return {
        sender: new Uint8Array(),
        pollKey: PollKey.fromPartial({}),
        result: MessageOut_KeygenResult.fromPartial({})
    };
}
export const VotePubKeyRequest = {
    typeUrl: "/axelar.tss.v1beta1.VotePubKeyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.pollKey !== undefined) {
            PollKey.encode(message.pollKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.result !== undefined) {
            MessageOut_KeygenResult.encode(message.result, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            pollKey: isSet(object.pollKey) ? PollKey.fromJSON(object.pollKey) : undefined,
            result: isSet(object.result) ? MessageOut_KeygenResult.fromJSON(object.result) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseVotePubKeyRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.pollKey = object.pollKey !== undefined && object.pollKey !== null ? PollKey.fromPartial(object.pollKey) : undefined;
        message.result = object.result !== undefined && object.result !== null ? MessageOut_KeygenResult.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseVotePubKeyRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.poll_key !== undefined && object.poll_key !== null) {
            message.pollKey = PollKey.fromAmino(object.poll_key);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = MessageOut_KeygenResult.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.poll_key = message.pollKey ? PollKey.toAmino(message.pollKey) : undefined;
        obj.result = message.result ? MessageOut_KeygenResult.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return VotePubKeyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VotePubKeyRequest.decode(message.value);
    },
    toProto(message) {
        return VotePubKeyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.VotePubKeyRequest",
            value: VotePubKeyRequest.encode(message).finish()
        };
    }
};
function createBaseVotePubKeyResponse() {
    return {
        log: ""
    };
}
export const VotePubKeyResponse = {
    typeUrl: "/axelar.tss.v1beta1.VotePubKeyResponse",
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
        const message = createBaseVotePubKeyResponse();
        message.log = object.log ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseVotePubKeyResponse();
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
        return VotePubKeyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VotePubKeyResponse.decode(message.value);
    },
    toProto(message) {
        return VotePubKeyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.VotePubKeyResponse",
            value: VotePubKeyResponse.encode(message).finish()
        };
    }
};
function createBaseVoteSigRequest() {
    return {
        sender: new Uint8Array(),
        pollKey: PollKey.fromPartial({}),
        result: MessageOut_SignResult.fromPartial({})
    };
}
export const VoteSigRequest = {
    typeUrl: "/axelar.tss.v1beta1.VoteSigRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.pollKey !== undefined) {
            PollKey.encode(message.pollKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.result !== undefined) {
            MessageOut_SignResult.encode(message.result, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            pollKey: isSet(object.pollKey) ? PollKey.fromJSON(object.pollKey) : undefined,
            result: isSet(object.result) ? MessageOut_SignResult.fromJSON(object.result) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseVoteSigRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.pollKey = object.pollKey !== undefined && object.pollKey !== null ? PollKey.fromPartial(object.pollKey) : undefined;
        message.result = object.result !== undefined && object.result !== null ? MessageOut_SignResult.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseVoteSigRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.poll_key !== undefined && object.poll_key !== null) {
            message.pollKey = PollKey.fromAmino(object.poll_key);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = MessageOut_SignResult.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.poll_key = message.pollKey ? PollKey.toAmino(message.pollKey) : undefined;
        obj.result = message.result ? MessageOut_SignResult.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return VoteSigRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VoteSigRequest.decode(message.value);
    },
    toProto(message) {
        return VoteSigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.VoteSigRequest",
            value: VoteSigRequest.encode(message).finish()
        };
    }
};
function createBaseVoteSigResponse() {
    return {
        log: ""
    };
}
export const VoteSigResponse = {
    typeUrl: "/axelar.tss.v1beta1.VoteSigResponse",
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
        const message = createBaseVoteSigResponse();
        message.log = object.log ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseVoteSigResponse();
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
        return VoteSigResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VoteSigResponse.decode(message.value);
    },
    toProto(message) {
        return VoteSigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.VoteSigResponse",
            value: VoteSigResponse.encode(message).finish()
        };
    }
};
function createBaseHeartBeatRequest() {
    return {
        sender: new Uint8Array(),
        keyIds: []
    };
}
export const HeartBeatRequest = {
    typeUrl: "/axelar.tss.v1beta1.HeartBeatRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        for (const v of message.keyIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            keyIds: Array.isArray(object?.keyIds) ? object.keyIds.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseHeartBeatRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.keyIds = object.keyIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseHeartBeatRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        message.keyIds = object.key_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        if (message.keyIds) {
            obj.key_ids = message.keyIds.map(e => e);
        }
        else {
            obj.key_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return HeartBeatRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return HeartBeatRequest.decode(message.value);
    },
    toProto(message) {
        return HeartBeatRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.HeartBeatRequest",
            value: HeartBeatRequest.encode(message).finish()
        };
    }
};
function createBaseHeartBeatResponse() {
    return {};
}
export const HeartBeatResponse = {
    typeUrl: "/axelar.tss.v1beta1.HeartBeatResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseHeartBeatResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseHeartBeatResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return HeartBeatResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return HeartBeatResponse.decode(message.value);
    },
    toProto(message) {
        return HeartBeatResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.HeartBeatResponse",
            value: HeartBeatResponse.encode(message).finish()
        };
    }
};
function createBaseRegisterExternalKeysRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        externalKeys: []
    };
}
export const RegisterExternalKeysRequest = {
    typeUrl: "/axelar.tss.v1beta1.RegisterExternalKeysRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        for (const v of message.externalKeys) {
            RegisterExternalKeysRequest_ExternalKey.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            externalKeys: Array.isArray(object?.externalKeys) ? object.externalKeys.map((e) => RegisterExternalKeysRequest_ExternalKey.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseRegisterExternalKeysRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.externalKeys = object.externalKeys?.map(e => RegisterExternalKeysRequest_ExternalKey.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterExternalKeysRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        message.externalKeys = object.external_keys?.map(e => RegisterExternalKeysRequest_ExternalKey.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        if (message.externalKeys) {
            obj.external_keys = message.externalKeys.map(e => e ? RegisterExternalKeysRequest_ExternalKey.toAmino(e) : undefined);
        }
        else {
            obj.external_keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterExternalKeysRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterExternalKeysRequest.decode(message.value);
    },
    toProto(message) {
        return RegisterExternalKeysRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.RegisterExternalKeysRequest",
            value: RegisterExternalKeysRequest.encode(message).finish()
        };
    }
};
function createBaseRegisterExternalKeysRequest_ExternalKey() {
    return {
        id: "",
        pubKey: new Uint8Array()
    };
}
export const RegisterExternalKeysRequest_ExternalKey = {
    typeUrl: "/axelar.tss.v1beta1.ExternalKey",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.pubKey.length !== 0) {
            writer.uint32(18).bytes(message.pubKey);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseRegisterExternalKeysRequest_ExternalKey();
        message.id = object.id ?? "";
        message.pubKey = object.pubKey ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterExternalKeysRequest_ExternalKey();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = bytesFromBase64(object.pub_key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterExternalKeysRequest_ExternalKey.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterExternalKeysRequest_ExternalKey.decode(message.value);
    },
    toProto(message) {
        return RegisterExternalKeysRequest_ExternalKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.ExternalKey",
            value: RegisterExternalKeysRequest_ExternalKey.encode(message).finish()
        };
    }
};
function createBaseRegisterExternalKeysResponse() {
    return {};
}
export const RegisterExternalKeysResponse = {
    typeUrl: "/axelar.tss.v1beta1.RegisterExternalKeysResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRegisterExternalKeysResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRegisterExternalKeysResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterExternalKeysResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterExternalKeysResponse.decode(message.value);
    },
    toProto(message) {
        return RegisterExternalKeysResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.RegisterExternalKeysResponse",
            value: RegisterExternalKeysResponse.encode(message).finish()
        };
    }
};
function createBaseSubmitMultisigPubKeysRequest() {
    return {
        sender: new Uint8Array(),
        keyId: "",
        sigKeyPairs: []
    };
}
export const SubmitMultisigPubKeysRequest = {
    typeUrl: "/axelar.tss.v1beta1.SubmitMultisigPubKeysRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        for (const v of message.sigKeyPairs) {
            SigKeyPair.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            sigKeyPairs: Array.isArray(object?.sigKeyPairs) ? object.sigKeyPairs.map((e) => SigKeyPair.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseSubmitMultisigPubKeysRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.keyId = object.keyId ?? "";
        message.sigKeyPairs = object.sigKeyPairs?.map(e => SigKeyPair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubmitMultisigPubKeysRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        message.sigKeyPairs = object.sig_key_pairs?.map(e => SigKeyPair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.key_id = message.keyId;
        if (message.sigKeyPairs) {
            obj.sig_key_pairs = message.sigKeyPairs.map(e => e ? SigKeyPair.toAmino(e) : undefined);
        }
        else {
            obj.sig_key_pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SubmitMultisigPubKeysRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubmitMultisigPubKeysRequest.decode(message.value);
    },
    toProto(message) {
        return SubmitMultisigPubKeysRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.SubmitMultisigPubKeysRequest",
            value: SubmitMultisigPubKeysRequest.encode(message).finish()
        };
    }
};
function createBaseSubmitMultisigPubKeysResponse() {
    return {};
}
export const SubmitMultisigPubKeysResponse = {
    typeUrl: "/axelar.tss.v1beta1.SubmitMultisigPubKeysResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseSubmitMultisigPubKeysResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseSubmitMultisigPubKeysResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return SubmitMultisigPubKeysResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubmitMultisigPubKeysResponse.decode(message.value);
    },
    toProto(message) {
        return SubmitMultisigPubKeysResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.SubmitMultisigPubKeysResponse",
            value: SubmitMultisigPubKeysResponse.encode(message).finish()
        };
    }
};
function createBaseSubmitMultisigSignaturesRequest() {
    return {
        sender: new Uint8Array(),
        sigId: "",
        signatures: []
    };
}
export const SubmitMultisigSignaturesRequest = {
    typeUrl: "/axelar.tss.v1beta1.SubmitMultisigSignaturesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.sigId !== "") {
            writer.uint32(18).string(message.sigId);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            sigId: isSet(object.sigId) ? String(object.sigId) : "",
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => bytesFromBase64(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseSubmitMultisigSignaturesRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.sigId = object.sigId ?? "";
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubmitMultisigSignaturesRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.sig_id !== undefined && object.sig_id !== null) {
            message.sigId = object.sig_id;
        }
        message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.sig_id = message.sigId;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => base64FromBytes(e));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SubmitMultisigSignaturesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubmitMultisigSignaturesRequest.decode(message.value);
    },
    toProto(message) {
        return SubmitMultisigSignaturesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.SubmitMultisigSignaturesRequest",
            value: SubmitMultisigSignaturesRequest.encode(message).finish()
        };
    }
};
function createBaseSubmitMultisigSignaturesResponse() {
    return {};
}
export const SubmitMultisigSignaturesResponse = {
    typeUrl: "/axelar.tss.v1beta1.SubmitMultisigSignaturesResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseSubmitMultisigSignaturesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseSubmitMultisigSignaturesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return SubmitMultisigSignaturesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubmitMultisigSignaturesResponse.decode(message.value);
    },
    toProto(message) {
        return SubmitMultisigSignaturesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.v1beta1.SubmitMultisigSignaturesResponse",
            value: SubmitMultisigSignaturesResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map