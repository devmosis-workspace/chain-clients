import { BinaryWriter } from "../../../binary";
/** GenesisState defines the safety module's genesis state */
export interface GenesisState {
}
export interface GenesisStateProtoMsg {
    typeUrl: "/mars.safety.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the safety module's genesis state */
export interface GenesisStateAmino {
}
export interface GenesisStateAminoMsg {
    type: "/mars.safety.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the safety module's genesis state */
export interface GenesisStateSDKType {
}
export declare const GenesisState: {
    typeUrl: string;
    encode(_: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): GenesisState;
    fromPartial(_: Partial<GenesisState>): GenesisState;
    fromAmino(_: GenesisStateAmino): GenesisState;
    toAmino(_: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
