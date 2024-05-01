import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * MsgRequestRedemption represents a message type to request a burn of qAssets
 * for native assets.
 */
export interface MsgRequestRedemption {
    value: Coin;
    destinationAddress: string;
    fromAddress: string;
}
export interface MsgRequestRedemptionProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption";
    value: Uint8Array;
}
/**
 * MsgRequestRedemption represents a message type to request a burn of qAssets
 * for native assets.
 */
export interface MsgRequestRedemptionAmino {
    value?: CoinAmino;
    destination_address?: string;
    from_address?: string;
}
export interface MsgRequestRedemptionAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgRequestRedemption";
    value: MsgRequestRedemptionAmino;
}
/**
 * MsgRequestRedemption represents a message type to request a burn of qAssets
 * for native assets.
 */
export interface MsgRequestRedemptionSDKType {
    value: CoinSDKType;
    destination_address: string;
    from_address: string;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgRequestRedemptionResponse {
}
export interface MsgRequestRedemptionResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse";
    value: Uint8Array;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgRequestRedemptionResponseAmino {
}
export interface MsgRequestRedemptionResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse";
    value: MsgRequestRedemptionResponseAmino;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgRequestRedemptionResponseSDKType {
}
/** MsgCancelQueuedRedemption represents a message type to cancel . */
export interface MsgCancelQueuedRedemption {
    chainId: string;
    hash: string;
    fromAddress: string;
}
export interface MsgCancelQueuedRedemptionProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption";
    value: Uint8Array;
}
/** MsgCancelQueuedRedemption represents a message type to cancel . */
export interface MsgCancelQueuedRedemptionAmino {
    chain_id?: string;
    hash?: string;
    from_address?: string;
}
export interface MsgCancelQueuedRedemptionAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption";
    value: MsgCancelQueuedRedemptionAmino;
}
/** MsgCancelQueuedRedemption represents a message type to cancel . */
export interface MsgCancelQueuedRedemptionSDKType {
    chain_id: string;
    hash: string;
    from_address: string;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgCancelQueuedRedemptionResponse {
    returned: Coin;
}
export interface MsgCancelQueuedRedemptionResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemptionResponse";
    value: Uint8Array;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgCancelQueuedRedemptionResponseAmino {
    returned?: CoinAmino;
}
export interface MsgCancelQueuedRedemptionResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemptionResponse";
    value: MsgCancelQueuedRedemptionResponseAmino;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgCancelQueuedRedemptionResponseSDKType {
    returned: CoinSDKType;
}
/**
 * MsgSignalIntent represents a message type for signalling voting intent for
 * one or more validators.
 */
export interface MsgSignalIntent {
    chainId: string;
    intents: string;
    fromAddress: string;
}
export interface MsgSignalIntentProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent";
    value: Uint8Array;
}
/**
 * MsgSignalIntent represents a message type for signalling voting intent for
 * one or more validators.
 */
export interface MsgSignalIntentAmino {
    chain_id?: string;
    intents?: string;
    from_address?: string;
}
export interface MsgSignalIntentAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgSignalIntent";
    value: MsgSignalIntentAmino;
}
/**
 * MsgSignalIntent represents a message type for signalling voting intent for
 * one or more validators.
 */
export interface MsgSignalIntentSDKType {
    chain_id: string;
    intents: string;
    from_address: string;
}
/** MsgSignalIntentResponse defines the MsgSignalIntent response type. */
export interface MsgSignalIntentResponse {
}
export interface MsgSignalIntentResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse";
    value: Uint8Array;
}
/** MsgSignalIntentResponse defines the MsgSignalIntent response type. */
export interface MsgSignalIntentResponseAmino {
}
export interface MsgSignalIntentResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse";
    value: MsgSignalIntentResponseAmino;
}
/** MsgSignalIntentResponse defines the MsgSignalIntent response type. */
export interface MsgSignalIntentResponseSDKType {
}
export declare const MsgRequestRedemption: {
    typeUrl: string;
    encode(message: MsgRequestRedemption, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRequestRedemption;
    fromPartial(object: Partial<MsgRequestRedemption>): MsgRequestRedemption;
    fromAmino(object: MsgRequestRedemptionAmino): MsgRequestRedemption;
    toAmino(message: MsgRequestRedemption): MsgRequestRedemptionAmino;
    fromAminoMsg(object: MsgRequestRedemptionAminoMsg): MsgRequestRedemption;
    fromProtoMsg(message: MsgRequestRedemptionProtoMsg): MsgRequestRedemption;
    toProto(message: MsgRequestRedemption): Uint8Array;
    toProtoMsg(message: MsgRequestRedemption): MsgRequestRedemptionProtoMsg;
};
export declare const MsgRequestRedemptionResponse: {
    typeUrl: string;
    encode(_: MsgRequestRedemptionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRequestRedemptionResponse;
    fromPartial(_: Partial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse;
    fromAmino(_: MsgRequestRedemptionResponseAmino): MsgRequestRedemptionResponse;
    toAmino(_: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseAmino;
    fromAminoMsg(object: MsgRequestRedemptionResponseAminoMsg): MsgRequestRedemptionResponse;
    fromProtoMsg(message: MsgRequestRedemptionResponseProtoMsg): MsgRequestRedemptionResponse;
    toProto(message: MsgRequestRedemptionResponse): Uint8Array;
    toProtoMsg(message: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseProtoMsg;
};
export declare const MsgCancelQueuedRedemption: {
    typeUrl: string;
    encode(message: MsgCancelQueuedRedemption, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelQueuedRedemption;
    fromPartial(object: Partial<MsgCancelQueuedRedemption>): MsgCancelQueuedRedemption;
    fromAmino(object: MsgCancelQueuedRedemptionAmino): MsgCancelQueuedRedemption;
    toAmino(message: MsgCancelQueuedRedemption): MsgCancelQueuedRedemptionAmino;
    fromAminoMsg(object: MsgCancelQueuedRedemptionAminoMsg): MsgCancelQueuedRedemption;
    fromProtoMsg(message: MsgCancelQueuedRedemptionProtoMsg): MsgCancelQueuedRedemption;
    toProto(message: MsgCancelQueuedRedemption): Uint8Array;
    toProtoMsg(message: MsgCancelQueuedRedemption): MsgCancelQueuedRedemptionProtoMsg;
};
export declare const MsgCancelQueuedRedemptionResponse: {
    typeUrl: string;
    encode(message: MsgCancelQueuedRedemptionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelQueuedRedemptionResponse;
    fromPartial(object: Partial<MsgCancelQueuedRedemptionResponse>): MsgCancelQueuedRedemptionResponse;
    fromAmino(object: MsgCancelQueuedRedemptionResponseAmino): MsgCancelQueuedRedemptionResponse;
    toAmino(message: MsgCancelQueuedRedemptionResponse): MsgCancelQueuedRedemptionResponseAmino;
    fromAminoMsg(object: MsgCancelQueuedRedemptionResponseAminoMsg): MsgCancelQueuedRedemptionResponse;
    fromProtoMsg(message: MsgCancelQueuedRedemptionResponseProtoMsg): MsgCancelQueuedRedemptionResponse;
    toProto(message: MsgCancelQueuedRedemptionResponse): Uint8Array;
    toProtoMsg(message: MsgCancelQueuedRedemptionResponse): MsgCancelQueuedRedemptionResponseProtoMsg;
};
export declare const MsgSignalIntent: {
    typeUrl: string;
    encode(message: MsgSignalIntent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSignalIntent;
    fromPartial(object: Partial<MsgSignalIntent>): MsgSignalIntent;
    fromAmino(object: MsgSignalIntentAmino): MsgSignalIntent;
    toAmino(message: MsgSignalIntent): MsgSignalIntentAmino;
    fromAminoMsg(object: MsgSignalIntentAminoMsg): MsgSignalIntent;
    fromProtoMsg(message: MsgSignalIntentProtoMsg): MsgSignalIntent;
    toProto(message: MsgSignalIntent): Uint8Array;
    toProtoMsg(message: MsgSignalIntent): MsgSignalIntentProtoMsg;
};
export declare const MsgSignalIntentResponse: {
    typeUrl: string;
    encode(_: MsgSignalIntentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSignalIntentResponse;
    fromPartial(_: Partial<MsgSignalIntentResponse>): MsgSignalIntentResponse;
    fromAmino(_: MsgSignalIntentResponseAmino): MsgSignalIntentResponse;
    toAmino(_: MsgSignalIntentResponse): MsgSignalIntentResponseAmino;
    fromAminoMsg(object: MsgSignalIntentResponseAminoMsg): MsgSignalIntentResponse;
    fromProtoMsg(message: MsgSignalIntentResponseProtoMsg): MsgSignalIntentResponse;
    toProto(message: MsgSignalIntentResponse): Uint8Array;
    toProtoMsg(message: MsgSignalIntentResponse): MsgSignalIntentResponseProtoMsg;
};
