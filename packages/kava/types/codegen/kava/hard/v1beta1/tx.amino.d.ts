import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export interface MsgDepositAminoType extends AminoMsg {
    type: "/kava.hard.v1beta1.MsgDeposit";
    value: {
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgWithdrawAminoType extends AminoMsg {
    type: "/kava.hard.v1beta1.MsgWithdraw";
    value: {
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgBorrowAminoType extends AminoMsg {
    type: "/kava.hard.v1beta1.MsgBorrow";
    value: {
        borrower: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgRepayAminoType extends AminoMsg {
    type: "/kava.hard.v1beta1.MsgRepay";
    value: {
        sender: string;
        owner: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgLiquidateAminoType extends AminoMsg {
    type: "/kava.hard.v1beta1.MsgLiquidate";
    value: {
        keeper: string;
        borrower: string;
    };
}
export declare const AminoConverter: {
    "/kava.hard.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, amount }: MsgDeposit) => MsgDepositAminoType["value"];
        fromAmino: ({ depositor, amount }: MsgDepositAminoType["value"]) => MsgDeposit;
    };
    "/kava.hard.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ depositor, amount }: MsgWithdraw) => MsgWithdrawAminoType["value"];
        fromAmino: ({ depositor, amount }: MsgWithdrawAminoType["value"]) => MsgWithdraw;
    };
    "/kava.hard.v1beta1.MsgBorrow": {
        aminoType: string;
        toAmino: ({ borrower, amount }: MsgBorrow) => MsgBorrowAminoType["value"];
        fromAmino: ({ borrower, amount }: MsgBorrowAminoType["value"]) => MsgBorrow;
    };
    "/kava.hard.v1beta1.MsgRepay": {
        aminoType: string;
        toAmino: ({ sender, owner, amount }: MsgRepay) => MsgRepayAminoType["value"];
        fromAmino: ({ sender, owner, amount }: MsgRepayAminoType["value"]) => MsgRepay;
    };
    "/kava.hard.v1beta1.MsgLiquidate": {
        aminoType: string;
        toAmino: ({ keeper, borrower }: MsgLiquidate) => MsgLiquidateAminoType["value"];
        fromAmino: ({ keeper, borrower }: MsgLiquidateAminoType["value"]) => MsgLiquidate;
    };
};
