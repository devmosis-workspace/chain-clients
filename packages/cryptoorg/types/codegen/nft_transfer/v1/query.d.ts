import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { ClassTrace, ClassTraceAmino, ClassTraceSDKType } from "./trace";
import { BinaryWriter } from "../../binary";
/**
 * QueryClassTraceRequest is the request type for the Query/ClassDenom RPC
 * method
 */
export interface QueryClassTraceRequest {
    /** hash (in hex format) or classID (full classID with ibc prefix) of the denomination trace information. */
    hash: string;
}
export interface QueryClassTraceRequestProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.QueryClassTraceRequest";
    value: Uint8Array;
}
/**
 * QueryClassTraceRequest is the request type for the Query/ClassDenom RPC
 * method
 */
export interface QueryClassTraceRequestAmino {
    /** hash (in hex format) or classID (full classID with ibc prefix) of the denomination trace information. */
    hash: string;
}
export interface QueryClassTraceRequestAminoMsg {
    type: "/chainmain.nft_transfer.v1.QueryClassTraceRequest";
    value: QueryClassTraceRequestAmino;
}
/**
 * QueryClassTraceRequest is the request type for the Query/ClassDenom RPC
 * method
 */
export interface QueryClassTraceRequestSDKType {
    hash: string;
}
/**
 * QueryClassTraceResponse is the response type for the Query/ClassDenom RPC
 * method.
 */
export interface QueryClassTraceResponse {
    /** class_trace returns the requested class trace information. */
    classTrace: ClassTrace;
}
export interface QueryClassTraceResponseProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.QueryClassTraceResponse";
    value: Uint8Array;
}
/**
 * QueryClassTraceResponse is the response type for the Query/ClassDenom RPC
 * method.
 */
export interface QueryClassTraceResponseAmino {
    /** class_trace returns the requested class trace information. */
    class_trace?: ClassTraceAmino;
}
export interface QueryClassTraceResponseAminoMsg {
    type: "/chainmain.nft_transfer.v1.QueryClassTraceResponse";
    value: QueryClassTraceResponseAmino;
}
/**
 * QueryClassTraceResponse is the response type for the Query/ClassDenom RPC
 * method.
 */
export interface QueryClassTraceResponseSDKType {
    class_trace: ClassTraceSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryClassTracesRequestProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.QueryClassTracesRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryClassTracesRequestAminoMsg {
    type: "/chainmain.nft_transfer.v1.QueryClassTracesRequest";
    value: QueryClassTracesRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequestSDKType {
    pagination: PageRequestSDKType;
}
/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponse {
    /** class_traces returns all class trace information. */
    classTraces: ClassTrace[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryClassTracesResponseProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.QueryClassTracesResponse";
    value: Uint8Array;
}
/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponseAmino {
    /** class_traces returns all class trace information. */
    class_traces: ClassTraceAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryClassTracesResponseAminoMsg {
    type: "/chainmain.nft_transfer.v1.QueryClassTracesResponse";
    value: QueryClassTracesResponseAmino;
}
/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponseSDKType {
    class_traces: ClassTraceSDKType[];
    pagination: PageResponseSDKType;
}
/**
 * QueryClassHashRequest is the request type for the Query/ClassHash RPC
 * method
 */
export interface QueryClassHashRequest {
    /** The class trace ([port_id]/[channel_id])+/[denom] */
    trace: string;
}
export interface QueryClassHashRequestProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.QueryClassHashRequest";
    value: Uint8Array;
}
/**
 * QueryClassHashRequest is the request type for the Query/ClassHash RPC
 * method
 */
export interface QueryClassHashRequestAmino {
    /** The class trace ([port_id]/[channel_id])+/[denom] */
    trace: string;
}
export interface QueryClassHashRequestAminoMsg {
    type: "/chainmain.nft_transfer.v1.QueryClassHashRequest";
    value: QueryClassHashRequestAmino;
}
/**
 * QueryClassHashRequest is the request type for the Query/ClassHash RPC
 * method
 */
export interface QueryClassHashRequestSDKType {
    trace: string;
}
/**
 * QueryClassHashResponse is the response type for the Query/ClassHash RPC
 * method.
 */
export interface QueryClassHashResponse {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
export interface QueryClassHashResponseProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.QueryClassHashResponse";
    value: Uint8Array;
}
/**
 * QueryClassHashResponse is the response type for the Query/ClassHash RPC
 * method.
 */
export interface QueryClassHashResponseAmino {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
export interface QueryClassHashResponseAminoMsg {
    type: "/chainmain.nft_transfer.v1.QueryClassHashResponse";
    value: QueryClassHashResponseAmino;
}
/**
 * QueryClassHashResponse is the response type for the Query/ClassHash RPC
 * method.
 */
export interface QueryClassHashResponseSDKType {
    hash: string;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
export interface QueryEscrowAddressRequestProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.QueryEscrowAddressRequest";
    value: Uint8Array;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequestAmino {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
}
export interface QueryEscrowAddressRequestAminoMsg {
    type: "/chainmain.nft_transfer.v1.QueryEscrowAddressRequest";
    value: QueryEscrowAddressRequestAmino;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequestSDKType {
    port_id: string;
    channel_id: string;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponse {
    /** the escrow account address */
    escrowAddress: string;
}
export interface QueryEscrowAddressResponseProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.QueryEscrowAddressResponse";
    value: Uint8Array;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponseAmino {
    /** the escrow account address */
    escrow_address: string;
}
export interface QueryEscrowAddressResponseAminoMsg {
    type: "/chainmain.nft_transfer.v1.QueryEscrowAddressResponse";
    value: QueryEscrowAddressResponseAmino;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponseSDKType {
    escrow_address: string;
}
export declare const QueryClassTraceRequest: {
    typeUrl: string;
    encode(message: QueryClassTraceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassTraceRequest;
    fromPartial(object: Partial<QueryClassTraceRequest>): QueryClassTraceRequest;
    fromAmino(object: QueryClassTraceRequestAmino): QueryClassTraceRequest;
    toAmino(message: QueryClassTraceRequest): QueryClassTraceRequestAmino;
    fromAminoMsg(object: QueryClassTraceRequestAminoMsg): QueryClassTraceRequest;
    fromProtoMsg(message: QueryClassTraceRequestProtoMsg): QueryClassTraceRequest;
    toProto(message: QueryClassTraceRequest): Uint8Array;
    toProtoMsg(message: QueryClassTraceRequest): QueryClassTraceRequestProtoMsg;
};
export declare const QueryClassTraceResponse: {
    typeUrl: string;
    encode(message: QueryClassTraceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassTraceResponse;
    fromPartial(object: Partial<QueryClassTraceResponse>): QueryClassTraceResponse;
    fromAmino(object: QueryClassTraceResponseAmino): QueryClassTraceResponse;
    toAmino(message: QueryClassTraceResponse): QueryClassTraceResponseAmino;
    fromAminoMsg(object: QueryClassTraceResponseAminoMsg): QueryClassTraceResponse;
    fromProtoMsg(message: QueryClassTraceResponseProtoMsg): QueryClassTraceResponse;
    toProto(message: QueryClassTraceResponse): Uint8Array;
    toProtoMsg(message: QueryClassTraceResponse): QueryClassTraceResponseProtoMsg;
};
export declare const QueryClassTracesRequest: {
    typeUrl: string;
    encode(message: QueryClassTracesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassTracesRequest;
    fromPartial(object: Partial<QueryClassTracesRequest>): QueryClassTracesRequest;
    fromAmino(object: QueryClassTracesRequestAmino): QueryClassTracesRequest;
    toAmino(message: QueryClassTracesRequest): QueryClassTracesRequestAmino;
    fromAminoMsg(object: QueryClassTracesRequestAminoMsg): QueryClassTracesRequest;
    fromProtoMsg(message: QueryClassTracesRequestProtoMsg): QueryClassTracesRequest;
    toProto(message: QueryClassTracesRequest): Uint8Array;
    toProtoMsg(message: QueryClassTracesRequest): QueryClassTracesRequestProtoMsg;
};
export declare const QueryClassTracesResponse: {
    typeUrl: string;
    encode(message: QueryClassTracesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassTracesResponse;
    fromPartial(object: Partial<QueryClassTracesResponse>): QueryClassTracesResponse;
    fromAmino(object: QueryClassTracesResponseAmino): QueryClassTracesResponse;
    toAmino(message: QueryClassTracesResponse): QueryClassTracesResponseAmino;
    fromAminoMsg(object: QueryClassTracesResponseAminoMsg): QueryClassTracesResponse;
    fromProtoMsg(message: QueryClassTracesResponseProtoMsg): QueryClassTracesResponse;
    toProto(message: QueryClassTracesResponse): Uint8Array;
    toProtoMsg(message: QueryClassTracesResponse): QueryClassTracesResponseProtoMsg;
};
export declare const QueryClassHashRequest: {
    typeUrl: string;
    encode(message: QueryClassHashRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassHashRequest;
    fromPartial(object: Partial<QueryClassHashRequest>): QueryClassHashRequest;
    fromAmino(object: QueryClassHashRequestAmino): QueryClassHashRequest;
    toAmino(message: QueryClassHashRequest): QueryClassHashRequestAmino;
    fromAminoMsg(object: QueryClassHashRequestAminoMsg): QueryClassHashRequest;
    fromProtoMsg(message: QueryClassHashRequestProtoMsg): QueryClassHashRequest;
    toProto(message: QueryClassHashRequest): Uint8Array;
    toProtoMsg(message: QueryClassHashRequest): QueryClassHashRequestProtoMsg;
};
export declare const QueryClassHashResponse: {
    typeUrl: string;
    encode(message: QueryClassHashResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassHashResponse;
    fromPartial(object: Partial<QueryClassHashResponse>): QueryClassHashResponse;
    fromAmino(object: QueryClassHashResponseAmino): QueryClassHashResponse;
    toAmino(message: QueryClassHashResponse): QueryClassHashResponseAmino;
    fromAminoMsg(object: QueryClassHashResponseAminoMsg): QueryClassHashResponse;
    fromProtoMsg(message: QueryClassHashResponseProtoMsg): QueryClassHashResponse;
    toProto(message: QueryClassHashResponse): Uint8Array;
    toProtoMsg(message: QueryClassHashResponse): QueryClassHashResponseProtoMsg;
};
export declare const QueryEscrowAddressRequest: {
    typeUrl: string;
    encode(message: QueryEscrowAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEscrowAddressRequest;
    fromPartial(object: Partial<QueryEscrowAddressRequest>): QueryEscrowAddressRequest;
    fromAmino(object: QueryEscrowAddressRequestAmino): QueryEscrowAddressRequest;
    toAmino(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestAmino;
    fromAminoMsg(object: QueryEscrowAddressRequestAminoMsg): QueryEscrowAddressRequest;
    fromProtoMsg(message: QueryEscrowAddressRequestProtoMsg): QueryEscrowAddressRequest;
    toProto(message: QueryEscrowAddressRequest): Uint8Array;
    toProtoMsg(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestProtoMsg;
};
export declare const QueryEscrowAddressResponse: {
    typeUrl: string;
    encode(message: QueryEscrowAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEscrowAddressResponse;
    fromPartial(object: Partial<QueryEscrowAddressResponse>): QueryEscrowAddressResponse;
    fromAmino(object: QueryEscrowAddressResponseAmino): QueryEscrowAddressResponse;
    toAmino(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseAmino;
    fromAminoMsg(object: QueryEscrowAddressResponseAminoMsg): QueryEscrowAddressResponse;
    fromProtoMsg(message: QueryEscrowAddressResponseProtoMsg): QueryEscrowAddressResponse;
    toProto(message: QueryEscrowAddressResponse): Uint8Array;
    toProtoMsg(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseProtoMsg;
};
