import { BinaryWriter } from "../../../binary";
/** EventEthereumTx defines the event for an Ethereum transaction */
export interface EventEthereumTx {
    /** amount */
    amount: string;
    /** eth_hash is the Ethereum hash of the transaction */
    ethHash: string;
    /** index of the transaction in the block */
    index: string;
    /** gas_used is the amount of gas used by the transaction */
    gasUsed: string;
    /** hash is the Tendermint hash of the transaction */
    hash: string;
    /** recipient of the transaction */
    recipient: string;
    /** eth_tx_failed contains a VM error should it occur */
    ethTxFailed: string;
}
export interface EventEthereumTxProtoMsg {
    typeUrl: "/ethermint.evm.v1.EventEthereumTx";
    value: Uint8Array;
}
/** EventEthereumTx defines the event for an Ethereum transaction */
export interface EventEthereumTxAmino {
    /** amount */
    amount: string;
    /** eth_hash is the Ethereum hash of the transaction */
    eth_hash: string;
    /** index of the transaction in the block */
    index: string;
    /** gas_used is the amount of gas used by the transaction */
    gas_used: string;
    /** hash is the Tendermint hash of the transaction */
    hash: string;
    /** recipient of the transaction */
    recipient: string;
    /** eth_tx_failed contains a VM error should it occur */
    eth_tx_failed: string;
}
export interface EventEthereumTxAminoMsg {
    type: "/ethermint.evm.v1.EventEthereumTx";
    value: EventEthereumTxAmino;
}
/** EventEthereumTx defines the event for an Ethereum transaction */
export interface EventEthereumTxSDKType {
    amount: string;
    eth_hash: string;
    index: string;
    gas_used: string;
    hash: string;
    recipient: string;
    eth_tx_failed: string;
}
/** EventTxLog defines the event for an Ethereum transaction log */
export interface EventTxLog {
    /** tx_logs is an array of transaction logs */
    txLogs: string[];
}
export interface EventTxLogProtoMsg {
    typeUrl: "/ethermint.evm.v1.EventTxLog";
    value: Uint8Array;
}
/** EventTxLog defines the event for an Ethereum transaction log */
export interface EventTxLogAmino {
    /** tx_logs is an array of transaction logs */
    tx_logs: string[];
}
export interface EventTxLogAminoMsg {
    type: "/ethermint.evm.v1.EventTxLog";
    value: EventTxLogAmino;
}
/** EventTxLog defines the event for an Ethereum transaction log */
export interface EventTxLogSDKType {
    tx_logs: string[];
}
/** EventMessage */
export interface EventMessage {
    /** module which emits the event */
    module: string;
    /** sender of the message */
    sender: string;
    /** tx_type is the type of the message */
    txType: string;
}
export interface EventMessageProtoMsg {
    typeUrl: "/ethermint.evm.v1.EventMessage";
    value: Uint8Array;
}
/** EventMessage */
export interface EventMessageAmino {
    /** module which emits the event */
    module: string;
    /** sender of the message */
    sender: string;
    /** tx_type is the type of the message */
    tx_type: string;
}
export interface EventMessageAminoMsg {
    type: "/ethermint.evm.v1.EventMessage";
    value: EventMessageAmino;
}
/** EventMessage */
export interface EventMessageSDKType {
    module: string;
    sender: string;
    tx_type: string;
}
/** EventBlockBloom defines an Ethereum block bloom filter event */
export interface EventBlockBloom {
    /** bloom is the bloom filter of the block */
    bloom: string;
}
export interface EventBlockBloomProtoMsg {
    typeUrl: "/ethermint.evm.v1.EventBlockBloom";
    value: Uint8Array;
}
/** EventBlockBloom defines an Ethereum block bloom filter event */
export interface EventBlockBloomAmino {
    /** bloom is the bloom filter of the block */
    bloom: string;
}
export interface EventBlockBloomAminoMsg {
    type: "/ethermint.evm.v1.EventBlockBloom";
    value: EventBlockBloomAmino;
}
/** EventBlockBloom defines an Ethereum block bloom filter event */
export interface EventBlockBloomSDKType {
    bloom: string;
}
export declare const EventEthereumTx: {
    typeUrl: string;
    encode(message: EventEthereumTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventEthereumTx;
    fromPartial(object: Partial<EventEthereumTx>): EventEthereumTx;
    fromAmino(object: EventEthereumTxAmino): EventEthereumTx;
    toAmino(message: EventEthereumTx): EventEthereumTxAmino;
    fromAminoMsg(object: EventEthereumTxAminoMsg): EventEthereumTx;
    fromProtoMsg(message: EventEthereumTxProtoMsg): EventEthereumTx;
    toProto(message: EventEthereumTx): Uint8Array;
    toProtoMsg(message: EventEthereumTx): EventEthereumTxProtoMsg;
};
export declare const EventTxLog: {
    typeUrl: string;
    encode(message: EventTxLog, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventTxLog;
    fromPartial(object: Partial<EventTxLog>): EventTxLog;
    fromAmino(object: EventTxLogAmino): EventTxLog;
    toAmino(message: EventTxLog): EventTxLogAmino;
    fromAminoMsg(object: EventTxLogAminoMsg): EventTxLog;
    fromProtoMsg(message: EventTxLogProtoMsg): EventTxLog;
    toProto(message: EventTxLog): Uint8Array;
    toProtoMsg(message: EventTxLog): EventTxLogProtoMsg;
};
export declare const EventMessage: {
    typeUrl: string;
    encode(message: EventMessage, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventMessage;
    fromPartial(object: Partial<EventMessage>): EventMessage;
    fromAmino(object: EventMessageAmino): EventMessage;
    toAmino(message: EventMessage): EventMessageAmino;
    fromAminoMsg(object: EventMessageAminoMsg): EventMessage;
    fromProtoMsg(message: EventMessageProtoMsg): EventMessage;
    toProto(message: EventMessage): Uint8Array;
    toProtoMsg(message: EventMessage): EventMessageProtoMsg;
};
export declare const EventBlockBloom: {
    typeUrl: string;
    encode(message: EventBlockBloom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBlockBloom;
    fromPartial(object: Partial<EventBlockBloom>): EventBlockBloom;
    fromAmino(object: EventBlockBloomAmino): EventBlockBloom;
    toAmino(message: EventBlockBloom): EventBlockBloomAmino;
    fromAminoMsg(object: EventBlockBloomAminoMsg): EventBlockBloom;
    fromProtoMsg(message: EventBlockBloomProtoMsg): EventBlockBloom;
    toProto(message: EventBlockBloom): Uint8Array;
    toProtoMsg(message: EventBlockBloom): EventBlockBloomProtoMsg;
};
