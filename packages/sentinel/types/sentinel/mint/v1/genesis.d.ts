import { Inflation, InflationAmino, InflationSDKType } from "./inflation";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    inflations: Inflation[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/sentinel.mint.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    inflations?: InflationAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/sentinel.mint.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    inflations: InflationSDKType[];
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
