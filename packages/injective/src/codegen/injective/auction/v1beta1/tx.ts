import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./auction";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBid {
  sender: string;
  /** amount of the bid in INJ tokens */
  bidAmount: Coin;
  /** the current auction round being bid on */
  round: bigint;
}
export interface MsgBidProtoMsg {
  typeUrl: "/injective.auction.v1beta1.MsgBid";
  value: Uint8Array;
}
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBidAmino {
  sender: string;
  /** amount of the bid in INJ tokens */
  bid_amount?: CoinAmino;
  /** the current auction round being bid on */
  round: string;
}
export interface MsgBidAminoMsg {
  type: "/injective.auction.v1beta1.MsgBid";
  value: MsgBidAmino;
}
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBidSDKType {
  sender: string;
  bid_amount: CoinSDKType;
  round: bigint;
}
export interface MsgBidResponse {}
export interface MsgBidResponseProtoMsg {
  typeUrl: "/injective.auction.v1beta1.MsgBidResponse";
  value: Uint8Array;
}
export interface MsgBidResponseAmino {}
export interface MsgBidResponseAminoMsg {
  type: "/injective.auction.v1beta1.MsgBidResponse";
  value: MsgBidResponseAmino;
}
export interface MsgBidResponseSDKType {}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the ocr parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/injective.auction.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the ocr parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/injective.auction.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.auction.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.auction.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgBid(): MsgBid {
  return {
    sender: "",
    bidAmount: Coin.fromPartial({}),
    round: BigInt(0)
  };
}
export const MsgBid = {
  typeUrl: "/injective.auction.v1beta1.MsgBid",
  encode(message: MsgBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.bidAmount !== undefined) {
      Coin.encode(message.bidAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  fromJSON(object: any): MsgBid {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      bidAmount: isSet(object.bidAmount) ? Coin.fromJSON(object.bidAmount) : undefined,
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgBid>): MsgBid {
    const message = createBaseMsgBid();
    message.sender = object.sender ?? "";
    message.bidAmount = object.bidAmount !== undefined && object.bidAmount !== null ? Coin.fromPartial(object.bidAmount) : undefined;
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBidAmino): MsgBid {
    return {
      sender: object.sender,
      bidAmount: object?.bid_amount ? Coin.fromAmino(object.bid_amount) : undefined,
      round: BigInt(object.round)
    };
  },
  toAmino(message: MsgBid): MsgBidAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.bid_amount = message.bidAmount ? Coin.toAmino(message.bidAmount) : undefined;
    obj.round = message.round ? message.round.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBidAminoMsg): MsgBid {
    return MsgBid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBidProtoMsg): MsgBid {
    return MsgBid.decode(message.value);
  },
  toProto(message: MsgBid): Uint8Array {
    return MsgBid.encode(message).finish();
  },
  toProtoMsg(message: MsgBid): MsgBidProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.MsgBid",
      value: MsgBid.encode(message).finish()
    };
  }
};
function createBaseMsgBidResponse(): MsgBidResponse {
  return {};
}
export const MsgBidResponse = {
  typeUrl: "/injective.auction.v1beta1.MsgBidResponse",
  encode(_: MsgBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBidResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBidResponse>): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    return message;
  },
  fromAmino(_: MsgBidResponseAmino): MsgBidResponse {
    return {};
  },
  toAmino(_: MsgBidResponse): MsgBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBidResponseAminoMsg): MsgBidResponse {
    return MsgBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBidResponseProtoMsg): MsgBidResponse {
    return MsgBidResponse.decode(message.value);
  },
  toProto(message: MsgBidResponse): Uint8Array {
    return MsgBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBidResponse): MsgBidResponseProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.MsgBidResponse",
      value: MsgBidResponse.encode(message).finish()
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
  typeUrl: "/injective.auction.v1beta1.MsgUpdateParams",
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
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.auction.v1beta1.MsgUpdateParamsResponse",
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
    return {};
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
      typeUrl: "/injective.auction.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};