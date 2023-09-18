import { MsgCreateCDP, MsgDeposit, MsgWithdraw, MsgDrawDebt, MsgRepayDebt, MsgLiquidate } from "./tx";
export declare const AminoConverter: {
    "/kava.cdp.v1beta1.MsgCreateCDP": {
        aminoType: string;
        toAmino: (message: MsgCreateCDP) => import("./tx").MsgCreateCDPAmino;
        fromAmino: (object: import("./tx").MsgCreateCDPAmino) => MsgCreateCDP;
    };
    "/kava.cdp.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: MsgDeposit) => import("./tx").MsgDepositAmino;
        fromAmino: (object: import("./tx").MsgDepositAmino) => MsgDeposit;
    };
    "/kava.cdp.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: MsgWithdraw) => import("./tx").MsgWithdrawAmino;
        fromAmino: (object: import("./tx").MsgWithdrawAmino) => MsgWithdraw;
    };
    "/kava.cdp.v1beta1.MsgDrawDebt": {
        aminoType: string;
        toAmino: (message: MsgDrawDebt) => import("./tx").MsgDrawDebtAmino;
        fromAmino: (object: import("./tx").MsgDrawDebtAmino) => MsgDrawDebt;
    };
    "/kava.cdp.v1beta1.MsgRepayDebt": {
        aminoType: string;
        toAmino: (message: MsgRepayDebt) => import("./tx").MsgRepayDebtAmino;
        fromAmino: (object: import("./tx").MsgRepayDebtAmino) => MsgRepayDebt;
    };
    "/kava.cdp.v1beta1.MsgLiquidate": {
        aminoType: string;
        toAmino: (message: MsgLiquidate) => import("./tx").MsgLiquidateAmino;
        fromAmino: (object: import("./tx").MsgLiquidateAmino) => MsgLiquidate;
    };
};
