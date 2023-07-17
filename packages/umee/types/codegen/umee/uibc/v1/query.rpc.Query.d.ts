import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParams, QueryParamsResponse, QueryOutflows, QueryOutflowsResponse, QueryAllOutflows, QueryAllOutflowsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of the x/uibc module. */
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    /**
     * Outflow returns IBC denom outflows in the current quota period.
     * If denom is not specified, returns sum of all registered outflows.
     */
    outflows(request: QueryOutflows): Promise<QueryOutflowsResponse>;
    /** AllOutflow returns outflows for each denom in the current quota period. */
    allOutflows(request?: QueryAllOutflows): Promise<QueryAllOutflowsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    outflows(request: QueryOutflows): Promise<QueryOutflowsResponse>;
    allOutflows(request?: QueryAllOutflows): Promise<QueryAllOutflowsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    outflows(request: QueryOutflows): Promise<QueryOutflowsResponse>;
    allOutflows(request?: QueryAllOutflows): Promise<QueryAllOutflowsResponse>;
};
