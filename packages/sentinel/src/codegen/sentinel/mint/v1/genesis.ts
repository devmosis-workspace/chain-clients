import { Inflation, InflationAmino, InflationSDKType } from "./inflation";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
  inflations: Inflation[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sentinel.mint.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  inflations?: InflationAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sentinel.mint.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  inflations: InflationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    inflations: []
  };
}
export const GenesisState = {
  typeUrl: "/sentinel.mint.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.inflations) {
      Inflation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      inflations: Array.isArray(object?.inflations) ? object.inflations.map((e: any) => Inflation.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.inflations = object.inflations?.map(e => Inflation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.inflations = object.inflations?.map(e => Inflation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.inflations) {
      obj.inflations = message.inflations.map(e => e ? Inflation.toAmino(e) : undefined);
    } else {
      obj.inflations = message.inflations;
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
      typeUrl: "/sentinel.mint.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};