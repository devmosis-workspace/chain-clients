import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * MsgUnlock defines a message for unlocking coins from a manual vesting
 * account.
 */
export interface MsgUnlock {
    issuer: string;
    account: string;
    unlockAmount: Coin[];
}
export interface MsgUnlockProtoMsg {
    typeUrl: "/shentu.auth.v1alpha1.MsgUnlock";
    value: Uint8Array;
}
/**
 * MsgUnlock defines a message for unlocking coins from a manual vesting
 * account.
 */
export interface MsgUnlockAmino {
    issuer?: string;
    account?: string;
    unlock_amount?: CoinAmino[];
}
export interface MsgUnlockAminoMsg {
    type: "/shentu.auth.v1alpha1.MsgUnlock";
    value: MsgUnlockAmino;
}
/**
 * MsgUnlock defines a message for unlocking coins from a manual vesting
 * account.
 */
export interface MsgUnlockSDKType {
    issuer: string;
    account: string;
    unlock_amount: CoinSDKType[];
}
/** MsgUnlockResponse defines the Msg/Unlock response type. */
export interface MsgUnlockResponse {
}
export interface MsgUnlockResponseProtoMsg {
    typeUrl: "/shentu.auth.v1alpha1.MsgUnlockResponse";
    value: Uint8Array;
}
/** MsgUnlockResponse defines the Msg/Unlock response type. */
export interface MsgUnlockResponseAmino {
}
export interface MsgUnlockResponseAminoMsg {
    type: "/shentu.auth.v1alpha1.MsgUnlockResponse";
    value: MsgUnlockResponseAmino;
}
/** MsgUnlockResponse defines the Msg/Unlock response type. */
export interface MsgUnlockResponseSDKType {
}
export declare const MsgUnlock: {
    typeUrl: string;
    encode(message: MsgUnlock, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnlock;
    fromPartial(object: Partial<MsgUnlock>): MsgUnlock;
    fromAmino(object: MsgUnlockAmino): MsgUnlock;
    toAmino(message: MsgUnlock): MsgUnlockAmino;
    fromAminoMsg(object: MsgUnlockAminoMsg): MsgUnlock;
    fromProtoMsg(message: MsgUnlockProtoMsg): MsgUnlock;
    toProto(message: MsgUnlock): Uint8Array;
    toProtoMsg(message: MsgUnlock): MsgUnlockProtoMsg;
};
export declare const MsgUnlockResponse: {
    typeUrl: string;
    encode(_: MsgUnlockResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnlockResponse;
    fromPartial(_: Partial<MsgUnlockResponse>): MsgUnlockResponse;
    fromAmino(_: MsgUnlockResponseAmino): MsgUnlockResponse;
    toAmino(_: MsgUnlockResponse): MsgUnlockResponseAmino;
    fromAminoMsg(object: MsgUnlockResponseAminoMsg): MsgUnlockResponse;
    fromProtoMsg(message: MsgUnlockResponseProtoMsg): MsgUnlockResponse;
    toProto(message: MsgUnlockResponse): Uint8Array;
    toProtoMsg(message: MsgUnlockResponse): MsgUnlockResponseProtoMsg;
};
