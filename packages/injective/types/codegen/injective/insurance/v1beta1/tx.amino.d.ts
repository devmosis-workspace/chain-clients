import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
export interface MsgCreateInsuranceFundAminoType extends AminoMsg {
    type: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
    value: {
        sender: string;
        ticker: string;
        quote_denom: string;
        oracle_base: string;
        oracle_quote: string;
        oracle_type: number;
        expiry: string;
        initial_deposit: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgUnderwriteAminoType extends AminoMsg {
    type: "/injective.insurance.v1beta1.MsgUnderwrite";
    value: {
        sender: string;
        market_id: string;
        deposit: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgRequestRedemptionAminoType extends AminoMsg {
    type: "/injective.insurance.v1beta1.MsgRequestRedemption";
    value: {
        sender: string;
        market_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/injective.insurance.v1beta1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            default_redemption_notice_period_duration: {
                seconds: string;
                nanos: number;
            };
        };
    };
}
export declare const AminoConverter: {
    "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
        aminoType: string;
        toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleType, expiry, initialDeposit }: MsgCreateInsuranceFund) => MsgCreateInsuranceFundAminoType["value"];
        fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_type, expiry, initial_deposit }: MsgCreateInsuranceFundAminoType["value"]) => MsgCreateInsuranceFund;
    };
    "/injective.insurance.v1beta1.MsgUnderwrite": {
        aminoType: string;
        toAmino: ({ sender, marketId, deposit }: MsgUnderwrite) => MsgUnderwriteAminoType["value"];
        fromAmino: ({ sender, market_id, deposit }: MsgUnderwriteAminoType["value"]) => MsgUnderwrite;
    };
    "/injective.insurance.v1beta1.MsgRequestRedemption": {
        aminoType: string;
        toAmino: ({ sender, marketId, amount }: MsgRequestRedemption) => MsgRequestRedemptionAminoType["value"];
        fromAmino: ({ sender, market_id, amount }: MsgRequestRedemptionAminoType["value"]) => MsgRequestRedemption;
    };
    "/injective.insurance.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
