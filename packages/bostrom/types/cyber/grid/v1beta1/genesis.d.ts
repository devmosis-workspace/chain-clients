import { Params, ParamsAmino, ParamsSDKType, Route, RouteAmino, RouteSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    params: Params;
    routes: Route[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    params?: ParamsAmino;
    routes?: RouteAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/cyber.grid.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    routes: RouteSDKType[];
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
