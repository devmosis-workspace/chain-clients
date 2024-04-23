import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Cork, CorkAmino, CorkSDKType, ScheduledCork, ScheduledCorkAmino, ScheduledCorkSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cork.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/cork.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponse {
    /** allocation parameters */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cork.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseAmino {
    /** allocation parameters */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/cork.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequest {
}
export interface QuerySubmittedCorksRequestProtoMsg {
    typeUrl: "/cork.v1.QuerySubmittedCorksRequest";
    value: Uint8Array;
}
/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequestAmino {
}
export interface QuerySubmittedCorksRequestAminoMsg {
    type: "/cork.v1.QuerySubmittedCorksRequest";
    value: QuerySubmittedCorksRequestAmino;
}
/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequestSDKType {
}
/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponse {
    /** corks in keeper awaiting vote */
    corks: Cork[];
}
export interface QuerySubmittedCorksResponseProtoMsg {
    typeUrl: "/cork.v1.QuerySubmittedCorksResponse";
    value: Uint8Array;
}
/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponseAmino {
    /** corks in keeper awaiting vote */
    corks: CorkAmino[];
}
export interface QuerySubmittedCorksResponseAminoMsg {
    type: "/cork.v1.QuerySubmittedCorksResponse";
    value: QuerySubmittedCorksResponseAmino;
}
/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponseSDKType {
    corks: CorkSDKType[];
}
/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequest {
}
export interface QueryCommitPeriodRequestProtoMsg {
    typeUrl: "/cork.v1.QueryCommitPeriodRequest";
    value: Uint8Array;
}
/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequestAmino {
}
export interface QueryCommitPeriodRequestAminoMsg {
    type: "/cork.v1.QueryCommitPeriodRequest";
    value: QueryCommitPeriodRequestAmino;
}
/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequestSDKType {
}
/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponse {
    /** block height at which the query was processed */
    currentHeight: bigint;
    /** latest vote period start block height */
    votePeriodStart: bigint;
    /** block height at which the current voting period ends */
    votePeriodEnd: bigint;
}
export interface QueryCommitPeriodResponseProtoMsg {
    typeUrl: "/cork.v1.QueryCommitPeriodResponse";
    value: Uint8Array;
}
/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponseAmino {
    /** block height at which the query was processed */
    current_height: string;
    /** latest vote period start block height */
    vote_period_start: string;
    /** block height at which the current voting period ends */
    vote_period_end: string;
}
export interface QueryCommitPeriodResponseAminoMsg {
    type: "/cork.v1.QueryCommitPeriodResponse";
    value: QueryCommitPeriodResponseAmino;
}
/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponseSDKType {
    current_height: bigint;
    vote_period_start: bigint;
    vote_period_end: bigint;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequest {
}
export interface QueryCellarIDsRequestProtoMsg {
    typeUrl: "/cork.v1.QueryCellarIDsRequest";
    value: Uint8Array;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestAmino {
}
export interface QueryCellarIDsRequestAminoMsg {
    type: "/cork.v1.QueryCellarIDsRequest";
    value: QueryCellarIDsRequestAmino;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestSDKType {
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponse {
    cellarIds: string[];
}
export interface QueryCellarIDsResponseProtoMsg {
    typeUrl: "/cork.v1.QueryCellarIDsResponse";
    value: Uint8Array;
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponseAmino {
    cellar_ids: string[];
}
export interface QueryCellarIDsResponseAminoMsg {
    type: "/cork.v1.QueryCellarIDsResponse";
    value: QueryCellarIDsResponseAmino;
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponseSDKType {
    cellar_ids: string[];
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequest {
}
export interface QueryScheduledCorksRequestProtoMsg {
    typeUrl: "/cork.v1.QueryScheduledCorksRequest";
    value: Uint8Array;
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequestAmino {
}
export interface QueryScheduledCorksRequestAminoMsg {
    type: "/cork.v1.QueryScheduledCorksRequest";
    value: QueryScheduledCorksRequestAmino;
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequestSDKType {
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponse {
    corks: ScheduledCork[];
}
export interface QueryScheduledCorksResponseProtoMsg {
    typeUrl: "/cork.v1.QueryScheduledCorksResponse";
    value: Uint8Array;
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponseAmino {
    corks: ScheduledCorkAmino[];
}
export interface QueryScheduledCorksResponseAminoMsg {
    type: "/cork.v1.QueryScheduledCorksResponse";
    value: QueryScheduledCorksResponseAmino;
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponseSDKType {
    corks: ScheduledCorkSDKType[];
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequest {
}
export interface QueryScheduledBlockHeightsRequestProtoMsg {
    typeUrl: "/cork.v1.QueryScheduledBlockHeightsRequest";
    value: Uint8Array;
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequestAmino {
}
export interface QueryScheduledBlockHeightsRequestAminoMsg {
    type: "/cork.v1.QueryScheduledBlockHeightsRequest";
    value: QueryScheduledBlockHeightsRequestAmino;
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequestSDKType {
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponse {
    blockHeights: bigint[];
}
export interface QueryScheduledBlockHeightsResponseProtoMsg {
    typeUrl: "/cork.v1.QueryScheduledBlockHeightsResponse";
    value: Uint8Array;
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponseAmino {
    block_heights: string[];
}
export interface QueryScheduledBlockHeightsResponseAminoMsg {
    type: "/cork.v1.QueryScheduledBlockHeightsResponse";
    value: QueryScheduledBlockHeightsResponseAmino;
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponseSDKType {
    block_heights: bigint[];
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequest {
    blockHeight: bigint;
}
export interface QueryScheduledCorksByBlockHeightRequestProtoMsg {
    typeUrl: "/cork.v1.QueryScheduledCorksByBlockHeightRequest";
    value: Uint8Array;
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequestAmino {
    block_height: string;
}
export interface QueryScheduledCorksByBlockHeightRequestAminoMsg {
    type: "/cork.v1.QueryScheduledCorksByBlockHeightRequest";
    value: QueryScheduledCorksByBlockHeightRequestAmino;
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequestSDKType {
    block_height: bigint;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponse {
    corks: ScheduledCork[];
}
export interface QueryScheduledCorksByBlockHeightResponseProtoMsg {
    typeUrl: "/cork.v1.QueryScheduledCorksByBlockHeightResponse";
    value: Uint8Array;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseAmino {
    corks: ScheduledCorkAmino[];
}
export interface QueryScheduledCorksByBlockHeightResponseAminoMsg {
    type: "/cork.v1.QueryScheduledCorksByBlockHeightResponse";
    value: QueryScheduledCorksByBlockHeightResponseAmino;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseSDKType {
    corks: ScheduledCorkSDKType[];
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
export declare const QuerySubmittedCorksRequest: {
    typeUrl: string;
    encode(_: QuerySubmittedCorksRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QuerySubmittedCorksRequest;
    fromPartial(_: Partial<QuerySubmittedCorksRequest>): QuerySubmittedCorksRequest;
    fromAmino(_: QuerySubmittedCorksRequestAmino): QuerySubmittedCorksRequest;
    toAmino(_: QuerySubmittedCorksRequest): QuerySubmittedCorksRequestAmino;
    fromAminoMsg(object: QuerySubmittedCorksRequestAminoMsg): QuerySubmittedCorksRequest;
    fromProtoMsg(message: QuerySubmittedCorksRequestProtoMsg): QuerySubmittedCorksRequest;
    toProto(message: QuerySubmittedCorksRequest): Uint8Array;
    toProtoMsg(message: QuerySubmittedCorksRequest): QuerySubmittedCorksRequestProtoMsg;
};
export declare const QuerySubmittedCorksResponse: {
    typeUrl: string;
    encode(message: QuerySubmittedCorksResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubmittedCorksResponse;
    fromPartial(object: Partial<QuerySubmittedCorksResponse>): QuerySubmittedCorksResponse;
    fromAmino(object: QuerySubmittedCorksResponseAmino): QuerySubmittedCorksResponse;
    toAmino(message: QuerySubmittedCorksResponse): QuerySubmittedCorksResponseAmino;
    fromAminoMsg(object: QuerySubmittedCorksResponseAminoMsg): QuerySubmittedCorksResponse;
    fromProtoMsg(message: QuerySubmittedCorksResponseProtoMsg): QuerySubmittedCorksResponse;
    toProto(message: QuerySubmittedCorksResponse): Uint8Array;
    toProtoMsg(message: QuerySubmittedCorksResponse): QuerySubmittedCorksResponseProtoMsg;
};
export declare const QueryCommitPeriodRequest: {
    typeUrl: string;
    encode(_: QueryCommitPeriodRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCommitPeriodRequest;
    fromPartial(_: Partial<QueryCommitPeriodRequest>): QueryCommitPeriodRequest;
    fromAmino(_: QueryCommitPeriodRequestAmino): QueryCommitPeriodRequest;
    toAmino(_: QueryCommitPeriodRequest): QueryCommitPeriodRequestAmino;
    fromAminoMsg(object: QueryCommitPeriodRequestAminoMsg): QueryCommitPeriodRequest;
    fromProtoMsg(message: QueryCommitPeriodRequestProtoMsg): QueryCommitPeriodRequest;
    toProto(message: QueryCommitPeriodRequest): Uint8Array;
    toProtoMsg(message: QueryCommitPeriodRequest): QueryCommitPeriodRequestProtoMsg;
};
export declare const QueryCommitPeriodResponse: {
    typeUrl: string;
    encode(message: QueryCommitPeriodResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCommitPeriodResponse;
    fromPartial(object: Partial<QueryCommitPeriodResponse>): QueryCommitPeriodResponse;
    fromAmino(object: QueryCommitPeriodResponseAmino): QueryCommitPeriodResponse;
    toAmino(message: QueryCommitPeriodResponse): QueryCommitPeriodResponseAmino;
    fromAminoMsg(object: QueryCommitPeriodResponseAminoMsg): QueryCommitPeriodResponse;
    fromProtoMsg(message: QueryCommitPeriodResponseProtoMsg): QueryCommitPeriodResponse;
    toProto(message: QueryCommitPeriodResponse): Uint8Array;
    toProtoMsg(message: QueryCommitPeriodResponse): QueryCommitPeriodResponseProtoMsg;
};
export declare const QueryCellarIDsRequest: {
    typeUrl: string;
    encode(_: QueryCellarIDsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCellarIDsRequest;
    fromPartial(_: Partial<QueryCellarIDsRequest>): QueryCellarIDsRequest;
    fromAmino(_: QueryCellarIDsRequestAmino): QueryCellarIDsRequest;
    toAmino(_: QueryCellarIDsRequest): QueryCellarIDsRequestAmino;
    fromAminoMsg(object: QueryCellarIDsRequestAminoMsg): QueryCellarIDsRequest;
    fromProtoMsg(message: QueryCellarIDsRequestProtoMsg): QueryCellarIDsRequest;
    toProto(message: QueryCellarIDsRequest): Uint8Array;
    toProtoMsg(message: QueryCellarIDsRequest): QueryCellarIDsRequestProtoMsg;
};
export declare const QueryCellarIDsResponse: {
    typeUrl: string;
    encode(message: QueryCellarIDsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCellarIDsResponse;
    fromPartial(object: Partial<QueryCellarIDsResponse>): QueryCellarIDsResponse;
    fromAmino(object: QueryCellarIDsResponseAmino): QueryCellarIDsResponse;
    toAmino(message: QueryCellarIDsResponse): QueryCellarIDsResponseAmino;
    fromAminoMsg(object: QueryCellarIDsResponseAminoMsg): QueryCellarIDsResponse;
    fromProtoMsg(message: QueryCellarIDsResponseProtoMsg): QueryCellarIDsResponse;
    toProto(message: QueryCellarIDsResponse): Uint8Array;
    toProtoMsg(message: QueryCellarIDsResponse): QueryCellarIDsResponseProtoMsg;
};
export declare const QueryScheduledCorksRequest: {
    typeUrl: string;
    encode(_: QueryScheduledCorksRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryScheduledCorksRequest;
    fromPartial(_: Partial<QueryScheduledCorksRequest>): QueryScheduledCorksRequest;
    fromAmino(_: QueryScheduledCorksRequestAmino): QueryScheduledCorksRequest;
    toAmino(_: QueryScheduledCorksRequest): QueryScheduledCorksRequestAmino;
    fromAminoMsg(object: QueryScheduledCorksRequestAminoMsg): QueryScheduledCorksRequest;
    fromProtoMsg(message: QueryScheduledCorksRequestProtoMsg): QueryScheduledCorksRequest;
    toProto(message: QueryScheduledCorksRequest): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksRequest): QueryScheduledCorksRequestProtoMsg;
};
export declare const QueryScheduledCorksResponse: {
    typeUrl: string;
    encode(message: QueryScheduledCorksResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledCorksResponse;
    fromPartial(object: Partial<QueryScheduledCorksResponse>): QueryScheduledCorksResponse;
    fromAmino(object: QueryScheduledCorksResponseAmino): QueryScheduledCorksResponse;
    toAmino(message: QueryScheduledCorksResponse): QueryScheduledCorksResponseAmino;
    fromAminoMsg(object: QueryScheduledCorksResponseAminoMsg): QueryScheduledCorksResponse;
    fromProtoMsg(message: QueryScheduledCorksResponseProtoMsg): QueryScheduledCorksResponse;
    toProto(message: QueryScheduledCorksResponse): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksResponse): QueryScheduledCorksResponseProtoMsg;
};
export declare const QueryScheduledBlockHeightsRequest: {
    typeUrl: string;
    encode(_: QueryScheduledBlockHeightsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryScheduledBlockHeightsRequest;
    fromPartial(_: Partial<QueryScheduledBlockHeightsRequest>): QueryScheduledBlockHeightsRequest;
    fromAmino(_: QueryScheduledBlockHeightsRequestAmino): QueryScheduledBlockHeightsRequest;
    toAmino(_: QueryScheduledBlockHeightsRequest): QueryScheduledBlockHeightsRequestAmino;
    fromAminoMsg(object: QueryScheduledBlockHeightsRequestAminoMsg): QueryScheduledBlockHeightsRequest;
    fromProtoMsg(message: QueryScheduledBlockHeightsRequestProtoMsg): QueryScheduledBlockHeightsRequest;
    toProto(message: QueryScheduledBlockHeightsRequest): Uint8Array;
    toProtoMsg(message: QueryScheduledBlockHeightsRequest): QueryScheduledBlockHeightsRequestProtoMsg;
};
export declare const QueryScheduledBlockHeightsResponse: {
    typeUrl: string;
    encode(message: QueryScheduledBlockHeightsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledBlockHeightsResponse;
    fromPartial(object: Partial<QueryScheduledBlockHeightsResponse>): QueryScheduledBlockHeightsResponse;
    fromAmino(object: QueryScheduledBlockHeightsResponseAmino): QueryScheduledBlockHeightsResponse;
    toAmino(message: QueryScheduledBlockHeightsResponse): QueryScheduledBlockHeightsResponseAmino;
    fromAminoMsg(object: QueryScheduledBlockHeightsResponseAminoMsg): QueryScheduledBlockHeightsResponse;
    fromProtoMsg(message: QueryScheduledBlockHeightsResponseProtoMsg): QueryScheduledBlockHeightsResponse;
    toProto(message: QueryScheduledBlockHeightsResponse): Uint8Array;
    toProtoMsg(message: QueryScheduledBlockHeightsResponse): QueryScheduledBlockHeightsResponseProtoMsg;
};
export declare const QueryScheduledCorksByBlockHeightRequest: {
    typeUrl: string;
    encode(message: QueryScheduledCorksByBlockHeightRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledCorksByBlockHeightRequest;
    fromPartial(object: Partial<QueryScheduledCorksByBlockHeightRequest>): QueryScheduledCorksByBlockHeightRequest;
    fromAmino(object: QueryScheduledCorksByBlockHeightRequestAmino): QueryScheduledCorksByBlockHeightRequest;
    toAmino(message: QueryScheduledCorksByBlockHeightRequest): QueryScheduledCorksByBlockHeightRequestAmino;
    fromAminoMsg(object: QueryScheduledCorksByBlockHeightRequestAminoMsg): QueryScheduledCorksByBlockHeightRequest;
    fromProtoMsg(message: QueryScheduledCorksByBlockHeightRequestProtoMsg): QueryScheduledCorksByBlockHeightRequest;
    toProto(message: QueryScheduledCorksByBlockHeightRequest): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksByBlockHeightRequest): QueryScheduledCorksByBlockHeightRequestProtoMsg;
};
export declare const QueryScheduledCorksByBlockHeightResponse: {
    typeUrl: string;
    encode(message: QueryScheduledCorksByBlockHeightResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledCorksByBlockHeightResponse;
    fromPartial(object: Partial<QueryScheduledCorksByBlockHeightResponse>): QueryScheduledCorksByBlockHeightResponse;
    fromAmino(object: QueryScheduledCorksByBlockHeightResponseAmino): QueryScheduledCorksByBlockHeightResponse;
    toAmino(message: QueryScheduledCorksByBlockHeightResponse): QueryScheduledCorksByBlockHeightResponseAmino;
    fromAminoMsg(object: QueryScheduledCorksByBlockHeightResponseAminoMsg): QueryScheduledCorksByBlockHeightResponse;
    fromProtoMsg(message: QueryScheduledCorksByBlockHeightResponseProtoMsg): QueryScheduledCorksByBlockHeightResponse;
    toProto(message: QueryScheduledCorksByBlockHeightResponse): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksByBlockHeightResponse): QueryScheduledCorksByBlockHeightResponseProtoMsg;
};
