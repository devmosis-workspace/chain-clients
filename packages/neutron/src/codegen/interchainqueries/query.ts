import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { RegisteredQuery, RegisteredQuerySDKType } from "./genesis";
import { QueryResult, QueryResultSDKType } from "./tx";
import { Long, isSet, bytesFromBase64 } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryRegisteredQueriesRequest {
  owners: string[];
  connectionId: string;
  pagination?: PageRequest;
}
export interface QueryRegisteredQueriesRequestSDKType {
  owners: string[];
  connection_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryRegisteredQueriesResponse {
  registeredQueries: RegisteredQuery[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryRegisteredQueriesResponseSDKType {
  registered_queries: RegisteredQuerySDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryRegisteredQueryRequest {
  queryId: Long;
}
export interface QueryRegisteredQueryRequestSDKType {
  query_id: Long;
}
export interface QueryRegisteredQueryResponse {
  registeredQuery?: RegisteredQuery;
}
export interface QueryRegisteredQueryResponseSDKType {
  registered_query?: RegisteredQuerySDKType;
}
export interface QueryRegisteredQueryResultRequest {
  queryId: Long;
}
export interface QueryRegisteredQueryResultRequestSDKType {
  query_id: Long;
}
export interface QueryRegisteredQueryResultResponse {
  result?: QueryResult;
}
export interface QueryRegisteredQueryResultResponseSDKType {
  result?: QueryResultSDKType;
}
export interface Transaction {
  id: Long;
  height: Long;
  data: Uint8Array;
}
export interface TransactionSDKType {
  id: Long;
  height: Long;
  data: Uint8Array;
}
export interface QueryLastRemoteHeight {
  connectionId: string;
}
export interface QueryLastRemoteHeightSDKType {
  connection_id: string;
}
export interface QueryLastRemoteHeightResponse {
  height: Long;
}
export interface QueryLastRemoteHeightResponseSDKType {
  height: Long;
}
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
function createBaseQueryRegisteredQueriesRequest(): QueryRegisteredQueriesRequest {
  return {
    owners: [],
    connectionId: "",
    pagination: undefined
  };
}
export const QueryRegisteredQueriesRequest = {
  encode(message: QueryRegisteredQueriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.owners) {
      writer.uint32(10).string(v!);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRegisteredQueriesRequest {
    return {
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => String(e)) : [],
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryRegisteredQueriesRequest>): QueryRegisteredQueriesRequest {
    const message = createBaseQueryRegisteredQueriesRequest();
    message.owners = object.owners?.map(e => e) || [];
    message.connectionId = object.connectionId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRegisteredQueriesResponse(): QueryRegisteredQueriesResponse {
  return {
    registeredQueries: [],
    pagination: undefined
  };
}
export const QueryRegisteredQueriesResponse = {
  encode(message: QueryRegisteredQueriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.registeredQueries) {
      RegisteredQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRegisteredQueriesResponse {
    return {
      registeredQueries: Array.isArray(object?.registeredQueries) ? object.registeredQueries.map((e: any) => RegisteredQuery.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryRegisteredQueriesResponse>): QueryRegisteredQueriesResponse {
    const message = createBaseQueryRegisteredQueriesResponse();
    message.registeredQueries = object.registeredQueries?.map(e => RegisteredQuery.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRegisteredQueryRequest(): QueryRegisteredQueryRequest {
  return {
    queryId: Long.UZERO
  };
}
export const QueryRegisteredQueryRequest = {
  encode(message: QueryRegisteredQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.queryId.isZero()) {
      writer.uint32(8).uint64(message.queryId);
    }
    return writer;
  },
  fromJSON(object: any): QueryRegisteredQueryRequest {
    return {
      queryId: isSet(object.queryId) ? Long.fromValue(object.queryId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryRegisteredQueryRequest>): QueryRegisteredQueryRequest {
    const message = createBaseQueryRegisteredQueryRequest();
    message.queryId = object.queryId !== undefined && object.queryId !== null ? Long.fromValue(object.queryId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryRegisteredQueryResponse(): QueryRegisteredQueryResponse {
  return {
    registeredQuery: undefined
  };
}
export const QueryRegisteredQueryResponse = {
  encode(message: QueryRegisteredQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registeredQuery !== undefined) {
      RegisteredQuery.encode(message.registeredQuery, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRegisteredQueryResponse {
    return {
      registeredQuery: isSet(object.registeredQuery) ? RegisteredQuery.fromJSON(object.registeredQuery) : undefined
    };
  },
  fromPartial(object: Partial<QueryRegisteredQueryResponse>): QueryRegisteredQueryResponse {
    const message = createBaseQueryRegisteredQueryResponse();
    message.registeredQuery = object.registeredQuery !== undefined && object.registeredQuery !== null ? RegisteredQuery.fromPartial(object.registeredQuery) : undefined;
    return message;
  }
};
function createBaseQueryRegisteredQueryResultRequest(): QueryRegisteredQueryResultRequest {
  return {
    queryId: Long.UZERO
  };
}
export const QueryRegisteredQueryResultRequest = {
  encode(message: QueryRegisteredQueryResultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.queryId.isZero()) {
      writer.uint32(8).uint64(message.queryId);
    }
    return writer;
  },
  fromJSON(object: any): QueryRegisteredQueryResultRequest {
    return {
      queryId: isSet(object.queryId) ? Long.fromValue(object.queryId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryRegisteredQueryResultRequest>): QueryRegisteredQueryResultRequest {
    const message = createBaseQueryRegisteredQueryResultRequest();
    message.queryId = object.queryId !== undefined && object.queryId !== null ? Long.fromValue(object.queryId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryRegisteredQueryResultResponse(): QueryRegisteredQueryResultResponse {
  return {
    result: undefined
  };
}
export const QueryRegisteredQueryResultResponse = {
  encode(message: QueryRegisteredQueryResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      QueryResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRegisteredQueryResultResponse {
    return {
      result: isSet(object.result) ? QueryResult.fromJSON(object.result) : undefined
    };
  },
  fromPartial(object: Partial<QueryRegisteredQueryResultResponse>): QueryRegisteredQueryResultResponse {
    const message = createBaseQueryRegisteredQueryResultResponse();
    message.result = object.result !== undefined && object.result !== null ? QueryResult.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseTransaction(): Transaction {
  return {
    id: Long.UZERO,
    height: Long.UZERO,
    data: new Uint8Array()
  };
}
export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): Transaction {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Transaction>): Transaction {
    const message = createBaseTransaction();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryLastRemoteHeight(): QueryLastRemoteHeight {
  return {
    connectionId: ""
  };
}
export const QueryLastRemoteHeight = {
  encode(message: QueryLastRemoteHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastRemoteHeight {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  fromPartial(object: Partial<QueryLastRemoteHeight>): QueryLastRemoteHeight {
    const message = createBaseQueryLastRemoteHeight();
    message.connectionId = object.connectionId ?? "";
    return message;
  }
};
function createBaseQueryLastRemoteHeightResponse(): QueryLastRemoteHeightResponse {
  return {
    height: Long.UZERO
  };
}
export const QueryLastRemoteHeightResponse = {
  encode(message: QueryLastRemoteHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastRemoteHeightResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryLastRemoteHeightResponse>): QueryLastRemoteHeightResponse {
    const message = createBaseQueryLastRemoteHeightResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  }
};