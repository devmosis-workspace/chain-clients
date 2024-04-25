import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgPlaceBid represents a message used by bidders to place bids on auctions */
export interface MsgPlaceBid {
  auctionId: bigint;
  bidder: string;
  amount: Coin;
}
export interface MsgPlaceBidProtoMsg {
  typeUrl: "/kava.auction.v1beta1.MsgPlaceBid";
  value: Uint8Array;
}
/** MsgPlaceBid represents a message used by bidders to place bids on auctions */
export interface MsgPlaceBidAmino {
  auction_id?: string;
  bidder?: string;
  amount?: CoinAmino;
}
export interface MsgPlaceBidAminoMsg {
  type: "/kava.auction.v1beta1.MsgPlaceBid";
  value: MsgPlaceBidAmino;
}
/** MsgPlaceBid represents a message used by bidders to place bids on auctions */
export interface MsgPlaceBidSDKType {
  auction_id: bigint;
  bidder: string;
  amount: CoinSDKType;
}
/** MsgPlaceBidResponse defines the Msg/PlaceBid response type. */
export interface MsgPlaceBidResponse {}
export interface MsgPlaceBidResponseProtoMsg {
  typeUrl: "/kava.auction.v1beta1.MsgPlaceBidResponse";
  value: Uint8Array;
}
/** MsgPlaceBidResponse defines the Msg/PlaceBid response type. */
export interface MsgPlaceBidResponseAmino {}
export interface MsgPlaceBidResponseAminoMsg {
  type: "/kava.auction.v1beta1.MsgPlaceBidResponse";
  value: MsgPlaceBidResponseAmino;
}
/** MsgPlaceBidResponse defines the Msg/PlaceBid response type. */
export interface MsgPlaceBidResponseSDKType {}
function createBaseMsgPlaceBid(): MsgPlaceBid {
  return {
    auctionId: BigInt(0),
    bidder: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgPlaceBid = {
  typeUrl: "/kava.auction.v1beta1.MsgPlaceBid",
  encode(message: MsgPlaceBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgPlaceBid {
    return {
      auctionId: isSet(object.auctionId) ? BigInt(object.auctionId.toString()) : BigInt(0),
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgPlaceBid>): MsgPlaceBid {
    const message = createBaseMsgPlaceBid();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    message.bidder = object.bidder ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgPlaceBidAmino): MsgPlaceBid {
    const message = createBaseMsgPlaceBid();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = BigInt(object.auction_id);
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgPlaceBid): MsgPlaceBidAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId ? message.auctionId.toString() : undefined;
    obj.bidder = message.bidder;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPlaceBidAminoMsg): MsgPlaceBid {
    return MsgPlaceBid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPlaceBidProtoMsg): MsgPlaceBid {
    return MsgPlaceBid.decode(message.value);
  },
  toProto(message: MsgPlaceBid): Uint8Array {
    return MsgPlaceBid.encode(message).finish();
  },
  toProtoMsg(message: MsgPlaceBid): MsgPlaceBidProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.MsgPlaceBid",
      value: MsgPlaceBid.encode(message).finish()
    };
  }
};
function createBaseMsgPlaceBidResponse(): MsgPlaceBidResponse {
  return {};
}
export const MsgPlaceBidResponse = {
  typeUrl: "/kava.auction.v1beta1.MsgPlaceBidResponse",
  encode(_: MsgPlaceBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgPlaceBidResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPlaceBidResponse>): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
  fromAmino(_: MsgPlaceBidResponseAmino): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
  toAmino(_: MsgPlaceBidResponse): MsgPlaceBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPlaceBidResponseAminoMsg): MsgPlaceBidResponse {
    return MsgPlaceBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPlaceBidResponseProtoMsg): MsgPlaceBidResponse {
    return MsgPlaceBidResponse.decode(message.value);
  },
  toProto(message: MsgPlaceBidResponse): Uint8Array {
    return MsgPlaceBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPlaceBidResponse): MsgPlaceBidResponseProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.MsgPlaceBidResponse",
      value: MsgPlaceBidResponse.encode(message).finish()
    };
  }
};