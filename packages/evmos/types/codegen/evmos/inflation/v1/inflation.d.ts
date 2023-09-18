import { BinaryWriter } from "../../../binary";
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistribution {
    /**
     * staking_rewards defines the proportion of the minted minted_denom that is
     * to be allocated as staking rewards
     */
    stakingRewards: string;
    /**
     * usage_incentives defines the proportion of the minted minted_denom that is
     * to be allocated to the incentives module address
     */
    usageIncentives: string;
    /**
     * community_pool defines the proportion of the minted minted_denom that is to
     * be allocated to the community pool
     */
    communityPool: string;
}
export interface InflationDistributionProtoMsg {
    typeUrl: "/evmos.inflation.v1.InflationDistribution";
    value: Uint8Array;
}
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistributionAmino {
    /**
     * staking_rewards defines the proportion of the minted minted_denom that is
     * to be allocated as staking rewards
     */
    staking_rewards: string;
    /**
     * usage_incentives defines the proportion of the minted minted_denom that is
     * to be allocated to the incentives module address
     */
    usage_incentives: string;
    /**
     * community_pool defines the proportion of the minted minted_denom that is to
     * be allocated to the community pool
     */
    community_pool: string;
}
export interface InflationDistributionAminoMsg {
    type: "/evmos.inflation.v1.InflationDistribution";
    value: InflationDistributionAmino;
}
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistributionSDKType {
    staking_rewards: string;
    usage_incentives: string;
    community_pool: string;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculation {
    /** a defines the initial value */
    a: string;
    /** r defines the reduction factor */
    r: string;
    /** c defines the parameter for long term inflation */
    c: string;
    /** bonding_target */
    bondingTarget: string;
    /** max_variance */
    maxVariance: string;
}
export interface ExponentialCalculationProtoMsg {
    typeUrl: "/evmos.inflation.v1.ExponentialCalculation";
    value: Uint8Array;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculationAmino {
    /** a defines the initial value */
    a: string;
    /** r defines the reduction factor */
    r: string;
    /** c defines the parameter for long term inflation */
    c: string;
    /** bonding_target */
    bonding_target: string;
    /** max_variance */
    max_variance: string;
}
export interface ExponentialCalculationAminoMsg {
    type: "/evmos.inflation.v1.ExponentialCalculation";
    value: ExponentialCalculationAmino;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculationSDKType {
    a: string;
    r: string;
    c: string;
    bonding_target: string;
    max_variance: string;
}
export declare const InflationDistribution: {
    typeUrl: string;
    encode(message: InflationDistribution, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InflationDistribution;
    fromPartial(object: Partial<InflationDistribution>): InflationDistribution;
    fromAmino(object: InflationDistributionAmino): InflationDistribution;
    toAmino(message: InflationDistribution): InflationDistributionAmino;
    fromAminoMsg(object: InflationDistributionAminoMsg): InflationDistribution;
    fromProtoMsg(message: InflationDistributionProtoMsg): InflationDistribution;
    toProto(message: InflationDistribution): Uint8Array;
    toProtoMsg(message: InflationDistribution): InflationDistributionProtoMsg;
};
export declare const ExponentialCalculation: {
    typeUrl: string;
    encode(message: ExponentialCalculation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ExponentialCalculation;
    fromPartial(object: Partial<ExponentialCalculation>): ExponentialCalculation;
    fromAmino(object: ExponentialCalculationAmino): ExponentialCalculation;
    toAmino(message: ExponentialCalculation): ExponentialCalculationAmino;
    fromAminoMsg(object: ExponentialCalculationAminoMsg): ExponentialCalculation;
    fromProtoMsg(message: ExponentialCalculationProtoMsg): ExponentialCalculation;
    toProto(message: ExponentialCalculation): Uint8Array;
    toProtoMsg(message: ExponentialCalculation): ExponentialCalculationProtoMsg;
};
