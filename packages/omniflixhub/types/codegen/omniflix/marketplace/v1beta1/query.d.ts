import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { AuctionStatus, AuctionListing, AuctionListingAmino, AuctionListingSDKType, Bid, BidAmino, BidSDKType } from "./auction";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Listing, ListingAmino, ListingSDKType } from "./listing";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest";
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
    pagination: PageRequest;
}
export interface QueryListingsRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest";
    value: Uint8Array;
}
export interface QueryListingsRequestAmino {
    owner: string;
    price_denom: string;
    pagination?: PageRequestAmino;
}
export interface QueryListingsRequestAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest";
    value: QueryListingsRequestAmino;
}
export interface QueryListingsRequestSDKType {
    owner: string;
    price_denom: string;
    pagination: PageRequestSDKType;
}
export interface QueryListingsResponse {
    listings: Listing[];
    pagination: PageResponse;
}
export interface QueryListingsResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse";
    value: Uint8Array;
}
export interface QueryListingsResponseAmino {
    listings: ListingAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryListingsResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse";
    value: QueryListingsResponseAmino;
}
export interface QueryListingsResponseSDKType {
    listings: ListingSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryListingRequest {
    id: string;
}
export interface QueryListingRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingRequest";
    value: Uint8Array;
}
export interface QueryListingRequestAmino {
    id: string;
}
export interface QueryListingRequestAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryListingRequest";
    value: QueryListingRequestAmino;
}
export interface QueryListingRequestSDKType {
    id: string;
}
export interface QueryListingResponse {
    listing: Listing;
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
    listing: ListingSDKType;
}
export interface QueryListingsByOwnerRequest {
    owner: string;
    pagination: PageRequest;
}
export interface QueryListingsByOwnerRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest";
    value: Uint8Array;
}
export interface QueryListingsByOwnerRequestAmino {
    owner: string;
    pagination?: PageRequestAmino;
}
export interface QueryListingsByOwnerRequestAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest";
    value: QueryListingsByOwnerRequestAmino;
}
export interface QueryListingsByOwnerRequestSDKType {
    owner: string;
    pagination: PageRequestSDKType;
}
export interface QueryListingsByOwnerResponse {
    listings: Listing[];
    pagination: PageResponse;
}
export interface QueryListingsByOwnerResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse";
    value: Uint8Array;
}
export interface QueryListingsByOwnerResponseAmino {
    listings: ListingAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryListingsByOwnerResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse";
    value: QueryListingsByOwnerResponseAmino;
}
export interface QueryListingsByOwnerResponseSDKType {
    listings: ListingSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryListingByNFTIDRequest {
    nftId: string;
}
export interface QueryListingByNFTIDRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest";
    value: Uint8Array;
}
export interface QueryListingByNFTIDRequestAmino {
    nft_id: string;
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
    pagination: PageRequest;
}
export interface QueryListingsByPriceDenomRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest";
    value: Uint8Array;
}
export interface QueryListingsByPriceDenomRequestAmino {
    price_denom: string;
    pagination?: PageRequestAmino;
}
export interface QueryListingsByPriceDenomRequestAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest";
    value: QueryListingsByPriceDenomRequestAmino;
}
export interface QueryListingsByPriceDenomRequestSDKType {
    price_denom: string;
    pagination: PageRequestSDKType;
}
export interface QueryListingsByPriceDenomResponse {
    listings: Listing[];
    pagination: PageResponse;
}
export interface QueryListingsByPriceDenomResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse";
    value: Uint8Array;
}
export interface QueryListingsByPriceDenomResponseAmino {
    listings: ListingAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryListingsByPriceDenomResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse";
    value: QueryListingsByPriceDenomResponseAmino;
}
export interface QueryListingsByPriceDenomResponseSDKType {
    listings: ListingSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryAuctionsRequest {
    status: AuctionStatus;
    owner: string;
    priceDenom: string;
    pagination: PageRequest;
}
export interface QueryAuctionsRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest";
    value: Uint8Array;
}
export interface QueryAuctionsRequestAmino {
    status: AuctionStatus;
    owner: string;
    price_denom: string;
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
    pagination: PageRequestSDKType;
}
export interface QueryAuctionsResponse {
    auctions: AuctionListing[];
    pagination: PageResponse;
}
export interface QueryAuctionsResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse";
    value: Uint8Array;
}
export interface QueryAuctionsResponseAmino {
    auctions: AuctionListingAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAuctionsResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse";
    value: QueryAuctionsResponseAmino;
}
export interface QueryAuctionsResponseSDKType {
    auctions: AuctionListingSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryAuctionRequest {
    id: bigint;
}
export interface QueryAuctionRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest";
    value: Uint8Array;
}
export interface QueryAuctionRequestAmino {
    id: string;
}
export interface QueryAuctionRequestAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest";
    value: QueryAuctionRequestAmino;
}
export interface QueryAuctionRequestSDKType {
    id: bigint;
}
export interface QueryAuctionResponse {
    auction: AuctionListing;
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
    auction: AuctionListingSDKType;
}
export interface QueryAuctionsByOwnerRequest {
    owner: string;
    pagination: PageRequest;
}
export interface QueryAuctionsByOwnerRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest";
    value: Uint8Array;
}
export interface QueryAuctionsByOwnerRequestAmino {
    owner: string;
    pagination?: PageRequestAmino;
}
export interface QueryAuctionsByOwnerRequestAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest";
    value: QueryAuctionsByOwnerRequestAmino;
}
export interface QueryAuctionsByOwnerRequestSDKType {
    owner: string;
    pagination: PageRequestSDKType;
}
export interface QueryAuctionByNFTIDRequest {
    nftId: string;
}
export interface QueryAuctionByNFTIDRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest";
    value: Uint8Array;
}
export interface QueryAuctionByNFTIDRequestAmino {
    nft_id: string;
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
    pagination: PageRequest;
}
export interface QueryAuctionsByPriceDenomRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest";
    value: Uint8Array;
}
export interface QueryAuctionsByPriceDenomRequestAmino {
    price_denom: string;
    pagination?: PageRequestAmino;
}
export interface QueryAuctionsByPriceDenomRequestAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest";
    value: QueryAuctionsByPriceDenomRequestAmino;
}
export interface QueryAuctionsByPriceDenomRequestSDKType {
    price_denom: string;
    pagination: PageRequestSDKType;
}
export interface QueryBidsRequest {
    bidder: string;
    pagination: PageRequest;
}
export interface QueryBidsRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest";
    value: Uint8Array;
}
export interface QueryBidsRequestAmino {
    bidder: string;
    pagination?: PageRequestAmino;
}
export interface QueryBidsRequestAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest";
    value: QueryBidsRequestAmino;
}
export interface QueryBidsRequestSDKType {
    bidder: string;
    pagination: PageRequestSDKType;
}
export interface QueryBidsResponse {
    bids: Bid[];
    pagination: PageResponse;
}
export interface QueryBidsResponseProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse";
    value: Uint8Array;
}
export interface QueryBidsResponseAmino {
    bids: BidAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryBidsResponseAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse";
    value: QueryBidsResponseAmino;
}
export interface QueryBidsResponseSDKType {
    bids: BidSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryBidRequest {
    id: bigint;
}
export interface QueryBidRequestProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidRequest";
    value: Uint8Array;
}
export interface QueryBidRequestAmino {
    id: string;
}
export interface QueryBidRequestAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.QueryBidRequest";
    value: QueryBidRequestAmino;
}
export interface QueryBidRequestSDKType {
    id: bigint;
}
export interface QueryBidResponse {
    bid: Bid;
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
    bid: BidSDKType;
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
export declare const QueryListingsRequest: {
    typeUrl: string;
    encode(message: QueryListingsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingsRequest;
    fromPartial(object: Partial<QueryListingsRequest>): QueryListingsRequest;
    fromAmino(object: QueryListingsRequestAmino): QueryListingsRequest;
    toAmino(message: QueryListingsRequest): QueryListingsRequestAmino;
    fromAminoMsg(object: QueryListingsRequestAminoMsg): QueryListingsRequest;
    fromProtoMsg(message: QueryListingsRequestProtoMsg): QueryListingsRequest;
    toProto(message: QueryListingsRequest): Uint8Array;
    toProtoMsg(message: QueryListingsRequest): QueryListingsRequestProtoMsg;
};
export declare const QueryListingsResponse: {
    typeUrl: string;
    encode(message: QueryListingsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingsResponse;
    fromPartial(object: Partial<QueryListingsResponse>): QueryListingsResponse;
    fromAmino(object: QueryListingsResponseAmino): QueryListingsResponse;
    toAmino(message: QueryListingsResponse): QueryListingsResponseAmino;
    fromAminoMsg(object: QueryListingsResponseAminoMsg): QueryListingsResponse;
    fromProtoMsg(message: QueryListingsResponseProtoMsg): QueryListingsResponse;
    toProto(message: QueryListingsResponse): Uint8Array;
    toProtoMsg(message: QueryListingsResponse): QueryListingsResponseProtoMsg;
};
export declare const QueryListingRequest: {
    typeUrl: string;
    encode(message: QueryListingRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingRequest;
    fromPartial(object: Partial<QueryListingRequest>): QueryListingRequest;
    fromAmino(object: QueryListingRequestAmino): QueryListingRequest;
    toAmino(message: QueryListingRequest): QueryListingRequestAmino;
    fromAminoMsg(object: QueryListingRequestAminoMsg): QueryListingRequest;
    fromProtoMsg(message: QueryListingRequestProtoMsg): QueryListingRequest;
    toProto(message: QueryListingRequest): Uint8Array;
    toProtoMsg(message: QueryListingRequest): QueryListingRequestProtoMsg;
};
export declare const QueryListingResponse: {
    typeUrl: string;
    encode(message: QueryListingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingResponse;
    fromPartial(object: Partial<QueryListingResponse>): QueryListingResponse;
    fromAmino(object: QueryListingResponseAmino): QueryListingResponse;
    toAmino(message: QueryListingResponse): QueryListingResponseAmino;
    fromAminoMsg(object: QueryListingResponseAminoMsg): QueryListingResponse;
    fromProtoMsg(message: QueryListingResponseProtoMsg): QueryListingResponse;
    toProto(message: QueryListingResponse): Uint8Array;
    toProtoMsg(message: QueryListingResponse): QueryListingResponseProtoMsg;
};
export declare const QueryListingsByOwnerRequest: {
    typeUrl: string;
    encode(message: QueryListingsByOwnerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingsByOwnerRequest;
    fromPartial(object: Partial<QueryListingsByOwnerRequest>): QueryListingsByOwnerRequest;
    fromAmino(object: QueryListingsByOwnerRequestAmino): QueryListingsByOwnerRequest;
    toAmino(message: QueryListingsByOwnerRequest): QueryListingsByOwnerRequestAmino;
    fromAminoMsg(object: QueryListingsByOwnerRequestAminoMsg): QueryListingsByOwnerRequest;
    fromProtoMsg(message: QueryListingsByOwnerRequestProtoMsg): QueryListingsByOwnerRequest;
    toProto(message: QueryListingsByOwnerRequest): Uint8Array;
    toProtoMsg(message: QueryListingsByOwnerRequest): QueryListingsByOwnerRequestProtoMsg;
};
export declare const QueryListingsByOwnerResponse: {
    typeUrl: string;
    encode(message: QueryListingsByOwnerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingsByOwnerResponse;
    fromPartial(object: Partial<QueryListingsByOwnerResponse>): QueryListingsByOwnerResponse;
    fromAmino(object: QueryListingsByOwnerResponseAmino): QueryListingsByOwnerResponse;
    toAmino(message: QueryListingsByOwnerResponse): QueryListingsByOwnerResponseAmino;
    fromAminoMsg(object: QueryListingsByOwnerResponseAminoMsg): QueryListingsByOwnerResponse;
    fromProtoMsg(message: QueryListingsByOwnerResponseProtoMsg): QueryListingsByOwnerResponse;
    toProto(message: QueryListingsByOwnerResponse): Uint8Array;
    toProtoMsg(message: QueryListingsByOwnerResponse): QueryListingsByOwnerResponseProtoMsg;
};
export declare const QueryListingByNFTIDRequest: {
    typeUrl: string;
    encode(message: QueryListingByNFTIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingByNFTIDRequest;
    fromPartial(object: Partial<QueryListingByNFTIDRequest>): QueryListingByNFTIDRequest;
    fromAmino(object: QueryListingByNFTIDRequestAmino): QueryListingByNFTIDRequest;
    toAmino(message: QueryListingByNFTIDRequest): QueryListingByNFTIDRequestAmino;
    fromAminoMsg(object: QueryListingByNFTIDRequestAminoMsg): QueryListingByNFTIDRequest;
    fromProtoMsg(message: QueryListingByNFTIDRequestProtoMsg): QueryListingByNFTIDRequest;
    toProto(message: QueryListingByNFTIDRequest): Uint8Array;
    toProtoMsg(message: QueryListingByNFTIDRequest): QueryListingByNFTIDRequestProtoMsg;
};
export declare const QueryListingsByPriceDenomRequest: {
    typeUrl: string;
    encode(message: QueryListingsByPriceDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingsByPriceDenomRequest;
    fromPartial(object: Partial<QueryListingsByPriceDenomRequest>): QueryListingsByPriceDenomRequest;
    fromAmino(object: QueryListingsByPriceDenomRequestAmino): QueryListingsByPriceDenomRequest;
    toAmino(message: QueryListingsByPriceDenomRequest): QueryListingsByPriceDenomRequestAmino;
    fromAminoMsg(object: QueryListingsByPriceDenomRequestAminoMsg): QueryListingsByPriceDenomRequest;
    fromProtoMsg(message: QueryListingsByPriceDenomRequestProtoMsg): QueryListingsByPriceDenomRequest;
    toProto(message: QueryListingsByPriceDenomRequest): Uint8Array;
    toProtoMsg(message: QueryListingsByPriceDenomRequest): QueryListingsByPriceDenomRequestProtoMsg;
};
export declare const QueryListingsByPriceDenomResponse: {
    typeUrl: string;
    encode(message: QueryListingsByPriceDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingsByPriceDenomResponse;
    fromPartial(object: Partial<QueryListingsByPriceDenomResponse>): QueryListingsByPriceDenomResponse;
    fromAmino(object: QueryListingsByPriceDenomResponseAmino): QueryListingsByPriceDenomResponse;
    toAmino(message: QueryListingsByPriceDenomResponse): QueryListingsByPriceDenomResponseAmino;
    fromAminoMsg(object: QueryListingsByPriceDenomResponseAminoMsg): QueryListingsByPriceDenomResponse;
    fromProtoMsg(message: QueryListingsByPriceDenomResponseProtoMsg): QueryListingsByPriceDenomResponse;
    toProto(message: QueryListingsByPriceDenomResponse): Uint8Array;
    toProtoMsg(message: QueryListingsByPriceDenomResponse): QueryListingsByPriceDenomResponseProtoMsg;
};
export declare const QueryAuctionsRequest: {
    typeUrl: string;
    encode(message: QueryAuctionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAuctionsRequest;
    fromPartial(object: Partial<QueryAuctionsRequest>): QueryAuctionsRequest;
    fromAmino(object: QueryAuctionsRequestAmino): QueryAuctionsRequest;
    toAmino(message: QueryAuctionsRequest): QueryAuctionsRequestAmino;
    fromAminoMsg(object: QueryAuctionsRequestAminoMsg): QueryAuctionsRequest;
    fromProtoMsg(message: QueryAuctionsRequestProtoMsg): QueryAuctionsRequest;
    toProto(message: QueryAuctionsRequest): Uint8Array;
    toProtoMsg(message: QueryAuctionsRequest): QueryAuctionsRequestProtoMsg;
};
export declare const QueryAuctionsResponse: {
    typeUrl: string;
    encode(message: QueryAuctionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAuctionsResponse;
    fromPartial(object: Partial<QueryAuctionsResponse>): QueryAuctionsResponse;
    fromAmino(object: QueryAuctionsResponseAmino): QueryAuctionsResponse;
    toAmino(message: QueryAuctionsResponse): QueryAuctionsResponseAmino;
    fromAminoMsg(object: QueryAuctionsResponseAminoMsg): QueryAuctionsResponse;
    fromProtoMsg(message: QueryAuctionsResponseProtoMsg): QueryAuctionsResponse;
    toProto(message: QueryAuctionsResponse): Uint8Array;
    toProtoMsg(message: QueryAuctionsResponse): QueryAuctionsResponseProtoMsg;
};
export declare const QueryAuctionRequest: {
    typeUrl: string;
    encode(message: QueryAuctionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAuctionRequest;
    fromPartial(object: Partial<QueryAuctionRequest>): QueryAuctionRequest;
    fromAmino(object: QueryAuctionRequestAmino): QueryAuctionRequest;
    toAmino(message: QueryAuctionRequest): QueryAuctionRequestAmino;
    fromAminoMsg(object: QueryAuctionRequestAminoMsg): QueryAuctionRequest;
    fromProtoMsg(message: QueryAuctionRequestProtoMsg): QueryAuctionRequest;
    toProto(message: QueryAuctionRequest): Uint8Array;
    toProtoMsg(message: QueryAuctionRequest): QueryAuctionRequestProtoMsg;
};
export declare const QueryAuctionResponse: {
    typeUrl: string;
    encode(message: QueryAuctionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAuctionResponse;
    fromPartial(object: Partial<QueryAuctionResponse>): QueryAuctionResponse;
    fromAmino(object: QueryAuctionResponseAmino): QueryAuctionResponse;
    toAmino(message: QueryAuctionResponse): QueryAuctionResponseAmino;
    fromAminoMsg(object: QueryAuctionResponseAminoMsg): QueryAuctionResponse;
    fromProtoMsg(message: QueryAuctionResponseProtoMsg): QueryAuctionResponse;
    toProto(message: QueryAuctionResponse): Uint8Array;
    toProtoMsg(message: QueryAuctionResponse): QueryAuctionResponseProtoMsg;
};
export declare const QueryAuctionsByOwnerRequest: {
    typeUrl: string;
    encode(message: QueryAuctionsByOwnerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAuctionsByOwnerRequest;
    fromPartial(object: Partial<QueryAuctionsByOwnerRequest>): QueryAuctionsByOwnerRequest;
    fromAmino(object: QueryAuctionsByOwnerRequestAmino): QueryAuctionsByOwnerRequest;
    toAmino(message: QueryAuctionsByOwnerRequest): QueryAuctionsByOwnerRequestAmino;
    fromAminoMsg(object: QueryAuctionsByOwnerRequestAminoMsg): QueryAuctionsByOwnerRequest;
    fromProtoMsg(message: QueryAuctionsByOwnerRequestProtoMsg): QueryAuctionsByOwnerRequest;
    toProto(message: QueryAuctionsByOwnerRequest): Uint8Array;
    toProtoMsg(message: QueryAuctionsByOwnerRequest): QueryAuctionsByOwnerRequestProtoMsg;
};
export declare const QueryAuctionByNFTIDRequest: {
    typeUrl: string;
    encode(message: QueryAuctionByNFTIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAuctionByNFTIDRequest;
    fromPartial(object: Partial<QueryAuctionByNFTIDRequest>): QueryAuctionByNFTIDRequest;
    fromAmino(object: QueryAuctionByNFTIDRequestAmino): QueryAuctionByNFTIDRequest;
    toAmino(message: QueryAuctionByNFTIDRequest): QueryAuctionByNFTIDRequestAmino;
    fromAminoMsg(object: QueryAuctionByNFTIDRequestAminoMsg): QueryAuctionByNFTIDRequest;
    fromProtoMsg(message: QueryAuctionByNFTIDRequestProtoMsg): QueryAuctionByNFTIDRequest;
    toProto(message: QueryAuctionByNFTIDRequest): Uint8Array;
    toProtoMsg(message: QueryAuctionByNFTIDRequest): QueryAuctionByNFTIDRequestProtoMsg;
};
export declare const QueryAuctionsByPriceDenomRequest: {
    typeUrl: string;
    encode(message: QueryAuctionsByPriceDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAuctionsByPriceDenomRequest;
    fromPartial(object: Partial<QueryAuctionsByPriceDenomRequest>): QueryAuctionsByPriceDenomRequest;
    fromAmino(object: QueryAuctionsByPriceDenomRequestAmino): QueryAuctionsByPriceDenomRequest;
    toAmino(message: QueryAuctionsByPriceDenomRequest): QueryAuctionsByPriceDenomRequestAmino;
    fromAminoMsg(object: QueryAuctionsByPriceDenomRequestAminoMsg): QueryAuctionsByPriceDenomRequest;
    fromProtoMsg(message: QueryAuctionsByPriceDenomRequestProtoMsg): QueryAuctionsByPriceDenomRequest;
    toProto(message: QueryAuctionsByPriceDenomRequest): Uint8Array;
    toProtoMsg(message: QueryAuctionsByPriceDenomRequest): QueryAuctionsByPriceDenomRequestProtoMsg;
};
export declare const QueryBidsRequest: {
    typeUrl: string;
    encode(message: QueryBidsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBidsRequest;
    fromPartial(object: Partial<QueryBidsRequest>): QueryBidsRequest;
    fromAmino(object: QueryBidsRequestAmino): QueryBidsRequest;
    toAmino(message: QueryBidsRequest): QueryBidsRequestAmino;
    fromAminoMsg(object: QueryBidsRequestAminoMsg): QueryBidsRequest;
    fromProtoMsg(message: QueryBidsRequestProtoMsg): QueryBidsRequest;
    toProto(message: QueryBidsRequest): Uint8Array;
    toProtoMsg(message: QueryBidsRequest): QueryBidsRequestProtoMsg;
};
export declare const QueryBidsResponse: {
    typeUrl: string;
    encode(message: QueryBidsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBidsResponse;
    fromPartial(object: Partial<QueryBidsResponse>): QueryBidsResponse;
    fromAmino(object: QueryBidsResponseAmino): QueryBidsResponse;
    toAmino(message: QueryBidsResponse): QueryBidsResponseAmino;
    fromAminoMsg(object: QueryBidsResponseAminoMsg): QueryBidsResponse;
    fromProtoMsg(message: QueryBidsResponseProtoMsg): QueryBidsResponse;
    toProto(message: QueryBidsResponse): Uint8Array;
    toProtoMsg(message: QueryBidsResponse): QueryBidsResponseProtoMsg;
};
export declare const QueryBidRequest: {
    typeUrl: string;
    encode(message: QueryBidRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBidRequest;
    fromPartial(object: Partial<QueryBidRequest>): QueryBidRequest;
    fromAmino(object: QueryBidRequestAmino): QueryBidRequest;
    toAmino(message: QueryBidRequest): QueryBidRequestAmino;
    fromAminoMsg(object: QueryBidRequestAminoMsg): QueryBidRequest;
    fromProtoMsg(message: QueryBidRequestProtoMsg): QueryBidRequest;
    toProto(message: QueryBidRequest): Uint8Array;
    toProtoMsg(message: QueryBidRequest): QueryBidRequestProtoMsg;
};
export declare const QueryBidResponse: {
    typeUrl: string;
    encode(message: QueryBidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBidResponse;
    fromPartial(object: Partial<QueryBidResponse>): QueryBidResponse;
    fromAmino(object: QueryBidResponseAmino): QueryBidResponse;
    toAmino(message: QueryBidResponse): QueryBidResponseAmino;
    fromAminoMsg(object: QueryBidResponseAminoMsg): QueryBidResponse;
    fromProtoMsg(message: QueryBidResponseProtoMsg): QueryBidResponse;
    toProto(message: QueryBidResponse): Uint8Array;
    toProtoMsg(message: QueryBidResponse): QueryBidResponseProtoMsg;
};
