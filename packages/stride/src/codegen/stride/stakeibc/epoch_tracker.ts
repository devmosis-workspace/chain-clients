import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface EpochTracker {
  epochIdentifier: string;
  epochNumber: bigint;
  nextEpochStartTime: bigint;
  duration: bigint;
}
export interface EpochTrackerProtoMsg {
  typeUrl: "/stride.stakeibc.EpochTracker";
  value: Uint8Array;
}
export interface EpochTrackerAmino {
  epoch_identifier: string;
  epoch_number: string;
  next_epoch_start_time: string;
  duration: string;
}
export interface EpochTrackerAminoMsg {
  type: "/stride.stakeibc.EpochTracker";
  value: EpochTrackerAmino;
}
export interface EpochTrackerSDKType {
  epoch_identifier: string;
  epoch_number: bigint;
  next_epoch_start_time: bigint;
  duration: bigint;
}
function createBaseEpochTracker(): EpochTracker {
  return {
    epochIdentifier: "",
    epochNumber: BigInt(0),
    nextEpochStartTime: BigInt(0),
    duration: BigInt(0)
  };
}
export const EpochTracker = {
  typeUrl: "/stride.stakeibc.EpochTracker",
  encode(message: EpochTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochNumber);
    }
    if (message.nextEpochStartTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextEpochStartTime);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },
  fromJSON(object: any): EpochTracker {
    return {
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "",
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0),
      nextEpochStartTime: isSet(object.nextEpochStartTime) ? BigInt(object.nextEpochStartTime.toString()) : BigInt(0),
      duration: isSet(object.duration) ? BigInt(object.duration.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EpochTracker>): EpochTracker {
    const message = createBaseEpochTracker();
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.nextEpochStartTime = object.nextEpochStartTime !== undefined && object.nextEpochStartTime !== null ? BigInt(object.nextEpochStartTime.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EpochTrackerAmino): EpochTracker {
    return {
      epochIdentifier: object.epoch_identifier,
      epochNumber: BigInt(object.epoch_number),
      nextEpochStartTime: BigInt(object.next_epoch_start_time),
      duration: BigInt(object.duration)
    };
  },
  toAmino(message: EpochTracker): EpochTrackerAmino {
    const obj: any = {};
    obj.epoch_identifier = message.epochIdentifier;
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    obj.next_epoch_start_time = message.nextEpochStartTime ? message.nextEpochStartTime.toString() : undefined;
    obj.duration = message.duration ? message.duration.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochTrackerAminoMsg): EpochTracker {
    return EpochTracker.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochTrackerProtoMsg): EpochTracker {
    return EpochTracker.decode(message.value);
  },
  toProto(message: EpochTracker): Uint8Array {
    return EpochTracker.encode(message).finish();
  },
  toProtoMsg(message: EpochTracker): EpochTrackerProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.EpochTracker",
      value: EpochTracker.encode(message).finish()
    };
  }
};