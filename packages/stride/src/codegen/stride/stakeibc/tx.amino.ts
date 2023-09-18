import { MsgLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
export const AminoConverter = {
  "/stride.stakeibc.MsgLiquidStake": {
    aminoType: "/stride.stakeibc.MsgLiquidStake",
    toAmino: MsgLiquidStake.toAmino,
    fromAmino: MsgLiquidStake.fromAmino
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
  "/stride.stakeibc.MsgChangeValidatorWeight": {
    aminoType: "/stride.stakeibc.MsgChangeValidatorWeight",
    toAmino: MsgChangeValidatorWeight.toAmino,
    fromAmino: MsgChangeValidatorWeight.fromAmino
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
  "/stride.stakeibc.MsgClearBalance": {
    aminoType: "/stride.stakeibc.MsgClearBalance",
    toAmino: MsgClearBalance.toAmino,
    fromAmino: MsgClearBalance.fromAmino
  }
};