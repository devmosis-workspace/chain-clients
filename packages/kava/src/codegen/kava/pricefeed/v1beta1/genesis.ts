import { Params, ParamsAmino, ParamsSDKType, PostedPrice, PostedPriceAmino, PostedPriceSDKType } from "./store";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  postedPrices: PostedPrice[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.pricefeed.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  posted_prices: PostedPriceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kava.pricefeed.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  posted_prices: PostedPriceSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    postedPrices: []
  };
}
export const GenesisState = {
  typeUrl: "/kava.pricefeed.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.postedPrices) {
      PostedPrice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      postedPrices: Array.isArray(object?.postedPrices) ? object.postedPrices.map((e: any) => PostedPrice.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.postedPrices = object.postedPrices?.map(e => PostedPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      postedPrices: Array.isArray(object?.posted_prices) ? object.posted_prices.map((e: any) => PostedPrice.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.postedPrices) {
      obj.posted_prices = message.postedPrices.map(e => e ? PostedPrice.toAmino(e) : undefined);
    } else {
      obj.posted_prices = [];
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
      typeUrl: "/kava.pricefeed.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};