import { MsgCreatePool, MsgUpdatePool, MsgPausePool, MsgResumePool, MsgDepositCollateral, MsgWithdrawCollateral, MsgWithdrawRewards, MsgWithdrawForeignRewards, MsgPurchaseShield, MsgWithdrawReimbursement, MsgUpdateSponsor, MsgStakeForShield, MsgUnstakeFromShield } from "./tx";
export const AminoConverter = {
  "/shentu.shield.v1alpha1.MsgCreatePool": {
    aminoType: "/shentu.shield.v1alpha1.MsgCreatePool",
    toAmino: MsgCreatePool.toAmino,
    fromAmino: MsgCreatePool.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgUpdatePool": {
    aminoType: "/shentu.shield.v1alpha1.MsgUpdatePool",
    toAmino: MsgUpdatePool.toAmino,
    fromAmino: MsgUpdatePool.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgPausePool": {
    aminoType: "/shentu.shield.v1alpha1.MsgPausePool",
    toAmino: MsgPausePool.toAmino,
    fromAmino: MsgPausePool.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgResumePool": {
    aminoType: "/shentu.shield.v1alpha1.MsgResumePool",
    toAmino: MsgResumePool.toAmino,
    fromAmino: MsgResumePool.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgDepositCollateral": {
    aminoType: "/shentu.shield.v1alpha1.MsgDepositCollateral",
    toAmino: MsgDepositCollateral.toAmino,
    fromAmino: MsgDepositCollateral.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgWithdrawCollateral": {
    aminoType: "/shentu.shield.v1alpha1.MsgWithdrawCollateral",
    toAmino: MsgWithdrawCollateral.toAmino,
    fromAmino: MsgWithdrawCollateral.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgWithdrawRewards": {
    aminoType: "/shentu.shield.v1alpha1.MsgWithdrawRewards",
    toAmino: MsgWithdrawRewards.toAmino,
    fromAmino: MsgWithdrawRewards.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards": {
    aminoType: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards",
    toAmino: MsgWithdrawForeignRewards.toAmino,
    fromAmino: MsgWithdrawForeignRewards.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgPurchaseShield": {
    aminoType: "/shentu.shield.v1alpha1.MsgPurchaseShield",
    toAmino: MsgPurchaseShield.toAmino,
    fromAmino: MsgPurchaseShield.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgWithdrawReimbursement": {
    aminoType: "/shentu.shield.v1alpha1.MsgWithdrawReimbursement",
    toAmino: MsgWithdrawReimbursement.toAmino,
    fromAmino: MsgWithdrawReimbursement.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgUpdateSponsor": {
    aminoType: "/shentu.shield.v1alpha1.MsgUpdateSponsor",
    toAmino: MsgUpdateSponsor.toAmino,
    fromAmino: MsgUpdateSponsor.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgStakeForShield": {
    aminoType: "/shentu.shield.v1alpha1.MsgStakeForShield",
    toAmino: MsgStakeForShield.toAmino,
    fromAmino: MsgStakeForShield.fromAmino
  },
  "/shentu.shield.v1alpha1.MsgUnstakeFromShield": {
    aminoType: "/shentu.shield.v1alpha1.MsgUnstakeFromShield",
    toAmino: MsgUnstakeFromShield.toAmino,
    fromAmino: MsgUnstakeFromShield.fromAmino
  }
};