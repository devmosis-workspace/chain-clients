import { Deployment, DeploymentSDKType } from "./deployment";
import { Group, GroupSDKType } from "./group";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeployment {
    deployment?: Deployment;
    groups: Group[];
}
/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeploymentSDKType {
    deployment?: DeploymentSDKType;
    groups: GroupSDKType[];
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
    deployments: GenesisDeployment[];
    params?: Params;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateSDKType {
    deployments: GenesisDeploymentSDKType[];
    params?: ParamsSDKType;
}
export declare const GenesisDeployment: {
    encode(message: GenesisDeployment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisDeployment;
    fromPartial(object: Partial<GenesisDeployment>): GenesisDeployment;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
