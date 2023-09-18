import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAuctionRequest, QueryAuctionResponseSDKType, QueryAuctionsRequest, QueryAuctionsResponseSDKType, QueryNextAuctionIDRequest, QueryNextAuctionIDResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.auction = this.auction.bind(this);
    this.auctions = this.auctions.bind(this);
    this.nextAuctionID = this.nextAuctionID.bind(this);
  }
  /* Params queries all parameters of the auction module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/auction/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Auction queries an individual Auction by auction ID */
  async auction(params: QueryAuctionRequest): Promise<QueryAuctionResponseSDKType> {
    const endpoint = `kava/auction/v1beta1/auctions/${params.auctionId}`;
    return await this.req.get<QueryAuctionResponseSDKType>(endpoint);
  }
  /* Auctions queries auctions filtered by asset denom, owner address, phase, and auction type */
  async auctions(params: QueryAuctionsRequest): Promise<QueryAuctionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.type !== "undefined") {
      options.params.type = params.type;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.phase !== "undefined") {
      options.params.phase = params.phase;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/auction/v1beta1/auctions`;
    return await this.req.get<QueryAuctionsResponseSDKType>(endpoint, options);
  }
  /* NextAuctionID queries the next auction ID */
  async nextAuctionID(_params: QueryNextAuctionIDRequest = {}): Promise<QueryNextAuctionIDResponseSDKType> {
    const endpoint = `kava/auction/v1beta1/next-auction-id`;
    return await this.req.get<QueryNextAuctionIDResponseSDKType>(endpoint);
  }
}