import { Params, ParamsAmino, ParamsSDKType, IncentiveProgram, IncentiveProgramAmino, IncentiveProgramSDKType } from "./incentive";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the x/incentive module's genesis state. */
export interface GenesisState {
    params: Params;
    nextProgramId: number;
    lastRewardsTime: bigint;
    rewardTrackers: RewardTracker[];
    rewardAccumulators: RewardAccumulator[];
    upcomingPrograms: IncentiveProgram[];
    ongoingPrograms: IncentiveProgram[];
    completedPrograms: IncentiveProgram[];
    bonds: Bond[];
    accountUnbondings: AccountUnbondings[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/umee.incentive.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the x/incentive module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    next_program_id: number;
    last_rewards_time: string;
    reward_trackers: RewardTrackerAmino[];
    reward_accumulators: RewardAccumulatorAmino[];
    upcoming_programs: IncentiveProgramAmino[];
    ongoing_programs: IncentiveProgramAmino[];
    completed_programs: IncentiveProgramAmino[];
    bonds: BondAmino[];
    account_unbondings: AccountUnbondingsAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/umee.incentive.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the x/incentive module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    next_program_id: number;
    last_rewards_time: bigint;
    reward_trackers: RewardTrackerSDKType[];
    reward_accumulators: RewardAccumulatorSDKType[];
    upcoming_programs: IncentiveProgramSDKType[];
    ongoing_programs: IncentiveProgramSDKType[];
    completed_programs: IncentiveProgramSDKType[];
    bonds: BondSDKType[];
    account_unbondings: AccountUnbondingsSDKType[];
}
/**
 * Bond tracks the amount of coins of one uToken denomination bonded
 * by a single account.
 */
export interface Bond {
    account: string;
    uToken: Coin;
}
export interface BondProtoMsg {
    typeUrl: "/umee.incentive.v1.Bond";
    value: Uint8Array;
}
/**
 * Bond tracks the amount of coins of one uToken denomination bonded
 * by a single account.
 */
export interface BondAmino {
    account: string;
    uToken?: CoinAmino;
}
export interface BondAminoMsg {
    type: "/umee.incentive.v1.Bond";
    value: BondAmino;
}
/**
 * Bond tracks the amount of coins of one uToken denomination bonded
 * by a single account.
 */
export interface BondSDKType {
    account: string;
    uToken: CoinSDKType;
}
/**
 * RewardTracker tracks the value of a given lock denom's RewardAccumulator at the
 * last time a specific account calculated pending rewards for it. When calculating
 * available rewards, this value is used to determine the difference between the current
 * RewardAccumulator for a uToken and the last value at which the user updated bonds or claimed
 * tokens. Their pending rewards increase by only the rewards accrued in that time period.
 */
export interface RewardTracker {
    account: string;
    uToken: string;
    rewards: DecCoin[];
}
export interface RewardTrackerProtoMsg {
    typeUrl: "/umee.incentive.v1.RewardTracker";
    value: Uint8Array;
}
/**
 * RewardTracker tracks the value of a given lock denom's RewardAccumulator at the
 * last time a specific account calculated pending rewards for it. When calculating
 * available rewards, this value is used to determine the difference between the current
 * RewardAccumulator for a uToken and the last value at which the user updated bonds or claimed
 * tokens. Their pending rewards increase by only the rewards accrued in that time period.
 */
export interface RewardTrackerAmino {
    account: string;
    uToken: string;
    rewards: DecCoinAmino[];
}
export interface RewardTrackerAminoMsg {
    type: "/umee.incentive.v1.RewardTracker";
    value: RewardTrackerAmino;
}
/**
 * RewardTracker tracks the value of a given lock denom's RewardAccumulator at the
 * last time a specific account calculated pending rewards for it. When calculating
 * available rewards, this value is used to determine the difference between the current
 * RewardAccumulator for a uToken and the last value at which the user updated bonds or claimed
 * tokens. Their pending rewards increase by only the rewards accrued in that time period.
 */
export interface RewardTrackerSDKType {
    account: string;
    uToken: string;
    rewards: DecCoinSDKType[];
}
/**
 * RewardAccumulator is a global reward tracking struct that indicates the amount
 * of rewards that a reference amount of a bonded uToken denom would have accumulated
 * if it was bonded since genesis. To prevent rounding issues, the reference amount is
 * 10^exponent of the uToken's smallest possible amount, generally matching the exponent
 * of the associated base token registered with the leverage module.
 */
export interface RewardAccumulator {
    uToken: string;
    rewards: DecCoin[];
    exponent: number;
}
export interface RewardAccumulatorProtoMsg {
    typeUrl: "/umee.incentive.v1.RewardAccumulator";
    value: Uint8Array;
}
/**
 * RewardAccumulator is a global reward tracking struct that indicates the amount
 * of rewards that a reference amount of a bonded uToken denom would have accumulated
 * if it was bonded since genesis. To prevent rounding issues, the reference amount is
 * 10^exponent of the uToken's smallest possible amount, generally matching the exponent
 * of the associated base token registered with the leverage module.
 */
export interface RewardAccumulatorAmino {
    uToken: string;
    rewards: DecCoinAmino[];
    exponent: number;
}
export interface RewardAccumulatorAminoMsg {
    type: "/umee.incentive.v1.RewardAccumulator";
    value: RewardAccumulatorAmino;
}
/**
 * RewardAccumulator is a global reward tracking struct that indicates the amount
 * of rewards that a reference amount of a bonded uToken denom would have accumulated
 * if it was bonded since genesis. To prevent rounding issues, the reference amount is
 * 10^exponent of the uToken's smallest possible amount, generally matching the exponent
 * of the associated base token registered with the leverage module.
 */
export interface RewardAccumulatorSDKType {
    uToken: string;
    rewards: DecCoinSDKType[];
    exponent: number;
}
/**
 * Unbonding is a structure that tracks an in-progress token unbonding.
 * It tracks both its start time and end time, so that if the module's
 * unbonding time changes, the unbonding can complete at the earlier of
 * its original end time or its new one based on the new parameter.
 */
export interface Unbonding {
    start: bigint;
    end: bigint;
    uToken: Coin;
}
export interface UnbondingProtoMsg {
    typeUrl: "/umee.incentive.v1.Unbonding";
    value: Uint8Array;
}
/**
 * Unbonding is a structure that tracks an in-progress token unbonding.
 * It tracks both its start time and end time, so that if the module's
 * unbonding time changes, the unbonding can complete at the earlier of
 * its original end time or its new one based on the new parameter.
 */
export interface UnbondingAmino {
    start: string;
    end: string;
    uToken?: CoinAmino;
}
export interface UnbondingAminoMsg {
    type: "/umee.incentive.v1.Unbonding";
    value: UnbondingAmino;
}
/**
 * Unbonding is a structure that tracks an in-progress token unbonding.
 * It tracks both its start time and end time, so that if the module's
 * unbonding time changes, the unbonding can complete at the earlier of
 * its original end time or its new one based on the new parameter.
 */
export interface UnbondingSDKType {
    start: bigint;
    end: bigint;
    uToken: CoinSDKType;
}
/**
 * AccountUnbondings is a structure that is used to store all of an account's unbondings
 * for a single bonded uToken denom in both KVStore and genesis state.
 */
export interface AccountUnbondings {
    account: string;
    uToken: string;
    unbondings: Unbonding[];
}
export interface AccountUnbondingsProtoMsg {
    typeUrl: "/umee.incentive.v1.AccountUnbondings";
    value: Uint8Array;
}
/**
 * AccountUnbondings is a structure that is used to store all of an account's unbondings
 * for a single bonded uToken denom in both KVStore and genesis state.
 */
export interface AccountUnbondingsAmino {
    account: string;
    uToken: string;
    unbondings: UnbondingAmino[];
}
export interface AccountUnbondingsAminoMsg {
    type: "/umee.incentive.v1.AccountUnbondings";
    value: AccountUnbondingsAmino;
}
/**
 * AccountUnbondings is a structure that is used to store all of an account's unbondings
 * for a single bonded uToken denom in both KVStore and genesis state.
 */
export interface AccountUnbondingsSDKType {
    account: string;
    uToken: string;
    unbondings: UnbondingSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Bond: {
    typeUrl: string;
    encode(message: Bond, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Bond;
    fromPartial(object: Partial<Bond>): Bond;
    fromAmino(object: BondAmino): Bond;
    toAmino(message: Bond): BondAmino;
    fromAminoMsg(object: BondAminoMsg): Bond;
    fromProtoMsg(message: BondProtoMsg): Bond;
    toProto(message: Bond): Uint8Array;
    toProtoMsg(message: Bond): BondProtoMsg;
};
export declare const RewardTracker: {
    typeUrl: string;
    encode(message: RewardTracker, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardTracker;
    fromPartial(object: Partial<RewardTracker>): RewardTracker;
    fromAmino(object: RewardTrackerAmino): RewardTracker;
    toAmino(message: RewardTracker): RewardTrackerAmino;
    fromAminoMsg(object: RewardTrackerAminoMsg): RewardTracker;
    fromProtoMsg(message: RewardTrackerProtoMsg): RewardTracker;
    toProto(message: RewardTracker): Uint8Array;
    toProtoMsg(message: RewardTracker): RewardTrackerProtoMsg;
};
export declare const RewardAccumulator: {
    typeUrl: string;
    encode(message: RewardAccumulator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardAccumulator;
    fromPartial(object: Partial<RewardAccumulator>): RewardAccumulator;
    fromAmino(object: RewardAccumulatorAmino): RewardAccumulator;
    toAmino(message: RewardAccumulator): RewardAccumulatorAmino;
    fromAminoMsg(object: RewardAccumulatorAminoMsg): RewardAccumulator;
    fromProtoMsg(message: RewardAccumulatorProtoMsg): RewardAccumulator;
    toProto(message: RewardAccumulator): Uint8Array;
    toProtoMsg(message: RewardAccumulator): RewardAccumulatorProtoMsg;
};
export declare const Unbonding: {
    typeUrl: string;
    encode(message: Unbonding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Unbonding;
    fromPartial(object: Partial<Unbonding>): Unbonding;
    fromAmino(object: UnbondingAmino): Unbonding;
    toAmino(message: Unbonding): UnbondingAmino;
    fromAminoMsg(object: UnbondingAminoMsg): Unbonding;
    fromProtoMsg(message: UnbondingProtoMsg): Unbonding;
    toProto(message: Unbonding): Uint8Array;
    toProtoMsg(message: Unbonding): UnbondingProtoMsg;
};
export declare const AccountUnbondings: {
    typeUrl: string;
    encode(message: AccountUnbondings, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccountUnbondings;
    fromPartial(object: Partial<AccountUnbondings>): AccountUnbondings;
    fromAmino(object: AccountUnbondingsAmino): AccountUnbondings;
    toAmino(message: AccountUnbondings): AccountUnbondingsAmino;
    fromAminoMsg(object: AccountUnbondingsAminoMsg): AccountUnbondings;
    fromProtoMsg(message: AccountUnbondingsProtoMsg): AccountUnbondings;
    toProto(message: AccountUnbondings): Uint8Array;
    toProtoMsg(message: AccountUnbondings): AccountUnbondingsProtoMsg;
};
