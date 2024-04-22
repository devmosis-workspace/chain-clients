import { Auction, AuctionAmino, AuctionSDKType, Bid, BidAmino, BidSDKType, TokenPrice, TokenPriceAmino, TokenPriceSDKType } from "./auction";
import { BinaryWriter } from "../../binary";
export interface GenesisState {
    params: Params;
    auctions: Auction[];
    bids: Bid[];
    tokenPrices: TokenPrice[];
    lastAuctionId: number;
    lastBidId: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/auction.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    params?: ParamsAmino;
    auctions?: AuctionAmino[];
    bids?: BidAmino[];
    token_prices?: TokenPriceAmino[];
    last_auction_id?: number;
    last_bid_id?: string;
}
export interface GenesisStateAminoMsg {
    type: "/auction.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    auctions: AuctionSDKType[];
    bids: BidSDKType[];
    token_prices: TokenPriceSDKType[];
    last_auction_id: number;
    last_bid_id: bigint;
}
export interface Params {
    priceMaxBlockAge: bigint;
    minimumBidInUsomm: bigint;
    minimumSaleTokensUsdValue: string;
    auctionMaxBlockAge: bigint;
    auctionPriceDecreaseAccelerationRate: string;
    minimumAuctionHeight: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/auction.v1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    price_max_block_age?: string;
    minimum_bid_in_usomm?: string;
    minimum_sale_tokens_usd_value?: string;
    auction_max_block_age?: string;
    auction_price_decrease_acceleration_rate?: string;
    minimum_auction_height?: string;
}
export interface ParamsAminoMsg {
    type: "/auction.v1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    price_max_block_age: bigint;
    minimum_bid_in_usomm: bigint;
    minimum_sale_tokens_usd_value: string;
    auction_max_block_age: bigint;
    auction_price_decrease_acceleration_rate: string;
    minimum_auction_height: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
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
