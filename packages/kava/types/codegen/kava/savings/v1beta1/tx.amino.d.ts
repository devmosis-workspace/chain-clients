import { MsgDeposit, MsgWithdraw } from "./tx";
export declare const AminoConverter: {
    "/kava.savings.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: MsgDeposit) => import("./tx").MsgDepositAmino;
        fromAmino: (object: import("./tx").MsgDepositAmino) => MsgDeposit;
    };
    "/kava.savings.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: MsgWithdraw) => import("./tx").MsgWithdrawAmino;
        fromAmino: (object: import("./tx").MsgWithdrawAmino) => MsgWithdraw;
    };
};
