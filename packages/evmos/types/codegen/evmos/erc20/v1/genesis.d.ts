import { TokenPair, TokenPairAmino, TokenPairSDKType } from "./erc20";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the erc20 module parameters at genesis */
    params: Params;
    /** token_pairs is a slice of the registered token pairs at genesis */
    tokenPairs: TokenPair[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/evmos.erc20.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
    /** params are the erc20 module parameters at genesis */
    params?: ParamsAmino;
    /** token_pairs is a slice of the registered token pairs at genesis */
    token_pairs: TokenPairAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/evmos.erc20.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    token_pairs: TokenPairSDKType[];
}
/** Params defines the erc20 module params */
export interface Params {
    /** enable_erc20 is the parameter to enable the conversion of Cosmos coins <--> ERC20 tokens. */
    enableErc20: boolean;
    /**
     * enable_evm_hook is the parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
     * Coin by transferring the Tokens through a MsgEthereumTx to the ModuleAddress Ethereum address.
     */
    enableEvmHook: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/evmos.erc20.v1.Params";
    value: Uint8Array;
}
/** Params defines the erc20 module params */
export interface ParamsAmino {
    /** enable_erc20 is the parameter to enable the conversion of Cosmos coins <--> ERC20 tokens. */
    enable_erc20: boolean;
    /**
     * enable_evm_hook is the parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
     * Coin by transferring the Tokens through a MsgEthereumTx to the ModuleAddress Ethereum address.
     */
    enable_evm_hook: boolean;
}
export interface ParamsAminoMsg {
    type: "/evmos.erc20.v1.Params";
    value: ParamsAmino;
}
/** Params defines the erc20 module params */
export interface ParamsSDKType {
    enable_erc20: boolean;
    enable_evm_hook: boolean;
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
