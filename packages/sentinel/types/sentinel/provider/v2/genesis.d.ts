import { Provider, ProviderAmino, ProviderSDKType } from "./provider";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    providers: Provider[];
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/sentinel.provider.v2.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    providers?: ProviderAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/sentinel.provider.v2.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    providers: ProviderSDKType[];
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
