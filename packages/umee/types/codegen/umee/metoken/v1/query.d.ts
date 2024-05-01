import { Params, ParamsAmino, ParamsSDKType, Index, IndexAmino, IndexSDKType, IndexPrices, IndexPricesAmino, IndexPricesSDKType } from "./metoken";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { IndexBalances, IndexBalancesAmino, IndexBalancesSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {
}
export interface QueryParamsProtoMsg {
    typeUrl: "/umee.metoken.v1.QueryParams";
    value: Uint8Array;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsAmino {
}
export interface QueryParamsAminoMsg {
    type: "/umee.metoken.v1.QueryParams";
    value: QueryParamsAmino;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsSDKType {
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/umee.metoken.v1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/umee.metoken.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryIndexes defines the request structure for the Indexes gRPC service handler.
 * metoken_denom param is optional, if it is not informed the query will return all the Indexes.
 */
export interface QueryIndexes {
    metokenDenom: string;
}
export interface QueryIndexesProtoMsg {
    typeUrl: "/umee.metoken.v1.QueryIndexes";
    value: Uint8Array;
}
/**
 * QueryIndexes defines the request structure for the Indexes gRPC service handler.
 * metoken_denom param is optional, if it is not informed the query will return all the Indexes.
 */
export interface QueryIndexesAmino {
    metoken_denom?: string;
}
export interface QueryIndexesAminoMsg {
    type: "/umee.metoken.v1.QueryIndexes";
    value: QueryIndexesAmino;
}
/**
 * QueryIndexes defines the request structure for the Indexes gRPC service handler.
 * metoken_denom param is optional, if it is not informed the query will return all the Indexes.
 */
export interface QueryIndexesSDKType {
    metoken_denom: string;
}
/** QueryIndexesResponse defines the response structure for the Indexes gRPC service handler. */
export interface QueryIndexesResponse {
    registry: Index[];
}
export interface QueryIndexesResponseProtoMsg {
    typeUrl: "/umee.metoken.v1.QueryIndexesResponse";
    value: Uint8Array;
}
/** QueryIndexesResponse defines the response structure for the Indexes gRPC service handler. */
export interface QueryIndexesResponseAmino {
    registry?: IndexAmino[];
}
export interface QueryIndexesResponseAminoMsg {
    type: "/umee.metoken.v1.QueryIndexesResponse";
    value: QueryIndexesResponseAmino;
}
/** QueryIndexesResponse defines the response structure for the Indexes gRPC service handler. */
export interface QueryIndexesResponseSDKType {
    registry: IndexSDKType[];
}
/** QuerySwapFee defines the request structure for the SwapFee gRPC service handler. */
export interface QuerySwapFee {
    asset: string;
    metokenDenom: string;
}
export interface QuerySwapFeeProtoMsg {
    typeUrl: "/umee.metoken.v1.QuerySwapFee";
    value: Uint8Array;
}
/** QuerySwapFee defines the request structure for the SwapFee gRPC service handler. */
export interface QuerySwapFeeAmino {
    asset?: string;
    metoken_denom?: string;
}
export interface QuerySwapFeeAminoMsg {
    type: "/umee.metoken.v1.QuerySwapFee";
    value: QuerySwapFeeAmino;
}
/** QuerySwapFee defines the request structure for the SwapFee gRPC service handler. */
export interface QuerySwapFeeSDKType {
    asset: string;
    metoken_denom: string;
}
/** QuerySwapFeeResponse defines the response structure for the SwapFee gRPC service handler. */
export interface QuerySwapFeeResponse {
    asset: Coin;
}
export interface QuerySwapFeeResponseProtoMsg {
    typeUrl: "/umee.metoken.v1.QuerySwapFeeResponse";
    value: Uint8Array;
}
/** QuerySwapFeeResponse defines the response structure for the SwapFee gRPC service handler. */
export interface QuerySwapFeeResponseAmino {
    asset?: CoinAmino;
}
export interface QuerySwapFeeResponseAminoMsg {
    type: "/umee.metoken.v1.QuerySwapFeeResponse";
    value: QuerySwapFeeResponseAmino;
}
/** QuerySwapFeeResponse defines the response structure for the SwapFee gRPC service handler. */
export interface QuerySwapFeeResponseSDKType {
    asset: CoinSDKType;
}
/** QueryRedeemFee defines the request structure for the RedeemFee gRPC service handler. */
export interface QueryRedeemFee {
    metoken: string;
    assetDenom: string;
}
export interface QueryRedeemFeeProtoMsg {
    typeUrl: "/umee.metoken.v1.QueryRedeemFee";
    value: Uint8Array;
}
/** QueryRedeemFee defines the request structure for the RedeemFee gRPC service handler. */
export interface QueryRedeemFeeAmino {
    metoken?: string;
    asset_denom?: string;
}
export interface QueryRedeemFeeAminoMsg {
    type: "/umee.metoken.v1.QueryRedeemFee";
    value: QueryRedeemFeeAmino;
}
/** QueryRedeemFee defines the request structure for the RedeemFee gRPC service handler. */
export interface QueryRedeemFeeSDKType {
    metoken: string;
    asset_denom: string;
}
/** QueryRedeemFeeResponse defines the response structure for the RedeemFee gRPC service handler. */
export interface QueryRedeemFeeResponse {
    asset: Coin;
}
export interface QueryRedeemFeeResponseProtoMsg {
    typeUrl: "/umee.metoken.v1.QueryRedeemFeeResponse";
    value: Uint8Array;
}
/** QueryRedeemFeeResponse defines the response structure for the RedeemFee gRPC service handler. */
export interface QueryRedeemFeeResponseAmino {
    asset?: CoinAmino;
}
export interface QueryRedeemFeeResponseAminoMsg {
    type: "/umee.metoken.v1.QueryRedeemFeeResponse";
    value: QueryRedeemFeeResponseAmino;
}
/** QueryRedeemFeeResponse defines the response structure for the RedeemFee gRPC service handler. */
export interface QueryRedeemFeeResponseSDKType {
    asset: CoinSDKType;
}
/**
 * QueryIndexBalances defines the request structure for the IndexBalances gRPC service handler.
 * metoken_denom param is optional, if it is not informed the query will return all the Indexes.
 */
export interface QueryIndexBalances {
    metokenDenom: string;
}
export interface QueryIndexBalancesProtoMsg {
    typeUrl: "/umee.metoken.v1.QueryIndexBalances";
    value: Uint8Array;
}
/**
 * QueryIndexBalances defines the request structure for the IndexBalances gRPC service handler.
 * metoken_denom param is optional, if it is not informed the query will return all the Indexes.
 */
export interface QueryIndexBalancesAmino {
    metoken_denom?: string;
}
export interface QueryIndexBalancesAminoMsg {
    type: "/umee.metoken.v1.QueryIndexBalances";
    value: QueryIndexBalancesAmino;
}
/**
 * QueryIndexBalances defines the request structure for the IndexBalances gRPC service handler.
 * metoken_denom param is optional, if it is not informed the query will return all the Indexes.
 */
export interface QueryIndexBalancesSDKType {
    metoken_denom: string;
}
/** QueryIndexBalanceResponse defines the response structure for the IndexBalances gRPC service handler. */
export interface QueryIndexBalancesResponse {
    indexBalances: IndexBalances[];
    prices: IndexPrices[];
}
export interface QueryIndexBalancesResponseProtoMsg {
    typeUrl: "/umee.metoken.v1.QueryIndexBalancesResponse";
    value: Uint8Array;
}
/** QueryIndexBalanceResponse defines the response structure for the IndexBalances gRPC service handler. */
export interface QueryIndexBalancesResponseAmino {
    index_balances?: IndexBalancesAmino[];
    prices?: IndexPricesAmino[];
}
export interface QueryIndexBalancesResponseAminoMsg {
    type: "/umee.metoken.v1.QueryIndexBalancesResponse";
    value: QueryIndexBalancesResponseAmino;
}
/** QueryIndexBalanceResponse defines the response structure for the IndexBalances gRPC service handler. */
export interface QueryIndexBalancesResponseSDKType {
    index_balances: IndexBalancesSDKType[];
    prices: IndexPricesSDKType[];
}
/**
 * QueryIndexPrices defines the request structure for the IndexPrice gRPC service handler.
 * metoken_denom param is optional, if it is not informed the query will return all the Index's prices.
 */
export interface QueryIndexPrices {
    metokenDenom: string;
}
export interface QueryIndexPricesProtoMsg {
    typeUrl: "/umee.metoken.v1.QueryIndexPrices";
    value: Uint8Array;
}
/**
 * QueryIndexPrices defines the request structure for the IndexPrice gRPC service handler.
 * metoken_denom param is optional, if it is not informed the query will return all the Index's prices.
 */
export interface QueryIndexPricesAmino {
    metoken_denom?: string;
}
export interface QueryIndexPricesAminoMsg {
    type: "/umee.metoken.v1.QueryIndexPrices";
    value: QueryIndexPricesAmino;
}
/**
 * QueryIndexPrices defines the request structure for the IndexPrice gRPC service handler.
 * metoken_denom param is optional, if it is not informed the query will return all the Index's prices.
 */
export interface QueryIndexPricesSDKType {
    metoken_denom: string;
}
/** QueryIndexPriceResponses defines the response structure for the IndexPrice gRPC service handler. */
export interface QueryIndexPricesResponse {
    prices: IndexPrices[];
}
export interface QueryIndexPricesResponseProtoMsg {
    typeUrl: "/umee.metoken.v1.QueryIndexPricesResponse";
    value: Uint8Array;
}
/** QueryIndexPriceResponses defines the response structure for the IndexPrice gRPC service handler. */
export interface QueryIndexPricesResponseAmino {
    prices?: IndexPricesAmino[];
}
export interface QueryIndexPricesResponseAminoMsg {
    type: "/umee.metoken.v1.QueryIndexPricesResponse";
    value: QueryIndexPricesResponseAmino;
}
/** QueryIndexPriceResponses defines the response structure for the IndexPrice gRPC service handler. */
export interface QueryIndexPricesResponseSDKType {
    prices: IndexPricesSDKType[];
}
export declare const QueryParams: {
    typeUrl: string;
    encode(_: QueryParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParams;
    fromPartial(_: Partial<QueryParams>): QueryParams;
    fromAmino(_: QueryParamsAmino): QueryParams;
    toAmino(_: QueryParams): QueryParamsAmino;
    fromAminoMsg(object: QueryParamsAminoMsg): QueryParams;
    fromProtoMsg(message: QueryParamsProtoMsg): QueryParams;
    toProto(message: QueryParams): Uint8Array;
    toProtoMsg(message: QueryParams): QueryParamsProtoMsg;
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
export declare const QueryIndexes: {
    typeUrl: string;
    encode(message: QueryIndexes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIndexes;
    fromPartial(object: Partial<QueryIndexes>): QueryIndexes;
    fromAmino(object: QueryIndexesAmino): QueryIndexes;
    toAmino(message: QueryIndexes): QueryIndexesAmino;
    fromAminoMsg(object: QueryIndexesAminoMsg): QueryIndexes;
    fromProtoMsg(message: QueryIndexesProtoMsg): QueryIndexes;
    toProto(message: QueryIndexes): Uint8Array;
    toProtoMsg(message: QueryIndexes): QueryIndexesProtoMsg;
};
export declare const QueryIndexesResponse: {
    typeUrl: string;
    encode(message: QueryIndexesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIndexesResponse;
    fromPartial(object: Partial<QueryIndexesResponse>): QueryIndexesResponse;
    fromAmino(object: QueryIndexesResponseAmino): QueryIndexesResponse;
    toAmino(message: QueryIndexesResponse): QueryIndexesResponseAmino;
    fromAminoMsg(object: QueryIndexesResponseAminoMsg): QueryIndexesResponse;
    fromProtoMsg(message: QueryIndexesResponseProtoMsg): QueryIndexesResponse;
    toProto(message: QueryIndexesResponse): Uint8Array;
    toProtoMsg(message: QueryIndexesResponse): QueryIndexesResponseProtoMsg;
};
export declare const QuerySwapFee: {
    typeUrl: string;
    encode(message: QuerySwapFee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapFee;
    fromPartial(object: Partial<QuerySwapFee>): QuerySwapFee;
    fromAmino(object: QuerySwapFeeAmino): QuerySwapFee;
    toAmino(message: QuerySwapFee): QuerySwapFeeAmino;
    fromAminoMsg(object: QuerySwapFeeAminoMsg): QuerySwapFee;
    fromProtoMsg(message: QuerySwapFeeProtoMsg): QuerySwapFee;
    toProto(message: QuerySwapFee): Uint8Array;
    toProtoMsg(message: QuerySwapFee): QuerySwapFeeProtoMsg;
};
export declare const QuerySwapFeeResponse: {
    typeUrl: string;
    encode(message: QuerySwapFeeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySwapFeeResponse;
    fromPartial(object: Partial<QuerySwapFeeResponse>): QuerySwapFeeResponse;
    fromAmino(object: QuerySwapFeeResponseAmino): QuerySwapFeeResponse;
    toAmino(message: QuerySwapFeeResponse): QuerySwapFeeResponseAmino;
    fromAminoMsg(object: QuerySwapFeeResponseAminoMsg): QuerySwapFeeResponse;
    fromProtoMsg(message: QuerySwapFeeResponseProtoMsg): QuerySwapFeeResponse;
    toProto(message: QuerySwapFeeResponse): Uint8Array;
    toProtoMsg(message: QuerySwapFeeResponse): QuerySwapFeeResponseProtoMsg;
};
export declare const QueryRedeemFee: {
    typeUrl: string;
    encode(message: QueryRedeemFee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRedeemFee;
    fromPartial(object: Partial<QueryRedeemFee>): QueryRedeemFee;
    fromAmino(object: QueryRedeemFeeAmino): QueryRedeemFee;
    toAmino(message: QueryRedeemFee): QueryRedeemFeeAmino;
    fromAminoMsg(object: QueryRedeemFeeAminoMsg): QueryRedeemFee;
    fromProtoMsg(message: QueryRedeemFeeProtoMsg): QueryRedeemFee;
    toProto(message: QueryRedeemFee): Uint8Array;
    toProtoMsg(message: QueryRedeemFee): QueryRedeemFeeProtoMsg;
};
export declare const QueryRedeemFeeResponse: {
    typeUrl: string;
    encode(message: QueryRedeemFeeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRedeemFeeResponse;
    fromPartial(object: Partial<QueryRedeemFeeResponse>): QueryRedeemFeeResponse;
    fromAmino(object: QueryRedeemFeeResponseAmino): QueryRedeemFeeResponse;
    toAmino(message: QueryRedeemFeeResponse): QueryRedeemFeeResponseAmino;
    fromAminoMsg(object: QueryRedeemFeeResponseAminoMsg): QueryRedeemFeeResponse;
    fromProtoMsg(message: QueryRedeemFeeResponseProtoMsg): QueryRedeemFeeResponse;
    toProto(message: QueryRedeemFeeResponse): Uint8Array;
    toProtoMsg(message: QueryRedeemFeeResponse): QueryRedeemFeeResponseProtoMsg;
};
export declare const QueryIndexBalances: {
    typeUrl: string;
    encode(message: QueryIndexBalances, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIndexBalances;
    fromPartial(object: Partial<QueryIndexBalances>): QueryIndexBalances;
    fromAmino(object: QueryIndexBalancesAmino): QueryIndexBalances;
    toAmino(message: QueryIndexBalances): QueryIndexBalancesAmino;
    fromAminoMsg(object: QueryIndexBalancesAminoMsg): QueryIndexBalances;
    fromProtoMsg(message: QueryIndexBalancesProtoMsg): QueryIndexBalances;
    toProto(message: QueryIndexBalances): Uint8Array;
    toProtoMsg(message: QueryIndexBalances): QueryIndexBalancesProtoMsg;
};
export declare const QueryIndexBalancesResponse: {
    typeUrl: string;
    encode(message: QueryIndexBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIndexBalancesResponse;
    fromPartial(object: Partial<QueryIndexBalancesResponse>): QueryIndexBalancesResponse;
    fromAmino(object: QueryIndexBalancesResponseAmino): QueryIndexBalancesResponse;
    toAmino(message: QueryIndexBalancesResponse): QueryIndexBalancesResponseAmino;
    fromAminoMsg(object: QueryIndexBalancesResponseAminoMsg): QueryIndexBalancesResponse;
    fromProtoMsg(message: QueryIndexBalancesResponseProtoMsg): QueryIndexBalancesResponse;
    toProto(message: QueryIndexBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryIndexBalancesResponse): QueryIndexBalancesResponseProtoMsg;
};
export declare const QueryIndexPrices: {
    typeUrl: string;
    encode(message: QueryIndexPrices, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIndexPrices;
    fromPartial(object: Partial<QueryIndexPrices>): QueryIndexPrices;
    fromAmino(object: QueryIndexPricesAmino): QueryIndexPrices;
    toAmino(message: QueryIndexPrices): QueryIndexPricesAmino;
    fromAminoMsg(object: QueryIndexPricesAminoMsg): QueryIndexPrices;
    fromProtoMsg(message: QueryIndexPricesProtoMsg): QueryIndexPrices;
    toProto(message: QueryIndexPrices): Uint8Array;
    toProtoMsg(message: QueryIndexPrices): QueryIndexPricesProtoMsg;
};
export declare const QueryIndexPricesResponse: {
    typeUrl: string;
    encode(message: QueryIndexPricesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIndexPricesResponse;
    fromPartial(object: Partial<QueryIndexPricesResponse>): QueryIndexPricesResponse;
    fromAmino(object: QueryIndexPricesResponseAmino): QueryIndexPricesResponse;
    toAmino(message: QueryIndexPricesResponse): QueryIndexPricesResponseAmino;
    fromAminoMsg(object: QueryIndexPricesResponseAminoMsg): QueryIndexPricesResponse;
    fromProtoMsg(message: QueryIndexPricesResponseProtoMsg): QueryIndexPricesResponse;
    toProto(message: QueryIndexPricesResponse): Uint8Array;
    toProtoMsg(message: QueryIndexPricesResponse): QueryIndexPricesResponseProtoMsg;
};
