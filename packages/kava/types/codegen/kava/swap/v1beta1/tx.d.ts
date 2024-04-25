import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgDeposit represents a message for depositing liquidity into a pool */
export interface MsgDeposit {
    /** depositor represents the address to deposit funds from */
    depositor: string;
    /** token_a represents one token of deposit pair */
    tokenA: Coin;
    /** token_b represents one token of deposit pair */
    tokenB: Coin;
    /** slippage represents the max decimal percentage price change */
    slippage: string;
    /** deadline represents the unix timestamp to complete the deposit by */
    deadline: bigint;
}
export interface MsgDepositProtoMsg {
    typeUrl: "/kava.swap.v1beta1.MsgDeposit";
    value: Uint8Array;
}
/** MsgDeposit represents a message for depositing liquidity into a pool */
export interface MsgDepositAmino {
    /** depositor represents the address to deposit funds from */
    depositor?: string;
    /** token_a represents one token of deposit pair */
    token_a?: CoinAmino;
    /** token_b represents one token of deposit pair */
    token_b?: CoinAmino;
    /** slippage represents the max decimal percentage price change */
    slippage?: string;
    /** deadline represents the unix timestamp to complete the deposit by */
    deadline?: string;
}
export interface MsgDepositAminoMsg {
    type: "/kava.swap.v1beta1.MsgDeposit";
    value: MsgDepositAmino;
}
/** MsgDeposit represents a message for depositing liquidity into a pool */
export interface MsgDepositSDKType {
    depositor: string;
    token_a: CoinSDKType;
    token_b: CoinSDKType;
    slippage: string;
    deadline: bigint;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
export interface MsgDepositResponseProtoMsg {
    typeUrl: "/kava.swap.v1beta1.MsgDepositResponse";
    value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {
}
export interface MsgDepositResponseAminoMsg {
    type: "/kava.swap.v1beta1.MsgDepositResponse";
    value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
/** MsgWithdraw represents a message for withdrawing liquidity from a pool */
export interface MsgWithdraw {
    /** from represents the address we are withdrawing for */
    from: string;
    /** shares represents the amount of shares to withdraw */
    shares: string;
    /** min_token_a represents the minimum a token to withdraw */
    minTokenA: Coin;
    /** min_token_a represents the minimum a token to withdraw */
    minTokenB: Coin;
    /** deadline represents the unix timestamp to complete the withdraw by */
    deadline: bigint;
}
export interface MsgWithdrawProtoMsg {
    typeUrl: "/kava.swap.v1beta1.MsgWithdraw";
    value: Uint8Array;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a pool */
export interface MsgWithdrawAmino {
    /** from represents the address we are withdrawing for */
    from?: string;
    /** shares represents the amount of shares to withdraw */
    shares?: string;
    /** min_token_a represents the minimum a token to withdraw */
    min_token_a?: CoinAmino;
    /** min_token_a represents the minimum a token to withdraw */
    min_token_b?: CoinAmino;
    /** deadline represents the unix timestamp to complete the withdraw by */
    deadline?: string;
}
export interface MsgWithdrawAminoMsg {
    type: "/kava.swap.v1beta1.MsgWithdraw";
    value: MsgWithdrawAmino;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a pool */
export interface MsgWithdrawSDKType {
    from: string;
    shares: string;
    min_token_a: CoinSDKType;
    min_token_b: CoinSDKType;
    deadline: bigint;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
}
export interface MsgWithdrawResponseProtoMsg {
    typeUrl: "/kava.swap.v1beta1.MsgWithdrawResponse";
    value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {
}
export interface MsgWithdrawResponseAminoMsg {
    type: "/kava.swap.v1beta1.MsgWithdrawResponse";
    value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
}
/** MsgSwapExactForTokens represents a message for trading exact coinA for coinB */
export interface MsgSwapExactForTokens {
    /** represents the address swaping the tokens */
    requester: string;
    /** exact_token_a represents the exact amount to swap for token_b */
    exactTokenA: Coin;
    /** token_b represents the desired token_b to swap for */
    tokenB: Coin;
    /** slippage represents the maximum change in token_b allowed */
    slippage: string;
    /** deadline represents the unix timestamp to complete the swap by */
    deadline: bigint;
}
export interface MsgSwapExactForTokensProtoMsg {
    typeUrl: "/kava.swap.v1beta1.MsgSwapExactForTokens";
    value: Uint8Array;
}
/** MsgSwapExactForTokens represents a message for trading exact coinA for coinB */
export interface MsgSwapExactForTokensAmino {
    /** represents the address swaping the tokens */
    requester?: string;
    /** exact_token_a represents the exact amount to swap for token_b */
    exact_token_a?: CoinAmino;
    /** token_b represents the desired token_b to swap for */
    token_b?: CoinAmino;
    /** slippage represents the maximum change in token_b allowed */
    slippage?: string;
    /** deadline represents the unix timestamp to complete the swap by */
    deadline?: string;
}
export interface MsgSwapExactForTokensAminoMsg {
    type: "/kava.swap.v1beta1.MsgSwapExactForTokens";
    value: MsgSwapExactForTokensAmino;
}
/** MsgSwapExactForTokens represents a message for trading exact coinA for coinB */
export interface MsgSwapExactForTokensSDKType {
    requester: string;
    exact_token_a: CoinSDKType;
    token_b: CoinSDKType;
    slippage: string;
    deadline: bigint;
}
/**
 * MsgSwapExactForTokensResponse defines the Msg/SwapExactForTokens response
 * type.
 */
export interface MsgSwapExactForTokensResponse {
}
export interface MsgSwapExactForTokensResponseProtoMsg {
    typeUrl: "/kava.swap.v1beta1.MsgSwapExactForTokensResponse";
    value: Uint8Array;
}
/**
 * MsgSwapExactForTokensResponse defines the Msg/SwapExactForTokens response
 * type.
 */
export interface MsgSwapExactForTokensResponseAmino {
}
export interface MsgSwapExactForTokensResponseAminoMsg {
    type: "/kava.swap.v1beta1.MsgSwapExactForTokensResponse";
    value: MsgSwapExactForTokensResponseAmino;
}
/**
 * MsgSwapExactForTokensResponse defines the Msg/SwapExactForTokens response
 * type.
 */
export interface MsgSwapExactForTokensResponseSDKType {
}
/**
 * MsgSwapForExactTokens represents a message for trading coinA for an exact
 * coinB
 */
export interface MsgSwapForExactTokens {
    /** represents the address swaping the tokens */
    requester: string;
    /** token_a represents the desired token_a to swap for */
    tokenA: Coin;
    /** exact_token_b represents the exact token b amount to swap for token a */
    exactTokenB: Coin;
    /** slippage represents the maximum change in token_a allowed */
    slippage: string;
    /** deadline represents the unix timestamp to complete the swap by */
    deadline: bigint;
}
export interface MsgSwapForExactTokensProtoMsg {
    typeUrl: "/kava.swap.v1beta1.MsgSwapForExactTokens";
    value: Uint8Array;
}
/**
 * MsgSwapForExactTokens represents a message for trading coinA for an exact
 * coinB
 */
export interface MsgSwapForExactTokensAmino {
    /** represents the address swaping the tokens */
    requester?: string;
    /** token_a represents the desired token_a to swap for */
    token_a?: CoinAmino;
    /** exact_token_b represents the exact token b amount to swap for token a */
    exact_token_b?: CoinAmino;
    /** slippage represents the maximum change in token_a allowed */
    slippage?: string;
    /** deadline represents the unix timestamp to complete the swap by */
    deadline?: string;
}
export interface MsgSwapForExactTokensAminoMsg {
    type: "/kava.swap.v1beta1.MsgSwapForExactTokens";
    value: MsgSwapForExactTokensAmino;
}
/**
 * MsgSwapForExactTokens represents a message for trading coinA for an exact
 * coinB
 */
export interface MsgSwapForExactTokensSDKType {
    requester: string;
    token_a: CoinSDKType;
    exact_token_b: CoinSDKType;
    slippage: string;
    deadline: bigint;
}
/**
 * MsgSwapForExactTokensResponse defines the Msg/SwapForExactTokensResponse
 * response type.
 */
export interface MsgSwapForExactTokensResponse {
}
export interface MsgSwapForExactTokensResponseProtoMsg {
    typeUrl: "/kava.swap.v1beta1.MsgSwapForExactTokensResponse";
    value: Uint8Array;
}
/**
 * MsgSwapForExactTokensResponse defines the Msg/SwapForExactTokensResponse
 * response type.
 */
export interface MsgSwapForExactTokensResponseAmino {
}
export interface MsgSwapForExactTokensResponseAminoMsg {
    type: "/kava.swap.v1beta1.MsgSwapForExactTokensResponse";
    value: MsgSwapForExactTokensResponseAmino;
}
/**
 * MsgSwapForExactTokensResponse defines the Msg/SwapForExactTokensResponse
 * response type.
 */
export interface MsgSwapForExactTokensResponseSDKType {
}
export declare const MsgDeposit: {
    typeUrl: string;
    encode(message: MsgDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeposit;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
    fromAmino(object: MsgDepositAmino): MsgDeposit;
    toAmino(message: MsgDeposit): MsgDepositAmino;
    fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit;
    fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit;
    toProto(message: MsgDeposit): Uint8Array;
    toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg;
};
export declare const MsgDepositResponse: {
    typeUrl: string;
    encode(_: MsgDepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDepositResponse;
    fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse;
    fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(_: MsgDepositResponse): MsgDepositResponseAmino;
    fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse;
    fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse;
    toProto(message: MsgDepositResponse): Uint8Array;
    toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg;
};
export declare const MsgWithdraw: {
    typeUrl: string;
    encode(message: MsgWithdraw, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdraw;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
    fromAmino(object: MsgWithdrawAmino): MsgWithdraw;
    toAmino(message: MsgWithdraw): MsgWithdrawAmino;
    fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw;
    fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw;
    toProto(message: MsgWithdraw): Uint8Array;
    toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg;
};
export declare const MsgWithdrawResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawResponse;
    fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
    fromAmino(_: MsgWithdrawResponseAmino): MsgWithdrawResponse;
    toAmino(_: MsgWithdrawResponse): MsgWithdrawResponseAmino;
    fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse;
    fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse;
    toProto(message: MsgWithdrawResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg;
};
export declare const MsgSwapExactForTokens: {
    typeUrl: string;
    encode(message: MsgSwapExactForTokens, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSwapExactForTokens;
    fromPartial(object: Partial<MsgSwapExactForTokens>): MsgSwapExactForTokens;
    fromAmino(object: MsgSwapExactForTokensAmino): MsgSwapExactForTokens;
    toAmino(message: MsgSwapExactForTokens): MsgSwapExactForTokensAmino;
    fromAminoMsg(object: MsgSwapExactForTokensAminoMsg): MsgSwapExactForTokens;
    fromProtoMsg(message: MsgSwapExactForTokensProtoMsg): MsgSwapExactForTokens;
    toProto(message: MsgSwapExactForTokens): Uint8Array;
    toProtoMsg(message: MsgSwapExactForTokens): MsgSwapExactForTokensProtoMsg;
};
export declare const MsgSwapExactForTokensResponse: {
    typeUrl: string;
    encode(_: MsgSwapExactForTokensResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSwapExactForTokensResponse;
    fromPartial(_: Partial<MsgSwapExactForTokensResponse>): MsgSwapExactForTokensResponse;
    fromAmino(_: MsgSwapExactForTokensResponseAmino): MsgSwapExactForTokensResponse;
    toAmino(_: MsgSwapExactForTokensResponse): MsgSwapExactForTokensResponseAmino;
    fromAminoMsg(object: MsgSwapExactForTokensResponseAminoMsg): MsgSwapExactForTokensResponse;
    fromProtoMsg(message: MsgSwapExactForTokensResponseProtoMsg): MsgSwapExactForTokensResponse;
    toProto(message: MsgSwapExactForTokensResponse): Uint8Array;
    toProtoMsg(message: MsgSwapExactForTokensResponse): MsgSwapExactForTokensResponseProtoMsg;
};
export declare const MsgSwapForExactTokens: {
    typeUrl: string;
    encode(message: MsgSwapForExactTokens, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSwapForExactTokens;
    fromPartial(object: Partial<MsgSwapForExactTokens>): MsgSwapForExactTokens;
    fromAmino(object: MsgSwapForExactTokensAmino): MsgSwapForExactTokens;
    toAmino(message: MsgSwapForExactTokens): MsgSwapForExactTokensAmino;
    fromAminoMsg(object: MsgSwapForExactTokensAminoMsg): MsgSwapForExactTokens;
    fromProtoMsg(message: MsgSwapForExactTokensProtoMsg): MsgSwapForExactTokens;
    toProto(message: MsgSwapForExactTokens): Uint8Array;
    toProtoMsg(message: MsgSwapForExactTokens): MsgSwapForExactTokensProtoMsg;
};
export declare const MsgSwapForExactTokensResponse: {
    typeUrl: string;
    encode(_: MsgSwapForExactTokensResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSwapForExactTokensResponse;
    fromPartial(_: Partial<MsgSwapForExactTokensResponse>): MsgSwapForExactTokensResponse;
    fromAmino(_: MsgSwapForExactTokensResponseAmino): MsgSwapForExactTokensResponse;
    toAmino(_: MsgSwapForExactTokensResponse): MsgSwapForExactTokensResponseAmino;
    fromAminoMsg(object: MsgSwapForExactTokensResponseAminoMsg): MsgSwapForExactTokensResponse;
    fromProtoMsg(message: MsgSwapForExactTokensResponseProtoMsg): MsgSwapForExactTokensResponse;
    toProto(message: MsgSwapForExactTokensResponse): Uint8Array;
    toProtoMsg(message: MsgSwapForExactTokensResponse): MsgSwapForExactTokensResponseProtoMsg;
};
