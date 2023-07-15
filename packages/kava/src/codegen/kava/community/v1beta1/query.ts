import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryBalanceRequest defines the request type for querying x/community balance. */
export interface QueryBalanceRequest {}
/** QueryBalanceRequest defines the request type for querying x/community balance. */
export interface QueryBalanceRequestSDKType {}
/** QueryBalanceResponse defines the response type for querying x/community balance. */
export interface QueryBalanceResponse {
  coins: Coin[];
}
/** QueryBalanceResponse defines the response type for querying x/community balance. */
export interface QueryBalanceResponseSDKType {
  coins: CoinSDKType[];
}
/** QueryTotalBalanceRequest defines the request type for querying total community pool balance. */
export interface QueryTotalBalanceRequest {}
/** QueryTotalBalanceRequest defines the request type for querying total community pool balance. */
export interface QueryTotalBalanceRequestSDKType {}
/**
 * QueryTotalBalanceResponse defines the response type for querying total
 * community pool balance. This matches the x/distribution CommunityPool query response.
 */
export interface QueryTotalBalanceResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}
/**
 * QueryTotalBalanceResponse defines the response type for querying total
 * community pool balance. This matches the x/distribution CommunityPool query response.
 */
export interface QueryTotalBalanceResponseSDKType {
  pool: DecCoinSDKType[];
}
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {};
}
export const QueryBalanceRequest = {
  encode(_: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryBalanceRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    return message;
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    coins: []
  };
}
export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBalanceResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTotalBalanceRequest(): QueryTotalBalanceRequest {
  return {};
}
export const QueryTotalBalanceRequest = {
  encode(_: QueryTotalBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryTotalBalanceRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTotalBalanceRequest>): QueryTotalBalanceRequest {
    const message = createBaseQueryTotalBalanceRequest();
    return message;
  }
};
function createBaseQueryTotalBalanceResponse(): QueryTotalBalanceResponse {
  return {
    pool: []
  };
}
export const QueryTotalBalanceResponse = {
  encode(message: QueryTotalBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalBalanceResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalBalanceResponse>): QueryTotalBalanceResponse {
    const message = createBaseQueryTotalBalanceResponse();
    message.pool = object.pool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }
};