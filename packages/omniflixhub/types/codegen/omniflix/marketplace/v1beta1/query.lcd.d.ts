import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryListingsRequest, QueryListingsResponseSDKType, QueryListingRequest, QueryListingResponseSDKType, QueryListingsByOwnerRequest, QueryListingsByOwnerResponseSDKType, QueryListingsByPriceDenomRequest, QueryListingsByPriceDenomResponseSDKType, QueryListingByNFTIDRequest, QueryAuctionsRequest, QueryAuctionsResponseSDKType, QueryAuctionRequest, QueryAuctionResponseSDKType, QueryAuctionsByOwnerRequest, QueryAuctionsByPriceDenomRequest, QueryAuctionByNFTIDRequest, QueryBidsRequest, QueryBidsResponseSDKType, QueryBidRequest, QueryBidResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    listings(params: QueryListingsRequest): Promise<QueryListingsResponseSDKType>;
    listing(params: QueryListingRequest): Promise<QueryListingResponseSDKType>;
    listingsByOwner(params: QueryListingsByOwnerRequest): Promise<QueryListingsByOwnerResponseSDKType>;
    listingsByPriceDenom(params: QueryListingsByPriceDenomRequest): Promise<QueryListingsByPriceDenomResponseSDKType>;
    listingByNftId(params: QueryListingByNFTIDRequest): Promise<QueryListingResponseSDKType>;
    auctions(params: QueryAuctionsRequest): Promise<QueryAuctionsResponseSDKType>;
    auction(params: QueryAuctionRequest): Promise<QueryAuctionResponseSDKType>;
    auctionsByOwner(params: QueryAuctionsByOwnerRequest): Promise<QueryAuctionsResponseSDKType>;
    auctionsByPriceDenom(params: QueryAuctionsByPriceDenomRequest): Promise<QueryAuctionsResponseSDKType>;
    auctionByNftId(params: QueryAuctionByNFTIDRequest): Promise<QueryAuctionResponseSDKType>;
    bids(params: QueryBidsRequest): Promise<QueryBidsResponseSDKType>;
    bid(params: QueryBidRequest): Promise<QueryBidResponseSDKType>;
}
