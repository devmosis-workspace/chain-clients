import { BinaryWriter } from "../../binary";
/**
 * GenesisState defines the capability module's genesis state.
 * TODO: currently left empty (for versioning),
 * later, it may include fields needed for custom capabilities
 * (subscriptions, vaultable accounts, ...)
 */
export interface GenesisState {}
export interface GenesisStateProtoMsg {
  typeUrl: "/chainmain.chainmain.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the capability module's genesis state.
 * TODO: currently left empty (for versioning),
 * later, it may include fields needed for custom capabilities
 * (subscriptions, vaultable accounts, ...)
 */
export interface GenesisStateAmino {}
export interface GenesisStateAminoMsg {
  type: "/chainmain.chainmain.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisState defines the capability module's genesis state.
 * TODO: currently left empty (for versioning),
 * later, it may include fields needed for custom capabilities
 * (subscriptions, vaultable accounts, ...)
 */
export interface GenesisStateSDKType {}
function createBaseGenesisState(): GenesisState {
  return {};
}
export const GenesisState = {
  typeUrl: "/chainmain.chainmain.v1.GenesisState",
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
    return {};
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
      typeUrl: "/chainmain.chainmain.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};