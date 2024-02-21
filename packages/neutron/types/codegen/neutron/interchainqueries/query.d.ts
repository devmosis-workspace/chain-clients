import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { RegisteredQuery, RegisteredQueryAmino, RegisteredQuerySDKType } from "./genesis";
import { QueryResult, QueryResultAmino, QueryResultSDKType } from "./tx";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/neutron.interchainqueries.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/neutron.interchainqueries.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
    pagination?: PageRequest;
}
export interface QueryRegisteredQueriesRequestProtoMsg {
    typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesRequest";
    value: Uint8Array;
}
export interface QueryRegisteredQueriesRequestAmino {
    owners?: string[];
    connection_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryRegisteredQueriesRequestAminoMsg {
    type: "/neutron.interchainqueries.QueryRegisteredQueriesRequest";
    value: QueryRegisteredQueriesRequestAmino;
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
export interface QueryRegisteredQueriesResponseProtoMsg {
    typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesResponse";
    value: Uint8Array;
}
export interface QueryRegisteredQueriesResponseAmino {
    registered_queries?: RegisteredQueryAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryRegisteredQueriesResponseAminoMsg {
    type: "/neutron.interchainqueries.QueryRegisteredQueriesResponse";
    value: QueryRegisteredQueriesResponseAmino;
}
export interface QueryRegisteredQueriesResponseSDKType {
    registered_queries: RegisteredQuerySDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryRegisteredQueryRequest {
    queryId: bigint;
}
export interface QueryRegisteredQueryRequestProtoMsg {
    typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryRequest";
    value: Uint8Array;
}
export interface QueryRegisteredQueryRequestAmino {
    query_id?: string;
}
export interface QueryRegisteredQueryRequestAminoMsg {
    type: "/neutron.interchainqueries.QueryRegisteredQueryRequest";
    value: QueryRegisteredQueryRequestAmino;
}
export interface QueryRegisteredQueryRequestSDKType {
    query_id: bigint;
}
export interface QueryRegisteredQueryResponse {
    registeredQuery?: RegisteredQuery;
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
    registered_query?: RegisteredQuerySDKType;
}
export interface QueryRegisteredQueryResultRequest {
    queryId: bigint;
}
export interface QueryRegisteredQueryResultRequestProtoMsg {
    typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResultRequest";
    value: Uint8Array;
}
export interface QueryRegisteredQueryResultRequestAmino {
    query_id?: string;
}
export interface QueryRegisteredQueryResultRequestAminoMsg {
    type: "/neutron.interchainqueries.QueryRegisteredQueryResultRequest";
    value: QueryRegisteredQueryResultRequestAmino;
}
export interface QueryRegisteredQueryResultRequestSDKType {
    query_id: bigint;
}
export interface QueryRegisteredQueryResultResponse {
    result?: QueryResult;
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
    result?: QueryResultSDKType;
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
    id?: string;
    height?: string;
    data?: string;
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
    connection_id?: string;
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
    height?: string;
}
export interface QueryLastRemoteHeightResponseAminoMsg {
    type: "/neutron.interchainqueries.QueryLastRemoteHeightResponse";
    value: QueryLastRemoteHeightResponseAmino;
}
export interface QueryLastRemoteHeightResponseSDKType {
    height: bigint;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryRegisteredQueriesRequest: {
    typeUrl: string;
    encode(message: QueryRegisteredQueriesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRegisteredQueriesRequest;
    fromPartial(object: Partial<QueryRegisteredQueriesRequest>): QueryRegisteredQueriesRequest;
    fromAmino(object: QueryRegisteredQueriesRequestAmino): QueryRegisteredQueriesRequest;
    toAmino(message: QueryRegisteredQueriesRequest): QueryRegisteredQueriesRequestAmino;
    fromAminoMsg(object: QueryRegisteredQueriesRequestAminoMsg): QueryRegisteredQueriesRequest;
    fromProtoMsg(message: QueryRegisteredQueriesRequestProtoMsg): QueryRegisteredQueriesRequest;
    toProto(message: QueryRegisteredQueriesRequest): Uint8Array;
    toProtoMsg(message: QueryRegisteredQueriesRequest): QueryRegisteredQueriesRequestProtoMsg;
};
export declare const QueryRegisteredQueriesResponse: {
    typeUrl: string;
    encode(message: QueryRegisteredQueriesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRegisteredQueriesResponse;
    fromPartial(object: Partial<QueryRegisteredQueriesResponse>): QueryRegisteredQueriesResponse;
    fromAmino(object: QueryRegisteredQueriesResponseAmino): QueryRegisteredQueriesResponse;
    toAmino(message: QueryRegisteredQueriesResponse): QueryRegisteredQueriesResponseAmino;
    fromAminoMsg(object: QueryRegisteredQueriesResponseAminoMsg): QueryRegisteredQueriesResponse;
    fromProtoMsg(message: QueryRegisteredQueriesResponseProtoMsg): QueryRegisteredQueriesResponse;
    toProto(message: QueryRegisteredQueriesResponse): Uint8Array;
    toProtoMsg(message: QueryRegisteredQueriesResponse): QueryRegisteredQueriesResponseProtoMsg;
};
export declare const QueryRegisteredQueryRequest: {
    typeUrl: string;
    encode(message: QueryRegisteredQueryRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRegisteredQueryRequest;
    fromPartial(object: Partial<QueryRegisteredQueryRequest>): QueryRegisteredQueryRequest;
    fromAmino(object: QueryRegisteredQueryRequestAmino): QueryRegisteredQueryRequest;
    toAmino(message: QueryRegisteredQueryRequest): QueryRegisteredQueryRequestAmino;
    fromAminoMsg(object: QueryRegisteredQueryRequestAminoMsg): QueryRegisteredQueryRequest;
    fromProtoMsg(message: QueryRegisteredQueryRequestProtoMsg): QueryRegisteredQueryRequest;
    toProto(message: QueryRegisteredQueryRequest): Uint8Array;
    toProtoMsg(message: QueryRegisteredQueryRequest): QueryRegisteredQueryRequestProtoMsg;
};
export declare const QueryRegisteredQueryResponse: {
    typeUrl: string;
    encode(message: QueryRegisteredQueryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRegisteredQueryResponse;
    fromPartial(object: Partial<QueryRegisteredQueryResponse>): QueryRegisteredQueryResponse;
    fromAmino(object: QueryRegisteredQueryResponseAmino): QueryRegisteredQueryResponse;
    toAmino(message: QueryRegisteredQueryResponse): QueryRegisteredQueryResponseAmino;
    fromAminoMsg(object: QueryRegisteredQueryResponseAminoMsg): QueryRegisteredQueryResponse;
    fromProtoMsg(message: QueryRegisteredQueryResponseProtoMsg): QueryRegisteredQueryResponse;
    toProto(message: QueryRegisteredQueryResponse): Uint8Array;
    toProtoMsg(message: QueryRegisteredQueryResponse): QueryRegisteredQueryResponseProtoMsg;
};
export declare const QueryRegisteredQueryResultRequest: {
    typeUrl: string;
    encode(message: QueryRegisteredQueryResultRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRegisteredQueryResultRequest;
    fromPartial(object: Partial<QueryRegisteredQueryResultRequest>): QueryRegisteredQueryResultRequest;
    fromAmino(object: QueryRegisteredQueryResultRequestAmino): QueryRegisteredQueryResultRequest;
    toAmino(message: QueryRegisteredQueryResultRequest): QueryRegisteredQueryResultRequestAmino;
    fromAminoMsg(object: QueryRegisteredQueryResultRequestAminoMsg): QueryRegisteredQueryResultRequest;
    fromProtoMsg(message: QueryRegisteredQueryResultRequestProtoMsg): QueryRegisteredQueryResultRequest;
    toProto(message: QueryRegisteredQueryResultRequest): Uint8Array;
    toProtoMsg(message: QueryRegisteredQueryResultRequest): QueryRegisteredQueryResultRequestProtoMsg;
};
export declare const QueryRegisteredQueryResultResponse: {
    typeUrl: string;
    encode(message: QueryRegisteredQueryResultResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRegisteredQueryResultResponse;
    fromPartial(object: Partial<QueryRegisteredQueryResultResponse>): QueryRegisteredQueryResultResponse;
    fromAmino(object: QueryRegisteredQueryResultResponseAmino): QueryRegisteredQueryResultResponse;
    toAmino(message: QueryRegisteredQueryResultResponse): QueryRegisteredQueryResultResponseAmino;
    fromAminoMsg(object: QueryRegisteredQueryResultResponseAminoMsg): QueryRegisteredQueryResultResponse;
    fromProtoMsg(message: QueryRegisteredQueryResultResponseProtoMsg): QueryRegisteredQueryResultResponse;
    toProto(message: QueryRegisteredQueryResultResponse): Uint8Array;
    toProtoMsg(message: QueryRegisteredQueryResultResponse): QueryRegisteredQueryResultResponseProtoMsg;
};
export declare const Transaction: {
    typeUrl: string;
    encode(message: Transaction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Transaction;
    fromPartial(object: Partial<Transaction>): Transaction;
    fromAmino(object: TransactionAmino): Transaction;
    toAmino(message: Transaction): TransactionAmino;
    fromAminoMsg(object: TransactionAminoMsg): Transaction;
    fromProtoMsg(message: TransactionProtoMsg): Transaction;
    toProto(message: Transaction): Uint8Array;
    toProtoMsg(message: Transaction): TransactionProtoMsg;
};
export declare const QueryLastRemoteHeight: {
    typeUrl: string;
    encode(message: QueryLastRemoteHeight, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastRemoteHeight;
    fromPartial(object: Partial<QueryLastRemoteHeight>): QueryLastRemoteHeight;
    fromAmino(object: QueryLastRemoteHeightAmino): QueryLastRemoteHeight;
    toAmino(message: QueryLastRemoteHeight): QueryLastRemoteHeightAmino;
    fromAminoMsg(object: QueryLastRemoteHeightAminoMsg): QueryLastRemoteHeight;
    fromProtoMsg(message: QueryLastRemoteHeightProtoMsg): QueryLastRemoteHeight;
    toProto(message: QueryLastRemoteHeight): Uint8Array;
    toProtoMsg(message: QueryLastRemoteHeight): QueryLastRemoteHeightProtoMsg;
};
export declare const QueryLastRemoteHeightResponse: {
    typeUrl: string;
    encode(message: QueryLastRemoteHeightResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastRemoteHeightResponse;
    fromPartial(object: Partial<QueryLastRemoteHeightResponse>): QueryLastRemoteHeightResponse;
    fromAmino(object: QueryLastRemoteHeightResponseAmino): QueryLastRemoteHeightResponse;
    toAmino(message: QueryLastRemoteHeightResponse): QueryLastRemoteHeightResponseAmino;
    fromAminoMsg(object: QueryLastRemoteHeightResponseAminoMsg): QueryLastRemoteHeightResponse;
    fromProtoMsg(message: QueryLastRemoteHeightResponseProtoMsg): QueryLastRemoteHeightResponse;
    toProto(message: QueryLastRemoteHeightResponse): Uint8Array;
    toProtoMsg(message: QueryLastRemoteHeightResponse): QueryLastRemoteHeightResponseProtoMsg;
};
