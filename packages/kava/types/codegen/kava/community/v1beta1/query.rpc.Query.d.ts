import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBalanceRequest, QueryBalanceResponse, QueryTotalBalanceRequest, QueryTotalBalanceResponse, QueryAnnualizedRewardsRequest, QueryAnnualizedRewardsResponse } from "./query";
/** Query defines the gRPC querier service for x/community. */
export interface Query {
    /** Params queires the module params. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Balance queries the balance of all coins of x/community module. */
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /**
     * TotalBalance queries the balance of all coins, including x/distribution,
     * x/community, and supplied balances.
     */
    totalBalance(request?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponse>;
    /**
     * AnnualizedRewards calculates and returns the current annualized reward percentages,
     * like staking rewards, for the chain.
     */
    annualizedRewards(request?: QueryAnnualizedRewardsRequest): Promise<QueryAnnualizedRewardsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    totalBalance(request?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponse>;
    annualizedRewards(request?: QueryAnnualizedRewardsRequest): Promise<QueryAnnualizedRewardsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    totalBalance(request?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponse>;
    annualizedRewards(request?: QueryAnnualizedRewardsRequest): Promise<QueryAnnualizedRewardsResponse>;
};
