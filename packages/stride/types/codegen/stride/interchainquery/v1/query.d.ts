import { Query, QuerySDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
export interface QueryPendingQueriesRequest {
}
export interface QueryPendingQueriesRequestSDKType {
}
export interface QueryPendingQueriesResponse {
    pendingQueries: Query[];
}
export interface QueryPendingQueriesResponseSDKType {
    pending_queries: QuerySDKType[];
}
export declare const QueryPendingQueriesRequest: {
    encode(_: QueryPendingQueriesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryPendingQueriesRequest;
    fromPartial(_: Partial<QueryPendingQueriesRequest>): QueryPendingQueriesRequest;
};
export declare const QueryPendingQueriesResponse: {
    encode(message: QueryPendingQueriesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPendingQueriesResponse;
    fromPartial(object: Partial<QueryPendingQueriesResponse>): QueryPendingQueriesResponse;
};
