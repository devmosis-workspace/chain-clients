import { Params, ParamsSDKType, IncentiveProgram, IncentiveProgramSDKType } from "./incentive";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the x/incentive module's genesis state. */
export interface GenesisState {
    params?: Params;
    nextProgramId: number;
    lastRewardsTime: Long;
    rewardTrackers: RewardTracker[];
    rewardAccumulators: RewardAccumulator[];
    upcomingPrograms: IncentiveProgram[];
    ongoingPrograms: IncentiveProgram[];
    completedPrograms: IncentiveProgram[];
    bonds: Bond[];
    accountUnbondings: AccountUnbondings[];
}
/** GenesisState defines the x/incentive module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    next_program_id: number;
    last_rewards_time: Long;
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
    uToken?: Coin;
}
/**
 * Bond tracks the amount of coins of one uToken denomination bonded
 * by a single account.
 */
export interface BondSDKType {
    account: string;
    uToken?: CoinSDKType;
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
    start: Long;
    end: Long;
    uToken?: Coin;
}
/**
 * Unbonding is a structure that tracks an in-progress token unbonding.
 * It tracks both its start time and end time, so that if the module's
 * unbonding time changes, the unbonding can complete at the earlier of
 * its original end time or its new one based on the new parameter.
 */
export interface UnbondingSDKType {
    start: Long;
    end: Long;
    uToken?: CoinSDKType;
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
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Bond: {
    encode(message: Bond, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Bond;
    fromPartial(object: Partial<Bond>): Bond;
};
export declare const RewardTracker: {
    encode(message: RewardTracker, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RewardTracker;
    fromPartial(object: Partial<RewardTracker>): RewardTracker;
};
export declare const RewardAccumulator: {
    encode(message: RewardAccumulator, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RewardAccumulator;
    fromPartial(object: Partial<RewardAccumulator>): RewardAccumulator;
};
export declare const Unbonding: {
    encode(message: Unbonding, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Unbonding;
    fromPartial(object: Partial<Unbonding>): Unbonding;
};
export declare const AccountUnbondings: {
    encode(message: AccountUnbondings, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountUnbondings;
    fromPartial(object: Partial<AccountUnbondings>): AccountUnbondings;
};
