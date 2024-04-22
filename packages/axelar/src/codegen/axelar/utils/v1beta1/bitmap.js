import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseBitmap() {
    return {
        trueCountCache: undefined
    };
}
export const Bitmap = {
    typeUrl: "/axelar.utils.v1beta1.Bitmap",
    encode(message, writer = BinaryWriter.create()) {
        if (message.trueCountCache !== undefined) {
            CircularBuffer.encode(message.trueCountCache, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            trueCountCache: isSet(object.trueCountCache) ? CircularBuffer.fromJSON(object.trueCountCache) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseBitmap();
        message.trueCountCache = object.trueCountCache !== undefined && object.trueCountCache !== null ? CircularBuffer.fromPartial(object.trueCountCache) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBitmap();
        if (object.true_count_cache !== undefined && object.true_count_cache !== null) {
            message.trueCountCache = CircularBuffer.fromAmino(object.true_count_cache);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.true_count_cache = message.trueCountCache ? CircularBuffer.toAmino(message.trueCountCache) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Bitmap.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Bitmap.decode(message.value);
    },
    toProto(message) {
        return Bitmap.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.utils.v1beta1.Bitmap",
            value: Bitmap.encode(message).finish()
        };
    }
};
function createBaseCircularBuffer() {
    return {
        cumulativeValue: [],
        index: 0,
        maxSize: 0
    };
}
export const CircularBuffer = {
    typeUrl: "/axelar.utils.v1beta1.CircularBuffer",
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.cumulativeValue) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.index !== 0) {
            writer.uint32(16).int32(message.index);
        }
        if (message.maxSize !== 0) {
            writer.uint32(24).int32(message.maxSize);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            cumulativeValue: Array.isArray(object?.cumulativeValue) ? object.cumulativeValue.map((e) => BigInt(e.toString())) : [],
            index: isSet(object.index) ? Number(object.index) : 0,
            maxSize: isSet(object.maxSize) ? Number(object.maxSize) : 0
        };
    },
    fromPartial(object) {
        const message = createBaseCircularBuffer();
        message.cumulativeValue = object.cumulativeValue?.map(e => BigInt(e.toString())) || [];
        message.index = object.index ?? 0;
        message.maxSize = object.maxSize ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCircularBuffer();
        message.cumulativeValue = object.cumulative_value?.map(e => BigInt(e)) || [];
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.max_size !== undefined && object.max_size !== null) {
            message.maxSize = object.max_size;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.cumulativeValue) {
            obj.cumulative_value = message.cumulativeValue.map(e => e.toString());
        }
        else {
            obj.cumulative_value = [];
        }
        obj.index = message.index;
        obj.max_size = message.maxSize;
        return obj;
    },
    fromAminoMsg(object) {
        return CircularBuffer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CircularBuffer.decode(message.value);
    },
    toProto(message) {
        return CircularBuffer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.utils.v1beta1.CircularBuffer",
            value: CircularBuffer.encode(message).finish()
        };
    }
};
//# sourceMappingURL=bitmap.js.map