import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryWriter } from "../../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/publicawesome.stargaze.mint.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/publicawesome.stargaze.mint.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.mint.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/publicawesome.stargaze.mint.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {
}
export interface QueryAnnualProvisionsRequestProtoMsg {
    typeUrl: "/publicawesome.stargaze.mint.v1beta1.QueryAnnualProvisionsRequest";
    value: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestAmino {
}
export interface QueryAnnualProvisionsRequestAminoMsg {
    type: "/publicawesome.stargaze.mint.v1beta1.QueryAnnualProvisionsRequest";
    value: QueryAnnualProvisionsRequestAmino;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestSDKType {
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
    /** annual_provisions is the current minting annual provisions value. */
    annualProvisions: Uint8Array;
}
export interface QueryAnnualProvisionsResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.mint.v1beta1.QueryAnnualProvisionsResponse";
    value: Uint8Array;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseAmino {
    /** annual_provisions is the current minting annual provisions value. */
    annual_provisions?: string;
}
export interface QueryAnnualProvisionsResponseAminoMsg {
    type: "/publicawesome.stargaze.mint.v1beta1.QueryAnnualProvisionsResponse";
    value: QueryAnnualProvisionsResponseAmino;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseSDKType {
    annual_provisions: Uint8Array;
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
export declare const QueryAnnualProvisionsRequest: {
    typeUrl: string;
    encode(_: QueryAnnualProvisionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAnnualProvisionsRequest;
    fromPartial(_: Partial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest;
    fromAmino(_: QueryAnnualProvisionsRequestAmino): QueryAnnualProvisionsRequest;
    toAmino(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestAmino;
    fromAminoMsg(object: QueryAnnualProvisionsRequestAminoMsg): QueryAnnualProvisionsRequest;
    fromProtoMsg(message: QueryAnnualProvisionsRequestProtoMsg): QueryAnnualProvisionsRequest;
    toProto(message: QueryAnnualProvisionsRequest): Uint8Array;
    toProtoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestProtoMsg;
};
export declare const QueryAnnualProvisionsResponse: {
    typeUrl: string;
    encode(message: QueryAnnualProvisionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAnnualProvisionsResponse;
    fromPartial(object: Partial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse;
    fromAmino(object: QueryAnnualProvisionsResponseAmino): QueryAnnualProvisionsResponse;
    toAmino(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseAmino;
    fromAminoMsg(object: QueryAnnualProvisionsResponseAminoMsg): QueryAnnualProvisionsResponse;
    fromProtoMsg(message: QueryAnnualProvisionsResponseProtoMsg): QueryAnnualProvisionsResponse;
    toProto(message: QueryAnnualProvisionsResponse): Uint8Array;
    toProtoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseProtoMsg;
};
