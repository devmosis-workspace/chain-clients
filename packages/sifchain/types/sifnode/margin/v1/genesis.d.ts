import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { MTP, MTPAmino, MTPSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    params?: Params;
    mtpList: MTP[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/sifnode.margin.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    params?: ParamsAmino;
    mtp_list?: MTPAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/sifnode.margin.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    mtp_list: MTPSDKType[];
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
