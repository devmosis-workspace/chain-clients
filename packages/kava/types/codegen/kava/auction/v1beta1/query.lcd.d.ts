import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAuctionRequest, QueryAuctionResponseSDKType, QueryAuctionsRequest, QueryAuctionsResponseSDKType, QueryNextAuctionIDRequest, QueryNextAuctionIDResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    auction(params: QueryAuctionRequest): Promise<QueryAuctionResponseSDKType>;
    auctions(params: QueryAuctionsRequest): Promise<QueryAuctionsResponseSDKType>;
    nextAuctionID(_params?: QueryNextAuctionIDRequest): Promise<QueryNextAuctionIDResponseSDKType>;
}
