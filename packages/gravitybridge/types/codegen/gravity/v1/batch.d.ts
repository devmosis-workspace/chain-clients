import { ERC20Token, ERC20TokenSDKType } from "./attestation";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatch {
    batchNonce: Long;
    batchTimeout: Long;
    transactions: OutgoingTransferTx[];
    tokenContract: string;
    cosmosBlockCreated: Long;
}
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatchSDKType {
    batch_nonce: Long;
    batch_timeout: Long;
    transactions: OutgoingTransferTxSDKType[];
    token_contract: string;
    cosmos_block_created: Long;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTx {
    id: Long;
    sender: string;
    destAddress: string;
    erc20Token?: ERC20Token;
    erc20Fee?: ERC20Token;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTxSDKType {
    id: Long;
    sender: string;
    dest_address: string;
    erc20_token?: ERC20TokenSDKType;
    erc20_fee?: ERC20TokenSDKType;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCall {
    transfers: ERC20Token[];
    fees: ERC20Token[];
    logicContractAddress: string;
    payload: Uint8Array;
    timeout: Long;
    invalidationId: Uint8Array;
    invalidationNonce: Long;
    cosmosBlockCreated: Long;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCallSDKType {
    transfers: ERC20TokenSDKType[];
    fees: ERC20TokenSDKType[];
    logic_contract_address: string;
    payload: Uint8Array;
    timeout: Long;
    invalidation_id: Uint8Array;
    invalidation_nonce: Long;
    cosmos_block_created: Long;
}
export interface EventOutgoingBatchCanceled {
    bridgeContract: string;
    bridgeChainId: string;
    batchId: string;
    nonce: string;
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
export interface EventOutgoingBatchSDKType {
    bridge_contract: string;
    bridge_chain_id: string;
    batch_id: string;
    nonce: string;
}
export declare const OutgoingTxBatch: {
    encode(message: OutgoingTxBatch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OutgoingTxBatch;
    fromPartial(object: Partial<OutgoingTxBatch>): OutgoingTxBatch;
};
export declare const OutgoingTransferTx: {
    encode(message: OutgoingTransferTx, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OutgoingTransferTx;
    fromPartial(object: Partial<OutgoingTransferTx>): OutgoingTransferTx;
};
export declare const OutgoingLogicCall: {
    encode(message: OutgoingLogicCall, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OutgoingLogicCall;
    fromPartial(object: Partial<OutgoingLogicCall>): OutgoingLogicCall;
};
export declare const EventOutgoingBatchCanceled: {
    encode(message: EventOutgoingBatchCanceled, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventOutgoingBatchCanceled;
    fromPartial(object: Partial<EventOutgoingBatchCanceled>): EventOutgoingBatchCanceled;
};
export declare const EventOutgoingBatch: {
    encode(message: EventOutgoingBatch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventOutgoingBatch;
    fromPartial(object: Partial<EventOutgoingBatch>): EventOutgoingBatch;
};
