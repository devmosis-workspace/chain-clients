import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */
export interface QueryBalancesRequest {}
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */
export interface QueryBalancesRequestSDKType {}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */
export interface QueryBalancesResponse {
  /** Balances is the coins available in the safety fund */
  balances: Coin[];
}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */
export interface QueryBalancesResponseSDKType {
  balances: CoinSDKType[];
}
function createBaseQueryBalancesRequest(): QueryBalancesRequest {
  return {};
}
export const QueryBalancesRequest = {
  encode(_: QueryBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryBalancesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBalancesRequest>): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    return message;
  }
};
function createBaseQueryBalancesResponse(): QueryBalancesResponse {
  return {
    balances: []
  };
}
export const QueryBalancesResponse = {
  encode(message: QueryBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBalancesResponse>): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};