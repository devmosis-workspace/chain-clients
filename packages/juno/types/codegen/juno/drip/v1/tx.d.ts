import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** MsgDistributeTokens defines a message that registers a Distribution of tokens. */
export interface MsgDistributeTokens {
    /** sender_address is the bech32 address of message sender. */
    senderAddress: string;
    /** amount is the amount being airdropped to stakers */
    amount: Coin[];
}
export interface MsgDistributeTokensProtoMsg {
    typeUrl: "/juno.drip.v1.MsgDistributeTokens";
    value: Uint8Array;
}
/** MsgDistributeTokens defines a message that registers a Distribution of tokens. */
export interface MsgDistributeTokensAmino {
    /** sender_address is the bech32 address of message sender. */
    sender_address?: string;
    /** amount is the amount being airdropped to stakers */
    amount: CoinAmino[];
}
export interface MsgDistributeTokensAminoMsg {
    type: "/juno.drip.v1.MsgDistributeTokens";
    value: MsgDistributeTokensAmino;
}
/** MsgDistributeTokens defines a message that registers a Distribution of tokens. */
export interface MsgDistributeTokensSDKType {
    sender_address: string;
    amount: CoinSDKType[];
}
/** MsgDistributeTokensResponse defines the MsgDistributeTokens response type */
export interface MsgDistributeTokensResponse {
}
export interface MsgDistributeTokensResponseProtoMsg {
    typeUrl: "/juno.drip.v1.MsgDistributeTokensResponse";
    value: Uint8Array;
}
/** MsgDistributeTokensResponse defines the MsgDistributeTokens response type */
export interface MsgDistributeTokensResponseAmino {
}
export interface MsgDistributeTokensResponseAminoMsg {
    type: "/juno.drip.v1.MsgDistributeTokensResponse";
    value: MsgDistributeTokensResponseAmino;
}
/** MsgDistributeTokensResponse defines the MsgDistributeTokens response type */
export interface MsgDistributeTokensResponseSDKType {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/auth parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/juno.drip.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority?: string;
    /**
     * params defines the x/auth parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "cosmos-sdk/x/auth/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/juno.drip.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/juno.drip.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgDistributeTokens: {
    typeUrl: string;
    encode(message: MsgDistributeTokens, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDistributeTokens;
    fromPartial(object: Partial<MsgDistributeTokens>): MsgDistributeTokens;
    fromAmino(object: MsgDistributeTokensAmino): MsgDistributeTokens;
    toAmino(message: MsgDistributeTokens): MsgDistributeTokensAmino;
    fromAminoMsg(object: MsgDistributeTokensAminoMsg): MsgDistributeTokens;
    fromProtoMsg(message: MsgDistributeTokensProtoMsg): MsgDistributeTokens;
    toProto(message: MsgDistributeTokens): Uint8Array;
    toProtoMsg(message: MsgDistributeTokens): MsgDistributeTokensProtoMsg;
};
export declare const MsgDistributeTokensResponse: {
    typeUrl: string;
    encode(_: MsgDistributeTokensResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDistributeTokensResponse;
    fromPartial(_: Partial<MsgDistributeTokensResponse>): MsgDistributeTokensResponse;
    fromAmino(_: MsgDistributeTokensResponseAmino): MsgDistributeTokensResponse;
    toAmino(_: MsgDistributeTokensResponse): MsgDistributeTokensResponseAmino;
    fromAminoMsg(object: MsgDistributeTokensResponseAminoMsg): MsgDistributeTokensResponse;
    fromProtoMsg(message: MsgDistributeTokensResponseProtoMsg): MsgDistributeTokensResponse;
    toProto(message: MsgDistributeTokensResponse): Uint8Array;
    toProtoMsg(message: MsgDistributeTokensResponse): MsgDistributeTokensResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
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
