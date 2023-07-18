import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDeployedCosmosCoinContractsRequest, QueryDeployedCosmosCoinContractsResponse } from "./query";
/** Query defines the gRPC querier service for evmutil module */
export interface Query {
    /** Params queries all parameters of the evmutil module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DeployedCosmosCoinContracts queries a list cosmos coin denom and their deployed erc20 address */
    deployedCosmosCoinContracts(request: QueryDeployedCosmosCoinContractsRequest): Promise<QueryDeployedCosmosCoinContractsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    deployedCosmosCoinContracts(request: QueryDeployedCosmosCoinContractsRequest): Promise<QueryDeployedCosmosCoinContractsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    deployedCosmosCoinContracts(request: QueryDeployedCosmosCoinContractsRequest): Promise<QueryDeployedCosmosCoinContractsResponse>;
};
