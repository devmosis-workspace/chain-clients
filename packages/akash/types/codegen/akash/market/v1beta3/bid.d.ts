import { OrderID, OrderIDAmino, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
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
export declare const Bid_StateAmino: typeof Bid_State;
export declare function bid_StateFromJSON(object: any): Bid_State;
export declare function bid_StateToJSON(object: Bid_State): string;
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBid {
    order: OrderID;
    provider: string;
    price: DecCoin;
    deposit: Coin;
}
export interface MsgCreateBidProtoMsg {
    typeUrl: "/akash.market.v1beta3.MsgCreateBid";
    value: Uint8Array;
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBidAmino {
    order?: OrderIDAmino;
    provider?: string;
    price?: DecCoinAmino;
    deposit?: CoinAmino;
}
export interface MsgCreateBidAminoMsg {
    type: "/akash.market.v1beta3.MsgCreateBid";
    value: MsgCreateBidAmino;
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBidSDKType {
    order: OrderIDSDKType;
    provider: string;
    price: DecCoinSDKType;
    deposit: CoinSDKType;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponse {
}
export interface MsgCreateBidResponseProtoMsg {
    typeUrl: "/akash.market.v1beta3.MsgCreateBidResponse";
    value: Uint8Array;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponseAmino {
}
export interface MsgCreateBidResponseAminoMsg {
    type: "/akash.market.v1beta3.MsgCreateBidResponse";
    value: MsgCreateBidResponseAmino;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponseSDKType {
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBid {
    bidId: BidID;
}
export interface MsgCloseBidProtoMsg {
    typeUrl: "/akash.market.v1beta3.MsgCloseBid";
    value: Uint8Array;
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBidAmino {
    bid_id?: BidIDAmino;
}
export interface MsgCloseBidAminoMsg {
    type: "/akash.market.v1beta3.MsgCloseBid";
    value: MsgCloseBidAmino;
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBidSDKType {
    bid_id: BidIDSDKType;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponse {
}
export interface MsgCloseBidResponseProtoMsg {
    typeUrl: "/akash.market.v1beta3.MsgCloseBidResponse";
    value: Uint8Array;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponseAmino {
}
export interface MsgCloseBidResponseAminoMsg {
    type: "/akash.market.v1beta3.MsgCloseBidResponse";
    value: MsgCloseBidResponseAmino;
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
    dseq: bigint;
    gseq: number;
    oseq: number;
    provider: string;
}
export interface BidIDProtoMsg {
    typeUrl: "/akash.market.v1beta3.BidID";
    value: Uint8Array;
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidIDAmino {
    owner?: string;
    dseq?: string;
    gseq?: number;
    oseq?: number;
    provider?: string;
}
export interface BidIDAminoMsg {
    type: "/akash.market.v1beta3.BidID";
    value: BidIDAmino;
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidIDSDKType {
    owner: string;
    dseq: bigint;
    gseq: number;
    oseq: number;
    provider: string;
}
/** Bid stores BidID, state of bid and price */
export interface Bid {
    bidId: BidID;
    state: Bid_State;
    price: DecCoin;
    createdAt: bigint;
}
export interface BidProtoMsg {
    typeUrl: "/akash.market.v1beta3.Bid";
    value: Uint8Array;
}
/** Bid stores BidID, state of bid and price */
export interface BidAmino {
    bid_id?: BidIDAmino;
    state?: Bid_State;
    price?: DecCoinAmino;
    created_at?: string;
}
export interface BidAminoMsg {
    type: "/akash.market.v1beta3.Bid";
    value: BidAmino;
}
/** Bid stores BidID, state of bid and price */
export interface BidSDKType {
    bid_id: BidIDSDKType;
    state: Bid_State;
    price: DecCoinSDKType;
    created_at: bigint;
}
/** BidFilters defines flags for bid list filter */
export interface BidFilters {
    owner: string;
    dseq: bigint;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
export interface BidFiltersProtoMsg {
    typeUrl: "/akash.market.v1beta3.BidFilters";
    value: Uint8Array;
}
/** BidFilters defines flags for bid list filter */
export interface BidFiltersAmino {
    owner?: string;
    dseq?: string;
    gseq?: number;
    oseq?: number;
    provider?: string;
    state?: string;
}
export interface BidFiltersAminoMsg {
    type: "/akash.market.v1beta3.BidFilters";
    value: BidFiltersAmino;
}
/** BidFilters defines flags for bid list filter */
export interface BidFiltersSDKType {
    owner: string;
    dseq: bigint;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
export declare const MsgCreateBid: {
    typeUrl: string;
    encode(message: MsgCreateBid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateBid;
    fromPartial(object: Partial<MsgCreateBid>): MsgCreateBid;
    fromAmino(object: MsgCreateBidAmino): MsgCreateBid;
    toAmino(message: MsgCreateBid): MsgCreateBidAmino;
    fromAminoMsg(object: MsgCreateBidAminoMsg): MsgCreateBid;
    fromProtoMsg(message: MsgCreateBidProtoMsg): MsgCreateBid;
    toProto(message: MsgCreateBid): Uint8Array;
    toProtoMsg(message: MsgCreateBid): MsgCreateBidProtoMsg;
};
export declare const MsgCreateBidResponse: {
    typeUrl: string;
    encode(_: MsgCreateBidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateBidResponse;
    fromPartial(_: Partial<MsgCreateBidResponse>): MsgCreateBidResponse;
    fromAmino(_: MsgCreateBidResponseAmino): MsgCreateBidResponse;
    toAmino(_: MsgCreateBidResponse): MsgCreateBidResponseAmino;
    fromAminoMsg(object: MsgCreateBidResponseAminoMsg): MsgCreateBidResponse;
    fromProtoMsg(message: MsgCreateBidResponseProtoMsg): MsgCreateBidResponse;
    toProto(message: MsgCreateBidResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBidResponse): MsgCreateBidResponseProtoMsg;
};
export declare const MsgCloseBid: {
    typeUrl: string;
    encode(message: MsgCloseBid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCloseBid;
    fromPartial(object: Partial<MsgCloseBid>): MsgCloseBid;
    fromAmino(object: MsgCloseBidAmino): MsgCloseBid;
    toAmino(message: MsgCloseBid): MsgCloseBidAmino;
    fromAminoMsg(object: MsgCloseBidAminoMsg): MsgCloseBid;
    fromProtoMsg(message: MsgCloseBidProtoMsg): MsgCloseBid;
    toProto(message: MsgCloseBid): Uint8Array;
    toProtoMsg(message: MsgCloseBid): MsgCloseBidProtoMsg;
};
export declare const MsgCloseBidResponse: {
    typeUrl: string;
    encode(_: MsgCloseBidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCloseBidResponse;
    fromPartial(_: Partial<MsgCloseBidResponse>): MsgCloseBidResponse;
    fromAmino(_: MsgCloseBidResponseAmino): MsgCloseBidResponse;
    toAmino(_: MsgCloseBidResponse): MsgCloseBidResponseAmino;
    fromAminoMsg(object: MsgCloseBidResponseAminoMsg): MsgCloseBidResponse;
    fromProtoMsg(message: MsgCloseBidResponseProtoMsg): MsgCloseBidResponse;
    toProto(message: MsgCloseBidResponse): Uint8Array;
    toProtoMsg(message: MsgCloseBidResponse): MsgCloseBidResponseProtoMsg;
};
export declare const BidID: {
    typeUrl: string;
    encode(message: BidID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BidID;
    fromPartial(object: Partial<BidID>): BidID;
    fromAmino(object: BidIDAmino): BidID;
    toAmino(message: BidID): BidIDAmino;
    fromAminoMsg(object: BidIDAminoMsg): BidID;
    fromProtoMsg(message: BidIDProtoMsg): BidID;
    toProto(message: BidID): Uint8Array;
    toProtoMsg(message: BidID): BidIDProtoMsg;
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
export declare const BidFilters: {
    typeUrl: string;
    encode(message: BidFilters, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BidFilters;
    fromPartial(object: Partial<BidFilters>): BidFilters;
    fromAmino(object: BidFiltersAmino): BidFilters;
    toAmino(message: BidFilters): BidFiltersAmino;
    fromAminoMsg(object: BidFiltersAminoMsg): BidFilters;
    fromProtoMsg(message: BidFiltersProtoMsg): BidFilters;
    toProto(message: BidFilters): Uint8Array;
    toProtoMsg(message: BidFilters): BidFiltersProtoMsg;
};
