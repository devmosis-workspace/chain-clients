import { BinaryWriter } from "../../../binary";
/** GenesisState - initial state of module */
export interface GenesisState {
    /** Params of this module */
    params: Params;
    /** staking_contract_addresses */
    stakingContractAddresses: string[];
    /** gov_contract_addresses */
    govContractAddresses: string[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/juno.cwhooks.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState - initial state of module */
export interface GenesisStateAmino {
    /** Params of this module */
    params?: ParamsAmino;
    /** staking_contract_addresses */
    staking_contract_addresses?: string[];
    /** gov_contract_addresses */
    gov_contract_addresses?: string[];
}
export interface GenesisStateAminoMsg {
    type: "/juno.cwhooks.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState - initial state of module */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    staking_contract_addresses: string[];
    gov_contract_addresses: string[];
}
/** Params defines the set of module parameters. */
export interface Params {
    /** contract_gas_limit is the contract call gas limit */
    contractGasLimit: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/juno.cwhooks.v1.Params";
    value: Uint8Array;
}
/** Params defines the set of module parameters. */
export interface ParamsAmino {
    /** contract_gas_limit is the contract call gas limit */
    contract_gas_limit?: string;
}
export interface ParamsAminoMsg {
    type: "/juno.cwhooks.v1.Params";
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
