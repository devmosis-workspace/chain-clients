import { Rpc } from "../../../helpers";
import { MsgRemoveLiquidity, MsgRemoveLiquidityResponse, MsgRemoveLiquidityUnits, MsgRemoveLiquidityUnitsResponse, MsgCreatePool, MsgCreatePoolResponse, MsgAddLiquidity, MsgAddLiquidityResponse, MsgSwap, MsgSwapResponse, MsgDecommissionPool, MsgDecommissionPoolResponse, MsgUnlockLiquidityRequest, MsgUnlockLiquidityResponse, MsgUpdateRewardsParamsRequest, MsgUpdateRewardsParamsResponse, MsgAddRewardPeriodRequest, MsgAddRewardPeriodResponse, MsgModifyPmtpRates, MsgModifyPmtpRatesResponse, MsgUpdatePmtpParams, MsgUpdatePmtpParamsResponse, MsgUpdateStakingRewardParams, MsgUpdateStakingRewardParamsResponse, MsgSetSymmetryThreshold, MsgSetSymmetryThresholdResponse, MsgCancelUnlock, MsgCancelUnlockResponse, MsgUpdateLiquidityProtectionParams, MsgUpdateLiquidityProtectionParamsResponse, MsgModifyLiquidityProtectionRates, MsgModifyLiquidityProtectionRatesResponse, MsgAddProviderDistributionPeriodRequest, MsgAddProviderDistributionPeriodResponse, MsgUpdateSwapFeeParamsRequest, MsgUpdateSwapFeeParamsResponse, MsgAddLiquidityToRewardsBucketRequest, MsgAddLiquidityToRewardsBucketResponse } from "./tx";
export interface Msg {
    removeLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse>;
    removeLiquidityUnits(request: MsgRemoveLiquidityUnits): Promise<MsgRemoveLiquidityUnitsResponse>;
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    addLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse>;
    swap(request: MsgSwap): Promise<MsgSwapResponse>;
    decommissionPool(request: MsgDecommissionPool): Promise<MsgDecommissionPoolResponse>;
    unlockLiquidity(request: MsgUnlockLiquidityRequest): Promise<MsgUnlockLiquidityResponse>;
    updateRewardsParams(request: MsgUpdateRewardsParamsRequest): Promise<MsgUpdateRewardsParamsResponse>;
    addRewardPeriod(request: MsgAddRewardPeriodRequest): Promise<MsgAddRewardPeriodResponse>;
    modifyPmtpRates(request: MsgModifyPmtpRates): Promise<MsgModifyPmtpRatesResponse>;
    updatePmtpParams(request: MsgUpdatePmtpParams): Promise<MsgUpdatePmtpParamsResponse>;
    updateStakingRewardParams(request: MsgUpdateStakingRewardParams): Promise<MsgUpdateStakingRewardParamsResponse>;
    setSymmetryThreshold(request: MsgSetSymmetryThreshold): Promise<MsgSetSymmetryThresholdResponse>;
    cancelUnlockLiquidity(request: MsgCancelUnlock): Promise<MsgCancelUnlockResponse>;
    updateLiquidityProtectionParams(request: MsgUpdateLiquidityProtectionParams): Promise<MsgUpdateLiquidityProtectionParamsResponse>;
    modifyLiquidityProtectionRates(request: MsgModifyLiquidityProtectionRates): Promise<MsgModifyLiquidityProtectionRatesResponse>;
    addProviderDistributionPeriod(request: MsgAddProviderDistributionPeriodRequest): Promise<MsgAddProviderDistributionPeriodResponse>;
    updateSwapFeeParams(request: MsgUpdateSwapFeeParamsRequest): Promise<MsgUpdateSwapFeeParamsResponse>;
    addLiquidityToRewardsBucket(request: MsgAddLiquidityToRewardsBucketRequest): Promise<MsgAddLiquidityToRewardsBucketResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    removeLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse>;
    removeLiquidityUnits(request: MsgRemoveLiquidityUnits): Promise<MsgRemoveLiquidityUnitsResponse>;
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    addLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse>;
    swap(request: MsgSwap): Promise<MsgSwapResponse>;
    decommissionPool(request: MsgDecommissionPool): Promise<MsgDecommissionPoolResponse>;
    unlockLiquidity(request: MsgUnlockLiquidityRequest): Promise<MsgUnlockLiquidityResponse>;
    updateRewardsParams(request: MsgUpdateRewardsParamsRequest): Promise<MsgUpdateRewardsParamsResponse>;
    addRewardPeriod(request: MsgAddRewardPeriodRequest): Promise<MsgAddRewardPeriodResponse>;
    modifyPmtpRates(request: MsgModifyPmtpRates): Promise<MsgModifyPmtpRatesResponse>;
    updatePmtpParams(request: MsgUpdatePmtpParams): Promise<MsgUpdatePmtpParamsResponse>;
    updateStakingRewardParams(request: MsgUpdateStakingRewardParams): Promise<MsgUpdateStakingRewardParamsResponse>;
    setSymmetryThreshold(request: MsgSetSymmetryThreshold): Promise<MsgSetSymmetryThresholdResponse>;
    cancelUnlockLiquidity(request: MsgCancelUnlock): Promise<MsgCancelUnlockResponse>;
    updateLiquidityProtectionParams(request: MsgUpdateLiquidityProtectionParams): Promise<MsgUpdateLiquidityProtectionParamsResponse>;
    modifyLiquidityProtectionRates(request: MsgModifyLiquidityProtectionRates): Promise<MsgModifyLiquidityProtectionRatesResponse>;
    addProviderDistributionPeriod(request: MsgAddProviderDistributionPeriodRequest): Promise<MsgAddProviderDistributionPeriodResponse>;
    updateSwapFeeParams(request: MsgUpdateSwapFeeParamsRequest): Promise<MsgUpdateSwapFeeParamsResponse>;
    addLiquidityToRewardsBucket(request: MsgAddLiquidityToRewardsBucketRequest): Promise<MsgAddLiquidityToRewardsBucketResponse>;
}
