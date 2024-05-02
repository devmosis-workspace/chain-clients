import { Asset, AssetAmino, AssetSDKType } from "./types";
import { RewardPeriod, RewardPeriodAmino, RewardPeriodSDKType, ProviderDistributionPeriod, ProviderDistributionPeriodAmino, ProviderDistributionPeriodSDKType, SwapFeeTokenParams, SwapFeeTokenParamsAmino, SwapFeeTokenParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
export interface MsgUpdateStakingRewardParamsResponse {}
export interface MsgUpdateStakingRewardParamsResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgUpdateStakingRewardParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateStakingRewardParamsResponseAmino {}
export interface MsgUpdateStakingRewardParamsResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgUpdateStakingRewardParamsResponse";
  value: MsgUpdateStakingRewardParamsResponseAmino;
}
export interface MsgUpdateStakingRewardParamsResponseSDKType {}
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
export interface MsgRemoveLiquidityResponse {}
export interface MsgRemoveLiquidityResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityResponse";
  value: Uint8Array;
}
export interface MsgRemoveLiquidityResponseAmino {}
export interface MsgRemoveLiquidityResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgRemoveLiquidityResponse";
  value: MsgRemoveLiquidityResponseAmino;
}
export interface MsgRemoveLiquidityResponseSDKType {}
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
export interface MsgRemoveLiquidityUnitsResponse {}
export interface MsgRemoveLiquidityUnitsResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityUnitsResponse";
  value: Uint8Array;
}
export interface MsgRemoveLiquidityUnitsResponseAmino {}
export interface MsgRemoveLiquidityUnitsResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgRemoveLiquidityUnitsResponse";
  value: MsgRemoveLiquidityUnitsResponseAmino;
}
export interface MsgRemoveLiquidityUnitsResponseSDKType {}
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
export interface MsgCreatePoolResponse {}
export interface MsgCreatePoolResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgCreatePoolResponse";
  value: Uint8Array;
}
export interface MsgCreatePoolResponseAmino {}
export interface MsgCreatePoolResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgCreatePoolResponse";
  value: MsgCreatePoolResponseAmino;
}
export interface MsgCreatePoolResponseSDKType {}
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
export interface MsgAddLiquidityResponse {}
export interface MsgAddLiquidityResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgAddLiquidityResponse";
  value: Uint8Array;
}
export interface MsgAddLiquidityResponseAmino {}
export interface MsgAddLiquidityResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgAddLiquidityResponse";
  value: MsgAddLiquidityResponseAmino;
}
export interface MsgAddLiquidityResponseSDKType {}
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
export interface MsgModifyPmtpRatesResponse {}
export interface MsgModifyPmtpRatesResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgModifyPmtpRatesResponse";
  value: Uint8Array;
}
export interface MsgModifyPmtpRatesResponseAmino {}
export interface MsgModifyPmtpRatesResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgModifyPmtpRatesResponse";
  value: MsgModifyPmtpRatesResponseAmino;
}
export interface MsgModifyPmtpRatesResponseSDKType {}
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
export interface MsgUpdatePmtpParamsResponse {}
export interface MsgUpdatePmtpParamsResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgUpdatePmtpParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdatePmtpParamsResponseAmino {}
export interface MsgUpdatePmtpParamsResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgUpdatePmtpParamsResponse";
  value: MsgUpdatePmtpParamsResponseAmino;
}
export interface MsgUpdatePmtpParamsResponseSDKType {}
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
export interface MsgSwapResponse {}
export interface MsgSwapResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgSwapResponse";
  value: Uint8Array;
}
export interface MsgSwapResponseAmino {}
export interface MsgSwapResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgSwapResponse";
  value: MsgSwapResponseAmino;
}
export interface MsgSwapResponseSDKType {}
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
export interface MsgDecommissionPoolResponse {}
export interface MsgDecommissionPoolResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgDecommissionPoolResponse";
  value: Uint8Array;
}
export interface MsgDecommissionPoolResponseAmino {}
export interface MsgDecommissionPoolResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgDecommissionPoolResponse";
  value: MsgDecommissionPoolResponseAmino;
}
export interface MsgDecommissionPoolResponseSDKType {}
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
export interface MsgUnlockLiquidityResponse {}
export interface MsgUnlockLiquidityResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgUnlockLiquidityResponse";
  value: Uint8Array;
}
export interface MsgUnlockLiquidityResponseAmino {}
export interface MsgUnlockLiquidityResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgUnlockLiquidityResponse";
  value: MsgUnlockLiquidityResponseAmino;
}
export interface MsgUnlockLiquidityResponseSDKType {}
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
export interface MsgUpdateRewardsParamsResponse {}
export interface MsgUpdateRewardsParamsResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgUpdateRewardsParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateRewardsParamsResponseAmino {}
export interface MsgUpdateRewardsParamsResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgUpdateRewardsParamsResponse";
  value: MsgUpdateRewardsParamsResponseAmino;
}
export interface MsgUpdateRewardsParamsResponseSDKType {}
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
export interface MsgAddRewardPeriodResponse {}
export interface MsgAddRewardPeriodResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgAddRewardPeriodResponse";
  value: Uint8Array;
}
export interface MsgAddRewardPeriodResponseAmino {}
export interface MsgAddRewardPeriodResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgAddRewardPeriodResponse";
  value: MsgAddRewardPeriodResponseAmino;
}
export interface MsgAddRewardPeriodResponseSDKType {}
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
export interface MsgSetSymmetryThresholdResponse {}
export interface MsgSetSymmetryThresholdResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgSetSymmetryThresholdResponse";
  value: Uint8Array;
}
export interface MsgSetSymmetryThresholdResponseAmino {}
export interface MsgSetSymmetryThresholdResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgSetSymmetryThresholdResponse";
  value: MsgSetSymmetryThresholdResponseAmino;
}
export interface MsgSetSymmetryThresholdResponseSDKType {}
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
export interface MsgCancelUnlockResponse {}
export interface MsgCancelUnlockResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgCancelUnlockResponse";
  value: Uint8Array;
}
export interface MsgCancelUnlockResponseAmino {}
export interface MsgCancelUnlockResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgCancelUnlockResponse";
  value: MsgCancelUnlockResponseAmino;
}
export interface MsgCancelUnlockResponseSDKType {}
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
export interface MsgModifyLiquidityProtectionRatesResponse {}
export interface MsgModifyLiquidityProtectionRatesResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRatesResponse";
  value: Uint8Array;
}
export interface MsgModifyLiquidityProtectionRatesResponseAmino {}
export interface MsgModifyLiquidityProtectionRatesResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRatesResponse";
  value: MsgModifyLiquidityProtectionRatesResponseAmino;
}
export interface MsgModifyLiquidityProtectionRatesResponseSDKType {}
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
export interface MsgUpdateLiquidityProtectionParamsResponse {}
export interface MsgUpdateLiquidityProtectionParamsResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateLiquidityProtectionParamsResponseAmino {}
export interface MsgUpdateLiquidityProtectionParamsResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParamsResponse";
  value: MsgUpdateLiquidityProtectionParamsResponseAmino;
}
export interface MsgUpdateLiquidityProtectionParamsResponseSDKType {}
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
export interface MsgAddProviderDistributionPeriodResponse {}
export interface MsgAddProviderDistributionPeriodResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodResponse";
  value: Uint8Array;
}
export interface MsgAddProviderDistributionPeriodResponseAmino {}
export interface MsgAddProviderDistributionPeriodResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodResponse";
  value: MsgAddProviderDistributionPeriodResponseAmino;
}
export interface MsgAddProviderDistributionPeriodResponseSDKType {}
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
export interface MsgUpdateSwapFeeParamsResponse {}
export interface MsgUpdateSwapFeeParamsResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateSwapFeeParamsResponseAmino {}
export interface MsgUpdateSwapFeeParamsResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsResponse";
  value: MsgUpdateSwapFeeParamsResponseAmino;
}
export interface MsgUpdateSwapFeeParamsResponseSDKType {}
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
export interface MsgAddLiquidityToRewardsBucketResponse {}
export interface MsgAddLiquidityToRewardsBucketResponseProtoMsg {
  typeUrl: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketResponse";
  value: Uint8Array;
}
export interface MsgAddLiquidityToRewardsBucketResponseAmino {}
export interface MsgAddLiquidityToRewardsBucketResponseAminoMsg {
  type: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketResponse";
  value: MsgAddLiquidityToRewardsBucketResponseAmino;
}
export interface MsgAddLiquidityToRewardsBucketResponseSDKType {}
function createBaseMsgUpdateStakingRewardParams(): MsgUpdateStakingRewardParams {
  return {
    signer: "",
    minter: "",
    params: ""
  };
}
export const MsgUpdateStakingRewardParams = {
  typeUrl: "/sifnode.clp.v1.MsgUpdateStakingRewardParams",
  encode(message: MsgUpdateStakingRewardParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.minter !== "") {
      writer.uint32(18).string(message.minter);
    }
    if (message.params !== "") {
      writer.uint32(26).string(message.params);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateStakingRewardParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      minter: isSet(object.minter) ? String(object.minter) : "",
      params: isSet(object.params) ? String(object.params) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateStakingRewardParams>): MsgUpdateStakingRewardParams {
    const message = createBaseMsgUpdateStakingRewardParams();
    message.signer = object.signer ?? "";
    message.minter = object.minter ?? "";
    message.params = object.params ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateStakingRewardParamsAmino): MsgUpdateStakingRewardParams {
    const message = createBaseMsgUpdateStakingRewardParams();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = object.params;
    }
    return message;
  },
  toAmino(message: MsgUpdateStakingRewardParams): MsgUpdateStakingRewardParamsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.minter = message.minter === "" ? undefined : message.minter;
    obj.params = message.params === "" ? undefined : message.params;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStakingRewardParamsAminoMsg): MsgUpdateStakingRewardParams {
    return MsgUpdateStakingRewardParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStakingRewardParamsProtoMsg): MsgUpdateStakingRewardParams {
    return MsgUpdateStakingRewardParams.decode(message.value);
  },
  toProto(message: MsgUpdateStakingRewardParams): Uint8Array {
    return MsgUpdateStakingRewardParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStakingRewardParams): MsgUpdateStakingRewardParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUpdateStakingRewardParams",
      value: MsgUpdateStakingRewardParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStakingRewardParamsResponse(): MsgUpdateStakingRewardParamsResponse {
  return {};
}
export const MsgUpdateStakingRewardParamsResponse = {
  typeUrl: "/sifnode.clp.v1.MsgUpdateStakingRewardParamsResponse",
  encode(_: MsgUpdateStakingRewardParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateStakingRewardParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateStakingRewardParamsResponse>): MsgUpdateStakingRewardParamsResponse {
    const message = createBaseMsgUpdateStakingRewardParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateStakingRewardParamsResponseAmino): MsgUpdateStakingRewardParamsResponse {
    const message = createBaseMsgUpdateStakingRewardParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateStakingRewardParamsResponse): MsgUpdateStakingRewardParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStakingRewardParamsResponseAminoMsg): MsgUpdateStakingRewardParamsResponse {
    return MsgUpdateStakingRewardParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStakingRewardParamsResponseProtoMsg): MsgUpdateStakingRewardParamsResponse {
    return MsgUpdateStakingRewardParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateStakingRewardParamsResponse): Uint8Array {
    return MsgUpdateStakingRewardParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStakingRewardParamsResponse): MsgUpdateStakingRewardParamsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUpdateStakingRewardParamsResponse",
      value: MsgUpdateStakingRewardParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveLiquidity(): MsgRemoveLiquidity {
  return {
    signer: "",
    externalAsset: undefined,
    wBasisPoints: "",
    asymmetry: ""
  };
}
export const MsgRemoveLiquidity = {
  typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidity",
  encode(message: MsgRemoveLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.wBasisPoints !== "") {
      writer.uint32(26).string(message.wBasisPoints);
    }
    if (message.asymmetry !== "") {
      writer.uint32(34).string(message.asymmetry);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveLiquidity {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      wBasisPoints: isSet(object.wBasisPoints) ? String(object.wBasisPoints) : "",
      asymmetry: isSet(object.asymmetry) ? String(object.asymmetry) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveLiquidity>): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.wBasisPoints = object.wBasisPoints ?? "";
    message.asymmetry = object.asymmetry ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveLiquidityAmino): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.external_asset !== undefined && object.external_asset !== null) {
      message.externalAsset = Asset.fromAmino(object.external_asset);
    }
    if (object.w_basis_points !== undefined && object.w_basis_points !== null) {
      message.wBasisPoints = object.w_basis_points;
    }
    if (object.asymmetry !== undefined && object.asymmetry !== null) {
      message.asymmetry = object.asymmetry;
    }
    return message;
  },
  toAmino(message: MsgRemoveLiquidity): MsgRemoveLiquidityAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.external_asset = message.externalAsset ? Asset.toAmino(message.externalAsset) : undefined;
    obj.w_basis_points = message.wBasisPoints === "" ? undefined : message.wBasisPoints;
    obj.asymmetry = message.asymmetry === "" ? undefined : message.asymmetry;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveLiquidityAminoMsg): MsgRemoveLiquidity {
    return MsgRemoveLiquidity.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveLiquidityProtoMsg): MsgRemoveLiquidity {
    return MsgRemoveLiquidity.decode(message.value);
  },
  toProto(message: MsgRemoveLiquidity): Uint8Array {
    return MsgRemoveLiquidity.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveLiquidity): MsgRemoveLiquidityProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidity",
      value: MsgRemoveLiquidity.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveLiquidityResponse(): MsgRemoveLiquidityResponse {
  return {};
}
export const MsgRemoveLiquidityResponse = {
  typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityResponse",
  encode(_: MsgRemoveLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveLiquidityResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveLiquidityResponse>): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    return message;
  },
  fromAmino(_: MsgRemoveLiquidityResponseAmino): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    return message;
  },
  toAmino(_: MsgRemoveLiquidityResponse): MsgRemoveLiquidityResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveLiquidityResponseAminoMsg): MsgRemoveLiquidityResponse {
    return MsgRemoveLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveLiquidityResponseProtoMsg): MsgRemoveLiquidityResponse {
    return MsgRemoveLiquidityResponse.decode(message.value);
  },
  toProto(message: MsgRemoveLiquidityResponse): Uint8Array {
    return MsgRemoveLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveLiquidityResponse): MsgRemoveLiquidityResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityResponse",
      value: MsgRemoveLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveLiquidityUnits(): MsgRemoveLiquidityUnits {
  return {
    signer: "",
    externalAsset: undefined,
    withdrawUnits: ""
  };
}
export const MsgRemoveLiquidityUnits = {
  typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityUnits",
  encode(message: MsgRemoveLiquidityUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawUnits !== "") {
      writer.uint32(26).string(message.withdrawUnits);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveLiquidityUnits {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      withdrawUnits: isSet(object.withdrawUnits) ? String(object.withdrawUnits) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveLiquidityUnits>): MsgRemoveLiquidityUnits {
    const message = createBaseMsgRemoveLiquidityUnits();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.withdrawUnits = object.withdrawUnits ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveLiquidityUnitsAmino): MsgRemoveLiquidityUnits {
    const message = createBaseMsgRemoveLiquidityUnits();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.external_asset !== undefined && object.external_asset !== null) {
      message.externalAsset = Asset.fromAmino(object.external_asset);
    }
    if (object.withdraw_units !== undefined && object.withdraw_units !== null) {
      message.withdrawUnits = object.withdraw_units;
    }
    return message;
  },
  toAmino(message: MsgRemoveLiquidityUnits): MsgRemoveLiquidityUnitsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.external_asset = message.externalAsset ? Asset.toAmino(message.externalAsset) : undefined;
    obj.withdraw_units = message.withdrawUnits === "" ? undefined : message.withdrawUnits;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveLiquidityUnitsAminoMsg): MsgRemoveLiquidityUnits {
    return MsgRemoveLiquidityUnits.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveLiquidityUnitsProtoMsg): MsgRemoveLiquidityUnits {
    return MsgRemoveLiquidityUnits.decode(message.value);
  },
  toProto(message: MsgRemoveLiquidityUnits): Uint8Array {
    return MsgRemoveLiquidityUnits.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveLiquidityUnits): MsgRemoveLiquidityUnitsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityUnits",
      value: MsgRemoveLiquidityUnits.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveLiquidityUnitsResponse(): MsgRemoveLiquidityUnitsResponse {
  return {};
}
export const MsgRemoveLiquidityUnitsResponse = {
  typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityUnitsResponse",
  encode(_: MsgRemoveLiquidityUnitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveLiquidityUnitsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveLiquidityUnitsResponse>): MsgRemoveLiquidityUnitsResponse {
    const message = createBaseMsgRemoveLiquidityUnitsResponse();
    return message;
  },
  fromAmino(_: MsgRemoveLiquidityUnitsResponseAmino): MsgRemoveLiquidityUnitsResponse {
    const message = createBaseMsgRemoveLiquidityUnitsResponse();
    return message;
  },
  toAmino(_: MsgRemoveLiquidityUnitsResponse): MsgRemoveLiquidityUnitsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveLiquidityUnitsResponseAminoMsg): MsgRemoveLiquidityUnitsResponse {
    return MsgRemoveLiquidityUnitsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveLiquidityUnitsResponseProtoMsg): MsgRemoveLiquidityUnitsResponse {
    return MsgRemoveLiquidityUnitsResponse.decode(message.value);
  },
  toProto(message: MsgRemoveLiquidityUnitsResponse): Uint8Array {
    return MsgRemoveLiquidityUnitsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveLiquidityUnitsResponse): MsgRemoveLiquidityUnitsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityUnitsResponse",
      value: MsgRemoveLiquidityUnitsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    signer: "",
    externalAsset: undefined,
    nativeAssetAmount: "",
    externalAssetAmount: ""
  };
}
export const MsgCreatePool = {
  typeUrl: "/sifnode.clp.v1.MsgCreatePool",
  encode(message: MsgCreatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.nativeAssetAmount !== "") {
      writer.uint32(26).string(message.nativeAssetAmount);
    }
    if (message.externalAssetAmount !== "") {
      writer.uint32(34).string(message.externalAssetAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreatePool {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      nativeAssetAmount: isSet(object.nativeAssetAmount) ? String(object.nativeAssetAmount) : "",
      externalAssetAmount: isSet(object.externalAssetAmount) ? String(object.externalAssetAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.nativeAssetAmount = object.nativeAssetAmount ?? "";
    message.externalAssetAmount = object.externalAssetAmount ?? "";
    return message;
  },
  fromAmino(object: MsgCreatePoolAmino): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.external_asset !== undefined && object.external_asset !== null) {
      message.externalAsset = Asset.fromAmino(object.external_asset);
    }
    if (object.native_asset_amount !== undefined && object.native_asset_amount !== null) {
      message.nativeAssetAmount = object.native_asset_amount;
    }
    if (object.external_asset_amount !== undefined && object.external_asset_amount !== null) {
      message.externalAssetAmount = object.external_asset_amount;
    }
    return message;
  },
  toAmino(message: MsgCreatePool): MsgCreatePoolAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.external_asset = message.externalAsset ? Asset.toAmino(message.externalAsset) : undefined;
    obj.native_asset_amount = message.nativeAssetAmount === "" ? undefined : message.nativeAssetAmount;
    obj.external_asset_amount = message.externalAssetAmount === "" ? undefined : message.externalAssetAmount;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool {
    return MsgCreatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool {
    return MsgCreatePool.decode(message.value);
  },
  toProto(message: MsgCreatePool): Uint8Array {
    return MsgCreatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgCreatePool",
      value: MsgCreatePool.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}
export const MsgCreatePoolResponse = {
  typeUrl: "/sifnode.clp.v1.MsgCreatePoolResponse",
  encode(_: MsgCreatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  toAmino(_: MsgCreatePoolResponse): MsgCreatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.decode(message.value);
  },
  toProto(message: MsgCreatePoolResponse): Uint8Array {
    return MsgCreatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgCreatePoolResponse",
      value: MsgCreatePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return {
    signer: "",
    externalAsset: undefined,
    nativeAssetAmount: "",
    externalAssetAmount: ""
  };
}
export const MsgAddLiquidity = {
  typeUrl: "/sifnode.clp.v1.MsgAddLiquidity",
  encode(message: MsgAddLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.nativeAssetAmount !== "") {
      writer.uint32(26).string(message.nativeAssetAmount);
    }
    if (message.externalAssetAmount !== "") {
      writer.uint32(34).string(message.externalAssetAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddLiquidity {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      nativeAssetAmount: isSet(object.nativeAssetAmount) ? String(object.nativeAssetAmount) : "",
      externalAssetAmount: isSet(object.externalAssetAmount) ? String(object.externalAssetAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgAddLiquidity>): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.nativeAssetAmount = object.nativeAssetAmount ?? "";
    message.externalAssetAmount = object.externalAssetAmount ?? "";
    return message;
  },
  fromAmino(object: MsgAddLiquidityAmino): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.external_asset !== undefined && object.external_asset !== null) {
      message.externalAsset = Asset.fromAmino(object.external_asset);
    }
    if (object.native_asset_amount !== undefined && object.native_asset_amount !== null) {
      message.nativeAssetAmount = object.native_asset_amount;
    }
    if (object.external_asset_amount !== undefined && object.external_asset_amount !== null) {
      message.externalAssetAmount = object.external_asset_amount;
    }
    return message;
  },
  toAmino(message: MsgAddLiquidity): MsgAddLiquidityAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.external_asset = message.externalAsset ? Asset.toAmino(message.externalAsset) : undefined;
    obj.native_asset_amount = message.nativeAssetAmount === "" ? undefined : message.nativeAssetAmount;
    obj.external_asset_amount = message.externalAssetAmount === "" ? undefined : message.externalAssetAmount;
    return obj;
  },
  fromAminoMsg(object: MsgAddLiquidityAminoMsg): MsgAddLiquidity {
    return MsgAddLiquidity.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddLiquidityProtoMsg): MsgAddLiquidity {
    return MsgAddLiquidity.decode(message.value);
  },
  toProto(message: MsgAddLiquidity): Uint8Array {
    return MsgAddLiquidity.encode(message).finish();
  },
  toProtoMsg(message: MsgAddLiquidity): MsgAddLiquidityProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgAddLiquidity",
      value: MsgAddLiquidity.encode(message).finish()
    };
  }
};
function createBaseMsgAddLiquidityResponse(): MsgAddLiquidityResponse {
  return {};
}
export const MsgAddLiquidityResponse = {
  typeUrl: "/sifnode.clp.v1.MsgAddLiquidityResponse",
  encode(_: MsgAddLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddLiquidityResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddLiquidityResponse>): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    return message;
  },
  fromAmino(_: MsgAddLiquidityResponseAmino): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    return message;
  },
  toAmino(_: MsgAddLiquidityResponse): MsgAddLiquidityResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddLiquidityResponseAminoMsg): MsgAddLiquidityResponse {
    return MsgAddLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddLiquidityResponseProtoMsg): MsgAddLiquidityResponse {
    return MsgAddLiquidityResponse.decode(message.value);
  },
  toProto(message: MsgAddLiquidityResponse): Uint8Array {
    return MsgAddLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddLiquidityResponse): MsgAddLiquidityResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgAddLiquidityResponse",
      value: MsgAddLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseMsgModifyPmtpRates(): MsgModifyPmtpRates {
  return {
    signer: "",
    blockRate: "",
    runningRate: "",
    endPolicy: false
  };
}
export const MsgModifyPmtpRates = {
  typeUrl: "/sifnode.clp.v1.MsgModifyPmtpRates",
  encode(message: MsgModifyPmtpRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.blockRate !== "") {
      writer.uint32(18).string(message.blockRate);
    }
    if (message.runningRate !== "") {
      writer.uint32(26).string(message.runningRate);
    }
    if (message.endPolicy === true) {
      writer.uint32(32).bool(message.endPolicy);
    }
    return writer;
  },
  fromJSON(object: any): MsgModifyPmtpRates {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      blockRate: isSet(object.blockRate) ? String(object.blockRate) : "",
      runningRate: isSet(object.runningRate) ? String(object.runningRate) : "",
      endPolicy: isSet(object.endPolicy) ? Boolean(object.endPolicy) : false
    };
  },
  fromPartial(object: Partial<MsgModifyPmtpRates>): MsgModifyPmtpRates {
    const message = createBaseMsgModifyPmtpRates();
    message.signer = object.signer ?? "";
    message.blockRate = object.blockRate ?? "";
    message.runningRate = object.runningRate ?? "";
    message.endPolicy = object.endPolicy ?? false;
    return message;
  },
  fromAmino(object: MsgModifyPmtpRatesAmino): MsgModifyPmtpRates {
    const message = createBaseMsgModifyPmtpRates();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.block_rate !== undefined && object.block_rate !== null) {
      message.blockRate = object.block_rate;
    }
    if (object.running_rate !== undefined && object.running_rate !== null) {
      message.runningRate = object.running_rate;
    }
    if (object.end_policy !== undefined && object.end_policy !== null) {
      message.endPolicy = object.end_policy;
    }
    return message;
  },
  toAmino(message: MsgModifyPmtpRates): MsgModifyPmtpRatesAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.block_rate = message.blockRate === "" ? undefined : message.blockRate;
    obj.running_rate = message.runningRate === "" ? undefined : message.runningRate;
    obj.end_policy = message.endPolicy === false ? undefined : message.endPolicy;
    return obj;
  },
  fromAminoMsg(object: MsgModifyPmtpRatesAminoMsg): MsgModifyPmtpRates {
    return MsgModifyPmtpRates.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgModifyPmtpRatesProtoMsg): MsgModifyPmtpRates {
    return MsgModifyPmtpRates.decode(message.value);
  },
  toProto(message: MsgModifyPmtpRates): Uint8Array {
    return MsgModifyPmtpRates.encode(message).finish();
  },
  toProtoMsg(message: MsgModifyPmtpRates): MsgModifyPmtpRatesProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgModifyPmtpRates",
      value: MsgModifyPmtpRates.encode(message).finish()
    };
  }
};
function createBaseMsgModifyPmtpRatesResponse(): MsgModifyPmtpRatesResponse {
  return {};
}
export const MsgModifyPmtpRatesResponse = {
  typeUrl: "/sifnode.clp.v1.MsgModifyPmtpRatesResponse",
  encode(_: MsgModifyPmtpRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgModifyPmtpRatesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgModifyPmtpRatesResponse>): MsgModifyPmtpRatesResponse {
    const message = createBaseMsgModifyPmtpRatesResponse();
    return message;
  },
  fromAmino(_: MsgModifyPmtpRatesResponseAmino): MsgModifyPmtpRatesResponse {
    const message = createBaseMsgModifyPmtpRatesResponse();
    return message;
  },
  toAmino(_: MsgModifyPmtpRatesResponse): MsgModifyPmtpRatesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgModifyPmtpRatesResponseAminoMsg): MsgModifyPmtpRatesResponse {
    return MsgModifyPmtpRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgModifyPmtpRatesResponseProtoMsg): MsgModifyPmtpRatesResponse {
    return MsgModifyPmtpRatesResponse.decode(message.value);
  },
  toProto(message: MsgModifyPmtpRatesResponse): Uint8Array {
    return MsgModifyPmtpRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgModifyPmtpRatesResponse): MsgModifyPmtpRatesResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgModifyPmtpRatesResponse",
      value: MsgModifyPmtpRatesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePmtpParams(): MsgUpdatePmtpParams {
  return {
    signer: "",
    pmtpPeriodGovernanceRate: "",
    pmtpPeriodEpochLength: BigInt(0),
    pmtpPeriodStartBlock: BigInt(0),
    pmtpPeriodEndBlock: BigInt(0)
  };
}
export const MsgUpdatePmtpParams = {
  typeUrl: "/sifnode.clp.v1.MsgUpdatePmtpParams",
  encode(message: MsgUpdatePmtpParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.pmtpPeriodGovernanceRate !== "") {
      writer.uint32(18).string(message.pmtpPeriodGovernanceRate);
    }
    if (message.pmtpPeriodEpochLength !== BigInt(0)) {
      writer.uint32(24).int64(message.pmtpPeriodEpochLength);
    }
    if (message.pmtpPeriodStartBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.pmtpPeriodStartBlock);
    }
    if (message.pmtpPeriodEndBlock !== BigInt(0)) {
      writer.uint32(40).int64(message.pmtpPeriodEndBlock);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdatePmtpParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      pmtpPeriodGovernanceRate: isSet(object.pmtpPeriodGovernanceRate) ? String(object.pmtpPeriodGovernanceRate) : "",
      pmtpPeriodEpochLength: isSet(object.pmtpPeriodEpochLength) ? BigInt(object.pmtpPeriodEpochLength.toString()) : BigInt(0),
      pmtpPeriodStartBlock: isSet(object.pmtpPeriodStartBlock) ? BigInt(object.pmtpPeriodStartBlock.toString()) : BigInt(0),
      pmtpPeriodEndBlock: isSet(object.pmtpPeriodEndBlock) ? BigInt(object.pmtpPeriodEndBlock.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgUpdatePmtpParams>): MsgUpdatePmtpParams {
    const message = createBaseMsgUpdatePmtpParams();
    message.signer = object.signer ?? "";
    message.pmtpPeriodGovernanceRate = object.pmtpPeriodGovernanceRate ?? "";
    message.pmtpPeriodEpochLength = object.pmtpPeriodEpochLength !== undefined && object.pmtpPeriodEpochLength !== null ? BigInt(object.pmtpPeriodEpochLength.toString()) : BigInt(0);
    message.pmtpPeriodStartBlock = object.pmtpPeriodStartBlock !== undefined && object.pmtpPeriodStartBlock !== null ? BigInt(object.pmtpPeriodStartBlock.toString()) : BigInt(0);
    message.pmtpPeriodEndBlock = object.pmtpPeriodEndBlock !== undefined && object.pmtpPeriodEndBlock !== null ? BigInt(object.pmtpPeriodEndBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdatePmtpParamsAmino): MsgUpdatePmtpParams {
    const message = createBaseMsgUpdatePmtpParams();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
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
  toAmino(message: MsgUpdatePmtpParams): MsgUpdatePmtpParamsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.pmtp_period_governance_rate = message.pmtpPeriodGovernanceRate === "" ? undefined : message.pmtpPeriodGovernanceRate;
    obj.pmtp_period_epoch_length = message.pmtpPeriodEpochLength !== BigInt(0) ? message.pmtpPeriodEpochLength.toString() : undefined;
    obj.pmtp_period_start_block = message.pmtpPeriodStartBlock !== BigInt(0) ? message.pmtpPeriodStartBlock.toString() : undefined;
    obj.pmtp_period_end_block = message.pmtpPeriodEndBlock !== BigInt(0) ? message.pmtpPeriodEndBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePmtpParamsAminoMsg): MsgUpdatePmtpParams {
    return MsgUpdatePmtpParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePmtpParamsProtoMsg): MsgUpdatePmtpParams {
    return MsgUpdatePmtpParams.decode(message.value);
  },
  toProto(message: MsgUpdatePmtpParams): Uint8Array {
    return MsgUpdatePmtpParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePmtpParams): MsgUpdatePmtpParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUpdatePmtpParams",
      value: MsgUpdatePmtpParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePmtpParamsResponse(): MsgUpdatePmtpParamsResponse {
  return {};
}
export const MsgUpdatePmtpParamsResponse = {
  typeUrl: "/sifnode.clp.v1.MsgUpdatePmtpParamsResponse",
  encode(_: MsgUpdatePmtpParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdatePmtpParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdatePmtpParamsResponse>): MsgUpdatePmtpParamsResponse {
    const message = createBaseMsgUpdatePmtpParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePmtpParamsResponseAmino): MsgUpdatePmtpParamsResponse {
    const message = createBaseMsgUpdatePmtpParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdatePmtpParamsResponse): MsgUpdatePmtpParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePmtpParamsResponseAminoMsg): MsgUpdatePmtpParamsResponse {
    return MsgUpdatePmtpParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePmtpParamsResponseProtoMsg): MsgUpdatePmtpParamsResponse {
    return MsgUpdatePmtpParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePmtpParamsResponse): Uint8Array {
    return MsgUpdatePmtpParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePmtpParamsResponse): MsgUpdatePmtpParamsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUpdatePmtpParamsResponse",
      value: MsgUpdatePmtpParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSwap(): MsgSwap {
  return {
    signer: "",
    sentAsset: undefined,
    receivedAsset: undefined,
    sentAmount: "",
    minReceivingAmount: ""
  };
}
export const MsgSwap = {
  typeUrl: "/sifnode.clp.v1.MsgSwap",
  encode(message: MsgSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.sentAsset !== undefined) {
      Asset.encode(message.sentAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.receivedAsset !== undefined) {
      Asset.encode(message.receivedAsset, writer.uint32(26).fork()).ldelim();
    }
    if (message.sentAmount !== "") {
      writer.uint32(34).string(message.sentAmount);
    }
    if (message.minReceivingAmount !== "") {
      writer.uint32(42).string(message.minReceivingAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgSwap {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      sentAsset: isSet(object.sentAsset) ? Asset.fromJSON(object.sentAsset) : undefined,
      receivedAsset: isSet(object.receivedAsset) ? Asset.fromJSON(object.receivedAsset) : undefined,
      sentAmount: isSet(object.sentAmount) ? String(object.sentAmount) : "",
      minReceivingAmount: isSet(object.minReceivingAmount) ? String(object.minReceivingAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgSwap>): MsgSwap {
    const message = createBaseMsgSwap();
    message.signer = object.signer ?? "";
    message.sentAsset = object.sentAsset !== undefined && object.sentAsset !== null ? Asset.fromPartial(object.sentAsset) : undefined;
    message.receivedAsset = object.receivedAsset !== undefined && object.receivedAsset !== null ? Asset.fromPartial(object.receivedAsset) : undefined;
    message.sentAmount = object.sentAmount ?? "";
    message.minReceivingAmount = object.minReceivingAmount ?? "";
    return message;
  },
  fromAmino(object: MsgSwapAmino): MsgSwap {
    const message = createBaseMsgSwap();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.sent_asset !== undefined && object.sent_asset !== null) {
      message.sentAsset = Asset.fromAmino(object.sent_asset);
    }
    if (object.received_asset !== undefined && object.received_asset !== null) {
      message.receivedAsset = Asset.fromAmino(object.received_asset);
    }
    if (object.sent_amount !== undefined && object.sent_amount !== null) {
      message.sentAmount = object.sent_amount;
    }
    if (object.min_receiving_amount !== undefined && object.min_receiving_amount !== null) {
      message.minReceivingAmount = object.min_receiving_amount;
    }
    return message;
  },
  toAmino(message: MsgSwap): MsgSwapAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.sent_asset = message.sentAsset ? Asset.toAmino(message.sentAsset) : undefined;
    obj.received_asset = message.receivedAsset ? Asset.toAmino(message.receivedAsset) : undefined;
    obj.sent_amount = message.sentAmount === "" ? undefined : message.sentAmount;
    obj.min_receiving_amount = message.minReceivingAmount === "" ? undefined : message.minReceivingAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapAminoMsg): MsgSwap {
    return MsgSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapProtoMsg): MsgSwap {
    return MsgSwap.decode(message.value);
  },
  toProto(message: MsgSwap): Uint8Array {
    return MsgSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgSwap): MsgSwapProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgSwap",
      value: MsgSwap.encode(message).finish()
    };
  }
};
function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {};
}
export const MsgSwapResponse = {
  typeUrl: "/sifnode.clp.v1.MsgSwapResponse",
  encode(_: MsgSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSwapResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  },
  fromAmino(_: MsgSwapResponseAmino): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  },
  toAmino(_: MsgSwapResponse): MsgSwapResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSwapResponseAminoMsg): MsgSwapResponse {
    return MsgSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapResponseProtoMsg): MsgSwapResponse {
    return MsgSwapResponse.decode(message.value);
  },
  toProto(message: MsgSwapResponse): Uint8Array {
    return MsgSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapResponse): MsgSwapResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgSwapResponse",
      value: MsgSwapResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDecommissionPool(): MsgDecommissionPool {
  return {
    signer: "",
    symbol: ""
  };
}
export const MsgDecommissionPool = {
  typeUrl: "/sifnode.clp.v1.MsgDecommissionPool",
  encode(message: MsgDecommissionPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    return writer;
  },
  fromJSON(object: any): MsgDecommissionPool {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },
  fromPartial(object: Partial<MsgDecommissionPool>): MsgDecommissionPool {
    const message = createBaseMsgDecommissionPool();
    message.signer = object.signer ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  },
  fromAmino(object: MsgDecommissionPoolAmino): MsgDecommissionPool {
    const message = createBaseMsgDecommissionPool();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    return message;
  },
  toAmino(message: MsgDecommissionPool): MsgDecommissionPoolAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    return obj;
  },
  fromAminoMsg(object: MsgDecommissionPoolAminoMsg): MsgDecommissionPool {
    return MsgDecommissionPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDecommissionPoolProtoMsg): MsgDecommissionPool {
    return MsgDecommissionPool.decode(message.value);
  },
  toProto(message: MsgDecommissionPool): Uint8Array {
    return MsgDecommissionPool.encode(message).finish();
  },
  toProtoMsg(message: MsgDecommissionPool): MsgDecommissionPoolProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgDecommissionPool",
      value: MsgDecommissionPool.encode(message).finish()
    };
  }
};
function createBaseMsgDecommissionPoolResponse(): MsgDecommissionPoolResponse {
  return {};
}
export const MsgDecommissionPoolResponse = {
  typeUrl: "/sifnode.clp.v1.MsgDecommissionPoolResponse",
  encode(_: MsgDecommissionPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDecommissionPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDecommissionPoolResponse>): MsgDecommissionPoolResponse {
    const message = createBaseMsgDecommissionPoolResponse();
    return message;
  },
  fromAmino(_: MsgDecommissionPoolResponseAmino): MsgDecommissionPoolResponse {
    const message = createBaseMsgDecommissionPoolResponse();
    return message;
  },
  toAmino(_: MsgDecommissionPoolResponse): MsgDecommissionPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDecommissionPoolResponseAminoMsg): MsgDecommissionPoolResponse {
    return MsgDecommissionPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDecommissionPoolResponseProtoMsg): MsgDecommissionPoolResponse {
    return MsgDecommissionPoolResponse.decode(message.value);
  },
  toProto(message: MsgDecommissionPoolResponse): Uint8Array {
    return MsgDecommissionPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDecommissionPoolResponse): MsgDecommissionPoolResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgDecommissionPoolResponse",
      value: MsgDecommissionPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnlockLiquidityRequest(): MsgUnlockLiquidityRequest {
  return {
    signer: "",
    externalAsset: undefined,
    units: ""
  };
}
export const MsgUnlockLiquidityRequest = {
  typeUrl: "/sifnode.clp.v1.MsgUnlockLiquidityRequest",
  encode(message: MsgUnlockLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.units !== "") {
      writer.uint32(26).string(message.units);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnlockLiquidityRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      units: isSet(object.units) ? String(object.units) : ""
    };
  },
  fromPartial(object: Partial<MsgUnlockLiquidityRequest>): MsgUnlockLiquidityRequest {
    const message = createBaseMsgUnlockLiquidityRequest();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.units = object.units ?? "";
    return message;
  },
  fromAmino(object: MsgUnlockLiquidityRequestAmino): MsgUnlockLiquidityRequest {
    const message = createBaseMsgUnlockLiquidityRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.external_asset !== undefined && object.external_asset !== null) {
      message.externalAsset = Asset.fromAmino(object.external_asset);
    }
    if (object.units !== undefined && object.units !== null) {
      message.units = object.units;
    }
    return message;
  },
  toAmino(message: MsgUnlockLiquidityRequest): MsgUnlockLiquidityRequestAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.external_asset = message.externalAsset ? Asset.toAmino(message.externalAsset) : undefined;
    obj.units = message.units === "" ? undefined : message.units;
    return obj;
  },
  fromAminoMsg(object: MsgUnlockLiquidityRequestAminoMsg): MsgUnlockLiquidityRequest {
    return MsgUnlockLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlockLiquidityRequestProtoMsg): MsgUnlockLiquidityRequest {
    return MsgUnlockLiquidityRequest.decode(message.value);
  },
  toProto(message: MsgUnlockLiquidityRequest): Uint8Array {
    return MsgUnlockLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlockLiquidityRequest): MsgUnlockLiquidityRequestProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUnlockLiquidityRequest",
      value: MsgUnlockLiquidityRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUnlockLiquidityResponse(): MsgUnlockLiquidityResponse {
  return {};
}
export const MsgUnlockLiquidityResponse = {
  typeUrl: "/sifnode.clp.v1.MsgUnlockLiquidityResponse",
  encode(_: MsgUnlockLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnlockLiquidityResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnlockLiquidityResponse>): MsgUnlockLiquidityResponse {
    const message = createBaseMsgUnlockLiquidityResponse();
    return message;
  },
  fromAmino(_: MsgUnlockLiquidityResponseAmino): MsgUnlockLiquidityResponse {
    const message = createBaseMsgUnlockLiquidityResponse();
    return message;
  },
  toAmino(_: MsgUnlockLiquidityResponse): MsgUnlockLiquidityResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnlockLiquidityResponseAminoMsg): MsgUnlockLiquidityResponse {
    return MsgUnlockLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlockLiquidityResponseProtoMsg): MsgUnlockLiquidityResponse {
    return MsgUnlockLiquidityResponse.decode(message.value);
  },
  toProto(message: MsgUnlockLiquidityResponse): Uint8Array {
    return MsgUnlockLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlockLiquidityResponse): MsgUnlockLiquidityResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUnlockLiquidityResponse",
      value: MsgUnlockLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRewardsParamsRequest(): MsgUpdateRewardsParamsRequest {
  return {
    signer: "",
    liquidityRemovalLockPeriod: BigInt(0),
    liquidityRemovalCancelPeriod: BigInt(0),
    rewardsLockPeriod: BigInt(0),
    rewardsEpochIdentifier: "",
    rewardsDistribute: false
  };
}
export const MsgUpdateRewardsParamsRequest = {
  typeUrl: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest",
  encode(message: MsgUpdateRewardsParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.liquidityRemovalLockPeriod !== BigInt(0)) {
      writer.uint32(16).uint64(message.liquidityRemovalLockPeriod);
    }
    if (message.liquidityRemovalCancelPeriod !== BigInt(0)) {
      writer.uint32(24).uint64(message.liquidityRemovalCancelPeriod);
    }
    if (message.rewardsLockPeriod !== BigInt(0)) {
      writer.uint32(32).uint64(message.rewardsLockPeriod);
    }
    if (message.rewardsEpochIdentifier !== "") {
      writer.uint32(42).string(message.rewardsEpochIdentifier);
    }
    if (message.rewardsDistribute === true) {
      writer.uint32(48).bool(message.rewardsDistribute);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRewardsParamsRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      liquidityRemovalLockPeriod: isSet(object.liquidityRemovalLockPeriod) ? BigInt(object.liquidityRemovalLockPeriod.toString()) : BigInt(0),
      liquidityRemovalCancelPeriod: isSet(object.liquidityRemovalCancelPeriod) ? BigInt(object.liquidityRemovalCancelPeriod.toString()) : BigInt(0),
      rewardsLockPeriod: isSet(object.rewardsLockPeriod) ? BigInt(object.rewardsLockPeriod.toString()) : BigInt(0),
      rewardsEpochIdentifier: isSet(object.rewardsEpochIdentifier) ? String(object.rewardsEpochIdentifier) : "",
      rewardsDistribute: isSet(object.rewardsDistribute) ? Boolean(object.rewardsDistribute) : false
    };
  },
  fromPartial(object: Partial<MsgUpdateRewardsParamsRequest>): MsgUpdateRewardsParamsRequest {
    const message = createBaseMsgUpdateRewardsParamsRequest();
    message.signer = object.signer ?? "";
    message.liquidityRemovalLockPeriod = object.liquidityRemovalLockPeriod !== undefined && object.liquidityRemovalLockPeriod !== null ? BigInt(object.liquidityRemovalLockPeriod.toString()) : BigInt(0);
    message.liquidityRemovalCancelPeriod = object.liquidityRemovalCancelPeriod !== undefined && object.liquidityRemovalCancelPeriod !== null ? BigInt(object.liquidityRemovalCancelPeriod.toString()) : BigInt(0);
    message.rewardsLockPeriod = object.rewardsLockPeriod !== undefined && object.rewardsLockPeriod !== null ? BigInt(object.rewardsLockPeriod.toString()) : BigInt(0);
    message.rewardsEpochIdentifier = object.rewardsEpochIdentifier ?? "";
    message.rewardsDistribute = object.rewardsDistribute ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateRewardsParamsRequestAmino): MsgUpdateRewardsParamsRequest {
    const message = createBaseMsgUpdateRewardsParamsRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.liquidity_removal_lock_period !== undefined && object.liquidity_removal_lock_period !== null) {
      message.liquidityRemovalLockPeriod = BigInt(object.liquidity_removal_lock_period);
    }
    if (object.liquidity_removal_cancel_period !== undefined && object.liquidity_removal_cancel_period !== null) {
      message.liquidityRemovalCancelPeriod = BigInt(object.liquidity_removal_cancel_period);
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
  toAmino(message: MsgUpdateRewardsParamsRequest): MsgUpdateRewardsParamsRequestAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.liquidity_removal_lock_period = message.liquidityRemovalLockPeriod !== BigInt(0) ? message.liquidityRemovalLockPeriod.toString() : undefined;
    obj.liquidity_removal_cancel_period = message.liquidityRemovalCancelPeriod !== BigInt(0) ? message.liquidityRemovalCancelPeriod.toString() : undefined;
    obj.rewards_lock_period = message.rewardsLockPeriod !== BigInt(0) ? message.rewardsLockPeriod.toString() : undefined;
    obj.rewards_epoch_identifier = message.rewardsEpochIdentifier === "" ? undefined : message.rewardsEpochIdentifier;
    obj.rewards_distribute = message.rewardsDistribute === false ? undefined : message.rewardsDistribute;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRewardsParamsRequestAminoMsg): MsgUpdateRewardsParamsRequest {
    return MsgUpdateRewardsParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRewardsParamsRequestProtoMsg): MsgUpdateRewardsParamsRequest {
    return MsgUpdateRewardsParamsRequest.decode(message.value);
  },
  toProto(message: MsgUpdateRewardsParamsRequest): Uint8Array {
    return MsgUpdateRewardsParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRewardsParamsRequest): MsgUpdateRewardsParamsRequestProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest",
      value: MsgUpdateRewardsParamsRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRewardsParamsResponse(): MsgUpdateRewardsParamsResponse {
  return {};
}
export const MsgUpdateRewardsParamsResponse = {
  typeUrl: "/sifnode.clp.v1.MsgUpdateRewardsParamsResponse",
  encode(_: MsgUpdateRewardsParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateRewardsParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateRewardsParamsResponse>): MsgUpdateRewardsParamsResponse {
    const message = createBaseMsgUpdateRewardsParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRewardsParamsResponseAmino): MsgUpdateRewardsParamsResponse {
    const message = createBaseMsgUpdateRewardsParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateRewardsParamsResponse): MsgUpdateRewardsParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRewardsParamsResponseAminoMsg): MsgUpdateRewardsParamsResponse {
    return MsgUpdateRewardsParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRewardsParamsResponseProtoMsg): MsgUpdateRewardsParamsResponse {
    return MsgUpdateRewardsParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRewardsParamsResponse): Uint8Array {
    return MsgUpdateRewardsParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRewardsParamsResponse): MsgUpdateRewardsParamsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUpdateRewardsParamsResponse",
      value: MsgUpdateRewardsParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddRewardPeriodRequest(): MsgAddRewardPeriodRequest {
  return {
    signer: "",
    rewardPeriods: []
  };
}
export const MsgAddRewardPeriodRequest = {
  typeUrl: "/sifnode.clp.v1.MsgAddRewardPeriodRequest",
  encode(message: MsgAddRewardPeriodRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.rewardPeriods) {
      RewardPeriod.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddRewardPeriodRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      rewardPeriods: Array.isArray(object?.rewardPeriods) ? object.rewardPeriods.map((e: any) => RewardPeriod.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAddRewardPeriodRequest>): MsgAddRewardPeriodRequest {
    const message = createBaseMsgAddRewardPeriodRequest();
    message.signer = object.signer ?? "";
    message.rewardPeriods = object.rewardPeriods?.map(e => RewardPeriod.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddRewardPeriodRequestAmino): MsgAddRewardPeriodRequest {
    const message = createBaseMsgAddRewardPeriodRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.rewardPeriods = object.reward_periods?.map(e => RewardPeriod.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAddRewardPeriodRequest): MsgAddRewardPeriodRequestAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.rewardPeriods) {
      obj.reward_periods = message.rewardPeriods.map(e => e ? RewardPeriod.toAmino(e) : undefined);
    } else {
      obj.reward_periods = message.rewardPeriods;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddRewardPeriodRequestAminoMsg): MsgAddRewardPeriodRequest {
    return MsgAddRewardPeriodRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddRewardPeriodRequestProtoMsg): MsgAddRewardPeriodRequest {
    return MsgAddRewardPeriodRequest.decode(message.value);
  },
  toProto(message: MsgAddRewardPeriodRequest): Uint8Array {
    return MsgAddRewardPeriodRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgAddRewardPeriodRequest): MsgAddRewardPeriodRequestProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgAddRewardPeriodRequest",
      value: MsgAddRewardPeriodRequest.encode(message).finish()
    };
  }
};
function createBaseMsgAddRewardPeriodResponse(): MsgAddRewardPeriodResponse {
  return {};
}
export const MsgAddRewardPeriodResponse = {
  typeUrl: "/sifnode.clp.v1.MsgAddRewardPeriodResponse",
  encode(_: MsgAddRewardPeriodResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddRewardPeriodResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddRewardPeriodResponse>): MsgAddRewardPeriodResponse {
    const message = createBaseMsgAddRewardPeriodResponse();
    return message;
  },
  fromAmino(_: MsgAddRewardPeriodResponseAmino): MsgAddRewardPeriodResponse {
    const message = createBaseMsgAddRewardPeriodResponse();
    return message;
  },
  toAmino(_: MsgAddRewardPeriodResponse): MsgAddRewardPeriodResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddRewardPeriodResponseAminoMsg): MsgAddRewardPeriodResponse {
    return MsgAddRewardPeriodResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddRewardPeriodResponseProtoMsg): MsgAddRewardPeriodResponse {
    return MsgAddRewardPeriodResponse.decode(message.value);
  },
  toProto(message: MsgAddRewardPeriodResponse): Uint8Array {
    return MsgAddRewardPeriodResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddRewardPeriodResponse): MsgAddRewardPeriodResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgAddRewardPeriodResponse",
      value: MsgAddRewardPeriodResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetSymmetryThreshold(): MsgSetSymmetryThreshold {
  return {
    signer: "",
    threshold: "",
    ratio: ""
  };
}
export const MsgSetSymmetryThreshold = {
  typeUrl: "/sifnode.clp.v1.MsgSetSymmetryThreshold",
  encode(message: MsgSetSymmetryThreshold, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.threshold, 18).atomics);
    }
    if (message.ratio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.ratio, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetSymmetryThreshold {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      ratio: isSet(object.ratio) ? String(object.ratio) : ""
    };
  },
  fromPartial(object: Partial<MsgSetSymmetryThreshold>): MsgSetSymmetryThreshold {
    const message = createBaseMsgSetSymmetryThreshold();
    message.signer = object.signer ?? "";
    message.threshold = object.threshold ?? "";
    message.ratio = object.ratio ?? "";
    return message;
  },
  fromAmino(object: MsgSetSymmetryThresholdAmino): MsgSetSymmetryThreshold {
    const message = createBaseMsgSetSymmetryThreshold();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.ratio !== undefined && object.ratio !== null) {
      message.ratio = object.ratio;
    }
    return message;
  },
  toAmino(message: MsgSetSymmetryThreshold): MsgSetSymmetryThresholdAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.threshold = message.threshold === "" ? undefined : message.threshold;
    obj.ratio = message.ratio === "" ? undefined : message.ratio;
    return obj;
  },
  fromAminoMsg(object: MsgSetSymmetryThresholdAminoMsg): MsgSetSymmetryThreshold {
    return MsgSetSymmetryThreshold.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetSymmetryThresholdProtoMsg): MsgSetSymmetryThreshold {
    return MsgSetSymmetryThreshold.decode(message.value);
  },
  toProto(message: MsgSetSymmetryThreshold): Uint8Array {
    return MsgSetSymmetryThreshold.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSymmetryThreshold): MsgSetSymmetryThresholdProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgSetSymmetryThreshold",
      value: MsgSetSymmetryThreshold.encode(message).finish()
    };
  }
};
function createBaseMsgSetSymmetryThresholdResponse(): MsgSetSymmetryThresholdResponse {
  return {};
}
export const MsgSetSymmetryThresholdResponse = {
  typeUrl: "/sifnode.clp.v1.MsgSetSymmetryThresholdResponse",
  encode(_: MsgSetSymmetryThresholdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetSymmetryThresholdResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetSymmetryThresholdResponse>): MsgSetSymmetryThresholdResponse {
    const message = createBaseMsgSetSymmetryThresholdResponse();
    return message;
  },
  fromAmino(_: MsgSetSymmetryThresholdResponseAmino): MsgSetSymmetryThresholdResponse {
    const message = createBaseMsgSetSymmetryThresholdResponse();
    return message;
  },
  toAmino(_: MsgSetSymmetryThresholdResponse): MsgSetSymmetryThresholdResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetSymmetryThresholdResponseAminoMsg): MsgSetSymmetryThresholdResponse {
    return MsgSetSymmetryThresholdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetSymmetryThresholdResponseProtoMsg): MsgSetSymmetryThresholdResponse {
    return MsgSetSymmetryThresholdResponse.decode(message.value);
  },
  toProto(message: MsgSetSymmetryThresholdResponse): Uint8Array {
    return MsgSetSymmetryThresholdResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSymmetryThresholdResponse): MsgSetSymmetryThresholdResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgSetSymmetryThresholdResponse",
      value: MsgSetSymmetryThresholdResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUnlock(): MsgCancelUnlock {
  return {
    signer: "",
    externalAsset: undefined,
    units: ""
  };
}
export const MsgCancelUnlock = {
  typeUrl: "/sifnode.clp.v1.MsgCancelUnlock",
  encode(message: MsgCancelUnlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.units !== "") {
      writer.uint32(26).string(message.units);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelUnlock {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      units: isSet(object.units) ? String(object.units) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelUnlock>): MsgCancelUnlock {
    const message = createBaseMsgCancelUnlock();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.units = object.units ?? "";
    return message;
  },
  fromAmino(object: MsgCancelUnlockAmino): MsgCancelUnlock {
    const message = createBaseMsgCancelUnlock();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.external_asset !== undefined && object.external_asset !== null) {
      message.externalAsset = Asset.fromAmino(object.external_asset);
    }
    if (object.units !== undefined && object.units !== null) {
      message.units = object.units;
    }
    return message;
  },
  toAmino(message: MsgCancelUnlock): MsgCancelUnlockAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.external_asset = message.externalAsset ? Asset.toAmino(message.externalAsset) : undefined;
    obj.units = message.units === "" ? undefined : message.units;
    return obj;
  },
  fromAminoMsg(object: MsgCancelUnlockAminoMsg): MsgCancelUnlock {
    return MsgCancelUnlock.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelUnlockProtoMsg): MsgCancelUnlock {
    return MsgCancelUnlock.decode(message.value);
  },
  toProto(message: MsgCancelUnlock): Uint8Array {
    return MsgCancelUnlock.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUnlock): MsgCancelUnlockProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgCancelUnlock",
      value: MsgCancelUnlock.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUnlockResponse(): MsgCancelUnlockResponse {
  return {};
}
export const MsgCancelUnlockResponse = {
  typeUrl: "/sifnode.clp.v1.MsgCancelUnlockResponse",
  encode(_: MsgCancelUnlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelUnlockResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelUnlockResponse>): MsgCancelUnlockResponse {
    const message = createBaseMsgCancelUnlockResponse();
    return message;
  },
  fromAmino(_: MsgCancelUnlockResponseAmino): MsgCancelUnlockResponse {
    const message = createBaseMsgCancelUnlockResponse();
    return message;
  },
  toAmino(_: MsgCancelUnlockResponse): MsgCancelUnlockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelUnlockResponseAminoMsg): MsgCancelUnlockResponse {
    return MsgCancelUnlockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelUnlockResponseProtoMsg): MsgCancelUnlockResponse {
    return MsgCancelUnlockResponse.decode(message.value);
  },
  toProto(message: MsgCancelUnlockResponse): Uint8Array {
    return MsgCancelUnlockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUnlockResponse): MsgCancelUnlockResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgCancelUnlockResponse",
      value: MsgCancelUnlockResponse.encode(message).finish()
    };
  }
};
function createBaseRemovalRequest(): RemovalRequest {
  return {
    id: BigInt(0),
    value: "",
    msg: undefined
  };
}
export const RemovalRequest = {
  typeUrl: "/sifnode.clp.v1.RemovalRequest",
  encode(message: RemovalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).int64(message.id);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.msg !== undefined) {
      MsgRemoveLiquidity.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RemovalRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      value: isSet(object.value) ? String(object.value) : "",
      msg: isSet(object.msg) ? MsgRemoveLiquidity.fromJSON(object.msg) : undefined
    };
  },
  fromPartial(object: Partial<RemovalRequest>): RemovalRequest {
    const message = createBaseRemovalRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.value = object.value ?? "";
    message.msg = object.msg !== undefined && object.msg !== null ? MsgRemoveLiquidity.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: RemovalRequestAmino): RemovalRequest {
    const message = createBaseRemovalRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgRemoveLiquidity.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: RemovalRequest): RemovalRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.value = message.value === "" ? undefined : message.value;
    obj.msg = message.msg ? MsgRemoveLiquidity.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: RemovalRequestAminoMsg): RemovalRequest {
    return RemovalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RemovalRequestProtoMsg): RemovalRequest {
    return RemovalRequest.decode(message.value);
  },
  toProto(message: RemovalRequest): Uint8Array {
    return RemovalRequest.encode(message).finish();
  },
  toProtoMsg(message: RemovalRequest): RemovalRequestProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.RemovalRequest",
      value: RemovalRequest.encode(message).finish()
    };
  }
};
function createBaseMsgModifyLiquidityProtectionRates(): MsgModifyLiquidityProtectionRates {
  return {
    signer: "",
    currentRowanLiquidityThreshold: ""
  };
}
export const MsgModifyLiquidityProtectionRates = {
  typeUrl: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates",
  encode(message: MsgModifyLiquidityProtectionRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.currentRowanLiquidityThreshold !== "") {
      writer.uint32(18).string(message.currentRowanLiquidityThreshold);
    }
    return writer;
  },
  fromJSON(object: any): MsgModifyLiquidityProtectionRates {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      currentRowanLiquidityThreshold: isSet(object.currentRowanLiquidityThreshold) ? String(object.currentRowanLiquidityThreshold) : ""
    };
  },
  fromPartial(object: Partial<MsgModifyLiquidityProtectionRates>): MsgModifyLiquidityProtectionRates {
    const message = createBaseMsgModifyLiquidityProtectionRates();
    message.signer = object.signer ?? "";
    message.currentRowanLiquidityThreshold = object.currentRowanLiquidityThreshold ?? "";
    return message;
  },
  fromAmino(object: MsgModifyLiquidityProtectionRatesAmino): MsgModifyLiquidityProtectionRates {
    const message = createBaseMsgModifyLiquidityProtectionRates();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.current_rowan_liquidity_threshold !== undefined && object.current_rowan_liquidity_threshold !== null) {
      message.currentRowanLiquidityThreshold = object.current_rowan_liquidity_threshold;
    }
    return message;
  },
  toAmino(message: MsgModifyLiquidityProtectionRates): MsgModifyLiquidityProtectionRatesAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.current_rowan_liquidity_threshold = message.currentRowanLiquidityThreshold === "" ? undefined : message.currentRowanLiquidityThreshold;
    return obj;
  },
  fromAminoMsg(object: MsgModifyLiquidityProtectionRatesAminoMsg): MsgModifyLiquidityProtectionRates {
    return MsgModifyLiquidityProtectionRates.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgModifyLiquidityProtectionRatesProtoMsg): MsgModifyLiquidityProtectionRates {
    return MsgModifyLiquidityProtectionRates.decode(message.value);
  },
  toProto(message: MsgModifyLiquidityProtectionRates): Uint8Array {
    return MsgModifyLiquidityProtectionRates.encode(message).finish();
  },
  toProtoMsg(message: MsgModifyLiquidityProtectionRates): MsgModifyLiquidityProtectionRatesProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates",
      value: MsgModifyLiquidityProtectionRates.encode(message).finish()
    };
  }
};
function createBaseMsgModifyLiquidityProtectionRatesResponse(): MsgModifyLiquidityProtectionRatesResponse {
  return {};
}
export const MsgModifyLiquidityProtectionRatesResponse = {
  typeUrl: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRatesResponse",
  encode(_: MsgModifyLiquidityProtectionRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgModifyLiquidityProtectionRatesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgModifyLiquidityProtectionRatesResponse>): MsgModifyLiquidityProtectionRatesResponse {
    const message = createBaseMsgModifyLiquidityProtectionRatesResponse();
    return message;
  },
  fromAmino(_: MsgModifyLiquidityProtectionRatesResponseAmino): MsgModifyLiquidityProtectionRatesResponse {
    const message = createBaseMsgModifyLiquidityProtectionRatesResponse();
    return message;
  },
  toAmino(_: MsgModifyLiquidityProtectionRatesResponse): MsgModifyLiquidityProtectionRatesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgModifyLiquidityProtectionRatesResponseAminoMsg): MsgModifyLiquidityProtectionRatesResponse {
    return MsgModifyLiquidityProtectionRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgModifyLiquidityProtectionRatesResponseProtoMsg): MsgModifyLiquidityProtectionRatesResponse {
    return MsgModifyLiquidityProtectionRatesResponse.decode(message.value);
  },
  toProto(message: MsgModifyLiquidityProtectionRatesResponse): Uint8Array {
    return MsgModifyLiquidityProtectionRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgModifyLiquidityProtectionRatesResponse): MsgModifyLiquidityProtectionRatesResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRatesResponse",
      value: MsgModifyLiquidityProtectionRatesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateLiquidityProtectionParams(): MsgUpdateLiquidityProtectionParams {
  return {
    signer: "",
    maxRowanLiquidityThreshold: "",
    maxRowanLiquidityThresholdAsset: "",
    epochLength: BigInt(0),
    isActive: false
  };
}
export const MsgUpdateLiquidityProtectionParams = {
  typeUrl: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams",
  encode(message: MsgUpdateLiquidityProtectionParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.maxRowanLiquidityThreshold !== "") {
      writer.uint32(18).string(message.maxRowanLiquidityThreshold);
    }
    if (message.maxRowanLiquidityThresholdAsset !== "") {
      writer.uint32(34).string(message.maxRowanLiquidityThresholdAsset);
    }
    if (message.epochLength !== BigInt(0)) {
      writer.uint32(24).uint64(message.epochLength);
    }
    if (message.isActive === true) {
      writer.uint32(40).bool(message.isActive);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateLiquidityProtectionParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      maxRowanLiquidityThreshold: isSet(object.maxRowanLiquidityThreshold) ? String(object.maxRowanLiquidityThreshold) : "",
      maxRowanLiquidityThresholdAsset: isSet(object.maxRowanLiquidityThresholdAsset) ? String(object.maxRowanLiquidityThresholdAsset) : "",
      epochLength: isSet(object.epochLength) ? BigInt(object.epochLength.toString()) : BigInt(0),
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false
    };
  },
  fromPartial(object: Partial<MsgUpdateLiquidityProtectionParams>): MsgUpdateLiquidityProtectionParams {
    const message = createBaseMsgUpdateLiquidityProtectionParams();
    message.signer = object.signer ?? "";
    message.maxRowanLiquidityThreshold = object.maxRowanLiquidityThreshold ?? "";
    message.maxRowanLiquidityThresholdAsset = object.maxRowanLiquidityThresholdAsset ?? "";
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    message.isActive = object.isActive ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateLiquidityProtectionParamsAmino): MsgUpdateLiquidityProtectionParams {
    const message = createBaseMsgUpdateLiquidityProtectionParams();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
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
  toAmino(message: MsgUpdateLiquidityProtectionParams): MsgUpdateLiquidityProtectionParamsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.max_rowan_liquidity_threshold = message.maxRowanLiquidityThreshold === "" ? undefined : message.maxRowanLiquidityThreshold;
    obj.max_rowan_liquidity_threshold_asset = message.maxRowanLiquidityThresholdAsset === "" ? undefined : message.maxRowanLiquidityThresholdAsset;
    obj.epoch_length = message.epochLength !== BigInt(0) ? message.epochLength.toString() : undefined;
    obj.is_active = message.isActive === false ? undefined : message.isActive;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateLiquidityProtectionParamsAminoMsg): MsgUpdateLiquidityProtectionParams {
    return MsgUpdateLiquidityProtectionParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateLiquidityProtectionParamsProtoMsg): MsgUpdateLiquidityProtectionParams {
    return MsgUpdateLiquidityProtectionParams.decode(message.value);
  },
  toProto(message: MsgUpdateLiquidityProtectionParams): Uint8Array {
    return MsgUpdateLiquidityProtectionParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateLiquidityProtectionParams): MsgUpdateLiquidityProtectionParamsProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams",
      value: MsgUpdateLiquidityProtectionParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateLiquidityProtectionParamsResponse(): MsgUpdateLiquidityProtectionParamsResponse {
  return {};
}
export const MsgUpdateLiquidityProtectionParamsResponse = {
  typeUrl: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParamsResponse",
  encode(_: MsgUpdateLiquidityProtectionParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateLiquidityProtectionParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateLiquidityProtectionParamsResponse>): MsgUpdateLiquidityProtectionParamsResponse {
    const message = createBaseMsgUpdateLiquidityProtectionParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateLiquidityProtectionParamsResponseAmino): MsgUpdateLiquidityProtectionParamsResponse {
    const message = createBaseMsgUpdateLiquidityProtectionParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateLiquidityProtectionParamsResponse): MsgUpdateLiquidityProtectionParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateLiquidityProtectionParamsResponseAminoMsg): MsgUpdateLiquidityProtectionParamsResponse {
    return MsgUpdateLiquidityProtectionParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateLiquidityProtectionParamsResponseProtoMsg): MsgUpdateLiquidityProtectionParamsResponse {
    return MsgUpdateLiquidityProtectionParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateLiquidityProtectionParamsResponse): Uint8Array {
    return MsgUpdateLiquidityProtectionParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateLiquidityProtectionParamsResponse): MsgUpdateLiquidityProtectionParamsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParamsResponse",
      value: MsgUpdateLiquidityProtectionParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddProviderDistributionPeriodRequest(): MsgAddProviderDistributionPeriodRequest {
  return {
    signer: "",
    distributionPeriods: []
  };
}
export const MsgAddProviderDistributionPeriodRequest = {
  typeUrl: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest",
  encode(message: MsgAddProviderDistributionPeriodRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.distributionPeriods) {
      ProviderDistributionPeriod.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddProviderDistributionPeriodRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      distributionPeriods: Array.isArray(object?.distributionPeriods) ? object.distributionPeriods.map((e: any) => ProviderDistributionPeriod.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAddProviderDistributionPeriodRequest>): MsgAddProviderDistributionPeriodRequest {
    const message = createBaseMsgAddProviderDistributionPeriodRequest();
    message.signer = object.signer ?? "";
    message.distributionPeriods = object.distributionPeriods?.map(e => ProviderDistributionPeriod.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddProviderDistributionPeriodRequestAmino): MsgAddProviderDistributionPeriodRequest {
    const message = createBaseMsgAddProviderDistributionPeriodRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.distributionPeriods = object.distribution_periods?.map(e => ProviderDistributionPeriod.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAddProviderDistributionPeriodRequest): MsgAddProviderDistributionPeriodRequestAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.distributionPeriods) {
      obj.distribution_periods = message.distributionPeriods.map(e => e ? ProviderDistributionPeriod.toAmino(e) : undefined);
    } else {
      obj.distribution_periods = message.distributionPeriods;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddProviderDistributionPeriodRequestAminoMsg): MsgAddProviderDistributionPeriodRequest {
    return MsgAddProviderDistributionPeriodRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddProviderDistributionPeriodRequestProtoMsg): MsgAddProviderDistributionPeriodRequest {
    return MsgAddProviderDistributionPeriodRequest.decode(message.value);
  },
  toProto(message: MsgAddProviderDistributionPeriodRequest): Uint8Array {
    return MsgAddProviderDistributionPeriodRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgAddProviderDistributionPeriodRequest): MsgAddProviderDistributionPeriodRequestProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest",
      value: MsgAddProviderDistributionPeriodRequest.encode(message).finish()
    };
  }
};
function createBaseMsgAddProviderDistributionPeriodResponse(): MsgAddProviderDistributionPeriodResponse {
  return {};
}
export const MsgAddProviderDistributionPeriodResponse = {
  typeUrl: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodResponse",
  encode(_: MsgAddProviderDistributionPeriodResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddProviderDistributionPeriodResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddProviderDistributionPeriodResponse>): MsgAddProviderDistributionPeriodResponse {
    const message = createBaseMsgAddProviderDistributionPeriodResponse();
    return message;
  },
  fromAmino(_: MsgAddProviderDistributionPeriodResponseAmino): MsgAddProviderDistributionPeriodResponse {
    const message = createBaseMsgAddProviderDistributionPeriodResponse();
    return message;
  },
  toAmino(_: MsgAddProviderDistributionPeriodResponse): MsgAddProviderDistributionPeriodResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddProviderDistributionPeriodResponseAminoMsg): MsgAddProviderDistributionPeriodResponse {
    return MsgAddProviderDistributionPeriodResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddProviderDistributionPeriodResponseProtoMsg): MsgAddProviderDistributionPeriodResponse {
    return MsgAddProviderDistributionPeriodResponse.decode(message.value);
  },
  toProto(message: MsgAddProviderDistributionPeriodResponse): Uint8Array {
    return MsgAddProviderDistributionPeriodResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddProviderDistributionPeriodResponse): MsgAddProviderDistributionPeriodResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodResponse",
      value: MsgAddProviderDistributionPeriodResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSwapFeeParamsRequest(): MsgUpdateSwapFeeParamsRequest {
  return {
    signer: "",
    defaultSwapFeeRate: "",
    tokenParams: []
  };
}
export const MsgUpdateSwapFeeParamsRequest = {
  typeUrl: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest",
  encode(message: MsgUpdateSwapFeeParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.defaultSwapFeeRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.defaultSwapFeeRate, 18).atomics);
    }
    for (const v of message.tokenParams) {
      SwapFeeTokenParams.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateSwapFeeParamsRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      defaultSwapFeeRate: isSet(object.defaultSwapFeeRate) ? String(object.defaultSwapFeeRate) : "",
      tokenParams: Array.isArray(object?.tokenParams) ? object.tokenParams.map((e: any) => SwapFeeTokenParams.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgUpdateSwapFeeParamsRequest>): MsgUpdateSwapFeeParamsRequest {
    const message = createBaseMsgUpdateSwapFeeParamsRequest();
    message.signer = object.signer ?? "";
    message.defaultSwapFeeRate = object.defaultSwapFeeRate ?? "";
    message.tokenParams = object.tokenParams?.map(e => SwapFeeTokenParams.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateSwapFeeParamsRequestAmino): MsgUpdateSwapFeeParamsRequest {
    const message = createBaseMsgUpdateSwapFeeParamsRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.default_swap_fee_rate !== undefined && object.default_swap_fee_rate !== null) {
      message.defaultSwapFeeRate = object.default_swap_fee_rate;
    }
    message.tokenParams = object.token_params?.map(e => SwapFeeTokenParams.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateSwapFeeParamsRequest): MsgUpdateSwapFeeParamsRequestAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.default_swap_fee_rate = message.defaultSwapFeeRate === "" ? undefined : message.defaultSwapFeeRate;
    if (message.tokenParams) {
      obj.token_params = message.tokenParams.map(e => e ? SwapFeeTokenParams.toAmino(e) : undefined);
    } else {
      obj.token_params = message.tokenParams;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSwapFeeParamsRequestAminoMsg): MsgUpdateSwapFeeParamsRequest {
    return MsgUpdateSwapFeeParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSwapFeeParamsRequestProtoMsg): MsgUpdateSwapFeeParamsRequest {
    return MsgUpdateSwapFeeParamsRequest.decode(message.value);
  },
  toProto(message: MsgUpdateSwapFeeParamsRequest): Uint8Array {
    return MsgUpdateSwapFeeParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSwapFeeParamsRequest): MsgUpdateSwapFeeParamsRequestProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest",
      value: MsgUpdateSwapFeeParamsRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSwapFeeParamsResponse(): MsgUpdateSwapFeeParamsResponse {
  return {};
}
export const MsgUpdateSwapFeeParamsResponse = {
  typeUrl: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsResponse",
  encode(_: MsgUpdateSwapFeeParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateSwapFeeParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateSwapFeeParamsResponse>): MsgUpdateSwapFeeParamsResponse {
    const message = createBaseMsgUpdateSwapFeeParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateSwapFeeParamsResponseAmino): MsgUpdateSwapFeeParamsResponse {
    const message = createBaseMsgUpdateSwapFeeParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateSwapFeeParamsResponse): MsgUpdateSwapFeeParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSwapFeeParamsResponseAminoMsg): MsgUpdateSwapFeeParamsResponse {
    return MsgUpdateSwapFeeParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSwapFeeParamsResponseProtoMsg): MsgUpdateSwapFeeParamsResponse {
    return MsgUpdateSwapFeeParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateSwapFeeParamsResponse): Uint8Array {
    return MsgUpdateSwapFeeParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSwapFeeParamsResponse): MsgUpdateSwapFeeParamsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsResponse",
      value: MsgUpdateSwapFeeParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddLiquidityToRewardsBucketRequest(): MsgAddLiquidityToRewardsBucketRequest {
  return {
    signer: "",
    amount: []
  };
}
export const MsgAddLiquidityToRewardsBucketRequest = {
  typeUrl: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest",
  encode(message: MsgAddLiquidityToRewardsBucketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddLiquidityToRewardsBucketRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAddLiquidityToRewardsBucketRequest>): MsgAddLiquidityToRewardsBucketRequest {
    const message = createBaseMsgAddLiquidityToRewardsBucketRequest();
    message.signer = object.signer ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddLiquidityToRewardsBucketRequestAmino): MsgAddLiquidityToRewardsBucketRequest {
    const message = createBaseMsgAddLiquidityToRewardsBucketRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAddLiquidityToRewardsBucketRequest): MsgAddLiquidityToRewardsBucketRequestAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddLiquidityToRewardsBucketRequestAminoMsg): MsgAddLiquidityToRewardsBucketRequest {
    return MsgAddLiquidityToRewardsBucketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddLiquidityToRewardsBucketRequestProtoMsg): MsgAddLiquidityToRewardsBucketRequest {
    return MsgAddLiquidityToRewardsBucketRequest.decode(message.value);
  },
  toProto(message: MsgAddLiquidityToRewardsBucketRequest): Uint8Array {
    return MsgAddLiquidityToRewardsBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgAddLiquidityToRewardsBucketRequest): MsgAddLiquidityToRewardsBucketRequestProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest",
      value: MsgAddLiquidityToRewardsBucketRequest.encode(message).finish()
    };
  }
};
function createBaseMsgAddLiquidityToRewardsBucketResponse(): MsgAddLiquidityToRewardsBucketResponse {
  return {};
}
export const MsgAddLiquidityToRewardsBucketResponse = {
  typeUrl: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketResponse",
  encode(_: MsgAddLiquidityToRewardsBucketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddLiquidityToRewardsBucketResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddLiquidityToRewardsBucketResponse>): MsgAddLiquidityToRewardsBucketResponse {
    const message = createBaseMsgAddLiquidityToRewardsBucketResponse();
    return message;
  },
  fromAmino(_: MsgAddLiquidityToRewardsBucketResponseAmino): MsgAddLiquidityToRewardsBucketResponse {
    const message = createBaseMsgAddLiquidityToRewardsBucketResponse();
    return message;
  },
  toAmino(_: MsgAddLiquidityToRewardsBucketResponse): MsgAddLiquidityToRewardsBucketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddLiquidityToRewardsBucketResponseAminoMsg): MsgAddLiquidityToRewardsBucketResponse {
    return MsgAddLiquidityToRewardsBucketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddLiquidityToRewardsBucketResponseProtoMsg): MsgAddLiquidityToRewardsBucketResponse {
    return MsgAddLiquidityToRewardsBucketResponse.decode(message.value);
  },
  toProto(message: MsgAddLiquidityToRewardsBucketResponse): Uint8Array {
    return MsgAddLiquidityToRewardsBucketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddLiquidityToRewardsBucketResponse): MsgAddLiquidityToRewardsBucketResponseProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketResponse",
      value: MsgAddLiquidityToRewardsBucketResponse.encode(message).finish()
    };
  }
};