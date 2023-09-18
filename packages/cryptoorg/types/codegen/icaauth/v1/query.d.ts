import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/chainmain.icaauth.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/chainmain.icaauth.v1.QueryParamsRequest";
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
    typeUrl: "/chainmain.icaauth.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/chainmain.icaauth.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryInterchainAccountAddressRequest defines the request for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressRequest {
    connectionId: string;
    owner: string;
}
export interface QueryInterchainAccountAddressRequestProtoMsg {
    typeUrl: "/chainmain.icaauth.v1.QueryInterchainAccountAddressRequest";
    value: Uint8Array;
}
/** QueryInterchainAccountAddressRequest defines the request for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressRequestAmino {
    connectionId: string;
    owner: string;
}
export interface QueryInterchainAccountAddressRequestAminoMsg {
    type: "/chainmain.icaauth.v1.QueryInterchainAccountAddressRequest";
    value: QueryInterchainAccountAddressRequestAmino;
}
/** QueryInterchainAccountAddressRequest defines the request for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressRequestSDKType {
    connectionId: string;
    owner: string;
}
/** QueryInterchainAccountAddressResponse defines the response for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressResponse {
    interchainAccountAddress: string;
}
export interface QueryInterchainAccountAddressResponseProtoMsg {
    typeUrl: "/chainmain.icaauth.v1.QueryInterchainAccountAddressResponse";
    value: Uint8Array;
}
/** QueryInterchainAccountAddressResponse defines the response for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressResponseAmino {
    interchainAccountAddress: string;
}
export interface QueryInterchainAccountAddressResponseAminoMsg {
    type: "/chainmain.icaauth.v1.QueryInterchainAccountAddressResponse";
    value: QueryInterchainAccountAddressResponseAmino;
}
/** QueryInterchainAccountAddressResponse defines the response for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressResponseSDKType {
    interchainAccountAddress: string;
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
export declare const QueryInterchainAccountAddressRequest: {
    typeUrl: string;
    encode(message: QueryInterchainAccountAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInterchainAccountAddressRequest;
    fromPartial(object: Partial<QueryInterchainAccountAddressRequest>): QueryInterchainAccountAddressRequest;
    fromAmino(object: QueryInterchainAccountAddressRequestAmino): QueryInterchainAccountAddressRequest;
    toAmino(message: QueryInterchainAccountAddressRequest): QueryInterchainAccountAddressRequestAmino;
    fromAminoMsg(object: QueryInterchainAccountAddressRequestAminoMsg): QueryInterchainAccountAddressRequest;
    fromProtoMsg(message: QueryInterchainAccountAddressRequestProtoMsg): QueryInterchainAccountAddressRequest;
    toProto(message: QueryInterchainAccountAddressRequest): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountAddressRequest): QueryInterchainAccountAddressRequestProtoMsg;
};
export declare const QueryInterchainAccountAddressResponse: {
    typeUrl: string;
    encode(message: QueryInterchainAccountAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInterchainAccountAddressResponse;
    fromPartial(object: Partial<QueryInterchainAccountAddressResponse>): QueryInterchainAccountAddressResponse;
    fromAmino(object: QueryInterchainAccountAddressResponseAmino): QueryInterchainAccountAddressResponse;
    toAmino(message: QueryInterchainAccountAddressResponse): QueryInterchainAccountAddressResponseAmino;
    fromAminoMsg(object: QueryInterchainAccountAddressResponseAminoMsg): QueryInterchainAccountAddressResponse;
    fromProtoMsg(message: QueryInterchainAccountAddressResponseProtoMsg): QueryInterchainAccountAddressResponse;
    toProto(message: QueryInterchainAccountAddressResponse): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountAddressResponse): QueryInterchainAccountAddressResponseProtoMsg;
};
