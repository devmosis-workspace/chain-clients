import { SifnodeTokenRegistry, SifnodeTokenRegistryAmino, SifnodeTokenRegistrySDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    registry?: SifnodeTokenRegistry;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/sifnode.tokenregistry.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    registry?: SifnodeTokenRegistryAmino;
}
export interface GenesisStateAminoMsg {
    type: "/sifnode.tokenregistry.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    registry?: SifnodeTokenRegistrySDKType;
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
