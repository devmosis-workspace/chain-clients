import { MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountOut, MsgSetDenomPairTakerFee } from "./tx";
export declare const AminoConverter: {
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: (message: MsgSwapExactAmountIn) => import("./tx").MsgSwapExactAmountInAmino;
        fromAmino: (object: import("./tx").MsgSwapExactAmountInAmino) => MsgSwapExactAmountIn;
    };
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: (message: MsgSwapExactAmountOut) => import("./tx").MsgSwapExactAmountOutAmino;
        fromAmino: (object: import("./tx").MsgSwapExactAmountOutAmino) => MsgSwapExactAmountOut;
    };
    "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn": {
        aminoType: string;
        toAmino: (message: MsgSplitRouteSwapExactAmountIn) => import("./tx").MsgSplitRouteSwapExactAmountInAmino;
        fromAmino: (object: import("./tx").MsgSplitRouteSwapExactAmountInAmino) => MsgSplitRouteSwapExactAmountIn;
    };
    "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut": {
        aminoType: string;
        toAmino: (message: MsgSplitRouteSwapExactAmountOut) => import("./tx").MsgSplitRouteSwapExactAmountOutAmino;
        fromAmino: (object: import("./tx").MsgSplitRouteSwapExactAmountOutAmino) => MsgSplitRouteSwapExactAmountOut;
    };
    "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee": {
        aminoType: string;
        toAmino: (message: MsgSetDenomPairTakerFee) => import("./tx").MsgSetDenomPairTakerFeeAmino;
        fromAmino: (object: import("./tx").MsgSetDenomPairTakerFeeAmino) => MsgSetDenomPairTakerFee;
    };
};
