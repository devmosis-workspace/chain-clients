import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw } from "./tx";
export interface MsgDepositAminoType extends AminoMsg {
    type: "/kava.savings.v1beta1.MsgDeposit";
    value: {
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgWithdrawAminoType extends AminoMsg {
    type: "/kava.savings.v1beta1.MsgWithdraw";
    value: {
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/kava.savings.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, amount }: MsgDeposit) => MsgDepositAminoType["value"];
        fromAmino: ({ depositor, amount }: MsgDepositAminoType["value"]) => MsgDeposit;
    };
    "/kava.savings.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ depositor, amount }: MsgWithdraw) => MsgWithdrawAminoType["value"];
        fromAmino: ({ depositor, amount }: MsgWithdrawAminoType["value"]) => MsgWithdraw;
    };
};
