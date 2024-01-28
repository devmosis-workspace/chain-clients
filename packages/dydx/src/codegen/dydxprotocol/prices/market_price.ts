import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** MarketPrice is used by the application to store/retrieve oracle price. */
export interface MarketPrice {
  /** Unique, sequentially-generated value that matches `MarketParam`. */
  id: number;
  /**
   * Static value. The exponent of the price. See the comment on the duplicate
   * MarketParam field for more information.
   */
  exponent: number;
  /**
   * The variable value that is updated by oracle price updates. `0` if it has
   * never been updated, `>0` otherwise.
   */
  price: bigint;
}
export interface MarketPriceProtoMsg {
  typeUrl: "/dydxprotocol.prices.MarketPrice";
  value: Uint8Array;
}
/** MarketPrice is used by the application to store/retrieve oracle price. */
export interface MarketPriceAmino {
  /** Unique, sequentially-generated value that matches `MarketParam`. */
  id?: number;
  /**
   * Static value. The exponent of the price. See the comment on the duplicate
   * MarketParam field for more information.
   */
  exponent?: number;
  /**
   * The variable value that is updated by oracle price updates. `0` if it has
   * never been updated, `>0` otherwise.
   */
  price?: string;
}
export interface MarketPriceAminoMsg {
  type: "/dydxprotocol.prices.MarketPrice";
  value: MarketPriceAmino;
}
/** MarketPrice is used by the application to store/retrieve oracle price. */
export interface MarketPriceSDKType {
  id: number;
  exponent: number;
  price: bigint;
}
function createBaseMarketPrice(): MarketPrice {
  return {
    id: 0,
    exponent: 0,
    price: BigInt(0)
  };
}
export const MarketPrice = {
  typeUrl: "/dydxprotocol.prices.MarketPrice",
  encode(message: MarketPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.exponent !== 0) {
      writer.uint32(16).sint32(message.exponent);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(24).uint64(message.price);
    }
    return writer;
  },
  fromJSON(object: any): MarketPrice {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MarketPrice>): MarketPrice {
    const message = createBaseMarketPrice();
    message.id = object.id ?? 0;
    message.exponent = object.exponent ?? 0;
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MarketPriceAmino): MarketPrice {
    const message = createBaseMarketPrice();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = BigInt(object.price);
    }
    return message;
  },
  toAmino(message: MarketPrice): MarketPriceAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.exponent = message.exponent;
    obj.price = message.price ? message.price.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MarketPriceAminoMsg): MarketPrice {
    return MarketPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketPriceProtoMsg): MarketPrice {
    return MarketPrice.decode(message.value);
  },
  toProto(message: MarketPrice): Uint8Array {
    return MarketPrice.encode(message).finish();
  },
  toProtoMsg(message: MarketPrice): MarketPriceProtoMsg {
    return {
      typeUrl: "/dydxprotocol.prices.MarketPrice",
      value: MarketPrice.encode(message).finish()
    };
  }
};