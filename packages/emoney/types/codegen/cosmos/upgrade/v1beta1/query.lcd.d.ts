import { LCDClient } from "@cosmology/lcd";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    currentPlan(_params?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponseSDKType>;
    appliedPlan(params: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponseSDKType>;
    upgradedConsensusState(params: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType>;
}
