import { Deployment, DeploymentSDKType } from "./deployment";
import { Group, GroupSDKType } from "./group";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
function createBaseGenesisDeployment(): GenesisDeployment {
  return {
    deployment: undefined,
    groups: []
  };
}
export const GenesisDeployment = {
  encode(message: GenesisDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisDeployment {
    return {
      deployment: isSet(object.deployment) ? Deployment.fromJSON(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisDeployment>): GenesisDeployment {
    const message = createBaseGenesisDeployment();
    message.deployment = object.deployment !== undefined && object.deployment !== null ? Deployment.fromPartial(object.deployment) : undefined;
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    deployments: [],
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deployments) {
      GenesisDeployment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => GenesisDeployment.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.deployments = object.deployments?.map(e => GenesisDeployment.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};