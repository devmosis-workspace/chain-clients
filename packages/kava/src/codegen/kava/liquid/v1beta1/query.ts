import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequest {
  /** delegator is the address of the account to query */
  delegator: string;
}
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequestSDKType {
  delegator: string;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponse {
  /** vested is the amount of all delegated coins that have vested (ie not locked) */
  vested?: Coin;
  /** vesting is the amount of all delegated coins that are still vesting (ie locked) */
  vesting?: Coin;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponseSDKType {
  vested?: CoinSDKType;
  vesting?: CoinSDKType;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequest {}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestSDKType {}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponse {
  /** Height is the block height at which these totals apply */
  height: Long;
  /** Result is a list of coins supplied to liquid */
  result: Coin[];
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseSDKType {
  height: Long;
  result: CoinSDKType[];
}
function createBaseQueryDelegatedBalanceRequest(): QueryDelegatedBalanceRequest {
  return {
    delegator: ""
  };
}
export const QueryDelegatedBalanceRequest = {
  encode(message: QueryDelegatedBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatedBalanceRequest {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegatedBalanceRequest>): QueryDelegatedBalanceRequest {
    const message = createBaseQueryDelegatedBalanceRequest();
    message.delegator = object.delegator ?? "";
    return message;
  }
};
function createBaseQueryDelegatedBalanceResponse(): QueryDelegatedBalanceResponse {
  return {
    vested: undefined,
    vesting: undefined
  };
}
export const QueryDelegatedBalanceResponse = {
  encode(message: QueryDelegatedBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vested !== undefined) {
      Coin.encode(message.vested, writer.uint32(10).fork()).ldelim();
    }
    if (message.vesting !== undefined) {
      Coin.encode(message.vesting, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatedBalanceResponse {
    return {
      vested: isSet(object.vested) ? Coin.fromJSON(object.vested) : undefined,
      vesting: isSet(object.vesting) ? Coin.fromJSON(object.vesting) : undefined
    };
  },
  fromPartial(object: Partial<QueryDelegatedBalanceResponse>): QueryDelegatedBalanceResponse {
    const message = createBaseQueryDelegatedBalanceResponse();
    message.vested = object.vested !== undefined && object.vested !== null ? Coin.fromPartial(object.vested) : undefined;
    message.vesting = object.vesting !== undefined && object.vesting !== null ? Coin.fromPartial(object.vesting) : undefined;
    return message;
  }
};
function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {};
}
export const QueryTotalSupplyRequest = {
  encode(_: QueryTotalSupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryTotalSupplyRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  }
};
function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    height: Long.ZERO,
    result: []
  };
}
export const QueryTotalSupplyResponse = {
  encode(message: QueryTotalSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    for (const v of message.result) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalSupplyResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      result: Array.isArray(object?.result) ? object.result.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.result = object.result?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};