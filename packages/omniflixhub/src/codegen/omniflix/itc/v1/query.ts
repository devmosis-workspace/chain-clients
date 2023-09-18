import { CampaignStatus, Campaign, CampaignAmino, CampaignSDKType, Claim, ClaimAmino, ClaimSDKType, campaignStatusFromJSON } from "./itc";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/OmniFlix.itc.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/OmniFlix.itc.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCampaignsRequest(): QueryCampaignsRequest {
  return {
    status: 0,
    creator: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryCampaignsRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignsRequest",
  encode(message: QueryCampaignsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      status: isSet(object.status) ? campaignStatusFromJSON(object.status) : -1,
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
  },
  fromAmino(object: QueryCampaignsRequestAmino): QueryCampaignsRequest {
    return {
      status: isSet(object.status) ? campaignStatusFromJSON(object.status) : -1,
      creator: object.creator,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryCampaignsRequest): QueryCampaignsRequestAmino {
    const obj: any = {};
    obj.status = message.status;
    obj.creator = message.creator;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCampaignsRequestAminoMsg): QueryCampaignsRequest {
    return QueryCampaignsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCampaignsRequestProtoMsg): QueryCampaignsRequest {
    return QueryCampaignsRequest.decode(message.value);
  },
  toProto(message: QueryCampaignsRequest): Uint8Array {
    return QueryCampaignsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCampaignsRequest): QueryCampaignsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryCampaignsRequest",
      value: QueryCampaignsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCampaignsResponse(): QueryCampaignsResponse {
  return {
    campaigns: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryCampaignsResponse = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignsResponse",
  encode(message: QueryCampaignsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryCampaignsResponseAmino): QueryCampaignsResponse {
    return {
      campaigns: Array.isArray(object?.campaigns) ? object.campaigns.map((e: any) => Campaign.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryCampaignsResponse): QueryCampaignsResponseAmino {
    const obj: any = {};
    if (message.campaigns) {
      obj.campaigns = message.campaigns.map(e => e ? Campaign.toAmino(e) : undefined);
    } else {
      obj.campaigns = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCampaignsResponseAminoMsg): QueryCampaignsResponse {
    return QueryCampaignsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCampaignsResponseProtoMsg): QueryCampaignsResponse {
    return QueryCampaignsResponse.decode(message.value);
  },
  toProto(message: QueryCampaignsResponse): Uint8Array {
    return QueryCampaignsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCampaignsResponse): QueryCampaignsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryCampaignsResponse",
      value: QueryCampaignsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCampaignRequest(): QueryCampaignRequest {
  return {
    campaignId: BigInt(0)
  };
}
export const QueryCampaignRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignRequest",
  encode(message: QueryCampaignRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCampaignRequest {
    return {
      campaignId: isSet(object.campaignId) ? BigInt(object.campaignId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCampaignRequest>): QueryCampaignRequest {
    const message = createBaseQueryCampaignRequest();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? BigInt(object.campaignId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCampaignRequestAmino): QueryCampaignRequest {
    return {
      campaignId: BigInt(object.campaign_id)
    };
  },
  toAmino(message: QueryCampaignRequest): QueryCampaignRequestAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId ? message.campaignId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCampaignRequestAminoMsg): QueryCampaignRequest {
    return QueryCampaignRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCampaignRequestProtoMsg): QueryCampaignRequest {
    return QueryCampaignRequest.decode(message.value);
  },
  toProto(message: QueryCampaignRequest): Uint8Array {
    return QueryCampaignRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCampaignRequest): QueryCampaignRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryCampaignRequest",
      value: QueryCampaignRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCampaignResponse(): QueryCampaignResponse {
  return {
    Campaign: Campaign.fromPartial({})
  };
}
export const QueryCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.QueryCampaignResponse",
  encode(message: QueryCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryCampaignResponseAmino): QueryCampaignResponse {
    return {
      Campaign: object?.Campaign ? Campaign.fromAmino(object.Campaign) : undefined
    };
  },
  toAmino(message: QueryCampaignResponse): QueryCampaignResponseAmino {
    const obj: any = {};
    obj.Campaign = message.Campaign ? Campaign.toAmino(message.Campaign) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCampaignResponseAminoMsg): QueryCampaignResponse {
    return QueryCampaignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCampaignResponseProtoMsg): QueryCampaignResponse {
    return QueryCampaignResponse.decode(message.value);
  },
  toProto(message: QueryCampaignResponse): Uint8Array {
    return QueryCampaignResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCampaignResponse): QueryCampaignResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryCampaignResponse",
      value: QueryCampaignResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRequest(): QueryClaimsRequest {
  return {
    campaignId: BigInt(0),
    address: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryClaimsRequest = {
  typeUrl: "/OmniFlix.itc.v1.QueryClaimsRequest",
  encode(message: QueryClaimsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
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
      campaignId: isSet(object.campaignId) ? BigInt(object.campaignId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimsRequest>): QueryClaimsRequest {
    const message = createBaseQueryClaimsRequest();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? BigInt(object.campaignId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimsRequestAmino): QueryClaimsRequest {
    return {
      campaignId: BigInt(object.campaign_id),
      address: object.address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClaimsRequest): QueryClaimsRequestAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId ? message.campaignId.toString() : undefined;
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRequestAminoMsg): QueryClaimsRequest {
    return QueryClaimsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRequestProtoMsg): QueryClaimsRequest {
    return QueryClaimsRequest.decode(message.value);
  },
  toProto(message: QueryClaimsRequest): Uint8Array {
    return QueryClaimsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRequest): QueryClaimsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryClaimsRequest",
      value: QueryClaimsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsResponse(): QueryClaimsResponse {
  return {
    claims: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryClaimsResponse = {
  typeUrl: "/OmniFlix.itc.v1.QueryClaimsResponse",
  encode(message: QueryClaimsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryClaimsResponseAmino): QueryClaimsResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClaimsResponse): QueryClaimsResponseAmino {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toAmino(e) : undefined);
    } else {
      obj.claims = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsResponseAminoMsg): QueryClaimsResponse {
    return QueryClaimsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsResponseProtoMsg): QueryClaimsResponse {
    return QueryClaimsResponse.decode(message.value);
  },
  toProto(message: QueryClaimsResponse): Uint8Array {
    return QueryClaimsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsResponse): QueryClaimsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.QueryClaimsResponse",
      value: QueryClaimsResponse.encode(message).finish()
    };
  }
};