import { DBProphecy, DBProphecyAmino, DBProphecySDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    addressWhitelist: string[];
    adminAddress: string;
    prophecies: DBProphecy[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/sifnode.oracle.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    address_whitelist?: string[];
    admin_address?: string;
    prophecies?: DBProphecyAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/sifnode.oracle.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    address_whitelist: string[];
    admin_address: string;
    prophecies: DBProphecySDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
