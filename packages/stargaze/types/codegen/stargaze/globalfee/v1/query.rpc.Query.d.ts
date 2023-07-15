import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryCodeAuthorizationRequest, QueryCodeAuthorizationResponse, QueryContractAuthorizationRequest, QueryContractAuthorizationResponse, QueryParamsRequest, QueryParamsResponse, QueryAuthorizationsRequest, QueryAuthorizationsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    codeAuthorization(request: QueryCodeAuthorizationRequest): Promise<QueryCodeAuthorizationResponse>;
    contractAuthorization(request: QueryContractAuthorizationRequest): Promise<QueryContractAuthorizationResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    authorizations(request?: QueryAuthorizationsRequest): Promise<QueryAuthorizationsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    codeAuthorization(request: QueryCodeAuthorizationRequest): Promise<QueryCodeAuthorizationResponse>;
    contractAuthorization(request: QueryContractAuthorizationRequest): Promise<QueryContractAuthorizationResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    authorizations(request?: QueryAuthorizationsRequest): Promise<QueryAuthorizationsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    codeAuthorization(request: QueryCodeAuthorizationRequest): Promise<QueryCodeAuthorizationResponse>;
    contractAuthorization(request: QueryContractAuthorizationRequest): Promise<QueryContractAuthorizationResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    authorizations(request?: QueryAuthorizationsRequest): Promise<QueryAuthorizationsResponse>;
};
