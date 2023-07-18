import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryRewardsRequest, QueryRewardsResponseSDKType, QueryRewardFactorsRequest, QueryRewardFactorsResponseSDKType, QueryApyRequest, QueryApyResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    rewards(params: QueryRewardsRequest): Promise<QueryRewardsResponseSDKType>;
    rewardFactors(_params?: QueryRewardFactorsRequest): Promise<QueryRewardFactorsResponseSDKType>;
    apy(_params?: QueryApyRequest): Promise<QueryApyResponseSDKType>;
}
