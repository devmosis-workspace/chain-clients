import { BinaryWriter } from "../../../binary";
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
export declare const RewardParams: {
    typeUrl: string;
    encode(message: RewardParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardParams;
    fromPartial(object: Partial<RewardParams>): RewardParams;
    fromAmino(object: RewardParamsAmino): RewardParams;
    toAmino(message: RewardParams): RewardParamsAmino;
    fromAminoMsg(object: RewardParamsAminoMsg): RewardParams;
    fromProtoMsg(message: RewardParamsProtoMsg): RewardParams;
    toProto(message: RewardParams): Uint8Array;
    toProtoMsg(message: RewardParams): RewardParamsProtoMsg;
};
export declare const PmtpRateParams: {
    typeUrl: string;
    encode(message: PmtpRateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PmtpRateParams;
    fromPartial(object: Partial<PmtpRateParams>): PmtpRateParams;
    fromAmino(object: PmtpRateParamsAmino): PmtpRateParams;
    toAmino(message: PmtpRateParams): PmtpRateParamsAmino;
    fromAminoMsg(object: PmtpRateParamsAminoMsg): PmtpRateParams;
    fromProtoMsg(message: PmtpRateParamsProtoMsg): PmtpRateParams;
    toProto(message: PmtpRateParams): Uint8Array;
    toProtoMsg(message: PmtpRateParams): PmtpRateParamsProtoMsg;
};
export declare const PmtpParams: {
    typeUrl: string;
    encode(message: PmtpParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PmtpParams;
    fromPartial(object: Partial<PmtpParams>): PmtpParams;
    fromAmino(object: PmtpParamsAmino): PmtpParams;
    toAmino(message: PmtpParams): PmtpParamsAmino;
    fromAminoMsg(object: PmtpParamsAminoMsg): PmtpParams;
    fromProtoMsg(message: PmtpParamsProtoMsg): PmtpParams;
    toProto(message: PmtpParams): Uint8Array;
    toProtoMsg(message: PmtpParams): PmtpParamsProtoMsg;
};
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
export declare const PoolMultiplier: {
    typeUrl: string;
    encode(message: PoolMultiplier, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolMultiplier;
    fromPartial(object: Partial<PoolMultiplier>): PoolMultiplier;
    fromAmino(object: PoolMultiplierAmino): PoolMultiplier;
    toAmino(message: PoolMultiplier): PoolMultiplierAmino;
    fromAminoMsg(object: PoolMultiplierAminoMsg): PoolMultiplier;
    fromProtoMsg(message: PoolMultiplierProtoMsg): PoolMultiplier;
    toProto(message: PoolMultiplier): Uint8Array;
    toProtoMsg(message: PoolMultiplier): PoolMultiplierProtoMsg;
};
export declare const LiquidityProtectionParams: {
    typeUrl: string;
    encode(message: LiquidityProtectionParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProtectionParams;
    fromPartial(object: Partial<LiquidityProtectionParams>): LiquidityProtectionParams;
    fromAmino(object: LiquidityProtectionParamsAmino): LiquidityProtectionParams;
    toAmino(message: LiquidityProtectionParams): LiquidityProtectionParamsAmino;
    fromAminoMsg(object: LiquidityProtectionParamsAminoMsg): LiquidityProtectionParams;
    fromProtoMsg(message: LiquidityProtectionParamsProtoMsg): LiquidityProtectionParams;
    toProto(message: LiquidityProtectionParams): Uint8Array;
    toProtoMsg(message: LiquidityProtectionParams): LiquidityProtectionParamsProtoMsg;
};
export declare const LiquidityProtectionRateParams: {
    typeUrl: string;
    encode(message: LiquidityProtectionRateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProtectionRateParams;
    fromPartial(object: Partial<LiquidityProtectionRateParams>): LiquidityProtectionRateParams;
    fromAmino(object: LiquidityProtectionRateParamsAmino): LiquidityProtectionRateParams;
    toAmino(message: LiquidityProtectionRateParams): LiquidityProtectionRateParamsAmino;
    fromAminoMsg(object: LiquidityProtectionRateParamsAminoMsg): LiquidityProtectionRateParams;
    fromProtoMsg(message: LiquidityProtectionRateParamsProtoMsg): LiquidityProtectionRateParams;
    toProto(message: LiquidityProtectionRateParams): Uint8Array;
    toProtoMsg(message: LiquidityProtectionRateParams): LiquidityProtectionRateParamsProtoMsg;
};
export declare const ProviderDistributionPeriod: {
    typeUrl: string;
    encode(message: ProviderDistributionPeriod, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProviderDistributionPeriod;
    fromPartial(object: Partial<ProviderDistributionPeriod>): ProviderDistributionPeriod;
    fromAmino(object: ProviderDistributionPeriodAmino): ProviderDistributionPeriod;
    toAmino(message: ProviderDistributionPeriod): ProviderDistributionPeriodAmino;
    fromAminoMsg(object: ProviderDistributionPeriodAminoMsg): ProviderDistributionPeriod;
    fromProtoMsg(message: ProviderDistributionPeriodProtoMsg): ProviderDistributionPeriod;
    toProto(message: ProviderDistributionPeriod): Uint8Array;
    toProtoMsg(message: ProviderDistributionPeriod): ProviderDistributionPeriodProtoMsg;
};
export declare const ProviderDistributionParams: {
    typeUrl: string;
    encode(message: ProviderDistributionParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProviderDistributionParams;
    fromPartial(object: Partial<ProviderDistributionParams>): ProviderDistributionParams;
    fromAmino(object: ProviderDistributionParamsAmino): ProviderDistributionParams;
    toAmino(message: ProviderDistributionParams): ProviderDistributionParamsAmino;
    fromAminoMsg(object: ProviderDistributionParamsAminoMsg): ProviderDistributionParams;
    fromProtoMsg(message: ProviderDistributionParamsProtoMsg): ProviderDistributionParams;
    toProto(message: ProviderDistributionParams): Uint8Array;
    toProtoMsg(message: ProviderDistributionParams): ProviderDistributionParamsProtoMsg;
};
export declare const SwapFeeParams: {
    typeUrl: string;
    encode(message: SwapFeeParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SwapFeeParams;
    fromPartial(object: Partial<SwapFeeParams>): SwapFeeParams;
    fromAmino(object: SwapFeeParamsAmino): SwapFeeParams;
    toAmino(message: SwapFeeParams): SwapFeeParamsAmino;
    fromAminoMsg(object: SwapFeeParamsAminoMsg): SwapFeeParams;
    fromProtoMsg(message: SwapFeeParamsProtoMsg): SwapFeeParams;
    toProto(message: SwapFeeParams): Uint8Array;
    toProtoMsg(message: SwapFeeParams): SwapFeeParamsProtoMsg;
};
export declare const SwapFeeTokenParams: {
    typeUrl: string;
    encode(message: SwapFeeTokenParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SwapFeeTokenParams;
    fromPartial(object: Partial<SwapFeeTokenParams>): SwapFeeTokenParams;
    fromAmino(object: SwapFeeTokenParamsAmino): SwapFeeTokenParams;
    toAmino(message: SwapFeeTokenParams): SwapFeeTokenParamsAmino;
    fromAminoMsg(object: SwapFeeTokenParamsAminoMsg): SwapFeeTokenParams;
    fromProtoMsg(message: SwapFeeTokenParamsProtoMsg): SwapFeeTokenParams;
    toProto(message: SwapFeeTokenParams): Uint8Array;
    toProtoMsg(message: SwapFeeTokenParams): SwapFeeTokenParamsProtoMsg;
};
