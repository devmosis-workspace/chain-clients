import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.deposits = this.deposits.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
  }
  /* Params queries all parameters of the savings module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/savings/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Deposits queries savings deposits. */
  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/savings/v1beta1/deposits`;
    return await this.req.get<QueryDepositsResponseSDKType>(endpoint, options);
  }
  /* TotalSupply returns the total sum of all coins currently locked into the savings module. */
  async totalSupply(_params: QueryTotalSupplyRequest = {}): Promise<QueryTotalSupplyResponseSDKType> {
    const endpoint = `kava/savings/v1beta1/total_supply`;
    return await this.req.get<QueryTotalSupplyResponseSDKType>(endpoint);
  }
}