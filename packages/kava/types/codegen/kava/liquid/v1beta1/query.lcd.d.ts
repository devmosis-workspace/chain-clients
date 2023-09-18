import { LCDClient } from "@cosmology/lcd";
import { QueryDelegatedBalanceRequest, QueryDelegatedBalanceResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    delegatedBalance(params: QueryDelegatedBalanceRequest): Promise<QueryDelegatedBalanceResponseSDKType>;
    totalSupply(_params?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
}
