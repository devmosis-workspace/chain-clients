import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySupersRequest, QuerySupersResponse } from "./query";
/** Query creates service with guardian as RPC */
export interface Query {
    /** Supers returns all Supers */
    supers(request?: QuerySupersRequest): Promise<QuerySupersResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    supers(request?: QuerySupersRequest): Promise<QuerySupersResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    supers(request?: QuerySupersRequest): Promise<QuerySupersResponse>;
};
