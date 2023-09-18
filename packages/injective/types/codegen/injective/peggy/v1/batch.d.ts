import { ERC20Token, ERC20TokenAmino, ERC20TokenSDKType } from "./attestation";
import { BinaryWriter } from "../../../binary";
/** OutgoingTxBatch represents a batch of transactions going from Peggy to ETH */
export interface OutgoingTxBatch {
    batchNonce: bigint;
    batchTimeout: bigint;
    transactions: OutgoingTransferTx[];
    tokenContract: string;
    block: bigint;
}
export interface OutgoingTxBatchProtoMsg {
    typeUrl: "/injective.peggy.v1.OutgoingTxBatch";
    value: Uint8Array;
}
/** OutgoingTxBatch represents a batch of transactions going from Peggy to ETH */
export interface OutgoingTxBatchAmino {
    batch_nonce: string;
    batch_timeout: string;
    transactions: OutgoingTransferTxAmino[];
    token_contract: string;
    block: string;
}
export interface OutgoingTxBatchAminoMsg {
    type: "/injective.peggy.v1.OutgoingTxBatch";
    value: OutgoingTxBatchAmino;
}
/** OutgoingTxBatch represents a batch of transactions going from Peggy to ETH */
export interface OutgoingTxBatchSDKType {
    batch_nonce: bigint;
    batch_timeout: bigint;
    transactions: OutgoingTransferTxSDKType[];
    token_contract: string;
    block: bigint;
}
/** OutgoingTransferTx represents an individual send from Peggy to ETH */
export interface OutgoingTransferTx {
    id: bigint;
    sender: string;
    destAddress: string;
    erc20Token: ERC20Token;
    erc20Fee: ERC20Token;
}
export interface OutgoingTransferTxProtoMsg {
    typeUrl: "/injective.peggy.v1.OutgoingTransferTx";
    value: Uint8Array;
}
/** OutgoingTransferTx represents an individual send from Peggy to ETH */
export interface OutgoingTransferTxAmino {
    id: string;
    sender: string;
    dest_address: string;
    erc20_token?: ERC20TokenAmino;
    erc20_fee?: ERC20TokenAmino;
}
export interface OutgoingTransferTxAminoMsg {
    type: "/injective.peggy.v1.OutgoingTransferTx";
    value: OutgoingTransferTxAmino;
}
/** OutgoingTransferTx represents an individual send from Peggy to ETH */
export interface OutgoingTransferTxSDKType {
    id: bigint;
    sender: string;
    dest_address: string;
    erc20_token: ERC20TokenSDKType;
    erc20_fee: ERC20TokenSDKType;
}
export declare const OutgoingTxBatch: {
    typeUrl: string;
    encode(message: OutgoingTxBatch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OutgoingTxBatch;
    fromPartial(object: Partial<OutgoingTxBatch>): OutgoingTxBatch;
    fromAmino(object: OutgoingTxBatchAmino): OutgoingTxBatch;
    toAmino(message: OutgoingTxBatch): OutgoingTxBatchAmino;
    fromAminoMsg(object: OutgoingTxBatchAminoMsg): OutgoingTxBatch;
    fromProtoMsg(message: OutgoingTxBatchProtoMsg): OutgoingTxBatch;
    toProto(message: OutgoingTxBatch): Uint8Array;
    toProtoMsg(message: OutgoingTxBatch): OutgoingTxBatchProtoMsg;
};
export declare const OutgoingTransferTx: {
    typeUrl: string;
    encode(message: OutgoingTransferTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OutgoingTransferTx;
    fromPartial(object: Partial<OutgoingTransferTx>): OutgoingTransferTx;
    fromAmino(object: OutgoingTransferTxAmino): OutgoingTransferTx;
    toAmino(message: OutgoingTransferTx): OutgoingTransferTxAmino;
    fromAminoMsg(object: OutgoingTransferTxAminoMsg): OutgoingTransferTx;
    fromProtoMsg(message: OutgoingTransferTxProtoMsg): OutgoingTransferTx;
    toProto(message: OutgoingTransferTx): Uint8Array;
    toProtoMsg(message: OutgoingTransferTx): OutgoingTransferTxProtoMsg;
};
