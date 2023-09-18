import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is the request type for the QueryParams gRPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/incentives.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the QueryParams gRPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/incentives.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the QueryParams gRPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsRequest is the response type for the QueryParams gRPC method. */
export interface QueryParamsResponse {
    /** allocation parameters */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/incentives.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsRequest is the response type for the QueryParams gRPC method. */
export interface QueryParamsResponseAmino {
    /** allocation parameters */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/incentives.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsRequest is the response type for the QueryParams gRPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryAPYRequest is the request type for the QueryAPY gRPC method. */
export interface QueryAPYRequest {
}
export interface QueryAPYRequestProtoMsg {
    typeUrl: "/incentives.v1.QueryAPYRequest";
    value: Uint8Array;
}
/** QueryAPYRequest is the request type for the QueryAPY gRPC method. */
export interface QueryAPYRequestAmino {
}
export interface QueryAPYRequestAminoMsg {
    type: "/incentives.v1.QueryAPYRequest";
    value: QueryAPYRequestAmino;
}
/** QueryAPYRequest is the request type for the QueryAPY gRPC method. */
export interface QueryAPYRequestSDKType {
}
/** QueryAPYRequest is the response type for the QueryAPY gRPC method. */
export interface QueryAPYResponse {
    apy: string;
}
export interface QueryAPYResponseProtoMsg {
    typeUrl: "/incentives.v1.QueryAPYResponse";
    value: Uint8Array;
}
/** QueryAPYRequest is the response type for the QueryAPY gRPC method. */
export interface QueryAPYResponseAmino {
    apy: string;
}
export interface QueryAPYResponseAminoMsg {
    type: "/incentives.v1.QueryAPYResponse";
    value: QueryAPYResponseAmino;
}
/** QueryAPYRequest is the response type for the QueryAPY gRPC method. */
export interface QueryAPYResponseSDKType {
    apy: string;
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
export declare const QueryAPYRequest: {
    typeUrl: string;
    encode(_: QueryAPYRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAPYRequest;
    fromPartial(_: Partial<QueryAPYRequest>): QueryAPYRequest;
    fromAmino(_: QueryAPYRequestAmino): QueryAPYRequest;
    toAmino(_: QueryAPYRequest): QueryAPYRequestAmino;
    fromAminoMsg(object: QueryAPYRequestAminoMsg): QueryAPYRequest;
    fromProtoMsg(message: QueryAPYRequestProtoMsg): QueryAPYRequest;
    toProto(message: QueryAPYRequest): Uint8Array;
    toProtoMsg(message: QueryAPYRequest): QueryAPYRequestProtoMsg;
};
export declare const QueryAPYResponse: {
    typeUrl: string;
    encode(message: QueryAPYResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAPYResponse;
    fromPartial(object: Partial<QueryAPYResponse>): QueryAPYResponse;
    fromAmino(object: QueryAPYResponseAmino): QueryAPYResponse;
    toAmino(message: QueryAPYResponse): QueryAPYResponseAmino;
    fromAminoMsg(object: QueryAPYResponseAminoMsg): QueryAPYResponse;
    fromProtoMsg(message: QueryAPYResponseProtoMsg): QueryAPYResponse;
    toProto(message: QueryAPYResponse): Uint8Array;
    toProtoMsg(message: QueryAPYResponse): QueryAPYResponseProtoMsg;
};
