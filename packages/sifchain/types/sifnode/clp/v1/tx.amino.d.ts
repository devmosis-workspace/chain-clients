import { MsgRemoveLiquidity, MsgRemoveLiquidityUnits, MsgCreatePool, MsgAddLiquidity, MsgSwap, MsgDecommissionPool, MsgUnlockLiquidityRequest, MsgUpdateRewardsParamsRequest, MsgAddRewardPeriodRequest, MsgModifyPmtpRates, MsgUpdatePmtpParams, MsgUpdateStakingRewardParams, MsgSetSymmetryThreshold, MsgCancelUnlock, MsgUpdateLiquidityProtectionParams, MsgModifyLiquidityProtectionRates, MsgAddProviderDistributionPeriodRequest, MsgUpdateSwapFeeParamsRequest, MsgAddLiquidityToRewardsBucketRequest } from "./tx";
export declare const AminoConverter: {
    "/sifnode.clp.v1.MsgRemoveLiquidity": {
        aminoType: string;
        toAmino: (message: MsgRemoveLiquidity) => import("./tx").MsgRemoveLiquidityAmino;
        fromAmino: (object: import("./tx").MsgRemoveLiquidityAmino) => MsgRemoveLiquidity;
    };
    "/sifnode.clp.v1.MsgRemoveLiquidityUnits": {
        aminoType: string;
        toAmino: (message: MsgRemoveLiquidityUnits) => import("./tx").MsgRemoveLiquidityUnitsAmino;
        fromAmino: (object: import("./tx").MsgRemoveLiquidityUnitsAmino) => MsgRemoveLiquidityUnits;
    };
    "/sifnode.clp.v1.MsgCreatePool": {
        aminoType: string;
        toAmino: (message: MsgCreatePool) => import("./tx").MsgCreatePoolAmino;
        fromAmino: (object: import("./tx").MsgCreatePoolAmino) => MsgCreatePool;
    };
    "/sifnode.clp.v1.MsgAddLiquidity": {
        aminoType: string;
        toAmino: (message: MsgAddLiquidity) => import("./tx").MsgAddLiquidityAmino;
        fromAmino: (object: import("./tx").MsgAddLiquidityAmino) => MsgAddLiquidity;
    };
    "/sifnode.clp.v1.MsgSwap": {
        aminoType: string;
        toAmino: (message: MsgSwap) => import("./tx").MsgSwapAmino;
        fromAmino: (object: import("./tx").MsgSwapAmino) => MsgSwap;
    };
    "/sifnode.clp.v1.MsgDecommissionPool": {
        aminoType: string;
        toAmino: (message: MsgDecommissionPool) => import("./tx").MsgDecommissionPoolAmino;
        fromAmino: (object: import("./tx").MsgDecommissionPoolAmino) => MsgDecommissionPool;
    };
    "/sifnode.clp.v1.MsgUnlockLiquidityRequest": {
        aminoType: string;
        toAmino: (message: MsgUnlockLiquidityRequest) => import("./tx").MsgUnlockLiquidityRequestAmino;
        fromAmino: (object: import("./tx").MsgUnlockLiquidityRequestAmino) => MsgUnlockLiquidityRequest;
    };
    "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest": {
        aminoType: string;
        toAmino: (message: MsgUpdateRewardsParamsRequest) => import("./tx").MsgUpdateRewardsParamsRequestAmino;
        fromAmino: (object: import("./tx").MsgUpdateRewardsParamsRequestAmino) => MsgUpdateRewardsParamsRequest;
    };
    "/sifnode.clp.v1.MsgAddRewardPeriodRequest": {
        aminoType: string;
        toAmino: (message: MsgAddRewardPeriodRequest) => import("./tx").MsgAddRewardPeriodRequestAmino;
        fromAmino: (object: import("./tx").MsgAddRewardPeriodRequestAmino) => MsgAddRewardPeriodRequest;
    };
    "/sifnode.clp.v1.MsgModifyPmtpRates": {
        aminoType: string;
        toAmino: (message: MsgModifyPmtpRates) => import("./tx").MsgModifyPmtpRatesAmino;
        fromAmino: (object: import("./tx").MsgModifyPmtpRatesAmino) => MsgModifyPmtpRates;
    };
    "/sifnode.clp.v1.MsgUpdatePmtpParams": {
        aminoType: string;
        toAmino: (message: MsgUpdatePmtpParams) => import("./tx").MsgUpdatePmtpParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdatePmtpParamsAmino) => MsgUpdatePmtpParams;
    };
    "/sifnode.clp.v1.MsgUpdateStakingRewardParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateStakingRewardParams) => import("./tx").MsgUpdateStakingRewardParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateStakingRewardParamsAmino) => MsgUpdateStakingRewardParams;
    };
    "/sifnode.clp.v1.MsgSetSymmetryThreshold": {
        aminoType: string;
        toAmino: (message: MsgSetSymmetryThreshold) => import("./tx").MsgSetSymmetryThresholdAmino;
        fromAmino: (object: import("./tx").MsgSetSymmetryThresholdAmino) => MsgSetSymmetryThreshold;
    };
    "/sifnode.clp.v1.MsgCancelUnlock": {
        aminoType: string;
        toAmino: (message: MsgCancelUnlock) => import("./tx").MsgCancelUnlockAmino;
        fromAmino: (object: import("./tx").MsgCancelUnlockAmino) => MsgCancelUnlock;
    };
    "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateLiquidityProtectionParams) => import("./tx").MsgUpdateLiquidityProtectionParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateLiquidityProtectionParamsAmino) => MsgUpdateLiquidityProtectionParams;
    };
    "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates": {
        aminoType: string;
        toAmino: (message: MsgModifyLiquidityProtectionRates) => import("./tx").MsgModifyLiquidityProtectionRatesAmino;
        fromAmino: (object: import("./tx").MsgModifyLiquidityProtectionRatesAmino) => MsgModifyLiquidityProtectionRates;
    };
    "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest": {
        aminoType: string;
        toAmino: (message: MsgAddProviderDistributionPeriodRequest) => import("./tx").MsgAddProviderDistributionPeriodRequestAmino;
        fromAmino: (object: import("./tx").MsgAddProviderDistributionPeriodRequestAmino) => MsgAddProviderDistributionPeriodRequest;
    };
    "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest": {
        aminoType: string;
        toAmino: (message: MsgUpdateSwapFeeParamsRequest) => import("./tx").MsgUpdateSwapFeeParamsRequestAmino;
        fromAmino: (object: import("./tx").MsgUpdateSwapFeeParamsRequestAmino) => MsgUpdateSwapFeeParamsRequest;
    };
    "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest": {
        aminoType: string;
        toAmino: (message: MsgAddLiquidityToRewardsBucketRequest) => import("./tx").MsgAddLiquidityToRewardsBucketRequestAmino;
        fromAmino: (object: import("./tx").MsgAddLiquidityToRewardsBucketRequestAmino) => MsgAddLiquidityToRewardsBucketRequest;
    };
};
