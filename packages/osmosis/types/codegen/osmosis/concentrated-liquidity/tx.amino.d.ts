import { AminoMsg } from "@cosmjs/amino";
import { MsgCreatePosition, MsgWithdrawPosition, MsgAddToPosition, MsgCollectSpreadRewards, MsgCollectIncentives } from "./tx";
export interface MsgCreatePositionAminoType extends AminoMsg {
    type: "osmosis/concentratedliquidity/create-position";
    value: {
        pool_id: string;
        sender: string;
        lower_tick: string;
        upper_tick: string;
        tokens_provided: {
            denom: string;
            amount: string;
        }[];
        token_min_amount0: string;
        token_min_amount1: string;
    };
}
export interface MsgWithdrawPositionAminoType extends AminoMsg {
    type: "osmosis/concentratedliquidity/withdraw-position";
    value: {
        position_id: string;
        sender: string;
        liquidity_amount: string;
    };
}
export interface MsgAddToPositionAminoType extends AminoMsg {
    type: "osmosis/concentratedliquidity/add-to-position";
    value: {
        position_id: string;
        sender: string;
        amount0: string;
        amount1: string;
        token_min_amount0: string;
        token_min_amount1: string;
    };
}
export interface MsgCollectSpreadRewardsAminoType extends AminoMsg {
    type: "osmosis/concentratedliquidity/collect-spread-rewards";
    value: {
        position_ids: string[];
        sender: string;
    };
}
export interface MsgCollectIncentivesAminoType extends AminoMsg {
    type: "osmosis/concentratedliquidity/collect-incentives";
    value: {
        position_ids: string[];
        sender: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
        aminoType: string;
        toAmino: ({ poolId, sender, lowerTick, upperTick, tokensProvided, tokenMinAmount0, tokenMinAmount1 }: MsgCreatePosition) => MsgCreatePositionAminoType["value"];
        fromAmino: ({ pool_id, sender, lower_tick, upper_tick, tokens_provided, token_min_amount0, token_min_amount1 }: MsgCreatePositionAminoType["value"]) => MsgCreatePosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
        aminoType: string;
        toAmino: ({ positionId, sender, liquidityAmount }: MsgWithdrawPosition) => MsgWithdrawPositionAminoType["value"];
        fromAmino: ({ position_id, sender, liquidity_amount }: MsgWithdrawPositionAminoType["value"]) => MsgWithdrawPosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition": {
        aminoType: string;
        toAmino: ({ positionId, sender, amount0, amount1, tokenMinAmount0, tokenMinAmount1 }: MsgAddToPosition) => MsgAddToPositionAminoType["value"];
        fromAmino: ({ position_id, sender, amount0, amount1, token_min_amount0, token_min_amount1 }: MsgAddToPositionAminoType["value"]) => MsgAddToPosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards": {
        aminoType: string;
        toAmino: ({ positionIds, sender }: MsgCollectSpreadRewards) => MsgCollectSpreadRewardsAminoType["value"];
        fromAmino: ({ position_ids, sender }: MsgCollectSpreadRewardsAminoType["value"]) => MsgCollectSpreadRewards;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
        aminoType: string;
        toAmino: ({ positionIds, sender }: MsgCollectIncentives) => MsgCollectIncentivesAminoType["value"];
        fromAmino: ({ position_ids, sender }: MsgCollectIncentivesAminoType["value"]) => MsgCollectIncentives;
    };
};
