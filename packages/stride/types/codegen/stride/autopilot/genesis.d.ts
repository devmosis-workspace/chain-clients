import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.autopilot.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the claim module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/stride.autopilot.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the claim module's genesis state. */
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
