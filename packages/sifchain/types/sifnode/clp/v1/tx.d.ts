import { Asset, AssetAmino, AssetSDKType } from "./types";
import { RewardPeriod, RewardPeriodAmino, RewardPeriodSDKType, ProviderDistributionPeriod, ProviderDistributionPeriodAmino, ProviderDistributionPeriodSDKType, SwapFeeTokenParams, SwapFeeTokenParamsAmino, SwapFeeTokenParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/coin";
import { BinaryWriter } from "../../../binary";
export interface MsgUpdateStakingRewardParams {
    signer: string;
    minter: string;
    params: string;
}
export interface MsgUpdateStakingRewardParamsProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUpdateStakingRewardParams";
    value: Uint8Array;
}
export interface MsgUpdateStakingRewardParamsAmino {
    signer?: string;
    minter?: string;
    params?: string;
}
export interface MsgUpdateStakingRewardParamsAminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateStakingRewardParams";
    value: MsgUpdateStakingRewardParamsAmino;
}
export interface MsgUpdateStakingRewardParamsSDKType {
    signer: string;
    minter: string;
    params: string;
}
export interface MsgUpdateStakingRewardParamsResponse {
}
export interface MsgUpdateStakingRewardParamsResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUpdateStakingRewardParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateStakingRewardParamsResponseAmino {
}
export interface MsgUpdateStakingRewardParamsResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateStakingRewardParamsResponse";
    value: MsgUpdateStakingRewardParamsResponseAmino;
}
export interface MsgUpdateStakingRewardParamsResponseSDKType {
}
export interface MsgRemoveLiquidity {
    signer: string;
    externalAsset?: Asset;
    wBasisPoints: string;
    asymmetry: string;
}
export interface MsgRemoveLiquidityProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidity";
    value: Uint8Array;
}
export interface MsgRemoveLiquidityAmino {
    signer?: string;
    external_asset?: AssetAmino;
    w_basis_points?: string;
    asymmetry?: string;
}
export interface MsgRemoveLiquidityAminoMsg {
    type: "/sifnode.clp.v1.MsgRemoveLiquidity";
    value: MsgRemoveLiquidityAmino;
}
export interface MsgRemoveLiquiditySDKType {
    signer: string;
    external_asset?: AssetSDKType;
    w_basis_points: string;
    asymmetry: string;
}
export interface MsgRemoveLiquidityResponse {
}
export interface MsgRemoveLiquidityResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityResponse";
    value: Uint8Array;
}
export interface MsgRemoveLiquidityResponseAmino {
}
export interface MsgRemoveLiquidityResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgRemoveLiquidityResponse";
    value: MsgRemoveLiquidityResponseAmino;
}
export interface MsgRemoveLiquidityResponseSDKType {
}
export interface MsgRemoveLiquidityUnits {
    signer: string;
    externalAsset?: Asset;
    withdrawUnits: string;
}
export interface MsgRemoveLiquidityUnitsProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityUnits";
    value: Uint8Array;
}
export interface MsgRemoveLiquidityUnitsAmino {
    signer?: string;
    external_asset?: AssetAmino;
    withdraw_units?: string;
}
export interface MsgRemoveLiquidityUnitsAminoMsg {
    type: "/sifnode.clp.v1.MsgRemoveLiquidityUnits";
    value: MsgRemoveLiquidityUnitsAmino;
}
export interface MsgRemoveLiquidityUnitsSDKType {
    signer: string;
    external_asset?: AssetSDKType;
    withdraw_units: string;
}
export interface MsgRemoveLiquidityUnitsResponse {
}
export interface MsgRemoveLiquidityUnitsResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityUnitsResponse";
    value: Uint8Array;
}
export interface MsgRemoveLiquidityUnitsResponseAmino {
}
export interface MsgRemoveLiquidityUnitsResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgRemoveLiquidityUnitsResponse";
    value: MsgRemoveLiquidityUnitsResponseAmino;
}
export interface MsgRemoveLiquidityUnitsResponseSDKType {
}
export interface MsgCreatePool {
    signer: string;
    externalAsset?: Asset;
    nativeAssetAmount: string;
    externalAssetAmount: string;
}
export interface MsgCreatePoolProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgCreatePool";
    value: Uint8Array;
}
export interface MsgCreatePoolAmino {
    signer?: string;
    external_asset?: AssetAmino;
    native_asset_amount?: string;
    external_asset_amount?: string;
}
export interface MsgCreatePoolAminoMsg {
    type: "/sifnode.clp.v1.MsgCreatePool";
    value: MsgCreatePoolAmino;
}
export interface MsgCreatePoolSDKType {
    signer: string;
    external_asset?: AssetSDKType;
    native_asset_amount: string;
    external_asset_amount: string;
}
export interface MsgCreatePoolResponse {
}
export interface MsgCreatePoolResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgCreatePoolResponse";
    value: Uint8Array;
}
export interface MsgCreatePoolResponseAmino {
}
export interface MsgCreatePoolResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgCreatePoolResponse";
    value: MsgCreatePoolResponseAmino;
}
export interface MsgCreatePoolResponseSDKType {
}
export interface MsgAddLiquidity {
    signer: string;
    externalAsset?: Asset;
    nativeAssetAmount: string;
    externalAssetAmount: string;
}
export interface MsgAddLiquidityProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgAddLiquidity";
    value: Uint8Array;
}
export interface MsgAddLiquidityAmino {
    signer?: string;
    external_asset?: AssetAmino;
    native_asset_amount?: string;
    external_asset_amount?: string;
}
export interface MsgAddLiquidityAminoMsg {
    type: "/sifnode.clp.v1.MsgAddLiquidity";
    value: MsgAddLiquidityAmino;
}
export interface MsgAddLiquiditySDKType {
    signer: string;
    external_asset?: AssetSDKType;
    native_asset_amount: string;
    external_asset_amount: string;
}
export interface MsgAddLiquidityResponse {
}
export interface MsgAddLiquidityResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgAddLiquidityResponse";
    value: Uint8Array;
}
export interface MsgAddLiquidityResponseAmino {
}
export interface MsgAddLiquidityResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgAddLiquidityResponse";
    value: MsgAddLiquidityResponseAmino;
}
export interface MsgAddLiquidityResponseSDKType {
}
export interface MsgModifyPmtpRates {
    signer: string;
    blockRate: string;
    runningRate: string;
    endPolicy: boolean;
}
export interface MsgModifyPmtpRatesProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgModifyPmtpRates";
    value: Uint8Array;
}
export interface MsgModifyPmtpRatesAmino {
    signer?: string;
    block_rate?: string;
    running_rate?: string;
    end_policy?: boolean;
}
export interface MsgModifyPmtpRatesAminoMsg {
    type: "/sifnode.clp.v1.MsgModifyPmtpRates";
    value: MsgModifyPmtpRatesAmino;
}
export interface MsgModifyPmtpRatesSDKType {
    signer: string;
    block_rate: string;
    running_rate: string;
    end_policy: boolean;
}
export interface MsgModifyPmtpRatesResponse {
}
export interface MsgModifyPmtpRatesResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgModifyPmtpRatesResponse";
    value: Uint8Array;
}
export interface MsgModifyPmtpRatesResponseAmino {
}
export interface MsgModifyPmtpRatesResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgModifyPmtpRatesResponse";
    value: MsgModifyPmtpRatesResponseAmino;
}
export interface MsgModifyPmtpRatesResponseSDKType {
}
export interface MsgUpdatePmtpParams {
    signer: string;
    pmtpPeriodGovernanceRate: string;
    pmtpPeriodEpochLength: bigint;
    pmtpPeriodStartBlock: bigint;
    pmtpPeriodEndBlock: bigint;
}
export interface MsgUpdatePmtpParamsProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUpdatePmtpParams";
    value: Uint8Array;
}
export interface MsgUpdatePmtpParamsAmino {
    signer?: string;
    pmtp_period_governance_rate?: string;
    pmtp_period_epoch_length?: string;
    pmtp_period_start_block?: string;
    pmtp_period_end_block?: string;
}
export interface MsgUpdatePmtpParamsAminoMsg {
    type: "/sifnode.clp.v1.MsgUpdatePmtpParams";
    value: MsgUpdatePmtpParamsAmino;
}
export interface MsgUpdatePmtpParamsSDKType {
    signer: string;
    pmtp_period_governance_rate: string;
    pmtp_period_epoch_length: bigint;
    pmtp_period_start_block: bigint;
    pmtp_period_end_block: bigint;
}
export interface MsgUpdatePmtpParamsResponse {
}
export interface MsgUpdatePmtpParamsResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUpdatePmtpParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdatePmtpParamsResponseAmino {
}
export interface MsgUpdatePmtpParamsResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgUpdatePmtpParamsResponse";
    value: MsgUpdatePmtpParamsResponseAmino;
}
export interface MsgUpdatePmtpParamsResponseSDKType {
}
export interface MsgSwap {
    signer: string;
    sentAsset?: Asset;
    receivedAsset?: Asset;
    sentAmount: string;
    minReceivingAmount: string;
}
export interface MsgSwapProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgSwap";
    value: Uint8Array;
}
export interface MsgSwapAmino {
    signer?: string;
    sent_asset?: AssetAmino;
    received_asset?: AssetAmino;
    sent_amount?: string;
    min_receiving_amount?: string;
}
export interface MsgSwapAminoMsg {
    type: "/sifnode.clp.v1.MsgSwap";
    value: MsgSwapAmino;
}
export interface MsgSwapSDKType {
    signer: string;
    sent_asset?: AssetSDKType;
    received_asset?: AssetSDKType;
    sent_amount: string;
    min_receiving_amount: string;
}
export interface MsgSwapResponse {
}
export interface MsgSwapResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgSwapResponse";
    value: Uint8Array;
}
export interface MsgSwapResponseAmino {
}
export interface MsgSwapResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgSwapResponse";
    value: MsgSwapResponseAmino;
}
export interface MsgSwapResponseSDKType {
}
export interface MsgDecommissionPool {
    signer: string;
    symbol: string;
}
export interface MsgDecommissionPoolProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgDecommissionPool";
    value: Uint8Array;
}
export interface MsgDecommissionPoolAmino {
    signer?: string;
    symbol?: string;
}
export interface MsgDecommissionPoolAminoMsg {
    type: "/sifnode.clp.v1.MsgDecommissionPool";
    value: MsgDecommissionPoolAmino;
}
export interface MsgDecommissionPoolSDKType {
    signer: string;
    symbol: string;
}
export interface MsgDecommissionPoolResponse {
}
export interface MsgDecommissionPoolResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgDecommissionPoolResponse";
    value: Uint8Array;
}
export interface MsgDecommissionPoolResponseAmino {
}
export interface MsgDecommissionPoolResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgDecommissionPoolResponse";
    value: MsgDecommissionPoolResponseAmino;
}
export interface MsgDecommissionPoolResponseSDKType {
}
export interface MsgUnlockLiquidityRequest {
    signer: string;
    externalAsset?: Asset;
    units: string;
}
export interface MsgUnlockLiquidityRequestProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUnlockLiquidityRequest";
    value: Uint8Array;
}
export interface MsgUnlockLiquidityRequestAmino {
    signer?: string;
    external_asset?: AssetAmino;
    units?: string;
}
export interface MsgUnlockLiquidityRequestAminoMsg {
    type: "/sifnode.clp.v1.MsgUnlockLiquidityRequest";
    value: MsgUnlockLiquidityRequestAmino;
}
export interface MsgUnlockLiquidityRequestSDKType {
    signer: string;
    external_asset?: AssetSDKType;
    units: string;
}
export interface MsgUnlockLiquidityResponse {
}
export interface MsgUnlockLiquidityResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUnlockLiquidityResponse";
    value: Uint8Array;
}
export interface MsgUnlockLiquidityResponseAmino {
}
export interface MsgUnlockLiquidityResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgUnlockLiquidityResponse";
    value: MsgUnlockLiquidityResponseAmino;
}
export interface MsgUnlockLiquidityResponseSDKType {
}
export interface MsgUpdateRewardsParamsRequest {
    signer: string;
    /** in blocks */
    liquidityRemovalLockPeriod: bigint;
    /** in blocks */
    liquidityRemovalCancelPeriod: bigint;
    /** in blocks */
    rewardsLockPeriod: bigint;
    /** week, day, hour, etc */
    rewardsEpochIdentifier: string;
    /** true or false */
    rewardsDistribute: boolean;
}
export interface MsgUpdateRewardsParamsRequestProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest";
    value: Uint8Array;
}
export interface MsgUpdateRewardsParamsRequestAmino {
    signer?: string;
    /** in blocks */
    liquidity_removal_lock_period?: string;
    /** in blocks */
    liquidity_removal_cancel_period?: string;
    /** in blocks */
    rewards_lock_period?: string;
    /** week, day, hour, etc */
    rewards_epoch_identifier?: string;
    /** true or false */
    rewards_distribute?: boolean;
}
export interface MsgUpdateRewardsParamsRequestAminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest";
    value: MsgUpdateRewardsParamsRequestAmino;
}
export interface MsgUpdateRewardsParamsRequestSDKType {
    signer: string;
    liquidity_removal_lock_period: bigint;
    liquidity_removal_cancel_period: bigint;
    rewards_lock_period: bigint;
    rewards_epoch_identifier: string;
    rewards_distribute: boolean;
}
export interface MsgUpdateRewardsParamsResponse {
}
export interface MsgUpdateRewardsParamsResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUpdateRewardsParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateRewardsParamsResponseAmino {
}
export interface MsgUpdateRewardsParamsResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateRewardsParamsResponse";
    value: MsgUpdateRewardsParamsResponseAmino;
}
export interface MsgUpdateRewardsParamsResponseSDKType {
}
export interface MsgAddRewardPeriodRequest {
    signer: string;
    rewardPeriods: RewardPeriod[];
}
export interface MsgAddRewardPeriodRequestProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgAddRewardPeriodRequest";
    value: Uint8Array;
}
export interface MsgAddRewardPeriodRequestAmino {
    signer?: string;
    reward_periods?: RewardPeriodAmino[];
}
export interface MsgAddRewardPeriodRequestAminoMsg {
    type: "/sifnode.clp.v1.MsgAddRewardPeriodRequest";
    value: MsgAddRewardPeriodRequestAmino;
}
export interface MsgAddRewardPeriodRequestSDKType {
    signer: string;
    reward_periods: RewardPeriodSDKType[];
}
export interface MsgAddRewardPeriodResponse {
}
export interface MsgAddRewardPeriodResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgAddRewardPeriodResponse";
    value: Uint8Array;
}
export interface MsgAddRewardPeriodResponseAmino {
}
export interface MsgAddRewardPeriodResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgAddRewardPeriodResponse";
    value: MsgAddRewardPeriodResponseAmino;
}
export interface MsgAddRewardPeriodResponseSDKType {
}
export interface MsgSetSymmetryThreshold {
    signer: string;
    threshold: string;
    ratio: string;
}
export interface MsgSetSymmetryThresholdProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgSetSymmetryThreshold";
    value: Uint8Array;
}
export interface MsgSetSymmetryThresholdAmino {
    signer?: string;
    threshold?: string;
    ratio?: string;
}
export interface MsgSetSymmetryThresholdAminoMsg {
    type: "/sifnode.clp.v1.MsgSetSymmetryThreshold";
    value: MsgSetSymmetryThresholdAmino;
}
export interface MsgSetSymmetryThresholdSDKType {
    signer: string;
    threshold: string;
    ratio: string;
}
export interface MsgSetSymmetryThresholdResponse {
}
export interface MsgSetSymmetryThresholdResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgSetSymmetryThresholdResponse";
    value: Uint8Array;
}
export interface MsgSetSymmetryThresholdResponseAmino {
}
export interface MsgSetSymmetryThresholdResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgSetSymmetryThresholdResponse";
    value: MsgSetSymmetryThresholdResponseAmino;
}
export interface MsgSetSymmetryThresholdResponseSDKType {
}
export interface MsgCancelUnlock {
    signer: string;
    externalAsset?: Asset;
    units: string;
}
export interface MsgCancelUnlockProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgCancelUnlock";
    value: Uint8Array;
}
export interface MsgCancelUnlockAmino {
    signer?: string;
    external_asset?: AssetAmino;
    units?: string;
}
export interface MsgCancelUnlockAminoMsg {
    type: "/sifnode.clp.v1.MsgCancelUnlock";
    value: MsgCancelUnlockAmino;
}
export interface MsgCancelUnlockSDKType {
    signer: string;
    external_asset?: AssetSDKType;
    units: string;
}
export interface MsgCancelUnlockResponse {
}
export interface MsgCancelUnlockResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgCancelUnlockResponse";
    value: Uint8Array;
}
export interface MsgCancelUnlockResponseAmino {
}
export interface MsgCancelUnlockResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgCancelUnlockResponse";
    value: MsgCancelUnlockResponseAmino;
}
export interface MsgCancelUnlockResponseSDKType {
}
export interface RemovalRequest {
    id: bigint;
    value: string;
    msg?: MsgRemoveLiquidity;
}
export interface RemovalRequestProtoMsg {
    typeUrl: "/sifnode.clp.v1.RemovalRequest";
    value: Uint8Array;
}
export interface RemovalRequestAmino {
    id?: string;
    value?: string;
    msg?: MsgRemoveLiquidityAmino;
}
export interface RemovalRequestAminoMsg {
    type: "/sifnode.clp.v1.RemovalRequest";
    value: RemovalRequestAmino;
}
export interface RemovalRequestSDKType {
    id: bigint;
    value: string;
    msg?: MsgRemoveLiquiditySDKType;
}
export interface MsgModifyLiquidityProtectionRates {
    signer: string;
    currentRowanLiquidityThreshold: string;
}
export interface MsgModifyLiquidityProtectionRatesProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates";
    value: Uint8Array;
}
export interface MsgModifyLiquidityProtectionRatesAmino {
    signer?: string;
    current_rowan_liquidity_threshold?: string;
}
export interface MsgModifyLiquidityProtectionRatesAminoMsg {
    type: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates";
    value: MsgModifyLiquidityProtectionRatesAmino;
}
export interface MsgModifyLiquidityProtectionRatesSDKType {
    signer: string;
    current_rowan_liquidity_threshold: string;
}
export interface MsgModifyLiquidityProtectionRatesResponse {
}
export interface MsgModifyLiquidityProtectionRatesResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRatesResponse";
    value: Uint8Array;
}
export interface MsgModifyLiquidityProtectionRatesResponseAmino {
}
export interface MsgModifyLiquidityProtectionRatesResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRatesResponse";
    value: MsgModifyLiquidityProtectionRatesResponseAmino;
}
export interface MsgModifyLiquidityProtectionRatesResponseSDKType {
}
export interface MsgUpdateLiquidityProtectionParams {
    signer: string;
    maxRowanLiquidityThreshold: string;
    maxRowanLiquidityThresholdAsset: string;
    epochLength: bigint;
    isActive: boolean;
}
export interface MsgUpdateLiquidityProtectionParamsProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams";
    value: Uint8Array;
}
export interface MsgUpdateLiquidityProtectionParamsAmino {
    signer?: string;
    max_rowan_liquidity_threshold?: string;
    max_rowan_liquidity_threshold_asset?: string;
    epoch_length?: string;
    is_active?: boolean;
}
export interface MsgUpdateLiquidityProtectionParamsAminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams";
    value: MsgUpdateLiquidityProtectionParamsAmino;
}
export interface MsgUpdateLiquidityProtectionParamsSDKType {
    signer: string;
    max_rowan_liquidity_threshold: string;
    max_rowan_liquidity_threshold_asset: string;
    epoch_length: bigint;
    is_active: boolean;
}
export interface MsgUpdateLiquidityProtectionParamsResponse {
}
export interface MsgUpdateLiquidityProtectionParamsResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateLiquidityProtectionParamsResponseAmino {
}
export interface MsgUpdateLiquidityProtectionParamsResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParamsResponse";
    value: MsgUpdateLiquidityProtectionParamsResponseAmino;
}
export interface MsgUpdateLiquidityProtectionParamsResponseSDKType {
}
export interface MsgAddProviderDistributionPeriodRequest {
    signer: string;
    distributionPeriods: ProviderDistributionPeriod[];
}
export interface MsgAddProviderDistributionPeriodRequestProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest";
    value: Uint8Array;
}
export interface MsgAddProviderDistributionPeriodRequestAmino {
    signer?: string;
    distribution_periods?: ProviderDistributionPeriodAmino[];
}
export interface MsgAddProviderDistributionPeriodRequestAminoMsg {
    type: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest";
    value: MsgAddProviderDistributionPeriodRequestAmino;
}
export interface MsgAddProviderDistributionPeriodRequestSDKType {
    signer: string;
    distribution_periods: ProviderDistributionPeriodSDKType[];
}
export interface MsgAddProviderDistributionPeriodResponse {
}
export interface MsgAddProviderDistributionPeriodResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodResponse";
    value: Uint8Array;
}
export interface MsgAddProviderDistributionPeriodResponseAmino {
}
export interface MsgAddProviderDistributionPeriodResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodResponse";
    value: MsgAddProviderDistributionPeriodResponseAmino;
}
export interface MsgAddProviderDistributionPeriodResponseSDKType {
}
export interface MsgUpdateSwapFeeParamsRequest {
    signer: string;
    defaultSwapFeeRate: string;
    tokenParams: SwapFeeTokenParams[];
}
export interface MsgUpdateSwapFeeParamsRequestProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest";
    value: Uint8Array;
}
export interface MsgUpdateSwapFeeParamsRequestAmino {
    signer?: string;
    default_swap_fee_rate?: string;
    token_params?: SwapFeeTokenParamsAmino[];
}
export interface MsgUpdateSwapFeeParamsRequestAminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest";
    value: MsgUpdateSwapFeeParamsRequestAmino;
}
export interface MsgUpdateSwapFeeParamsRequestSDKType {
    signer: string;
    default_swap_fee_rate: string;
    token_params: SwapFeeTokenParamsSDKType[];
}
export interface MsgUpdateSwapFeeParamsResponse {
}
export interface MsgUpdateSwapFeeParamsResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateSwapFeeParamsResponseAmino {
}
export interface MsgUpdateSwapFeeParamsResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsResponse";
    value: MsgUpdateSwapFeeParamsResponseAmino;
}
export interface MsgUpdateSwapFeeParamsResponseSDKType {
}
export interface MsgAddLiquidityToRewardsBucketRequest {
    signer: string;
    amount: Coin[];
}
export interface MsgAddLiquidityToRewardsBucketRequestProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest";
    value: Uint8Array;
}
export interface MsgAddLiquidityToRewardsBucketRequestAmino {
    signer?: string;
    amount?: CoinAmino[];
}
export interface MsgAddLiquidityToRewardsBucketRequestAminoMsg {
    type: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest";
    value: MsgAddLiquidityToRewardsBucketRequestAmino;
}
export interface MsgAddLiquidityToRewardsBucketRequestSDKType {
    signer: string;
    amount: CoinSDKType[];
}
export interface MsgAddLiquidityToRewardsBucketResponse {
}
export interface MsgAddLiquidityToRewardsBucketResponseProtoMsg {
    typeUrl: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketResponse";
    value: Uint8Array;
}
export interface MsgAddLiquidityToRewardsBucketResponseAmino {
}
export interface MsgAddLiquidityToRewardsBucketResponseAminoMsg {
    type: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketResponse";
    value: MsgAddLiquidityToRewardsBucketResponseAmino;
}
export interface MsgAddLiquidityToRewardsBucketResponseSDKType {
}
export declare const MsgUpdateStakingRewardParams: {
    typeUrl: string;
    encode(message: MsgUpdateStakingRewardParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateStakingRewardParams;
    fromPartial(object: Partial<MsgUpdateStakingRewardParams>): MsgUpdateStakingRewardParams;
    fromAmino(object: MsgUpdateStakingRewardParamsAmino): MsgUpdateStakingRewardParams;
    toAmino(message: MsgUpdateStakingRewardParams): MsgUpdateStakingRewardParamsAmino;
    fromAminoMsg(object: MsgUpdateStakingRewardParamsAminoMsg): MsgUpdateStakingRewardParams;
    fromProtoMsg(message: MsgUpdateStakingRewardParamsProtoMsg): MsgUpdateStakingRewardParams;
    toProto(message: MsgUpdateStakingRewardParams): Uint8Array;
    toProtoMsg(message: MsgUpdateStakingRewardParams): MsgUpdateStakingRewardParamsProtoMsg;
};
export declare const MsgUpdateStakingRewardParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateStakingRewardParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateStakingRewardParamsResponse;
    fromPartial(_: Partial<MsgUpdateStakingRewardParamsResponse>): MsgUpdateStakingRewardParamsResponse;
    fromAmino(_: MsgUpdateStakingRewardParamsResponseAmino): MsgUpdateStakingRewardParamsResponse;
    toAmino(_: MsgUpdateStakingRewardParamsResponse): MsgUpdateStakingRewardParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateStakingRewardParamsResponseAminoMsg): MsgUpdateStakingRewardParamsResponse;
    fromProtoMsg(message: MsgUpdateStakingRewardParamsResponseProtoMsg): MsgUpdateStakingRewardParamsResponse;
    toProto(message: MsgUpdateStakingRewardParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateStakingRewardParamsResponse): MsgUpdateStakingRewardParamsResponseProtoMsg;
};
export declare const MsgRemoveLiquidity: {
    typeUrl: string;
    encode(message: MsgRemoveLiquidity, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveLiquidity;
    fromPartial(object: Partial<MsgRemoveLiquidity>): MsgRemoveLiquidity;
    fromAmino(object: MsgRemoveLiquidityAmino): MsgRemoveLiquidity;
    toAmino(message: MsgRemoveLiquidity): MsgRemoveLiquidityAmino;
    fromAminoMsg(object: MsgRemoveLiquidityAminoMsg): MsgRemoveLiquidity;
    fromProtoMsg(message: MsgRemoveLiquidityProtoMsg): MsgRemoveLiquidity;
    toProto(message: MsgRemoveLiquidity): Uint8Array;
    toProtoMsg(message: MsgRemoveLiquidity): MsgRemoveLiquidityProtoMsg;
};
export declare const MsgRemoveLiquidityResponse: {
    typeUrl: string;
    encode(_: MsgRemoveLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveLiquidityResponse;
    fromPartial(_: Partial<MsgRemoveLiquidityResponse>): MsgRemoveLiquidityResponse;
    fromAmino(_: MsgRemoveLiquidityResponseAmino): MsgRemoveLiquidityResponse;
    toAmino(_: MsgRemoveLiquidityResponse): MsgRemoveLiquidityResponseAmino;
    fromAminoMsg(object: MsgRemoveLiquidityResponseAminoMsg): MsgRemoveLiquidityResponse;
    fromProtoMsg(message: MsgRemoveLiquidityResponseProtoMsg): MsgRemoveLiquidityResponse;
    toProto(message: MsgRemoveLiquidityResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveLiquidityResponse): MsgRemoveLiquidityResponseProtoMsg;
};
export declare const MsgRemoveLiquidityUnits: {
    typeUrl: string;
    encode(message: MsgRemoveLiquidityUnits, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveLiquidityUnits;
    fromPartial(object: Partial<MsgRemoveLiquidityUnits>): MsgRemoveLiquidityUnits;
    fromAmino(object: MsgRemoveLiquidityUnitsAmino): MsgRemoveLiquidityUnits;
    toAmino(message: MsgRemoveLiquidityUnits): MsgRemoveLiquidityUnitsAmino;
    fromAminoMsg(object: MsgRemoveLiquidityUnitsAminoMsg): MsgRemoveLiquidityUnits;
    fromProtoMsg(message: MsgRemoveLiquidityUnitsProtoMsg): MsgRemoveLiquidityUnits;
    toProto(message: MsgRemoveLiquidityUnits): Uint8Array;
    toProtoMsg(message: MsgRemoveLiquidityUnits): MsgRemoveLiquidityUnitsProtoMsg;
};
export declare const MsgRemoveLiquidityUnitsResponse: {
    typeUrl: string;
    encode(_: MsgRemoveLiquidityUnitsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveLiquidityUnitsResponse;
    fromPartial(_: Partial<MsgRemoveLiquidityUnitsResponse>): MsgRemoveLiquidityUnitsResponse;
    fromAmino(_: MsgRemoveLiquidityUnitsResponseAmino): MsgRemoveLiquidityUnitsResponse;
    toAmino(_: MsgRemoveLiquidityUnitsResponse): MsgRemoveLiquidityUnitsResponseAmino;
    fromAminoMsg(object: MsgRemoveLiquidityUnitsResponseAminoMsg): MsgRemoveLiquidityUnitsResponse;
    fromProtoMsg(message: MsgRemoveLiquidityUnitsResponseProtoMsg): MsgRemoveLiquidityUnitsResponse;
    toProto(message: MsgRemoveLiquidityUnitsResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveLiquidityUnitsResponse): MsgRemoveLiquidityUnitsResponseProtoMsg;
};
export declare const MsgCreatePool: {
    typeUrl: string;
    encode(message: MsgCreatePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreatePool;
    fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool;
    fromAmino(object: MsgCreatePoolAmino): MsgCreatePool;
    toAmino(message: MsgCreatePool): MsgCreatePoolAmino;
    fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool;
    fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool;
    toProto(message: MsgCreatePool): Uint8Array;
    toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg;
};
export declare const MsgCreatePoolResponse: {
    typeUrl: string;
    encode(_: MsgCreatePoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreatePoolResponse;
    fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
    fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse;
    toAmino(_: MsgCreatePoolResponse): MsgCreatePoolResponseAmino;
    fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse;
    fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse;
    toProto(message: MsgCreatePoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg;
};
export declare const MsgAddLiquidity: {
    typeUrl: string;
    encode(message: MsgAddLiquidity, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddLiquidity;
    fromPartial(object: Partial<MsgAddLiquidity>): MsgAddLiquidity;
    fromAmino(object: MsgAddLiquidityAmino): MsgAddLiquidity;
    toAmino(message: MsgAddLiquidity): MsgAddLiquidityAmino;
    fromAminoMsg(object: MsgAddLiquidityAminoMsg): MsgAddLiquidity;
    fromProtoMsg(message: MsgAddLiquidityProtoMsg): MsgAddLiquidity;
    toProto(message: MsgAddLiquidity): Uint8Array;
    toProtoMsg(message: MsgAddLiquidity): MsgAddLiquidityProtoMsg;
};
export declare const MsgAddLiquidityResponse: {
    typeUrl: string;
    encode(_: MsgAddLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddLiquidityResponse;
    fromPartial(_: Partial<MsgAddLiquidityResponse>): MsgAddLiquidityResponse;
    fromAmino(_: MsgAddLiquidityResponseAmino): MsgAddLiquidityResponse;
    toAmino(_: MsgAddLiquidityResponse): MsgAddLiquidityResponseAmino;
    fromAminoMsg(object: MsgAddLiquidityResponseAminoMsg): MsgAddLiquidityResponse;
    fromProtoMsg(message: MsgAddLiquidityResponseProtoMsg): MsgAddLiquidityResponse;
    toProto(message: MsgAddLiquidityResponse): Uint8Array;
    toProtoMsg(message: MsgAddLiquidityResponse): MsgAddLiquidityResponseProtoMsg;
};
export declare const MsgModifyPmtpRates: {
    typeUrl: string;
    encode(message: MsgModifyPmtpRates, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgModifyPmtpRates;
    fromPartial(object: Partial<MsgModifyPmtpRates>): MsgModifyPmtpRates;
    fromAmino(object: MsgModifyPmtpRatesAmino): MsgModifyPmtpRates;
    toAmino(message: MsgModifyPmtpRates): MsgModifyPmtpRatesAmino;
    fromAminoMsg(object: MsgModifyPmtpRatesAminoMsg): MsgModifyPmtpRates;
    fromProtoMsg(message: MsgModifyPmtpRatesProtoMsg): MsgModifyPmtpRates;
    toProto(message: MsgModifyPmtpRates): Uint8Array;
    toProtoMsg(message: MsgModifyPmtpRates): MsgModifyPmtpRatesProtoMsg;
};
export declare const MsgModifyPmtpRatesResponse: {
    typeUrl: string;
    encode(_: MsgModifyPmtpRatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgModifyPmtpRatesResponse;
    fromPartial(_: Partial<MsgModifyPmtpRatesResponse>): MsgModifyPmtpRatesResponse;
    fromAmino(_: MsgModifyPmtpRatesResponseAmino): MsgModifyPmtpRatesResponse;
    toAmino(_: MsgModifyPmtpRatesResponse): MsgModifyPmtpRatesResponseAmino;
    fromAminoMsg(object: MsgModifyPmtpRatesResponseAminoMsg): MsgModifyPmtpRatesResponse;
    fromProtoMsg(message: MsgModifyPmtpRatesResponseProtoMsg): MsgModifyPmtpRatesResponse;
    toProto(message: MsgModifyPmtpRatesResponse): Uint8Array;
    toProtoMsg(message: MsgModifyPmtpRatesResponse): MsgModifyPmtpRatesResponseProtoMsg;
};
export declare const MsgUpdatePmtpParams: {
    typeUrl: string;
    encode(message: MsgUpdatePmtpParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdatePmtpParams;
    fromPartial(object: Partial<MsgUpdatePmtpParams>): MsgUpdatePmtpParams;
    fromAmino(object: MsgUpdatePmtpParamsAmino): MsgUpdatePmtpParams;
    toAmino(message: MsgUpdatePmtpParams): MsgUpdatePmtpParamsAmino;
    fromAminoMsg(object: MsgUpdatePmtpParamsAminoMsg): MsgUpdatePmtpParams;
    fromProtoMsg(message: MsgUpdatePmtpParamsProtoMsg): MsgUpdatePmtpParams;
    toProto(message: MsgUpdatePmtpParams): Uint8Array;
    toProtoMsg(message: MsgUpdatePmtpParams): MsgUpdatePmtpParamsProtoMsg;
};
export declare const MsgUpdatePmtpParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdatePmtpParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdatePmtpParamsResponse;
    fromPartial(_: Partial<MsgUpdatePmtpParamsResponse>): MsgUpdatePmtpParamsResponse;
    fromAmino(_: MsgUpdatePmtpParamsResponseAmino): MsgUpdatePmtpParamsResponse;
    toAmino(_: MsgUpdatePmtpParamsResponse): MsgUpdatePmtpParamsResponseAmino;
    fromAminoMsg(object: MsgUpdatePmtpParamsResponseAminoMsg): MsgUpdatePmtpParamsResponse;
    fromProtoMsg(message: MsgUpdatePmtpParamsResponseProtoMsg): MsgUpdatePmtpParamsResponse;
    toProto(message: MsgUpdatePmtpParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdatePmtpParamsResponse): MsgUpdatePmtpParamsResponseProtoMsg;
};
export declare const MsgSwap: {
    typeUrl: string;
    encode(message: MsgSwap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSwap;
    fromPartial(object: Partial<MsgSwap>): MsgSwap;
    fromAmino(object: MsgSwapAmino): MsgSwap;
    toAmino(message: MsgSwap): MsgSwapAmino;
    fromAminoMsg(object: MsgSwapAminoMsg): MsgSwap;
    fromProtoMsg(message: MsgSwapProtoMsg): MsgSwap;
    toProto(message: MsgSwap): Uint8Array;
    toProtoMsg(message: MsgSwap): MsgSwapProtoMsg;
};
export declare const MsgSwapResponse: {
    typeUrl: string;
    encode(_: MsgSwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSwapResponse;
    fromPartial(_: Partial<MsgSwapResponse>): MsgSwapResponse;
    fromAmino(_: MsgSwapResponseAmino): MsgSwapResponse;
    toAmino(_: MsgSwapResponse): MsgSwapResponseAmino;
    fromAminoMsg(object: MsgSwapResponseAminoMsg): MsgSwapResponse;
    fromProtoMsg(message: MsgSwapResponseProtoMsg): MsgSwapResponse;
    toProto(message: MsgSwapResponse): Uint8Array;
    toProtoMsg(message: MsgSwapResponse): MsgSwapResponseProtoMsg;
};
export declare const MsgDecommissionPool: {
    typeUrl: string;
    encode(message: MsgDecommissionPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDecommissionPool;
    fromPartial(object: Partial<MsgDecommissionPool>): MsgDecommissionPool;
    fromAmino(object: MsgDecommissionPoolAmino): MsgDecommissionPool;
    toAmino(message: MsgDecommissionPool): MsgDecommissionPoolAmino;
    fromAminoMsg(object: MsgDecommissionPoolAminoMsg): MsgDecommissionPool;
    fromProtoMsg(message: MsgDecommissionPoolProtoMsg): MsgDecommissionPool;
    toProto(message: MsgDecommissionPool): Uint8Array;
    toProtoMsg(message: MsgDecommissionPool): MsgDecommissionPoolProtoMsg;
};
export declare const MsgDecommissionPoolResponse: {
    typeUrl: string;
    encode(_: MsgDecommissionPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDecommissionPoolResponse;
    fromPartial(_: Partial<MsgDecommissionPoolResponse>): MsgDecommissionPoolResponse;
    fromAmino(_: MsgDecommissionPoolResponseAmino): MsgDecommissionPoolResponse;
    toAmino(_: MsgDecommissionPoolResponse): MsgDecommissionPoolResponseAmino;
    fromAminoMsg(object: MsgDecommissionPoolResponseAminoMsg): MsgDecommissionPoolResponse;
    fromProtoMsg(message: MsgDecommissionPoolResponseProtoMsg): MsgDecommissionPoolResponse;
    toProto(message: MsgDecommissionPoolResponse): Uint8Array;
    toProtoMsg(message: MsgDecommissionPoolResponse): MsgDecommissionPoolResponseProtoMsg;
};
export declare const MsgUnlockLiquidityRequest: {
    typeUrl: string;
    encode(message: MsgUnlockLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnlockLiquidityRequest;
    fromPartial(object: Partial<MsgUnlockLiquidityRequest>): MsgUnlockLiquidityRequest;
    fromAmino(object: MsgUnlockLiquidityRequestAmino): MsgUnlockLiquidityRequest;
    toAmino(message: MsgUnlockLiquidityRequest): MsgUnlockLiquidityRequestAmino;
    fromAminoMsg(object: MsgUnlockLiquidityRequestAminoMsg): MsgUnlockLiquidityRequest;
    fromProtoMsg(message: MsgUnlockLiquidityRequestProtoMsg): MsgUnlockLiquidityRequest;
    toProto(message: MsgUnlockLiquidityRequest): Uint8Array;
    toProtoMsg(message: MsgUnlockLiquidityRequest): MsgUnlockLiquidityRequestProtoMsg;
};
export declare const MsgUnlockLiquidityResponse: {
    typeUrl: string;
    encode(_: MsgUnlockLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnlockLiquidityResponse;
    fromPartial(_: Partial<MsgUnlockLiquidityResponse>): MsgUnlockLiquidityResponse;
    fromAmino(_: MsgUnlockLiquidityResponseAmino): MsgUnlockLiquidityResponse;
    toAmino(_: MsgUnlockLiquidityResponse): MsgUnlockLiquidityResponseAmino;
    fromAminoMsg(object: MsgUnlockLiquidityResponseAminoMsg): MsgUnlockLiquidityResponse;
    fromProtoMsg(message: MsgUnlockLiquidityResponseProtoMsg): MsgUnlockLiquidityResponse;
    toProto(message: MsgUnlockLiquidityResponse): Uint8Array;
    toProtoMsg(message: MsgUnlockLiquidityResponse): MsgUnlockLiquidityResponseProtoMsg;
};
export declare const MsgUpdateRewardsParamsRequest: {
    typeUrl: string;
    encode(message: MsgUpdateRewardsParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateRewardsParamsRequest;
    fromPartial(object: Partial<MsgUpdateRewardsParamsRequest>): MsgUpdateRewardsParamsRequest;
    fromAmino(object: MsgUpdateRewardsParamsRequestAmino): MsgUpdateRewardsParamsRequest;
    toAmino(message: MsgUpdateRewardsParamsRequest): MsgUpdateRewardsParamsRequestAmino;
    fromAminoMsg(object: MsgUpdateRewardsParamsRequestAminoMsg): MsgUpdateRewardsParamsRequest;
    fromProtoMsg(message: MsgUpdateRewardsParamsRequestProtoMsg): MsgUpdateRewardsParamsRequest;
    toProto(message: MsgUpdateRewardsParamsRequest): Uint8Array;
    toProtoMsg(message: MsgUpdateRewardsParamsRequest): MsgUpdateRewardsParamsRequestProtoMsg;
};
export declare const MsgUpdateRewardsParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateRewardsParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateRewardsParamsResponse;
    fromPartial(_: Partial<MsgUpdateRewardsParamsResponse>): MsgUpdateRewardsParamsResponse;
    fromAmino(_: MsgUpdateRewardsParamsResponseAmino): MsgUpdateRewardsParamsResponse;
    toAmino(_: MsgUpdateRewardsParamsResponse): MsgUpdateRewardsParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateRewardsParamsResponseAminoMsg): MsgUpdateRewardsParamsResponse;
    fromProtoMsg(message: MsgUpdateRewardsParamsResponseProtoMsg): MsgUpdateRewardsParamsResponse;
    toProto(message: MsgUpdateRewardsParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateRewardsParamsResponse): MsgUpdateRewardsParamsResponseProtoMsg;
};
export declare const MsgAddRewardPeriodRequest: {
    typeUrl: string;
    encode(message: MsgAddRewardPeriodRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddRewardPeriodRequest;
    fromPartial(object: Partial<MsgAddRewardPeriodRequest>): MsgAddRewardPeriodRequest;
    fromAmino(object: MsgAddRewardPeriodRequestAmino): MsgAddRewardPeriodRequest;
    toAmino(message: MsgAddRewardPeriodRequest): MsgAddRewardPeriodRequestAmino;
    fromAminoMsg(object: MsgAddRewardPeriodRequestAminoMsg): MsgAddRewardPeriodRequest;
    fromProtoMsg(message: MsgAddRewardPeriodRequestProtoMsg): MsgAddRewardPeriodRequest;
    toProto(message: MsgAddRewardPeriodRequest): Uint8Array;
    toProtoMsg(message: MsgAddRewardPeriodRequest): MsgAddRewardPeriodRequestProtoMsg;
};
export declare const MsgAddRewardPeriodResponse: {
    typeUrl: string;
    encode(_: MsgAddRewardPeriodResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddRewardPeriodResponse;
    fromPartial(_: Partial<MsgAddRewardPeriodResponse>): MsgAddRewardPeriodResponse;
    fromAmino(_: MsgAddRewardPeriodResponseAmino): MsgAddRewardPeriodResponse;
    toAmino(_: MsgAddRewardPeriodResponse): MsgAddRewardPeriodResponseAmino;
    fromAminoMsg(object: MsgAddRewardPeriodResponseAminoMsg): MsgAddRewardPeriodResponse;
    fromProtoMsg(message: MsgAddRewardPeriodResponseProtoMsg): MsgAddRewardPeriodResponse;
    toProto(message: MsgAddRewardPeriodResponse): Uint8Array;
    toProtoMsg(message: MsgAddRewardPeriodResponse): MsgAddRewardPeriodResponseProtoMsg;
};
export declare const MsgSetSymmetryThreshold: {
    typeUrl: string;
    encode(message: MsgSetSymmetryThreshold, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetSymmetryThreshold;
    fromPartial(object: Partial<MsgSetSymmetryThreshold>): MsgSetSymmetryThreshold;
    fromAmino(object: MsgSetSymmetryThresholdAmino): MsgSetSymmetryThreshold;
    toAmino(message: MsgSetSymmetryThreshold): MsgSetSymmetryThresholdAmino;
    fromAminoMsg(object: MsgSetSymmetryThresholdAminoMsg): MsgSetSymmetryThreshold;
    fromProtoMsg(message: MsgSetSymmetryThresholdProtoMsg): MsgSetSymmetryThreshold;
    toProto(message: MsgSetSymmetryThreshold): Uint8Array;
    toProtoMsg(message: MsgSetSymmetryThreshold): MsgSetSymmetryThresholdProtoMsg;
};
export declare const MsgSetSymmetryThresholdResponse: {
    typeUrl: string;
    encode(_: MsgSetSymmetryThresholdResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetSymmetryThresholdResponse;
    fromPartial(_: Partial<MsgSetSymmetryThresholdResponse>): MsgSetSymmetryThresholdResponse;
    fromAmino(_: MsgSetSymmetryThresholdResponseAmino): MsgSetSymmetryThresholdResponse;
    toAmino(_: MsgSetSymmetryThresholdResponse): MsgSetSymmetryThresholdResponseAmino;
    fromAminoMsg(object: MsgSetSymmetryThresholdResponseAminoMsg): MsgSetSymmetryThresholdResponse;
    fromProtoMsg(message: MsgSetSymmetryThresholdResponseProtoMsg): MsgSetSymmetryThresholdResponse;
    toProto(message: MsgSetSymmetryThresholdResponse): Uint8Array;
    toProtoMsg(message: MsgSetSymmetryThresholdResponse): MsgSetSymmetryThresholdResponseProtoMsg;
};
export declare const MsgCancelUnlock: {
    typeUrl: string;
    encode(message: MsgCancelUnlock, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelUnlock;
    fromPartial(object: Partial<MsgCancelUnlock>): MsgCancelUnlock;
    fromAmino(object: MsgCancelUnlockAmino): MsgCancelUnlock;
    toAmino(message: MsgCancelUnlock): MsgCancelUnlockAmino;
    fromAminoMsg(object: MsgCancelUnlockAminoMsg): MsgCancelUnlock;
    fromProtoMsg(message: MsgCancelUnlockProtoMsg): MsgCancelUnlock;
    toProto(message: MsgCancelUnlock): Uint8Array;
    toProtoMsg(message: MsgCancelUnlock): MsgCancelUnlockProtoMsg;
};
export declare const MsgCancelUnlockResponse: {
    typeUrl: string;
    encode(_: MsgCancelUnlockResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelUnlockResponse;
    fromPartial(_: Partial<MsgCancelUnlockResponse>): MsgCancelUnlockResponse;
    fromAmino(_: MsgCancelUnlockResponseAmino): MsgCancelUnlockResponse;
    toAmino(_: MsgCancelUnlockResponse): MsgCancelUnlockResponseAmino;
    fromAminoMsg(object: MsgCancelUnlockResponseAminoMsg): MsgCancelUnlockResponse;
    fromProtoMsg(message: MsgCancelUnlockResponseProtoMsg): MsgCancelUnlockResponse;
    toProto(message: MsgCancelUnlockResponse): Uint8Array;
    toProtoMsg(message: MsgCancelUnlockResponse): MsgCancelUnlockResponseProtoMsg;
};
export declare const RemovalRequest: {
    typeUrl: string;
    encode(message: RemovalRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemovalRequest;
    fromPartial(object: Partial<RemovalRequest>): RemovalRequest;
    fromAmino(object: RemovalRequestAmino): RemovalRequest;
    toAmino(message: RemovalRequest): RemovalRequestAmino;
    fromAminoMsg(object: RemovalRequestAminoMsg): RemovalRequest;
    fromProtoMsg(message: RemovalRequestProtoMsg): RemovalRequest;
    toProto(message: RemovalRequest): Uint8Array;
    toProtoMsg(message: RemovalRequest): RemovalRequestProtoMsg;
};
export declare const MsgModifyLiquidityProtectionRates: {
    typeUrl: string;
    encode(message: MsgModifyLiquidityProtectionRates, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgModifyLiquidityProtectionRates;
    fromPartial(object: Partial<MsgModifyLiquidityProtectionRates>): MsgModifyLiquidityProtectionRates;
    fromAmino(object: MsgModifyLiquidityProtectionRatesAmino): MsgModifyLiquidityProtectionRates;
    toAmino(message: MsgModifyLiquidityProtectionRates): MsgModifyLiquidityProtectionRatesAmino;
    fromAminoMsg(object: MsgModifyLiquidityProtectionRatesAminoMsg): MsgModifyLiquidityProtectionRates;
    fromProtoMsg(message: MsgModifyLiquidityProtectionRatesProtoMsg): MsgModifyLiquidityProtectionRates;
    toProto(message: MsgModifyLiquidityProtectionRates): Uint8Array;
    toProtoMsg(message: MsgModifyLiquidityProtectionRates): MsgModifyLiquidityProtectionRatesProtoMsg;
};
export declare const MsgModifyLiquidityProtectionRatesResponse: {
    typeUrl: string;
    encode(_: MsgModifyLiquidityProtectionRatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgModifyLiquidityProtectionRatesResponse;
    fromPartial(_: Partial<MsgModifyLiquidityProtectionRatesResponse>): MsgModifyLiquidityProtectionRatesResponse;
    fromAmino(_: MsgModifyLiquidityProtectionRatesResponseAmino): MsgModifyLiquidityProtectionRatesResponse;
    toAmino(_: MsgModifyLiquidityProtectionRatesResponse): MsgModifyLiquidityProtectionRatesResponseAmino;
    fromAminoMsg(object: MsgModifyLiquidityProtectionRatesResponseAminoMsg): MsgModifyLiquidityProtectionRatesResponse;
    fromProtoMsg(message: MsgModifyLiquidityProtectionRatesResponseProtoMsg): MsgModifyLiquidityProtectionRatesResponse;
    toProto(message: MsgModifyLiquidityProtectionRatesResponse): Uint8Array;
    toProtoMsg(message: MsgModifyLiquidityProtectionRatesResponse): MsgModifyLiquidityProtectionRatesResponseProtoMsg;
};
export declare const MsgUpdateLiquidityProtectionParams: {
    typeUrl: string;
    encode(message: MsgUpdateLiquidityProtectionParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateLiquidityProtectionParams;
    fromPartial(object: Partial<MsgUpdateLiquidityProtectionParams>): MsgUpdateLiquidityProtectionParams;
    fromAmino(object: MsgUpdateLiquidityProtectionParamsAmino): MsgUpdateLiquidityProtectionParams;
    toAmino(message: MsgUpdateLiquidityProtectionParams): MsgUpdateLiquidityProtectionParamsAmino;
    fromAminoMsg(object: MsgUpdateLiquidityProtectionParamsAminoMsg): MsgUpdateLiquidityProtectionParams;
    fromProtoMsg(message: MsgUpdateLiquidityProtectionParamsProtoMsg): MsgUpdateLiquidityProtectionParams;
    toProto(message: MsgUpdateLiquidityProtectionParams): Uint8Array;
    toProtoMsg(message: MsgUpdateLiquidityProtectionParams): MsgUpdateLiquidityProtectionParamsProtoMsg;
};
export declare const MsgUpdateLiquidityProtectionParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateLiquidityProtectionParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateLiquidityProtectionParamsResponse;
    fromPartial(_: Partial<MsgUpdateLiquidityProtectionParamsResponse>): MsgUpdateLiquidityProtectionParamsResponse;
    fromAmino(_: MsgUpdateLiquidityProtectionParamsResponseAmino): MsgUpdateLiquidityProtectionParamsResponse;
    toAmino(_: MsgUpdateLiquidityProtectionParamsResponse): MsgUpdateLiquidityProtectionParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateLiquidityProtectionParamsResponseAminoMsg): MsgUpdateLiquidityProtectionParamsResponse;
    fromProtoMsg(message: MsgUpdateLiquidityProtectionParamsResponseProtoMsg): MsgUpdateLiquidityProtectionParamsResponse;
    toProto(message: MsgUpdateLiquidityProtectionParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateLiquidityProtectionParamsResponse): MsgUpdateLiquidityProtectionParamsResponseProtoMsg;
};
export declare const MsgAddProviderDistributionPeriodRequest: {
    typeUrl: string;
    encode(message: MsgAddProviderDistributionPeriodRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddProviderDistributionPeriodRequest;
    fromPartial(object: Partial<MsgAddProviderDistributionPeriodRequest>): MsgAddProviderDistributionPeriodRequest;
    fromAmino(object: MsgAddProviderDistributionPeriodRequestAmino): MsgAddProviderDistributionPeriodRequest;
    toAmino(message: MsgAddProviderDistributionPeriodRequest): MsgAddProviderDistributionPeriodRequestAmino;
    fromAminoMsg(object: MsgAddProviderDistributionPeriodRequestAminoMsg): MsgAddProviderDistributionPeriodRequest;
    fromProtoMsg(message: MsgAddProviderDistributionPeriodRequestProtoMsg): MsgAddProviderDistributionPeriodRequest;
    toProto(message: MsgAddProviderDistributionPeriodRequest): Uint8Array;
    toProtoMsg(message: MsgAddProviderDistributionPeriodRequest): MsgAddProviderDistributionPeriodRequestProtoMsg;
};
export declare const MsgAddProviderDistributionPeriodResponse: {
    typeUrl: string;
    encode(_: MsgAddProviderDistributionPeriodResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddProviderDistributionPeriodResponse;
    fromPartial(_: Partial<MsgAddProviderDistributionPeriodResponse>): MsgAddProviderDistributionPeriodResponse;
    fromAmino(_: MsgAddProviderDistributionPeriodResponseAmino): MsgAddProviderDistributionPeriodResponse;
    toAmino(_: MsgAddProviderDistributionPeriodResponse): MsgAddProviderDistributionPeriodResponseAmino;
    fromAminoMsg(object: MsgAddProviderDistributionPeriodResponseAminoMsg): MsgAddProviderDistributionPeriodResponse;
    fromProtoMsg(message: MsgAddProviderDistributionPeriodResponseProtoMsg): MsgAddProviderDistributionPeriodResponse;
    toProto(message: MsgAddProviderDistributionPeriodResponse): Uint8Array;
    toProtoMsg(message: MsgAddProviderDistributionPeriodResponse): MsgAddProviderDistributionPeriodResponseProtoMsg;
};
export declare const MsgUpdateSwapFeeParamsRequest: {
    typeUrl: string;
    encode(message: MsgUpdateSwapFeeParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateSwapFeeParamsRequest;
    fromPartial(object: Partial<MsgUpdateSwapFeeParamsRequest>): MsgUpdateSwapFeeParamsRequest;
    fromAmino(object: MsgUpdateSwapFeeParamsRequestAmino): MsgUpdateSwapFeeParamsRequest;
    toAmino(message: MsgUpdateSwapFeeParamsRequest): MsgUpdateSwapFeeParamsRequestAmino;
    fromAminoMsg(object: MsgUpdateSwapFeeParamsRequestAminoMsg): MsgUpdateSwapFeeParamsRequest;
    fromProtoMsg(message: MsgUpdateSwapFeeParamsRequestProtoMsg): MsgUpdateSwapFeeParamsRequest;
    toProto(message: MsgUpdateSwapFeeParamsRequest): Uint8Array;
    toProtoMsg(message: MsgUpdateSwapFeeParamsRequest): MsgUpdateSwapFeeParamsRequestProtoMsg;
};
export declare const MsgUpdateSwapFeeParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateSwapFeeParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateSwapFeeParamsResponse;
    fromPartial(_: Partial<MsgUpdateSwapFeeParamsResponse>): MsgUpdateSwapFeeParamsResponse;
    fromAmino(_: MsgUpdateSwapFeeParamsResponseAmino): MsgUpdateSwapFeeParamsResponse;
    toAmino(_: MsgUpdateSwapFeeParamsResponse): MsgUpdateSwapFeeParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateSwapFeeParamsResponseAminoMsg): MsgUpdateSwapFeeParamsResponse;
    fromProtoMsg(message: MsgUpdateSwapFeeParamsResponseProtoMsg): MsgUpdateSwapFeeParamsResponse;
    toProto(message: MsgUpdateSwapFeeParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateSwapFeeParamsResponse): MsgUpdateSwapFeeParamsResponseProtoMsg;
};
export declare const MsgAddLiquidityToRewardsBucketRequest: {
    typeUrl: string;
    encode(message: MsgAddLiquidityToRewardsBucketRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddLiquidityToRewardsBucketRequest;
    fromPartial(object: Partial<MsgAddLiquidityToRewardsBucketRequest>): MsgAddLiquidityToRewardsBucketRequest;
    fromAmino(object: MsgAddLiquidityToRewardsBucketRequestAmino): MsgAddLiquidityToRewardsBucketRequest;
    toAmino(message: MsgAddLiquidityToRewardsBucketRequest): MsgAddLiquidityToRewardsBucketRequestAmino;
    fromAminoMsg(object: MsgAddLiquidityToRewardsBucketRequestAminoMsg): MsgAddLiquidityToRewardsBucketRequest;
    fromProtoMsg(message: MsgAddLiquidityToRewardsBucketRequestProtoMsg): MsgAddLiquidityToRewardsBucketRequest;
    toProto(message: MsgAddLiquidityToRewardsBucketRequest): Uint8Array;
    toProtoMsg(message: MsgAddLiquidityToRewardsBucketRequest): MsgAddLiquidityToRewardsBucketRequestProtoMsg;
};
export declare const MsgAddLiquidityToRewardsBucketResponse: {
    typeUrl: string;
    encode(_: MsgAddLiquidityToRewardsBucketResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddLiquidityToRewardsBucketResponse;
    fromPartial(_: Partial<MsgAddLiquidityToRewardsBucketResponse>): MsgAddLiquidityToRewardsBucketResponse;
    fromAmino(_: MsgAddLiquidityToRewardsBucketResponseAmino): MsgAddLiquidityToRewardsBucketResponse;
    toAmino(_: MsgAddLiquidityToRewardsBucketResponse): MsgAddLiquidityToRewardsBucketResponseAmino;
    fromAminoMsg(object: MsgAddLiquidityToRewardsBucketResponseAminoMsg): MsgAddLiquidityToRewardsBucketResponse;
    fromProtoMsg(message: MsgAddLiquidityToRewardsBucketResponseProtoMsg): MsgAddLiquidityToRewardsBucketResponse;
    toProto(message: MsgAddLiquidityToRewardsBucketResponse): Uint8Array;
    toProtoMsg(message: MsgAddLiquidityToRewardsBucketResponse): MsgAddLiquidityToRewardsBucketResponseProtoMsg;
};
