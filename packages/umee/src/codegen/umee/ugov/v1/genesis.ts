import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState of the ugov module. */
export interface GenesisState {
  minGasPrice: DecCoin;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/umee.ugov.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState of the ugov module. */
export interface GenesisStateAmino {
  min_gas_price?: DecCoinAmino;
}
export interface GenesisStateAminoMsg {
  type: "/umee.ugov.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState of the ugov module. */
export interface GenesisStateSDKType {
  min_gas_price: DecCoinSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    minGasPrice: DecCoin.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/umee.ugov.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minGasPrice !== undefined) {
      DecCoin.encode(message.minGasPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      minGasPrice: isSet(object.minGasPrice) ? DecCoin.fromJSON(object.minGasPrice) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.minGasPrice = object.minGasPrice !== undefined && object.minGasPrice !== null ? DecCoin.fromPartial(object.minGasPrice) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      minGasPrice: object?.min_gas_price ? DecCoin.fromAmino(object.min_gas_price) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.min_gas_price = message.minGasPrice ? DecCoin.toAmino(message.minGasPrice) : undefined;
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
      typeUrl: "/umee.ugov.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};