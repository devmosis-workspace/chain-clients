import { BinaryWriter } from "../../../binary";
/** GenesisState defines the safety module's genesis state */
export interface GenesisState {}
export interface GenesisStateProtoMsg {
  typeUrl: "/mars.safety.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the safety module's genesis state */
export interface GenesisStateAmino {}
export interface GenesisStateAminoMsg {
  type: "/mars.safety.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the safety module's genesis state */
export interface GenesisStateSDKType {}
function createBaseGenesisState(): GenesisState {
  return {};
}
export const GenesisState = {
  typeUrl: "/mars.safety.v1beta1.GenesisState",
  encode(_: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): GenesisState {
    return {};
  },
  fromPartial(_: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    return message;
  },
  fromAmino(_: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    return message;
  },
  toAmino(_: GenesisState): GenesisStateAmino {
    const obj: any = {};
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
      typeUrl: "/mars.safety.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};