import { Rpc } from "../../../helpers";
import { MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountInResponse, MsgSplitRouteSwapExactAmountOut, MsgSplitRouteSwapExactAmountOutResponse, MsgSetDenomPairTakerFee, MsgSetDenomPairTakerFeeResponse } from "./tx";
export interface Msg {
    swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    splitRouteSwapExactAmountIn(request: MsgSplitRouteSwapExactAmountIn): Promise<MsgSplitRouteSwapExactAmountInResponse>;
    splitRouteSwapExactAmountOut(request: MsgSplitRouteSwapExactAmountOut): Promise<MsgSplitRouteSwapExactAmountOutResponse>;
    setDenomPairTakerFee(request: MsgSetDenomPairTakerFee): Promise<MsgSetDenomPairTakerFeeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    splitRouteSwapExactAmountIn(request: MsgSplitRouteSwapExactAmountIn): Promise<MsgSplitRouteSwapExactAmountInResponse>;
    splitRouteSwapExactAmountOut(request: MsgSplitRouteSwapExactAmountOut): Promise<MsgSplitRouteSwapExactAmountOutResponse>;
    setDenomPairTakerFee(request: MsgSetDenomPairTakerFee): Promise<MsgSetDenomPairTakerFeeResponse>;
}
