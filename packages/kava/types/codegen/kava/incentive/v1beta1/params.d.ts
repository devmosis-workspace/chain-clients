import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** RewardPeriod stores the state of an ongoing reward */
export interface RewardPeriod {
    active: boolean;
    collateralType: string;
    start: Timestamp;
    end: Timestamp;
    rewardsPerSecond: Coin;
}
export interface RewardPeriodProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.RewardPeriod";
    value: Uint8Array;
}
/** RewardPeriod stores the state of an ongoing reward */
export interface RewardPeriodAmino {
    active?: boolean;
    collateral_type?: string;
    start?: string;
    end?: string;
    rewards_per_second?: CoinAmino;
}
export interface RewardPeriodAminoMsg {
    type: "/kava.incentive.v1beta1.RewardPeriod";
    value: RewardPeriodAmino;
}
/** RewardPeriod stores the state of an ongoing reward */
export interface RewardPeriodSDKType {
    active: boolean;
    collateral_type: string;
    start: TimestampSDKType;
    end: TimestampSDKType;
    rewards_per_second: CoinSDKType;
}
/** MultiRewardPeriod supports multiple reward types */
export interface MultiRewardPeriod {
    active: boolean;
    collateralType: string;
    start: Timestamp;
    end: Timestamp;
    rewardsPerSecond: Coin[];
}
export interface MultiRewardPeriodProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MultiRewardPeriod";
    value: Uint8Array;
}
/** MultiRewardPeriod supports multiple reward types */
export interface MultiRewardPeriodAmino {
    active?: boolean;
    collateral_type?: string;
    start?: string;
    end?: string;
    rewards_per_second?: CoinAmino[];
}
export interface MultiRewardPeriodAminoMsg {
    type: "/kava.incentive.v1beta1.MultiRewardPeriod";
    value: MultiRewardPeriodAmino;
}
/** MultiRewardPeriod supports multiple reward types */
export interface MultiRewardPeriodSDKType {
    active: boolean;
    collateral_type: string;
    start: TimestampSDKType;
    end: TimestampSDKType;
    rewards_per_second: CoinSDKType[];
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */
export interface Multiplier {
    name: string;
    monthsLockup: bigint;
    factor: Uint8Array;
}
export interface MultiplierProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.Multiplier";
    value: Uint8Array;
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */
export interface MultiplierAmino {
    name?: string;
    months_lockup?: string;
    factor?: string;
}
export interface MultiplierAminoMsg {
    type: "/kava.incentive.v1beta1.Multiplier";
    value: MultiplierAmino;
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */
export interface MultiplierSDKType {
    name: string;
    months_lockup: bigint;
    factor: Uint8Array;
}
/** MultipliersPerDenom is a map of denoms to a set of multipliers */
export interface MultipliersPerDenom {
    denom: string;
    multipliers: Multiplier[];
}
export interface MultipliersPerDenomProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MultipliersPerDenom";
    value: Uint8Array;
}
/** MultipliersPerDenom is a map of denoms to a set of multipliers */
export interface MultipliersPerDenomAmino {
    denom?: string;
    multipliers?: MultiplierAmino[];
}
export interface MultipliersPerDenomAminoMsg {
    type: "/kava.incentive.v1beta1.MultipliersPerDenom";
    value: MultipliersPerDenomAmino;
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
    claimEnd: Timestamp;
    savingsRewardPeriods: MultiRewardPeriod[];
    earnRewardPeriods: MultiRewardPeriod[];
}
export interface ParamsProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.Params";
    value: Uint8Array;
}
/** Params */
export interface ParamsAmino {
    usdx_minting_reward_periods?: RewardPeriodAmino[];
    hard_supply_reward_periods?: MultiRewardPeriodAmino[];
    hard_borrow_reward_periods?: MultiRewardPeriodAmino[];
    delegator_reward_periods?: MultiRewardPeriodAmino[];
    swap_reward_periods?: MultiRewardPeriodAmino[];
    claim_multipliers?: MultipliersPerDenomAmino[];
    claim_end?: string;
    savings_reward_periods?: MultiRewardPeriodAmino[];
    earn_reward_periods?: MultiRewardPeriodAmino[];
}
export interface ParamsAminoMsg {
    type: "/kava.incentive.v1beta1.Params";
    value: ParamsAmino;
}
/** Params */
export interface ParamsSDKType {
    usdx_minting_reward_periods: RewardPeriodSDKType[];
    hard_supply_reward_periods: MultiRewardPeriodSDKType[];
    hard_borrow_reward_periods: MultiRewardPeriodSDKType[];
    delegator_reward_periods: MultiRewardPeriodSDKType[];
    swap_reward_periods: MultiRewardPeriodSDKType[];
    claim_multipliers: MultipliersPerDenomSDKType[];
    claim_end: TimestampSDKType;
    savings_reward_periods: MultiRewardPeriodSDKType[];
    earn_reward_periods: MultiRewardPeriodSDKType[];
}
export declare const RewardPeriod: {
    typeUrl: string;
    encode(message: RewardPeriod, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardPeriod;
    fromPartial(object: Partial<RewardPeriod>): RewardPeriod;
    fromAmino(object: RewardPeriodAmino): RewardPeriod;
    toAmino(message: RewardPeriod): RewardPeriodAmino;
    fromAminoMsg(object: RewardPeriodAminoMsg): RewardPeriod;
    fromProtoMsg(message: RewardPeriodProtoMsg): RewardPeriod;
    toProto(message: RewardPeriod): Uint8Array;
    toProtoMsg(message: RewardPeriod): RewardPeriodProtoMsg;
};
export declare const MultiRewardPeriod: {
    typeUrl: string;
    encode(message: MultiRewardPeriod, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MultiRewardPeriod;
    fromPartial(object: Partial<MultiRewardPeriod>): MultiRewardPeriod;
    fromAmino(object: MultiRewardPeriodAmino): MultiRewardPeriod;
    toAmino(message: MultiRewardPeriod): MultiRewardPeriodAmino;
    fromAminoMsg(object: MultiRewardPeriodAminoMsg): MultiRewardPeriod;
    fromProtoMsg(message: MultiRewardPeriodProtoMsg): MultiRewardPeriod;
    toProto(message: MultiRewardPeriod): Uint8Array;
    toProtoMsg(message: MultiRewardPeriod): MultiRewardPeriodProtoMsg;
};
export declare const Multiplier: {
    typeUrl: string;
    encode(message: Multiplier, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Multiplier;
    fromPartial(object: Partial<Multiplier>): Multiplier;
    fromAmino(object: MultiplierAmino): Multiplier;
    toAmino(message: Multiplier): MultiplierAmino;
    fromAminoMsg(object: MultiplierAminoMsg): Multiplier;
    fromProtoMsg(message: MultiplierProtoMsg): Multiplier;
    toProto(message: Multiplier): Uint8Array;
    toProtoMsg(message: Multiplier): MultiplierProtoMsg;
};
export declare const MultipliersPerDenom: {
    typeUrl: string;
    encode(message: MultipliersPerDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MultipliersPerDenom;
    fromPartial(object: Partial<MultipliersPerDenom>): MultipliersPerDenom;
    fromAmino(object: MultipliersPerDenomAmino): MultipliersPerDenom;
    toAmino(message: MultipliersPerDenom): MultipliersPerDenomAmino;
    fromAminoMsg(object: MultipliersPerDenomAminoMsg): MultipliersPerDenom;
    fromProtoMsg(message: MultipliersPerDenomProtoMsg): MultipliersPerDenom;
    toProto(message: MultipliersPerDenom): Uint8Array;
    toProtoMsg(message: MultipliersPerDenom): MultipliersPerDenomProtoMsg;
};
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
