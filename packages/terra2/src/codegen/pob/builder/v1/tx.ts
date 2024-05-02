import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgAuctionBid defines a request type for sending bids to the x/builder
 * module.
 */
export interface MsgAuctionBid {
  /**
   * bidder is the address of the account that is submitting a bid to the
   * auction.
   */
  bidder: string;
  /**
   * bid is the amount of coins that the bidder is bidding to participate in the
   * auction.
   */
  bid: Coin;
  /**
   * transactions are the bytes of the transactions that the bidder wants to
   * bundle together.
   */
  transactions: Uint8Array[];
}
export interface MsgAuctionBidProtoMsg {
  typeUrl: "/pob.builder.v1.MsgAuctionBid";
  value: Uint8Array;
}
/**
 * MsgAuctionBid defines a request type for sending bids to the x/builder
 * module.
 */
export interface MsgAuctionBidAmino {
  /**
   * bidder is the address of the account that is submitting a bid to the
   * auction.
   */
  bidder?: string;
  /**
   * bid is the amount of coins that the bidder is bidding to participate in the
   * auction.
   */
  bid: CoinAmino;
  /**
   * transactions are the bytes of the transactions that the bidder wants to
   * bundle together.
   */
  transactions?: string[];
}
export interface MsgAuctionBidAminoMsg {
  type: "pob/x/builder/MsgAuctionBid";
  value: MsgAuctionBidAmino;
}
/**
 * MsgAuctionBid defines a request type for sending bids to the x/builder
 * module.
 */
export interface MsgAuctionBidSDKType {
  bidder: string;
  bid: CoinSDKType;
  transactions: Uint8Array[];
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponse {}
export interface MsgAuctionBidResponseProtoMsg {
  typeUrl: "/pob.builder.v1.MsgAuctionBidResponse";
  value: Uint8Array;
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponseAmino {}
export interface MsgAuctionBidResponseAminoMsg {
  type: "/pob.builder.v1.MsgAuctionBidResponse";
  value: MsgAuctionBidResponseAmino;
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponseSDKType {}
/**
 * MsgUpdateParams defines a request type for updating the x/builder module
 * parameters.
 */
export interface MsgUpdateParams {
  /**
   * authority is the address of the account that is authorized to update the
   * x/builder module parameters.
   */
  authority: string;
  /** params is the new parameters for the x/builder module. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pob.builder.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams defines a request type for updating the x/builder module
 * parameters.
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the account that is authorized to update the
   * x/builder module parameters.
   */
  authority?: string;
  /** params is the new parameters for the x/builder module. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pob/x/builder/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams defines a request type for updating the x/builder module
 * parameters.
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pob.builder.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pob.builder.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgAuctionBid(): MsgAuctionBid {
  return {
    bidder: "",
    bid: Coin.fromPartial({}),
    transactions: []
  };
}
export const MsgAuctionBid = {
  typeUrl: "/pob.builder.v1.MsgAuctionBid",
  encode(message: MsgAuctionBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.bid !== undefined) {
      Coin.encode(message.bid, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.transactions) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgAuctionBid {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      bid: isSet(object.bid) ? Coin.fromJSON(object.bid) : undefined,
      transactions: Array.isArray(object?.transactions) ? object.transactions.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAuctionBid>): MsgAuctionBid {
    const message = createBaseMsgAuctionBid();
    message.bidder = object.bidder ?? "";
    message.bid = object.bid !== undefined && object.bid !== null ? Coin.fromPartial(object.bid) : undefined;
    message.transactions = object.transactions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgAuctionBidAmino): MsgAuctionBid {
    const message = createBaseMsgAuctionBid();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Coin.fromAmino(object.bid);
    }
    message.transactions = object.transactions?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgAuctionBid): MsgAuctionBidAmino {
    const obj: any = {};
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.bid = message.bid ? Coin.toAmino(message.bid) : Coin.toAmino(Coin.fromPartial({}));
    if (message.transactions) {
      obj.transactions = message.transactions.map(e => base64FromBytes(e));
    } else {
      obj.transactions = message.transactions;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAuctionBidAminoMsg): MsgAuctionBid {
    return MsgAuctionBid.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAuctionBid): MsgAuctionBidAminoMsg {
    return {
      type: "pob/x/builder/MsgAuctionBid",
      value: MsgAuctionBid.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAuctionBidProtoMsg): MsgAuctionBid {
    return MsgAuctionBid.decode(message.value);
  },
  toProto(message: MsgAuctionBid): Uint8Array {
    return MsgAuctionBid.encode(message).finish();
  },
  toProtoMsg(message: MsgAuctionBid): MsgAuctionBidProtoMsg {
    return {
      typeUrl: "/pob.builder.v1.MsgAuctionBid",
      value: MsgAuctionBid.encode(message).finish()
    };
  }
};
function createBaseMsgAuctionBidResponse(): MsgAuctionBidResponse {
  return {};
}
export const MsgAuctionBidResponse = {
  typeUrl: "/pob.builder.v1.MsgAuctionBidResponse",
  encode(_: MsgAuctionBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAuctionBidResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAuctionBidResponse>): MsgAuctionBidResponse {
    const message = createBaseMsgAuctionBidResponse();
    return message;
  },
  fromAmino(_: MsgAuctionBidResponseAmino): MsgAuctionBidResponse {
    const message = createBaseMsgAuctionBidResponse();
    return message;
  },
  toAmino(_: MsgAuctionBidResponse): MsgAuctionBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAuctionBidResponseAminoMsg): MsgAuctionBidResponse {
    return MsgAuctionBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAuctionBidResponseProtoMsg): MsgAuctionBidResponse {
    return MsgAuctionBidResponse.decode(message.value);
  },
  toProto(message: MsgAuctionBidResponse): Uint8Array {
    return MsgAuctionBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAuctionBidResponse): MsgAuctionBidResponseProtoMsg {
    return {
      typeUrl: "/pob.builder.v1.MsgAuctionBidResponse",
      value: MsgAuctionBidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pob.builder.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "pob/x/builder/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/pob.builder.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pob.builder.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/pob.builder.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};