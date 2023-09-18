import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryListingsRequest, QueryListingsResponseSDKType, QueryListingRequest, QueryListingResponseSDKType, QueryListingsByOwnerRequest, QueryListingsByOwnerResponseSDKType, QueryListingsByPriceDenomRequest, QueryListingsByPriceDenomResponseSDKType, QueryListingByNFTIDRequest, QueryAuctionsRequest, QueryAuctionsResponseSDKType, QueryAuctionRequest, QueryAuctionResponseSDKType, QueryAuctionsByOwnerRequest, QueryAuctionsByPriceDenomRequest, QueryAuctionByNFTIDRequest, QueryBidsRequest, QueryBidsResponseSDKType, QueryBidRequest, QueryBidResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Params queries params of the marketplace module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `omniflix/marketplace/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Listings */
  async listings(params: QueryListingsRequest): Promise<QueryListingsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.priceDenom !== "undefined") {
      options.params.price_denom = params.priceDenom;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/marketplace/v1beta1/listings`;
    return await this.req.get<QueryListingsResponseSDKType>(endpoint, options);
  }
  /* Listing */
  async listing(params: QueryListingRequest): Promise<QueryListingResponseSDKType> {
    const endpoint = `omniflix/marketplace/v1beta1/listings/${params.id}`;
    return await this.req.get<QueryListingResponseSDKType>(endpoint);
  }
  /* ListingsByOwner */
  async listingsByOwner(params: QueryListingsByOwnerRequest): Promise<QueryListingsByOwnerResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/marketplace/v1beta1/listings-by-owner/${params.owner}`;
    return await this.req.get<QueryListingsByOwnerResponseSDKType>(endpoint, options);
  }
  /* ListingsByPriceDenom */
  async listingsByPriceDenom(params: QueryListingsByPriceDenomRequest): Promise<QueryListingsByPriceDenomResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/marketplace/v1beta1/listings-by-price-denom/${params.priceDenom}`;
    return await this.req.get<QueryListingsByPriceDenomResponseSDKType>(endpoint, options);
  }
  /* ListingByNftId */
  async listingByNftId(params: QueryListingByNFTIDRequest): Promise<QueryListingResponseSDKType> {
    const endpoint = `omniflix/marketplace/v1beta1/listing-by-nft/${params.nftId}`;
    return await this.req.get<QueryListingResponseSDKType>(endpoint);
  }
  /* auction queries */
  async auctions(params: QueryAuctionsRequest): Promise<QueryAuctionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.priceDenom !== "undefined") {
      options.params.price_denom = params.priceDenom;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/marketplace/v1beta1/auctions`;
    return await this.req.get<QueryAuctionsResponseSDKType>(endpoint, options);
  }
  /* Auction */
  async auction(params: QueryAuctionRequest): Promise<QueryAuctionResponseSDKType> {
    const endpoint = `omniflix/marketplace/v1beta1/auctions/${params.id}`;
    return await this.req.get<QueryAuctionResponseSDKType>(endpoint);
  }
  /* AuctionsByOwner */
  async auctionsByOwner(params: QueryAuctionsByOwnerRequest): Promise<QueryAuctionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/marketplace/v1beta1/auctions-by-owner/${params.owner}`;
    return await this.req.get<QueryAuctionsResponseSDKType>(endpoint, options);
  }
  /* AuctionsByPriceDenom */
  async auctionsByPriceDenom(params: QueryAuctionsByPriceDenomRequest): Promise<QueryAuctionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/marketplace/v1beta1/auctions-by-price-denom/${params.priceDenom}`;
    return await this.req.get<QueryAuctionsResponseSDKType>(endpoint, options);
  }
  /* AuctionByNftId */
  async auctionByNftId(params: QueryAuctionByNFTIDRequest): Promise<QueryAuctionResponseSDKType> {
    const endpoint = `omniflix/marketplace/v1beta1/auction-by-nft/${params.nftId}`;
    return await this.req.get<QueryAuctionResponseSDKType>(endpoint);
  }
  /* Bids */
  async bids(params: QueryBidsRequest): Promise<QueryBidsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.bidder !== "undefined") {
      options.params.bidder = params.bidder;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/marketplace/v1beta1/bids`;
    return await this.req.get<QueryBidsResponseSDKType>(endpoint, options);
  }
  /* Bid */
  async bid(params: QueryBidRequest): Promise<QueryBidResponseSDKType> {
    const endpoint = `omniflix/marketplace/v1beta1/bids/${params.id}`;
    return await this.req.get<QueryBidResponseSDKType>(endpoint);
  }
}