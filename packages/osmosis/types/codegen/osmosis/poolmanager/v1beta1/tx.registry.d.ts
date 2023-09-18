import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountOut, MsgSetDenomPairTakerFee } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        swapExactAmountIn(value: MsgSwapExactAmountIn): {
            typeUrl: string;
            value: Uint8Array;
        };
        swapExactAmountOut(value: MsgSwapExactAmountOut): {
            typeUrl: string;
            value: Uint8Array;
        };
        splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn): {
            typeUrl: string;
            value: Uint8Array;
        };
        splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut): {
            typeUrl: string;
            value: Uint8Array;
        };
        setDenomPairTakerFee(value: MsgSetDenomPairTakerFee): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        swapExactAmountIn(value: MsgSwapExactAmountIn): {
            typeUrl: string;
            value: MsgSwapExactAmountIn;
        };
        swapExactAmountOut(value: MsgSwapExactAmountOut): {
            typeUrl: string;
            value: MsgSwapExactAmountOut;
        };
        splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn): {
            typeUrl: string;
            value: MsgSplitRouteSwapExactAmountIn;
        };
        splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut): {
            typeUrl: string;
            value: MsgSplitRouteSwapExactAmountOut;
        };
        setDenomPairTakerFee(value: MsgSetDenomPairTakerFee): {
            typeUrl: string;
            value: MsgSetDenomPairTakerFee;
        };
    };
    fromJSON: {
        swapExactAmountIn(value: any): {
            typeUrl: string;
            value: MsgSwapExactAmountIn;
        };
        swapExactAmountOut(value: any): {
            typeUrl: string;
            value: MsgSwapExactAmountOut;
        };
        splitRouteSwapExactAmountIn(value: any): {
            typeUrl: string;
            value: MsgSplitRouteSwapExactAmountIn;
        };
        splitRouteSwapExactAmountOut(value: any): {
            typeUrl: string;
            value: MsgSplitRouteSwapExactAmountOut;
        };
        setDenomPairTakerFee(value: any): {
            typeUrl: string;
            value: MsgSetDenomPairTakerFee;
        };
    };
    fromPartial: {
        swapExactAmountIn(value: MsgSwapExactAmountIn): {
            typeUrl: string;
            value: MsgSwapExactAmountIn;
        };
        swapExactAmountOut(value: MsgSwapExactAmountOut): {
            typeUrl: string;
            value: MsgSwapExactAmountOut;
        };
        splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn): {
            typeUrl: string;
            value: MsgSplitRouteSwapExactAmountIn;
        };
        splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut): {
            typeUrl: string;
            value: MsgSplitRouteSwapExactAmountOut;
        };
        setDenomPairTakerFee(value: MsgSetDenomPairTakerFee): {
            typeUrl: string;
            value: MsgSetDenomPairTakerFee;
        };
    };
};
