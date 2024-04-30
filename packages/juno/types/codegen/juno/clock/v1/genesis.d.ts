import { BinaryWriter } from "../../../binary";
/** GenesisState - initial state of module */
export interface GenesisState {
    /** Params of this module */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/juno.clock.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState - initial state of module */
export interface GenesisStateAmino {
    /** Params of this module */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/juno.clock.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState - initial state of module */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
}
/** Params defines the set of module parameters. */
export interface Params {
    /** contract_gas_limit defines the maximum amount of gas that can be used by a contract. */
    contractGasLimit: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/juno.clock.v1.Params";
    value: Uint8Array;
}
/** Params defines the set of module parameters. */
export interface ParamsAmino {
    /** contract_gas_limit defines the maximum amount of gas that can be used by a contract. */
    contract_gas_limit?: string;
}
export interface ParamsAminoMsg {
    type: "/juno.clock.v1.Params";
    value: ParamsAmino;
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
    contract_gas_limit: bigint;
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