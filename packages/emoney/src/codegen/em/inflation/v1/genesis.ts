import { InflationState, InflationStateAmino, InflationStateSDKType } from "./inflation";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  /** todo (reviewer): yaml naming is a bit inconsistent. state contains assets */
  assets: InflationState;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/em.inflation.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  /** todo (reviewer): yaml naming is a bit inconsistent. state contains assets */
  assets?: InflationStateAmino;
}
export interface GenesisStateAminoMsg {
  type: "/em.inflation.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  assets: InflationStateSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    assets: InflationState.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/em.inflation.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assets !== undefined) {
      InflationState.encode(message.assets, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      assets: isSet(object.assets) ? InflationState.fromJSON(object.assets) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.assets = object.assets !== undefined && object.assets !== null ? InflationState.fromPartial(object.assets) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      assets: object?.assets ? InflationState.fromAmino(object.assets) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.assets = message.assets ? InflationState.toAmino(message.assets) : undefined;
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
      typeUrl: "/em.inflation.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};