import { BinaryWriter } from "../../binary";
/**
 * GenesisState defines the capability module's genesis state.
 * TODO: currently left empty (for versioning),
 * later, it may include fields needed for custom capabilities
 * (subscriptions, vaultable accounts, ...)
 */
export interface GenesisState {
}
export interface GenesisStateProtoMsg {
    typeUrl: "/chainmain.supply.v1.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the capability module's genesis state.
 * TODO: currently left empty (for versioning),
 * later, it may include fields needed for custom capabilities
 * (subscriptions, vaultable accounts, ...)
 */
export interface GenesisStateAmino {
}
export interface GenesisStateAminoMsg {
    type: "/chainmain.supply.v1.GenesisState";
    value: GenesisStateAmino;
}
/**
 * GenesisState defines the capability module's genesis state.
 * TODO: currently left empty (for versioning),
 * later, it may include fields needed for custom capabilities
 * (subscriptions, vaultable accounts, ...)
 */
export interface GenesisStateSDKType {
}
export declare const GenesisState: {
    typeUrl: string;
    encode(_: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): GenesisState;
    fromPartial(_: Partial<GenesisState>): GenesisState;
    fromAmino(_: GenesisStateAmino): GenesisState;
    toAmino(_: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
