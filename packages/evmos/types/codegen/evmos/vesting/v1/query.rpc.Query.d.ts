import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balances retrieves the unvested, vested and locked tokens for a vesting account */
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
};
