import { GroupSpec, GroupSpecAmino, GroupSpecSDKType } from "./group";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
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
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
    id: DeploymentID;
    groups: GroupSpec[];
    version: Uint8Array;
    deposit: Coin;
}
export interface MsgCreateDeploymentProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment";
    value: Uint8Array;
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentAmino {
    id?: DeploymentIDAmino;
    groups?: GroupSpecAmino[];
    version?: string;
    deposit?: CoinAmino;
}
export interface MsgCreateDeploymentAminoMsg {
    type: "/akash.deployment.v1beta1.MsgCreateDeployment";
    value: MsgCreateDeploymentAmino;
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentSDKType {
    id: DeploymentIDSDKType;
    groups: GroupSpecSDKType[];
    version: Uint8Array;
    deposit: CoinSDKType;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {
}
export interface MsgCreateDeploymentResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse";
    value: Uint8Array;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseAmino {
}
export interface MsgCreateDeploymentResponseAminoMsg {
    type: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse";
    value: MsgCreateDeploymentResponseAmino;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseSDKType {
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
    id: DeploymentID;
    amount: Coin;
}
export interface MsgDepositDeploymentProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment";
    value: Uint8Array;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentAmino {
    id?: DeploymentIDAmino;
    amount?: CoinAmino;
}
export interface MsgDepositDeploymentAminoMsg {
    type: "/akash.deployment.v1beta1.MsgDepositDeployment";
    value: MsgDepositDeploymentAmino;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentSDKType {
    id: DeploymentIDSDKType;
    amount: CoinSDKType;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {
}
export interface MsgDepositDeploymentResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse";
    value: Uint8Array;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseAmino {
}
export interface MsgDepositDeploymentResponseAminoMsg {
    type: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse";
    value: MsgDepositDeploymentResponseAmino;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseSDKType {
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
    id: DeploymentID;
    groups: GroupSpec[];
    version: Uint8Array;
}
export interface MsgUpdateDeploymentProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment";
    value: Uint8Array;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentAmino {
    id?: DeploymentIDAmino;
    groups?: GroupSpecAmino[];
    version?: string;
}
export interface MsgUpdateDeploymentAminoMsg {
    type: "/akash.deployment.v1beta1.MsgUpdateDeployment";
    value: MsgUpdateDeploymentAmino;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentSDKType {
    id: DeploymentIDSDKType;
    groups: GroupSpecSDKType[];
    version: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {
}
export interface MsgUpdateDeploymentResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse";
    value: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseAmino {
}
export interface MsgUpdateDeploymentResponseAminoMsg {
    type: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse";
    value: MsgUpdateDeploymentResponseAmino;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseSDKType {
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
    id: DeploymentID;
}
export interface MsgCloseDeploymentProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment";
    value: Uint8Array;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentAmino {
    id?: DeploymentIDAmino;
}
export interface MsgCloseDeploymentAminoMsg {
    type: "/akash.deployment.v1beta1.MsgCloseDeployment";
    value: MsgCloseDeploymentAmino;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentSDKType {
    id: DeploymentIDSDKType;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {
}
export interface MsgCloseDeploymentResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse";
    value: Uint8Array;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseAmino {
}
export interface MsgCloseDeploymentResponseAminoMsg {
    type: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse";
    value: MsgCloseDeploymentResponseAmino;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseSDKType {
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
    owner: string;
    dseq: bigint;
}
export interface DeploymentIDProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.DeploymentID";
    value: Uint8Array;
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentIDAmino {
    owner?: string;
    dseq?: string;
}
export interface DeploymentIDAminoMsg {
    type: "/akash.deployment.v1beta1.DeploymentID";
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
    typeUrl: "/akash.deployment.v1beta1.Deployment";
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
    type: "/akash.deployment.v1beta1.Deployment";
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
    typeUrl: "/akash.deployment.v1beta1.DeploymentFilters";
    value: Uint8Array;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersAmino {
    owner?: string;
    dseq?: string;
    state?: string;
}
export interface DeploymentFiltersAminoMsg {
    type: "/akash.deployment.v1beta1.DeploymentFilters";
    value: DeploymentFiltersAmino;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersSDKType {
    owner: string;
    dseq: bigint;
    state: string;
}
export declare const MsgCreateDeployment: {
    typeUrl: string;
    encode(message: MsgCreateDeployment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateDeployment;
    fromPartial(object: Partial<MsgCreateDeployment>): MsgCreateDeployment;
    fromAmino(object: MsgCreateDeploymentAmino): MsgCreateDeployment;
    toAmino(message: MsgCreateDeployment): MsgCreateDeploymentAmino;
    fromAminoMsg(object: MsgCreateDeploymentAminoMsg): MsgCreateDeployment;
    fromProtoMsg(message: MsgCreateDeploymentProtoMsg): MsgCreateDeployment;
    toProto(message: MsgCreateDeployment): Uint8Array;
    toProtoMsg(message: MsgCreateDeployment): MsgCreateDeploymentProtoMsg;
};
export declare const MsgCreateDeploymentResponse: {
    typeUrl: string;
    encode(_: MsgCreateDeploymentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateDeploymentResponse;
    fromPartial(_: Partial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse;
    fromAmino(_: MsgCreateDeploymentResponseAmino): MsgCreateDeploymentResponse;
    toAmino(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseAmino;
    fromAminoMsg(object: MsgCreateDeploymentResponseAminoMsg): MsgCreateDeploymentResponse;
    fromProtoMsg(message: MsgCreateDeploymentResponseProtoMsg): MsgCreateDeploymentResponse;
    toProto(message: MsgCreateDeploymentResponse): Uint8Array;
    toProtoMsg(message: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseProtoMsg;
};
export declare const MsgDepositDeployment: {
    typeUrl: string;
    encode(message: MsgDepositDeployment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDepositDeployment;
    fromPartial(object: Partial<MsgDepositDeployment>): MsgDepositDeployment;
    fromAmino(object: MsgDepositDeploymentAmino): MsgDepositDeployment;
    toAmino(message: MsgDepositDeployment): MsgDepositDeploymentAmino;
    fromAminoMsg(object: MsgDepositDeploymentAminoMsg): MsgDepositDeployment;
    fromProtoMsg(message: MsgDepositDeploymentProtoMsg): MsgDepositDeployment;
    toProto(message: MsgDepositDeployment): Uint8Array;
    toProtoMsg(message: MsgDepositDeployment): MsgDepositDeploymentProtoMsg;
};
export declare const MsgDepositDeploymentResponse: {
    typeUrl: string;
    encode(_: MsgDepositDeploymentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDepositDeploymentResponse;
    fromPartial(_: Partial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse;
    fromAmino(_: MsgDepositDeploymentResponseAmino): MsgDepositDeploymentResponse;
    toAmino(_: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseAmino;
    fromAminoMsg(object: MsgDepositDeploymentResponseAminoMsg): MsgDepositDeploymentResponse;
    fromProtoMsg(message: MsgDepositDeploymentResponseProtoMsg): MsgDepositDeploymentResponse;
    toProto(message: MsgDepositDeploymentResponse): Uint8Array;
    toProtoMsg(message: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseProtoMsg;
};
export declare const MsgUpdateDeployment: {
    typeUrl: string;
    encode(message: MsgUpdateDeployment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateDeployment;
    fromPartial(object: Partial<MsgUpdateDeployment>): MsgUpdateDeployment;
    fromAmino(object: MsgUpdateDeploymentAmino): MsgUpdateDeployment;
    toAmino(message: MsgUpdateDeployment): MsgUpdateDeploymentAmino;
    fromAminoMsg(object: MsgUpdateDeploymentAminoMsg): MsgUpdateDeployment;
    fromProtoMsg(message: MsgUpdateDeploymentProtoMsg): MsgUpdateDeployment;
    toProto(message: MsgUpdateDeployment): Uint8Array;
    toProtoMsg(message: MsgUpdateDeployment): MsgUpdateDeploymentProtoMsg;
};
export declare const MsgUpdateDeploymentResponse: {
    typeUrl: string;
    encode(_: MsgUpdateDeploymentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateDeploymentResponse;
    fromPartial(_: Partial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse;
    fromAmino(_: MsgUpdateDeploymentResponseAmino): MsgUpdateDeploymentResponse;
    toAmino(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseAmino;
    fromAminoMsg(object: MsgUpdateDeploymentResponseAminoMsg): MsgUpdateDeploymentResponse;
    fromProtoMsg(message: MsgUpdateDeploymentResponseProtoMsg): MsgUpdateDeploymentResponse;
    toProto(message: MsgUpdateDeploymentResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseProtoMsg;
};
export declare const MsgCloseDeployment: {
    typeUrl: string;
    encode(message: MsgCloseDeployment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCloseDeployment;
    fromPartial(object: Partial<MsgCloseDeployment>): MsgCloseDeployment;
    fromAmino(object: MsgCloseDeploymentAmino): MsgCloseDeployment;
    toAmino(message: MsgCloseDeployment): MsgCloseDeploymentAmino;
    fromAminoMsg(object: MsgCloseDeploymentAminoMsg): MsgCloseDeployment;
    fromProtoMsg(message: MsgCloseDeploymentProtoMsg): MsgCloseDeployment;
    toProto(message: MsgCloseDeployment): Uint8Array;
    toProtoMsg(message: MsgCloseDeployment): MsgCloseDeploymentProtoMsg;
};
export declare const MsgCloseDeploymentResponse: {
    typeUrl: string;
    encode(_: MsgCloseDeploymentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCloseDeploymentResponse;
    fromPartial(_: Partial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse;
    fromAmino(_: MsgCloseDeploymentResponseAmino): MsgCloseDeploymentResponse;
    toAmino(_: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseAmino;
    fromAminoMsg(object: MsgCloseDeploymentResponseAminoMsg): MsgCloseDeploymentResponse;
    fromProtoMsg(message: MsgCloseDeploymentResponseProtoMsg): MsgCloseDeploymentResponse;
    toProto(message: MsgCloseDeploymentResponse): Uint8Array;
    toProtoMsg(message: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseProtoMsg;
};
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
