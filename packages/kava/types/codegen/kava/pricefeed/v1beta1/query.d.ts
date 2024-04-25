import { Params, ParamsAmino, ParamsSDKType } from "./store";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kava.pricefeed.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kava.pricefeed.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsRequestSDKType {
}
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
export interface QueryPricesRequest {
}
export interface QueryPricesRequestProtoMsg {
    typeUrl: "/kava.pricefeed.v1beta1.QueryPricesRequest";
    value: Uint8Array;
}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */
export interface QueryPricesRequestAmino {
}
export interface QueryPricesRequestAminoMsg {
    type: "/kava.pricefeed.v1beta1.QueryPricesRequest";
    value: QueryPricesRequestAmino;
}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */
export interface QueryPricesRequestSDKType {
}
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
export interface QueryMarketsRequest {
}
export interface QueryMarketsRequestProtoMsg {
    typeUrl: "/kava.pricefeed.v1beta1.QueryMarketsRequest";
    value: Uint8Array;
}
/** QueryMarketsRequest is the request type for the Query/Markets RPC method. */
export interface QueryMarketsRequestAmino {
}
export interface QueryMarketsRequestAminoMsg {
    type: "/kava.pricefeed.v1beta1.QueryMarketsRequest";
    value: QueryMarketsRequestAmino;
}
/** QueryMarketsRequest is the request type for the Query/Markets RPC method. */
export interface QueryMarketsRequestSDKType {
}
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
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryPriceRequest: {
    typeUrl: string;
    encode(message: QueryPriceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPriceRequest;
    fromPartial(object: Partial<QueryPriceRequest>): QueryPriceRequest;
    fromAmino(object: QueryPriceRequestAmino): QueryPriceRequest;
    toAmino(message: QueryPriceRequest): QueryPriceRequestAmino;
    fromAminoMsg(object: QueryPriceRequestAminoMsg): QueryPriceRequest;
    fromProtoMsg(message: QueryPriceRequestProtoMsg): QueryPriceRequest;
    toProto(message: QueryPriceRequest): Uint8Array;
    toProtoMsg(message: QueryPriceRequest): QueryPriceRequestProtoMsg;
};
export declare const QueryPriceResponse: {
    typeUrl: string;
    encode(message: QueryPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPriceResponse;
    fromPartial(object: Partial<QueryPriceResponse>): QueryPriceResponse;
    fromAmino(object: QueryPriceResponseAmino): QueryPriceResponse;
    toAmino(message: QueryPriceResponse): QueryPriceResponseAmino;
    fromAminoMsg(object: QueryPriceResponseAminoMsg): QueryPriceResponse;
    fromProtoMsg(message: QueryPriceResponseProtoMsg): QueryPriceResponse;
    toProto(message: QueryPriceResponse): Uint8Array;
    toProtoMsg(message: QueryPriceResponse): QueryPriceResponseProtoMsg;
};
export declare const QueryPricesRequest: {
    typeUrl: string;
    encode(_: QueryPricesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPricesRequest;
    fromPartial(_: Partial<QueryPricesRequest>): QueryPricesRequest;
    fromAmino(_: QueryPricesRequestAmino): QueryPricesRequest;
    toAmino(_: QueryPricesRequest): QueryPricesRequestAmino;
    fromAminoMsg(object: QueryPricesRequestAminoMsg): QueryPricesRequest;
    fromProtoMsg(message: QueryPricesRequestProtoMsg): QueryPricesRequest;
    toProto(message: QueryPricesRequest): Uint8Array;
    toProtoMsg(message: QueryPricesRequest): QueryPricesRequestProtoMsg;
};
export declare const QueryPricesResponse: {
    typeUrl: string;
    encode(message: QueryPricesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPricesResponse;
    fromPartial(object: Partial<QueryPricesResponse>): QueryPricesResponse;
    fromAmino(object: QueryPricesResponseAmino): QueryPricesResponse;
    toAmino(message: QueryPricesResponse): QueryPricesResponseAmino;
    fromAminoMsg(object: QueryPricesResponseAminoMsg): QueryPricesResponse;
    fromProtoMsg(message: QueryPricesResponseProtoMsg): QueryPricesResponse;
    toProto(message: QueryPricesResponse): Uint8Array;
    toProtoMsg(message: QueryPricesResponse): QueryPricesResponseProtoMsg;
};
export declare const QueryRawPricesRequest: {
    typeUrl: string;
    encode(message: QueryRawPricesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRawPricesRequest;
    fromPartial(object: Partial<QueryRawPricesRequest>): QueryRawPricesRequest;
    fromAmino(object: QueryRawPricesRequestAmino): QueryRawPricesRequest;
    toAmino(message: QueryRawPricesRequest): QueryRawPricesRequestAmino;
    fromAminoMsg(object: QueryRawPricesRequestAminoMsg): QueryRawPricesRequest;
    fromProtoMsg(message: QueryRawPricesRequestProtoMsg): QueryRawPricesRequest;
    toProto(message: QueryRawPricesRequest): Uint8Array;
    toProtoMsg(message: QueryRawPricesRequest): QueryRawPricesRequestProtoMsg;
};
export declare const QueryRawPricesResponse: {
    typeUrl: string;
    encode(message: QueryRawPricesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRawPricesResponse;
    fromPartial(object: Partial<QueryRawPricesResponse>): QueryRawPricesResponse;
    fromAmino(object: QueryRawPricesResponseAmino): QueryRawPricesResponse;
    toAmino(message: QueryRawPricesResponse): QueryRawPricesResponseAmino;
    fromAminoMsg(object: QueryRawPricesResponseAminoMsg): QueryRawPricesResponse;
    fromProtoMsg(message: QueryRawPricesResponseProtoMsg): QueryRawPricesResponse;
    toProto(message: QueryRawPricesResponse): Uint8Array;
    toProtoMsg(message: QueryRawPricesResponse): QueryRawPricesResponseProtoMsg;
};
export declare const QueryOraclesRequest: {
    typeUrl: string;
    encode(message: QueryOraclesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOraclesRequest;
    fromPartial(object: Partial<QueryOraclesRequest>): QueryOraclesRequest;
    fromAmino(object: QueryOraclesRequestAmino): QueryOraclesRequest;
    toAmino(message: QueryOraclesRequest): QueryOraclesRequestAmino;
    fromAminoMsg(object: QueryOraclesRequestAminoMsg): QueryOraclesRequest;
    fromProtoMsg(message: QueryOraclesRequestProtoMsg): QueryOraclesRequest;
    toProto(message: QueryOraclesRequest): Uint8Array;
    toProtoMsg(message: QueryOraclesRequest): QueryOraclesRequestProtoMsg;
};
export declare const QueryOraclesResponse: {
    typeUrl: string;
    encode(message: QueryOraclesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOraclesResponse;
    fromPartial(object: Partial<QueryOraclesResponse>): QueryOraclesResponse;
    fromAmino(object: QueryOraclesResponseAmino): QueryOraclesResponse;
    toAmino(message: QueryOraclesResponse): QueryOraclesResponseAmino;
    fromAminoMsg(object: QueryOraclesResponseAminoMsg): QueryOraclesResponse;
    fromProtoMsg(message: QueryOraclesResponseProtoMsg): QueryOraclesResponse;
    toProto(message: QueryOraclesResponse): Uint8Array;
    toProtoMsg(message: QueryOraclesResponse): QueryOraclesResponseProtoMsg;
};
export declare const QueryMarketsRequest: {
    typeUrl: string;
    encode(_: QueryMarketsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryMarketsRequest;
    fromPartial(_: Partial<QueryMarketsRequest>): QueryMarketsRequest;
    fromAmino(_: QueryMarketsRequestAmino): QueryMarketsRequest;
    toAmino(_: QueryMarketsRequest): QueryMarketsRequestAmino;
    fromAminoMsg(object: QueryMarketsRequestAminoMsg): QueryMarketsRequest;
    fromProtoMsg(message: QueryMarketsRequestProtoMsg): QueryMarketsRequest;
    toProto(message: QueryMarketsRequest): Uint8Array;
    toProtoMsg(message: QueryMarketsRequest): QueryMarketsRequestProtoMsg;
};
export declare const QueryMarketsResponse: {
    typeUrl: string;
    encode(message: QueryMarketsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMarketsResponse;
    fromPartial(object: Partial<QueryMarketsResponse>): QueryMarketsResponse;
    fromAmino(object: QueryMarketsResponseAmino): QueryMarketsResponse;
    toAmino(message: QueryMarketsResponse): QueryMarketsResponseAmino;
    fromAminoMsg(object: QueryMarketsResponseAminoMsg): QueryMarketsResponse;
    fromProtoMsg(message: QueryMarketsResponseProtoMsg): QueryMarketsResponse;
    toProto(message: QueryMarketsResponse): Uint8Array;
    toProtoMsg(message: QueryMarketsResponse): QueryMarketsResponseProtoMsg;
};
export declare const PostedPriceResponse: {
    typeUrl: string;
    encode(message: PostedPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PostedPriceResponse;
    fromPartial(object: Partial<PostedPriceResponse>): PostedPriceResponse;
    fromAmino(object: PostedPriceResponseAmino): PostedPriceResponse;
    toAmino(message: PostedPriceResponse): PostedPriceResponseAmino;
    fromAminoMsg(object: PostedPriceResponseAminoMsg): PostedPriceResponse;
    fromProtoMsg(message: PostedPriceResponseProtoMsg): PostedPriceResponse;
    toProto(message: PostedPriceResponse): Uint8Array;
    toProtoMsg(message: PostedPriceResponse): PostedPriceResponseProtoMsg;
};
export declare const CurrentPriceResponse: {
    typeUrl: string;
    encode(message: CurrentPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CurrentPriceResponse;
    fromPartial(object: Partial<CurrentPriceResponse>): CurrentPriceResponse;
    fromAmino(object: CurrentPriceResponseAmino): CurrentPriceResponse;
    toAmino(message: CurrentPriceResponse): CurrentPriceResponseAmino;
    fromAminoMsg(object: CurrentPriceResponseAminoMsg): CurrentPriceResponse;
    fromProtoMsg(message: CurrentPriceResponseProtoMsg): CurrentPriceResponse;
    toProto(message: CurrentPriceResponse): Uint8Array;
    toProtoMsg(message: CurrentPriceResponse): CurrentPriceResponseProtoMsg;
};
export declare const MarketResponse: {
    typeUrl: string;
    encode(message: MarketResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MarketResponse;
    fromPartial(object: Partial<MarketResponse>): MarketResponse;
    fromAmino(object: MarketResponseAmino): MarketResponse;
    toAmino(message: MarketResponse): MarketResponseAmino;
    fromAminoMsg(object: MarketResponseAminoMsg): MarketResponse;
    fromProtoMsg(message: MarketResponseProtoMsg): MarketResponse;
    toProto(message: MarketResponse): Uint8Array;
    toProtoMsg(message: MarketResponse): MarketResponseProtoMsg;
};
