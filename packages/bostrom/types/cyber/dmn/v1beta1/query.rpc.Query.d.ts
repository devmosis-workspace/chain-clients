import { Rpc } from "../../../helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryThoughtParamsRequest, QueryThoughtResponse, QueryThoughtStatsResponse, QueryThoughtsRequest, QueryThoughtsResponse, QueryThoughtsStatsRequest, QueryThoughtsStatsResponse } from "./query";
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    thought(request: QueryThoughtParamsRequest): Promise<QueryThoughtResponse>;
    thoughtStats(request: QueryThoughtParamsRequest): Promise<QueryThoughtStatsResponse>;
    thoughts(request?: QueryThoughtsRequest): Promise<QueryThoughtsResponse>;
    thoughtsStats(request?: QueryThoughtsStatsRequest): Promise<QueryThoughtsStatsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    thought(request: QueryThoughtParamsRequest): Promise<QueryThoughtResponse>;
    thoughtStats(request: QueryThoughtParamsRequest): Promise<QueryThoughtStatsResponse>;
    thoughts(request?: QueryThoughtsRequest): Promise<QueryThoughtsResponse>;
    thoughtsStats(request?: QueryThoughtsStatsRequest): Promise<QueryThoughtsStatsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    thought(request: QueryThoughtParamsRequest): Promise<QueryThoughtResponse>;
    thoughtStats(request: QueryThoughtParamsRequest): Promise<QueryThoughtStatsResponse>;
    thoughts(request?: QueryThoughtsRequest): Promise<QueryThoughtsResponse>;
    thoughtsStats(request?: QueryThoughtsStatsRequest): Promise<QueryThoughtsStatsResponse>;
};
