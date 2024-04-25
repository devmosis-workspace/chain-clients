import { Params, ParamsAmino, ParamsSDKType } from "./store";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse defines the response type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse defines the response type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse defines the response type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryPriceRequest is the request type for the Query/PriceRequest RPC method. */
export interface QueryPriceRequest {
  marketId: string;
}
export interface QueryPriceRequestProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryPriceRequest";
  value: Uint8Array;
}
/** QueryPriceRequest is the request type for the Query/PriceRequest RPC method. */
export interface QueryPriceRequestAmino {
  market_id?: string;
}
export interface QueryPriceRequestAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryPriceRequest";
  value: QueryPriceRequestAmino;
}
/** QueryPriceRequest is the request type for the Query/PriceRequest RPC method. */
export interface QueryPriceRequestSDKType {
  market_id: string;
}
/** QueryPriceResponse is the response type for the Query/Prices RPC method. */
export interface QueryPriceResponse {
  price: CurrentPriceResponse;
}
export interface QueryPriceResponseProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryPriceResponse";
  value: Uint8Array;
}
/** QueryPriceResponse is the response type for the Query/Prices RPC method. */
export interface QueryPriceResponseAmino {
  price?: CurrentPriceResponseAmino;
}
export interface QueryPriceResponseAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryPriceResponse";
  value: QueryPriceResponseAmino;
}
/** QueryPriceResponse is the response type for the Query/Prices RPC method. */
export interface QueryPriceResponseSDKType {
  price: CurrentPriceResponseSDKType;
}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */
export interface QueryPricesRequest {}
export interface QueryPricesRequestProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryPricesRequest";
  value: Uint8Array;
}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */
export interface QueryPricesRequestAmino {}
export interface QueryPricesRequestAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryPricesRequest";
  value: QueryPricesRequestAmino;
}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */
export interface QueryPricesRequestSDKType {}
/** QueryPricesResponse is the response type for the Query/Prices RPC method. */
export interface QueryPricesResponse {
  prices: CurrentPriceResponse[];
}
export interface QueryPricesResponseProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryPricesResponse";
  value: Uint8Array;
}
/** QueryPricesResponse is the response type for the Query/Prices RPC method. */
export interface QueryPricesResponseAmino {
  prices?: CurrentPriceResponseAmino[];
}
export interface QueryPricesResponseAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryPricesResponse";
  value: QueryPricesResponseAmino;
}
/** QueryPricesResponse is the response type for the Query/Prices RPC method. */
export interface QueryPricesResponseSDKType {
  prices: CurrentPriceResponseSDKType[];
}
/** QueryRawPricesRequest is the request type for the Query/RawPrices RPC method. */
export interface QueryRawPricesRequest {
  marketId: string;
}
export interface QueryRawPricesRequestProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryRawPricesRequest";
  value: Uint8Array;
}
/** QueryRawPricesRequest is the request type for the Query/RawPrices RPC method. */
export interface QueryRawPricesRequestAmino {
  market_id?: string;
}
export interface QueryRawPricesRequestAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryRawPricesRequest";
  value: QueryRawPricesRequestAmino;
}
/** QueryRawPricesRequest is the request type for the Query/RawPrices RPC method. */
export interface QueryRawPricesRequestSDKType {
  market_id: string;
}
/**
 * QueryRawPricesResponse is the response type for the Query/RawPrices RPC
 * method.
 */
export interface QueryRawPricesResponse {
  rawPrices: PostedPriceResponse[];
}
export interface QueryRawPricesResponseProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryRawPricesResponse";
  value: Uint8Array;
}
/**
 * QueryRawPricesResponse is the response type for the Query/RawPrices RPC
 * method.
 */
export interface QueryRawPricesResponseAmino {
  raw_prices?: PostedPriceResponseAmino[];
}
export interface QueryRawPricesResponseAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryRawPricesResponse";
  value: QueryRawPricesResponseAmino;
}
/**
 * QueryRawPricesResponse is the response type for the Query/RawPrices RPC
 * method.
 */
export interface QueryRawPricesResponseSDKType {
  raw_prices: PostedPriceResponseSDKType[];
}
/** QueryOraclesRequest is the request type for the Query/Oracles RPC method. */
export interface QueryOraclesRequest {
  marketId: string;
}
export interface QueryOraclesRequestProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryOraclesRequest";
  value: Uint8Array;
}
/** QueryOraclesRequest is the request type for the Query/Oracles RPC method. */
export interface QueryOraclesRequestAmino {
  market_id?: string;
}
export interface QueryOraclesRequestAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryOraclesRequest";
  value: QueryOraclesRequestAmino;
}
/** QueryOraclesRequest is the request type for the Query/Oracles RPC method. */
export interface QueryOraclesRequestSDKType {
  market_id: string;
}
/** QueryOraclesResponse is the response type for the Query/Oracles RPC method. */
export interface QueryOraclesResponse {
  /** List of oracle addresses */
  oracles: string[];
}
export interface QueryOraclesResponseProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryOraclesResponse";
  value: Uint8Array;
}
/** QueryOraclesResponse is the response type for the Query/Oracles RPC method. */
export interface QueryOraclesResponseAmino {
  /** List of oracle addresses */
  oracles?: string[];
}
export interface QueryOraclesResponseAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryOraclesResponse";
  value: QueryOraclesResponseAmino;
}
/** QueryOraclesResponse is the response type for the Query/Oracles RPC method. */
export interface QueryOraclesResponseSDKType {
  oracles: string[];
}
/** QueryMarketsRequest is the request type for the Query/Markets RPC method. */
export interface QueryMarketsRequest {}
export interface QueryMarketsRequestProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryMarketsRequest";
  value: Uint8Array;
}
/** QueryMarketsRequest is the request type for the Query/Markets RPC method. */
export interface QueryMarketsRequestAmino {}
export interface QueryMarketsRequestAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryMarketsRequest";
  value: QueryMarketsRequestAmino;
}
/** QueryMarketsRequest is the request type for the Query/Markets RPC method. */
export interface QueryMarketsRequestSDKType {}
/** QueryMarketsResponse is the response type for the Query/Markets RPC method. */
export interface QueryMarketsResponse {
  /** List of markets */
  markets: MarketResponse[];
}
export interface QueryMarketsResponseProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.QueryMarketsResponse";
  value: Uint8Array;
}
/** QueryMarketsResponse is the response type for the Query/Markets RPC method. */
export interface QueryMarketsResponseAmino {
  /** List of markets */
  markets?: MarketResponseAmino[];
}
export interface QueryMarketsResponseAminoMsg {
  type: "/kava.pricefeed.v1beta1.QueryMarketsResponse";
  value: QueryMarketsResponseAmino;
}
/** QueryMarketsResponse is the response type for the Query/Markets RPC method. */
export interface QueryMarketsResponseSDKType {
  markets: MarketResponseSDKType[];
}
/** PostedPriceResponse defines a price for market posted by a specific oracle. */
export interface PostedPriceResponse {
  marketId: string;
  oracleAddress: string;
  price: string;
  expiry: Timestamp;
}
export interface PostedPriceResponseProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.PostedPriceResponse";
  value: Uint8Array;
}
/** PostedPriceResponse defines a price for market posted by a specific oracle. */
export interface PostedPriceResponseAmino {
  market_id?: string;
  oracle_address?: string;
  price?: string;
  expiry?: string;
}
export interface PostedPriceResponseAminoMsg {
  type: "/kava.pricefeed.v1beta1.PostedPriceResponse";
  value: PostedPriceResponseAmino;
}
/** PostedPriceResponse defines a price for market posted by a specific oracle. */
export interface PostedPriceResponseSDKType {
  market_id: string;
  oracle_address: string;
  price: string;
  expiry: TimestampSDKType;
}
/**
 * CurrentPriceResponse defines a current price for a particular market in the pricefeed
 * module.
 */
export interface CurrentPriceResponse {
  marketId: string;
  price: string;
}
export interface CurrentPriceResponseProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.CurrentPriceResponse";
  value: Uint8Array;
}
/**
 * CurrentPriceResponse defines a current price for a particular market in the pricefeed
 * module.
 */
export interface CurrentPriceResponseAmino {
  market_id?: string;
  price?: string;
}
export interface CurrentPriceResponseAminoMsg {
  type: "/kava.pricefeed.v1beta1.CurrentPriceResponse";
  value: CurrentPriceResponseAmino;
}
/**
 * CurrentPriceResponse defines a current price for a particular market in the pricefeed
 * module.
 */
export interface CurrentPriceResponseSDKType {
  market_id: string;
  price: string;
}
/** MarketResponse defines an asset in the pricefeed. */
export interface MarketResponse {
  marketId: string;
  baseAsset: string;
  quoteAsset: string;
  oracles: string[];
  active: boolean;
}
export interface MarketResponseProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.MarketResponse";
  value: Uint8Array;
}
/** MarketResponse defines an asset in the pricefeed. */
export interface MarketResponseAmino {
  market_id?: string;
  base_asset?: string;
  quote_asset?: string;
  oracles?: string[];
  active?: boolean;
}
export interface MarketResponseAminoMsg {
  type: "/kava.pricefeed.v1beta1.MarketResponse";
  value: MarketResponseAmino;
}
/** MarketResponse defines an asset in the pricefeed. */
export interface MarketResponseSDKType {
  market_id: string;
  base_asset: string;
  quote_asset: string;
  oracles: string[];
  active: boolean;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPriceRequest(): QueryPriceRequest {
  return {
    marketId: ""
  };
}
export const QueryPriceRequest = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryPriceRequest",
  encode(message: QueryPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryPriceRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryPriceRequest>): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryPriceRequestAmino): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryPriceRequest): QueryPriceRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryPriceRequestAminoMsg): QueryPriceRequest {
    return QueryPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceRequestProtoMsg): QueryPriceRequest {
    return QueryPriceRequest.decode(message.value);
  },
  toProto(message: QueryPriceRequest): Uint8Array {
    return QueryPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceRequest): QueryPriceRequestProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryPriceRequest",
      value: QueryPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPriceResponse(): QueryPriceResponse {
  return {
    price: CurrentPriceResponse.fromPartial({})
  };
}
export const QueryPriceResponse = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryPriceResponse",
  encode(message: QueryPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== undefined) {
      CurrentPriceResponse.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPriceResponse {
    return {
      price: isSet(object.price) ? CurrentPriceResponse.fromJSON(object.price) : undefined
    };
  },
  fromPartial(object: Partial<QueryPriceResponse>): QueryPriceResponse {
    const message = createBaseQueryPriceResponse();
    message.price = object.price !== undefined && object.price !== null ? CurrentPriceResponse.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: QueryPriceResponseAmino): QueryPriceResponse {
    const message = createBaseQueryPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = CurrentPriceResponse.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: QueryPriceResponse): QueryPriceResponseAmino {
    const obj: any = {};
    obj.price = message.price ? CurrentPriceResponse.toAmino(message.price) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPriceResponseAminoMsg): QueryPriceResponse {
    return QueryPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceResponseProtoMsg): QueryPriceResponse {
    return QueryPriceResponse.decode(message.value);
  },
  toProto(message: QueryPriceResponse): Uint8Array {
    return QueryPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceResponse): QueryPriceResponseProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryPriceResponse",
      value: QueryPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPricesRequest(): QueryPricesRequest {
  return {};
}
export const QueryPricesRequest = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryPricesRequest",
  encode(_: QueryPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryPricesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPricesRequest>): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    return message;
  },
  fromAmino(_: QueryPricesRequestAmino): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    return message;
  },
  toAmino(_: QueryPricesRequest): QueryPricesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPricesRequestAminoMsg): QueryPricesRequest {
    return QueryPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPricesRequestProtoMsg): QueryPricesRequest {
    return QueryPricesRequest.decode(message.value);
  },
  toProto(message: QueryPricesRequest): Uint8Array {
    return QueryPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPricesRequest): QueryPricesRequestProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryPricesRequest",
      value: QueryPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPricesResponse(): QueryPricesResponse {
  return {
    prices: []
  };
}
export const QueryPricesResponse = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryPricesResponse",
  encode(message: QueryPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      CurrentPriceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPricesResponse {
    return {
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => CurrentPriceResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPricesResponse>): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.prices = object.prices?.map(e => CurrentPriceResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPricesResponseAmino): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.prices = object.prices?.map(e => CurrentPriceResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPricesResponse): QueryPricesResponseAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? CurrentPriceResponse.toAmino(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPricesResponseAminoMsg): QueryPricesResponse {
    return QueryPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPricesResponseProtoMsg): QueryPricesResponse {
    return QueryPricesResponse.decode(message.value);
  },
  toProto(message: QueryPricesResponse): Uint8Array {
    return QueryPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPricesResponse): QueryPricesResponseProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryPricesResponse",
      value: QueryPricesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRawPricesRequest(): QueryRawPricesRequest {
  return {
    marketId: ""
  };
}
export const QueryRawPricesRequest = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryRawPricesRequest",
  encode(message: QueryRawPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryRawPricesRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryRawPricesRequest>): QueryRawPricesRequest {
    const message = createBaseQueryRawPricesRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryRawPricesRequestAmino): QueryRawPricesRequest {
    const message = createBaseQueryRawPricesRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryRawPricesRequest): QueryRawPricesRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryRawPricesRequestAminoMsg): QueryRawPricesRequest {
    return QueryRawPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRawPricesRequestProtoMsg): QueryRawPricesRequest {
    return QueryRawPricesRequest.decode(message.value);
  },
  toProto(message: QueryRawPricesRequest): Uint8Array {
    return QueryRawPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRawPricesRequest): QueryRawPricesRequestProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryRawPricesRequest",
      value: QueryRawPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRawPricesResponse(): QueryRawPricesResponse {
  return {
    rawPrices: []
  };
}
export const QueryRawPricesResponse = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryRawPricesResponse",
  encode(message: QueryRawPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rawPrices) {
      PostedPriceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRawPricesResponse {
    return {
      rawPrices: Array.isArray(object?.rawPrices) ? object.rawPrices.map((e: any) => PostedPriceResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryRawPricesResponse>): QueryRawPricesResponse {
    const message = createBaseQueryRawPricesResponse();
    message.rawPrices = object.rawPrices?.map(e => PostedPriceResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRawPricesResponseAmino): QueryRawPricesResponse {
    const message = createBaseQueryRawPricesResponse();
    message.rawPrices = object.raw_prices?.map(e => PostedPriceResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRawPricesResponse): QueryRawPricesResponseAmino {
    const obj: any = {};
    if (message.rawPrices) {
      obj.raw_prices = message.rawPrices.map(e => e ? PostedPriceResponse.toAmino(e) : undefined);
    } else {
      obj.raw_prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryRawPricesResponseAminoMsg): QueryRawPricesResponse {
    return QueryRawPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRawPricesResponseProtoMsg): QueryRawPricesResponse {
    return QueryRawPricesResponse.decode(message.value);
  },
  toProto(message: QueryRawPricesResponse): Uint8Array {
    return QueryRawPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRawPricesResponse): QueryRawPricesResponseProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryRawPricesResponse",
      value: QueryRawPricesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOraclesRequest(): QueryOraclesRequest {
  return {
    marketId: ""
  };
}
export const QueryOraclesRequest = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryOraclesRequest",
  encode(message: QueryOraclesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryOraclesRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryOraclesRequest>): QueryOraclesRequest {
    const message = createBaseQueryOraclesRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryOraclesRequestAmino): QueryOraclesRequest {
    const message = createBaseQueryOraclesRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryOraclesRequest): QueryOraclesRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryOraclesRequestAminoMsg): QueryOraclesRequest {
    return QueryOraclesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOraclesRequestProtoMsg): QueryOraclesRequest {
    return QueryOraclesRequest.decode(message.value);
  },
  toProto(message: QueryOraclesRequest): Uint8Array {
    return QueryOraclesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOraclesRequest): QueryOraclesRequestProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryOraclesRequest",
      value: QueryOraclesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOraclesResponse(): QueryOraclesResponse {
  return {
    oracles: []
  };
}
export const QueryOraclesResponse = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryOraclesResponse",
  encode(message: QueryOraclesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.oracles) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryOraclesResponse {
    return {
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryOraclesResponse>): QueryOraclesResponse {
    const message = createBaseQueryOraclesResponse();
    message.oracles = object.oracles?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryOraclesResponseAmino): QueryOraclesResponse {
    const message = createBaseQueryOraclesResponse();
    message.oracles = object.oracles?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryOraclesResponse): QueryOraclesResponseAmino {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map(e => e);
    } else {
      obj.oracles = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryOraclesResponseAminoMsg): QueryOraclesResponse {
    return QueryOraclesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOraclesResponseProtoMsg): QueryOraclesResponse {
    return QueryOraclesResponse.decode(message.value);
  },
  toProto(message: QueryOraclesResponse): Uint8Array {
    return QueryOraclesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOraclesResponse): QueryOraclesResponseProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryOraclesResponse",
      value: QueryOraclesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketsRequest(): QueryMarketsRequest {
  return {};
}
export const QueryMarketsRequest = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryMarketsRequest",
  encode(_: QueryMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryMarketsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryMarketsRequest>): QueryMarketsRequest {
    const message = createBaseQueryMarketsRequest();
    return message;
  },
  fromAmino(_: QueryMarketsRequestAmino): QueryMarketsRequest {
    const message = createBaseQueryMarketsRequest();
    return message;
  },
  toAmino(_: QueryMarketsRequest): QueryMarketsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMarketsRequestAminoMsg): QueryMarketsRequest {
    return QueryMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketsRequestProtoMsg): QueryMarketsRequest {
    return QueryMarketsRequest.decode(message.value);
  },
  toProto(message: QueryMarketsRequest): Uint8Array {
    return QueryMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketsRequest): QueryMarketsRequestProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryMarketsRequest",
      value: QueryMarketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketsResponse(): QueryMarketsResponse {
  return {
    markets: []
  };
}
export const QueryMarketsResponse = {
  typeUrl: "/kava.pricefeed.v1beta1.QueryMarketsResponse",
  encode(message: QueryMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.markets) {
      MarketResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => MarketResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMarketsResponse>): QueryMarketsResponse {
    const message = createBaseQueryMarketsResponse();
    message.markets = object.markets?.map(e => MarketResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMarketsResponseAmino): QueryMarketsResponse {
    const message = createBaseQueryMarketsResponse();
    message.markets = object.markets?.map(e => MarketResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMarketsResponse): QueryMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? MarketResponse.toAmino(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryMarketsResponseAminoMsg): QueryMarketsResponse {
    return QueryMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketsResponseProtoMsg): QueryMarketsResponse {
    return QueryMarketsResponse.decode(message.value);
  },
  toProto(message: QueryMarketsResponse): Uint8Array {
    return QueryMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketsResponse): QueryMarketsResponseProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.QueryMarketsResponse",
      value: QueryMarketsResponse.encode(message).finish()
    };
  }
};
function createBasePostedPriceResponse(): PostedPriceResponse {
  return {
    marketId: "",
    oracleAddress: "",
    price: "",
    expiry: Timestamp.fromPartial({})
  };
}
export const PostedPriceResponse = {
  typeUrl: "/kava.pricefeed.v1beta1.PostedPriceResponse",
  encode(message: PostedPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(18).string(message.oracleAddress);
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(message.expiry, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PostedPriceResponse {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
      price: isSet(object.price) ? String(object.price) : "",
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined
    };
  },
  fromPartial(object: Partial<PostedPriceResponse>): PostedPriceResponse {
    const message = createBasePostedPriceResponse();
    message.marketId = object.marketId ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    message.price = object.price ?? "";
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Timestamp.fromPartial(object.expiry) : undefined;
    return message;
  },
  fromAmino(object: PostedPriceResponseAmino): PostedPriceResponse {
    const message = createBasePostedPriceResponse();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.oracle_address !== undefined && object.oracle_address !== null) {
      message.oracleAddress = object.oracle_address;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = Timestamp.fromAmino(object.expiry);
    }
    return message;
  },
  toAmino(message: PostedPriceResponse): PostedPriceResponseAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.oracle_address = message.oracleAddress;
    obj.price = message.price;
    obj.expiry = message.expiry ? Timestamp.toAmino(message.expiry) : undefined;
    return obj;
  },
  fromAminoMsg(object: PostedPriceResponseAminoMsg): PostedPriceResponse {
    return PostedPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PostedPriceResponseProtoMsg): PostedPriceResponse {
    return PostedPriceResponse.decode(message.value);
  },
  toProto(message: PostedPriceResponse): Uint8Array {
    return PostedPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: PostedPriceResponse): PostedPriceResponseProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.PostedPriceResponse",
      value: PostedPriceResponse.encode(message).finish()
    };
  }
};
function createBaseCurrentPriceResponse(): CurrentPriceResponse {
  return {
    marketId: "",
    price: ""
  };
}
export const CurrentPriceResponse = {
  typeUrl: "/kava.pricefeed.v1beta1.CurrentPriceResponse",
  encode(message: CurrentPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): CurrentPriceResponse {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  fromPartial(object: Partial<CurrentPriceResponse>): CurrentPriceResponse {
    const message = createBaseCurrentPriceResponse();
    message.marketId = object.marketId ?? "";
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: CurrentPriceResponseAmino): CurrentPriceResponse {
    const message = createBaseCurrentPriceResponse();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: CurrentPriceResponse): CurrentPriceResponseAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.price = message.price;
    return obj;
  },
  fromAminoMsg(object: CurrentPriceResponseAminoMsg): CurrentPriceResponse {
    return CurrentPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CurrentPriceResponseProtoMsg): CurrentPriceResponse {
    return CurrentPriceResponse.decode(message.value);
  },
  toProto(message: CurrentPriceResponse): Uint8Array {
    return CurrentPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: CurrentPriceResponse): CurrentPriceResponseProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.CurrentPriceResponse",
      value: CurrentPriceResponse.encode(message).finish()
    };
  }
};
function createBaseMarketResponse(): MarketResponse {
  return {
    marketId: "",
    baseAsset: "",
    quoteAsset: "",
    oracles: [],
    active: false
  };
}
export const MarketResponse = {
  typeUrl: "/kava.pricefeed.v1beta1.MarketResponse",
  encode(message: MarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(34).string(v!);
    }
    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }
    return writer;
  },
  fromJSON(object: any): MarketResponse {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => String(e)) : [],
      active: isSet(object.active) ? Boolean(object.active) : false
    };
  },
  fromPartial(object: Partial<MarketResponse>): MarketResponse {
    const message = createBaseMarketResponse();
    message.marketId = object.marketId ?? "";
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.oracles = object.oracles?.map(e => e) || [];
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: MarketResponseAmino): MarketResponse {
    const message = createBaseMarketResponse();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    message.oracles = object.oracles?.map(e => e) || [];
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: MarketResponse): MarketResponseAmino {
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
  fromAminoMsg(object: MarketResponseAminoMsg): MarketResponse {
    return MarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketResponseProtoMsg): MarketResponse {
    return MarketResponse.decode(message.value);
  },
  toProto(message: MarketResponse): Uint8Array {
    return MarketResponse.encode(message).finish();
  },
  toProtoMsg(message: MarketResponse): MarketResponseProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.MarketResponse",
      value: MarketResponse.encode(message).finish()
    };
  }
};