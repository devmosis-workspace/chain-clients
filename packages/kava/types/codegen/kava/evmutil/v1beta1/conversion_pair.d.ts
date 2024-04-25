import { BinaryWriter } from "../../../binary";
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */
export interface ConversionPair {
    /** ERC20 address of the token on the Kava EVM */
    kavaErc20Address: Uint8Array;
    /** Denom of the corresponding sdk.Coin */
    denom: string;
}
export interface ConversionPairProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.ConversionPair";
    value: Uint8Array;
}
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */
export interface ConversionPairAmino {
    /** ERC20 address of the token on the Kava EVM */
    kava_erc20_address?: string;
    /** Denom of the corresponding sdk.Coin */
    denom?: string;
}
export interface ConversionPairAminoMsg {
    type: "/kava.evmutil.v1beta1.ConversionPair";
    value: ConversionPairAmino;
}
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */
export interface ConversionPairSDKType {
    kava_erc20_address: Uint8Array;
    denom: string;
}
/**
 * AllowedCosmosCoinERC20Token defines allowed cosmos-sdk denom & metadata
 * for evm token representations of sdk assets.
 * NOTE: once evm token contracts are deployed, changes to metadata for a given
 * cosmos_denom will not change metadata of deployed contract.
 */
export interface AllowedCosmosCoinERC20Token {
    /** Denom of the sdk.Coin */
    cosmosDenom: string;
    /** Name of ERC20 contract */
    name: string;
    /** Symbol of ERC20 contract */
    symbol: string;
    /** Number of decimals ERC20 contract is deployed with. */
    decimals: number;
}
export interface AllowedCosmosCoinERC20TokenProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.AllowedCosmosCoinERC20Token";
    value: Uint8Array;
}
/**
 * AllowedCosmosCoinERC20Token defines allowed cosmos-sdk denom & metadata
 * for evm token representations of sdk assets.
 * NOTE: once evm token contracts are deployed, changes to metadata for a given
 * cosmos_denom will not change metadata of deployed contract.
 */
export interface AllowedCosmosCoinERC20TokenAmino {
    /** Denom of the sdk.Coin */
    cosmos_denom?: string;
    /** Name of ERC20 contract */
    name?: string;
    /** Symbol of ERC20 contract */
    symbol?: string;
    /** Number of decimals ERC20 contract is deployed with. */
    decimals?: number;
}
export interface AllowedCosmosCoinERC20TokenAminoMsg {
    type: "/kava.evmutil.v1beta1.AllowedCosmosCoinERC20Token";
    value: AllowedCosmosCoinERC20TokenAmino;
}
/**
 * AllowedCosmosCoinERC20Token defines allowed cosmos-sdk denom & metadata
 * for evm token representations of sdk assets.
 * NOTE: once evm token contracts are deployed, changes to metadata for a given
 * cosmos_denom will not change metadata of deployed contract.
 */
export interface AllowedCosmosCoinERC20TokenSDKType {
    cosmos_denom: string;
    name: string;
    symbol: string;
    decimals: number;
}
export declare const ConversionPair: {
    typeUrl: string;
    encode(message: ConversionPair, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConversionPair;
    fromPartial(object: Partial<ConversionPair>): ConversionPair;
    fromAmino(object: ConversionPairAmino): ConversionPair;
    toAmino(message: ConversionPair): ConversionPairAmino;
    fromAminoMsg(object: ConversionPairAminoMsg): ConversionPair;
    fromProtoMsg(message: ConversionPairProtoMsg): ConversionPair;
    toProto(message: ConversionPair): Uint8Array;
    toProtoMsg(message: ConversionPair): ConversionPairProtoMsg;
};
export declare const AllowedCosmosCoinERC20Token: {
    typeUrl: string;
    encode(message: AllowedCosmosCoinERC20Token, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AllowedCosmosCoinERC20Token;
    fromPartial(object: Partial<AllowedCosmosCoinERC20Token>): AllowedCosmosCoinERC20Token;
    fromAmino(object: AllowedCosmosCoinERC20TokenAmino): AllowedCosmosCoinERC20Token;
    toAmino(message: AllowedCosmosCoinERC20Token): AllowedCosmosCoinERC20TokenAmino;
    fromAminoMsg(object: AllowedCosmosCoinERC20TokenAminoMsg): AllowedCosmosCoinERC20Token;
    fromProtoMsg(message: AllowedCosmosCoinERC20TokenProtoMsg): AllowedCosmosCoinERC20Token;
    toProto(message: AllowedCosmosCoinERC20Token): Uint8Array;
    toProtoMsg(message: AllowedCosmosCoinERC20Token): AllowedCosmosCoinERC20TokenProtoMsg;
};
