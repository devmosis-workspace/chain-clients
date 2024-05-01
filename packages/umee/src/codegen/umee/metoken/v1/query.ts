import { Params, ParamsAmino, ParamsSDKType, Index, IndexAmino, IndexSDKType, IndexPrices, IndexPricesAmino, IndexPricesSDKType } from "./metoken";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { IndexBalances, IndexBalancesAmino, IndexBalancesSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {}
export interface QueryParamsProtoMsg {
  typeUrl: "/umee.metoken.v1.QueryParams";
  value: Uint8Array;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsAmino {}
export interface QueryParamsAminoMsg {
  type: "/umee.metoken.v1.QueryParams";
  value: QueryParamsAmino;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsSDKType {}
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
function createBaseQueryParams(): QueryParams {
  return {};
}
export const QueryParams = {
  typeUrl: "/umee.metoken.v1.QueryParams",
  encode(_: QueryParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParams {
    return {};
  },
  fromPartial(_: Partial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  fromAmino(_: QueryParamsAmino): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  toAmino(_: QueryParams): QueryParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsAminoMsg): QueryParams {
    return QueryParams.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsProtoMsg): QueryParams {
    return QueryParams.decode(message.value);
  },
  toProto(message: QueryParams): Uint8Array {
    return QueryParams.encode(message).finish();
  },
  toProtoMsg(message: QueryParams): QueryParamsProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.QueryParams",
      value: QueryParams.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/umee.metoken.v1.QueryParamsResponse",
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
      typeUrl: "/umee.metoken.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIndexes(): QueryIndexes {
  return {
    metokenDenom: ""
  };
}
export const QueryIndexes = {
  typeUrl: "/umee.metoken.v1.QueryIndexes",
  encode(message: QueryIndexes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metokenDenom !== "") {
      writer.uint32(10).string(message.metokenDenom);
    }
    return writer;
  },
  fromJSON(object: any): QueryIndexes {
    return {
      metokenDenom: isSet(object.metokenDenom) ? String(object.metokenDenom) : ""
    };
  },
  fromPartial(object: Partial<QueryIndexes>): QueryIndexes {
    const message = createBaseQueryIndexes();
    message.metokenDenom = object.metokenDenom ?? "";
    return message;
  },
  fromAmino(object: QueryIndexesAmino): QueryIndexes {
    const message = createBaseQueryIndexes();
    if (object.metoken_denom !== undefined && object.metoken_denom !== null) {
      message.metokenDenom = object.metoken_denom;
    }
    return message;
  },
  toAmino(message: QueryIndexes): QueryIndexesAmino {
    const obj: any = {};
    obj.metoken_denom = message.metokenDenom === "" ? undefined : message.metokenDenom;
    return obj;
  },
  fromAminoMsg(object: QueryIndexesAminoMsg): QueryIndexes {
    return QueryIndexes.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIndexesProtoMsg): QueryIndexes {
    return QueryIndexes.decode(message.value);
  },
  toProto(message: QueryIndexes): Uint8Array {
    return QueryIndexes.encode(message).finish();
  },
  toProtoMsg(message: QueryIndexes): QueryIndexesProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.QueryIndexes",
      value: QueryIndexes.encode(message).finish()
    };
  }
};
function createBaseQueryIndexesResponse(): QueryIndexesResponse {
  return {
    registry: []
  };
}
export const QueryIndexesResponse = {
  typeUrl: "/umee.metoken.v1.QueryIndexesResponse",
  encode(message: QueryIndexesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.registry) {
      Index.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryIndexesResponse {
    return {
      registry: Array.isArray(object?.registry) ? object.registry.map((e: any) => Index.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryIndexesResponse>): QueryIndexesResponse {
    const message = createBaseQueryIndexesResponse();
    message.registry = object.registry?.map(e => Index.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryIndexesResponseAmino): QueryIndexesResponse {
    const message = createBaseQueryIndexesResponse();
    message.registry = object.registry?.map(e => Index.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryIndexesResponse): QueryIndexesResponseAmino {
    const obj: any = {};
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? Index.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    return obj;
  },
  fromAminoMsg(object: QueryIndexesResponseAminoMsg): QueryIndexesResponse {
    return QueryIndexesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIndexesResponseProtoMsg): QueryIndexesResponse {
    return QueryIndexesResponse.decode(message.value);
  },
  toProto(message: QueryIndexesResponse): Uint8Array {
    return QueryIndexesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIndexesResponse): QueryIndexesResponseProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.QueryIndexesResponse",
      value: QueryIndexesResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySwapFee(): QuerySwapFee {
  return {
    asset: "",
    metokenDenom: ""
  };
}
export const QuerySwapFee = {
  typeUrl: "/umee.metoken.v1.QuerySwapFee",
  encode(message: QuerySwapFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.metokenDenom !== "") {
      writer.uint32(18).string(message.metokenDenom);
    }
    return writer;
  },
  fromJSON(object: any): QuerySwapFee {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      metokenDenom: isSet(object.metokenDenom) ? String(object.metokenDenom) : ""
    };
  },
  fromPartial(object: Partial<QuerySwapFee>): QuerySwapFee {
    const message = createBaseQuerySwapFee();
    message.asset = object.asset ?? "";
    message.metokenDenom = object.metokenDenom ?? "";
    return message;
  },
  fromAmino(object: QuerySwapFeeAmino): QuerySwapFee {
    const message = createBaseQuerySwapFee();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.metoken_denom !== undefined && object.metoken_denom !== null) {
      message.metokenDenom = object.metoken_denom;
    }
    return message;
  },
  toAmino(message: QuerySwapFee): QuerySwapFeeAmino {
    const obj: any = {};
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.metoken_denom = message.metokenDenom === "" ? undefined : message.metokenDenom;
    return obj;
  },
  fromAminoMsg(object: QuerySwapFeeAminoMsg): QuerySwapFee {
    return QuerySwapFee.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapFeeProtoMsg): QuerySwapFee {
    return QuerySwapFee.decode(message.value);
  },
  toProto(message: QuerySwapFee): Uint8Array {
    return QuerySwapFee.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapFee): QuerySwapFeeProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.QuerySwapFee",
      value: QuerySwapFee.encode(message).finish()
    };
  }
};
function createBaseQuerySwapFeeResponse(): QuerySwapFeeResponse {
  return {
    asset: Coin.fromPartial({})
  };
}
export const QuerySwapFeeResponse = {
  typeUrl: "/umee.metoken.v1.QuerySwapFeeResponse",
  encode(message: QuerySwapFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySwapFeeResponse {
    return {
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<QuerySwapFeeResponse>): QuerySwapFeeResponse {
    const message = createBaseQuerySwapFeeResponse();
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: QuerySwapFeeResponseAmino): QuerySwapFeeResponse {
    const message = createBaseQuerySwapFeeResponse();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: QuerySwapFeeResponse): QuerySwapFeeResponseAmino {
    const obj: any = {};
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySwapFeeResponseAminoMsg): QuerySwapFeeResponse {
    return QuerySwapFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapFeeResponseProtoMsg): QuerySwapFeeResponse {
    return QuerySwapFeeResponse.decode(message.value);
  },
  toProto(message: QuerySwapFeeResponse): Uint8Array {
    return QuerySwapFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapFeeResponse): QuerySwapFeeResponseProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.QuerySwapFeeResponse",
      value: QuerySwapFeeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRedeemFee(): QueryRedeemFee {
  return {
    metoken: "",
    assetDenom: ""
  };
}
export const QueryRedeemFee = {
  typeUrl: "/umee.metoken.v1.QueryRedeemFee",
  encode(message: QueryRedeemFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metoken !== "") {
      writer.uint32(10).string(message.metoken);
    }
    if (message.assetDenom !== "") {
      writer.uint32(18).string(message.assetDenom);
    }
    return writer;
  },
  fromJSON(object: any): QueryRedeemFee {
    return {
      metoken: isSet(object.metoken) ? String(object.metoken) : "",
      assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : ""
    };
  },
  fromPartial(object: Partial<QueryRedeemFee>): QueryRedeemFee {
    const message = createBaseQueryRedeemFee();
    message.metoken = object.metoken ?? "";
    message.assetDenom = object.assetDenom ?? "";
    return message;
  },
  fromAmino(object: QueryRedeemFeeAmino): QueryRedeemFee {
    const message = createBaseQueryRedeemFee();
    if (object.metoken !== undefined && object.metoken !== null) {
      message.metoken = object.metoken;
    }
    if (object.asset_denom !== undefined && object.asset_denom !== null) {
      message.assetDenom = object.asset_denom;
    }
    return message;
  },
  toAmino(message: QueryRedeemFee): QueryRedeemFeeAmino {
    const obj: any = {};
    obj.metoken = message.metoken === "" ? undefined : message.metoken;
    obj.asset_denom = message.assetDenom === "" ? undefined : message.assetDenom;
    return obj;
  },
  fromAminoMsg(object: QueryRedeemFeeAminoMsg): QueryRedeemFee {
    return QueryRedeemFee.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRedeemFeeProtoMsg): QueryRedeemFee {
    return QueryRedeemFee.decode(message.value);
  },
  toProto(message: QueryRedeemFee): Uint8Array {
    return QueryRedeemFee.encode(message).finish();
  },
  toProtoMsg(message: QueryRedeemFee): QueryRedeemFeeProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.QueryRedeemFee",
      value: QueryRedeemFee.encode(message).finish()
    };
  }
};
function createBaseQueryRedeemFeeResponse(): QueryRedeemFeeResponse {
  return {
    asset: Coin.fromPartial({})
  };
}
export const QueryRedeemFeeResponse = {
  typeUrl: "/umee.metoken.v1.QueryRedeemFeeResponse",
  encode(message: QueryRedeemFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRedeemFeeResponse {
    return {
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<QueryRedeemFeeResponse>): QueryRedeemFeeResponse {
    const message = createBaseQueryRedeemFeeResponse();
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: QueryRedeemFeeResponseAmino): QueryRedeemFeeResponse {
    const message = createBaseQueryRedeemFeeResponse();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: QueryRedeemFeeResponse): QueryRedeemFeeResponseAmino {
    const obj: any = {};
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedeemFeeResponseAminoMsg): QueryRedeemFeeResponse {
    return QueryRedeemFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRedeemFeeResponseProtoMsg): QueryRedeemFeeResponse {
    return QueryRedeemFeeResponse.decode(message.value);
  },
  toProto(message: QueryRedeemFeeResponse): Uint8Array {
    return QueryRedeemFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRedeemFeeResponse): QueryRedeemFeeResponseProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.QueryRedeemFeeResponse",
      value: QueryRedeemFeeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIndexBalances(): QueryIndexBalances {
  return {
    metokenDenom: ""
  };
}
export const QueryIndexBalances = {
  typeUrl: "/umee.metoken.v1.QueryIndexBalances",
  encode(message: QueryIndexBalances, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metokenDenom !== "") {
      writer.uint32(10).string(message.metokenDenom);
    }
    return writer;
  },
  fromJSON(object: any): QueryIndexBalances {
    return {
      metokenDenom: isSet(object.metokenDenom) ? String(object.metokenDenom) : ""
    };
  },
  fromPartial(object: Partial<QueryIndexBalances>): QueryIndexBalances {
    const message = createBaseQueryIndexBalances();
    message.metokenDenom = object.metokenDenom ?? "";
    return message;
  },
  fromAmino(object: QueryIndexBalancesAmino): QueryIndexBalances {
    const message = createBaseQueryIndexBalances();
    if (object.metoken_denom !== undefined && object.metoken_denom !== null) {
      message.metokenDenom = object.metoken_denom;
    }
    return message;
  },
  toAmino(message: QueryIndexBalances): QueryIndexBalancesAmino {
    const obj: any = {};
    obj.metoken_denom = message.metokenDenom === "" ? undefined : message.metokenDenom;
    return obj;
  },
  fromAminoMsg(object: QueryIndexBalancesAminoMsg): QueryIndexBalances {
    return QueryIndexBalances.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIndexBalancesProtoMsg): QueryIndexBalances {
    return QueryIndexBalances.decode(message.value);
  },
  toProto(message: QueryIndexBalances): Uint8Array {
    return QueryIndexBalances.encode(message).finish();
  },
  toProtoMsg(message: QueryIndexBalances): QueryIndexBalancesProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.QueryIndexBalances",
      value: QueryIndexBalances.encode(message).finish()
    };
  }
};
function createBaseQueryIndexBalancesResponse(): QueryIndexBalancesResponse {
  return {
    indexBalances: [],
    prices: []
  };
}
export const QueryIndexBalancesResponse = {
  typeUrl: "/umee.metoken.v1.QueryIndexBalancesResponse",
  encode(message: QueryIndexBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.indexBalances) {
      IndexBalances.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.prices) {
      IndexPrices.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryIndexBalancesResponse {
    return {
      indexBalances: Array.isArray(object?.indexBalances) ? object.indexBalances.map((e: any) => IndexBalances.fromJSON(e)) : [],
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => IndexPrices.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryIndexBalancesResponse>): QueryIndexBalancesResponse {
    const message = createBaseQueryIndexBalancesResponse();
    message.indexBalances = object.indexBalances?.map(e => IndexBalances.fromPartial(e)) || [];
    message.prices = object.prices?.map(e => IndexPrices.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryIndexBalancesResponseAmino): QueryIndexBalancesResponse {
    const message = createBaseQueryIndexBalancesResponse();
    message.indexBalances = object.index_balances?.map(e => IndexBalances.fromAmino(e)) || [];
    message.prices = object.prices?.map(e => IndexPrices.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryIndexBalancesResponse): QueryIndexBalancesResponseAmino {
    const obj: any = {};
    if (message.indexBalances) {
      obj.index_balances = message.indexBalances.map(e => e ? IndexBalances.toAmino(e) : undefined);
    } else {
      obj.index_balances = message.indexBalances;
    }
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? IndexPrices.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    return obj;
  },
  fromAminoMsg(object: QueryIndexBalancesResponseAminoMsg): QueryIndexBalancesResponse {
    return QueryIndexBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIndexBalancesResponseProtoMsg): QueryIndexBalancesResponse {
    return QueryIndexBalancesResponse.decode(message.value);
  },
  toProto(message: QueryIndexBalancesResponse): Uint8Array {
    return QueryIndexBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIndexBalancesResponse): QueryIndexBalancesResponseProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.QueryIndexBalancesResponse",
      value: QueryIndexBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIndexPrices(): QueryIndexPrices {
  return {
    metokenDenom: ""
  };
}
export const QueryIndexPrices = {
  typeUrl: "/umee.metoken.v1.QueryIndexPrices",
  encode(message: QueryIndexPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metokenDenom !== "") {
      writer.uint32(10).string(message.metokenDenom);
    }
    return writer;
  },
  fromJSON(object: any): QueryIndexPrices {
    return {
      metokenDenom: isSet(object.metokenDenom) ? String(object.metokenDenom) : ""
    };
  },
  fromPartial(object: Partial<QueryIndexPrices>): QueryIndexPrices {
    const message = createBaseQueryIndexPrices();
    message.metokenDenom = object.metokenDenom ?? "";
    return message;
  },
  fromAmino(object: QueryIndexPricesAmino): QueryIndexPrices {
    const message = createBaseQueryIndexPrices();
    if (object.metoken_denom !== undefined && object.metoken_denom !== null) {
      message.metokenDenom = object.metoken_denom;
    }
    return message;
  },
  toAmino(message: QueryIndexPrices): QueryIndexPricesAmino {
    const obj: any = {};
    obj.metoken_denom = message.metokenDenom === "" ? undefined : message.metokenDenom;
    return obj;
  },
  fromAminoMsg(object: QueryIndexPricesAminoMsg): QueryIndexPrices {
    return QueryIndexPrices.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIndexPricesProtoMsg): QueryIndexPrices {
    return QueryIndexPrices.decode(message.value);
  },
  toProto(message: QueryIndexPrices): Uint8Array {
    return QueryIndexPrices.encode(message).finish();
  },
  toProtoMsg(message: QueryIndexPrices): QueryIndexPricesProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.QueryIndexPrices",
      value: QueryIndexPrices.encode(message).finish()
    };
  }
};
function createBaseQueryIndexPricesResponse(): QueryIndexPricesResponse {
  return {
    prices: []
  };
}
export const QueryIndexPricesResponse = {
  typeUrl: "/umee.metoken.v1.QueryIndexPricesResponse",
  encode(message: QueryIndexPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      IndexPrices.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryIndexPricesResponse {
    return {
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => IndexPrices.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryIndexPricesResponse>): QueryIndexPricesResponse {
    const message = createBaseQueryIndexPricesResponse();
    message.prices = object.prices?.map(e => IndexPrices.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryIndexPricesResponseAmino): QueryIndexPricesResponse {
    const message = createBaseQueryIndexPricesResponse();
    message.prices = object.prices?.map(e => IndexPrices.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryIndexPricesResponse): QueryIndexPricesResponseAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? IndexPrices.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    return obj;
  },
  fromAminoMsg(object: QueryIndexPricesResponseAminoMsg): QueryIndexPricesResponse {
    return QueryIndexPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIndexPricesResponseProtoMsg): QueryIndexPricesResponse {
    return QueryIndexPricesResponse.decode(message.value);
  },
  toProto(message: QueryIndexPricesResponse): Uint8Array {
    return QueryIndexPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIndexPricesResponse): QueryIndexPricesResponseProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.QueryIndexPricesResponse",
      value: QueryIndexPricesResponse.encode(message).finish()
    };
  }
};