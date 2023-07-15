import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoin {
    /**
     * coin is a Cosmos coin whose denomination is registered in a token pair. The coin
     * amount defines the amount of coins to convert.
     */
    coin?: Coin;
    /** receiver is the hex address to receive ERC20 token */
    receiver: string;
    /** sender is the cosmos bech32 address from the owner of the given Cosmos coins */
    sender: string;
}
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoinSDKType {
    coin?: CoinSDKType;
    receiver: string;
    sender: string;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponseSDKType {
}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20 {
    /** contract_address of an ERC20 token contract, that is registered in a token pair */
    contractAddress: string;
    /** amount of ERC20 tokens to convert */
    amount: string;
    /** receiver is the bech32 address to receive native Cosmos coins */
    receiver: string;
    /** sender is the hex address from the owner of the given ERC20 tokens */
    sender: string;
}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20SDKType {
    contract_address: string;
    amount: string;
    receiver: string;
    sender: string;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20Response {
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20ResponseSDKType {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for Erc20 parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/evm parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params?: Params;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for Erc20 parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params?: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgConvertCoin: {
    encode(message: MsgConvertCoin, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgConvertCoin;
    fromPartial(object: Partial<MsgConvertCoin>): MsgConvertCoin;
};
export declare const MsgConvertCoinResponse: {
    encode(_: MsgConvertCoinResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgConvertCoinResponse;
    fromPartial(_: Partial<MsgConvertCoinResponse>): MsgConvertCoinResponse;
};
export declare const MsgConvertERC20: {
    encode(message: MsgConvertERC20, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgConvertERC20;
    fromPartial(object: Partial<MsgConvertERC20>): MsgConvertERC20;
};
export declare const MsgConvertERC20Response: {
    encode(_: MsgConvertERC20Response, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgConvertERC20Response;
    fromPartial(_: Partial<MsgConvertERC20Response>): MsgConvertERC20Response;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
