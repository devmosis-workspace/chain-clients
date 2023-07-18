import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAPYRequest, QueryAPYResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.queryParams = this.queryParams.bind(this);
    this.queryAPY = this.queryAPY.bind(this);
  }
  /* QueryParams queries the allocation module parameters. */
  async queryParams(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `sommelier/incentives/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* QueryAPY queries the APY returned from the incentives module. */
  async queryAPY(_params: QueryAPYRequest = {}): Promise<QueryAPYResponseSDKType> {
    const endpoint = `sommelier/incentives/v1/apy`;
    return await this.req.get<QueryAPYResponseSDKType>(endpoint);
  }
}