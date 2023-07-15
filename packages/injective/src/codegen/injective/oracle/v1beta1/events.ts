import { PythPriceState, PythPriceStateSDKType } from "./oracle";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SetChainlinkPriceEvent {
  feedId: string;
  answer: string;
  timestamp: Long;
}
export interface SetChainlinkPriceEventSDKType {
  feed_id: string;
  answer: string;
  timestamp: Long;
}
/** Event type upon set ref */
export interface SetBandPriceEvent {
  relayer: string;
  symbol: string;
  price: string;
  resolveTime: Long;
  requestId: Long;
}
/** Event type upon set ref */
export interface SetBandPriceEventSDKType {
  relayer: string;
  symbol: string;
  price: string;
  resolve_time: Long;
  request_id: Long;
}
export interface SetBandIBCPriceEvent {
  relayer: string;
  symbols: string[];
  prices: string[];
  resolveTime: Long;
  requestId: Long;
  clientId: Long;
}
export interface SetBandIBCPriceEventSDKType {
  relayer: string;
  symbols: string[];
  prices: string[];
  resolve_time: Long;
  request_id: Long;
  client_id: Long;
}
export interface EventBandIBCAckSuccess {
  ackResult: string;
  clientId: Long;
}
export interface EventBandIBCAckSuccessSDKType {
  ack_result: string;
  client_id: Long;
}
export interface EventBandIBCAckError {
  ackError: string;
  clientId: Long;
}
export interface EventBandIBCAckErrorSDKType {
  ack_error: string;
  client_id: Long;
}
export interface EventBandIBCResponseTimeout {
  clientId: Long;
}
export interface EventBandIBCResponseTimeoutSDKType {
  client_id: Long;
}
export interface SetPriceFeedPriceEvent {
  relayer: string;
  base: string;
  quote: string;
  /** price defines the price of the oracle base and quote */
  price: string;
}
export interface SetPriceFeedPriceEventSDKType {
  relayer: string;
  base: string;
  quote: string;
  price: string;
}
export interface SetProviderPriceEvent {
  provider: string;
  relayer: string;
  symbol: string;
  price: string;
}
export interface SetProviderPriceEventSDKType {
  provider: string;
  relayer: string;
  symbol: string;
  price: string;
}
export interface SetCoinbasePriceEvent {
  symbol: string;
  price: string;
  timestamp: Long;
}
export interface SetCoinbasePriceEventSDKType {
  symbol: string;
  price: string;
  timestamp: Long;
}
export interface EventSetPythPrices {
  prices: PythPriceState[];
}
export interface EventSetPythPricesSDKType {
  prices: PythPriceStateSDKType[];
}
function createBaseSetChainlinkPriceEvent(): SetChainlinkPriceEvent {
  return {
    feedId: "",
    answer: "",
    timestamp: Long.UZERO
  };
}
export const SetChainlinkPriceEvent = {
  encode(message: SetChainlinkPriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.answer !== "") {
      writer.uint32(18).string(message.answer);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  fromJSON(object: any): SetChainlinkPriceEvent {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      answer: isSet(object.answer) ? String(object.answer) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO
    };
  },
  fromPartial(object: Partial<SetChainlinkPriceEvent>): SetChainlinkPriceEvent {
    const message = createBaseSetChainlinkPriceEvent();
    message.feedId = object.feedId ?? "";
    message.answer = object.answer ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  }
};
function createBaseSetBandPriceEvent(): SetBandPriceEvent {
  return {
    relayer: "",
    symbol: "",
    price: "",
    resolveTime: Long.UZERO,
    requestId: Long.UZERO
  };
}
export const SetBandPriceEvent = {
  encode(message: SetBandPriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (!message.resolveTime.isZero()) {
      writer.uint32(32).uint64(message.resolveTime);
    }
    if (!message.requestId.isZero()) {
      writer.uint32(40).uint64(message.requestId);
    }
    return writer;
  },
  fromJSON(object: any): SetBandPriceEvent {
    return {
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      price: isSet(object.price) ? String(object.price) : "",
      resolveTime: isSet(object.resolveTime) ? Long.fromValue(object.resolveTime) : Long.UZERO,
      requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<SetBandPriceEvent>): SetBandPriceEvent {
    const message = createBaseSetBandPriceEvent();
    message.relayer = object.relayer ?? "";
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? Long.fromValue(object.resolveTime) : Long.UZERO;
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.UZERO;
    return message;
  }
};
function createBaseSetBandIBCPriceEvent(): SetBandIBCPriceEvent {
  return {
    relayer: "",
    symbols: [],
    prices: [],
    resolveTime: Long.UZERO,
    requestId: Long.UZERO,
    clientId: Long.ZERO
  };
}
export const SetBandIBCPriceEvent = {
  encode(message: SetBandIBCPriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    for (const v of message.symbols) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.prices) {
      writer.uint32(26).string(v!);
    }
    if (!message.resolveTime.isZero()) {
      writer.uint32(32).uint64(message.resolveTime);
    }
    if (!message.requestId.isZero()) {
      writer.uint32(40).uint64(message.requestId);
    }
    if (!message.clientId.isZero()) {
      writer.uint32(48).int64(message.clientId);
    }
    return writer;
  },
  fromJSON(object: any): SetBandIBCPriceEvent {
    return {
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => String(e)) : [],
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => String(e)) : [],
      resolveTime: isSet(object.resolveTime) ? Long.fromValue(object.resolveTime) : Long.UZERO,
      requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.UZERO,
      clientId: isSet(object.clientId) ? Long.fromValue(object.clientId) : Long.ZERO
    };
  },
  fromPartial(object: Partial<SetBandIBCPriceEvent>): SetBandIBCPriceEvent {
    const message = createBaseSetBandIBCPriceEvent();
    message.relayer = object.relayer ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.prices = object.prices?.map(e => e) || [];
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? Long.fromValue(object.resolveTime) : Long.UZERO;
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.UZERO;
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.ZERO;
    return message;
  }
};
function createBaseEventBandIBCAckSuccess(): EventBandIBCAckSuccess {
  return {
    ackResult: "",
    clientId: Long.ZERO
  };
}
export const EventBandIBCAckSuccess = {
  encode(message: EventBandIBCAckSuccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ackResult !== "") {
      writer.uint32(10).string(message.ackResult);
    }
    if (!message.clientId.isZero()) {
      writer.uint32(16).int64(message.clientId);
    }
    return writer;
  },
  fromJSON(object: any): EventBandIBCAckSuccess {
    return {
      ackResult: isSet(object.ackResult) ? String(object.ackResult) : "",
      clientId: isSet(object.clientId) ? Long.fromValue(object.clientId) : Long.ZERO
    };
  },
  fromPartial(object: Partial<EventBandIBCAckSuccess>): EventBandIBCAckSuccess {
    const message = createBaseEventBandIBCAckSuccess();
    message.ackResult = object.ackResult ?? "";
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.ZERO;
    return message;
  }
};
function createBaseEventBandIBCAckError(): EventBandIBCAckError {
  return {
    ackError: "",
    clientId: Long.ZERO
  };
}
export const EventBandIBCAckError = {
  encode(message: EventBandIBCAckError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ackError !== "") {
      writer.uint32(10).string(message.ackError);
    }
    if (!message.clientId.isZero()) {
      writer.uint32(16).int64(message.clientId);
    }
    return writer;
  },
  fromJSON(object: any): EventBandIBCAckError {
    return {
      ackError: isSet(object.ackError) ? String(object.ackError) : "",
      clientId: isSet(object.clientId) ? Long.fromValue(object.clientId) : Long.ZERO
    };
  },
  fromPartial(object: Partial<EventBandIBCAckError>): EventBandIBCAckError {
    const message = createBaseEventBandIBCAckError();
    message.ackError = object.ackError ?? "";
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.ZERO;
    return message;
  }
};
function createBaseEventBandIBCResponseTimeout(): EventBandIBCResponseTimeout {
  return {
    clientId: Long.ZERO
  };
}
export const EventBandIBCResponseTimeout = {
  encode(message: EventBandIBCResponseTimeout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.clientId.isZero()) {
      writer.uint32(8).int64(message.clientId);
    }
    return writer;
  },
  fromJSON(object: any): EventBandIBCResponseTimeout {
    return {
      clientId: isSet(object.clientId) ? Long.fromValue(object.clientId) : Long.ZERO
    };
  },
  fromPartial(object: Partial<EventBandIBCResponseTimeout>): EventBandIBCResponseTimeout {
    const message = createBaseEventBandIBCResponseTimeout();
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.ZERO;
    return message;
  }
};
function createBaseSetPriceFeedPriceEvent(): SetPriceFeedPriceEvent {
  return {
    relayer: "",
    base: "",
    quote: "",
    price: ""
  };
}
export const SetPriceFeedPriceEvent = {
  encode(message: SetPriceFeedPriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(26).string(message.quote);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    return writer;
  },
  fromJSON(object: any): SetPriceFeedPriceEvent {
    return {
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  fromPartial(object: Partial<SetPriceFeedPriceEvent>): SetPriceFeedPriceEvent {
    const message = createBaseSetPriceFeedPriceEvent();
    message.relayer = object.relayer ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.price = object.price ?? "";
    return message;
  }
};
function createBaseSetProviderPriceEvent(): SetProviderPriceEvent {
  return {
    provider: "",
    relayer: "",
    symbol: "",
    price: ""
  };
}
export const SetProviderPriceEvent = {
  encode(message: SetProviderPriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    return writer;
  },
  fromJSON(object: any): SetProviderPriceEvent {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  fromPartial(object: Partial<SetProviderPriceEvent>): SetProviderPriceEvent {
    const message = createBaseSetProviderPriceEvent();
    message.provider = object.provider ?? "";
    message.relayer = object.relayer ?? "";
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    return message;
  }
};
function createBaseSetCoinbasePriceEvent(): SetCoinbasePriceEvent {
  return {
    symbol: "",
    price: "",
    timestamp: Long.UZERO
  };
}
export const SetCoinbasePriceEvent = {
  encode(message: SetCoinbasePriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  fromJSON(object: any): SetCoinbasePriceEvent {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      price: isSet(object.price) ? String(object.price) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO
    };
  },
  fromPartial(object: Partial<SetCoinbasePriceEvent>): SetCoinbasePriceEvent {
    const message = createBaseSetCoinbasePriceEvent();
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  }
};
function createBaseEventSetPythPrices(): EventSetPythPrices {
  return {
    prices: []
  };
}
export const EventSetPythPrices = {
  encode(message: EventSetPythPrices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prices) {
      PythPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventSetPythPrices {
    return {
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => PythPriceState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventSetPythPrices>): EventSetPythPrices {
    const message = createBaseEventSetPythPrices();
    message.prices = object.prices?.map(e => PythPriceState.fromPartial(e)) || [];
    return message;
  }
};