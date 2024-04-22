import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryActiveAuctionRequest, QueryActiveAuctionResponseSDKType, QueryEndedAuctionRequest, QueryEndedAuctionResponseSDKType, QueryActiveAuctionsRequest, QueryActiveAuctionsResponseSDKType, QueryEndedAuctionsRequest, QueryEndedAuctionsResponseSDKType, QueryBidRequest, QueryBidResponseSDKType, QueryBidsByAuctionRequest, QueryBidsByAuctionResponseSDKType, QueryTokenPriceRequest, QueryTokenPriceResponseSDKType, QueryTokenPricesRequest, QueryTokenPricesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* QueryParams */
  async queryParams(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `sommelier/auction/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* QueryActiveAuction */
  async queryActiveAuction(params: QueryActiveAuctionRequest): Promise<QueryActiveAuctionResponseSDKType> {
    const endpoint = `sommelier/auction/v1/active_auctions/${params.auctionId}`;
    return await this.req.get<QueryActiveAuctionResponseSDKType>(endpoint);
  }
  /* QueryEndedAuction */
  async queryEndedAuction(params: QueryEndedAuctionRequest): Promise<QueryEndedAuctionResponseSDKType> {
    const endpoint = `sommelier/auction/v1/ended_auctions/${params.auctionId}`;
    return await this.req.get<QueryEndedAuctionResponseSDKType>(endpoint);
  }
  /* QueryActiveAuctions */
  async queryActiveAuctions(_params: QueryActiveAuctionsRequest = {}): Promise<QueryActiveAuctionsResponseSDKType> {
    const endpoint = `sommelier/auction/v1/active_auctions`;
    return await this.req.get<QueryActiveAuctionsResponseSDKType>(endpoint);
  }
  /* QueryEndedAuctions */
  async queryEndedAuctions(params: QueryEndedAuctionsRequest = {
    pagination: undefined
  }): Promise<QueryEndedAuctionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sommelier/auction/v1/ended_auctions`;
    return await this.req.get<QueryEndedAuctionsResponseSDKType>(endpoint, options);
  }
  /* QueryBid */
  async queryBid(params: QueryBidRequest): Promise<QueryBidResponseSDKType> {
    const endpoint = `sommelier/auction/v1/auctions/${params.auctionId}/bids/${params.bidId}`;
    return await this.req.get<QueryBidResponseSDKType>(endpoint);
  }
  /* QueryBidsByAuction */
  async queryBidsByAuction(params: QueryBidsByAuctionRequest): Promise<QueryBidsByAuctionResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sommelier/auction/v1/auctions/${params.auctionId}/bids`;
    return await this.req.get<QueryBidsByAuctionResponseSDKType>(endpoint, options);
  }
  /* QueryTokenPrice */
  async queryTokenPrice(params: QueryTokenPriceRequest): Promise<QueryTokenPriceResponseSDKType> {
    const endpoint = `sommelier/auction/v1/token_prices/${params.denom}`;
    return await this.req.get<QueryTokenPriceResponseSDKType>(endpoint);
  }
  /* QueryTokenPrices */
  async queryTokenPrices(_params: QueryTokenPricesRequest = {}): Promise<QueryTokenPricesResponseSDKType> {
    const endpoint = `sommelier/auction/v1/token_prices`;
    return await this.req.get<QueryTokenPricesResponseSDKType>(endpoint);
  }
}