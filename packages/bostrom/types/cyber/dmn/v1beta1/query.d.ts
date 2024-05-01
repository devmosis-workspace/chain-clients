import { Params, ParamsAmino, ParamsSDKType, Thought, ThoughtAmino, ThoughtSDKType, ThoughtStats, ThoughtStatsAmino, ThoughtStatsSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/cyber.dmn.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryThoughtParamsRequest {
    program: string;
    name: string;
}
export interface QueryThoughtParamsRequestProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.QueryThoughtParamsRequest";
    value: Uint8Array;
}
export interface QueryThoughtParamsRequestAmino {
    program?: string;
    name?: string;
}
export interface QueryThoughtParamsRequestAminoMsg {
    type: "/cyber.dmn.v1beta1.QueryThoughtParamsRequest";
    value: QueryThoughtParamsRequestAmino;
}
export interface QueryThoughtParamsRequestSDKType {
    program: string;
    name: string;
}
export interface QueryThoughtResponse {
    thought: Thought;
}
export interface QueryThoughtResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.QueryThoughtResponse";
    value: Uint8Array;
}
export interface QueryThoughtResponseAmino {
    thought?: ThoughtAmino;
}
export interface QueryThoughtResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.QueryThoughtResponse";
    value: QueryThoughtResponseAmino;
}
export interface QueryThoughtResponseSDKType {
    thought: ThoughtSDKType;
}
export interface QueryThoughtStatsResponse {
    thoughtStats: ThoughtStats;
}
export interface QueryThoughtStatsResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.QueryThoughtStatsResponse";
    value: Uint8Array;
}
export interface QueryThoughtStatsResponseAmino {
    thought_stats?: ThoughtStatsAmino;
}
export interface QueryThoughtStatsResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.QueryThoughtStatsResponse";
    value: QueryThoughtStatsResponseAmino;
}
export interface QueryThoughtStatsResponseSDKType {
    thought_stats: ThoughtStatsSDKType;
}
export interface QueryThoughtsRequest {
}
export interface QueryThoughtsRequestProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsRequest";
    value: Uint8Array;
}
export interface QueryThoughtsRequestAmino {
}
export interface QueryThoughtsRequestAminoMsg {
    type: "/cyber.dmn.v1beta1.QueryThoughtsRequest";
    value: QueryThoughtsRequestAmino;
}
export interface QueryThoughtsRequestSDKType {
}
export interface QueryThoughtsResponse {
    thoughts: Thought[];
}
export interface QueryThoughtsResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsResponse";
    value: Uint8Array;
}
export interface QueryThoughtsResponseAmino {
    thoughts?: ThoughtAmino[];
}
export interface QueryThoughtsResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.QueryThoughtsResponse";
    value: QueryThoughtsResponseAmino;
}
export interface QueryThoughtsResponseSDKType {
    thoughts: ThoughtSDKType[];
}
export interface QueryThoughtsStatsRequest {
}
export interface QueryThoughtsStatsRequestProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsStatsRequest";
    value: Uint8Array;
}
export interface QueryThoughtsStatsRequestAmino {
}
export interface QueryThoughtsStatsRequestAminoMsg {
    type: "/cyber.dmn.v1beta1.QueryThoughtsStatsRequest";
    value: QueryThoughtsStatsRequestAmino;
}
export interface QueryThoughtsStatsRequestSDKType {
}
export interface QueryThoughtsStatsResponse {
    thoughtsStats: ThoughtStats[];
}
export interface QueryThoughtsStatsResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsStatsResponse";
    value: Uint8Array;
}
export interface QueryThoughtsStatsResponseAmino {
    thoughts_stats?: ThoughtStatsAmino[];
}
export interface QueryThoughtsStatsResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.QueryThoughtsStatsResponse";
    value: QueryThoughtsStatsResponseAmino;
}
export interface QueryThoughtsStatsResponseSDKType {
    thoughts_stats: ThoughtStatsSDKType[];
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
export declare const QueryThoughtParamsRequest: {
    typeUrl: string;
    encode(message: QueryThoughtParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryThoughtParamsRequest;
    fromPartial(object: Partial<QueryThoughtParamsRequest>): QueryThoughtParamsRequest;
    fromAmino(object: QueryThoughtParamsRequestAmino): QueryThoughtParamsRequest;
    toAmino(message: QueryThoughtParamsRequest): QueryThoughtParamsRequestAmino;
    fromAminoMsg(object: QueryThoughtParamsRequestAminoMsg): QueryThoughtParamsRequest;
    fromProtoMsg(message: QueryThoughtParamsRequestProtoMsg): QueryThoughtParamsRequest;
    toProto(message: QueryThoughtParamsRequest): Uint8Array;
    toProtoMsg(message: QueryThoughtParamsRequest): QueryThoughtParamsRequestProtoMsg;
};
export declare const QueryThoughtResponse: {
    typeUrl: string;
    encode(message: QueryThoughtResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryThoughtResponse;
    fromPartial(object: Partial<QueryThoughtResponse>): QueryThoughtResponse;
    fromAmino(object: QueryThoughtResponseAmino): QueryThoughtResponse;
    toAmino(message: QueryThoughtResponse): QueryThoughtResponseAmino;
    fromAminoMsg(object: QueryThoughtResponseAminoMsg): QueryThoughtResponse;
    fromProtoMsg(message: QueryThoughtResponseProtoMsg): QueryThoughtResponse;
    toProto(message: QueryThoughtResponse): Uint8Array;
    toProtoMsg(message: QueryThoughtResponse): QueryThoughtResponseProtoMsg;
};
export declare const QueryThoughtStatsResponse: {
    typeUrl: string;
    encode(message: QueryThoughtStatsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryThoughtStatsResponse;
    fromPartial(object: Partial<QueryThoughtStatsResponse>): QueryThoughtStatsResponse;
    fromAmino(object: QueryThoughtStatsResponseAmino): QueryThoughtStatsResponse;
    toAmino(message: QueryThoughtStatsResponse): QueryThoughtStatsResponseAmino;
    fromAminoMsg(object: QueryThoughtStatsResponseAminoMsg): QueryThoughtStatsResponse;
    fromProtoMsg(message: QueryThoughtStatsResponseProtoMsg): QueryThoughtStatsResponse;
    toProto(message: QueryThoughtStatsResponse): Uint8Array;
    toProtoMsg(message: QueryThoughtStatsResponse): QueryThoughtStatsResponseProtoMsg;
};
export declare const QueryThoughtsRequest: {
    typeUrl: string;
    encode(_: QueryThoughtsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryThoughtsRequest;
    fromPartial(_: Partial<QueryThoughtsRequest>): QueryThoughtsRequest;
    fromAmino(_: QueryThoughtsRequestAmino): QueryThoughtsRequest;
    toAmino(_: QueryThoughtsRequest): QueryThoughtsRequestAmino;
    fromAminoMsg(object: QueryThoughtsRequestAminoMsg): QueryThoughtsRequest;
    fromProtoMsg(message: QueryThoughtsRequestProtoMsg): QueryThoughtsRequest;
    toProto(message: QueryThoughtsRequest): Uint8Array;
    toProtoMsg(message: QueryThoughtsRequest): QueryThoughtsRequestProtoMsg;
};
export declare const QueryThoughtsResponse: {
    typeUrl: string;
    encode(message: QueryThoughtsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryThoughtsResponse;
    fromPartial(object: Partial<QueryThoughtsResponse>): QueryThoughtsResponse;
    fromAmino(object: QueryThoughtsResponseAmino): QueryThoughtsResponse;
    toAmino(message: QueryThoughtsResponse): QueryThoughtsResponseAmino;
    fromAminoMsg(object: QueryThoughtsResponseAminoMsg): QueryThoughtsResponse;
    fromProtoMsg(message: QueryThoughtsResponseProtoMsg): QueryThoughtsResponse;
    toProto(message: QueryThoughtsResponse): Uint8Array;
    toProtoMsg(message: QueryThoughtsResponse): QueryThoughtsResponseProtoMsg;
};
export declare const QueryThoughtsStatsRequest: {
    typeUrl: string;
    encode(_: QueryThoughtsStatsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryThoughtsStatsRequest;
    fromPartial(_: Partial<QueryThoughtsStatsRequest>): QueryThoughtsStatsRequest;
    fromAmino(_: QueryThoughtsStatsRequestAmino): QueryThoughtsStatsRequest;
    toAmino(_: QueryThoughtsStatsRequest): QueryThoughtsStatsRequestAmino;
    fromAminoMsg(object: QueryThoughtsStatsRequestAminoMsg): QueryThoughtsStatsRequest;
    fromProtoMsg(message: QueryThoughtsStatsRequestProtoMsg): QueryThoughtsStatsRequest;
    toProto(message: QueryThoughtsStatsRequest): Uint8Array;
    toProtoMsg(message: QueryThoughtsStatsRequest): QueryThoughtsStatsRequestProtoMsg;
};
export declare const QueryThoughtsStatsResponse: {
    typeUrl: string;
    encode(message: QueryThoughtsStatsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryThoughtsStatsResponse;
    fromPartial(object: Partial<QueryThoughtsStatsResponse>): QueryThoughtsStatsResponse;
    fromAmino(object: QueryThoughtsStatsResponseAmino): QueryThoughtsStatsResponse;
    toAmino(message: QueryThoughtsStatsResponse): QueryThoughtsStatsResponseAmino;
    fromAminoMsg(object: QueryThoughtsStatsResponseAminoMsg): QueryThoughtsStatsResponse;
    fromProtoMsg(message: QueryThoughtsStatsResponseProtoMsg): QueryThoughtsStatsResponse;
    toProto(message: QueryThoughtsStatsResponse): Uint8Array;
    toProtoMsg(message: QueryThoughtsStatsResponse): QueryThoughtsStatsResponseProtoMsg;
};
