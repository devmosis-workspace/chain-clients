import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseKeygenRequest() {
    return {
        keyUid: "",
        partyUid: ""
    };
}
export const KeygenRequest = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keyUid !== "") {
            writer.uint32(10).string(message.keyUid);
        }
        if (message.partyUid !== "") {
            writer.uint32(18).string(message.partyUid);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
            partyUid: isSet(object.partyUid) ? String(object.partyUid) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenRequest();
        message.keyUid = object.keyUid ?? "";
        message.partyUid = object.partyUid ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenRequest();
        if (object.key_uid !== undefined && object.key_uid !== null) {
            message.keyUid = object.key_uid;
        }
        if (object.party_uid !== undefined && object.party_uid !== null) {
            message.partyUid = object.party_uid;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_uid = message.keyUid;
        obj.party_uid = message.partyUid;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenRequest.decode(message.value);
    },
    toProto(message) {
        return KeygenRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenRequest",
            value: KeygenRequest.encode(message).finish()
        };
    }
};
function createBaseKeygenResponse() {
    return {
        pubKey: undefined,
        error: undefined
    };
}
export const KeygenResponse = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pubKey !== undefined) {
            writer.uint32(10).bytes(message.pubKey);
        }
        if (message.error !== undefined) {
            writer.uint32(18).string(message.error);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : undefined,
            error: isSet(object.error) ? String(object.error) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenResponse();
        message.pubKey = object.pubKey ?? undefined;
        message.error = object.error ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenResponse();
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = bytesFromBase64(object.pub_key);
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenResponse.decode(message.value);
    },
    toProto(message) {
        return KeygenResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenResponse",
            value: KeygenResponse.encode(message).finish()
        };
    }
};
function createBaseSignRequest() {
    return {
        keyUid: "",
        msgToSign: new Uint8Array(),
        partyUid: "",
        pubKey: new Uint8Array()
    };
}
export const SignRequest = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.SignRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keyUid !== "") {
            writer.uint32(10).string(message.keyUid);
        }
        if (message.msgToSign.length !== 0) {
            writer.uint32(18).bytes(message.msgToSign);
        }
        if (message.partyUid !== "") {
            writer.uint32(26).string(message.partyUid);
        }
        if (message.pubKey.length !== 0) {
            writer.uint32(34).bytes(message.pubKey);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
            msgToSign: isSet(object.msgToSign) ? bytesFromBase64(object.msgToSign) : new Uint8Array(),
            partyUid: isSet(object.partyUid) ? String(object.partyUid) : "",
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseSignRequest();
        message.keyUid = object.keyUid ?? "";
        message.msgToSign = object.msgToSign ?? new Uint8Array();
        message.partyUid = object.partyUid ?? "";
        message.pubKey = object.pubKey ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignRequest();
        if (object.key_uid !== undefined && object.key_uid !== null) {
            message.keyUid = object.key_uid;
        }
        if (object.msg_to_sign !== undefined && object.msg_to_sign !== null) {
            message.msgToSign = bytesFromBase64(object.msg_to_sign);
        }
        if (object.party_uid !== undefined && object.party_uid !== null) {
            message.partyUid = object.party_uid;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = bytesFromBase64(object.pub_key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_uid = message.keyUid;
        obj.msg_to_sign = message.msgToSign ? base64FromBytes(message.msgToSign) : undefined;
        obj.party_uid = message.partyUid;
        obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SignRequest.decode(message.value);
    },
    toProto(message) {
        return SignRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.SignRequest",
            value: SignRequest.encode(message).finish()
        };
    }
};
function createBaseSignResponse() {
    return {
        signature: undefined,
        error: undefined
    };
}
export const SignResponse = {
    typeUrl: "/axelar.tss.tofnd.v1beta1.SignResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signature !== undefined) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.error !== undefined) {
            writer.uint32(18).string(message.error);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
            error: isSet(object.error) ? String(object.error) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseSignResponse();
        message.signature = object.signature ?? undefined;
        message.error = object.error ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignResponse();
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return SignResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SignResponse.decode(message.value);
    },
    toProto(message) {
        return SignResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.tss.tofnd.v1beta1.SignResponse",
            value: SignResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=multisig.js.map