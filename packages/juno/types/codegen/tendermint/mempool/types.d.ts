import { BinaryWriter } from "../../binary";
export interface Txs {
    txs: Uint8Array[];
}
export interface TxsProtoMsg {
    typeUrl: "/tendermint.mempool.Txs";
    value: Uint8Array;
}
export interface TxsAmino {
    txs: Uint8Array[];
}
export interface TxsAminoMsg {
    type: "/tendermint.mempool.Txs";
    value: TxsAmino;
}
export interface TxsSDKType {
    txs: Uint8Array[];
}
export interface Message {
    txs?: Txs;
    mevTxs?: MEVTxs;
}
export interface MessageProtoMsg {
    typeUrl: "/tendermint.mempool.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    txs?: TxsAmino;
    mev_txs?: MEVTxsAmino;
}
export interface MessageAminoMsg {
    type: "/tendermint.mempool.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    txs?: TxsSDKType;
    mev_txs?: MEVTxsSDKType;
}
export interface MEVMessage {
    txs?: Txs;
    desiredHeight: bigint;
    bundleId: bigint;
    bundleOrder: bigint;
    bundleSize: bigint;
    gasWanted: bigint;
}
export interface MEVMessageProtoMsg {
    typeUrl: "/tendermint.mempool.MEVMessage";
    value: Uint8Array;
}
export interface MEVMessageAmino {
    txs?: TxsAmino;
    desired_height: string;
    bundle_id: string;
    bundle_order: string;
    bundle_size: string;
    gas_wanted: string;
}
export interface MEVMessageAminoMsg {
    type: "/tendermint.mempool.MEVMessage";
    value: MEVMessageAmino;
}
export interface MEVMessageSDKType {
    txs?: TxsSDKType;
    desired_height: bigint;
    bundle_id: bigint;
    bundle_order: bigint;
    bundle_size: bigint;
    gas_wanted: bigint;
}
export interface MEVTxs {
    txs: Uint8Array[];
    desiredHeight: bigint;
    bundleId: bigint;
    bundleOrder: bigint;
    bundleSize: bigint;
    gasWanted: bigint;
}
export interface MEVTxsProtoMsg {
    typeUrl: "/tendermint.mempool.MEVTxs";
    value: Uint8Array;
}
export interface MEVTxsAmino {
    txs: Uint8Array[];
    desired_height: string;
    bundle_id: string;
    bundle_order: string;
    bundle_size: string;
    gas_wanted: string;
}
export interface MEVTxsAminoMsg {
    type: "/tendermint.mempool.MEVTxs";
    value: MEVTxsAmino;
}
export interface MEVTxsSDKType {
    txs: Uint8Array[];
    desired_height: bigint;
    bundle_id: bigint;
    bundle_order: bigint;
    bundle_size: bigint;
    gas_wanted: bigint;
}
export declare const Txs: {
    typeUrl: string;
    encode(message: Txs, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Txs;
    fromPartial(object: Partial<Txs>): Txs;
    fromAmino(object: TxsAmino): Txs;
    toAmino(message: Txs): TxsAmino;
    fromAminoMsg(object: TxsAminoMsg): Txs;
    fromProtoMsg(message: TxsProtoMsg): Txs;
    toProto(message: Txs): Uint8Array;
    toProtoMsg(message: Txs): TxsProtoMsg;
};
export declare const Message: {
    typeUrl: string;
    encode(message: Message, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Message;
    fromPartial(object: Partial<Message>): Message;
    fromAmino(object: MessageAmino): Message;
    toAmino(message: Message): MessageAmino;
    fromAminoMsg(object: MessageAminoMsg): Message;
    fromProtoMsg(message: MessageProtoMsg): Message;
    toProto(message: Message): Uint8Array;
    toProtoMsg(message: Message): MessageProtoMsg;
};
export declare const MEVMessage: {
    typeUrl: string;
    encode(message: MEVMessage, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MEVMessage;
    fromPartial(object: Partial<MEVMessage>): MEVMessage;
    fromAmino(object: MEVMessageAmino): MEVMessage;
    toAmino(message: MEVMessage): MEVMessageAmino;
    fromAminoMsg(object: MEVMessageAminoMsg): MEVMessage;
    fromProtoMsg(message: MEVMessageProtoMsg): MEVMessage;
    toProto(message: MEVMessage): Uint8Array;
    toProtoMsg(message: MEVMessage): MEVMessageProtoMsg;
};
export declare const MEVTxs: {
    typeUrl: string;
    encode(message: MEVTxs, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MEVTxs;
    fromPartial(object: Partial<MEVTxs>): MEVTxs;
    fromAmino(object: MEVTxsAmino): MEVTxs;
    toAmino(message: MEVTxs): MEVTxsAmino;
    fromAminoMsg(object: MEVTxsAminoMsg): MEVTxs;
    fromProtoMsg(message: MEVTxsProtoMsg): MEVTxs;
    toProto(message: MEVTxs): Uint8Array;
    toProtoMsg(message: MEVTxs): MEVTxsProtoMsg;
};
