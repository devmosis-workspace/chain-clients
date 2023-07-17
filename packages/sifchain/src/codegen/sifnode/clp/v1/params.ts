import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params - used for initializing default parameter for clp at genesis */
export interface Params {
  minCreatePoolThreshold: Long;
  enableRemovalQueue: boolean;
}
/** Params - used for initializing default parameter for clp at genesis */
export interface ParamsSDKType {
  min_create_pool_threshold: Long;
  enable_removal_queue: boolean;
}
export interface RewardParams {
  /** in blocks */
  liquidityRemovalLockPeriod: Long;
  /** in blocks */
  liquidityRemovalCancelPeriod: Long;
  rewardPeriods: RewardPeriod[];
  /** start time of the current (or last) reward period */
  rewardPeriodStartTime: string;
}
export interface RewardParamsSDKType {
  liquidity_removal_lock_period: Long;
  liquidity_removal_cancel_period: Long;
  reward_periods: RewardPeriodSDKType[];
  reward_period_start_time: string;
}
/** These params are non-governable and are calculated on chain */
export interface PmtpRateParams {
  pmtpPeriodBlockRate: string;
  pmtpCurrentRunningRate: string;
  pmtpInterPolicyRate: string;
}
/** These params are non-governable and are calculated on chain */
export interface PmtpRateParamsSDKType {
  pmtp_period_block_rate: string;
  pmtp_current_running_rate: string;
  pmtp_inter_policy_rate: string;
}
export interface PmtpParams {
  pmtpPeriodGovernanceRate: string;
  pmtpPeriodEpochLength: Long;
  pmtpPeriodStartBlock: Long;
  pmtpPeriodEndBlock: Long;
}
export interface PmtpParamsSDKType {
  pmtp_period_governance_rate: string;
  pmtp_period_epoch_length: Long;
  pmtp_period_start_block: Long;
  pmtp_period_end_block: Long;
}
export interface RewardPeriod {
  rewardPeriodId: string;
  rewardPeriodStartBlock: Long;
  rewardPeriodEndBlock: Long;
  rewardPeriodAllocation: string;
  rewardPeriodPoolMultipliers: PoolMultiplier[];
  rewardPeriodDefaultMultiplier: string;
  rewardPeriodDistribute: boolean;
  rewardPeriodMod: Long;
}
export interface RewardPeriodSDKType {
  reward_period_id: string;
  reward_period_start_block: Long;
  reward_period_end_block: Long;
  reward_period_allocation: string;
  reward_period_pool_multipliers: PoolMultiplierSDKType[];
  reward_period_default_multiplier: string;
  reward_period_distribute: boolean;
  reward_period_mod: Long;
}
export interface PoolMultiplier {
  poolMultiplierAsset: string;
  multiplier: string;
}
export interface PoolMultiplierSDKType {
  pool_multiplier_asset: string;
  multiplier: string;
}
export interface LiquidityProtectionParams {
  maxRowanLiquidityThreshold: string;
  maxRowanLiquidityThresholdAsset: string;
  epochLength: Long;
  isActive: boolean;
}
export interface LiquidityProtectionParamsSDKType {
  max_rowan_liquidity_threshold: string;
  max_rowan_liquidity_threshold_asset: string;
  epoch_length: Long;
  is_active: boolean;
}
export interface LiquidityProtectionRateParams {
  currentRowanLiquidityThreshold: string;
}
export interface LiquidityProtectionRateParamsSDKType {
  current_rowan_liquidity_threshold: string;
}
export interface ProviderDistributionPeriod {
  distributionPeriodBlockRate: string;
  distributionPeriodStartBlock: Long;
  distributionPeriodEndBlock: Long;
  distributionPeriodMod: Long;
}
export interface ProviderDistributionPeriodSDKType {
  distribution_period_block_rate: string;
  distribution_period_start_block: Long;
  distribution_period_end_block: Long;
  distribution_period_mod: Long;
}
export interface ProviderDistributionParams {
  distributionPeriods: ProviderDistributionPeriod[];
}
export interface ProviderDistributionParamsSDKType {
  distribution_periods: ProviderDistributionPeriodSDKType[];
}
export interface SwapFeeParams {
  defaultSwapFeeRate: string;
  tokenParams: SwapFeeTokenParams[];
}
export interface SwapFeeParamsSDKType {
  default_swap_fee_rate: string;
  token_params: SwapFeeTokenParamsSDKType[];
}
export interface SwapFeeTokenParams {
  asset: string;
  swapFeeRate: string;
}
export interface SwapFeeTokenParamsSDKType {
  asset: string;
  swap_fee_rate: string;
}
function createBaseParams(): Params {
  return {
    minCreatePoolThreshold: Long.UZERO,
    enableRemovalQueue: false
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.minCreatePoolThreshold.isZero()) {
      writer.uint32(8).uint64(message.minCreatePoolThreshold);
    }
    if (message.enableRemovalQueue === true) {
      writer.uint32(16).bool(message.enableRemovalQueue);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minCreatePoolThreshold: isSet(object.minCreatePoolThreshold) ? Long.fromValue(object.minCreatePoolThreshold) : Long.UZERO,
      enableRemovalQueue: isSet(object.enableRemovalQueue) ? Boolean(object.enableRemovalQueue) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minCreatePoolThreshold = object.minCreatePoolThreshold !== undefined && object.minCreatePoolThreshold !== null ? Long.fromValue(object.minCreatePoolThreshold) : Long.UZERO;
    message.enableRemovalQueue = object.enableRemovalQueue ?? false;
    return message;
  }
};
function createBaseRewardParams(): RewardParams {
  return {
    liquidityRemovalLockPeriod: Long.UZERO,
    liquidityRemovalCancelPeriod: Long.UZERO,
    rewardPeriods: [],
    rewardPeriodStartTime: ""
  };
}
export const RewardParams = {
  encode(message: RewardParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.liquidityRemovalLockPeriod.isZero()) {
      writer.uint32(8).uint64(message.liquidityRemovalLockPeriod);
    }
    if (!message.liquidityRemovalCancelPeriod.isZero()) {
      writer.uint32(16).uint64(message.liquidityRemovalCancelPeriod);
    }
    for (const v of message.rewardPeriods) {
      RewardPeriod.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.rewardPeriodStartTime !== "") {
      writer.uint32(42).string(message.rewardPeriodStartTime);
    }
    return writer;
  },
  fromJSON(object: any): RewardParams {
    return {
      liquidityRemovalLockPeriod: isSet(object.liquidityRemovalLockPeriod) ? Long.fromValue(object.liquidityRemovalLockPeriod) : Long.UZERO,
      liquidityRemovalCancelPeriod: isSet(object.liquidityRemovalCancelPeriod) ? Long.fromValue(object.liquidityRemovalCancelPeriod) : Long.UZERO,
      rewardPeriods: Array.isArray(object?.rewardPeriods) ? object.rewardPeriods.map((e: any) => RewardPeriod.fromJSON(e)) : [],
      rewardPeriodStartTime: isSet(object.rewardPeriodStartTime) ? String(object.rewardPeriodStartTime) : ""
    };
  },
  fromPartial(object: Partial<RewardParams>): RewardParams {
    const message = createBaseRewardParams();
    message.liquidityRemovalLockPeriod = object.liquidityRemovalLockPeriod !== undefined && object.liquidityRemovalLockPeriod !== null ? Long.fromValue(object.liquidityRemovalLockPeriod) : Long.UZERO;
    message.liquidityRemovalCancelPeriod = object.liquidityRemovalCancelPeriod !== undefined && object.liquidityRemovalCancelPeriod !== null ? Long.fromValue(object.liquidityRemovalCancelPeriod) : Long.UZERO;
    message.rewardPeriods = object.rewardPeriods?.map(e => RewardPeriod.fromPartial(e)) || [];
    message.rewardPeriodStartTime = object.rewardPeriodStartTime ?? "";
    return message;
  }
};
function createBasePmtpRateParams(): PmtpRateParams {
  return {
    pmtpPeriodBlockRate: "",
    pmtpCurrentRunningRate: "",
    pmtpInterPolicyRate: ""
  };
}
export const PmtpRateParams = {
  encode(message: PmtpRateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pmtpPeriodBlockRate !== "") {
      writer.uint32(18).string(message.pmtpPeriodBlockRate);
    }
    if (message.pmtpCurrentRunningRate !== "") {
      writer.uint32(26).string(message.pmtpCurrentRunningRate);
    }
    if (message.pmtpInterPolicyRate !== "") {
      writer.uint32(34).string(message.pmtpInterPolicyRate);
    }
    return writer;
  },
  fromJSON(object: any): PmtpRateParams {
    return {
      pmtpPeriodBlockRate: isSet(object.pmtpPeriodBlockRate) ? String(object.pmtpPeriodBlockRate) : "",
      pmtpCurrentRunningRate: isSet(object.pmtpCurrentRunningRate) ? String(object.pmtpCurrentRunningRate) : "",
      pmtpInterPolicyRate: isSet(object.pmtpInterPolicyRate) ? String(object.pmtpInterPolicyRate) : ""
    };
  },
  fromPartial(object: Partial<PmtpRateParams>): PmtpRateParams {
    const message = createBasePmtpRateParams();
    message.pmtpPeriodBlockRate = object.pmtpPeriodBlockRate ?? "";
    message.pmtpCurrentRunningRate = object.pmtpCurrentRunningRate ?? "";
    message.pmtpInterPolicyRate = object.pmtpInterPolicyRate ?? "";
    return message;
  }
};
function createBasePmtpParams(): PmtpParams {
  return {
    pmtpPeriodGovernanceRate: "",
    pmtpPeriodEpochLength: Long.ZERO,
    pmtpPeriodStartBlock: Long.ZERO,
    pmtpPeriodEndBlock: Long.ZERO
  };
}
export const PmtpParams = {
  encode(message: PmtpParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pmtpPeriodGovernanceRate !== "") {
      writer.uint32(10).string(message.pmtpPeriodGovernanceRate);
    }
    if (!message.pmtpPeriodEpochLength.isZero()) {
      writer.uint32(16).int64(message.pmtpPeriodEpochLength);
    }
    if (!message.pmtpPeriodStartBlock.isZero()) {
      writer.uint32(24).int64(message.pmtpPeriodStartBlock);
    }
    if (!message.pmtpPeriodEndBlock.isZero()) {
      writer.uint32(32).int64(message.pmtpPeriodEndBlock);
    }
    return writer;
  },
  fromJSON(object: any): PmtpParams {
    return {
      pmtpPeriodGovernanceRate: isSet(object.pmtpPeriodGovernanceRate) ? String(object.pmtpPeriodGovernanceRate) : "",
      pmtpPeriodEpochLength: isSet(object.pmtpPeriodEpochLength) ? Long.fromValue(object.pmtpPeriodEpochLength) : Long.ZERO,
      pmtpPeriodStartBlock: isSet(object.pmtpPeriodStartBlock) ? Long.fromValue(object.pmtpPeriodStartBlock) : Long.ZERO,
      pmtpPeriodEndBlock: isSet(object.pmtpPeriodEndBlock) ? Long.fromValue(object.pmtpPeriodEndBlock) : Long.ZERO
    };
  },
  fromPartial(object: Partial<PmtpParams>): PmtpParams {
    const message = createBasePmtpParams();
    message.pmtpPeriodGovernanceRate = object.pmtpPeriodGovernanceRate ?? "";
    message.pmtpPeriodEpochLength = object.pmtpPeriodEpochLength !== undefined && object.pmtpPeriodEpochLength !== null ? Long.fromValue(object.pmtpPeriodEpochLength) : Long.ZERO;
    message.pmtpPeriodStartBlock = object.pmtpPeriodStartBlock !== undefined && object.pmtpPeriodStartBlock !== null ? Long.fromValue(object.pmtpPeriodStartBlock) : Long.ZERO;
    message.pmtpPeriodEndBlock = object.pmtpPeriodEndBlock !== undefined && object.pmtpPeriodEndBlock !== null ? Long.fromValue(object.pmtpPeriodEndBlock) : Long.ZERO;
    return message;
  }
};
function createBaseRewardPeriod(): RewardPeriod {
  return {
    rewardPeriodId: "",
    rewardPeriodStartBlock: Long.UZERO,
    rewardPeriodEndBlock: Long.UZERO,
    rewardPeriodAllocation: "",
    rewardPeriodPoolMultipliers: [],
    rewardPeriodDefaultMultiplier: "",
    rewardPeriodDistribute: false,
    rewardPeriodMod: Long.UZERO
  };
}
export const RewardPeriod = {
  encode(message: RewardPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardPeriodId !== "") {
      writer.uint32(10).string(message.rewardPeriodId);
    }
    if (!message.rewardPeriodStartBlock.isZero()) {
      writer.uint32(16).uint64(message.rewardPeriodStartBlock);
    }
    if (!message.rewardPeriodEndBlock.isZero()) {
      writer.uint32(24).uint64(message.rewardPeriodEndBlock);
    }
    if (message.rewardPeriodAllocation !== "") {
      writer.uint32(34).string(message.rewardPeriodAllocation);
    }
    for (const v of message.rewardPeriodPoolMultipliers) {
      PoolMultiplier.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.rewardPeriodDefaultMultiplier !== "") {
      writer.uint32(50).string(message.rewardPeriodDefaultMultiplier);
    }
    if (message.rewardPeriodDistribute === true) {
      writer.uint32(56).bool(message.rewardPeriodDistribute);
    }
    if (!message.rewardPeriodMod.isZero()) {
      writer.uint32(64).uint64(message.rewardPeriodMod);
    }
    return writer;
  },
  fromJSON(object: any): RewardPeriod {
    return {
      rewardPeriodId: isSet(object.rewardPeriodId) ? String(object.rewardPeriodId) : "",
      rewardPeriodStartBlock: isSet(object.rewardPeriodStartBlock) ? Long.fromValue(object.rewardPeriodStartBlock) : Long.UZERO,
      rewardPeriodEndBlock: isSet(object.rewardPeriodEndBlock) ? Long.fromValue(object.rewardPeriodEndBlock) : Long.UZERO,
      rewardPeriodAllocation: isSet(object.rewardPeriodAllocation) ? String(object.rewardPeriodAllocation) : "",
      rewardPeriodPoolMultipliers: Array.isArray(object?.rewardPeriodPoolMultipliers) ? object.rewardPeriodPoolMultipliers.map((e: any) => PoolMultiplier.fromJSON(e)) : [],
      rewardPeriodDefaultMultiplier: isSet(object.rewardPeriodDefaultMultiplier) ? String(object.rewardPeriodDefaultMultiplier) : "",
      rewardPeriodDistribute: isSet(object.rewardPeriodDistribute) ? Boolean(object.rewardPeriodDistribute) : false,
      rewardPeriodMod: isSet(object.rewardPeriodMod) ? Long.fromValue(object.rewardPeriodMod) : Long.UZERO
    };
  },
  fromPartial(object: Partial<RewardPeriod>): RewardPeriod {
    const message = createBaseRewardPeriod();
    message.rewardPeriodId = object.rewardPeriodId ?? "";
    message.rewardPeriodStartBlock = object.rewardPeriodStartBlock !== undefined && object.rewardPeriodStartBlock !== null ? Long.fromValue(object.rewardPeriodStartBlock) : Long.UZERO;
    message.rewardPeriodEndBlock = object.rewardPeriodEndBlock !== undefined && object.rewardPeriodEndBlock !== null ? Long.fromValue(object.rewardPeriodEndBlock) : Long.UZERO;
    message.rewardPeriodAllocation = object.rewardPeriodAllocation ?? "";
    message.rewardPeriodPoolMultipliers = object.rewardPeriodPoolMultipliers?.map(e => PoolMultiplier.fromPartial(e)) || [];
    message.rewardPeriodDefaultMultiplier = object.rewardPeriodDefaultMultiplier ?? "";
    message.rewardPeriodDistribute = object.rewardPeriodDistribute ?? false;
    message.rewardPeriodMod = object.rewardPeriodMod !== undefined && object.rewardPeriodMod !== null ? Long.fromValue(object.rewardPeriodMod) : Long.UZERO;
    return message;
  }
};
function createBasePoolMultiplier(): PoolMultiplier {
  return {
    poolMultiplierAsset: "",
    multiplier: ""
  };
}
export const PoolMultiplier = {
  encode(message: PoolMultiplier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolMultiplierAsset !== "") {
      writer.uint32(10).string(message.poolMultiplierAsset);
    }
    if (message.multiplier !== "") {
      writer.uint32(18).string(message.multiplier);
    }
    return writer;
  },
  fromJSON(object: any): PoolMultiplier {
    return {
      poolMultiplierAsset: isSet(object.poolMultiplierAsset) ? String(object.poolMultiplierAsset) : "",
      multiplier: isSet(object.multiplier) ? String(object.multiplier) : ""
    };
  },
  fromPartial(object: Partial<PoolMultiplier>): PoolMultiplier {
    const message = createBasePoolMultiplier();
    message.poolMultiplierAsset = object.poolMultiplierAsset ?? "";
    message.multiplier = object.multiplier ?? "";
    return message;
  }
};
function createBaseLiquidityProtectionParams(): LiquidityProtectionParams {
  return {
    maxRowanLiquidityThreshold: "",
    maxRowanLiquidityThresholdAsset: "",
    epochLength: Long.UZERO,
    isActive: false
  };
}
export const LiquidityProtectionParams = {
  encode(message: LiquidityProtectionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxRowanLiquidityThreshold !== "") {
      writer.uint32(10).string(message.maxRowanLiquidityThreshold);
    }
    if (message.maxRowanLiquidityThresholdAsset !== "") {
      writer.uint32(18).string(message.maxRowanLiquidityThresholdAsset);
    }
    if (!message.epochLength.isZero()) {
      writer.uint32(24).uint64(message.epochLength);
    }
    if (message.isActive === true) {
      writer.uint32(32).bool(message.isActive);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProtectionParams {
    return {
      maxRowanLiquidityThreshold: isSet(object.maxRowanLiquidityThreshold) ? String(object.maxRowanLiquidityThreshold) : "",
      maxRowanLiquidityThresholdAsset: isSet(object.maxRowanLiquidityThresholdAsset) ? String(object.maxRowanLiquidityThresholdAsset) : "",
      epochLength: isSet(object.epochLength) ? Long.fromValue(object.epochLength) : Long.UZERO,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false
    };
  },
  fromPartial(object: Partial<LiquidityProtectionParams>): LiquidityProtectionParams {
    const message = createBaseLiquidityProtectionParams();
    message.maxRowanLiquidityThreshold = object.maxRowanLiquidityThreshold ?? "";
    message.maxRowanLiquidityThresholdAsset = object.maxRowanLiquidityThresholdAsset ?? "";
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? Long.fromValue(object.epochLength) : Long.UZERO;
    message.isActive = object.isActive ?? false;
    return message;
  }
};
function createBaseLiquidityProtectionRateParams(): LiquidityProtectionRateParams {
  return {
    currentRowanLiquidityThreshold: ""
  };
}
export const LiquidityProtectionRateParams = {
  encode(message: LiquidityProtectionRateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentRowanLiquidityThreshold !== "") {
      writer.uint32(10).string(message.currentRowanLiquidityThreshold);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProtectionRateParams {
    return {
      currentRowanLiquidityThreshold: isSet(object.currentRowanLiquidityThreshold) ? String(object.currentRowanLiquidityThreshold) : ""
    };
  },
  fromPartial(object: Partial<LiquidityProtectionRateParams>): LiquidityProtectionRateParams {
    const message = createBaseLiquidityProtectionRateParams();
    message.currentRowanLiquidityThreshold = object.currentRowanLiquidityThreshold ?? "";
    return message;
  }
};
function createBaseProviderDistributionPeriod(): ProviderDistributionPeriod {
  return {
    distributionPeriodBlockRate: "",
    distributionPeriodStartBlock: Long.UZERO,
    distributionPeriodEndBlock: Long.UZERO,
    distributionPeriodMod: Long.UZERO
  };
}
export const ProviderDistributionPeriod = {
  encode(message: ProviderDistributionPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributionPeriodBlockRate !== "") {
      writer.uint32(10).string(message.distributionPeriodBlockRate);
    }
    if (!message.distributionPeriodStartBlock.isZero()) {
      writer.uint32(16).uint64(message.distributionPeriodStartBlock);
    }
    if (!message.distributionPeriodEndBlock.isZero()) {
      writer.uint32(24).uint64(message.distributionPeriodEndBlock);
    }
    if (!message.distributionPeriodMod.isZero()) {
      writer.uint32(32).uint64(message.distributionPeriodMod);
    }
    return writer;
  },
  fromJSON(object: any): ProviderDistributionPeriod {
    return {
      distributionPeriodBlockRate: isSet(object.distributionPeriodBlockRate) ? String(object.distributionPeriodBlockRate) : "",
      distributionPeriodStartBlock: isSet(object.distributionPeriodStartBlock) ? Long.fromValue(object.distributionPeriodStartBlock) : Long.UZERO,
      distributionPeriodEndBlock: isSet(object.distributionPeriodEndBlock) ? Long.fromValue(object.distributionPeriodEndBlock) : Long.UZERO,
      distributionPeriodMod: isSet(object.distributionPeriodMod) ? Long.fromValue(object.distributionPeriodMod) : Long.UZERO
    };
  },
  fromPartial(object: Partial<ProviderDistributionPeriod>): ProviderDistributionPeriod {
    const message = createBaseProviderDistributionPeriod();
    message.distributionPeriodBlockRate = object.distributionPeriodBlockRate ?? "";
    message.distributionPeriodStartBlock = object.distributionPeriodStartBlock !== undefined && object.distributionPeriodStartBlock !== null ? Long.fromValue(object.distributionPeriodStartBlock) : Long.UZERO;
    message.distributionPeriodEndBlock = object.distributionPeriodEndBlock !== undefined && object.distributionPeriodEndBlock !== null ? Long.fromValue(object.distributionPeriodEndBlock) : Long.UZERO;
    message.distributionPeriodMod = object.distributionPeriodMod !== undefined && object.distributionPeriodMod !== null ? Long.fromValue(object.distributionPeriodMod) : Long.UZERO;
    return message;
  }
};
function createBaseProviderDistributionParams(): ProviderDistributionParams {
  return {
    distributionPeriods: []
  };
}
export const ProviderDistributionParams = {
  encode(message: ProviderDistributionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.distributionPeriods) {
      ProviderDistributionPeriod.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProviderDistributionParams {
    return {
      distributionPeriods: Array.isArray(object?.distributionPeriods) ? object.distributionPeriods.map((e: any) => ProviderDistributionPeriod.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ProviderDistributionParams>): ProviderDistributionParams {
    const message = createBaseProviderDistributionParams();
    message.distributionPeriods = object.distributionPeriods?.map(e => ProviderDistributionPeriod.fromPartial(e)) || [];
    return message;
  }
};
function createBaseSwapFeeParams(): SwapFeeParams {
  return {
    defaultSwapFeeRate: "",
    tokenParams: []
  };
}
export const SwapFeeParams = {
  encode(message: SwapFeeParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultSwapFeeRate !== "") {
      writer.uint32(10).string(message.defaultSwapFeeRate);
    }
    for (const v of message.tokenParams) {
      SwapFeeTokenParams.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SwapFeeParams {
    return {
      defaultSwapFeeRate: isSet(object.defaultSwapFeeRate) ? String(object.defaultSwapFeeRate) : "",
      tokenParams: Array.isArray(object?.tokenParams) ? object.tokenParams.map((e: any) => SwapFeeTokenParams.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SwapFeeParams>): SwapFeeParams {
    const message = createBaseSwapFeeParams();
    message.defaultSwapFeeRate = object.defaultSwapFeeRate ?? "";
    message.tokenParams = object.tokenParams?.map(e => SwapFeeTokenParams.fromPartial(e)) || [];
    return message;
  }
};
function createBaseSwapFeeTokenParams(): SwapFeeTokenParams {
  return {
    asset: "",
    swapFeeRate: ""
  };
}
export const SwapFeeTokenParams = {
  encode(message: SwapFeeTokenParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.swapFeeRate !== "") {
      writer.uint32(18).string(message.swapFeeRate);
    }
    return writer;
  },
  fromJSON(object: any): SwapFeeTokenParams {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      swapFeeRate: isSet(object.swapFeeRate) ? String(object.swapFeeRate) : ""
    };
  },
  fromPartial(object: Partial<SwapFeeTokenParams>): SwapFeeTokenParams {
    const message = createBaseSwapFeeTokenParams();
    message.asset = object.asset ?? "";
    message.swapFeeRate = object.swapFeeRate ?? "";
    return message;
  }
};