import { TokenPair, TokenPairSDKType } from "./erc20";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the erc20 module parameters at genesis */
    params?: Params;
    /** token_pairs is a slice of the registered token pairs at genesis */
    tokenPairs: TokenPair[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
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
/** Params defines the erc20 module params */
export interface ParamsSDKType {
    enable_erc20: boolean;
    enable_evm_hook: boolean;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
