import { LCDClient } from "@osmonauts/lcd";
import { ParamsRequest, ParamsResponseSDKType, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponseSDKType, EstimateSinglePoolSwapExactAmountInRequest, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponseSDKType, EstimateSinglePoolSwapExactAmountOutRequest, NumPoolsRequest, NumPoolsResponseSDKType, PoolRequest, PoolResponseSDKType, AllPoolsRequest, AllPoolsResponseSDKType, SpotPriceRequest, SpotPriceResponseSDKType, TotalPoolLiquidityRequest, TotalPoolLiquidityResponseSDKType, TotalLiquidityRequest, TotalLiquidityResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: ParamsRequest): Promise<ParamsResponseSDKType>;
    estimateSwapExactAmountIn(params: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponseSDKType>;
    estimateSinglePoolSwapExactAmountIn(params: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponseSDKType>;
    estimateSwapExactAmountOut(params: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponseSDKType>;
    estimateSinglePoolSwapExactAmountOut(params: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponseSDKType>;
    numPools(_params?: NumPoolsRequest): Promise<NumPoolsResponseSDKType>;
    pool(params: PoolRequest): Promise<PoolResponseSDKType>;
    allPools(_params?: AllPoolsRequest): Promise<AllPoolsResponseSDKType>;
    spotPrice(params: SpotPriceRequest): Promise<SpotPriceResponseSDKType>;
    totalPoolLiquidity(params: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponseSDKType>;
    totalLiquidity(_params?: TotalLiquidityRequest): Promise<TotalLiquidityResponseSDKType>;
}
