import { Escrow, EscrowAmino, EscrowSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
export interface QueryEscrowRequest {
    /** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
    id: string;
}
export interface QueryEscrowRequestProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowRequest";
    value: Uint8Array;
}
/** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
export interface QueryEscrowRequestAmino {
    /** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
    id: string;
}
export interface QueryEscrowRequestAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.QueryEscrowRequest";
    value: QueryEscrowRequestAmino;
}
/** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
export interface QueryEscrowRequestSDKType {
    id: string;
}
/** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
export interface QueryEscrowResponse {
    /** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
    escrow: Escrow;
}
export interface QueryEscrowResponseProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowResponse";
    value: Uint8Array;
}
/** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
export interface QueryEscrowResponseAmino {
    /** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
    escrow?: EscrowAmino;
}
export interface QueryEscrowResponseAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.QueryEscrowResponse";
    value: QueryEscrowResponseAmino;
}
/** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
export interface QueryEscrowResponseSDKType {
    escrow: EscrowSDKType;
}
/** QueryEscrowsRequest is the request type for the Query/Escrows RPC method */
export interface QueryEscrowsRequest {
    /** The4 seller address */
    seller: string;
    /** The state of the escrow object. It must be one of "open" or "expired". */
    state: string;
    /** All the escrows has a unique key, in the starname objects the domain_name will be the key, and the account_name*domain_name will be account name. */
    objectKey: string;
    paginationStart: bigint;
    paginationLength: bigint;
}
export interface QueryEscrowsRequestProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowsRequest";
    value: Uint8Array;
}
/** QueryEscrowsRequest is the request type for the Query/Escrows RPC method */
export interface QueryEscrowsRequestAmino {
    /** The4 seller address */
    seller: string;
    /** The state of the escrow object. It must be one of "open" or "expired". */
    state: string;
    /** All the escrows has a unique key, in the starname objects the domain_name will be the key, and the account_name*domain_name will be account name. */
    object_key: string;
    pagination_start: string;
    pagination_length: string;
}
export interface QueryEscrowsRequestAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.QueryEscrowsRequest";
    value: QueryEscrowsRequestAmino;
}
/** QueryEscrowsRequest is the request type for the Query/Escrows RPC method */
export interface QueryEscrowsRequestSDKType {
    seller: string;
    state: string;
    object_key: string;
    pagination_start: bigint;
    pagination_length: bigint;
}
/** QueryEscrowsResponse is the response type for the Query/Escrows RPC method */
export interface QueryEscrowsResponse {
    escrows: Escrow[];
}
export interface QueryEscrowsResponseProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowsResponse";
    value: Uint8Array;
}
/** QueryEscrowsResponse is the response type for the Query/Escrows RPC method */
export interface QueryEscrowsResponseAmino {
    escrows: EscrowAmino[];
}
export interface QueryEscrowsResponseAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.QueryEscrowsResponse";
    value: QueryEscrowsResponseAmino;
}
/** QueryEscrowsResponse is the response type for the Query/Escrows RPC method */
export interface QueryEscrowsResponseSDKType {
    escrows: EscrowSDKType[];
}
export declare const QueryEscrowRequest: {
    typeUrl: string;
    encode(message: QueryEscrowRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEscrowRequest;
    fromPartial(object: Partial<QueryEscrowRequest>): QueryEscrowRequest;
    fromAmino(object: QueryEscrowRequestAmino): QueryEscrowRequest;
    toAmino(message: QueryEscrowRequest): QueryEscrowRequestAmino;
    fromAminoMsg(object: QueryEscrowRequestAminoMsg): QueryEscrowRequest;
    fromProtoMsg(message: QueryEscrowRequestProtoMsg): QueryEscrowRequest;
    toProto(message: QueryEscrowRequest): Uint8Array;
    toProtoMsg(message: QueryEscrowRequest): QueryEscrowRequestProtoMsg;
};
export declare const QueryEscrowResponse: {
    typeUrl: string;
    encode(message: QueryEscrowResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEscrowResponse;
    fromPartial(object: Partial<QueryEscrowResponse>): QueryEscrowResponse;
    fromAmino(object: QueryEscrowResponseAmino): QueryEscrowResponse;
    toAmino(message: QueryEscrowResponse): QueryEscrowResponseAmino;
    fromAminoMsg(object: QueryEscrowResponseAminoMsg): QueryEscrowResponse;
    fromProtoMsg(message: QueryEscrowResponseProtoMsg): QueryEscrowResponse;
    toProto(message: QueryEscrowResponse): Uint8Array;
    toProtoMsg(message: QueryEscrowResponse): QueryEscrowResponseProtoMsg;
};
export declare const QueryEscrowsRequest: {
    typeUrl: string;
    encode(message: QueryEscrowsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEscrowsRequest;
    fromPartial(object: Partial<QueryEscrowsRequest>): QueryEscrowsRequest;
    fromAmino(object: QueryEscrowsRequestAmino): QueryEscrowsRequest;
    toAmino(message: QueryEscrowsRequest): QueryEscrowsRequestAmino;
    fromAminoMsg(object: QueryEscrowsRequestAminoMsg): QueryEscrowsRequest;
    fromProtoMsg(message: QueryEscrowsRequestProtoMsg): QueryEscrowsRequest;
    toProto(message: QueryEscrowsRequest): Uint8Array;
    toProtoMsg(message: QueryEscrowsRequest): QueryEscrowsRequestProtoMsg;
};
export declare const QueryEscrowsResponse: {
    typeUrl: string;
    encode(message: QueryEscrowsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEscrowsResponse;
    fromPartial(object: Partial<QueryEscrowsResponse>): QueryEscrowsResponse;
    fromAmino(object: QueryEscrowsResponseAmino): QueryEscrowsResponse;
    toAmino(message: QueryEscrowsResponse): QueryEscrowsResponseAmino;
    fromAminoMsg(object: QueryEscrowsResponseAminoMsg): QueryEscrowsResponse;
    fromProtoMsg(message: QueryEscrowsResponseProtoMsg): QueryEscrowsResponse;
    toProto(message: QueryEscrowsResponse): Uint8Array;
    toProtoMsg(message: QueryEscrowsResponse): QueryEscrowsResponseProtoMsg;
};
