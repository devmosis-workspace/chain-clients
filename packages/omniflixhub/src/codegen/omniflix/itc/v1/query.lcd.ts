import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCampaignsRequest, QueryCampaignsResponseSDKType, QueryCampaignRequest, QueryCampaignResponseSDKType, QueryClaimsRequest, QueryClaimsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.campaigns = this.campaigns.bind(this);
    this.campaign = this.campaign.bind(this);
    this.claims = this.claims.bind(this);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `omniflix/itc/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Campaigns */
  async campaigns(params: QueryCampaignsRequest): Promise<QueryCampaignsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.creator !== "undefined") {
      options.params.creator = params.creator;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/itc/v1/campaigns`;
    return await this.req.get<QueryCampaignsResponseSDKType>(endpoint, options);
  }
  /* Campaign */
  async campaign(params: QueryCampaignRequest): Promise<QueryCampaignResponseSDKType> {
    const endpoint = `omniflix/itc/v1/campaigns/${params.campaignId}`;
    return await this.req.get<QueryCampaignResponseSDKType>(endpoint);
  }
  /* Claims */
  async claims(params: QueryClaimsRequest): Promise<QueryClaimsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.campaignId !== "undefined") {
      options.params.campaign_id = params.campaignId;
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/itc/v1/claims`;
    return await this.req.get<QueryClaimsResponseSDKType>(endpoint, options);
  }
}