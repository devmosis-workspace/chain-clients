import { CampaignStatus, Campaign, CampaignAmino, CampaignSDKType, Claim, ClaimAmino, ClaimSDKType } from "./itc";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/OmniFlix.itc.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/OmniFlix.itc.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryCampaignsRequest is the request type for the Query/Campaigns RPC method. */
export interface QueryCampaignsRequest {
    status: CampaignStatus;
    creator: string;
    pagination: PageRequest;
}
export interface QueryCampaignsRequestProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.QueryCampaignsRequest";
    value: Uint8Array;
}
/** QueryCampaignsRequest is the request type for the Query/Campaigns RPC method. */
export interface QueryCampaignsRequestAmino {
    status: CampaignStatus;
    creator: string;
    pagination?: PageRequestAmino;
}
export interface QueryCampaignsRequestAminoMsg {
    type: "/OmniFlix.itc.v1.QueryCampaignsRequest";
    value: QueryCampaignsRequestAmino;
}
/** QueryCampaignsRequest is the request type for the Query/Campaigns RPC method. */
export interface QueryCampaignsRequestSDKType {
    status: CampaignStatus;
    creator: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryCampaignsResponse is the response type for the Query/Campaigns RPC
 * method.
 */
export interface QueryCampaignsResponse {
    campaigns: Campaign[];
    pagination: PageResponse;
}
export interface QueryCampaignsResponseProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.QueryCampaignsResponse";
    value: Uint8Array;
}
/**
 * QueryCampaignsResponse is the response type for the Query/Campaigns RPC
 * method.
 */
export interface QueryCampaignsResponseAmino {
    campaigns: CampaignAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryCampaignsResponseAminoMsg {
    type: "/OmniFlix.itc.v1.QueryCampaignsResponse";
    value: QueryCampaignsResponseAmino;
}
/**
 * QueryCampaignsResponse is the response type for the Query/Campaigns RPC
 * method.
 */
export interface QueryCampaignsResponseSDKType {
    campaigns: CampaignSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryCampaignRequest is the request type for the Query/Campaign RPC method. */
export interface QueryCampaignRequest {
    campaignId: bigint;
}
export interface QueryCampaignRequestProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.QueryCampaignRequest";
    value: Uint8Array;
}
/** QueryCampaignRequest is the request type for the Query/Campaign RPC method. */
export interface QueryCampaignRequestAmino {
    campaign_id: string;
}
export interface QueryCampaignRequestAminoMsg {
    type: "/OmniFlix.itc.v1.QueryCampaignRequest";
    value: QueryCampaignRequestAmino;
}
/** QueryCampaignRequest is the request type for the Query/Campaign RPC method. */
export interface QueryCampaignRequestSDKType {
    campaign_id: bigint;
}
/** QueryCampaignResponse is the response type for the Query/Campaign RPC method. */
export interface QueryCampaignResponse {
    Campaign: Campaign;
}
export interface QueryCampaignResponseProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.QueryCampaignResponse";
    value: Uint8Array;
}
/** QueryCampaignResponse is the response type for the Query/Campaign RPC method. */
export interface QueryCampaignResponseAmino {
    Campaign?: CampaignAmino;
}
export interface QueryCampaignResponseAminoMsg {
    type: "/OmniFlix.itc.v1.QueryCampaignResponse";
    value: QueryCampaignResponseAmino;
}
/** QueryCampaignResponse is the response type for the Query/Campaign RPC method. */
export interface QueryCampaignResponseSDKType {
    Campaign: CampaignSDKType;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequest {
    campaignId: bigint;
    address: string;
    pagination: PageRequest;
}
export interface QueryClaimsRequestProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.QueryClaimsRequest";
    value: Uint8Array;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequestAmino {
    campaign_id: string;
    address: string;
    pagination?: PageRequestAmino;
}
export interface QueryClaimsRequestAminoMsg {
    type: "/OmniFlix.itc.v1.QueryClaimsRequest";
    value: QueryClaimsRequestAmino;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequestSDKType {
    campaign_id: bigint;
    address: string;
    pagination: PageRequestSDKType;
}
export interface QueryClaimsResponse {
    claims: Claim[];
    pagination: PageResponse;
}
export interface QueryClaimsResponseProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.QueryClaimsResponse";
    value: Uint8Array;
}
export interface QueryClaimsResponseAmino {
    claims: ClaimAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryClaimsResponseAminoMsg {
    type: "/OmniFlix.itc.v1.QueryClaimsResponse";
    value: QueryClaimsResponseAmino;
}
export interface QueryClaimsResponseSDKType {
    claims: ClaimSDKType[];
    pagination: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryCampaignsRequest: {
    typeUrl: string;
    encode(message: QueryCampaignsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCampaignsRequest;
    fromPartial(object: Partial<QueryCampaignsRequest>): QueryCampaignsRequest;
    fromAmino(object: QueryCampaignsRequestAmino): QueryCampaignsRequest;
    toAmino(message: QueryCampaignsRequest): QueryCampaignsRequestAmino;
    fromAminoMsg(object: QueryCampaignsRequestAminoMsg): QueryCampaignsRequest;
    fromProtoMsg(message: QueryCampaignsRequestProtoMsg): QueryCampaignsRequest;
    toProto(message: QueryCampaignsRequest): Uint8Array;
    toProtoMsg(message: QueryCampaignsRequest): QueryCampaignsRequestProtoMsg;
};
export declare const QueryCampaignsResponse: {
    typeUrl: string;
    encode(message: QueryCampaignsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCampaignsResponse;
    fromPartial(object: Partial<QueryCampaignsResponse>): QueryCampaignsResponse;
    fromAmino(object: QueryCampaignsResponseAmino): QueryCampaignsResponse;
    toAmino(message: QueryCampaignsResponse): QueryCampaignsResponseAmino;
    fromAminoMsg(object: QueryCampaignsResponseAminoMsg): QueryCampaignsResponse;
    fromProtoMsg(message: QueryCampaignsResponseProtoMsg): QueryCampaignsResponse;
    toProto(message: QueryCampaignsResponse): Uint8Array;
    toProtoMsg(message: QueryCampaignsResponse): QueryCampaignsResponseProtoMsg;
};
export declare const QueryCampaignRequest: {
    typeUrl: string;
    encode(message: QueryCampaignRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCampaignRequest;
    fromPartial(object: Partial<QueryCampaignRequest>): QueryCampaignRequest;
    fromAmino(object: QueryCampaignRequestAmino): QueryCampaignRequest;
    toAmino(message: QueryCampaignRequest): QueryCampaignRequestAmino;
    fromAminoMsg(object: QueryCampaignRequestAminoMsg): QueryCampaignRequest;
    fromProtoMsg(message: QueryCampaignRequestProtoMsg): QueryCampaignRequest;
    toProto(message: QueryCampaignRequest): Uint8Array;
    toProtoMsg(message: QueryCampaignRequest): QueryCampaignRequestProtoMsg;
};
export declare const QueryCampaignResponse: {
    typeUrl: string;
    encode(message: QueryCampaignResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCampaignResponse;
    fromPartial(object: Partial<QueryCampaignResponse>): QueryCampaignResponse;
    fromAmino(object: QueryCampaignResponseAmino): QueryCampaignResponse;
    toAmino(message: QueryCampaignResponse): QueryCampaignResponseAmino;
    fromAminoMsg(object: QueryCampaignResponseAminoMsg): QueryCampaignResponse;
    fromProtoMsg(message: QueryCampaignResponseProtoMsg): QueryCampaignResponse;
    toProto(message: QueryCampaignResponse): Uint8Array;
    toProtoMsg(message: QueryCampaignResponse): QueryCampaignResponseProtoMsg;
};
export declare const QueryClaimsRequest: {
    typeUrl: string;
    encode(message: QueryClaimsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimsRequest;
    fromPartial(object: Partial<QueryClaimsRequest>): QueryClaimsRequest;
    fromAmino(object: QueryClaimsRequestAmino): QueryClaimsRequest;
    toAmino(message: QueryClaimsRequest): QueryClaimsRequestAmino;
    fromAminoMsg(object: QueryClaimsRequestAminoMsg): QueryClaimsRequest;
    fromProtoMsg(message: QueryClaimsRequestProtoMsg): QueryClaimsRequest;
    toProto(message: QueryClaimsRequest): Uint8Array;
    toProtoMsg(message: QueryClaimsRequest): QueryClaimsRequestProtoMsg;
};
export declare const QueryClaimsResponse: {
    typeUrl: string;
    encode(message: QueryClaimsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimsResponse;
    fromPartial(object: Partial<QueryClaimsResponse>): QueryClaimsResponse;
    fromAmino(object: QueryClaimsResponseAmino): QueryClaimsResponse;
    toAmino(message: QueryClaimsResponse): QueryClaimsResponseAmino;
    fromAminoMsg(object: QueryClaimsResponseAminoMsg): QueryClaimsResponse;
    fromProtoMsg(message: QueryClaimsResponseProtoMsg): QueryClaimsResponse;
    toProto(message: QueryClaimsResponse): Uint8Array;
    toProtoMsg(message: QueryClaimsResponse): QueryClaimsResponseProtoMsg;
};
