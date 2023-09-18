import { LCDClient } from "@cosmology/lcd";
import { QueryParams, QueryParamsResponseSDKType, QueryTotalBonded, QueryTotalBondedResponseSDKType, QueryTotalUnbonding, QueryTotalUnbondingResponseSDKType, QueryAccountBonds, QueryAccountBondsResponseSDKType, QueryPendingRewards, QueryPendingRewardsResponseSDKType, QueryCompletedIncentivePrograms, QueryCompletedIncentiveProgramsResponseSDKType, QueryOngoingIncentivePrograms, QueryOngoingIncentiveProgramsResponseSDKType, QueryUpcomingIncentivePrograms, QueryUpcomingIncentiveProgramsResponseSDKType, QueryIncentiveProgram, QueryIncentiveProgramResponseSDKType, QueryCurrentRates, QueryCurrentRatesResponseSDKType, QueryActualRates, QueryActualRatesResponseSDKType, QueryLastRewardTime, QueryLastRewardTimeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.totalBonded = this.totalBonded.bind(this);
    this.totalUnbonding = this.totalUnbonding.bind(this);
    this.accountBonds = this.accountBonds.bind(this);
    this.pendingRewards = this.pendingRewards.bind(this);
    this.completedIncentivePrograms = this.completedIncentivePrograms.bind(this);
    this.ongoingIncentivePrograms = this.ongoingIncentivePrograms.bind(this);
    this.upcomingIncentivePrograms = this.upcomingIncentivePrograms.bind(this);
    this.incentiveProgram = this.incentiveProgram.bind(this);
    this.currentRates = this.currentRates.bind(this);
    this.actualRates = this.actualRates.bind(this);
    this.lastRewardTime = this.lastRewardTime.bind(this);
  }
  /* Params queries the parameters of the x/incentive module. */
  async params(_params: QueryParams = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `umee/incentive/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* TotalBonded queries the sum of all bonded collateral uTokens. */
  async totalBonded(params: QueryTotalBonded): Promise<QueryTotalBondedResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `umee/incentive/v1/total_bonded`;
    return await this.req.get<QueryTotalBondedResponseSDKType>(endpoint, options);
  }
  /* TotalUnbonding queries the sum of all unbonding collateral uTokens. */
  async totalUnbonding(params: QueryTotalUnbonding): Promise<QueryTotalUnbondingResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `umee/incentive/v1/total_unbonding`;
    return await this.req.get<QueryTotalUnbondingResponseSDKType>(endpoint, options);
  }
  /* AccountBonds queries all bonded collateral and unbondings associated with an account. */
  async accountBonds(params: QueryAccountBonds): Promise<QueryAccountBondsResponseSDKType> {
    const endpoint = `umee/incentive/v1/account_bonds/${params.address}`;
    return await this.req.get<QueryAccountBondsResponseSDKType>(endpoint);
  }
  /* PendingRewards queries unclaimed incentive rewards associated with an account. */
  async pendingRewards(params: QueryPendingRewards): Promise<QueryPendingRewardsResponseSDKType> {
    const endpoint = `umee/incentive/v1/pending_rewards/${params.address}`;
    return await this.req.get<QueryPendingRewardsResponseSDKType>(endpoint);
  }
  /* CompletedIncentivePrograms queries for all incentives programs that have been passed
   by governance, and either run to completion or expired immediately due to not being funded. */
  async completedIncentivePrograms(_params: QueryCompletedIncentivePrograms = {}): Promise<QueryCompletedIncentiveProgramsResponseSDKType> {
    const endpoint = `umee/incentive/v1/programs/completed`;
    return await this.req.get<QueryCompletedIncentiveProgramsResponseSDKType>(endpoint);
  }
  /* OngoingIncentivePrograms queries for all incentives programs that have been passed
   by governance, funded, and started but not yet completed. */
  async ongoingIncentivePrograms(_params: QueryOngoingIncentivePrograms = {}): Promise<QueryOngoingIncentiveProgramsResponseSDKType> {
    const endpoint = `umee/incentive/v1/programs/ongoing`;
    return await this.req.get<QueryOngoingIncentiveProgramsResponseSDKType>(endpoint);
  }
  /* UpcomingIncentivePrograms queries for all incentives programs that have been passed
   by governance, but not yet started. They may or may not have been funded. */
  async upcomingIncentivePrograms(_params: QueryUpcomingIncentivePrograms = {}): Promise<QueryUpcomingIncentiveProgramsResponseSDKType> {
    const endpoint = `umee/incentive/v1/programs/upcoming`;
    return await this.req.get<QueryUpcomingIncentiveProgramsResponseSDKType>(endpoint);
  }
  /* IncentiveProgram queries a single incentive program by ID. */
  async incentiveProgram(params: QueryIncentiveProgram): Promise<QueryIncentiveProgramResponseSDKType> {
    const endpoint = `umee/incentive/v1/program/${params.id}`;
    return await this.req.get<QueryIncentiveProgramResponseSDKType>(endpoint);
  }
  /* CurrentRates queries the hypothetical return of a bonded uToken denomination
   if current incentive rewards continued for one year. The response is an sdk.Coins
   of base token rewards, per reference amount (usually 10^exponent of the uToken.) */
  async currentRates(params: QueryCurrentRates): Promise<QueryCurrentRatesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.uToken !== "undefined") {
      options.params.uToken = params.uToken;
    }
    const endpoint = `umee/incentive/v1/current_rates`;
    return await this.req.get<QueryCurrentRatesResponseSDKType>(endpoint, options);
  }
  /* ActualRates queries the hypothetical return of a bonded uToken denomination
   if current incentive rewards continued for one year. The response is an sdk.Dec
   representing an oracle-adjusted APY. */
  async actualRates(params: QueryActualRates): Promise<QueryActualRatesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.uToken !== "undefined") {
      options.params.uToken = params.uToken;
    }
    const endpoint = `umee/incentive/v1/actual_rates`;
    return await this.req.get<QueryActualRatesResponseSDKType>(endpoint, options);
  }
  /* LastRewardTime queries the last block time at which incentive rewards were calculated. */
  async lastRewardTime(_params: QueryLastRewardTime = {}): Promise<QueryLastRewardTimeResponseSDKType> {
    const endpoint = `umee/incentive/v1/last_reward_time`;
    return await this.req.get<QueryLastRewardTimeResponseSDKType>(endpoint);
  }
}