import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** UpdateMarketPriceRequest is a request message updating market prices. */
export interface UpdateMarketPricesRequest {
  marketPriceUpdates: MarketPriceUpdate[];
}
export interface UpdateMarketPricesRequestProtoMsg {
  typeUrl: "/dydxprotocol.daemons.pricefeed.UpdateMarketPricesRequest";
  value: Uint8Array;
}
/** UpdateMarketPriceRequest is a request message updating market prices. */
export interface UpdateMarketPricesRequestAmino {
  market_price_updates: MarketPriceUpdateAmino[];
}
export interface UpdateMarketPricesRequestAminoMsg {
  type: "/dydxprotocol.daemons.pricefeed.UpdateMarketPricesRequest";
  value: UpdateMarketPricesRequestAmino;
}
/** UpdateMarketPriceRequest is a request message updating market prices. */
export interface UpdateMarketPricesRequestSDKType {
  market_price_updates: MarketPriceUpdateSDKType[];
}
/** UpdateMarketPricesResponse is a response message for updating market prices. */
export interface UpdateMarketPricesResponse {}
export interface UpdateMarketPricesResponseProtoMsg {
  typeUrl: "/dydxprotocol.daemons.pricefeed.UpdateMarketPricesResponse";
  value: Uint8Array;
}
/** UpdateMarketPricesResponse is a response message for updating market prices. */
export interface UpdateMarketPricesResponseAmino {}
export interface UpdateMarketPricesResponseAminoMsg {
  type: "/dydxprotocol.daemons.pricefeed.UpdateMarketPricesResponse";
  value: UpdateMarketPricesResponseAmino;
}
/** UpdateMarketPricesResponse is a response message for updating market prices. */
export interface UpdateMarketPricesResponseSDKType {}
/** ExchangePrice represents a specific exchange's market price */
export interface ExchangePrice {
  exchangeId: string;
  price: bigint;
  lastUpdateTime?: Timestamp;
}
export interface ExchangePriceProtoMsg {
  typeUrl: "/dydxprotocol.daemons.pricefeed.ExchangePrice";
  value: Uint8Array;
}
/** ExchangePrice represents a specific exchange's market price */
export interface ExchangePriceAmino {
  exchange_id: string;
  price: string;
  last_update_time?: TimestampAmino;
}
export interface ExchangePriceAminoMsg {
  type: "/dydxprotocol.daemons.pricefeed.ExchangePrice";
  value: ExchangePriceAmino;
}
/** ExchangePrice represents a specific exchange's market price */
export interface ExchangePriceSDKType {
  exchange_id: string;
  price: bigint;
  last_update_time?: TimestampSDKType;
}
/** MarketPriceUpdate represents an update to a single market */
export interface MarketPriceUpdate {
  marketId: number;
  exchangePrices: ExchangePrice[];
}
export interface MarketPriceUpdateProtoMsg {
  typeUrl: "/dydxprotocol.daemons.pricefeed.MarketPriceUpdate";
  value: Uint8Array;
}
/** MarketPriceUpdate represents an update to a single market */
export interface MarketPriceUpdateAmino {
  market_id: number;
  exchange_prices: ExchangePriceAmino[];
}
export interface MarketPriceUpdateAminoMsg {
  type: "/dydxprotocol.daemons.pricefeed.MarketPriceUpdate";
  value: MarketPriceUpdateAmino;
}
/** MarketPriceUpdate represents an update to a single market */
export interface MarketPriceUpdateSDKType {
  market_id: number;
  exchange_prices: ExchangePriceSDKType[];
}
function createBaseUpdateMarketPricesRequest(): UpdateMarketPricesRequest {
  return {
    marketPriceUpdates: []
  };
}
export const UpdateMarketPricesRequest = {
  typeUrl: "/dydxprotocol.daemons.pricefeed.UpdateMarketPricesRequest",
  encode(message: UpdateMarketPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.marketPriceUpdates) {
      MarketPriceUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UpdateMarketPricesRequest {
    return {
      marketPriceUpdates: Array.isArray(object?.marketPriceUpdates) ? object.marketPriceUpdates.map((e: any) => MarketPriceUpdate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<UpdateMarketPricesRequest>): UpdateMarketPricesRequest {
    const message = createBaseUpdateMarketPricesRequest();
    message.marketPriceUpdates = object.marketPriceUpdates?.map(e => MarketPriceUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UpdateMarketPricesRequestAmino): UpdateMarketPricesRequest {
    return {
      marketPriceUpdates: Array.isArray(object?.market_price_updates) ? object.market_price_updates.map((e: any) => MarketPriceUpdate.fromAmino(e)) : []
    };
  },
  toAmino(message: UpdateMarketPricesRequest): UpdateMarketPricesRequestAmino {
    const obj: any = {};
    if (message.marketPriceUpdates) {
      obj.market_price_updates = message.marketPriceUpdates.map(e => e ? MarketPriceUpdate.toAmino(e) : undefined);
    } else {
      obj.market_price_updates = [];
    }
    return obj;
  },
  fromAminoMsg(object: UpdateMarketPricesRequestAminoMsg): UpdateMarketPricesRequest {
    return UpdateMarketPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateMarketPricesRequestProtoMsg): UpdateMarketPricesRequest {
    return UpdateMarketPricesRequest.decode(message.value);
  },
  toProto(message: UpdateMarketPricesRequest): Uint8Array {
    return UpdateMarketPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateMarketPricesRequest): UpdateMarketPricesRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.daemons.pricefeed.UpdateMarketPricesRequest",
      value: UpdateMarketPricesRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateMarketPricesResponse(): UpdateMarketPricesResponse {
  return {};
}
export const UpdateMarketPricesResponse = {
  typeUrl: "/dydxprotocol.daemons.pricefeed.UpdateMarketPricesResponse",
  encode(_: UpdateMarketPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): UpdateMarketPricesResponse {
    return {};
  },
  fromPartial(_: Partial<UpdateMarketPricesResponse>): UpdateMarketPricesResponse {
    const message = createBaseUpdateMarketPricesResponse();
    return message;
  },
  fromAmino(_: UpdateMarketPricesResponseAmino): UpdateMarketPricesResponse {
    return {};
  },
  toAmino(_: UpdateMarketPricesResponse): UpdateMarketPricesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: UpdateMarketPricesResponseAminoMsg): UpdateMarketPricesResponse {
    return UpdateMarketPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateMarketPricesResponseProtoMsg): UpdateMarketPricesResponse {
    return UpdateMarketPricesResponse.decode(message.value);
  },
  toProto(message: UpdateMarketPricesResponse): Uint8Array {
    return UpdateMarketPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: UpdateMarketPricesResponse): UpdateMarketPricesResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.daemons.pricefeed.UpdateMarketPricesResponse",
      value: UpdateMarketPricesResponse.encode(message).finish()
    };
  }
};
function createBaseExchangePrice(): ExchangePrice {
  return {
    exchangeId: "",
    price: BigInt(0),
    lastUpdateTime: undefined
  };
}
export const ExchangePrice = {
  typeUrl: "/dydxprotocol.daemons.pricefeed.ExchangePrice",
  encode(message: ExchangePrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exchangeId !== "") {
      writer.uint32(10).string(message.exchangeId);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(16).uint64(message.price);
    }
    if (message.lastUpdateTime !== undefined) {
      Timestamp.encode(message.lastUpdateTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ExchangePrice {
    return {
      exchangeId: isSet(object.exchangeId) ? String(object.exchangeId) : "",
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      lastUpdateTime: isSet(object.lastUpdateTime) ? fromJsonTimestamp(object.lastUpdateTime) : undefined
    };
  },
  fromPartial(object: Partial<ExchangePrice>): ExchangePrice {
    const message = createBaseExchangePrice();
    message.exchangeId = object.exchangeId ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.lastUpdateTime = object.lastUpdateTime !== undefined && object.lastUpdateTime !== null ? Timestamp.fromPartial(object.lastUpdateTime) : undefined;
    return message;
  },
  fromAmino(object: ExchangePriceAmino): ExchangePrice {
    return {
      exchangeId: object.exchange_id,
      price: BigInt(object.price),
      lastUpdateTime: object?.last_update_time
    };
  },
  toAmino(message: ExchangePrice): ExchangePriceAmino {
    const obj: any = {};
    obj.exchange_id = message.exchangeId;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.last_update_time = message.lastUpdateTime;
    return obj;
  },
  fromAminoMsg(object: ExchangePriceAminoMsg): ExchangePrice {
    return ExchangePrice.fromAmino(object.value);
  },
  fromProtoMsg(message: ExchangePriceProtoMsg): ExchangePrice {
    return ExchangePrice.decode(message.value);
  },
  toProto(message: ExchangePrice): Uint8Array {
    return ExchangePrice.encode(message).finish();
  },
  toProtoMsg(message: ExchangePrice): ExchangePriceProtoMsg {
    return {
      typeUrl: "/dydxprotocol.daemons.pricefeed.ExchangePrice",
      value: ExchangePrice.encode(message).finish()
    };
  }
};
function createBaseMarketPriceUpdate(): MarketPriceUpdate {
  return {
    marketId: 0,
    exchangePrices: []
  };
}
export const MarketPriceUpdate = {
  typeUrl: "/dydxprotocol.daemons.pricefeed.MarketPriceUpdate",
  encode(message: MarketPriceUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== 0) {
      writer.uint32(8).uint32(message.marketId);
    }
    for (const v of message.exchangePrices) {
      ExchangePrice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MarketPriceUpdate {
    return {
      marketId: isSet(object.marketId) ? Number(object.marketId) : 0,
      exchangePrices: Array.isArray(object?.exchangePrices) ? object.exchangePrices.map((e: any) => ExchangePrice.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MarketPriceUpdate>): MarketPriceUpdate {
    const message = createBaseMarketPriceUpdate();
    message.marketId = object.marketId ?? 0;
    message.exchangePrices = object.exchangePrices?.map(e => ExchangePrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MarketPriceUpdateAmino): MarketPriceUpdate {
    return {
      marketId: object.market_id,
      exchangePrices: Array.isArray(object?.exchange_prices) ? object.exchange_prices.map((e: any) => ExchangePrice.fromAmino(e)) : []
    };
  },
  toAmino(message: MarketPriceUpdate): MarketPriceUpdateAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    if (message.exchangePrices) {
      obj.exchange_prices = message.exchangePrices.map(e => e ? ExchangePrice.toAmino(e) : undefined);
    } else {
      obj.exchange_prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: MarketPriceUpdateAminoMsg): MarketPriceUpdate {
    return MarketPriceUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketPriceUpdateProtoMsg): MarketPriceUpdate {
    return MarketPriceUpdate.decode(message.value);
  },
  toProto(message: MarketPriceUpdate): Uint8Array {
    return MarketPriceUpdate.encode(message).finish();
  },
  toProtoMsg(message: MarketPriceUpdate): MarketPriceUpdateProtoMsg {
    return {
      typeUrl: "/dydxprotocol.daemons.pricefeed.MarketPriceUpdate",
      value: MarketPriceUpdate.encode(message).finish()
    };
  }
};