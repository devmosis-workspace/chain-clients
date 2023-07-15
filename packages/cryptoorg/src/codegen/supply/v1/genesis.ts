import * as _m0 from "protobufjs/minimal";
/**
 * GenesisState defines the capability module's genesis state.
 * TODO: currently left empty (for versioning),
 * later, it may include fields needed for custom capabilities
 * (subscriptions, vaultable accounts, ...)
 */
export interface GenesisState {}
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
  encode(_: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): GenesisState {
    return {};
  },
  fromPartial(_: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    return message;
  }
};