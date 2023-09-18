import { Deployment, DeploymentAmino, DeploymentSDKType } from "./deployment";
import { Group, GroupAmino, GroupSDKType } from "./group";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeployment {
    deployment: Deployment;
    groups: Group[];
}
export interface GenesisDeploymentProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.GenesisDeployment";
    value: Uint8Array;
}
/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeploymentAmino {
    deployment?: DeploymentAmino;
    groups: GroupAmino[];
}
export interface GenesisDeploymentAminoMsg {
    type: "/akash.deployment.v1beta2.GenesisDeployment";
    value: GenesisDeploymentAmino;
}
/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeploymentSDKType {
    deployment: DeploymentSDKType;
    groups: GroupSDKType[];
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
    deployments: GenesisDeployment[];
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.GenesisState";
    value: Uint8Array;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateAmino {
    deployments: GenesisDeploymentAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/akash.deployment.v1beta2.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateSDKType {
    deployments: GenesisDeploymentSDKType[];
    params: ParamsSDKType;
}
export declare const GenesisDeployment: {
    typeUrl: string;
    encode(message: GenesisDeployment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisDeployment;
    fromPartial(object: Partial<GenesisDeployment>): GenesisDeployment;
    fromAmino(object: GenesisDeploymentAmino): GenesisDeployment;
    toAmino(message: GenesisDeployment): GenesisDeploymentAmino;
    fromAminoMsg(object: GenesisDeploymentAminoMsg): GenesisDeployment;
    fromProtoMsg(message: GenesisDeploymentProtoMsg): GenesisDeployment;
    toProto(message: GenesisDeployment): Uint8Array;
    toProtoMsg(message: GenesisDeployment): GenesisDeploymentProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
