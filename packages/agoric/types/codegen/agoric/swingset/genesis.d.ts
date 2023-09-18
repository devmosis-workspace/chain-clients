import { Params, ParamsAmino, ParamsSDKType, State, StateAmino, StateSDKType } from "./swingset";
import { BinaryWriter } from "../../binary";
/** The initial or exported state. */
export interface GenesisState {
    params: Params;
    state: State;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/agoric.swingset.GenesisState";
    value: Uint8Array;
}
/** The initial or exported state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    state?: StateAmino;
}
export interface GenesisStateAminoMsg {
    type: "/agoric.swingset.GenesisState";
    value: GenesisStateAmino;
}
/** The initial or exported state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    state: StateSDKType;
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
