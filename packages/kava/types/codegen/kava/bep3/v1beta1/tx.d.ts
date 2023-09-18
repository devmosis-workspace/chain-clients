import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwap {
    from: string;
    to: string;
    recipientOtherChain: string;
    senderOtherChain: string;
    randomNumberHash: string;
    timestamp: bigint;
    amount: Coin[];
    heightSpan: bigint;
}
export interface MsgCreateAtomicSwapProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwap";
    value: Uint8Array;
}
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwapAmino {
    from: string;
    to: string;
    recipient_other_chain: string;
    sender_other_chain: string;
    random_number_hash: string;
    timestamp: string;
    amount: CoinAmino[];
    height_span: string;
}
export interface MsgCreateAtomicSwapAminoMsg {
    type: "/kava.bep3.v1beta1.MsgCreateAtomicSwap";
    value: MsgCreateAtomicSwapAmino;
}
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwapSDKType {
    from: string;
    to: string;
    recipient_other_chain: string;
    sender_other_chain: string;
    random_number_hash: string;
    timestamp: bigint;
    amount: CoinSDKType[];
    height_span: bigint;
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponse {
}
export interface MsgCreateAtomicSwapResponseProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwapResponse";
    value: Uint8Array;
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponseAmino {
}
export interface MsgCreateAtomicSwapResponseAminoMsg {
    type: "/kava.bep3.v1beta1.MsgCreateAtomicSwapResponse";
    value: MsgCreateAtomicSwapResponseAmino;
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponseSDKType {
}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwap {
    from: string;
    swapId: string;
    randomNumber: string;
}
export interface MsgClaimAtomicSwapProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwap";
    value: Uint8Array;
}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwapAmino {
    from: string;
    swap_id: string;
    random_number: string;
}
export interface MsgClaimAtomicSwapAminoMsg {
    type: "/kava.bep3.v1beta1.MsgClaimAtomicSwap";
    value: MsgClaimAtomicSwapAmino;
}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwapSDKType {
    from: string;
    swap_id: string;
    random_number: string;
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponse {
}
export interface MsgClaimAtomicSwapResponseProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwapResponse";
    value: Uint8Array;
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponseAmino {
}
export interface MsgClaimAtomicSwapResponseAminoMsg {
    type: "/kava.bep3.v1beta1.MsgClaimAtomicSwapResponse";
    value: MsgClaimAtomicSwapResponseAmino;
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponseSDKType {
}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwap {
    from: string;
    swapId: string;
}
export interface MsgRefundAtomicSwapProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwap";
    value: Uint8Array;
}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwapAmino {
    from: string;
    swap_id: string;
}
export interface MsgRefundAtomicSwapAminoMsg {
    type: "/kava.bep3.v1beta1.MsgRefundAtomicSwap";
    value: MsgRefundAtomicSwapAmino;
}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwapSDKType {
    from: string;
    swap_id: string;
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponse {
}
export interface MsgRefundAtomicSwapResponseProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwapResponse";
    value: Uint8Array;
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponseAmino {
}
export interface MsgRefundAtomicSwapResponseAminoMsg {
    type: "/kava.bep3.v1beta1.MsgRefundAtomicSwapResponse";
    value: MsgRefundAtomicSwapResponseAmino;
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponseSDKType {
}
export declare const MsgCreateAtomicSwap: {
    typeUrl: string;
    encode(message: MsgCreateAtomicSwap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateAtomicSwap;
    fromPartial(object: Partial<MsgCreateAtomicSwap>): MsgCreateAtomicSwap;
    fromAmino(object: MsgCreateAtomicSwapAmino): MsgCreateAtomicSwap;
    toAmino(message: MsgCreateAtomicSwap): MsgCreateAtomicSwapAmino;
    fromAminoMsg(object: MsgCreateAtomicSwapAminoMsg): MsgCreateAtomicSwap;
    fromProtoMsg(message: MsgCreateAtomicSwapProtoMsg): MsgCreateAtomicSwap;
    toProto(message: MsgCreateAtomicSwap): Uint8Array;
    toProtoMsg(message: MsgCreateAtomicSwap): MsgCreateAtomicSwapProtoMsg;
};
export declare const MsgCreateAtomicSwapResponse: {
    typeUrl: string;
    encode(_: MsgCreateAtomicSwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateAtomicSwapResponse;
    fromPartial(_: Partial<MsgCreateAtomicSwapResponse>): MsgCreateAtomicSwapResponse;
    fromAmino(_: MsgCreateAtomicSwapResponseAmino): MsgCreateAtomicSwapResponse;
    toAmino(_: MsgCreateAtomicSwapResponse): MsgCreateAtomicSwapResponseAmino;
    fromAminoMsg(object: MsgCreateAtomicSwapResponseAminoMsg): MsgCreateAtomicSwapResponse;
    fromProtoMsg(message: MsgCreateAtomicSwapResponseProtoMsg): MsgCreateAtomicSwapResponse;
    toProto(message: MsgCreateAtomicSwapResponse): Uint8Array;
    toProtoMsg(message: MsgCreateAtomicSwapResponse): MsgCreateAtomicSwapResponseProtoMsg;
};
export declare const MsgClaimAtomicSwap: {
    typeUrl: string;
    encode(message: MsgClaimAtomicSwap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimAtomicSwap;
    fromPartial(object: Partial<MsgClaimAtomicSwap>): MsgClaimAtomicSwap;
    fromAmino(object: MsgClaimAtomicSwapAmino): MsgClaimAtomicSwap;
    toAmino(message: MsgClaimAtomicSwap): MsgClaimAtomicSwapAmino;
    fromAminoMsg(object: MsgClaimAtomicSwapAminoMsg): MsgClaimAtomicSwap;
    fromProtoMsg(message: MsgClaimAtomicSwapProtoMsg): MsgClaimAtomicSwap;
    toProto(message: MsgClaimAtomicSwap): Uint8Array;
    toProtoMsg(message: MsgClaimAtomicSwap): MsgClaimAtomicSwapProtoMsg;
};
export declare const MsgClaimAtomicSwapResponse: {
    typeUrl: string;
    encode(_: MsgClaimAtomicSwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimAtomicSwapResponse;
    fromPartial(_: Partial<MsgClaimAtomicSwapResponse>): MsgClaimAtomicSwapResponse;
    fromAmino(_: MsgClaimAtomicSwapResponseAmino): MsgClaimAtomicSwapResponse;
    toAmino(_: MsgClaimAtomicSwapResponse): MsgClaimAtomicSwapResponseAmino;
    fromAminoMsg(object: MsgClaimAtomicSwapResponseAminoMsg): MsgClaimAtomicSwapResponse;
    fromProtoMsg(message: MsgClaimAtomicSwapResponseProtoMsg): MsgClaimAtomicSwapResponse;
    toProto(message: MsgClaimAtomicSwapResponse): Uint8Array;
    toProtoMsg(message: MsgClaimAtomicSwapResponse): MsgClaimAtomicSwapResponseProtoMsg;
};
export declare const MsgRefundAtomicSwap: {
    typeUrl: string;
    encode(message: MsgRefundAtomicSwap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRefundAtomicSwap;
    fromPartial(object: Partial<MsgRefundAtomicSwap>): MsgRefundAtomicSwap;
    fromAmino(object: MsgRefundAtomicSwapAmino): MsgRefundAtomicSwap;
    toAmino(message: MsgRefundAtomicSwap): MsgRefundAtomicSwapAmino;
    fromAminoMsg(object: MsgRefundAtomicSwapAminoMsg): MsgRefundAtomicSwap;
    fromProtoMsg(message: MsgRefundAtomicSwapProtoMsg): MsgRefundAtomicSwap;
    toProto(message: MsgRefundAtomicSwap): Uint8Array;
    toProtoMsg(message: MsgRefundAtomicSwap): MsgRefundAtomicSwapProtoMsg;
};
export declare const MsgRefundAtomicSwapResponse: {
    typeUrl: string;
    encode(_: MsgRefundAtomicSwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRefundAtomicSwapResponse;
    fromPartial(_: Partial<MsgRefundAtomicSwapResponse>): MsgRefundAtomicSwapResponse;
    fromAmino(_: MsgRefundAtomicSwapResponseAmino): MsgRefundAtomicSwapResponse;
    toAmino(_: MsgRefundAtomicSwapResponse): MsgRefundAtomicSwapResponseAmino;
    fromAminoMsg(object: MsgRefundAtomicSwapResponseAminoMsg): MsgRefundAtomicSwapResponse;
    fromProtoMsg(message: MsgRefundAtomicSwapResponseProtoMsg): MsgRefundAtomicSwapResponse;
    toProto(message: MsgRefundAtomicSwapResponse): Uint8Array;
    toProtoMsg(message: MsgRefundAtomicSwapResponse): MsgRefundAtomicSwapResponseProtoMsg;
};
