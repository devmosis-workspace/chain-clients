import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType } from "./query";
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
    this.deposits = this.deposits.bind(this);
  }
  /* Params queries all parameters of the swap module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/swap/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Pools queries pools based on pool ID */
  async pools(params: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/swap/v1beta1/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  }
  /* Deposits queries deposit details based on owner address and pool */
  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/swap/v1beta1/deposits`;
    return await this.req.get<QueryDepositsResponseSDKType>(endpoint, options);
  }
}