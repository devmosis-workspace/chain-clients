import { Session, SessionAmino, SessionSDKType } from "./session";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    sessions: Session[];
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/sentinel.session.v2.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    sessions?: SessionAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/sentinel.session.v2.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    sessions: SessionSDKType[];
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
