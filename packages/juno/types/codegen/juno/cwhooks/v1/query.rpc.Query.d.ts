import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryStakingContractsRequest, QueryStakingContractsResponse, QueryGovernanceContractsRequest, QueryGovernanceContractsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** StakingContracts */
    stakingContracts(request?: QueryStakingContractsRequest): Promise<QueryStakingContractsResponse>;
    /** GovernanceContracts */
    governanceContracts(request?: QueryGovernanceContractsRequest): Promise<QueryGovernanceContractsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    stakingContracts(request?: QueryStakingContractsRequest): Promise<QueryStakingContractsResponse>;
    governanceContracts(request?: QueryGovernanceContractsRequest): Promise<QueryGovernanceContractsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    stakingContracts(request?: QueryStakingContractsRequest): Promise<QueryStakingContractsResponse>;
    governanceContracts(request?: QueryGovernanceContractsRequest): Promise<QueryGovernanceContractsResponse>;
};
