import { InflationState, InflationStateAmino, InflationStateSDKType } from "./inflation";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    /** todo (reviewer): yaml naming is a bit inconsistent. state contains assets */
    assets: InflationState;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/em.inflation.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    /** todo (reviewer): yaml naming is a bit inconsistent. state contains assets */
    assets?: InflationStateAmino;
}
export interface GenesisStateAminoMsg {
    type: "/em.inflation.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    assets: InflationStateSDKType;
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
