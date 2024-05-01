import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryTasksRequest, QueryTasksResponse, QueryGetRewardRequest, QueryGetRewardResponse, QueryAllRewardsRequest, QueryAllRewardsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of rewards parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of tasks items. */
  tasks(request: QueryTasksRequest): Promise<QueryTasksResponse>;
  /** Queries a Rewards by index. */
  reward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse>;
  /** Queries a list of Rewards items. */
  rewardsAll(request?: QueryAllRewardsRequest): Promise<QueryAllRewardsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.tasks = this.tasks.bind(this);
    this.reward = this.reward.bind(this);
    this.rewardsAll = this.rewardsAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.rewards.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  tasks(request: QueryTasksRequest): Promise<QueryTasksResponse> {
    const data = QueryTasksRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.rewards.Query", "Tasks", data);
    return promise.then(data => QueryTasksResponse.decode(new BinaryReader(data)));
  }
  reward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse> {
    const data = QueryGetRewardRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.rewards.Query", "Reward", data);
    return promise.then(data => QueryGetRewardResponse.decode(new BinaryReader(data)));
  }
  rewardsAll(request: QueryAllRewardsRequest = {
    pagination: undefined
  }): Promise<QueryAllRewardsResponse> {
    const data = QueryAllRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.rewards.Query", "RewardsAll", data);
    return promise.then(data => QueryAllRewardsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    tasks(request: QueryTasksRequest): Promise<QueryTasksResponse> {
      return queryService.tasks(request);
    },
    reward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse> {
      return queryService.reward(request);
    },
    rewardsAll(request?: QueryAllRewardsRequest): Promise<QueryAllRewardsResponse> {
      return queryService.rewardsAll(request);
    }
  };
};