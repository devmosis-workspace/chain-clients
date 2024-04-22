import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        startHeight: BigInt(0),
        indexOffset: BigInt(0),
        jailedUntil: Timestamp.fromPartial({}),
        tombstoned: false,
        missedBlocksCounter: BigInt(0)
    };
}
export const ValidatorSigningInfo = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.startHeight !== BigInt(0)) {
            writer.uint32(16).int64(message.startHeight);
        }
        if (message.indexOffset !== BigInt(0)) {
            writer.uint32(24).int64(message.indexOffset);
        }
        if (message.jailedUntil !== undefined) {
            Timestamp.encode(message.jailedUntil, writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (message.missedBlocksCounter !== BigInt(0)) {
            writer.uint32(48).int64(message.missedBlocksCounter);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            startHeight: isSet(object.startHeight) ? BigInt(object.startHeight.toString()) : BigInt(0),
            indexOffset: isSet(object.indexOffset) ? BigInt(object.indexOffset.toString()) : BigInt(0),
            jailedUntil: isSet(object.jailedUntil) ? fromJsonTimestamp(object.jailedUntil) : undefined,
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            missedBlocksCounter: isSet(object.missedBlocksCounter) ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorSigningInfo();
        message.address = object.address ?? "";
        message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt(0);
        message.indexOffset = object.indexOffset !== undefined && object.indexOffset !== null ? BigInt(object.indexOffset.toString()) : BigInt(0);
        message.jailedUntil = object.jailedUntil !== undefined && object.jailedUntil !== null ? Timestamp.fromPartial(object.jailedUntil) : undefined;
        message.tombstoned = object.tombstoned ?? false;
        message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSigningInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.start_height !== undefined && object.start_height !== null) {
            message.startHeight = BigInt(object.start_height);
        }
        if (object.index_offset !== undefined && object.index_offset !== null) {
            message.indexOffset = BigInt(object.index_offset);
        }
        if (object.jailed_until !== undefined && object.jailed_until !== null) {
            message.jailedUntil = Timestamp.fromAmino(object.jailed_until);
        }
        if (object.tombstoned !== undefined && object.tombstoned !== null) {
            message.tombstoned = object.tombstoned;
        }
        if (object.missed_blocks_counter !== undefined && object.missed_blocks_counter !== null) {
            message.missedBlocksCounter = BigInt(object.missed_blocks_counter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.start_height = message.startHeight ? message.startHeight.toString() : undefined;
        obj.index_offset = message.indexOffset ? message.indexOffset.toString() : undefined;
        obj.jailed_until = message.jailedUntil ? Timestamp.toAmino(message.jailedUntil) : undefined;
        obj.tombstoned = message.tombstoned;
        obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSigningInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSigningInfo",
            value: ValidatorSigningInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorSigningInfo.decode(message.value);
    },
    toProto(message) {
        return ValidatorSigningInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
            value: ValidatorSigningInfo.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        signedBlocksWindow: BigInt(0),
        minSignedPerWindow: new Uint8Array(),
        downtimeJailDuration: Duration.fromPartial({}),
        slashFractionDoubleSign: new Uint8Array(),
        slashFractionDowntime: new Uint8Array()
    };
}
export const Params = {
    typeUrl: "/cosmos.slashing.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signedBlocksWindow !== BigInt(0)) {
            writer.uint32(8).int64(message.signedBlocksWindow);
        }
        if (message.minSignedPerWindow.length !== 0) {
            writer.uint32(18).bytes(message.minSignedPerWindow);
        }
        if (message.downtimeJailDuration !== undefined) {
            Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slashFractionDoubleSign.length !== 0) {
            writer.uint32(34).bytes(message.slashFractionDoubleSign);
        }
        if (message.slashFractionDowntime.length !== 0) {
            writer.uint32(42).bytes(message.slashFractionDowntime);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            signedBlocksWindow: isSet(object.signedBlocksWindow) ? BigInt(object.signedBlocksWindow.toString()) : BigInt(0),
            minSignedPerWindow: isSet(object.minSignedPerWindow) ? bytesFromBase64(object.minSignedPerWindow) : new Uint8Array(),
            downtimeJailDuration: isSet(object.downtimeJailDuration) ? Duration.fromJSON(object.downtimeJailDuration) : undefined,
            slashFractionDoubleSign: isSet(object.slashFractionDoubleSign) ? bytesFromBase64(object.slashFractionDoubleSign) : new Uint8Array(),
            slashFractionDowntime: isSet(object.slashFractionDowntime) ? bytesFromBase64(object.slashFractionDowntime) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.signedBlocksWindow = object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null ? BigInt(object.signedBlocksWindow.toString()) : BigInt(0);
        message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
        message.downtimeJailDuration = object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null ? Duration.fromPartial(object.downtimeJailDuration) : undefined;
        message.slashFractionDoubleSign = object.slashFractionDoubleSign ?? new Uint8Array();
        message.slashFractionDowntime = object.slashFractionDowntime ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.signed_blocks_window !== undefined && object.signed_blocks_window !== null) {
            message.signedBlocksWindow = BigInt(object.signed_blocks_window);
        }
        if (object.min_signed_per_window !== undefined && object.min_signed_per_window !== null) {
            message.minSignedPerWindow = bytesFromBase64(object.min_signed_per_window);
        }
        if (object.downtime_jail_duration !== undefined && object.downtime_jail_duration !== null) {
            message.downtimeJailDuration = Duration.fromAmino(object.downtime_jail_duration);
        }
        if (object.slash_fraction_double_sign !== undefined && object.slash_fraction_double_sign !== null) {
            message.slashFractionDoubleSign = bytesFromBase64(object.slash_fraction_double_sign);
        }
        if (object.slash_fraction_downtime !== undefined && object.slash_fraction_downtime !== null) {
            message.slashFractionDowntime = bytesFromBase64(object.slash_fraction_downtime);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signed_blocks_window = message.signedBlocksWindow ? message.signedBlocksWindow.toString() : undefined;
        obj.min_signed_per_window = message.minSignedPerWindow ? base64FromBytes(message.minSignedPerWindow) : undefined;
        obj.downtime_jail_duration = message.downtimeJailDuration ? Duration.toAmino(message.downtimeJailDuration) : undefined;
        obj.slash_fraction_double_sign = message.slashFractionDoubleSign ? base64FromBytes(message.slashFractionDoubleSign) : undefined;
        obj.slash_fraction_downtime = message.slashFractionDowntime ? base64FromBytes(message.slashFractionDowntime) : undefined;
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
            typeUrl: "/cosmos.slashing.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=slashing.js.map