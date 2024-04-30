import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesResponseSDKType, QueryVestingAccountsRequest, QueryVestingAccountsResponseSDKType, QueryVestingLockedSupplyRequest, QueryVestingLockedSupplyResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    spendableBalances(params: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType>;
    vestingAccounts(params?: QueryVestingAccountsRequest): Promise<QueryVestingAccountsResponseSDKType>;
    vestingLockedSupply(params: QueryVestingLockedSupplyRequest): Promise<QueryVestingLockedSupplyResponseSDKType>;
}
