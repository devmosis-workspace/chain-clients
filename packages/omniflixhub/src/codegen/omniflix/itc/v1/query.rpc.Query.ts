import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCampaignsRequest, QueryCampaignsResponse, QueryCampaignRequest, QueryCampaignResponse, QueryClaimsRequest, QueryClaimsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  campaigns(request: QueryCampaignsRequest): Promise<QueryCampaignsResponse>;
  campaign(request: QueryCampaignRequest): Promise<QueryCampaignResponse>;
  claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.campaigns = this.campaigns.bind(this);
    this.campaign = this.campaign.bind(this);
    this.claims = this.claims.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  campaigns(request: QueryCampaignsRequest): Promise<QueryCampaignsResponse> {
    const data = QueryCampaignsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Campaigns", data);
    return promise.then(data => QueryCampaignsResponse.decode(new _m0.Reader(data)));
  }
  campaign(request: QueryCampaignRequest): Promise<QueryCampaignResponse> {
    const data = QueryCampaignRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Campaign", data);
    return promise.then(data => QueryCampaignResponse.decode(new _m0.Reader(data)));
  }
  claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
    const data = QueryClaimsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Claims", data);
    return promise.then(data => QueryClaimsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    campaigns(request: QueryCampaignsRequest): Promise<QueryCampaignsResponse> {
      return queryService.campaigns(request);
    },
    campaign(request: QueryCampaignRequest): Promise<QueryCampaignResponse> {
      return queryService.campaign(request);
    },
    claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
      return queryService.claims(request);
    }
  };
};