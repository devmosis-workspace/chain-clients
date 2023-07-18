import * as _m0 from "protobufjs/minimal";
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
    encode(message: ConversionPair, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConversionPair;
    fromPartial(object: Partial<ConversionPair>): ConversionPair;
};
export declare const AllowedCosmosCoinERC20Token: {
    encode(message: AllowedCosmosCoinERC20Token, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AllowedCosmosCoinERC20Token;
    fromPartial(object: Partial<AllowedCosmosCoinERC20Token>): AllowedCosmosCoinERC20Token;
};
