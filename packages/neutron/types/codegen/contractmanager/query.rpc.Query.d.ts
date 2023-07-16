import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryFailuresRequest, QueryFailuresResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Failure by address. */
    addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    /** Queries a list of Failure items. */
    failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
};
