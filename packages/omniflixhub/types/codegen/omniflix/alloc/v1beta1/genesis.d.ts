import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the alloc module's genesis state. */
export interface GenesisState {
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/omniflix.alloc.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the alloc module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/omniflix.alloc.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the alloc module's genesis state. */
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
