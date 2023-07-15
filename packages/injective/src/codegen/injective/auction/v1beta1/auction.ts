import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
  /** auction_period_duration defines the auction period duration */
  auctionPeriod: Long;
  /** min_next_bid_increment_rate defines the minimum increment rate for new bids */
  minNextBidIncrementRate: string;
}
export interface ParamsSDKType {
  auction_period: Long;
  min_next_bid_increment_rate: string;
}
export interface Bid {
  bidder: string;
  amount: string;
}
export interface BidSDKType {
  bidder: string;
  amount: string;
}
export interface EventBid {
  /** bidder describes the address of bidder */
  bidder: string;
  /** amount describes the amount the bidder put on the auction */
  amount: string;
  /** round defines the round number of auction */
  round: Long;
}
export interface EventBidSDKType {
  bidder: string;
  amount: string;
  round: Long;
}
export interface EventAuctionResult {
  /** winner describes the address of the winner */
  winner: string;
  /** amount describes the amount the winner get from the auction */
  amount: string;
  /** round defines the round number of auction */
  round: Long;
}
export interface EventAuctionResultSDKType {
  winner: string;
  amount: string;
  round: Long;
}
export interface EventAuctionStart {
  /** round defines the round number of auction */
  round: Long;
  /** ending_timestamp describes auction end time */
  endingTimestamp: Long;
  /**
   * new_basket describes auction module balance at the time of new auction
   * start
   */
  newBasket: Coin[];
}
export interface EventAuctionStartSDKType {
  round: Long;
  ending_timestamp: Long;
  new_basket: CoinSDKType[];
}
function createBaseParams(): Params {
  return {
    auctionPeriod: Long.ZERO,
    minNextBidIncrementRate: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionPeriod.isZero()) {
      writer.uint32(8).int64(message.auctionPeriod);
    }
    if (message.minNextBidIncrementRate !== "") {
      writer.uint32(18).string(message.minNextBidIncrementRate);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      auctionPeriod: isSet(object.auctionPeriod) ? Long.fromValue(object.auctionPeriod) : Long.ZERO,
      minNextBidIncrementRate: isSet(object.minNextBidIncrementRate) ? String(object.minNextBidIncrementRate) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.auctionPeriod = object.auctionPeriod !== undefined && object.auctionPeriod !== null ? Long.fromValue(object.auctionPeriod) : Long.ZERO;
    message.minNextBidIncrementRate = object.minNextBidIncrementRate ?? "";
    return message;
  }
};
function createBaseBid(): Bid {
  return {
    bidder: "",
    amount: ""
  };
}
export const Bid = {
  encode(message: Bid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): Bid {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<Bid>): Bid {
    const message = createBaseBid();
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseEventBid(): EventBid {
  return {
    bidder: "",
    amount: "",
    round: Long.UZERO
  };
}
export const EventBid = {
  encode(message: EventBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (!message.round.isZero()) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  fromJSON(object: any): EventBid {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventBid>): EventBid {
    const message = createBaseEventBid();
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    return message;
  }
};
function createBaseEventAuctionResult(): EventAuctionResult {
  return {
    winner: "",
    amount: "",
    round: Long.UZERO
  };
}
export const EventAuctionResult = {
  encode(message: EventAuctionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.winner !== "") {
      writer.uint32(10).string(message.winner);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (!message.round.isZero()) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  fromJSON(object: any): EventAuctionResult {
    return {
      winner: isSet(object.winner) ? String(object.winner) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventAuctionResult>): EventAuctionResult {
    const message = createBaseEventAuctionResult();
    message.winner = object.winner ?? "";
    message.amount = object.amount ?? "";
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    return message;
  }
};
function createBaseEventAuctionStart(): EventAuctionStart {
  return {
    round: Long.UZERO,
    endingTimestamp: Long.ZERO,
    newBasket: []
  };
}
export const EventAuctionStart = {
  encode(message: EventAuctionStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.round.isZero()) {
      writer.uint32(8).uint64(message.round);
    }
    if (!message.endingTimestamp.isZero()) {
      writer.uint32(16).int64(message.endingTimestamp);
    }
    for (const v of message.newBasket) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventAuctionStart {
    return {
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.UZERO,
      endingTimestamp: isSet(object.endingTimestamp) ? Long.fromValue(object.endingTimestamp) : Long.ZERO,
      newBasket: Array.isArray(object?.newBasket) ? object.newBasket.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventAuctionStart>): EventAuctionStart {
    const message = createBaseEventAuctionStart();
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.endingTimestamp = object.endingTimestamp !== undefined && object.endingTimestamp !== null ? Long.fromValue(object.endingTimestamp) : Long.ZERO;
    message.newBasket = object.newBasket?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};