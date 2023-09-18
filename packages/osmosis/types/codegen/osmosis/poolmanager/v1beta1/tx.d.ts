import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType, SwapAmountInSplitRoute, SwapAmountInSplitRouteAmino, SwapAmountInSplitRouteSDKType, SwapAmountOutSplitRoute, SwapAmountOutSplitRouteAmino, SwapAmountOutSplitRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    tokenIn: Coin;
    tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn";
    value: Uint8Array;
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountInAmino {
    sender: string;
    routes: SwapAmountInRouteAmino[];
    token_in?: CoinAmino;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInAminoMsg {
    type: "osmosis/poolmanager/swap-exact-amount-in";
    value: MsgSwapExactAmountInAmino;
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountInSDKType {
    sender: string;
    routes: SwapAmountInRouteSDKType[];
    token_in: CoinSDKType;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountInResponse";
    value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseAmino {
    token_out_amount: string;
}
export interface MsgSwapExactAmountInResponseAminoMsg {
    type: "osmosis/poolmanager/swap-exact-amount-in-response";
    value: MsgSwapExactAmountInResponseAmino;
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
export interface MsgSplitRouteSwapExactAmountInProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn";
    value: Uint8Array;
}
/** ===================== MsgSplitRouteSwapExactAmountIn */
export interface MsgSplitRouteSwapExactAmountInAmino {
    sender: string;
    routes: SwapAmountInSplitRouteAmino[];
    token_in_denom: string;
    token_out_min_amount: string;
}
export interface MsgSplitRouteSwapExactAmountInAminoMsg {
    type: "osmosis/poolmanager/split-amount-in";
    value: MsgSplitRouteSwapExactAmountInAmino;
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
export interface MsgSplitRouteSwapExactAmountInResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountInResponse";
    value: Uint8Array;
}
export interface MsgSplitRouteSwapExactAmountInResponseAmino {
    token_out_amount: string;
}
export interface MsgSplitRouteSwapExactAmountInResponseAminoMsg {
    type: "osmosis/poolmanager/split-route-swap-exact-amount-in-response";
    value: MsgSplitRouteSwapExactAmountInResponseAmino;
}
export interface MsgSplitRouteSwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut: Coin;
}
export interface MsgSwapExactAmountOutProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut";
    value: Uint8Array;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOutAmino {
    sender: string;
    routes: SwapAmountOutRouteAmino[];
    token_in_max_amount: string;
    token_out?: CoinAmino;
}
export interface MsgSwapExactAmountOutAminoMsg {
    type: "osmosis/poolmanager/swap-exact-amount-out";
    value: MsgSwapExactAmountOutAmino;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOutSDKType {
    sender: string;
    routes: SwapAmountOutRouteSDKType[];
    token_in_max_amount: string;
    token_out: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOutResponse";
    value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseAmino {
    token_in_amount: string;
}
export interface MsgSwapExactAmountOutResponseAminoMsg {
    type: "osmosis/poolmanager/swap-exact-amount-out-response";
    value: MsgSwapExactAmountOutResponseAmino;
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
export interface MsgSplitRouteSwapExactAmountOutProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut";
    value: Uint8Array;
}
/** ===================== MsgSplitRouteSwapExactAmountOut */
export interface MsgSplitRouteSwapExactAmountOutAmino {
    sender: string;
    routes: SwapAmountOutSplitRouteAmino[];
    token_out_denom: string;
    token_in_max_amount: string;
}
export interface MsgSplitRouteSwapExactAmountOutAminoMsg {
    type: "osmosis/poolmanager/split-amount-out";
    value: MsgSplitRouteSwapExactAmountOutAmino;
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
export interface MsgSplitRouteSwapExactAmountOutResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOutResponse";
    value: Uint8Array;
}
export interface MsgSplitRouteSwapExactAmountOutResponseAmino {
    token_in_amount: string;
}
export interface MsgSplitRouteSwapExactAmountOutResponseAminoMsg {
    type: "osmosis/poolmanager/split-route-swap-exact-amount-out-response";
    value: MsgSplitRouteSwapExactAmountOutResponseAmino;
}
export interface MsgSplitRouteSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
/** ===================== MsgSetDenomPairTakerFee */
export interface MsgSetDenomPairTakerFee {
    sender: string;
    denomPairTakerFee: DenomPairTakerFee[];
}
export interface MsgSetDenomPairTakerFeeProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee";
    value: Uint8Array;
}
/** ===================== MsgSetDenomPairTakerFee */
export interface MsgSetDenomPairTakerFeeAmino {
    sender: string;
    denom_pair_taker_fee: DenomPairTakerFeeAmino[];
}
export interface MsgSetDenomPairTakerFeeAminoMsg {
    type: "osmosis/poolmanager/set-denom-pair-taker-fee";
    value: MsgSetDenomPairTakerFeeAmino;
}
/** ===================== MsgSetDenomPairTakerFee */
export interface MsgSetDenomPairTakerFeeSDKType {
    sender: string;
    denom_pair_taker_fee: DenomPairTakerFeeSDKType[];
}
export interface MsgSetDenomPairTakerFeeResponse {
    success: boolean;
}
export interface MsgSetDenomPairTakerFeeResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFeeResponse";
    value: Uint8Array;
}
export interface MsgSetDenomPairTakerFeeResponseAmino {
    success: boolean;
}
export interface MsgSetDenomPairTakerFeeResponseAminoMsg {
    type: "osmosis/poolmanager/set-denom-pair-taker-fee-response";
    value: MsgSetDenomPairTakerFeeResponseAmino;
}
export interface MsgSetDenomPairTakerFeeResponseSDKType {
    success: boolean;
}
export interface DenomPairTakerFee {
    /**
     * denom0 and denom1 get automatically lexigographically sorted
     * when being stored, so the order of input here does not matter.
     */
    denom0: string;
    denom1: string;
    takerFee: string;
}
export interface DenomPairTakerFeeProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.DenomPairTakerFee";
    value: Uint8Array;
}
export interface DenomPairTakerFeeAmino {
    /**
     * denom0 and denom1 get automatically lexigographically sorted
     * when being stored, so the order of input here does not matter.
     */
    denom0: string;
    denom1: string;
    taker_fee: string;
}
export interface DenomPairTakerFeeAminoMsg {
    type: "osmosis/poolmanager/denom-pair-taker-fee";
    value: DenomPairTakerFeeAmino;
}
export interface DenomPairTakerFeeSDKType {
    denom0: string;
    denom1: string;
    taker_fee: string;
}
export declare const MsgSwapExactAmountIn: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountIn, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSwapExactAmountIn;
    fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn;
    fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn;
    toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino;
    fromAminoMsg(object: MsgSwapExactAmountInAminoMsg): MsgSwapExactAmountIn;
    toAminoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountInProtoMsg): MsgSwapExactAmountIn;
    toProto(message: MsgSwapExactAmountIn): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInProtoMsg;
};
export declare const MsgSwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSwapExactAmountInResponse;
    fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse;
    fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse;
    toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino;
    fromAminoMsg(object: MsgSwapExactAmountInResponseAminoMsg): MsgSwapExactAmountInResponse;
    toAminoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountInResponseProtoMsg): MsgSwapExactAmountInResponse;
    toProto(message: MsgSwapExactAmountInResponse): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseProtoMsg;
};
export declare const MsgSplitRouteSwapExactAmountIn: {
    typeUrl: string;
    encode(message: MsgSplitRouteSwapExactAmountIn, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountIn;
    fromPartial(object: Partial<MsgSplitRouteSwapExactAmountIn>): MsgSplitRouteSwapExactAmountIn;
    fromAmino(object: MsgSplitRouteSwapExactAmountInAmino): MsgSplitRouteSwapExactAmountIn;
    toAmino(message: MsgSplitRouteSwapExactAmountIn): MsgSplitRouteSwapExactAmountInAmino;
    fromAminoMsg(object: MsgSplitRouteSwapExactAmountInAminoMsg): MsgSplitRouteSwapExactAmountIn;
    toAminoMsg(message: MsgSplitRouteSwapExactAmountIn): MsgSplitRouteSwapExactAmountInAminoMsg;
    fromProtoMsg(message: MsgSplitRouteSwapExactAmountInProtoMsg): MsgSplitRouteSwapExactAmountIn;
    toProto(message: MsgSplitRouteSwapExactAmountIn): Uint8Array;
    toProtoMsg(message: MsgSplitRouteSwapExactAmountIn): MsgSplitRouteSwapExactAmountInProtoMsg;
};
export declare const MsgSplitRouteSwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: MsgSplitRouteSwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountInResponse;
    fromPartial(object: Partial<MsgSplitRouteSwapExactAmountInResponse>): MsgSplitRouteSwapExactAmountInResponse;
    fromAmino(object: MsgSplitRouteSwapExactAmountInResponseAmino): MsgSplitRouteSwapExactAmountInResponse;
    toAmino(message: MsgSplitRouteSwapExactAmountInResponse): MsgSplitRouteSwapExactAmountInResponseAmino;
    fromAminoMsg(object: MsgSplitRouteSwapExactAmountInResponseAminoMsg): MsgSplitRouteSwapExactAmountInResponse;
    toAminoMsg(message: MsgSplitRouteSwapExactAmountInResponse): MsgSplitRouteSwapExactAmountInResponseAminoMsg;
    fromProtoMsg(message: MsgSplitRouteSwapExactAmountInResponseProtoMsg): MsgSplitRouteSwapExactAmountInResponse;
    toProto(message: MsgSplitRouteSwapExactAmountInResponse): Uint8Array;
    toProtoMsg(message: MsgSplitRouteSwapExactAmountInResponse): MsgSplitRouteSwapExactAmountInResponseProtoMsg;
};
export declare const MsgSwapExactAmountOut: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountOut, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSwapExactAmountOut;
    fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut;
    fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut;
    toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino;
    fromAminoMsg(object: MsgSwapExactAmountOutAminoMsg): MsgSwapExactAmountOut;
    toAminoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountOutProtoMsg): MsgSwapExactAmountOut;
    toProto(message: MsgSwapExactAmountOut): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutProtoMsg;
};
export declare const MsgSwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSwapExactAmountOutResponse;
    fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse;
    fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse;
    toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino;
    fromAminoMsg(object: MsgSwapExactAmountOutResponseAminoMsg): MsgSwapExactAmountOutResponse;
    toAminoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountOutResponseProtoMsg): MsgSwapExactAmountOutResponse;
    toProto(message: MsgSwapExactAmountOutResponse): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseProtoMsg;
};
export declare const MsgSplitRouteSwapExactAmountOut: {
    typeUrl: string;
    encode(message: MsgSplitRouteSwapExactAmountOut, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountOut;
    fromPartial(object: Partial<MsgSplitRouteSwapExactAmountOut>): MsgSplitRouteSwapExactAmountOut;
    fromAmino(object: MsgSplitRouteSwapExactAmountOutAmino): MsgSplitRouteSwapExactAmountOut;
    toAmino(message: MsgSplitRouteSwapExactAmountOut): MsgSplitRouteSwapExactAmountOutAmino;
    fromAminoMsg(object: MsgSplitRouteSwapExactAmountOutAminoMsg): MsgSplitRouteSwapExactAmountOut;
    toAminoMsg(message: MsgSplitRouteSwapExactAmountOut): MsgSplitRouteSwapExactAmountOutAminoMsg;
    fromProtoMsg(message: MsgSplitRouteSwapExactAmountOutProtoMsg): MsgSplitRouteSwapExactAmountOut;
    toProto(message: MsgSplitRouteSwapExactAmountOut): Uint8Array;
    toProtoMsg(message: MsgSplitRouteSwapExactAmountOut): MsgSplitRouteSwapExactAmountOutProtoMsg;
};
export declare const MsgSplitRouteSwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgSplitRouteSwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountOutResponse;
    fromPartial(object: Partial<MsgSplitRouteSwapExactAmountOutResponse>): MsgSplitRouteSwapExactAmountOutResponse;
    fromAmino(object: MsgSplitRouteSwapExactAmountOutResponseAmino): MsgSplitRouteSwapExactAmountOutResponse;
    toAmino(message: MsgSplitRouteSwapExactAmountOutResponse): MsgSplitRouteSwapExactAmountOutResponseAmino;
    fromAminoMsg(object: MsgSplitRouteSwapExactAmountOutResponseAminoMsg): MsgSplitRouteSwapExactAmountOutResponse;
    toAminoMsg(message: MsgSplitRouteSwapExactAmountOutResponse): MsgSplitRouteSwapExactAmountOutResponseAminoMsg;
    fromProtoMsg(message: MsgSplitRouteSwapExactAmountOutResponseProtoMsg): MsgSplitRouteSwapExactAmountOutResponse;
    toProto(message: MsgSplitRouteSwapExactAmountOutResponse): Uint8Array;
    toProtoMsg(message: MsgSplitRouteSwapExactAmountOutResponse): MsgSplitRouteSwapExactAmountOutResponseProtoMsg;
};
export declare const MsgSetDenomPairTakerFee: {
    typeUrl: string;
    encode(message: MsgSetDenomPairTakerFee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetDenomPairTakerFee;
    fromPartial(object: Partial<MsgSetDenomPairTakerFee>): MsgSetDenomPairTakerFee;
    fromAmino(object: MsgSetDenomPairTakerFeeAmino): MsgSetDenomPairTakerFee;
    toAmino(message: MsgSetDenomPairTakerFee): MsgSetDenomPairTakerFeeAmino;
    fromAminoMsg(object: MsgSetDenomPairTakerFeeAminoMsg): MsgSetDenomPairTakerFee;
    toAminoMsg(message: MsgSetDenomPairTakerFee): MsgSetDenomPairTakerFeeAminoMsg;
    fromProtoMsg(message: MsgSetDenomPairTakerFeeProtoMsg): MsgSetDenomPairTakerFee;
    toProto(message: MsgSetDenomPairTakerFee): Uint8Array;
    toProtoMsg(message: MsgSetDenomPairTakerFee): MsgSetDenomPairTakerFeeProtoMsg;
};
export declare const MsgSetDenomPairTakerFeeResponse: {
    typeUrl: string;
    encode(message: MsgSetDenomPairTakerFeeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetDenomPairTakerFeeResponse;
    fromPartial(object: Partial<MsgSetDenomPairTakerFeeResponse>): MsgSetDenomPairTakerFeeResponse;
    fromAmino(object: MsgSetDenomPairTakerFeeResponseAmino): MsgSetDenomPairTakerFeeResponse;
    toAmino(message: MsgSetDenomPairTakerFeeResponse): MsgSetDenomPairTakerFeeResponseAmino;
    fromAminoMsg(object: MsgSetDenomPairTakerFeeResponseAminoMsg): MsgSetDenomPairTakerFeeResponse;
    toAminoMsg(message: MsgSetDenomPairTakerFeeResponse): MsgSetDenomPairTakerFeeResponseAminoMsg;
    fromProtoMsg(message: MsgSetDenomPairTakerFeeResponseProtoMsg): MsgSetDenomPairTakerFeeResponse;
    toProto(message: MsgSetDenomPairTakerFeeResponse): Uint8Array;
    toProtoMsg(message: MsgSetDenomPairTakerFeeResponse): MsgSetDenomPairTakerFeeResponseProtoMsg;
};
export declare const DenomPairTakerFee: {
    typeUrl: string;
    encode(message: DenomPairTakerFee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DenomPairTakerFee;
    fromPartial(object: Partial<DenomPairTakerFee>): DenomPairTakerFee;
    fromAmino(object: DenomPairTakerFeeAmino): DenomPairTakerFee;
    toAmino(message: DenomPairTakerFee): DenomPairTakerFeeAmino;
    fromAminoMsg(object: DenomPairTakerFeeAminoMsg): DenomPairTakerFee;
    toAminoMsg(message: DenomPairTakerFee): DenomPairTakerFeeAminoMsg;
    fromProtoMsg(message: DenomPairTakerFeeProtoMsg): DenomPairTakerFee;
    toProto(message: DenomPairTakerFee): Uint8Array;
    toProtoMsg(message: DenomPairTakerFee): DenomPairTakerFeeProtoMsg;
};
