import { LCDClient } from "@cosmology/lcd";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryTotalBalanceRequest, QueryTotalBalanceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.balance = this.balance.bind(this);
    this.totalBalance = this.totalBalance.bind(this);
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
}