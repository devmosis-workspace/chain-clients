import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryConfigRequest, QueryConfigResponse, QueryFeesRequest, QueryFeesResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Config gets starname configuration. */
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
    /** Fees gets starname product fees. */
    fees(request?: QueryFeesRequest): Promise<QueryFeesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
    fees(request?: QueryFeesRequest): Promise<QueryFeesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
    fees(request?: QueryFeesRequest): Promise<QueryFeesResponse>;
};
