import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface GenesisState {
  key: string;
  minGasPrices: DecCoin[];
}
export interface GenesisStateSDKType {
  key: string;
  min_gas_prices: DecCoinSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    key: "",
    minGasPrices: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    for (const v of message.minGasPrices) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      minGasPrices: Array.isArray(object?.minGasPrices) ? object.minGasPrices.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.key = object.key ?? "";
    message.minGasPrices = object.minGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }
};