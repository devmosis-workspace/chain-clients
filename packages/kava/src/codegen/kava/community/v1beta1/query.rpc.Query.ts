import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBalanceRequest, QueryBalanceResponse, QueryTotalBalanceRequest, QueryTotalBalanceResponse, QueryAnnualizedRewardsRequest, QueryAnnualizedRewardsResponse } from "./query";
/** Query defines the gRPC querier service for x/community. */
export interface Query {
  /** Params queires the module params. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Balance queries the balance of all coins of x/community module. */
  balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /**
   * TotalBalance queries the balance of all coins, including x/distribution,
   * x/community, and supplied balances.
   */
  totalBalance(request?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponse>;
  /**
   * AnnualizedRewards calculates and returns the current annualized reward percentages,
   * like staking rewards, for the chain.
   */
  annualizedRewards(request?: QueryAnnualizedRewardsRequest): Promise<QueryAnnualizedRewardsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.balance = this.balance.bind(this);
    this.totalBalance = this.totalBalance.bind(this);
    this.annualizedRewards = this.annualizedRewards.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.community.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  balance(request: QueryBalanceRequest = {}): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("kava.community.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  }
  totalBalance(request: QueryTotalBalanceRequest = {}): Promise<QueryTotalBalanceResponse> {
    const data = QueryTotalBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("kava.community.v1beta1.Query", "TotalBalance", data);
    return promise.then(data => QueryTotalBalanceResponse.decode(new BinaryReader(data)));
  }
  annualizedRewards(request: QueryAnnualizedRewardsRequest = {}): Promise<QueryAnnualizedRewardsResponse> {
    const data = QueryAnnualizedRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.community.v1beta1.Query", "AnnualizedRewards", data);
    return promise.then(data => QueryAnnualizedRewardsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    totalBalance(request?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponse> {
      return queryService.totalBalance(request);
    },
    annualizedRewards(request?: QueryAnnualizedRewardsRequest): Promise<QueryAnnualizedRewardsResponse> {
      return queryService.annualizedRewards(request);
    }
  };
};