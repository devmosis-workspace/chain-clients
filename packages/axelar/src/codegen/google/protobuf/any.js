import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
function createBaseAny() {
    return {
        $typeUrl: "/google.protobuf.Any",
        typeUrl: "",
        value: new Uint8Array()
    };
}
export const Any = {
    typeUrl: "/google.protobuf.Any",
    encode(message, writer = BinaryWriter.create()) {
        if (message.typeUrl !== "") {
            writer.uint32(10).string(message.typeUrl);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : "",
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseAny();
        message.typeUrl = object.typeUrl ?? "";
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            typeUrl: object.type,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.typeUrl;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return Any.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Any.decode(message.value);
    },
    toProto(message) {
        return Any.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Any",
            value: Any.encode(message).finish()
        };
    }
};
//# sourceMappingURL=any.js.map