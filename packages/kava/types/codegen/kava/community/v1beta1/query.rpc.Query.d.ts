import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryTotalBalanceRequest, QueryTotalBalanceResponse } from "./query";
/** Query defines the gRPC querier service for x/community. */
export interface Query {
    /** Balance queries the balance of all coins of x/community module. */
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /**
     * TotalBalance queries the balance of all coins, including x/distribution,
     * x/community, and supplied balances.
     */
    totalBalance(request?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    totalBalance(request?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    totalBalance(request?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponse>;
};
