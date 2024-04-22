import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryActiveAuctionRequest, QueryActiveAuctionResponse, QueryEndedAuctionRequest, QueryEndedAuctionResponse, QueryActiveAuctionsRequest, QueryActiveAuctionsResponse, QueryEndedAuctionsRequest, QueryEndedAuctionsResponse, QueryBidRequest, QueryBidResponse, QueryBidsByAuctionRequest, QueryBidsByAuctionResponse, QueryTokenPriceRequest, QueryTokenPriceResponse, QueryTokenPricesRequest, QueryTokenPricesResponse } from "./query";
export interface Query {
  queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  queryActiveAuction(request: QueryActiveAuctionRequest): Promise<QueryActiveAuctionResponse>;
  queryEndedAuction(request: QueryEndedAuctionRequest): Promise<QueryEndedAuctionResponse>;
  queryActiveAuctions(request?: QueryActiveAuctionsRequest): Promise<QueryActiveAuctionsResponse>;
  queryEndedAuctions(request?: QueryEndedAuctionsRequest): Promise<QueryEndedAuctionsResponse>;
  queryBid(request: QueryBidRequest): Promise<QueryBidResponse>;
  queryBidsByAuction(request: QueryBidsByAuctionRequest): Promise<QueryBidsByAuctionResponse>;
  queryTokenPrice(request: QueryTokenPriceRequest): Promise<QueryTokenPriceResponse>;
  queryTokenPrices(request?: QueryTokenPricesRequest): Promise<QueryTokenPricesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryParams = this.queryParams.bind(this);
    this.queryActiveAuction = this.queryActiveAuction.bind(this);
    this.queryEndedAuction = this.queryEndedAuction.bind(this);
    this.queryActiveAuctions = this.queryActiveAuctions.bind(this);
    this.queryEndedAuctions = this.queryEndedAuctions.bind(this);
    this.queryBid = this.queryBid.bind(this);
    this.queryBidsByAuction = this.queryBidsByAuction.bind(this);
    this.queryTokenPrice = this.queryTokenPrice.bind(this);
    this.queryTokenPrices = this.queryTokenPrices.bind(this);
  }
  queryParams(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "QueryParams", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  queryActiveAuction(request: QueryActiveAuctionRequest): Promise<QueryActiveAuctionResponse> {
    const data = QueryActiveAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "QueryActiveAuction", data);
    return promise.then(data => QueryActiveAuctionResponse.decode(new BinaryReader(data)));
  }
  queryEndedAuction(request: QueryEndedAuctionRequest): Promise<QueryEndedAuctionResponse> {
    const data = QueryEndedAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "QueryEndedAuction", data);
    return promise.then(data => QueryEndedAuctionResponse.decode(new BinaryReader(data)));
  }
  queryActiveAuctions(request: QueryActiveAuctionsRequest = {}): Promise<QueryActiveAuctionsResponse> {
    const data = QueryActiveAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "QueryActiveAuctions", data);
    return promise.then(data => QueryActiveAuctionsResponse.decode(new BinaryReader(data)));
  }
  queryEndedAuctions(request: QueryEndedAuctionsRequest = {
    pagination: undefined
  }): Promise<QueryEndedAuctionsResponse> {
    const data = QueryEndedAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "QueryEndedAuctions", data);
    return promise.then(data => QueryEndedAuctionsResponse.decode(new BinaryReader(data)));
  }
  queryBid(request: QueryBidRequest): Promise<QueryBidResponse> {
    const data = QueryBidRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "QueryBid", data);
    return promise.then(data => QueryBidResponse.decode(new BinaryReader(data)));
  }
  queryBidsByAuction(request: QueryBidsByAuctionRequest): Promise<QueryBidsByAuctionResponse> {
    const data = QueryBidsByAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "QueryBidsByAuction", data);
    return promise.then(data => QueryBidsByAuctionResponse.decode(new BinaryReader(data)));
  }
  queryTokenPrice(request: QueryTokenPriceRequest): Promise<QueryTokenPriceResponse> {
    const data = QueryTokenPriceRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "QueryTokenPrice", data);
    return promise.then(data => QueryTokenPriceResponse.decode(new BinaryReader(data)));
  }
  queryTokenPrices(request: QueryTokenPricesRequest = {}): Promise<QueryTokenPricesResponse> {
    const data = QueryTokenPricesRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "QueryTokenPrices", data);
    return promise.then(data => QueryTokenPricesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.queryParams(request);
    },
    queryActiveAuction(request: QueryActiveAuctionRequest): Promise<QueryActiveAuctionResponse> {
      return queryService.queryActiveAuction(request);
    },
    queryEndedAuction(request: QueryEndedAuctionRequest): Promise<QueryEndedAuctionResponse> {
      return queryService.queryEndedAuction(request);
    },
    queryActiveAuctions(request?: QueryActiveAuctionsRequest): Promise<QueryActiveAuctionsResponse> {
      return queryService.queryActiveAuctions(request);
    },
    queryEndedAuctions(request?: QueryEndedAuctionsRequest): Promise<QueryEndedAuctionsResponse> {
      return queryService.queryEndedAuctions(request);
    },
    queryBid(request: QueryBidRequest): Promise<QueryBidResponse> {
      return queryService.queryBid(request);
    },
    queryBidsByAuction(request: QueryBidsByAuctionRequest): Promise<QueryBidsByAuctionResponse> {
      return queryService.queryBidsByAuction(request);
    },
    queryTokenPrice(request: QueryTokenPriceRequest): Promise<QueryTokenPriceResponse> {
      return queryService.queryTokenPrice(request);
    },
    queryTokenPrices(request?: QueryTokenPricesRequest): Promise<QueryTokenPricesResponse> {
      return queryService.queryTokenPrices(request);
    }
  };
};