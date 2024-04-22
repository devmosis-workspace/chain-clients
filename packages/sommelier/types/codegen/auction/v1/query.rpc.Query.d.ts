import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
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
export declare const createRpcQueryExtension: (base: QueryClient) => {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    queryActiveAuction(request: QueryActiveAuctionRequest): Promise<QueryActiveAuctionResponse>;
    queryEndedAuction(request: QueryEndedAuctionRequest): Promise<QueryEndedAuctionResponse>;
    queryActiveAuctions(request?: QueryActiveAuctionsRequest): Promise<QueryActiveAuctionsResponse>;
    queryEndedAuctions(request?: QueryEndedAuctionsRequest): Promise<QueryEndedAuctionsResponse>;
    queryBid(request: QueryBidRequest): Promise<QueryBidResponse>;
    queryBidsByAuction(request: QueryBidsByAuctionRequest): Promise<QueryBidsByAuctionResponse>;
    queryTokenPrice(request: QueryTokenPriceRequest): Promise<QueryTokenPriceResponse>;
    queryTokenPrices(request?: QueryTokenPricesRequest): Promise<QueryTokenPricesResponse>;
};
