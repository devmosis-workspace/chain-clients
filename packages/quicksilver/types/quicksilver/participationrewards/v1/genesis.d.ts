import { Params, ParamsAmino, ParamsSDKType, KeyedProtocolData, KeyedProtocolDataAmino, KeyedProtocolDataSDKType } from "./participationrewards";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisState {
    params: Params;
    protocolData: KeyedProtocolData[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/quicksilver.participationrewards.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    protocol_data?: KeyedProtocolDataAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/quicksilver.participationrewards.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    protocol_data: KeyedProtocolDataSDKType[];
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
