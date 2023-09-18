import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface Params {
  /** auction_period_duration defines the auction period duration */
  auctionPeriod: bigint;
  /** min_next_bid_increment_rate defines the minimum increment rate for new bids */
  minNextBidIncrementRate: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.auction.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /** auction_period_duration defines the auction period duration */
  auction_period: string;
  /** min_next_bid_increment_rate defines the minimum increment rate for new bids */
  min_next_bid_increment_rate: string;
}
export interface ParamsAminoMsg {
  type: "/injective.auction.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  auction_period: bigint;
  min_next_bid_increment_rate: string;
}
export interface Bid {
  bidder: string;
  amount: string;
}
export interface BidProtoMsg {
  typeUrl: "/injective.auction.v1beta1.Bid";
  value: Uint8Array;
}
export interface BidAmino {
  bidder: string;
  amount: string;
}
export interface BidAminoMsg {
  type: "/injective.auction.v1beta1.Bid";
  value: BidAmino;
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
  round: bigint;
}
export interface EventBidProtoMsg {
  typeUrl: "/injective.auction.v1beta1.EventBid";
  value: Uint8Array;
}
export interface EventBidAmino {
  /** bidder describes the address of bidder */
  bidder: string;
  /** amount describes the amount the bidder put on the auction */
  amount: string;
  /** round defines the round number of auction */
  round: string;
}
export interface EventBidAminoMsg {
  type: "/injective.auction.v1beta1.EventBid";
  value: EventBidAmino;
}
export interface EventBidSDKType {
  bidder: string;
  amount: string;
  round: bigint;
}
export interface EventAuctionResult {
  /** winner describes the address of the winner */
  winner: string;
  /** amount describes the amount the winner get from the auction */
  amount: string;
  /** round defines the round number of auction */
  round: bigint;
}
export interface EventAuctionResultProtoMsg {
  typeUrl: "/injective.auction.v1beta1.EventAuctionResult";
  value: Uint8Array;
}
export interface EventAuctionResultAmino {
  /** winner describes the address of the winner */
  winner: string;
  /** amount describes the amount the winner get from the auction */
  amount: string;
  /** round defines the round number of auction */
  round: string;
}
export interface EventAuctionResultAminoMsg {
  type: "/injective.auction.v1beta1.EventAuctionResult";
  value: EventAuctionResultAmino;
}
export interface EventAuctionResultSDKType {
  winner: string;
  amount: string;
  round: bigint;
}
export interface EventAuctionStart {
  /** round defines the round number of auction */
  round: bigint;
  /** ending_timestamp describes auction end time */
  endingTimestamp: bigint;
  /**
   * new_basket describes auction module balance at the time of new auction
   * start
   */
  newBasket: Coin[];
}
export interface EventAuctionStartProtoMsg {
  typeUrl: "/injective.auction.v1beta1.EventAuctionStart";
  value: Uint8Array;
}
export interface EventAuctionStartAmino {
  /** round defines the round number of auction */
  round: string;
  /** ending_timestamp describes auction end time */
  ending_timestamp: string;
  /**
   * new_basket describes auction module balance at the time of new auction
   * start
   */
  new_basket: CoinAmino[];
}
export interface EventAuctionStartAminoMsg {
  type: "/injective.auction.v1beta1.EventAuctionStart";
  value: EventAuctionStartAmino;
}
export interface EventAuctionStartSDKType {
  round: bigint;
  ending_timestamp: bigint;
  new_basket: CoinSDKType[];
}
function createBaseParams(): Params {
  return {
    auctionPeriod: BigInt(0),
    minNextBidIncrementRate: ""
  };
}
export const Params = {
  typeUrl: "/injective.auction.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionPeriod !== BigInt(0)) {
      writer.uint32(8).int64(message.auctionPeriod);
    }
    if (message.minNextBidIncrementRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.minNextBidIncrementRate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      auctionPeriod: isSet(object.auctionPeriod) ? BigInt(object.auctionPeriod.toString()) : BigInt(0),
      minNextBidIncrementRate: isSet(object.minNextBidIncrementRate) ? String(object.minNextBidIncrementRate) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.auctionPeriod = object.auctionPeriod !== undefined && object.auctionPeriod !== null ? BigInt(object.auctionPeriod.toString()) : BigInt(0);
    message.minNextBidIncrementRate = object.minNextBidIncrementRate ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      auctionPeriod: BigInt(object.auction_period),
      minNextBidIncrementRate: object.min_next_bid_increment_rate
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.auction_period = message.auctionPeriod ? message.auctionPeriod.toString() : undefined;
    obj.min_next_bid_increment_rate = message.minNextBidIncrementRate;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseBid(): Bid {
  return {
    bidder: "",
    amount: ""
  };
}
export const Bid = {
  typeUrl: "/injective.auction.v1beta1.Bid",
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BidAmino): Bid {
    return {
      bidder: object.bidder,
      amount: object.amount
    };
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.bidder = message.bidder;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: BidAminoMsg): Bid {
    return Bid.fromAmino(object.value);
  },
  fromProtoMsg(message: BidProtoMsg): Bid {
    return Bid.decode(message.value);
  },
  toProto(message: Bid): Uint8Array {
    return Bid.encode(message).finish();
  },
  toProtoMsg(message: Bid): BidProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.Bid",
      value: Bid.encode(message).finish()
    };
  }
};
function createBaseEventBid(): EventBid {
  return {
    bidder: "",
    amount: "",
    round: BigInt(0)
  };
}
export const EventBid = {
  typeUrl: "/injective.auction.v1beta1.EventBid",
  encode(message: EventBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  fromJSON(object: any): EventBid {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventBid>): EventBid {
    const message = createBaseEventBid();
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBidAmino): EventBid {
    return {
      bidder: object.bidder,
      amount: object.amount,
      round: BigInt(object.round)
    };
  },
  toAmino(message: EventBid): EventBidAmino {
    const obj: any = {};
    obj.bidder = message.bidder;
    obj.amount = message.amount;
    obj.round = message.round ? message.round.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBidAminoMsg): EventBid {
    return EventBid.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBidProtoMsg): EventBid {
    return EventBid.decode(message.value);
  },
  toProto(message: EventBid): Uint8Array {
    return EventBid.encode(message).finish();
  },
  toProtoMsg(message: EventBid): EventBidProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.EventBid",
      value: EventBid.encode(message).finish()
    };
  }
};
function createBaseEventAuctionResult(): EventAuctionResult {
  return {
    winner: "",
    amount: "",
    round: BigInt(0)
  };
}
export const EventAuctionResult = {
  typeUrl: "/injective.auction.v1beta1.EventAuctionResult",
  encode(message: EventAuctionResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.winner !== "") {
      writer.uint32(10).string(message.winner);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  fromJSON(object: any): EventAuctionResult {
    return {
      winner: isSet(object.winner) ? String(object.winner) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventAuctionResult>): EventAuctionResult {
    const message = createBaseEventAuctionResult();
    message.winner = object.winner ?? "";
    message.amount = object.amount ?? "";
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventAuctionResultAmino): EventAuctionResult {
    return {
      winner: object.winner,
      amount: object.amount,
      round: BigInt(object.round)
    };
  },
  toAmino(message: EventAuctionResult): EventAuctionResultAmino {
    const obj: any = {};
    obj.winner = message.winner;
    obj.amount = message.amount;
    obj.round = message.round ? message.round.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventAuctionResultAminoMsg): EventAuctionResult {
    return EventAuctionResult.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAuctionResultProtoMsg): EventAuctionResult {
    return EventAuctionResult.decode(message.value);
  },
  toProto(message: EventAuctionResult): Uint8Array {
    return EventAuctionResult.encode(message).finish();
  },
  toProtoMsg(message: EventAuctionResult): EventAuctionResultProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.EventAuctionResult",
      value: EventAuctionResult.encode(message).finish()
    };
  }
};
function createBaseEventAuctionStart(): EventAuctionStart {
  return {
    round: BigInt(0),
    endingTimestamp: BigInt(0),
    newBasket: []
  };
}
export const EventAuctionStart = {
  typeUrl: "/injective.auction.v1beta1.EventAuctionStart",
  encode(message: EventAuctionStart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== BigInt(0)) {
      writer.uint32(8).uint64(message.round);
    }
    if (message.endingTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.endingTimestamp);
    }
    for (const v of message.newBasket) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventAuctionStart {
    return {
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0),
      endingTimestamp: isSet(object.endingTimestamp) ? BigInt(object.endingTimestamp.toString()) : BigInt(0),
      newBasket: Array.isArray(object?.newBasket) ? object.newBasket.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventAuctionStart>): EventAuctionStart {
    const message = createBaseEventAuctionStart();
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.endingTimestamp = object.endingTimestamp !== undefined && object.endingTimestamp !== null ? BigInt(object.endingTimestamp.toString()) : BigInt(0);
    message.newBasket = object.newBasket?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventAuctionStartAmino): EventAuctionStart {
    return {
      round: BigInt(object.round),
      endingTimestamp: BigInt(object.ending_timestamp),
      newBasket: Array.isArray(object?.new_basket) ? object.new_basket.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: EventAuctionStart): EventAuctionStartAmino {
    const obj: any = {};
    obj.round = message.round ? message.round.toString() : undefined;
    obj.ending_timestamp = message.endingTimestamp ? message.endingTimestamp.toString() : undefined;
    if (message.newBasket) {
      obj.new_basket = message.newBasket.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.new_basket = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventAuctionStartAminoMsg): EventAuctionStart {
    return EventAuctionStart.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAuctionStartProtoMsg): EventAuctionStart {
    return EventAuctionStart.decode(message.value);
  },
  toProto(message: EventAuctionStart): Uint8Array {
    return EventAuctionStart.encode(message).finish();
  },
  toProtoMsg(message: EventAuctionStart): EventAuctionStartProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.EventAuctionStart",
      value: EventAuctionStart.encode(message).finish()
    };
  }
};