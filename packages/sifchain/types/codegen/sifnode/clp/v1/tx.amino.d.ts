import { AminoMsg } from "@cosmjs/amino";
import { MsgRemoveLiquidity, MsgRemoveLiquidityUnits, MsgCreatePool, MsgAddLiquidity, MsgSwap, MsgDecommissionPool, MsgUnlockLiquidityRequest, MsgUpdateRewardsParamsRequest, MsgAddRewardPeriodRequest, MsgModifyPmtpRates, MsgUpdatePmtpParams, MsgUpdateStakingRewardParams, MsgSetSymmetryThreshold, MsgCancelUnlock, MsgUpdateLiquidityProtectionParams, MsgModifyLiquidityProtectionRates, MsgAddProviderDistributionPeriodRequest, MsgUpdateSwapFeeParamsRequest } from "./tx";
export interface MsgRemoveLiquidityAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgRemoveLiquidity";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        w_basis_points: string;
        asymmetry: string;
    };
}
export interface MsgRemoveLiquidityUnitsAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgRemoveLiquidityUnits";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        withdraw_units: string;
    };
}
export interface MsgCreatePoolAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgCreatePool";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        native_asset_amount: string;
        external_asset_amount: string;
    };
}
export interface MsgAddLiquidityAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgAddLiquidity";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        native_asset_amount: string;
        external_asset_amount: string;
    };
}
export interface MsgSwapAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgSwap";
    value: {
        signer: string;
        sent_asset: {
            symbol: string;
        };
        received_asset: {
            symbol: string;
        };
        sent_amount: string;
        min_receiving_amount: string;
    };
}
export interface MsgDecommissionPoolAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgDecommissionPool";
    value: {
        signer: string;
        symbol: string;
    };
}
export interface MsgUnlockLiquidityRequestAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgUnlockLiquidityRequest";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        units: string;
    };
}
export interface MsgUpdateRewardsParamsRequestAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest";
    value: {
        signer: string;
        liquidity_removal_lock_period: string;
        liquidity_removal_cancel_period: string;
    };
}
export interface MsgAddRewardPeriodRequestAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgAddRewardPeriodRequest";
    value: {
        signer: string;
        reward_periods: {
            reward_period_id: string;
            reward_period_start_block: string;
            reward_period_end_block: string;
            reward_period_allocation: string;
            reward_period_pool_multipliers: {
                pool_multiplier_asset: string;
                multiplier: string;
            }[];
            reward_period_default_multiplier: string;
            reward_period_distribute: boolean;
            reward_period_mod: string;
        }[];
    };
}
export interface MsgModifyPmtpRatesAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgModifyPmtpRates";
    value: {
        signer: string;
        block_rate: string;
        running_rate: string;
        end_policy: boolean;
    };
}
export interface MsgUpdatePmtpParamsAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgUpdatePmtpParams";
    value: {
        signer: string;
        pmtp_period_governance_rate: string;
        pmtp_period_epoch_length: string;
        pmtp_period_start_block: string;
        pmtp_period_end_block: string;
    };
}
export interface MsgUpdateStakingRewardParamsAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateStakingRewardParams";
    value: {
        signer: string;
        minter: string;
        params: string;
    };
}
export interface MsgSetSymmetryThresholdAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgSetSymmetryThreshold";
    value: {
        signer: string;
        threshold: string;
        ratio: string;
    };
}
export interface MsgCancelUnlockAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgCancelUnlock";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        units: string;
    };
}
export interface MsgUpdateLiquidityProtectionParamsAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams";
    value: {
        signer: string;
        max_rowan_liquidity_threshold: string;
        max_rowan_liquidity_threshold_asset: string;
        epoch_length: string;
        is_active: boolean;
    };
}
export interface MsgModifyLiquidityProtectionRatesAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates";
    value: {
        signer: string;
        current_rowan_liquidity_threshold: string;
    };
}
export interface MsgAddProviderDistributionPeriodRequestAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest";
    value: {
        signer: string;
        distribution_periods: {
            distribution_period_block_rate: string;
            distribution_period_start_block: string;
            distribution_period_end_block: string;
            distribution_period_mod: string;
        }[];
    };
}
export interface MsgUpdateSwapFeeParamsRequestAminoType extends AminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest";
    value: {
        signer: string;
        default_swap_fee_rate: string;
        token_params: {
            asset: string;
            swap_fee_rate: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/sifnode.clp.v1.MsgRemoveLiquidity": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, wBasisPoints, asymmetry }: MsgRemoveLiquidity) => MsgRemoveLiquidityAminoType["value"];
        fromAmino: ({ signer, external_asset, w_basis_points, asymmetry }: MsgRemoveLiquidityAminoType["value"]) => MsgRemoveLiquidity;
    };
    "/sifnode.clp.v1.MsgRemoveLiquidityUnits": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, withdrawUnits }: MsgRemoveLiquidityUnits) => MsgRemoveLiquidityUnitsAminoType["value"];
        fromAmino: ({ signer, external_asset, withdraw_units }: MsgRemoveLiquidityUnitsAminoType["value"]) => MsgRemoveLiquidityUnits;
    };
    "/sifnode.clp.v1.MsgCreatePool": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, nativeAssetAmount, externalAssetAmount }: MsgCreatePool) => MsgCreatePoolAminoType["value"];
        fromAmino: ({ signer, external_asset, native_asset_amount, external_asset_amount }: MsgCreatePoolAminoType["value"]) => MsgCreatePool;
    };
    "/sifnode.clp.v1.MsgAddLiquidity": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, nativeAssetAmount, externalAssetAmount }: MsgAddLiquidity) => MsgAddLiquidityAminoType["value"];
        fromAmino: ({ signer, external_asset, native_asset_amount, external_asset_amount }: MsgAddLiquidityAminoType["value"]) => MsgAddLiquidity;
    };
    "/sifnode.clp.v1.MsgSwap": {
        aminoType: string;
        toAmino: ({ signer, sentAsset, receivedAsset, sentAmount, minReceivingAmount }: MsgSwap) => MsgSwapAminoType["value"];
        fromAmino: ({ signer, sent_asset, received_asset, sent_amount, min_receiving_amount }: MsgSwapAminoType["value"]) => MsgSwap;
    };
    "/sifnode.clp.v1.MsgDecommissionPool": {
        aminoType: string;
        toAmino: ({ signer, symbol }: MsgDecommissionPool) => MsgDecommissionPoolAminoType["value"];
        fromAmino: ({ signer, symbol }: MsgDecommissionPoolAminoType["value"]) => MsgDecommissionPool;
    };
    "/sifnode.clp.v1.MsgUnlockLiquidityRequest": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, units }: MsgUnlockLiquidityRequest) => MsgUnlockLiquidityRequestAminoType["value"];
        fromAmino: ({ signer, external_asset, units }: MsgUnlockLiquidityRequestAminoType["value"]) => MsgUnlockLiquidityRequest;
    };
    "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest": {
        aminoType: string;
        toAmino: ({ signer, liquidityRemovalLockPeriod, liquidityRemovalCancelPeriod }: MsgUpdateRewardsParamsRequest) => MsgUpdateRewardsParamsRequestAminoType["value"];
        fromAmino: ({ signer, liquidity_removal_lock_period, liquidity_removal_cancel_period }: MsgUpdateRewardsParamsRequestAminoType["value"]) => MsgUpdateRewardsParamsRequest;
    };
    "/sifnode.clp.v1.MsgAddRewardPeriodRequest": {
        aminoType: string;
        toAmino: ({ signer, rewardPeriods }: MsgAddRewardPeriodRequest) => MsgAddRewardPeriodRequestAminoType["value"];
        fromAmino: ({ signer, reward_periods }: MsgAddRewardPeriodRequestAminoType["value"]) => MsgAddRewardPeriodRequest;
    };
    "/sifnode.clp.v1.MsgModifyPmtpRates": {
        aminoType: string;
        toAmino: ({ signer, blockRate, runningRate, endPolicy }: MsgModifyPmtpRates) => MsgModifyPmtpRatesAminoType["value"];
        fromAmino: ({ signer, block_rate, running_rate, end_policy }: MsgModifyPmtpRatesAminoType["value"]) => MsgModifyPmtpRates;
    };
    "/sifnode.clp.v1.MsgUpdatePmtpParams": {
        aminoType: string;
        toAmino: ({ signer, pmtpPeriodGovernanceRate, pmtpPeriodEpochLength, pmtpPeriodStartBlock, pmtpPeriodEndBlock }: MsgUpdatePmtpParams) => MsgUpdatePmtpParamsAminoType["value"];
        fromAmino: ({ signer, pmtp_period_governance_rate, pmtp_period_epoch_length, pmtp_period_start_block, pmtp_period_end_block }: MsgUpdatePmtpParamsAminoType["value"]) => MsgUpdatePmtpParams;
    };
    "/sifnode.clp.v1.MsgUpdateStakingRewardParams": {
        aminoType: string;
        toAmino: ({ signer, minter, params }: MsgUpdateStakingRewardParams) => MsgUpdateStakingRewardParamsAminoType["value"];
        fromAmino: ({ signer, minter, params }: MsgUpdateStakingRewardParamsAminoType["value"]) => MsgUpdateStakingRewardParams;
    };
    "/sifnode.clp.v1.MsgSetSymmetryThreshold": {
        aminoType: string;
        toAmino: ({ signer, threshold, ratio }: MsgSetSymmetryThreshold) => MsgSetSymmetryThresholdAminoType["value"];
        fromAmino: ({ signer, threshold, ratio }: MsgSetSymmetryThresholdAminoType["value"]) => MsgSetSymmetryThreshold;
    };
    "/sifnode.clp.v1.MsgCancelUnlock": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, units }: MsgCancelUnlock) => MsgCancelUnlockAminoType["value"];
        fromAmino: ({ signer, external_asset, units }: MsgCancelUnlockAminoType["value"]) => MsgCancelUnlock;
    };
    "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams": {
        aminoType: string;
        toAmino: ({ signer, maxRowanLiquidityThreshold, maxRowanLiquidityThresholdAsset, epochLength, isActive }: MsgUpdateLiquidityProtectionParams) => MsgUpdateLiquidityProtectionParamsAminoType["value"];
        fromAmino: ({ signer, max_rowan_liquidity_threshold, max_rowan_liquidity_threshold_asset, epoch_length, is_active }: MsgUpdateLiquidityProtectionParamsAminoType["value"]) => MsgUpdateLiquidityProtectionParams;
    };
    "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates": {
        aminoType: string;
        toAmino: ({ signer, currentRowanLiquidityThreshold }: MsgModifyLiquidityProtectionRates) => MsgModifyLiquidityProtectionRatesAminoType["value"];
        fromAmino: ({ signer, current_rowan_liquidity_threshold }: MsgModifyLiquidityProtectionRatesAminoType["value"]) => MsgModifyLiquidityProtectionRates;
    };
    "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest": {
        aminoType: string;
        toAmino: ({ signer, distributionPeriods }: MsgAddProviderDistributionPeriodRequest) => MsgAddProviderDistributionPeriodRequestAminoType["value"];
        fromAmino: ({ signer, distribution_periods }: MsgAddProviderDistributionPeriodRequestAminoType["value"]) => MsgAddProviderDistributionPeriodRequest;
    };
    "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest": {
        aminoType: string;
        toAmino: ({ signer, defaultSwapFeeRate, tokenParams }: MsgUpdateSwapFeeParamsRequest) => MsgUpdateSwapFeeParamsRequestAminoType["value"];
        fromAmino: ({ signer, default_swap_fee_rate, token_params }: MsgUpdateSwapFeeParamsRequestAminoType["value"]) => MsgUpdateSwapFeeParamsRequest;
    };
};
