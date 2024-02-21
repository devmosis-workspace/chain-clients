import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetLimitOrderTrancheUserRequest, QueryGetLimitOrderTrancheUserResponseSDKType, QueryAllLimitOrderTrancheUserRequest, QueryAllLimitOrderTrancheUserResponseSDKType, QueryAllUserLimitOrdersRequest, QueryAllUserLimitOrdersResponseSDKType, QueryGetLimitOrderTrancheRequest, QueryGetLimitOrderTrancheResponseSDKType, QueryAllLimitOrderTrancheRequest, QueryAllLimitOrderTrancheResponseSDKType, QueryAllUserDepositsRequest, QueryAllUserDepositsResponseSDKType, QueryAllTickLiquidityRequest, QueryAllTickLiquidityResponseSDKType, QueryGetInactiveLimitOrderTrancheRequest, QueryGetInactiveLimitOrderTrancheResponseSDKType, QueryAllInactiveLimitOrderTrancheRequest, QueryAllInactiveLimitOrderTrancheResponseSDKType, QueryAllPoolReservesRequest, QueryAllPoolReservesResponseSDKType, QueryGetPoolReservesRequest, QueryGetPoolReservesResponseSDKType, QueryEstimateMultiHopSwapRequest, QueryEstimateMultiHopSwapResponseSDKType, QueryEstimatePlaceLimitOrderRequest, QueryEstimatePlaceLimitOrderResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolByIDRequest, QueryGetPoolMetadataRequest, QueryGetPoolMetadataResponseSDKType, QueryAllPoolMetadataRequest, QueryAllPoolMetadataResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    limitOrderTrancheUser(params: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponseSDKType>;
    limitOrderTrancheUserAll(params?: QueryAllLimitOrderTrancheUserRequest): Promise<QueryAllLimitOrderTrancheUserResponseSDKType>;
    limitOrderTrancheUserAllByAddress(params: QueryAllUserLimitOrdersRequest): Promise<QueryAllUserLimitOrdersResponseSDKType>;
    limitOrderTranche(params: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponseSDKType>;
    limitOrderTrancheAll(params: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponseSDKType>;
    userDepositsAll(params: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponseSDKType>;
    tickLiquidityAll(params: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponseSDKType>;
    inactiveLimitOrderTranche(params: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponseSDKType>;
    inactiveLimitOrderTrancheAll(params?: QueryAllInactiveLimitOrderTrancheRequest): Promise<QueryAllInactiveLimitOrderTrancheResponseSDKType>;
    poolReservesAll(params: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponseSDKType>;
    poolReserves(params: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponseSDKType>;
    estimateMultiHopSwap(params: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponseSDKType>;
    estimatePlaceLimitOrder(params: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponseSDKType>;
    pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    poolByID(params: QueryPoolByIDRequest): Promise<QueryPoolResponseSDKType>;
    poolMetadata(params: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponseSDKType>;
    poolMetadataAll(params?: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponseSDKType>;
}
