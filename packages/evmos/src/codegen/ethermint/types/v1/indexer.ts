import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseTxResult(): TxResult {
  return {
    height: BigInt(0),
    txIndex: 0,
    msgIndex: 0,
    ethTxIndex: 0,
    failed: false,
    gasUsed: BigInt(0),
    cumulativeGasUsed: BigInt(0)
  };
}
export const TxResult = {
  typeUrl: "/ethermint.types.v1.TxResult",
  encode(message: TxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.txIndex !== 0) {
      writer.uint32(16).uint32(message.txIndex);
    }
    if (message.msgIndex !== 0) {
      writer.uint32(24).uint32(message.msgIndex);
    }
    if (message.ethTxIndex !== 0) {
      writer.uint32(32).int32(message.ethTxIndex);
    }
    if (message.failed === true) {
      writer.uint32(40).bool(message.failed);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).uint64(message.gasUsed);
    }
    if (message.cumulativeGasUsed !== BigInt(0)) {
      writer.uint32(56).uint64(message.cumulativeGasUsed);
    }
    return writer;
  },
  fromJSON(object: any): TxResult {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      txIndex: isSet(object.txIndex) ? Number(object.txIndex) : 0,
      msgIndex: isSet(object.msgIndex) ? Number(object.msgIndex) : 0,
      ethTxIndex: isSet(object.ethTxIndex) ? Number(object.ethTxIndex) : 0,
      failed: isSet(object.failed) ? Boolean(object.failed) : false,
      gasUsed: isSet(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt(0),
      cumulativeGasUsed: isSet(object.cumulativeGasUsed) ? BigInt(object.cumulativeGasUsed.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<TxResult>): TxResult {
    const message = createBaseTxResult();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.txIndex = object.txIndex ?? 0;
    message.msgIndex = object.msgIndex ?? 0;
    message.ethTxIndex = object.ethTxIndex ?? 0;
    message.failed = object.failed ?? false;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.cumulativeGasUsed = object.cumulativeGasUsed !== undefined && object.cumulativeGasUsed !== null ? BigInt(object.cumulativeGasUsed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TxResultAmino): TxResult {
    return {
      height: BigInt(object.height),
      txIndex: object.tx_index,
      msgIndex: object.msg_index,
      ethTxIndex: object.eth_tx_index,
      failed: object.failed,
      gasUsed: BigInt(object.gas_used),
      cumulativeGasUsed: BigInt(object.cumulative_gas_used)
    };
  },
  toAmino(message: TxResult): TxResultAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.tx_index = message.txIndex;
    obj.msg_index = message.msgIndex;
    obj.eth_tx_index = message.ethTxIndex;
    obj.failed = message.failed;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    obj.cumulative_gas_used = message.cumulativeGasUsed ? message.cumulativeGasUsed.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TxResultAminoMsg): TxResult {
    return TxResult.fromAmino(object.value);
  },
  fromProtoMsg(message: TxResultProtoMsg): TxResult {
    return TxResult.decode(message.value);
  },
  toProto(message: TxResult): Uint8Array {
    return TxResult.encode(message).finish();
  },
  toProtoMsg(message: TxResult): TxResultProtoMsg {
    return {
      typeUrl: "/ethermint.types.v1.TxResult",
      value: TxResult.encode(message).finish()
    };
  }
};