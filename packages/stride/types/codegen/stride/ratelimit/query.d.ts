import { RateLimit, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairSDKType } from "./ratelimit";
import * as _m0 from "protobufjs/minimal";
export interface QueryAllRateLimitsRequest {
}
export interface QueryAllRateLimitsRequestSDKType {
}
export interface QueryAllRateLimitsResponse {
    rateLimits: RateLimit[];
}
export interface QueryAllRateLimitsResponseSDKType {
    rate_limits: RateLimitSDKType[];
}
export interface QueryRateLimitRequest {
    denom: string;
    channelId: string;
}
export interface QueryRateLimitRequestSDKType {
    denom: string;
    channel_id: string;
}
export interface QueryRateLimitResponse {
    rateLimit?: RateLimit;
}
export interface QueryRateLimitResponseSDKType {
    rate_limit?: RateLimitSDKType;
}
export interface QueryRateLimitsByChainIdRequest {
    chainId: string;
}
export interface QueryRateLimitsByChainIdRequestSDKType {
    chain_id: string;
}
export interface QueryRateLimitsByChainIdResponse {
    rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChainIdResponseSDKType {
    rate_limits: RateLimitSDKType[];
}
export interface QueryRateLimitsByChannelIdRequest {
    channelId: string;
}
export interface QueryRateLimitsByChannelIdRequestSDKType {
    channel_id: string;
}
export interface QueryRateLimitsByChannelIdResponse {
    rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChannelIdResponseSDKType {
    rate_limits: RateLimitSDKType[];
}
export interface QueryAllBlacklistedDenomsRequest {
}
export interface QueryAllBlacklistedDenomsRequestSDKType {
}
export interface QueryAllBlacklistedDenomsResponse {
    denoms: string[];
}
export interface QueryAllBlacklistedDenomsResponseSDKType {
    denoms: string[];
}
export interface QueryAllWhitelistedAddressesRequest {
}
export interface QueryAllWhitelistedAddressesRequestSDKType {
}
export interface QueryAllWhitelistedAddressesResponse {
    addressPairs: WhitelistedAddressPair[];
}
export interface QueryAllWhitelistedAddressesResponseSDKType {
    address_pairs: WhitelistedAddressPairSDKType[];
}
export declare const QueryAllRateLimitsRequest: {
    encode(_: QueryAllRateLimitsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAllRateLimitsRequest;
    fromPartial(_: Partial<QueryAllRateLimitsRequest>): QueryAllRateLimitsRequest;
};
export declare const QueryAllRateLimitsResponse: {
    encode(message: QueryAllRateLimitsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllRateLimitsResponse;
    fromPartial(object: Partial<QueryAllRateLimitsResponse>): QueryAllRateLimitsResponse;
};
export declare const QueryRateLimitRequest: {
    encode(message: QueryRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRateLimitRequest;
    fromPartial(object: Partial<QueryRateLimitRequest>): QueryRateLimitRequest;
};
export declare const QueryRateLimitResponse: {
    encode(message: QueryRateLimitResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRateLimitResponse;
    fromPartial(object: Partial<QueryRateLimitResponse>): QueryRateLimitResponse;
};
export declare const QueryRateLimitsByChainIdRequest: {
    encode(message: QueryRateLimitsByChainIdRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRateLimitsByChainIdRequest;
    fromPartial(object: Partial<QueryRateLimitsByChainIdRequest>): QueryRateLimitsByChainIdRequest;
};
export declare const QueryRateLimitsByChainIdResponse: {
    encode(message: QueryRateLimitsByChainIdResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRateLimitsByChainIdResponse;
    fromPartial(object: Partial<QueryRateLimitsByChainIdResponse>): QueryRateLimitsByChainIdResponse;
};
export declare const QueryRateLimitsByChannelIdRequest: {
    encode(message: QueryRateLimitsByChannelIdRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRateLimitsByChannelIdRequest;
    fromPartial(object: Partial<QueryRateLimitsByChannelIdRequest>): QueryRateLimitsByChannelIdRequest;
};
export declare const QueryRateLimitsByChannelIdResponse: {
    encode(message: QueryRateLimitsByChannelIdResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRateLimitsByChannelIdResponse;
    fromPartial(object: Partial<QueryRateLimitsByChannelIdResponse>): QueryRateLimitsByChannelIdResponse;
};
export declare const QueryAllBlacklistedDenomsRequest: {
    encode(_: QueryAllBlacklistedDenomsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAllBlacklistedDenomsRequest;
    fromPartial(_: Partial<QueryAllBlacklistedDenomsRequest>): QueryAllBlacklistedDenomsRequest;
};
export declare const QueryAllBlacklistedDenomsResponse: {
    encode(message: QueryAllBlacklistedDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllBlacklistedDenomsResponse;
    fromPartial(object: Partial<QueryAllBlacklistedDenomsResponse>): QueryAllBlacklistedDenomsResponse;
};
export declare const QueryAllWhitelistedAddressesRequest: {
    encode(_: QueryAllWhitelistedAddressesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAllWhitelistedAddressesRequest;
    fromPartial(_: Partial<QueryAllWhitelistedAddressesRequest>): QueryAllWhitelistedAddressesRequest;
};
export declare const QueryAllWhitelistedAddressesResponse: {
    encode(message: QueryAllWhitelistedAddressesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllWhitelistedAddressesResponse;
    fromPartial(object: Partial<QueryAllWhitelistedAddressesResponse>): QueryAllWhitelistedAddressesResponse;
};
