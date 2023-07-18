import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCampaignsRequest, QueryCampaignsResponseSDKType, QueryCampaignRequest, QueryCampaignResponseSDKType, QueryClaimsRequest, QueryClaimsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    campaigns(params: QueryCampaignsRequest): Promise<QueryCampaignsResponseSDKType>;
    campaign(params: QueryCampaignRequest): Promise<QueryCampaignResponseSDKType>;
    claims(params: QueryClaimsRequest): Promise<QueryClaimsResponseSDKType>;
}
