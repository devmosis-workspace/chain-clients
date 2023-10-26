import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * MarketParam represents the x/prices configuration for markets, including
 * representing price values, resolving markets on individual exchanges, and
 * generating price updates. This configuration is specific to the quote
 * currency.
 */
export interface MarketParam {
  /** Unique, sequentially-generated value. */
  id: number;
  /** The human-readable name of the market pair (e.g. `BTC-USD`). */
  pair: string;
  /**
   * Static value. The exponent of the price.
   * For example if `Exponent == -5` then a `Value` of `1,000,000,000`
   * represents ``$10,000`. Therefore `10 ^ Exponent` represents the smallest
   * price step (in dollars) that can be recorded.
   */
  exponent: number;
  /**
   * The minimum number of exchanges that should be reporting a live price for
   * a price update to be considered valid.
   */
  minExchanges: number;
  /**
   * The minimum allowable change in `price` value that would cause a price
   * update on the network. Measured as `1e-6` (parts per million).
   */
  minPriceChangePpm: number;
  /**
   * A string of json that encodes the configuration for resolving the price
   * of this market on various exchanges.
   */
  exchangeConfigJson: string;
}
export interface MarketParamProtoMsg {
  typeUrl: "/dydxprotocol.prices.MarketParam";
  value: Uint8Array;
}
/**
 * MarketParam represents the x/prices configuration for markets, including
 * representing price values, resolving markets on individual exchanges, and
 * generating price updates. This configuration is specific to the quote
 * currency.
 */
export interface MarketParamAmino {
  /** Unique, sequentially-generated value. */
  id: number;
  /** The human-readable name of the market pair (e.g. `BTC-USD`). */
  pair: string;
  /**
   * Static value. The exponent of the price.
   * For example if `Exponent == -5` then a `Value` of `1,000,000,000`
   * represents ``$10,000`. Therefore `10 ^ Exponent` represents the smallest
   * price step (in dollars) that can be recorded.
   */
  exponent: number;
  /**
   * The minimum number of exchanges that should be reporting a live price for
   * a price update to be considered valid.
   */
  min_exchanges: number;
  /**
   * The minimum allowable change in `price` value that would cause a price
   * update on the network. Measured as `1e-6` (parts per million).
   */
  min_price_change_ppm: number;
  /**
   * A string of json that encodes the configuration for resolving the price
   * of this market on various exchanges.
   */
  exchange_config_json: string;
}
export interface MarketParamAminoMsg {
  type: "/dydxprotocol.prices.MarketParam";
  value: MarketParamAmino;
}
/**
 * MarketParam represents the x/prices configuration for markets, including
 * representing price values, resolving markets on individual exchanges, and
 * generating price updates. This configuration is specific to the quote
 * currency.
 */
export interface MarketParamSDKType {
  id: number;
  pair: string;
  exponent: number;
  min_exchanges: number;
  min_price_change_ppm: number;
  exchange_config_json: string;
}
function createBaseMarketParam(): MarketParam {
  return {
    id: 0,
    pair: "",
    exponent: 0,
    minExchanges: 0,
    minPriceChangePpm: 0,
    exchangeConfigJson: ""
  };
}
export const MarketParam = {
  typeUrl: "/dydxprotocol.prices.MarketParam",
  encode(message: MarketParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair);
    }
    if (message.exponent !== 0) {
      writer.uint32(24).sint32(message.exponent);
    }
    if (message.minExchanges !== 0) {
      writer.uint32(32).uint32(message.minExchanges);
    }
    if (message.minPriceChangePpm !== 0) {
      writer.uint32(40).uint32(message.minPriceChangePpm);
    }
    if (message.exchangeConfigJson !== "") {
      writer.uint32(50).string(message.exchangeConfigJson);
    }
    return writer;
  },
  fromJSON(object: any): MarketParam {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      pair: isSet(object.pair) ? String(object.pair) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      minExchanges: isSet(object.minExchanges) ? Number(object.minExchanges) : 0,
      minPriceChangePpm: isSet(object.minPriceChangePpm) ? Number(object.minPriceChangePpm) : 0,
      exchangeConfigJson: isSet(object.exchangeConfigJson) ? String(object.exchangeConfigJson) : ""
    };
  },
  fromPartial(object: Partial<MarketParam>): MarketParam {
    const message = createBaseMarketParam();
    message.id = object.id ?? 0;
    message.pair = object.pair ?? "";
    message.exponent = object.exponent ?? 0;
    message.minExchanges = object.minExchanges ?? 0;
    message.minPriceChangePpm = object.minPriceChangePpm ?? 0;
    message.exchangeConfigJson = object.exchangeConfigJson ?? "";
    return message;
  },
  fromAmino(object: MarketParamAmino): MarketParam {
    return {
      id: object.id,
      pair: object.pair,
      exponent: object.exponent,
      minExchanges: object.min_exchanges,
      minPriceChangePpm: object.min_price_change_ppm,
      exchangeConfigJson: object.exchange_config_json
    };
  },
  toAmino(message: MarketParam): MarketParamAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.pair = message.pair;
    obj.exponent = message.exponent;
    obj.min_exchanges = message.minExchanges;
    obj.min_price_change_ppm = message.minPriceChangePpm;
    obj.exchange_config_json = message.exchangeConfigJson;
    return obj;
  },
  fromAminoMsg(object: MarketParamAminoMsg): MarketParam {
    return MarketParam.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketParamProtoMsg): MarketParam {
    return MarketParam.decode(message.value);
  },
  toProto(message: MarketParam): Uint8Array {
    return MarketParam.encode(message).finish();
  },
  toProtoMsg(message: MarketParam): MarketParamProtoMsg {
    return {
      typeUrl: "/dydxprotocol.prices.MarketParam",
      value: MarketParam.encode(message).finish()
    };
  }
};