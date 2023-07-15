import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
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
export const AminoConverter = {
  "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
    aminoType: "osmosis/concentratedliquidity/create-position",
    toAmino: ({
      poolId,
      sender,
      lowerTick,
      upperTick,
      tokensProvided,
      tokenMinAmount0,
      tokenMinAmount1
    }: MsgCreatePosition): MsgCreatePositionAminoType["value"] => {
      return {
        pool_id: poolId.toString(),
        sender,
        lower_tick: lowerTick.toString(),
        upper_tick: upperTick.toString(),
        tokens_provided: tokensProvided.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        token_min_amount0: tokenMinAmount0,
        token_min_amount1: tokenMinAmount1
      };
    },
    fromAmino: ({
      pool_id,
      sender,
      lower_tick,
      upper_tick,
      tokens_provided,
      token_min_amount0,
      token_min_amount1
    }: MsgCreatePositionAminoType["value"]): MsgCreatePosition => {
      return {
        poolId: Long.fromString(pool_id),
        sender,
        lowerTick: Long.fromString(lower_tick),
        upperTick: Long.fromString(upper_tick),
        tokensProvided: tokens_provided.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        tokenMinAmount0: token_min_amount0,
        tokenMinAmount1: token_min_amount1
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
    aminoType: "osmosis/concentratedliquidity/withdraw-position",
    toAmino: ({
      positionId,
      sender,
      liquidityAmount
    }: MsgWithdrawPosition): MsgWithdrawPositionAminoType["value"] => {
      return {
        position_id: positionId.toString(),
        sender,
        liquidity_amount: liquidityAmount
      };
    },
    fromAmino: ({
      position_id,
      sender,
      liquidity_amount
    }: MsgWithdrawPositionAminoType["value"]): MsgWithdrawPosition => {
      return {
        positionId: Long.fromString(position_id),
        sender,
        liquidityAmount: liquidity_amount
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition": {
    aminoType: "osmosis/concentratedliquidity/add-to-position",
    toAmino: ({
      positionId,
      sender,
      amount0,
      amount1,
      tokenMinAmount0,
      tokenMinAmount1
    }: MsgAddToPosition): MsgAddToPositionAminoType["value"] => {
      return {
        position_id: positionId.toString(),
        sender,
        amount0,
        amount1,
        token_min_amount0: tokenMinAmount0,
        token_min_amount1: tokenMinAmount1
      };
    },
    fromAmino: ({
      position_id,
      sender,
      amount0,
      amount1,
      token_min_amount0,
      token_min_amount1
    }: MsgAddToPositionAminoType["value"]): MsgAddToPosition => {
      return {
        positionId: Long.fromString(position_id),
        sender,
        amount0,
        amount1,
        tokenMinAmount0: token_min_amount0,
        tokenMinAmount1: token_min_amount1
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards": {
    aminoType: "osmosis/concentratedliquidity/collect-spread-rewards",
    toAmino: ({
      positionIds,
      sender
    }: MsgCollectSpreadRewards): MsgCollectSpreadRewardsAminoType["value"] => {
      return {
        position_ids: positionIds.map(el0 => el0.toString()),
        sender
      };
    },
    fromAmino: ({
      position_ids,
      sender
    }: MsgCollectSpreadRewardsAminoType["value"]): MsgCollectSpreadRewards => {
      return {
        positionIds: position_ids.map(el0 => Long.fromString(el0)),
        sender
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
    aminoType: "osmosis/concentratedliquidity/collect-incentives",
    toAmino: ({
      positionIds,
      sender
    }: MsgCollectIncentives): MsgCollectIncentivesAminoType["value"] => {
      return {
        position_ids: positionIds.map(el0 => el0.toString()),
        sender
      };
    },
    fromAmino: ({
      position_ids,
      sender
    }: MsgCollectIncentivesAminoType["value"]): MsgCollectIncentives => {
      return {
        positionIds: position_ids.map(el0 => Long.fromString(el0)),
        sender
      };
    }
  }
};