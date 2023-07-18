import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the pricefeed module. */
export interface Params {
    markets: Market[];
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
    expiry?: Timestamp;
}
/** PostedPrice defines a price for market posted by a specific oracle. */
export interface PostedPriceSDKType {
    market_id: string;
    oracle_address: Uint8Array;
    price: string;
    expiry?: TimestampSDKType;
}
/**
 * CurrentPrice defines a current price for a particular market in the pricefeed
 * module.
 */
export interface CurrentPrice {
    marketId: string;
    price: string;
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
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Market: {
    encode(message: Market, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Market;
    fromPartial(object: Partial<Market>): Market;
};
export declare const PostedPrice: {
    encode(message: PostedPrice, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PostedPrice;
    fromPartial(object: Partial<PostedPrice>): PostedPrice;
};
export declare const CurrentPrice: {
    encode(message: CurrentPrice, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CurrentPrice;
    fromPartial(object: Partial<CurrentPrice>): CurrentPrice;
};
