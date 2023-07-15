import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EpochTracker {
  epochIdentifier: string;
  epochNumber: Long;
  nextEpochStartTime: Long;
  duration: Long;
}
export interface EpochTrackerSDKType {
  epoch_identifier: string;
  epoch_number: Long;
  next_epoch_start_time: Long;
  duration: Long;
}
function createBaseEpochTracker(): EpochTracker {
  return {
    epochIdentifier: "",
    epochNumber: Long.UZERO,
    nextEpochStartTime: Long.UZERO,
    duration: Long.UZERO
  };
}
export const EpochTracker = {
  encode(message: EpochTracker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(16).uint64(message.epochNumber);
    }
    if (!message.nextEpochStartTime.isZero()) {
      writer.uint32(24).uint64(message.nextEpochStartTime);
    }
    if (!message.duration.isZero()) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },
  fromJSON(object: any): EpochTracker {
    return {
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.UZERO,
      nextEpochStartTime: isSet(object.nextEpochStartTime) ? Long.fromValue(object.nextEpochStartTime) : Long.UZERO,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EpochTracker>): EpochTracker {
    const message = createBaseEpochTracker();
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    message.nextEpochStartTime = object.nextEpochStartTime !== undefined && object.nextEpochStartTime !== null ? Long.fromValue(object.nextEpochStartTime) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.UZERO;
    return message;
  }
};