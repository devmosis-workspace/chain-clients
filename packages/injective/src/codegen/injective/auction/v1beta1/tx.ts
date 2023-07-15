import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./auction";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBid {
  sender: string;
  /** amount of the bid in INJ tokens */
  bidAmount?: Coin;
  /** the current auction round being bid on */
  round: Long;
}
/** Bid defines a SDK message for placing a bid for an auction */
export interface MsgBidSDKType {
  sender: string;
  bid_amount?: CoinSDKType;
  round: Long;
}
export interface MsgBidResponse {}
export interface MsgBidResponseSDKType {}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the ocr parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgBid(): MsgBid {
  return {
    sender: "",
    bidAmount: undefined,
    round: Long.UZERO
  };
}
export const MsgBid = {
  encode(message: MsgBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.bidAmount !== undefined) {
      Coin.encode(message.bidAmount, writer.uint32(18).fork()).ldelim();
    }
    if (!message.round.isZero()) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  fromJSON(object: any): MsgBid {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      bidAmount: isSet(object.bidAmount) ? Coin.fromJSON(object.bidAmount) : undefined,
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgBid>): MsgBid {
    const message = createBaseMsgBid();
    message.sender = object.sender ?? "";
    message.bidAmount = object.bidAmount !== undefined && object.bidAmount !== null ? Coin.fromPartial(object.bidAmount) : undefined;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    return message;
  }
};
function createBaseMsgBidResponse(): MsgBidResponse {
  return {};
}
export const MsgBidResponse = {
  encode(_: MsgBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBidResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBidResponse>): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};