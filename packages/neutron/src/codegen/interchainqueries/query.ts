import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { RegisteredQuery, RegisteredQueryAmino, RegisteredQuerySDKType } from "./genesis";
import { QueryResult, QueryResultAmino, QueryResultSDKType } from "./tx";
import { BinaryWriter } from "../binary";
import { isSet, bytesFromBase64 } from "../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/neutron.interchainqueries.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/neutron.interchainqueries.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/neutron.interchainqueries.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/neutron.interchainqueries.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryRegisteredQueriesRequest {
  owners: string[];
  connectionId: string;
  pagination: PageRequest;
}
export interface QueryRegisteredQueriesRequestProtoMsg {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesRequest";
  value: Uint8Array;
}
export interface QueryRegisteredQueriesRequestAmino {
  owners: string[];
  connection_id: string;
  pagination?: PageRequestAmino;
}
export interface QueryRegisteredQueriesRequestAminoMsg {
  type: "/neutron.interchainqueries.QueryRegisteredQueriesRequest";
  value: QueryRegisteredQueriesRequestAmino;
}
export interface QueryRegisteredQueriesRequestSDKType {
  owners: string[];
  connection_id: string;
  pagination: PageRequestSDKType;
}
export interface QueryRegisteredQueriesResponse {
  registeredQueries: RegisteredQuery[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryRegisteredQueriesResponseProtoMsg {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesResponse";
  value: Uint8Array;
}
export interface QueryRegisteredQueriesResponseAmino {
  registered_queries: RegisteredQueryAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryRegisteredQueriesResponseAminoMsg {
  type: "/neutron.interchainqueries.QueryRegisteredQueriesResponse";
  value: QueryRegisteredQueriesResponseAmino;
}
export interface QueryRegisteredQueriesResponseSDKType {
  registered_queries: RegisteredQuerySDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryRegisteredQueryRequest {
  queryId: bigint;
}
export interface QueryRegisteredQueryRequestProtoMsg {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryRequest";
  value: Uint8Array;
}
export interface QueryRegisteredQueryRequestAmino {
  query_id: string;
}
export interface QueryRegisteredQueryRequestAminoMsg {
  type: "/neutron.interchainqueries.QueryRegisteredQueryRequest";
  value: QueryRegisteredQueryRequestAmino;
}
export interface QueryRegisteredQueryRequestSDKType {
  query_id: bigint;
}
export interface QueryRegisteredQueryResponse {
  registeredQuery: RegisteredQuery;
}
export interface QueryRegisteredQueryResponseProtoMsg {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResponse";
  value: Uint8Array;
}
export interface QueryRegisteredQueryResponseAmino {
  registered_query?: RegisteredQueryAmino;
}
export interface QueryRegisteredQueryResponseAminoMsg {
  type: "/neutron.interchainqueries.QueryRegisteredQueryResponse";
  value: QueryRegisteredQueryResponseAmino;
}
export interface QueryRegisteredQueryResponseSDKType {
  registered_query: RegisteredQuerySDKType;
}
export interface QueryRegisteredQueryResultRequest {
  queryId: bigint;
}
export interface QueryRegisteredQueryResultRequestProtoMsg {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResultRequest";
  value: Uint8Array;
}
export interface QueryRegisteredQueryResultRequestAmino {
  query_id: string;
}
export interface QueryRegisteredQueryResultRequestAminoMsg {
  type: "/neutron.interchainqueries.QueryRegisteredQueryResultRequest";
  value: QueryRegisteredQueryResultRequestAmino;
}
export interface QueryRegisteredQueryResultRequestSDKType {
  query_id: bigint;
}
export interface QueryRegisteredQueryResultResponse {
  result: QueryResult;
}
export interface QueryRegisteredQueryResultResponseProtoMsg {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResultResponse";
  value: Uint8Array;
}
export interface QueryRegisteredQueryResultResponseAmino {
  result?: QueryResultAmino;
}
export interface QueryRegisteredQueryResultResponseAminoMsg {
  type: "/neutron.interchainqueries.QueryRegisteredQueryResultResponse";
  value: QueryRegisteredQueryResultResponseAmino;
}
export interface QueryRegisteredQueryResultResponseSDKType {
  result: QueryResultSDKType;
}
export interface Transaction {
  id: bigint;
  height: bigint;
  data: Uint8Array;
}
export interface TransactionProtoMsg {
  typeUrl: "/neutron.interchainqueries.Transaction";
  value: Uint8Array;
}
export interface TransactionAmino {
  id: string;
  height: string;
  data: Uint8Array;
}
export interface TransactionAminoMsg {
  type: "/neutron.interchainqueries.Transaction";
  value: TransactionAmino;
}
export interface TransactionSDKType {
  id: bigint;
  height: bigint;
  data: Uint8Array;
}
export interface QueryLastRemoteHeight {
  connectionId: string;
}
export interface QueryLastRemoteHeightProtoMsg {
  typeUrl: "/neutron.interchainqueries.QueryLastRemoteHeight";
  value: Uint8Array;
}
export interface QueryLastRemoteHeightAmino {
  connection_id: string;
}
export interface QueryLastRemoteHeightAminoMsg {
  type: "/neutron.interchainqueries.QueryLastRemoteHeight";
  value: QueryLastRemoteHeightAmino;
}
export interface QueryLastRemoteHeightSDKType {
  connection_id: string;
}
export interface QueryLastRemoteHeightResponse {
  height: bigint;
}
export interface QueryLastRemoteHeightResponseProtoMsg {
  typeUrl: "/neutron.interchainqueries.QueryLastRemoteHeightResponse";
  value: Uint8Array;
}
export interface QueryLastRemoteHeightResponseAmino {
  height: string;
}
export interface QueryLastRemoteHeightResponseAminoMsg {
  type: "/neutron.interchainqueries.QueryLastRemoteHeightResponse";
  value: QueryLastRemoteHeightResponseAmino;
}
export interface QueryLastRemoteHeightResponseSDKType {
  height: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.interchainqueries.QueryParamsRequest",
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
      typeUrl: "/neutron.interchainqueries.QueryParamsRequest",
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
  typeUrl: "/neutron.interchainqueries.QueryParamsResponse",
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
      typeUrl: "/neutron.interchainqueries.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredQueriesRequest(): QueryRegisteredQueriesRequest {
  return {
    owners: [],
    connectionId: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryRegisteredQueriesRequest = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesRequest",
  encode(message: QueryRegisteredQueriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRegisteredQueriesRequestAmino): QueryRegisteredQueriesRequest {
    return {
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => e) : [],
      connectionId: object.connection_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryRegisteredQueriesRequest): QueryRegisteredQueriesRequestAmino {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map(e => e);
    } else {
      obj.owners = [];
    }
    obj.connection_id = message.connectionId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueriesRequestAminoMsg): QueryRegisteredQueriesRequest {
    return QueryRegisteredQueriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredQueriesRequestProtoMsg): QueryRegisteredQueriesRequest {
    return QueryRegisteredQueriesRequest.decode(message.value);
  },
  toProto(message: QueryRegisteredQueriesRequest): Uint8Array {
    return QueryRegisteredQueriesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredQueriesRequest): QueryRegisteredQueriesRequestProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesRequest",
      value: QueryRegisteredQueriesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredQueriesResponse(): QueryRegisteredQueriesResponse {
  return {
    registeredQueries: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryRegisteredQueriesResponse = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesResponse",
  encode(message: QueryRegisteredQueriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRegisteredQueriesResponseAmino): QueryRegisteredQueriesResponse {
    return {
      registeredQueries: Array.isArray(object?.registered_queries) ? object.registered_queries.map((e: any) => RegisteredQuery.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryRegisteredQueriesResponse): QueryRegisteredQueriesResponseAmino {
    const obj: any = {};
    if (message.registeredQueries) {
      obj.registered_queries = message.registeredQueries.map(e => e ? RegisteredQuery.toAmino(e) : undefined);
    } else {
      obj.registered_queries = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueriesResponseAminoMsg): QueryRegisteredQueriesResponse {
    return QueryRegisteredQueriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredQueriesResponseProtoMsg): QueryRegisteredQueriesResponse {
    return QueryRegisteredQueriesResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredQueriesResponse): Uint8Array {
    return QueryRegisteredQueriesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredQueriesResponse): QueryRegisteredQueriesResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesResponse",
      value: QueryRegisteredQueriesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredQueryRequest(): QueryRegisteredQueryRequest {
  return {
    queryId: BigInt(0)
  };
}
export const QueryRegisteredQueryRequest = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryRequest",
  encode(message: QueryRegisteredQueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.queryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.queryId);
    }
    return writer;
  },
  fromJSON(object: any): QueryRegisteredQueryRequest {
    return {
      queryId: isSet(object.queryId) ? BigInt(object.queryId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryRegisteredQueryRequest>): QueryRegisteredQueryRequest {
    const message = createBaseQueryRegisteredQueryRequest();
    message.queryId = object.queryId !== undefined && object.queryId !== null ? BigInt(object.queryId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRegisteredQueryRequestAmino): QueryRegisteredQueryRequest {
    return {
      queryId: BigInt(object.query_id)
    };
  },
  toAmino(message: QueryRegisteredQueryRequest): QueryRegisteredQueryRequestAmino {
    const obj: any = {};
    obj.query_id = message.queryId ? message.queryId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueryRequestAminoMsg): QueryRegisteredQueryRequest {
    return QueryRegisteredQueryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredQueryRequestProtoMsg): QueryRegisteredQueryRequest {
    return QueryRegisteredQueryRequest.decode(message.value);
  },
  toProto(message: QueryRegisteredQueryRequest): Uint8Array {
    return QueryRegisteredQueryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredQueryRequest): QueryRegisteredQueryRequestProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryRequest",
      value: QueryRegisteredQueryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredQueryResponse(): QueryRegisteredQueryResponse {
  return {
    registeredQuery: RegisteredQuery.fromPartial({})
  };
}
export const QueryRegisteredQueryResponse = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResponse",
  encode(message: QueryRegisteredQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRegisteredQueryResponseAmino): QueryRegisteredQueryResponse {
    return {
      registeredQuery: object?.registered_query ? RegisteredQuery.fromAmino(object.registered_query) : undefined
    };
  },
  toAmino(message: QueryRegisteredQueryResponse): QueryRegisteredQueryResponseAmino {
    const obj: any = {};
    obj.registered_query = message.registeredQuery ? RegisteredQuery.toAmino(message.registeredQuery) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueryResponseAminoMsg): QueryRegisteredQueryResponse {
    return QueryRegisteredQueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredQueryResponseProtoMsg): QueryRegisteredQueryResponse {
    return QueryRegisteredQueryResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredQueryResponse): Uint8Array {
    return QueryRegisteredQueryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredQueryResponse): QueryRegisteredQueryResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResponse",
      value: QueryRegisteredQueryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredQueryResultRequest(): QueryRegisteredQueryResultRequest {
  return {
    queryId: BigInt(0)
  };
}
export const QueryRegisteredQueryResultRequest = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResultRequest",
  encode(message: QueryRegisteredQueryResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.queryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.queryId);
    }
    return writer;
  },
  fromJSON(object: any): QueryRegisteredQueryResultRequest {
    return {
      queryId: isSet(object.queryId) ? BigInt(object.queryId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryRegisteredQueryResultRequest>): QueryRegisteredQueryResultRequest {
    const message = createBaseQueryRegisteredQueryResultRequest();
    message.queryId = object.queryId !== undefined && object.queryId !== null ? BigInt(object.queryId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRegisteredQueryResultRequestAmino): QueryRegisteredQueryResultRequest {
    return {
      queryId: BigInt(object.query_id)
    };
  },
  toAmino(message: QueryRegisteredQueryResultRequest): QueryRegisteredQueryResultRequestAmino {
    const obj: any = {};
    obj.query_id = message.queryId ? message.queryId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueryResultRequestAminoMsg): QueryRegisteredQueryResultRequest {
    return QueryRegisteredQueryResultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredQueryResultRequestProtoMsg): QueryRegisteredQueryResultRequest {
    return QueryRegisteredQueryResultRequest.decode(message.value);
  },
  toProto(message: QueryRegisteredQueryResultRequest): Uint8Array {
    return QueryRegisteredQueryResultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredQueryResultRequest): QueryRegisteredQueryResultRequestProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResultRequest",
      value: QueryRegisteredQueryResultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredQueryResultResponse(): QueryRegisteredQueryResultResponse {
  return {
    result: QueryResult.fromPartial({})
  };
}
export const QueryRegisteredQueryResultResponse = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResultResponse",
  encode(message: QueryRegisteredQueryResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRegisteredQueryResultResponseAmino): QueryRegisteredQueryResultResponse {
    return {
      result: object?.result ? QueryResult.fromAmino(object.result) : undefined
    };
  },
  toAmino(message: QueryRegisteredQueryResultResponse): QueryRegisteredQueryResultResponseAmino {
    const obj: any = {};
    obj.result = message.result ? QueryResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueryResultResponseAminoMsg): QueryRegisteredQueryResultResponse {
    return QueryRegisteredQueryResultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredQueryResultResponseProtoMsg): QueryRegisteredQueryResultResponse {
    return QueryRegisteredQueryResultResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredQueryResultResponse): Uint8Array {
    return QueryRegisteredQueryResultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredQueryResultResponse): QueryRegisteredQueryResultResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResultResponse",
      value: QueryRegisteredQueryResultResponse.encode(message).finish()
    };
  }
};
function createBaseTransaction(): Transaction {
  return {
    id: BigInt(0),
    height: BigInt(0),
    data: new Uint8Array()
  };
}
export const Transaction = {
  typeUrl: "/neutron.interchainqueries.Transaction",
  encode(message: Transaction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): Transaction {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Transaction>): Transaction {
    const message = createBaseTransaction();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TransactionAmino): Transaction {
    return {
      id: BigInt(object.id),
      height: BigInt(object.height),
      data: object.data
    };
  },
  toAmino(message: Transaction): TransactionAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: TransactionAminoMsg): Transaction {
    return Transaction.fromAmino(object.value);
  },
  fromProtoMsg(message: TransactionProtoMsg): Transaction {
    return Transaction.decode(message.value);
  },
  toProto(message: Transaction): Uint8Array {
    return Transaction.encode(message).finish();
  },
  toProtoMsg(message: Transaction): TransactionProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.Transaction",
      value: Transaction.encode(message).finish()
    };
  }
};
function createBaseQueryLastRemoteHeight(): QueryLastRemoteHeight {
  return {
    connectionId: ""
  };
}
export const QueryLastRemoteHeight = {
  typeUrl: "/neutron.interchainqueries.QueryLastRemoteHeight",
  encode(message: QueryLastRemoteHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryLastRemoteHeightAmino): QueryLastRemoteHeight {
    return {
      connectionId: object.connection_id
    };
  },
  toAmino(message: QueryLastRemoteHeight): QueryLastRemoteHeightAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    return obj;
  },
  fromAminoMsg(object: QueryLastRemoteHeightAminoMsg): QueryLastRemoteHeight {
    return QueryLastRemoteHeight.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastRemoteHeightProtoMsg): QueryLastRemoteHeight {
    return QueryLastRemoteHeight.decode(message.value);
  },
  toProto(message: QueryLastRemoteHeight): Uint8Array {
    return QueryLastRemoteHeight.encode(message).finish();
  },
  toProtoMsg(message: QueryLastRemoteHeight): QueryLastRemoteHeightProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.QueryLastRemoteHeight",
      value: QueryLastRemoteHeight.encode(message).finish()
    };
  }
};
function createBaseQueryLastRemoteHeightResponse(): QueryLastRemoteHeightResponse {
  return {
    height: BigInt(0)
  };
}
export const QueryLastRemoteHeightResponse = {
  typeUrl: "/neutron.interchainqueries.QueryLastRemoteHeightResponse",
  encode(message: QueryLastRemoteHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastRemoteHeightResponse {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryLastRemoteHeightResponse>): QueryLastRemoteHeightResponse {
    const message = createBaseQueryLastRemoteHeightResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLastRemoteHeightResponseAmino): QueryLastRemoteHeightResponse {
    return {
      height: BigInt(object.height)
    };
  },
  toAmino(message: QueryLastRemoteHeightResponse): QueryLastRemoteHeightResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastRemoteHeightResponseAminoMsg): QueryLastRemoteHeightResponse {
    return QueryLastRemoteHeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastRemoteHeightResponseProtoMsg): QueryLastRemoteHeightResponse {
    return QueryLastRemoteHeightResponse.decode(message.value);
  },
  toProto(message: QueryLastRemoteHeightResponse): Uint8Array {
    return QueryLastRemoteHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastRemoteHeightResponse): QueryLastRemoteHeightResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.QueryLastRemoteHeightResponse",
      value: QueryLastRemoteHeightResponse.encode(message).finish()
    };
  }
};