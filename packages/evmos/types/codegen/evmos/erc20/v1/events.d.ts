import * as _m0 from "protobufjs/minimal";
/** EventRegisterPair is an event emitted when a coin is registered. */
export interface EventRegisterPair {
    /** denom is the coin's denomination. */
    denom: string;
    /** erc20_address is the ERC20 contract address. */
    erc20Address: string;
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
/** EventConvertERC20 is an event emitted when an ERC20 is converted. */
export interface EventConvertERC20SDKType {
    sender: string;
    receiver: string;
    amount: string;
    denom: string;
    contract_address: string;
}
export declare const EventRegisterPair: {
    encode(message: EventRegisterPair, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRegisterPair;
    fromPartial(object: Partial<EventRegisterPair>): EventRegisterPair;
};
export declare const EventToggleTokenConversion: {
    encode(message: EventToggleTokenConversion, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventToggleTokenConversion;
    fromPartial(object: Partial<EventToggleTokenConversion>): EventToggleTokenConversion;
};
export declare const EventConvertCoin: {
    encode(message: EventConvertCoin, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventConvertCoin;
    fromPartial(object: Partial<EventConvertCoin>): EventConvertCoin;
};
export declare const EventConvertERC20: {
    encode(message: EventConvertERC20, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventConvertERC20;
    fromPartial(object: Partial<EventConvertERC20>): EventConvertERC20;
};
