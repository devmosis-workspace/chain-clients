import { Collection, CollectionAmino, CollectionSDKType } from "./onft";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
    collections: Collection[];
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateAmino {
    collections?: CollectionAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/OmniFlix.onft.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateSDKType {
    collections: CollectionSDKType[];
    params: ParamsSDKType;
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
