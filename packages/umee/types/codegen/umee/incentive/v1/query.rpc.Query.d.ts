import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    totalBonded(request: QueryTotalBonded): Promise<QueryTotalBondedResponse>;
    totalUnbonding(request: QueryTotalUnbonding): Promise<QueryTotalUnbondingResponse>;
    accountBonds(request: QueryAccountBonds): Promise<QueryAccountBondsResponse>;
    pendingRewards(request: QueryPendingRewards): Promise<QueryPendingRewardsResponse>;
    completedIncentivePrograms(request?: QueryCompletedIncentivePrograms): Promise<QueryCompletedIncentiveProgramsResponse>;
    ongoingIncentivePrograms(request?: QueryOngoingIncentivePrograms): Promise<QueryOngoingIncentiveProgramsResponse>;
    upcomingIncentivePrograms(request?: QueryUpcomingIncentivePrograms): Promise<QueryUpcomingIncentiveProgramsResponse>;
    incentiveProgram(request: QueryIncentiveProgram): Promise<QueryIncentiveProgramResponse>;
    currentRates(request: QueryCurrentRates): Promise<QueryCurrentRatesResponse>;
    actualRates(request: QueryActualRates): Promise<QueryActualRatesResponse>;
    lastRewardTime(request?: QueryLastRewardTime): Promise<QueryLastRewardTimeResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    totalBonded(request: QueryTotalBonded): Promise<QueryTotalBondedResponse>;
    totalUnbonding(request: QueryTotalUnbonding): Promise<QueryTotalUnbondingResponse>;
    accountBonds(request: QueryAccountBonds): Promise<QueryAccountBondsResponse>;
    pendingRewards(request: QueryPendingRewards): Promise<QueryPendingRewardsResponse>;
    completedIncentivePrograms(request?: QueryCompletedIncentivePrograms): Promise<QueryCompletedIncentiveProgramsResponse>;
    ongoingIncentivePrograms(request?: QueryOngoingIncentivePrograms): Promise<QueryOngoingIncentiveProgramsResponse>;
    upcomingIncentivePrograms(request?: QueryUpcomingIncentivePrograms): Promise<QueryUpcomingIncentiveProgramsResponse>;
    incentiveProgram(request: QueryIncentiveProgram): Promise<QueryIncentiveProgramResponse>;
    currentRates(request: QueryCurrentRates): Promise<QueryCurrentRatesResponse>;
    actualRates(request: QueryActualRates): Promise<QueryActualRatesResponse>;
    lastRewardTime(request?: QueryLastRewardTime): Promise<QueryLastRewardTimeResponse>;
};
