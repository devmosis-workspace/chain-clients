import { Super, SuperAmino, SuperSDKType } from "./guardian";
import { BinaryWriter } from "../binary";
/** GenesisState defines the guardian module's genesis state */
export interface GenesisState {
    supers: Super[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/irishub.guardian.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the guardian module's genesis state */
export interface GenesisStateAmino {
    supers: SuperAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/irishub.guardian.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the guardian module's genesis state */
export interface GenesisStateSDKType {
    supers: SuperSDKType[];
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
