import { BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes, isSet } from "../../../../helpers";
function createBaseMultiSignature() {
    return {
        signatures: []
    };
}
export const MultiSignature = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.signatures) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => bytesFromBase64(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseMultiSignature();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMultiSignature();
        message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => base64FromBytes(e));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MultiSignature.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MultiSignature",
            value: MultiSignature.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MultiSignature.decode(message.value);
    },
    toProto(message) {
        return MultiSignature.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
            value: MultiSignature.encode(message).finish()
        };
    }
};
function createBaseCompactBitArray() {
    return {
        extraBitsStored: 0,
        elems: new Uint8Array()
    };
}
export const CompactBitArray = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
    encode(message, writer = BinaryWriter.create()) {
        if (message.extraBitsStored !== 0) {
            writer.uint32(8).uint32(message.extraBitsStored);
        }
        if (message.elems.length !== 0) {
            writer.uint32(18).bytes(message.elems);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            extraBitsStored: isSet(object.extraBitsStored) ? Number(object.extraBitsStored) : 0,
            elems: isSet(object.elems) ? bytesFromBase64(object.elems) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseCompactBitArray();
        message.extraBitsStored = object.extraBitsStored ?? 0;
        message.elems = object.elems ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCompactBitArray();
        if (object.extra_bits_stored !== undefined && object.extra_bits_stored !== null) {
            message.extraBitsStored = object.extra_bits_stored;
        }
        if (object.elems !== undefined && object.elems !== null) {
            message.elems = bytesFromBase64(object.elems);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.extra_bits_stored = message.extraBitsStored;
        obj.elems = message.elems ? base64FromBytes(message.elems) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CompactBitArray.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompactBitArray",
            value: CompactBitArray.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CompactBitArray.decode(message.value);
    },
    toProto(message) {
        return CompactBitArray.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
            value: CompactBitArray.encode(message).finish()
        };
    }
};
//# sourceMappingURL=multisig.js.map