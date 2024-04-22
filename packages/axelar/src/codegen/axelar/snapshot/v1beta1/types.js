import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseProxiedValidator() {
    return {
        validator: new Uint8Array(),
        proxy: new Uint8Array(),
        active: false
    };
}
export const ProxiedValidator = {
    typeUrl: "/axelar.snapshot.v1beta1.ProxiedValidator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator.length !== 0) {
            writer.uint32(10).bytes(message.validator);
        }
        if (message.proxy.length !== 0) {
            writer.uint32(18).bytes(message.proxy);
        }
        if (message.active === true) {
            writer.uint32(24).bool(message.active);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
            proxy: isSet(object.proxy) ? bytesFromBase64(object.proxy) : new Uint8Array(),
            active: isSet(object.active) ? Boolean(object.active) : false
        };
    },
    fromPartial(object) {
        const message = createBaseProxiedValidator();
        message.validator = object.validator ?? new Uint8Array();
        message.proxy = object.proxy ?? new Uint8Array();
        message.active = object.active ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseProxiedValidator();
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = bytesFromBase64(object.validator);
        }
        if (object.proxy !== undefined && object.proxy !== null) {
            message.proxy = bytesFromBase64(object.proxy);
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = object.active;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? base64FromBytes(message.validator) : undefined;
        obj.proxy = message.proxy ? base64FromBytes(message.proxy) : undefined;
        obj.active = message.active;
        return obj;
    },
    fromAminoMsg(object) {
        return ProxiedValidator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProxiedValidator.decode(message.value);
    },
    toProto(message) {
        return ProxiedValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.v1beta1.ProxiedValidator",
            value: ProxiedValidator.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map