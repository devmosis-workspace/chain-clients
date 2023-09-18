import { RateLimit, RateLimitAmino, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairAmino, WhitelistedAddressPairSDKType } from "./ratelimit";
import { BinaryWriter } from "../../binary";
export interface QueryAllRateLimitsRequest {
}
export interface QueryAllRateLimitsRequestProtoMsg {
    typeUrl: "/stride.ratelimit.QueryAllRateLimitsRequest";
    value: Uint8Array;
}
export interface QueryAllRateLimitsRequestAmino {
}
export interface QueryAllRateLimitsRequestAminoMsg {
    type: "/stride.ratelimit.QueryAllRateLimitsRequest";
    value: QueryAllRateLimitsRequestAmino;
}
export interface QueryAllRateLimitsRequestSDKType {
}
export interface QueryAllRateLimitsResponse {
    rateLimits: RateLimit[];
}
export interface QueryAllRateLimitsResponseProtoMsg {
    typeUrl: "/stride.ratelimit.QueryAllRateLimitsResponse";
    value: Uint8Array;
}
export interface QueryAllRateLimitsResponseAmino {
    rate_limits: RateLimitAmino[];
}
export interface QueryAllRateLimitsResponseAminoMsg {
    type: "/stride.ratelimit.QueryAllRateLimitsResponse";
    value: QueryAllRateLimitsResponseAmino;
}
export interface QueryAllRateLimitsResponseSDKType {
    rate_limits: RateLimitSDKType[];
}
export interface QueryRateLimitRequest {
    denom: string;
    channelId: string;
}
export interface QueryRateLimitRequestProtoMsg {
    typeUrl: "/stride.ratelimit.QueryRateLimitRequest";
    value: Uint8Array;
}
export interface QueryRateLimitRequestAmino {
    denom: string;
    channel_id: string;
}
export interface QueryRateLimitRequestAminoMsg {
    type: "/stride.ratelimit.QueryRateLimitRequest";
    value: QueryRateLimitRequestAmino;
}
export interface QueryRateLimitRequestSDKType {
    denom: string;
    channel_id: string;
}
export interface QueryRateLimitResponse {
    rateLimit: RateLimit;
}
export interface QueryRateLimitResponseProtoMsg {
    typeUrl: "/stride.ratelimit.QueryRateLimitResponse";
    value: Uint8Array;
}
export interface QueryRateLimitResponseAmino {
    rate_limit?: RateLimitAmino;
}
export interface QueryRateLimitResponseAminoMsg {
    type: "/stride.ratelimit.QueryRateLimitResponse";
    value: QueryRateLimitResponseAmino;
}
export interface QueryRateLimitResponseSDKType {
    rate_limit: RateLimitSDKType;
}
export interface QueryRateLimitsByChainIdRequest {
    chainId: string;
}
export interface QueryRateLimitsByChainIdRequestProtoMsg {
    typeUrl: "/stride.ratelimit.QueryRateLimitsByChainIdRequest";
    value: Uint8Array;
}
export interface QueryRateLimitsByChainIdRequestAmino {
    chain_id: string;
}
export interface QueryRateLimitsByChainIdRequestAminoMsg {
    type: "/stride.ratelimit.QueryRateLimitsByChainIdRequest";
    value: QueryRateLimitsByChainIdRequestAmino;
}
export interface QueryRateLimitsByChainIdRequestSDKType {
    chain_id: string;
}
export interface QueryRateLimitsByChainIdResponse {
    rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChainIdResponseProtoMsg {
    typeUrl: "/stride.ratelimit.QueryRateLimitsByChainIdResponse";
    value: Uint8Array;
}
export interface QueryRateLimitsByChainIdResponseAmino {
    rate_limits: RateLimitAmino[];
}
export interface QueryRateLimitsByChainIdResponseAminoMsg {
    type: "/stride.ratelimit.QueryRateLimitsByChainIdResponse";
    value: QueryRateLimitsByChainIdResponseAmino;
}
export interface QueryRateLimitsByChainIdResponseSDKType {
    rate_limits: RateLimitSDKType[];
}
export interface QueryRateLimitsByChannelIdRequest {
    channelId: string;
}
export interface QueryRateLimitsByChannelIdRequestProtoMsg {
    typeUrl: "/stride.ratelimit.QueryRateLimitsByChannelIdRequest";
    value: Uint8Array;
}
export interface QueryRateLimitsByChannelIdRequestAmino {
    channel_id: string;
}
export interface QueryRateLimitsByChannelIdRequestAminoMsg {
    type: "/stride.ratelimit.QueryRateLimitsByChannelIdRequest";
    value: QueryRateLimitsByChannelIdRequestAmino;
}
export interface QueryRateLimitsByChannelIdRequestSDKType {
    channel_id: string;
}
export interface QueryRateLimitsByChannelIdResponse {
    rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChannelIdResponseProtoMsg {
    typeUrl: "/stride.ratelimit.QueryRateLimitsByChannelIdResponse";
    value: Uint8Array;
}
export interface QueryRateLimitsByChannelIdResponseAmino {
    rate_limits: RateLimitAmino[];
}
export interface QueryRateLimitsByChannelIdResponseAminoMsg {
    type: "/stride.ratelimit.QueryRateLimitsByChannelIdResponse";
    value: QueryRateLimitsByChannelIdResponseAmino;
}
export interface QueryRateLimitsByChannelIdResponseSDKType {
    rate_limits: RateLimitSDKType[];
}
export interface QueryAllBlacklistedDenomsRequest {
}
export interface QueryAllBlacklistedDenomsRequestProtoMsg {
    typeUrl: "/stride.ratelimit.QueryAllBlacklistedDenomsRequest";
    value: Uint8Array;
}
export interface QueryAllBlacklistedDenomsRequestAmino {
}
export interface QueryAllBlacklistedDenomsRequestAminoMsg {
    type: "/stride.ratelimit.QueryAllBlacklistedDenomsRequest";
    value: QueryAllBlacklistedDenomsRequestAmino;
}
export interface QueryAllBlacklistedDenomsRequestSDKType {
}
export interface QueryAllBlacklistedDenomsResponse {
    denoms: string[];
}
export interface QueryAllBlacklistedDenomsResponseProtoMsg {
    typeUrl: "/stride.ratelimit.QueryAllBlacklistedDenomsResponse";
    value: Uint8Array;
}
export interface QueryAllBlacklistedDenomsResponseAmino {
    denoms: string[];
}
export interface QueryAllBlacklistedDenomsResponseAminoMsg {
    type: "/stride.ratelimit.QueryAllBlacklistedDenomsResponse";
    value: QueryAllBlacklistedDenomsResponseAmino;
}
export interface QueryAllBlacklistedDenomsResponseSDKType {
    denoms: string[];
}
export interface QueryAllWhitelistedAddressesRequest {
}
export interface QueryAllWhitelistedAddressesRequestProtoMsg {
    typeUrl: "/stride.ratelimit.QueryAllWhitelistedAddressesRequest";
    value: Uint8Array;
}
export interface QueryAllWhitelistedAddressesRequestAmino {
}
export interface QueryAllWhitelistedAddressesRequestAminoMsg {
    type: "/stride.ratelimit.QueryAllWhitelistedAddressesRequest";
    value: QueryAllWhitelistedAddressesRequestAmino;
}
export interface QueryAllWhitelistedAddressesRequestSDKType {
}
export interface QueryAllWhitelistedAddressesResponse {
    addressPairs: WhitelistedAddressPair[];
}
export interface QueryAllWhitelistedAddressesResponseProtoMsg {
    typeUrl: "/stride.ratelimit.QueryAllWhitelistedAddressesResponse";
    value: Uint8Array;
}
export interface QueryAllWhitelistedAddressesResponseAmino {
    address_pairs: WhitelistedAddressPairAmino[];
}
export interface QueryAllWhitelistedAddressesResponseAminoMsg {
    type: "/stride.ratelimit.QueryAllWhitelistedAddressesResponse";
    value: QueryAllWhitelistedAddressesResponseAmino;
}
export interface QueryAllWhitelistedAddressesResponseSDKType {
    address_pairs: WhitelistedAddressPairSDKType[];
}
export declare const QueryAllRateLimitsRequest: {
    typeUrl: string;
    encode(_: QueryAllRateLimitsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAllRateLimitsRequest;
    fromPartial(_: Partial<QueryAllRateLimitsRequest>): QueryAllRateLimitsRequest;
    fromAmino(_: QueryAllRateLimitsRequestAmino): QueryAllRateLimitsRequest;
    toAmino(_: QueryAllRateLimitsRequest): QueryAllRateLimitsRequestAmino;
    fromAminoMsg(object: QueryAllRateLimitsRequestAminoMsg): QueryAllRateLimitsRequest;
    fromProtoMsg(message: QueryAllRateLimitsRequestProtoMsg): QueryAllRateLimitsRequest;
    toProto(message: QueryAllRateLimitsRequest): Uint8Array;
    toProtoMsg(message: QueryAllRateLimitsRequest): QueryAllRateLimitsRequestProtoMsg;
};
export declare const QueryAllRateLimitsResponse: {
    typeUrl: string;
    encode(message: QueryAllRateLimitsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRateLimitsResponse;
    fromPartial(object: Partial<QueryAllRateLimitsResponse>): QueryAllRateLimitsResponse;
    fromAmino(object: QueryAllRateLimitsResponseAmino): QueryAllRateLimitsResponse;
    toAmino(message: QueryAllRateLimitsResponse): QueryAllRateLimitsResponseAmino;
    fromAminoMsg(object: QueryAllRateLimitsResponseAminoMsg): QueryAllRateLimitsResponse;
    fromProtoMsg(message: QueryAllRateLimitsResponseProtoMsg): QueryAllRateLimitsResponse;
    toProto(message: QueryAllRateLimitsResponse): Uint8Array;
    toProtoMsg(message: QueryAllRateLimitsResponse): QueryAllRateLimitsResponseProtoMsg;
};
export declare const QueryRateLimitRequest: {
    typeUrl: string;
    encode(message: QueryRateLimitRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRateLimitRequest;
    fromPartial(object: Partial<QueryRateLimitRequest>): QueryRateLimitRequest;
    fromAmino(object: QueryRateLimitRequestAmino): QueryRateLimitRequest;
    toAmino(message: QueryRateLimitRequest): QueryRateLimitRequestAmino;
    fromAminoMsg(object: QueryRateLimitRequestAminoMsg): QueryRateLimitRequest;
    fromProtoMsg(message: QueryRateLimitRequestProtoMsg): QueryRateLimitRequest;
    toProto(message: QueryRateLimitRequest): Uint8Array;
    toProtoMsg(message: QueryRateLimitRequest): QueryRateLimitRequestProtoMsg;
};
export declare const QueryRateLimitResponse: {
    typeUrl: string;
    encode(message: QueryRateLimitResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRateLimitResponse;
    fromPartial(object: Partial<QueryRateLimitResponse>): QueryRateLimitResponse;
    fromAmino(object: QueryRateLimitResponseAmino): QueryRateLimitResponse;
    toAmino(message: QueryRateLimitResponse): QueryRateLimitResponseAmino;
    fromAminoMsg(object: QueryRateLimitResponseAminoMsg): QueryRateLimitResponse;
    fromProtoMsg(message: QueryRateLimitResponseProtoMsg): QueryRateLimitResponse;
    toProto(message: QueryRateLimitResponse): Uint8Array;
    toProtoMsg(message: QueryRateLimitResponse): QueryRateLimitResponseProtoMsg;
};
export declare const QueryRateLimitsByChainIdRequest: {
    typeUrl: string;
    encode(message: QueryRateLimitsByChainIdRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRateLimitsByChainIdRequest;
    fromPartial(object: Partial<QueryRateLimitsByChainIdRequest>): QueryRateLimitsByChainIdRequest;
    fromAmino(object: QueryRateLimitsByChainIdRequestAmino): QueryRateLimitsByChainIdRequest;
    toAmino(message: QueryRateLimitsByChainIdRequest): QueryRateLimitsByChainIdRequestAmino;
    fromAminoMsg(object: QueryRateLimitsByChainIdRequestAminoMsg): QueryRateLimitsByChainIdRequest;
    fromProtoMsg(message: QueryRateLimitsByChainIdRequestProtoMsg): QueryRateLimitsByChainIdRequest;
    toProto(message: QueryRateLimitsByChainIdRequest): Uint8Array;
    toProtoMsg(message: QueryRateLimitsByChainIdRequest): QueryRateLimitsByChainIdRequestProtoMsg;
};
export declare const QueryRateLimitsByChainIdResponse: {
    typeUrl: string;
    encode(message: QueryRateLimitsByChainIdResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRateLimitsByChainIdResponse;
    fromPartial(object: Partial<QueryRateLimitsByChainIdResponse>): QueryRateLimitsByChainIdResponse;
    fromAmino(object: QueryRateLimitsByChainIdResponseAmino): QueryRateLimitsByChainIdResponse;
    toAmino(message: QueryRateLimitsByChainIdResponse): QueryRateLimitsByChainIdResponseAmino;
    fromAminoMsg(object: QueryRateLimitsByChainIdResponseAminoMsg): QueryRateLimitsByChainIdResponse;
    fromProtoMsg(message: QueryRateLimitsByChainIdResponseProtoMsg): QueryRateLimitsByChainIdResponse;
    toProto(message: QueryRateLimitsByChainIdResponse): Uint8Array;
    toProtoMsg(message: QueryRateLimitsByChainIdResponse): QueryRateLimitsByChainIdResponseProtoMsg;
};
export declare const QueryRateLimitsByChannelIdRequest: {
    typeUrl: string;
    encode(message: QueryRateLimitsByChannelIdRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRateLimitsByChannelIdRequest;
    fromPartial(object: Partial<QueryRateLimitsByChannelIdRequest>): QueryRateLimitsByChannelIdRequest;
    fromAmino(object: QueryRateLimitsByChannelIdRequestAmino): QueryRateLimitsByChannelIdRequest;
    toAmino(message: QueryRateLimitsByChannelIdRequest): QueryRateLimitsByChannelIdRequestAmino;
    fromAminoMsg(object: QueryRateLimitsByChannelIdRequestAminoMsg): QueryRateLimitsByChannelIdRequest;
    fromProtoMsg(message: QueryRateLimitsByChannelIdRequestProtoMsg): QueryRateLimitsByChannelIdRequest;
    toProto(message: QueryRateLimitsByChannelIdRequest): Uint8Array;
    toProtoMsg(message: QueryRateLimitsByChannelIdRequest): QueryRateLimitsByChannelIdRequestProtoMsg;
};
export declare const QueryRateLimitsByChannelIdResponse: {
    typeUrl: string;
    encode(message: QueryRateLimitsByChannelIdResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRateLimitsByChannelIdResponse;
    fromPartial(object: Partial<QueryRateLimitsByChannelIdResponse>): QueryRateLimitsByChannelIdResponse;
    fromAmino(object: QueryRateLimitsByChannelIdResponseAmino): QueryRateLimitsByChannelIdResponse;
    toAmino(message: QueryRateLimitsByChannelIdResponse): QueryRateLimitsByChannelIdResponseAmino;
    fromAminoMsg(object: QueryRateLimitsByChannelIdResponseAminoMsg): QueryRateLimitsByChannelIdResponse;
    fromProtoMsg(message: QueryRateLimitsByChannelIdResponseProtoMsg): QueryRateLimitsByChannelIdResponse;
    toProto(message: QueryRateLimitsByChannelIdResponse): Uint8Array;
    toProtoMsg(message: QueryRateLimitsByChannelIdResponse): QueryRateLimitsByChannelIdResponseProtoMsg;
};
export declare const QueryAllBlacklistedDenomsRequest: {
    typeUrl: string;
    encode(_: QueryAllBlacklistedDenomsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAllBlacklistedDenomsRequest;
    fromPartial(_: Partial<QueryAllBlacklistedDenomsRequest>): QueryAllBlacklistedDenomsRequest;
    fromAmino(_: QueryAllBlacklistedDenomsRequestAmino): QueryAllBlacklistedDenomsRequest;
    toAmino(_: QueryAllBlacklistedDenomsRequest): QueryAllBlacklistedDenomsRequestAmino;
    fromAminoMsg(object: QueryAllBlacklistedDenomsRequestAminoMsg): QueryAllBlacklistedDenomsRequest;
    fromProtoMsg(message: QueryAllBlacklistedDenomsRequestProtoMsg): QueryAllBlacklistedDenomsRequest;
    toProto(message: QueryAllBlacklistedDenomsRequest): Uint8Array;
    toProtoMsg(message: QueryAllBlacklistedDenomsRequest): QueryAllBlacklistedDenomsRequestProtoMsg;
};
export declare const QueryAllBlacklistedDenomsResponse: {
    typeUrl: string;
    encode(message: QueryAllBlacklistedDenomsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllBlacklistedDenomsResponse;
    fromPartial(object: Partial<QueryAllBlacklistedDenomsResponse>): QueryAllBlacklistedDenomsResponse;
    fromAmino(object: QueryAllBlacklistedDenomsResponseAmino): QueryAllBlacklistedDenomsResponse;
    toAmino(message: QueryAllBlacklistedDenomsResponse): QueryAllBlacklistedDenomsResponseAmino;
    fromAminoMsg(object: QueryAllBlacklistedDenomsResponseAminoMsg): QueryAllBlacklistedDenomsResponse;
    fromProtoMsg(message: QueryAllBlacklistedDenomsResponseProtoMsg): QueryAllBlacklistedDenomsResponse;
    toProto(message: QueryAllBlacklistedDenomsResponse): Uint8Array;
    toProtoMsg(message: QueryAllBlacklistedDenomsResponse): QueryAllBlacklistedDenomsResponseProtoMsg;
};
export declare const QueryAllWhitelistedAddressesRequest: {
    typeUrl: string;
    encode(_: QueryAllWhitelistedAddressesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAllWhitelistedAddressesRequest;
    fromPartial(_: Partial<QueryAllWhitelistedAddressesRequest>): QueryAllWhitelistedAddressesRequest;
    fromAmino(_: QueryAllWhitelistedAddressesRequestAmino): QueryAllWhitelistedAddressesRequest;
    toAmino(_: QueryAllWhitelistedAddressesRequest): QueryAllWhitelistedAddressesRequestAmino;
    fromAminoMsg(object: QueryAllWhitelistedAddressesRequestAminoMsg): QueryAllWhitelistedAddressesRequest;
    fromProtoMsg(message: QueryAllWhitelistedAddressesRequestProtoMsg): QueryAllWhitelistedAddressesRequest;
    toProto(message: QueryAllWhitelistedAddressesRequest): Uint8Array;
    toProtoMsg(message: QueryAllWhitelistedAddressesRequest): QueryAllWhitelistedAddressesRequestProtoMsg;
};
export declare const QueryAllWhitelistedAddressesResponse: {
    typeUrl: string;
    encode(message: QueryAllWhitelistedAddressesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllWhitelistedAddressesResponse;
    fromPartial(object: Partial<QueryAllWhitelistedAddressesResponse>): QueryAllWhitelistedAddressesResponse;
    fromAmino(object: QueryAllWhitelistedAddressesResponseAmino): QueryAllWhitelistedAddressesResponse;
    toAmino(message: QueryAllWhitelistedAddressesResponse): QueryAllWhitelistedAddressesResponseAmino;
    fromAminoMsg(object: QueryAllWhitelistedAddressesResponseAminoMsg): QueryAllWhitelistedAddressesResponse;
    fromProtoMsg(message: QueryAllWhitelistedAddressesResponseProtoMsg): QueryAllWhitelistedAddressesResponse;
    toProto(message: QueryAllWhitelistedAddressesResponse): Uint8Array;
    toProtoMsg(message: QueryAllWhitelistedAddressesResponse): QueryAllWhitelistedAddressesResponseProtoMsg;
};
