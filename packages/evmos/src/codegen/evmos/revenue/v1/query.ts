import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Revenue, RevenueSDKType } from "./revenue";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryRevenuesRequest is the request type for the Query/Revenues RPC method. */
export interface QueryRevenuesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryRevenuesRequest is the request type for the Query/Revenues RPC method. */
export interface QueryRevenuesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryRevenuesResponse is the response type for the Query/Revenues RPC method. */
export interface QueryRevenuesResponse {
  /** revenues is a slice of all stored Reveneue */
  revenues: Revenue[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryRevenuesResponse is the response type for the Query/Revenues RPC method. */
export interface QueryRevenuesResponseSDKType {
  revenues: RevenueSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryRevenueRequest is the request type for the Query/Revenue RPC method. */
export interface QueryRevenueRequest {
  /** contract_address of a registered contract in hex format */
  contractAddress: string;
}
/** QueryRevenueRequest is the request type for the Query/Revenue RPC method. */
export interface QueryRevenueRequestSDKType {
  contract_address: string;
}
/** QueryRevenueResponse is the response type for the Query/Revenue RPC method. */
export interface QueryRevenueResponse {
  /** revenue is a stored Reveneue for the queried contract */
  revenue?: Revenue;
}
/** QueryRevenueResponse is the response type for the Query/Revenue RPC method. */
export interface QueryRevenueResponseSDKType {
  revenue?: RevenueSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params is the returned revenue parameter */
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/**
 * QueryDeployerRevenuesRequest is the request type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesRequest {
  /** deployer_address in bech32 format */
  deployerAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryDeployerRevenuesRequest is the request type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesRequestSDKType {
  deployer_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDeployerRevenuesResponse is the response type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesResponse {
  /** contract_addresses is the slice of registered contract addresses for a deployer */
  contractAddresses: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryDeployerRevenuesResponse is the response type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesResponseSDKType {
  contract_addresses: string[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryWithdrawerRevenuesRequest is the request type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesRequest {
  /** withdrawer_address in bech32 format */
  withdrawerAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryWithdrawerRevenuesRequest is the request type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesRequestSDKType {
  withdrawer_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryWithdrawerRevenuesResponse is the response type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesResponse {
  /** contract_addresses is the slice of registered contract addresses for a withdrawer */
  contractAddresses: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryWithdrawerRevenuesResponse is the response type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesResponseSDKType {
  contract_addresses: string[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryRevenuesRequest(): QueryRevenuesRequest {
  return {
    pagination: undefined
  };
}
export const QueryRevenuesRequest = {
  encode(message: QueryRevenuesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRevenuesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryRevenuesRequest>): QueryRevenuesRequest {
    const message = createBaseQueryRevenuesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRevenuesResponse(): QueryRevenuesResponse {
  return {
    revenues: [],
    pagination: undefined
  };
}
export const QueryRevenuesResponse = {
  encode(message: QueryRevenuesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.revenues) {
      Revenue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRevenuesResponse {
    return {
      revenues: Array.isArray(object?.revenues) ? object.revenues.map((e: any) => Revenue.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryRevenuesResponse>): QueryRevenuesResponse {
    const message = createBaseQueryRevenuesResponse();
    message.revenues = object.revenues?.map(e => Revenue.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRevenueRequest(): QueryRevenueRequest {
  return {
    contractAddress: ""
  };
}
export const QueryRevenueRequest = {
  encode(message: QueryRevenueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryRevenueRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryRevenueRequest>): QueryRevenueRequest {
    const message = createBaseQueryRevenueRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseQueryRevenueResponse(): QueryRevenueResponse {
  return {
    revenue: undefined
  };
}
export const QueryRevenueResponse = {
  encode(message: QueryRevenueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revenue !== undefined) {
      Revenue.encode(message.revenue, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRevenueResponse {
    return {
      revenue: isSet(object.revenue) ? Revenue.fromJSON(object.revenue) : undefined
    };
  },
  fromPartial(object: Partial<QueryRevenueResponse>): QueryRevenueResponse {
    const message = createBaseQueryRevenueResponse();
    message.revenue = object.revenue !== undefined && object.revenue !== null ? Revenue.fromPartial(object.revenue) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryDeployerRevenuesRequest(): QueryDeployerRevenuesRequest {
  return {
    deployerAddress: "",
    pagination: undefined
  };
}
export const QueryDeployerRevenuesRequest = {
  encode(message: QueryDeployerRevenuesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDeployerRevenuesRequest {
    return {
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDeployerRevenuesRequest>): QueryDeployerRevenuesRequest {
    const message = createBaseQueryDeployerRevenuesRequest();
    message.deployerAddress = object.deployerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDeployerRevenuesResponse(): QueryDeployerRevenuesResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}
export const QueryDeployerRevenuesResponse = {
  encode(message: QueryDeployerRevenuesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDeployerRevenuesResponse {
    return {
      contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDeployerRevenuesResponse>): QueryDeployerRevenuesResponse {
    const message = createBaseQueryDeployerRevenuesResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryWithdrawerRevenuesRequest(): QueryWithdrawerRevenuesRequest {
  return {
    withdrawerAddress: "",
    pagination: undefined
  };
}
export const QueryWithdrawerRevenuesRequest = {
  encode(message: QueryWithdrawerRevenuesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawerAddress !== "") {
      writer.uint32(10).string(message.withdrawerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryWithdrawerRevenuesRequest {
    return {
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryWithdrawerRevenuesRequest>): QueryWithdrawerRevenuesRequest {
    const message = createBaseQueryWithdrawerRevenuesRequest();
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryWithdrawerRevenuesResponse(): QueryWithdrawerRevenuesResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}
export const QueryWithdrawerRevenuesResponse = {
  encode(message: QueryWithdrawerRevenuesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryWithdrawerRevenuesResponse {
    return {
      contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryWithdrawerRevenuesResponse>): QueryWithdrawerRevenuesResponse {
    const message = createBaseQueryWithdrawerRevenuesResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};