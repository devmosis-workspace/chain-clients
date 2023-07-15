import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** State is an enum which refers to state of bid */
export declare enum Bid_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** open - BidOpen denotes state for bid open */
    open = 1,
    /** active - BidMatched denotes state for bid open */
    active = 2,
    /** lost - BidLost denotes state for bid lost */
    lost = 3,
    /** closed - BidClosed denotes state for bid closed */
    closed = 4,
    UNRECOGNIZED = -1
}
export declare const Bid_StateSDKType: typeof Bid_State;
export declare function bid_StateFromJSON(object: any): Bid_State;
export declare function bid_StateToJSON(object: Bid_State): string;
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBid {
    order?: OrderID;
    provider: string;
    price?: DecCoin;
    deposit?: Coin;
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBidSDKType {
    order?: OrderIDSDKType;
    provider: string;
    price?: DecCoinSDKType;
    deposit?: CoinSDKType;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponse {
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponseSDKType {
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBid {
    bidId?: BidID;
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBidSDKType {
    bid_id?: BidIDSDKType;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponse {
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponseSDKType {
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidID {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidIDSDKType {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
}
/** Bid stores BidID, state of bid and price */
export interface Bid {
    bidId?: BidID;
    state: Bid_State;
    price?: DecCoin;
    createdAt: Long;
}
/** Bid stores BidID, state of bid and price */
export interface BidSDKType {
    bid_id?: BidIDSDKType;
    state: Bid_State;
    price?: DecCoinSDKType;
    created_at: Long;
}
/** BidFilters defines flags for bid list filter */
export interface BidFilters {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
/** BidFilters defines flags for bid list filter */
export interface BidFiltersSDKType {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
export declare const MsgCreateBid: {
    encode(message: MsgCreateBid, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateBid;
    fromPartial(object: Partial<MsgCreateBid>): MsgCreateBid;
};
export declare const MsgCreateBidResponse: {
    encode(_: MsgCreateBidResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateBidResponse;
    fromPartial(_: Partial<MsgCreateBidResponse>): MsgCreateBidResponse;
};
export declare const MsgCloseBid: {
    encode(message: MsgCloseBid, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCloseBid;
    fromPartial(object: Partial<MsgCloseBid>): MsgCloseBid;
};
export declare const MsgCloseBidResponse: {
    encode(_: MsgCloseBidResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCloseBidResponse;
    fromPartial(_: Partial<MsgCloseBidResponse>): MsgCloseBidResponse;
};
export declare const BidID: {
    encode(message: BidID, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BidID;
    fromPartial(object: Partial<BidID>): BidID;
};
export declare const Bid: {
    encode(message: Bid, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Bid;
    fromPartial(object: Partial<Bid>): Bid;
};
export declare const BidFilters: {
    encode(message: BidFilters, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BidFilters;
    fromPartial(object: Partial<BidFilters>): BidFilters;
};
