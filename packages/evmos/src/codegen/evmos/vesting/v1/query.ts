import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequest {
  /** address of the clawback vesting account */
  address: string;
}
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequestSDKType {
  address: string;
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponse {
  /** locked defines the current amount of locked tokens */
  locked: Coin[];
  /** unvested defines the current amount of unvested tokens */
  unvested: Coin[];
  /** vested defines the current amount of vested tokens */
  vested: Coin[];
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponseSDKType {
  locked: CoinSDKType[];
  unvested: CoinSDKType[];
  vested: CoinSDKType[];
}
function createBaseQueryBalancesRequest(): QueryBalancesRequest {
  return {
    address: ""
  };
}
export const QueryBalancesRequest = {
  encode(message: QueryBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryBalancesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryBalancesRequest>): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryBalancesResponse(): QueryBalancesResponse {
  return {
    locked: [],
    unvested: [],
    vested: []
  };
}
export const QueryBalancesResponse = {
  encode(message: QueryBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locked) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unvested) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.vested) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBalancesResponse {
    return {
      locked: Array.isArray(object?.locked) ? object.locked.map((e: any) => Coin.fromJSON(e)) : [],
      unvested: Array.isArray(object?.unvested) ? object.unvested.map((e: any) => Coin.fromJSON(e)) : [],
      vested: Array.isArray(object?.vested) ? object.vested.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBalancesResponse>): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.locked = object.locked?.map(e => Coin.fromPartial(e)) || [];
    message.unvested = object.unvested?.map(e => Coin.fromPartial(e)) || [];
    message.vested = object.vested?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};