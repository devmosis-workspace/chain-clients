import { Provider, ProviderAmino, ProviderSDKType } from "./provider";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisState {
    providers: Provider[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/akash.provider.v1beta3.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisStateAmino {
    providers?: ProviderAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/akash.provider.v1beta3.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisStateSDKType {
    providers: ProviderSDKType[];
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
