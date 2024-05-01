import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryTasksRequest, QueryTasksResponseSDKType, QueryGetRewardRequest, QueryGetRewardResponseSDKType, QueryAllRewardsRequest, QueryAllRewardsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    tasks(params: QueryTasksRequest): Promise<QueryTasksResponseSDKType>;
    reward(params: QueryGetRewardRequest): Promise<QueryGetRewardResponseSDKType>;
    rewardsAll(params?: QueryAllRewardsRequest): Promise<QueryAllRewardsResponseSDKType>;
}
