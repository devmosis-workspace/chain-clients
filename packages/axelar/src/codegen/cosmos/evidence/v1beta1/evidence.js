import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
function createBaseEquivocation() {
    return {
        height: BigInt(0),
        time: Timestamp.fromPartial({}),
        power: BigInt(0),
        consensusAddress: ""
    };
}
export const Equivocation = {
    typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensusAddress !== "") {
            writer.uint32(34).string(message.consensusAddress);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0),
            consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseEquivocation();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        message.consensusAddress = object.consensusAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEquivocation();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = Timestamp.fromAmino(object.time);
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        if (object.consensus_address !== undefined && object.consensus_address !== null) {
            message.consensusAddress = object.consensus_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
        obj.power = message.power ? message.power.toString() : undefined;
        obj.consensus_address = message.consensusAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return Equivocation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Equivocation",
            value: Equivocation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Equivocation.decode(message.value);
    },
    toProto(message) {
        return Equivocation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
            value: Equivocation.encode(message).finish()
        };
    }
};
//# sourceMappingURL=evidence.js.map