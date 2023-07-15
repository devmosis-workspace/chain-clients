import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPrice {
  /** address of client */
  from: string;
  marketId: string;
  price: string;
  expiry?: Timestamp;
}
/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPriceSDKType {
  from: string;
  market_id: string;
  price: string;
  expiry?: TimestampSDKType;
}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponse {}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponseSDKType {}
function createBaseMsgPostPrice(): MsgPostPrice {
  return {
    from: "",
    marketId: "",
    price: "",
    expiry: undefined
  };
}
export const MsgPostPrice = {
  encode(message: MsgPostPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(message.expiry, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgPostPrice {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      price: isSet(object.price) ? String(object.price) : "",
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined
    };
  },
  fromPartial(object: Partial<MsgPostPrice>): MsgPostPrice {
    const message = createBaseMsgPostPrice();
    message.from = object.from ?? "";
    message.marketId = object.marketId ?? "";
    message.price = object.price ?? "";
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Timestamp.fromPartial(object.expiry) : undefined;
    return message;
  }
};
function createBaseMsgPostPriceResponse(): MsgPostPriceResponse {
  return {};
}
export const MsgPostPriceResponse = {
  encode(_: MsgPostPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgPostPriceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPostPriceResponse>): MsgPostPriceResponse {
    const message = createBaseMsgPostPriceResponse();
    return message;
  }
};