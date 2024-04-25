import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPrice {
  /** address of client */
  from: string;
  marketId: string;
  price: string;
  expiry: Timestamp;
}
export interface MsgPostPriceProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.MsgPostPrice";
  value: Uint8Array;
}
/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPriceAmino {
  /** address of client */
  from?: string;
  market_id?: string;
  price?: string;
  expiry?: string;
}
export interface MsgPostPriceAminoMsg {
  type: "/kava.pricefeed.v1beta1.MsgPostPrice";
  value: MsgPostPriceAmino;
}
/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPriceSDKType {
  from: string;
  market_id: string;
  price: string;
  expiry: TimestampSDKType;
}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponse {}
export interface MsgPostPriceResponseProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.MsgPostPriceResponse";
  value: Uint8Array;
}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponseAmino {}
export interface MsgPostPriceResponseAminoMsg {
  type: "/kava.pricefeed.v1beta1.MsgPostPriceResponse";
  value: MsgPostPriceResponseAmino;
}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponseSDKType {}
function createBaseMsgPostPrice(): MsgPostPrice {
  return {
    from: "",
    marketId: "",
    price: "",
    expiry: Timestamp.fromPartial({})
  };
}
export const MsgPostPrice = {
  typeUrl: "/kava.pricefeed.v1beta1.MsgPostPrice",
  encode(message: MsgPostPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
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
  },
  fromAmino(object: MsgPostPriceAmino): MsgPostPrice {
    const message = createBaseMsgPostPrice();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = Timestamp.fromAmino(object.expiry);
    }
    return message;
  },
  toAmino(message: MsgPostPrice): MsgPostPriceAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.market_id = message.marketId;
    obj.price = message.price;
    obj.expiry = message.expiry ? Timestamp.toAmino(message.expiry) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPostPriceAminoMsg): MsgPostPrice {
    return MsgPostPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPostPriceProtoMsg): MsgPostPrice {
    return MsgPostPrice.decode(message.value);
  },
  toProto(message: MsgPostPrice): Uint8Array {
    return MsgPostPrice.encode(message).finish();
  },
  toProtoMsg(message: MsgPostPrice): MsgPostPriceProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.MsgPostPrice",
      value: MsgPostPrice.encode(message).finish()
    };
  }
};
function createBaseMsgPostPriceResponse(): MsgPostPriceResponse {
  return {};
}
export const MsgPostPriceResponse = {
  typeUrl: "/kava.pricefeed.v1beta1.MsgPostPriceResponse",
  encode(_: MsgPostPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgPostPriceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPostPriceResponse>): MsgPostPriceResponse {
    const message = createBaseMsgPostPriceResponse();
    return message;
  },
  fromAmino(_: MsgPostPriceResponseAmino): MsgPostPriceResponse {
    const message = createBaseMsgPostPriceResponse();
    return message;
  },
  toAmino(_: MsgPostPriceResponse): MsgPostPriceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPostPriceResponseAminoMsg): MsgPostPriceResponse {
    return MsgPostPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPostPriceResponseProtoMsg): MsgPostPriceResponse {
    return MsgPostPriceResponse.decode(message.value);
  },
  toProto(message: MsgPostPriceResponse): Uint8Array {
    return MsgPostPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPostPriceResponse): MsgPostPriceResponseProtoMsg {
    return {
      typeUrl: "/kava.pricefeed.v1beta1.MsgPostPriceResponse",
      value: MsgPostPriceResponse.encode(message).finish()
    };
  }
};