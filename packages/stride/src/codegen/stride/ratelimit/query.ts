import { RateLimit, RateLimitAmino, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairAmino, WhitelistedAddressPairSDKType } from "./ratelimit";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface QueryAllRateLimitsRequest {}
export interface QueryAllRateLimitsRequestProtoMsg {
  typeUrl: "/stride.ratelimit.QueryAllRateLimitsRequest";
  value: Uint8Array;
}
export interface QueryAllRateLimitsRequestAmino {}
export interface QueryAllRateLimitsRequestAminoMsg {
  type: "/stride.ratelimit.QueryAllRateLimitsRequest";
  value: QueryAllRateLimitsRequestAmino;
}
export interface QueryAllRateLimitsRequestSDKType {}
export interface QueryAllRateLimitsResponse {
  rateLimits: RateLimit[];
}
export interface QueryAllRateLimitsResponseProtoMsg {
  typeUrl: "/stride.ratelimit.QueryAllRateLimitsResponse";
  value: Uint8Array;
}
export interface QueryAllRateLimitsResponseAmino {
  rate_limits?: RateLimitAmino[];
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
  denom?: string;
  channel_id?: string;
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
  rateLimit?: RateLimit;
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
  rate_limit?: RateLimitSDKType;
}
export interface QueryRateLimitsByChainIdRequest {
  chainId: string;
}
export interface QueryRateLimitsByChainIdRequestProtoMsg {
  typeUrl: "/stride.ratelimit.QueryRateLimitsByChainIdRequest";
  value: Uint8Array;
}
export interface QueryRateLimitsByChainIdRequestAmino {
  chain_id?: string;
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
  rate_limits?: RateLimitAmino[];
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
  channel_id?: string;
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
  rate_limits?: RateLimitAmino[];
}
export interface QueryRateLimitsByChannelIdResponseAminoMsg {
  type: "/stride.ratelimit.QueryRateLimitsByChannelIdResponse";
  value: QueryRateLimitsByChannelIdResponseAmino;
}
export interface QueryRateLimitsByChannelIdResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
export interface QueryAllBlacklistedDenomsRequest {}
export interface QueryAllBlacklistedDenomsRequestProtoMsg {
  typeUrl: "/stride.ratelimit.QueryAllBlacklistedDenomsRequest";
  value: Uint8Array;
}
export interface QueryAllBlacklistedDenomsRequestAmino {}
export interface QueryAllBlacklistedDenomsRequestAminoMsg {
  type: "/stride.ratelimit.QueryAllBlacklistedDenomsRequest";
  value: QueryAllBlacklistedDenomsRequestAmino;
}
export interface QueryAllBlacklistedDenomsRequestSDKType {}
export interface QueryAllBlacklistedDenomsResponse {
  denoms: string[];
}
export interface QueryAllBlacklistedDenomsResponseProtoMsg {
  typeUrl: "/stride.ratelimit.QueryAllBlacklistedDenomsResponse";
  value: Uint8Array;
}
export interface QueryAllBlacklistedDenomsResponseAmino {
  denoms?: string[];
}
export interface QueryAllBlacklistedDenomsResponseAminoMsg {
  type: "/stride.ratelimit.QueryAllBlacklistedDenomsResponse";
  value: QueryAllBlacklistedDenomsResponseAmino;
}
export interface QueryAllBlacklistedDenomsResponseSDKType {
  denoms: string[];
}
export interface QueryAllWhitelistedAddressesRequest {}
export interface QueryAllWhitelistedAddressesRequestProtoMsg {
  typeUrl: "/stride.ratelimit.QueryAllWhitelistedAddressesRequest";
  value: Uint8Array;
}
export interface QueryAllWhitelistedAddressesRequestAmino {}
export interface QueryAllWhitelistedAddressesRequestAminoMsg {
  type: "/stride.ratelimit.QueryAllWhitelistedAddressesRequest";
  value: QueryAllWhitelistedAddressesRequestAmino;
}
export interface QueryAllWhitelistedAddressesRequestSDKType {}
export interface QueryAllWhitelistedAddressesResponse {
  addressPairs: WhitelistedAddressPair[];
}
export interface QueryAllWhitelistedAddressesResponseProtoMsg {
  typeUrl: "/stride.ratelimit.QueryAllWhitelistedAddressesResponse";
  value: Uint8Array;
}
export interface QueryAllWhitelistedAddressesResponseAmino {
  address_pairs?: WhitelistedAddressPairAmino[];
}
export interface QueryAllWhitelistedAddressesResponseAminoMsg {
  type: "/stride.ratelimit.QueryAllWhitelistedAddressesResponse";
  value: QueryAllWhitelistedAddressesResponseAmino;
}
export interface QueryAllWhitelistedAddressesResponseSDKType {
  address_pairs: WhitelistedAddressPairSDKType[];
}
function createBaseQueryAllRateLimitsRequest(): QueryAllRateLimitsRequest {
  return {};
}
export const QueryAllRateLimitsRequest = {
  typeUrl: "/stride.ratelimit.QueryAllRateLimitsRequest",
  encode(_: QueryAllRateLimitsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAllRateLimitsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAllRateLimitsRequest>): QueryAllRateLimitsRequest {
    const message = createBaseQueryAllRateLimitsRequest();
    return message;
  },
  fromAmino(_: QueryAllRateLimitsRequestAmino): QueryAllRateLimitsRequest {
    const message = createBaseQueryAllRateLimitsRequest();
    return message;
  },
  toAmino(_: QueryAllRateLimitsRequest): QueryAllRateLimitsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllRateLimitsRequestAminoMsg): QueryAllRateLimitsRequest {
    return QueryAllRateLimitsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRateLimitsRequestProtoMsg): QueryAllRateLimitsRequest {
    return QueryAllRateLimitsRequest.decode(message.value);
  },
  toProto(message: QueryAllRateLimitsRequest): Uint8Array {
    return QueryAllRateLimitsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRateLimitsRequest): QueryAllRateLimitsRequestProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryAllRateLimitsRequest",
      value: QueryAllRateLimitsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllRateLimitsResponse(): QueryAllRateLimitsResponse {
  return {
    rateLimits: []
  };
}
export const QueryAllRateLimitsResponse = {
  typeUrl: "/stride.ratelimit.QueryAllRateLimitsResponse",
  encode(message: QueryAllRateLimitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRateLimitsResponse {
    return {
      rateLimits: Array.isArray(object?.rateLimits) ? object.rateLimits.map((e: any) => RateLimit.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAllRateLimitsResponse>): QueryAllRateLimitsResponse {
    const message = createBaseQueryAllRateLimitsResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllRateLimitsResponseAmino): QueryAllRateLimitsResponse {
    const message = createBaseQueryAllRateLimitsResponse();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllRateLimitsResponse): QueryAllRateLimitsResponseAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllRateLimitsResponseAminoMsg): QueryAllRateLimitsResponse {
    return QueryAllRateLimitsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRateLimitsResponseProtoMsg): QueryAllRateLimitsResponse {
    return QueryAllRateLimitsResponse.decode(message.value);
  },
  toProto(message: QueryAllRateLimitsResponse): Uint8Array {
    return QueryAllRateLimitsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRateLimitsResponse): QueryAllRateLimitsResponseProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryAllRateLimitsResponse",
      value: QueryAllRateLimitsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitRequest(): QueryRateLimitRequest {
  return {
    denom: "",
    channelId: ""
  };
}
export const QueryRateLimitRequest = {
  typeUrl: "/stride.ratelimit.QueryRateLimitRequest",
  encode(message: QueryRateLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  fromJSON(object: any): QueryRateLimitRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  fromPartial(object: Partial<QueryRateLimitRequest>): QueryRateLimitRequest {
    const message = createBaseQueryRateLimitRequest();
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: QueryRateLimitRequestAmino): QueryRateLimitRequest {
    const message = createBaseQueryRateLimitRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryRateLimitRequest): QueryRateLimitRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitRequestAminoMsg): QueryRateLimitRequest {
    return QueryRateLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitRequestProtoMsg): QueryRateLimitRequest {
    return QueryRateLimitRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitRequest): Uint8Array {
    return QueryRateLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitRequest): QueryRateLimitRequestProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryRateLimitRequest",
      value: QueryRateLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitResponse(): QueryRateLimitResponse {
  return {
    rateLimit: undefined
  };
}
export const QueryRateLimitResponse = {
  typeUrl: "/stride.ratelimit.QueryRateLimitResponse",
  encode(message: QueryRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rateLimit !== undefined) {
      RateLimit.encode(message.rateLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRateLimitResponse {
    return {
      rateLimit: isSet(object.rateLimit) ? RateLimit.fromJSON(object.rateLimit) : undefined
    };
  },
  fromPartial(object: Partial<QueryRateLimitResponse>): QueryRateLimitResponse {
    const message = createBaseQueryRateLimitResponse();
    message.rateLimit = object.rateLimit !== undefined && object.rateLimit !== null ? RateLimit.fromPartial(object.rateLimit) : undefined;
    return message;
  },
  fromAmino(object: QueryRateLimitResponseAmino): QueryRateLimitResponse {
    const message = createBaseQueryRateLimitResponse();
    if (object.rate_limit !== undefined && object.rate_limit !== null) {
      message.rateLimit = RateLimit.fromAmino(object.rate_limit);
    }
    return message;
  },
  toAmino(message: QueryRateLimitResponse): QueryRateLimitResponseAmino {
    const obj: any = {};
    obj.rate_limit = message.rateLimit ? RateLimit.toAmino(message.rateLimit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitResponseAminoMsg): QueryRateLimitResponse {
    return QueryRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitResponseProtoMsg): QueryRateLimitResponse {
    return QueryRateLimitResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitResponse): Uint8Array {
    return QueryRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitResponse): QueryRateLimitResponseProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryRateLimitResponse",
      value: QueryRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChainIdRequest(): QueryRateLimitsByChainIdRequest {
  return {
    chainId: ""
  };
}
export const QueryRateLimitsByChainIdRequest = {
  typeUrl: "/stride.ratelimit.QueryRateLimitsByChainIdRequest",
  encode(message: QueryRateLimitsByChainIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryRateLimitsByChainIdRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<QueryRateLimitsByChainIdRequest>): QueryRateLimitsByChainIdRequest {
    const message = createBaseQueryRateLimitsByChainIdRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryRateLimitsByChainIdRequestAmino): QueryRateLimitsByChainIdRequest {
    const message = createBaseQueryRateLimitsByChainIdRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryRateLimitsByChainIdRequest): QueryRateLimitsByChainIdRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChainIdRequestAminoMsg): QueryRateLimitsByChainIdRequest {
    return QueryRateLimitsByChainIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChainIdRequestProtoMsg): QueryRateLimitsByChainIdRequest {
    return QueryRateLimitsByChainIdRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChainIdRequest): Uint8Array {
    return QueryRateLimitsByChainIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChainIdRequest): QueryRateLimitsByChainIdRequestProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryRateLimitsByChainIdRequest",
      value: QueryRateLimitsByChainIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChainIdResponse(): QueryRateLimitsByChainIdResponse {
  return {
    rateLimits: []
  };
}
export const QueryRateLimitsByChainIdResponse = {
  typeUrl: "/stride.ratelimit.QueryRateLimitsByChainIdResponse",
  encode(message: QueryRateLimitsByChainIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRateLimitsByChainIdResponse {
    return {
      rateLimits: Array.isArray(object?.rateLimits) ? object.rateLimits.map((e: any) => RateLimit.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryRateLimitsByChainIdResponse>): QueryRateLimitsByChainIdResponse {
    const message = createBaseQueryRateLimitsByChainIdResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRateLimitsByChainIdResponseAmino): QueryRateLimitsByChainIdResponse {
    const message = createBaseQueryRateLimitsByChainIdResponse();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRateLimitsByChainIdResponse): QueryRateLimitsByChainIdResponseAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChainIdResponseAminoMsg): QueryRateLimitsByChainIdResponse {
    return QueryRateLimitsByChainIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChainIdResponseProtoMsg): QueryRateLimitsByChainIdResponse {
    return QueryRateLimitsByChainIdResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChainIdResponse): Uint8Array {
    return QueryRateLimitsByChainIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChainIdResponse): QueryRateLimitsByChainIdResponseProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryRateLimitsByChainIdResponse",
      value: QueryRateLimitsByChainIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChannelIdRequest(): QueryRateLimitsByChannelIdRequest {
  return {
    channelId: ""
  };
}
export const QueryRateLimitsByChannelIdRequest = {
  typeUrl: "/stride.ratelimit.QueryRateLimitsByChannelIdRequest",
  encode(message: QueryRateLimitsByChannelIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    return writer;
  },
  fromJSON(object: any): QueryRateLimitsByChannelIdRequest {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  fromPartial(object: Partial<QueryRateLimitsByChannelIdRequest>): QueryRateLimitsByChannelIdRequest {
    const message = createBaseQueryRateLimitsByChannelIdRequest();
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: QueryRateLimitsByChannelIdRequestAmino): QueryRateLimitsByChannelIdRequest {
    const message = createBaseQueryRateLimitsByChannelIdRequest();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryRateLimitsByChannelIdRequest): QueryRateLimitsByChannelIdRequestAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChannelIdRequestAminoMsg): QueryRateLimitsByChannelIdRequest {
    return QueryRateLimitsByChannelIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChannelIdRequestProtoMsg): QueryRateLimitsByChannelIdRequest {
    return QueryRateLimitsByChannelIdRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChannelIdRequest): Uint8Array {
    return QueryRateLimitsByChannelIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChannelIdRequest): QueryRateLimitsByChannelIdRequestProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryRateLimitsByChannelIdRequest",
      value: QueryRateLimitsByChannelIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChannelIdResponse(): QueryRateLimitsByChannelIdResponse {
  return {
    rateLimits: []
  };
}
export const QueryRateLimitsByChannelIdResponse = {
  typeUrl: "/stride.ratelimit.QueryRateLimitsByChannelIdResponse",
  encode(message: QueryRateLimitsByChannelIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRateLimitsByChannelIdResponse {
    return {
      rateLimits: Array.isArray(object?.rateLimits) ? object.rateLimits.map((e: any) => RateLimit.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryRateLimitsByChannelIdResponse>): QueryRateLimitsByChannelIdResponse {
    const message = createBaseQueryRateLimitsByChannelIdResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRateLimitsByChannelIdResponseAmino): QueryRateLimitsByChannelIdResponse {
    const message = createBaseQueryRateLimitsByChannelIdResponse();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRateLimitsByChannelIdResponse): QueryRateLimitsByChannelIdResponseAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChannelIdResponseAminoMsg): QueryRateLimitsByChannelIdResponse {
    return QueryRateLimitsByChannelIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChannelIdResponseProtoMsg): QueryRateLimitsByChannelIdResponse {
    return QueryRateLimitsByChannelIdResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChannelIdResponse): Uint8Array {
    return QueryRateLimitsByChannelIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChannelIdResponse): QueryRateLimitsByChannelIdResponseProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryRateLimitsByChannelIdResponse",
      value: QueryRateLimitsByChannelIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBlacklistedDenomsRequest(): QueryAllBlacklistedDenomsRequest {
  return {};
}
export const QueryAllBlacklistedDenomsRequest = {
  typeUrl: "/stride.ratelimit.QueryAllBlacklistedDenomsRequest",
  encode(_: QueryAllBlacklistedDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAllBlacklistedDenomsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAllBlacklistedDenomsRequest>): QueryAllBlacklistedDenomsRequest {
    const message = createBaseQueryAllBlacklistedDenomsRequest();
    return message;
  },
  fromAmino(_: QueryAllBlacklistedDenomsRequestAmino): QueryAllBlacklistedDenomsRequest {
    const message = createBaseQueryAllBlacklistedDenomsRequest();
    return message;
  },
  toAmino(_: QueryAllBlacklistedDenomsRequest): QueryAllBlacklistedDenomsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllBlacklistedDenomsRequestAminoMsg): QueryAllBlacklistedDenomsRequest {
    return QueryAllBlacklistedDenomsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBlacklistedDenomsRequestProtoMsg): QueryAllBlacklistedDenomsRequest {
    return QueryAllBlacklistedDenomsRequest.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedDenomsRequest): Uint8Array {
    return QueryAllBlacklistedDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedDenomsRequest): QueryAllBlacklistedDenomsRequestProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryAllBlacklistedDenomsRequest",
      value: QueryAllBlacklistedDenomsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBlacklistedDenomsResponse(): QueryAllBlacklistedDenomsResponse {
  return {
    denoms: []
  };
}
export const QueryAllBlacklistedDenomsResponse = {
  typeUrl: "/stride.ratelimit.QueryAllBlacklistedDenomsResponse",
  encode(message: QueryAllBlacklistedDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryAllBlacklistedDenomsResponse {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAllBlacklistedDenomsResponse>): QueryAllBlacklistedDenomsResponse {
    const message = createBaseQueryAllBlacklistedDenomsResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAllBlacklistedDenomsResponseAmino): QueryAllBlacklistedDenomsResponse {
    const message = createBaseQueryAllBlacklistedDenomsResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAllBlacklistedDenomsResponse): QueryAllBlacklistedDenomsResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllBlacklistedDenomsResponseAminoMsg): QueryAllBlacklistedDenomsResponse {
    return QueryAllBlacklistedDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBlacklistedDenomsResponseProtoMsg): QueryAllBlacklistedDenomsResponse {
    return QueryAllBlacklistedDenomsResponse.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedDenomsResponse): Uint8Array {
    return QueryAllBlacklistedDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedDenomsResponse): QueryAllBlacklistedDenomsResponseProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryAllBlacklistedDenomsResponse",
      value: QueryAllBlacklistedDenomsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllWhitelistedAddressesRequest(): QueryAllWhitelistedAddressesRequest {
  return {};
}
export const QueryAllWhitelistedAddressesRequest = {
  typeUrl: "/stride.ratelimit.QueryAllWhitelistedAddressesRequest",
  encode(_: QueryAllWhitelistedAddressesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAllWhitelistedAddressesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAllWhitelistedAddressesRequest>): QueryAllWhitelistedAddressesRequest {
    const message = createBaseQueryAllWhitelistedAddressesRequest();
    return message;
  },
  fromAmino(_: QueryAllWhitelistedAddressesRequestAmino): QueryAllWhitelistedAddressesRequest {
    const message = createBaseQueryAllWhitelistedAddressesRequest();
    return message;
  },
  toAmino(_: QueryAllWhitelistedAddressesRequest): QueryAllWhitelistedAddressesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllWhitelistedAddressesRequestAminoMsg): QueryAllWhitelistedAddressesRequest {
    return QueryAllWhitelistedAddressesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhitelistedAddressesRequestProtoMsg): QueryAllWhitelistedAddressesRequest {
    return QueryAllWhitelistedAddressesRequest.decode(message.value);
  },
  toProto(message: QueryAllWhitelistedAddressesRequest): Uint8Array {
    return QueryAllWhitelistedAddressesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedAddressesRequest): QueryAllWhitelistedAddressesRequestProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryAllWhitelistedAddressesRequest",
      value: QueryAllWhitelistedAddressesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllWhitelistedAddressesResponse(): QueryAllWhitelistedAddressesResponse {
  return {
    addressPairs: []
  };
}
export const QueryAllWhitelistedAddressesResponse = {
  typeUrl: "/stride.ratelimit.QueryAllWhitelistedAddressesResponse",
  encode(message: QueryAllWhitelistedAddressesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addressPairs) {
      WhitelistedAddressPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllWhitelistedAddressesResponse {
    return {
      addressPairs: Array.isArray(object?.addressPairs) ? object.addressPairs.map((e: any) => WhitelistedAddressPair.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAllWhitelistedAddressesResponse>): QueryAllWhitelistedAddressesResponse {
    const message = createBaseQueryAllWhitelistedAddressesResponse();
    message.addressPairs = object.addressPairs?.map(e => WhitelistedAddressPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllWhitelistedAddressesResponseAmino): QueryAllWhitelistedAddressesResponse {
    const message = createBaseQueryAllWhitelistedAddressesResponse();
    message.addressPairs = object.address_pairs?.map(e => WhitelistedAddressPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllWhitelistedAddressesResponse): QueryAllWhitelistedAddressesResponseAmino {
    const obj: any = {};
    if (message.addressPairs) {
      obj.address_pairs = message.addressPairs.map(e => e ? WhitelistedAddressPair.toAmino(e) : undefined);
    } else {
      obj.address_pairs = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllWhitelistedAddressesResponseAminoMsg): QueryAllWhitelistedAddressesResponse {
    return QueryAllWhitelistedAddressesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhitelistedAddressesResponseProtoMsg): QueryAllWhitelistedAddressesResponse {
    return QueryAllWhitelistedAddressesResponse.decode(message.value);
  },
  toProto(message: QueryAllWhitelistedAddressesResponse): Uint8Array {
    return QueryAllWhitelistedAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedAddressesResponse): QueryAllWhitelistedAddressesResponseProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.QueryAllWhitelistedAddressesResponse",
      value: QueryAllWhitelistedAddressesResponse.encode(message).finish()
    };
  }
};