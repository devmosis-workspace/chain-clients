import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    listings(request: QueryListingsRequest): Promise<QueryListingsResponse>;
    listing(request: QueryListingRequest): Promise<QueryListingResponse>;
    listingsByOwner(request: QueryListingsByOwnerRequest): Promise<QueryListingsByOwnerResponse>;
    listingsByPriceDenom(request: QueryListingsByPriceDenomRequest): Promise<QueryListingsByPriceDenomResponse>;
    listingByNftId(request: QueryListingByNFTIDRequest): Promise<QueryListingResponse>;
    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
    auctionsByOwner(request: QueryAuctionsByOwnerRequest): Promise<QueryAuctionsResponse>;
    auctionsByPriceDenom(request: QueryAuctionsByPriceDenomRequest): Promise<QueryAuctionsResponse>;
    auctionByNftId(request: QueryAuctionByNFTIDRequest): Promise<QueryAuctionResponse>;
    bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    bid(request: QueryBidRequest): Promise<QueryBidResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    listings(request: QueryListingsRequest): Promise<QueryListingsResponse>;
    listing(request: QueryListingRequest): Promise<QueryListingResponse>;
    listingsByOwner(request: QueryListingsByOwnerRequest): Promise<QueryListingsByOwnerResponse>;
    listingsByPriceDenom(request: QueryListingsByPriceDenomRequest): Promise<QueryListingsByPriceDenomResponse>;
    listingByNftId(request: QueryListingByNFTIDRequest): Promise<QueryListingResponse>;
    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
    auctionsByOwner(request: QueryAuctionsByOwnerRequest): Promise<QueryAuctionsResponse>;
    auctionsByPriceDenom(request: QueryAuctionsByPriceDenomRequest): Promise<QueryAuctionsResponse>;
    auctionByNftId(request: QueryAuctionByNFTIDRequest): Promise<QueryAuctionResponse>;
    bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    bid(request: QueryBidRequest): Promise<QueryBidResponse>;
};
