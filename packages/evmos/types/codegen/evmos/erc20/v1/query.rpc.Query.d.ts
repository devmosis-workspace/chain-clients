import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** TokenPairs retrieves registered token pairs */
    tokenPairs(request?: QueryTokenPairsRequest): Promise<QueryTokenPairsResponse>;
    /** TokenPair retrieves a registered token pair */
    tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse>;
    /** Params retrieves the erc20 module params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    tokenPairs(request?: QueryTokenPairsRequest): Promise<QueryTokenPairsResponse>;
    tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    tokenPairs(request?: QueryTokenPairsRequest): Promise<QueryTokenPairsResponse>;
    tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
