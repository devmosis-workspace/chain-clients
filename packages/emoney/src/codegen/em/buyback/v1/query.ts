import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface QueryBalanceRequest {}
export interface QueryBalanceRequestSDKType {}
export interface QueryBalanceResponse {
  balance: Coin[];
}
export interface QueryBalanceResponseSDKType {
  balance: CoinSDKType[];
}
export interface QueryBuybackTimeRequest {}
export interface QueryBuybackTimeRequestSDKType {}
export interface QueryBuybackTimeResponse {
  lastRun?: Timestamp;
  nextRun?: Timestamp;
}
export interface QueryBuybackTimeResponseSDKType {
  last_run?: TimestampSDKType;
  next_run?: TimestampSDKType;
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
    balance: []
  };
}
export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBalanceResponse {
    return {
      balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryBuybackTimeRequest(): QueryBuybackTimeRequest {
  return {};
}
export const QueryBuybackTimeRequest = {
  encode(_: QueryBuybackTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryBuybackTimeRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBuybackTimeRequest>): QueryBuybackTimeRequest {
    const message = createBaseQueryBuybackTimeRequest();
    return message;
  }
};
function createBaseQueryBuybackTimeResponse(): QueryBuybackTimeResponse {
  return {
    lastRun: undefined,
    nextRun: undefined
  };
}
export const QueryBuybackTimeResponse = {
  encode(message: QueryBuybackTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastRun !== undefined) {
      Timestamp.encode(message.lastRun, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextRun !== undefined) {
      Timestamp.encode(message.nextRun, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBuybackTimeResponse {
    return {
      lastRun: isSet(object.lastRun) ? fromJsonTimestamp(object.lastRun) : undefined,
      nextRun: isSet(object.nextRun) ? fromJsonTimestamp(object.nextRun) : undefined
    };
  },
  fromPartial(object: Partial<QueryBuybackTimeResponse>): QueryBuybackTimeResponse {
    const message = createBaseQueryBuybackTimeResponse();
    message.lastRun = object.lastRun !== undefined && object.lastRun !== null ? Timestamp.fromPartial(object.lastRun) : undefined;
    message.nextRun = object.nextRun !== undefined && object.nextRun !== null ? Timestamp.fromPartial(object.nextRun) : undefined;
    return message;
  }
};