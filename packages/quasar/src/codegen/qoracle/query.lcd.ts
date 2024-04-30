import { setPaginationParams } from "../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.pools = this.pools.bind(this);
  }
  /* Params queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `quasarlabs/quasarnode/qoracle/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Pools queries the pools collected from pool oracles. */
  async pools(params: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quasarlabs/quasarnode/qoracle/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  }
}