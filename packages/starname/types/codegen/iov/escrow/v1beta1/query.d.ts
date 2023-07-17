import { Escrow, EscrowSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
export interface QueryEscrowRequest {
    /** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
    id: string;
}
/** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
export interface QueryEscrowRequestSDKType {
    id: string;
}
/** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
export interface QueryEscrowResponse {
    /** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
    escrow?: Escrow;
}
/** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
export interface QueryEscrowResponseSDKType {
    escrow?: EscrowSDKType;
}
/** QueryEscrowsRequest is the request type for the Query/Escrows RPC method */
export interface QueryEscrowsRequest {
    /** The4 seller address */
    seller: string;
    /** The state of the escrow object. It must be one of "open" or "expired". */
    state: string;
    /** All the escrows has a unique key, in the starname objects the domain_name will be the key, and the account_name*domain_name will be account name. */
    objectKey: string;
    paginationStart: Long;
    paginationLength: Long;
}
/** QueryEscrowsRequest is the request type for the Query/Escrows RPC method */
export interface QueryEscrowsRequestSDKType {
    seller: string;
    state: string;
    object_key: string;
    pagination_start: Long;
    pagination_length: Long;
}
/** QueryEscrowsResponse is the response type for the Query/Escrows RPC method */
export interface QueryEscrowsResponse {
    escrows: Escrow[];
}
/** QueryEscrowsResponse is the response type for the Query/Escrows RPC method */
export interface QueryEscrowsResponseSDKType {
    escrows: EscrowSDKType[];
}
export declare const QueryEscrowRequest: {
    encode(message: QueryEscrowRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEscrowRequest;
    fromPartial(object: Partial<QueryEscrowRequest>): QueryEscrowRequest;
};
export declare const QueryEscrowResponse: {
    encode(message: QueryEscrowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEscrowResponse;
    fromPartial(object: Partial<QueryEscrowResponse>): QueryEscrowResponse;
};
export declare const QueryEscrowsRequest: {
    encode(message: QueryEscrowsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEscrowsRequest;
    fromPartial(object: Partial<QueryEscrowsRequest>): QueryEscrowsRequest;
};
export declare const QueryEscrowsResponse: {
    encode(message: QueryEscrowsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEscrowsResponse;
    fromPartial(object: Partial<QueryEscrowsResponse>): QueryEscrowsResponse;
};
