import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
    /** auction_period_duration defines the auction period duration */
    auctionPeriod: Long;
    /** min_next_bid_increment_rate defines the minimum increment rate for new bids */
    minNextBidIncrementRate: string;
}
export interface ParamsSDKType {
    auction_period: Long;
    min_next_bid_increment_rate: string;
}
export interface Bid {
    bidder: string;
    amount: string;
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
    round: Long;
}
export interface EventBidSDKType {
    bidder: string;
    amount: string;
    round: Long;
}
export interface EventAuctionResult {
    /** winner describes the address of the winner */
    winner: string;
    /** amount describes the amount the winner get from the auction */
    amount: string;
    /** round defines the round number of auction */
    round: Long;
}
export interface EventAuctionResultSDKType {
    winner: string;
    amount: string;
    round: Long;
}
export interface EventAuctionStart {
    /** round defines the round number of auction */
    round: Long;
    /** ending_timestamp describes auction end time */
    endingTimestamp: Long;
    /**
     * new_basket describes auction module balance at the time of new auction
     * start
     */
    newBasket: Coin[];
}
export interface EventAuctionStartSDKType {
    round: Long;
    ending_timestamp: Long;
    new_basket: CoinSDKType[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Bid: {
    encode(message: Bid, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Bid;
    fromPartial(object: Partial<Bid>): Bid;
};
export declare const EventBid: {
    encode(message: EventBid, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBid;
    fromPartial(object: Partial<EventBid>): EventBid;
};
export declare const EventAuctionResult: {
    encode(message: EventAuctionResult, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventAuctionResult;
    fromPartial(object: Partial<EventAuctionResult>): EventAuctionResult;
};
export declare const EventAuctionStart: {
    encode(message: EventAuctionStart, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventAuctionStart;
    fromPartial(object: Partial<EventAuctionStart>): EventAuctionStart;
};
