import { MarketParam, MarketParamAmino, MarketParamSDKType } from "./market_param";
import { MarketPrice, MarketPriceAmino, MarketPriceSDKType } from "./market_price";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the prices module's genesis state. */
export interface GenesisState {
  marketParams: MarketParam[];
  marketPrices: MarketPrice[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dydxprotocol.prices.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the prices module's genesis state. */
export interface GenesisStateAmino {
  market_params: MarketParamAmino[];
  market_prices: MarketPriceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/dydxprotocol.prices.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the prices module's genesis state. */
export interface GenesisStateSDKType {
  market_params: MarketParamSDKType[];
  market_prices: MarketPriceSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    marketParams: [],
    marketPrices: []
  };
}
export const GenesisState = {
  typeUrl: "/dydxprotocol.prices.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.marketParams) {
      MarketParam.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.marketPrices) {
      MarketPrice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      marketParams: Array.isArray(object?.marketParams) ? object.marketParams.map((e: any) => MarketParam.fromJSON(e)) : [],
      marketPrices: Array.isArray(object?.marketPrices) ? object.marketPrices.map((e: any) => MarketPrice.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.marketParams = object.marketParams?.map(e => MarketParam.fromPartial(e)) || [];
    message.marketPrices = object.marketPrices?.map(e => MarketPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      marketParams: Array.isArray(object?.market_params) ? object.market_params.map((e: any) => MarketParam.fromAmino(e)) : [],
      marketPrices: Array.isArray(object?.market_prices) ? object.market_prices.map((e: any) => MarketPrice.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.marketParams) {
      obj.market_params = message.marketParams.map(e => e ? MarketParam.toAmino(e) : undefined);
    } else {
      obj.market_params = [];
    }
    if (message.marketPrices) {
      obj.market_prices = message.marketPrices.map(e => e ? MarketPrice.toAmino(e) : undefined);
    } else {
      obj.market_prices = [];
    }
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
      typeUrl: "/dydxprotocol.prices.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};