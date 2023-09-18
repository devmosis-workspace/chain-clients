import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoin {
    /**
     * coin is a Cosmos coin whose denomination is registered in a token pair. The coin
     * amount defines the amount of coins to convert.
     */
    coin: Coin;
    /** receiver is the hex address to receive ERC20 token */
    receiver: string;
    /** sender is the cosmos bech32 address from the owner of the given Cosmos coins */
    sender: string;
}
export interface MsgConvertCoinProtoMsg {
    typeUrl: "/evmos.erc20.v1.MsgConvertCoin";
    value: Uint8Array;
}
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoinAmino {
    /**
     * coin is a Cosmos coin whose denomination is registered in a token pair. The coin
     * amount defines the amount of coins to convert.
     */
    coin?: CoinAmino;
    /** receiver is the hex address to receive ERC20 token */
    receiver: string;
    /** sender is the cosmos bech32 address from the owner of the given Cosmos coins */
    sender: string;
}
export interface MsgConvertCoinAminoMsg {
    type: "/evmos.erc20.v1.MsgConvertCoin";
    value: MsgConvertCoinAmino;
}
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoinSDKType {
    coin: CoinSDKType;
    receiver: string;
    sender: string;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {
}
export interface MsgConvertCoinResponseProtoMsg {
    typeUrl: "/evmos.erc20.v1.MsgConvertCoinResponse";
    value: Uint8Array;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponseAmino {
}
export interface MsgConvertCoinResponseAminoMsg {
    type: "/evmos.erc20.v1.MsgConvertCoinResponse";
    value: MsgConvertCoinResponseAmino;
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
export interface MsgConvertERC20ProtoMsg {
    typeUrl: "/evmos.erc20.v1.MsgConvertERC20";
    value: Uint8Array;
}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20Amino {
    /** contract_address of an ERC20 token contract, that is registered in a token pair */
    contract_address: string;
    /** amount of ERC20 tokens to convert */
    amount: string;
    /** receiver is the bech32 address to receive native Cosmos coins */
    receiver: string;
    /** sender is the hex address from the owner of the given ERC20 tokens */
    sender: string;
}
export interface MsgConvertERC20AminoMsg {
    type: "/evmos.erc20.v1.MsgConvertERC20";
    value: MsgConvertERC20Amino;
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
export interface MsgConvertERC20ResponseProtoMsg {
    typeUrl: "/evmos.erc20.v1.MsgConvertERC20Response";
    value: Uint8Array;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20ResponseAmino {
}
export interface MsgConvertERC20ResponseAminoMsg {
    type: "/evmos.erc20.v1.MsgConvertERC20Response";
    value: MsgConvertERC20ResponseAmino;
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
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/evmos.erc20.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for Erc20 parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/evm parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/evmos.erc20.v1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for Erc20 parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/evmos.erc20.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/evmos.erc20.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgConvertCoin: {
    typeUrl: string;
    encode(message: MsgConvertCoin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConvertCoin;
    fromPartial(object: Partial<MsgConvertCoin>): MsgConvertCoin;
    fromAmino(object: MsgConvertCoinAmino): MsgConvertCoin;
    toAmino(message: MsgConvertCoin): MsgConvertCoinAmino;
    fromAminoMsg(object: MsgConvertCoinAminoMsg): MsgConvertCoin;
    fromProtoMsg(message: MsgConvertCoinProtoMsg): MsgConvertCoin;
    toProto(message: MsgConvertCoin): Uint8Array;
    toProtoMsg(message: MsgConvertCoin): MsgConvertCoinProtoMsg;
};
export declare const MsgConvertCoinResponse: {
    typeUrl: string;
    encode(_: MsgConvertCoinResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConvertCoinResponse;
    fromPartial(_: Partial<MsgConvertCoinResponse>): MsgConvertCoinResponse;
    fromAmino(_: MsgConvertCoinResponseAmino): MsgConvertCoinResponse;
    toAmino(_: MsgConvertCoinResponse): MsgConvertCoinResponseAmino;
    fromAminoMsg(object: MsgConvertCoinResponseAminoMsg): MsgConvertCoinResponse;
    fromProtoMsg(message: MsgConvertCoinResponseProtoMsg): MsgConvertCoinResponse;
    toProto(message: MsgConvertCoinResponse): Uint8Array;
    toProtoMsg(message: MsgConvertCoinResponse): MsgConvertCoinResponseProtoMsg;
};
export declare const MsgConvertERC20: {
    typeUrl: string;
    encode(message: MsgConvertERC20, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConvertERC20;
    fromPartial(object: Partial<MsgConvertERC20>): MsgConvertERC20;
    fromAmino(object: MsgConvertERC20Amino): MsgConvertERC20;
    toAmino(message: MsgConvertERC20): MsgConvertERC20Amino;
    fromAminoMsg(object: MsgConvertERC20AminoMsg): MsgConvertERC20;
    fromProtoMsg(message: MsgConvertERC20ProtoMsg): MsgConvertERC20;
    toProto(message: MsgConvertERC20): Uint8Array;
    toProtoMsg(message: MsgConvertERC20): MsgConvertERC20ProtoMsg;
};
export declare const MsgConvertERC20Response: {
    typeUrl: string;
    encode(_: MsgConvertERC20Response, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConvertERC20Response;
    fromPartial(_: Partial<MsgConvertERC20Response>): MsgConvertERC20Response;
    fromAmino(_: MsgConvertERC20ResponseAmino): MsgConvertERC20Response;
    toAmino(_: MsgConvertERC20Response): MsgConvertERC20ResponseAmino;
    fromAminoMsg(object: MsgConvertERC20ResponseAminoMsg): MsgConvertERC20Response;
    fromProtoMsg(message: MsgConvertERC20ResponseProtoMsg): MsgConvertERC20Response;
    toProto(message: MsgConvertERC20Response): Uint8Array;
    toProtoMsg(message: MsgConvertERC20Response): MsgConvertERC20ResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
