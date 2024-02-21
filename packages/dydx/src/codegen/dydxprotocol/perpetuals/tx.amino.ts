import { AminoMsg } from "@cosmjs/amino";
import { MsgAddPremiumVotes, MsgCreatePerpetual, MsgSetLiquidityTier, MsgUpdatePerpetualParams, MsgUpdateParams } from "./tx";
export interface MsgAddPremiumVotesAminoType extends AminoMsg {
  type: "/dydxprotocol.perpetuals.MsgAddPremiumVotes";
  value: {
    votes: {
      perpetual_id: number;
      premium_ppm: number;
    }[];
  };
}
export interface MsgCreatePerpetualAminoType extends AminoMsg {
  type: "/dydxprotocol.perpetuals.MsgCreatePerpetual";
  value: {
    authority: string;
    params: {
      id: number;
      ticker: string;
      market_id: number;
      atomic_resolution: number;
      default_funding_ppm: number;
      liquidity_tier: number;
    };
  };
}
export interface MsgSetLiquidityTierAminoType extends AminoMsg {
  type: "/dydxprotocol.perpetuals.MsgSetLiquidityTier";
  value: {
    authority: string;
    liquidity_tier: {
      id: number;
      name: string;
      initial_margin_ppm: number;
      maintenance_fraction_ppm: number;
      base_position_notional: string;
      impact_notional: string;
    };
  };
}
export interface MsgUpdatePerpetualParamsAminoType extends AminoMsg {
  type: "/dydxprotocol.perpetuals.MsgUpdatePerpetualParams";
  value: {
    authority: string;
    perpetual_params: {
      id: number;
      ticker: string;
      market_id: number;
      atomic_resolution: number;
      default_funding_ppm: number;
      liquidity_tier: number;
    };
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/dydxprotocol.perpetuals.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      funding_rate_clamp_factor_ppm: number;
      premium_vote_clamp_factor_ppm: number;
      min_num_votes_per_sample: number;
    };
  };
}
export const AminoConverter = {
  "/dydxprotocol.perpetuals.MsgAddPremiumVotes": {
    aminoType: "/dydxprotocol.perpetuals.MsgAddPremiumVotes",
    toAmino: ({
      votes
    }: MsgAddPremiumVotes): MsgAddPremiumVotesAminoType["value"] => {
      return {
        votes: votes.map(el0 => ({
          perpetual_id: el0.perpetualId,
          premium_ppm: el0.premiumPpm
        }))
      };
    },
    fromAmino: ({
      votes
    }: MsgAddPremiumVotesAminoType["value"]): MsgAddPremiumVotes => {
      return {
        votes: votes.map(el0 => ({
          perpetualId: el0.perpetual_id,
          premiumPpm: el0.premium_ppm
        }))
      };
    }
  },
  "/dydxprotocol.perpetuals.MsgCreatePerpetual": {
    aminoType: "/dydxprotocol.perpetuals.MsgCreatePerpetual",
    toAmino: ({
      authority,
      params
    }: MsgCreatePerpetual): MsgCreatePerpetualAminoType["value"] => {
      return {
        authority,
        params: {
          id: params.id,
          ticker: params.ticker,
          market_id: params.marketId,
          atomic_resolution: params.atomicResolution,
          default_funding_ppm: params.defaultFundingPpm,
          liquidity_tier: params.liquidityTier
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgCreatePerpetualAminoType["value"]): MsgCreatePerpetual => {
      return {
        authority,
        params: {
          id: params.id,
          ticker: params.ticker,
          marketId: params.market_id,
          atomicResolution: params.atomic_resolution,
          defaultFundingPpm: params.default_funding_ppm,
          liquidityTier: params.liquidity_tier
        }
      };
    }
  },
  "/dydxprotocol.perpetuals.MsgSetLiquidityTier": {
    aminoType: "/dydxprotocol.perpetuals.MsgSetLiquidityTier",
    toAmino: ({
      authority,
      liquidityTier
    }: MsgSetLiquidityTier): MsgSetLiquidityTierAminoType["value"] => {
      return {
        authority,
        liquidity_tier: {
          id: liquidityTier.id,
          name: liquidityTier.name,
          initial_margin_ppm: liquidityTier.initialMarginPpm,
          maintenance_fraction_ppm: liquidityTier.maintenanceFractionPpm,
          base_position_notional: liquidityTier.basePositionNotional.toString(),
          impact_notional: liquidityTier.impactNotional.toString()
        }
      };
    },
    fromAmino: ({
      authority,
      liquidity_tier
    }: MsgSetLiquidityTierAminoType["value"]): MsgSetLiquidityTier => {
      return {
        authority,
        liquidityTier: {
          id: liquidity_tier.id,
          name: liquidity_tier.name,
          initialMarginPpm: liquidity_tier.initial_margin_ppm,
          maintenanceFractionPpm: liquidity_tier.maintenance_fraction_ppm,
          basePositionNotional: BigInt(liquidity_tier.base_position_notional),
          impactNotional: BigInt(liquidity_tier.impact_notional)
        }
      };
    }
  },
  "/dydxprotocol.perpetuals.MsgUpdatePerpetualParams": {
    aminoType: "/dydxprotocol.perpetuals.MsgUpdatePerpetualParams",
    toAmino: ({
      authority,
      perpetualParams
    }: MsgUpdatePerpetualParams): MsgUpdatePerpetualParamsAminoType["value"] => {
      return {
        authority,
        perpetual_params: {
          id: perpetualParams.id,
          ticker: perpetualParams.ticker,
          market_id: perpetualParams.marketId,
          atomic_resolution: perpetualParams.atomicResolution,
          default_funding_ppm: perpetualParams.defaultFundingPpm,
          liquidity_tier: perpetualParams.liquidityTier
        }
      };
    },
    fromAmino: ({
      authority,
      perpetual_params
    }: MsgUpdatePerpetualParamsAminoType["value"]): MsgUpdatePerpetualParams => {
      return {
        authority,
        perpetualParams: {
          id: perpetual_params.id,
          ticker: perpetual_params.ticker,
          marketId: perpetual_params.market_id,
          atomicResolution: perpetual_params.atomic_resolution,
          defaultFundingPpm: perpetual_params.default_funding_ppm,
          liquidityTier: perpetual_params.liquidity_tier
        }
      };
    }
  },
  "/dydxprotocol.perpetuals.MsgUpdateParams": {
    aminoType: "/dydxprotocol.perpetuals.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          funding_rate_clamp_factor_ppm: params.fundingRateClampFactorPpm,
          premium_vote_clamp_factor_ppm: params.premiumVoteClampFactorPpm,
          min_num_votes_per_sample: params.minNumVotesPerSample
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          fundingRateClampFactorPpm: params.funding_rate_clamp_factor_ppm,
          premiumVoteClampFactorPpm: params.premium_vote_clamp_factor_ppm,
          minNumVotesPerSample: params.min_num_votes_per_sample
        }
      };
    }
  }
};