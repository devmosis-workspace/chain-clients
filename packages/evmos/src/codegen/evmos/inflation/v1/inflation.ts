import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
function createBaseInflationDistribution(): InflationDistribution {
  return {
    stakingRewards: "",
    usageIncentives: "",
    communityPool: ""
  };
}
export const InflationDistribution = {
  encode(message: InflationDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(message.stakingRewards);
    }
    if (message.usageIncentives !== "") {
      writer.uint32(18).string(message.usageIncentives);
    }
    if (message.communityPool !== "") {
      writer.uint32(26).string(message.communityPool);
    }
    return writer;
  },
  fromJSON(object: any): InflationDistribution {
    return {
      stakingRewards: isSet(object.stakingRewards) ? String(object.stakingRewards) : "",
      usageIncentives: isSet(object.usageIncentives) ? String(object.usageIncentives) : "",
      communityPool: isSet(object.communityPool) ? String(object.communityPool) : ""
    };
  },
  fromPartial(object: Partial<InflationDistribution>): InflationDistribution {
    const message = createBaseInflationDistribution();
    message.stakingRewards = object.stakingRewards ?? "";
    message.usageIncentives = object.usageIncentives ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  }
};
function createBaseExponentialCalculation(): ExponentialCalculation {
  return {
    a: "",
    r: "",
    c: "",
    bondingTarget: "",
    maxVariance: ""
  };
}
export const ExponentialCalculation = {
  encode(message: ExponentialCalculation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.a !== "") {
      writer.uint32(10).string(message.a);
    }
    if (message.r !== "") {
      writer.uint32(18).string(message.r);
    }
    if (message.c !== "") {
      writer.uint32(26).string(message.c);
    }
    if (message.bondingTarget !== "") {
      writer.uint32(34).string(message.bondingTarget);
    }
    if (message.maxVariance !== "") {
      writer.uint32(42).string(message.maxVariance);
    }
    return writer;
  },
  fromJSON(object: any): ExponentialCalculation {
    return {
      a: isSet(object.a) ? String(object.a) : "",
      r: isSet(object.r) ? String(object.r) : "",
      c: isSet(object.c) ? String(object.c) : "",
      bondingTarget: isSet(object.bondingTarget) ? String(object.bondingTarget) : "",
      maxVariance: isSet(object.maxVariance) ? String(object.maxVariance) : ""
    };
  },
  fromPartial(object: Partial<ExponentialCalculation>): ExponentialCalculation {
    const message = createBaseExponentialCalculation();
    message.a = object.a ?? "";
    message.r = object.r ?? "";
    message.c = object.c ?? "";
    message.bondingTarget = object.bondingTarget ?? "";
    message.maxVariance = object.maxVariance ?? "";
    return message;
  }
};