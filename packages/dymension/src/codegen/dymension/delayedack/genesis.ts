import { BinaryWriter } from "../../binary";
/** GenesisState defines the delayedack module's genesis state. */
export interface GenesisState {}
export interface GenesisStateProtoMsg {
  typeUrl: "/dymensionxyz.dymension.delayedack.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the delayedack module's genesis state. */
export interface GenesisStateAmino {}
export interface GenesisStateAminoMsg {
  type: "/dymensionxyz.dymension.delayedack.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the delayedack module's genesis state. */
export interface GenesisStateSDKType {}
function createBaseGenesisState(): GenesisState {
  return {};
}
export const GenesisState = {
  typeUrl: "/dymensionxyz.dymension.delayedack.GenesisState",
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
      typeUrl: "/dymensionxyz.dymension.delayedack.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};