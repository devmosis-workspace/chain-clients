import { Swap, SwapAmino, SwapSDKType } from "./swap";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    swaps: Swap[];
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/sentinel.swap.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    swaps?: SwapAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/sentinel.swap.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    swaps: SwapSDKType[];
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
