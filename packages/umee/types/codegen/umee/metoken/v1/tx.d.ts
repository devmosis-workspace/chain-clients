import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType, Index, IndexAmino, IndexSDKType } from "./metoken";
import { BinaryWriter } from "../../../binary";
/** MsgSwap represents a user's request to swap assets for Index's meToken. */
export interface MsgSwap {
    /** User is the account address swapping assets and the signer of the message. */
    user: string;
    asset: Coin;
    metokenDenom: string;
}
export interface MsgSwapProtoMsg {
    typeUrl: "/umee.metoken.v1.MsgSwap";
    value: Uint8Array;
}
/** MsgSwap represents a user's request to swap assets for Index's meToken. */
export interface MsgSwapAmino {
    /** User is the account address swapping assets and the signer of the message. */
    user?: string;
    asset?: CoinAmino;
    metoken_denom?: string;
}
export interface MsgSwapAminoMsg {
    type: "/umee.metoken.v1.MsgSwap";
    value: MsgSwapAmino;
}
/** MsgSwap represents a user's request to swap assets for Index's meToken. */
export interface MsgSwapSDKType {
    user: string;
    asset: CoinSDKType;
    metoken_denom: string;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponse {
    /** Fee is the amount of accepted asset charged to the user as the fee for the transaction. */
    fee: Coin;
    /** Returned is the amount of Index's meToken minted and returned to the user. */
    returned: Coin;
}
export interface MsgSwapResponseProtoMsg {
    typeUrl: "/umee.metoken.v1.MsgSwapResponse";
    value: Uint8Array;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponseAmino {
    /** Fee is the amount of accepted asset charged to the user as the fee for the transaction. */
    fee?: CoinAmino;
    /** Returned is the amount of Index's meToken minted and returned to the user. */
    returned?: CoinAmino;
}
export interface MsgSwapResponseAminoMsg {
    type: "/umee.metoken.v1.MsgSwapResponse";
    value: MsgSwapResponseAmino;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponseSDKType {
    fee: CoinSDKType;
    returned: CoinSDKType;
}
/** MsgRedeem represents a user's request to redeem Index's meTokens for one of the accepted assets. */
export interface MsgRedeem {
    /** User is the account address redeeming assets and the signer of the message. */
    user: string;
    metoken: Coin;
    assetDenom: string;
}
export interface MsgRedeemProtoMsg {
    typeUrl: "/umee.metoken.v1.MsgRedeem";
    value: Uint8Array;
}
/** MsgRedeem represents a user's request to redeem Index's meTokens for one of the accepted assets. */
export interface MsgRedeemAmino {
    /** User is the account address redeeming assets and the signer of the message. */
    user?: string;
    metoken?: CoinAmino;
    asset_denom?: string;
}
export interface MsgRedeemAminoMsg {
    type: "/umee.metoken.v1.MsgRedeem";
    value: MsgRedeemAmino;
}
/** MsgRedeem represents a user's request to redeem Index's meTokens for one of the accepted assets. */
export interface MsgRedeemSDKType {
    user: string;
    metoken: CoinSDKType;
    asset_denom: string;
}
/** MsgRedeemResponse defines the Msg/Redeem response type. */
export interface MsgRedeemResponse {
    /** Returned is the amount of accepted asset returned to the user. */
    returned: Coin;
    /** Fee is the amount of accepted asset charged to the user as the fee for the transaction. */
    fee: Coin;
}
export interface MsgRedeemResponseProtoMsg {
    typeUrl: "/umee.metoken.v1.MsgRedeemResponse";
    value: Uint8Array;
}
/** MsgRedeemResponse defines the Msg/Redeem response type. */
export interface MsgRedeemResponseAmino {
    /** Returned is the amount of accepted asset returned to the user. */
    returned?: CoinAmino;
    /** Fee is the amount of accepted asset charged to the user as the fee for the transaction. */
    fee?: CoinAmino;
}
export interface MsgRedeemResponseAminoMsg {
    type: "/umee.metoken.v1.MsgRedeemResponse";
    value: MsgRedeemResponseAmino;
}
/** MsgRedeemResponse defines the Msg/Redeem response type. */
export interface MsgRedeemResponseSDKType {
    returned: CoinSDKType;
    fee: CoinSDKType;
}
/** MsgGovSetParams defines the Msg/GovSetParams request type. */
export interface MsgGovSetParams {
    /** authority must be the address of the governance account. */
    authority: string;
    params: Params;
}
export interface MsgGovSetParamsProtoMsg {
    typeUrl: "/umee.metoken.v1.MsgGovSetParams";
    value: Uint8Array;
}
/** MsgGovSetParams defines the Msg/GovSetParams request type. */
export interface MsgGovSetParamsAmino {
    /** authority must be the address of the governance account. */
    authority?: string;
    params?: ParamsAmino;
}
export interface MsgGovSetParamsAminoMsg {
    type: "/umee.metoken.v1.MsgGovSetParams";
    value: MsgGovSetParamsAmino;
}
/** MsgGovSetParams defines the Msg/GovSetParams request type. */
export interface MsgGovSetParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/** MsgGovSetParamsResponse defines the Msg/GovSetParams response type. */
export interface MsgGovSetParamsResponse {
}
export interface MsgGovSetParamsResponseProtoMsg {
    typeUrl: "/umee.metoken.v1.MsgGovSetParamsResponse";
    value: Uint8Array;
}
/** MsgGovSetParamsResponse defines the Msg/GovSetParams response type. */
export interface MsgGovSetParamsResponseAmino {
}
export interface MsgGovSetParamsResponseAminoMsg {
    type: "/umee.metoken.v1.MsgGovSetParamsResponse";
    value: MsgGovSetParamsResponseAmino;
}
/** MsgGovSetParamsResponse defines the Msg/GovSetParams response type. */
export interface MsgGovSetParamsResponseSDKType {
}
/** MsgGovUpdateRegistry defines the Msg/GovUpdateRegistry request type. */
export interface MsgGovUpdateRegistry {
    /** authority is the address of the governance account. */
    authority: string;
    /** add_index defines new index settings. */
    addIndex: Index[];
    /** update_index defines the new settings for existing index. */
    updateIndex: Index[];
}
export interface MsgGovUpdateRegistryProtoMsg {
    typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistry";
    value: Uint8Array;
}
/** MsgGovUpdateRegistry defines the Msg/GovUpdateRegistry request type. */
export interface MsgGovUpdateRegistryAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** add_index defines new index settings. */
    add_index?: IndexAmino[];
    /** update_index defines the new settings for existing index. */
    update_index?: IndexAmino[];
}
export interface MsgGovUpdateRegistryAminoMsg {
    type: "/umee.metoken.v1.MsgGovUpdateRegistry";
    value: MsgGovUpdateRegistryAmino;
}
/** MsgGovUpdateRegistry defines the Msg/GovUpdateRegistry request type. */
export interface MsgGovUpdateRegistrySDKType {
    authority: string;
    add_index: IndexSDKType[];
    update_index: IndexSDKType[];
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponse {
}
export interface MsgGovUpdateRegistryResponseProtoMsg {
    typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistryResponse";
    value: Uint8Array;
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponseAmino {
}
export interface MsgGovUpdateRegistryResponseAminoMsg {
    type: "/umee.metoken.v1.MsgGovUpdateRegistryResponse";
    value: MsgGovUpdateRegistryResponseAmino;
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponseSDKType {
}
export declare const MsgSwap: {
    typeUrl: string;
    encode(message: MsgSwap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSwap;
    fromPartial(object: Partial<MsgSwap>): MsgSwap;
    fromAmino(object: MsgSwapAmino): MsgSwap;
    toAmino(message: MsgSwap): MsgSwapAmino;
    fromAminoMsg(object: MsgSwapAminoMsg): MsgSwap;
    fromProtoMsg(message: MsgSwapProtoMsg): MsgSwap;
    toProto(message: MsgSwap): Uint8Array;
    toProtoMsg(message: MsgSwap): MsgSwapProtoMsg;
};
export declare const MsgSwapResponse: {
    typeUrl: string;
    encode(message: MsgSwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSwapResponse;
    fromPartial(object: Partial<MsgSwapResponse>): MsgSwapResponse;
    fromAmino(object: MsgSwapResponseAmino): MsgSwapResponse;
    toAmino(message: MsgSwapResponse): MsgSwapResponseAmino;
    fromAminoMsg(object: MsgSwapResponseAminoMsg): MsgSwapResponse;
    fromProtoMsg(message: MsgSwapResponseProtoMsg): MsgSwapResponse;
    toProto(message: MsgSwapResponse): Uint8Array;
    toProtoMsg(message: MsgSwapResponse): MsgSwapResponseProtoMsg;
};
export declare const MsgRedeem: {
    typeUrl: string;
    encode(message: MsgRedeem, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRedeem;
    fromPartial(object: Partial<MsgRedeem>): MsgRedeem;
    fromAmino(object: MsgRedeemAmino): MsgRedeem;
    toAmino(message: MsgRedeem): MsgRedeemAmino;
    fromAminoMsg(object: MsgRedeemAminoMsg): MsgRedeem;
    fromProtoMsg(message: MsgRedeemProtoMsg): MsgRedeem;
    toProto(message: MsgRedeem): Uint8Array;
    toProtoMsg(message: MsgRedeem): MsgRedeemProtoMsg;
};
export declare const MsgRedeemResponse: {
    typeUrl: string;
    encode(message: MsgRedeemResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRedeemResponse;
    fromPartial(object: Partial<MsgRedeemResponse>): MsgRedeemResponse;
    fromAmino(object: MsgRedeemResponseAmino): MsgRedeemResponse;
    toAmino(message: MsgRedeemResponse): MsgRedeemResponseAmino;
    fromAminoMsg(object: MsgRedeemResponseAminoMsg): MsgRedeemResponse;
    fromProtoMsg(message: MsgRedeemResponseProtoMsg): MsgRedeemResponse;
    toProto(message: MsgRedeemResponse): Uint8Array;
    toProtoMsg(message: MsgRedeemResponse): MsgRedeemResponseProtoMsg;
};
export declare const MsgGovSetParams: {
    typeUrl: string;
    encode(message: MsgGovSetParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovSetParams;
    fromPartial(object: Partial<MsgGovSetParams>): MsgGovSetParams;
    fromAmino(object: MsgGovSetParamsAmino): MsgGovSetParams;
    toAmino(message: MsgGovSetParams): MsgGovSetParamsAmino;
    fromAminoMsg(object: MsgGovSetParamsAminoMsg): MsgGovSetParams;
    fromProtoMsg(message: MsgGovSetParamsProtoMsg): MsgGovSetParams;
    toProto(message: MsgGovSetParams): Uint8Array;
    toProtoMsg(message: MsgGovSetParams): MsgGovSetParamsProtoMsg;
};
export declare const MsgGovSetParamsResponse: {
    typeUrl: string;
    encode(_: MsgGovSetParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovSetParamsResponse;
    fromPartial(_: Partial<MsgGovSetParamsResponse>): MsgGovSetParamsResponse;
    fromAmino(_: MsgGovSetParamsResponseAmino): MsgGovSetParamsResponse;
    toAmino(_: MsgGovSetParamsResponse): MsgGovSetParamsResponseAmino;
    fromAminoMsg(object: MsgGovSetParamsResponseAminoMsg): MsgGovSetParamsResponse;
    fromProtoMsg(message: MsgGovSetParamsResponseProtoMsg): MsgGovSetParamsResponse;
    toProto(message: MsgGovSetParamsResponse): Uint8Array;
    toProtoMsg(message: MsgGovSetParamsResponse): MsgGovSetParamsResponseProtoMsg;
};
export declare const MsgGovUpdateRegistry: {
    typeUrl: string;
    encode(message: MsgGovUpdateRegistry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovUpdateRegistry;
    fromPartial(object: Partial<MsgGovUpdateRegistry>): MsgGovUpdateRegistry;
    fromAmino(object: MsgGovUpdateRegistryAmino): MsgGovUpdateRegistry;
    toAmino(message: MsgGovUpdateRegistry): MsgGovUpdateRegistryAmino;
    fromAminoMsg(object: MsgGovUpdateRegistryAminoMsg): MsgGovUpdateRegistry;
    fromProtoMsg(message: MsgGovUpdateRegistryProtoMsg): MsgGovUpdateRegistry;
    toProto(message: MsgGovUpdateRegistry): Uint8Array;
    toProtoMsg(message: MsgGovUpdateRegistry): MsgGovUpdateRegistryProtoMsg;
};
export declare const MsgGovUpdateRegistryResponse: {
    typeUrl: string;
    encode(_: MsgGovUpdateRegistryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovUpdateRegistryResponse;
    fromPartial(_: Partial<MsgGovUpdateRegistryResponse>): MsgGovUpdateRegistryResponse;
    fromAmino(_: MsgGovUpdateRegistryResponseAmino): MsgGovUpdateRegistryResponse;
    toAmino(_: MsgGovUpdateRegistryResponse): MsgGovUpdateRegistryResponseAmino;
    fromAminoMsg(object: MsgGovUpdateRegistryResponseAminoMsg): MsgGovUpdateRegistryResponse;
    fromProtoMsg(message: MsgGovUpdateRegistryResponseProtoMsg): MsgGovUpdateRegistryResponse;
    toProto(message: MsgGovUpdateRegistryResponse): Uint8Array;
    toProtoMsg(message: MsgGovUpdateRegistryResponse): MsgGovUpdateRegistryResponseProtoMsg;
};
