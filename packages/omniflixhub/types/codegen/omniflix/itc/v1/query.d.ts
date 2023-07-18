import { CampaignStatus, Campaign, CampaignSDKType, Claim, ClaimSDKType } from "./itc";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryCampaignsRequest is the request type for the Query/Campaigns RPC method. */
export interface QueryCampaignsRequest {
    status: CampaignStatus;
    creator: string;
    pagination?: PageRequest;
}
/** QueryCampaignsRequest is the request type for the Query/Campaigns RPC method. */
export interface QueryCampaignsRequestSDKType {
    status: CampaignStatus;
    creator: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryCampaignsResponse is the response type for the Query/Campaigns RPC
 * method.
 */
export interface QueryCampaignsResponse {
    campaigns: Campaign[];
    pagination?: PageResponse;
}
/**
 * QueryCampaignsResponse is the response type for the Query/Campaigns RPC
 * method.
 */
export interface QueryCampaignsResponseSDKType {
    campaigns: CampaignSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryCampaignRequest is the request type for the Query/Campaign RPC method. */
export interface QueryCampaignRequest {
    campaignId: Long;
}
/** QueryCampaignRequest is the request type for the Query/Campaign RPC method. */
export interface QueryCampaignRequestSDKType {
    campaign_id: Long;
}
/** QueryCampaignResponse is the response type for the Query/Campaign RPC method. */
export interface QueryCampaignResponse {
    Campaign?: Campaign;
}
/** QueryCampaignResponse is the response type for the Query/Campaign RPC method. */
export interface QueryCampaignResponseSDKType {
    Campaign?: CampaignSDKType;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequest {
    campaignId: Long;
    address: string;
    pagination?: PageRequest;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequestSDKType {
    campaign_id: Long;
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QueryClaimsResponse {
    claims: Claim[];
    pagination?: PageResponse;
}
export interface QueryClaimsResponseSDKType {
    claims: ClaimSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryCampaignsRequest: {
    encode(message: QueryCampaignsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCampaignsRequest;
    fromPartial(object: Partial<QueryCampaignsRequest>): QueryCampaignsRequest;
};
export declare const QueryCampaignsResponse: {
    encode(message: QueryCampaignsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCampaignsResponse;
    fromPartial(object: Partial<QueryCampaignsResponse>): QueryCampaignsResponse;
};
export declare const QueryCampaignRequest: {
    encode(message: QueryCampaignRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCampaignRequest;
    fromPartial(object: Partial<QueryCampaignRequest>): QueryCampaignRequest;
};
export declare const QueryCampaignResponse: {
    encode(message: QueryCampaignResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCampaignResponse;
    fromPartial(object: Partial<QueryCampaignResponse>): QueryCampaignResponse;
};
export declare const QueryClaimsRequest: {
    encode(message: QueryClaimsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimsRequest;
    fromPartial(object: Partial<QueryClaimsRequest>): QueryClaimsRequest;
};
export declare const QueryClaimsResponse: {
    encode(message: QueryClaimsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimsResponse;
    fromPartial(object: Partial<QueryClaimsResponse>): QueryClaimsResponse;
};
