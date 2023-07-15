import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
   * minimum_gas_prices stores the minimum gas price(s) for all TX on the chain.
   * When multiple coins are defined then they are accepted alternatively.
   * The list must be sorted by denoms asc. No duplicate denoms or zero amount
   * values allowed. For more information see
   * https://docs.cosmos.network/main/modules/auth#concepts
   */
  minimumGasPrices: DecCoin[];
  /**
   * bypass_min_fee_msg_types defines a list of message type urls
   * that are free of fee charge.
   */
  bypassMinFeeMsgTypes: string[];
  /**
   * max_total_bypass_min_fee_msg_gas_usage defines the total maximum gas usage
   * allowed for a transaction containing only messages of types in bypass_min_fee_msg_types
   * to bypass fee charge.
   */
  maxTotalBypassMinFeeMsgGasUsage: Long;
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
  minimum_gas_prices: DecCoinSDKType[];
  bypass_min_fee_msg_types: string[];
  max_total_bypass_min_fee_msg_gas_usage: Long;
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
    bypassMinFeeMsgTypes: [],
    maxTotalBypassMinFeeMsgGasUsage: Long.UZERO
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
    if (!message.maxTotalBypassMinFeeMsgGasUsage.isZero()) {
      writer.uint32(24).uint64(message.maxTotalBypassMinFeeMsgGasUsage);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minimumGasPrices: Array.isArray(object?.minimumGasPrices) ? object.minimumGasPrices.map((e: any) => DecCoin.fromJSON(e)) : [],
      bypassMinFeeMsgTypes: Array.isArray(object?.bypassMinFeeMsgTypes) ? object.bypassMinFeeMsgTypes.map((e: any) => String(e)) : [],
      maxTotalBypassMinFeeMsgGasUsage: isSet(object.maxTotalBypassMinFeeMsgGasUsage) ? Long.fromValue(object.maxTotalBypassMinFeeMsgGasUsage) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minimumGasPrices = object.minimumGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    message.bypassMinFeeMsgTypes = object.bypassMinFeeMsgTypes?.map(e => e) || [];
    message.maxTotalBypassMinFeeMsgGasUsage = object.maxTotalBypassMinFeeMsgGasUsage !== undefined && object.maxTotalBypassMinFeeMsgGasUsage !== null ? Long.fromValue(object.maxTotalBypassMinFeeMsgGasUsage) : Long.UZERO;
    return message;
  }
};