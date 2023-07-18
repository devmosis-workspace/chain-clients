import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** RewardPeriod stores the state of an ongoing reward */
export interface RewardPeriod {
    active: boolean;
    collateralType: string;
    start?: Timestamp;
    end?: Timestamp;
    rewardsPerSecond?: Coin;
}
/** RewardPeriod stores the state of an ongoing reward */
export interface RewardPeriodSDKType {
    active: boolean;
    collateral_type: string;
    start?: TimestampSDKType;
    end?: TimestampSDKType;
    rewards_per_second?: CoinSDKType;
}
/** MultiRewardPeriod supports multiple reward types */
export interface MultiRewardPeriod {
    active: boolean;
    collateralType: string;
    start?: Timestamp;
    end?: Timestamp;
    rewardsPerSecond: Coin[];
}
/** MultiRewardPeriod supports multiple reward types */
export interface MultiRewardPeriodSDKType {
    active: boolean;
    collateral_type: string;
    start?: TimestampSDKType;
    end?: TimestampSDKType;
    rewards_per_second: CoinSDKType[];
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */
export interface Multiplier {
    name: string;
    monthsLockup: Long;
    factor: Uint8Array;
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */
export interface MultiplierSDKType {
    name: string;
    months_lockup: Long;
    factor: Uint8Array;
}
/** MultipliersPerDenom is a map of denoms to a set of multipliers */
export interface MultipliersPerDenom {
    denom: string;
    multipliers: Multiplier[];
}
/** MultipliersPerDenom is a map of denoms to a set of multipliers */
export interface MultipliersPerDenomSDKType {
    denom: string;
    multipliers: MultiplierSDKType[];
}
/** Params */
export interface Params {
    usdxMintingRewardPeriods: RewardPeriod[];
    hardSupplyRewardPeriods: MultiRewardPeriod[];
    hardBorrowRewardPeriods: MultiRewardPeriod[];
    delegatorRewardPeriods: MultiRewardPeriod[];
    swapRewardPeriods: MultiRewardPeriod[];
    claimMultipliers: MultipliersPerDenom[];
    claimEnd?: Timestamp;
    savingsRewardPeriods: MultiRewardPeriod[];
    earnRewardPeriods: MultiRewardPeriod[];
}
/** Params */
export interface ParamsSDKType {
    usdx_minting_reward_periods: RewardPeriodSDKType[];
    hard_supply_reward_periods: MultiRewardPeriodSDKType[];
    hard_borrow_reward_periods: MultiRewardPeriodSDKType[];
    delegator_reward_periods: MultiRewardPeriodSDKType[];
    swap_reward_periods: MultiRewardPeriodSDKType[];
    claim_multipliers: MultipliersPerDenomSDKType[];
    claim_end?: TimestampSDKType;
    savings_reward_periods: MultiRewardPeriodSDKType[];
    earn_reward_periods: MultiRewardPeriodSDKType[];
}
export declare const RewardPeriod: {
    encode(message: RewardPeriod, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RewardPeriod;
    fromPartial(object: Partial<RewardPeriod>): RewardPeriod;
};
export declare const MultiRewardPeriod: {
    encode(message: MultiRewardPeriod, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MultiRewardPeriod;
    fromPartial(object: Partial<MultiRewardPeriod>): MultiRewardPeriod;
};
export declare const Multiplier: {
    encode(message: Multiplier, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Multiplier;
    fromPartial(object: Partial<Multiplier>): Multiplier;
};
export declare const MultipliersPerDenom: {
    encode(message: MultipliersPerDenom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MultipliersPerDenom;
    fromPartial(object: Partial<MultipliersPerDenom>): MultipliersPerDenom;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
