import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsResponseSDKType, QueryLastRewardSupplyPeakRequest, QueryLastRewardSupplyPeakResponseSDKType, QueryFeeAccrualCountersRequest, QueryFeeAccrualCountersResponseSDKType, QueryAPYRequest, QueryAPYResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.queryParams = this.queryParams.bind(this);
    this.queryModuleAccounts = this.queryModuleAccounts.bind(this);
    this.queryLastRewardSupplyPeak = this.queryLastRewardSupplyPeak.bind(this);
    this.queryFeeAccrualCounters = this.queryFeeAccrualCounters.bind(this);
    this.queryAPY = this.queryAPY.bind(this);
  }
  /* QueryParams */
  async queryParams(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `sommelier/cellarfees/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* QueryModuleAccounts */
  async queryModuleAccounts(_params: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponseSDKType> {
    const endpoint = `sommelier/cellarfees/v1/module_accounts`;
    return await this.req.get<QueryModuleAccountsResponseSDKType>(endpoint);
  }
  /* QueryLastRewardSupplyPeak */
  async queryLastRewardSupplyPeak(_params: QueryLastRewardSupplyPeakRequest = {}): Promise<QueryLastRewardSupplyPeakResponseSDKType> {
    const endpoint = `sommelier/cellarfees/v1/last_reward_supply_peak`;
    return await this.req.get<QueryLastRewardSupplyPeakResponseSDKType>(endpoint);
  }
  /* QueryFeeAccrualCounters */
  async queryFeeAccrualCounters(_params: QueryFeeAccrualCountersRequest = {}): Promise<QueryFeeAccrualCountersResponseSDKType> {
    const endpoint = `sommelier/cellarfees/v1/fee_accrual_counters`;
    return await this.req.get<QueryFeeAccrualCountersResponseSDKType>(endpoint);
  }
  /* QueryAPY */
  async queryAPY(_params: QueryAPYRequest = {}): Promise<QueryAPYResponseSDKType> {
    const endpoint = `sommelier/cellarfees/v1/apy`;
    return await this.req.get<QueryAPYResponseSDKType>(endpoint);
  }
}