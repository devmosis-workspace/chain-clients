import { MsgLiquidStake, MsgLSMLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeights, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgCalibrateDelegation, MsgClearBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgCreateTradeRoute, MsgDeleteTradeRoute, MsgUpdateTradeRoute, MsgSetCommunityPoolRebate, MsgToggleTradeController } from "./tx";
export const AminoConverter = {
  "/stride.stakeibc.MsgLiquidStake": {
    aminoType: "/stride.stakeibc.MsgLiquidStake",
    toAmino: MsgLiquidStake.toAmino,
    fromAmino: MsgLiquidStake.fromAmino
  },
  "/stride.stakeibc.MsgLSMLiquidStake": {
    aminoType: "/stride.stakeibc.MsgLSMLiquidStake",
    toAmino: MsgLSMLiquidStake.toAmino,
    fromAmino: MsgLSMLiquidStake.fromAmino
  },
  "/stride.stakeibc.MsgRedeemStake": {
    aminoType: "/stride.stakeibc.MsgRedeemStake",
    toAmino: MsgRedeemStake.toAmino,
    fromAmino: MsgRedeemStake.fromAmino
  },
  "/stride.stakeibc.MsgRegisterHostZone": {
    aminoType: "/stride.stakeibc.MsgRegisterHostZone",
    toAmino: MsgRegisterHostZone.toAmino,
    fromAmino: MsgRegisterHostZone.fromAmino
  },
  "/stride.stakeibc.MsgClaimUndelegatedTokens": {
    aminoType: "/stride.stakeibc.MsgClaimUndelegatedTokens",
    toAmino: MsgClaimUndelegatedTokens.toAmino,
    fromAmino: MsgClaimUndelegatedTokens.fromAmino
  },
  "/stride.stakeibc.MsgRebalanceValidators": {
    aminoType: "/stride.stakeibc.MsgRebalanceValidators",
    toAmino: MsgRebalanceValidators.toAmino,
    fromAmino: MsgRebalanceValidators.fromAmino
  },
  "/stride.stakeibc.MsgAddValidators": {
    aminoType: "/stride.stakeibc.MsgAddValidators",
    toAmino: MsgAddValidators.toAmino,
    fromAmino: MsgAddValidators.fromAmino
  },
  "/stride.stakeibc.MsgChangeValidatorWeights": {
    aminoType: "/stride.stakeibc.MsgChangeValidatorWeights",
    toAmino: MsgChangeValidatorWeights.toAmino,
    fromAmino: MsgChangeValidatorWeights.fromAmino
  },
  "/stride.stakeibc.MsgDeleteValidator": {
    aminoType: "/stride.stakeibc.MsgDeleteValidator",
    toAmino: MsgDeleteValidator.toAmino,
    fromAmino: MsgDeleteValidator.fromAmino
  },
  "/stride.stakeibc.MsgRestoreInterchainAccount": {
    aminoType: "/stride.stakeibc.MsgRestoreInterchainAccount",
    toAmino: MsgRestoreInterchainAccount.toAmino,
    fromAmino: MsgRestoreInterchainAccount.fromAmino
  },
  "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
    aminoType: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
    toAmino: MsgUpdateValidatorSharesExchRate.toAmino,
    fromAmino: MsgUpdateValidatorSharesExchRate.fromAmino
  },
  "/stride.stakeibc.MsgCalibrateDelegation": {
    aminoType: "/stride.stakeibc.MsgCalibrateDelegation",
    toAmino: MsgCalibrateDelegation.toAmino,
    fromAmino: MsgCalibrateDelegation.fromAmino
  },
  "/stride.stakeibc.MsgClearBalance": {
    aminoType: "/stride.stakeibc.MsgClearBalance",
    toAmino: MsgClearBalance.toAmino,
    fromAmino: MsgClearBalance.fromAmino
  },
  "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
    aminoType: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
    toAmino: MsgUpdateInnerRedemptionRateBounds.toAmino,
    fromAmino: MsgUpdateInnerRedemptionRateBounds.fromAmino
  },
  "/stride.stakeibc.MsgResumeHostZone": {
    aminoType: "/stride.stakeibc.MsgResumeHostZone",
    toAmino: MsgResumeHostZone.toAmino,
    fromAmino: MsgResumeHostZone.fromAmino
  },
  "/stride.stakeibc.MsgCreateTradeRoute": {
    aminoType: "stride/x/stakeibc/MsgCreateTradeRoute",
    toAmino: MsgCreateTradeRoute.toAmino,
    fromAmino: MsgCreateTradeRoute.fromAmino
  },
  "/stride.stakeibc.MsgDeleteTradeRoute": {
    aminoType: "stride/x/stakeibc/MsgDeleteTradeRoute",
    toAmino: MsgDeleteTradeRoute.toAmino,
    fromAmino: MsgDeleteTradeRoute.fromAmino
  },
  "/stride.stakeibc.MsgUpdateTradeRoute": {
    aminoType: "stride/x/stakeibc/MsgUpdateTradeRoute",
    toAmino: MsgUpdateTradeRoute.toAmino,
    fromAmino: MsgUpdateTradeRoute.fromAmino
  },
  "/stride.stakeibc.MsgSetCommunityPoolRebate": {
    aminoType: "stride/x/stakeibc/MsgSetCommunityPoolRebate",
    toAmino: MsgSetCommunityPoolRebate.toAmino,
    fromAmino: MsgSetCommunityPoolRebate.fromAmino
  },
  "/stride.stakeibc.MsgToggleTradeController": {
    aminoType: "stride/x/stakeibc/MsgToggleTradeController",
    toAmino: MsgToggleTradeController.toAmino,
    fromAmino: MsgToggleTradeController.fromAmino
  }
};