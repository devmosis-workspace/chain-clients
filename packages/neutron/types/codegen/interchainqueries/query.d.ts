import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { RegisteredQuery, RegisteredQuerySDKType } from "./genesis";
import { QueryResult, QueryResultSDKType } from "./tx";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryRegisteredQueriesRequest: {
    encode(message: QueryRegisteredQueriesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRegisteredQueriesRequest;
    fromPartial(object: Partial<QueryRegisteredQueriesRequest>): QueryRegisteredQueriesRequest;
};
export declare const QueryRegisteredQueriesResponse: {
    encode(message: QueryRegisteredQueriesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRegisteredQueriesResponse;
    fromPartial(object: Partial<QueryRegisteredQueriesResponse>): QueryRegisteredQueriesResponse;
};
export declare const QueryRegisteredQueryRequest: {
    encode(message: QueryRegisteredQueryRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRegisteredQueryRequest;
    fromPartial(object: Partial<QueryRegisteredQueryRequest>): QueryRegisteredQueryRequest;
};
export declare const QueryRegisteredQueryResponse: {
    encode(message: QueryRegisteredQueryResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRegisteredQueryResponse;
    fromPartial(object: Partial<QueryRegisteredQueryResponse>): QueryRegisteredQueryResponse;
};
export declare const QueryRegisteredQueryResultRequest: {
    encode(message: QueryRegisteredQueryResultRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRegisteredQueryResultRequest;
    fromPartial(object: Partial<QueryRegisteredQueryResultRequest>): QueryRegisteredQueryResultRequest;
};
export declare const QueryRegisteredQueryResultResponse: {
    encode(message: QueryRegisteredQueryResultResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRegisteredQueryResultResponse;
    fromPartial(object: Partial<QueryRegisteredQueryResultResponse>): QueryRegisteredQueryResultResponse;
};
export declare const Transaction: {
    encode(message: Transaction, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Transaction;
    fromPartial(object: Partial<Transaction>): Transaction;
};
export declare const QueryLastRemoteHeight: {
    encode(message: QueryLastRemoteHeight, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastRemoteHeight;
    fromPartial(object: Partial<QueryLastRemoteHeight>): QueryLastRemoteHeight;
};
export declare const QueryLastRemoteHeightResponse: {
    encode(message: QueryLastRemoteHeightResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastRemoteHeightResponse;
    fromPartial(object: Partial<QueryLastRemoteHeightResponse>): QueryLastRemoteHeightResponse;
};
