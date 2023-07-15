import { RateLimit, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairSDKType } from "./ratelimit";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface QueryAllRateLimitsRequest {}
export interface QueryAllRateLimitsRequestSDKType {}
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
export interface QueryAllBlacklistedDenomsRequest {}
export interface QueryAllBlacklistedDenomsRequestSDKType {}
export interface QueryAllBlacklistedDenomsResponse {
  denoms: string[];
}
export interface QueryAllBlacklistedDenomsResponseSDKType {
  denoms: string[];
}
export interface QueryAllWhitelistedAddressesRequest {}
export interface QueryAllWhitelistedAddressesRequestSDKType {}
export interface QueryAllWhitelistedAddressesResponse {
  addressPairs: WhitelistedAddressPair[];
}
export interface QueryAllWhitelistedAddressesResponseSDKType {
  address_pairs: WhitelistedAddressPairSDKType[];
}
function createBaseQueryAllRateLimitsRequest(): QueryAllRateLimitsRequest {
  return {};
}
export const QueryAllRateLimitsRequest = {
  encode(_: QueryAllRateLimitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAllRateLimitsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAllRateLimitsRequest>): QueryAllRateLimitsRequest {
    const message = createBaseQueryAllRateLimitsRequest();
    return message;
  }
};
function createBaseQueryAllRateLimitsResponse(): QueryAllRateLimitsResponse {
  return {
    rateLimits: []
  };
}
export const QueryAllRateLimitsResponse = {
  encode(message: QueryAllRateLimitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryRateLimitRequest(): QueryRateLimitRequest {
  return {
    denom: "",
    channelId: ""
  };
}
export const QueryRateLimitRequest = {
  encode(message: QueryRateLimitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryRateLimitResponse(): QueryRateLimitResponse {
  return {
    rateLimit: undefined
  };
}
export const QueryRateLimitResponse = {
  encode(message: QueryRateLimitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryRateLimitsByChainIdRequest(): QueryRateLimitsByChainIdRequest {
  return {
    chainId: ""
  };
}
export const QueryRateLimitsByChainIdRequest = {
  encode(message: QueryRateLimitsByChainIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryRateLimitsByChainIdResponse(): QueryRateLimitsByChainIdResponse {
  return {
    rateLimits: []
  };
}
export const QueryRateLimitsByChainIdResponse = {
  encode(message: QueryRateLimitsByChainIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryRateLimitsByChannelIdRequest(): QueryRateLimitsByChannelIdRequest {
  return {
    channelId: ""
  };
}
export const QueryRateLimitsByChannelIdRequest = {
  encode(message: QueryRateLimitsByChannelIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryRateLimitsByChannelIdResponse(): QueryRateLimitsByChannelIdResponse {
  return {
    rateLimits: []
  };
}
export const QueryRateLimitsByChannelIdResponse = {
  encode(message: QueryRateLimitsByChannelIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryAllBlacklistedDenomsRequest(): QueryAllBlacklistedDenomsRequest {
  return {};
}
export const QueryAllBlacklistedDenomsRequest = {
  encode(_: QueryAllBlacklistedDenomsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAllBlacklistedDenomsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAllBlacklistedDenomsRequest>): QueryAllBlacklistedDenomsRequest {
    const message = createBaseQueryAllBlacklistedDenomsRequest();
    return message;
  }
};
function createBaseQueryAllBlacklistedDenomsResponse(): QueryAllBlacklistedDenomsResponse {
  return {
    denoms: []
  };
}
export const QueryAllBlacklistedDenomsResponse = {
  encode(message: QueryAllBlacklistedDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryAllWhitelistedAddressesRequest(): QueryAllWhitelistedAddressesRequest {
  return {};
}
export const QueryAllWhitelistedAddressesRequest = {
  encode(_: QueryAllWhitelistedAddressesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAllWhitelistedAddressesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAllWhitelistedAddressesRequest>): QueryAllWhitelistedAddressesRequest {
    const message = createBaseQueryAllWhitelistedAddressesRequest();
    return message;
  }
};
function createBaseQueryAllWhitelistedAddressesResponse(): QueryAllWhitelistedAddressesResponse {
  return {
    addressPairs: []
  };
}
export const QueryAllWhitelistedAddressesResponse = {
  encode(message: QueryAllWhitelistedAddressesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};