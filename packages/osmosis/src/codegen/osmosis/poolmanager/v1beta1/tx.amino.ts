import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountOut } from "./tx";
export interface MsgSwapExactAmountInAminoType extends AminoMsg {
  type: "osmosis/poolmanager/swap-exact-amount-in";
  value: {
    sender: string;
    routes: {
      pool_id: string;
      token_out_denom: string;
    }[];
    token_in: {
      denom: string;
      amount: string;
    };
    token_out_min_amount: string;
  };
}
export interface MsgSwapExactAmountOutAminoType extends AminoMsg {
  type: "osmosis/poolmanager/swap-exact-amount-out";
  value: {
    sender: string;
    routes: {
      pool_id: string;
      token_in_denom: string;
    }[];
    token_in_max_amount: string;
    token_out: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgSplitRouteSwapExactAmountInAminoType extends AminoMsg {
  type: "osmosis/poolmanager/split-route-swap-exact-amount-in";
  value: {
    sender: string;
    routes: {
      pools: {
        pool_id: string;
        token_out_denom: string;
      }[];
      token_in_amount: string;
    }[];
    token_in_denom: string;
    token_out_min_amount: string;
  };
}
export interface MsgSplitRouteSwapExactAmountOutAminoType extends AminoMsg {
  type: "osmosis/poolmanager/split-route-swap-exact-amount-out";
  value: {
    sender: string;
    routes: {
      pools: {
        pool_id: string;
        token_in_denom: string;
      }[];
      token_out_amount: string;
    }[];
    token_out_denom: string;
    token_in_max_amount: string;
  };
}
export const AminoConverter = {
  "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
    aminoType: "osmosis/poolmanager/swap-exact-amount-in",
    toAmino: ({
      sender,
      routes,
      tokenIn,
      tokenOutMinAmount
    }: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoType["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pool_id: el0.poolId.toString(),
          token_out_denom: el0.tokenOutDenom
        })),
        token_in: {
          denom: tokenIn.denom,
          amount: Long.fromValue(tokenIn.amount).toString()
        },
        token_out_min_amount: tokenOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_in,
      token_out_min_amount
    }: MsgSwapExactAmountInAminoType["value"]): MsgSwapExactAmountIn => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: Long.fromString(el0.pool_id),
          tokenOutDenom: el0.token_out_denom
        })),
        tokenIn: {
          denom: token_in.denom,
          amount: token_in.amount
        },
        tokenOutMinAmount: token_out_min_amount
      };
    }
  },
  "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
    aminoType: "osmosis/poolmanager/swap-exact-amount-out",
    toAmino: ({
      sender,
      routes,
      tokenInMaxAmount,
      tokenOut
    }: MsgSwapExactAmountOut): MsgSwapExactAmountOutAminoType["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pool_id: el0.poolId.toString(),
          token_in_denom: el0.tokenInDenom
        })),
        token_in_max_amount: tokenInMaxAmount,
        token_out: {
          denom: tokenOut.denom,
          amount: Long.fromValue(tokenOut.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_in_max_amount,
      token_out
    }: MsgSwapExactAmountOutAminoType["value"]): MsgSwapExactAmountOut => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: Long.fromString(el0.pool_id),
          tokenInDenom: el0.token_in_denom
        })),
        tokenInMaxAmount: token_in_max_amount,
        tokenOut: {
          denom: token_out.denom,
          amount: token_out.amount
        }
      };
    }
  },
  "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn": {
    aminoType: "osmosis/poolmanager/split-route-swap-exact-amount-in",
    toAmino: ({
      sender,
      routes,
      tokenInDenom,
      tokenOutMinAmount
    }: MsgSplitRouteSwapExactAmountIn): MsgSplitRouteSwapExactAmountInAminoType["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pools: el0.pools.map(el1 => ({
            pool_id: el1.poolId.toString(),
            token_out_denom: el1.tokenOutDenom
          })),
          token_in_amount: el0.tokenInAmount
        })),
        token_in_denom: tokenInDenom,
        token_out_min_amount: tokenOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_in_denom,
      token_out_min_amount
    }: MsgSplitRouteSwapExactAmountInAminoType["value"]): MsgSplitRouteSwapExactAmountIn => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pools: el0.pools.map(el1 => ({
            poolId: Long.fromString(el1.pool_id),
            tokenOutDenom: el1.token_out_denom
          })),
          tokenInAmount: el0.token_in_amount
        })),
        tokenInDenom: token_in_denom,
        tokenOutMinAmount: token_out_min_amount
      };
    }
  },
  "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut": {
    aminoType: "osmosis/poolmanager/split-route-swap-exact-amount-out",
    toAmino: ({
      sender,
      routes,
      tokenOutDenom,
      tokenInMaxAmount
    }: MsgSplitRouteSwapExactAmountOut): MsgSplitRouteSwapExactAmountOutAminoType["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pools: el0.pools.map(el1 => ({
            pool_id: el1.poolId.toString(),
            token_in_denom: el1.tokenInDenom
          })),
          token_out_amount: el0.tokenOutAmount
        })),
        token_out_denom: tokenOutDenom,
        token_in_max_amount: tokenInMaxAmount
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_out_denom,
      token_in_max_amount
    }: MsgSplitRouteSwapExactAmountOutAminoType["value"]): MsgSplitRouteSwapExactAmountOut => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pools: el0.pools.map(el1 => ({
            poolId: Long.fromString(el1.pool_id),
            tokenInDenom: el1.token_in_denom
          })),
          tokenOutAmount: el0.token_out_amount
        })),
        tokenOutDenom: token_out_denom,
        tokenInMaxAmount: token_in_max_amount
      };
    }
  }
};