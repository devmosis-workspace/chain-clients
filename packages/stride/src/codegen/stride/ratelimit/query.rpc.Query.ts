import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllRateLimitsRequest, QueryAllRateLimitsResponse, QueryRateLimitRequest, QueryRateLimitResponse, QueryRateLimitsByChainIdRequest, QueryRateLimitsByChainIdResponse, QueryRateLimitsByChannelIdRequest, QueryRateLimitsByChannelIdResponse, QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponse, QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  allRateLimits(request?: QueryAllRateLimitsRequest): Promise<QueryAllRateLimitsResponse>;
  rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse>;
  rateLimitsByChainId(request: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponse>;
  rateLimitsByChannelId(request: QueryRateLimitsByChannelIdRequest): Promise<QueryRateLimitsByChannelIdResponse>;
  allBlacklistedDenoms(request?: QueryAllBlacklistedDenomsRequest): Promise<QueryAllBlacklistedDenomsResponse>;
  allWhitelistedAddresses(request?: QueryAllWhitelistedAddressesRequest): Promise<QueryAllWhitelistedAddressesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allRateLimits = this.allRateLimits.bind(this);
    this.rateLimit = this.rateLimit.bind(this);
    this.rateLimitsByChainId = this.rateLimitsByChainId.bind(this);
    this.rateLimitsByChannelId = this.rateLimitsByChannelId.bind(this);
    this.allBlacklistedDenoms = this.allBlacklistedDenoms.bind(this);
    this.allWhitelistedAddresses = this.allWhitelistedAddresses.bind(this);
  }
  allRateLimits(request: QueryAllRateLimitsRequest = {}): Promise<QueryAllRateLimitsResponse> {
    const data = QueryAllRateLimitsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "AllRateLimits", data);
    return promise.then(data => QueryAllRateLimitsResponse.decode(new BinaryReader(data)));
  }
  rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse> {
    const data = QueryRateLimitRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "RateLimit", data);
    return promise.then(data => QueryRateLimitResponse.decode(new BinaryReader(data)));
  }
  rateLimitsByChainId(request: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponse> {
    const data = QueryRateLimitsByChainIdRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "RateLimitsByChainId", data);
    return promise.then(data => QueryRateLimitsByChainIdResponse.decode(new BinaryReader(data)));
  }
  rateLimitsByChannelId(request: QueryRateLimitsByChannelIdRequest): Promise<QueryRateLimitsByChannelIdResponse> {
    const data = QueryRateLimitsByChannelIdRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "RateLimitsByChannelId", data);
    return promise.then(data => QueryRateLimitsByChannelIdResponse.decode(new BinaryReader(data)));
  }
  allBlacklistedDenoms(request: QueryAllBlacklistedDenomsRequest = {}): Promise<QueryAllBlacklistedDenomsResponse> {
    const data = QueryAllBlacklistedDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "AllBlacklistedDenoms", data);
    return promise.then(data => QueryAllBlacklistedDenomsResponse.decode(new BinaryReader(data)));
  }
  allWhitelistedAddresses(request: QueryAllWhitelistedAddressesRequest = {}): Promise<QueryAllWhitelistedAddressesResponse> {
    const data = QueryAllWhitelistedAddressesRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "AllWhitelistedAddresses", data);
    return promise.then(data => QueryAllWhitelistedAddressesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allRateLimits(request?: QueryAllRateLimitsRequest): Promise<QueryAllRateLimitsResponse> {
      return queryService.allRateLimits(request);
    },
    rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse> {
      return queryService.rateLimit(request);
    },
    rateLimitsByChainId(request: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponse> {
      return queryService.rateLimitsByChainId(request);
    },
    rateLimitsByChannelId(request: QueryRateLimitsByChannelIdRequest): Promise<QueryRateLimitsByChannelIdResponse> {
      return queryService.rateLimitsByChannelId(request);
    },
    allBlacklistedDenoms(request?: QueryAllBlacklistedDenomsRequest): Promise<QueryAllBlacklistedDenomsResponse> {
      return queryService.allBlacklistedDenoms(request);
    },
    allWhitelistedAddresses(request?: QueryAllWhitelistedAddressesRequest): Promise<QueryAllWhitelistedAddressesResponse> {
      return queryService.allWhitelistedAddresses(request);
    }
  };
};