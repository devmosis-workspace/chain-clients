import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBalanceRequest, QueryBalanceResponseSDKType, QueryTotalBalanceRequest, QueryTotalBalanceResponseSDKType, QueryAnnualizedRewardsRequest, QueryAnnualizedRewardsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.balance = this.balance.bind(this);
    this.totalBalance = this.totalBalance.bind(this);
    this.annualizedRewards = this.annualizedRewards.bind(this);
  }
  /* Params queires the module params. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/community/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Balance queries the balance of all coins of x/community module. */
  async balance(_params: QueryBalanceRequest = {}): Promise<QueryBalanceResponseSDKType> {
    const endpoint = `kava/community/v1beta1/balance`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint);
  }
  /* TotalBalance queries the balance of all coins, including x/distribution,
   x/community, and supplied balances. */
  async totalBalance(_params: QueryTotalBalanceRequest = {}): Promise<QueryTotalBalanceResponseSDKType> {
    const endpoint = `kava/community/v1beta1/total_balance`;
    return await this.req.get<QueryTotalBalanceResponseSDKType>(endpoint);
  }
  /* AnnualizedRewards calculates and returns the current annualized reward percentages,
   like staking rewards, for the chain. */
  async annualizedRewards(_params: QueryAnnualizedRewardsRequest = {}): Promise<QueryAnnualizedRewardsResponseSDKType> {
    const endpoint = `kava/community/v1beta1/annualized_rewards`;
    return await this.req.get<QueryAnnualizedRewardsResponseSDKType>(endpoint);
  }
}