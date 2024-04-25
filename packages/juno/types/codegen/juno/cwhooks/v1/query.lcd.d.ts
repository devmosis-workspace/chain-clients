import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryStakingContractsRequest, QueryStakingContractsResponseSDKType, QueryGovernanceContractsRequest, QueryGovernanceContractsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    stakingContracts(_params?: QueryStakingContractsRequest): Promise<QueryStakingContractsResponseSDKType>;
    governanceContracts(_params?: QueryGovernanceContractsRequest): Promise<QueryGovernanceContractsResponseSDKType>;
}
