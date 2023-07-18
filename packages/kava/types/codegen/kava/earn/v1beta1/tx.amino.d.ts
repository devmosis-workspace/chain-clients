import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw } from "./tx";
export interface MsgDepositAminoType extends AminoMsg {
    type: "/kava.earn.v1beta1.MsgDeposit";
    value: {
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        };
        strategy: number;
    };
}
export interface MsgWithdrawAminoType extends AminoMsg {
    type: "/kava.earn.v1beta1.MsgWithdraw";
    value: {
        from: string;
        amount: {
            denom: string;
            amount: string;
        };
        strategy: number;
    };
}
export declare const AminoConverter: {
    "/kava.earn.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, amount, strategy }: MsgDeposit) => MsgDepositAminoType["value"];
        fromAmino: ({ depositor, amount, strategy }: MsgDepositAminoType["value"]) => MsgDeposit;
    };
    "/kava.earn.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ from, amount, strategy }: MsgWithdraw) => MsgWithdrawAminoType["value"];
        fromAmino: ({ from, amount, strategy }: MsgWithdrawAminoType["value"]) => MsgWithdraw;
    };
};
