import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseMsgVerifyInvariant() {
    return {
        sender: "",
        invariantModuleName: "",
        invariantRoute: ""
    };
}
export const MsgVerifyInvariant = {
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invariantModuleName !== "") {
            writer.uint32(18).string(message.invariantModuleName);
        }
        if (message.invariantRoute !== "") {
            writer.uint32(26).string(message.invariantRoute);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            invariantModuleName: isSet(object.invariantModuleName) ? String(object.invariantModuleName) : "",
            invariantRoute: isSet(object.invariantRoute) ? String(object.invariantRoute) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgVerifyInvariant();
        message.sender = object.sender ?? "";
        message.invariantModuleName = object.invariantModuleName ?? "";
        message.invariantRoute = object.invariantRoute ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVerifyInvariant();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.invariant_module_name !== undefined && object.invariant_module_name !== null) {
            message.invariantModuleName = object.invariant_module_name;
        }
        if (object.invariant_route !== undefined && object.invariant_route !== null) {
            message.invariantRoute = object.invariant_route;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.invariant_module_name = message.invariantModuleName;
        obj.invariant_route = message.invariantRoute;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVerifyInvariant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVerifyInvariant",
            value: MsgVerifyInvariant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVerifyInvariant.decode(message.value);
    },
    toProto(message) {
        return MsgVerifyInvariant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
            value: MsgVerifyInvariant.encode(message).finish()
        };
    }
};
function createBaseMsgVerifyInvariantResponse() {
    return {};
}
export const MsgVerifyInvariantResponse = {
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgVerifyInvariantResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVerifyInvariantResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVerifyInvariantResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVerifyInvariantResponse",
            value: MsgVerifyInvariantResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVerifyInvariantResponse.decode(message.value);
    },
    toProto(message) {
        return MsgVerifyInvariantResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
            value: MsgVerifyInvariantResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map