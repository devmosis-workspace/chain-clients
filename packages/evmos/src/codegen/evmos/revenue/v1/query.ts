import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Revenue, RevenueAmino, RevenueSDKType } from "./revenue";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryRevenuesRequest is the request type for the Query/Revenues RPC method. */
export interface QueryRevenuesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryRevenuesRequestProtoMsg {
  typeUrl: "/evmos.revenue.v1.QueryRevenuesRequest";
  value: Uint8Array;
}
/** QueryRevenuesRequest is the request type for the Query/Revenues RPC method. */
export interface QueryRevenuesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryRevenuesRequestAminoMsg {
  type: "/evmos.revenue.v1.QueryRevenuesRequest";
  value: QueryRevenuesRequestAmino;
}
/** QueryRevenuesRequest is the request type for the Query/Revenues RPC method. */
export interface QueryRevenuesRequestSDKType {
  pagination: PageRequestSDKType;
}
/** QueryRevenuesResponse is the response type for the Query/Revenues RPC method. */
export interface QueryRevenuesResponse {
  /** revenues is a slice of all stored Reveneue */
  revenues: Revenue[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryRevenuesResponseProtoMsg {
  typeUrl: "/evmos.revenue.v1.QueryRevenuesResponse";
  value: Uint8Array;
}
/** QueryRevenuesResponse is the response type for the Query/Revenues RPC method. */
export interface QueryRevenuesResponseAmino {
  /** revenues is a slice of all stored Reveneue */
  revenues: RevenueAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryRevenuesResponseAminoMsg {
  type: "/evmos.revenue.v1.QueryRevenuesResponse";
  value: QueryRevenuesResponseAmino;
}
/** QueryRevenuesResponse is the response type for the Query/Revenues RPC method. */
export interface QueryRevenuesResponseSDKType {
  revenues: RevenueSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryRevenueRequest is the request type for the Query/Revenue RPC method. */
export interface QueryRevenueRequest {
  /** contract_address of a registered contract in hex format */
  contractAddress: string;
}
export interface QueryRevenueRequestProtoMsg {
  typeUrl: "/evmos.revenue.v1.QueryRevenueRequest";
  value: Uint8Array;
}
/** QueryRevenueRequest is the request type for the Query/Revenue RPC method. */
export interface QueryRevenueRequestAmino {
  /** contract_address of a registered contract in hex format */
  contract_address: string;
}
export interface QueryRevenueRequestAminoMsg {
  type: "/evmos.revenue.v1.QueryRevenueRequest";
  value: QueryRevenueRequestAmino;
}
/** QueryRevenueRequest is the request type for the Query/Revenue RPC method. */
export interface QueryRevenueRequestSDKType {
  contract_address: string;
}
/** QueryRevenueResponse is the response type for the Query/Revenue RPC method. */
export interface QueryRevenueResponse {
  /** revenue is a stored Reveneue for the queried contract */
  revenue: Revenue;
}
export interface QueryRevenueResponseProtoMsg {
  typeUrl: "/evmos.revenue.v1.QueryRevenueResponse";
  value: Uint8Array;
}
/** QueryRevenueResponse is the response type for the Query/Revenue RPC method. */
export interface QueryRevenueResponseAmino {
  /** revenue is a stored Reveneue for the queried contract */
  revenue?: RevenueAmino;
}
export interface QueryRevenueResponseAminoMsg {
  type: "/evmos.revenue.v1.QueryRevenueResponse";
  value: QueryRevenueResponseAmino;
}
/** QueryRevenueResponse is the response type for the Query/Revenue RPC method. */
export interface QueryRevenueResponseSDKType {
  revenue: RevenueSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/evmos.revenue.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/evmos.revenue.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params is the returned revenue parameter */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/evmos.revenue.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params is the returned revenue parameter */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/evmos.revenue.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryDeployerRevenuesRequest is the request type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesRequest {
  /** deployer_address in bech32 format */
  deployerAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryDeployerRevenuesRequestProtoMsg {
  typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesRequest";
  value: Uint8Array;
}
/**
 * QueryDeployerRevenuesRequest is the request type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesRequestAmino {
  /** deployer_address in bech32 format */
  deployer_address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDeployerRevenuesRequestAminoMsg {
  type: "/evmos.revenue.v1.QueryDeployerRevenuesRequest";
  value: QueryDeployerRevenuesRequestAmino;
}
/**
 * QueryDeployerRevenuesRequest is the request type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesRequestSDKType {
  deployer_address: string;
  pagination: PageRequestSDKType;
}
/**
 * QueryDeployerRevenuesResponse is the response type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesResponse {
  /** contract_addresses is the slice of registered contract addresses for a deployer */
  contractAddresses: string[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryDeployerRevenuesResponseProtoMsg {
  typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesResponse";
  value: Uint8Array;
}
/**
 * QueryDeployerRevenuesResponse is the response type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesResponseAmino {
  /** contract_addresses is the slice of registered contract addresses for a deployer */
  contract_addresses: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDeployerRevenuesResponseAminoMsg {
  type: "/evmos.revenue.v1.QueryDeployerRevenuesResponse";
  value: QueryDeployerRevenuesResponseAmino;
}
/**
 * QueryDeployerRevenuesResponse is the response type for the
 * Query/DeployerRevenues RPC method.
 */
export interface QueryDeployerRevenuesResponseSDKType {
  contract_addresses: string[];
  pagination: PageResponseSDKType;
}
/**
 * QueryWithdrawerRevenuesRequest is the request type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesRequest {
  /** withdrawer_address in bech32 format */
  withdrawerAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryWithdrawerRevenuesRequestProtoMsg {
  typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesRequest";
  value: Uint8Array;
}
/**
 * QueryWithdrawerRevenuesRequest is the request type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesRequestAmino {
  /** withdrawer_address in bech32 format */
  withdrawer_address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryWithdrawerRevenuesRequestAminoMsg {
  type: "/evmos.revenue.v1.QueryWithdrawerRevenuesRequest";
  value: QueryWithdrawerRevenuesRequestAmino;
}
/**
 * QueryWithdrawerRevenuesRequest is the request type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesRequestSDKType {
  withdrawer_address: string;
  pagination: PageRequestSDKType;
}
/**
 * QueryWithdrawerRevenuesResponse is the response type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesResponse {
  /** contract_addresses is the slice of registered contract addresses for a withdrawer */
  contractAddresses: string[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryWithdrawerRevenuesResponseProtoMsg {
  typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesResponse";
  value: Uint8Array;
}
/**
 * QueryWithdrawerRevenuesResponse is the response type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesResponseAmino {
  /** contract_addresses is the slice of registered contract addresses for a withdrawer */
  contract_addresses: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryWithdrawerRevenuesResponseAminoMsg {
  type: "/evmos.revenue.v1.QueryWithdrawerRevenuesResponse";
  value: QueryWithdrawerRevenuesResponseAmino;
}
/**
 * QueryWithdrawerRevenuesResponse is the response type for the
 * Query/WithdrawerRevenues RPC method.
 */
export interface QueryWithdrawerRevenuesResponseSDKType {
  contract_addresses: string[];
  pagination: PageResponseSDKType;
}
function createBaseQueryRevenuesRequest(): QueryRevenuesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryRevenuesRequest = {
  typeUrl: "/evmos.revenue.v1.QueryRevenuesRequest",
  encode(message: QueryRevenuesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRevenuesRequestAmino): QueryRevenuesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryRevenuesRequest): QueryRevenuesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRevenuesRequestAminoMsg): QueryRevenuesRequest {
    return QueryRevenuesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRevenuesRequestProtoMsg): QueryRevenuesRequest {
    return QueryRevenuesRequest.decode(message.value);
  },
  toProto(message: QueryRevenuesRequest): Uint8Array {
    return QueryRevenuesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRevenuesRequest): QueryRevenuesRequestProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.QueryRevenuesRequest",
      value: QueryRevenuesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRevenuesResponse(): QueryRevenuesResponse {
  return {
    revenues: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryRevenuesResponse = {
  typeUrl: "/evmos.revenue.v1.QueryRevenuesResponse",
  encode(message: QueryRevenuesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRevenuesResponseAmino): QueryRevenuesResponse {
    return {
      revenues: Array.isArray(object?.revenues) ? object.revenues.map((e: any) => Revenue.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryRevenuesResponse): QueryRevenuesResponseAmino {
    const obj: any = {};
    if (message.revenues) {
      obj.revenues = message.revenues.map(e => e ? Revenue.toAmino(e) : undefined);
    } else {
      obj.revenues = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRevenuesResponseAminoMsg): QueryRevenuesResponse {
    return QueryRevenuesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRevenuesResponseProtoMsg): QueryRevenuesResponse {
    return QueryRevenuesResponse.decode(message.value);
  },
  toProto(message: QueryRevenuesResponse): Uint8Array {
    return QueryRevenuesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRevenuesResponse): QueryRevenuesResponseProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.QueryRevenuesResponse",
      value: QueryRevenuesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRevenueRequest(): QueryRevenueRequest {
  return {
    contractAddress: ""
  };
}
export const QueryRevenueRequest = {
  typeUrl: "/evmos.revenue.v1.QueryRevenueRequest",
  encode(message: QueryRevenueRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRevenueRequestAmino): QueryRevenueRequest {
    return {
      contractAddress: object.contract_address
    };
  },
  toAmino(message: QueryRevenueRequest): QueryRevenueRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryRevenueRequestAminoMsg): QueryRevenueRequest {
    return QueryRevenueRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRevenueRequestProtoMsg): QueryRevenueRequest {
    return QueryRevenueRequest.decode(message.value);
  },
  toProto(message: QueryRevenueRequest): Uint8Array {
    return QueryRevenueRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRevenueRequest): QueryRevenueRequestProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.QueryRevenueRequest",
      value: QueryRevenueRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRevenueResponse(): QueryRevenueResponse {
  return {
    revenue: Revenue.fromPartial({})
  };
}
export const QueryRevenueResponse = {
  typeUrl: "/evmos.revenue.v1.QueryRevenueResponse",
  encode(message: QueryRevenueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRevenueResponseAmino): QueryRevenueResponse {
    return {
      revenue: object?.revenue ? Revenue.fromAmino(object.revenue) : undefined
    };
  },
  toAmino(message: QueryRevenueResponse): QueryRevenueResponseAmino {
    const obj: any = {};
    obj.revenue = message.revenue ? Revenue.toAmino(message.revenue) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRevenueResponseAminoMsg): QueryRevenueResponse {
    return QueryRevenueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRevenueResponseProtoMsg): QueryRevenueResponse {
    return QueryRevenueResponse.decode(message.value);
  },
  toProto(message: QueryRevenueResponse): Uint8Array {
    return QueryRevenueResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRevenueResponse): QueryRevenueResponseProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.QueryRevenueResponse",
      value: QueryRevenueResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/evmos.revenue.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/evmos.revenue.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDeployerRevenuesRequest(): QueryDeployerRevenuesRequest {
  return {
    deployerAddress: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDeployerRevenuesRequest = {
  typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesRequest",
  encode(message: QueryDeployerRevenuesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDeployerRevenuesRequestAmino): QueryDeployerRevenuesRequest {
    return {
      deployerAddress: object.deployer_address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDeployerRevenuesRequest): QueryDeployerRevenuesRequestAmino {
    const obj: any = {};
    obj.deployer_address = message.deployerAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeployerRevenuesRequestAminoMsg): QueryDeployerRevenuesRequest {
    return QueryDeployerRevenuesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeployerRevenuesRequestProtoMsg): QueryDeployerRevenuesRequest {
    return QueryDeployerRevenuesRequest.decode(message.value);
  },
  toProto(message: QueryDeployerRevenuesRequest): Uint8Array {
    return QueryDeployerRevenuesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeployerRevenuesRequest): QueryDeployerRevenuesRequestProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesRequest",
      value: QueryDeployerRevenuesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDeployerRevenuesResponse(): QueryDeployerRevenuesResponse {
  return {
    contractAddresses: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDeployerRevenuesResponse = {
  typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesResponse",
  encode(message: QueryDeployerRevenuesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDeployerRevenuesResponseAmino): QueryDeployerRevenuesResponse {
    return {
      contractAddresses: Array.isArray(object?.contract_addresses) ? object.contract_addresses.map((e: any) => e) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDeployerRevenuesResponse): QueryDeployerRevenuesResponseAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeployerRevenuesResponseAminoMsg): QueryDeployerRevenuesResponse {
    return QueryDeployerRevenuesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeployerRevenuesResponseProtoMsg): QueryDeployerRevenuesResponse {
    return QueryDeployerRevenuesResponse.decode(message.value);
  },
  toProto(message: QueryDeployerRevenuesResponse): Uint8Array {
    return QueryDeployerRevenuesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeployerRevenuesResponse): QueryDeployerRevenuesResponseProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesResponse",
      value: QueryDeployerRevenuesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawerRevenuesRequest(): QueryWithdrawerRevenuesRequest {
  return {
    withdrawerAddress: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryWithdrawerRevenuesRequest = {
  typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesRequest",
  encode(message: QueryWithdrawerRevenuesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryWithdrawerRevenuesRequestAmino): QueryWithdrawerRevenuesRequest {
    return {
      withdrawerAddress: object.withdrawer_address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryWithdrawerRevenuesRequest): QueryWithdrawerRevenuesRequestAmino {
    const obj: any = {};
    obj.withdrawer_address = message.withdrawerAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawerRevenuesRequestAminoMsg): QueryWithdrawerRevenuesRequest {
    return QueryWithdrawerRevenuesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawerRevenuesRequestProtoMsg): QueryWithdrawerRevenuesRequest {
    return QueryWithdrawerRevenuesRequest.decode(message.value);
  },
  toProto(message: QueryWithdrawerRevenuesRequest): Uint8Array {
    return QueryWithdrawerRevenuesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawerRevenuesRequest): QueryWithdrawerRevenuesRequestProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesRequest",
      value: QueryWithdrawerRevenuesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawerRevenuesResponse(): QueryWithdrawerRevenuesResponse {
  return {
    contractAddresses: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryWithdrawerRevenuesResponse = {
  typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesResponse",
  encode(message: QueryWithdrawerRevenuesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryWithdrawerRevenuesResponseAmino): QueryWithdrawerRevenuesResponse {
    return {
      contractAddresses: Array.isArray(object?.contract_addresses) ? object.contract_addresses.map((e: any) => e) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryWithdrawerRevenuesResponse): QueryWithdrawerRevenuesResponseAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawerRevenuesResponseAminoMsg): QueryWithdrawerRevenuesResponse {
    return QueryWithdrawerRevenuesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawerRevenuesResponseProtoMsg): QueryWithdrawerRevenuesResponse {
    return QueryWithdrawerRevenuesResponse.decode(message.value);
  },
  toProto(message: QueryWithdrawerRevenuesResponse): Uint8Array {
    return QueryWithdrawerRevenuesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawerRevenuesResponse): QueryWithdrawerRevenuesResponseProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesResponse",
      value: QueryWithdrawerRevenuesResponse.encode(message).finish()
    };
  }
};