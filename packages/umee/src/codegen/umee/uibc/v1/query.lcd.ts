import { LCDClient } from "@osmonauts/lcd";
import { QueryParams, QueryParamsResponseSDKType, QueryOutflows, QueryOutflowsResponseSDKType, QueryAllOutflows, QueryAllOutflowsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.outflows = this.outflows.bind(this);
    this.allOutflows = this.allOutflows.bind(this);
  }
  /* Params queries the parameters of the x/uibc module. */
  async params(_params: QueryParams = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `umee/uibc/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Outflow returns IBC denom outflows in the current quota period.
   If denom is not specified, returns sum of all registered outflows. */
  async outflows(params: QueryOutflows): Promise<QueryOutflowsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `umee/uibc/v1/outflows`;
    return await this.req.get<QueryOutflowsResponseSDKType>(endpoint, options);
  }
  /* AllOutflow returns outflows for each denom in the current quota period. */
  async allOutflows(_params: QueryAllOutflows = {}): Promise<QueryAllOutflowsResponseSDKType> {
    const endpoint = `umee/uibc/v1/all-outflows`;
    return await this.req.get<QueryAllOutflowsResponseSDKType>(endpoint);
  }
}