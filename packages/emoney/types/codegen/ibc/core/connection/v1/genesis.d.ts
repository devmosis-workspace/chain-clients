import { IdentifiedConnection, IdentifiedConnectionAmino, IdentifiedConnectionSDKType, ConnectionPaths, ConnectionPathsAmino, ConnectionPathsSDKType } from "./connection";
import { BinaryWriter } from "../../../../binary";
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
    connections: IdentifiedConnection[];
    clientConnectionPaths: ConnectionPaths[];
    /** the sequence for the next generated connection identifier */
    nextConnectionSequence: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/ibc.core.connection.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisStateAmino {
    connections: IdentifiedConnectionAmino[];
    client_connection_paths: ConnectionPathsAmino[];
    /** the sequence for the next generated connection identifier */
    next_connection_sequence: string;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisStateSDKType {
    connections: IdentifiedConnectionSDKType[];
    client_connection_paths: ConnectionPathsSDKType[];
    next_connection_sequence: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
