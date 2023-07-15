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
export const AminoConverter = {
  "/em.liquidityprovider.v1.MsgMintTokens": {
    aminoType: "/em.liquidityprovider.v1.MsgMintTokens",
    toAmino: ({
      liquidityProvider,
      amount
    }: MsgMintTokens): MsgMintTokensAminoType["value"] => {
      return {
        liquidity_provider: liquidityProvider,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      liquidity_provider,
      amount
    }: MsgMintTokensAminoType["value"]): MsgMintTokens => {
      return {
        liquidityProvider: liquidity_provider,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/em.liquidityprovider.v1.MsgBurnTokens": {
    aminoType: "/em.liquidityprovider.v1.MsgBurnTokens",
    toAmino: ({
      liquidityProvider,
      amount
    }: MsgBurnTokens): MsgBurnTokensAminoType["value"] => {
      return {
        liquidity_provider: liquidityProvider,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      liquidity_provider,
      amount
    }: MsgBurnTokensAminoType["value"]): MsgBurnTokens => {
      return {
        liquidityProvider: liquidity_provider,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};