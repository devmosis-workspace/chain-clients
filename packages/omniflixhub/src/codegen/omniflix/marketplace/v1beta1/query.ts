import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { AuctionStatus, AuctionListing, AuctionListingAmino, AuctionListingSDKType, Bid, BidAmino, BidSDKType, auctionStatusFromJSON } from "./auction";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Listing, ListingAmino, ListingSDKType } from "./listing";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest";
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
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryListingsRequest {
  owner: string;
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryListingsRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest";
  value: Uint8Array;
}
export interface QueryListingsRequestAmino {
  owner?: string;
  price_denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListingsRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest";
  value: QueryListingsRequestAmino;
}
export interface QueryListingsRequestSDKType {
  owner: string;
  price_denom: string;
  pagination?: PageRequestSDKType;
}
export interface QueryListingsResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingsResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse";
  value: Uint8Array;
}
export interface QueryListingsResponseAmino {
  listings?: ListingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListingsResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse";
  value: QueryListingsResponseAmino;
}
export interface QueryListingsResponseSDKType {
  listings: ListingSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryListingRequest {
  id: string;
}
export interface QueryListingRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingRequest";
  value: Uint8Array;
}
export interface QueryListingRequestAmino {
  id?: string;
}
export interface QueryListingRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingRequest";
  value: QueryListingRequestAmino;
}
export interface QueryListingRequestSDKType {
  id: string;
}
export interface QueryListingResponse {
  listing?: Listing;
}
export interface QueryListingResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingResponse";
  value: Uint8Array;
}
export interface QueryListingResponseAmino {
  listing?: ListingAmino;
}
export interface QueryListingResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingResponse";
  value: QueryListingResponseAmino;
}
export interface QueryListingResponseSDKType {
  listing?: ListingSDKType;
}
export interface QueryListingsByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryListingsByOwnerRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest";
  value: Uint8Array;
}
export interface QueryListingsByOwnerRequestAmino {
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListingsByOwnerRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest";
  value: QueryListingsByOwnerRequestAmino;
}
export interface QueryListingsByOwnerRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
export interface QueryListingsByOwnerResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingsByOwnerResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse";
  value: Uint8Array;
}
export interface QueryListingsByOwnerResponseAmino {
  listings?: ListingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListingsByOwnerResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse";
  value: QueryListingsByOwnerResponseAmino;
}
export interface QueryListingsByOwnerResponseSDKType {
  listings: ListingSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryListingByNFTIDRequest {
  nftId: string;
}
export interface QueryListingByNFTIDRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest";
  value: Uint8Array;
}
export interface QueryListingByNFTIDRequestAmino {
  nft_id?: string;
}
export interface QueryListingByNFTIDRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest";
  value: QueryListingByNFTIDRequestAmino;
}
export interface QueryListingByNFTIDRequestSDKType {
  nft_id: string;
}
export interface QueryListingsByPriceDenomRequest {
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryListingsByPriceDenomRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest";
  value: Uint8Array;
}
export interface QueryListingsByPriceDenomRequestAmino {
  price_denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListingsByPriceDenomRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest";
  value: QueryListingsByPriceDenomRequestAmino;
}
export interface QueryListingsByPriceDenomRequestSDKType {
  price_denom: string;
  pagination?: PageRequestSDKType;
}
export interface QueryListingsByPriceDenomResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingsByPriceDenomResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse";
  value: Uint8Array;
}
export interface QueryListingsByPriceDenomResponseAmino {
  listings?: ListingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListingsByPriceDenomResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse";
  value: QueryListingsByPriceDenomResponseAmino;
}
export interface QueryListingsByPriceDenomResponseSDKType {
  listings: ListingSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryAuctionsRequest {
  status: AuctionStatus;
  owner: string;
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryAuctionsRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest";
  value: Uint8Array;
}
export interface QueryAuctionsRequestAmino {
  status?: AuctionStatus;
  owner?: string;
  price_denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAuctionsRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest";
  value: QueryAuctionsRequestAmino;
}
export interface QueryAuctionsRequestSDKType {
  status: AuctionStatus;
  owner: string;
  price_denom: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAuctionsResponse {
  auctions: AuctionListing[];
  pagination?: PageResponse;
}
export interface QueryAuctionsResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse";
  value: Uint8Array;
}
export interface QueryAuctionsResponseAmino {
  auctions?: AuctionListingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAuctionsResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse";
  value: QueryAuctionsResponseAmino;
}
export interface QueryAuctionsResponseSDKType {
  auctions: AuctionListingSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryAuctionRequest {
  id: bigint;
}
export interface QueryAuctionRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest";
  value: Uint8Array;
}
export interface QueryAuctionRequestAmino {
  id?: string;
}
export interface QueryAuctionRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest";
  value: QueryAuctionRequestAmino;
}
export interface QueryAuctionRequestSDKType {
  id: bigint;
}
export interface QueryAuctionResponse {
  auction?: AuctionListing;
}
export interface QueryAuctionResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionResponse";
  value: Uint8Array;
}
export interface QueryAuctionResponseAmino {
  auction?: AuctionListingAmino;
}
export interface QueryAuctionResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionResponse";
  value: QueryAuctionResponseAmino;
}
export interface QueryAuctionResponseSDKType {
  auction?: AuctionListingSDKType;
}
export interface QueryAuctionsByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryAuctionsByOwnerRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest";
  value: Uint8Array;
}
export interface QueryAuctionsByOwnerRequestAmino {
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAuctionsByOwnerRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest";
  value: QueryAuctionsByOwnerRequestAmino;
}
export interface QueryAuctionsByOwnerRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAuctionByNFTIDRequest {
  nftId: string;
}
export interface QueryAuctionByNFTIDRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest";
  value: Uint8Array;
}
export interface QueryAuctionByNFTIDRequestAmino {
  nft_id?: string;
}
export interface QueryAuctionByNFTIDRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest";
  value: QueryAuctionByNFTIDRequestAmino;
}
export interface QueryAuctionByNFTIDRequestSDKType {
  nft_id: string;
}
export interface QueryAuctionsByPriceDenomRequest {
  priceDenom: string;
  pagination?: PageRequest;
}
export interface QueryAuctionsByPriceDenomRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest";
  value: Uint8Array;
}
export interface QueryAuctionsByPriceDenomRequestAmino {
  price_denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAuctionsByPriceDenomRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest";
  value: QueryAuctionsByPriceDenomRequestAmino;
}
export interface QueryAuctionsByPriceDenomRequestSDKType {
  price_denom: string;
  pagination?: PageRequestSDKType;
}
export interface QueryBidsRequest {
  bidder: string;
  pagination?: PageRequest;
}
export interface QueryBidsRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest";
  value: Uint8Array;
}
export interface QueryBidsRequestAmino {
  bidder?: string;
  pagination?: PageRequestAmino;
}
export interface QueryBidsRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest";
  value: QueryBidsRequestAmino;
}
export interface QueryBidsRequestSDKType {
  bidder: string;
  pagination?: PageRequestSDKType;
}
export interface QueryBidsResponse {
  bids: Bid[];
  pagination?: PageResponse;
}
export interface QueryBidsResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse";
  value: Uint8Array;
}
export interface QueryBidsResponseAmino {
  bids?: BidAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBidsResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse";
  value: QueryBidsResponseAmino;
}
export interface QueryBidsResponseSDKType {
  bids: BidSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryBidRequest {
  id: bigint;
}
export interface QueryBidRequestProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidRequest";
  value: Uint8Array;
}
export interface QueryBidRequestAmino {
  id?: string;
}
export interface QueryBidRequestAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryBidRequest";
  value: QueryBidRequestAmino;
}
export interface QueryBidRequestSDKType {
  id: bigint;
}
export interface QueryBidResponse {
  bid?: Bid;
}
export interface QueryBidResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidResponse";
  value: Uint8Array;
}
export interface QueryBidResponseAmino {
  bid?: BidAmino;
}
export interface QueryBidResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.QueryBidResponse";
  value: QueryBidResponseAmino;
}
export interface QueryBidResponseSDKType {
  bid?: BidSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest",
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
    const message = createBaseQueryParamsRequest();
    return message;
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
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest",
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
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsResponse",
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
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
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
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListingsRequest(): QueryListingsRequest {
  return {
    owner: "",
    priceDenom: "",
    pagination: undefined
  };
}
export const QueryListingsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest",
  encode(message: QueryListingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsRequest>): QueryListingsRequest {
    const message = createBaseQueryListingsRequest();
    message.owner = object.owner ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsRequestAmino): QueryListingsRequest {
    const message = createBaseQueryListingsRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.price_denom !== undefined && object.price_denom !== null) {
      message.priceDenom = object.price_denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsRequest): QueryListingsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.price_denom = message.priceDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsRequestAminoMsg): QueryListingsRequest {
    return QueryListingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsRequestProtoMsg): QueryListingsRequest {
    return QueryListingsRequest.decode(message.value);
  },
  toProto(message: QueryListingsRequest): Uint8Array {
    return QueryListingsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsRequest): QueryListingsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest",
      value: QueryListingsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingsResponse(): QueryListingsResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
export const QueryListingsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse",
  encode(message: QueryListingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsResponse>): QueryListingsResponse {
    const message = createBaseQueryListingsResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsResponseAmino): QueryListingsResponse {
    const message = createBaseQueryListingsResponse();
    message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsResponse): QueryListingsResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toAmino(e) : undefined);
    } else {
      obj.listings = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsResponseAminoMsg): QueryListingsResponse {
    return QueryListingsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsResponseProtoMsg): QueryListingsResponse {
    return QueryListingsResponse.decode(message.value);
  },
  toProto(message: QueryListingsResponse): Uint8Array {
    return QueryListingsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsResponse): QueryListingsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse",
      value: QueryListingsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListingRequest(): QueryListingRequest {
  return {
    id: ""
  };
}
export const QueryListingRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingRequest",
  encode(message: QueryListingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryListingRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<QueryListingRequest>): QueryListingRequest {
    const message = createBaseQueryListingRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryListingRequestAmino): QueryListingRequest {
    const message = createBaseQueryListingRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryListingRequest): QueryListingRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryListingRequestAminoMsg): QueryListingRequest {
    return QueryListingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingRequestProtoMsg): QueryListingRequest {
    return QueryListingRequest.decode(message.value);
  },
  toProto(message: QueryListingRequest): Uint8Array {
    return QueryListingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingRequest): QueryListingRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingRequest",
      value: QueryListingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingResponse(): QueryListingResponse {
  return {
    listing: undefined
  };
}
export const QueryListingResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingResponse",
  encode(message: QueryListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingResponse {
    return {
      listing: isSet(object.listing) ? Listing.fromJSON(object.listing) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingResponse>): QueryListingResponse {
    const message = createBaseQueryListingResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? Listing.fromPartial(object.listing) : undefined;
    return message;
  },
  fromAmino(object: QueryListingResponseAmino): QueryListingResponse {
    const message = createBaseQueryListingResponse();
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromAmino(object.listing);
    }
    return message;
  },
  toAmino(message: QueryListingResponse): QueryListingResponseAmino {
    const obj: any = {};
    obj.listing = message.listing ? Listing.toAmino(message.listing) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingResponseAminoMsg): QueryListingResponse {
    return QueryListingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingResponseProtoMsg): QueryListingResponse {
    return QueryListingResponse.decode(message.value);
  },
  toProto(message: QueryListingResponse): Uint8Array {
    return QueryListingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingResponse): QueryListingResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingResponse",
      value: QueryListingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListingsByOwnerRequest(): QueryListingsByOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
export const QueryListingsByOwnerRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest",
  encode(message: QueryListingsByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByOwnerRequest>): QueryListingsByOwnerRequest {
    const message = createBaseQueryListingsByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsByOwnerRequestAmino): QueryListingsByOwnerRequest {
    const message = createBaseQueryListingsByOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByOwnerRequest): QueryListingsByOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByOwnerRequestAminoMsg): QueryListingsByOwnerRequest {
    return QueryListingsByOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByOwnerRequestProtoMsg): QueryListingsByOwnerRequest {
    return QueryListingsByOwnerRequest.decode(message.value);
  },
  toProto(message: QueryListingsByOwnerRequest): Uint8Array {
    return QueryListingsByOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByOwnerRequest): QueryListingsByOwnerRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest",
      value: QueryListingsByOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingsByOwnerResponse(): QueryListingsByOwnerResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
export const QueryListingsByOwnerResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse",
  encode(message: QueryListingsByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByOwnerResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByOwnerResponse>): QueryListingsByOwnerResponse {
    const message = createBaseQueryListingsByOwnerResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsByOwnerResponseAmino): QueryListingsByOwnerResponse {
    const message = createBaseQueryListingsByOwnerResponse();
    message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByOwnerResponse): QueryListingsByOwnerResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toAmino(e) : undefined);
    } else {
      obj.listings = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByOwnerResponseAminoMsg): QueryListingsByOwnerResponse {
    return QueryListingsByOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByOwnerResponseProtoMsg): QueryListingsByOwnerResponse {
    return QueryListingsByOwnerResponse.decode(message.value);
  },
  toProto(message: QueryListingsByOwnerResponse): Uint8Array {
    return QueryListingsByOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByOwnerResponse): QueryListingsByOwnerResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse",
      value: QueryListingsByOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListingByNFTIDRequest(): QueryListingByNFTIDRequest {
  return {
    nftId: ""
  };
}
export const QueryListingByNFTIDRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest",
  encode(message: QueryListingByNFTIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }
    return writer;
  },
  fromJSON(object: any): QueryListingByNFTIDRequest {
    return {
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },
  fromPartial(object: Partial<QueryListingByNFTIDRequest>): QueryListingByNFTIDRequest {
    const message = createBaseQueryListingByNFTIDRequest();
    message.nftId = object.nftId ?? "";
    return message;
  },
  fromAmino(object: QueryListingByNFTIDRequestAmino): QueryListingByNFTIDRequest {
    const message = createBaseQueryListingByNFTIDRequest();
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    return message;
  },
  toAmino(message: QueryListingByNFTIDRequest): QueryListingByNFTIDRequestAmino {
    const obj: any = {};
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: QueryListingByNFTIDRequestAminoMsg): QueryListingByNFTIDRequest {
    return QueryListingByNFTIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingByNFTIDRequestProtoMsg): QueryListingByNFTIDRequest {
    return QueryListingByNFTIDRequest.decode(message.value);
  },
  toProto(message: QueryListingByNFTIDRequest): Uint8Array {
    return QueryListingByNFTIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingByNFTIDRequest): QueryListingByNFTIDRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest",
      value: QueryListingByNFTIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingsByPriceDenomRequest(): QueryListingsByPriceDenomRequest {
  return {
    priceDenom: "",
    pagination: undefined
  };
}
export const QueryListingsByPriceDenomRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest",
  encode(message: QueryListingsByPriceDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByPriceDenomRequest {
    return {
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByPriceDenomRequest>): QueryListingsByPriceDenomRequest {
    const message = createBaseQueryListingsByPriceDenomRequest();
    message.priceDenom = object.priceDenom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsByPriceDenomRequestAmino): QueryListingsByPriceDenomRequest {
    const message = createBaseQueryListingsByPriceDenomRequest();
    if (object.price_denom !== undefined && object.price_denom !== null) {
      message.priceDenom = object.price_denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByPriceDenomRequest): QueryListingsByPriceDenomRequestAmino {
    const obj: any = {};
    obj.price_denom = message.priceDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByPriceDenomRequestAminoMsg): QueryListingsByPriceDenomRequest {
    return QueryListingsByPriceDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByPriceDenomRequestProtoMsg): QueryListingsByPriceDenomRequest {
    return QueryListingsByPriceDenomRequest.decode(message.value);
  },
  toProto(message: QueryListingsByPriceDenomRequest): Uint8Array {
    return QueryListingsByPriceDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByPriceDenomRequest): QueryListingsByPriceDenomRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest",
      value: QueryListingsByPriceDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingsByPriceDenomResponse(): QueryListingsByPriceDenomResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
export const QueryListingsByPriceDenomResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse",
  encode(message: QueryListingsByPriceDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByPriceDenomResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByPriceDenomResponse>): QueryListingsByPriceDenomResponse {
    const message = createBaseQueryListingsByPriceDenomResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsByPriceDenomResponseAmino): QueryListingsByPriceDenomResponse {
    const message = createBaseQueryListingsByPriceDenomResponse();
    message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByPriceDenomResponse): QueryListingsByPriceDenomResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toAmino(e) : undefined);
    } else {
      obj.listings = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByPriceDenomResponseAminoMsg): QueryListingsByPriceDenomResponse {
    return QueryListingsByPriceDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByPriceDenomResponseProtoMsg): QueryListingsByPriceDenomResponse {
    return QueryListingsByPriceDenomResponse.decode(message.value);
  },
  toProto(message: QueryListingsByPriceDenomResponse): Uint8Array {
    return QueryListingsByPriceDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByPriceDenomResponse): QueryListingsByPriceDenomResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse",
      value: QueryListingsByPriceDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {
    status: 0,
    owner: "",
    priceDenom: "",
    pagination: undefined
  };
}
export const QueryAuctionsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest",
  encode(message: QueryAuctionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionsRequest {
    return {
      status: isSet(object.status) ? auctionStatusFromJSON(object.status) : -1,
      owner: isSet(object.owner) ? String(object.owner) : "",
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAuctionsRequest>): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    message.status = object.status ?? 0;
    message.owner = object.owner ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionsRequestAmino): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = auctionStatusFromJSON(object.status);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.price_denom !== undefined && object.price_denom !== null) {
      message.priceDenom = object.price_denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsRequest): QueryAuctionsRequestAmino {
    const obj: any = {};
    obj.status = message.status;
    obj.owner = message.owner;
    obj.price_denom = message.priceDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsRequestAminoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsRequestProtoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.decode(message.value);
  },
  toProto(message: QueryAuctionsRequest): Uint8Array {
    return QueryAuctionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsRequest): QueryAuctionsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest",
      value: QueryAuctionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    auctions: [],
    pagination: undefined
  };
}
export const QueryAuctionsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse",
  encode(message: QueryAuctionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auctions) {
      AuctionListing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions) ? object.auctions.map((e: any) => AuctionListing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAuctionsResponse>): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => AuctionListing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionsResponseAmino): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => AuctionListing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsResponse): QueryAuctionsResponseAmino {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? AuctionListing.toAmino(e) : undefined);
    } else {
      obj.auctions = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsResponseAminoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsResponseProtoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.decode(message.value);
  },
  toProto(message: QueryAuctionsResponse): Uint8Array {
    return QueryAuctionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsResponse): QueryAuctionsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse",
      value: QueryAuctionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionRequest(): QueryAuctionRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryAuctionRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest",
  encode(message: QueryAuctionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryAuctionRequest>): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAuctionRequestAmino): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryAuctionRequest): QueryAuctionRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionRequestAminoMsg): QueryAuctionRequest {
    return QueryAuctionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionRequestProtoMsg): QueryAuctionRequest {
    return QueryAuctionRequest.decode(message.value);
  },
  toProto(message: QueryAuctionRequest): Uint8Array {
    return QueryAuctionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionRequest): QueryAuctionRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest",
      value: QueryAuctionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionResponse(): QueryAuctionResponse {
  return {
    auction: undefined
  };
}
export const QueryAuctionResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionResponse",
  encode(message: QueryAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auction !== undefined) {
      AuctionListing.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionResponse {
    return {
      auction: isSet(object.auction) ? AuctionListing.fromJSON(object.auction) : undefined
    };
  },
  fromPartial(object: Partial<QueryAuctionResponse>): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? AuctionListing.fromPartial(object.auction) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionResponseAmino): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = AuctionListing.fromAmino(object.auction);
    }
    return message;
  },
  toAmino(message: QueryAuctionResponse): QueryAuctionResponseAmino {
    const obj: any = {};
    obj.auction = message.auction ? AuctionListing.toAmino(message.auction) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionResponseAminoMsg): QueryAuctionResponse {
    return QueryAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionResponseProtoMsg): QueryAuctionResponse {
    return QueryAuctionResponse.decode(message.value);
  },
  toProto(message: QueryAuctionResponse): Uint8Array {
    return QueryAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionResponse): QueryAuctionResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionResponse",
      value: QueryAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsByOwnerRequest(): QueryAuctionsByOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
export const QueryAuctionsByOwnerRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest",
  encode(message: QueryAuctionsByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionsByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAuctionsByOwnerRequest>): QueryAuctionsByOwnerRequest {
    const message = createBaseQueryAuctionsByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionsByOwnerRequestAmino): QueryAuctionsByOwnerRequest {
    const message = createBaseQueryAuctionsByOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsByOwnerRequest): QueryAuctionsByOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsByOwnerRequestAminoMsg): QueryAuctionsByOwnerRequest {
    return QueryAuctionsByOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsByOwnerRequestProtoMsg): QueryAuctionsByOwnerRequest {
    return QueryAuctionsByOwnerRequest.decode(message.value);
  },
  toProto(message: QueryAuctionsByOwnerRequest): Uint8Array {
    return QueryAuctionsByOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsByOwnerRequest): QueryAuctionsByOwnerRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest",
      value: QueryAuctionsByOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionByNFTIDRequest(): QueryAuctionByNFTIDRequest {
  return {
    nftId: ""
  };
}
export const QueryAuctionByNFTIDRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest",
  encode(message: QueryAuctionByNFTIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionByNFTIDRequest {
    return {
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },
  fromPartial(object: Partial<QueryAuctionByNFTIDRequest>): QueryAuctionByNFTIDRequest {
    const message = createBaseQueryAuctionByNFTIDRequest();
    message.nftId = object.nftId ?? "";
    return message;
  },
  fromAmino(object: QueryAuctionByNFTIDRequestAmino): QueryAuctionByNFTIDRequest {
    const message = createBaseQueryAuctionByNFTIDRequest();
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    return message;
  },
  toAmino(message: QueryAuctionByNFTIDRequest): QueryAuctionByNFTIDRequestAmino {
    const obj: any = {};
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionByNFTIDRequestAminoMsg): QueryAuctionByNFTIDRequest {
    return QueryAuctionByNFTIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionByNFTIDRequestProtoMsg): QueryAuctionByNFTIDRequest {
    return QueryAuctionByNFTIDRequest.decode(message.value);
  },
  toProto(message: QueryAuctionByNFTIDRequest): Uint8Array {
    return QueryAuctionByNFTIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionByNFTIDRequest): QueryAuctionByNFTIDRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest",
      value: QueryAuctionByNFTIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsByPriceDenomRequest(): QueryAuctionsByPriceDenomRequest {
  return {
    priceDenom: "",
    pagination: undefined
  };
}
export const QueryAuctionsByPriceDenomRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest",
  encode(message: QueryAuctionsByPriceDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionsByPriceDenomRequest {
    return {
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAuctionsByPriceDenomRequest>): QueryAuctionsByPriceDenomRequest {
    const message = createBaseQueryAuctionsByPriceDenomRequest();
    message.priceDenom = object.priceDenom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionsByPriceDenomRequestAmino): QueryAuctionsByPriceDenomRequest {
    const message = createBaseQueryAuctionsByPriceDenomRequest();
    if (object.price_denom !== undefined && object.price_denom !== null) {
      message.priceDenom = object.price_denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsByPriceDenomRequest): QueryAuctionsByPriceDenomRequestAmino {
    const obj: any = {};
    obj.price_denom = message.priceDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsByPriceDenomRequestAminoMsg): QueryAuctionsByPriceDenomRequest {
    return QueryAuctionsByPriceDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsByPriceDenomRequestProtoMsg): QueryAuctionsByPriceDenomRequest {
    return QueryAuctionsByPriceDenomRequest.decode(message.value);
  },
  toProto(message: QueryAuctionsByPriceDenomRequest): Uint8Array {
    return QueryAuctionsByPriceDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsByPriceDenomRequest): QueryAuctionsByPriceDenomRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest",
      value: QueryAuctionsByPriceDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBidsRequest(): QueryBidsRequest {
  return {
    bidder: "",
    pagination: undefined
  };
}
export const QueryBidsRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest",
  encode(message: QueryBidsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBidsRequest {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBidsRequest>): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    message.bidder = object.bidder ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBidsRequestAmino): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsRequest): QueryBidsRequestAmino {
    const obj: any = {};
    obj.bidder = message.bidder;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidsRequestAminoMsg): QueryBidsRequest {
    return QueryBidsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidsRequestProtoMsg): QueryBidsRequest {
    return QueryBidsRequest.decode(message.value);
  },
  toProto(message: QueryBidsRequest): Uint8Array {
    return QueryBidsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsRequest): QueryBidsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest",
      value: QueryBidsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBidsResponse(): QueryBidsResponse {
  return {
    bids: [],
    pagination: undefined
  };
}
export const QueryBidsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse",
  encode(message: QueryBidsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBidsResponse {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => Bid.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBidsResponse>): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBidsResponseAmino): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map(e => Bid.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsResponse): QueryBidsResponseAmino {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? Bid.toAmino(e) : undefined);
    } else {
      obj.bids = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidsResponseAminoMsg): QueryBidsResponse {
    return QueryBidsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidsResponseProtoMsg): QueryBidsResponse {
    return QueryBidsResponse.decode(message.value);
  },
  toProto(message: QueryBidsResponse): Uint8Array {
    return QueryBidsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsResponse): QueryBidsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse",
      value: QueryBidsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBidRequest(): QueryBidRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryBidRequest = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidRequest",
  encode(message: QueryBidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryBidRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryBidRequest>): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBidRequestAmino): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryBidRequest): QueryBidRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidRequestAminoMsg): QueryBidRequest {
    return QueryBidRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidRequestProtoMsg): QueryBidRequest {
    return QueryBidRequest.decode(message.value);
  },
  toProto(message: QueryBidRequest): Uint8Array {
    return QueryBidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidRequest): QueryBidRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidRequest",
      value: QueryBidRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBidResponse(): QueryBidResponse {
  return {
    bid: undefined
  };
}
export const QueryBidResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidResponse",
  encode(message: QueryBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBidResponse {
    return {
      bid: isSet(object.bid) ? Bid.fromJSON(object.bid) : undefined
    };
  },
  fromPartial(object: Partial<QueryBidResponse>): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    message.bid = object.bid !== undefined && object.bid !== null ? Bid.fromPartial(object.bid) : undefined;
    return message;
  },
  fromAmino(object: QueryBidResponseAmino): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromAmino(object.bid);
    }
    return message;
  },
  toAmino(message: QueryBidResponse): QueryBidResponseAmino {
    const obj: any = {};
    obj.bid = message.bid ? Bid.toAmino(message.bid) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidResponseAminoMsg): QueryBidResponse {
    return QueryBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBidResponseProtoMsg): QueryBidResponse {
    return QueryBidResponse.decode(message.value);
  },
  toProto(message: QueryBidResponse): Uint8Array {
    return QueryBidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidResponse): QueryBidResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidResponse",
      value: QueryBidResponse.encode(message).finish()
    };
  }
};