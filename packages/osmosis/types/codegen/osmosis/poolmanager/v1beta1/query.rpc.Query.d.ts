import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountInWithPrimitiveTypesRequest, EstimateSinglePoolSwapExactAmountInRequest, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, EstimateSwapExactAmountOutWithPrimitiveTypesRequest, EstimateSinglePoolSwapExactAmountOutRequest, NumPoolsRequest, NumPoolsResponse, PoolRequest, PoolResponse, AllPoolsRequest, AllPoolsResponse, SpotPriceRequest, SpotPriceResponse, TotalPoolLiquidityRequest, TotalPoolLiquidityResponse, TotalLiquidityRequest, TotalLiquidityResponse } from "./query";
export interface Query {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    /** Estimates swap amount out given in. */
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    /**
     * EstimateSwapExactAmountInWithPrimitiveTypes is an alternative query for
     * EstimateSwapExactAmountIn. Supports query via GRPC-Gateway by using
     * primitive types instead of repeated structs. Each index in the
     * routes_pool_id field corresponds to the respective routes_token_out_denom
     * value, thus they are required to have the same length and are grouped
     * together as pairs.
     * example usage:
     * http://0.0.0.0:1317/osmosis/poolmanager/v1beta1/1/estimate/
     * swap_exact_amount_in_with_primitive_types?token_in=100000stake&routes_token_out_denom=uatom
     * &routes_token_out_denom=uion&routes_pool_id=1&routes_pool_id=2
     */
    estimateSwapExactAmountInWithPrimitiveTypes(request: EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    /** Estimates swap amount in given out. */
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    /** Estimates swap amount in given out. */
    estimateSwapExactAmountOutWithPrimitiveTypes(request: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountOutResponse>;
    estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    /** Returns the total number of pools existing in Osmosis. */
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
    /** Pool returns the Pool specified by the pool id */
    pool(request: PoolRequest): Promise<PoolResponse>;
    /** AllPools returns all pools on the Osmosis chain sorted by IDs. */
    allPools(request?: AllPoolsRequest): Promise<AllPoolsResponse>;
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse>;
    /** TotalPoolLiquidity returns the total liquidity of the specified pool. */
    totalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse>;
    /** TotalLiquidity returns the total liquidity across all pools. */
    totalLiquidity(request?: TotalLiquidityRequest): Promise<TotalLiquidityResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSwapExactAmountInWithPrimitiveTypes(request: EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    estimateSwapExactAmountOutWithPrimitiveTypes(request: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountOutResponse>;
    estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
    pool(request: PoolRequest): Promise<PoolResponse>;
    allPools(request?: AllPoolsRequest): Promise<AllPoolsResponse>;
    spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse>;
    totalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse>;
    totalLiquidity(request?: TotalLiquidityRequest): Promise<TotalLiquidityResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSwapExactAmountInWithPrimitiveTypes(request: EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    estimateSwapExactAmountOutWithPrimitiveTypes(request: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountOutResponse>;
    estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
    pool(request: PoolRequest): Promise<PoolResponse>;
    allPools(request?: AllPoolsRequest): Promise<AllPoolsResponse>;
    spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse>;
    totalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse>;
    totalLiquidity(request?: TotalLiquidityRequest): Promise<TotalLiquidityResponse>;
};
