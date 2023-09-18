import { MsgDeposit, MsgWithdraw, MsgSwapExactForTokens, MsgSwapForExactTokens } from "./tx";
export declare const AminoConverter: {
    "/kava.swap.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: MsgDeposit) => import("./tx").MsgDepositAmino;
        fromAmino: (object: import("./tx").MsgDepositAmino) => MsgDeposit;
    };
    "/kava.swap.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: MsgWithdraw) => import("./tx").MsgWithdrawAmino;
        fromAmino: (object: import("./tx").MsgWithdrawAmino) => MsgWithdraw;
    };
    "/kava.swap.v1beta1.MsgSwapExactForTokens": {
        aminoType: string;
        toAmino: (message: MsgSwapExactForTokens) => import("./tx").MsgSwapExactForTokensAmino;
        fromAmino: (object: import("./tx").MsgSwapExactForTokensAmino) => MsgSwapExactForTokens;
    };
    "/kava.swap.v1beta1.MsgSwapForExactTokens": {
        aminoType: string;
        toAmino: (message: MsgSwapForExactTokens) => import("./tx").MsgSwapForExactTokensAmino;
        fromAmino: (object: import("./tx").MsgSwapForExactTokensAmino) => MsgSwapForExactTokens;
    };
};
