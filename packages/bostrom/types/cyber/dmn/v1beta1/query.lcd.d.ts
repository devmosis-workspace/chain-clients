import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryThoughtParamsRequest, QueryThoughtResponseSDKType, QueryThoughtStatsResponseSDKType, QueryThoughtsRequest, QueryThoughtsResponseSDKType, QueryThoughtsStatsRequest, QueryThoughtsStatsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    thought(params: QueryThoughtParamsRequest): Promise<QueryThoughtResponseSDKType>;
    thoughtStats(params: QueryThoughtParamsRequest): Promise<QueryThoughtStatsResponseSDKType>;
    thoughts(_params?: QueryThoughtsRequest): Promise<QueryThoughtsResponseSDKType>;
    thoughtsStats(_params?: QueryThoughtsStatsRequest): Promise<QueryThoughtsStatsResponseSDKType>;
}
