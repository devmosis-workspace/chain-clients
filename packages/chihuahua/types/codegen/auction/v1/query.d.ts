import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Auction, AuctionAmino, AuctionSDKType, Bid, BidAmino, BidSDKType, TokenPrice, TokenPriceAmino, TokenPriceSDKType } from "./auction";
import { BinaryWriter } from "../../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/auction.v1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/auction.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/auction.v1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/auction.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryActiveAuctionRequest {
    auctionId: number;
}
export interface QueryActiveAuctionRequestProtoMsg {
    typeUrl: "/auction.v1.QueryActiveAuctionRequest";
    value: Uint8Array;
}
export interface QueryActiveAuctionRequestAmino {
    auction_id?: number;
}
export interface QueryActiveAuctionRequestAminoMsg {
    type: "/auction.v1.QueryActiveAuctionRequest";
    value: QueryActiveAuctionRequestAmino;
}
export interface QueryActiveAuctionRequestSDKType {
    auction_id: number;
}
export interface QueryActiveAuctionResponse {
    auction?: Auction;
}
export interface QueryActiveAuctionResponseProtoMsg {
    typeUrl: "/auction.v1.QueryActiveAuctionResponse";
    value: Uint8Array;
}
export interface QueryActiveAuctionResponseAmino {
    auction?: AuctionAmino;
}
export interface QueryActiveAuctionResponseAminoMsg {
    type: "/auction.v1.QueryActiveAuctionResponse";
    value: QueryActiveAuctionResponseAmino;
}
export interface QueryActiveAuctionResponseSDKType {
    auction?: AuctionSDKType;
}
export interface QueryEndedAuctionRequest {
    auctionId: number;
}
export interface QueryEndedAuctionRequestProtoMsg {
    typeUrl: "/auction.v1.QueryEndedAuctionRequest";
    value: Uint8Array;
}
export interface QueryEndedAuctionRequestAmino {
    auction_id?: number;
}
export interface QueryEndedAuctionRequestAminoMsg {
    type: "/auction.v1.QueryEndedAuctionRequest";
    value: QueryEndedAuctionRequestAmino;
}
export interface QueryEndedAuctionRequestSDKType {
    auction_id: number;
}
export interface QueryEndedAuctionResponse {
    auction?: Auction;
}
export interface QueryEndedAuctionResponseProtoMsg {
    typeUrl: "/auction.v1.QueryEndedAuctionResponse";
    value: Uint8Array;
}
export interface QueryEndedAuctionResponseAmino {
    auction?: AuctionAmino;
}
export interface QueryEndedAuctionResponseAminoMsg {
    type: "/auction.v1.QueryEndedAuctionResponse";
    value: QueryEndedAuctionResponseAmino;
}
export interface QueryEndedAuctionResponseSDKType {
    auction?: AuctionSDKType;
}
export interface QueryActiveAuctionsRequest {
}
export interface QueryActiveAuctionsRequestProtoMsg {
    typeUrl: "/auction.v1.QueryActiveAuctionsRequest";
    value: Uint8Array;
}
export interface QueryActiveAuctionsRequestAmino {
}
export interface QueryActiveAuctionsRequestAminoMsg {
    type: "/auction.v1.QueryActiveAuctionsRequest";
    value: QueryActiveAuctionsRequestAmino;
}
export interface QueryActiveAuctionsRequestSDKType {
}
export interface QueryActiveAuctionsResponse {
    auctions: Auction[];
}
export interface QueryActiveAuctionsResponseProtoMsg {
    typeUrl: "/auction.v1.QueryActiveAuctionsResponse";
    value: Uint8Array;
}
export interface QueryActiveAuctionsResponseAmino {
    auctions?: AuctionAmino[];
}
export interface QueryActiveAuctionsResponseAminoMsg {
    type: "/auction.v1.QueryActiveAuctionsResponse";
    value: QueryActiveAuctionsResponseAmino;
}
export interface QueryActiveAuctionsResponseSDKType {
    auctions: AuctionSDKType[];
}
export interface QueryEndedAuctionsRequest {
    pagination: PageRequest;
}
export interface QueryEndedAuctionsRequestProtoMsg {
    typeUrl: "/auction.v1.QueryEndedAuctionsRequest";
    value: Uint8Array;
}
export interface QueryEndedAuctionsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryEndedAuctionsRequestAminoMsg {
    type: "/auction.v1.QueryEndedAuctionsRequest";
    value: QueryEndedAuctionsRequestAmino;
}
export interface QueryEndedAuctionsRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QueryEndedAuctionsResponse {
    auctions: Auction[];
    pagination: PageResponse;
}
export interface QueryEndedAuctionsResponseProtoMsg {
    typeUrl: "/auction.v1.QueryEndedAuctionsResponse";
    value: Uint8Array;
}
export interface QueryEndedAuctionsResponseAmino {
    auctions?: AuctionAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryEndedAuctionsResponseAminoMsg {
    type: "/auction.v1.QueryEndedAuctionsResponse";
    value: QueryEndedAuctionsResponseAmino;
}
export interface QueryEndedAuctionsResponseSDKType {
    auctions: AuctionSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryBidRequest {
    bidId: bigint;
    auctionId: number;
}
export interface QueryBidRequestProtoMsg {
    typeUrl: "/auction.v1.QueryBidRequest";
    value: Uint8Array;
}
export interface QueryBidRequestAmino {
    bid_id?: string;
    auction_id?: number;
}
export interface QueryBidRequestAminoMsg {
    type: "/auction.v1.QueryBidRequest";
    value: QueryBidRequestAmino;
}
export interface QueryBidRequestSDKType {
    bid_id: bigint;
    auction_id: number;
}
export interface QueryBidResponse {
    bid?: Bid;
}
export interface QueryBidResponseProtoMsg {
    typeUrl: "/auction.v1.QueryBidResponse";
    value: Uint8Array;
}
export interface QueryBidResponseAmino {
    bid?: BidAmino;
}
export interface QueryBidResponseAminoMsg {
    type: "/auction.v1.QueryBidResponse";
    value: QueryBidResponseAmino;
}
export interface QueryBidResponseSDKType {
    bid?: BidSDKType;
}
export interface QueryBidsByAuctionRequest {
    auctionId: number;
    pagination: PageRequest;
}
export interface QueryBidsByAuctionRequestProtoMsg {
    typeUrl: "/auction.v1.QueryBidsByAuctionRequest";
    value: Uint8Array;
}
export interface QueryBidsByAuctionRequestAmino {
    auction_id?: number;
    pagination?: PageRequestAmino;
}
export interface QueryBidsByAuctionRequestAminoMsg {
    type: "/auction.v1.QueryBidsByAuctionRequest";
    value: QueryBidsByAuctionRequestAmino;
}
export interface QueryBidsByAuctionRequestSDKType {
    auction_id: number;
    pagination: PageRequestSDKType;
}
export interface QueryBidsByAuctionResponse {
    bids: Bid[];
    pagination: PageResponse;
}
export interface QueryBidsByAuctionResponseProtoMsg {
    typeUrl: "/auction.v1.QueryBidsByAuctionResponse";
    value: Uint8Array;
}
export interface QueryBidsByAuctionResponseAmino {
    bids?: BidAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryBidsByAuctionResponseAminoMsg {
    type: "/auction.v1.QueryBidsByAuctionResponse";
    value: QueryBidsByAuctionResponseAmino;
}
export interface QueryBidsByAuctionResponseSDKType {
    bids: BidSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryTokenPriceRequest {
    denom: string;
}
export interface QueryTokenPriceRequestProtoMsg {
    typeUrl: "/auction.v1.QueryTokenPriceRequest";
    value: Uint8Array;
}
export interface QueryTokenPriceRequestAmino {
    denom?: string;
}
export interface QueryTokenPriceRequestAminoMsg {
    type: "/auction.v1.QueryTokenPriceRequest";
    value: QueryTokenPriceRequestAmino;
}
export interface QueryTokenPriceRequestSDKType {
    denom: string;
}
export interface QueryTokenPriceResponse {
    tokenPrice?: TokenPrice;
}
export interface QueryTokenPriceResponseProtoMsg {
    typeUrl: "/auction.v1.QueryTokenPriceResponse";
    value: Uint8Array;
}
export interface QueryTokenPriceResponseAmino {
    token_price?: TokenPriceAmino;
}
export interface QueryTokenPriceResponseAminoMsg {
    type: "/auction.v1.QueryTokenPriceResponse";
    value: QueryTokenPriceResponseAmino;
}
export interface QueryTokenPriceResponseSDKType {
    token_price?: TokenPriceSDKType;
}
export interface QueryTokenPricesRequest {
}
export interface QueryTokenPricesRequestProtoMsg {
    typeUrl: "/auction.v1.QueryTokenPricesRequest";
    value: Uint8Array;
}
export interface QueryTokenPricesRequestAmino {
}
export interface QueryTokenPricesRequestAminoMsg {
    type: "/auction.v1.QueryTokenPricesRequest";
    value: QueryTokenPricesRequestAmino;
}
export interface QueryTokenPricesRequestSDKType {
}
export interface QueryTokenPricesResponse {
    tokenPrices: TokenPrice[];
}
export interface QueryTokenPricesResponseProtoMsg {
    typeUrl: "/auction.v1.QueryTokenPricesResponse";
    value: Uint8Array;
}
export interface QueryTokenPricesResponseAmino {
    token_prices?: TokenPriceAmino[];
}
export interface QueryTokenPricesResponseAminoMsg {
    type: "/auction.v1.QueryTokenPricesResponse";
    value: QueryTokenPricesResponseAmino;
}
export interface QueryTokenPricesResponseSDKType {
    token_prices: TokenPriceSDKType[];
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
export declare const QueryActiveAuctionRequest: {
    typeUrl: string;
    encode(message: QueryActiveAuctionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryActiveAuctionRequest;
    fromPartial(object: Partial<QueryActiveAuctionRequest>): QueryActiveAuctionRequest;
    fromAmino(object: QueryActiveAuctionRequestAmino): QueryActiveAuctionRequest;
    toAmino(message: QueryActiveAuctionRequest): QueryActiveAuctionRequestAmino;
    fromAminoMsg(object: QueryActiveAuctionRequestAminoMsg): QueryActiveAuctionRequest;
    fromProtoMsg(message: QueryActiveAuctionRequestProtoMsg): QueryActiveAuctionRequest;
    toProto(message: QueryActiveAuctionRequest): Uint8Array;
    toProtoMsg(message: QueryActiveAuctionRequest): QueryActiveAuctionRequestProtoMsg;
};
export declare const QueryActiveAuctionResponse: {
    typeUrl: string;
    encode(message: QueryActiveAuctionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryActiveAuctionResponse;
    fromPartial(object: Partial<QueryActiveAuctionResponse>): QueryActiveAuctionResponse;
    fromAmino(object: QueryActiveAuctionResponseAmino): QueryActiveAuctionResponse;
    toAmino(message: QueryActiveAuctionResponse): QueryActiveAuctionResponseAmino;
    fromAminoMsg(object: QueryActiveAuctionResponseAminoMsg): QueryActiveAuctionResponse;
    fromProtoMsg(message: QueryActiveAuctionResponseProtoMsg): QueryActiveAuctionResponse;
    toProto(message: QueryActiveAuctionResponse): Uint8Array;
    toProtoMsg(message: QueryActiveAuctionResponse): QueryActiveAuctionResponseProtoMsg;
};
export declare const QueryEndedAuctionRequest: {
    typeUrl: string;
    encode(message: QueryEndedAuctionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEndedAuctionRequest;
    fromPartial(object: Partial<QueryEndedAuctionRequest>): QueryEndedAuctionRequest;
    fromAmino(object: QueryEndedAuctionRequestAmino): QueryEndedAuctionRequest;
    toAmino(message: QueryEndedAuctionRequest): QueryEndedAuctionRequestAmino;
    fromAminoMsg(object: QueryEndedAuctionRequestAminoMsg): QueryEndedAuctionRequest;
    fromProtoMsg(message: QueryEndedAuctionRequestProtoMsg): QueryEndedAuctionRequest;
    toProto(message: QueryEndedAuctionRequest): Uint8Array;
    toProtoMsg(message: QueryEndedAuctionRequest): QueryEndedAuctionRequestProtoMsg;
};
export declare const QueryEndedAuctionResponse: {
    typeUrl: string;
    encode(message: QueryEndedAuctionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEndedAuctionResponse;
    fromPartial(object: Partial<QueryEndedAuctionResponse>): QueryEndedAuctionResponse;
    fromAmino(object: QueryEndedAuctionResponseAmino): QueryEndedAuctionResponse;
    toAmino(message: QueryEndedAuctionResponse): QueryEndedAuctionResponseAmino;
    fromAminoMsg(object: QueryEndedAuctionResponseAminoMsg): QueryEndedAuctionResponse;
    fromProtoMsg(message: QueryEndedAuctionResponseProtoMsg): QueryEndedAuctionResponse;
    toProto(message: QueryEndedAuctionResponse): Uint8Array;
    toProtoMsg(message: QueryEndedAuctionResponse): QueryEndedAuctionResponseProtoMsg;
};
export declare const QueryActiveAuctionsRequest: {
    typeUrl: string;
    encode(_: QueryActiveAuctionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryActiveAuctionsRequest;
    fromPartial(_: Partial<QueryActiveAuctionsRequest>): QueryActiveAuctionsRequest;
    fromAmino(_: QueryActiveAuctionsRequestAmino): QueryActiveAuctionsRequest;
    toAmino(_: QueryActiveAuctionsRequest): QueryActiveAuctionsRequestAmino;
    fromAminoMsg(object: QueryActiveAuctionsRequestAminoMsg): QueryActiveAuctionsRequest;
    fromProtoMsg(message: QueryActiveAuctionsRequestProtoMsg): QueryActiveAuctionsRequest;
    toProto(message: QueryActiveAuctionsRequest): Uint8Array;
    toProtoMsg(message: QueryActiveAuctionsRequest): QueryActiveAuctionsRequestProtoMsg;
};
export declare const QueryActiveAuctionsResponse: {
    typeUrl: string;
    encode(message: QueryActiveAuctionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryActiveAuctionsResponse;
    fromPartial(object: Partial<QueryActiveAuctionsResponse>): QueryActiveAuctionsResponse;
    fromAmino(object: QueryActiveAuctionsResponseAmino): QueryActiveAuctionsResponse;
    toAmino(message: QueryActiveAuctionsResponse): QueryActiveAuctionsResponseAmino;
    fromAminoMsg(object: QueryActiveAuctionsResponseAminoMsg): QueryActiveAuctionsResponse;
    fromProtoMsg(message: QueryActiveAuctionsResponseProtoMsg): QueryActiveAuctionsResponse;
    toProto(message: QueryActiveAuctionsResponse): Uint8Array;
    toProtoMsg(message: QueryActiveAuctionsResponse): QueryActiveAuctionsResponseProtoMsg;
};
export declare const QueryEndedAuctionsRequest: {
    typeUrl: string;
    encode(message: QueryEndedAuctionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEndedAuctionsRequest;
    fromPartial(object: Partial<QueryEndedAuctionsRequest>): QueryEndedAuctionsRequest;
    fromAmino(object: QueryEndedAuctionsRequestAmino): QueryEndedAuctionsRequest;
    toAmino(message: QueryEndedAuctionsRequest): QueryEndedAuctionsRequestAmino;
    fromAminoMsg(object: QueryEndedAuctionsRequestAminoMsg): QueryEndedAuctionsRequest;
    fromProtoMsg(message: QueryEndedAuctionsRequestProtoMsg): QueryEndedAuctionsRequest;
    toProto(message: QueryEndedAuctionsRequest): Uint8Array;
    toProtoMsg(message: QueryEndedAuctionsRequest): QueryEndedAuctionsRequestProtoMsg;
};
export declare const QueryEndedAuctionsResponse: {
    typeUrl: string;
    encode(message: QueryEndedAuctionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEndedAuctionsResponse;
    fromPartial(object: Partial<QueryEndedAuctionsResponse>): QueryEndedAuctionsResponse;
    fromAmino(object: QueryEndedAuctionsResponseAmino): QueryEndedAuctionsResponse;
    toAmino(message: QueryEndedAuctionsResponse): QueryEndedAuctionsResponseAmino;
    fromAminoMsg(object: QueryEndedAuctionsResponseAminoMsg): QueryEndedAuctionsResponse;
    fromProtoMsg(message: QueryEndedAuctionsResponseProtoMsg): QueryEndedAuctionsResponse;
    toProto(message: QueryEndedAuctionsResponse): Uint8Array;
    toProtoMsg(message: QueryEndedAuctionsResponse): QueryEndedAuctionsResponseProtoMsg;
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
export declare const QueryBidsByAuctionRequest: {
    typeUrl: string;
    encode(message: QueryBidsByAuctionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBidsByAuctionRequest;
    fromPartial(object: Partial<QueryBidsByAuctionRequest>): QueryBidsByAuctionRequest;
    fromAmino(object: QueryBidsByAuctionRequestAmino): QueryBidsByAuctionRequest;
    toAmino(message: QueryBidsByAuctionRequest): QueryBidsByAuctionRequestAmino;
    fromAminoMsg(object: QueryBidsByAuctionRequestAminoMsg): QueryBidsByAuctionRequest;
    fromProtoMsg(message: QueryBidsByAuctionRequestProtoMsg): QueryBidsByAuctionRequest;
    toProto(message: QueryBidsByAuctionRequest): Uint8Array;
    toProtoMsg(message: QueryBidsByAuctionRequest): QueryBidsByAuctionRequestProtoMsg;
};
export declare const QueryBidsByAuctionResponse: {
    typeUrl: string;
    encode(message: QueryBidsByAuctionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBidsByAuctionResponse;
    fromPartial(object: Partial<QueryBidsByAuctionResponse>): QueryBidsByAuctionResponse;
    fromAmino(object: QueryBidsByAuctionResponseAmino): QueryBidsByAuctionResponse;
    toAmino(message: QueryBidsByAuctionResponse): QueryBidsByAuctionResponseAmino;
    fromAminoMsg(object: QueryBidsByAuctionResponseAminoMsg): QueryBidsByAuctionResponse;
    fromProtoMsg(message: QueryBidsByAuctionResponseProtoMsg): QueryBidsByAuctionResponse;
    toProto(message: QueryBidsByAuctionResponse): Uint8Array;
    toProtoMsg(message: QueryBidsByAuctionResponse): QueryBidsByAuctionResponseProtoMsg;
};
export declare const QueryTokenPriceRequest: {
    typeUrl: string;
    encode(message: QueryTokenPriceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenPriceRequest;
    fromPartial(object: Partial<QueryTokenPriceRequest>): QueryTokenPriceRequest;
    fromAmino(object: QueryTokenPriceRequestAmino): QueryTokenPriceRequest;
    toAmino(message: QueryTokenPriceRequest): QueryTokenPriceRequestAmino;
    fromAminoMsg(object: QueryTokenPriceRequestAminoMsg): QueryTokenPriceRequest;
    fromProtoMsg(message: QueryTokenPriceRequestProtoMsg): QueryTokenPriceRequest;
    toProto(message: QueryTokenPriceRequest): Uint8Array;
    toProtoMsg(message: QueryTokenPriceRequest): QueryTokenPriceRequestProtoMsg;
};
export declare const QueryTokenPriceResponse: {
    typeUrl: string;
    encode(message: QueryTokenPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenPriceResponse;
    fromPartial(object: Partial<QueryTokenPriceResponse>): QueryTokenPriceResponse;
    fromAmino(object: QueryTokenPriceResponseAmino): QueryTokenPriceResponse;
    toAmino(message: QueryTokenPriceResponse): QueryTokenPriceResponseAmino;
    fromAminoMsg(object: QueryTokenPriceResponseAminoMsg): QueryTokenPriceResponse;
    fromProtoMsg(message: QueryTokenPriceResponseProtoMsg): QueryTokenPriceResponse;
    toProto(message: QueryTokenPriceResponse): Uint8Array;
    toProtoMsg(message: QueryTokenPriceResponse): QueryTokenPriceResponseProtoMsg;
};
export declare const QueryTokenPricesRequest: {
    typeUrl: string;
    encode(_: QueryTokenPricesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTokenPricesRequest;
    fromPartial(_: Partial<QueryTokenPricesRequest>): QueryTokenPricesRequest;
    fromAmino(_: QueryTokenPricesRequestAmino): QueryTokenPricesRequest;
    toAmino(_: QueryTokenPricesRequest): QueryTokenPricesRequestAmino;
    fromAminoMsg(object: QueryTokenPricesRequestAminoMsg): QueryTokenPricesRequest;
    fromProtoMsg(message: QueryTokenPricesRequestProtoMsg): QueryTokenPricesRequest;
    toProto(message: QueryTokenPricesRequest): Uint8Array;
    toProtoMsg(message: QueryTokenPricesRequest): QueryTokenPricesRequestProtoMsg;
};
export declare const QueryTokenPricesResponse: {
    typeUrl: string;
    encode(message: QueryTokenPricesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenPricesResponse;
    fromPartial(object: Partial<QueryTokenPricesResponse>): QueryTokenPricesResponse;
    fromAmino(object: QueryTokenPricesResponseAmino): QueryTokenPricesResponse;
    toAmino(message: QueryTokenPricesResponse): QueryTokenPricesResponseAmino;
    fromAminoMsg(object: QueryTokenPricesResponseAminoMsg): QueryTokenPricesResponse;
    fromProtoMsg(message: QueryTokenPricesResponseProtoMsg): QueryTokenPricesResponse;
    toProto(message: QueryTokenPricesResponse): Uint8Array;
    toProtoMsg(message: QueryTokenPricesResponse): QueryTokenPricesResponseProtoMsg;
};
