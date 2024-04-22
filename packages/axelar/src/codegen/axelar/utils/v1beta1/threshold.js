import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseThreshold() {
    return {
        numerator: BigInt(0),
        denominator: BigInt(0)
    };
}
export const Threshold = {
    typeUrl: "/axelar.utils.v1beta1.Threshold",
    encode(message, writer = BinaryWriter.create()) {
        if (message.numerator !== BigInt(0)) {
            writer.uint32(8).int64(message.numerator);
        }
        if (message.denominator !== BigInt(0)) {
            writer.uint32(16).int64(message.denominator);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            numerator: isSet(object.numerator) ? BigInt(object.numerator.toString()) : BigInt(0),
            denominator: isSet(object.denominator) ? BigInt(object.denominator.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseThreshold();
        message.numerator = object.numerator !== undefined && object.numerator !== null ? BigInt(object.numerator.toString()) : BigInt(0);
        message.denominator = object.denominator !== undefined && object.denominator !== null ? BigInt(object.denominator.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseThreshold();
        if (object.numerator !== undefined && object.numerator !== null) {
            message.numerator = BigInt(object.numerator);
        }
        if (object.denominator !== undefined && object.denominator !== null) {
            message.denominator = BigInt(object.denominator);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.numerator = message.numerator ? message.numerator.toString() : undefined;
        obj.denominator = message.denominator ? message.denominator.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Threshold.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Threshold.decode(message.value);
    },
    toProto(message) {
        return Threshold.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.utils.v1beta1.Threshold",
            value: Threshold.encode(message).finish()
        };
    }
};
//# sourceMappingURL=threshold.js.map