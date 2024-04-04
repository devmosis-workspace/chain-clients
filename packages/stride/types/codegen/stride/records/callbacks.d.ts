import { LSMTokenDeposit, LSMTokenDepositAmino, LSMTokenDepositSDKType } from "./records";
import { BinaryWriter } from "../../binary";
export interface TransferCallback {
    depositRecordId: bigint;
}
export interface TransferCallbackProtoMsg {
    typeUrl: "/stride.records.TransferCallback";
    value: Uint8Array;
}
export interface TransferCallbackAmino {
    deposit_record_id?: string;
}
export interface TransferCallbackAminoMsg {
    type: "/stride.records.TransferCallback";
    value: TransferCallbackAmino;
}
export interface TransferCallbackSDKType {
    deposit_record_id: bigint;
}
export interface TransferLSMTokenCallback {
    deposit?: LSMTokenDeposit;
}
export interface TransferLSMTokenCallbackProtoMsg {
    typeUrl: "/stride.records.TransferLSMTokenCallback";
    value: Uint8Array;
}
export interface TransferLSMTokenCallbackAmino {
    deposit?: LSMTokenDepositAmino;
}
export interface TransferLSMTokenCallbackAminoMsg {
    type: "/stride.records.TransferLSMTokenCallback";
    value: TransferLSMTokenCallbackAmino;
}
export interface TransferLSMTokenCallbackSDKType {
    deposit?: LSMTokenDepositSDKType;
}
export declare const TransferCallback: {
    typeUrl: string;
    encode(message: TransferCallback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransferCallback;
    fromPartial(object: Partial<TransferCallback>): TransferCallback;
    fromAmino(object: TransferCallbackAmino): TransferCallback;
    toAmino(message: TransferCallback): TransferCallbackAmino;
    fromAminoMsg(object: TransferCallbackAminoMsg): TransferCallback;
    fromProtoMsg(message: TransferCallbackProtoMsg): TransferCallback;
    toProto(message: TransferCallback): Uint8Array;
    toProtoMsg(message: TransferCallback): TransferCallbackProtoMsg;
};
export declare const TransferLSMTokenCallback: {
    typeUrl: string;
    encode(message: TransferLSMTokenCallback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransferLSMTokenCallback;
    fromPartial(object: Partial<TransferLSMTokenCallback>): TransferLSMTokenCallback;
    fromAmino(object: TransferLSMTokenCallbackAmino): TransferLSMTokenCallback;
    toAmino(message: TransferLSMTokenCallback): TransferLSMTokenCallbackAmino;
    fromAminoMsg(object: TransferLSMTokenCallbackAminoMsg): TransferLSMTokenCallback;
    fromProtoMsg(message: TransferLSMTokenCallbackProtoMsg): TransferLSMTokenCallback;
    toProto(message: TransferLSMTokenCallback): Uint8Array;
    toProtoMsg(message: TransferLSMTokenCallback): TransferLSMTokenCallbackProtoMsg;
};
