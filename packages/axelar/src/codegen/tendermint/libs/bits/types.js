import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseBitArray() {
    return {
        bits: BigInt(0),
        elems: []
    };
}
export const BitArray = {
    typeUrl: "/tendermint.libs.bits.BitArray",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bits !== BigInt(0)) {
            writer.uint32(8).int64(message.bits);
        }
        writer.uint32(18).fork();
        for (const v of message.elems) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    fromJSON(object) {
        return {
            bits: isSet(object.bits) ? BigInt(object.bits.toString()) : BigInt(0),
            elems: Array.isArray(object?.elems) ? object.elems.map((e) => BigInt(e.toString())) : []
        };
    },
    fromPartial(object) {
        const message = createBaseBitArray();
        message.bits = object.bits !== undefined && object.bits !== null ? BigInt(object.bits.toString()) : BigInt(0);
        message.elems = object.elems?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBitArray();
        if (object.bits !== undefined && object.bits !== null) {
            message.bits = BigInt(object.bits);
        }
        message.elems = object.elems?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bits = message.bits ? message.bits.toString() : undefined;
        if (message.elems) {
            obj.elems = message.elems.map(e => e.toString());
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return BitArray.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BitArray.decode(message.value);
    },
    toProto(message) {
        return BitArray.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.libs.bits.BitArray",
            value: BitArray.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map