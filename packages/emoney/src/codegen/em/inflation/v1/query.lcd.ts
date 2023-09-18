import { LCDClient } from "@cosmology/lcd";
import { QueryInflationRequest, QueryInflationResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.inflation = this.inflation.bind(this);
  }
  /* Inflation */
  async inflation(_params: QueryInflationRequest = {}): Promise<QueryInflationResponseSDKType> {
    const endpoint = `e-money/inflation/v1/state`;
    return await this.req.get<QueryInflationResponseSDKType>(endpoint);
  }
}