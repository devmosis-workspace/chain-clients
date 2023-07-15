import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRewardsRequest, QueryRewardsResponse, QueryRewardFactorsRequest, QueryRewardFactorsResponse, QueryApyRequest, QueryApyResponse } from "./query";
/** Query defines the gRPC querier service for incentive module. */
export interface Query {
  /** Params queries module params. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Rewards queries reward information for a given user. */
  rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse>;
  /** Rewards queries the reward factors. */
  rewardFactors(request?: QueryRewardFactorsRequest): Promise<QueryRewardFactorsResponse>;
  /** Apy queries incentive reward apy for a reward. */
  apy(request?: QueryApyRequest): Promise<QueryApyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.rewards = this.rewards.bind(this);
    this.rewardFactors = this.rewardFactors.bind(this);
    this.apy = this.apy.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.incentive.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse> {
    const data = QueryRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.incentive.v1beta1.Query", "Rewards", data);
    return promise.then(data => QueryRewardsResponse.decode(new _m0.Reader(data)));
  }
  rewardFactors(request: QueryRewardFactorsRequest = {}): Promise<QueryRewardFactorsResponse> {
    const data = QueryRewardFactorsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.incentive.v1beta1.Query", "RewardFactors", data);
    return promise.then(data => QueryRewardFactorsResponse.decode(new _m0.Reader(data)));
  }
  apy(request: QueryApyRequest = {}): Promise<QueryApyResponse> {
    const data = QueryApyRequest.encode(request).finish();
    const promise = this.rpc.request("kava.incentive.v1beta1.Query", "Apy", data);
    return promise.then(data => QueryApyResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse> {
      return queryService.rewards(request);
    },
    rewardFactors(request?: QueryRewardFactorsRequest): Promise<QueryRewardFactorsResponse> {
      return queryService.rewardFactors(request);
    },
    apy(request?: QueryApyRequest): Promise<QueryApyResponse> {
      return queryService.apy(request);
    }
  };
};