import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairAmino, TokenPairSDKType } from "./erc20";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryTokenPairsRequestProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairsRequest";
  value: Uint8Array;
}
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryTokenPairsRequestAminoMsg {
  type: "/evmos.erc20.v1.QueryTokenPairsRequest";
  value: QueryTokenPairsRequestAmino;
}
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequestSDKType {
  pagination: PageRequestSDKType;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponse {
  /** token_pairs is a slice of registered token pairs for the erc20 module */
  tokenPairs: TokenPair[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryTokenPairsResponseProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairsResponse";
  value: Uint8Array;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponseAmino {
  /** token_pairs is a slice of registered token pairs for the erc20 module */
  token_pairs: TokenPairAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryTokenPairsResponseAminoMsg {
  type: "/evmos.erc20.v1.QueryTokenPairsResponse";
  value: QueryTokenPairsResponseAmino;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponseSDKType {
  token_pairs: TokenPairSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequest {
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}
export interface QueryTokenPairRequestProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairRequest";
  value: Uint8Array;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequestAmino {
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}
export interface QueryTokenPairRequestAminoMsg {
  type: "/evmos.erc20.v1.QueryTokenPairRequest";
  value: QueryTokenPairRequestAmino;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequestSDKType {
  token: string;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponse {
  /** token_pairs returns the info about a registered token pair for the erc20 module */
  tokenPair: TokenPair;
}
export interface QueryTokenPairResponseProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairResponse";
  value: Uint8Array;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponseAmino {
  /** token_pairs returns the info about a registered token pair for the erc20 module */
  token_pair?: TokenPairAmino;
}
export interface QueryTokenPairResponseAminoMsg {
  type: "/evmos.erc20.v1.QueryTokenPairResponse";
  value: QueryTokenPairResponseAmino;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponseSDKType {
  token_pair: TokenPairSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/evmos.erc20.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  /** params are the erc20 module parameters */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseAmino {
  /** params are the erc20 module parameters */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/evmos.erc20.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryTokenPairsRequest(): QueryTokenPairsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryTokenPairsRequest = {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairsRequest",
  encode(message: QueryTokenPairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenPairsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryTokenPairsRequest>): QueryTokenPairsRequest {
    const message = createBaseQueryTokenPairsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenPairsRequestAmino): QueryTokenPairsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryTokenPairsRequest): QueryTokenPairsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairsRequestAminoMsg): QueryTokenPairsRequest {
    return QueryTokenPairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairsRequestProtoMsg): QueryTokenPairsRequest {
    return QueryTokenPairsRequest.decode(message.value);
  },
  toProto(message: QueryTokenPairsRequest): Uint8Array {
    return QueryTokenPairsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairsRequest): QueryTokenPairsRequestProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.QueryTokenPairsRequest",
      value: QueryTokenPairsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPairsResponse(): QueryTokenPairsResponse {
  return {
    tokenPairs: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryTokenPairsResponse = {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairsResponse",
  encode(message: QueryTokenPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenPairsResponse {
    return {
      tokenPairs: Array.isArray(object?.tokenPairs) ? object.tokenPairs.map((e: any) => TokenPair.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryTokenPairsResponse>): QueryTokenPairsResponse {
    const message = createBaseQueryTokenPairsResponse();
    message.tokenPairs = object.tokenPairs?.map(e => TokenPair.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenPairsResponseAmino): QueryTokenPairsResponse {
    return {
      tokenPairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e: any) => TokenPair.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryTokenPairsResponse): QueryTokenPairsResponseAmino {
    const obj: any = {};
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toAmino(e) : undefined);
    } else {
      obj.token_pairs = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairsResponseAminoMsg): QueryTokenPairsResponse {
    return QueryTokenPairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairsResponseProtoMsg): QueryTokenPairsResponse {
    return QueryTokenPairsResponse.decode(message.value);
  },
  toProto(message: QueryTokenPairsResponse): Uint8Array {
    return QueryTokenPairsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairsResponse): QueryTokenPairsResponseProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.QueryTokenPairsResponse",
      value: QueryTokenPairsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPairRequest(): QueryTokenPairRequest {
  return {
    token: ""
  };
}
export const QueryTokenPairRequest = {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairRequest",
  encode(message: QueryTokenPairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenPairRequest {
    return {
      token: isSet(object.token) ? String(object.token) : ""
    };
  },
  fromPartial(object: Partial<QueryTokenPairRequest>): QueryTokenPairRequest {
    const message = createBaseQueryTokenPairRequest();
    message.token = object.token ?? "";
    return message;
  },
  fromAmino(object: QueryTokenPairRequestAmino): QueryTokenPairRequest {
    return {
      token: object.token
    };
  },
  toAmino(message: QueryTokenPairRequest): QueryTokenPairRequestAmino {
    const obj: any = {};
    obj.token = message.token;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairRequestAminoMsg): QueryTokenPairRequest {
    return QueryTokenPairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairRequestProtoMsg): QueryTokenPairRequest {
    return QueryTokenPairRequest.decode(message.value);
  },
  toProto(message: QueryTokenPairRequest): Uint8Array {
    return QueryTokenPairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairRequest): QueryTokenPairRequestProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.QueryTokenPairRequest",
      value: QueryTokenPairRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPairResponse(): QueryTokenPairResponse {
  return {
    tokenPair: TokenPair.fromPartial({})
  };
}
export const QueryTokenPairResponse = {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairResponse",
  encode(message: QueryTokenPairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenPair !== undefined) {
      TokenPair.encode(message.tokenPair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenPairResponse {
    return {
      tokenPair: isSet(object.tokenPair) ? TokenPair.fromJSON(object.tokenPair) : undefined
    };
  },
  fromPartial(object: Partial<QueryTokenPairResponse>): QueryTokenPairResponse {
    const message = createBaseQueryTokenPairResponse();
    message.tokenPair = object.tokenPair !== undefined && object.tokenPair !== null ? TokenPair.fromPartial(object.tokenPair) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenPairResponseAmino): QueryTokenPairResponse {
    return {
      tokenPair: object?.token_pair ? TokenPair.fromAmino(object.token_pair) : undefined
    };
  },
  toAmino(message: QueryTokenPairResponse): QueryTokenPairResponseAmino {
    const obj: any = {};
    obj.token_pair = message.tokenPair ? TokenPair.toAmino(message.tokenPair) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairResponseAminoMsg): QueryTokenPairResponse {
    return QueryTokenPairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairResponseProtoMsg): QueryTokenPairResponse {
    return QueryTokenPairResponse.decode(message.value);
  },
  toProto(message: QueryTokenPairResponse): Uint8Array {
    return QueryTokenPairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairResponse): QueryTokenPairResponseProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.QueryTokenPairResponse",
      value: QueryTokenPairResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/evmos.erc20.v1.QueryParamsRequest",
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
      typeUrl: "/evmos.erc20.v1.QueryParamsRequest",
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
  typeUrl: "/evmos.erc20.v1.QueryParamsResponse",
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
      typeUrl: "/evmos.erc20.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};