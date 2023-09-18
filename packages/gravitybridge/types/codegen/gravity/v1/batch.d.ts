import { ERC20Token, ERC20TokenAmino, ERC20TokenSDKType } from "./attestation";
import { BinaryWriter } from "../../binary";
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatch {
    batchNonce: bigint;
    batchTimeout: bigint;
    transactions: OutgoingTransferTx[];
    tokenContract: string;
    cosmosBlockCreated: bigint;
}
export interface OutgoingTxBatchProtoMsg {
    typeUrl: "/gravity.v1.OutgoingTxBatch";
    value: Uint8Array;
}
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatchAmino {
    batch_nonce: string;
    batch_timeout: string;
    transactions: OutgoingTransferTxAmino[];
    token_contract: string;
    cosmos_block_created: string;
}
export interface OutgoingTxBatchAminoMsg {
    type: "/gravity.v1.OutgoingTxBatch";
    value: OutgoingTxBatchAmino;
}
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatchSDKType {
    batch_nonce: bigint;
    batch_timeout: bigint;
    transactions: OutgoingTransferTxSDKType[];
    token_contract: string;
    cosmos_block_created: bigint;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTx {
    id: bigint;
    sender: string;
    destAddress: string;
    erc20Token: ERC20Token;
    erc20Fee: ERC20Token;
}
export interface OutgoingTransferTxProtoMsg {
    typeUrl: "/gravity.v1.OutgoingTransferTx";
    value: Uint8Array;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTxAmino {
    id: string;
    sender: string;
    dest_address: string;
    erc20_token?: ERC20TokenAmino;
    erc20_fee?: ERC20TokenAmino;
}
export interface OutgoingTransferTxAminoMsg {
    type: "/gravity.v1.OutgoingTransferTx";
    value: OutgoingTransferTxAmino;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTxSDKType {
    id: bigint;
    sender: string;
    dest_address: string;
    erc20_token: ERC20TokenSDKType;
    erc20_fee: ERC20TokenSDKType;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCall {
    transfers: ERC20Token[];
    fees: ERC20Token[];
    logicContractAddress: string;
    payload: Uint8Array;
    timeout: bigint;
    invalidationId: Uint8Array;
    invalidationNonce: bigint;
    cosmosBlockCreated: bigint;
}
export interface OutgoingLogicCallProtoMsg {
    typeUrl: "/gravity.v1.OutgoingLogicCall";
    value: Uint8Array;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCallAmino {
    transfers: ERC20TokenAmino[];
    fees: ERC20TokenAmino[];
    logic_contract_address: string;
    payload: Uint8Array;
    timeout: string;
    invalidation_id: Uint8Array;
    invalidation_nonce: string;
    cosmos_block_created: string;
}
export interface OutgoingLogicCallAminoMsg {
    type: "/gravity.v1.OutgoingLogicCall";
    value: OutgoingLogicCallAmino;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCallSDKType {
    transfers: ERC20TokenSDKType[];
    fees: ERC20TokenSDKType[];
    logic_contract_address: string;
    payload: Uint8Array;
    timeout: bigint;
    invalidation_id: Uint8Array;
    invalidation_nonce: bigint;
    cosmos_block_created: bigint;
}
export interface EventOutgoingBatchCanceled {
    bridgeContract: string;
    bridgeChainId: string;
    batchId: string;
    nonce: string;
}
export interface EventOutgoingBatchCanceledProtoMsg {
    typeUrl: "/gravity.v1.EventOutgoingBatchCanceled";
    value: Uint8Array;
}
export interface EventOutgoingBatchCanceledAmino {
    bridge_contract: string;
    bridge_chain_id: string;
    batch_id: string;
    nonce: string;
}
export interface EventOutgoingBatchCanceledAminoMsg {
    type: "/gravity.v1.EventOutgoingBatchCanceled";
    value: EventOutgoingBatchCanceledAmino;
}
export interface EventOutgoingBatchCanceledSDKType {
    bridge_contract: string;
    bridge_chain_id: string;
    batch_id: string;
    nonce: string;
}
export interface EventOutgoingBatch {
    bridgeContract: string;
    bridgeChainId: string;
    batchId: string;
    nonce: string;
}
export interface EventOutgoingBatchProtoMsg {
    typeUrl: "/gravity.v1.EventOutgoingBatch";
    value: Uint8Array;
}
export interface EventOutgoingBatchAmino {
    bridge_contract: string;
    bridge_chain_id: string;
    batch_id: string;
    nonce: string;
}
export interface EventOutgoingBatchAminoMsg {
    type: "/gravity.v1.EventOutgoingBatch";
    value: EventOutgoingBatchAmino;
}
export interface EventOutgoingBatchSDKType {
    bridge_contract: string;
    bridge_chain_id: string;
    batch_id: string;
    nonce: string;
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
export declare const OutgoingLogicCall: {
    typeUrl: string;
    encode(message: OutgoingLogicCall, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OutgoingLogicCall;
    fromPartial(object: Partial<OutgoingLogicCall>): OutgoingLogicCall;
    fromAmino(object: OutgoingLogicCallAmino): OutgoingLogicCall;
    toAmino(message: OutgoingLogicCall): OutgoingLogicCallAmino;
    fromAminoMsg(object: OutgoingLogicCallAminoMsg): OutgoingLogicCall;
    fromProtoMsg(message: OutgoingLogicCallProtoMsg): OutgoingLogicCall;
    toProto(message: OutgoingLogicCall): Uint8Array;
    toProtoMsg(message: OutgoingLogicCall): OutgoingLogicCallProtoMsg;
};
export declare const EventOutgoingBatchCanceled: {
    typeUrl: string;
    encode(message: EventOutgoingBatchCanceled, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventOutgoingBatchCanceled;
    fromPartial(object: Partial<EventOutgoingBatchCanceled>): EventOutgoingBatchCanceled;
    fromAmino(object: EventOutgoingBatchCanceledAmino): EventOutgoingBatchCanceled;
    toAmino(message: EventOutgoingBatchCanceled): EventOutgoingBatchCanceledAmino;
    fromAminoMsg(object: EventOutgoingBatchCanceledAminoMsg): EventOutgoingBatchCanceled;
    fromProtoMsg(message: EventOutgoingBatchCanceledProtoMsg): EventOutgoingBatchCanceled;
    toProto(message: EventOutgoingBatchCanceled): Uint8Array;
    toProtoMsg(message: EventOutgoingBatchCanceled): EventOutgoingBatchCanceledProtoMsg;
};
export declare const EventOutgoingBatch: {
    typeUrl: string;
    encode(message: EventOutgoingBatch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventOutgoingBatch;
    fromPartial(object: Partial<EventOutgoingBatch>): EventOutgoingBatch;
    fromAmino(object: EventOutgoingBatchAmino): EventOutgoingBatch;
    toAmino(message: EventOutgoingBatch): EventOutgoingBatchAmino;
    fromAminoMsg(object: EventOutgoingBatchAminoMsg): EventOutgoingBatch;
    fromProtoMsg(message: EventOutgoingBatchProtoMsg): EventOutgoingBatch;
    toProto(message: EventOutgoingBatch): Uint8Array;
    toProtoMsg(message: EventOutgoingBatch): EventOutgoingBatchProtoMsg;
};
