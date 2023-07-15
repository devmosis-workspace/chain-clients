import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** ===================== SwapExactAmountIn */
export interface SwapExactAmountIn {
    sender: string;
    /** token_in is the token to be sent to the pool. */
    tokenIn?: Coin;
    /** token_out_denom is the token denom to be received from the pool. */
    tokenOutDenom: string;
    /**
     * token_out_min_amount is the minimum amount of token_out to be received from
     * the pool.
     */
    tokenOutMinAmount: string;
    /** swap_fee is the swap fee for this swap estimate. */
    swapFee: string;
}
/** ===================== SwapExactAmountIn */
export interface SwapExactAmountInSDKType {
    sender: string;
    token_in?: CoinSDKType;
    token_out_denom: string;
    token_out_min_amount: string;
    swap_fee: string;
}
export interface SwapExactAmountInSudoMsg {
    /**
     * swap_exact_amount_in is the structure containing all the request
     * information for this message.
     */
    swapExactAmountIn?: SwapExactAmountIn;
}
export interface SwapExactAmountInSudoMsgSDKType {
    swap_exact_amount_in?: SwapExactAmountInSDKType;
}
export interface SwapExactAmountInSudoMsgResponse {
    /** token_out_amount is the token out computed from this swap estimate call. */
    tokenOutAmount: string;
}
export interface SwapExactAmountInSudoMsgResponseSDKType {
    token_out_amount: string;
}
/** ===================== SwapExactAmountOut */
export interface SwapExactAmountOut {
    sender: string;
    /** token_out is the token to be sent out of the pool. */
    tokenOut?: Coin;
    /** token_in_denom is the token denom to be sent too the pool. */
    tokenInDenom: string;
    /**
     * token_in_max_amount is the maximum amount of token_in to be sent to the
     * pool.
     */
    tokenInMaxAmount: string;
    /** swap_fee is the swap fee for this swap estimate. */
    swapFee: string;
}
/** ===================== SwapExactAmountOut */
export interface SwapExactAmountOutSDKType {
    sender: string;
    token_out?: CoinSDKType;
    token_in_denom: string;
    token_in_max_amount: string;
    swap_fee: string;
}
export interface SwapExactAmountOutSudoMsg {
    /**
     * swap_exact_amount_out is the structure containing all the request
     * information for this message.
     */
    swapExactAmountOut?: SwapExactAmountOut;
}
export interface SwapExactAmountOutSudoMsgSDKType {
    swap_exact_amount_out?: SwapExactAmountOutSDKType;
}
export interface SwapExactAmountOutSudoMsgResponse {
    /** token_in_amount is the token in computed from this swap estimate call. */
    tokenInAmount: string;
}
export interface SwapExactAmountOutSudoMsgResponseSDKType {
    token_in_amount: string;
}
export declare const SwapExactAmountIn: {
    encode(message: SwapExactAmountIn, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapExactAmountIn;
    fromPartial(object: Partial<SwapExactAmountIn>): SwapExactAmountIn;
};
export declare const SwapExactAmountInSudoMsg: {
    encode(message: SwapExactAmountInSudoMsg, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapExactAmountInSudoMsg;
    fromPartial(object: Partial<SwapExactAmountInSudoMsg>): SwapExactAmountInSudoMsg;
};
export declare const SwapExactAmountInSudoMsgResponse: {
    encode(message: SwapExactAmountInSudoMsgResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapExactAmountInSudoMsgResponse;
    fromPartial(object: Partial<SwapExactAmountInSudoMsgResponse>): SwapExactAmountInSudoMsgResponse;
};
export declare const SwapExactAmountOut: {
    encode(message: SwapExactAmountOut, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapExactAmountOut;
    fromPartial(object: Partial<SwapExactAmountOut>): SwapExactAmountOut;
};
export declare const SwapExactAmountOutSudoMsg: {
    encode(message: SwapExactAmountOutSudoMsg, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapExactAmountOutSudoMsg;
    fromPartial(object: Partial<SwapExactAmountOutSudoMsg>): SwapExactAmountOutSudoMsg;
};
export declare const SwapExactAmountOutSudoMsgResponse: {
    encode(message: SwapExactAmountOutSudoMsgResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapExactAmountOutSudoMsgResponse;
    fromPartial(object: Partial<SwapExactAmountOutSudoMsgResponse>): SwapExactAmountOutSudoMsgResponse;
};
