import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryStateRequest, QueryStateResponse, QueryChainParamsRequest, QueryChainParamsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryPoolsRequest, QueryPoolsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries the state of oracle requests. */
    state(request?: QueryStateRequest): Promise<QueryStateResponse>;
    /** Queries latest fetched params from osmosis chain. */
    chainParams(request?: QueryChainParamsRequest): Promise<QueryChainParamsResponse>;
    /** Queries latest fetched list of incentivized pools from osmosis. */
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    /** Queries latest fetched list of pool details from osmosis. */
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    state(request?: QueryStateRequest): Promise<QueryStateResponse>;
    chainParams(request?: QueryChainParamsRequest): Promise<QueryChainParamsResponse>;
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    state(request?: QueryStateRequest): Promise<QueryStateResponse>;
    chainParams(request?: QueryChainParamsRequest): Promise<QueryChainParamsResponse>;
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
};
