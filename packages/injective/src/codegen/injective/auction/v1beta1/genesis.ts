import { Params, ParamsAmino, ParamsSDKType, Bid, BidAmino, BidSDKType } from "./auction";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to auction. */
  params: Params;
  /** current auction round */
  auctionRound: bigint;
  /** current highest bid */
  highestBid: Bid;
  /** auction ending timestamp */
  auctionEndingTimestamp: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.auction.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to auction. */
  params?: ParamsAmino;
  /** current auction round */
  auction_round: string;
  /** current highest bid */
  highest_bid?: BidAmino;
  /** auction ending timestamp */
  auction_ending_timestamp: string;
}
export interface GenesisStateAminoMsg {
  type: "/injective.auction.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  auction_round: bigint;
  highest_bid: BidSDKType;
  auction_ending_timestamp: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    auctionRound: BigInt(0),
    highestBid: Bid.fromPartial({}),
    auctionEndingTimestamp: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/injective.auction.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.auctionRound !== BigInt(0)) {
      writer.uint32(16).uint64(message.auctionRound);
    }
    if (message.highestBid !== undefined) {
      Bid.encode(message.highestBid, writer.uint32(26).fork()).ldelim();
    }
    if (message.auctionEndingTimestamp !== BigInt(0)) {
      writer.uint32(32).int64(message.auctionEndingTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      auctionRound: isSet(object.auctionRound) ? BigInt(object.auctionRound.toString()) : BigInt(0),
      highestBid: isSet(object.highestBid) ? Bid.fromJSON(object.highestBid) : undefined,
      auctionEndingTimestamp: isSet(object.auctionEndingTimestamp) ? BigInt(object.auctionEndingTimestamp.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? BigInt(object.auctionRound.toString()) : BigInt(0);
    message.highestBid = object.highestBid !== undefined && object.highestBid !== null ? Bid.fromPartial(object.highestBid) : undefined;
    message.auctionEndingTimestamp = object.auctionEndingTimestamp !== undefined && object.auctionEndingTimestamp !== null ? BigInt(object.auctionEndingTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      auctionRound: BigInt(object.auction_round),
      highestBid: object?.highest_bid ? Bid.fromAmino(object.highest_bid) : undefined,
      auctionEndingTimestamp: BigInt(object.auction_ending_timestamp)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.auction_round = message.auctionRound ? message.auctionRound.toString() : undefined;
    obj.highest_bid = message.highestBid ? Bid.toAmino(message.highestBid) : undefined;
    obj.auction_ending_timestamp = message.auctionEndingTimestamp ? message.auctionEndingTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};