import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "../../poolmanager/v1beta1/swap_route";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * =============================== Pool
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryPoolRequest {
    poolId: Long;
}
/**
 * =============================== Pool
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryPoolRequestSDKType {
    pool_id: Long;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryPoolResponse {
    pool?: Any;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryPoolResponseSDKType {
    pool?: AnySDKType;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** =============================== Pools */
export interface QueryPoolsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
    pools: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryPoolsResponseSDKType {
    pools: AnySDKType[];
    pagination?: PageResponseSDKType;
}
/** =============================== NumPools */
/** @deprecated */
export interface QueryNumPoolsRequest {
}
/** =============================== NumPools */
/** @deprecated */
export interface QueryNumPoolsRequestSDKType {
}
/** @deprecated */
export interface QueryNumPoolsResponse {
    numPools: Long;
}
/** @deprecated */
export interface QueryNumPoolsResponseSDKType {
    num_pools: Long;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequest {
    poolId: Long;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestSDKType {
    pool_id: Long;
}
export interface QueryPoolTypeResponse {
    poolType: string;
}
export interface QueryPoolTypeResponseSDKType {
    pool_type: string;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequest {
    poolId: Long;
    tokensIn: Coin[];
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequestSDKType {
    pool_id: Long;
    tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolSharesResponse {
    shareOutAmount: string;
    tokensOut: Coin[];
}
export interface QueryCalcJoinPoolSharesResponseSDKType {
    share_out_amount: string;
    tokens_out: CoinSDKType[];
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequest {
    poolId: Long;
    shareInAmount: string;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestSDKType {
    pool_id: Long;
    share_in_amount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesResponse {
    tokensOut: Coin[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseSDKType {
    tokens_out: CoinSDKType[];
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
    poolId: Long;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestSDKType {
    pool_id: Long;
}
export interface QueryPoolParamsResponse {
    params?: Any;
}
export interface QueryPoolParamsResponseSDKType {
    params?: AnySDKType;
}
/**
 * =============================== PoolLiquidity
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryTotalPoolLiquidityRequest {
    poolId: Long;
}
/**
 * =============================== PoolLiquidity
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryTotalPoolLiquidityRequestSDKType {
    pool_id: Long;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryTotalPoolLiquidityResponse {
    liquidity: Coin[];
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryTotalPoolLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
    poolId: Long;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestSDKType {
    pool_id: Long;
}
export interface QueryTotalSharesResponse {
    totalShares?: Coin;
}
export interface QueryTotalSharesResponseSDKType {
    total_shares?: CoinSDKType;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequest {
    poolId: Long;
    tokensIn: Coin[];
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestSDKType {
    pool_id: Long;
    tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolNoSwapSharesResponse {
    tokensOut: Coin[];
    sharesOut: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseSDKType {
    tokens_out: CoinSDKType[];
    shares_out: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequest {
    poolId: Long;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequestSDKType {
    pool_id: Long;
    base_asset_denom: string;
    quote_asset_denom: string;
}
export interface QueryPoolsWithFilterRequest {
    /**
     * String of the coins in single string seperated by comma. Ex)
     * 10uatom,100uosmo
     */
    minLiquidity: string;
    poolType: string;
    pagination?: PageRequest;
}
export interface QueryPoolsWithFilterRequestSDKType {
    min_liquidity: string;
    pool_type: string;
    pagination?: PageRequestSDKType;
}
export interface QueryPoolsWithFilterResponse {
    pools: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryPoolsWithFilterResponseSDKType {
    pools: AnySDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponseSDKType {
    spot_price: string;
}
/** =============================== EstimateSwapExactAmountIn */
/** @deprecated */
export interface QuerySwapExactAmountInRequest {
    sender: string;
    poolId: Long;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
/** =============================== EstimateSwapExactAmountIn */
/** @deprecated */
export interface QuerySwapExactAmountInRequestSDKType {
    sender: string;
    pool_id: Long;
    token_in: string;
    routes: SwapAmountInRouteSDKType[];
}
/** @deprecated */
export interface QuerySwapExactAmountInResponse {
    tokenOutAmount: string;
}
/** @deprecated */
export interface QuerySwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
/** @deprecated */
export interface QuerySwapExactAmountOutRequest {
    sender: string;
    poolId: Long;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
/** =============================== EstimateSwapExactAmountOut */
/** @deprecated */
export interface QuerySwapExactAmountOutRequestSDKType {
    sender: string;
    pool_id: Long;
    routes: SwapAmountOutRouteSDKType[];
    token_out: string;
}
/** @deprecated */
export interface QuerySwapExactAmountOutResponse {
    tokenInAmount: string;
}
/** @deprecated */
export interface QuerySwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
export interface QueryTotalLiquidityRequest {
}
export interface QueryTotalLiquidityRequestSDKType {
}
export interface QueryTotalLiquidityResponse {
    liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
/** =============================== QueryConcentratedPoolIdLinkFromCFMM */
export interface QueryConcentratedPoolIdLinkFromCFMMRequest {
    cfmmPoolId: Long;
}
/** =============================== QueryConcentratedPoolIdLinkFromCFMM */
export interface QueryConcentratedPoolIdLinkFromCFMMRequestSDKType {
    cfmm_pool_id: Long;
}
export interface QueryConcentratedPoolIdLinkFromCFMMResponse {
    concentratedPoolId: Long;
}
export interface QueryConcentratedPoolIdLinkFromCFMMResponseSDKType {
    concentrated_pool_id: Long;
}
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolRequest;
    fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolResponse;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
};
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolsRequest;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolsResponse;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
};
export declare const QueryNumPoolsRequest: {
    encode(_: QueryNumPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryNumPoolsRequest;
    fromPartial(_: Partial<QueryNumPoolsRequest>): QueryNumPoolsRequest;
};
export declare const QueryNumPoolsResponse: {
    encode(message: QueryNumPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryNumPoolsResponse;
    fromPartial(object: Partial<QueryNumPoolsResponse>): QueryNumPoolsResponse;
};
export declare const QueryPoolTypeRequest: {
    encode(message: QueryPoolTypeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolTypeRequest;
    fromPartial(object: Partial<QueryPoolTypeRequest>): QueryPoolTypeRequest;
};
export declare const QueryPoolTypeResponse: {
    encode(message: QueryPoolTypeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolTypeResponse;
    fromPartial(object: Partial<QueryPoolTypeResponse>): QueryPoolTypeResponse;
};
export declare const QueryCalcJoinPoolSharesRequest: {
    encode(message: QueryCalcJoinPoolSharesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCalcJoinPoolSharesRequest;
    fromPartial(object: Partial<QueryCalcJoinPoolSharesRequest>): QueryCalcJoinPoolSharesRequest;
};
export declare const QueryCalcJoinPoolSharesResponse: {
    encode(message: QueryCalcJoinPoolSharesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCalcJoinPoolSharesResponse;
    fromPartial(object: Partial<QueryCalcJoinPoolSharesResponse>): QueryCalcJoinPoolSharesResponse;
};
export declare const QueryCalcExitPoolCoinsFromSharesRequest: {
    encode(message: QueryCalcExitPoolCoinsFromSharesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesRequest;
    fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesRequest>): QueryCalcExitPoolCoinsFromSharesRequest;
};
export declare const QueryCalcExitPoolCoinsFromSharesResponse: {
    encode(message: QueryCalcExitPoolCoinsFromSharesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesResponse;
    fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesResponse>): QueryCalcExitPoolCoinsFromSharesResponse;
};
export declare const QueryPoolParamsRequest: {
    encode(message: QueryPoolParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolParamsRequest;
    fromPartial(object: Partial<QueryPoolParamsRequest>): QueryPoolParamsRequest;
};
export declare const QueryPoolParamsResponse: {
    encode(message: QueryPoolParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolParamsResponse;
    fromPartial(object: Partial<QueryPoolParamsResponse>): QueryPoolParamsResponse;
};
export declare const QueryTotalPoolLiquidityRequest: {
    encode(message: QueryTotalPoolLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalPoolLiquidityRequest;
    fromPartial(object: Partial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest;
};
export declare const QueryTotalPoolLiquidityResponse: {
    encode(message: QueryTotalPoolLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalPoolLiquidityResponse;
    fromPartial(object: Partial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse;
};
export declare const QueryTotalSharesRequest: {
    encode(message: QueryTotalSharesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalSharesRequest;
    fromPartial(object: Partial<QueryTotalSharesRequest>): QueryTotalSharesRequest;
};
export declare const QueryTotalSharesResponse: {
    encode(message: QueryTotalSharesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalSharesResponse;
    fromPartial(object: Partial<QueryTotalSharesResponse>): QueryTotalSharesResponse;
};
export declare const QueryCalcJoinPoolNoSwapSharesRequest: {
    encode(message: QueryCalcJoinPoolNoSwapSharesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesRequest;
    fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesRequest>): QueryCalcJoinPoolNoSwapSharesRequest;
};
export declare const QueryCalcJoinPoolNoSwapSharesResponse: {
    encode(message: QueryCalcJoinPoolNoSwapSharesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesResponse;
    fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesResponse>): QueryCalcJoinPoolNoSwapSharesResponse;
};
export declare const QuerySpotPriceRequest: {
    encode(message: QuerySpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotPriceRequest;
    fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest;
};
export declare const QueryPoolsWithFilterRequest: {
    encode(message: QueryPoolsWithFilterRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolsWithFilterRequest;
    fromPartial(object: Partial<QueryPoolsWithFilterRequest>): QueryPoolsWithFilterRequest;
};
export declare const QueryPoolsWithFilterResponse: {
    encode(message: QueryPoolsWithFilterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPoolsWithFilterResponse;
    fromPartial(object: Partial<QueryPoolsWithFilterResponse>): QueryPoolsWithFilterResponse;
};
export declare const QuerySpotPriceResponse: {
    encode(message: QuerySpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotPriceResponse;
    fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse;
};
export declare const QuerySwapExactAmountInRequest: {
    encode(message: QuerySwapExactAmountInRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySwapExactAmountInRequest;
    fromPartial(object: Partial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest;
};
export declare const QuerySwapExactAmountInResponse: {
    encode(message: QuerySwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySwapExactAmountInResponse;
    fromPartial(object: Partial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse;
};
export declare const QuerySwapExactAmountOutRequest: {
    encode(message: QuerySwapExactAmountOutRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySwapExactAmountOutRequest;
    fromPartial(object: Partial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest;
};
export declare const QuerySwapExactAmountOutResponse: {
    encode(message: QuerySwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySwapExactAmountOutResponse;
    fromPartial(object: Partial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse;
};
export declare const QueryTotalLiquidityRequest: {
    encode(_: QueryTotalLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryTotalLiquidityRequest;
    fromPartial(_: Partial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest;
};
export declare const QueryTotalLiquidityResponse: {
    encode(message: QueryTotalLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalLiquidityResponse;
    fromPartial(object: Partial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse;
};
export declare const QueryConcentratedPoolIdLinkFromCFMMRequest: {
    encode(message: QueryConcentratedPoolIdLinkFromCFMMRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryConcentratedPoolIdLinkFromCFMMRequest;
    fromPartial(object: Partial<QueryConcentratedPoolIdLinkFromCFMMRequest>): QueryConcentratedPoolIdLinkFromCFMMRequest;
};
export declare const QueryConcentratedPoolIdLinkFromCFMMResponse: {
    encode(message: QueryConcentratedPoolIdLinkFromCFMMResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryConcentratedPoolIdLinkFromCFMMResponse;
    fromPartial(object: Partial<QueryConcentratedPoolIdLinkFromCFMMResponse>): QueryConcentratedPoolIdLinkFromCFMMResponse;
};
