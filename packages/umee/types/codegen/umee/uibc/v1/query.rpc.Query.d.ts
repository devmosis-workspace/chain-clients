import { Rpc } from "../../../helpers";
import { QueryParams, QueryParamsResponse, QueryOutflows, QueryOutflowsResponse, QueryAllOutflows, QueryAllOutflowsResponse, QueryInflows, QueryInflowsResponse, QueryQuotaExpires, QueryQuotaExpiresResponse } from "./query";
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
    /**
     * Inflows returns registered IBC denoms inflows in the current quota period.
     * If denom is not specified, returns sum of all registered inflows.
     */
    inflows(request: QueryInflows): Promise<QueryInflowsResponse>;
    /** QuotaExpires returns when current ibc quota will end. */
    quotaExpires(request?: QueryQuotaExpires): Promise<QueryQuotaExpiresResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    outflows(request: QueryOutflows): Promise<QueryOutflowsResponse>;
    allOutflows(request?: QueryAllOutflows): Promise<QueryAllOutflowsResponse>;
    inflows(request: QueryInflows): Promise<QueryInflowsResponse>;
    quotaExpires(request?: QueryQuotaExpires): Promise<QueryQuotaExpiresResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    outflows(request: QueryOutflows): Promise<QueryOutflowsResponse>;
    allOutflows(request?: QueryAllOutflows): Promise<QueryAllOutflowsResponse>;
    inflows(request: QueryInflows): Promise<QueryInflowsResponse>;
    quotaExpires(request?: QueryQuotaExpires): Promise<QueryQuotaExpiresResponse>;
};
