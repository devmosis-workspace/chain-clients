import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export interface MsgCreateStableswapPoolAminoType extends AminoMsg {
    type: "osmosis/gamm/create-stableswap-pool";
    value: {
        sender: string;
        pool_params: {
            swap_fee: string;
            exit_fee: string;
        };
        initial_pool_liquidity: {
            denom: string;
            amount: string;
        }[];
        scaling_factors: string[];
        future_pool_governor: string;
        scaling_factor_controller: string;
    };
}
export interface MsgStableSwapAdjustScalingFactorsAminoType extends AminoMsg {
    type: "osmosis/gamm/stableswap-adjust-scaling-factors";
    value: {
        sender: string;
        pool_id: string;
        scaling_factors: string[];
    };
}
export declare const AminoConverter: {
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
        aminoType: string;
        toAmino: ({ sender, poolParams, initialPoolLiquidity, scalingFactors, futurePoolGovernor, scalingFactorController }: MsgCreateStableswapPool) => MsgCreateStableswapPoolAminoType["value"];
        fromAmino: ({ sender, pool_params, initial_pool_liquidity, scaling_factors, future_pool_governor, scaling_factor_controller }: MsgCreateStableswapPoolAminoType["value"]) => MsgCreateStableswapPool;
    };
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
        aminoType: string;
        toAmino: ({ sender, poolId, scalingFactors }: MsgStableSwapAdjustScalingFactors) => MsgStableSwapAdjustScalingFactorsAminoType["value"];
        fromAmino: ({ sender, pool_id, scaling_factors }: MsgStableSwapAdjustScalingFactorsAminoType["value"]) => MsgStableSwapAdjustScalingFactors;
    };
};
