import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRewardsRequest, QueryRewardsResponse, QueryRewardFactorsRequest, QueryRewardFactorsResponse, QueryApyRequest, QueryApyResponse } from "./query";
/** Query defines the gRPC querier service for incentive module. */
export interface Query {
    /** Params queries module params. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Rewards queries reward information for a given user. */
    rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse>;
    /** Rewards queries the reward factors. */
    rewardFactors(request?: QueryRewardFactorsRequest): Promise<QueryRewardFactorsResponse>;
    /** Apy queries incentive reward apy for a reward. */
    apy(request?: QueryApyRequest): Promise<QueryApyResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse>;
    rewardFactors(request?: QueryRewardFactorsRequest): Promise<QueryRewardFactorsResponse>;
    apy(request?: QueryApyRequest): Promise<QueryApyResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse>;
    rewardFactors(request?: QueryRewardFactorsRequest): Promise<QueryRewardFactorsResponse>;
    apy(request?: QueryApyRequest): Promise<QueryApyResponse>;
};
