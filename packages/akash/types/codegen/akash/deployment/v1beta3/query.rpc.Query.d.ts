import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /** Deployments queries deployments */
    deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
    /** Deployment queries deployment details */
    deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
    /** Group queries group details */
    group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
    deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
    group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
    deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
    group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
};
