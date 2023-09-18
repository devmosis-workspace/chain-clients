import { BinaryWriter } from "../../../binary";
/** EventRegisterPair is an event emitted when a coin is registered. */
export interface EventRegisterPair {
    /** denom is the coin's denomination. */
    denom: string;
    /** erc20_address is the ERC20 contract address. */
    erc20Address: string;
}
export interface EventRegisterPairProtoMsg {
    typeUrl: "/evmos.erc20.v1.EventRegisterPair";
    value: Uint8Array;
}
/** EventRegisterPair is an event emitted when a coin is registered. */
export interface EventRegisterPairAmino {
    /** denom is the coin's denomination. */
    denom: string;
    /** erc20_address is the ERC20 contract address. */
    erc20_address: string;
}
export interface EventRegisterPairAminoMsg {
    type: "/evmos.erc20.v1.EventRegisterPair";
    value: EventRegisterPairAmino;
}
/** EventRegisterPair is an event emitted when a coin is registered. */
export interface EventRegisterPairSDKType {
    denom: string;
    erc20_address: string;
}
/** EventToggleTokenConversion is an event emitted when a coin's token conversion is toggled. */
export interface EventToggleTokenConversion {
    /** denom is the coin's denomination. */
    denom: string;
    /** erc20_address is the ERC20 contract address. */
    erc20Address: string;
}
export interface EventToggleTokenConversionProtoMsg {
    typeUrl: "/evmos.erc20.v1.EventToggleTokenConversion";
    value: Uint8Array;
}
/** EventToggleTokenConversion is an event emitted when a coin's token conversion is toggled. */
export interface EventToggleTokenConversionAmino {
    /** denom is the coin's denomination. */
    denom: string;
    /** erc20_address is the ERC20 contract address. */
    erc20_address: string;
}
export interface EventToggleTokenConversionAminoMsg {
    type: "/evmos.erc20.v1.EventToggleTokenConversion";
    value: EventToggleTokenConversionAmino;
}
/** EventToggleTokenConversion is an event emitted when a coin's token conversion is toggled. */
export interface EventToggleTokenConversionSDKType {
    denom: string;
    erc20_address: string;
}
/** EventConvertCoin is an event emitted when a coin is converted. */
export interface EventConvertCoin {
    /** sender is the sender's address. */
    sender: string;
    /** receiver is the receiver's address. */
    receiver: string;
    /** amount is the amount of coins to be converted. */
    amount: string;
    /** denom is the coin's denomination. */
    denom: string;
    /** erc20_address is the ERC20 contract address. */
    erc20Address: string;
}
export interface EventConvertCoinProtoMsg {
    typeUrl: "/evmos.erc20.v1.EventConvertCoin";
    value: Uint8Array;
}
/** EventConvertCoin is an event emitted when a coin is converted. */
export interface EventConvertCoinAmino {
    /** sender is the sender's address. */
    sender: string;
    /** receiver is the receiver's address. */
    receiver: string;
    /** amount is the amount of coins to be converted. */
    amount: string;
    /** denom is the coin's denomination. */
    denom: string;
    /** erc20_address is the ERC20 contract address. */
    erc20_address: string;
}
export interface EventConvertCoinAminoMsg {
    type: "/evmos.erc20.v1.EventConvertCoin";
    value: EventConvertCoinAmino;
}
/** EventConvertCoin is an event emitted when a coin is converted. */
export interface EventConvertCoinSDKType {
    sender: string;
    receiver: string;
    amount: string;
    denom: string;
    erc20_address: string;
}
/** EventConvertERC20 is an event emitted when an ERC20 is converted. */
export interface EventConvertERC20 {
    /** sender is the sender's address. */
    sender: string;
    /** receiver is the receiver's address. */
    receiver: string;
    /** amount is the amount of coins to be converted. */
    amount: string;
    /** denom is the coin's denomination. */
    denom: string;
    /** contract_address of an ERC20 token contract, that is registered in a token pair */
    contractAddress: string;
}
export interface EventConvertERC20ProtoMsg {
    typeUrl: "/evmos.erc20.v1.EventConvertERC20";
    value: Uint8Array;
}
/** EventConvertERC20 is an event emitted when an ERC20 is converted. */
export interface EventConvertERC20Amino {
    /** sender is the sender's address. */
    sender: string;
    /** receiver is the receiver's address. */
    receiver: string;
    /** amount is the amount of coins to be converted. */
    amount: string;
    /** denom is the coin's denomination. */
    denom: string;
    /** contract_address of an ERC20 token contract, that is registered in a token pair */
    contract_address: string;
}
export interface EventConvertERC20AminoMsg {
    type: "/evmos.erc20.v1.EventConvertERC20";
    value: EventConvertERC20Amino;
}
/** EventConvertERC20 is an event emitted when an ERC20 is converted. */
export interface EventConvertERC20SDKType {
    sender: string;
    receiver: string;
    amount: string;
    denom: string;
    contract_address: string;
}
export declare const EventRegisterPair: {
    typeUrl: string;
    encode(message: EventRegisterPair, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRegisterPair;
    fromPartial(object: Partial<EventRegisterPair>): EventRegisterPair;
    fromAmino(object: EventRegisterPairAmino): EventRegisterPair;
    toAmino(message: EventRegisterPair): EventRegisterPairAmino;
    fromAminoMsg(object: EventRegisterPairAminoMsg): EventRegisterPair;
    fromProtoMsg(message: EventRegisterPairProtoMsg): EventRegisterPair;
    toProto(message: EventRegisterPair): Uint8Array;
    toProtoMsg(message: EventRegisterPair): EventRegisterPairProtoMsg;
};
export declare const EventToggleTokenConversion: {
    typeUrl: string;
    encode(message: EventToggleTokenConversion, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventToggleTokenConversion;
    fromPartial(object: Partial<EventToggleTokenConversion>): EventToggleTokenConversion;
    fromAmino(object: EventToggleTokenConversionAmino): EventToggleTokenConversion;
    toAmino(message: EventToggleTokenConversion): EventToggleTokenConversionAmino;
    fromAminoMsg(object: EventToggleTokenConversionAminoMsg): EventToggleTokenConversion;
    fromProtoMsg(message: EventToggleTokenConversionProtoMsg): EventToggleTokenConversion;
    toProto(message: EventToggleTokenConversion): Uint8Array;
    toProtoMsg(message: EventToggleTokenConversion): EventToggleTokenConversionProtoMsg;
};
export declare const EventConvertCoin: {
    typeUrl: string;
    encode(message: EventConvertCoin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventConvertCoin;
    fromPartial(object: Partial<EventConvertCoin>): EventConvertCoin;
    fromAmino(object: EventConvertCoinAmino): EventConvertCoin;
    toAmino(message: EventConvertCoin): EventConvertCoinAmino;
    fromAminoMsg(object: EventConvertCoinAminoMsg): EventConvertCoin;
    fromProtoMsg(message: EventConvertCoinProtoMsg): EventConvertCoin;
    toProto(message: EventConvertCoin): Uint8Array;
    toProtoMsg(message: EventConvertCoin): EventConvertCoinProtoMsg;
};
export declare const EventConvertERC20: {
    typeUrl: string;
    encode(message: EventConvertERC20, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventConvertERC20;
    fromPartial(object: Partial<EventConvertERC20>): EventConvertERC20;
    fromAmino(object: EventConvertERC20Amino): EventConvertERC20;
    toAmino(message: EventConvertERC20): EventConvertERC20Amino;
    fromAminoMsg(object: EventConvertERC20AminoMsg): EventConvertERC20;
    fromProtoMsg(message: EventConvertERC20ProtoMsg): EventConvertERC20;
    toProto(message: EventConvertERC20): Uint8Array;
    toProtoMsg(message: EventConvertERC20): EventConvertERC20ProtoMsg;
};
