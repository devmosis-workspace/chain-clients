import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseEventGrant() {
    return {
        msgTypeUrl: "",
        granter: "",
        grantee: ""
    };
}
export const EventGrant = {
    typeUrl: "/cosmos.authz.v1beta1.EventGrant",
    encode(message, writer = BinaryWriter.create()) {
        if (message.msgTypeUrl !== "") {
            writer.uint32(18).string(message.msgTypeUrl);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseEventGrant();
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventGrant();
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msgTypeUrl = object.msg_type_url;
        }
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type_url = message.msgTypeUrl;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return EventGrant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventGrant",
            value: EventGrant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventGrant.decode(message.value);
    },
    toProto(message) {
        return EventGrant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.EventGrant",
            value: EventGrant.encode(message).finish()
        };
    }
};
function createBaseEventRevoke() {
    return {
        msgTypeUrl: "",
        granter: "",
        grantee: ""
    };
}
export const EventRevoke = {
    typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
    encode(message, writer = BinaryWriter.create()) {
        if (message.msgTypeUrl !== "") {
            writer.uint32(18).string(message.msgTypeUrl);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseEventRevoke();
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRevoke();
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msgTypeUrl = object.msg_type_url;
        }
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type_url = message.msgTypeUrl;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return EventRevoke.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventRevoke",
            value: EventRevoke.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventRevoke.decode(message.value);
    },
    toProto(message) {
        return EventRevoke.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
            value: EventRevoke.encode(message).finish()
        };
    }
};
//# sourceMappingURL=event.js.map