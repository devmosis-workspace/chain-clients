import { BinaryWriter } from "../../../binary";
/** State is an enum which refers to state of deployment */
export declare enum Deployment_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** active - DeploymentActive denotes state for deployment active */
    active = 1,
    /** closed - DeploymentClosed denotes state for deployment closed */
    closed = 2,
    UNRECOGNIZED = -1
}
export declare const Deployment_StateSDKType: typeof Deployment_State;
export declare const Deployment_StateAmino: typeof Deployment_State;
export declare function deployment_StateFromJSON(object: any): Deployment_State;
export declare function deployment_StateToJSON(object: Deployment_State): string;
/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
    owner: string;
    dseq: bigint;
}
export interface DeploymentIDProtoMsg {
    typeUrl: "/akash.deployment.v1beta3.DeploymentID";
    value: Uint8Array;
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentIDAmino {
    owner?: string;
    dseq?: string;
}
export interface DeploymentIDAminoMsg {
    type: "/akash.deployment.v1beta3.DeploymentID";
    value: DeploymentIDAmino;
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentIDSDKType {
    owner: string;
    dseq: bigint;
}
/** Deployment stores deploymentID, state and version details */
export interface Deployment {
    deploymentId: DeploymentID;
    state: Deployment_State;
    version: Uint8Array;
    createdAt: bigint;
}
export interface DeploymentProtoMsg {
    typeUrl: "/akash.deployment.v1beta3.Deployment";
    value: Uint8Array;
}
/** Deployment stores deploymentID, state and version details */
export interface DeploymentAmino {
    deployment_id?: DeploymentIDAmino;
    state?: Deployment_State;
    version?: string;
    created_at?: string;
}
export interface DeploymentAminoMsg {
    type: "/akash.deployment.v1beta3.Deployment";
    value: DeploymentAmino;
}
/** Deployment stores deploymentID, state and version details */
export interface DeploymentSDKType {
    deployment_id: DeploymentIDSDKType;
    state: Deployment_State;
    version: Uint8Array;
    created_at: bigint;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
    owner: string;
    dseq: bigint;
    state: string;
}
export interface DeploymentFiltersProtoMsg {
    typeUrl: "/akash.deployment.v1beta3.DeploymentFilters";
    value: Uint8Array;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersAmino {
    owner?: string;
    dseq?: string;
    state?: string;
}
export interface DeploymentFiltersAminoMsg {
    type: "/akash.deployment.v1beta3.DeploymentFilters";
    value: DeploymentFiltersAmino;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersSDKType {
    owner: string;
    dseq: bigint;
    state: string;
}
export declare const DeploymentID: {
    typeUrl: string;
    encode(message: DeploymentID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DeploymentID;
    fromPartial(object: Partial<DeploymentID>): DeploymentID;
    fromAmino(object: DeploymentIDAmino): DeploymentID;
    toAmino(message: DeploymentID): DeploymentIDAmino;
    fromAminoMsg(object: DeploymentIDAminoMsg): DeploymentID;
    fromProtoMsg(message: DeploymentIDProtoMsg): DeploymentID;
    toProto(message: DeploymentID): Uint8Array;
    toProtoMsg(message: DeploymentID): DeploymentIDProtoMsg;
};
export declare const Deployment: {
    typeUrl: string;
    encode(message: Deployment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Deployment;
    fromPartial(object: Partial<Deployment>): Deployment;
    fromAmino(object: DeploymentAmino): Deployment;
    toAmino(message: Deployment): DeploymentAmino;
    fromAminoMsg(object: DeploymentAminoMsg): Deployment;
    fromProtoMsg(message: DeploymentProtoMsg): Deployment;
    toProto(message: Deployment): Uint8Array;
    toProtoMsg(message: Deployment): DeploymentProtoMsg;
};
export declare const DeploymentFilters: {
    typeUrl: string;
    encode(message: DeploymentFilters, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DeploymentFilters;
    fromPartial(object: Partial<DeploymentFilters>): DeploymentFilters;
    fromAmino(object: DeploymentFiltersAmino): DeploymentFilters;
    toAmino(message: DeploymentFilters): DeploymentFiltersAmino;
    fromAminoMsg(object: DeploymentFiltersAminoMsg): DeploymentFilters;
    fromProtoMsg(message: DeploymentFiltersProtoMsg): DeploymentFilters;
    toProto(message: DeploymentFilters): Uint8Array;
    toProtoMsg(message: DeploymentFilters): DeploymentFiltersProtoMsg;
};
