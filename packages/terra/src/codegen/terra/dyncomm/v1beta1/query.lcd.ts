import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryRateRequest, QueryRateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.rate = this.rate.bind(this);
  }
  /* Params queries all parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `terra/dyncomm/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Rate */
  async rate(params: QueryRateRequest): Promise<QueryRateResponseSDKType> {
    const endpoint = `terra/dyncomm/v1beta1/rate/${params.validatorAddr}`;
    return await this.req.get<QueryRateResponseSDKType>(endpoint);
  }
}