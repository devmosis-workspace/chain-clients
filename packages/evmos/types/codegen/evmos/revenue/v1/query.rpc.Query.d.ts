import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryRevenuesRequest, QueryRevenuesResponse, QueryRevenueRequest, QueryRevenueResponse, QueryParamsRequest, QueryParamsResponse, QueryDeployerRevenuesRequest, QueryDeployerRevenuesResponse, QueryWithdrawerRevenuesRequest, QueryWithdrawerRevenuesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Revenues retrieves all registered revenues */
    revenues(request?: QueryRevenuesRequest): Promise<QueryRevenuesResponse>;
    /** Revenue retrieves a registered revenue for a given contract address */
    revenue(request: QueryRevenueRequest): Promise<QueryRevenueResponse>;
    /** Params retrieves the revenue module params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * DeployerRevenues retrieves all revenues that a given deployer has
     * registered
     */
    deployerRevenues(request: QueryDeployerRevenuesRequest): Promise<QueryDeployerRevenuesResponse>;
    /**
     * WithdrawerRevenues retrieves all revenues with a given withdrawer
     * address
     */
    withdrawerRevenues(request: QueryWithdrawerRevenuesRequest): Promise<QueryWithdrawerRevenuesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    revenues(request?: QueryRevenuesRequest): Promise<QueryRevenuesResponse>;
    revenue(request: QueryRevenueRequest): Promise<QueryRevenueResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    deployerRevenues(request: QueryDeployerRevenuesRequest): Promise<QueryDeployerRevenuesResponse>;
    withdrawerRevenues(request: QueryWithdrawerRevenuesRequest): Promise<QueryWithdrawerRevenuesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    revenues(request?: QueryRevenuesRequest): Promise<QueryRevenuesResponse>;
    revenue(request: QueryRevenueRequest): Promise<QueryRevenueResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    deployerRevenues(request: QueryDeployerRevenuesRequest): Promise<QueryDeployerRevenuesResponse>;
    withdrawerRevenues(request: QueryWithdrawerRevenuesRequest): Promise<QueryWithdrawerRevenuesResponse>;
};
