import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponse {
    /** token_pairs is a slice of registered token pairs for the erc20 module */
    tokenPairs: TokenPair[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponseSDKType {
    token_pairs: TokenPairSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequest {
    /**
     * token identifier can be either the hex contract address of the ERC20 or the
     * Cosmos base denomination
     */
    token: string;
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
    tokenPair?: TokenPair;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponseSDKType {
    token_pair?: TokenPairSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
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
    params?: Params;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryTokenPairsRequest: {
    encode(message: QueryTokenPairsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTokenPairsRequest;
    fromPartial(object: Partial<QueryTokenPairsRequest>): QueryTokenPairsRequest;
};
export declare const QueryTokenPairsResponse: {
    encode(message: QueryTokenPairsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTokenPairsResponse;
    fromPartial(object: Partial<QueryTokenPairsResponse>): QueryTokenPairsResponse;
};
export declare const QueryTokenPairRequest: {
    encode(message: QueryTokenPairRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTokenPairRequest;
    fromPartial(object: Partial<QueryTokenPairRequest>): QueryTokenPairRequest;
};
export declare const QueryTokenPairResponse: {
    encode(message: QueryTokenPairResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTokenPairResponse;
    fromPartial(object: Partial<QueryTokenPairResponse>): QueryTokenPairResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
