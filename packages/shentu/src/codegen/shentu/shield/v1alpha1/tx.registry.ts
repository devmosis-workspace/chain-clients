import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgUpdatePool, MsgPausePool, MsgResumePool, MsgDepositCollateral, MsgWithdrawCollateral, MsgWithdrawRewards, MsgWithdrawForeignRewards, MsgPurchaseShield, MsgWithdrawReimbursement, MsgUpdateSponsor, MsgStakeForShield, MsgUnstakeFromShield } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/shentu.shield.v1alpha1.MsgCreatePool", MsgCreatePool], ["/shentu.shield.v1alpha1.MsgUpdatePool", MsgUpdatePool], ["/shentu.shield.v1alpha1.MsgPausePool", MsgPausePool], ["/shentu.shield.v1alpha1.MsgResumePool", MsgResumePool], ["/shentu.shield.v1alpha1.MsgDepositCollateral", MsgDepositCollateral], ["/shentu.shield.v1alpha1.MsgWithdrawCollateral", MsgWithdrawCollateral], ["/shentu.shield.v1alpha1.MsgWithdrawRewards", MsgWithdrawRewards], ["/shentu.shield.v1alpha1.MsgWithdrawForeignRewards", MsgWithdrawForeignRewards], ["/shentu.shield.v1alpha1.MsgPurchaseShield", MsgPurchaseShield], ["/shentu.shield.v1alpha1.MsgWithdrawReimbursement", MsgWithdrawReimbursement], ["/shentu.shield.v1alpha1.MsgUpdateSponsor", MsgUpdateSponsor], ["/shentu.shield.v1alpha1.MsgStakeForShield", MsgStakeForShield], ["/shentu.shield.v1alpha1.MsgUnstakeFromShield", MsgUnstakeFromShield]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },
    updatePool(value: MsgUpdatePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePool",
        value: MsgUpdatePool.encode(value).finish()
      };
    },
    pausePool(value: MsgPausePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgPausePool",
        value: MsgPausePool.encode(value).finish()
      };
    },
    resumePool(value: MsgResumePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgResumePool",
        value: MsgResumePool.encode(value).finish()
      };
    },
    depositCollateral(value: MsgDepositCollateral) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateral",
        value: MsgDepositCollateral.encode(value).finish()
      };
    },
    withdrawCollateral(value: MsgWithdrawCollateral) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateral",
        value: MsgWithdrawCollateral.encode(value).finish()
      };
    },
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewards",
        value: MsgWithdrawRewards.encode(value).finish()
      };
    },
    withdrawForeignRewards(value: MsgWithdrawForeignRewards) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards",
        value: MsgWithdrawForeignRewards.encode(value).finish()
      };
    },
    purchaseShield(value: MsgPurchaseShield) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShield",
        value: MsgPurchaseShield.encode(value).finish()
      };
    },
    withdrawReimbursement(value: MsgWithdrawReimbursement) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursement",
        value: MsgWithdrawReimbursement.encode(value).finish()
      };
    },
    updateSponsor(value: MsgUpdateSponsor) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsor",
        value: MsgUpdateSponsor.encode(value).finish()
      };
    },
    stakeForShield(value: MsgStakeForShield) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShield",
        value: MsgStakeForShield.encode(value).finish()
      };
    },
    unstakeFromShield(value: MsgUnstakeFromShield) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShield",
        value: MsgUnstakeFromShield.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgCreatePool",
        value
      };
    },
    updatePool(value: MsgUpdatePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePool",
        value
      };
    },
    pausePool(value: MsgPausePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgPausePool",
        value
      };
    },
    resumePool(value: MsgResumePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgResumePool",
        value
      };
    },
    depositCollateral(value: MsgDepositCollateral) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateral",
        value
      };
    },
    withdrawCollateral(value: MsgWithdrawCollateral) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateral",
        value
      };
    },
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewards",
        value
      };
    },
    withdrawForeignRewards(value: MsgWithdrawForeignRewards) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards",
        value
      };
    },
    purchaseShield(value: MsgPurchaseShield) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShield",
        value
      };
    },
    withdrawReimbursement(value: MsgWithdrawReimbursement) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursement",
        value
      };
    },
    updateSponsor(value: MsgUpdateSponsor) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsor",
        value
      };
    },
    stakeForShield(value: MsgStakeForShield) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShield",
        value
      };
    },
    unstakeFromShield(value: MsgUnstakeFromShield) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShield",
        value
      };
    }
  },
  fromJSON: {
    createPool(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgCreatePool",
        value: MsgCreatePool.fromJSON(value)
      };
    },
    updatePool(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePool",
        value: MsgUpdatePool.fromJSON(value)
      };
    },
    pausePool(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgPausePool",
        value: MsgPausePool.fromJSON(value)
      };
    },
    resumePool(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgResumePool",
        value: MsgResumePool.fromJSON(value)
      };
    },
    depositCollateral(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateral",
        value: MsgDepositCollateral.fromJSON(value)
      };
    },
    withdrawCollateral(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateral",
        value: MsgWithdrawCollateral.fromJSON(value)
      };
    },
    withdrawRewards(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewards",
        value: MsgWithdrawRewards.fromJSON(value)
      };
    },
    withdrawForeignRewards(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards",
        value: MsgWithdrawForeignRewards.fromJSON(value)
      };
    },
    purchaseShield(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShield",
        value: MsgPurchaseShield.fromJSON(value)
      };
    },
    withdrawReimbursement(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursement",
        value: MsgWithdrawReimbursement.fromJSON(value)
      };
    },
    updateSponsor(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsor",
        value: MsgUpdateSponsor.fromJSON(value)
      };
    },
    stakeForShield(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShield",
        value: MsgStakeForShield.fromJSON(value)
      };
    },
    unstakeFromShield(value: any) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShield",
        value: MsgUnstakeFromShield.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },
    updatePool(value: MsgUpdatePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePool",
        value: MsgUpdatePool.fromPartial(value)
      };
    },
    pausePool(value: MsgPausePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgPausePool",
        value: MsgPausePool.fromPartial(value)
      };
    },
    resumePool(value: MsgResumePool) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgResumePool",
        value: MsgResumePool.fromPartial(value)
      };
    },
    depositCollateral(value: MsgDepositCollateral) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateral",
        value: MsgDepositCollateral.fromPartial(value)
      };
    },
    withdrawCollateral(value: MsgWithdrawCollateral) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateral",
        value: MsgWithdrawCollateral.fromPartial(value)
      };
    },
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewards",
        value: MsgWithdrawRewards.fromPartial(value)
      };
    },
    withdrawForeignRewards(value: MsgWithdrawForeignRewards) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards",
        value: MsgWithdrawForeignRewards.fromPartial(value)
      };
    },
    purchaseShield(value: MsgPurchaseShield) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShield",
        value: MsgPurchaseShield.fromPartial(value)
      };
    },
    withdrawReimbursement(value: MsgWithdrawReimbursement) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursement",
        value: MsgWithdrawReimbursement.fromPartial(value)
      };
    },
    updateSponsor(value: MsgUpdateSponsor) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsor",
        value: MsgUpdateSponsor.fromPartial(value)
      };
    },
    stakeForShield(value: MsgStakeForShield) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShield",
        value: MsgStakeForShield.fromPartial(value)
      };
    },
    unstakeFromShield(value: MsgUnstakeFromShield) {
      return {
        typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShield",
        value: MsgUnstakeFromShield.fromPartial(value)
      };
    }
  }
};