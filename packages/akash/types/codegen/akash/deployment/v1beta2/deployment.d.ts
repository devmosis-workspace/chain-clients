import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export declare function deployment_StateFromJSON(object: any): Deployment_State;
export declare function deployment_StateToJSON(object: Deployment_State): string;
/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
    owner: string;
    dseq: Long;
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentIDSDKType {
    owner: string;
    dseq: Long;
}
/** Deployment stores deploymentID, state and version details */
export interface Deployment {
    deploymentId?: DeploymentID;
    state: Deployment_State;
    version: Uint8Array;
    createdAt: Long;
}
/** Deployment stores deploymentID, state and version details */
export interface DeploymentSDKType {
    deployment_id?: DeploymentIDSDKType;
    state: Deployment_State;
    version: Uint8Array;
    created_at: Long;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
    owner: string;
    dseq: Long;
    state: string;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersSDKType {
    owner: string;
    dseq: Long;
    state: string;
}
export declare const DeploymentID: {
    encode(message: DeploymentID, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DeploymentID;
    fromPartial(object: Partial<DeploymentID>): DeploymentID;
};
export declare const Deployment: {
    encode(message: Deployment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Deployment;
    fromPartial(object: Partial<Deployment>): Deployment;
};
export declare const DeploymentFilters: {
    encode(message: DeploymentFilters, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DeploymentFilters;
    fromPartial(object: Partial<DeploymentFilters>): DeploymentFilters;
};
