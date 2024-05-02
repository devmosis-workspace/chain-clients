import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * MsgLockedSend represents a message to send and lock coins from one account to
 * another.
 */
export interface MsgLockedSend {
    fromAddress: string;
    toAddress: string;
    unlockerAddress: string;
    amount: Coin[];
}
export interface MsgLockedSendProtoMsg {
    typeUrl: "/shentu.bank.v1alpha1.MsgLockedSend";
    value: Uint8Array;
}
/**
 * MsgLockedSend represents a message to send and lock coins from one account to
 * another.
 */
export interface MsgLockedSendAmino {
    from_address?: string;
    to_address?: string;
    unlocker_address?: string;
    amount?: CoinAmino[];
}
export interface MsgLockedSendAminoMsg {
    type: "/shentu.bank.v1alpha1.MsgLockedSend";
    value: MsgLockedSendAmino;
}
/**
 * MsgLockedSend represents a message to send and lock coins from one account to
 * another.
 */
export interface MsgLockedSendSDKType {
    from_address: string;
    to_address: string;
    unlocker_address: string;
    amount: CoinSDKType[];
}
/** MsgLockedSendResponse defines the Msg/LockedSend response type. */
export interface MsgLockedSendResponse {
}
export interface MsgLockedSendResponseProtoMsg {
    typeUrl: "/shentu.bank.v1alpha1.MsgLockedSendResponse";
    value: Uint8Array;
}
/** MsgLockedSendResponse defines the Msg/LockedSend response type. */
export interface MsgLockedSendResponseAmino {
}
export interface MsgLockedSendResponseAminoMsg {
    type: "/shentu.bank.v1alpha1.MsgLockedSendResponse";
    value: MsgLockedSendResponseAmino;
}
/** MsgLockedSendResponse defines the Msg/LockedSend response type. */
export interface MsgLockedSendResponseSDKType {
}
export declare const MsgLockedSend: {
    typeUrl: string;
    encode(message: MsgLockedSend, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLockedSend;
    fromPartial(object: Partial<MsgLockedSend>): MsgLockedSend;
    fromAmino(object: MsgLockedSendAmino): MsgLockedSend;
    toAmino(message: MsgLockedSend): MsgLockedSendAmino;
    fromAminoMsg(object: MsgLockedSendAminoMsg): MsgLockedSend;
    fromProtoMsg(message: MsgLockedSendProtoMsg): MsgLockedSend;
    toProto(message: MsgLockedSend): Uint8Array;
    toProtoMsg(message: MsgLockedSend): MsgLockedSendProtoMsg;
};
export declare const MsgLockedSendResponse: {
    typeUrl: string;
    encode(_: MsgLockedSendResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgLockedSendResponse;
    fromPartial(_: Partial<MsgLockedSendResponse>): MsgLockedSendResponse;
    fromAmino(_: MsgLockedSendResponseAmino): MsgLockedSendResponse;
    toAmino(_: MsgLockedSendResponse): MsgLockedSendResponseAmino;
    fromAminoMsg(object: MsgLockedSendResponseAminoMsg): MsgLockedSendResponse;
    fromProtoMsg(message: MsgLockedSendResponseProtoMsg): MsgLockedSendResponse;
    toProto(message: MsgLockedSendResponse): Uint8Array;
    toProtoMsg(message: MsgLockedSendResponse): MsgLockedSendResponseProtoMsg;
};
