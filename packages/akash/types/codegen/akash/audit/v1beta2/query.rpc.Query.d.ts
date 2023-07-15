import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAllProvidersAttributesRequest, QueryProvidersResponse, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /**
     * AllProvidersAttributes queries all providers
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    allProvidersAttributes(request?: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;
    /**
     * ProviderAttributes queries all provider signed attributes
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    providerAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;
    /**
     * ProviderAuditorAttributes queries provider signed attributes by specific auditor
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    providerAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;
    /**
     * AuditorAttributes queries all providers signed by this auditor
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    auditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    allProvidersAttributes(request?: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;
    providerAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;
    providerAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;
    auditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    allProvidersAttributes(request?: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;
    providerAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;
    providerAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;
    auditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
};
