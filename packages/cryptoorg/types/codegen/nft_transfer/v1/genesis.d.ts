import { ClassTrace, ClassTraceAmino, ClassTraceSDKType } from "./trace";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the ibc-nft-transfer genesis state */
export interface GenesisState {
    portId: string;
    traces: ClassTrace[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the ibc-nft-transfer genesis state */
export interface GenesisStateAmino {
    port_id: string;
    traces: ClassTraceAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/chainmain.nft_transfer.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the ibc-nft-transfer genesis state */
export interface GenesisStateSDKType {
    port_id: string;
    traces: ClassTraceSDKType[];
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
