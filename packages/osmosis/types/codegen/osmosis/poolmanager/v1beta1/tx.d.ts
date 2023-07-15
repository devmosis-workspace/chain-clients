import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType, SwapAmountInSplitRoute, SwapAmountInSplitRouteSDKType, SwapAmountOutSplitRoute, SwapAmountOutSplitRouteSDKType } from "./swap_route";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    tokenIn?: Coin;
    tokenOutMinAmount: string;
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountInSDKType {
    sender: string;
    routes: SwapAmountInRouteSDKType[];
    token_in?: CoinSDKType;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** ===================== MsgSplitRouteSwapExactAmountIn */
export interface MsgSplitRouteSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInSplitRoute[];
    tokenInDenom: string;
    tokenOutMinAmount: string;
}
/** ===================== MsgSplitRouteSwapExactAmountIn */
export interface MsgSplitRouteSwapExactAmountInSDKType {
    sender: string;
    routes: SwapAmountInSplitRouteSDKType[];
    token_in_denom: string;
    token_out_min_amount: string;
}
export interface MsgSplitRouteSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface MsgSplitRouteSwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut?: Coin;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOutSDKType {
    sender: string;
    routes: SwapAmountOutRouteSDKType[];
    token_in_max_amount: string;
    token_out?: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
/** ===================== MsgSplitRouteSwapExactAmountOut */
export interface MsgSplitRouteSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutSplitRoute[];
    tokenOutDenom: string;
    tokenInMaxAmount: string;
}
/** ===================== MsgSplitRouteSwapExactAmountOut */
export interface MsgSplitRouteSwapExactAmountOutSDKType {
    sender: string;
    routes: SwapAmountOutSplitRouteSDKType[];
    token_out_denom: string;
    token_in_max_amount: string;
}
export interface MsgSplitRouteSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface MsgSplitRouteSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
export declare const MsgSwapExactAmountIn: {
    encode(message: MsgSwapExactAmountIn, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSwapExactAmountIn;
    fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn;
};
export declare const MsgSwapExactAmountInResponse: {
    encode(message: MsgSwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSwapExactAmountInResponse;
    fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse;
};
export declare const MsgSplitRouteSwapExactAmountIn: {
    encode(message: MsgSplitRouteSwapExactAmountIn, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountIn;
    fromPartial(object: Partial<MsgSplitRouteSwapExactAmountIn>): MsgSplitRouteSwapExactAmountIn;
};
export declare const MsgSplitRouteSwapExactAmountInResponse: {
    encode(message: MsgSplitRouteSwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountInResponse;
    fromPartial(object: Partial<MsgSplitRouteSwapExactAmountInResponse>): MsgSplitRouteSwapExactAmountInResponse;
};
export declare const MsgSwapExactAmountOut: {
    encode(message: MsgSwapExactAmountOut, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSwapExactAmountOut;
    fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut;
};
export declare const MsgSwapExactAmountOutResponse: {
    encode(message: MsgSwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSwapExactAmountOutResponse;
    fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse;
};
export declare const MsgSplitRouteSwapExactAmountOut: {
    encode(message: MsgSplitRouteSwapExactAmountOut, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountOut;
    fromPartial(object: Partial<MsgSplitRouteSwapExactAmountOut>): MsgSplitRouteSwapExactAmountOut;
};
export declare const MsgSplitRouteSwapExactAmountOutResponse: {
    encode(message: MsgSplitRouteSwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountOutResponse;
    fromPartial(object: Partial<MsgSplitRouteSwapExactAmountOutResponse>): MsgSplitRouteSwapExactAmountOutResponse;
};
