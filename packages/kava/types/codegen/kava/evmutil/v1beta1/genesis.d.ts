import { ConversionPair, ConversionPairSDKType, AllowedCosmosCoinERC20Token, AllowedCosmosCoinERC20TokenSDKType } from "./conversion_pair";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisState {
    accounts: Account[];
    /** params defines all the parameters of the module. */
    params?: Params;
}
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisStateSDKType {
    accounts: AccountSDKType[];
    params?: ParamsSDKType;
}
/** BalanceAccount defines an account in the evmutil module. */
export interface Account {
    address: Uint8Array;
    /** balance indicates the amount of akava owned by the address. */
    balance: string;
}
/** BalanceAccount defines an account in the evmutil module. */
export interface AccountSDKType {
    address: Uint8Array;
    balance: string;
}
/** Params defines the evmutil module params */
export interface Params {
    /**
     * enabled_conversion_pairs defines the list of conversion pairs allowed to be
     * converted between Kava ERC20 and sdk.Coin
     */
    enabledConversionPairs: ConversionPair[];
    /**
     * allowed_cosmos_denoms is a list of denom & erc20 token metadata pairs.
     * if a denom is in the list, it is allowed to be converted to an erc20 in the evm.
     */
    allowedCosmosDenoms: AllowedCosmosCoinERC20Token[];
}
/** Params defines the evmutil module params */
export interface ParamsSDKType {
    enabled_conversion_pairs: ConversionPairSDKType[];
    allowed_cosmos_denoms: AllowedCosmosCoinERC20TokenSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Account;
    fromPartial(object: Partial<Account>): Account;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
