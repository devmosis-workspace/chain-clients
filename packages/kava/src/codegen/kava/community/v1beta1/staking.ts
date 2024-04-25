import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** StakingRewardsState represents the state of staking reward accumulation between blocks. */
export interface StakingRewardsState {
  /**
   * last_accumulation_time represents the last block time which rewards where calculated and distributed.
   * This may be zero to signal accumulation should start on the next interval.
   */
  lastAccumulationTime: Timestamp;
  /**
   * accumulated_truncation_error represents the sum of previous errors due to truncation on payout
   * This value will always be on the interval [0, 1).
   */
  lastTruncationError: string;
}
export interface StakingRewardsStateProtoMsg {
  typeUrl: "/kava.community.v1beta1.StakingRewardsState";
  value: Uint8Array;
}
/** StakingRewardsState represents the state of staking reward accumulation between blocks. */
export interface StakingRewardsStateAmino {
  /**
   * last_accumulation_time represents the last block time which rewards where calculated and distributed.
   * This may be zero to signal accumulation should start on the next interval.
   */
  last_accumulation_time?: string;
  /**
   * accumulated_truncation_error represents the sum of previous errors due to truncation on payout
   * This value will always be on the interval [0, 1).
   */
  last_truncation_error?: string;
}
export interface StakingRewardsStateAminoMsg {
  type: "/kava.community.v1beta1.StakingRewardsState";
  value: StakingRewardsStateAmino;
}
/** StakingRewardsState represents the state of staking reward accumulation between blocks. */
export interface StakingRewardsStateSDKType {
  last_accumulation_time: TimestampSDKType;
  last_truncation_error: string;
}
function createBaseStakingRewardsState(): StakingRewardsState {
  return {
    lastAccumulationTime: Timestamp.fromPartial({}),
    lastTruncationError: ""
  };
}
export const StakingRewardsState = {
  typeUrl: "/kava.community.v1beta1.StakingRewardsState",
  encode(message: StakingRewardsState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastAccumulationTime !== undefined) {
      Timestamp.encode(message.lastAccumulationTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTruncationError !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.lastTruncationError, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): StakingRewardsState {
    return {
      lastAccumulationTime: isSet(object.lastAccumulationTime) ? fromJsonTimestamp(object.lastAccumulationTime) : undefined,
      lastTruncationError: isSet(object.lastTruncationError) ? String(object.lastTruncationError) : ""
    };
  },
  fromPartial(object: Partial<StakingRewardsState>): StakingRewardsState {
    const message = createBaseStakingRewardsState();
    message.lastAccumulationTime = object.lastAccumulationTime !== undefined && object.lastAccumulationTime !== null ? Timestamp.fromPartial(object.lastAccumulationTime) : undefined;
    message.lastTruncationError = object.lastTruncationError ?? "";
    return message;
  },
  fromAmino(object: StakingRewardsStateAmino): StakingRewardsState {
    const message = createBaseStakingRewardsState();
    if (object.last_accumulation_time !== undefined && object.last_accumulation_time !== null) {
      message.lastAccumulationTime = Timestamp.fromAmino(object.last_accumulation_time);
    }
    if (object.last_truncation_error !== undefined && object.last_truncation_error !== null) {
      message.lastTruncationError = object.last_truncation_error;
    }
    return message;
  },
  toAmino(message: StakingRewardsState): StakingRewardsStateAmino {
    const obj: any = {};
    obj.last_accumulation_time = message.lastAccumulationTime ? Timestamp.toAmino(message.lastAccumulationTime) : undefined;
    obj.last_truncation_error = message.lastTruncationError;
    return obj;
  },
  fromAminoMsg(object: StakingRewardsStateAminoMsg): StakingRewardsState {
    return StakingRewardsState.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardsStateProtoMsg): StakingRewardsState {
    return StakingRewardsState.decode(message.value);
  },
  toProto(message: StakingRewardsState): Uint8Array {
    return StakingRewardsState.encode(message).finish();
  },
  toProtoMsg(message: StakingRewardsState): StakingRewardsStateProtoMsg {
    return {
      typeUrl: "/kava.community.v1beta1.StakingRewardsState",
      value: StakingRewardsState.encode(message).finish()
    };
  }
};