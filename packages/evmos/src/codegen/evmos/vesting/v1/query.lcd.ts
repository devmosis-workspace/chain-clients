import { LCDClient } from "@osmonauts/lcd";
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
  /* Balances retrieves the unvested, vested and locked tokens for a vesting account */
  async balances(params: QueryBalancesRequest): Promise<QueryBalancesResponseSDKType> {
    const endpoint = `evmos/vesting/v1/balances/${params.address}`;
    return await this.req.get<QueryBalancesResponseSDKType>(endpoint);
  }
}