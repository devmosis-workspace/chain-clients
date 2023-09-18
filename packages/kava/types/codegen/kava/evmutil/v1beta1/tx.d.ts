import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets. */
export interface MsgConvertCoinToERC20 {
    /** Kava bech32 address initiating the conversion. */
    initiator: string;
    /** EVM 0x hex address that will receive the converted Kava ERC20 tokens. */
    receiver: string;
    /** Amount is the sdk.Coin amount to convert. */
    amount: Coin;
}
export interface MsgConvertCoinToERC20ProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20";
    value: Uint8Array;
}
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets. */
export interface MsgConvertCoinToERC20Amino {
    /** Kava bech32 address initiating the conversion. */
    initiator: string;
    /** EVM 0x hex address that will receive the converted Kava ERC20 tokens. */
    receiver: string;
    /** Amount is the sdk.Coin amount to convert. */
    amount?: CoinAmino;
}
export interface MsgConvertCoinToERC20AminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20";
    value: MsgConvertCoinToERC20Amino;
}
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets. */
export interface MsgConvertCoinToERC20SDKType {
    initiator: string;
    receiver: string;
    amount: CoinSDKType;
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20Response {
}
export interface MsgConvertCoinToERC20ResponseProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20Response";
    value: Uint8Array;
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20ResponseAmino {
}
export interface MsgConvertCoinToERC20ResponseAminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20Response";
    value: MsgConvertCoinToERC20ResponseAmino;
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
export interface MsgConvertERC20ToCoinProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin";
    value: Uint8Array;
}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin for EVM-native assets. */
export interface MsgConvertERC20ToCoinAmino {
    /** EVM 0x hex address initiating the conversion. */
    initiator: string;
    /** Kava bech32 address that will receive the converted sdk.Coin. */
    receiver: string;
    /** EVM 0x hex address of the ERC20 contract. */
    kava_erc20_address: string;
    /** ERC20 token amount to convert. */
    amount: string;
}
export interface MsgConvertERC20ToCoinAminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin";
    value: MsgConvertERC20ToCoinAmino;
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
export interface MsgConvertERC20ToCoinResponseProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoinResponse";
    value: Uint8Array;
}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */
export interface MsgConvertERC20ToCoinResponseAmino {
}
export interface MsgConvertERC20ToCoinResponseAminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoinResponse";
    value: MsgConvertERC20ToCoinResponseAmino;
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
    amount: Coin;
}
export interface MsgConvertCosmosCoinToERC20ProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20";
    value: Uint8Array;
}
/** MsgConvertCosmosCoinToERC20 defines a conversion from cosmos sdk.Coin to ERC20 for cosmos-native assets. */
export interface MsgConvertCosmosCoinToERC20Amino {
    /** Kava bech32 address initiating the conversion. */
    initiator: string;
    /** EVM hex address that will receive the ERC20 tokens. */
    receiver: string;
    /** Amount is the sdk.Coin amount to convert. */
    amount?: CoinAmino;
}
export interface MsgConvertCosmosCoinToERC20AminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20";
    value: MsgConvertCosmosCoinToERC20Amino;
}
/** MsgConvertCosmosCoinToERC20 defines a conversion from cosmos sdk.Coin to ERC20 for cosmos-native assets. */
export interface MsgConvertCosmosCoinToERC20SDKType {
    initiator: string;
    receiver: string;
    amount: CoinSDKType;
}
/** MsgConvertCosmosCoinToERC20Response defines the response value from Msg/MsgConvertCosmosCoinToERC20. */
export interface MsgConvertCosmosCoinToERC20Response {
}
export interface MsgConvertCosmosCoinToERC20ResponseProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20Response";
    value: Uint8Array;
}
/** MsgConvertCosmosCoinToERC20Response defines the response value from Msg/MsgConvertCosmosCoinToERC20. */
export interface MsgConvertCosmosCoinToERC20ResponseAmino {
}
export interface MsgConvertCosmosCoinToERC20ResponseAminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20Response";
    value: MsgConvertCosmosCoinToERC20ResponseAmino;
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
    amount: Coin;
}
export interface MsgConvertCosmosCoinFromERC20ProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20";
    value: Uint8Array;
}
/** MsgConvertCosmosCoinFromERC20 defines a conversion from ERC20 to cosmos coins for cosmos-native assets. */
export interface MsgConvertCosmosCoinFromERC20Amino {
    /** EVM hex address initiating the conversion. */
    initiator: string;
    /** Kava bech32 address that will receive the cosmos coins. */
    receiver: string;
    /** Amount is the amount to convert, expressed as a Cosmos coin. */
    amount?: CoinAmino;
}
export interface MsgConvertCosmosCoinFromERC20AminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20";
    value: MsgConvertCosmosCoinFromERC20Amino;
}
/** MsgConvertCosmosCoinFromERC20 defines a conversion from ERC20 to cosmos coins for cosmos-native assets. */
export interface MsgConvertCosmosCoinFromERC20SDKType {
    initiator: string;
    receiver: string;
    amount: CoinSDKType;
}
/** MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20. */
export interface MsgConvertCosmosCoinFromERC20Response {
}
export interface MsgConvertCosmosCoinFromERC20ResponseProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20Response";
    value: Uint8Array;
}
/** MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20. */
export interface MsgConvertCosmosCoinFromERC20ResponseAmino {
}
export interface MsgConvertCosmosCoinFromERC20ResponseAminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20Response";
    value: MsgConvertCosmosCoinFromERC20ResponseAmino;
}
/** MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20. */
export interface MsgConvertCosmosCoinFromERC20ResponseSDKType {
}
export declare const MsgConvertCoinToERC20: {
    typeUrl: string;
    encode(message: MsgConvertCoinToERC20, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConvertCoinToERC20;
    fromPartial(object: Partial<MsgConvertCoinToERC20>): MsgConvertCoinToERC20;
    fromAmino(object: MsgConvertCoinToERC20Amino): MsgConvertCoinToERC20;
    toAmino(message: MsgConvertCoinToERC20): MsgConvertCoinToERC20Amino;
    fromAminoMsg(object: MsgConvertCoinToERC20AminoMsg): MsgConvertCoinToERC20;
    fromProtoMsg(message: MsgConvertCoinToERC20ProtoMsg): MsgConvertCoinToERC20;
    toProto(message: MsgConvertCoinToERC20): Uint8Array;
    toProtoMsg(message: MsgConvertCoinToERC20): MsgConvertCoinToERC20ProtoMsg;
};
export declare const MsgConvertCoinToERC20Response: {
    typeUrl: string;
    encode(_: MsgConvertCoinToERC20Response, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConvertCoinToERC20Response;
    fromPartial(_: Partial<MsgConvertCoinToERC20Response>): MsgConvertCoinToERC20Response;
    fromAmino(_: MsgConvertCoinToERC20ResponseAmino): MsgConvertCoinToERC20Response;
    toAmino(_: MsgConvertCoinToERC20Response): MsgConvertCoinToERC20ResponseAmino;
    fromAminoMsg(object: MsgConvertCoinToERC20ResponseAminoMsg): MsgConvertCoinToERC20Response;
    fromProtoMsg(message: MsgConvertCoinToERC20ResponseProtoMsg): MsgConvertCoinToERC20Response;
    toProto(message: MsgConvertCoinToERC20Response): Uint8Array;
    toProtoMsg(message: MsgConvertCoinToERC20Response): MsgConvertCoinToERC20ResponseProtoMsg;
};
export declare const MsgConvertERC20ToCoin: {
    typeUrl: string;
    encode(message: MsgConvertERC20ToCoin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConvertERC20ToCoin;
    fromPartial(object: Partial<MsgConvertERC20ToCoin>): MsgConvertERC20ToCoin;
    fromAmino(object: MsgConvertERC20ToCoinAmino): MsgConvertERC20ToCoin;
    toAmino(message: MsgConvertERC20ToCoin): MsgConvertERC20ToCoinAmino;
    fromAminoMsg(object: MsgConvertERC20ToCoinAminoMsg): MsgConvertERC20ToCoin;
    fromProtoMsg(message: MsgConvertERC20ToCoinProtoMsg): MsgConvertERC20ToCoin;
    toProto(message: MsgConvertERC20ToCoin): Uint8Array;
    toProtoMsg(message: MsgConvertERC20ToCoin): MsgConvertERC20ToCoinProtoMsg;
};
export declare const MsgConvertERC20ToCoinResponse: {
    typeUrl: string;
    encode(_: MsgConvertERC20ToCoinResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConvertERC20ToCoinResponse;
    fromPartial(_: Partial<MsgConvertERC20ToCoinResponse>): MsgConvertERC20ToCoinResponse;
    fromAmino(_: MsgConvertERC20ToCoinResponseAmino): MsgConvertERC20ToCoinResponse;
    toAmino(_: MsgConvertERC20ToCoinResponse): MsgConvertERC20ToCoinResponseAmino;
    fromAminoMsg(object: MsgConvertERC20ToCoinResponseAminoMsg): MsgConvertERC20ToCoinResponse;
    fromProtoMsg(message: MsgConvertERC20ToCoinResponseProtoMsg): MsgConvertERC20ToCoinResponse;
    toProto(message: MsgConvertERC20ToCoinResponse): Uint8Array;
    toProtoMsg(message: MsgConvertERC20ToCoinResponse): MsgConvertERC20ToCoinResponseProtoMsg;
};
export declare const MsgConvertCosmosCoinToERC20: {
    typeUrl: string;
    encode(message: MsgConvertCosmosCoinToERC20, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConvertCosmosCoinToERC20;
    fromPartial(object: Partial<MsgConvertCosmosCoinToERC20>): MsgConvertCosmosCoinToERC20;
    fromAmino(object: MsgConvertCosmosCoinToERC20Amino): MsgConvertCosmosCoinToERC20;
    toAmino(message: MsgConvertCosmosCoinToERC20): MsgConvertCosmosCoinToERC20Amino;
    fromAminoMsg(object: MsgConvertCosmosCoinToERC20AminoMsg): MsgConvertCosmosCoinToERC20;
    fromProtoMsg(message: MsgConvertCosmosCoinToERC20ProtoMsg): MsgConvertCosmosCoinToERC20;
    toProto(message: MsgConvertCosmosCoinToERC20): Uint8Array;
    toProtoMsg(message: MsgConvertCosmosCoinToERC20): MsgConvertCosmosCoinToERC20ProtoMsg;
};
export declare const MsgConvertCosmosCoinToERC20Response: {
    typeUrl: string;
    encode(_: MsgConvertCosmosCoinToERC20Response, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConvertCosmosCoinToERC20Response;
    fromPartial(_: Partial<MsgConvertCosmosCoinToERC20Response>): MsgConvertCosmosCoinToERC20Response;
    fromAmino(_: MsgConvertCosmosCoinToERC20ResponseAmino): MsgConvertCosmosCoinToERC20Response;
    toAmino(_: MsgConvertCosmosCoinToERC20Response): MsgConvertCosmosCoinToERC20ResponseAmino;
    fromAminoMsg(object: MsgConvertCosmosCoinToERC20ResponseAminoMsg): MsgConvertCosmosCoinToERC20Response;
    fromProtoMsg(message: MsgConvertCosmosCoinToERC20ResponseProtoMsg): MsgConvertCosmosCoinToERC20Response;
    toProto(message: MsgConvertCosmosCoinToERC20Response): Uint8Array;
    toProtoMsg(message: MsgConvertCosmosCoinToERC20Response): MsgConvertCosmosCoinToERC20ResponseProtoMsg;
};
export declare const MsgConvertCosmosCoinFromERC20: {
    typeUrl: string;
    encode(message: MsgConvertCosmosCoinFromERC20, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConvertCosmosCoinFromERC20;
    fromPartial(object: Partial<MsgConvertCosmosCoinFromERC20>): MsgConvertCosmosCoinFromERC20;
    fromAmino(object: MsgConvertCosmosCoinFromERC20Amino): MsgConvertCosmosCoinFromERC20;
    toAmino(message: MsgConvertCosmosCoinFromERC20): MsgConvertCosmosCoinFromERC20Amino;
    fromAminoMsg(object: MsgConvertCosmosCoinFromERC20AminoMsg): MsgConvertCosmosCoinFromERC20;
    fromProtoMsg(message: MsgConvertCosmosCoinFromERC20ProtoMsg): MsgConvertCosmosCoinFromERC20;
    toProto(message: MsgConvertCosmosCoinFromERC20): Uint8Array;
    toProtoMsg(message: MsgConvertCosmosCoinFromERC20): MsgConvertCosmosCoinFromERC20ProtoMsg;
};
export declare const MsgConvertCosmosCoinFromERC20Response: {
    typeUrl: string;
    encode(_: MsgConvertCosmosCoinFromERC20Response, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConvertCosmosCoinFromERC20Response;
    fromPartial(_: Partial<MsgConvertCosmosCoinFromERC20Response>): MsgConvertCosmosCoinFromERC20Response;
    fromAmino(_: MsgConvertCosmosCoinFromERC20ResponseAmino): MsgConvertCosmosCoinFromERC20Response;
    toAmino(_: MsgConvertCosmosCoinFromERC20Response): MsgConvertCosmosCoinFromERC20ResponseAmino;
    fromAminoMsg(object: MsgConvertCosmosCoinFromERC20ResponseAminoMsg): MsgConvertCosmosCoinFromERC20Response;
    fromProtoMsg(message: MsgConvertCosmosCoinFromERC20ResponseProtoMsg): MsgConvertCosmosCoinFromERC20Response;
    toProto(message: MsgConvertCosmosCoinFromERC20Response): Uint8Array;
    toProtoMsg(message: MsgConvertCosmosCoinFromERC20Response): MsgConvertCosmosCoinFromERC20ResponseProtoMsg;
};
