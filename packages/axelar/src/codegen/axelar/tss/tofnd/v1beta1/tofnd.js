import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export var RecoverResponse_Response;
(function (RecoverResponse_Response) {
    RecoverResponse_Response[RecoverResponse_Response["RESPONSE_UNSPECIFIED"] = 0] = "RESPONSE_UNSPECIFIED";
    RecoverResponse_Response[RecoverResponse_Response["RESPONSE_SUCCESS"] = 1] = "RESPONSE_SUCCESS";
    RecoverResponse_Response[RecoverResponse_Response["RESPONSE_FAIL"] = 2] = "RESPONSE_FAIL";
    RecoverResponse_Response[RecoverResponse_Response["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RecoverResponse_Response || (RecoverResponse_Response = {}));
export const RecoverResponse_ResponseSDKType = RecoverResponse_Response;
export const RecoverResponse_ResponseAmino = RecoverResponse_Response;
export function recoverResponse_ResponseFromJSON(object) {
    switch (object) {
        case 0:
        case "RESPONSE_UNSPECIFIED":
            return RecoverResponse_Response.RESPONSE_UNSPECIFIED;
        case 1:
        case "RESPONSE_SUCCESS":
            return RecoverResponse_Response.RESPONSE_SUCCESS;
        case 2:
        case "RESPONSE_FAIL":
            return RecoverResponse_Response.RESPONSE_FAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RecoverResponse_Response.UNRECOGNIZED;
    }
}
export function recoverResponse_ResponseToJSON(object) {
    switch (object) {
        case RecoverResponse_Response.RESPONSE_UNSPECIFIED:
            return "RESPONSE_UNSPECIFIED";
        case RecoverResponse_Response.RESPONSE_SUCCESS:
            return "RESPONSE_SUCCESS";
        case RecoverResponse_Response.RESPONSE_FAIL:
            return "RESPONSE_FAIL";
        case RecoverResponse_Response.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var MessageOut_CriminalList_Criminal_CrimeType;
(function (MessageOut_CriminalList_Criminal_CrimeType) {
    MessageOut_CriminalList_Criminal_CrimeType[MessageOut_CriminalList_Criminal_CrimeType["CRIME_TYPE_UNSPECIFIED"] = 0] = "CRIME_TYPE_UNSPECIFIED";
    MessageOut_CriminalList_Criminal_CrimeType[MessageOut_CriminalList_Criminal_CrimeType["CRIME_TYPE_NON_MALICIOUS"] = 1] = "CRIME_TYPE_NON_MALICIOUS";
    MessageOut_CriminalList_Criminal_CrimeType[MessageOut_CriminalList_Criminal_CrimeType["CRIME_TYPE_MALICIOUS"] = 2] = "CRIME_TYPE_MALICIOUS";
    MessageOut_CriminalList_Criminal_CrimeType[MessageOut_CriminalList_Criminal_CrimeType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MessageOut_CriminalList_Criminal_CrimeType || (MessageOut_CriminalList_Criminal_CrimeType = {}));
export const MessageOut_CriminalList_Criminal_CrimeTypeSDKType = MessageOut_CriminalList_Criminal_CrimeType;
export const MessageOut_CriminalList_Criminal_CrimeTypeAmino = MessageOut_CriminalList_Criminal_CrimeType;
export function messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CRIME_TYPE_UNSPECIFIED":
            return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_UNSPECIFIED;
        case 1:
        case "CRIME_TYPE_NON_MALICIOUS":
            return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_NON_MALICIOUS;
        case 2:
        case "CRIME_TYPE_MALICIOUS":
            return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_MALICIOUS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MessageOut_CriminalList_Criminal_CrimeType.UNRECOGNIZED;
    }
}
export function messageOut_CriminalList_Criminal_CrimeTypeToJSON(object) {
    switch (object) {
        case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_UNSPECIFIED:
            return "CRIME_TYPE_UNSPECIFIED";
        case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_NON_MALICIOUS:
            return "CRIME_TYPE_NON_MALICIOUS";
        case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_MALICIOUS:
            return "CRIME_TYPE_MALICIOUS";
        case MessageOut_CriminalList_Criminal_CrimeType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseRecoverRequest() {
    return {
        keygenInit: undefined,
        keygenOutput: undefined
    };
}
export const RecoverRequest = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.RecoverRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keygenInit !== undefined) {
            KeygenInit.encode(message.keygenInit, writer.uint32(10).fork()).ldelim();
        }
        if (message.keygenOutput !== undefined) {
            KeygenOutput.encode(message.keygenOutput, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keygenInit: isSet(object.keygenInit) ? KeygenInit.fromJSON(object.keygenInit) : undefined,
            keygenOutput: isSet(object.keygenOutput) ? KeygenOutput.fromJSON(object.keygenOutput) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseRecoverRequest();
        message.keygenInit = object.keygenInit !== undefined && object.keygenInit !== null ? KeygenInit.fromPartial(object.keygenInit) : undefined;
        message.keygenOutput = object.keygenOutput !== undefined && object.keygenOutput !== null ? KeygenOutput.fromPartial(object.keygenOutput) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecoverRequest();
        if (object.keygen_init !== undefined && object.keygen_init !== null) {
            message.keygenInit = KeygenInit.fromAmino(object.keygen_init);
        }
        if (object.keygen_output !== undefined && object.keygen_output !== null) {
            message.keygenOutput = KeygenOutput.fromAmino(object.keygen_output);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.keygen_init = message.keygenInit ? KeygenInit.toAmino(message.keygenInit) : undefined;
        obj.keygen_output = message.keygenOutput ? KeygenOutput.toAmino(message.keygenOutput) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RecoverRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RecoverRequest.decode(message.value);
    },
    toProto(message) {
        return RecoverRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.RecoverRequest",
            value: RecoverRequest.encode(message).finish()
        };
    }
};
function createBaseRecoverResponse() {
    return {
        response: 0
    };
}
export const RecoverResponse = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.RecoverResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.response !== 0) {
            writer.uint32(8).int32(message.response);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            response: isSet(object.response) ? recoverResponse_ResponseFromJSON(object.response) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseRecoverResponse();
        message.response = object.response ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecoverResponse();
        if (object.response !== undefined && object.response !== null) {
            message.response = recoverResponse_ResponseFromJSON(object.response);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.response = message.response;
        return obj;
    },
    fromAminoMsg(object) {
        return RecoverResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RecoverResponse.decode(message.value);
    },
    toProto(message) {
        return RecoverResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.RecoverResponse",
            value: RecoverResponse.encode(message).finish()
        };
    }
};
function createBaseKeygenOutput() {
    return {
        pubKey: new Uint8Array(),
        groupRecoverInfo: new Uint8Array(),
        privateRecoverInfo: new Uint8Array()
    };
}
export const KeygenOutput = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenOutput",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pubKey.length !== 0) {
            writer.uint32(10).bytes(message.pubKey);
        }
        if (message.groupRecoverInfo.length !== 0) {
            writer.uint32(18).bytes(message.groupRecoverInfo);
        }
        if (message.privateRecoverInfo.length !== 0) {
            writer.uint32(26).bytes(message.privateRecoverInfo);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
            groupRecoverInfo: isSet(object.groupRecoverInfo) ? bytesFromBase64(object.groupRecoverInfo) : new Uint8Array(),
            privateRecoverInfo: isSet(object.privateRecoverInfo) ? bytesFromBase64(object.privateRecoverInfo) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenOutput();
        message.pubKey = object.pubKey ?? new Uint8Array();
        message.groupRecoverInfo = object.groupRecoverInfo ?? new Uint8Array();
        message.privateRecoverInfo = object.privateRecoverInfo ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenOutput();
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = bytesFromBase64(object.pub_key);
        }
        if (object.group_recover_info !== undefined && object.group_recover_info !== null) {
            message.groupRecoverInfo = bytesFromBase64(object.group_recover_info);
        }
        if (object.private_recover_info !== undefined && object.private_recover_info !== null) {
            message.privateRecoverInfo = bytesFromBase64(object.private_recover_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
        obj.group_recover_info = message.groupRecoverInfo ? base64FromBytes(message.groupRecoverInfo) : undefined;
        obj.private_recover_info = message.privateRecoverInfo ? base64FromBytes(message.privateRecoverInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenOutput.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenOutput.decode(message.value);
    },
    toProto(message) {
        return KeygenOutput.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenOutput",
            value: KeygenOutput.encode(message).finish()
        };
    }
};
function createBaseMessageIn() {
    return {
        keygenInit: undefined,
        signInit: undefined,
        traffic: undefined,
        abort: undefined
    };
}
export const MessageIn = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.MessageIn",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keygenInit !== undefined) {
            KeygenInit.encode(message.keygenInit, writer.uint32(10).fork()).ldelim();
        }
        if (message.signInit !== undefined) {
            SignInit.encode(message.signInit, writer.uint32(18).fork()).ldelim();
        }
        if (message.traffic !== undefined) {
            TrafficIn.encode(message.traffic, writer.uint32(26).fork()).ldelim();
        }
        if (message.abort !== undefined) {
            writer.uint32(32).bool(message.abort);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keygenInit: isSet(object.keygenInit) ? KeygenInit.fromJSON(object.keygenInit) : undefined,
            signInit: isSet(object.signInit) ? SignInit.fromJSON(object.signInit) : undefined,
            traffic: isSet(object.traffic) ? TrafficIn.fromJSON(object.traffic) : undefined,
            abort: isSet(object.abort) ? Boolean(object.abort) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMessageIn();
        message.keygenInit = object.keygenInit !== undefined && object.keygenInit !== null ? KeygenInit.fromPartial(object.keygenInit) : undefined;
        message.signInit = object.signInit !== undefined && object.signInit !== null ? SignInit.fromPartial(object.signInit) : undefined;
        message.traffic = object.traffic !== undefined && object.traffic !== null ? TrafficIn.fromPartial(object.traffic) : undefined;
        message.abort = object.abort ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageIn();
        if (object.keygen_init !== undefined && object.keygen_init !== null) {
            message.keygenInit = KeygenInit.fromAmino(object.keygen_init);
        }
        if (object.sign_init !== undefined && object.sign_init !== null) {
            message.signInit = SignInit.fromAmino(object.sign_init);
        }
        if (object.traffic !== undefined && object.traffic !== null) {
            message.traffic = TrafficIn.fromAmino(object.traffic);
        }
        if (object.abort !== undefined && object.abort !== null) {
            message.abort = object.abort;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.keygen_init = message.keygenInit ? KeygenInit.toAmino(message.keygenInit) : undefined;
        obj.sign_init = message.signInit ? SignInit.toAmino(message.signInit) : undefined;
        obj.traffic = message.traffic ? TrafficIn.toAmino(message.traffic) : undefined;
        obj.abort = message.abort;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageIn.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageIn.decode(message.value);
    },
    toProto(message) {
        return MessageIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.MessageIn",
            value: MessageIn.encode(message).finish()
        };
    }
};
function createBaseMessageOut() {
    return {
        traffic: undefined,
        keygenResult: undefined,
        signResult: undefined,
        needRecover: undefined
    };
}
export const MessageOut = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.MessageOut",
    encode(message, writer = BinaryWriter.create()) {
        if (message.traffic !== undefined) {
            TrafficOut.encode(message.traffic, writer.uint32(10).fork()).ldelim();
        }
        if (message.keygenResult !== undefined) {
            MessageOut_KeygenResult.encode(message.keygenResult, writer.uint32(18).fork()).ldelim();
        }
        if (message.signResult !== undefined) {
            MessageOut_SignResult.encode(message.signResult, writer.uint32(26).fork()).ldelim();
        }
        if (message.needRecover !== undefined) {
            writer.uint32(32).bool(message.needRecover);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            traffic: isSet(object.traffic) ? TrafficOut.fromJSON(object.traffic) : undefined,
            keygenResult: isSet(object.keygenResult) ? MessageOut_KeygenResult.fromJSON(object.keygenResult) : undefined,
            signResult: isSet(object.signResult) ? MessageOut_SignResult.fromJSON(object.signResult) : undefined,
            needRecover: isSet(object.needRecover) ? Boolean(object.needRecover) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMessageOut();
        message.traffic = object.traffic !== undefined && object.traffic !== null ? TrafficOut.fromPartial(object.traffic) : undefined;
        message.keygenResult = object.keygenResult !== undefined && object.keygenResult !== null ? MessageOut_KeygenResult.fromPartial(object.keygenResult) : undefined;
        message.signResult = object.signResult !== undefined && object.signResult !== null ? MessageOut_SignResult.fromPartial(object.signResult) : undefined;
        message.needRecover = object.needRecover ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageOut();
        if (object.traffic !== undefined && object.traffic !== null) {
            message.traffic = TrafficOut.fromAmino(object.traffic);
        }
        if (object.keygen_result !== undefined && object.keygen_result !== null) {
            message.keygenResult = MessageOut_KeygenResult.fromAmino(object.keygen_result);
        }
        if (object.sign_result !== undefined && object.sign_result !== null) {
            message.signResult = MessageOut_SignResult.fromAmino(object.sign_result);
        }
        if (object.need_recover !== undefined && object.need_recover !== null) {
            message.needRecover = object.need_recover;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.traffic = message.traffic ? TrafficOut.toAmino(message.traffic) : undefined;
        obj.keygen_result = message.keygenResult ? MessageOut_KeygenResult.toAmino(message.keygenResult) : undefined;
        obj.sign_result = message.signResult ? MessageOut_SignResult.toAmino(message.signResult) : undefined;
        obj.need_recover = message.needRecover;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageOut.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageOut.decode(message.value);
    },
    toProto(message) {
        return MessageOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.MessageOut",
            value: MessageOut.encode(message).finish()
        };
    }
};
function createBaseMessageOut_KeygenResult() {
    return {
        data: undefined,
        criminals: undefined
    };
}
export const MessageOut_KeygenResult = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenResult",
    encode(message, writer = BinaryWriter.create()) {
        if (message.data !== undefined) {
            KeygenOutput.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.criminals !== undefined) {
            MessageOut_CriminalList.encode(message.criminals, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data) ? KeygenOutput.fromJSON(object.data) : undefined,
            criminals: isSet(object.criminals) ? MessageOut_CriminalList.fromJSON(object.criminals) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMessageOut_KeygenResult();
        message.data = object.data !== undefined && object.data !== null ? KeygenOutput.fromPartial(object.data) : undefined;
        message.criminals = object.criminals !== undefined && object.criminals !== null ? MessageOut_CriminalList.fromPartial(object.criminals) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageOut_KeygenResult();
        if (object.data !== undefined && object.data !== null) {
            message.data = KeygenOutput.fromAmino(object.data);
        }
        if (object.criminals !== undefined && object.criminals !== null) {
            message.criminals = MessageOut_CriminalList.fromAmino(object.criminals);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? KeygenOutput.toAmino(message.data) : undefined;
        obj.criminals = message.criminals ? MessageOut_CriminalList.toAmino(message.criminals) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageOut_KeygenResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageOut_KeygenResult.decode(message.value);
    },
    toProto(message) {
        return MessageOut_KeygenResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenResult",
            value: MessageOut_KeygenResult.encode(message).finish()
        };
    }
};
function createBaseMessageOut_SignResult() {
    return {
        signature: undefined,
        criminals: undefined
    };
}
export const MessageOut_SignResult = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.SignResult",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signature !== undefined) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.criminals !== undefined) {
            MessageOut_CriminalList.encode(message.criminals, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
            criminals: isSet(object.criminals) ? MessageOut_CriminalList.fromJSON(object.criminals) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMessageOut_SignResult();
        message.signature = object.signature ?? undefined;
        message.criminals = object.criminals !== undefined && object.criminals !== null ? MessageOut_CriminalList.fromPartial(object.criminals) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageOut_SignResult();
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        if (object.criminals !== undefined && object.criminals !== null) {
            message.criminals = MessageOut_CriminalList.fromAmino(object.criminals);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        obj.criminals = message.criminals ? MessageOut_CriminalList.toAmino(message.criminals) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageOut_SignResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageOut_SignResult.decode(message.value);
    },
    toProto(message) {
        return MessageOut_SignResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.SignResult",
            value: MessageOut_SignResult.encode(message).finish()
        };
    }
};
function createBaseMessageOut_CriminalList() {
    return {
        criminals: []
    };
}
export const MessageOut_CriminalList = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.CriminalList",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.criminals) {
            MessageOut_CriminalList_Criminal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            criminals: Array.isArray(object?.criminals) ? object.criminals.map((e) => MessageOut_CriminalList_Criminal.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseMessageOut_CriminalList();
        message.criminals = object.criminals?.map(e => MessageOut_CriminalList_Criminal.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageOut_CriminalList();
        message.criminals = object.criminals?.map(e => MessageOut_CriminalList_Criminal.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.criminals) {
            obj.criminals = message.criminals.map(e => e ? MessageOut_CriminalList_Criminal.toAmino(e) : undefined);
        }
        else {
            obj.criminals = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MessageOut_CriminalList.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageOut_CriminalList.decode(message.value);
    },
    toProto(message) {
        return MessageOut_CriminalList.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.CriminalList",
            value: MessageOut_CriminalList.encode(message).finish()
        };
    }
};
function createBaseMessageOut_CriminalList_Criminal() {
    return {
        partyUid: "",
        crimeType: 0
    };
}
export const MessageOut_CriminalList_Criminal = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.Criminal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.partyUid !== "") {
            writer.uint32(10).string(message.partyUid);
        }
        if (message.crimeType !== 0) {
            writer.uint32(16).int32(message.crimeType);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            partyUid: isSet(object.partyUid) ? String(object.partyUid) : "",
            crimeType: isSet(object.crimeType) ? messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object.crimeType) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseMessageOut_CriminalList_Criminal();
        message.partyUid = object.partyUid ?? "";
        message.crimeType = object.crimeType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageOut_CriminalList_Criminal();
        if (object.party_uid !== undefined && object.party_uid !== null) {
            message.partyUid = object.party_uid;
        }
        if (object.crime_type !== undefined && object.crime_type !== null) {
            message.crimeType = messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object.crime_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.party_uid = message.partyUid;
        obj.crime_type = message.crimeType;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageOut_CriminalList_Criminal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageOut_CriminalList_Criminal.decode(message.value);
    },
    toProto(message) {
        return MessageOut_CriminalList_Criminal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.Criminal",
            value: MessageOut_CriminalList_Criminal.encode(message).finish()
        };
    }
};
function createBaseTrafficIn() {
    return {
        fromPartyUid: "",
        payload: new Uint8Array(),
        isBroadcast: false
    };
}
export const TrafficIn = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.TrafficIn",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fromPartyUid !== "") {
            writer.uint32(10).string(message.fromPartyUid);
        }
        if (message.payload.length !== 0) {
            writer.uint32(18).bytes(message.payload);
        }
        if (message.isBroadcast === true) {
            writer.uint32(24).bool(message.isBroadcast);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            fromPartyUid: isSet(object.fromPartyUid) ? String(object.fromPartyUid) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            isBroadcast: isSet(object.isBroadcast) ? Boolean(object.isBroadcast) : false
        };
    },
    fromPartial(object) {
        const message = createBaseTrafficIn();
        message.fromPartyUid = object.fromPartyUid ?? "";
        message.payload = object.payload ?? new Uint8Array();
        message.isBroadcast = object.isBroadcast ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTrafficIn();
        if (object.from_party_uid !== undefined && object.from_party_uid !== null) {
            message.fromPartyUid = object.from_party_uid;
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = bytesFromBase64(object.payload);
        }
        if (object.is_broadcast !== undefined && object.is_broadcast !== null) {
            message.isBroadcast = object.is_broadcast;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_party_uid = message.fromPartyUid;
        obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
        obj.is_broadcast = message.isBroadcast;
        return obj;
    },
    fromAminoMsg(object) {
        return TrafficIn.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TrafficIn.decode(message.value);
    },
    toProto(message) {
        return TrafficIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.TrafficIn",
            value: TrafficIn.encode(message).finish()
        };
    }
};
function createBaseTrafficOut() {
    return {
        toPartyUid: "",
        payload: new Uint8Array(),
        isBroadcast: false
    };
}
export const TrafficOut = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.TrafficOut",
    encode(message, writer = BinaryWriter.create()) {
        if (message.toPartyUid !== "") {
            writer.uint32(10).string(message.toPartyUid);
        }
        if (message.payload.length !== 0) {
            writer.uint32(18).bytes(message.payload);
        }
        if (message.isBroadcast === true) {
            writer.uint32(24).bool(message.isBroadcast);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            toPartyUid: isSet(object.toPartyUid) ? String(object.toPartyUid) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            isBroadcast: isSet(object.isBroadcast) ? Boolean(object.isBroadcast) : false
        };
    },
    fromPartial(object) {
        const message = createBaseTrafficOut();
        message.toPartyUid = object.toPartyUid ?? "";
        message.payload = object.payload ?? new Uint8Array();
        message.isBroadcast = object.isBroadcast ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTrafficOut();
        if (object.to_party_uid !== undefined && object.to_party_uid !== null) {
            message.toPartyUid = object.to_party_uid;
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = bytesFromBase64(object.payload);
        }
        if (object.is_broadcast !== undefined && object.is_broadcast !== null) {
            message.isBroadcast = object.is_broadcast;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.to_party_uid = message.toPartyUid;
        obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
        obj.is_broadcast = message.isBroadcast;
        return obj;
    },
    fromAminoMsg(object) {
        return TrafficOut.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TrafficOut.decode(message.value);
    },
    toProto(message) {
        return TrafficOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.TrafficOut",
            value: TrafficOut.encode(message).finish()
        };
    }
};
function createBaseKeygenInit() {
    return {
        newKeyUid: "",
        partyUids: [],
        partyShareCounts: [],
        myPartyIndex: 0,
        threshold: 0
    };
}
export const KeygenInit = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenInit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.newKeyUid !== "") {
            writer.uint32(10).string(message.newKeyUid);
        }
        for (const v of message.partyUids) {
            writer.uint32(18).string(v);
        }
        writer.uint32(42).fork();
        for (const v of message.partyShareCounts) {
            writer.uint32(v);
        }
        writer.ldelim();
        if (message.myPartyIndex !== 0) {
            writer.uint32(24).uint32(message.myPartyIndex);
        }
        if (message.threshold !== 0) {
            writer.uint32(32).uint32(message.threshold);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            newKeyUid: isSet(object.newKeyUid) ? String(object.newKeyUid) : "",
            partyUids: Array.isArray(object?.partyUids) ? object.partyUids.map((e) => String(e)) : [],
            partyShareCounts: Array.isArray(object?.partyShareCounts) ? object.partyShareCounts.map((e) => Number(e)) : [],
            myPartyIndex: isSet(object.myPartyIndex) ? Number(object.myPartyIndex) : 0,
            threshold: isSet(object.threshold) ? Number(object.threshold) : 0
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenInit();
        message.newKeyUid = object.newKeyUid ?? "";
        message.partyUids = object.partyUids?.map(e => e) || [];
        message.partyShareCounts = object.partyShareCounts?.map(e => e) || [];
        message.myPartyIndex = object.myPartyIndex ?? 0;
        message.threshold = object.threshold ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenInit();
        if (object.new_key_uid !== undefined && object.new_key_uid !== null) {
            message.newKeyUid = object.new_key_uid;
        }
        message.partyUids = object.party_uids?.map(e => e) || [];
        message.partyShareCounts = object.party_share_counts?.map(e => e) || [];
        if (object.my_party_index !== undefined && object.my_party_index !== null) {
            message.myPartyIndex = object.my_party_index;
        }
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.new_key_uid = message.newKeyUid;
        if (message.partyUids) {
            obj.party_uids = message.partyUids.map(e => e);
        }
        else {
            obj.party_uids = [];
        }
        if (message.partyShareCounts) {
            obj.party_share_counts = message.partyShareCounts.map(e => e);
        }
        else {
            obj.party_share_counts = [];
        }
        obj.my_party_index = message.myPartyIndex;
        obj.threshold = message.threshold;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenInit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenInit.decode(message.value);
    },
    toProto(message) {
        return KeygenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenInit",
            value: KeygenInit.encode(message).finish()
        };
    }
};
function createBaseSignInit() {
    return {
        newSigUid: "",
        keyUid: "",
        partyUids: [],
        messageToSign: new Uint8Array()
    };
}
export const SignInit = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.SignInit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.newSigUid !== "") {
            writer.uint32(10).string(message.newSigUid);
        }
        if (message.keyUid !== "") {
            writer.uint32(18).string(message.keyUid);
        }
        for (const v of message.partyUids) {
            writer.uint32(26).string(v);
        }
        if (message.messageToSign.length !== 0) {
            writer.uint32(34).bytes(message.messageToSign);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            newSigUid: isSet(object.newSigUid) ? String(object.newSigUid) : "",
            keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
            partyUids: Array.isArray(object?.partyUids) ? object.partyUids.map((e) => String(e)) : [],
            messageToSign: isSet(object.messageToSign) ? bytesFromBase64(object.messageToSign) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseSignInit();
        message.newSigUid = object.newSigUid ?? "";
        message.keyUid = object.keyUid ?? "";
        message.partyUids = object.partyUids?.map(e => e) || [];
        message.messageToSign = object.messageToSign ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignInit();
        if (object.new_sig_uid !== undefined && object.new_sig_uid !== null) {
            message.newSigUid = object.new_sig_uid;
        }
        if (object.key_uid !== undefined && object.key_uid !== null) {
            message.keyUid = object.key_uid;
        }
        message.partyUids = object.party_uids?.map(e => e) || [];
        if (object.message_to_sign !== undefined && object.message_to_sign !== null) {
            message.messageToSign = bytesFromBase64(object.message_to_sign);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.new_sig_uid = message.newSigUid;
        obj.key_uid = message.keyUid;
        if (message.partyUids) {
            obj.party_uids = message.partyUids.map(e => e);
        }
        else {
            obj.party_uids = [];
        }
        obj.message_to_sign = message.messageToSign ? base64FromBytes(message.messageToSign) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignInit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SignInit.decode(message.value);
    },
    toProto(message) {
        return SignInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.SignInit",
            value: SignInit.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tofnd.js.map