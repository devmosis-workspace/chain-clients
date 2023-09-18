import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParams, QueryParamsResponse, QueryTotalBonded, QueryTotalBondedResponse, QueryTotalUnbonding, QueryTotalUnbondingResponse, QueryAccountBonds, QueryAccountBondsResponse, QueryPendingRewards, QueryPendingRewardsResponse, QueryCompletedIncentivePrograms, QueryCompletedIncentiveProgramsResponse, QueryOngoingIncentivePrograms, QueryOngoingIncentiveProgramsResponse, QueryUpcomingIncentivePrograms, QueryUpcomingIncentiveProgramsResponse, QueryIncentiveProgram, QueryIncentiveProgramResponse, QueryCurrentRates, QueryCurrentRatesResponse, QueryActualRates, QueryActualRatesResponse, QueryLastRewardTime, QueryLastRewardTimeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the x/incentive module. */
  params(request?: QueryParams): Promise<QueryParamsResponse>;
  /** TotalBonded queries the sum of all bonded collateral uTokens. */
  totalBonded(request: QueryTotalBonded): Promise<QueryTotalBondedResponse>;
  /** TotalUnbonding queries the sum of all unbonding collateral uTokens. */
  totalUnbonding(request: QueryTotalUnbonding): Promise<QueryTotalUnbondingResponse>;
  /** AccountBonds queries all bonded collateral and unbondings associated with an account. */
  accountBonds(request: QueryAccountBonds): Promise<QueryAccountBondsResponse>;
  /** PendingRewards queries unclaimed incentive rewards associated with an account. */
  pendingRewards(request: QueryPendingRewards): Promise<QueryPendingRewardsResponse>;
  /**
   * CompletedIncentivePrograms queries for all incentives programs that have been passed
   * by governance, and either run to completion or expired immediately due to not being funded.
   */
  completedIncentivePrograms(request?: QueryCompletedIncentivePrograms): Promise<QueryCompletedIncentiveProgramsResponse>;
  /**
   * OngoingIncentivePrograms queries for all incentives programs that have been passed
   * by governance, funded, and started but not yet completed.
   */
  ongoingIncentivePrograms(request?: QueryOngoingIncentivePrograms): Promise<QueryOngoingIncentiveProgramsResponse>;
  /**
   * UpcomingIncentivePrograms queries for all incentives programs that have been passed
   * by governance, but not yet started. They may or may not have been funded.
   */
  upcomingIncentivePrograms(request?: QueryUpcomingIncentivePrograms): Promise<QueryUpcomingIncentiveProgramsResponse>;
  /** IncentiveProgram queries a single incentive program by ID. */
  incentiveProgram(request: QueryIncentiveProgram): Promise<QueryIncentiveProgramResponse>;
  /**
   * CurrentRates queries the hypothetical return of a bonded uToken denomination
   * if current incentive rewards continued for one year. The response is an sdk.Coins
   * of base token rewards, per reference amount (usually 10^exponent of the uToken.)
   */
  currentRates(request: QueryCurrentRates): Promise<QueryCurrentRatesResponse>;
  /**
   * ActualRates queries the hypothetical return of a bonded uToken denomination
   * if current incentive rewards continued for one year. The response is an sdk.Dec
   * representing an oracle-adjusted APY.
   */
  actualRates(request: QueryActualRates): Promise<QueryActualRatesResponse>;
  /** LastRewardTime queries the last block time at which incentive rewards were calculated. */
  lastRewardTime(request?: QueryLastRewardTime): Promise<QueryLastRewardTimeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
  params(request: QueryParams = {}): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  totalBonded(request: QueryTotalBonded): Promise<QueryTotalBondedResponse> {
    const data = QueryTotalBonded.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "TotalBonded", data);
    return promise.then(data => QueryTotalBondedResponse.decode(new BinaryReader(data)));
  }
  totalUnbonding(request: QueryTotalUnbonding): Promise<QueryTotalUnbondingResponse> {
    const data = QueryTotalUnbonding.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "TotalUnbonding", data);
    return promise.then(data => QueryTotalUnbondingResponse.decode(new BinaryReader(data)));
  }
  accountBonds(request: QueryAccountBonds): Promise<QueryAccountBondsResponse> {
    const data = QueryAccountBonds.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "AccountBonds", data);
    return promise.then(data => QueryAccountBondsResponse.decode(new BinaryReader(data)));
  }
  pendingRewards(request: QueryPendingRewards): Promise<QueryPendingRewardsResponse> {
    const data = QueryPendingRewards.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "PendingRewards", data);
    return promise.then(data => QueryPendingRewardsResponse.decode(new BinaryReader(data)));
  }
  completedIncentivePrograms(request: QueryCompletedIncentivePrograms = {}): Promise<QueryCompletedIncentiveProgramsResponse> {
    const data = QueryCompletedIncentivePrograms.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "CompletedIncentivePrograms", data);
    return promise.then(data => QueryCompletedIncentiveProgramsResponse.decode(new BinaryReader(data)));
  }
  ongoingIncentivePrograms(request: QueryOngoingIncentivePrograms = {}): Promise<QueryOngoingIncentiveProgramsResponse> {
    const data = QueryOngoingIncentivePrograms.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "OngoingIncentivePrograms", data);
    return promise.then(data => QueryOngoingIncentiveProgramsResponse.decode(new BinaryReader(data)));
  }
  upcomingIncentivePrograms(request: QueryUpcomingIncentivePrograms = {}): Promise<QueryUpcomingIncentiveProgramsResponse> {
    const data = QueryUpcomingIncentivePrograms.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "UpcomingIncentivePrograms", data);
    return promise.then(data => QueryUpcomingIncentiveProgramsResponse.decode(new BinaryReader(data)));
  }
  incentiveProgram(request: QueryIncentiveProgram): Promise<QueryIncentiveProgramResponse> {
    const data = QueryIncentiveProgram.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "IncentiveProgram", data);
    return promise.then(data => QueryIncentiveProgramResponse.decode(new BinaryReader(data)));
  }
  currentRates(request: QueryCurrentRates): Promise<QueryCurrentRatesResponse> {
    const data = QueryCurrentRates.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "CurrentRates", data);
    return promise.then(data => QueryCurrentRatesResponse.decode(new BinaryReader(data)));
  }
  actualRates(request: QueryActualRates): Promise<QueryActualRatesResponse> {
    const data = QueryActualRates.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "ActualRates", data);
    return promise.then(data => QueryActualRatesResponse.decode(new BinaryReader(data)));
  }
  lastRewardTime(request: QueryLastRewardTime = {}): Promise<QueryLastRewardTimeResponse> {
    const data = QueryLastRewardTime.encode(request).finish();
    const promise = this.rpc.request("umee.incentive.v1.Query", "LastRewardTime", data);
    return promise.then(data => QueryLastRewardTimeResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParams): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    totalBonded(request: QueryTotalBonded): Promise<QueryTotalBondedResponse> {
      return queryService.totalBonded(request);
    },
    totalUnbonding(request: QueryTotalUnbonding): Promise<QueryTotalUnbondingResponse> {
      return queryService.totalUnbonding(request);
    },
    accountBonds(request: QueryAccountBonds): Promise<QueryAccountBondsResponse> {
      return queryService.accountBonds(request);
    },
    pendingRewards(request: QueryPendingRewards): Promise<QueryPendingRewardsResponse> {
      return queryService.pendingRewards(request);
    },
    completedIncentivePrograms(request?: QueryCompletedIncentivePrograms): Promise<QueryCompletedIncentiveProgramsResponse> {
      return queryService.completedIncentivePrograms(request);
    },
    ongoingIncentivePrograms(request?: QueryOngoingIncentivePrograms): Promise<QueryOngoingIncentiveProgramsResponse> {
      return queryService.ongoingIncentivePrograms(request);
    },
    upcomingIncentivePrograms(request?: QueryUpcomingIncentivePrograms): Promise<QueryUpcomingIncentiveProgramsResponse> {
      return queryService.upcomingIncentivePrograms(request);
    },
    incentiveProgram(request: QueryIncentiveProgram): Promise<QueryIncentiveProgramResponse> {
      return queryService.incentiveProgram(request);
    },
    currentRates(request: QueryCurrentRates): Promise<QueryCurrentRatesResponse> {
      return queryService.currentRates(request);
    },
    actualRates(request: QueryActualRates): Promise<QueryActualRatesResponse> {
      return queryService.actualRates(request);
    },
    lastRewardTime(request?: QueryLastRewardTime): Promise<QueryLastRewardTimeResponse> {
      return queryService.lastRewardTime(request);
    }
  };
};