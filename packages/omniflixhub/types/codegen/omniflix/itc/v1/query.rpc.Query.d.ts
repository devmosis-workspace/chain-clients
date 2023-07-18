import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCampaignsRequest, QueryCampaignsResponse, QueryCampaignRequest, QueryCampaignResponse, QueryClaimsRequest, QueryClaimsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    campaigns(request: QueryCampaignsRequest): Promise<QueryCampaignsResponse>;
    campaign(request: QueryCampaignRequest): Promise<QueryCampaignResponse>;
    claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    campaigns(request: QueryCampaignsRequest): Promise<QueryCampaignsResponse>;
    campaign(request: QueryCampaignRequest): Promise<QueryCampaignResponse>;
    claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    campaigns(request: QueryCampaignsRequest): Promise<QueryCampaignsResponse>;
    campaign(request: QueryCampaignRequest): Promise<QueryCampaignResponse>;
    claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
};
