import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryLastRewardSupplyPeakRequest, QueryLastRewardSupplyPeakResponse, QueryFeeAccrualCountersRequest, QueryFeeAccrualCountersResponse, QueryAPYRequest, QueryAPYResponse } from "./query";
export interface Query {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    queryModuleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    queryLastRewardSupplyPeak(request?: QueryLastRewardSupplyPeakRequest): Promise<QueryLastRewardSupplyPeakResponse>;
    queryFeeAccrualCounters(request?: QueryFeeAccrualCountersRequest): Promise<QueryFeeAccrualCountersResponse>;
    queryAPY(request?: QueryAPYRequest): Promise<QueryAPYResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    queryModuleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    queryLastRewardSupplyPeak(request?: QueryLastRewardSupplyPeakRequest): Promise<QueryLastRewardSupplyPeakResponse>;
    queryFeeAccrualCounters(request?: QueryFeeAccrualCountersRequest): Promise<QueryFeeAccrualCountersResponse>;
    queryAPY(request?: QueryAPYRequest): Promise<QueryAPYResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    queryModuleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    queryLastRewardSupplyPeak(request?: QueryLastRewardSupplyPeakRequest): Promise<QueryLastRewardSupplyPeakResponse>;
    queryFeeAccrualCounters(request?: QueryFeeAccrualCountersRequest): Promise<QueryFeeAccrualCountersResponse>;
    queryAPY(request?: QueryAPYRequest): Promise<QueryAPYResponse>;
};
