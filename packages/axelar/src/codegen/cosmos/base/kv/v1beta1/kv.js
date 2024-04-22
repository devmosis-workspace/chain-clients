import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBasePairs() {
    return {
        pairs: []
    };
}
export const Pairs = {
    typeUrl: "/cosmos.base.kv.v1beta1.Pairs",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pairs) {
            Pair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => Pair.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBasePairs();
        message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePairs();
        message.pairs = object.pairs?.map(e => Pair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? Pair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Pairs.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Pairs",
            value: Pairs.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Pairs.decode(message.value);
    },
    toProto(message) {
        return Pairs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.kv.v1beta1.Pairs",
            value: Pairs.encode(message).finish()
        };
    }
};
function createBasePair() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export const Pair = {
    typeUrl: "/cosmos.base.kv.v1beta1.Pair",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBasePair();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePair();
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        obj.value = message.value ? base64FromBytes(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Pair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Pair",
            value: Pair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Pair.decode(message.value);
    },
    toProto(message) {
        return Pair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.kv.v1beta1.Pair",
            value: Pair.encode(message).finish()
        };
    }
};
//# sourceMappingURL=kv.js.map