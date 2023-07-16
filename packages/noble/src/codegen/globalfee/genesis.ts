import { DecCoin, DecCoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** GenesisState - initial state of module */
export interface GenesisState {
  /** Params of this module */
  params?: Params;
}
/** GenesisState - initial state of module */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
}
/** Params defines the set of module parameters. */
export interface Params {
  /**
   * Minimum stores the minimum gas price(s) for all TX on the chain.
   * When multiple coins are defined then they are accepted alternatively.
   * The list must be sorted by denoms asc. No duplicate denoms or zero amount
   * values allowed. For more information see
   * https://docs.cosmos.network/main/modules/auth#concepts
   */
  minimumGasPrices: DecCoin[];
  bypassMinFeeMsgTypes: string[];
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
  minimum_gas_prices: DecCoinSDKType[];
  bypass_min_fee_msg_types: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseParams(): Params {
  return {
    minimumGasPrices: [],
    bypassMinFeeMsgTypes: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minimumGasPrices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bypassMinFeeMsgTypes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minimumGasPrices: Array.isArray(object?.minimumGasPrices) ? object.minimumGasPrices.map((e: any) => DecCoin.fromJSON(e)) : [],
      bypassMinFeeMsgTypes: Array.isArray(object?.bypassMinFeeMsgTypes) ? object.bypassMinFeeMsgTypes.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minimumGasPrices = object.minimumGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    message.bypassMinFeeMsgTypes = object.bypassMinFeeMsgTypes?.map(e => e) || [];
    return message;
  }
};