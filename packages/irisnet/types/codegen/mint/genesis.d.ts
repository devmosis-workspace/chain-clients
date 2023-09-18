import { Minter, MinterAmino, MinterSDKType, Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryWriter } from "../binary";
/** GenesisState defines the mint module's genesis state */
export interface GenesisState {
    minter: Minter;
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/irishub.mint.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the mint module's genesis state */
export interface GenesisStateAmino {
    minter?: MinterAmino;
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/irishub.mint.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state */
export interface GenesisStateSDKType {
    minter: MinterSDKType;
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
