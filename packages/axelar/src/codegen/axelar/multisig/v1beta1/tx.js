import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseStartKeygenRequest() {
    return {
        sender: "",
        keyId: ""
    };
}
export const StartKeygenRequest = {
    typeUrl: "/axelar.multisig.v1beta1.StartKeygenRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseStartKeygenRequest();
        message.sender = object.sender ?? "";
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseStartKeygenRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.key_id = message.keyId;
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
            typeUrl: "/axelar.multisig.v1beta1.StartKeygenRequest",
            value: StartKeygenRequest.encode(message).finish()
        };
    }
};
function createBaseStartKeygenResponse() {
    return {};
}
export const StartKeygenResponse = {
    typeUrl: "/axelar.multisig.v1beta1.StartKeygenResponse",
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
            typeUrl: "/axelar.multisig.v1beta1.StartKeygenResponse",
            value: StartKeygenResponse.encode(message).finish()
        };
    }
};
function createBaseSubmitPubKeyRequest() {
    return {
        sender: "",
        keyId: "",
        pubKey: new Uint8Array(),
        signature: new Uint8Array()
    };
}
export const SubmitPubKeyRequest = {
    typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        if (message.pubKey.length !== 0) {
            writer.uint32(26).bytes(message.pubKey);
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseSubmitPubKeyRequest();
        message.sender = object.sender ?? "";
        message.keyId = object.keyId ?? "";
        message.pubKey = object.pubKey ?? new Uint8Array();
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubmitPubKeyRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = bytesFromBase64(object.pub_key);
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.key_id = message.keyId;
        obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SubmitPubKeyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubmitPubKeyRequest.decode(message.value);
    },
    toProto(message) {
        return SubmitPubKeyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyRequest",
            value: SubmitPubKeyRequest.encode(message).finish()
        };
    }
};
function createBaseSubmitPubKeyResponse() {
    return {};
}
export const SubmitPubKeyResponse = {
    typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseSubmitPubKeyResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseSubmitPubKeyResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return SubmitPubKeyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubmitPubKeyResponse.decode(message.value);
    },
    toProto(message) {
        return SubmitPubKeyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyResponse",
            value: SubmitPubKeyResponse.encode(message).finish()
        };
    }
};
function createBaseSubmitSignatureRequest() {
    return {
        sender: "",
        sigId: BigInt(0),
        signature: new Uint8Array()
    };
}
export const SubmitSignatureRequest = {
    typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.sigId !== BigInt(0)) {
            writer.uint32(16).uint64(message.sigId);
        }
        if (message.signature.length !== 0) {
            writer.uint32(26).bytes(message.signature);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            sigId: isSet(object.sigId) ? BigInt(object.sigId.toString()) : BigInt(0),
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseSubmitSignatureRequest();
        message.sender = object.sender ?? "";
        message.sigId = object.sigId !== undefined && object.sigId !== null ? BigInt(object.sigId.toString()) : BigInt(0);
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubmitSignatureRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.sig_id !== undefined && object.sig_id !== null) {
            message.sigId = BigInt(object.sig_id);
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.sig_id = message.sigId ? message.sigId.toString() : undefined;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SubmitSignatureRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubmitSignatureRequest.decode(message.value);
    },
    toProto(message) {
        return SubmitSignatureRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureRequest",
            value: SubmitSignatureRequest.encode(message).finish()
        };
    }
};
function createBaseSubmitSignatureResponse() {
    return {};
}
export const SubmitSignatureResponse = {
    typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseSubmitSignatureResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseSubmitSignatureResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return SubmitSignatureResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubmitSignatureResponse.decode(message.value);
    },
    toProto(message) {
        return SubmitSignatureResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureResponse",
            value: SubmitSignatureResponse.encode(message).finish()
        };
    }
};
function createBaseRotateKeyRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        keyId: ""
    };
}
export const RotateKeyRequest = {
    typeUrl: "/axelar.multisig.v1beta1.RotateKeyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseRotateKeyRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
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
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
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
            typeUrl: "/axelar.multisig.v1beta1.RotateKeyRequest",
            value: RotateKeyRequest.encode(message).finish()
        };
    }
};
function createBaseRotateKeyResponse() {
    return {};
}
export const RotateKeyResponse = {
    typeUrl: "/axelar.multisig.v1beta1.RotateKeyResponse",
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
            typeUrl: "/axelar.multisig.v1beta1.RotateKeyResponse",
            value: RotateKeyResponse.encode(message).finish()
        };
    }
};
function createBaseKeygenOptOutRequest() {
    return {
        sender: new Uint8Array()
    };
}
export const KeygenOptOutRequest = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenOptOutRequest();
        message.sender = object.sender ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenOptOutRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenOptOutRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenOptOutRequest.decode(message.value);
    },
    toProto(message) {
        return KeygenOptOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutRequest",
            value: KeygenOptOutRequest.encode(message).finish()
        };
    }
};
function createBaseKeygenOptOutResponse() {
    return {};
}
export const KeygenOptOutResponse = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseKeygenOptOutResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseKeygenOptOutResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenOptOutResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenOptOutResponse.decode(message.value);
    },
    toProto(message) {
        return KeygenOptOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutResponse",
            value: KeygenOptOutResponse.encode(message).finish()
        };
    }
};
function createBaseKeygenOptInRequest() {
    return {
        sender: new Uint8Array()
    };
}
export const KeygenOptInRequest = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptInRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseKeygenOptInRequest();
        message.sender = object.sender ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseKeygenOptInRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenOptInRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenOptInRequest.decode(message.value);
    },
    toProto(message) {
        return KeygenOptInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenOptInRequest",
            value: KeygenOptInRequest.encode(message).finish()
        };
    }
};
function createBaseKeygenOptInResponse() {
    return {};
}
export const KeygenOptInResponse = {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptInResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseKeygenOptInResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseKeygenOptInResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return KeygenOptInResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeygenOptInResponse.decode(message.value);
    },
    toProto(message) {
        return KeygenOptInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.multisig.v1beta1.KeygenOptInResponse",
            value: KeygenOptInResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map