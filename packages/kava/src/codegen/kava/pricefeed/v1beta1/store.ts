import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
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
function createBaseParams(): Params {
  return {
    markets: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => Market.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.markets = object.markets?.map(e => Market.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMarket(): Market {
  return {
    marketId: "",
    baseAsset: "",
    quoteAsset: "",
    oracles: [],
    active: false
  };
}
export const Market = {
  encode(message: Market, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    for (const v of message.oracles) {
      writer.uint32(34).bytes(v!);
    }
    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }
    return writer;
  },
  fromJSON(object: any): Market {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => bytesFromBase64(e)) : [],
      active: isSet(object.active) ? Boolean(object.active) : false
    };
  },
  fromPartial(object: Partial<Market>): Market {
    const message = createBaseMarket();
    message.marketId = object.marketId ?? "";
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.oracles = object.oracles?.map(e => e) || [];
    message.active = object.active ?? false;
    return message;
  }
};
function createBasePostedPrice(): PostedPrice {
  return {
    marketId: "",
    oracleAddress: new Uint8Array(),
    price: "",
    expiry: undefined
  };
}
export const PostedPrice = {
  encode(message: PostedPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.oracleAddress.length !== 0) {
      writer.uint32(18).bytes(message.oracleAddress);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(message.expiry, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PostedPrice {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      oracleAddress: isSet(object.oracleAddress) ? bytesFromBase64(object.oracleAddress) : new Uint8Array(),
      price: isSet(object.price) ? String(object.price) : "",
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined
    };
  },
  fromPartial(object: Partial<PostedPrice>): PostedPrice {
    const message = createBasePostedPrice();
    message.marketId = object.marketId ?? "";
    message.oracleAddress = object.oracleAddress ?? new Uint8Array();
    message.price = object.price ?? "";
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Timestamp.fromPartial(object.expiry) : undefined;
    return message;
  }
};
function createBaseCurrentPrice(): CurrentPrice {
  return {
    marketId: "",
    price: ""
  };
}
export const CurrentPrice = {
  encode(message: CurrentPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    return writer;
  },
  fromJSON(object: any): CurrentPrice {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  fromPartial(object: Partial<CurrentPrice>): CurrentPrice {
    const message = createBaseCurrentPrice();
    message.marketId = object.marketId ?? "";
    message.price = object.price ?? "";
    return message;
  }
};