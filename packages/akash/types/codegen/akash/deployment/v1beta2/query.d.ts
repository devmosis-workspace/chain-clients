import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta2/types";
import * as _m0 from "protobufjs/minimal";
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
    filters?: DeploymentFilters;
    pagination?: PageRequest;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequestSDKType {
    filters?: DeploymentFiltersSDKType;
    pagination?: PageRequestSDKType;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
    deployments: QueryDeploymentResponse[];
    pagination?: PageResponse;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponseSDKType {
    deployments: QueryDeploymentResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
    id?: DeploymentID;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequestSDKType {
    id?: DeploymentIDSDKType;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
    deployment?: Deployment;
    groups: Group[];
    escrowAccount?: Account;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponseSDKType {
    deployment?: DeploymentSDKType;
    groups: GroupSDKType[];
    escrow_account?: AccountSDKType;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
    id?: GroupID;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequestSDKType {
    id?: GroupIDSDKType;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
    group?: Group;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponseSDKType {
    group?: GroupSDKType;
}
export declare const QueryDeploymentsRequest: {
    encode(message: QueryDeploymentsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDeploymentsRequest;
    fromPartial(object: Partial<QueryDeploymentsRequest>): QueryDeploymentsRequest;
};
export declare const QueryDeploymentsResponse: {
    encode(message: QueryDeploymentsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDeploymentsResponse;
    fromPartial(object: Partial<QueryDeploymentsResponse>): QueryDeploymentsResponse;
};
export declare const QueryDeploymentRequest: {
    encode(message: QueryDeploymentRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDeploymentRequest;
    fromPartial(object: Partial<QueryDeploymentRequest>): QueryDeploymentRequest;
};
export declare const QueryDeploymentResponse: {
    encode(message: QueryDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDeploymentResponse;
    fromPartial(object: Partial<QueryDeploymentResponse>): QueryDeploymentResponse;
};
export declare const QueryGroupRequest: {
    encode(message: QueryGroupRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGroupRequest;
    fromPartial(object: Partial<QueryGroupRequest>): QueryGroupRequest;
};
export declare const QueryGroupResponse: {
    encode(message: QueryGroupResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGroupResponse;
    fromPartial(object: Partial<QueryGroupResponse>): QueryGroupResponse;
};
