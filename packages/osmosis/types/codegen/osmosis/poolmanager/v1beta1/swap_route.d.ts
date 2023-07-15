import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SwapAmountInRoute {
    poolId: Long;
    tokenOutDenom: string;
}
export interface SwapAmountInRouteSDKType {
    pool_id: Long;
    token_out_denom: string;
}
export interface SwapAmountOutRoute {
    poolId: Long;
    tokenInDenom: string;
}
export interface SwapAmountOutRouteSDKType {
    pool_id: Long;
    token_in_denom: string;
}
export interface SwapAmountInSplitRoute {
    pools: SwapAmountInRoute[];
    tokenInAmount: string;
}
export interface SwapAmountInSplitRouteSDKType {
    pools: SwapAmountInRouteSDKType[];
    token_in_amount: string;
}
export interface SwapAmountOutSplitRoute {
    pools: SwapAmountOutRoute[];
    tokenOutAmount: string;
}
export interface SwapAmountOutSplitRouteSDKType {
    pools: SwapAmountOutRouteSDKType[];
    token_out_amount: string;
}
export declare const SwapAmountInRoute: {
    encode(message: SwapAmountInRoute, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapAmountInRoute;
    fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute;
};
export declare const SwapAmountOutRoute: {
    encode(message: SwapAmountOutRoute, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapAmountOutRoute;
    fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute;
};
export declare const SwapAmountInSplitRoute: {
    encode(message: SwapAmountInSplitRoute, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapAmountInSplitRoute;
    fromPartial(object: Partial<SwapAmountInSplitRoute>): SwapAmountInSplitRoute;
};
export declare const SwapAmountOutSplitRoute: {
    encode(message: SwapAmountOutSplitRoute, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SwapAmountOutSplitRoute;
    fromPartial(object: Partial<SwapAmountOutSplitRoute>): SwapAmountOutSplitRoute;
};
