import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
function createBaseTimestamp() {
    return {
        seconds: BigInt(0),
        nanos: 0
    };
}
export const Timestamp = {
    typeUrl: "/google.protobuf.Timestamp",
    encode(message, writer = BinaryWriter.create()) {
        if (message.seconds !== BigInt(0)) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            seconds: isSet(object.seconds) ? BigInt(object.seconds.toString()) : BigInt(0),
            nanos: isSet(object.nanos) ? Number(object.nanos) : 0
        };
    },
    fromPartial(object) {
        const message = createBaseTimestamp();
        message.seconds = object.seconds !== undefined && object.seconds !== null ? BigInt(object.seconds.toString()) : BigInt(0);
        message.nanos = object.nanos ?? 0;
        return message;
    },
    fromAmino(object) {
        return fromJsonTimestamp(object);
    },
    toAmino(message) {
        return fromTimestamp(message).toISOString().replace(/\.\d+Z$/, "Z");
    },
    fromAminoMsg(object) {
        return Timestamp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Timestamp.decode(message.value);
    },
    toProto(message) {
        return Timestamp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Timestamp",
            value: Timestamp.encode(message).finish()
        };
    }
};
//# sourceMappingURL=timestamp.js.map