import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the pricefeed module. */
export interface Params {
    markets: Market[];
}
export interface ParamsProtoMsg {
    typeUrl: "/kava.pricefeed.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the pricefeed module. */
export interface ParamsAmino {
    markets: MarketAmino[];
}
export interface ParamsAminoMsg {
    type: "/kava.pricefeed.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the pricefeed module. */
export interface ParamsSDKType {
    markets: MarketSDKType[];
}
/** Market defines an asset in the pricefeed. */
export interface Market {
    marketId: string;
    baseAsset: string;
    quoteAsset: string;
    oracles: Uint8Array[];
    active: boolean;
}
export interface MarketProtoMsg {
    typeUrl: "/kava.pricefeed.v1beta1.Market";
    value: Uint8Array;
}
/** Market defines an asset in the pricefeed. */
export interface MarketAmino {
    market_id: string;
    base_asset: string;
    quote_asset: string;
    oracles: Uint8Array[];
    active: boolean;
}
export interface MarketAminoMsg {
    type: "/kava.pricefeed.v1beta1.Market";
    value: MarketAmino;
}
/** Market defines an asset in the pricefeed. */
export interface MarketSDKType {
    market_id: string;
    base_asset: string;
    quote_asset: string;
    oracles: Uint8Array[];
    active: boolean;
}
/** PostedPrice defines a price for market posted by a specific oracle. */
export interface PostedPrice {
    marketId: string;
    oracleAddress: Uint8Array;
    price: string;
    expiry: Timestamp;
}
export interface PostedPriceProtoMsg {
    typeUrl: "/kava.pricefeed.v1beta1.PostedPrice";
    value: Uint8Array;
}
/** PostedPrice defines a price for market posted by a specific oracle. */
export interface PostedPriceAmino {
    market_id: string;
    oracle_address: Uint8Array;
    price: string;
    expiry?: TimestampAmino;
}
export interface PostedPriceAminoMsg {
    type: "/kava.pricefeed.v1beta1.PostedPrice";
    value: PostedPriceAmino;
}
/** PostedPrice defines a price for market posted by a specific oracle. */
export interface PostedPriceSDKType {
    market_id: string;
    oracle_address: Uint8Array;
    price: string;
    expiry: TimestampSDKType;
}
/**
 * CurrentPrice defines a current price for a particular market in the pricefeed
 * module.
 */
export interface CurrentPrice {
    marketId: string;
    price: string;
}
export interface CurrentPriceProtoMsg {
    typeUrl: "/kava.pricefeed.v1beta1.CurrentPrice";
    value: Uint8Array;
}
/**
 * CurrentPrice defines a current price for a particular market in the pricefeed
 * module.
 */
export interface CurrentPriceAmino {
    market_id: string;
    price: string;
}
export interface CurrentPriceAminoMsg {
    type: "/kava.pricefeed.v1beta1.CurrentPrice";
    value: CurrentPriceAmino;
}
/**
 * CurrentPrice defines a current price for a particular market in the pricefeed
 * module.
 */
export interface CurrentPriceSDKType {
    market_id: string;
    price: string;
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
export declare const Market: {
    typeUrl: string;
    encode(message: Market, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Market;
    fromPartial(object: Partial<Market>): Market;
    fromAmino(object: MarketAmino): Market;
    toAmino(message: Market): MarketAmino;
    fromAminoMsg(object: MarketAminoMsg): Market;
    fromProtoMsg(message: MarketProtoMsg): Market;
    toProto(message: Market): Uint8Array;
    toProtoMsg(message: Market): MarketProtoMsg;
};
export declare const PostedPrice: {
    typeUrl: string;
    encode(message: PostedPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PostedPrice;
    fromPartial(object: Partial<PostedPrice>): PostedPrice;
    fromAmino(object: PostedPriceAmino): PostedPrice;
    toAmino(message: PostedPrice): PostedPriceAmino;
    fromAminoMsg(object: PostedPriceAminoMsg): PostedPrice;
    fromProtoMsg(message: PostedPriceProtoMsg): PostedPrice;
    toProto(message: PostedPrice): Uint8Array;
    toProtoMsg(message: PostedPrice): PostedPriceProtoMsg;
};
export declare const CurrentPrice: {
    typeUrl: string;
    encode(message: CurrentPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CurrentPrice;
    fromPartial(object: Partial<CurrentPrice>): CurrentPrice;
    fromAmino(object: CurrentPriceAmino): CurrentPrice;
    toAmino(message: CurrentPrice): CurrentPriceAmino;
    fromAminoMsg(object: CurrentPriceAminoMsg): CurrentPrice;
    fromProtoMsg(message: CurrentPriceProtoMsg): CurrentPrice;
    toProto(message: CurrentPrice): Uint8Array;
    toProtoMsg(message: CurrentPrice): CurrentPriceProtoMsg;
};
