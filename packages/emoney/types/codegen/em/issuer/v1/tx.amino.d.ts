import { AminoMsg } from "@cosmjs/amino";
import { MsgIncreaseMintable, MsgDecreaseMintable, MsgRevokeLiquidityProvider, MsgSetInflation } from "./tx";
export interface MsgIncreaseMintableAminoType extends AminoMsg {
    type: "/em.issuer.v1.MsgIncreaseMintable";
    value: {
        issuer: string;
        liquidity_provider: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgDecreaseMintableAminoType extends AminoMsg {
    type: "/em.issuer.v1.MsgDecreaseMintable";
    value: {
        issuer: string;
        liquidity_provider: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgRevokeLiquidityProviderAminoType extends AminoMsg {
    type: "/em.issuer.v1.MsgRevokeLiquidityProvider";
    value: {
        issuer: string;
        liquidity_provider: string;
    };
}
export interface MsgSetInflationAminoType extends AminoMsg {
    type: "/em.issuer.v1.MsgSetInflation";
    value: {
        issuer: string;
        denom: string;
        inflation_rate: string;
    };
}
export declare const AminoConverter: {
    "/em.issuer.v1.MsgIncreaseMintable": {
        aminoType: string;
        toAmino: ({ issuer, liquidityProvider, amount }: MsgIncreaseMintable) => MsgIncreaseMintableAminoType["value"];
        fromAmino: ({ issuer, liquidity_provider, amount }: MsgIncreaseMintableAminoType["value"]) => MsgIncreaseMintable;
    };
    "/em.issuer.v1.MsgDecreaseMintable": {
        aminoType: string;
        toAmino: ({ issuer, liquidityProvider, amount }: MsgDecreaseMintable) => MsgDecreaseMintableAminoType["value"];
        fromAmino: ({ issuer, liquidity_provider, amount }: MsgDecreaseMintableAminoType["value"]) => MsgDecreaseMintable;
    };
    "/em.issuer.v1.MsgRevokeLiquidityProvider": {
        aminoType: string;
        toAmino: ({ issuer, liquidityProvider }: MsgRevokeLiquidityProvider) => MsgRevokeLiquidityProviderAminoType["value"];
        fromAmino: ({ issuer, liquidity_provider }: MsgRevokeLiquidityProviderAminoType["value"]) => MsgRevokeLiquidityProvider;
    };
    "/em.issuer.v1.MsgSetInflation": {
        aminoType: string;
        toAmino: ({ issuer, denom, inflationRate }: MsgSetInflation) => MsgSetInflationAminoType["value"];
        fromAmino: ({ issuer, denom, inflation_rate }: MsgSetInflationAminoType["value"]) => MsgSetInflation;
    };
};
