import { CampaignStatus, Campaign, CampaignSDKType, Claim, ClaimSDKType, campaignStatusFromJSON } from "./itc";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryCampaignsRequest(): QueryCampaignsRequest {
  return {
    status: 0,
    creator: "",
    pagination: undefined
  };
}
export const QueryCampaignsRequest = {
  encode(message: QueryCampaignsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCampaignsRequest {
    return {
      status: isSet(object.status) ? campaignStatusFromJSON(object.status) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryCampaignsRequest>): QueryCampaignsRequest {
    const message = createBaseQueryCampaignsRequest();
    message.status = object.status ?? 0;
    message.creator = object.creator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCampaignsResponse(): QueryCampaignsResponse {
  return {
    campaigns: [],
    pagination: undefined
  };
}
export const QueryCampaignsResponse = {
  encode(message: QueryCampaignsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.campaigns) {
      Campaign.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCampaignsResponse {
    return {
      campaigns: Array.isArray(object?.campaigns) ? object.campaigns.map((e: any) => Campaign.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryCampaignsResponse>): QueryCampaignsResponse {
    const message = createBaseQueryCampaignsResponse();
    message.campaigns = object.campaigns?.map(e => Campaign.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCampaignRequest(): QueryCampaignRequest {
  return {
    campaignId: Long.UZERO
  };
}
export const QueryCampaignRequest = {
  encode(message: QueryCampaignRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.campaignId.isZero()) {
      writer.uint32(8).uint64(message.campaignId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCampaignRequest {
    return {
      campaignId: isSet(object.campaignId) ? Long.fromValue(object.campaignId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryCampaignRequest>): QueryCampaignRequest {
    const message = createBaseQueryCampaignRequest();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? Long.fromValue(object.campaignId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryCampaignResponse(): QueryCampaignResponse {
  return {
    Campaign: undefined
  };
}
export const QueryCampaignResponse = {
  encode(message: QueryCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Campaign !== undefined) {
      Campaign.encode(message.Campaign, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCampaignResponse {
    return {
      Campaign: isSet(object.Campaign) ? Campaign.fromJSON(object.Campaign) : undefined
    };
  },
  fromPartial(object: Partial<QueryCampaignResponse>): QueryCampaignResponse {
    const message = createBaseQueryCampaignResponse();
    message.Campaign = object.Campaign !== undefined && object.Campaign !== null ? Campaign.fromPartial(object.Campaign) : undefined;
    return message;
  }
};
function createBaseQueryClaimsRequest(): QueryClaimsRequest {
  return {
    campaignId: Long.UZERO,
    address: "",
    pagination: undefined
  };
}
export const QueryClaimsRequest = {
  encode(message: QueryClaimsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.campaignId.isZero()) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsRequest {
    return {
      campaignId: isSet(object.campaignId) ? Long.fromValue(object.campaignId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimsRequest>): QueryClaimsRequest {
    const message = createBaseQueryClaimsRequest();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? Long.fromValue(object.campaignId) : Long.UZERO;
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClaimsResponse(): QueryClaimsResponse {
  return {
    claims: [],
    pagination: undefined
  };
}
export const QueryClaimsResponse = {
  encode(message: QueryClaimsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimsResponse>): QueryClaimsResponse {
    const message = createBaseQueryClaimsResponse();
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};