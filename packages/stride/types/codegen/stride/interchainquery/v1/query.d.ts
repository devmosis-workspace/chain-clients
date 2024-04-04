import { Query, QueryAmino, QuerySDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
export interface QueryPendingQueriesRequest {
}
export interface QueryPendingQueriesRequestProtoMsg {
    typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
    value: Uint8Array;
}
export interface QueryPendingQueriesRequestAmino {
}
export interface QueryPendingQueriesRequestAminoMsg {
    type: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
    value: QueryPendingQueriesRequestAmino;
}
export interface QueryPendingQueriesRequestSDKType {
}
export interface QueryPendingQueriesResponse {
    pendingQueries: Query[];
}
export interface QueryPendingQueriesResponseProtoMsg {
    typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse";
    value: Uint8Array;
}
export interface QueryPendingQueriesResponseAmino {
    pending_queries?: QueryAmino[];
}
export interface QueryPendingQueriesResponseAminoMsg {
    type: "/stride.interchainquery.v1.QueryPendingQueriesResponse";
    value: QueryPendingQueriesResponseAmino;
}
export interface QueryPendingQueriesResponseSDKType {
    pending_queries: QuerySDKType[];
}
export declare const QueryPendingQueriesRequest: {
    typeUrl: string;
    encode(_: QueryPendingQueriesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPendingQueriesRequest;
    fromPartial(_: Partial<QueryPendingQueriesRequest>): QueryPendingQueriesRequest;
    fromAmino(_: QueryPendingQueriesRequestAmino): QueryPendingQueriesRequest;
    toAmino(_: QueryPendingQueriesRequest): QueryPendingQueriesRequestAmino;
    fromAminoMsg(object: QueryPendingQueriesRequestAminoMsg): QueryPendingQueriesRequest;
    fromProtoMsg(message: QueryPendingQueriesRequestProtoMsg): QueryPendingQueriesRequest;
    toProto(message: QueryPendingQueriesRequest): Uint8Array;
    toProtoMsg(message: QueryPendingQueriesRequest): QueryPendingQueriesRequestProtoMsg;
};
export declare const QueryPendingQueriesResponse: {
    typeUrl: string;
    encode(message: QueryPendingQueriesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPendingQueriesResponse;
    fromPartial(object: Partial<QueryPendingQueriesResponse>): QueryPendingQueriesResponse;
    fromAmino(object: QueryPendingQueriesResponseAmino): QueryPendingQueriesResponse;
    toAmino(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseAmino;
    fromAminoMsg(object: QueryPendingQueriesResponseAminoMsg): QueryPendingQueriesResponse;
    fromProtoMsg(message: QueryPendingQueriesResponseProtoMsg): QueryPendingQueriesResponse;
    toProto(message: QueryPendingQueriesResponse): Uint8Array;
    toProtoMsg(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseProtoMsg;
};
