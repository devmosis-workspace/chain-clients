import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export var KeyPresenceResponse_Response;
(function (KeyPresenceResponse_Response) {
    KeyPresenceResponse_Response[KeyPresenceResponse_Response["RESPONSE_UNSPECIFIED"] = 0] = "RESPONSE_UNSPECIFIED";
    KeyPresenceResponse_Response[KeyPresenceResponse_Response["RESPONSE_PRESENT"] = 1] = "RESPONSE_PRESENT";
    KeyPresenceResponse_Response[KeyPresenceResponse_Response["RESPONSE_ABSENT"] = 2] = "RESPONSE_ABSENT";
    KeyPresenceResponse_Response[KeyPresenceResponse_Response["RESPONSE_FAIL"] = 3] = "RESPONSE_FAIL";
    KeyPresenceResponse_Response[KeyPresenceResponse_Response["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyPresenceResponse_Response || (KeyPresenceResponse_Response = {}));
export const KeyPresenceResponse_ResponseSDKType = KeyPresenceResponse_Response;
export const KeyPresenceResponse_ResponseAmino = KeyPresenceResponse_Response;
export function keyPresenceResponse_ResponseFromJSON(object) {
    switch (object) {
        case 0:
        case "RESPONSE_UNSPECIFIED":
            return KeyPresenceResponse_Response.RESPONSE_UNSPECIFIED;
        case 1:
        case "RESPONSE_PRESENT":
            return KeyPresenceResponse_Response.RESPONSE_PRESENT;
        case 2:
        case "RESPONSE_ABSENT":
            return KeyPresenceResponse_Response.RESPONSE_ABSENT;
        case 3:
        case "RESPONSE_FAIL":
            return KeyPresenceResponse_Response.RESPONSE_FAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KeyPresenceResponse_Response.UNRECOGNIZED;
    }
}
export function keyPresenceResponse_ResponseToJSON(object) {
    switch (object) {
        case KeyPresenceResponse_Response.RESPONSE_UNSPECIFIED:
            return "RESPONSE_UNSPECIFIED";
        case KeyPresenceResponse_Response.RESPONSE_PRESENT:
            return "RESPONSE_PRESENT";
        case KeyPresenceResponse_Response.RESPONSE_ABSENT:
            return "RESPONSE_ABSENT";
        case KeyPresenceResponse_Response.RESPONSE_FAIL:
            return "RESPONSE_FAIL";
        case KeyPresenceResponse_Response.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseKeyPresenceRequest() {
    return {
        keyUid: "",
        pubKey: new Uint8Array()
    };
}
export const KeyPresenceRequest = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keyUid !== "") {
            writer.uint32(10).string(message.keyUid);
        }
        if (message.pubKey.length !== 0) {
            writer.uint32(18).bytes(message.pubKey);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseKeyPresenceRequest();
        message.keyUid = object.keyUid ?? "";
        message.pubKey = object.pubKey ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyPresenceRequest();
        if (object.key_uid !== undefined && object.key_uid !== null) {
            message.keyUid = object.key_uid;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = bytesFromBase64(object.pub_key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_uid = message.keyUid;
        obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyPresenceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyPresenceRequest.decode(message.value);
    },
    toProto(message) {
        return KeyPresenceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceRequest",
            value: KeyPresenceRequest.encode(message).finish()
        };
    }
};
function createBaseKeyPresenceResponse() {
    return {
        response: 0
    };
}
export const KeyPresenceResponse = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.response !== 0) {
            writer.uint32(8).int32(message.response);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            response: isSet(object.response) ? keyPresenceResponse_ResponseFromJSON(object.response) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseKeyPresenceResponse();
        message.response = object.response ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeyPresenceResponse();
        if (object.response !== undefined && object.response !== null) {
            message.response = keyPresenceResponse_ResponseFromJSON(object.response);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.response = message.response;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyPresenceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyPresenceResponse.decode(message.value);
    },
    toProto(message) {
        return KeyPresenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.KeyPresenceResponse",
            value: KeyPresenceResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=common.js.map