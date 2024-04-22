import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { ScheduledCork, ScheduledCorkAmino, ScheduledCorkSDKType, CorkResult, CorkResultAmino, CorkResultSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cork.v2.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/cork.v2.QueryParamsRequest";
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
    typeUrl: "/cork.v2.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseAmino {
    /** allocation parameters */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/cork.v2.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequest {
}
export interface QueryCellarIDsRequestProtoMsg {
    typeUrl: "/cork.v2.QueryCellarIDsRequest";
    value: Uint8Array;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestAmino {
}
export interface QueryCellarIDsRequestAminoMsg {
    type: "/cork.v2.QueryCellarIDsRequest";
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
    typeUrl: "/cork.v2.QueryCellarIDsResponse";
    value: Uint8Array;
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponseAmino {
    cellar_ids?: string[];
}
export interface QueryCellarIDsResponseAminoMsg {
    type: "/cork.v2.QueryCellarIDsResponse";
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
    typeUrl: "/cork.v2.QueryScheduledCorksRequest";
    value: Uint8Array;
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequestAmino {
}
export interface QueryScheduledCorksRequestAminoMsg {
    type: "/cork.v2.QueryScheduledCorksRequest";
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
    typeUrl: "/cork.v2.QueryScheduledCorksResponse";
    value: Uint8Array;
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponseAmino {
    corks?: ScheduledCorkAmino[];
}
export interface QueryScheduledCorksResponseAminoMsg {
    type: "/cork.v2.QueryScheduledCorksResponse";
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
    typeUrl: "/cork.v2.QueryScheduledBlockHeightsRequest";
    value: Uint8Array;
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequestAmino {
}
export interface QueryScheduledBlockHeightsRequestAminoMsg {
    type: "/cork.v2.QueryScheduledBlockHeightsRequest";
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
    typeUrl: "/cork.v2.QueryScheduledBlockHeightsResponse";
    value: Uint8Array;
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponseAmino {
    block_heights?: string[];
}
export interface QueryScheduledBlockHeightsResponseAminoMsg {
    type: "/cork.v2.QueryScheduledBlockHeightsResponse";
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
    typeUrl: "/cork.v2.QueryScheduledCorksByBlockHeightRequest";
    value: Uint8Array;
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequestAmino {
    block_height?: string;
}
export interface QueryScheduledCorksByBlockHeightRequestAminoMsg {
    type: "/cork.v2.QueryScheduledCorksByBlockHeightRequest";
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
    typeUrl: "/cork.v2.QueryScheduledCorksByBlockHeightResponse";
    value: Uint8Array;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseAmino {
    corks?: ScheduledCorkAmino[];
}
export interface QueryScheduledCorksByBlockHeightResponseAminoMsg {
    type: "/cork.v2.QueryScheduledCorksByBlockHeightResponse";
    value: QueryScheduledCorksByBlockHeightResponseAmino;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseSDKType {
    corks: ScheduledCorkSDKType[];
}
/** QueryScheduledCorksByIDRequest */
export interface QueryScheduledCorksByIDRequest {
    id: string;
}
export interface QueryScheduledCorksByIDRequestProtoMsg {
    typeUrl: "/cork.v2.QueryScheduledCorksByIDRequest";
    value: Uint8Array;
}
/** QueryScheduledCorksByIDRequest */
export interface QueryScheduledCorksByIDRequestAmino {
    id?: string;
}
export interface QueryScheduledCorksByIDRequestAminoMsg {
    type: "/cork.v2.QueryScheduledCorksByIDRequest";
    value: QueryScheduledCorksByIDRequestAmino;
}
/** QueryScheduledCorksByIDRequest */
export interface QueryScheduledCorksByIDRequestSDKType {
    id: string;
}
/** QueryScheduledCorksByIDResponse */
export interface QueryScheduledCorksByIDResponse {
    corks: ScheduledCork[];
}
export interface QueryScheduledCorksByIDResponseProtoMsg {
    typeUrl: "/cork.v2.QueryScheduledCorksByIDResponse";
    value: Uint8Array;
}
/** QueryScheduledCorksByIDResponse */
export interface QueryScheduledCorksByIDResponseAmino {
    corks?: ScheduledCorkAmino[];
}
export interface QueryScheduledCorksByIDResponseAminoMsg {
    type: "/cork.v2.QueryScheduledCorksByIDResponse";
    value: QueryScheduledCorksByIDResponseAmino;
}
/** QueryScheduledCorksByIDResponse */
export interface QueryScheduledCorksByIDResponseSDKType {
    corks: ScheduledCorkSDKType[];
}
export interface QueryCorkResultRequest {
    id: string;
}
export interface QueryCorkResultRequestProtoMsg {
    typeUrl: "/cork.v2.QueryCorkResultRequest";
    value: Uint8Array;
}
export interface QueryCorkResultRequestAmino {
    id?: string;
}
export interface QueryCorkResultRequestAminoMsg {
    type: "/cork.v2.QueryCorkResultRequest";
    value: QueryCorkResultRequestAmino;
}
export interface QueryCorkResultRequestSDKType {
    id: string;
}
export interface QueryCorkResultResponse {
    corkResult?: CorkResult;
}
export interface QueryCorkResultResponseProtoMsg {
    typeUrl: "/cork.v2.QueryCorkResultResponse";
    value: Uint8Array;
}
export interface QueryCorkResultResponseAmino {
    corkResult?: CorkResultAmino;
}
export interface QueryCorkResultResponseAminoMsg {
    type: "/cork.v2.QueryCorkResultResponse";
    value: QueryCorkResultResponseAmino;
}
export interface QueryCorkResultResponseSDKType {
    corkResult?: CorkResultSDKType;
}
export interface QueryCorkResultsRequest {
}
export interface QueryCorkResultsRequestProtoMsg {
    typeUrl: "/cork.v2.QueryCorkResultsRequest";
    value: Uint8Array;
}
export interface QueryCorkResultsRequestAmino {
}
export interface QueryCorkResultsRequestAminoMsg {
    type: "/cork.v2.QueryCorkResultsRequest";
    value: QueryCorkResultsRequestAmino;
}
export interface QueryCorkResultsRequestSDKType {
}
export interface QueryCorkResultsResponse {
    corkResults: CorkResult[];
}
export interface QueryCorkResultsResponseProtoMsg {
    typeUrl: "/cork.v2.QueryCorkResultsResponse";
    value: Uint8Array;
}
export interface QueryCorkResultsResponseAmino {
    corkResults?: CorkResultAmino[];
}
export interface QueryCorkResultsResponseAminoMsg {
    type: "/cork.v2.QueryCorkResultsResponse";
    value: QueryCorkResultsResponseAmino;
}
export interface QueryCorkResultsResponseSDKType {
    corkResults: CorkResultSDKType[];
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
export declare const QueryScheduledCorksByIDRequest: {
    typeUrl: string;
    encode(message: QueryScheduledCorksByIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledCorksByIDRequest;
    fromPartial(object: Partial<QueryScheduledCorksByIDRequest>): QueryScheduledCorksByIDRequest;
    fromAmino(object: QueryScheduledCorksByIDRequestAmino): QueryScheduledCorksByIDRequest;
    toAmino(message: QueryScheduledCorksByIDRequest): QueryScheduledCorksByIDRequestAmino;
    fromAminoMsg(object: QueryScheduledCorksByIDRequestAminoMsg): QueryScheduledCorksByIDRequest;
    fromProtoMsg(message: QueryScheduledCorksByIDRequestProtoMsg): QueryScheduledCorksByIDRequest;
    toProto(message: QueryScheduledCorksByIDRequest): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksByIDRequest): QueryScheduledCorksByIDRequestProtoMsg;
};
export declare const QueryScheduledCorksByIDResponse: {
    typeUrl: string;
    encode(message: QueryScheduledCorksByIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledCorksByIDResponse;
    fromPartial(object: Partial<QueryScheduledCorksByIDResponse>): QueryScheduledCorksByIDResponse;
    fromAmino(object: QueryScheduledCorksByIDResponseAmino): QueryScheduledCorksByIDResponse;
    toAmino(message: QueryScheduledCorksByIDResponse): QueryScheduledCorksByIDResponseAmino;
    fromAminoMsg(object: QueryScheduledCorksByIDResponseAminoMsg): QueryScheduledCorksByIDResponse;
    fromProtoMsg(message: QueryScheduledCorksByIDResponseProtoMsg): QueryScheduledCorksByIDResponse;
    toProto(message: QueryScheduledCorksByIDResponse): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksByIDResponse): QueryScheduledCorksByIDResponseProtoMsg;
};
export declare const QueryCorkResultRequest: {
    typeUrl: string;
    encode(message: QueryCorkResultRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCorkResultRequest;
    fromPartial(object: Partial<QueryCorkResultRequest>): QueryCorkResultRequest;
    fromAmino(object: QueryCorkResultRequestAmino): QueryCorkResultRequest;
    toAmino(message: QueryCorkResultRequest): QueryCorkResultRequestAmino;
    fromAminoMsg(object: QueryCorkResultRequestAminoMsg): QueryCorkResultRequest;
    fromProtoMsg(message: QueryCorkResultRequestProtoMsg): QueryCorkResultRequest;
    toProto(message: QueryCorkResultRequest): Uint8Array;
    toProtoMsg(message: QueryCorkResultRequest): QueryCorkResultRequestProtoMsg;
};
export declare const QueryCorkResultResponse: {
    typeUrl: string;
    encode(message: QueryCorkResultResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCorkResultResponse;
    fromPartial(object: Partial<QueryCorkResultResponse>): QueryCorkResultResponse;
    fromAmino(object: QueryCorkResultResponseAmino): QueryCorkResultResponse;
    toAmino(message: QueryCorkResultResponse): QueryCorkResultResponseAmino;
    fromAminoMsg(object: QueryCorkResultResponseAminoMsg): QueryCorkResultResponse;
    fromProtoMsg(message: QueryCorkResultResponseProtoMsg): QueryCorkResultResponse;
    toProto(message: QueryCorkResultResponse): Uint8Array;
    toProtoMsg(message: QueryCorkResultResponse): QueryCorkResultResponseProtoMsg;
};
export declare const QueryCorkResultsRequest: {
    typeUrl: string;
    encode(_: QueryCorkResultsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCorkResultsRequest;
    fromPartial(_: Partial<QueryCorkResultsRequest>): QueryCorkResultsRequest;
    fromAmino(_: QueryCorkResultsRequestAmino): QueryCorkResultsRequest;
    toAmino(_: QueryCorkResultsRequest): QueryCorkResultsRequestAmino;
    fromAminoMsg(object: QueryCorkResultsRequestAminoMsg): QueryCorkResultsRequest;
    fromProtoMsg(message: QueryCorkResultsRequestProtoMsg): QueryCorkResultsRequest;
    toProto(message: QueryCorkResultsRequest): Uint8Array;
    toProtoMsg(message: QueryCorkResultsRequest): QueryCorkResultsRequestProtoMsg;
};
export declare const QueryCorkResultsResponse: {
    typeUrl: string;
    encode(message: QueryCorkResultsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCorkResultsResponse;
    fromPartial(object: Partial<QueryCorkResultsResponse>): QueryCorkResultsResponse;
    fromAmino(object: QueryCorkResultsResponseAmino): QueryCorkResultsResponse;
    toAmino(message: QueryCorkResultsResponse): QueryCorkResultsResponseAmino;
    fromAminoMsg(object: QueryCorkResultsResponseAminoMsg): QueryCorkResultsResponse;
    fromProtoMsg(message: QueryCorkResultsResponseProtoMsg): QueryCorkResultsResponse;
    toProto(message: QueryCorkResultsResponse): Uint8Array;
    toProtoMsg(message: QueryCorkResultsResponse): QueryCorkResultsResponseProtoMsg;
};
