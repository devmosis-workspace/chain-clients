import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/evmos.inflation.v1.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      mint_denom: string;
      exponential_calculation: {
        a: string;
        r: string;
        c: string;
        bonding_target: string;
        max_variance: string;
      };
      inflation_distribution: {
        staking_rewards: string;
        usage_incentives: string;
        community_pool: string;
      };
      enable_inflation: boolean;
    };
  };
}
export const AminoConverter = {
  "/evmos.inflation.v1.MsgUpdateParams": {
    aminoType: "/evmos.inflation.v1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          mint_denom: params.mintDenom,
          exponential_calculation: {
            a: params.exponentialCalculation.a,
            r: params.exponentialCalculation.r,
            c: params.exponentialCalculation.c,
            bonding_target: params.exponentialCalculation.bondingTarget,
            max_variance: params.exponentialCalculation.maxVariance
          },
          inflation_distribution: {
            staking_rewards: params.inflationDistribution.stakingRewards,
            usage_incentives: params.inflationDistribution.usageIncentives,
            community_pool: params.inflationDistribution.communityPool
          },
          enable_inflation: params.enableInflation
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
          mintDenom: params.mint_denom,
          exponentialCalculation: {
            a: params.exponential_calculation.a,
            r: params.exponential_calculation.r,
            c: params.exponential_calculation.c,
            bondingTarget: params.exponential_calculation.bonding_target,
            maxVariance: params.exponential_calculation.max_variance
          },
          inflationDistribution: {
            stakingRewards: params.inflation_distribution.staking_rewards,
            usageIncentives: params.inflation_distribution.usage_incentives,
            communityPool: params.inflation_distribution.community_pool
          },
          enableInflation: params.enable_inflation
        }
      };
    }
  }
};