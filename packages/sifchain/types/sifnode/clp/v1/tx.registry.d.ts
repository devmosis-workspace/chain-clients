import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRemoveLiquidity, MsgRemoveLiquidityUnits, MsgCreatePool, MsgAddLiquidity, MsgSwap, MsgDecommissionPool, MsgUnlockLiquidityRequest, MsgUpdateRewardsParamsRequest, MsgAddRewardPeriodRequest, MsgModifyPmtpRates, MsgUpdatePmtpParams, MsgUpdateStakingRewardParams, MsgSetSymmetryThreshold, MsgCancelUnlock, MsgUpdateLiquidityProtectionParams, MsgModifyLiquidityProtectionRates, MsgAddProviderDistributionPeriodRequest, MsgUpdateSwapFeeParamsRequest, MsgAddLiquidityToRewardsBucketRequest } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        removeLiquidity(value: MsgRemoveLiquidity): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeLiquidityUnits(value: MsgRemoveLiquidityUnits): {
            typeUrl: string;
            value: Uint8Array;
        };
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        addLiquidity(value: MsgAddLiquidity): {
            typeUrl: string;
            value: Uint8Array;
        };
        swap(value: MsgSwap): {
            typeUrl: string;
            value: Uint8Array;
        };
        decommissionPool(value: MsgDecommissionPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        unlockLiquidity(value: MsgUnlockLiquidityRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateRewardsParams(value: MsgUpdateRewardsParamsRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        addRewardPeriod(value: MsgAddRewardPeriodRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        modifyPmtpRates(value: MsgModifyPmtpRates): {
            typeUrl: string;
            value: Uint8Array;
        };
        updatePmtpParams(value: MsgUpdatePmtpParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateStakingRewardParams(value: MsgUpdateStakingRewardParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        setSymmetryThreshold(value: MsgSetSymmetryThreshold): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelUnlockLiquidity(value: MsgCancelUnlock): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateLiquidityProtectionParams(value: MsgUpdateLiquidityProtectionParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        modifyLiquidityProtectionRates(value: MsgModifyLiquidityProtectionRates): {
            typeUrl: string;
            value: Uint8Array;
        };
        addProviderDistributionPeriod(value: MsgAddProviderDistributionPeriodRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateSwapFeeParams(value: MsgUpdateSwapFeeParamsRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        addLiquidityToRewardsBucket(value: MsgAddLiquidityToRewardsBucketRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        removeLiquidity(value: MsgRemoveLiquidity): {
            typeUrl: string;
            value: MsgRemoveLiquidity;
        };
        removeLiquidityUnits(value: MsgRemoveLiquidityUnits): {
            typeUrl: string;
            value: MsgRemoveLiquidityUnits;
        };
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        addLiquidity(value: MsgAddLiquidity): {
            typeUrl: string;
            value: MsgAddLiquidity;
        };
        swap(value: MsgSwap): {
            typeUrl: string;
            value: MsgSwap;
        };
        decommissionPool(value: MsgDecommissionPool): {
            typeUrl: string;
            value: MsgDecommissionPool;
        };
        unlockLiquidity(value: MsgUnlockLiquidityRequest): {
            typeUrl: string;
            value: MsgUnlockLiquidityRequest;
        };
        updateRewardsParams(value: MsgUpdateRewardsParamsRequest): {
            typeUrl: string;
            value: MsgUpdateRewardsParamsRequest;
        };
        addRewardPeriod(value: MsgAddRewardPeriodRequest): {
            typeUrl: string;
            value: MsgAddRewardPeriodRequest;
        };
        modifyPmtpRates(value: MsgModifyPmtpRates): {
            typeUrl: string;
            value: MsgModifyPmtpRates;
        };
        updatePmtpParams(value: MsgUpdatePmtpParams): {
            typeUrl: string;
            value: MsgUpdatePmtpParams;
        };
        updateStakingRewardParams(value: MsgUpdateStakingRewardParams): {
            typeUrl: string;
            value: MsgUpdateStakingRewardParams;
        };
        setSymmetryThreshold(value: MsgSetSymmetryThreshold): {
            typeUrl: string;
            value: MsgSetSymmetryThreshold;
        };
        cancelUnlockLiquidity(value: MsgCancelUnlock): {
            typeUrl: string;
            value: MsgCancelUnlock;
        };
        updateLiquidityProtectionParams(value: MsgUpdateLiquidityProtectionParams): {
            typeUrl: string;
            value: MsgUpdateLiquidityProtectionParams;
        };
        modifyLiquidityProtectionRates(value: MsgModifyLiquidityProtectionRates): {
            typeUrl: string;
            value: MsgModifyLiquidityProtectionRates;
        };
        addProviderDistributionPeriod(value: MsgAddProviderDistributionPeriodRequest): {
            typeUrl: string;
            value: MsgAddProviderDistributionPeriodRequest;
        };
        updateSwapFeeParams(value: MsgUpdateSwapFeeParamsRequest): {
            typeUrl: string;
            value: MsgUpdateSwapFeeParamsRequest;
        };
        addLiquidityToRewardsBucket(value: MsgAddLiquidityToRewardsBucketRequest): {
            typeUrl: string;
            value: MsgAddLiquidityToRewardsBucketRequest;
        };
    };
    fromJSON: {
        removeLiquidity(value: any): {
            typeUrl: string;
            value: MsgRemoveLiquidity;
        };
        removeLiquidityUnits(value: any): {
            typeUrl: string;
            value: MsgRemoveLiquidityUnits;
        };
        createPool(value: any): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        addLiquidity(value: any): {
            typeUrl: string;
            value: MsgAddLiquidity;
        };
        swap(value: any): {
            typeUrl: string;
            value: MsgSwap;
        };
        decommissionPool(value: any): {
            typeUrl: string;
            value: MsgDecommissionPool;
        };
        unlockLiquidity(value: any): {
            typeUrl: string;
            value: MsgUnlockLiquidityRequest;
        };
        updateRewardsParams(value: any): {
            typeUrl: string;
            value: MsgUpdateRewardsParamsRequest;
        };
        addRewardPeriod(value: any): {
            typeUrl: string;
            value: MsgAddRewardPeriodRequest;
        };
        modifyPmtpRates(value: any): {
            typeUrl: string;
            value: MsgModifyPmtpRates;
        };
        updatePmtpParams(value: any): {
            typeUrl: string;
            value: MsgUpdatePmtpParams;
        };
        updateStakingRewardParams(value: any): {
            typeUrl: string;
            value: MsgUpdateStakingRewardParams;
        };
        setSymmetryThreshold(value: any): {
            typeUrl: string;
            value: MsgSetSymmetryThreshold;
        };
        cancelUnlockLiquidity(value: any): {
            typeUrl: string;
            value: MsgCancelUnlock;
        };
        updateLiquidityProtectionParams(value: any): {
            typeUrl: string;
            value: MsgUpdateLiquidityProtectionParams;
        };
        modifyLiquidityProtectionRates(value: any): {
            typeUrl: string;
            value: MsgModifyLiquidityProtectionRates;
        };
        addProviderDistributionPeriod(value: any): {
            typeUrl: string;
            value: MsgAddProviderDistributionPeriodRequest;
        };
        updateSwapFeeParams(value: any): {
            typeUrl: string;
            value: MsgUpdateSwapFeeParamsRequest;
        };
        addLiquidityToRewardsBucket(value: any): {
            typeUrl: string;
            value: MsgAddLiquidityToRewardsBucketRequest;
        };
    };
    fromPartial: {
        removeLiquidity(value: MsgRemoveLiquidity): {
            typeUrl: string;
            value: MsgRemoveLiquidity;
        };
        removeLiquidityUnits(value: MsgRemoveLiquidityUnits): {
            typeUrl: string;
            value: MsgRemoveLiquidityUnits;
        };
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        addLiquidity(value: MsgAddLiquidity): {
            typeUrl: string;
            value: MsgAddLiquidity;
        };
        swap(value: MsgSwap): {
            typeUrl: string;
            value: MsgSwap;
        };
        decommissionPool(value: MsgDecommissionPool): {
            typeUrl: string;
            value: MsgDecommissionPool;
        };
        unlockLiquidity(value: MsgUnlockLiquidityRequest): {
            typeUrl: string;
            value: MsgUnlockLiquidityRequest;
        };
        updateRewardsParams(value: MsgUpdateRewardsParamsRequest): {
            typeUrl: string;
            value: MsgUpdateRewardsParamsRequest;
        };
        addRewardPeriod(value: MsgAddRewardPeriodRequest): {
            typeUrl: string;
            value: MsgAddRewardPeriodRequest;
        };
        modifyPmtpRates(value: MsgModifyPmtpRates): {
            typeUrl: string;
            value: MsgModifyPmtpRates;
        };
        updatePmtpParams(value: MsgUpdatePmtpParams): {
            typeUrl: string;
            value: MsgUpdatePmtpParams;
        };
        updateStakingRewardParams(value: MsgUpdateStakingRewardParams): {
            typeUrl: string;
            value: MsgUpdateStakingRewardParams;
        };
        setSymmetryThreshold(value: MsgSetSymmetryThreshold): {
            typeUrl: string;
            value: MsgSetSymmetryThreshold;
        };
        cancelUnlockLiquidity(value: MsgCancelUnlock): {
            typeUrl: string;
            value: MsgCancelUnlock;
        };
        updateLiquidityProtectionParams(value: MsgUpdateLiquidityProtectionParams): {
            typeUrl: string;
            value: MsgUpdateLiquidityProtectionParams;
        };
        modifyLiquidityProtectionRates(value: MsgModifyLiquidityProtectionRates): {
            typeUrl: string;
            value: MsgModifyLiquidityProtectionRates;
        };
        addProviderDistributionPeriod(value: MsgAddProviderDistributionPeriodRequest): {
            typeUrl: string;
            value: MsgAddProviderDistributionPeriodRequest;
        };
        updateSwapFeeParams(value: MsgUpdateSwapFeeParamsRequest): {
            typeUrl: string;
            value: MsgUpdateSwapFeeParamsRequest;
        };
        addLiquidityToRewardsBucket(value: MsgAddLiquidityToRewardsBucketRequest): {
            typeUrl: string;
            value: MsgAddLiquidityToRewardsBucketRequest;
        };
    };
};
