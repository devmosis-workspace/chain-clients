import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRemoveLiquidity, MsgRemoveLiquidityUnits, MsgCreatePool, MsgAddLiquidity, MsgSwap, MsgDecommissionPool, MsgUnlockLiquidityRequest, MsgUpdateRewardsParamsRequest, MsgAddRewardPeriodRequest, MsgModifyPmtpRates, MsgUpdatePmtpParams, MsgUpdateStakingRewardParams, MsgSetSymmetryThreshold, MsgCancelUnlock, MsgUpdateLiquidityProtectionParams, MsgModifyLiquidityProtectionRates, MsgAddProviderDistributionPeriodRequest, MsgUpdateSwapFeeParamsRequest, MsgAddLiquidityToRewardsBucketRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/sifnode.clp.v1.MsgRemoveLiquidity", MsgRemoveLiquidity], ["/sifnode.clp.v1.MsgRemoveLiquidityUnits", MsgRemoveLiquidityUnits], ["/sifnode.clp.v1.MsgCreatePool", MsgCreatePool], ["/sifnode.clp.v1.MsgAddLiquidity", MsgAddLiquidity], ["/sifnode.clp.v1.MsgSwap", MsgSwap], ["/sifnode.clp.v1.MsgDecommissionPool", MsgDecommissionPool], ["/sifnode.clp.v1.MsgUnlockLiquidityRequest", MsgUnlockLiquidityRequest], ["/sifnode.clp.v1.MsgUpdateRewardsParamsRequest", MsgUpdateRewardsParamsRequest], ["/sifnode.clp.v1.MsgAddRewardPeriodRequest", MsgAddRewardPeriodRequest], ["/sifnode.clp.v1.MsgModifyPmtpRates", MsgModifyPmtpRates], ["/sifnode.clp.v1.MsgUpdatePmtpParams", MsgUpdatePmtpParams], ["/sifnode.clp.v1.MsgUpdateStakingRewardParams", MsgUpdateStakingRewardParams], ["/sifnode.clp.v1.MsgSetSymmetryThreshold", MsgSetSymmetryThreshold], ["/sifnode.clp.v1.MsgCancelUnlock", MsgCancelUnlock], ["/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams", MsgUpdateLiquidityProtectionParams], ["/sifnode.clp.v1.MsgModifyLiquidityProtectionRates", MsgModifyLiquidityProtectionRates], ["/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest", MsgAddProviderDistributionPeriodRequest], ["/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest", MsgUpdateSwapFeeParamsRequest], ["/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest", MsgAddLiquidityToRewardsBucketRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidity",
        value: MsgRemoveLiquidity.encode(value).finish()
      };
    },
    removeLiquidityUnits(value: MsgRemoveLiquidityUnits) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityUnits",
        value: MsgRemoveLiquidityUnits.encode(value).finish()
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },
    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddLiquidity",
        value: MsgAddLiquidity.encode(value).finish()
      };
    },
    swap(value: MsgSwap) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgSwap",
        value: MsgSwap.encode(value).finish()
      };
    },
    decommissionPool(value: MsgDecommissionPool) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgDecommissionPool",
        value: MsgDecommissionPool.encode(value).finish()
      };
    },
    unlockLiquidity(value: MsgUnlockLiquidityRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUnlockLiquidityRequest",
        value: MsgUnlockLiquidityRequest.encode(value).finish()
      };
    },
    updateRewardsParams(value: MsgUpdateRewardsParamsRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest",
        value: MsgUpdateRewardsParamsRequest.encode(value).finish()
      };
    },
    addRewardPeriod(value: MsgAddRewardPeriodRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddRewardPeriodRequest",
        value: MsgAddRewardPeriodRequest.encode(value).finish()
      };
    },
    modifyPmtpRates(value: MsgModifyPmtpRates) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgModifyPmtpRates",
        value: MsgModifyPmtpRates.encode(value).finish()
      };
    },
    updatePmtpParams(value: MsgUpdatePmtpParams) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdatePmtpParams",
        value: MsgUpdatePmtpParams.encode(value).finish()
      };
    },
    updateStakingRewardParams(value: MsgUpdateStakingRewardParams) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateStakingRewardParams",
        value: MsgUpdateStakingRewardParams.encode(value).finish()
      };
    },
    setSymmetryThreshold(value: MsgSetSymmetryThreshold) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgSetSymmetryThreshold",
        value: MsgSetSymmetryThreshold.encode(value).finish()
      };
    },
    cancelUnlockLiquidity(value: MsgCancelUnlock) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgCancelUnlock",
        value: MsgCancelUnlock.encode(value).finish()
      };
    },
    updateLiquidityProtectionParams(value: MsgUpdateLiquidityProtectionParams) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams",
        value: MsgUpdateLiquidityProtectionParams.encode(value).finish()
      };
    },
    modifyLiquidityProtectionRates(value: MsgModifyLiquidityProtectionRates) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates",
        value: MsgModifyLiquidityProtectionRates.encode(value).finish()
      };
    },
    addProviderDistributionPeriod(value: MsgAddProviderDistributionPeriodRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest",
        value: MsgAddProviderDistributionPeriodRequest.encode(value).finish()
      };
    },
    updateSwapFeeParams(value: MsgUpdateSwapFeeParamsRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest",
        value: MsgUpdateSwapFeeParamsRequest.encode(value).finish()
      };
    },
    addLiquidityToRewardsBucket(value: MsgAddLiquidityToRewardsBucketRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest",
        value: MsgAddLiquidityToRewardsBucketRequest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidity",
        value
      };
    },
    removeLiquidityUnits(value: MsgRemoveLiquidityUnits) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityUnits",
        value
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgCreatePool",
        value
      };
    },
    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddLiquidity",
        value
      };
    },
    swap(value: MsgSwap) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgSwap",
        value
      };
    },
    decommissionPool(value: MsgDecommissionPool) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgDecommissionPool",
        value
      };
    },
    unlockLiquidity(value: MsgUnlockLiquidityRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUnlockLiquidityRequest",
        value
      };
    },
    updateRewardsParams(value: MsgUpdateRewardsParamsRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest",
        value
      };
    },
    addRewardPeriod(value: MsgAddRewardPeriodRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddRewardPeriodRequest",
        value
      };
    },
    modifyPmtpRates(value: MsgModifyPmtpRates) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgModifyPmtpRates",
        value
      };
    },
    updatePmtpParams(value: MsgUpdatePmtpParams) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdatePmtpParams",
        value
      };
    },
    updateStakingRewardParams(value: MsgUpdateStakingRewardParams) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateStakingRewardParams",
        value
      };
    },
    setSymmetryThreshold(value: MsgSetSymmetryThreshold) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgSetSymmetryThreshold",
        value
      };
    },
    cancelUnlockLiquidity(value: MsgCancelUnlock) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgCancelUnlock",
        value
      };
    },
    updateLiquidityProtectionParams(value: MsgUpdateLiquidityProtectionParams) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams",
        value
      };
    },
    modifyLiquidityProtectionRates(value: MsgModifyLiquidityProtectionRates) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates",
        value
      };
    },
    addProviderDistributionPeriod(value: MsgAddProviderDistributionPeriodRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest",
        value
      };
    },
    updateSwapFeeParams(value: MsgUpdateSwapFeeParamsRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest",
        value
      };
    },
    addLiquidityToRewardsBucket(value: MsgAddLiquidityToRewardsBucketRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest",
        value
      };
    }
  },
  fromJSON: {
    removeLiquidity(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidity",
        value: MsgRemoveLiquidity.fromJSON(value)
      };
    },
    removeLiquidityUnits(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityUnits",
        value: MsgRemoveLiquidityUnits.fromJSON(value)
      };
    },
    createPool(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgCreatePool",
        value: MsgCreatePool.fromJSON(value)
      };
    },
    addLiquidity(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddLiquidity",
        value: MsgAddLiquidity.fromJSON(value)
      };
    },
    swap(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgSwap",
        value: MsgSwap.fromJSON(value)
      };
    },
    decommissionPool(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgDecommissionPool",
        value: MsgDecommissionPool.fromJSON(value)
      };
    },
    unlockLiquidity(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUnlockLiquidityRequest",
        value: MsgUnlockLiquidityRequest.fromJSON(value)
      };
    },
    updateRewardsParams(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest",
        value: MsgUpdateRewardsParamsRequest.fromJSON(value)
      };
    },
    addRewardPeriod(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddRewardPeriodRequest",
        value: MsgAddRewardPeriodRequest.fromJSON(value)
      };
    },
    modifyPmtpRates(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgModifyPmtpRates",
        value: MsgModifyPmtpRates.fromJSON(value)
      };
    },
    updatePmtpParams(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdatePmtpParams",
        value: MsgUpdatePmtpParams.fromJSON(value)
      };
    },
    updateStakingRewardParams(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateStakingRewardParams",
        value: MsgUpdateStakingRewardParams.fromJSON(value)
      };
    },
    setSymmetryThreshold(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgSetSymmetryThreshold",
        value: MsgSetSymmetryThreshold.fromJSON(value)
      };
    },
    cancelUnlockLiquidity(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgCancelUnlock",
        value: MsgCancelUnlock.fromJSON(value)
      };
    },
    updateLiquidityProtectionParams(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams",
        value: MsgUpdateLiquidityProtectionParams.fromJSON(value)
      };
    },
    modifyLiquidityProtectionRates(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates",
        value: MsgModifyLiquidityProtectionRates.fromJSON(value)
      };
    },
    addProviderDistributionPeriod(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest",
        value: MsgAddProviderDistributionPeriodRequest.fromJSON(value)
      };
    },
    updateSwapFeeParams(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest",
        value: MsgUpdateSwapFeeParamsRequest.fromJSON(value)
      };
    },
    addLiquidityToRewardsBucket(value: any) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest",
        value: MsgAddLiquidityToRewardsBucketRequest.fromJSON(value)
      };
    }
  },
  fromPartial: {
    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidity",
        value: MsgRemoveLiquidity.fromPartial(value)
      };
    },
    removeLiquidityUnits(value: MsgRemoveLiquidityUnits) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgRemoveLiquidityUnits",
        value: MsgRemoveLiquidityUnits.fromPartial(value)
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },
    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddLiquidity",
        value: MsgAddLiquidity.fromPartial(value)
      };
    },
    swap(value: MsgSwap) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgSwap",
        value: MsgSwap.fromPartial(value)
      };
    },
    decommissionPool(value: MsgDecommissionPool) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgDecommissionPool",
        value: MsgDecommissionPool.fromPartial(value)
      };
    },
    unlockLiquidity(value: MsgUnlockLiquidityRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUnlockLiquidityRequest",
        value: MsgUnlockLiquidityRequest.fromPartial(value)
      };
    },
    updateRewardsParams(value: MsgUpdateRewardsParamsRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest",
        value: MsgUpdateRewardsParamsRequest.fromPartial(value)
      };
    },
    addRewardPeriod(value: MsgAddRewardPeriodRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddRewardPeriodRequest",
        value: MsgAddRewardPeriodRequest.fromPartial(value)
      };
    },
    modifyPmtpRates(value: MsgModifyPmtpRates) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgModifyPmtpRates",
        value: MsgModifyPmtpRates.fromPartial(value)
      };
    },
    updatePmtpParams(value: MsgUpdatePmtpParams) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdatePmtpParams",
        value: MsgUpdatePmtpParams.fromPartial(value)
      };
    },
    updateStakingRewardParams(value: MsgUpdateStakingRewardParams) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateStakingRewardParams",
        value: MsgUpdateStakingRewardParams.fromPartial(value)
      };
    },
    setSymmetryThreshold(value: MsgSetSymmetryThreshold) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgSetSymmetryThreshold",
        value: MsgSetSymmetryThreshold.fromPartial(value)
      };
    },
    cancelUnlockLiquidity(value: MsgCancelUnlock) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgCancelUnlock",
        value: MsgCancelUnlock.fromPartial(value)
      };
    },
    updateLiquidityProtectionParams(value: MsgUpdateLiquidityProtectionParams) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams",
        value: MsgUpdateLiquidityProtectionParams.fromPartial(value)
      };
    },
    modifyLiquidityProtectionRates(value: MsgModifyLiquidityProtectionRates) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates",
        value: MsgModifyLiquidityProtectionRates.fromPartial(value)
      };
    },
    addProviderDistributionPeriod(value: MsgAddProviderDistributionPeriodRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest",
        value: MsgAddProviderDistributionPeriodRequest.fromPartial(value)
      };
    },
    updateSwapFeeParams(value: MsgUpdateSwapFeeParamsRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest",
        value: MsgUpdateSwapFeeParamsRequest.fromPartial(value)
      };
    },
    addLiquidityToRewardsBucket(value: MsgAddLiquidityToRewardsBucketRequest) {
      return {
        typeUrl: "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest",
        value: MsgAddLiquidityToRewardsBucketRequest.fromPartial(value)
      };
    }
  }
};