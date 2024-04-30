import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryVestingAccountsRequest, QueryVestingAccountsResponse, QueryVestingLockedSupplyRequest, QueryVestingLockedSupplyResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** SpendableBalances queries the spenable balance of all coins for a single account. */
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    /** VestingAccounts returns all the existing vesting accounts */
    vestingAccounts(request?: QueryVestingAccountsRequest): Promise<QueryVestingAccountsResponse>;
    /** VestingAccounts returns all the existing vesting accounts */
    vestingLockedSupply(request: QueryVestingLockedSupplyRequest): Promise<QueryVestingLockedSupplyResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    vestingAccounts(request?: QueryVestingAccountsRequest): Promise<QueryVestingAccountsResponse>;
    vestingLockedSupply(request: QueryVestingLockedSupplyRequest): Promise<QueryVestingLockedSupplyResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    vestingAccounts(request?: QueryVestingAccountsRequest): Promise<QueryVestingAccountsResponse>;
    vestingLockedSupply(request: QueryVestingLockedSupplyRequest): Promise<QueryVestingLockedSupplyResponse>;
};
