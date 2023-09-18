import { Config, ConfigAmino, ConfigSDKType, Fees, FeesAmino, FeesSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/**
 * QueryConfigRequest is the request type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigRequest {
}
export interface QueryConfigRequestProtoMsg {
    typeUrl: "/starnamed.x.configuration.v1beta1.QueryConfigRequest";
    value: Uint8Array;
}
/**
 * QueryConfigRequest is the request type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigRequestAmino {
}
export interface QueryConfigRequestAminoMsg {
    type: "/starnamed.x.configuration.v1beta1.QueryConfigRequest";
    value: QueryConfigRequestAmino;
}
/**
 * QueryConfigRequest is the request type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigRequestSDKType {
}
/**
 * QueryConfigResponse is the response type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigResponse {
    /** Configuration is the starname configuration. */
    config: Config;
}
export interface QueryConfigResponseProtoMsg {
    typeUrl: "/starnamed.x.configuration.v1beta1.QueryConfigResponse";
    value: Uint8Array;
}
/**
 * QueryConfigResponse is the response type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigResponseAmino {
    /** Configuration is the starname configuration. */
    config?: ConfigAmino;
}
export interface QueryConfigResponseAminoMsg {
    type: "/starnamed.x.configuration.v1beta1.QueryConfigResponse";
    value: QueryConfigResponseAmino;
}
/**
 * QueryConfigResponse is the response type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigResponseSDKType {
    config: ConfigSDKType;
}
/** QueryFeesRequest is the request type for the Query/Configuration RPC method. */
export interface QueryFeesRequest {
}
export interface QueryFeesRequestProtoMsg {
    typeUrl: "/starnamed.x.configuration.v1beta1.QueryFeesRequest";
    value: Uint8Array;
}
/** QueryFeesRequest is the request type for the Query/Configuration RPC method. */
export interface QueryFeesRequestAmino {
}
export interface QueryFeesRequestAminoMsg {
    type: "/starnamed.x.configuration.v1beta1.QueryFeesRequest";
    value: QueryFeesRequestAmino;
}
/** QueryFeesRequest is the request type for the Query/Configuration RPC method. */
export interface QueryFeesRequestSDKType {
}
/** QueryFeesResponse is the response type for the Query/Fees RPC method */
export interface QueryFeesResponse {
    /** Fees is the starname product fee object. */
    fees: Fees;
}
export interface QueryFeesResponseProtoMsg {
    typeUrl: "/starnamed.x.configuration.v1beta1.QueryFeesResponse";
    value: Uint8Array;
}
/** QueryFeesResponse is the response type for the Query/Fees RPC method */
export interface QueryFeesResponseAmino {
    /** Fees is the starname product fee object. */
    fees?: FeesAmino;
}
export interface QueryFeesResponseAminoMsg {
    type: "/starnamed.x.configuration.v1beta1.QueryFeesResponse";
    value: QueryFeesResponseAmino;
}
/** QueryFeesResponse is the response type for the Query/Fees RPC method */
export interface QueryFeesResponseSDKType {
    fees: FeesSDKType;
}
export declare const QueryConfigRequest: {
    typeUrl: string;
    encode(_: QueryConfigRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryConfigRequest;
    fromPartial(_: Partial<QueryConfigRequest>): QueryConfigRequest;
    fromAmino(_: QueryConfigRequestAmino): QueryConfigRequest;
    toAmino(_: QueryConfigRequest): QueryConfigRequestAmino;
    fromAminoMsg(object: QueryConfigRequestAminoMsg): QueryConfigRequest;
    fromProtoMsg(message: QueryConfigRequestProtoMsg): QueryConfigRequest;
    toProto(message: QueryConfigRequest): Uint8Array;
    toProtoMsg(message: QueryConfigRequest): QueryConfigRequestProtoMsg;
};
export declare const QueryConfigResponse: {
    typeUrl: string;
    encode(message: QueryConfigResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConfigResponse;
    fromPartial(object: Partial<QueryConfigResponse>): QueryConfigResponse;
    fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse;
    toAmino(message: QueryConfigResponse): QueryConfigResponseAmino;
    fromAminoMsg(object: QueryConfigResponseAminoMsg): QueryConfigResponse;
    fromProtoMsg(message: QueryConfigResponseProtoMsg): QueryConfigResponse;
    toProto(message: QueryConfigResponse): Uint8Array;
    toProtoMsg(message: QueryConfigResponse): QueryConfigResponseProtoMsg;
};
export declare const QueryFeesRequest: {
    typeUrl: string;
    encode(_: QueryFeesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryFeesRequest;
    fromPartial(_: Partial<QueryFeesRequest>): QueryFeesRequest;
    fromAmino(_: QueryFeesRequestAmino): QueryFeesRequest;
    toAmino(_: QueryFeesRequest): QueryFeesRequestAmino;
    fromAminoMsg(object: QueryFeesRequestAminoMsg): QueryFeesRequest;
    fromProtoMsg(message: QueryFeesRequestProtoMsg): QueryFeesRequest;
    toProto(message: QueryFeesRequest): Uint8Array;
    toProtoMsg(message: QueryFeesRequest): QueryFeesRequestProtoMsg;
};
export declare const QueryFeesResponse: {
    typeUrl: string;
    encode(message: QueryFeesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeesResponse;
    fromPartial(object: Partial<QueryFeesResponse>): QueryFeesResponse;
    fromAmino(object: QueryFeesResponseAmino): QueryFeesResponse;
    toAmino(message: QueryFeesResponse): QueryFeesResponseAmino;
    fromAminoMsg(object: QueryFeesResponseAminoMsg): QueryFeesResponse;
    fromProtoMsg(message: QueryFeesResponseProtoMsg): QueryFeesResponse;
    toProto(message: QueryFeesResponse): Uint8Array;
    toProtoMsg(message: QueryFeesResponse): QueryFeesResponseProtoMsg;
};
