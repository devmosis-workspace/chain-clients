import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state. */
export interface Minter {
  /** current epoch provisions */
  epochProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  epoch_provisions: string;
}
/** next id: 5 */
export interface DistributionProportions {
  /**
   * staking defines the proportion of the minted minted_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: growth.
   */
  communityPoolGrowth: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: security budget.
   */
  communityPoolSecurityBudget: string;
  /**
   * strategic_reserve defines the proportion of the minted mint_denom that is
   * to be allocated to the pool: strategic reserve.
   */
  strategicReserve: string;
}
/** next id: 5 */
export interface DistributionProportionsSDKType {
  staking: string;
  community_pool_growth: string;
  community_pool_security_budget: string;
  strategic_reserve: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** epoch provisions from the first epoch */
  genesisEpochProvisions: string;
  /** mint epoch identifier */
  epochIdentifier: string;
  /** number of epochs take to reduce rewards */
  reductionPeriodInEpochs: Long;
  /** reduction multiplier to execute on each period */
  reductionFactor: string;
  /** distribution_proportions defines the proportion of the minted denom */
  distributionProportions?: DistributionProportions;
  /** start epoch to distribute minting rewards */
  mintingRewardsDistributionStartEpoch: Long;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  genesis_epoch_provisions: string;
  epoch_identifier: string;
  reduction_period_in_epochs: Long;
  reduction_factor: string;
  distribution_proportions?: DistributionProportionsSDKType;
  minting_rewards_distribution_start_epoch: Long;
}
function createBaseMinter(): Minter {
  return {
    epochProvisions: ""
  };
}
export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochProvisions !== "") {
      writer.uint32(10).string(message.epochProvisions);
    }
    return writer;
  },
  fromJSON(object: any): Minter {
    return {
      epochProvisions: isSet(object.epochProvisions) ? String(object.epochProvisions) : ""
    };
  },
  fromPartial(object: Partial<Minter>): Minter {
    const message = createBaseMinter();
    message.epochProvisions = object.epochProvisions ?? "";
    return message;
  }
};
function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: "",
    communityPoolGrowth: "",
    communityPoolSecurityBudget: "",
    strategicReserve: ""
  };
}
export const DistributionProportions = {
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }
    if (message.communityPoolGrowth !== "") {
      writer.uint32(18).string(message.communityPoolGrowth);
    }
    if (message.communityPoolSecurityBudget !== "") {
      writer.uint32(26).string(message.communityPoolSecurityBudget);
    }
    if (message.strategicReserve !== "") {
      writer.uint32(34).string(message.strategicReserve);
    }
    return writer;
  },
  fromJSON(object: any): DistributionProportions {
    return {
      staking: isSet(object.staking) ? String(object.staking) : "",
      communityPoolGrowth: isSet(object.communityPoolGrowth) ? String(object.communityPoolGrowth) : "",
      communityPoolSecurityBudget: isSet(object.communityPoolSecurityBudget) ? String(object.communityPoolSecurityBudget) : "",
      strategicReserve: isSet(object.strategicReserve) ? String(object.strategicReserve) : ""
    };
  },
  fromPartial(object: Partial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.communityPoolGrowth = object.communityPoolGrowth ?? "";
    message.communityPoolSecurityBudget = object.communityPoolSecurityBudget ?? "";
    message.strategicReserve = object.strategicReserve ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    genesisEpochProvisions: "",
    epochIdentifier: "",
    reductionPeriodInEpochs: Long.ZERO,
    reductionFactor: "",
    distributionProportions: undefined,
    mintingRewardsDistributionStartEpoch: Long.ZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.genesisEpochProvisions !== "") {
      writer.uint32(18).string(message.genesisEpochProvisions);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (!message.reductionPeriodInEpochs.isZero()) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(42).string(message.reductionFactor);
    }
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
    }
    if (!message.mintingRewardsDistributionStartEpoch.isZero()) {
      writer.uint32(56).int64(message.mintingRewardsDistributionStartEpoch);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      genesisEpochProvisions: isSet(object.genesisEpochProvisions) ? String(object.genesisEpochProvisions) : "",
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "",
      reductionPeriodInEpochs: isSet(object.reductionPeriodInEpochs) ? Long.fromValue(object.reductionPeriodInEpochs) : Long.ZERO,
      reductionFactor: isSet(object.reductionFactor) ? String(object.reductionFactor) : "",
      distributionProportions: isSet(object.distributionProportions) ? DistributionProportions.fromJSON(object.distributionProportions) : undefined,
      mintingRewardsDistributionStartEpoch: isSet(object.mintingRewardsDistributionStartEpoch) ? Long.fromValue(object.mintingRewardsDistributionStartEpoch) : Long.ZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.reductionPeriodInEpochs = object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null ? Long.fromValue(object.reductionPeriodInEpochs) : Long.ZERO;
    message.reductionFactor = object.reductionFactor ?? "";
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null ? Long.fromValue(object.mintingRewardsDistributionStartEpoch) : Long.ZERO;
    return message;
  }
};