import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryStateRequest, QueryStateResponseSDKType, QueryChainParamsRequest, QueryChainParamsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    state(_params?: QueryStateRequest): Promise<QueryStateResponseSDKType>;
    chainParams(_params?: QueryChainParamsRequest): Promise<QueryChainParamsResponseSDKType>;
    incentivizedPools(_params?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponseSDKType>;
    pools(params?: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
}
