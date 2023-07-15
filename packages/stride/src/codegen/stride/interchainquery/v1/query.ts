import { Query, QuerySDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
export interface QueryPendingQueriesRequest {}
export interface QueryPendingQueriesRequestSDKType {}
export interface QueryPendingQueriesResponse {
  pendingQueries: Query[];
}
export interface QueryPendingQueriesResponseSDKType {
  pending_queries: QuerySDKType[];
}
function createBaseQueryPendingQueriesRequest(): QueryPendingQueriesRequest {
  return {};
}
export const QueryPendingQueriesRequest = {
  encode(_: QueryPendingQueriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryPendingQueriesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPendingQueriesRequest>): QueryPendingQueriesRequest {
    const message = createBaseQueryPendingQueriesRequest();
    return message;
  }
};
function createBaseQueryPendingQueriesResponse(): QueryPendingQueriesResponse {
  return {
    pendingQueries: []
  };
}
export const QueryPendingQueriesResponse = {
  encode(message: QueryPendingQueriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};