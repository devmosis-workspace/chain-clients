import { Collection, CollectionAmino, CollectionSDKType } from "./nft";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the NFT module's genesis state */
export interface GenesisState {
    collections: Collection[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/chainmain.nft.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the NFT module's genesis state */
export interface GenesisStateAmino {
    collections: CollectionAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/chainmain.nft.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the NFT module's genesis state */
export interface GenesisStateSDKType {
    collections: CollectionSDKType[];
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
