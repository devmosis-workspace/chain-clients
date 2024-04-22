import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseRegisterProxyRequest() {
    return {
        sender: new Uint8Array(),
        proxyAddr: new Uint8Array()
    };
}
export const RegisterProxyRequest = {
    typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.proxyAddr.length !== 0) {
            writer.uint32(18).bytes(message.proxyAddr);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            proxyAddr: isSet(object.proxyAddr) ? bytesFromBase64(object.proxyAddr) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseRegisterProxyRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.proxyAddr = object.proxyAddr ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterProxyRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.proxy_addr !== undefined && object.proxy_addr !== null) {
            message.proxyAddr = bytesFromBase64(object.proxy_addr);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.proxy_addr = message.proxyAddr ? base64FromBytes(message.proxyAddr) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterProxyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterProxyRequest.decode(message.value);
    },
    toProto(message) {
        return RegisterProxyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyRequest",
            value: RegisterProxyRequest.encode(message).finish()
        };
    }
};
function createBaseRegisterProxyResponse() {
    return {};
}
export const RegisterProxyResponse = {
    typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRegisterProxyResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRegisterProxyResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterProxyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterProxyResponse.decode(message.value);
    },
    toProto(message) {
        return RegisterProxyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyResponse",
            value: RegisterProxyResponse.encode(message).finish()
        };
    }
};
function createBaseDeactivateProxyRequest() {
    return {
        sender: new Uint8Array()
    };
}
export const DeactivateProxyRequest = {
    typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyRequest",
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
        const message = createBaseDeactivateProxyRequest();
        message.sender = object.sender ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeactivateProxyRequest();
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
        return DeactivateProxyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DeactivateProxyRequest.decode(message.value);
    },
    toProto(message) {
        return DeactivateProxyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyRequest",
            value: DeactivateProxyRequest.encode(message).finish()
        };
    }
};
function createBaseDeactivateProxyResponse() {
    return {};
}
export const DeactivateProxyResponse = {
    typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseDeactivateProxyResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseDeactivateProxyResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return DeactivateProxyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DeactivateProxyResponse.decode(message.value);
    },
    toProto(message) {
        return DeactivateProxyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyResponse",
            value: DeactivateProxyResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map