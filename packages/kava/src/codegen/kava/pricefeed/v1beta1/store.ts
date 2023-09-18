import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
function createBaseParams(): Params {
  return {
    markets: []
  };
}
export const Params = {
  typeUrl: "/kava.pricefeed.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => Market.fromAmino(e)) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? Market.toAmino(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.Params",
      value: Params.encode(message).finish()
    };
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
  typeUrl: "/kava.pricefeed.v1beta1.Market",
  encode(message: Market, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MarketAmino): Market {
    return {
      marketId: object.market_id,
      baseAsset: object.base_asset,
      quoteAsset: object.quote_asset,
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => e) : [],
      active: object.active
    };
  },
  toAmino(message: Market): MarketAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    if (message.oracles) {
      obj.oracles = message.oracles.map(e => e);
    } else {
      obj.oracles = [];
    }
    obj.active = message.active;
    return obj;
  },
  fromAminoMsg(object: MarketAminoMsg): Market {
    return Market.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketProtoMsg): Market {
    return Market.decode(message.value);
  },
  toProto(message: Market): Uint8Array {
    return Market.encode(message).finish();
  },
  toProtoMsg(message: Market): MarketProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.Market",
      value: Market.encode(message).finish()
    };
  }
};
function createBasePostedPrice(): PostedPrice {
  return {
    marketId: "",
    oracleAddress: new Uint8Array(),
    price: "",
    expiry: Timestamp.fromPartial({})
  };
}
export const PostedPrice = {
  typeUrl: "/kava.pricefeed.v1beta1.PostedPrice",
  encode(message: PostedPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.oracleAddress.length !== 0) {
      writer.uint32(18).bytes(message.oracleAddress);
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
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
  },
  fromAmino(object: PostedPriceAmino): PostedPrice {
    return {
      marketId: object.market_id,
      oracleAddress: object.oracle_address,
      price: object.price,
      expiry: object.expiry
    };
  },
  toAmino(message: PostedPrice): PostedPriceAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.oracle_address = message.oracleAddress;
    obj.price = message.price;
    obj.expiry = message.expiry;
    return obj;
  },
  fromAminoMsg(object: PostedPriceAminoMsg): PostedPrice {
    return PostedPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: PostedPriceProtoMsg): PostedPrice {
    return PostedPrice.decode(message.value);
  },
  toProto(message: PostedPrice): Uint8Array {
    return PostedPrice.encode(message).finish();
  },
  toProtoMsg(message: PostedPrice): PostedPriceProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.PostedPrice",
      value: PostedPrice.encode(message).finish()
    };
  }
};
function createBaseCurrentPrice(): CurrentPrice {
  return {
    marketId: "",
    price: ""
  };
}
export const CurrentPrice = {
  typeUrl: "/kava.pricefeed.v1beta1.CurrentPrice",
  encode(message: CurrentPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
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
  },
  fromAmino(object: CurrentPriceAmino): CurrentPrice {
    return {
      marketId: object.market_id,
      price: object.price
    };
  },
  toAmino(message: CurrentPrice): CurrentPriceAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.price = message.price;
    return obj;
  },
  fromAminoMsg(object: CurrentPriceAminoMsg): CurrentPrice {
    return CurrentPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: CurrentPriceProtoMsg): CurrentPrice {
    return CurrentPrice.decode(message.value);
  },
  toProto(message: CurrentPrice): Uint8Array {
    return CurrentPrice.encode(message).finish();
  },
  toProtoMsg(message: CurrentPrice): CurrentPriceProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.CurrentPrice",
      value: CurrentPrice.encode(message).finish()
    };
  }
};