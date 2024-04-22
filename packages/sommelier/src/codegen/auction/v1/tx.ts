import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Bid, BidAmino, BidSDKType } from "./auction";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface MsgSubmitBidRequest {
  auctionId: number;
  signer: string;
  maxBidInUsomm: Coin;
  saleTokenMinimumAmount: Coin;
}
export interface MsgSubmitBidRequestProtoMsg {
  typeUrl: "/auction.v1.MsgSubmitBidRequest";
  value: Uint8Array;
}
export interface MsgSubmitBidRequestAmino {
  auction_id?: number;
  signer?: string;
  max_bid_in_usomm?: CoinAmino;
  sale_token_minimum_amount?: CoinAmino;
}
export interface MsgSubmitBidRequestAminoMsg {
  type: "/auction.v1.MsgSubmitBidRequest";
  value: MsgSubmitBidRequestAmino;
}
export interface MsgSubmitBidRequestSDKType {
  auction_id: number;
  signer: string;
  max_bid_in_usomm: CoinSDKType;
  sale_token_minimum_amount: CoinSDKType;
}
export interface MsgSubmitBidResponse {
  bid?: Bid;
}
export interface MsgSubmitBidResponseProtoMsg {
  typeUrl: "/auction.v1.MsgSubmitBidResponse";
  value: Uint8Array;
}
export interface MsgSubmitBidResponseAmino {
  bid?: BidAmino;
}
export interface MsgSubmitBidResponseAminoMsg {
  type: "/auction.v1.MsgSubmitBidResponse";
  value: MsgSubmitBidResponseAmino;
}
export interface MsgSubmitBidResponseSDKType {
  bid?: BidSDKType;
}
function createBaseMsgSubmitBidRequest(): MsgSubmitBidRequest {
  return {
    auctionId: 0,
    signer: "",
    maxBidInUsomm: Coin.fromPartial({}),
    saleTokenMinimumAmount: Coin.fromPartial({})
  };
}
export const MsgSubmitBidRequest = {
  typeUrl: "/auction.v1.MsgSubmitBidRequest",
  encode(message: MsgSubmitBidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== 0) {
      writer.uint32(8).uint32(message.auctionId);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    if (message.maxBidInUsomm !== undefined) {
      Coin.encode(message.maxBidInUsomm, writer.uint32(26).fork()).ldelim();
    }
    if (message.saleTokenMinimumAmount !== undefined) {
      Coin.encode(message.saleTokenMinimumAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitBidRequest {
    return {
      auctionId: isSet(object.auctionId) ? Number(object.auctionId) : 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
      maxBidInUsomm: isSet(object.maxBidInUsomm) ? Coin.fromJSON(object.maxBidInUsomm) : undefined,
      saleTokenMinimumAmount: isSet(object.saleTokenMinimumAmount) ? Coin.fromJSON(object.saleTokenMinimumAmount) : undefined
    };
  },
  fromPartial(object: Partial<MsgSubmitBidRequest>): MsgSubmitBidRequest {
    const message = createBaseMsgSubmitBidRequest();
    message.auctionId = object.auctionId ?? 0;
    message.signer = object.signer ?? "";
    message.maxBidInUsomm = object.maxBidInUsomm !== undefined && object.maxBidInUsomm !== null ? Coin.fromPartial(object.maxBidInUsomm) : undefined;
    message.saleTokenMinimumAmount = object.saleTokenMinimumAmount !== undefined && object.saleTokenMinimumAmount !== null ? Coin.fromPartial(object.saleTokenMinimumAmount) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitBidRequestAmino): MsgSubmitBidRequest {
    const message = createBaseMsgSubmitBidRequest();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = object.auction_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.max_bid_in_usomm !== undefined && object.max_bid_in_usomm !== null) {
      message.maxBidInUsomm = Coin.fromAmino(object.max_bid_in_usomm);
    }
    if (object.sale_token_minimum_amount !== undefined && object.sale_token_minimum_amount !== null) {
      message.saleTokenMinimumAmount = Coin.fromAmino(object.sale_token_minimum_amount);
    }
    return message;
  },
  toAmino(message: MsgSubmitBidRequest): MsgSubmitBidRequestAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId;
    obj.signer = message.signer;
    obj.max_bid_in_usomm = message.maxBidInUsomm ? Coin.toAmino(message.maxBidInUsomm) : undefined;
    obj.sale_token_minimum_amount = message.saleTokenMinimumAmount ? Coin.toAmino(message.saleTokenMinimumAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBidRequestAminoMsg): MsgSubmitBidRequest {
    return MsgSubmitBidRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitBidRequestProtoMsg): MsgSubmitBidRequest {
    return MsgSubmitBidRequest.decode(message.value);
  },
  toProto(message: MsgSubmitBidRequest): Uint8Array {
    return MsgSubmitBidRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBidRequest): MsgSubmitBidRequestProtoMsg {
    return {
      typeUrl: "/auction.v1.MsgSubmitBidRequest",
      value: MsgSubmitBidRequest.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitBidResponse(): MsgSubmitBidResponse {
  return {
    bid: undefined
  };
}
export const MsgSubmitBidResponse = {
  typeUrl: "/auction.v1.MsgSubmitBidResponse",
  encode(message: MsgSubmitBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitBidResponse {
    return {
      bid: isSet(object.bid) ? Bid.fromJSON(object.bid) : undefined
    };
  },
  fromPartial(object: Partial<MsgSubmitBidResponse>): MsgSubmitBidResponse {
    const message = createBaseMsgSubmitBidResponse();
    message.bid = object.bid !== undefined && object.bid !== null ? Bid.fromPartial(object.bid) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitBidResponseAmino): MsgSubmitBidResponse {
    const message = createBaseMsgSubmitBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromAmino(object.bid);
    }
    return message;
  },
  toAmino(message: MsgSubmitBidResponse): MsgSubmitBidResponseAmino {
    const obj: any = {};
    obj.bid = message.bid ? Bid.toAmino(message.bid) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBidResponseAminoMsg): MsgSubmitBidResponse {
    return MsgSubmitBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitBidResponseProtoMsg): MsgSubmitBidResponse {
    return MsgSubmitBidResponse.decode(message.value);
  },
  toProto(message: MsgSubmitBidResponse): Uint8Array {
    return MsgSubmitBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBidResponse): MsgSubmitBidResponseProtoMsg {
    return {
      typeUrl: "/auction.v1.MsgSubmitBidResponse",
      value: MsgSubmitBidResponse.encode(message).finish()
    };
  }
};