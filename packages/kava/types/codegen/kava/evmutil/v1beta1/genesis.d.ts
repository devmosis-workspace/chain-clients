import { ConversionPair, ConversionPairAmino, ConversionPairSDKType, AllowedCosmosCoinERC20Token, AllowedCosmosCoinERC20TokenAmino, AllowedCosmosCoinERC20TokenSDKType } from "./conversion_pair";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisState {
    accounts: Account[];
    /** params defines all the parameters of the module. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisStateAmino {
    accounts: AccountAmino[];
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/kava.evmutil.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisStateSDKType {
    accounts: AccountSDKType[];
    params: ParamsSDKType;
}
/** BalanceAccount defines an account in the evmutil module. */
export interface Account {
    address: Uint8Array;
    /** balance indicates the amount of akava owned by the address. */
    balance: string;
}
export interface AccountProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.Account";
    value: Uint8Array;
}
/** BalanceAccount defines an account in the evmutil module. */
export interface AccountAmino {
    address: Uint8Array;
    /** balance indicates the amount of akava owned by the address. */
    balance: string;
}
export interface AccountAminoMsg {
    type: "/kava.evmutil.v1beta1.Account";
    value: AccountAmino;
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
export interface ParamsProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the evmutil module params */
export interface ParamsAmino {
    /**
     * enabled_conversion_pairs defines the list of conversion pairs allowed to be
     * converted between Kava ERC20 and sdk.Coin
     */
    enabled_conversion_pairs: ConversionPairAmino[];
    /**
     * allowed_cosmos_denoms is a list of denom & erc20 token metadata pairs.
     * if a denom is in the list, it is allowed to be converted to an erc20 in the evm.
     */
    allowed_cosmos_denoms: AllowedCosmosCoinERC20TokenAmino[];
}
export interface ParamsAminoMsg {
    type: "/kava.evmutil.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the evmutil module params */
export interface ParamsSDKType {
    enabled_conversion_pairs: ConversionPairSDKType[];
    allowed_cosmos_denoms: AllowedCosmosCoinERC20TokenSDKType[];
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
export declare const Account: {
    typeUrl: string;
    encode(message: Account, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Account;
    fromPartial(object: Partial<Account>): Account;
    fromAmino(object: AccountAmino): Account;
    toAmino(message: Account): AccountAmino;
    fromAminoMsg(object: AccountAminoMsg): Account;
    fromProtoMsg(message: AccountProtoMsg): Account;
    toProto(message: Account): Uint8Array;
    toProtoMsg(message: Account): AccountProtoMsg;
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
