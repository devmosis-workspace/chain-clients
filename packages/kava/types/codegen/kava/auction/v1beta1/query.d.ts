import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest defines the request type for querying x/auction parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kava.auction.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/auction parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kava.auction.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/auction parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/auction parameters. */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/kava.auction.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/auction parameters. */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/kava.auction.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/auction parameters. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequest {
    auctionId: bigint;
}
export interface QueryAuctionRequestProtoMsg {
    typeUrl: "/kava.auction.v1beta1.QueryAuctionRequest";
    value: Uint8Array;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequestAmino {
    auction_id: string;
}
export interface QueryAuctionRequestAminoMsg {
    type: "/kava.auction.v1beta1.QueryAuctionRequest";
    value: QueryAuctionRequestAmino;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequestSDKType {
    auction_id: bigint;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponse {
    auction: Any;
}
export interface QueryAuctionResponseProtoMsg {
    typeUrl: "/kava.auction.v1beta1.QueryAuctionResponse";
    value: Uint8Array;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponseAmino {
    auction?: AnyAmino;
}
export interface QueryAuctionResponseAminoMsg {
    type: "/kava.auction.v1beta1.QueryAuctionResponse";
    value: QueryAuctionResponseAmino;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponseSDKType {
    auction: AnySDKType;
}
/** QueryAuctionsRequest is the request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequest {
    type: string;
    owner: string;
    denom: string;
    phase: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryAuctionsRequestProtoMsg {
    typeUrl: "/kava.auction.v1beta1.QueryAuctionsRequest";
    value: Uint8Array;
}
/** QueryAuctionsRequest is the request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequestAmino {
    type: string;
    owner: string;
    denom: string;
    phase: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryAuctionsRequestAminoMsg {
    type: "/kava.auction.v1beta1.QueryAuctionsRequest";
    value: QueryAuctionsRequestAmino;
}
/** QueryAuctionsRequest is the request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequestSDKType {
    type: string;
    owner: string;
    denom: string;
    phase: string;
    pagination: PageRequestSDKType;
}
/** QueryAuctionsResponse is the response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponse {
    auctions: Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryAuctionsResponseProtoMsg {
    typeUrl: "/kava.auction.v1beta1.QueryAuctionsResponse";
    value: Uint8Array;
}
/** QueryAuctionsResponse is the response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponseAmino {
    auctions: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAuctionsResponseAminoMsg {
    type: "/kava.auction.v1beta1.QueryAuctionsResponse";
    value: QueryAuctionsResponseAmino;
}
/** QueryAuctionsResponse is the response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponseSDKType {
    auctions: AnySDKType[];
    pagination: PageResponseSDKType;
}
/** QueryNextAuctionIDRequest defines the request type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDRequest {
}
export interface QueryNextAuctionIDRequestProtoMsg {
    typeUrl: "/kava.auction.v1beta1.QueryNextAuctionIDRequest";
    value: Uint8Array;
}
/** QueryNextAuctionIDRequest defines the request type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDRequestAmino {
}
export interface QueryNextAuctionIDRequestAminoMsg {
    type: "/kava.auction.v1beta1.QueryNextAuctionIDRequest";
    value: QueryNextAuctionIDRequestAmino;
}
/** QueryNextAuctionIDRequest defines the request type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDRequestSDKType {
}
/** QueryNextAuctionIDResponse defines the response type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDResponse {
    id: bigint;
}
export interface QueryNextAuctionIDResponseProtoMsg {
    typeUrl: "/kava.auction.v1beta1.QueryNextAuctionIDResponse";
    value: Uint8Array;
}
/** QueryNextAuctionIDResponse defines the response type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDResponseAmino {
    id: string;
}
export interface QueryNextAuctionIDResponseAminoMsg {
    type: "/kava.auction.v1beta1.QueryNextAuctionIDResponse";
    value: QueryNextAuctionIDResponseAmino;
}
/** QueryNextAuctionIDResponse defines the response type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDResponseSDKType {
    id: bigint;
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
export declare const QueryNextAuctionIDRequest: {
    typeUrl: string;
    encode(_: QueryNextAuctionIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryNextAuctionIDRequest;
    fromPartial(_: Partial<QueryNextAuctionIDRequest>): QueryNextAuctionIDRequest;
    fromAmino(_: QueryNextAuctionIDRequestAmino): QueryNextAuctionIDRequest;
    toAmino(_: QueryNextAuctionIDRequest): QueryNextAuctionIDRequestAmino;
    fromAminoMsg(object: QueryNextAuctionIDRequestAminoMsg): QueryNextAuctionIDRequest;
    fromProtoMsg(message: QueryNextAuctionIDRequestProtoMsg): QueryNextAuctionIDRequest;
    toProto(message: QueryNextAuctionIDRequest): Uint8Array;
    toProtoMsg(message: QueryNextAuctionIDRequest): QueryNextAuctionIDRequestProtoMsg;
};
export declare const QueryNextAuctionIDResponse: {
    typeUrl: string;
    encode(message: QueryNextAuctionIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNextAuctionIDResponse;
    fromPartial(object: Partial<QueryNextAuctionIDResponse>): QueryNextAuctionIDResponse;
    fromAmino(object: QueryNextAuctionIDResponseAmino): QueryNextAuctionIDResponse;
    toAmino(message: QueryNextAuctionIDResponse): QueryNextAuctionIDResponseAmino;
    fromAminoMsg(object: QueryNextAuctionIDResponseAminoMsg): QueryNextAuctionIDResponse;
    fromProtoMsg(message: QueryNextAuctionIDResponseProtoMsg): QueryNextAuctionIDResponse;
    toProto(message: QueryNextAuctionIDResponse): Uint8Array;
    toProtoMsg(message: QueryNextAuctionIDResponse): QueryNextAuctionIDResponseProtoMsg;
};
