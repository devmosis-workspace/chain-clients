import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
/** Query defines the gRPC querier service for the safety fund module */
export interface Query {
    /** Balances queries coins available in the safety fund */
    balances(request?: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balances(request?: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    balances(request?: QueryBalancesRequest): Promise<QueryBalancesResponse>;
};
