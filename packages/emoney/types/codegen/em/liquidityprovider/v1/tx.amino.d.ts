import { AminoMsg } from "@cosmjs/amino";
import { MsgMintTokens, MsgBurnTokens } from "./tx";
export interface MsgMintTokensAminoType extends AminoMsg {
    type: "/em.liquidityprovider.v1.MsgMintTokens";
    value: {
        liquidity_provider: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgBurnTokensAminoType extends AminoMsg {
    type: "/em.liquidityprovider.v1.MsgBurnTokens";
    value: {
        liquidity_provider: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/em.liquidityprovider.v1.MsgMintTokens": {
        aminoType: string;
        toAmino: ({ liquidityProvider, amount }: MsgMintTokens) => MsgMintTokensAminoType["value"];
        fromAmino: ({ liquidity_provider, amount }: MsgMintTokensAminoType["value"]) => MsgMintTokens;
    };
    "/em.liquidityprovider.v1.MsgBurnTokens": {
        aminoType: string;
        toAmino: ({ liquidityProvider, amount }: MsgBurnTokens) => MsgBurnTokensAminoType["value"];
        fromAmino: ({ liquidity_provider, amount }: MsgBurnTokensAminoType["value"]) => MsgBurnTokens;
    };
};
