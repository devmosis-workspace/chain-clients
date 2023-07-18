import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw, MsgSwapExactForTokens, MsgSwapForExactTokens } from "./tx";
export interface MsgDepositAminoType extends AminoMsg {
    type: "/kava.swap.v1beta1.MsgDeposit";
    value: {
        depositor: string;
        token_a: {
            denom: string;
            amount: string;
        };
        token_b: {
            denom: string;
            amount: string;
        };
        slippage: string;
        deadline: string;
    };
}
export interface MsgWithdrawAminoType extends AminoMsg {
    type: "/kava.swap.v1beta1.MsgWithdraw";
    value: {
        from: string;
        shares: string;
        min_token_a: {
            denom: string;
            amount: string;
        };
        min_token_b: {
            denom: string;
            amount: string;
        };
        deadline: string;
    };
}
export interface MsgSwapExactForTokensAminoType extends AminoMsg {
    type: "/kava.swap.v1beta1.MsgSwapExactForTokens";
    value: {
        requester: string;
        exact_token_a: {
            denom: string;
            amount: string;
        };
        token_b: {
            denom: string;
            amount: string;
        };
        slippage: string;
        deadline: string;
    };
}
export interface MsgSwapForExactTokensAminoType extends AminoMsg {
    type: "/kava.swap.v1beta1.MsgSwapForExactTokens";
    value: {
        requester: string;
        token_a: {
            denom: string;
            amount: string;
        };
        exact_token_b: {
            denom: string;
            amount: string;
        };
        slippage: string;
        deadline: string;
    };
}
export declare const AminoConverter: {
    "/kava.swap.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, tokenA, tokenB, slippage, deadline }: MsgDeposit) => MsgDepositAminoType["value"];
        fromAmino: ({ depositor, token_a, token_b, slippage, deadline }: MsgDepositAminoType["value"]) => MsgDeposit;
    };
    "/kava.swap.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ from, shares, minTokenA, minTokenB, deadline }: MsgWithdraw) => MsgWithdrawAminoType["value"];
        fromAmino: ({ from, shares, min_token_a, min_token_b, deadline }: MsgWithdrawAminoType["value"]) => MsgWithdraw;
    };
    "/kava.swap.v1beta1.MsgSwapExactForTokens": {
        aminoType: string;
        toAmino: ({ requester, exactTokenA, tokenB, slippage, deadline }: MsgSwapExactForTokens) => MsgSwapExactForTokensAminoType["value"];
        fromAmino: ({ requester, exact_token_a, token_b, slippage, deadline }: MsgSwapExactForTokensAminoType["value"]) => MsgSwapExactForTokens;
    };
    "/kava.swap.v1beta1.MsgSwapForExactTokens": {
        aminoType: string;
        toAmino: ({ requester, tokenA, exactTokenB, slippage, deadline }: MsgSwapForExactTokens) => MsgSwapForExactTokensAminoType["value"];
        fromAmino: ({ requester, token_a, exact_token_b, slippage, deadline }: MsgSwapForExactTokensAminoType["value"]) => MsgSwapForExactTokens;
    };
};
