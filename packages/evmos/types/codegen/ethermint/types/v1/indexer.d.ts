import { BinaryWriter } from "../../../binary";
/** TxResult is the value stored in eth tx indexer */
export interface TxResult {
    /** height of the blockchain */
    height: bigint;
    /** tx_index of the cosmos transaction */
    txIndex: number;
    /** msg_index in a batch transaction */
    msgIndex: number;
    /**
     * eth_tx_index is the index in the list of valid eth tx in the block,
     * aka. the transaction list returned by eth_getBlock api.
     */
    ethTxIndex: number;
    /** failed is true if the eth transaction did not go succeed */
    failed: boolean;
    /**
     * gas_used by the transaction. If it exceeds the block gas limit,
     * it's set to gas limit, which is what's actually deducted by ante handler.
     */
    gasUsed: bigint;
    /**
     * cumulative_gas_used specifies the cumulated amount of gas used for all
     * processed messages within the current batch transaction.
     */
    cumulativeGasUsed: bigint;
}
export interface TxResultProtoMsg {
    typeUrl: "/ethermint.types.v1.TxResult";
    value: Uint8Array;
}
/** TxResult is the value stored in eth tx indexer */
export interface TxResultAmino {
    /** height of the blockchain */
    height: string;
    /** tx_index of the cosmos transaction */
    tx_index: number;
    /** msg_index in a batch transaction */
    msg_index: number;
    /**
     * eth_tx_index is the index in the list of valid eth tx in the block,
     * aka. the transaction list returned by eth_getBlock api.
     */
    eth_tx_index: number;
    /** failed is true if the eth transaction did not go succeed */
    failed: boolean;
    /**
     * gas_used by the transaction. If it exceeds the block gas limit,
     * it's set to gas limit, which is what's actually deducted by ante handler.
     */
    gas_used: string;
    /**
     * cumulative_gas_used specifies the cumulated amount of gas used for all
     * processed messages within the current batch transaction.
     */
    cumulative_gas_used: string;
}
export interface TxResultAminoMsg {
    type: "/ethermint.types.v1.TxResult";
    value: TxResultAmino;
}
/** TxResult is the value stored in eth tx indexer */
export interface TxResultSDKType {
    height: bigint;
    tx_index: number;
    msg_index: number;
    eth_tx_index: number;
    failed: boolean;
    gas_used: bigint;
    cumulative_gas_used: bigint;
}
export declare const TxResult: {
    typeUrl: string;
    encode(message: TxResult, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TxResult;
    fromPartial(object: Partial<TxResult>): TxResult;
    fromAmino(object: TxResultAmino): TxResult;
    toAmino(message: TxResult): TxResultAmino;
    fromAminoMsg(object: TxResultAminoMsg): TxResult;
    fromProtoMsg(message: TxResultProtoMsg): TxResult;
    toProto(message: TxResult): Uint8Array;
    toProtoMsg(message: TxResult): TxResultProtoMsg;
};
