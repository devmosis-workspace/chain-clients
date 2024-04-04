import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLiquidStake, MsgLSMLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeights, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgCalibrateDelegation, MsgClearBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgCreateTradeRoute, MsgDeleteTradeRoute, MsgUpdateTradeRoute, MsgSetCommunityPoolRebate, MsgToggleTradeController } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/stride.stakeibc.MsgLiquidStake", MsgLiquidStake], ["/stride.stakeibc.MsgLSMLiquidStake", MsgLSMLiquidStake], ["/stride.stakeibc.MsgRedeemStake", MsgRedeemStake], ["/stride.stakeibc.MsgRegisterHostZone", MsgRegisterHostZone], ["/stride.stakeibc.MsgClaimUndelegatedTokens", MsgClaimUndelegatedTokens], ["/stride.stakeibc.MsgRebalanceValidators", MsgRebalanceValidators], ["/stride.stakeibc.MsgAddValidators", MsgAddValidators], ["/stride.stakeibc.MsgChangeValidatorWeights", MsgChangeValidatorWeights], ["/stride.stakeibc.MsgDeleteValidator", MsgDeleteValidator], ["/stride.stakeibc.MsgRestoreInterchainAccount", MsgRestoreInterchainAccount], ["/stride.stakeibc.MsgUpdateValidatorSharesExchRate", MsgUpdateValidatorSharesExchRate], ["/stride.stakeibc.MsgCalibrateDelegation", MsgCalibrateDelegation], ["/stride.stakeibc.MsgClearBalance", MsgClearBalance], ["/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds", MsgUpdateInnerRedemptionRateBounds], ["/stride.stakeibc.MsgResumeHostZone", MsgResumeHostZone], ["/stride.stakeibc.MsgCreateTradeRoute", MsgCreateTradeRoute], ["/stride.stakeibc.MsgDeleteTradeRoute", MsgDeleteTradeRoute], ["/stride.stakeibc.MsgUpdateTradeRoute", MsgUpdateTradeRoute], ["/stride.stakeibc.MsgSetCommunityPoolRebate", MsgSetCommunityPoolRebate], ["/stride.stakeibc.MsgToggleTradeController", MsgToggleTradeController]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLiquidStake",
        value: MsgLiquidStake.encode(value).finish()
      };
    },
    lSMLiquidStake(value: MsgLSMLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value: MsgLSMLiquidStake.encode(value).finish()
      };
    },
    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value: MsgRedeemStake.encode(value).finish()
      };
    },
    registerHostZone(value: MsgRegisterHostZone) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value: MsgRegisterHostZone.encode(value).finish()
      };
    },
    claimUndelegatedTokens(value: MsgClaimUndelegatedTokens) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value: MsgClaimUndelegatedTokens.encode(value).finish()
      };
    },
    rebalanceValidators(value: MsgRebalanceValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value: MsgRebalanceValidators.encode(value).finish()
      };
    },
    addValidators(value: MsgAddValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value: MsgAddValidators.encode(value).finish()
      };
    },
    changeValidatorWeight(value: MsgChangeValidatorWeights) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
        value: MsgChangeValidatorWeights.encode(value).finish()
      };
    },
    deleteValidator(value: MsgDeleteValidator) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value: MsgDeleteValidator.encode(value).finish()
      };
    },
    restoreInterchainAccount(value: MsgRestoreInterchainAccount) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value: MsgRestoreInterchainAccount.encode(value).finish()
      };
    },
    updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value: MsgUpdateValidatorSharesExchRate.encode(value).finish()
      };
    },
    calibrateDelegation(value: MsgCalibrateDelegation) {
      return {
        typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
        value: MsgCalibrateDelegation.encode(value).finish()
      };
    },
    clearBalance(value: MsgClearBalance) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value: MsgClearBalance.encode(value).finish()
      };
    },
    updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.encode(value).finish()
      };
    },
    resumeHostZone(value: MsgResumeHostZone) {
      return {
        typeUrl: "/stride.stakeibc.MsgResumeHostZone",
        value: MsgResumeHostZone.encode(value).finish()
      };
    },
    createTradeRoute(value: MsgCreateTradeRoute) {
      return {
        typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
        value: MsgCreateTradeRoute.encode(value).finish()
      };
    },
    deleteTradeRoute(value: MsgDeleteTradeRoute) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
        value: MsgDeleteTradeRoute.encode(value).finish()
      };
    },
    updateTradeRoute(value: MsgUpdateTradeRoute) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
        value: MsgUpdateTradeRoute.encode(value).finish()
      };
    },
    setCommunityPoolRebate(value: MsgSetCommunityPoolRebate) {
      return {
        typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate",
        value: MsgSetCommunityPoolRebate.encode(value).finish()
      };
    },
    toggleTradeController(value: MsgToggleTradeController) {
      return {
        typeUrl: "/stride.stakeibc.MsgToggleTradeController",
        value: MsgToggleTradeController.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLiquidStake",
        value
      };
    },
    lSMLiquidStake(value: MsgLSMLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value
      };
    },
    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value
      };
    },
    registerHostZone(value: MsgRegisterHostZone) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value
      };
    },
    claimUndelegatedTokens(value: MsgClaimUndelegatedTokens) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value
      };
    },
    rebalanceValidators(value: MsgRebalanceValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value
      };
    },
    addValidators(value: MsgAddValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value
      };
    },
    changeValidatorWeight(value: MsgChangeValidatorWeights) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
        value
      };
    },
    deleteValidator(value: MsgDeleteValidator) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value
      };
    },
    restoreInterchainAccount(value: MsgRestoreInterchainAccount) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value
      };
    },
    updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value
      };
    },
    calibrateDelegation(value: MsgCalibrateDelegation) {
      return {
        typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
        value
      };
    },
    clearBalance(value: MsgClearBalance) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value
      };
    },
    updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
        value
      };
    },
    resumeHostZone(value: MsgResumeHostZone) {
      return {
        typeUrl: "/stride.stakeibc.MsgResumeHostZone",
        value
      };
    },
    createTradeRoute(value: MsgCreateTradeRoute) {
      return {
        typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
        value
      };
    },
    deleteTradeRoute(value: MsgDeleteTradeRoute) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
        value
      };
    },
    updateTradeRoute(value: MsgUpdateTradeRoute) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
        value
      };
    },
    setCommunityPoolRebate(value: MsgSetCommunityPoolRebate) {
      return {
        typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate",
        value
      };
    },
    toggleTradeController(value: MsgToggleTradeController) {
      return {
        typeUrl: "/stride.stakeibc.MsgToggleTradeController",
        value
      };
    }
  },
  fromJSON: {
    liquidStake(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgLiquidStake",
        value: MsgLiquidStake.fromJSON(value)
      };
    },
    lSMLiquidStake(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value: MsgLSMLiquidStake.fromJSON(value)
      };
    },
    redeemStake(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value: MsgRedeemStake.fromJSON(value)
      };
    },
    registerHostZone(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value: MsgRegisterHostZone.fromJSON(value)
      };
    },
    claimUndelegatedTokens(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value: MsgClaimUndelegatedTokens.fromJSON(value)
      };
    },
    rebalanceValidators(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value: MsgRebalanceValidators.fromJSON(value)
      };
    },
    addValidators(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value: MsgAddValidators.fromJSON(value)
      };
    },
    changeValidatorWeight(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
        value: MsgChangeValidatorWeights.fromJSON(value)
      };
    },
    deleteValidator(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value: MsgDeleteValidator.fromJSON(value)
      };
    },
    restoreInterchainAccount(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value: MsgRestoreInterchainAccount.fromJSON(value)
      };
    },
    updateValidatorSharesExchRate(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value: MsgUpdateValidatorSharesExchRate.fromJSON(value)
      };
    },
    calibrateDelegation(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
        value: MsgCalibrateDelegation.fromJSON(value)
      };
    },
    clearBalance(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value: MsgClearBalance.fromJSON(value)
      };
    },
    updateInnerRedemptionRateBounds(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.fromJSON(value)
      };
    },
    resumeHostZone(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgResumeHostZone",
        value: MsgResumeHostZone.fromJSON(value)
      };
    },
    createTradeRoute(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
        value: MsgCreateTradeRoute.fromJSON(value)
      };
    },
    deleteTradeRoute(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
        value: MsgDeleteTradeRoute.fromJSON(value)
      };
    },
    updateTradeRoute(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
        value: MsgUpdateTradeRoute.fromJSON(value)
      };
    },
    setCommunityPoolRebate(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate",
        value: MsgSetCommunityPoolRebate.fromJSON(value)
      };
    },
    toggleTradeController(value: any) {
      return {
        typeUrl: "/stride.stakeibc.MsgToggleTradeController",
        value: MsgToggleTradeController.fromJSON(value)
      };
    }
  },
  fromPartial: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLiquidStake",
        value: MsgLiquidStake.fromPartial(value)
      };
    },
    lSMLiquidStake(value: MsgLSMLiquidStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
        value: MsgLSMLiquidStake.fromPartial(value)
      };
    },
    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.stakeibc.MsgRedeemStake",
        value: MsgRedeemStake.fromPartial(value)
      };
    },
    registerHostZone(value: MsgRegisterHostZone) {
      return {
        typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
        value: MsgRegisterHostZone.fromPartial(value)
      };
    },
    claimUndelegatedTokens(value: MsgClaimUndelegatedTokens) {
      return {
        typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
        value: MsgClaimUndelegatedTokens.fromPartial(value)
      };
    },
    rebalanceValidators(value: MsgRebalanceValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
        value: MsgRebalanceValidators.fromPartial(value)
      };
    },
    addValidators(value: MsgAddValidators) {
      return {
        typeUrl: "/stride.stakeibc.MsgAddValidators",
        value: MsgAddValidators.fromPartial(value)
      };
    },
    changeValidatorWeight(value: MsgChangeValidatorWeights) {
      return {
        typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
        value: MsgChangeValidatorWeights.fromPartial(value)
      };
    },
    deleteValidator(value: MsgDeleteValidator) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteValidator",
        value: MsgDeleteValidator.fromPartial(value)
      };
    },
    restoreInterchainAccount(value: MsgRestoreInterchainAccount) {
      return {
        typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
        value: MsgRestoreInterchainAccount.fromPartial(value)
      };
    },
    updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value: MsgUpdateValidatorSharesExchRate.fromPartial(value)
      };
    },
    calibrateDelegation(value: MsgCalibrateDelegation) {
      return {
        typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
        value: MsgCalibrateDelegation.fromPartial(value)
      };
    },
    clearBalance(value: MsgClearBalance) {
      return {
        typeUrl: "/stride.stakeibc.MsgClearBalance",
        value: MsgClearBalance.fromPartial(value)
      };
    },
    updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.fromPartial(value)
      };
    },
    resumeHostZone(value: MsgResumeHostZone) {
      return {
        typeUrl: "/stride.stakeibc.MsgResumeHostZone",
        value: MsgResumeHostZone.fromPartial(value)
      };
    },
    createTradeRoute(value: MsgCreateTradeRoute) {
      return {
        typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
        value: MsgCreateTradeRoute.fromPartial(value)
      };
    },
    deleteTradeRoute(value: MsgDeleteTradeRoute) {
      return {
        typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
        value: MsgDeleteTradeRoute.fromPartial(value)
      };
    },
    updateTradeRoute(value: MsgUpdateTradeRoute) {
      return {
        typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
        value: MsgUpdateTradeRoute.fromPartial(value)
      };
    },
    setCommunityPoolRebate(value: MsgSetCommunityPoolRebate) {
      return {
        typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate",
        value: MsgSetCommunityPoolRebate.fromPartial(value)
      };
    },
    toggleTradeController(value: MsgToggleTradeController) {
      return {
        typeUrl: "/stride.stakeibc.MsgToggleTradeController",
        value: MsgToggleTradeController.fromPartial(value)
      };
    }
  }
};