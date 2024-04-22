import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseRefundMsgRequest() {
    return {
        sender: new Uint8Array(),
        innerMessage: undefined
    };
}
export const RefundMsgRequest = {
    typeUrl: "/axelar.reward.v1beta1.RefundMsgRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.innerMessage !== undefined) {
            Any.encode(message.innerMessage, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            innerMessage: isSet(object.innerMessage) ? Any.fromJSON(object.innerMessage) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseRefundMsgRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.innerMessage = object.innerMessage !== undefined && object.innerMessage !== null ? Any.fromPartial(object.innerMessage) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRefundMsgRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.inner_message !== undefined && object.inner_message !== null) {
            message.innerMessage = Refundable_FromAmino(object.inner_message);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.inner_message = message.innerMessage ? Refundable_ToAmino(message.innerMessage) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RefundMsgRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RefundMsgRequest.decode(message.value);
    },
    toProto(message) {
        return RefundMsgRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.reward.v1beta1.RefundMsgRequest",
            value: RefundMsgRequest.encode(message).finish()
        };
    }
};
function createBaseRefundMsgResponse() {
    return {
        data: new Uint8Array(),
        log: ""
    };
}
export const RefundMsgResponse = {
    typeUrl: "/axelar.reward.v1beta1.RefundMsgResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseRefundMsgResponse();
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRefundMsgResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.log = message.log;
        return obj;
    },
    fromAminoMsg(object) {
        return RefundMsgResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RefundMsgResponse.decode(message.value);
    },
    toProto(message) {
        return RefundMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.reward.v1beta1.RefundMsgResponse",
            value: RefundMsgResponse.encode(message).finish()
        };
    }
};
export const Refundable_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
export const Refundable_FromAmino = (content) => {
    return Any.fromAmino(content);
};
export const Refundable_ToAmino = (content) => {
    return Any.toAmino(content);
};
//# sourceMappingURL=tx.js.map