import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBalanceRequest, QueryBalanceResponseSDKType, QueryTotalBalanceRequest, QueryTotalBalanceResponseSDKType, QueryAnnualizedRewardsRequest, QueryAnnualizedRewardsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    balance(_params?: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    totalBalance(_params?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponseSDKType>;
    annualizedRewards(_params?: QueryAnnualizedRewardsRequest): Promise<QueryAnnualizedRewardsResponseSDKType>;
}
