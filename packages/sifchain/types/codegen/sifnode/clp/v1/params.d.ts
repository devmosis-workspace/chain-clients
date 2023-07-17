import { Long } from "../../../helpers";
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
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const RewardParams: {
    encode(message: RewardParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RewardParams;
    fromPartial(object: Partial<RewardParams>): RewardParams;
};
export declare const PmtpRateParams: {
    encode(message: PmtpRateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PmtpRateParams;
    fromPartial(object: Partial<PmtpRateParams>): PmtpRateParams;
};
export declare const PmtpParams: {
    encode(message: PmtpParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PmtpParams;
    fromPartial(object: Partial<PmtpParams>): PmtpParams;
};
export declare const RewardPeriod: {
    encode(message: RewardPeriod, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RewardPeriod;
    fromPartial(object: Partial<RewardPeriod>): RewardPeriod;
};
export declare const PoolMultiplier: {
    encode(message: PoolMultiplier, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolMultiplier;
    fromPartial(object: Partial<PoolMultiplier>): PoolMultiplier;
};
export declare const LiquidityProtectionParams: {
    encode(message: LiquidityProtectionParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProtectionParams;
    fromPartial(object: Partial<LiquidityProtectionParams>): LiquidityProtectionParams;
};
export declare const LiquidityProtectionRateParams: {
    encode(message: LiquidityProtectionRateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProtectionRateParams;
    fromPartial(object: Partial<LiquidityProtectionRateParams>): LiquidityProtectionRateParams;
};
export declare const ProviderDistributionPeriod: {
    encode(message: ProviderDistributionPeriod, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProviderDistributionPeriod;
    fromPartial(object: Partial<ProviderDistributionPeriod>): ProviderDistributionPeriod;
};
export declare const ProviderDistributionParams: {
    encode(message: ProviderDistributionParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProviderDistributionParams;
    fromPartial(object: Partial<ProviderDistributionParams>): ProviderDistributionParams;
};
export declare const SwapFeeParams: {
    encode(message: SwapFeeParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapFeeParams;
    fromPartial(object: Partial<SwapFeeParams>): SwapFeeParams;
};
export declare const SwapFeeTokenParams: {
    encode(message: SwapFeeTokenParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapFeeTokenParams;
    fromPartial(object: Partial<SwapFeeTokenParams>): SwapFeeTokenParams;
};
