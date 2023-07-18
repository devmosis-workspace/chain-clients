import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets. */
export interface MsgConvertCoinToERC20 {
    /** Kava bech32 address initiating the conversion. */
    initiator: string;
    /** EVM 0x hex address that will receive the converted Kava ERC20 tokens. */
    receiver: string;
    /** Amount is the sdk.Coin amount to convert. */
    amount?: Coin;
}
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets. */
export interface MsgConvertCoinToERC20SDKType {
    initiator: string;
    receiver: string;
    amount?: CoinSDKType;
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20Response {
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20ResponseSDKType {
}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin for EVM-native assets. */
export interface MsgConvertERC20ToCoin {
    /** EVM 0x hex address initiating the conversion. */
    initiator: string;
    /** Kava bech32 address that will receive the converted sdk.Coin. */
    receiver: string;
    /** EVM 0x hex address of the ERC20 contract. */
    kavaErc20Address: string;
    /** ERC20 token amount to convert. */
    amount: string;
}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin for EVM-native assets. */
export interface MsgConvertERC20ToCoinSDKType {
    initiator: string;
    receiver: string;
    kava_erc20_address: string;
    amount: string;
}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */
export interface MsgConvertERC20ToCoinResponse {
}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */
export interface MsgConvertERC20ToCoinResponseSDKType {
}
/** MsgConvertCosmosCoinToERC20 defines a conversion from cosmos sdk.Coin to ERC20 for cosmos-native assets. */
export interface MsgConvertCosmosCoinToERC20 {
    /** Kava bech32 address initiating the conversion. */
    initiator: string;
    /** EVM hex address that will receive the ERC20 tokens. */
    receiver: string;
    /** Amount is the sdk.Coin amount to convert. */
    amount?: Coin;
}
/** MsgConvertCosmosCoinToERC20 defines a conversion from cosmos sdk.Coin to ERC20 for cosmos-native assets. */
export interface MsgConvertCosmosCoinToERC20SDKType {
    initiator: string;
    receiver: string;
    amount?: CoinSDKType;
}
/** MsgConvertCosmosCoinToERC20Response defines the response value from Msg/MsgConvertCosmosCoinToERC20. */
export interface MsgConvertCosmosCoinToERC20Response {
}
/** MsgConvertCosmosCoinToERC20Response defines the response value from Msg/MsgConvertCosmosCoinToERC20. */
export interface MsgConvertCosmosCoinToERC20ResponseSDKType {
}
/** MsgConvertCosmosCoinFromERC20 defines a conversion from ERC20 to cosmos coins for cosmos-native assets. */
export interface MsgConvertCosmosCoinFromERC20 {
    /** EVM hex address initiating the conversion. */
    initiator: string;
    /** Kava bech32 address that will receive the cosmos coins. */
    receiver: string;
    /** Amount is the amount to convert, expressed as a Cosmos coin. */
    amount?: Coin;
}
/** MsgConvertCosmosCoinFromERC20 defines a conversion from ERC20 to cosmos coins for cosmos-native assets. */
export interface MsgConvertCosmosCoinFromERC20SDKType {
    initiator: string;
    receiver: string;
    amount?: CoinSDKType;
}
/** MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20. */
export interface MsgConvertCosmosCoinFromERC20Response {
}
/** MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20. */
export interface MsgConvertCosmosCoinFromERC20ResponseSDKType {
}
export declare const MsgConvertCoinToERC20: {
    encode(message: MsgConvertCoinToERC20, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgConvertCoinToERC20;
    fromPartial(object: Partial<MsgConvertCoinToERC20>): MsgConvertCoinToERC20;
};
export declare const MsgConvertCoinToERC20Response: {
    encode(_: MsgConvertCoinToERC20Response, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgConvertCoinToERC20Response;
    fromPartial(_: Partial<MsgConvertCoinToERC20Response>): MsgConvertCoinToERC20Response;
};
export declare const MsgConvertERC20ToCoin: {
    encode(message: MsgConvertERC20ToCoin, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgConvertERC20ToCoin;
    fromPartial(object: Partial<MsgConvertERC20ToCoin>): MsgConvertERC20ToCoin;
};
export declare const MsgConvertERC20ToCoinResponse: {
    encode(_: MsgConvertERC20ToCoinResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgConvertERC20ToCoinResponse;
    fromPartial(_: Partial<MsgConvertERC20ToCoinResponse>): MsgConvertERC20ToCoinResponse;
};
export declare const MsgConvertCosmosCoinToERC20: {
    encode(message: MsgConvertCosmosCoinToERC20, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgConvertCosmosCoinToERC20;
    fromPartial(object: Partial<MsgConvertCosmosCoinToERC20>): MsgConvertCosmosCoinToERC20;
};
export declare const MsgConvertCosmosCoinToERC20Response: {
    encode(_: MsgConvertCosmosCoinToERC20Response, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgConvertCosmosCoinToERC20Response;
    fromPartial(_: Partial<MsgConvertCosmosCoinToERC20Response>): MsgConvertCosmosCoinToERC20Response;
};
export declare const MsgConvertCosmosCoinFromERC20: {
    encode(message: MsgConvertCosmosCoinFromERC20, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgConvertCosmosCoinFromERC20;
    fromPartial(object: Partial<MsgConvertCosmosCoinFromERC20>): MsgConvertCosmosCoinFromERC20;
};
export declare const MsgConvertCosmosCoinFromERC20Response: {
    encode(_: MsgConvertCosmosCoinFromERC20Response, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgConvertCosmosCoinFromERC20Response;
    fromPartial(_: Partial<MsgConvertCosmosCoinFromERC20Response>): MsgConvertCosmosCoinFromERC20Response;
};
