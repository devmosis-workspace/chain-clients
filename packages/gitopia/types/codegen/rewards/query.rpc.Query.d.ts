import { Rpc } from "../helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryTasksRequest, QueryTasksResponse, QueryGetRewardRequest, QueryGetRewardResponse, QueryAllRewardsRequest, QueryAllRewardsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of rewards parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of tasks items. */
    tasks(request: QueryTasksRequest): Promise<QueryTasksResponse>;
    /** Queries a Rewards by index. */
    reward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse>;
    /** Queries a list of Rewards items. */
    rewardsAll(request?: QueryAllRewardsRequest): Promise<QueryAllRewardsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    tasks(request: QueryTasksRequest): Promise<QueryTasksResponse>;
    reward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse>;
    rewardsAll(request?: QueryAllRewardsRequest): Promise<QueryAllRewardsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    tasks(request: QueryTasksRequest): Promise<QueryTasksResponse>;
    reward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse>;
    rewardsAll(request?: QueryAllRewardsRequest): Promise<QueryAllRewardsResponse>;
};
