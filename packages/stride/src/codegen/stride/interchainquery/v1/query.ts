import { Query, QueryAmino, QuerySDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
export interface QueryPendingQueriesRequest {}
export interface QueryPendingQueriesRequestProtoMsg {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
  value: Uint8Array;
}
export interface QueryPendingQueriesRequestAmino {}
export interface QueryPendingQueriesRequestAminoMsg {
  type: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
  value: QueryPendingQueriesRequestAmino;
}
export interface QueryPendingQueriesRequestSDKType {}
export interface QueryPendingQueriesResponse {
  pendingQueries: Query[];
}
export interface QueryPendingQueriesResponseProtoMsg {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse";
  value: Uint8Array;
}
export interface QueryPendingQueriesResponseAmino {
  pending_queries: QueryAmino[];
}
export interface QueryPendingQueriesResponseAminoMsg {
  type: "/stride.interchainquery.v1.QueryPendingQueriesResponse";
  value: QueryPendingQueriesResponseAmino;
}
export interface QueryPendingQueriesResponseSDKType {
  pending_queries: QuerySDKType[];
}
function createBaseQueryPendingQueriesRequest(): QueryPendingQueriesRequest {
  return {};
}
export const QueryPendingQueriesRequest = {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest",
  encode(_: QueryPendingQueriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryPendingQueriesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPendingQueriesRequest>): QueryPendingQueriesRequest {
    const message = createBaseQueryPendingQueriesRequest();
    return message;
  },
  fromAmino(_: QueryPendingQueriesRequestAmino): QueryPendingQueriesRequest {
    return {};
  },
  toAmino(_: QueryPendingQueriesRequest): QueryPendingQueriesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPendingQueriesRequestAminoMsg): QueryPendingQueriesRequest {
    return QueryPendingQueriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingQueriesRequestProtoMsg): QueryPendingQueriesRequest {
    return QueryPendingQueriesRequest.decode(message.value);
  },
  toProto(message: QueryPendingQueriesRequest): Uint8Array {
    return QueryPendingQueriesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingQueriesRequest): QueryPendingQueriesRequestProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest",
      value: QueryPendingQueriesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingQueriesResponse(): QueryPendingQueriesResponse {
  return {
    pendingQueries: []
  };
}
export const QueryPendingQueriesResponse = {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse",
  encode(message: QueryPendingQueriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pendingQueries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPendingQueriesResponse {
    return {
      pendingQueries: Array.isArray(object?.pendingQueries) ? object.pendingQueries.map((e: any) => Query.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPendingQueriesResponse>): QueryPendingQueriesResponse {
    const message = createBaseQueryPendingQueriesResponse();
    message.pendingQueries = object.pendingQueries?.map(e => Query.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPendingQueriesResponseAmino): QueryPendingQueriesResponse {
    return {
      pendingQueries: Array.isArray(object?.pending_queries) ? object.pending_queries.map((e: any) => Query.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseAmino {
    const obj: any = {};
    if (message.pendingQueries) {
      obj.pending_queries = message.pendingQueries.map(e => e ? Query.toAmino(e) : undefined);
    } else {
      obj.pending_queries = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingQueriesResponseAminoMsg): QueryPendingQueriesResponse {
    return QueryPendingQueriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingQueriesResponseProtoMsg): QueryPendingQueriesResponse {
    return QueryPendingQueriesResponse.decode(message.value);
  },
  toProto(message: QueryPendingQueriesResponse): Uint8Array {
    return QueryPendingQueriesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse",
      value: QueryPendingQueriesResponse.encode(message).finish()
    };
  }
};