import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Params {
    /** auction_period_duration defines the auction period duration */
    auctionPeriod: bigint;
    /** min_next_bid_increment_rate defines the minimum increment rate for new bids */
    minNextBidIncrementRate: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/injective.auction.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /** auction_period_duration defines the auction period duration */
    auction_period: string;
    /** min_next_bid_increment_rate defines the minimum increment rate for new bids */
    min_next_bid_increment_rate: string;
}
export interface ParamsAminoMsg {
    type: "/injective.auction.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    auction_period: bigint;
    min_next_bid_increment_rate: string;
}
export interface Bid {
    bidder: string;
    amount: string;
}
export interface BidProtoMsg {
    typeUrl: "/injective.auction.v1beta1.Bid";
    value: Uint8Array;
}
export interface BidAmino {
    bidder: string;
    amount: string;
}
export interface BidAminoMsg {
    type: "/injective.auction.v1beta1.Bid";
    value: BidAmino;
}
export interface BidSDKType {
    bidder: string;
    amount: string;
}
export interface EventBid {
    /** bidder describes the address of bidder */
    bidder: string;
    /** amount describes the amount the bidder put on the auction */
    amount: string;
    /** round defines the round number of auction */
    round: bigint;
}
export interface EventBidProtoMsg {
    typeUrl: "/injective.auction.v1beta1.EventBid";
    value: Uint8Array;
}
export interface EventBidAmino {
    /** bidder describes the address of bidder */
    bidder: string;
    /** amount describes the amount the bidder put on the auction */
    amount: string;
    /** round defines the round number of auction */
    round: string;
}
export interface EventBidAminoMsg {
    type: "/injective.auction.v1beta1.EventBid";
    value: EventBidAmino;
}
export interface EventBidSDKType {
    bidder: string;
    amount: string;
    round: bigint;
}
export interface EventAuctionResult {
    /** winner describes the address of the winner */
    winner: string;
    /** amount describes the amount the winner get from the auction */
    amount: string;
    /** round defines the round number of auction */
    round: bigint;
}
export interface EventAuctionResultProtoMsg {
    typeUrl: "/injective.auction.v1beta1.EventAuctionResult";
    value: Uint8Array;
}
export interface EventAuctionResultAmino {
    /** winner describes the address of the winner */
    winner: string;
    /** amount describes the amount the winner get from the auction */
    amount: string;
    /** round defines the round number of auction */
    round: string;
}
export interface EventAuctionResultAminoMsg {
    type: "/injective.auction.v1beta1.EventAuctionResult";
    value: EventAuctionResultAmino;
}
export interface EventAuctionResultSDKType {
    winner: string;
    amount: string;
    round: bigint;
}
export interface EventAuctionStart {
    /** round defines the round number of auction */
    round: bigint;
    /** ending_timestamp describes auction end time */
    endingTimestamp: bigint;
    /**
     * new_basket describes auction module balance at the time of new auction
     * start
     */
    newBasket: Coin[];
}
export interface EventAuctionStartProtoMsg {
    typeUrl: "/injective.auction.v1beta1.EventAuctionStart";
    value: Uint8Array;
}
export interface EventAuctionStartAmino {
    /** round defines the round number of auction */
    round: string;
    /** ending_timestamp describes auction end time */
    ending_timestamp: string;
    /**
     * new_basket describes auction module balance at the time of new auction
     * start
     */
    new_basket: CoinAmino[];
}
export interface EventAuctionStartAminoMsg {
    type: "/injective.auction.v1beta1.EventAuctionStart";
    value: EventAuctionStartAmino;
}
export interface EventAuctionStartSDKType {
    round: bigint;
    ending_timestamp: bigint;
    new_basket: CoinSDKType[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Bid: {
    typeUrl: string;
    encode(message: Bid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Bid;
    fromPartial(object: Partial<Bid>): Bid;
    fromAmino(object: BidAmino): Bid;
    toAmino(message: Bid): BidAmino;
    fromAminoMsg(object: BidAminoMsg): Bid;
    fromProtoMsg(message: BidProtoMsg): Bid;
    toProto(message: Bid): Uint8Array;
    toProtoMsg(message: Bid): BidProtoMsg;
};
export declare const EventBid: {
    typeUrl: string;
    encode(message: EventBid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBid;
    fromPartial(object: Partial<EventBid>): EventBid;
    fromAmino(object: EventBidAmino): EventBid;
    toAmino(message: EventBid): EventBidAmino;
    fromAminoMsg(object: EventBidAminoMsg): EventBid;
    fromProtoMsg(message: EventBidProtoMsg): EventBid;
    toProto(message: EventBid): Uint8Array;
    toProtoMsg(message: EventBid): EventBidProtoMsg;
};
export declare const EventAuctionResult: {
    typeUrl: string;
    encode(message: EventAuctionResult, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventAuctionResult;
    fromPartial(object: Partial<EventAuctionResult>): EventAuctionResult;
    fromAmino(object: EventAuctionResultAmino): EventAuctionResult;
    toAmino(message: EventAuctionResult): EventAuctionResultAmino;
    fromAminoMsg(object: EventAuctionResultAminoMsg): EventAuctionResult;
    fromProtoMsg(message: EventAuctionResultProtoMsg): EventAuctionResult;
    toProto(message: EventAuctionResult): Uint8Array;
    toProtoMsg(message: EventAuctionResult): EventAuctionResultProtoMsg;
};
export declare const EventAuctionStart: {
    typeUrl: string;
    encode(message: EventAuctionStart, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventAuctionStart;
    fromPartial(object: Partial<EventAuctionStart>): EventAuctionStart;
    fromAmino(object: EventAuctionStartAmino): EventAuctionStart;
    toAmino(message: EventAuctionStart): EventAuctionStartAmino;
    fromAminoMsg(object: EventAuctionStartAminoMsg): EventAuctionStart;
    fromProtoMsg(message: EventAuctionStartProtoMsg): EventAuctionStart;
    toProto(message: EventAuctionStart): Uint8Array;
    toProtoMsg(message: EventAuctionStart): EventAuctionStartProtoMsg;
};
