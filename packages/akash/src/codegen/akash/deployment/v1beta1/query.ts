import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType, Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
function createBaseQueryDeploymentsRequest(): QueryDeploymentsRequest {
  return {
    filters: undefined,
    pagination: undefined
  };
}
export const QueryDeploymentsRequest = {
  encode(message: QueryDeploymentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filters !== undefined) {
      DeploymentFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDeploymentsRequest {
    return {
      filters: isSet(object.filters) ? DeploymentFilters.fromJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDeploymentsRequest>): QueryDeploymentsRequest {
    const message = createBaseQueryDeploymentsRequest();
    message.filters = object.filters !== undefined && object.filters !== null ? DeploymentFilters.fromPartial(object.filters) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDeploymentsResponse(): QueryDeploymentsResponse {
  return {
    deployments: [],
    pagination: undefined
  };
}
export const QueryDeploymentsResponse = {
  encode(message: QueryDeploymentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deployments) {
      QueryDeploymentResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDeploymentsResponse {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => QueryDeploymentResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDeploymentsResponse>): QueryDeploymentsResponse {
    const message = createBaseQueryDeploymentsResponse();
    message.deployments = object.deployments?.map(e => QueryDeploymentResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDeploymentRequest(): QueryDeploymentRequest {
  return {
    id: undefined
  };
}
export const QueryDeploymentRequest = {
  encode(message: QueryDeploymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDeploymentRequest {
    return {
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined
    };
  },
  fromPartial(object: Partial<QueryDeploymentRequest>): QueryDeploymentRequest {
    const message = createBaseQueryDeploymentRequest();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  }
};
function createBaseQueryDeploymentResponse(): QueryDeploymentResponse {
  return {
    deployment: undefined,
    groups: [],
    escrowAccount: undefined
  };
}
export const QueryDeploymentResponse = {
  encode(message: QueryDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDeploymentResponse {
    return {
      deployment: isSet(object.deployment) ? Deployment.fromJSON(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
      escrowAccount: isSet(object.escrowAccount) ? Account.fromJSON(object.escrowAccount) : undefined
    };
  },
  fromPartial(object: Partial<QueryDeploymentResponse>): QueryDeploymentResponse {
    const message = createBaseQueryDeploymentResponse();
    message.deployment = object.deployment !== undefined && object.deployment !== null ? Deployment.fromPartial(object.deployment) : undefined;
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    message.escrowAccount = object.escrowAccount !== undefined && object.escrowAccount !== null ? Account.fromPartial(object.escrowAccount) : undefined;
    return message;
  }
};
function createBaseQueryGroupRequest(): QueryGroupRequest {
  return {
    id: undefined
  };
}
export const QueryGroupRequest = {
  encode(message: QueryGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupRequest {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupRequest>): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  }
};
function createBaseQueryGroupResponse(): QueryGroupResponse {
  return {
    group: undefined
  };
}
export const QueryGroupResponse = {
  encode(message: QueryGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupResponse {
    return {
      group: isSet(object.group) ? Group.fromJSON(object.group) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupResponse>): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    message.group = object.group !== undefined && object.group !== null ? Group.fromPartial(object.group) : undefined;
    return message;
  }
};