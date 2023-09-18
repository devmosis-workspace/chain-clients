import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  key: string;
  minGasPrices: DecCoin[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/em.authority.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  key: string;
  min_gas_prices: DecCoinAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/em.authority.v1.GenesisState";
  value: GenesisStateAmino;
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
  typeUrl: "/em.authority.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      key: object.key,
      minGasPrices: Array.isArray(object?.min_gas_prices) ? object.min_gas_prices.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.key = message.key;
    if (message.minGasPrices) {
      obj.min_gas_prices = message.minGasPrices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.min_gas_prices = [];
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
      typeUrl: "/em.authority.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};