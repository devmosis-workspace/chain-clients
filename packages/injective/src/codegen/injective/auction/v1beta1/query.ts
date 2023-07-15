import { Params, ParamsSDKType } from "./auction";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC
 * method.
 */
export interface QueryAuctionParamsRequest {}
/**
 * QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC
 * method.
 */
export interface QueryAuctionParamsRequestSDKType {}
/**
 * QueryAuctionParamsRequest is the response type for the Query/AuctionParams
 * RPC method.
 */
export interface QueryAuctionParamsResponse {
  params?: Params;
}
/**
 * QueryAuctionParamsRequest is the response type for the Query/AuctionParams
 * RPC method.
 */
export interface QueryAuctionParamsResponseSDKType {
  params?: ParamsSDKType;
}
/**
 * QueryCurrentAuctionBasketRequest is the request type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketRequest {}
/**
 * QueryCurrentAuctionBasketRequest is the request type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketRequestSDKType {}
/**
 * QueryCurrentAuctionBasketResponse is the response type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketResponse {
  /** amount describes the amount put on auction */
  amount: Coin[];
  /** auctionRound describes current auction round */
  auctionRound: Long;
  /** auctionClosingTime describes auction close time for the round */
  auctionClosingTime: Long;
  /** highestBidder describes highest bidder on current round */
  highestBidder: string;
  /** highestBidAmount describes highest bid amount on current round */
  highestBidAmount: string;
}
/**
 * QueryCurrentAuctionBasketResponse is the response type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketResponseSDKType {
  amount: CoinSDKType[];
  auctionRound: Long;
  auctionClosingTime: Long;
  highestBidder: string;
  highestBidAmount: string;
}
/**
 * QueryModuleStateRequest is the request type for the Query/AuctionModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {}
/**
 * QueryModuleStateRequest is the request type for the Query/AuctionModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestSDKType {}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/AuctionModuleState RPC method.
 */
export interface QueryModuleStateResponse {
  /**
   * QueryModuleStateResponse is the response type for the
   * Query/AuctionModuleState RPC method.
   */
  state?: GenesisState;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/AuctionModuleState RPC method.
 */
export interface QueryModuleStateResponseSDKType {
  state?: GenesisStateSDKType;
}
function createBaseQueryAuctionParamsRequest(): QueryAuctionParamsRequest {
  return {};
}
export const QueryAuctionParamsRequest = {
  encode(_: QueryAuctionParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAuctionParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAuctionParamsRequest>): QueryAuctionParamsRequest {
    const message = createBaseQueryAuctionParamsRequest();
    return message;
  }
};
function createBaseQueryAuctionParamsResponse(): QueryAuctionParamsResponse {
  return {
    params: undefined
  };
}
export const QueryAuctionParamsResponse = {
  encode(message: QueryAuctionParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuctionParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryAuctionParamsResponse>): QueryAuctionParamsResponse {
    const message = createBaseQueryAuctionParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryCurrentAuctionBasketRequest(): QueryCurrentAuctionBasketRequest {
  return {};
}
export const QueryCurrentAuctionBasketRequest = {
  encode(_: QueryCurrentAuctionBasketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryCurrentAuctionBasketRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCurrentAuctionBasketRequest>): QueryCurrentAuctionBasketRequest {
    const message = createBaseQueryCurrentAuctionBasketRequest();
    return message;
  }
};
function createBaseQueryCurrentAuctionBasketResponse(): QueryCurrentAuctionBasketResponse {
  return {
    amount: [],
    auctionRound: Long.UZERO,
    auctionClosingTime: Long.ZERO,
    highestBidder: "",
    highestBidAmount: ""
  };
}
export const QueryCurrentAuctionBasketResponse = {
  encode(message: QueryCurrentAuctionBasketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.auctionRound.isZero()) {
      writer.uint32(16).uint64(message.auctionRound);
    }
    if (!message.auctionClosingTime.isZero()) {
      writer.uint32(24).int64(message.auctionClosingTime);
    }
    if (message.highestBidder !== "") {
      writer.uint32(34).string(message.highestBidder);
    }
    if (message.highestBidAmount !== "") {
      writer.uint32(42).string(message.highestBidAmount);
    }
    return writer;
  },
  fromJSON(object: any): QueryCurrentAuctionBasketResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      auctionRound: isSet(object.auctionRound) ? Long.fromValue(object.auctionRound) : Long.UZERO,
      auctionClosingTime: isSet(object.auctionClosingTime) ? Long.fromValue(object.auctionClosingTime) : Long.ZERO,
      highestBidder: isSet(object.highestBidder) ? String(object.highestBidder) : "",
      highestBidAmount: isSet(object.highestBidAmount) ? String(object.highestBidAmount) : ""
    };
  },
  fromPartial(object: Partial<QueryCurrentAuctionBasketResponse>): QueryCurrentAuctionBasketResponse {
    const message = createBaseQueryCurrentAuctionBasketResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? Long.fromValue(object.auctionRound) : Long.UZERO;
    message.auctionClosingTime = object.auctionClosingTime !== undefined && object.auctionClosingTime !== null ? Long.fromValue(object.auctionClosingTime) : Long.ZERO;
    message.highestBidder = object.highestBidder ?? "";
    message.highestBidAmount = object.highestBidAmount ?? "";
    return message;
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  encode(_: QueryModuleStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryModuleStateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  encode(message: QueryModuleStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryModuleStateResponse {
    return {
      state: isSet(object.state) ? GenesisState.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  }
};