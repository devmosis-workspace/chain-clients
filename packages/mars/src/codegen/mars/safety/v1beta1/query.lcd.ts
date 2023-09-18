import { LCDClient } from "@cosmology/lcd";
import { QueryBalancesRequest, QueryBalancesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.balances = this.balances.bind(this);
  }
  /* Balances queries coins available in the safety fund */
  async balances(_params: QueryBalancesRequest = {}): Promise<QueryBalancesResponseSDKType> {
    const endpoint = `mars/safety/v1beta1/balances`;
    return await this.req.get<QueryBalancesResponseSDKType>(endpoint);
  }
}