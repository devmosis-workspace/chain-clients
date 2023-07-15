import { AminoMsg } from "@cosmjs/amino";
import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
export interface MsgJoinPoolAminoType extends AminoMsg {
    type: "osmosis/gamm/join-pool";
    value: {
        sender: string;
        pool_id: string;
        share_out_amount: string;
        token_in_maxs: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgExitPoolAminoType extends AminoMsg {
    type: "osmosis/gamm/exit-pool";
    value: {
        sender: string;
        pool_id: string;
        share_in_amount: string;
        token_out_mins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgSwapExactAmountInAminoType extends AminoMsg {
    type: "osmosis/gamm/swap-exact-amount-in";
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
    type: "osmosis/gamm/swap-exact-amount-out";
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
export interface MsgJoinSwapExternAmountInAminoType extends AminoMsg {
    type: "osmosis/gamm/join-swap-extern-amount-in";
    value: {
        sender: string;
        pool_id: string;
        token_in: {
            denom: string;
            amount: string;
        };
        share_out_min_amount: string;
    };
}
export interface MsgJoinSwapShareAmountOutAminoType extends AminoMsg {
    type: "osmosis/gamm/join-swap-share-amount-out";
    value: {
        sender: string;
        pool_id: string;
        token_in_denom: string;
        share_out_amount: string;
        token_in_max_amount: string;
    };
}
export interface MsgExitSwapExternAmountOutAminoType extends AminoMsg {
    type: "osmosis/gamm/exit-swap-extern-amount-out";
    value: {
        sender: string;
        pool_id: string;
        token_out: {
            denom: string;
            amount: string;
        };
        share_in_max_amount: string;
    };
}
export interface MsgExitSwapShareAmountInAminoType extends AminoMsg {
    type: "osmosis/gamm/exit-swap-share-amount-in";
    value: {
        sender: string;
        pool_id: string;
        token_out_denom: string;
        share_in_amount: string;
        token_out_min_amount: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.gamm.v1beta1.MsgJoinPool": {
        aminoType: string;
        toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: MsgJoinPool) => MsgJoinPoolAminoType["value"];
        fromAmino: ({ sender, pool_id, share_out_amount, token_in_maxs }: MsgJoinPoolAminoType["value"]) => MsgJoinPool;
    };
    "/osmosis.gamm.v1beta1.MsgExitPool": {
        aminoType: string;
        toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: MsgExitPool) => MsgExitPoolAminoType["value"];
        fromAmino: ({ sender, pool_id, share_in_amount, token_out_mins }: MsgExitPoolAminoType["value"]) => MsgExitPool;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: MsgSwapExactAmountIn) => MsgSwapExactAmountInAminoType["value"];
        fromAmino: ({ sender, routes, token_in, token_out_min_amount }: MsgSwapExactAmountInAminoType["value"]) => MsgSwapExactAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: MsgSwapExactAmountOut) => MsgSwapExactAmountOutAminoType["value"];
        fromAmino: ({ sender, routes, token_in_max_amount, token_out }: MsgSwapExactAmountOutAminoType["value"]) => MsgSwapExactAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: MsgJoinSwapExternAmountIn) => MsgJoinSwapExternAmountInAminoType["value"];
        fromAmino: ({ sender, pool_id, token_in, share_out_min_amount }: MsgJoinSwapExternAmountInAminoType["value"]) => MsgJoinSwapExternAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: MsgJoinSwapShareAmountOut) => MsgJoinSwapShareAmountOutAminoType["value"];
        fromAmino: ({ sender, pool_id, token_in_denom, share_out_amount, token_in_max_amount }: MsgJoinSwapShareAmountOutAminoType["value"]) => MsgJoinSwapShareAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: MsgExitSwapExternAmountOut) => MsgExitSwapExternAmountOutAminoType["value"];
        fromAmino: ({ sender, pool_id, token_out, share_in_max_amount }: MsgExitSwapExternAmountOutAminoType["value"]) => MsgExitSwapExternAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: MsgExitSwapShareAmountIn) => MsgExitSwapShareAmountInAminoType["value"];
        fromAmino: ({ sender, pool_id, token_out_denom, share_in_amount, token_out_min_amount }: MsgExitSwapShareAmountInAminoType["value"]) => MsgExitSwapShareAmountIn;
    };
};
