import { FeeToken, FeeTokenSDKType } from "./feetoken";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryFeeTokensRequest {
}
export interface QueryFeeTokensRequestSDKType {
}
export interface QueryFeeTokensResponse {
    feeTokens: FeeToken[];
}
export interface QueryFeeTokensResponseSDKType {
    fee_tokens: FeeTokenSDKType[];
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
    denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestSDKType {
    denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponse {
    poolID: Long;
    spotPrice: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseSDKType {
    poolID: Long;
    spot_price: string;
}
export interface QueryDenomPoolIdRequest {
    denom: string;
}
export interface QueryDenomPoolIdRequestSDKType {
    denom: string;
}
export interface QueryDenomPoolIdResponse {
    poolID: Long;
}
export interface QueryDenomPoolIdResponseSDKType {
    poolID: Long;
}
export interface QueryBaseDenomRequest {
}
export interface QueryBaseDenomRequestSDKType {
}
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
export interface QueryBaseDenomResponseSDKType {
    base_denom: string;
}
export declare const QueryFeeTokensRequest: {
    encode(_: QueryFeeTokensRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryFeeTokensRequest;
    fromPartial(_: Partial<QueryFeeTokensRequest>): QueryFeeTokensRequest;
};
export declare const QueryFeeTokensResponse: {
    encode(message: QueryFeeTokensResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeeTokensResponse;
    fromPartial(object: Partial<QueryFeeTokensResponse>): QueryFeeTokensResponse;
};
export declare const QueryDenomSpotPriceRequest: {
    encode(message: QueryDenomSpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomSpotPriceRequest;
    fromPartial(object: Partial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest;
};
export declare const QueryDenomSpotPriceResponse: {
    encode(message: QueryDenomSpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomSpotPriceResponse;
    fromPartial(object: Partial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse;
};
export declare const QueryDenomPoolIdRequest: {
    encode(message: QueryDenomPoolIdRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomPoolIdRequest;
    fromPartial(object: Partial<QueryDenomPoolIdRequest>): QueryDenomPoolIdRequest;
};
export declare const QueryDenomPoolIdResponse: {
    encode(message: QueryDenomPoolIdResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomPoolIdResponse;
    fromPartial(object: Partial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse;
};
export declare const QueryBaseDenomRequest: {
    encode(_: QueryBaseDenomRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBaseDenomRequest;
    fromPartial(_: Partial<QueryBaseDenomRequest>): QueryBaseDenomRequest;
};
export declare const QueryBaseDenomResponse: {
    encode(message: QueryBaseDenomResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBaseDenomResponse;
    fromPartial(object: Partial<QueryBaseDenomResponse>): QueryBaseDenomResponse;
};
