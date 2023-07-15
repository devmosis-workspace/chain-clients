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
export const AminoConverter = {
  "/em.issuer.v1.MsgIncreaseMintable": {
    aminoType: "/em.issuer.v1.MsgIncreaseMintable",
    toAmino: ({
      issuer,
      liquidityProvider,
      amount
    }: MsgIncreaseMintable): MsgIncreaseMintableAminoType["value"] => {
      return {
        issuer,
        liquidity_provider: liquidityProvider,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      issuer,
      liquidity_provider,
      amount
    }: MsgIncreaseMintableAminoType["value"]): MsgIncreaseMintable => {
      return {
        issuer,
        liquidityProvider: liquidity_provider,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/em.issuer.v1.MsgDecreaseMintable": {
    aminoType: "/em.issuer.v1.MsgDecreaseMintable",
    toAmino: ({
      issuer,
      liquidityProvider,
      amount
    }: MsgDecreaseMintable): MsgDecreaseMintableAminoType["value"] => {
      return {
        issuer,
        liquidity_provider: liquidityProvider,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      issuer,
      liquidity_provider,
      amount
    }: MsgDecreaseMintableAminoType["value"]): MsgDecreaseMintable => {
      return {
        issuer,
        liquidityProvider: liquidity_provider,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/em.issuer.v1.MsgRevokeLiquidityProvider": {
    aminoType: "/em.issuer.v1.MsgRevokeLiquidityProvider",
    toAmino: ({
      issuer,
      liquidityProvider
    }: MsgRevokeLiquidityProvider): MsgRevokeLiquidityProviderAminoType["value"] => {
      return {
        issuer,
        liquidity_provider: liquidityProvider
      };
    },
    fromAmino: ({
      issuer,
      liquidity_provider
    }: MsgRevokeLiquidityProviderAminoType["value"]): MsgRevokeLiquidityProvider => {
      return {
        issuer,
        liquidityProvider: liquidity_provider
      };
    }
  },
  "/em.issuer.v1.MsgSetInflation": {
    aminoType: "/em.issuer.v1.MsgSetInflation",
    toAmino: ({
      issuer,
      denom,
      inflationRate
    }: MsgSetInflation): MsgSetInflationAminoType["value"] => {
      return {
        issuer,
        denom,
        inflation_rate: inflationRate
      };
    },
    fromAmino: ({
      issuer,
      denom,
      inflation_rate
    }: MsgSetInflationAminoType["value"]): MsgSetInflation => {
      return {
        issuer,
        denom,
        inflationRate: inflation_rate
      };
    }
  }
};