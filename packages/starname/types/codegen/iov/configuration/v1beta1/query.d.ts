import { Config, ConfigSDKType, Fees, FeesSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryConfigRequest is the request type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigRequest {
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
    config?: Config;
}
/**
 * QueryConfigResponse is the response type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigResponseSDKType {
    config?: ConfigSDKType;
}
/** QueryFeesRequest is the request type for the Query/Configuration RPC method. */
export interface QueryFeesRequest {
}
/** QueryFeesRequest is the request type for the Query/Configuration RPC method. */
export interface QueryFeesRequestSDKType {
}
/** QueryFeesResponse is the response type for the Query/Fees RPC method */
export interface QueryFeesResponse {
    /** Fees is the starname product fee object. */
    fees?: Fees;
}
/** QueryFeesResponse is the response type for the Query/Fees RPC method */
export interface QueryFeesResponseSDKType {
    fees?: FeesSDKType;
}
export declare const QueryConfigRequest: {
    encode(_: QueryConfigRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryConfigRequest;
    fromPartial(_: Partial<QueryConfigRequest>): QueryConfigRequest;
};
export declare const QueryConfigResponse: {
    encode(message: QueryConfigResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryConfigResponse;
    fromPartial(object: Partial<QueryConfigResponse>): QueryConfigResponse;
};
export declare const QueryFeesRequest: {
    encode(_: QueryFeesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryFeesRequest;
    fromPartial(_: Partial<QueryFeesRequest>): QueryFeesRequest;
};
export declare const QueryFeesResponse: {
    encode(message: QueryFeesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeesResponse;
    fromPartial(object: Partial<QueryFeesResponse>): QueryFeesResponse;
};
