import { LCDClient } from "@osmonauts/lcd";
import { QueryDeploymentsRequest, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    deployments(params: QueryDeploymentsRequest): Promise<QueryDeploymentsResponseSDKType>;
    deployment(params: QueryDeploymentRequest): Promise<QueryDeploymentResponseSDKType>;
    group(params: QueryGroupRequest): Promise<QueryGroupResponseSDKType>;
}
