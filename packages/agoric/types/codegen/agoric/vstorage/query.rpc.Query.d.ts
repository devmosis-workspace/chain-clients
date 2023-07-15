import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryDataRequest, QueryDataResponse, QueryChildrenRequest, QueryChildrenResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /** Return an arbitrary vstorage datum. */
    data(request: QueryDataRequest): Promise<QueryDataResponse>;
    /** Return the children of a given vstorage path. */
    children(request: QueryChildrenRequest): Promise<QueryChildrenResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    data(request: QueryDataRequest): Promise<QueryDataResponse>;
    children(request: QueryChildrenRequest): Promise<QueryChildrenResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    data(request: QueryDataRequest): Promise<QueryDataResponse>;
    children(request: QueryChildrenRequest): Promise<QueryChildrenResponse>;
};
