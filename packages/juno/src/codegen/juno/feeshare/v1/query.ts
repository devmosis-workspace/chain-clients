import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FeeShare, FeeShareSDKType } from "./feeshare";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryFeeSharesRequest is the request type for the Query/FeeShares RPC method. */
export interface QueryFeeSharesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryFeeSharesRequest is the request type for the Query/FeeShares RPC method. */
export interface QueryFeeSharesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryFeeSharesResponse is the response type for the Query/FeeShares RPC
 * method.
 */
export interface QueryFeeSharesResponse {
  /** FeeShare is a slice of all stored Reveneue */
  feeshare: FeeShare[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryFeeSharesResponse is the response type for the Query/FeeShares RPC
 * method.
 */
export interface QueryFeeSharesResponseSDKType {
  feeshare: FeeShareSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */
export interface QueryFeeShareRequest {
  /** contract_address of a registered contract in bech32 format */
  contractAddress: string;
}
/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */
export interface QueryFeeShareRequestSDKType {
  contract_address: string;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponse {
  /** FeeShare is a stored Reveneue for the queried contract */
  feeshare?: FeeShare;
}
/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponseSDKType {
  feeshare?: FeeShareSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params is the returned FeeShare parameter */
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/**
 * QueryDeployerFeeSharesRequest is the request type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesRequest {
  /** deployer_address in bech32 format */
  deployerAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryDeployerFeeSharesRequest is the request type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesRequestSDKType {
  deployer_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDeployerFeeSharesResponse is the response type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesResponse {
  /**
   * contract_addresses is the slice of registered contract addresses for a
   * deployer
   */
  contractAddresses: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryDeployerFeeSharesResponse is the response type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesResponseSDKType {
  contract_addresses: string[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryWithdrawerFeeSharesRequest is the request type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesRequest {
  /** withdrawer_address in bech32 format */
  withdrawerAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryWithdrawerFeeSharesRequest is the request type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesRequestSDKType {
  withdrawer_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryWithdrawerFeeSharesResponse is the response type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesResponse {
  /**
   * contract_addresses is the slice of registered contract addresses for a
   * withdrawer
   */
  contractAddresses: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryWithdrawerFeeSharesResponse is the response type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesResponseSDKType {
  contract_addresses: string[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryFeeSharesRequest(): QueryFeeSharesRequest {
  return {
    pagination: undefined
  };
}
export const QueryFeeSharesRequest = {
  encode(message: QueryFeeSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFeeSharesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryFeeSharesRequest>): QueryFeeSharesRequest {
    const message = createBaseQueryFeeSharesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryFeeSharesResponse(): QueryFeeSharesResponse {
  return {
    feeshare: [],
    pagination: undefined
  };
}
export const QueryFeeSharesResponse = {
  encode(message: QueryFeeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeshare) {
      FeeShare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFeeSharesResponse {
    return {
      feeshare: Array.isArray(object?.feeshare) ? object.feeshare.map((e: any) => FeeShare.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryFeeSharesResponse>): QueryFeeSharesResponse {
    const message = createBaseQueryFeeSharesResponse();
    message.feeshare = object.feeshare?.map(e => FeeShare.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryFeeShareRequest(): QueryFeeShareRequest {
  return {
    contractAddress: ""
  };
}
export const QueryFeeShareRequest = {
  encode(message: QueryFeeShareRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryFeeShareRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryFeeShareRequest>): QueryFeeShareRequest {
    const message = createBaseQueryFeeShareRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseQueryFeeShareResponse(): QueryFeeShareResponse {
  return {
    feeshare: undefined
  };
}
export const QueryFeeShareResponse = {
  encode(message: QueryFeeShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeshare !== undefined) {
      FeeShare.encode(message.feeshare, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFeeShareResponse {
    return {
      feeshare: isSet(object.feeshare) ? FeeShare.fromJSON(object.feeshare) : undefined
    };
  },
  fromPartial(object: Partial<QueryFeeShareResponse>): QueryFeeShareResponse {
    const message = createBaseQueryFeeShareResponse();
    message.feeshare = object.feeshare !== undefined && object.feeshare !== null ? FeeShare.fromPartial(object.feeshare) : undefined;
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
function createBaseQueryDeployerFeeSharesRequest(): QueryDeployerFeeSharesRequest {
  return {
    deployerAddress: "",
    pagination: undefined
  };
}
export const QueryDeployerFeeSharesRequest = {
  encode(message: QueryDeployerFeeSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDeployerFeeSharesRequest {
    return {
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDeployerFeeSharesRequest>): QueryDeployerFeeSharesRequest {
    const message = createBaseQueryDeployerFeeSharesRequest();
    message.deployerAddress = object.deployerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDeployerFeeSharesResponse(): QueryDeployerFeeSharesResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}
export const QueryDeployerFeeSharesResponse = {
  encode(message: QueryDeployerFeeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDeployerFeeSharesResponse {
    return {
      contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDeployerFeeSharesResponse>): QueryDeployerFeeSharesResponse {
    const message = createBaseQueryDeployerFeeSharesResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryWithdrawerFeeSharesRequest(): QueryWithdrawerFeeSharesRequest {
  return {
    withdrawerAddress: "",
    pagination: undefined
  };
}
export const QueryWithdrawerFeeSharesRequest = {
  encode(message: QueryWithdrawerFeeSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawerAddress !== "") {
      writer.uint32(10).string(message.withdrawerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryWithdrawerFeeSharesRequest {
    return {
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryWithdrawerFeeSharesRequest>): QueryWithdrawerFeeSharesRequest {
    const message = createBaseQueryWithdrawerFeeSharesRequest();
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryWithdrawerFeeSharesResponse(): QueryWithdrawerFeeSharesResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}
export const QueryWithdrawerFeeSharesResponse = {
  encode(message: QueryWithdrawerFeeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryWithdrawerFeeSharesResponse {
    return {
      contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryWithdrawerFeeSharesResponse>): QueryWithdrawerFeeSharesResponse {
    const message = createBaseQueryWithdrawerFeeSharesResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};