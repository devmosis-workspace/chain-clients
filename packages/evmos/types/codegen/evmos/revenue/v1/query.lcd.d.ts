import { LCDClient } from "@cosmology/lcd";
import { QueryRevenuesRequest, QueryRevenuesResponseSDKType, QueryRevenueRequest, QueryRevenueResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDeployerRevenuesRequest, QueryDeployerRevenuesResponseSDKType, QueryWithdrawerRevenuesRequest, QueryWithdrawerRevenuesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    revenues(params?: QueryRevenuesRequest): Promise<QueryRevenuesResponseSDKType>;
    revenue(params: QueryRevenueRequest): Promise<QueryRevenueResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    deployerRevenues(params: QueryDeployerRevenuesRequest): Promise<QueryDeployerRevenuesResponseSDKType>;
    withdrawerRevenues(params: QueryWithdrawerRevenuesRequest): Promise<QueryWithdrawerRevenuesResponseSDKType>;
}
