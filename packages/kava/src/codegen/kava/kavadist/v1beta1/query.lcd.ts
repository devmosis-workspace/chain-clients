import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBalanceRequest, QueryBalanceResponseSDKType } from "./query";
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
  }
  /* Params queries the parameters of x/kavadist module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/kavadist/v1beta1/parameters`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Balance queries the balance of all coins of x/kavadist module. */
  async balance(_params: QueryBalanceRequest = {}): Promise<QueryBalanceResponseSDKType> {
    const endpoint = `kava/kavadist/v1beta1/balance`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint);
  }
}