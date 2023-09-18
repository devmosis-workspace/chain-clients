import { BinaryWriter } from "../../binary";
/** IDSet represents a set of IDs */
export interface IDSet {
    /** IDSet represents a set of IDs */
    ids: bigint[];
}
export interface IDSetProtoMsg {
    typeUrl: "/gravity.v1.IDSet";
    value: Uint8Array;
}
/** IDSet represents a set of IDs */
export interface IDSetAmino {
    /** IDSet represents a set of IDs */
    ids: string[];
}
export interface IDSetAminoMsg {
    type: "/gravity.v1.IDSet";
    value: IDSetAmino;
}
/** IDSet represents a set of IDs */
export interface IDSetSDKType {
    ids: bigint[];
}
export interface BatchFees {
    token: string;
    totalFees: string;
    txCount: bigint;
}
export interface BatchFeesProtoMsg {
    typeUrl: "/gravity.v1.BatchFees";
    value: Uint8Array;
}
export interface BatchFeesAmino {
    token: string;
    total_fees: string;
    tx_count: string;
}
export interface BatchFeesAminoMsg {
    type: "/gravity.v1.BatchFees";
    value: BatchFeesAmino;
}
export interface BatchFeesSDKType {
    token: string;
    total_fees: string;
    tx_count: bigint;
}
export interface EventWithdrawalReceived {
    bridgeContract: string;
    bridgeChainId: string;
    outgoingTxId: string;
    nonce: string;
}
export interface EventWithdrawalReceivedProtoMsg {
    typeUrl: "/gravity.v1.EventWithdrawalReceived";
    value: Uint8Array;
}
export interface EventWithdrawalReceivedAmino {
    bridge_contract: string;
    bridge_chain_id: string;
    outgoing_tx_id: string;
    nonce: string;
}
export interface EventWithdrawalReceivedAminoMsg {
    type: "/gravity.v1.EventWithdrawalReceived";
    value: EventWithdrawalReceivedAmino;
}
export interface EventWithdrawalReceivedSDKType {
    bridge_contract: string;
    bridge_chain_id: string;
    outgoing_tx_id: string;
    nonce: string;
}
export interface EventWithdrawCanceled {
    sender: string;
    txId: string;
    bridgeContract: string;
    bridgeChainId: string;
}
export interface EventWithdrawCanceledProtoMsg {
    typeUrl: "/gravity.v1.EventWithdrawCanceled";
    value: Uint8Array;
}
export interface EventWithdrawCanceledAmino {
    sender: string;
    tx_id: string;
    bridge_contract: string;
    bridge_chain_id: string;
}
export interface EventWithdrawCanceledAminoMsg {
    type: "/gravity.v1.EventWithdrawCanceled";
    value: EventWithdrawCanceledAmino;
}
export interface EventWithdrawCanceledSDKType {
    sender: string;
    tx_id: string;
    bridge_contract: string;
    bridge_chain_id: string;
}
export declare const IDSet: {
    typeUrl: string;
    encode(message: IDSet, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IDSet;
    fromPartial(object: Partial<IDSet>): IDSet;
    fromAmino(object: IDSetAmino): IDSet;
    toAmino(message: IDSet): IDSetAmino;
    fromAminoMsg(object: IDSetAminoMsg): IDSet;
    fromProtoMsg(message: IDSetProtoMsg): IDSet;
    toProto(message: IDSet): Uint8Array;
    toProtoMsg(message: IDSet): IDSetProtoMsg;
};
export declare const BatchFees: {
    typeUrl: string;
    encode(message: BatchFees, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchFees;
    fromPartial(object: Partial<BatchFees>): BatchFees;
    fromAmino(object: BatchFeesAmino): BatchFees;
    toAmino(message: BatchFees): BatchFeesAmino;
    fromAminoMsg(object: BatchFeesAminoMsg): BatchFees;
    fromProtoMsg(message: BatchFeesProtoMsg): BatchFees;
    toProto(message: BatchFees): Uint8Array;
    toProtoMsg(message: BatchFees): BatchFeesProtoMsg;
};
export declare const EventWithdrawalReceived: {
    typeUrl: string;
    encode(message: EventWithdrawalReceived, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventWithdrawalReceived;
    fromPartial(object: Partial<EventWithdrawalReceived>): EventWithdrawalReceived;
    fromAmino(object: EventWithdrawalReceivedAmino): EventWithdrawalReceived;
    toAmino(message: EventWithdrawalReceived): EventWithdrawalReceivedAmino;
    fromAminoMsg(object: EventWithdrawalReceivedAminoMsg): EventWithdrawalReceived;
    fromProtoMsg(message: EventWithdrawalReceivedProtoMsg): EventWithdrawalReceived;
    toProto(message: EventWithdrawalReceived): Uint8Array;
    toProtoMsg(message: EventWithdrawalReceived): EventWithdrawalReceivedProtoMsg;
};
export declare const EventWithdrawCanceled: {
    typeUrl: string;
    encode(message: EventWithdrawCanceled, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventWithdrawCanceled;
    fromPartial(object: Partial<EventWithdrawCanceled>): EventWithdrawCanceled;
    fromAmino(object: EventWithdrawCanceledAmino): EventWithdrawCanceled;
    toAmino(message: EventWithdrawCanceled): EventWithdrawCanceledAmino;
    fromAminoMsg(object: EventWithdrawCanceledAminoMsg): EventWithdrawCanceled;
    fromProtoMsg(message: EventWithdrawCanceledProtoMsg): EventWithdrawCanceled;
    toProto(message: EventWithdrawCanceled): Uint8Array;
    toProtoMsg(message: EventWithdrawCanceled): EventWithdrawCanceledProtoMsg;
};
