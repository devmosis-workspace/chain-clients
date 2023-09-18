import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAuctionRequest, QueryAuctionResponse, QueryAuctionsRequest, QueryAuctionsResponse, QueryNextAuctionIDRequest, QueryNextAuctionIDResponse } from "./query";
/** Query defines the gRPC querier service for auction module */
export interface Query {
  /** Params queries all parameters of the auction module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Auction queries an individual Auction by auction ID */
  auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
  /** Auctions queries auctions filtered by asset denom, owner address, phase, and auction type */
  auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
  /** NextAuctionID queries the next auction ID */
  nextAuctionID(request?: QueryNextAuctionIDRequest): Promise<QueryNextAuctionIDResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.auction = this.auction.bind(this);
    this.auctions = this.auctions.bind(this);
    this.nextAuctionID = this.nextAuctionID.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.auction.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("kava.auction.v1beta1.Query", "Auction", data);
    return promise.then(data => QueryAuctionResponse.decode(new BinaryReader(data)));
  }
  auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.auction.v1beta1.Query", "Auctions", data);
    return promise.then(data => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
  nextAuctionID(request: QueryNextAuctionIDRequest = {}): Promise<QueryNextAuctionIDResponse> {
    const data = QueryNextAuctionIDRequest.encode(request).finish();
    const promise = this.rpc.request("kava.auction.v1beta1.Query", "NextAuctionID", data);
    return promise.then(data => QueryNextAuctionIDResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
      return queryService.auction(request);
    },
    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
      return queryService.auctions(request);
    },
    nextAuctionID(request?: QueryNextAuctionIDRequest): Promise<QueryNextAuctionIDResponse> {
      return queryService.nextAuctionID(request);
    }
  };
};