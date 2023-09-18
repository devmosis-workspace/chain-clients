import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
export interface GenesisState {
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.ibchooks.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/ibchooks/genesis-state";
    value: GenesisStateAmino;
}
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
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
