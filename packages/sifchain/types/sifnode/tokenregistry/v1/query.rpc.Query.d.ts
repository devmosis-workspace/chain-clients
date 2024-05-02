import { Rpc } from "../../../helpers";
import { QueryEntriesRequest, QueryEntriesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    entries(request?: QueryEntriesRequest): Promise<QueryEntriesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    entries(request?: QueryEntriesRequest): Promise<QueryEntriesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    entries(request?: QueryEntriesRequest): Promise<QueryEntriesResponse>;
};
