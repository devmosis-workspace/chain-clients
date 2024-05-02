import { MsgCreatePool, MsgUpdatePool, MsgPausePool, MsgResumePool, MsgDepositCollateral, MsgWithdrawCollateral, MsgWithdrawRewards, MsgWithdrawForeignRewards, MsgPurchaseShield, MsgWithdrawReimbursement, MsgUpdateSponsor, MsgStakeForShield, MsgUnstakeFromShield } from "./tx";
export declare const AminoConverter: {
    "/shentu.shield.v1alpha1.MsgCreatePool": {
        aminoType: string;
        toAmino: (message: MsgCreatePool) => import("./tx").MsgCreatePoolAmino;
        fromAmino: (object: import("./tx").MsgCreatePoolAmino) => MsgCreatePool;
    };
    "/shentu.shield.v1alpha1.MsgUpdatePool": {
        aminoType: string;
        toAmino: (message: MsgUpdatePool) => import("./tx").MsgUpdatePoolAmino;
        fromAmino: (object: import("./tx").MsgUpdatePoolAmino) => MsgUpdatePool;
    };
    "/shentu.shield.v1alpha1.MsgPausePool": {
        aminoType: string;
        toAmino: (message: MsgPausePool) => import("./tx").MsgPausePoolAmino;
        fromAmino: (object: import("./tx").MsgPausePoolAmino) => MsgPausePool;
    };
    "/shentu.shield.v1alpha1.MsgResumePool": {
        aminoType: string;
        toAmino: (message: MsgResumePool) => import("./tx").MsgResumePoolAmino;
        fromAmino: (object: import("./tx").MsgResumePoolAmino) => MsgResumePool;
    };
    "/shentu.shield.v1alpha1.MsgDepositCollateral": {
        aminoType: string;
        toAmino: (message: MsgDepositCollateral) => import("./tx").MsgDepositCollateralAmino;
        fromAmino: (object: import("./tx").MsgDepositCollateralAmino) => MsgDepositCollateral;
    };
    "/shentu.shield.v1alpha1.MsgWithdrawCollateral": {
        aminoType: string;
        toAmino: (message: MsgWithdrawCollateral) => import("./tx").MsgWithdrawCollateralAmino;
        fromAmino: (object: import("./tx").MsgWithdrawCollateralAmino) => MsgWithdrawCollateral;
    };
    "/shentu.shield.v1alpha1.MsgWithdrawRewards": {
        aminoType: string;
        toAmino: (message: MsgWithdrawRewards) => import("./tx").MsgWithdrawRewardsAmino;
        fromAmino: (object: import("./tx").MsgWithdrawRewardsAmino) => MsgWithdrawRewards;
    };
    "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards": {
        aminoType: string;
        toAmino: (message: MsgWithdrawForeignRewards) => import("./tx").MsgWithdrawForeignRewardsAmino;
        fromAmino: (object: import("./tx").MsgWithdrawForeignRewardsAmino) => MsgWithdrawForeignRewards;
    };
    "/shentu.shield.v1alpha1.MsgPurchaseShield": {
        aminoType: string;
        toAmino: (message: MsgPurchaseShield) => import("./tx").MsgPurchaseShieldAmino;
        fromAmino: (object: import("./tx").MsgPurchaseShieldAmino) => MsgPurchaseShield;
    };
    "/shentu.shield.v1alpha1.MsgWithdrawReimbursement": {
        aminoType: string;
        toAmino: (message: MsgWithdrawReimbursement) => import("./tx").MsgWithdrawReimbursementAmino;
        fromAmino: (object: import("./tx").MsgWithdrawReimbursementAmino) => MsgWithdrawReimbursement;
    };
    "/shentu.shield.v1alpha1.MsgUpdateSponsor": {
        aminoType: string;
        toAmino: (message: MsgUpdateSponsor) => import("./tx").MsgUpdateSponsorAmino;
        fromAmino: (object: import("./tx").MsgUpdateSponsorAmino) => MsgUpdateSponsor;
    };
    "/shentu.shield.v1alpha1.MsgStakeForShield": {
        aminoType: string;
        toAmino: (message: MsgStakeForShield) => import("./tx").MsgStakeForShieldAmino;
        fromAmino: (object: import("./tx").MsgStakeForShieldAmino) => MsgStakeForShield;
    };
    "/shentu.shield.v1alpha1.MsgUnstakeFromShield": {
        aminoType: string;
        toAmino: (message: MsgUnstakeFromShield) => import("./tx").MsgUnstakeFromShieldAmino;
        fromAmino: (object: import("./tx").MsgUnstakeFromShieldAmino) => MsgUnstakeFromShield;
    };
};
