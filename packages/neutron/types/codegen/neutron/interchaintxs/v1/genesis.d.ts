import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the interchaintxs module's genesis state. */
export interface GenesisState {
    /** GenesisState defines the interchaintxs module's genesis state. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the interchaintxs module's genesis state. */
export interface GenesisStateAmino {
    /** GenesisState defines the interchaintxs module's genesis state. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/neutron.interchaintxs.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the interchaintxs module's genesis state. */
export interface GenesisStateSDKType {
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
