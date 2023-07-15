import * as _m0 from "protobufjs/minimal";
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
    encode(message: InflationDistribution, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InflationDistribution;
    fromPartial(object: Partial<InflationDistribution>): InflationDistribution;
};
export declare const ExponentialCalculation: {
    encode(message: ExponentialCalculation, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExponentialCalculation;
    fromPartial(object: Partial<ExponentialCalculation>): ExponentialCalculation;
};
