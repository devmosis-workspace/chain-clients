import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairAmino, TokenPairSDKType } from "./erc20";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryTokenPairsRequestProtoMsg {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairsRequest";
    value: Uint8Array;
}
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryTokenPairsRequestAminoMsg {
    type: "/evmos.erc20.v1.QueryTokenPairsRequest";
    value: QueryTokenPairsRequestAmino;
}
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequestSDKType {
    pagination: PageRequestSDKType;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponse {
    /** token_pairs is a slice of registered token pairs for the erc20 module */
    tokenPairs: TokenPair[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryTokenPairsResponseProtoMsg {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairsResponse";
    value: Uint8Array;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponseAmino {
    /** token_pairs is a slice of registered token pairs for the erc20 module */
    token_pairs: TokenPairAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryTokenPairsResponseAminoMsg {
    type: "/evmos.erc20.v1.QueryTokenPairsResponse";
    value: QueryTokenPairsResponseAmino;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponseSDKType {
    token_pairs: TokenPairSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequest {
    /**
     * token identifier can be either the hex contract address of the ERC20 or the
     * Cosmos base denomination
     */
    token: string;
}
export interface QueryTokenPairRequestProtoMsg {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairRequest";
    value: Uint8Array;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequestAmino {
    /**
     * token identifier can be either the hex contract address of the ERC20 or the
     * Cosmos base denomination
     */
    token: string;
}
export interface QueryTokenPairRequestAminoMsg {
    type: "/evmos.erc20.v1.QueryTokenPairRequest";
    value: QueryTokenPairRequestAmino;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequestSDKType {
    token: string;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponse {
    /** token_pairs returns the info about a registered token pair for the erc20 module */
    tokenPair: TokenPair;
}
export interface QueryTokenPairResponseProtoMsg {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairResponse";
    value: Uint8Array;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponseAmino {
    /** token_pairs returns the info about a registered token pair for the erc20 module */
    token_pair?: TokenPairAmino;
}
export interface QueryTokenPairResponseAminoMsg {
    type: "/evmos.erc20.v1.QueryTokenPairResponse";
    value: QueryTokenPairResponseAmino;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponseSDKType {
    token_pair: TokenPairSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/evmos.erc20.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/evmos.erc20.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
    /** params are the erc20 module parameters */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/evmos.erc20.v1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseAmino {
    /** params are the erc20 module parameters */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/evmos.erc20.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryTokenPairsRequest: {
    typeUrl: string;
    encode(message: QueryTokenPairsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenPairsRequest;
    fromPartial(object: Partial<QueryTokenPairsRequest>): QueryTokenPairsRequest;
    fromAmino(object: QueryTokenPairsRequestAmino): QueryTokenPairsRequest;
    toAmino(message: QueryTokenPairsRequest): QueryTokenPairsRequestAmino;
    fromAminoMsg(object: QueryTokenPairsRequestAminoMsg): QueryTokenPairsRequest;
    fromProtoMsg(message: QueryTokenPairsRequestProtoMsg): QueryTokenPairsRequest;
    toProto(message: QueryTokenPairsRequest): Uint8Array;
    toProtoMsg(message: QueryTokenPairsRequest): QueryTokenPairsRequestProtoMsg;
};
export declare const QueryTokenPairsResponse: {
    typeUrl: string;
    encode(message: QueryTokenPairsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenPairsResponse;
    fromPartial(object: Partial<QueryTokenPairsResponse>): QueryTokenPairsResponse;
    fromAmino(object: QueryTokenPairsResponseAmino): QueryTokenPairsResponse;
    toAmino(message: QueryTokenPairsResponse): QueryTokenPairsResponseAmino;
    fromAminoMsg(object: QueryTokenPairsResponseAminoMsg): QueryTokenPairsResponse;
    fromProtoMsg(message: QueryTokenPairsResponseProtoMsg): QueryTokenPairsResponse;
    toProto(message: QueryTokenPairsResponse): Uint8Array;
    toProtoMsg(message: QueryTokenPairsResponse): QueryTokenPairsResponseProtoMsg;
};
export declare const QueryTokenPairRequest: {
    typeUrl: string;
    encode(message: QueryTokenPairRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenPairRequest;
    fromPartial(object: Partial<QueryTokenPairRequest>): QueryTokenPairRequest;
    fromAmino(object: QueryTokenPairRequestAmino): QueryTokenPairRequest;
    toAmino(message: QueryTokenPairRequest): QueryTokenPairRequestAmino;
    fromAminoMsg(object: QueryTokenPairRequestAminoMsg): QueryTokenPairRequest;
    fromProtoMsg(message: QueryTokenPairRequestProtoMsg): QueryTokenPairRequest;
    toProto(message: QueryTokenPairRequest): Uint8Array;
    toProtoMsg(message: QueryTokenPairRequest): QueryTokenPairRequestProtoMsg;
};
export declare const QueryTokenPairResponse: {
    typeUrl: string;
    encode(message: QueryTokenPairResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenPairResponse;
    fromPartial(object: Partial<QueryTokenPairResponse>): QueryTokenPairResponse;
    fromAmino(object: QueryTokenPairResponseAmino): QueryTokenPairResponse;
    toAmino(message: QueryTokenPairResponse): QueryTokenPairResponseAmino;
    fromAminoMsg(object: QueryTokenPairResponseAminoMsg): QueryTokenPairResponse;
    fromProtoMsg(message: QueryTokenPairResponseProtoMsg): QueryTokenPairResponse;
    toProto(message: QueryTokenPairResponse): Uint8Array;
    toProtoMsg(message: QueryTokenPairResponse): QueryTokenPairResponseProtoMsg;
};
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
