import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryFailuresRequest, QueryFailuresResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Failure by contract address and failure ID. */
    addressFailure(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    /** Queries Failures by contract address. */
    addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    /** Queries a list of Failures occurred on the network. */
    failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    addressFailure(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    addressFailure(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
};
