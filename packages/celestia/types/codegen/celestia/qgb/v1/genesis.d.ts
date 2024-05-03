import { BinaryWriter } from "../../../binary";
/** Params represent the Quantum Gravity Bridge genesis and store parameters. */
export interface Params {
    dataCommitmentWindow: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/celestia.qgb.v1.Params";
    value: Uint8Array;
}
/** Params represent the Quantum Gravity Bridge genesis and store parameters. */
export interface ParamsAmino {
    data_commitment_window?: string;
}
export interface ParamsAminoMsg {
    type: "/celestia.qgb.v1.Params";
    value: ParamsAmino;
}
/** Params represent the Quantum Gravity Bridge genesis and store parameters. */
export interface ParamsSDKType {
    data_commitment_window: bigint;
}
/**
 * GenesisState struct, containing all persistent data required by the QGB
 * module
 */
export interface GenesisState {
    /**
     * GenesisState struct, containing all persistent data required by the QGB
     * module
     */
    params?: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/celestia.qgb.v1.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState struct, containing all persistent data required by the QGB
 * module
 */
export interface GenesisStateAmino {
    /**
     * GenesisState struct, containing all persistent data required by the QGB
     * module
     */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/celestia.qgb.v1.GenesisState";
    value: GenesisStateAmino;
}
/**
 * GenesisState struct, containing all persistent data required by the QGB
 * module
 */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
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
