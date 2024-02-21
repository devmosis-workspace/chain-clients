import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../../concentratedliquidity/v1beta1/pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../../concentratedliquidity/v1beta1/pool";
import { PoolSDKType as Pool1SDKType } from "../../concentratedliquidity/v1beta1/pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "../../cosmwasmpool/v1beta1/model/pool";
import { Pool as Pool2 } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { Pool as Pool3 } from "../../gamm/v1beta1/balancerPool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../../gamm/v1beta1/balancerPool";
import { PoolSDKType as Pool3SDKType } from "../../gamm/v1beta1/balancerPool";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** =============================== Params */
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.ParamsRequest";
    value: Uint8Array;
}
/** =============================== Params */
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "osmosis/poolmanager/params-request";
    value: ParamsRequestAmino;
}
/** =============================== Params */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "osmosis/poolmanager/params-response";
    value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
    params: ParamsSDKType;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequest {
    /** @deprecated */
    poolId: bigint;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
export interface EstimateSwapExactAmountInRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest";
    value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestAmino {
    /** @deprecated */
    pool_id?: string;
    token_in?: string;
    routes?: SwapAmountInRouteAmino[];
}
export interface EstimateSwapExactAmountInRequestAminoMsg {
    type: "osmosis/poolmanager/estimate-swap-exact-amount-in-request";
    value: EstimateSwapExactAmountInRequestAmino;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestSDKType {
    /** @deprecated */
    pool_id: bigint;
    token_in: string;
    routes: SwapAmountInRouteSDKType[];
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    /** @deprecated */
    poolId: bigint;
    tokenIn: string;
    routesPoolId: bigint[];
    routesTokenOutDenom: string[];
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest";
    value: Uint8Array;
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino {
    /** @deprecated */
    pool_id?: string;
    token_in?: string;
    routes_pool_id?: string[];
    routes_token_out_denom?: string[];
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg {
    type: "osmosis/poolmanager/estimate-swap-exact-amount-in-with-primitive-types-request";
    value: EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino;
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestSDKType {
    /** @deprecated */
    pool_id: bigint;
    token_in: string;
    routes_pool_id: bigint[];
    routes_token_out_denom: string[];
}
export interface EstimateSinglePoolSwapExactAmountInRequest {
    poolId: bigint;
    tokenIn: string;
    tokenOutDenom: string;
}
export interface EstimateSinglePoolSwapExactAmountInRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest";
    value: Uint8Array;
}
export interface EstimateSinglePoolSwapExactAmountInRequestAmino {
    pool_id?: string;
    token_in?: string;
    token_out_denom?: string;
}
export interface EstimateSinglePoolSwapExactAmountInRequestAminoMsg {
    type: "osmosis/poolmanager/estimate-single-pool-swap-exact-amount-in-request";
    value: EstimateSinglePoolSwapExactAmountInRequestAmino;
}
export interface EstimateSinglePoolSwapExactAmountInRequestSDKType {
    pool_id: bigint;
    token_in: string;
    token_out_denom: string;
}
export interface EstimateSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface EstimateSwapExactAmountInResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse";
    value: Uint8Array;
}
export interface EstimateSwapExactAmountInResponseAmino {
    token_out_amount?: string;
}
export interface EstimateSwapExactAmountInResponseAminoMsg {
    type: "osmosis/poolmanager/estimate-swap-exact-amount-in-response";
    value: EstimateSwapExactAmountInResponseAmino;
}
export interface EstimateSwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequest {
    /** @deprecated */
    poolId: bigint;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
export interface EstimateSwapExactAmountOutRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest";
    value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestAmino {
    /** @deprecated */
    pool_id?: string;
    routes?: SwapAmountOutRouteAmino[];
    token_out?: string;
}
export interface EstimateSwapExactAmountOutRequestAminoMsg {
    type: "osmosis/poolmanager/estimate-swap-exact-amount-out-request";
    value: EstimateSwapExactAmountOutRequestAmino;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestSDKType {
    /** @deprecated */
    pool_id: bigint;
    routes: SwapAmountOutRouteSDKType[];
    token_out: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    /** @deprecated */
    poolId: bigint;
    routesPoolId: bigint[];
    routesTokenInDenom: string[];
    tokenOut: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest";
    value: Uint8Array;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino {
    /** @deprecated */
    pool_id?: string;
    routes_pool_id?: string[];
    routes_token_in_denom?: string[];
    token_out?: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg {
    type: "osmosis/poolmanager/estimate-swap-exact-amount-out-with-primitive-types-request";
    value: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestSDKType {
    /** @deprecated */
    pool_id: bigint;
    routes_pool_id: bigint[];
    routes_token_in_denom: string[];
    token_out: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequest {
    poolId: bigint;
    tokenInDenom: string;
    tokenOut: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest";
    value: Uint8Array;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestAmino {
    pool_id?: string;
    token_in_denom?: string;
    token_out?: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestAminoMsg {
    type: "osmosis/poolmanager/estimate-single-pool-swap-exact-amount-out-request";
    value: EstimateSinglePoolSwapExactAmountOutRequestAmino;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestSDKType {
    pool_id: bigint;
    token_in_denom: string;
    token_out: string;
}
export interface EstimateSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface EstimateSwapExactAmountOutResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse";
    value: Uint8Array;
}
export interface EstimateSwapExactAmountOutResponseAmino {
    token_in_amount?: string;
}
export interface EstimateSwapExactAmountOutResponseAminoMsg {
    type: "osmosis/poolmanager/estimate-swap-exact-amount-out-response";
    value: EstimateSwapExactAmountOutResponseAmino;
}
export interface EstimateSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
/** =============================== NumPools */
export interface NumPoolsRequest {
}
export interface NumPoolsRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsRequest";
    value: Uint8Array;
}
/** =============================== NumPools */
export interface NumPoolsRequestAmino {
}
export interface NumPoolsRequestAminoMsg {
    type: "osmosis/poolmanager/num-pools-request";
    value: NumPoolsRequestAmino;
}
/** =============================== NumPools */
export interface NumPoolsRequestSDKType {
}
export interface NumPoolsResponse {
    numPools: bigint;
}
export interface NumPoolsResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsResponse";
    value: Uint8Array;
}
export interface NumPoolsResponseAmino {
    num_pools?: string;
}
export interface NumPoolsResponseAminoMsg {
    type: "osmosis/poolmanager/num-pools-response";
    value: NumPoolsResponseAmino;
}
export interface NumPoolsResponseSDKType {
    num_pools: bigint;
}
/** =============================== Pool */
export interface PoolRequest {
    poolId: bigint;
}
export interface PoolRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.PoolRequest";
    value: Uint8Array;
}
/** =============================== Pool */
export interface PoolRequestAmino {
    pool_id?: string;
}
export interface PoolRequestAminoMsg {
    type: "osmosis/poolmanager/pool-request";
    value: PoolRequestAmino;
}
/** =============================== Pool */
export interface PoolRequestSDKType {
    pool_id: bigint;
}
export interface PoolResponse {
    pool?: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any) | undefined;
}
export interface PoolResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.PoolResponse";
    value: Uint8Array;
}
export type PoolResponseEncoded = Omit<PoolResponse, "pool"> & {
    pool?: Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg | undefined;
};
export interface PoolResponseAmino {
    pool?: AnyAmino;
}
export interface PoolResponseAminoMsg {
    type: "osmosis/poolmanager/pool-response";
    value: PoolResponseAmino;
}
export interface PoolResponseSDKType {
    pool?: Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType | undefined;
}
/** =============================== AllPools */
export interface AllPoolsRequest {
}
export interface AllPoolsRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsRequest";
    value: Uint8Array;
}
/** =============================== AllPools */
export interface AllPoolsRequestAmino {
}
export interface AllPoolsRequestAminoMsg {
    type: "osmosis/poolmanager/all-pools-request";
    value: AllPoolsRequestAmino;
}
/** =============================== AllPools */
export interface AllPoolsRequestSDKType {
}
export interface AllPoolsResponse {
    pools: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any)[] | Any[];
}
export interface AllPoolsResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsResponse";
    value: Uint8Array;
}
export type AllPoolsResponseEncoded = Omit<AllPoolsResponse, "pools"> & {
    pools: (Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface AllPoolsResponseAmino {
    pools?: AnyAmino[];
}
export interface AllPoolsResponseAminoMsg {
    type: "osmosis/poolmanager/all-pools-response";
    value: AllPoolsResponseAmino;
}
export interface AllPoolsResponseSDKType {
    pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 */
export interface ListPoolsByDenomRequest {
    denom: string;
}
export interface ListPoolsByDenomRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest";
    value: Uint8Array;
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 */
export interface ListPoolsByDenomRequestAmino {
    denom?: string;
}
export interface ListPoolsByDenomRequestAminoMsg {
    type: "osmosis/poolmanager/list-pools-by-denom-request";
    value: ListPoolsByDenomRequestAmino;
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 */
export interface ListPoolsByDenomRequestSDKType {
    denom: string;
}
export interface ListPoolsByDenomResponse {
    pools: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any)[] | Any[];
}
export interface ListPoolsByDenomResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse";
    value: Uint8Array;
}
export type ListPoolsByDenomResponseEncoded = Omit<ListPoolsByDenomResponse, "pools"> & {
    pools: (Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface ListPoolsByDenomResponseAmino {
    pools?: AnyAmino[];
}
export interface ListPoolsByDenomResponseAminoMsg {
    type: "osmosis/poolmanager/list-pools-by-denom-response";
    value: ListPoolsByDenomResponseAmino;
}
export interface ListPoolsByDenomResponseSDKType {
    pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequest {
    poolId: bigint;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
export interface SpotPriceRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceRequest";
    value: Uint8Array;
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestAmino {
    pool_id?: string;
    base_asset_denom?: string;
    quote_asset_denom?: string;
}
export interface SpotPriceRequestAminoMsg {
    type: "osmosis/poolmanager/spot-price-request";
    value: SpotPriceRequestAmino;
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestSDKType {
    pool_id: bigint;
    base_asset_denom: string;
    quote_asset_denom: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
export interface SpotPriceResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceResponse";
    value: Uint8Array;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseAmino {
    /** String of the Dec. Ex) 10.203uatom */
    spot_price?: string;
}
export interface SpotPriceResponseAminoMsg {
    type: "osmosis/poolmanager/spot-price-response";
    value: SpotPriceResponseAmino;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseSDKType {
    spot_price: string;
}
/** =============================== TotalPoolLiquidity */
export interface TotalPoolLiquidityRequest {
    poolId: bigint;
}
export interface TotalPoolLiquidityRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest";
    value: Uint8Array;
}
/** =============================== TotalPoolLiquidity */
export interface TotalPoolLiquidityRequestAmino {
    pool_id?: string;
}
export interface TotalPoolLiquidityRequestAminoMsg {
    type: "osmosis/poolmanager/total-pool-liquidity-request";
    value: TotalPoolLiquidityRequestAmino;
}
/** =============================== TotalPoolLiquidity */
export interface TotalPoolLiquidityRequestSDKType {
    pool_id: bigint;
}
export interface TotalPoolLiquidityResponse {
    liquidity: Coin[];
}
export interface TotalPoolLiquidityResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse";
    value: Uint8Array;
}
export interface TotalPoolLiquidityResponseAmino {
    liquidity?: CoinAmino[];
}
export interface TotalPoolLiquidityResponseAminoMsg {
    type: "osmosis/poolmanager/total-pool-liquidity-response";
    value: TotalPoolLiquidityResponseAmino;
}
export interface TotalPoolLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
/** =============================== TotalLiquidity */
export interface TotalLiquidityRequest {
}
export interface TotalLiquidityRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityRequest";
    value: Uint8Array;
}
/** =============================== TotalLiquidity */
export interface TotalLiquidityRequestAmino {
}
export interface TotalLiquidityRequestAminoMsg {
    type: "osmosis/poolmanager/total-liquidity-request";
    value: TotalLiquidityRequestAmino;
}
/** =============================== TotalLiquidity */
export interface TotalLiquidityRequestSDKType {
}
export interface TotalLiquidityResponse {
    liquidity: Coin[];
}
export interface TotalLiquidityResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityResponse";
    value: Uint8Array;
}
export interface TotalLiquidityResponseAmino {
    liquidity?: CoinAmino[];
}
export interface TotalLiquidityResponseAminoMsg {
    type: "osmosis/poolmanager/total-liquidity-response";
    value: TotalLiquidityResponseAmino;
}
export interface TotalLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
/** =============================== TotalVolumeForPool */
export interface TotalVolumeForPoolRequest {
    poolId: bigint;
}
export interface TotalVolumeForPoolRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest";
    value: Uint8Array;
}
/** =============================== TotalVolumeForPool */
export interface TotalVolumeForPoolRequestAmino {
    pool_id?: string;
}
export interface TotalVolumeForPoolRequestAminoMsg {
    type: "osmosis/poolmanager/total-volume-for-pool-request";
    value: TotalVolumeForPoolRequestAmino;
}
/** =============================== TotalVolumeForPool */
export interface TotalVolumeForPoolRequestSDKType {
    pool_id: bigint;
}
export interface TotalVolumeForPoolResponse {
    volume: Coin[];
}
export interface TotalVolumeForPoolResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse";
    value: Uint8Array;
}
export interface TotalVolumeForPoolResponseAmino {
    volume?: CoinAmino[];
}
export interface TotalVolumeForPoolResponseAminoMsg {
    type: "osmosis/poolmanager/total-volume-for-pool-response";
    value: TotalVolumeForPoolResponseAmino;
}
export interface TotalVolumeForPoolResponseSDKType {
    volume: CoinSDKType[];
}
/** =============================== TradingPairTakerFee */
export interface TradingPairTakerFeeRequest {
    denom0: string;
    denom1: string;
}
export interface TradingPairTakerFeeRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest";
    value: Uint8Array;
}
/** =============================== TradingPairTakerFee */
export interface TradingPairTakerFeeRequestAmino {
    denom_0?: string;
    denom_1?: string;
}
export interface TradingPairTakerFeeRequestAminoMsg {
    type: "osmosis/poolmanager/trading-pair-taker-fee-request";
    value: TradingPairTakerFeeRequestAmino;
}
/** =============================== TradingPairTakerFee */
export interface TradingPairTakerFeeRequestSDKType {
    denom_0: string;
    denom_1: string;
}
export interface TradingPairTakerFeeResponse {
    takerFee: string;
}
export interface TradingPairTakerFeeResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse";
    value: Uint8Array;
}
export interface TradingPairTakerFeeResponseAmino {
    taker_fee?: string;
}
export interface TradingPairTakerFeeResponseAminoMsg {
    type: "osmosis/poolmanager/trading-pair-taker-fee-response";
    value: TradingPairTakerFeeResponseAmino;
}
export interface TradingPairTakerFeeResponseSDKType {
    taker_fee: string;
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 */
export interface EstimateTradeBasedOnPriceImpactRequest {
    /** from_coin is the total amount of tokens that the user wants to sell. */
    fromCoin: Coin;
    /**
     * to_coin_denom is the denom identifier of the token that the user wants to
     * buy.
     */
    toCoinDenom: string;
    /**
     * pool_id is the identifier of the liquidity pool that the trade will occur
     * on.
     */
    poolId: bigint;
    /**
     * max_price_impact is the maximum percentage that the user is willing
     * to affect the price of the liquidity pool.
     */
    maxPriceImpact: string;
    /**
     * external_price is an optional external price that the user can enter.
     * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
     * any time.
     */
    externalPrice: string;
}
export interface EstimateTradeBasedOnPriceImpactRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest";
    value: Uint8Array;
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 */
export interface EstimateTradeBasedOnPriceImpactRequestAmino {
    /** from_coin is the total amount of tokens that the user wants to sell. */
    from_coin?: CoinAmino;
    /**
     * to_coin_denom is the denom identifier of the token that the user wants to
     * buy.
     */
    to_coin_denom?: string;
    /**
     * pool_id is the identifier of the liquidity pool that the trade will occur
     * on.
     */
    pool_id?: string;
    /**
     * max_price_impact is the maximum percentage that the user is willing
     * to affect the price of the liquidity pool.
     */
    max_price_impact?: string;
    /**
     * external_price is an optional external price that the user can enter.
     * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
     * any time.
     */
    external_price?: string;
}
export interface EstimateTradeBasedOnPriceImpactRequestAminoMsg {
    type: "osmosis/poolmanager/estimate-trade-based-on-price-impact-request";
    value: EstimateTradeBasedOnPriceImpactRequestAmino;
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 */
export interface EstimateTradeBasedOnPriceImpactRequestSDKType {
    from_coin: CoinSDKType;
    to_coin_denom: string;
    pool_id: bigint;
    max_price_impact: string;
    external_price: string;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 */
export interface EstimateTradeBasedOnPriceImpactResponse {
    /**
     * input_coin is the actual input amount that would be tradeable
     * under the specified price impact.
     */
    inputCoin: Coin;
    /**
     * output_coin is the amount of tokens of the ToCoinDenom type
     * that will be received for the actual InputCoin trade.
     */
    outputCoin: Coin;
}
export interface EstimateTradeBasedOnPriceImpactResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse";
    value: Uint8Array;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 */
export interface EstimateTradeBasedOnPriceImpactResponseAmino {
    /**
     * input_coin is the actual input amount that would be tradeable
     * under the specified price impact.
     */
    input_coin?: CoinAmino;
    /**
     * output_coin is the amount of tokens of the ToCoinDenom type
     * that will be received for the actual InputCoin trade.
     */
    output_coin?: CoinAmino;
}
export interface EstimateTradeBasedOnPriceImpactResponseAminoMsg {
    type: "osmosis/poolmanager/estimate-trade-based-on-price-impact-response";
    value: EstimateTradeBasedOnPriceImpactResponseAmino;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 */
export interface EstimateTradeBasedOnPriceImpactResponseSDKType {
    input_coin: CoinSDKType;
    output_coin: CoinSDKType;
}
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
    fromAmino(_: ParamsRequestAmino): ParamsRequest;
    toAmino(_: ParamsRequest): ParamsRequestAmino;
    fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest;
    toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg;
    fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest;
    toProto(message: ParamsRequest): Uint8Array;
    toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
    fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse;
    toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg;
    fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse;
    toProto(message: ParamsResponse): Uint8Array;
    toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg;
};
export declare const EstimateSwapExactAmountInRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountInRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EstimateSwapExactAmountInRequest;
    fromPartial(object: Partial<EstimateSwapExactAmountInRequest>): EstimateSwapExactAmountInRequest;
    fromAmino(object: EstimateSwapExactAmountInRequestAmino): EstimateSwapExactAmountInRequest;
    toAmino(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestAmino;
    fromAminoMsg(object: EstimateSwapExactAmountInRequestAminoMsg): EstimateSwapExactAmountInRequest;
    toAminoMsg(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountInRequestProtoMsg): EstimateSwapExactAmountInRequest;
    toProto(message: EstimateSwapExactAmountInRequest): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestProtoMsg;
};
export declare const EstimateSwapExactAmountInWithPrimitiveTypesRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EstimateSwapExactAmountInWithPrimitiveTypesRequest;
    fromPartial(object: Partial<EstimateSwapExactAmountInWithPrimitiveTypesRequest>): EstimateSwapExactAmountInWithPrimitiveTypesRequest;
    fromAmino(object: EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino): EstimateSwapExactAmountInWithPrimitiveTypesRequest;
    toAmino(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest): EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino;
    fromAminoMsg(object: EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg): EstimateSwapExactAmountInWithPrimitiveTypesRequest;
    toAminoMsg(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest): EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg): EstimateSwapExactAmountInWithPrimitiveTypesRequest;
    toProto(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest): EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg;
};
export declare const EstimateSinglePoolSwapExactAmountInRequest: {
    typeUrl: string;
    encode(message: EstimateSinglePoolSwapExactAmountInRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EstimateSinglePoolSwapExactAmountInRequest;
    fromPartial(object: Partial<EstimateSinglePoolSwapExactAmountInRequest>): EstimateSinglePoolSwapExactAmountInRequest;
    fromAmino(object: EstimateSinglePoolSwapExactAmountInRequestAmino): EstimateSinglePoolSwapExactAmountInRequest;
    toAmino(message: EstimateSinglePoolSwapExactAmountInRequest): EstimateSinglePoolSwapExactAmountInRequestAmino;
    fromAminoMsg(object: EstimateSinglePoolSwapExactAmountInRequestAminoMsg): EstimateSinglePoolSwapExactAmountInRequest;
    toAminoMsg(message: EstimateSinglePoolSwapExactAmountInRequest): EstimateSinglePoolSwapExactAmountInRequestAminoMsg;
    fromProtoMsg(message: EstimateSinglePoolSwapExactAmountInRequestProtoMsg): EstimateSinglePoolSwapExactAmountInRequest;
    toProto(message: EstimateSinglePoolSwapExactAmountInRequest): Uint8Array;
    toProtoMsg(message: EstimateSinglePoolSwapExactAmountInRequest): EstimateSinglePoolSwapExactAmountInRequestProtoMsg;
};
export declare const EstimateSwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EstimateSwapExactAmountInResponse;
    fromPartial(object: Partial<EstimateSwapExactAmountInResponse>): EstimateSwapExactAmountInResponse;
    fromAmino(object: EstimateSwapExactAmountInResponseAmino): EstimateSwapExactAmountInResponse;
    toAmino(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAmino;
    fromAminoMsg(object: EstimateSwapExactAmountInResponseAminoMsg): EstimateSwapExactAmountInResponse;
    toAminoMsg(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountInResponseProtoMsg): EstimateSwapExactAmountInResponse;
    toProto(message: EstimateSwapExactAmountInResponse): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseProtoMsg;
};
export declare const EstimateSwapExactAmountOutRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountOutRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EstimateSwapExactAmountOutRequest;
    fromPartial(object: Partial<EstimateSwapExactAmountOutRequest>): EstimateSwapExactAmountOutRequest;
    fromAmino(object: EstimateSwapExactAmountOutRequestAmino): EstimateSwapExactAmountOutRequest;
    toAmino(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAmino;
    fromAminoMsg(object: EstimateSwapExactAmountOutRequestAminoMsg): EstimateSwapExactAmountOutRequest;
    toAminoMsg(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountOutRequestProtoMsg): EstimateSwapExactAmountOutRequest;
    toProto(message: EstimateSwapExactAmountOutRequest): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestProtoMsg;
};
export declare const EstimateSwapExactAmountOutWithPrimitiveTypesRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
    fromPartial(object: Partial<EstimateSwapExactAmountOutWithPrimitiveTypesRequest>): EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
    fromAmino(object: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino): EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
    toAmino(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino;
    fromAminoMsg(object: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg): EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
    toAminoMsg(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg): EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
    toProto(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg;
};
export declare const EstimateSinglePoolSwapExactAmountOutRequest: {
    typeUrl: string;
    encode(message: EstimateSinglePoolSwapExactAmountOutRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EstimateSinglePoolSwapExactAmountOutRequest;
    fromPartial(object: Partial<EstimateSinglePoolSwapExactAmountOutRequest>): EstimateSinglePoolSwapExactAmountOutRequest;
    fromAmino(object: EstimateSinglePoolSwapExactAmountOutRequestAmino): EstimateSinglePoolSwapExactAmountOutRequest;
    toAmino(message: EstimateSinglePoolSwapExactAmountOutRequest): EstimateSinglePoolSwapExactAmountOutRequestAmino;
    fromAminoMsg(object: EstimateSinglePoolSwapExactAmountOutRequestAminoMsg): EstimateSinglePoolSwapExactAmountOutRequest;
    toAminoMsg(message: EstimateSinglePoolSwapExactAmountOutRequest): EstimateSinglePoolSwapExactAmountOutRequestAminoMsg;
    fromProtoMsg(message: EstimateSinglePoolSwapExactAmountOutRequestProtoMsg): EstimateSinglePoolSwapExactAmountOutRequest;
    toProto(message: EstimateSinglePoolSwapExactAmountOutRequest): Uint8Array;
    toProtoMsg(message: EstimateSinglePoolSwapExactAmountOutRequest): EstimateSinglePoolSwapExactAmountOutRequestProtoMsg;
};
export declare const EstimateSwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EstimateSwapExactAmountOutResponse;
    fromPartial(object: Partial<EstimateSwapExactAmountOutResponse>): EstimateSwapExactAmountOutResponse;
    fromAmino(object: EstimateSwapExactAmountOutResponseAmino): EstimateSwapExactAmountOutResponse;
    toAmino(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAmino;
    fromAminoMsg(object: EstimateSwapExactAmountOutResponseAminoMsg): EstimateSwapExactAmountOutResponse;
    toAminoMsg(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountOutResponseProtoMsg): EstimateSwapExactAmountOutResponse;
    toProto(message: EstimateSwapExactAmountOutResponse): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseProtoMsg;
};
export declare const NumPoolsRequest: {
    typeUrl: string;
    encode(_: NumPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): NumPoolsRequest;
    fromPartial(_: Partial<NumPoolsRequest>): NumPoolsRequest;
    fromAmino(_: NumPoolsRequestAmino): NumPoolsRequest;
    toAmino(_: NumPoolsRequest): NumPoolsRequestAmino;
    fromAminoMsg(object: NumPoolsRequestAminoMsg): NumPoolsRequest;
    toAminoMsg(message: NumPoolsRequest): NumPoolsRequestAminoMsg;
    fromProtoMsg(message: NumPoolsRequestProtoMsg): NumPoolsRequest;
    toProto(message: NumPoolsRequest): Uint8Array;
    toProtoMsg(message: NumPoolsRequest): NumPoolsRequestProtoMsg;
};
export declare const NumPoolsResponse: {
    typeUrl: string;
    encode(message: NumPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NumPoolsResponse;
    fromPartial(object: Partial<NumPoolsResponse>): NumPoolsResponse;
    fromAmino(object: NumPoolsResponseAmino): NumPoolsResponse;
    toAmino(message: NumPoolsResponse): NumPoolsResponseAmino;
    fromAminoMsg(object: NumPoolsResponseAminoMsg): NumPoolsResponse;
    toAminoMsg(message: NumPoolsResponse): NumPoolsResponseAminoMsg;
    fromProtoMsg(message: NumPoolsResponseProtoMsg): NumPoolsResponse;
    toProto(message: NumPoolsResponse): Uint8Array;
    toProtoMsg(message: NumPoolsResponse): NumPoolsResponseProtoMsg;
};
export declare const PoolRequest: {
    typeUrl: string;
    encode(message: PoolRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolRequest;
    fromPartial(object: Partial<PoolRequest>): PoolRequest;
    fromAmino(object: PoolRequestAmino): PoolRequest;
    toAmino(message: PoolRequest): PoolRequestAmino;
    fromAminoMsg(object: PoolRequestAminoMsg): PoolRequest;
    toAminoMsg(message: PoolRequest): PoolRequestAminoMsg;
    fromProtoMsg(message: PoolRequestProtoMsg): PoolRequest;
    toProto(message: PoolRequest): Uint8Array;
    toProtoMsg(message: PoolRequest): PoolRequestProtoMsg;
};
export declare const PoolResponse: {
    typeUrl: string;
    encode(message: PoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolResponse;
    fromPartial(object: Partial<PoolResponse>): PoolResponse;
    fromAmino(object: PoolResponseAmino): PoolResponse;
    toAmino(message: PoolResponse): PoolResponseAmino;
    fromAminoMsg(object: PoolResponseAminoMsg): PoolResponse;
    toAminoMsg(message: PoolResponse): PoolResponseAminoMsg;
    fromProtoMsg(message: PoolResponseProtoMsg): PoolResponse;
    toProto(message: PoolResponse): Uint8Array;
    toProtoMsg(message: PoolResponse): PoolResponseProtoMsg;
};
export declare const AllPoolsRequest: {
    typeUrl: string;
    encode(_: AllPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): AllPoolsRequest;
    fromPartial(_: Partial<AllPoolsRequest>): AllPoolsRequest;
    fromAmino(_: AllPoolsRequestAmino): AllPoolsRequest;
    toAmino(_: AllPoolsRequest): AllPoolsRequestAmino;
    fromAminoMsg(object: AllPoolsRequestAminoMsg): AllPoolsRequest;
    toAminoMsg(message: AllPoolsRequest): AllPoolsRequestAminoMsg;
    fromProtoMsg(message: AllPoolsRequestProtoMsg): AllPoolsRequest;
    toProto(message: AllPoolsRequest): Uint8Array;
    toProtoMsg(message: AllPoolsRequest): AllPoolsRequestProtoMsg;
};
export declare const AllPoolsResponse: {
    typeUrl: string;
    encode(message: AllPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AllPoolsResponse;
    fromPartial(object: Partial<AllPoolsResponse>): AllPoolsResponse;
    fromAmino(object: AllPoolsResponseAmino): AllPoolsResponse;
    toAmino(message: AllPoolsResponse): AllPoolsResponseAmino;
    fromAminoMsg(object: AllPoolsResponseAminoMsg): AllPoolsResponse;
    toAminoMsg(message: AllPoolsResponse): AllPoolsResponseAminoMsg;
    fromProtoMsg(message: AllPoolsResponseProtoMsg): AllPoolsResponse;
    toProto(message: AllPoolsResponse): Uint8Array;
    toProtoMsg(message: AllPoolsResponse): AllPoolsResponseProtoMsg;
};
export declare const ListPoolsByDenomRequest: {
    typeUrl: string;
    encode(message: ListPoolsByDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ListPoolsByDenomRequest;
    fromPartial(object: Partial<ListPoolsByDenomRequest>): ListPoolsByDenomRequest;
    fromAmino(object: ListPoolsByDenomRequestAmino): ListPoolsByDenomRequest;
    toAmino(message: ListPoolsByDenomRequest): ListPoolsByDenomRequestAmino;
    fromAminoMsg(object: ListPoolsByDenomRequestAminoMsg): ListPoolsByDenomRequest;
    toAminoMsg(message: ListPoolsByDenomRequest): ListPoolsByDenomRequestAminoMsg;
    fromProtoMsg(message: ListPoolsByDenomRequestProtoMsg): ListPoolsByDenomRequest;
    toProto(message: ListPoolsByDenomRequest): Uint8Array;
    toProtoMsg(message: ListPoolsByDenomRequest): ListPoolsByDenomRequestProtoMsg;
};
export declare const ListPoolsByDenomResponse: {
    typeUrl: string;
    encode(message: ListPoolsByDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ListPoolsByDenomResponse;
    fromPartial(object: Partial<ListPoolsByDenomResponse>): ListPoolsByDenomResponse;
    fromAmino(object: ListPoolsByDenomResponseAmino): ListPoolsByDenomResponse;
    toAmino(message: ListPoolsByDenomResponse): ListPoolsByDenomResponseAmino;
    fromAminoMsg(object: ListPoolsByDenomResponseAminoMsg): ListPoolsByDenomResponse;
    toAminoMsg(message: ListPoolsByDenomResponse): ListPoolsByDenomResponseAminoMsg;
    fromProtoMsg(message: ListPoolsByDenomResponseProtoMsg): ListPoolsByDenomResponse;
    toProto(message: ListPoolsByDenomResponse): Uint8Array;
    toProtoMsg(message: ListPoolsByDenomResponse): ListPoolsByDenomResponseProtoMsg;
};
export declare const SpotPriceRequest: {
    typeUrl: string;
    encode(message: SpotPriceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SpotPriceRequest;
    fromPartial(object: Partial<SpotPriceRequest>): SpotPriceRequest;
    fromAmino(object: SpotPriceRequestAmino): SpotPriceRequest;
    toAmino(message: SpotPriceRequest): SpotPriceRequestAmino;
    fromAminoMsg(object: SpotPriceRequestAminoMsg): SpotPriceRequest;
    toAminoMsg(message: SpotPriceRequest): SpotPriceRequestAminoMsg;
    fromProtoMsg(message: SpotPriceRequestProtoMsg): SpotPriceRequest;
    toProto(message: SpotPriceRequest): Uint8Array;
    toProtoMsg(message: SpotPriceRequest): SpotPriceRequestProtoMsg;
};
export declare const SpotPriceResponse: {
    typeUrl: string;
    encode(message: SpotPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SpotPriceResponse;
    fromPartial(object: Partial<SpotPriceResponse>): SpotPriceResponse;
    fromAmino(object: SpotPriceResponseAmino): SpotPriceResponse;
    toAmino(message: SpotPriceResponse): SpotPriceResponseAmino;
    fromAminoMsg(object: SpotPriceResponseAminoMsg): SpotPriceResponse;
    toAminoMsg(message: SpotPriceResponse): SpotPriceResponseAminoMsg;
    fromProtoMsg(message: SpotPriceResponseProtoMsg): SpotPriceResponse;
    toProto(message: SpotPriceResponse): Uint8Array;
    toProtoMsg(message: SpotPriceResponse): SpotPriceResponseProtoMsg;
};
export declare const TotalPoolLiquidityRequest: {
    typeUrl: string;
    encode(message: TotalPoolLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TotalPoolLiquidityRequest;
    fromPartial(object: Partial<TotalPoolLiquidityRequest>): TotalPoolLiquidityRequest;
    fromAmino(object: TotalPoolLiquidityRequestAmino): TotalPoolLiquidityRequest;
    toAmino(message: TotalPoolLiquidityRequest): TotalPoolLiquidityRequestAmino;
    fromAminoMsg(object: TotalPoolLiquidityRequestAminoMsg): TotalPoolLiquidityRequest;
    toAminoMsg(message: TotalPoolLiquidityRequest): TotalPoolLiquidityRequestAminoMsg;
    fromProtoMsg(message: TotalPoolLiquidityRequestProtoMsg): TotalPoolLiquidityRequest;
    toProto(message: TotalPoolLiquidityRequest): Uint8Array;
    toProtoMsg(message: TotalPoolLiquidityRequest): TotalPoolLiquidityRequestProtoMsg;
};
export declare const TotalPoolLiquidityResponse: {
    typeUrl: string;
    encode(message: TotalPoolLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TotalPoolLiquidityResponse;
    fromPartial(object: Partial<TotalPoolLiquidityResponse>): TotalPoolLiquidityResponse;
    fromAmino(object: TotalPoolLiquidityResponseAmino): TotalPoolLiquidityResponse;
    toAmino(message: TotalPoolLiquidityResponse): TotalPoolLiquidityResponseAmino;
    fromAminoMsg(object: TotalPoolLiquidityResponseAminoMsg): TotalPoolLiquidityResponse;
    toAminoMsg(message: TotalPoolLiquidityResponse): TotalPoolLiquidityResponseAminoMsg;
    fromProtoMsg(message: TotalPoolLiquidityResponseProtoMsg): TotalPoolLiquidityResponse;
    toProto(message: TotalPoolLiquidityResponse): Uint8Array;
    toProtoMsg(message: TotalPoolLiquidityResponse): TotalPoolLiquidityResponseProtoMsg;
};
export declare const TotalLiquidityRequest: {
    typeUrl: string;
    encode(_: TotalLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): TotalLiquidityRequest;
    fromPartial(_: Partial<TotalLiquidityRequest>): TotalLiquidityRequest;
    fromAmino(_: TotalLiquidityRequestAmino): TotalLiquidityRequest;
    toAmino(_: TotalLiquidityRequest): TotalLiquidityRequestAmino;
    fromAminoMsg(object: TotalLiquidityRequestAminoMsg): TotalLiquidityRequest;
    toAminoMsg(message: TotalLiquidityRequest): TotalLiquidityRequestAminoMsg;
    fromProtoMsg(message: TotalLiquidityRequestProtoMsg): TotalLiquidityRequest;
    toProto(message: TotalLiquidityRequest): Uint8Array;
    toProtoMsg(message: TotalLiquidityRequest): TotalLiquidityRequestProtoMsg;
};
export declare const TotalLiquidityResponse: {
    typeUrl: string;
    encode(message: TotalLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TotalLiquidityResponse;
    fromPartial(object: Partial<TotalLiquidityResponse>): TotalLiquidityResponse;
    fromAmino(object: TotalLiquidityResponseAmino): TotalLiquidityResponse;
    toAmino(message: TotalLiquidityResponse): TotalLiquidityResponseAmino;
    fromAminoMsg(object: TotalLiquidityResponseAminoMsg): TotalLiquidityResponse;
    toAminoMsg(message: TotalLiquidityResponse): TotalLiquidityResponseAminoMsg;
    fromProtoMsg(message: TotalLiquidityResponseProtoMsg): TotalLiquidityResponse;
    toProto(message: TotalLiquidityResponse): Uint8Array;
    toProtoMsg(message: TotalLiquidityResponse): TotalLiquidityResponseProtoMsg;
};
export declare const TotalVolumeForPoolRequest: {
    typeUrl: string;
    encode(message: TotalVolumeForPoolRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TotalVolumeForPoolRequest;
    fromPartial(object: Partial<TotalVolumeForPoolRequest>): TotalVolumeForPoolRequest;
    fromAmino(object: TotalVolumeForPoolRequestAmino): TotalVolumeForPoolRequest;
    toAmino(message: TotalVolumeForPoolRequest): TotalVolumeForPoolRequestAmino;
    fromAminoMsg(object: TotalVolumeForPoolRequestAminoMsg): TotalVolumeForPoolRequest;
    toAminoMsg(message: TotalVolumeForPoolRequest): TotalVolumeForPoolRequestAminoMsg;
    fromProtoMsg(message: TotalVolumeForPoolRequestProtoMsg): TotalVolumeForPoolRequest;
    toProto(message: TotalVolumeForPoolRequest): Uint8Array;
    toProtoMsg(message: TotalVolumeForPoolRequest): TotalVolumeForPoolRequestProtoMsg;
};
export declare const TotalVolumeForPoolResponse: {
    typeUrl: string;
    encode(message: TotalVolumeForPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TotalVolumeForPoolResponse;
    fromPartial(object: Partial<TotalVolumeForPoolResponse>): TotalVolumeForPoolResponse;
    fromAmino(object: TotalVolumeForPoolResponseAmino): TotalVolumeForPoolResponse;
    toAmino(message: TotalVolumeForPoolResponse): TotalVolumeForPoolResponseAmino;
    fromAminoMsg(object: TotalVolumeForPoolResponseAminoMsg): TotalVolumeForPoolResponse;
    toAminoMsg(message: TotalVolumeForPoolResponse): TotalVolumeForPoolResponseAminoMsg;
    fromProtoMsg(message: TotalVolumeForPoolResponseProtoMsg): TotalVolumeForPoolResponse;
    toProto(message: TotalVolumeForPoolResponse): Uint8Array;
    toProtoMsg(message: TotalVolumeForPoolResponse): TotalVolumeForPoolResponseProtoMsg;
};
export declare const TradingPairTakerFeeRequest: {
    typeUrl: string;
    encode(message: TradingPairTakerFeeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradingPairTakerFeeRequest;
    fromPartial(object: Partial<TradingPairTakerFeeRequest>): TradingPairTakerFeeRequest;
    fromAmino(object: TradingPairTakerFeeRequestAmino): TradingPairTakerFeeRequest;
    toAmino(message: TradingPairTakerFeeRequest): TradingPairTakerFeeRequestAmino;
    fromAminoMsg(object: TradingPairTakerFeeRequestAminoMsg): TradingPairTakerFeeRequest;
    toAminoMsg(message: TradingPairTakerFeeRequest): TradingPairTakerFeeRequestAminoMsg;
    fromProtoMsg(message: TradingPairTakerFeeRequestProtoMsg): TradingPairTakerFeeRequest;
    toProto(message: TradingPairTakerFeeRequest): Uint8Array;
    toProtoMsg(message: TradingPairTakerFeeRequest): TradingPairTakerFeeRequestProtoMsg;
};
export declare const TradingPairTakerFeeResponse: {
    typeUrl: string;
    encode(message: TradingPairTakerFeeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradingPairTakerFeeResponse;
    fromPartial(object: Partial<TradingPairTakerFeeResponse>): TradingPairTakerFeeResponse;
    fromAmino(object: TradingPairTakerFeeResponseAmino): TradingPairTakerFeeResponse;
    toAmino(message: TradingPairTakerFeeResponse): TradingPairTakerFeeResponseAmino;
    fromAminoMsg(object: TradingPairTakerFeeResponseAminoMsg): TradingPairTakerFeeResponse;
    toAminoMsg(message: TradingPairTakerFeeResponse): TradingPairTakerFeeResponseAminoMsg;
    fromProtoMsg(message: TradingPairTakerFeeResponseProtoMsg): TradingPairTakerFeeResponse;
    toProto(message: TradingPairTakerFeeResponse): Uint8Array;
    toProtoMsg(message: TradingPairTakerFeeResponse): TradingPairTakerFeeResponseProtoMsg;
};
export declare const EstimateTradeBasedOnPriceImpactRequest: {
    typeUrl: string;
    encode(message: EstimateTradeBasedOnPriceImpactRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EstimateTradeBasedOnPriceImpactRequest;
    fromPartial(object: Partial<EstimateTradeBasedOnPriceImpactRequest>): EstimateTradeBasedOnPriceImpactRequest;
    fromAmino(object: EstimateTradeBasedOnPriceImpactRequestAmino): EstimateTradeBasedOnPriceImpactRequest;
    toAmino(message: EstimateTradeBasedOnPriceImpactRequest): EstimateTradeBasedOnPriceImpactRequestAmino;
    fromAminoMsg(object: EstimateTradeBasedOnPriceImpactRequestAminoMsg): EstimateTradeBasedOnPriceImpactRequest;
    toAminoMsg(message: EstimateTradeBasedOnPriceImpactRequest): EstimateTradeBasedOnPriceImpactRequestAminoMsg;
    fromProtoMsg(message: EstimateTradeBasedOnPriceImpactRequestProtoMsg): EstimateTradeBasedOnPriceImpactRequest;
    toProto(message: EstimateTradeBasedOnPriceImpactRequest): Uint8Array;
    toProtoMsg(message: EstimateTradeBasedOnPriceImpactRequest): EstimateTradeBasedOnPriceImpactRequestProtoMsg;
};
export declare const EstimateTradeBasedOnPriceImpactResponse: {
    typeUrl: string;
    encode(message: EstimateTradeBasedOnPriceImpactResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EstimateTradeBasedOnPriceImpactResponse;
    fromPartial(object: Partial<EstimateTradeBasedOnPriceImpactResponse>): EstimateTradeBasedOnPriceImpactResponse;
    fromAmino(object: EstimateTradeBasedOnPriceImpactResponseAmino): EstimateTradeBasedOnPriceImpactResponse;
    toAmino(message: EstimateTradeBasedOnPriceImpactResponse): EstimateTradeBasedOnPriceImpactResponseAmino;
    fromAminoMsg(object: EstimateTradeBasedOnPriceImpactResponseAminoMsg): EstimateTradeBasedOnPriceImpactResponse;
    toAminoMsg(message: EstimateTradeBasedOnPriceImpactResponse): EstimateTradeBasedOnPriceImpactResponseAminoMsg;
    fromProtoMsg(message: EstimateTradeBasedOnPriceImpactResponseProtoMsg): EstimateTradeBasedOnPriceImpactResponse;
    toProto(message: EstimateTradeBasedOnPriceImpactResponse): Uint8Array;
    toProtoMsg(message: EstimateTradeBasedOnPriceImpactResponse): EstimateTradeBasedOnPriceImpactResponseProtoMsg;
};
export declare const PoolI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Pool1 | CosmWasmPool | Pool2 | Pool3 | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino;
