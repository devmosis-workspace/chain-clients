import { Params, ParamsAmino, ParamsSDKType } from "./auction";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/**
 * QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC
 * method.
 */
export interface QueryAuctionParamsRequest {
}
export interface QueryAuctionParamsRequestProtoMsg {
    typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsRequest";
    value: Uint8Array;
}
/**
 * QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC
 * method.
 */
export interface QueryAuctionParamsRequestAmino {
}
export interface QueryAuctionParamsRequestAminoMsg {
    type: "/injective.auction.v1beta1.QueryAuctionParamsRequest";
    value: QueryAuctionParamsRequestAmino;
}
/**
 * QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC
 * method.
 */
export interface QueryAuctionParamsRequestSDKType {
}
/**
 * QueryAuctionParamsRequest is the response type for the Query/AuctionParams
 * RPC method.
 */
export interface QueryAuctionParamsResponse {
    params: Params;
}
export interface QueryAuctionParamsResponseProtoMsg {
    typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsResponse";
    value: Uint8Array;
}
/**
 * QueryAuctionParamsRequest is the response type for the Query/AuctionParams
 * RPC method.
 */
export interface QueryAuctionParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryAuctionParamsResponseAminoMsg {
    type: "/injective.auction.v1beta1.QueryAuctionParamsResponse";
    value: QueryAuctionParamsResponseAmino;
}
/**
 * QueryAuctionParamsRequest is the response type for the Query/AuctionParams
 * RPC method.
 */
export interface QueryAuctionParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryCurrentAuctionBasketRequest is the request type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketRequest {
}
export interface QueryCurrentAuctionBasketRequestProtoMsg {
    typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest";
    value: Uint8Array;
}
/**
 * QueryCurrentAuctionBasketRequest is the request type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketRequestAmino {
}
export interface QueryCurrentAuctionBasketRequestAminoMsg {
    type: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest";
    value: QueryCurrentAuctionBasketRequestAmino;
}
/**
 * QueryCurrentAuctionBasketRequest is the request type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketRequestSDKType {
}
/**
 * QueryCurrentAuctionBasketResponse is the response type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketResponse {
    /** amount describes the amount put on auction */
    amount: Coin[];
    /** auctionRound describes current auction round */
    auctionRound: bigint;
    /** auctionClosingTime describes auction close time for the round */
    auctionClosingTime: bigint;
    /** highestBidder describes highest bidder on current round */
    highestBidder: string;
    /** highestBidAmount describes highest bid amount on current round */
    highestBidAmount: string;
}
export interface QueryCurrentAuctionBasketResponseProtoMsg {
    typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse";
    value: Uint8Array;
}
/**
 * QueryCurrentAuctionBasketResponse is the response type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketResponseAmino {
    /** amount describes the amount put on auction */
    amount: CoinAmino[];
    /** auctionRound describes current auction round */
    auctionRound: string;
    /** auctionClosingTime describes auction close time for the round */
    auctionClosingTime: string;
    /** highestBidder describes highest bidder on current round */
    highestBidder: string;
    /** highestBidAmount describes highest bid amount on current round */
    highestBidAmount: string;
}
export interface QueryCurrentAuctionBasketResponseAminoMsg {
    type: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse";
    value: QueryCurrentAuctionBasketResponseAmino;
}
/**
 * QueryCurrentAuctionBasketResponse is the response type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketResponseSDKType {
    amount: CoinSDKType[];
    auctionRound: bigint;
    auctionClosingTime: bigint;
    highestBidder: string;
    highestBidAmount: string;
}
/**
 * QueryModuleStateRequest is the request type for the Query/AuctionModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {
}
export interface QueryModuleStateRequestProtoMsg {
    typeUrl: "/injective.auction.v1beta1.QueryModuleStateRequest";
    value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/AuctionModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestAmino {
}
export interface QueryModuleStateRequestAminoMsg {
    type: "/injective.auction.v1beta1.QueryModuleStateRequest";
    value: QueryModuleStateRequestAmino;
}
/**
 * QueryModuleStateRequest is the request type for the Query/AuctionModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestSDKType {
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/AuctionModuleState RPC method.
 */
export interface QueryModuleStateResponse {
    /**
     * QueryModuleStateResponse is the response type for the
     * Query/AuctionModuleState RPC method.
     */
    state: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
    typeUrl: "/injective.auction.v1beta1.QueryModuleStateResponse";
    value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/AuctionModuleState RPC method.
 */
export interface QueryModuleStateResponseAmino {
    /**
     * QueryModuleStateResponse is the response type for the
     * Query/AuctionModuleState RPC method.
     */
    state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
    type: "/injective.auction.v1beta1.QueryModuleStateResponse";
    value: QueryModuleStateResponseAmino;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/AuctionModuleState RPC method.
 */
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
export declare const QueryAuctionParamsRequest: {
    typeUrl: string;
    encode(_: QueryAuctionParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAuctionParamsRequest;
    fromPartial(_: Partial<QueryAuctionParamsRequest>): QueryAuctionParamsRequest;
    fromAmino(_: QueryAuctionParamsRequestAmino): QueryAuctionParamsRequest;
    toAmino(_: QueryAuctionParamsRequest): QueryAuctionParamsRequestAmino;
    fromAminoMsg(object: QueryAuctionParamsRequestAminoMsg): QueryAuctionParamsRequest;
    fromProtoMsg(message: QueryAuctionParamsRequestProtoMsg): QueryAuctionParamsRequest;
    toProto(message: QueryAuctionParamsRequest): Uint8Array;
    toProtoMsg(message: QueryAuctionParamsRequest): QueryAuctionParamsRequestProtoMsg;
};
export declare const QueryAuctionParamsResponse: {
    typeUrl: string;
    encode(message: QueryAuctionParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAuctionParamsResponse;
    fromPartial(object: Partial<QueryAuctionParamsResponse>): QueryAuctionParamsResponse;
    fromAmino(object: QueryAuctionParamsResponseAmino): QueryAuctionParamsResponse;
    toAmino(message: QueryAuctionParamsResponse): QueryAuctionParamsResponseAmino;
    fromAminoMsg(object: QueryAuctionParamsResponseAminoMsg): QueryAuctionParamsResponse;
    fromProtoMsg(message: QueryAuctionParamsResponseProtoMsg): QueryAuctionParamsResponse;
    toProto(message: QueryAuctionParamsResponse): Uint8Array;
    toProtoMsg(message: QueryAuctionParamsResponse): QueryAuctionParamsResponseProtoMsg;
};
export declare const QueryCurrentAuctionBasketRequest: {
    typeUrl: string;
    encode(_: QueryCurrentAuctionBasketRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCurrentAuctionBasketRequest;
    fromPartial(_: Partial<QueryCurrentAuctionBasketRequest>): QueryCurrentAuctionBasketRequest;
    fromAmino(_: QueryCurrentAuctionBasketRequestAmino): QueryCurrentAuctionBasketRequest;
    toAmino(_: QueryCurrentAuctionBasketRequest): QueryCurrentAuctionBasketRequestAmino;
    fromAminoMsg(object: QueryCurrentAuctionBasketRequestAminoMsg): QueryCurrentAuctionBasketRequest;
    fromProtoMsg(message: QueryCurrentAuctionBasketRequestProtoMsg): QueryCurrentAuctionBasketRequest;
    toProto(message: QueryCurrentAuctionBasketRequest): Uint8Array;
    toProtoMsg(message: QueryCurrentAuctionBasketRequest): QueryCurrentAuctionBasketRequestProtoMsg;
};
export declare const QueryCurrentAuctionBasketResponse: {
    typeUrl: string;
    encode(message: QueryCurrentAuctionBasketResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCurrentAuctionBasketResponse;
    fromPartial(object: Partial<QueryCurrentAuctionBasketResponse>): QueryCurrentAuctionBasketResponse;
    fromAmino(object: QueryCurrentAuctionBasketResponseAmino): QueryCurrentAuctionBasketResponse;
    toAmino(message: QueryCurrentAuctionBasketResponse): QueryCurrentAuctionBasketResponseAmino;
    fromAminoMsg(object: QueryCurrentAuctionBasketResponseAminoMsg): QueryCurrentAuctionBasketResponse;
    fromProtoMsg(message: QueryCurrentAuctionBasketResponseProtoMsg): QueryCurrentAuctionBasketResponse;
    toProto(message: QueryCurrentAuctionBasketResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentAuctionBasketResponse): QueryCurrentAuctionBasketResponseProtoMsg;
};
export declare const QueryModuleStateRequest: {
    typeUrl: string;
    encode(_: QueryModuleStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
    fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest;
    toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino;
    fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest;
    fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest;
    toProto(message: QueryModuleStateRequest): Uint8Array;
    toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg;
};
export declare const QueryModuleStateResponse: {
    typeUrl: string;
    encode(message: QueryModuleStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
    fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse;
    toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino;
    fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse;
    fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse;
    toProto(message: QueryModuleStateResponse): Uint8Array;
    toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg;
};
