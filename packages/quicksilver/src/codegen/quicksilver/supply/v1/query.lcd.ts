import { LCDClient } from "@cosmology/lcd";
import { QuerySupplyRequest, QuerySupplyResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.supply = this.supply.bind(this);
  }
  /* Supply provide running epochInfos */
  async supply(_params: QuerySupplyRequest = {}): Promise<QuerySupplyResponseSDKType> {
    const endpoint = `quicksilver/supply/v1/supply`;
    return await this.req.get<QuerySupplyResponseSDKType>(endpoint);
  }
}