import { Params, ParamsSDKType, Bid, BidSDKType } from "./auction";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to auction. */
  params?: Params;
  /** current auction round */
  auctionRound: Long;
  /** current highest bid */
  highestBid?: Bid;
  /** auction ending timestamp */
  auctionEndingTimestamp: Long;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  auction_round: Long;
  highest_bid?: BidSDKType;
  auction_ending_timestamp: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    auctionRound: Long.UZERO,
    highestBid: undefined,
    auctionEndingTimestamp: Long.ZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.auctionRound.isZero()) {
      writer.uint32(16).uint64(message.auctionRound);
    }
    if (message.highestBid !== undefined) {
      Bid.encode(message.highestBid, writer.uint32(26).fork()).ldelim();
    }
    if (!message.auctionEndingTimestamp.isZero()) {
      writer.uint32(32).int64(message.auctionEndingTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      auctionRound: isSet(object.auctionRound) ? Long.fromValue(object.auctionRound) : Long.UZERO,
      highestBid: isSet(object.highestBid) ? Bid.fromJSON(object.highestBid) : undefined,
      auctionEndingTimestamp: isSet(object.auctionEndingTimestamp) ? Long.fromValue(object.auctionEndingTimestamp) : Long.ZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? Long.fromValue(object.auctionRound) : Long.UZERO;
    message.highestBid = object.highestBid !== undefined && object.highestBid !== null ? Bid.fromPartial(object.highestBid) : undefined;
    message.auctionEndingTimestamp = object.auctionEndingTimestamp !== undefined && object.auctionEndingTimestamp !== null ? Long.fromValue(object.auctionEndingTimestamp) : Long.ZERO;
    return message;
  }
};