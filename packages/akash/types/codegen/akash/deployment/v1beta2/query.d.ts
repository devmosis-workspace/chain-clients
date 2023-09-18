import { DeploymentFilters, DeploymentFiltersAmino, DeploymentFiltersSDKType, DeploymentID, DeploymentIDAmino, DeploymentIDSDKType, Deployment, DeploymentAmino, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDAmino, GroupIDSDKType } from "./groupid";
import { Group, GroupAmino, GroupSDKType } from "./group";
import { Account, AccountAmino, AccountSDKType } from "../../escrow/v1beta2/types";
import { BinaryWriter } from "../../../binary";
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
    filters: DeploymentFilters;
    pagination: PageRequest;
}
export interface QueryDeploymentsRequestProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsRequest";
    value: Uint8Array;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequestAmino {
    filters?: DeploymentFiltersAmino;
    pagination?: PageRequestAmino;
}
export interface QueryDeploymentsRequestAminoMsg {
    type: "/akash.deployment.v1beta2.QueryDeploymentsRequest";
    value: QueryDeploymentsRequestAmino;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequestSDKType {
    filters: DeploymentFiltersSDKType;
    pagination: PageRequestSDKType;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
    deployments: QueryDeploymentResponse[];
    pagination: PageResponse;
}
export interface QueryDeploymentsResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsResponse";
    value: Uint8Array;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponseAmino {
    deployments: QueryDeploymentResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryDeploymentsResponseAminoMsg {
    type: "/akash.deployment.v1beta2.QueryDeploymentsResponse";
    value: QueryDeploymentsResponseAmino;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponseSDKType {
    deployments: QueryDeploymentResponseSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
    id: DeploymentID;
}
export interface QueryDeploymentRequestProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.QueryDeploymentRequest";
    value: Uint8Array;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequestAmino {
    id?: DeploymentIDAmino;
}
export interface QueryDeploymentRequestAminoMsg {
    type: "/akash.deployment.v1beta2.QueryDeploymentRequest";
    value: QueryDeploymentRequestAmino;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequestSDKType {
    id: DeploymentIDSDKType;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
    deployment: Deployment;
    groups: Group[];
    escrowAccount: Account;
}
export interface QueryDeploymentResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.QueryDeploymentResponse";
    value: Uint8Array;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponseAmino {
    deployment?: DeploymentAmino;
    groups: GroupAmino[];
    escrow_account?: AccountAmino;
}
export interface QueryDeploymentResponseAminoMsg {
    type: "/akash.deployment.v1beta2.QueryDeploymentResponse";
    value: QueryDeploymentResponseAmino;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponseSDKType {
    deployment: DeploymentSDKType;
    groups: GroupSDKType[];
    escrow_account: AccountSDKType;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
    id: GroupID;
}
export interface QueryGroupRequestProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.QueryGroupRequest";
    value: Uint8Array;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequestAmino {
    id?: GroupIDAmino;
}
export interface QueryGroupRequestAminoMsg {
    type: "/akash.deployment.v1beta2.QueryGroupRequest";
    value: QueryGroupRequestAmino;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequestSDKType {
    id: GroupIDSDKType;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
    group: Group;
}
export interface QueryGroupResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.QueryGroupResponse";
    value: Uint8Array;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponseAmino {
    group?: GroupAmino;
}
export interface QueryGroupResponseAminoMsg {
    type: "/akash.deployment.v1beta2.QueryGroupResponse";
    value: QueryGroupResponseAmino;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponseSDKType {
    group: GroupSDKType;
}
export declare const QueryDeploymentsRequest: {
    typeUrl: string;
    encode(message: QueryDeploymentsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDeploymentsRequest;
    fromPartial(object: Partial<QueryDeploymentsRequest>): QueryDeploymentsRequest;
    fromAmino(object: QueryDeploymentsRequestAmino): QueryDeploymentsRequest;
    toAmino(message: QueryDeploymentsRequest): QueryDeploymentsRequestAmino;
    fromAminoMsg(object: QueryDeploymentsRequestAminoMsg): QueryDeploymentsRequest;
    fromProtoMsg(message: QueryDeploymentsRequestProtoMsg): QueryDeploymentsRequest;
    toProto(message: QueryDeploymentsRequest): Uint8Array;
    toProtoMsg(message: QueryDeploymentsRequest): QueryDeploymentsRequestProtoMsg;
};
export declare const QueryDeploymentsResponse: {
    typeUrl: string;
    encode(message: QueryDeploymentsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDeploymentsResponse;
    fromPartial(object: Partial<QueryDeploymentsResponse>): QueryDeploymentsResponse;
    fromAmino(object: QueryDeploymentsResponseAmino): QueryDeploymentsResponse;
    toAmino(message: QueryDeploymentsResponse): QueryDeploymentsResponseAmino;
    fromAminoMsg(object: QueryDeploymentsResponseAminoMsg): QueryDeploymentsResponse;
    fromProtoMsg(message: QueryDeploymentsResponseProtoMsg): QueryDeploymentsResponse;
    toProto(message: QueryDeploymentsResponse): Uint8Array;
    toProtoMsg(message: QueryDeploymentsResponse): QueryDeploymentsResponseProtoMsg;
};
export declare const QueryDeploymentRequest: {
    typeUrl: string;
    encode(message: QueryDeploymentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDeploymentRequest;
    fromPartial(object: Partial<QueryDeploymentRequest>): QueryDeploymentRequest;
    fromAmino(object: QueryDeploymentRequestAmino): QueryDeploymentRequest;
    toAmino(message: QueryDeploymentRequest): QueryDeploymentRequestAmino;
    fromAminoMsg(object: QueryDeploymentRequestAminoMsg): QueryDeploymentRequest;
    fromProtoMsg(message: QueryDeploymentRequestProtoMsg): QueryDeploymentRequest;
    toProto(message: QueryDeploymentRequest): Uint8Array;
    toProtoMsg(message: QueryDeploymentRequest): QueryDeploymentRequestProtoMsg;
};
export declare const QueryDeploymentResponse: {
    typeUrl: string;
    encode(message: QueryDeploymentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDeploymentResponse;
    fromPartial(object: Partial<QueryDeploymentResponse>): QueryDeploymentResponse;
    fromAmino(object: QueryDeploymentResponseAmino): QueryDeploymentResponse;
    toAmino(message: QueryDeploymentResponse): QueryDeploymentResponseAmino;
    fromAminoMsg(object: QueryDeploymentResponseAminoMsg): QueryDeploymentResponse;
    fromProtoMsg(message: QueryDeploymentResponseProtoMsg): QueryDeploymentResponse;
    toProto(message: QueryDeploymentResponse): Uint8Array;
    toProtoMsg(message: QueryDeploymentResponse): QueryDeploymentResponseProtoMsg;
};
export declare const QueryGroupRequest: {
    typeUrl: string;
    encode(message: QueryGroupRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupRequest;
    fromPartial(object: Partial<QueryGroupRequest>): QueryGroupRequest;
    fromAmino(object: QueryGroupRequestAmino): QueryGroupRequest;
    toAmino(message: QueryGroupRequest): QueryGroupRequestAmino;
    fromAminoMsg(object: QueryGroupRequestAminoMsg): QueryGroupRequest;
    fromProtoMsg(message: QueryGroupRequestProtoMsg): QueryGroupRequest;
    toProto(message: QueryGroupRequest): Uint8Array;
    toProtoMsg(message: QueryGroupRequest): QueryGroupRequestProtoMsg;
};
export declare const QueryGroupResponse: {
    typeUrl: string;
    encode(message: QueryGroupResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupResponse;
    fromPartial(object: Partial<QueryGroupResponse>): QueryGroupResponse;
    fromAmino(object: QueryGroupResponseAmino): QueryGroupResponse;
    toAmino(message: QueryGroupResponse): QueryGroupResponseAmino;
    fromAminoMsg(object: QueryGroupResponseAminoMsg): QueryGroupResponse;
    fromProtoMsg(message: QueryGroupResponseProtoMsg): QueryGroupResponse;
    toProto(message: QueryGroupResponse): Uint8Array;
    toProtoMsg(message: QueryGroupResponse): QueryGroupResponseProtoMsg;
};
