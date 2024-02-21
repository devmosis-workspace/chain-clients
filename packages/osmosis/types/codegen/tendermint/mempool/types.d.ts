import { BinaryWriter } from "../../binary";
export interface Txs {
    txs: Uint8Array[];
}
export interface TxsProtoMsg {
    typeUrl: "/tendermint.mempool.Txs";
    value: Uint8Array;
}
export interface TxsAmino {
    txs?: string[];
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
}
export interface MessageProtoMsg {
    typeUrl: "/tendermint.mempool.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    txs?: TxsAmino;
}
export interface MessageAminoMsg {
    type: "/tendermint.mempool.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    txs?: TxsSDKType;
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
