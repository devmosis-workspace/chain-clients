import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
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
export declare const StakingRewardsState: {
    typeUrl: string;
    encode(message: StakingRewardsState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StakingRewardsState;
    fromPartial(object: Partial<StakingRewardsState>): StakingRewardsState;
    fromAmino(object: StakingRewardsStateAmino): StakingRewardsState;
    toAmino(message: StakingRewardsState): StakingRewardsStateAmino;
    fromAminoMsg(object: StakingRewardsStateAminoMsg): StakingRewardsState;
    fromProtoMsg(message: StakingRewardsStateProtoMsg): StakingRewardsState;
    toProto(message: StakingRewardsState): Uint8Array;
    toProtoMsg(message: StakingRewardsState): StakingRewardsStateProtoMsg;
};
