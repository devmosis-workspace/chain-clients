import { PriceAttestation, PriceAttestationSDKType, Params, ParamsSDKType } from "./oracle";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgRelayProviderPrice defines a SDK message for setting a price through the
 * provider oracle.
 */
export interface MsgRelayProviderPrices {
  sender: string;
  provider: string;
  symbols: string[];
  prices: string[];
}
/**
 * MsgRelayProviderPrice defines a SDK message for setting a price through the
 * provider oracle.
 */
export interface MsgRelayProviderPricesSDKType {
  sender: string;
  provider: string;
  symbols: string[];
  prices: string[];
}
export interface MsgRelayProviderPricesResponse {}
export interface MsgRelayProviderPricesResponseSDKType {}
/**
 * MsgRelayPriceFeedPrice defines a SDK message for setting a price through the
 * pricefeed oracle.
 */
export interface MsgRelayPriceFeedPrice {
  sender: string;
  base: string[];
  quote: string[];
  /** price defines the price of the oracle base and quote */
  price: string[];
}
/**
 * MsgRelayPriceFeedPrice defines a SDK message for setting a price through the
 * pricefeed oracle.
 */
export interface MsgRelayPriceFeedPriceSDKType {
  sender: string;
  base: string[];
  quote: string[];
  price: string[];
}
export interface MsgRelayPriceFeedPriceResponse {}
export interface MsgRelayPriceFeedPriceResponseSDKType {}
export interface MsgRelayBandRates {
  relayer: string;
  symbols: string[];
  rates: Long[];
  resolveTimes: Long[];
  requestIDs: Long[];
}
export interface MsgRelayBandRatesSDKType {
  relayer: string;
  symbols: string[];
  rates: Long[];
  resolve_times: Long[];
  requestIDs: Long[];
}
export interface MsgRelayBandRatesResponse {}
export interface MsgRelayBandRatesResponseSDKType {}
/**
 * MsgRelayCoinbaseMessages defines a SDK message for relaying price messages
 * from Coinbase API.
 */
export interface MsgRelayCoinbaseMessages {
  sender: string;
  messages: Uint8Array[];
  signatures: Uint8Array[];
}
/**
 * MsgRelayCoinbaseMessages defines a SDK message for relaying price messages
 * from Coinbase API.
 */
export interface MsgRelayCoinbaseMessagesSDKType {
  sender: string;
  messages: Uint8Array[];
  signatures: Uint8Array[];
}
export interface MsgRelayCoinbaseMessagesResponse {}
export interface MsgRelayCoinbaseMessagesResponseSDKType {}
/**
 * MsgRequestBandIBCRates defines a SDK message for requesting data from
 * BandChain using IBC.
 */
export interface MsgRequestBandIBCRates {
  sender: string;
  requestId: Long;
}
/**
 * MsgRequestBandIBCRates defines a SDK message for requesting data from
 * BandChain using IBC.
 */
export interface MsgRequestBandIBCRatesSDKType {
  sender: string;
  request_id: Long;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponse {}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponseSDKType {}
/** MsgRelayPythPrices defines a SDK message for updating Pyth prices */
export interface MsgRelayPythPrices {
  sender: string;
  priceAttestations: PriceAttestation[];
}
/** MsgRelayPythPrices defines a SDK message for updating Pyth prices */
export interface MsgRelayPythPricesSDKType {
  sender: string;
  price_attestations: PriceAttestationSDKType[];
}
/** MsgRelayPythPricesResponse defines the Msg/RelayPythPrices response type. */
export interface MsgRelayPythPricesResponse {}
/** MsgRelayPythPricesResponse defines the Msg/RelayPythPrices response type. */
export interface MsgRelayPythPricesResponseSDKType {}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the oracle parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRelayProviderPrices(): MsgRelayProviderPrices {
  return {
    sender: "",
    provider: "",
    symbols: [],
    prices: []
  };
}
export const MsgRelayProviderPrices = {
  encode(message: MsgRelayProviderPrices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.symbols) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.prices) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgRelayProviderPrices {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => String(e)) : [],
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRelayProviderPrices>): MsgRelayProviderPrices {
    const message = createBaseMsgRelayProviderPrices();
    message.sender = object.sender ?? "";
    message.provider = object.provider ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.prices = object.prices?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgRelayProviderPricesResponse(): MsgRelayProviderPricesResponse {
  return {};
}
export const MsgRelayProviderPricesResponse = {
  encode(_: MsgRelayProviderPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRelayProviderPricesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRelayProviderPricesResponse>): MsgRelayProviderPricesResponse {
    const message = createBaseMsgRelayProviderPricesResponse();
    return message;
  }
};
function createBaseMsgRelayPriceFeedPrice(): MsgRelayPriceFeedPrice {
  return {
    sender: "",
    base: [],
    quote: [],
    price: []
  };
}
export const MsgRelayPriceFeedPrice = {
  encode(message: MsgRelayPriceFeedPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.base) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.quote) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.price) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgRelayPriceFeedPrice {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      base: Array.isArray(object?.base) ? object.base.map((e: any) => String(e)) : [],
      quote: Array.isArray(object?.quote) ? object.quote.map((e: any) => String(e)) : [],
      price: Array.isArray(object?.price) ? object.price.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRelayPriceFeedPrice>): MsgRelayPriceFeedPrice {
    const message = createBaseMsgRelayPriceFeedPrice();
    message.sender = object.sender ?? "";
    message.base = object.base?.map(e => e) || [];
    message.quote = object.quote?.map(e => e) || [];
    message.price = object.price?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgRelayPriceFeedPriceResponse(): MsgRelayPriceFeedPriceResponse {
  return {};
}
export const MsgRelayPriceFeedPriceResponse = {
  encode(_: MsgRelayPriceFeedPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRelayPriceFeedPriceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRelayPriceFeedPriceResponse>): MsgRelayPriceFeedPriceResponse {
    const message = createBaseMsgRelayPriceFeedPriceResponse();
    return message;
  }
};
function createBaseMsgRelayBandRates(): MsgRelayBandRates {
  return {
    relayer: "",
    symbols: [],
    rates: [],
    resolveTimes: [],
    requestIDs: []
  };
}
export const MsgRelayBandRates = {
  encode(message: MsgRelayBandRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    for (const v of message.symbols) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.rates) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.resolveTimes) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.requestIDs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgRelayBandRates {
    return {
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => String(e)) : [],
      rates: Array.isArray(object?.rates) ? object.rates.map((e: any) => Long.fromValue(e)) : [],
      resolveTimes: Array.isArray(object?.resolveTimes) ? object.resolveTimes.map((e: any) => Long.fromValue(e)) : [],
      requestIDs: Array.isArray(object?.requestIDs) ? object.requestIDs.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRelayBandRates>): MsgRelayBandRates {
    const message = createBaseMsgRelayBandRates();
    message.relayer = object.relayer ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.rates = object.rates?.map(e => Long.fromValue(e)) || [];
    message.resolveTimes = object.resolveTimes?.map(e => Long.fromValue(e)) || [];
    message.requestIDs = object.requestIDs?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseMsgRelayBandRatesResponse(): MsgRelayBandRatesResponse {
  return {};
}
export const MsgRelayBandRatesResponse = {
  encode(_: MsgRelayBandRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRelayBandRatesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRelayBandRatesResponse>): MsgRelayBandRatesResponse {
    const message = createBaseMsgRelayBandRatesResponse();
    return message;
  }
};
function createBaseMsgRelayCoinbaseMessages(): MsgRelayCoinbaseMessages {
  return {
    sender: "",
    messages: [],
    signatures: []
  };
}
export const MsgRelayCoinbaseMessages = {
  encode(message: MsgRelayCoinbaseMessages, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.messages) {
      writer.uint32(18).bytes(v!);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgRelayCoinbaseMessages {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => bytesFromBase64(e)) : [],
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRelayCoinbaseMessages>): MsgRelayCoinbaseMessages {
    const message = createBaseMsgRelayCoinbaseMessages();
    message.sender = object.sender ?? "";
    message.messages = object.messages?.map(e => e) || [];
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgRelayCoinbaseMessagesResponse(): MsgRelayCoinbaseMessagesResponse {
  return {};
}
export const MsgRelayCoinbaseMessagesResponse = {
  encode(_: MsgRelayCoinbaseMessagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRelayCoinbaseMessagesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRelayCoinbaseMessagesResponse>): MsgRelayCoinbaseMessagesResponse {
    const message = createBaseMsgRelayCoinbaseMessagesResponse();
    return message;
  }
};
function createBaseMsgRequestBandIBCRates(): MsgRequestBandIBCRates {
  return {
    sender: "",
    requestId: Long.UZERO
  };
}
export const MsgRequestBandIBCRates = {
  encode(message: MsgRequestBandIBCRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.requestId.isZero()) {
      writer.uint32(16).uint64(message.requestId);
    }
    return writer;
  },
  fromJSON(object: any): MsgRequestBandIBCRates {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgRequestBandIBCRates>): MsgRequestBandIBCRates {
    const message = createBaseMsgRequestBandIBCRates();
    message.sender = object.sender ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgRequestBandIBCRatesResponse(): MsgRequestBandIBCRatesResponse {
  return {};
}
export const MsgRequestBandIBCRatesResponse = {
  encode(_: MsgRequestBandIBCRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRequestBandIBCRatesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRequestBandIBCRatesResponse>): MsgRequestBandIBCRatesResponse {
    const message = createBaseMsgRequestBandIBCRatesResponse();
    return message;
  }
};
function createBaseMsgRelayPythPrices(): MsgRelayPythPrices {
  return {
    sender: "",
    priceAttestations: []
  };
}
export const MsgRelayPythPrices = {
  encode(message: MsgRelayPythPrices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.priceAttestations) {
      PriceAttestation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRelayPythPrices {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      priceAttestations: Array.isArray(object?.priceAttestations) ? object.priceAttestations.map((e: any) => PriceAttestation.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRelayPythPrices>): MsgRelayPythPrices {
    const message = createBaseMsgRelayPythPrices();
    message.sender = object.sender ?? "";
    message.priceAttestations = object.priceAttestations?.map(e => PriceAttestation.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgRelayPythPricesResponse(): MsgRelayPythPricesResponse {
  return {};
}
export const MsgRelayPythPricesResponse = {
  encode(_: MsgRelayPythPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRelayPythPricesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRelayPythPricesResponse>): MsgRelayPythPricesResponse {
    const message = createBaseMsgRelayPythPricesResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};