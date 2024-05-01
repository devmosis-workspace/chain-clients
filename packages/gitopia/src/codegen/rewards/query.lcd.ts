import { setPaginationParams } from "../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryTasksRequest, QueryTasksResponseSDKType, QueryGetRewardRequest, QueryGetRewardResponseSDKType, QueryAllRewardsRequest, QueryAllRewardsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.tasks = this.tasks.bind(this);
    this.reward = this.reward.bind(this);
    this.rewardsAll = this.rewardsAll.bind(this);
  }
  /* Params returns the total set of rewards parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `gitopia/gitopia/rewards/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of tasks items. */
  async tasks(params: QueryTasksRequest): Promise<QueryTasksResponseSDKType> {
    const endpoint = `gitopia/gitopia/rewards/tasks/${params.address}`;
    return await this.req.get<QueryTasksResponseSDKType>(endpoint);
  }
  /* Queries a Rewards by index. */
  async reward(params: QueryGetRewardRequest): Promise<QueryGetRewardResponseSDKType> {
    const endpoint = `gitopia/gitopia/rewards/rewards/${params.recipient}`;
    return await this.req.get<QueryGetRewardResponseSDKType>(endpoint);
  }
  /* Queries a list of Rewards items. */
  async rewardsAll(params: QueryAllRewardsRequest = {
    pagination: undefined
  }): Promise<QueryAllRewardsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/rewards/rewards`;
    return await this.req.get<QueryAllRewardsResponseSDKType>(endpoint, options);
  }
}