import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsResponseSDKType, QueryLastRewardSupplyPeakRequest, QueryLastRewardSupplyPeakResponseSDKType, QueryFeeAccrualCountersRequest, QueryFeeAccrualCountersResponseSDKType, QueryAPYRequest, QueryAPYResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    queryParams(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    queryModuleAccounts(_params?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponseSDKType>;
    queryLastRewardSupplyPeak(_params?: QueryLastRewardSupplyPeakRequest): Promise<QueryLastRewardSupplyPeakResponseSDKType>;
    queryFeeAccrualCounters(_params?: QueryFeeAccrualCountersRequest): Promise<QueryFeeAccrualCountersResponseSDKType>;
    queryAPY(_params?: QueryAPYRequest): Promise<QueryAPYResponseSDKType>;
}
