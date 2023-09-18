import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryRevenuesRequest, QueryRevenuesResponseSDKType, QueryRevenueRequest, QueryRevenueResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDeployerRevenuesRequest, QueryDeployerRevenuesResponseSDKType, QueryWithdrawerRevenuesRequest, QueryWithdrawerRevenuesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.revenues = this.revenues.bind(this);
    this.revenue = this.revenue.bind(this);
    this.params = this.params.bind(this);
    this.deployerRevenues = this.deployerRevenues.bind(this);
    this.withdrawerRevenues = this.withdrawerRevenues.bind(this);
  }
  /* Revenues retrieves all registered revenues */
  async revenues(params: QueryRevenuesRequest = {
    pagination: undefined
  }): Promise<QueryRevenuesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/revenue/v1/revenues`;
    return await this.req.get<QueryRevenuesResponseSDKType>(endpoint, options);
  }
  /* Revenue retrieves a registered revenue for a given contract address */
  async revenue(params: QueryRevenueRequest): Promise<QueryRevenueResponseSDKType> {
    const endpoint = `evmos/revenue/v1/revenues/${params.contractAddress}`;
    return await this.req.get<QueryRevenueResponseSDKType>(endpoint);
  }
  /* Params retrieves the revenue module params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `evmos/revenue/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* DeployerRevenues retrieves all revenues that a given deployer has
   registered */
  async deployerRevenues(params: QueryDeployerRevenuesRequest): Promise<QueryDeployerRevenuesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/revenue/v1/revenues/${params.deployerAddress}`;
    return await this.req.get<QueryDeployerRevenuesResponseSDKType>(endpoint, options);
  }
  /* WithdrawerRevenues retrieves all revenues with a given withdrawer
   address */
  async withdrawerRevenues(params: QueryWithdrawerRevenuesRequest): Promise<QueryWithdrawerRevenuesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/revenue/v1/revenues/${params.withdrawerAddress}`;
    return await this.req.get<QueryWithdrawerRevenuesResponseSDKType>(endpoint, options);
  }
}