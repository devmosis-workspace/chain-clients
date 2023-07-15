import { GroupSpec, GroupSpecSDKType } from "./group";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
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
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
    id?: DeploymentID;
    groups: GroupSpec[];
    version: Uint8Array;
    deposit?: Coin;
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentSDKType {
    id?: DeploymentIDSDKType;
    groups: GroupSpecSDKType[];
    version: Uint8Array;
    deposit?: CoinSDKType;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseSDKType {
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
    id?: DeploymentID;
    amount?: Coin;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentSDKType {
    id?: DeploymentIDSDKType;
    amount?: CoinSDKType;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseSDKType {
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
    id?: DeploymentID;
    groups: GroupSpec[];
    version: Uint8Array;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentSDKType {
    id?: DeploymentIDSDKType;
    groups: GroupSpecSDKType[];
    version: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseSDKType {
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
    id?: DeploymentID;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentSDKType {
    id?: DeploymentIDSDKType;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseSDKType {
}
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
export declare const MsgCreateDeployment: {
    encode(message: MsgCreateDeployment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateDeployment;
    fromPartial(object: Partial<MsgCreateDeployment>): MsgCreateDeployment;
};
export declare const MsgCreateDeploymentResponse: {
    encode(_: MsgCreateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateDeploymentResponse;
    fromPartial(_: Partial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse;
};
export declare const MsgDepositDeployment: {
    encode(message: MsgDepositDeployment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDepositDeployment;
    fromPartial(object: Partial<MsgDepositDeployment>): MsgDepositDeployment;
};
export declare const MsgDepositDeploymentResponse: {
    encode(_: MsgDepositDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDepositDeploymentResponse;
    fromPartial(_: Partial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse;
};
export declare const MsgUpdateDeployment: {
    encode(message: MsgUpdateDeployment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateDeployment;
    fromPartial(object: Partial<MsgUpdateDeployment>): MsgUpdateDeployment;
};
export declare const MsgUpdateDeploymentResponse: {
    encode(_: MsgUpdateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateDeploymentResponse;
    fromPartial(_: Partial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse;
};
export declare const MsgCloseDeployment: {
    encode(message: MsgCloseDeployment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCloseDeployment;
    fromPartial(object: Partial<MsgCloseDeployment>): MsgCloseDeployment;
};
export declare const MsgCloseDeploymentResponse: {
    encode(_: MsgCloseDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCloseDeploymentResponse;
    fromPartial(_: Partial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse;
};
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
