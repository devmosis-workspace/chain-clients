import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
function createBaseDenomTrace() {
    return {
        path: "",
        baseDenom: ""
    };
}
export const DenomTrace = {
    typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
    encode(message, writer = BinaryWriter.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.baseDenom !== "") {
            writer.uint32(18).string(message.baseDenom);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            path: isSet(object.path) ? String(object.path) : "",
            baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseDenomTrace();
        message.path = object.path ?? "";
        message.baseDenom = object.baseDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDenomTrace();
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        if (object.base_denom !== undefined && object.base_denom !== null) {
            message.baseDenom = object.base_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.base_denom = message.baseDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return DenomTrace.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DenomTrace",
            value: DenomTrace.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DenomTrace.decode(message.value);
    },
    toProto(message) {
        return DenomTrace.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
            value: DenomTrace.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        sendEnabled: false,
        receiveEnabled: false
    };
}
export const Params = {
    typeUrl: "/ibc.applications.transfer.v1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sendEnabled === true) {
            writer.uint32(8).bool(message.sendEnabled);
        }
        if (message.receiveEnabled === true) {
            writer.uint32(16).bool(message.receiveEnabled);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sendEnabled: isSet(object.sendEnabled) ? Boolean(object.sendEnabled) : false,
            receiveEnabled: isSet(object.receiveEnabled) ? Boolean(object.receiveEnabled) : false
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.sendEnabled = object.sendEnabled ?? false;
        message.receiveEnabled = object.receiveEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.send_enabled !== undefined && object.send_enabled !== null) {
            message.sendEnabled = object.send_enabled;
        }
        if (object.receive_enabled !== undefined && object.receive_enabled !== null) {
            message.receiveEnabled = object.receive_enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.send_enabled = message.sendEnabled;
        obj.receive_enabled = message.receiveEnabled;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=transfer.js.map