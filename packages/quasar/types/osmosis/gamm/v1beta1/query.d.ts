import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Pool, PoolProtoMsg, PoolSDKType } from "../pool-models/balancer/balancerPool";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** =============================== Pool */
export interface QueryPoolRequest {
    poolId: bigint;
}
export interface QueryPoolRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest";
    value: Uint8Array;
}
/** =============================== Pool */
export interface QueryPoolRequestAmino {
    pool_id?: string;
}
export interface QueryPoolRequestAminoMsg {
    type: "osmosis/gamm/query-pool-request";
    value: QueryPoolRequestAmino;
}
/** =============================== Pool */
export interface QueryPoolRequestSDKType {
    pool_id: bigint;
}
export interface QueryPoolResponse {
    pool?: (Pool & Any) | undefined;
}
export interface QueryPoolResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse";
    value: Uint8Array;
}
export type QueryPoolResponseEncoded = Omit<QueryPoolResponse, "pool"> & {
    pool?: PoolProtoMsg | AnyProtoMsg | undefined;
};
export interface QueryPoolResponseAmino {
    pool?: AnyAmino;
}
export interface QueryPoolResponseAminoMsg {
    type: "osmosis/gamm/query-pool-response";
    value: QueryPoolResponseAmino;
}
export interface QueryPoolResponseSDKType {
    pool?: PoolSDKType | AnySDKType | undefined;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest";
    value: Uint8Array;
}
/** =============================== Pools */
export interface QueryPoolsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryPoolsRequestAminoMsg {
    type: "osmosis/gamm/query-pools-request";
    value: QueryPoolsRequestAmino;
}
/** =============================== Pools */
export interface QueryPoolsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
    pools: (Pool & Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse";
    value: Uint8Array;
}
export type QueryPoolsResponseEncoded = Omit<QueryPoolsResponse, "pools"> & {
    pools: (PoolProtoMsg | AnyProtoMsg)[];
};
export interface QueryPoolsResponseAmino {
    pools?: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
    type: "osmosis/gamm/query-pools-response";
    value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
    pools: (PoolSDKType | AnySDKType)[];
    pagination?: PageResponseSDKType;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequest {
}
export interface QueryNumPoolsRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest";
    value: Uint8Array;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequestAmino {
}
export interface QueryNumPoolsRequestAminoMsg {
    type: "osmosis/gamm/query-num-pools-request";
    value: QueryNumPoolsRequestAmino;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequestSDKType {
}
export interface QueryNumPoolsResponse {
    numPools: bigint;
}
export interface QueryNumPoolsResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse";
    value: Uint8Array;
}
export interface QueryNumPoolsResponseAmino {
    num_pools?: string;
}
export interface QueryNumPoolsResponseAminoMsg {
    type: "osmosis/gamm/query-num-pools-response";
    value: QueryNumPoolsResponseAmino;
}
export interface QueryNumPoolsResponseSDKType {
    num_pools: bigint;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
    poolId: bigint;
}
export interface QueryPoolParamsRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest";
    value: Uint8Array;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestAmino {
    pool_id?: string;
}
export interface QueryPoolParamsRequestAminoMsg {
    type: "osmosis/gamm/query-pool-params-request";
    value: QueryPoolParamsRequestAmino;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestSDKType {
    pool_id: bigint;
}
export interface QueryPoolParamsResponse {
    params?: Any;
}
export interface QueryPoolParamsResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse";
    value: Uint8Array;
}
export interface QueryPoolParamsResponseAmino {
    params?: AnyAmino;
}
export interface QueryPoolParamsResponseAminoMsg {
    type: "osmosis/gamm/query-pool-params-response";
    value: QueryPoolParamsResponseAmino;
}
export interface QueryPoolParamsResponseSDKType {
    params?: AnySDKType;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequest {
    poolId: bigint;
}
export interface QueryTotalPoolLiquidityRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest";
    value: Uint8Array;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestAmino {
    pool_id?: string;
}
export interface QueryTotalPoolLiquidityRequestAminoMsg {
    type: "osmosis/gamm/query-total-pool-liquidity-request";
    value: QueryTotalPoolLiquidityRequestAmino;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestSDKType {
    pool_id: bigint;
}
export interface QueryTotalPoolLiquidityResponse {
    liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse";
    value: Uint8Array;
}
export interface QueryTotalPoolLiquidityResponseAmino {
    liquidity?: CoinAmino[];
}
export interface QueryTotalPoolLiquidityResponseAminoMsg {
    type: "osmosis/gamm/query-total-pool-liquidity-response";
    value: QueryTotalPoolLiquidityResponseAmino;
}
export interface QueryTotalPoolLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
    poolId: bigint;
}
export interface QueryTotalSharesRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest";
    value: Uint8Array;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestAmino {
    pool_id?: string;
}
export interface QueryTotalSharesRequestAminoMsg {
    type: "osmosis/gamm/query-total-shares-request";
    value: QueryTotalSharesRequestAmino;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestSDKType {
    pool_id: bigint;
}
export interface QueryTotalSharesResponse {
    totalShares: Coin;
}
export interface QueryTotalSharesResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse";
    value: Uint8Array;
}
export interface QueryTotalSharesResponseAmino {
    total_shares?: CoinAmino;
}
export interface QueryTotalSharesResponseAminoMsg {
    type: "osmosis/gamm/query-total-shares-response";
    value: QueryTotalSharesResponseAmino;
}
export interface QueryTotalSharesResponseSDKType {
    total_shares: CoinSDKType;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequest {
    poolId: bigint;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
export interface QuerySpotPriceRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest";
    value: Uint8Array;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestAmino {
    pool_id?: string;
    base_asset_denom?: string;
    quote_asset_denom?: string;
}
export interface QuerySpotPriceRequestAminoMsg {
    type: "osmosis/gamm/query-spot-price-request";
    value: QuerySpotPriceRequestAmino;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestSDKType {
    pool_id: bigint;
    base_asset_denom: string;
    quote_asset_denom: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse";
    value: Uint8Array;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseAmino {
    /** String of the Dec. Ex) 10.203uatom */
    spot_price?: string;
}
export interface QuerySpotPriceResponseAminoMsg {
    type: "osmosis/gamm/query-spot-price-response";
    value: QuerySpotPriceResponseAmino;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseSDKType {
    spot_price: string;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequest {
    sender: string;
    poolId: bigint;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
export interface QuerySwapExactAmountInRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest";
    value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestAmino {
    sender?: string;
    pool_id?: string;
    token_in?: string;
    routes?: SwapAmountInRouteAmino[];
}
export interface QuerySwapExactAmountInRequestAminoMsg {
    type: "osmosis/gamm/query-swap-exact-amount-in-request";
    value: QuerySwapExactAmountInRequestAmino;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestSDKType {
    sender: string;
    pool_id: bigint;
    token_in: string;
    routes: SwapAmountInRouteSDKType[];
}
export interface QuerySwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface QuerySwapExactAmountInResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse";
    value: Uint8Array;
}
export interface QuerySwapExactAmountInResponseAmino {
    token_out_amount?: string;
}
export interface QuerySwapExactAmountInResponseAminoMsg {
    type: "osmosis/gamm/query-swap-exact-amount-in-response";
    value: QuerySwapExactAmountInResponseAmino;
}
export interface QuerySwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequest {
    sender: string;
    poolId: bigint;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
export interface QuerySwapExactAmountOutRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest";
    value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestAmino {
    sender?: string;
    pool_id?: string;
    routes?: SwapAmountOutRouteAmino[];
    token_out?: string;
}
export interface QuerySwapExactAmountOutRequestAminoMsg {
    type: "osmosis/gamm/query-swap-exact-amount-out-request";
    value: QuerySwapExactAmountOutRequestAmino;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestSDKType {
    sender: string;
    pool_id: bigint;
    routes: SwapAmountOutRouteSDKType[];
    token_out: string;
}
export interface QuerySwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface QuerySwapExactAmountOutResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse";
    value: Uint8Array;
}
export interface QuerySwapExactAmountOutResponseAmino {
    token_in_amount?: string;
}
export interface QuerySwapExactAmountOutResponseAminoMsg {
    type: "osmosis/gamm/query-swap-exact-amount-out-response";
    value: QuerySwapExactAmountOutResponseAmino;
}
export interface QuerySwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
export interface QueryTotalLiquidityRequest {
}
export interface QueryTotalLiquidityRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest";
    value: Uint8Array;
}
export interface QueryTotalLiquidityRequestAmino {
}
export interface QueryTotalLiquidityRequestAminoMsg {
    type: "osmosis/gamm/query-total-liquidity-request";
    value: QueryTotalLiquidityRequestAmino;
}
export interface QueryTotalLiquidityRequestSDKType {
}
export interface QueryTotalLiquidityResponse {
    liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse";
    value: Uint8Array;
}
export interface QueryTotalLiquidityResponseAmino {
    liquidity?: CoinAmino[];
}
export interface QueryTotalLiquidityResponseAminoMsg {
    type: "osmosis/gamm/query-total-liquidity-response";
    value: QueryTotalLiquidityResponseAmino;
}
export interface QueryTotalLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
export declare const QueryPoolRequest: {
    typeUrl: string;
    encode(message: QueryPoolRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolRequest;
    fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest;
    fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest;
    toAmino(message: QueryPoolRequest): QueryPoolRequestAmino;
    fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest;
    toAminoMsg(message: QueryPoolRequest): QueryPoolRequestAminoMsg;
    fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest;
    toProto(message: QueryPoolRequest): Uint8Array;
    toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolResponse;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
    fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse;
    toAmino(message: QueryPoolResponse): QueryPoolResponseAmino;
    fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse;
    toAminoMsg(message: QueryPoolResponse): QueryPoolResponseAminoMsg;
    fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse;
    toProto(message: QueryPoolResponse): Uint8Array;
    toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg;
};
export declare const QueryPoolsRequest: {
    typeUrl: string;
    encode(message: QueryPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolsRequest;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
    fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest;
    toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino;
    fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest;
    toAminoMsg(message: QueryPoolsRequest): QueryPoolsRequestAminoMsg;
    fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest;
    toProto(message: QueryPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg;
};
export declare const QueryPoolsResponse: {
    typeUrl: string;
    encode(message: QueryPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolsResponse;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
    fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse;
    toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino;
    fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse;
    toAminoMsg(message: QueryPoolsResponse): QueryPoolsResponseAminoMsg;
    fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse;
    toProto(message: QueryPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg;
};
export declare const QueryNumPoolsRequest: {
    typeUrl: string;
    encode(_: QueryNumPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryNumPoolsRequest;
    fromPartial(_: Partial<QueryNumPoolsRequest>): QueryNumPoolsRequest;
    fromAmino(_: QueryNumPoolsRequestAmino): QueryNumPoolsRequest;
    toAmino(_: QueryNumPoolsRequest): QueryNumPoolsRequestAmino;
    fromAminoMsg(object: QueryNumPoolsRequestAminoMsg): QueryNumPoolsRequest;
    toAminoMsg(message: QueryNumPoolsRequest): QueryNumPoolsRequestAminoMsg;
    fromProtoMsg(message: QueryNumPoolsRequestProtoMsg): QueryNumPoolsRequest;
    toProto(message: QueryNumPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryNumPoolsRequest): QueryNumPoolsRequestProtoMsg;
};
export declare const QueryNumPoolsResponse: {
    typeUrl: string;
    encode(message: QueryNumPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNumPoolsResponse;
    fromPartial(object: Partial<QueryNumPoolsResponse>): QueryNumPoolsResponse;
    fromAmino(object: QueryNumPoolsResponseAmino): QueryNumPoolsResponse;
    toAmino(message: QueryNumPoolsResponse): QueryNumPoolsResponseAmino;
    fromAminoMsg(object: QueryNumPoolsResponseAminoMsg): QueryNumPoolsResponse;
    toAminoMsg(message: QueryNumPoolsResponse): QueryNumPoolsResponseAminoMsg;
    fromProtoMsg(message: QueryNumPoolsResponseProtoMsg): QueryNumPoolsResponse;
    toProto(message: QueryNumPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryNumPoolsResponse): QueryNumPoolsResponseProtoMsg;
};
export declare const QueryPoolParamsRequest: {
    typeUrl: string;
    encode(message: QueryPoolParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolParamsRequest;
    fromPartial(object: Partial<QueryPoolParamsRequest>): QueryPoolParamsRequest;
    fromAmino(object: QueryPoolParamsRequestAmino): QueryPoolParamsRequest;
    toAmino(message: QueryPoolParamsRequest): QueryPoolParamsRequestAmino;
    fromAminoMsg(object: QueryPoolParamsRequestAminoMsg): QueryPoolParamsRequest;
    toAminoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestAminoMsg;
    fromProtoMsg(message: QueryPoolParamsRequestProtoMsg): QueryPoolParamsRequest;
    toProto(message: QueryPoolParamsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestProtoMsg;
};
export declare const QueryPoolParamsResponse: {
    typeUrl: string;
    encode(message: QueryPoolParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolParamsResponse;
    fromPartial(object: Partial<QueryPoolParamsResponse>): QueryPoolParamsResponse;
    fromAmino(object: QueryPoolParamsResponseAmino): QueryPoolParamsResponse;
    toAmino(message: QueryPoolParamsResponse): QueryPoolParamsResponseAmino;
    fromAminoMsg(object: QueryPoolParamsResponseAminoMsg): QueryPoolParamsResponse;
    toAminoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseAminoMsg;
    fromProtoMsg(message: QueryPoolParamsResponseProtoMsg): QueryPoolParamsResponse;
    toProto(message: QueryPoolParamsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseProtoMsg;
};
export declare const QueryTotalPoolLiquidityRequest: {
    typeUrl: string;
    encode(message: QueryTotalPoolLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalPoolLiquidityRequest;
    fromPartial(object: Partial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest;
    fromAmino(object: QueryTotalPoolLiquidityRequestAmino): QueryTotalPoolLiquidityRequest;
    toAmino(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestAmino;
    fromAminoMsg(object: QueryTotalPoolLiquidityRequestAminoMsg): QueryTotalPoolLiquidityRequest;
    toAminoMsg(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestAminoMsg;
    fromProtoMsg(message: QueryTotalPoolLiquidityRequestProtoMsg): QueryTotalPoolLiquidityRequest;
    toProto(message: QueryTotalPoolLiquidityRequest): Uint8Array;
    toProtoMsg(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestProtoMsg;
};
export declare const QueryTotalPoolLiquidityResponse: {
    typeUrl: string;
    encode(message: QueryTotalPoolLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalPoolLiquidityResponse;
    fromPartial(object: Partial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse;
    fromAmino(object: QueryTotalPoolLiquidityResponseAmino): QueryTotalPoolLiquidityResponse;
    toAmino(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseAmino;
    fromAminoMsg(object: QueryTotalPoolLiquidityResponseAminoMsg): QueryTotalPoolLiquidityResponse;
    toAminoMsg(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseAminoMsg;
    fromProtoMsg(message: QueryTotalPoolLiquidityResponseProtoMsg): QueryTotalPoolLiquidityResponse;
    toProto(message: QueryTotalPoolLiquidityResponse): Uint8Array;
    toProtoMsg(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseProtoMsg;
};
export declare const QueryTotalSharesRequest: {
    typeUrl: string;
    encode(message: QueryTotalSharesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalSharesRequest;
    fromPartial(object: Partial<QueryTotalSharesRequest>): QueryTotalSharesRequest;
    fromAmino(object: QueryTotalSharesRequestAmino): QueryTotalSharesRequest;
    toAmino(message: QueryTotalSharesRequest): QueryTotalSharesRequestAmino;
    fromAminoMsg(object: QueryTotalSharesRequestAminoMsg): QueryTotalSharesRequest;
    toAminoMsg(message: QueryTotalSharesRequest): QueryTotalSharesRequestAminoMsg;
    fromProtoMsg(message: QueryTotalSharesRequestProtoMsg): QueryTotalSharesRequest;
    toProto(message: QueryTotalSharesRequest): Uint8Array;
    toProtoMsg(message: QueryTotalSharesRequest): QueryTotalSharesRequestProtoMsg;
};
export declare const QueryTotalSharesResponse: {
    typeUrl: string;
    encode(message: QueryTotalSharesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalSharesResponse;
    fromPartial(object: Partial<QueryTotalSharesResponse>): QueryTotalSharesResponse;
    fromAmino(object: QueryTotalSharesResponseAmino): QueryTotalSharesResponse;
    toAmino(message: QueryTotalSharesResponse): QueryTotalSharesResponseAmino;
    fromAminoMsg(object: QueryTotalSharesResponseAminoMsg): QueryTotalSharesResponse;
    toAminoMsg(message: QueryTotalSharesResponse): QueryTotalSharesResponseAminoMsg;
    fromProtoMsg(message: QueryTotalSharesResponseProtoMsg): QueryTotalSharesResponse;
    toProto(message: QueryTotalSharesResponse): Uint8Array;
    toProtoMsg(message: QueryTotalSharesResponse): QueryTotalSharesResponseProtoMsg;
};
export declare const QuerySpotPriceRequest: {
    typeUrl: string;
    encode(message: QuerySpotPriceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotPriceRequest;
    fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest;
    fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest;
    toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino;
    fromAminoMsg(object: QuerySpotPriceRequestAminoMsg): QuerySpotPriceRequest;
    toAminoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestAminoMsg;
    fromProtoMsg(message: QuerySpotPriceRequestProtoMsg): QuerySpotPriceRequest;
    toProto(message: QuerySpotPriceRequest): Uint8Array;
    toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg;
};
export declare const QuerySpotPriceResponse: {
    typeUrl: string;
    encode(message: QuerySpotPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotPriceResponse;
    fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse;
    fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse;
    toAmino(message: QuerySpotPriceResponse): QuerySpotPriceResponseAmino;
    fromAminoMsg(object: QuerySpotPriceResponseAminoMsg): QuerySpotPriceResponse;
    toAminoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseAminoMsg;
    fromProtoMsg(message: QuerySpotPriceResponseProtoMsg): QuerySpotPriceResponse;
    toProto(message: QuerySpotPriceResponse): Uint8Array;
    toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg;
};
export declare const QuerySwapExactAmountInRequest: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountInRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapExactAmountInRequest;
    fromPartial(object: Partial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest;
    fromAmino(object: QuerySwapExactAmountInRequestAmino): QuerySwapExactAmountInRequest;
    toAmino(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestAmino;
    fromAminoMsg(object: QuerySwapExactAmountInRequestAminoMsg): QuerySwapExactAmountInRequest;
    toAminoMsg(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestAminoMsg;
    fromProtoMsg(message: QuerySwapExactAmountInRequestProtoMsg): QuerySwapExactAmountInRequest;
    toProto(message: QuerySwapExactAmountInRequest): Uint8Array;
    toProtoMsg(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestProtoMsg;
};
export declare const QuerySwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapExactAmountInResponse;
    fromPartial(object: Partial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse;
    fromAmino(object: QuerySwapExactAmountInResponseAmino): QuerySwapExactAmountInResponse;
    toAmino(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseAmino;
    fromAminoMsg(object: QuerySwapExactAmountInResponseAminoMsg): QuerySwapExactAmountInResponse;
    toAminoMsg(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseAminoMsg;
    fromProtoMsg(message: QuerySwapExactAmountInResponseProtoMsg): QuerySwapExactAmountInResponse;
    toProto(message: QuerySwapExactAmountInResponse): Uint8Array;
    toProtoMsg(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseProtoMsg;
};
export declare const QuerySwapExactAmountOutRequest: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountOutRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapExactAmountOutRequest;
    fromPartial(object: Partial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest;
    fromAmino(object: QuerySwapExactAmountOutRequestAmino): QuerySwapExactAmountOutRequest;
    toAmino(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestAmino;
    fromAminoMsg(object: QuerySwapExactAmountOutRequestAminoMsg): QuerySwapExactAmountOutRequest;
    toAminoMsg(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestAminoMsg;
    fromProtoMsg(message: QuerySwapExactAmountOutRequestProtoMsg): QuerySwapExactAmountOutRequest;
    toProto(message: QuerySwapExactAmountOutRequest): Uint8Array;
    toProtoMsg(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestProtoMsg;
};
export declare const QuerySwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapExactAmountOutResponse;
    fromPartial(object: Partial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse;
    fromAmino(object: QuerySwapExactAmountOutResponseAmino): QuerySwapExactAmountOutResponse;
    toAmino(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseAmino;
    fromAminoMsg(object: QuerySwapExactAmountOutResponseAminoMsg): QuerySwapExactAmountOutResponse;
    toAminoMsg(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseAminoMsg;
    fromProtoMsg(message: QuerySwapExactAmountOutResponseProtoMsg): QuerySwapExactAmountOutResponse;
    toProto(message: QuerySwapExactAmountOutResponse): Uint8Array;
    toProtoMsg(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseProtoMsg;
};
export declare const QueryTotalLiquidityRequest: {
    typeUrl: string;
    encode(_: QueryTotalLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTotalLiquidityRequest;
    fromPartial(_: Partial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest;
    fromAmino(_: QueryTotalLiquidityRequestAmino): QueryTotalLiquidityRequest;
    toAmino(_: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestAmino;
    fromAminoMsg(object: QueryTotalLiquidityRequestAminoMsg): QueryTotalLiquidityRequest;
    toAminoMsg(message: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestAminoMsg;
    fromProtoMsg(message: QueryTotalLiquidityRequestProtoMsg): QueryTotalLiquidityRequest;
    toProto(message: QueryTotalLiquidityRequest): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestProtoMsg;
};
export declare const QueryTotalLiquidityResponse: {
    typeUrl: string;
    encode(message: QueryTotalLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalLiquidityResponse;
    fromPartial(object: Partial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse;
    fromAmino(object: QueryTotalLiquidityResponseAmino): QueryTotalLiquidityResponse;
    toAmino(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseAmino;
    fromAminoMsg(object: QueryTotalLiquidityResponseAminoMsg): QueryTotalLiquidityResponse;
    toAminoMsg(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseAminoMsg;
    fromProtoMsg(message: QueryTotalLiquidityResponseProtoMsg): QueryTotalLiquidityResponse;
    toProto(message: QueryTotalLiquidityResponse): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseProtoMsg;
};
export declare const PoolI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Pool | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino;
