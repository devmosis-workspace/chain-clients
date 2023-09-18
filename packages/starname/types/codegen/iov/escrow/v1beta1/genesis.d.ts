import { Escrow, EscrowAmino, EscrowSDKType } from "./types";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the Escrow module's genesis state */
export interface GenesisState {
    escrows: Escrow[];
    lastBlockTime: bigint;
    nextEscrowId: bigint;
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the Escrow module's genesis state */
export interface GenesisStateAmino {
    escrows: EscrowAmino[];
    last_block_time: string;
    next_escrow_id: string;
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the Escrow module's genesis state */
export interface GenesisStateSDKType {
    escrows: EscrowSDKType[];
    last_block_time: bigint;
    next_escrow_id: bigint;
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
