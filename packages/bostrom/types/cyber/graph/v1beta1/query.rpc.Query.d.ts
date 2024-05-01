import { Rpc } from "../../../helpers";
import { QueryGraphStatsRequest, QueryGraphStatsResponse } from "./query";
export interface Query {
    graphStats(request?: QueryGraphStatsRequest): Promise<QueryGraphStatsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    graphStats(request?: QueryGraphStatsRequest): Promise<QueryGraphStatsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    graphStats(request?: QueryGraphStatsRequest): Promise<QueryGraphStatsResponse>;
};
