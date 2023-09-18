import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryRewardsRequest, QueryRewardsResponseSDKType, QueryRewardFactorsRequest, QueryRewardFactorsResponseSDKType, QueryApyRequest, QueryApyResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.rewards = this.rewards.bind(this);
    this.rewardFactors = this.rewardFactors.bind(this);
    this.apy = this.apy.bind(this);
  }
  /* Params queries module params. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/incentive/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Rewards queries reward information for a given user. */
  async rewards(params: QueryRewardsRequest): Promise<QueryRewardsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.rewardType !== "undefined") {
      options.params.reward_type = params.rewardType;
    }
    if (typeof params?.unsynchronized !== "undefined") {
      options.params.unsynchronized = params.unsynchronized;
    }
    const endpoint = `kava/incentive/v1beta1/rewards`;
    return await this.req.get<QueryRewardsResponseSDKType>(endpoint, options);
  }
  /* Rewards queries the reward factors. */
  async rewardFactors(_params: QueryRewardFactorsRequest = {}): Promise<QueryRewardFactorsResponseSDKType> {
    const endpoint = `kava/incentive/v1beta1/reward_factors`;
    return await this.req.get<QueryRewardFactorsResponseSDKType>(endpoint);
  }
  /* Apy queries incentive reward apy for a reward. */
  async apy(_params: QueryApyRequest = {}): Promise<QueryApyResponseSDKType> {
    const endpoint = `kava/incentive/v1beta1/apy`;
    return await this.req.get<QueryApyResponseSDKType>(endpoint);
  }
}