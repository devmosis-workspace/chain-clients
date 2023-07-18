import { LCDClient } from "@osmonauts/lcd";
import { QueryParams, QueryParamsResponseSDKType, QueryTotalBonded, QueryTotalBondedResponseSDKType, QueryTotalUnbonding, QueryTotalUnbondingResponseSDKType, QueryAccountBonds, QueryAccountBondsResponseSDKType, QueryPendingRewards, QueryPendingRewardsResponseSDKType, QueryCompletedIncentivePrograms, QueryCompletedIncentiveProgramsResponseSDKType, QueryOngoingIncentivePrograms, QueryOngoingIncentiveProgramsResponseSDKType, QueryUpcomingIncentivePrograms, QueryUpcomingIncentiveProgramsResponseSDKType, QueryIncentiveProgram, QueryIncentiveProgramResponseSDKType, QueryCurrentRates, QueryCurrentRatesResponseSDKType, QueryActualRates, QueryActualRatesResponseSDKType, QueryLastRewardTime, QueryLastRewardTimeResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParams): Promise<QueryParamsResponseSDKType>;
    totalBonded(params: QueryTotalBonded): Promise<QueryTotalBondedResponseSDKType>;
    totalUnbonding(params: QueryTotalUnbonding): Promise<QueryTotalUnbondingResponseSDKType>;
    accountBonds(params: QueryAccountBonds): Promise<QueryAccountBondsResponseSDKType>;
    pendingRewards(params: QueryPendingRewards): Promise<QueryPendingRewardsResponseSDKType>;
    completedIncentivePrograms(_params?: QueryCompletedIncentivePrograms): Promise<QueryCompletedIncentiveProgramsResponseSDKType>;
    ongoingIncentivePrograms(_params?: QueryOngoingIncentivePrograms): Promise<QueryOngoingIncentiveProgramsResponseSDKType>;
    upcomingIncentivePrograms(_params?: QueryUpcomingIncentivePrograms): Promise<QueryUpcomingIncentiveProgramsResponseSDKType>;
    incentiveProgram(params: QueryIncentiveProgram): Promise<QueryIncentiveProgramResponseSDKType>;
    currentRates(params: QueryCurrentRates): Promise<QueryCurrentRatesResponseSDKType>;
    actualRates(params: QueryActualRates): Promise<QueryActualRatesResponseSDKType>;
    lastRewardTime(_params?: QueryLastRewardTime): Promise<QueryLastRewardTimeResponseSDKType>;
}
