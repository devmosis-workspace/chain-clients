import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryListingsRequest, QueryListingsResponse, QueryListingRequest, QueryListingResponse, QueryListingsByOwnerRequest, QueryListingsByOwnerResponse, QueryListingsByPriceDenomRequest, QueryListingsByPriceDenomResponse, QueryListingByNFTIDRequest, QueryAuctionsRequest, QueryAuctionsResponse, QueryAuctionRequest, QueryAuctionResponse, QueryAuctionsByOwnerRequest, QueryAuctionsByPriceDenomRequest, QueryAuctionByNFTIDRequest, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse } from "./query";
export interface Query {
  /** Params queries params of the marketplace module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  listings(request: QueryListingsRequest): Promise<QueryListingsResponse>;
  listing(request: QueryListingRequest): Promise<QueryListingResponse>;
  listingsByOwner(request: QueryListingsByOwnerRequest): Promise<QueryListingsByOwnerResponse>;
  listingsByPriceDenom(request: QueryListingsByPriceDenomRequest): Promise<QueryListingsByPriceDenomResponse>;
  listingByNftId(request: QueryListingByNFTIDRequest): Promise<QueryListingResponse>;
  /** auction queries */
  auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
  auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
  auctionsByOwner(request: QueryAuctionsByOwnerRequest): Promise<QueryAuctionsResponse>;
  auctionsByPriceDenom(request: QueryAuctionsByPriceDenomRequest): Promise<QueryAuctionsResponse>;
  auctionByNftId(request: QueryAuctionByNFTIDRequest): Promise<QueryAuctionResponse>;
  bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
  bid(request: QueryBidRequest): Promise<QueryBidResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.listings = this.listings.bind(this);
    this.listing = this.listing.bind(this);
    this.listingsByOwner = this.listingsByOwner.bind(this);
    this.listingsByPriceDenom = this.listingsByPriceDenom.bind(this);
    this.listingByNftId = this.listingByNftId.bind(this);
    this.auctions = this.auctions.bind(this);
    this.auction = this.auction.bind(this);
    this.auctionsByOwner = this.auctionsByOwner.bind(this);
    this.auctionsByPriceDenom = this.auctionsByPriceDenom.bind(this);
    this.auctionByNftId = this.auctionByNftId.bind(this);
    this.bids = this.bids.bind(this);
    this.bid = this.bid.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  listings(request: QueryListingsRequest): Promise<QueryListingsResponse> {
    const data = QueryListingsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Listings", data);
    return promise.then(data => QueryListingsResponse.decode(new BinaryReader(data)));
  }
  listing(request: QueryListingRequest): Promise<QueryListingResponse> {
    const data = QueryListingRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Listing", data);
    return promise.then(data => QueryListingResponse.decode(new BinaryReader(data)));
  }
  listingsByOwner(request: QueryListingsByOwnerRequest): Promise<QueryListingsByOwnerResponse> {
    const data = QueryListingsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingsByOwner", data);
    return promise.then(data => QueryListingsByOwnerResponse.decode(new BinaryReader(data)));
  }
  listingsByPriceDenom(request: QueryListingsByPriceDenomRequest): Promise<QueryListingsByPriceDenomResponse> {
    const data = QueryListingsByPriceDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingsByPriceDenom", data);
    return promise.then(data => QueryListingsByPriceDenomResponse.decode(new BinaryReader(data)));
  }
  listingByNftId(request: QueryListingByNFTIDRequest): Promise<QueryListingResponse> {
    const data = QueryListingByNFTIDRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingByNftId", data);
    return promise.then(data => QueryListingResponse.decode(new BinaryReader(data)));
  }
  auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Auctions", data);
    return promise.then(data => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
  auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Auction", data);
    return promise.then(data => QueryAuctionResponse.decode(new BinaryReader(data)));
  }
  auctionsByOwner(request: QueryAuctionsByOwnerRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionsByOwner", data);
    return promise.then(data => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
  auctionsByPriceDenom(request: QueryAuctionsByPriceDenomRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsByPriceDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionsByPriceDenom", data);
    return promise.then(data => QueryAuctionsResponse.decode(new BinaryReader(data)));
  }
  auctionByNftId(request: QueryAuctionByNFTIDRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionByNFTIDRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionByNftId", data);
    return promise.then(data => QueryAuctionResponse.decode(new BinaryReader(data)));
  }
  bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
    const data = QueryBidsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Bids", data);
    return promise.then(data => QueryBidsResponse.decode(new BinaryReader(data)));
  }
  bid(request: QueryBidRequest): Promise<QueryBidResponse> {
    const data = QueryBidRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Bid", data);
    return promise.then(data => QueryBidResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    listings(request: QueryListingsRequest): Promise<QueryListingsResponse> {
      return queryService.listings(request);
    },
    listing(request: QueryListingRequest): Promise<QueryListingResponse> {
      return queryService.listing(request);
    },
    listingsByOwner(request: QueryListingsByOwnerRequest): Promise<QueryListingsByOwnerResponse> {
      return queryService.listingsByOwner(request);
    },
    listingsByPriceDenom(request: QueryListingsByPriceDenomRequest): Promise<QueryListingsByPriceDenomResponse> {
      return queryService.listingsByPriceDenom(request);
    },
    listingByNftId(request: QueryListingByNFTIDRequest): Promise<QueryListingResponse> {
      return queryService.listingByNftId(request);
    },
    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
      return queryService.auctions(request);
    },
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
      return queryService.auction(request);
    },
    auctionsByOwner(request: QueryAuctionsByOwnerRequest): Promise<QueryAuctionsResponse> {
      return queryService.auctionsByOwner(request);
    },
    auctionsByPriceDenom(request: QueryAuctionsByPriceDenomRequest): Promise<QueryAuctionsResponse> {
      return queryService.auctionsByPriceDenom(request);
    },
    auctionByNftId(request: QueryAuctionByNFTIDRequest): Promise<QueryAuctionResponse> {
      return queryService.auctionByNftId(request);
    },
    bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
      return queryService.bids(request);
    },
    bid(request: QueryBidRequest): Promise<QueryBidResponse> {
      return queryService.bid(request);
    }
  };
};