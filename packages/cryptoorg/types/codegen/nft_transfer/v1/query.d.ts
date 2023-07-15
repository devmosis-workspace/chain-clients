import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { ClassTrace, ClassTraceSDKType } from "./trace";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryClassTraceRequest is the request type for the Query/ClassDenom RPC
 * method
 */
export interface QueryClassTraceRequest {
    /** hash (in hex format) or classID (full classID with ibc prefix) of the denomination trace information. */
    hash: string;
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
    classTrace?: ClassTrace;
}
/**
 * QueryClassTraceResponse is the response type for the Query/ClassDenom RPC
 * method.
 */
export interface QueryClassTraceResponseSDKType {
    class_trace?: ClassTraceSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryConnectionsRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponse {
    /** class_traces returns all class trace information. */
    classTraces: ClassTrace[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponseSDKType {
    class_traces: ClassTraceSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryClassHashRequest is the request type for the Query/ClassHash RPC
 * method
 */
export interface QueryClassHashRequest {
    /** The class trace ([port_id]/[channel_id])+/[denom] */
    trace: string;
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
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponseSDKType {
    escrow_address: string;
}
export declare const QueryClassTraceRequest: {
    encode(message: QueryClassTraceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassTraceRequest;
    fromPartial(object: Partial<QueryClassTraceRequest>): QueryClassTraceRequest;
};
export declare const QueryClassTraceResponse: {
    encode(message: QueryClassTraceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassTraceResponse;
    fromPartial(object: Partial<QueryClassTraceResponse>): QueryClassTraceResponse;
};
export declare const QueryClassTracesRequest: {
    encode(message: QueryClassTracesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassTracesRequest;
    fromPartial(object: Partial<QueryClassTracesRequest>): QueryClassTracesRequest;
};
export declare const QueryClassTracesResponse: {
    encode(message: QueryClassTracesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassTracesResponse;
    fromPartial(object: Partial<QueryClassTracesResponse>): QueryClassTracesResponse;
};
export declare const QueryClassHashRequest: {
    encode(message: QueryClassHashRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassHashRequest;
    fromPartial(object: Partial<QueryClassHashRequest>): QueryClassHashRequest;
};
export declare const QueryClassHashResponse: {
    encode(message: QueryClassHashResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassHashResponse;
    fromPartial(object: Partial<QueryClassHashResponse>): QueryClassHashResponse;
};
export declare const QueryEscrowAddressRequest: {
    encode(message: QueryEscrowAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEscrowAddressRequest;
    fromPartial(object: Partial<QueryEscrowAddressRequest>): QueryEscrowAddressRequest;
};
export declare const QueryEscrowAddressResponse: {
    encode(message: QueryEscrowAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEscrowAddressResponse;
    fromPartial(object: Partial<QueryEscrowAddressResponse>): QueryEscrowAddressResponse;
};
