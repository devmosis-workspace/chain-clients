import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseMsgUnjail() {
    return {
        validatorAddr: ""
    };
}
export const MsgUnjail = {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgUnjail();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnjail();
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validatorAddr = object.validator_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnjail.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnjail",
            value: MsgUnjail.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUnjail.decode(message.value);
    },
    toProto(message) {
        return MsgUnjail.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
            value: MsgUnjail.encode(message).finish()
        };
    }
};
function createBaseMsgUnjailResponse() {
    return {};
}
export const MsgUnjailResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgUnjailResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUnjailResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnjailResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnjailResponse",
            value: MsgUnjailResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUnjailResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUnjailResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
            value: MsgUnjailResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map