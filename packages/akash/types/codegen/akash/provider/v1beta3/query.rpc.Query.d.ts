import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /** Providers queries providers */
    providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponse>;
    /** Provider queries provider details */
    provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponse>;
    provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponse>;
    provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
};
