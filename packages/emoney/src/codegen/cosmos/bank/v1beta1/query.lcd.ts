import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
  }
  /* Balance queries the balance of a single coin for a single account. */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}/${params.denom}`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint);
  }
  /* AllBalances queries the balance of all coins for a single account. */
  async allBalances(params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}`;
    return await this.req.get<QueryAllBalancesResponseSDKType>(endpoint, options);
  }
  /* TotalSupply queries the total supply of all coins. */
  async totalSupply(_params: QueryTotalSupplyRequest = {}): Promise<QueryTotalSupplyResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/supply`;
    return await this.req.get<QueryTotalSupplyResponseSDKType>(endpoint);
  }
  /* SupplyOf queries the supply of a single coin. */
  async supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/supply/${params.denom}`;
    return await this.req.get<QuerySupplyOfResponseSDKType>(endpoint);
  }
  /* Params queries the parameters of x/bank module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* DenomsMetadata queries the client metadata of a given coin denomination. */
  async denomMetadata(params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata/${params.denom}`;
    return await this.req.get<QueryDenomMetadataResponseSDKType>(endpoint);
  }
  /* DenomsMetadata queries the client metadata for all registered coin denominations. */
  async denomsMetadata(params: QueryDenomsMetadataRequest = {
    pagination: undefined
  }): Promise<QueryDenomsMetadataResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata`;
    return await this.req.get<QueryDenomsMetadataResponseSDKType>(endpoint, options);
  }
}