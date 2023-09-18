import { MsgDeposit, MsgWithdraw, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export declare const AminoConverter: {
    "/kava.hard.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: MsgDeposit) => import("./tx").MsgDepositAmino;
        fromAmino: (object: import("./tx").MsgDepositAmino) => MsgDeposit;
    };
    "/kava.hard.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: MsgWithdraw) => import("./tx").MsgWithdrawAmino;
        fromAmino: (object: import("./tx").MsgWithdrawAmino) => MsgWithdraw;
    };
    "/kava.hard.v1beta1.MsgBorrow": {
        aminoType: string;
        toAmino: (message: MsgBorrow) => import("./tx").MsgBorrowAmino;
        fromAmino: (object: import("./tx").MsgBorrowAmino) => MsgBorrow;
    };
    "/kava.hard.v1beta1.MsgRepay": {
        aminoType: string;
        toAmino: (message: MsgRepay) => import("./tx").MsgRepayAmino;
        fromAmino: (object: import("./tx").MsgRepayAmino) => MsgRepay;
    };
    "/kava.hard.v1beta1.MsgLiquidate": {
        aminoType: string;
        toAmino: (message: MsgLiquidate) => import("./tx").MsgLiquidateAmino;
        fromAmino: (object: import("./tx").MsgLiquidateAmino) => MsgLiquidate;
    };
};
