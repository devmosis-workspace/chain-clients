import { BinaryWriter } from "../../binary";
/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallback {
    /** ---------------------- Transfer Callback ---------------------- // */
    depositRecordId: bigint;
}
export interface TransferCallbackProtoMsg {
    typeUrl: "/stride.records.TransferCallback";
    value: Uint8Array;
}
/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallbackAmino {
    /** ---------------------- Transfer Callback ---------------------- // */
    deposit_record_id: string;
}
export interface TransferCallbackAminoMsg {
    type: "/stride.records.TransferCallback";
    value: TransferCallbackAmino;
}
/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallbackSDKType {
    deposit_record_id: bigint;
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
