import { Params, ParamsAmino, ParamsSDKType } from "./global";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the global module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kyve.global.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the global module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/kyve.global.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the global module's genesis state. */
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
