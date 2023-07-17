import { Asset, AssetSDKType } from "./types";
import { RewardPeriod, RewardPeriodSDKType, ProviderDistributionPeriod, ProviderDistributionPeriodSDKType, SwapFeeTokenParams, SwapFeeTokenParamsSDKType } from "./params";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgUpdateStakingRewardParams {
    signer: string;
    minter: string;
    params: string;
}
export interface MsgUpdateStakingRewardParamsSDKType {
    signer: string;
    minter: string;
    params: string;
}
export interface MsgUpdateStakingRewardParamsResponse {
}
export interface MsgUpdateStakingRewardParamsResponseSDKType {
}
export interface MsgRemoveLiquidity {
    signer: string;
    externalAsset?: Asset;
    wBasisPoints: string;
    asymmetry: string;
}
export interface MsgRemoveLiquiditySDKType {
    signer: string;
    external_asset?: AssetSDKType;
    w_basis_points: string;
    asymmetry: string;
}
export interface MsgRemoveLiquidityResponse {
}
export interface MsgRemoveLiquidityResponseSDKType {
}
export interface MsgRemoveLiquidityUnits {
    signer: string;
    externalAsset?: Asset;
    withdrawUnits: string;
}
export interface MsgRemoveLiquidityUnitsSDKType {
    signer: string;
    external_asset?: AssetSDKType;
    withdraw_units: string;
}
export interface MsgRemoveLiquidityUnitsResponse {
}
export interface MsgRemoveLiquidityUnitsResponseSDKType {
}
export interface MsgCreatePool {
    signer: string;
    externalAsset?: Asset;
    nativeAssetAmount: string;
    externalAssetAmount: string;
}
export interface MsgCreatePoolSDKType {
    signer: string;
    external_asset?: AssetSDKType;
    native_asset_amount: string;
    external_asset_amount: string;
}
export interface MsgCreatePoolResponse {
}
export interface MsgCreatePoolResponseSDKType {
}
export interface MsgAddLiquidity {
    signer: string;
    externalAsset?: Asset;
    nativeAssetAmount: string;
    externalAssetAmount: string;
}
export interface MsgAddLiquiditySDKType {
    signer: string;
    external_asset?: AssetSDKType;
    native_asset_amount: string;
    external_asset_amount: string;
}
export interface MsgAddLiquidityResponse {
}
export interface MsgAddLiquidityResponseSDKType {
}
export interface MsgModifyPmtpRates {
    signer: string;
    blockRate: string;
    runningRate: string;
    endPolicy: boolean;
}
export interface MsgModifyPmtpRatesSDKType {
    signer: string;
    block_rate: string;
    running_rate: string;
    end_policy: boolean;
}
export interface MsgModifyPmtpRatesResponse {
}
export interface MsgModifyPmtpRatesResponseSDKType {
}
export interface MsgUpdatePmtpParams {
    signer: string;
    pmtpPeriodGovernanceRate: string;
    pmtpPeriodEpochLength: Long;
    pmtpPeriodStartBlock: Long;
    pmtpPeriodEndBlock: Long;
}
export interface MsgUpdatePmtpParamsSDKType {
    signer: string;
    pmtp_period_governance_rate: string;
    pmtp_period_epoch_length: Long;
    pmtp_period_start_block: Long;
    pmtp_period_end_block: Long;
}
export interface MsgUpdatePmtpParamsResponse {
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
export interface MsgSwapSDKType {
    signer: string;
    sent_asset?: AssetSDKType;
    received_asset?: AssetSDKType;
    sent_amount: string;
    min_receiving_amount: string;
}
export interface MsgSwapResponse {
}
export interface MsgSwapResponseSDKType {
}
export interface MsgDecommissionPool {
    signer: string;
    symbol: string;
}
export interface MsgDecommissionPoolSDKType {
    signer: string;
    symbol: string;
}
export interface MsgDecommissionPoolResponse {
}
export interface MsgDecommissionPoolResponseSDKType {
}
export interface MsgUnlockLiquidityRequest {
    signer: string;
    externalAsset?: Asset;
    units: string;
}
export interface MsgUnlockLiquidityRequestSDKType {
    signer: string;
    external_asset?: AssetSDKType;
    units: string;
}
export interface MsgUnlockLiquidityResponse {
}
export interface MsgUnlockLiquidityResponseSDKType {
}
export interface MsgUpdateRewardsParamsRequest {
    signer: string;
    /** in blocks */
    liquidityRemovalLockPeriod: Long;
    /** in blocks */
    liquidityRemovalCancelPeriod: Long;
}
export interface MsgUpdateRewardsParamsRequestSDKType {
    signer: string;
    liquidity_removal_lock_period: Long;
    liquidity_removal_cancel_period: Long;
}
export interface MsgUpdateRewardsParamsResponse {
}
export interface MsgUpdateRewardsParamsResponseSDKType {
}
export interface MsgAddRewardPeriodRequest {
    signer: string;
    rewardPeriods: RewardPeriod[];
}
export interface MsgAddRewardPeriodRequestSDKType {
    signer: string;
    reward_periods: RewardPeriodSDKType[];
}
export interface MsgAddRewardPeriodResponse {
}
export interface MsgAddRewardPeriodResponseSDKType {
}
export interface MsgSetSymmetryThreshold {
    signer: string;
    threshold: string;
    ratio: string;
}
export interface MsgSetSymmetryThresholdSDKType {
    signer: string;
    threshold: string;
    ratio: string;
}
export interface MsgSetSymmetryThresholdResponse {
}
export interface MsgSetSymmetryThresholdResponseSDKType {
}
export interface MsgCancelUnlock {
    signer: string;
    externalAsset?: Asset;
    units: string;
}
export interface MsgCancelUnlockSDKType {
    signer: string;
    external_asset?: AssetSDKType;
    units: string;
}
export interface MsgCancelUnlockResponse {
}
export interface MsgCancelUnlockResponseSDKType {
}
export interface RemovalRequest {
    id: Long;
    value: string;
    msg?: MsgRemoveLiquidity;
}
export interface RemovalRequestSDKType {
    id: Long;
    value: string;
    msg?: MsgRemoveLiquiditySDKType;
}
export interface MsgModifyLiquidityProtectionRates {
    signer: string;
    currentRowanLiquidityThreshold: string;
}
export interface MsgModifyLiquidityProtectionRatesSDKType {
    signer: string;
    current_rowan_liquidity_threshold: string;
}
export interface MsgModifyLiquidityProtectionRatesResponse {
}
export interface MsgModifyLiquidityProtectionRatesResponseSDKType {
}
export interface MsgUpdateLiquidityProtectionParams {
    signer: string;
    maxRowanLiquidityThreshold: string;
    maxRowanLiquidityThresholdAsset: string;
    epochLength: Long;
    isActive: boolean;
}
export interface MsgUpdateLiquidityProtectionParamsSDKType {
    signer: string;
    max_rowan_liquidity_threshold: string;
    max_rowan_liquidity_threshold_asset: string;
    epoch_length: Long;
    is_active: boolean;
}
export interface MsgUpdateLiquidityProtectionParamsResponse {
}
export interface MsgUpdateLiquidityProtectionParamsResponseSDKType {
}
export interface MsgAddProviderDistributionPeriodRequest {
    signer: string;
    distributionPeriods: ProviderDistributionPeriod[];
}
export interface MsgAddProviderDistributionPeriodRequestSDKType {
    signer: string;
    distribution_periods: ProviderDistributionPeriodSDKType[];
}
export interface MsgAddProviderDistributionPeriodResponse {
}
export interface MsgAddProviderDistributionPeriodResponseSDKType {
}
export interface MsgUpdateSwapFeeParamsRequest {
    signer: string;
    defaultSwapFeeRate: string;
    tokenParams: SwapFeeTokenParams[];
}
export interface MsgUpdateSwapFeeParamsRequestSDKType {
    signer: string;
    default_swap_fee_rate: string;
    token_params: SwapFeeTokenParamsSDKType[];
}
export interface MsgUpdateSwapFeeParamsResponse {
}
export interface MsgUpdateSwapFeeParamsResponseSDKType {
}
export declare const MsgUpdateStakingRewardParams: {
    encode(message: MsgUpdateStakingRewardParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateStakingRewardParams;
    fromPartial(object: Partial<MsgUpdateStakingRewardParams>): MsgUpdateStakingRewardParams;
};
export declare const MsgUpdateStakingRewardParamsResponse: {
    encode(_: MsgUpdateStakingRewardParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateStakingRewardParamsResponse;
    fromPartial(_: Partial<MsgUpdateStakingRewardParamsResponse>): MsgUpdateStakingRewardParamsResponse;
};
export declare const MsgRemoveLiquidity: {
    encode(message: MsgRemoveLiquidity, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRemoveLiquidity;
    fromPartial(object: Partial<MsgRemoveLiquidity>): MsgRemoveLiquidity;
};
export declare const MsgRemoveLiquidityResponse: {
    encode(_: MsgRemoveLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRemoveLiquidityResponse;
    fromPartial(_: Partial<MsgRemoveLiquidityResponse>): MsgRemoveLiquidityResponse;
};
export declare const MsgRemoveLiquidityUnits: {
    encode(message: MsgRemoveLiquidityUnits, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRemoveLiquidityUnits;
    fromPartial(object: Partial<MsgRemoveLiquidityUnits>): MsgRemoveLiquidityUnits;
};
export declare const MsgRemoveLiquidityUnitsResponse: {
    encode(_: MsgRemoveLiquidityUnitsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRemoveLiquidityUnitsResponse;
    fromPartial(_: Partial<MsgRemoveLiquidityUnitsResponse>): MsgRemoveLiquidityUnitsResponse;
};
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreatePool;
    fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
    encode(_: MsgCreatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreatePoolResponse;
    fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
};
export declare const MsgAddLiquidity: {
    encode(message: MsgAddLiquidity, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddLiquidity;
    fromPartial(object: Partial<MsgAddLiquidity>): MsgAddLiquidity;
};
export declare const MsgAddLiquidityResponse: {
    encode(_: MsgAddLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAddLiquidityResponse;
    fromPartial(_: Partial<MsgAddLiquidityResponse>): MsgAddLiquidityResponse;
};
export declare const MsgModifyPmtpRates: {
    encode(message: MsgModifyPmtpRates, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgModifyPmtpRates;
    fromPartial(object: Partial<MsgModifyPmtpRates>): MsgModifyPmtpRates;
};
export declare const MsgModifyPmtpRatesResponse: {
    encode(_: MsgModifyPmtpRatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgModifyPmtpRatesResponse;
    fromPartial(_: Partial<MsgModifyPmtpRatesResponse>): MsgModifyPmtpRatesResponse;
};
export declare const MsgUpdatePmtpParams: {
    encode(message: MsgUpdatePmtpParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdatePmtpParams;
    fromPartial(object: Partial<MsgUpdatePmtpParams>): MsgUpdatePmtpParams;
};
export declare const MsgUpdatePmtpParamsResponse: {
    encode(_: MsgUpdatePmtpParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdatePmtpParamsResponse;
    fromPartial(_: Partial<MsgUpdatePmtpParamsResponse>): MsgUpdatePmtpParamsResponse;
};
export declare const MsgSwap: {
    encode(message: MsgSwap, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSwap;
    fromPartial(object: Partial<MsgSwap>): MsgSwap;
};
export declare const MsgSwapResponse: {
    encode(_: MsgSwapResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSwapResponse;
    fromPartial(_: Partial<MsgSwapResponse>): MsgSwapResponse;
};
export declare const MsgDecommissionPool: {
    encode(message: MsgDecommissionPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDecommissionPool;
    fromPartial(object: Partial<MsgDecommissionPool>): MsgDecommissionPool;
};
export declare const MsgDecommissionPoolResponse: {
    encode(_: MsgDecommissionPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDecommissionPoolResponse;
    fromPartial(_: Partial<MsgDecommissionPoolResponse>): MsgDecommissionPoolResponse;
};
export declare const MsgUnlockLiquidityRequest: {
    encode(message: MsgUnlockLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUnlockLiquidityRequest;
    fromPartial(object: Partial<MsgUnlockLiquidityRequest>): MsgUnlockLiquidityRequest;
};
export declare const MsgUnlockLiquidityResponse: {
    encode(_: MsgUnlockLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUnlockLiquidityResponse;
    fromPartial(_: Partial<MsgUnlockLiquidityResponse>): MsgUnlockLiquidityResponse;
};
export declare const MsgUpdateRewardsParamsRequest: {
    encode(message: MsgUpdateRewardsParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateRewardsParamsRequest;
    fromPartial(object: Partial<MsgUpdateRewardsParamsRequest>): MsgUpdateRewardsParamsRequest;
};
export declare const MsgUpdateRewardsParamsResponse: {
    encode(_: MsgUpdateRewardsParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateRewardsParamsResponse;
    fromPartial(_: Partial<MsgUpdateRewardsParamsResponse>): MsgUpdateRewardsParamsResponse;
};
export declare const MsgAddRewardPeriodRequest: {
    encode(message: MsgAddRewardPeriodRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddRewardPeriodRequest;
    fromPartial(object: Partial<MsgAddRewardPeriodRequest>): MsgAddRewardPeriodRequest;
};
export declare const MsgAddRewardPeriodResponse: {
    encode(_: MsgAddRewardPeriodResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAddRewardPeriodResponse;
    fromPartial(_: Partial<MsgAddRewardPeriodResponse>): MsgAddRewardPeriodResponse;
};
export declare const MsgSetSymmetryThreshold: {
    encode(message: MsgSetSymmetryThreshold, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetSymmetryThreshold;
    fromPartial(object: Partial<MsgSetSymmetryThreshold>): MsgSetSymmetryThreshold;
};
export declare const MsgSetSymmetryThresholdResponse: {
    encode(_: MsgSetSymmetryThresholdResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetSymmetryThresholdResponse;
    fromPartial(_: Partial<MsgSetSymmetryThresholdResponse>): MsgSetSymmetryThresholdResponse;
};
export declare const MsgCancelUnlock: {
    encode(message: MsgCancelUnlock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCancelUnlock;
    fromPartial(object: Partial<MsgCancelUnlock>): MsgCancelUnlock;
};
export declare const MsgCancelUnlockResponse: {
    encode(_: MsgCancelUnlockResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCancelUnlockResponse;
    fromPartial(_: Partial<MsgCancelUnlockResponse>): MsgCancelUnlockResponse;
};
export declare const RemovalRequest: {
    encode(message: RemovalRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RemovalRequest;
    fromPartial(object: Partial<RemovalRequest>): RemovalRequest;
};
export declare const MsgModifyLiquidityProtectionRates: {
    encode(message: MsgModifyLiquidityProtectionRates, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgModifyLiquidityProtectionRates;
    fromPartial(object: Partial<MsgModifyLiquidityProtectionRates>): MsgModifyLiquidityProtectionRates;
};
export declare const MsgModifyLiquidityProtectionRatesResponse: {
    encode(_: MsgModifyLiquidityProtectionRatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgModifyLiquidityProtectionRatesResponse;
    fromPartial(_: Partial<MsgModifyLiquidityProtectionRatesResponse>): MsgModifyLiquidityProtectionRatesResponse;
};
export declare const MsgUpdateLiquidityProtectionParams: {
    encode(message: MsgUpdateLiquidityProtectionParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateLiquidityProtectionParams;
    fromPartial(object: Partial<MsgUpdateLiquidityProtectionParams>): MsgUpdateLiquidityProtectionParams;
};
export declare const MsgUpdateLiquidityProtectionParamsResponse: {
    encode(_: MsgUpdateLiquidityProtectionParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateLiquidityProtectionParamsResponse;
    fromPartial(_: Partial<MsgUpdateLiquidityProtectionParamsResponse>): MsgUpdateLiquidityProtectionParamsResponse;
};
export declare const MsgAddProviderDistributionPeriodRequest: {
    encode(message: MsgAddProviderDistributionPeriodRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddProviderDistributionPeriodRequest;
    fromPartial(object: Partial<MsgAddProviderDistributionPeriodRequest>): MsgAddProviderDistributionPeriodRequest;
};
export declare const MsgAddProviderDistributionPeriodResponse: {
    encode(_: MsgAddProviderDistributionPeriodResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAddProviderDistributionPeriodResponse;
    fromPartial(_: Partial<MsgAddProviderDistributionPeriodResponse>): MsgAddProviderDistributionPeriodResponse;
};
export declare const MsgUpdateSwapFeeParamsRequest: {
    encode(message: MsgUpdateSwapFeeParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateSwapFeeParamsRequest;
    fromPartial(object: Partial<MsgUpdateSwapFeeParamsRequest>): MsgUpdateSwapFeeParamsRequest;
};
export declare const MsgUpdateSwapFeeParamsResponse: {
    encode(_: MsgUpdateSwapFeeParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateSwapFeeParamsResponse;
    fromPartial(_: Partial<MsgUpdateSwapFeeParamsResponse>): MsgUpdateSwapFeeParamsResponse;
};
