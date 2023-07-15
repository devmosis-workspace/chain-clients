import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: MsgSwapExactAmountIn) => MsgSwapExactAmountInAminoType["value"];
        fromAmino: ({ sender, routes, token_in, token_out_min_amount }: MsgSwapExactAmountInAminoType["value"]) => MsgSwapExactAmountIn;
    };
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: MsgSwapExactAmountOut) => MsgSwapExactAmountOutAminoType["value"];
        fromAmino: ({ sender, routes, token_in_max_amount, token_out }: MsgSwapExactAmountOutAminoType["value"]) => MsgSwapExactAmountOut;
    };
    "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenInDenom, tokenOutMinAmount }: MsgSplitRouteSwapExactAmountIn) => MsgSplitRouteSwapExactAmountInAminoType["value"];
        fromAmino: ({ sender, routes, token_in_denom, token_out_min_amount }: MsgSplitRouteSwapExactAmountInAminoType["value"]) => MsgSplitRouteSwapExactAmountIn;
    };
    "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenOutDenom, tokenInMaxAmount }: MsgSplitRouteSwapExactAmountOut) => MsgSplitRouteSwapExactAmountOutAminoType["value"];
        fromAmino: ({ sender, routes, token_out_denom, token_in_max_amount }: MsgSplitRouteSwapExactAmountOutAminoType["value"]) => MsgSplitRouteSwapExactAmountOut;
    };
};
