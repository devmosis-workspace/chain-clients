import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** Params - used for initializing default parameter for clp at genesis */
export interface Params {
  minCreatePoolThreshold: bigint;
  enableRemovalQueue: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/sifnode.clp.v1.Params";
  value: Uint8Array;
}
/** Params - used for initializing default parameter for clp at genesis */
export interface ParamsAmino {
  min_create_pool_threshold?: string;
  enable_removal_queue?: boolean;
}
export interface ParamsAminoMsg {
  type: "/sifnode.clp.v1.Params";
  value: ParamsAmino;
}
/** Params - used for initializing default parameter for clp at genesis */
export interface ParamsSDKType {
  min_create_pool_threshold: bigint;
  enable_removal_queue: boolean;
}
export interface RewardParams {
  /** in blocks */
  liquidityRemovalLockPeriod: bigint;
  /** in blocks */
  liquidityRemovalCancelPeriod: bigint;
  rewardPeriods: RewardPeriod[];
  /** start time of the current (or last) reward period */
  rewardPeriodStartTime: string;
  /** in blocks */
  rewardsLockPeriod: bigint;
  /** week, day, hour, etc */
  rewardsEpochIdentifier: string;
  /** true if reward bucket should be distributed */
  rewardsDistribute: boolean;
}
export interface RewardParamsProtoMsg {
  typeUrl: "/sifnode.clp.v1.RewardParams";
  value: Uint8Array;
}
export interface RewardParamsAmino {
  /** in blocks */
  liquidity_removal_lock_period?: string;
  /** in blocks */
  liquidity_removal_cancel_period?: string;
  reward_periods?: RewardPeriodAmino[];
  /** start time of the current (or last) reward period */
  reward_period_start_time?: string;
  /** in blocks */
  rewards_lock_period?: string;
  /** week, day, hour, etc */
  rewards_epoch_identifier?: string;
  /** true if reward bucket should be distributed */
  rewards_distribute?: boolean;
}
export interface RewardParamsAminoMsg {
  type: "/sifnode.clp.v1.RewardParams";
  value: RewardParamsAmino;
}
export interface RewardParamsSDKType {
  liquidity_removal_lock_period: bigint;
  liquidity_removal_cancel_period: bigint;
  reward_periods: RewardPeriodSDKType[];
  reward_period_start_time: string;
  rewards_lock_period: bigint;
  rewards_epoch_identifier: string;
  rewards_distribute: boolean;
}
/** These params are non-governable and are calculated on chain */
export interface PmtpRateParams {
  pmtpPeriodBlockRate: string;
  pmtpCurrentRunningRate: string;
  pmtpInterPolicyRate: string;
}
export interface PmtpRateParamsProtoMsg {
  typeUrl: "/sifnode.clp.v1.PmtpRateParams";
  value: Uint8Array;
}
/** These params are non-governable and are calculated on chain */
export interface PmtpRateParamsAmino {
  pmtp_period_block_rate?: string;
  pmtp_current_running_rate?: string;
  pmtp_inter_policy_rate?: string;
}
export interface PmtpRateParamsAminoMsg {
  type: "/sifnode.clp.v1.PmtpRateParams";
  value: PmtpRateParamsAmino;
}
/** These params are non-governable and are calculated on chain */
export interface PmtpRateParamsSDKType {
  pmtp_period_block_rate: string;
  pmtp_current_running_rate: string;
  pmtp_inter_policy_rate: string;
}
export interface PmtpParams {
  pmtpPeriodGovernanceRate: string;
  pmtpPeriodEpochLength: bigint;
  pmtpPeriodStartBlock: bigint;
  pmtpPeriodEndBlock: bigint;
}
export interface PmtpParamsProtoMsg {
  typeUrl: "/sifnode.clp.v1.PmtpParams";
  value: Uint8Array;
}
export interface PmtpParamsAmino {
  pmtp_period_governance_rate?: string;
  pmtp_period_epoch_length?: string;
  pmtp_period_start_block?: string;
  pmtp_period_end_block?: string;
}
export interface PmtpParamsAminoMsg {
  type: "/sifnode.clp.v1.PmtpParams";
  value: PmtpParamsAmino;
}
export interface PmtpParamsSDKType {
  pmtp_period_governance_rate: string;
  pmtp_period_epoch_length: bigint;
  pmtp_period_start_block: bigint;
  pmtp_period_end_block: bigint;
}
export interface RewardPeriod {
  rewardPeriodId: string;
  rewardPeriodStartBlock: bigint;
  rewardPeriodEndBlock: bigint;
  rewardPeriodAllocation: string;
  rewardPeriodPoolMultipliers: PoolMultiplier[];
  rewardPeriodDefaultMultiplier: string;
  rewardPeriodDistribute: boolean;
  rewardPeriodMod: bigint;
}
export interface RewardPeriodProtoMsg {
  typeUrl: "/sifnode.clp.v1.RewardPeriod";
  value: Uint8Array;
}
export interface RewardPeriodAmino {
  reward_period_id?: string;
  reward_period_start_block?: string;
  reward_period_end_block?: string;
  reward_period_allocation?: string;
  reward_period_pool_multipliers?: PoolMultiplierAmino[];
  reward_period_default_multiplier?: string;
  reward_period_distribute?: boolean;
  reward_period_mod?: string;
}
export interface RewardPeriodAminoMsg {
  type: "/sifnode.clp.v1.RewardPeriod";
  value: RewardPeriodAmino;
}
export interface RewardPeriodSDKType {
  reward_period_id: string;
  reward_period_start_block: bigint;
  reward_period_end_block: bigint;
  reward_period_allocation: string;
  reward_period_pool_multipliers: PoolMultiplierSDKType[];
  reward_period_default_multiplier: string;
  reward_period_distribute: boolean;
  reward_period_mod: bigint;
}
export interface PoolMultiplier {
  poolMultiplierAsset: string;
  multiplier: string;
}
export interface PoolMultiplierProtoMsg {
  typeUrl: "/sifnode.clp.v1.PoolMultiplier";
  value: Uint8Array;
}
export interface PoolMultiplierAmino {
  pool_multiplier_asset?: string;
  multiplier?: string;
}
export interface PoolMultiplierAminoMsg {
  type: "/sifnode.clp.v1.PoolMultiplier";
  value: PoolMultiplierAmino;
}
export interface PoolMultiplierSDKType {
  pool_multiplier_asset: string;
  multiplier: string;
}
export interface LiquidityProtectionParams {
  maxRowanLiquidityThreshold: string;
  maxRowanLiquidityThresholdAsset: string;
  epochLength: bigint;
  isActive: boolean;
}
export interface LiquidityProtectionParamsProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProtectionParams";
  value: Uint8Array;
}
export interface LiquidityProtectionParamsAmino {
  max_rowan_liquidity_threshold?: string;
  max_rowan_liquidity_threshold_asset?: string;
  epoch_length?: string;
  is_active?: boolean;
}
export interface LiquidityProtectionParamsAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProtectionParams";
  value: LiquidityProtectionParamsAmino;
}
export interface LiquidityProtectionParamsSDKType {
  max_rowan_liquidity_threshold: string;
  max_rowan_liquidity_threshold_asset: string;
  epoch_length: bigint;
  is_active: boolean;
}
export interface LiquidityProtectionRateParams {
  currentRowanLiquidityThreshold: string;
}
export interface LiquidityProtectionRateParamsProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProtectionRateParams";
  value: Uint8Array;
}
export interface LiquidityProtectionRateParamsAmino {
  current_rowan_liquidity_threshold?: string;
}
export interface LiquidityProtectionRateParamsAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProtectionRateParams";
  value: LiquidityProtectionRateParamsAmino;
}
export interface LiquidityProtectionRateParamsSDKType {
  current_rowan_liquidity_threshold: string;
}
export interface ProviderDistributionPeriod {
  distributionPeriodBlockRate: string;
  distributionPeriodStartBlock: bigint;
  distributionPeriodEndBlock: bigint;
  distributionPeriodMod: bigint;
}
export interface ProviderDistributionPeriodProtoMsg {
  typeUrl: "/sifnode.clp.v1.ProviderDistributionPeriod";
  value: Uint8Array;
}
export interface ProviderDistributionPeriodAmino {
  distribution_period_block_rate?: string;
  distribution_period_start_block?: string;
  distribution_period_end_block?: string;
  distribution_period_mod?: string;
}
export interface ProviderDistributionPeriodAminoMsg {
  type: "/sifnode.clp.v1.ProviderDistributionPeriod";
  value: ProviderDistributionPeriodAmino;
}
export interface ProviderDistributionPeriodSDKType {
  distribution_period_block_rate: string;
  distribution_period_start_block: bigint;
  distribution_period_end_block: bigint;
  distribution_period_mod: bigint;
}
export interface ProviderDistributionParams {
  distributionPeriods: ProviderDistributionPeriod[];
}
export interface ProviderDistributionParamsProtoMsg {
  typeUrl: "/sifnode.clp.v1.ProviderDistributionParams";
  value: Uint8Array;
}
export interface ProviderDistributionParamsAmino {
  distribution_periods?: ProviderDistributionPeriodAmino[];
}
export interface ProviderDistributionParamsAminoMsg {
  type: "/sifnode.clp.v1.ProviderDistributionParams";
  value: ProviderDistributionParamsAmino;
}
export interface ProviderDistributionParamsSDKType {
  distribution_periods: ProviderDistributionPeriodSDKType[];
}
export interface SwapFeeParams {
  defaultSwapFeeRate: string;
  tokenParams: SwapFeeTokenParams[];
}
export interface SwapFeeParamsProtoMsg {
  typeUrl: "/sifnode.clp.v1.SwapFeeParams";
  value: Uint8Array;
}
export interface SwapFeeParamsAmino {
  default_swap_fee_rate?: string;
  token_params?: SwapFeeTokenParamsAmino[];
}
export interface SwapFeeParamsAminoMsg {
  type: "/sifnode.clp.v1.SwapFeeParams";
  value: SwapFeeParamsAmino;
}
export interface SwapFeeParamsSDKType {
  default_swap_fee_rate: string;
  token_params: SwapFeeTokenParamsSDKType[];
}
export interface SwapFeeTokenParams {
  asset: string;
  swapFeeRate: string;
}
export interface SwapFeeTokenParamsProtoMsg {
  typeUrl: "/sifnode.clp.v1.SwapFeeTokenParams";
  value: Uint8Array;
}
export interface SwapFeeTokenParamsAmino {
  asset?: string;
  swap_fee_rate?: string;
}
export interface SwapFeeTokenParamsAminoMsg {
  type: "/sifnode.clp.v1.SwapFeeTokenParams";
  value: SwapFeeTokenParamsAmino;
}
export interface SwapFeeTokenParamsSDKType {
  asset: string;
  swap_fee_rate: string;
}
function createBaseParams(): Params {
  return {
    minCreatePoolThreshold: BigInt(0),
    enableRemovalQueue: false
  };
}
export const Params = {
  typeUrl: "/sifnode.clp.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minCreatePoolThreshold !== BigInt(0)) {
      writer.uint32(8).uint64(message.minCreatePoolThreshold);
    }
    if (message.enableRemovalQueue === true) {
      writer.uint32(16).bool(message.enableRemovalQueue);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minCreatePoolThreshold: isSet(object.minCreatePoolThreshold) ? BigInt(object.minCreatePoolThreshold.toString()) : BigInt(0),
      enableRemovalQueue: isSet(object.enableRemovalQueue) ? Boolean(object.enableRemovalQueue) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minCreatePoolThreshold = object.minCreatePoolThreshold !== undefined && object.minCreatePoolThreshold !== null ? BigInt(object.minCreatePoolThreshold.toString()) : BigInt(0);
    message.enableRemovalQueue = object.enableRemovalQueue ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_create_pool_threshold !== undefined && object.min_create_pool_threshold !== null) {
      message.minCreatePoolThreshold = BigInt(object.min_create_pool_threshold);
    }
    if (object.enable_removal_queue !== undefined && object.enable_removal_queue !== null) {
      message.enableRemovalQueue = object.enable_removal_queue;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_create_pool_threshold = message.minCreatePoolThreshold !== BigInt(0) ? message.minCreatePoolThreshold.toString() : undefined;
    obj.enable_removal_queue = message.enableRemovalQueue === false ? undefined : message.enableRemovalQueue;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseRewardParams(): RewardParams {
  return {
    liquidityRemovalLockPeriod: BigInt(0),
    liquidityRemovalCancelPeriod: BigInt(0),
    rewardPeriods: [],
    rewardPeriodStartTime: "",
    rewardsLockPeriod: BigInt(0),
    rewardsEpochIdentifier: "",
    rewardsDistribute: false
  };
}
export const RewardParams = {
  typeUrl: "/sifnode.clp.v1.RewardParams",
  encode(message: RewardParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityRemovalLockPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.liquidityRemovalLockPeriod);
    }
    if (message.liquidityRemovalCancelPeriod !== BigInt(0)) {
      writer.uint32(16).uint64(message.liquidityRemovalCancelPeriod);
    }
    for (const v of message.rewardPeriods) {
      RewardPeriod.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.rewardPeriodStartTime !== "") {
      writer.uint32(42).string(message.rewardPeriodStartTime);
    }
    if (message.rewardsLockPeriod !== BigInt(0)) {
      writer.uint32(48).uint64(message.rewardsLockPeriod);
    }
    if (message.rewardsEpochIdentifier !== "") {
      writer.uint32(58).string(message.rewardsEpochIdentifier);
    }
    if (message.rewardsDistribute === true) {
      writer.uint32(64).bool(message.rewardsDistribute);
    }
    return writer;
  },
  fromJSON(object: any): RewardParams {
    return {
      liquidityRemovalLockPeriod: isSet(object.liquidityRemovalLockPeriod) ? BigInt(object.liquidityRemovalLockPeriod.toString()) : BigInt(0),
      liquidityRemovalCancelPeriod: isSet(object.liquidityRemovalCancelPeriod) ? BigInt(object.liquidityRemovalCancelPeriod.toString()) : BigInt(0),
      rewardPeriods: Array.isArray(object?.rewardPeriods) ? object.rewardPeriods.map((e: any) => RewardPeriod.fromJSON(e)) : [],
      rewardPeriodStartTime: isSet(object.rewardPeriodStartTime) ? String(object.rewardPeriodStartTime) : "",
      rewardsLockPeriod: isSet(object.rewardsLockPeriod) ? BigInt(object.rewardsLockPeriod.toString()) : BigInt(0),
      rewardsEpochIdentifier: isSet(object.rewardsEpochIdentifier) ? String(object.rewardsEpochIdentifier) : "",
      rewardsDistribute: isSet(object.rewardsDistribute) ? Boolean(object.rewardsDistribute) : false
    };
  },
  fromPartial(object: Partial<RewardParams>): RewardParams {
    const message = createBaseRewardParams();
    message.liquidityRemovalLockPeriod = object.liquidityRemovalLockPeriod !== undefined && object.liquidityRemovalLockPeriod !== null ? BigInt(object.liquidityRemovalLockPeriod.toString()) : BigInt(0);
    message.liquidityRemovalCancelPeriod = object.liquidityRemovalCancelPeriod !== undefined && object.liquidityRemovalCancelPeriod !== null ? BigInt(object.liquidityRemovalCancelPeriod.toString()) : BigInt(0);
    message.rewardPeriods = object.rewardPeriods?.map(e => RewardPeriod.fromPartial(e)) || [];
    message.rewardPeriodStartTime = object.rewardPeriodStartTime ?? "";
    message.rewardsLockPeriod = object.rewardsLockPeriod !== undefined && object.rewardsLockPeriod !== null ? BigInt(object.rewardsLockPeriod.toString()) : BigInt(0);
    message.rewardsEpochIdentifier = object.rewardsEpochIdentifier ?? "";
    message.rewardsDistribute = object.rewardsDistribute ?? false;
    return message;
  },
  fromAmino(object: RewardParamsAmino): RewardParams {
    const message = createBaseRewardParams();
    if (object.liquidity_removal_lock_period !== undefined && object.liquidity_removal_lock_period !== null) {
      message.liquidityRemovalLockPeriod = BigInt(object.liquidity_removal_lock_period);
    }
    if (object.liquidity_removal_cancel_period !== undefined && object.liquidity_removal_cancel_period !== null) {
      message.liquidityRemovalCancelPeriod = BigInt(object.liquidity_removal_cancel_period);
    }
    message.rewardPeriods = object.reward_periods?.map(e => RewardPeriod.fromAmino(e)) || [];
    if (object.reward_period_start_time !== undefined && object.reward_period_start_time !== null) {
      message.rewardPeriodStartTime = object.reward_period_start_time;
    }
    if (object.rewards_lock_period !== undefined && object.rewards_lock_period !== null) {
      message.rewardsLockPeriod = BigInt(object.rewards_lock_period);
    }
    if (object.rewards_epoch_identifier !== undefined && object.rewards_epoch_identifier !== null) {
      message.rewardsEpochIdentifier = object.rewards_epoch_identifier;
    }
    if (object.rewards_distribute !== undefined && object.rewards_distribute !== null) {
      message.rewardsDistribute = object.rewards_distribute;
    }
    return message;
  },
  toAmino(message: RewardParams): RewardParamsAmino {
    const obj: any = {};
    obj.liquidity_removal_lock_period = message.liquidityRemovalLockPeriod !== BigInt(0) ? message.liquidityRemovalLockPeriod.toString() : undefined;
    obj.liquidity_removal_cancel_period = message.liquidityRemovalCancelPeriod !== BigInt(0) ? message.liquidityRemovalCancelPeriod.toString() : undefined;
    if (message.rewardPeriods) {
      obj.reward_periods = message.rewardPeriods.map(e => e ? RewardPeriod.toAmino(e) : undefined);
    } else {
      obj.reward_periods = message.rewardPeriods;
    }
    obj.reward_period_start_time = message.rewardPeriodStartTime === "" ? undefined : message.rewardPeriodStartTime;
    obj.rewards_lock_period = message.rewardsLockPeriod !== BigInt(0) ? message.rewardsLockPeriod.toString() : undefined;
    obj.rewards_epoch_identifier = message.rewardsEpochIdentifier === "" ? undefined : message.rewardsEpochIdentifier;
    obj.rewards_distribute = message.rewardsDistribute === false ? undefined : message.rewardsDistribute;
    return obj;
  },
  fromAminoMsg(object: RewardParamsAminoMsg): RewardParams {
    return RewardParams.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardParamsProtoMsg): RewardParams {
    return RewardParams.decode(message.value);
  },
  toProto(message: RewardParams): Uint8Array {
    return RewardParams.encode(message).finish();
  },
  toProtoMsg(message: RewardParams): RewardParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.RewardParams",
      value: RewardParams.encode(message).finish()
    };
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
  typeUrl: "/sifnode.clp.v1.PmtpRateParams",
  encode(message: PmtpRateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pmtpPeriodBlockRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.pmtpPeriodBlockRate, 18).atomics);
    }
    if (message.pmtpCurrentRunningRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.pmtpCurrentRunningRate, 18).atomics);
    }
    if (message.pmtpInterPolicyRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.pmtpInterPolicyRate, 18).atomics);
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
  },
  fromAmino(object: PmtpRateParamsAmino): PmtpRateParams {
    const message = createBasePmtpRateParams();
    if (object.pmtp_period_block_rate !== undefined && object.pmtp_period_block_rate !== null) {
      message.pmtpPeriodBlockRate = object.pmtp_period_block_rate;
    }
    if (object.pmtp_current_running_rate !== undefined && object.pmtp_current_running_rate !== null) {
      message.pmtpCurrentRunningRate = object.pmtp_current_running_rate;
    }
    if (object.pmtp_inter_policy_rate !== undefined && object.pmtp_inter_policy_rate !== null) {
      message.pmtpInterPolicyRate = object.pmtp_inter_policy_rate;
    }
    return message;
  },
  toAmino(message: PmtpRateParams): PmtpRateParamsAmino {
    const obj: any = {};
    obj.pmtp_period_block_rate = message.pmtpPeriodBlockRate === "" ? undefined : message.pmtpPeriodBlockRate;
    obj.pmtp_current_running_rate = message.pmtpCurrentRunningRate === "" ? undefined : message.pmtpCurrentRunningRate;
    obj.pmtp_inter_policy_rate = message.pmtpInterPolicyRate === "" ? undefined : message.pmtpInterPolicyRate;
    return obj;
  },
  fromAminoMsg(object: PmtpRateParamsAminoMsg): PmtpRateParams {
    return PmtpRateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: PmtpRateParamsProtoMsg): PmtpRateParams {
    return PmtpRateParams.decode(message.value);
  },
  toProto(message: PmtpRateParams): Uint8Array {
    return PmtpRateParams.encode(message).finish();
  },
  toProtoMsg(message: PmtpRateParams): PmtpRateParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PmtpRateParams",
      value: PmtpRateParams.encode(message).finish()
    };
  }
};
function createBasePmtpParams(): PmtpParams {
  return {
    pmtpPeriodGovernanceRate: "",
    pmtpPeriodEpochLength: BigInt(0),
    pmtpPeriodStartBlock: BigInt(0),
    pmtpPeriodEndBlock: BigInt(0)
  };
}
export const PmtpParams = {
  typeUrl: "/sifnode.clp.v1.PmtpParams",
  encode(message: PmtpParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pmtpPeriodGovernanceRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.pmtpPeriodGovernanceRate, 18).atomics);
    }
    if (message.pmtpPeriodEpochLength !== BigInt(0)) {
      writer.uint32(16).int64(message.pmtpPeriodEpochLength);
    }
    if (message.pmtpPeriodStartBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.pmtpPeriodStartBlock);
    }
    if (message.pmtpPeriodEndBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.pmtpPeriodEndBlock);
    }
    return writer;
  },
  fromJSON(object: any): PmtpParams {
    return {
      pmtpPeriodGovernanceRate: isSet(object.pmtpPeriodGovernanceRate) ? String(object.pmtpPeriodGovernanceRate) : "",
      pmtpPeriodEpochLength: isSet(object.pmtpPeriodEpochLength) ? BigInt(object.pmtpPeriodEpochLength.toString()) : BigInt(0),
      pmtpPeriodStartBlock: isSet(object.pmtpPeriodStartBlock) ? BigInt(object.pmtpPeriodStartBlock.toString()) : BigInt(0),
      pmtpPeriodEndBlock: isSet(object.pmtpPeriodEndBlock) ? BigInt(object.pmtpPeriodEndBlock.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PmtpParams>): PmtpParams {
    const message = createBasePmtpParams();
    message.pmtpPeriodGovernanceRate = object.pmtpPeriodGovernanceRate ?? "";
    message.pmtpPeriodEpochLength = object.pmtpPeriodEpochLength !== undefined && object.pmtpPeriodEpochLength !== null ? BigInt(object.pmtpPeriodEpochLength.toString()) : BigInt(0);
    message.pmtpPeriodStartBlock = object.pmtpPeriodStartBlock !== undefined && object.pmtpPeriodStartBlock !== null ? BigInt(object.pmtpPeriodStartBlock.toString()) : BigInt(0);
    message.pmtpPeriodEndBlock = object.pmtpPeriodEndBlock !== undefined && object.pmtpPeriodEndBlock !== null ? BigInt(object.pmtpPeriodEndBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PmtpParamsAmino): PmtpParams {
    const message = createBasePmtpParams();
    if (object.pmtp_period_governance_rate !== undefined && object.pmtp_period_governance_rate !== null) {
      message.pmtpPeriodGovernanceRate = object.pmtp_period_governance_rate;
    }
    if (object.pmtp_period_epoch_length !== undefined && object.pmtp_period_epoch_length !== null) {
      message.pmtpPeriodEpochLength = BigInt(object.pmtp_period_epoch_length);
    }
    if (object.pmtp_period_start_block !== undefined && object.pmtp_period_start_block !== null) {
      message.pmtpPeriodStartBlock = BigInt(object.pmtp_period_start_block);
    }
    if (object.pmtp_period_end_block !== undefined && object.pmtp_period_end_block !== null) {
      message.pmtpPeriodEndBlock = BigInt(object.pmtp_period_end_block);
    }
    return message;
  },
  toAmino(message: PmtpParams): PmtpParamsAmino {
    const obj: any = {};
    obj.pmtp_period_governance_rate = message.pmtpPeriodGovernanceRate === "" ? undefined : message.pmtpPeriodGovernanceRate;
    obj.pmtp_period_epoch_length = message.pmtpPeriodEpochLength !== BigInt(0) ? message.pmtpPeriodEpochLength.toString() : undefined;
    obj.pmtp_period_start_block = message.pmtpPeriodStartBlock !== BigInt(0) ? message.pmtpPeriodStartBlock.toString() : undefined;
    obj.pmtp_period_end_block = message.pmtpPeriodEndBlock !== BigInt(0) ? message.pmtpPeriodEndBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PmtpParamsAminoMsg): PmtpParams {
    return PmtpParams.fromAmino(object.value);
  },
  fromProtoMsg(message: PmtpParamsProtoMsg): PmtpParams {
    return PmtpParams.decode(message.value);
  },
  toProto(message: PmtpParams): Uint8Array {
    return PmtpParams.encode(message).finish();
  },
  toProtoMsg(message: PmtpParams): PmtpParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PmtpParams",
      value: PmtpParams.encode(message).finish()
    };
  }
};
function createBaseRewardPeriod(): RewardPeriod {
  return {
    rewardPeriodId: "",
    rewardPeriodStartBlock: BigInt(0),
    rewardPeriodEndBlock: BigInt(0),
    rewardPeriodAllocation: "",
    rewardPeriodPoolMultipliers: [],
    rewardPeriodDefaultMultiplier: "",
    rewardPeriodDistribute: false,
    rewardPeriodMod: BigInt(0)
  };
}
export const RewardPeriod = {
  typeUrl: "/sifnode.clp.v1.RewardPeriod",
  encode(message: RewardPeriod, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardPeriodId !== "") {
      writer.uint32(10).string(message.rewardPeriodId);
    }
    if (message.rewardPeriodStartBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.rewardPeriodStartBlock);
    }
    if (message.rewardPeriodEndBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.rewardPeriodEndBlock);
    }
    if (message.rewardPeriodAllocation !== "") {
      writer.uint32(34).string(message.rewardPeriodAllocation);
    }
    for (const v of message.rewardPeriodPoolMultipliers) {
      PoolMultiplier.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.rewardPeriodDefaultMultiplier !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.rewardPeriodDefaultMultiplier, 18).atomics);
    }
    if (message.rewardPeriodDistribute === true) {
      writer.uint32(56).bool(message.rewardPeriodDistribute);
    }
    if (message.rewardPeriodMod !== BigInt(0)) {
      writer.uint32(64).uint64(message.rewardPeriodMod);
    }
    return writer;
  },
  fromJSON(object: any): RewardPeriod {
    return {
      rewardPeriodId: isSet(object.rewardPeriodId) ? String(object.rewardPeriodId) : "",
      rewardPeriodStartBlock: isSet(object.rewardPeriodStartBlock) ? BigInt(object.rewardPeriodStartBlock.toString()) : BigInt(0),
      rewardPeriodEndBlock: isSet(object.rewardPeriodEndBlock) ? BigInt(object.rewardPeriodEndBlock.toString()) : BigInt(0),
      rewardPeriodAllocation: isSet(object.rewardPeriodAllocation) ? String(object.rewardPeriodAllocation) : "",
      rewardPeriodPoolMultipliers: Array.isArray(object?.rewardPeriodPoolMultipliers) ? object.rewardPeriodPoolMultipliers.map((e: any) => PoolMultiplier.fromJSON(e)) : [],
      rewardPeriodDefaultMultiplier: isSet(object.rewardPeriodDefaultMultiplier) ? String(object.rewardPeriodDefaultMultiplier) : "",
      rewardPeriodDistribute: isSet(object.rewardPeriodDistribute) ? Boolean(object.rewardPeriodDistribute) : false,
      rewardPeriodMod: isSet(object.rewardPeriodMod) ? BigInt(object.rewardPeriodMod.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RewardPeriod>): RewardPeriod {
    const message = createBaseRewardPeriod();
    message.rewardPeriodId = object.rewardPeriodId ?? "";
    message.rewardPeriodStartBlock = object.rewardPeriodStartBlock !== undefined && object.rewardPeriodStartBlock !== null ? BigInt(object.rewardPeriodStartBlock.toString()) : BigInt(0);
    message.rewardPeriodEndBlock = object.rewardPeriodEndBlock !== undefined && object.rewardPeriodEndBlock !== null ? BigInt(object.rewardPeriodEndBlock.toString()) : BigInt(0);
    message.rewardPeriodAllocation = object.rewardPeriodAllocation ?? "";
    message.rewardPeriodPoolMultipliers = object.rewardPeriodPoolMultipliers?.map(e => PoolMultiplier.fromPartial(e)) || [];
    message.rewardPeriodDefaultMultiplier = object.rewardPeriodDefaultMultiplier ?? "";
    message.rewardPeriodDistribute = object.rewardPeriodDistribute ?? false;
    message.rewardPeriodMod = object.rewardPeriodMod !== undefined && object.rewardPeriodMod !== null ? BigInt(object.rewardPeriodMod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RewardPeriodAmino): RewardPeriod {
    const message = createBaseRewardPeriod();
    if (object.reward_period_id !== undefined && object.reward_period_id !== null) {
      message.rewardPeriodId = object.reward_period_id;
    }
    if (object.reward_period_start_block !== undefined && object.reward_period_start_block !== null) {
      message.rewardPeriodStartBlock = BigInt(object.reward_period_start_block);
    }
    if (object.reward_period_end_block !== undefined && object.reward_period_end_block !== null) {
      message.rewardPeriodEndBlock = BigInt(object.reward_period_end_block);
    }
    if (object.reward_period_allocation !== undefined && object.reward_period_allocation !== null) {
      message.rewardPeriodAllocation = object.reward_period_allocation;
    }
    message.rewardPeriodPoolMultipliers = object.reward_period_pool_multipliers?.map(e => PoolMultiplier.fromAmino(e)) || [];
    if (object.reward_period_default_multiplier !== undefined && object.reward_period_default_multiplier !== null) {
      message.rewardPeriodDefaultMultiplier = object.reward_period_default_multiplier;
    }
    if (object.reward_period_distribute !== undefined && object.reward_period_distribute !== null) {
      message.rewardPeriodDistribute = object.reward_period_distribute;
    }
    if (object.reward_period_mod !== undefined && object.reward_period_mod !== null) {
      message.rewardPeriodMod = BigInt(object.reward_period_mod);
    }
    return message;
  },
  toAmino(message: RewardPeriod): RewardPeriodAmino {
    const obj: any = {};
    obj.reward_period_id = message.rewardPeriodId === "" ? undefined : message.rewardPeriodId;
    obj.reward_period_start_block = message.rewardPeriodStartBlock !== BigInt(0) ? message.rewardPeriodStartBlock.toString() : undefined;
    obj.reward_period_end_block = message.rewardPeriodEndBlock !== BigInt(0) ? message.rewardPeriodEndBlock.toString() : undefined;
    obj.reward_period_allocation = message.rewardPeriodAllocation === "" ? undefined : message.rewardPeriodAllocation;
    if (message.rewardPeriodPoolMultipliers) {
      obj.reward_period_pool_multipliers = message.rewardPeriodPoolMultipliers.map(e => e ? PoolMultiplier.toAmino(e) : undefined);
    } else {
      obj.reward_period_pool_multipliers = message.rewardPeriodPoolMultipliers;
    }
    obj.reward_period_default_multiplier = message.rewardPeriodDefaultMultiplier === "" ? undefined : message.rewardPeriodDefaultMultiplier;
    obj.reward_period_distribute = message.rewardPeriodDistribute === false ? undefined : message.rewardPeriodDistribute;
    obj.reward_period_mod = message.rewardPeriodMod !== BigInt(0) ? message.rewardPeriodMod.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardPeriodAminoMsg): RewardPeriod {
    return RewardPeriod.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardPeriodProtoMsg): RewardPeriod {
    return RewardPeriod.decode(message.value);
  },
  toProto(message: RewardPeriod): Uint8Array {
    return RewardPeriod.encode(message).finish();
  },
  toProtoMsg(message: RewardPeriod): RewardPeriodProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.RewardPeriod",
      value: RewardPeriod.encode(message).finish()
    };
  }
};
function createBasePoolMultiplier(): PoolMultiplier {
  return {
    poolMultiplierAsset: "",
    multiplier: ""
  };
}
export const PoolMultiplier = {
  typeUrl: "/sifnode.clp.v1.PoolMultiplier",
  encode(message: PoolMultiplier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolMultiplierAsset !== "") {
      writer.uint32(10).string(message.poolMultiplierAsset);
    }
    if (message.multiplier !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.multiplier, 18).atomics);
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
  },
  fromAmino(object: PoolMultiplierAmino): PoolMultiplier {
    const message = createBasePoolMultiplier();
    if (object.pool_multiplier_asset !== undefined && object.pool_multiplier_asset !== null) {
      message.poolMultiplierAsset = object.pool_multiplier_asset;
    }
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = object.multiplier;
    }
    return message;
  },
  toAmino(message: PoolMultiplier): PoolMultiplierAmino {
    const obj: any = {};
    obj.pool_multiplier_asset = message.poolMultiplierAsset === "" ? undefined : message.poolMultiplierAsset;
    obj.multiplier = message.multiplier === "" ? undefined : message.multiplier;
    return obj;
  },
  fromAminoMsg(object: PoolMultiplierAminoMsg): PoolMultiplier {
    return PoolMultiplier.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolMultiplierProtoMsg): PoolMultiplier {
    return PoolMultiplier.decode(message.value);
  },
  toProto(message: PoolMultiplier): Uint8Array {
    return PoolMultiplier.encode(message).finish();
  },
  toProtoMsg(message: PoolMultiplier): PoolMultiplierProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PoolMultiplier",
      value: PoolMultiplier.encode(message).finish()
    };
  }
};
function createBaseLiquidityProtectionParams(): LiquidityProtectionParams {
  return {
    maxRowanLiquidityThreshold: "",
    maxRowanLiquidityThresholdAsset: "",
    epochLength: BigInt(0),
    isActive: false
  };
}
export const LiquidityProtectionParams = {
  typeUrl: "/sifnode.clp.v1.LiquidityProtectionParams",
  encode(message: LiquidityProtectionParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxRowanLiquidityThreshold !== "") {
      writer.uint32(10).string(message.maxRowanLiquidityThreshold);
    }
    if (message.maxRowanLiquidityThresholdAsset !== "") {
      writer.uint32(18).string(message.maxRowanLiquidityThresholdAsset);
    }
    if (message.epochLength !== BigInt(0)) {
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
      epochLength: isSet(object.epochLength) ? BigInt(object.epochLength.toString()) : BigInt(0),
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false
    };
  },
  fromPartial(object: Partial<LiquidityProtectionParams>): LiquidityProtectionParams {
    const message = createBaseLiquidityProtectionParams();
    message.maxRowanLiquidityThreshold = object.maxRowanLiquidityThreshold ?? "";
    message.maxRowanLiquidityThresholdAsset = object.maxRowanLiquidityThresholdAsset ?? "";
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    message.isActive = object.isActive ?? false;
    return message;
  },
  fromAmino(object: LiquidityProtectionParamsAmino): LiquidityProtectionParams {
    const message = createBaseLiquidityProtectionParams();
    if (object.max_rowan_liquidity_threshold !== undefined && object.max_rowan_liquidity_threshold !== null) {
      message.maxRowanLiquidityThreshold = object.max_rowan_liquidity_threshold;
    }
    if (object.max_rowan_liquidity_threshold_asset !== undefined && object.max_rowan_liquidity_threshold_asset !== null) {
      message.maxRowanLiquidityThresholdAsset = object.max_rowan_liquidity_threshold_asset;
    }
    if (object.epoch_length !== undefined && object.epoch_length !== null) {
      message.epochLength = BigInt(object.epoch_length);
    }
    if (object.is_active !== undefined && object.is_active !== null) {
      message.isActive = object.is_active;
    }
    return message;
  },
  toAmino(message: LiquidityProtectionParams): LiquidityProtectionParamsAmino {
    const obj: any = {};
    obj.max_rowan_liquidity_threshold = message.maxRowanLiquidityThreshold === "" ? undefined : message.maxRowanLiquidityThreshold;
    obj.max_rowan_liquidity_threshold_asset = message.maxRowanLiquidityThresholdAsset === "" ? undefined : message.maxRowanLiquidityThresholdAsset;
    obj.epoch_length = message.epochLength !== BigInt(0) ? message.epochLength.toString() : undefined;
    obj.is_active = message.isActive === false ? undefined : message.isActive;
    return obj;
  },
  fromAminoMsg(object: LiquidityProtectionParamsAminoMsg): LiquidityProtectionParams {
    return LiquidityProtectionParams.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProtectionParamsProtoMsg): LiquidityProtectionParams {
    return LiquidityProtectionParams.decode(message.value);
  },
  toProto(message: LiquidityProtectionParams): Uint8Array {
    return LiquidityProtectionParams.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProtectionParams): LiquidityProtectionParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProtectionParams",
      value: LiquidityProtectionParams.encode(message).finish()
    };
  }
};
function createBaseLiquidityProtectionRateParams(): LiquidityProtectionRateParams {
  return {
    currentRowanLiquidityThreshold: ""
  };
}
export const LiquidityProtectionRateParams = {
  typeUrl: "/sifnode.clp.v1.LiquidityProtectionRateParams",
  encode(message: LiquidityProtectionRateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LiquidityProtectionRateParamsAmino): LiquidityProtectionRateParams {
    const message = createBaseLiquidityProtectionRateParams();
    if (object.current_rowan_liquidity_threshold !== undefined && object.current_rowan_liquidity_threshold !== null) {
      message.currentRowanLiquidityThreshold = object.current_rowan_liquidity_threshold;
    }
    return message;
  },
  toAmino(message: LiquidityProtectionRateParams): LiquidityProtectionRateParamsAmino {
    const obj: any = {};
    obj.current_rowan_liquidity_threshold = message.currentRowanLiquidityThreshold === "" ? undefined : message.currentRowanLiquidityThreshold;
    return obj;
  },
  fromAminoMsg(object: LiquidityProtectionRateParamsAminoMsg): LiquidityProtectionRateParams {
    return LiquidityProtectionRateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProtectionRateParamsProtoMsg): LiquidityProtectionRateParams {
    return LiquidityProtectionRateParams.decode(message.value);
  },
  toProto(message: LiquidityProtectionRateParams): Uint8Array {
    return LiquidityProtectionRateParams.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProtectionRateParams): LiquidityProtectionRateParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProtectionRateParams",
      value: LiquidityProtectionRateParams.encode(message).finish()
    };
  }
};
function createBaseProviderDistributionPeriod(): ProviderDistributionPeriod {
  return {
    distributionPeriodBlockRate: "",
    distributionPeriodStartBlock: BigInt(0),
    distributionPeriodEndBlock: BigInt(0),
    distributionPeriodMod: BigInt(0)
  };
}
export const ProviderDistributionPeriod = {
  typeUrl: "/sifnode.clp.v1.ProviderDistributionPeriod",
  encode(message: ProviderDistributionPeriod, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionPeriodBlockRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.distributionPeriodBlockRate, 18).atomics);
    }
    if (message.distributionPeriodStartBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.distributionPeriodStartBlock);
    }
    if (message.distributionPeriodEndBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.distributionPeriodEndBlock);
    }
    if (message.distributionPeriodMod !== BigInt(0)) {
      writer.uint32(32).uint64(message.distributionPeriodMod);
    }
    return writer;
  },
  fromJSON(object: any): ProviderDistributionPeriod {
    return {
      distributionPeriodBlockRate: isSet(object.distributionPeriodBlockRate) ? String(object.distributionPeriodBlockRate) : "",
      distributionPeriodStartBlock: isSet(object.distributionPeriodStartBlock) ? BigInt(object.distributionPeriodStartBlock.toString()) : BigInt(0),
      distributionPeriodEndBlock: isSet(object.distributionPeriodEndBlock) ? BigInt(object.distributionPeriodEndBlock.toString()) : BigInt(0),
      distributionPeriodMod: isSet(object.distributionPeriodMod) ? BigInt(object.distributionPeriodMod.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ProviderDistributionPeriod>): ProviderDistributionPeriod {
    const message = createBaseProviderDistributionPeriod();
    message.distributionPeriodBlockRate = object.distributionPeriodBlockRate ?? "";
    message.distributionPeriodStartBlock = object.distributionPeriodStartBlock !== undefined && object.distributionPeriodStartBlock !== null ? BigInt(object.distributionPeriodStartBlock.toString()) : BigInt(0);
    message.distributionPeriodEndBlock = object.distributionPeriodEndBlock !== undefined && object.distributionPeriodEndBlock !== null ? BigInt(object.distributionPeriodEndBlock.toString()) : BigInt(0);
    message.distributionPeriodMod = object.distributionPeriodMod !== undefined && object.distributionPeriodMod !== null ? BigInt(object.distributionPeriodMod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProviderDistributionPeriodAmino): ProviderDistributionPeriod {
    const message = createBaseProviderDistributionPeriod();
    if (object.distribution_period_block_rate !== undefined && object.distribution_period_block_rate !== null) {
      message.distributionPeriodBlockRate = object.distribution_period_block_rate;
    }
    if (object.distribution_period_start_block !== undefined && object.distribution_period_start_block !== null) {
      message.distributionPeriodStartBlock = BigInt(object.distribution_period_start_block);
    }
    if (object.distribution_period_end_block !== undefined && object.distribution_period_end_block !== null) {
      message.distributionPeriodEndBlock = BigInt(object.distribution_period_end_block);
    }
    if (object.distribution_period_mod !== undefined && object.distribution_period_mod !== null) {
      message.distributionPeriodMod = BigInt(object.distribution_period_mod);
    }
    return message;
  },
  toAmino(message: ProviderDistributionPeriod): ProviderDistributionPeriodAmino {
    const obj: any = {};
    obj.distribution_period_block_rate = message.distributionPeriodBlockRate === "" ? undefined : message.distributionPeriodBlockRate;
    obj.distribution_period_start_block = message.distributionPeriodStartBlock !== BigInt(0) ? message.distributionPeriodStartBlock.toString() : undefined;
    obj.distribution_period_end_block = message.distributionPeriodEndBlock !== BigInt(0) ? message.distributionPeriodEndBlock.toString() : undefined;
    obj.distribution_period_mod = message.distributionPeriodMod !== BigInt(0) ? message.distributionPeriodMod.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderDistributionPeriodAminoMsg): ProviderDistributionPeriod {
    return ProviderDistributionPeriod.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderDistributionPeriodProtoMsg): ProviderDistributionPeriod {
    return ProviderDistributionPeriod.decode(message.value);
  },
  toProto(message: ProviderDistributionPeriod): Uint8Array {
    return ProviderDistributionPeriod.encode(message).finish();
  },
  toProtoMsg(message: ProviderDistributionPeriod): ProviderDistributionPeriodProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.ProviderDistributionPeriod",
      value: ProviderDistributionPeriod.encode(message).finish()
    };
  }
};
function createBaseProviderDistributionParams(): ProviderDistributionParams {
  return {
    distributionPeriods: []
  };
}
export const ProviderDistributionParams = {
  typeUrl: "/sifnode.clp.v1.ProviderDistributionParams",
  encode(message: ProviderDistributionParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ProviderDistributionParamsAmino): ProviderDistributionParams {
    const message = createBaseProviderDistributionParams();
    message.distributionPeriods = object.distribution_periods?.map(e => ProviderDistributionPeriod.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ProviderDistributionParams): ProviderDistributionParamsAmino {
    const obj: any = {};
    if (message.distributionPeriods) {
      obj.distribution_periods = message.distributionPeriods.map(e => e ? ProviderDistributionPeriod.toAmino(e) : undefined);
    } else {
      obj.distribution_periods = message.distributionPeriods;
    }
    return obj;
  },
  fromAminoMsg(object: ProviderDistributionParamsAminoMsg): ProviderDistributionParams {
    return ProviderDistributionParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderDistributionParamsProtoMsg): ProviderDistributionParams {
    return ProviderDistributionParams.decode(message.value);
  },
  toProto(message: ProviderDistributionParams): Uint8Array {
    return ProviderDistributionParams.encode(message).finish();
  },
  toProtoMsg(message: ProviderDistributionParams): ProviderDistributionParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.ProviderDistributionParams",
      value: ProviderDistributionParams.encode(message).finish()
    };
  }
};
function createBaseSwapFeeParams(): SwapFeeParams {
  return {
    defaultSwapFeeRate: "",
    tokenParams: []
  };
}
export const SwapFeeParams = {
  typeUrl: "/sifnode.clp.v1.SwapFeeParams",
  encode(message: SwapFeeParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultSwapFeeRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.defaultSwapFeeRate, 18).atomics);
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
  },
  fromAmino(object: SwapFeeParamsAmino): SwapFeeParams {
    const message = createBaseSwapFeeParams();
    if (object.default_swap_fee_rate !== undefined && object.default_swap_fee_rate !== null) {
      message.defaultSwapFeeRate = object.default_swap_fee_rate;
    }
    message.tokenParams = object.token_params?.map(e => SwapFeeTokenParams.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SwapFeeParams): SwapFeeParamsAmino {
    const obj: any = {};
    obj.default_swap_fee_rate = message.defaultSwapFeeRate === "" ? undefined : message.defaultSwapFeeRate;
    if (message.tokenParams) {
      obj.token_params = message.tokenParams.map(e => e ? SwapFeeTokenParams.toAmino(e) : undefined);
    } else {
      obj.token_params = message.tokenParams;
    }
    return obj;
  },
  fromAminoMsg(object: SwapFeeParamsAminoMsg): SwapFeeParams {
    return SwapFeeParams.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapFeeParamsProtoMsg): SwapFeeParams {
    return SwapFeeParams.decode(message.value);
  },
  toProto(message: SwapFeeParams): Uint8Array {
    return SwapFeeParams.encode(message).finish();
  },
  toProtoMsg(message: SwapFeeParams): SwapFeeParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.SwapFeeParams",
      value: SwapFeeParams.encode(message).finish()
    };
  }
};
function createBaseSwapFeeTokenParams(): SwapFeeTokenParams {
  return {
    asset: "",
    swapFeeRate: ""
  };
}
export const SwapFeeTokenParams = {
  typeUrl: "/sifnode.clp.v1.SwapFeeTokenParams",
  encode(message: SwapFeeTokenParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.swapFeeRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.swapFeeRate, 18).atomics);
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
  },
  fromAmino(object: SwapFeeTokenParamsAmino): SwapFeeTokenParams {
    const message = createBaseSwapFeeTokenParams();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.swap_fee_rate !== undefined && object.swap_fee_rate !== null) {
      message.swapFeeRate = object.swap_fee_rate;
    }
    return message;
  },
  toAmino(message: SwapFeeTokenParams): SwapFeeTokenParamsAmino {
    const obj: any = {};
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.swap_fee_rate = message.swapFeeRate === "" ? undefined : message.swapFeeRate;
    return obj;
  },
  fromAminoMsg(object: SwapFeeTokenParamsAminoMsg): SwapFeeTokenParams {
    return SwapFeeTokenParams.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapFeeTokenParamsProtoMsg): SwapFeeTokenParams {
    return SwapFeeTokenParams.decode(message.value);
  },
  toProto(message: SwapFeeTokenParams): Uint8Array {
    return SwapFeeTokenParams.encode(message).finish();
  },
  toProtoMsg(message: SwapFeeTokenParams): SwapFeeTokenParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.SwapFeeTokenParams",
      value: SwapFeeTokenParams.encode(message).finish()
    };
  }
};