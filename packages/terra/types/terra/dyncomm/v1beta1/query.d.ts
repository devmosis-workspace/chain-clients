import { Params, ParamsAmino, ParamsSDKType } from "./dyncomm";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/terra.dyncomm.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/terra.dyncomm.v1beta1.QueryParamsRequest";
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
    typeUrl: "/terra.dyncomm.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/terra.dyncomm.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryRateRequest is the request type for the Query/Rate RPC method. */
export interface QueryRateRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryRateRequestProtoMsg {
    typeUrl: "/terra.dyncomm.v1beta1.QueryRateRequest";
    value: Uint8Array;
}
/** QueryRateRequest is the request type for the Query/Rate RPC method. */
export interface QueryRateRequestAmino {
    /** validator_addr defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryRateRequestAminoMsg {
    type: "/terra.dyncomm.v1beta1.QueryRateRequest";
    value: QueryRateRequestAmino;
}
/** QueryRateRequest is the request type for the Query/Rate RPC method. */
export interface QueryRateRequestSDKType {
    validator_addr: string;
}
/** QueryRateResponse is the response type for the Query/Rate RPC method. */
export interface QueryRateResponse {
    rate: string;
    target: string;
}
export interface QueryRateResponseProtoMsg {
    typeUrl: "/terra.dyncomm.v1beta1.QueryRateResponse";
    value: Uint8Array;
}
/** QueryRateResponse is the response type for the Query/Rate RPC method. */
export interface QueryRateResponseAmino {
    rate?: string;
    target?: string;
}
export interface QueryRateResponseAminoMsg {
    type: "/terra.dyncomm.v1beta1.QueryRateResponse";
    value: QueryRateResponseAmino;
}
/** QueryRateResponse is the response type for the Query/Rate RPC method. */
export interface QueryRateResponseSDKType {
    rate: string;
    target: string;
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
export declare const QueryRateRequest: {
    typeUrl: string;
    encode(message: QueryRateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRateRequest;
    fromPartial(object: Partial<QueryRateRequest>): QueryRateRequest;
    fromAmino(object: QueryRateRequestAmino): QueryRateRequest;
    toAmino(message: QueryRateRequest): QueryRateRequestAmino;
    fromAminoMsg(object: QueryRateRequestAminoMsg): QueryRateRequest;
    fromProtoMsg(message: QueryRateRequestProtoMsg): QueryRateRequest;
    toProto(message: QueryRateRequest): Uint8Array;
    toProtoMsg(message: QueryRateRequest): QueryRateRequestProtoMsg;
};
export declare const QueryRateResponse: {
    typeUrl: string;
    encode(message: QueryRateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRateResponse;
    fromPartial(object: Partial<QueryRateResponse>): QueryRateResponse;
    fromAmino(object: QueryRateResponseAmino): QueryRateResponse;
    toAmino(message: QueryRateResponse): QueryRateResponseAmino;
    fromAminoMsg(object: QueryRateResponseAminoMsg): QueryRateResponse;
    fromProtoMsg(message: QueryRateResponseProtoMsg): QueryRateResponse;
    toProto(message: QueryRateResponse): Uint8Array;
    toProtoMsg(message: QueryRateResponse): QueryRateResponseProtoMsg;
};
