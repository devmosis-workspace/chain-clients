import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters of the community module. */
export interface Params {
    /**
     * upgrade_time_disable_inflation is the time at which to disable mint and kavadist module inflation.
     * If set to 0, inflation will be disabled from block 1.
     */
    upgradeTimeDisableInflation: Timestamp;
    /** staking_rewards_per_second is the amount paid out to delegators each block from the community account */
    stakingRewardsPerSecond: string;
    /**
     * upgrade_time_set_staking_rewards_per_second is the initial staking_rewards_per_second to set
     * and use when the disable inflation time is reached
     */
    upgradeTimeSetStakingRewardsPerSecond: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/kava.community.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters of the community module. */
export interface ParamsAmino {
    /**
     * upgrade_time_disable_inflation is the time at which to disable mint and kavadist module inflation.
     * If set to 0, inflation will be disabled from block 1.
     */
    upgrade_time_disable_inflation?: string;
    /** staking_rewards_per_second is the amount paid out to delegators each block from the community account */
    staking_rewards_per_second?: string;
    /**
     * upgrade_time_set_staking_rewards_per_second is the initial staking_rewards_per_second to set
     * and use when the disable inflation time is reached
     */
    upgrade_time_set_staking_rewards_per_second?: string;
}
export interface ParamsAminoMsg {
    type: "/kava.community.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters of the community module. */
export interface ParamsSDKType {
    upgrade_time_disable_inflation: TimestampSDKType;
    staking_rewards_per_second: string;
    upgrade_time_set_staking_rewards_per_second: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
