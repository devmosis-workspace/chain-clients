import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryActiveAuctionRequest, QueryActiveAuctionResponseSDKType, QueryEndedAuctionRequest, QueryEndedAuctionResponseSDKType, QueryActiveAuctionsRequest, QueryActiveAuctionsResponseSDKType, QueryEndedAuctionsRequest, QueryEndedAuctionsResponseSDKType, QueryBidRequest, QueryBidResponseSDKType, QueryBidsByAuctionRequest, QueryBidsByAuctionResponseSDKType, QueryTokenPriceRequest, QueryTokenPriceResponseSDKType, QueryTokenPricesRequest, QueryTokenPricesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    queryParams(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    queryActiveAuction(params: QueryActiveAuctionRequest): Promise<QueryActiveAuctionResponseSDKType>;
    queryEndedAuction(params: QueryEndedAuctionRequest): Promise<QueryEndedAuctionResponseSDKType>;
    queryActiveAuctions(_params?: QueryActiveAuctionsRequest): Promise<QueryActiveAuctionsResponseSDKType>;
    queryEndedAuctions(params?: QueryEndedAuctionsRequest): Promise<QueryEndedAuctionsResponseSDKType>;
    queryBid(params: QueryBidRequest): Promise<QueryBidResponseSDKType>;
    queryBidsByAuction(params: QueryBidsByAuctionRequest): Promise<QueryBidsByAuctionResponseSDKType>;
    queryTokenPrice(params: QueryTokenPriceRequest): Promise<QueryTokenPriceResponseSDKType>;
    queryTokenPrices(_params?: QueryTokenPricesRequest): Promise<QueryTokenPricesResponseSDKType>;
}
