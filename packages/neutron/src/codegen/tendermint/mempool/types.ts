import { Long, bytesFromBase64, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Txs {
  txs: Uint8Array[];
}
export interface TxsSDKType {
  txs: Uint8Array[];
}
export interface Message {
  txs?: Txs;
  mevTxs?: MEVTxs;
}
export interface MessageSDKType {
  txs?: TxsSDKType;
  mev_txs?: MEVTxsSDKType;
}
export interface MEVMessage {
  txs?: Txs;
  desiredHeight: Long;
  bundleId: Long;
  bundleOrder: Long;
  bundleSize: Long;
  gasWanted: Long;
}
export interface MEVMessageSDKType {
  txs?: TxsSDKType;
  desired_height: Long;
  bundle_id: Long;
  bundle_order: Long;
  bundle_size: Long;
  gas_wanted: Long;
}
export interface MEVTxs {
  txs: Uint8Array[];
  desiredHeight: Long;
  bundleId: Long;
  bundleOrder: Long;
  bundleSize: Long;
  gasWanted: Long;
}
export interface MEVTxsSDKType {
  txs: Uint8Array[];
  desired_height: Long;
  bundle_id: Long;
  bundle_order: Long;
  bundle_size: Long;
  gas_wanted: Long;
}
function createBaseTxs(): Txs {
  return {
    txs: []
  };
}
export const Txs = {
  encode(message: Txs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): Txs {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<Txs>): Txs {
    const message = createBaseTxs();
    message.txs = object.txs?.map(e => e) || [];
    return message;
  }
};
function createBaseMessage(): Message {
  return {
    txs: undefined,
    mevTxs: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txs !== undefined) {
      Txs.encode(message.txs, writer.uint32(10).fork()).ldelim();
    }
    if (message.mevTxs !== undefined) {
      MEVTxs.encode(message.mevTxs, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Message {
    return {
      txs: isSet(object.txs) ? Txs.fromJSON(object.txs) : undefined,
      mevTxs: isSet(object.mevTxs) ? MEVTxs.fromJSON(object.mevTxs) : undefined
    };
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.txs = object.txs !== undefined && object.txs !== null ? Txs.fromPartial(object.txs) : undefined;
    message.mevTxs = object.mevTxs !== undefined && object.mevTxs !== null ? MEVTxs.fromPartial(object.mevTxs) : undefined;
    return message;
  }
};
function createBaseMEVMessage(): MEVMessage {
  return {
    txs: undefined,
    desiredHeight: Long.ZERO,
    bundleId: Long.ZERO,
    bundleOrder: Long.ZERO,
    bundleSize: Long.ZERO,
    gasWanted: Long.ZERO
  };
}
export const MEVMessage = {
  encode(message: MEVMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txs !== undefined) {
      Txs.encode(message.txs, writer.uint32(10).fork()).ldelim();
    }
    if (!message.desiredHeight.isZero()) {
      writer.uint32(16).int64(message.desiredHeight);
    }
    if (!message.bundleId.isZero()) {
      writer.uint32(24).int64(message.bundleId);
    }
    if (!message.bundleOrder.isZero()) {
      writer.uint32(32).int64(message.bundleOrder);
    }
    if (!message.bundleSize.isZero()) {
      writer.uint32(40).int64(message.bundleSize);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(48).int64(message.gasWanted);
    }
    return writer;
  },
  fromJSON(object: any): MEVMessage {
    return {
      txs: isSet(object.txs) ? Txs.fromJSON(object.txs) : undefined,
      desiredHeight: isSet(object.desiredHeight) ? Long.fromValue(object.desiredHeight) : Long.ZERO,
      bundleId: isSet(object.bundleId) ? Long.fromValue(object.bundleId) : Long.ZERO,
      bundleOrder: isSet(object.bundleOrder) ? Long.fromValue(object.bundleOrder) : Long.ZERO,
      bundleSize: isSet(object.bundleSize) ? Long.fromValue(object.bundleSize) : Long.ZERO,
      gasWanted: isSet(object.gasWanted) ? Long.fromValue(object.gasWanted) : Long.ZERO
    };
  },
  fromPartial(object: Partial<MEVMessage>): MEVMessage {
    const message = createBaseMEVMessage();
    message.txs = object.txs !== undefined && object.txs !== null ? Txs.fromPartial(object.txs) : undefined;
    message.desiredHeight = object.desiredHeight !== undefined && object.desiredHeight !== null ? Long.fromValue(object.desiredHeight) : Long.ZERO;
    message.bundleId = object.bundleId !== undefined && object.bundleId !== null ? Long.fromValue(object.bundleId) : Long.ZERO;
    message.bundleOrder = object.bundleOrder !== undefined && object.bundleOrder !== null ? Long.fromValue(object.bundleOrder) : Long.ZERO;
    message.bundleSize = object.bundleSize !== undefined && object.bundleSize !== null ? Long.fromValue(object.bundleSize) : Long.ZERO;
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? Long.fromValue(object.gasWanted) : Long.ZERO;
    return message;
  }
};
function createBaseMEVTxs(): MEVTxs {
  return {
    txs: [],
    desiredHeight: Long.ZERO,
    bundleId: Long.ZERO,
    bundleOrder: Long.ZERO,
    bundleSize: Long.ZERO,
    gasWanted: Long.ZERO
  };
}
export const MEVTxs = {
  encode(message: MEVTxs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (!message.desiredHeight.isZero()) {
      writer.uint32(16).int64(message.desiredHeight);
    }
    if (!message.bundleId.isZero()) {
      writer.uint32(24).int64(message.bundleId);
    }
    if (!message.bundleOrder.isZero()) {
      writer.uint32(32).int64(message.bundleOrder);
    }
    if (!message.bundleSize.isZero()) {
      writer.uint32(40).int64(message.bundleSize);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(48).int64(message.gasWanted);
    }
    return writer;
  },
  fromJSON(object: any): MEVTxs {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : [],
      desiredHeight: isSet(object.desiredHeight) ? Long.fromValue(object.desiredHeight) : Long.ZERO,
      bundleId: isSet(object.bundleId) ? Long.fromValue(object.bundleId) : Long.ZERO,
      bundleOrder: isSet(object.bundleOrder) ? Long.fromValue(object.bundleOrder) : Long.ZERO,
      bundleSize: isSet(object.bundleSize) ? Long.fromValue(object.bundleSize) : Long.ZERO,
      gasWanted: isSet(object.gasWanted) ? Long.fromValue(object.gasWanted) : Long.ZERO
    };
  },
  fromPartial(object: Partial<MEVTxs>): MEVTxs {
    const message = createBaseMEVTxs();
    message.txs = object.txs?.map(e => e) || [];
    message.desiredHeight = object.desiredHeight !== undefined && object.desiredHeight !== null ? Long.fromValue(object.desiredHeight) : Long.ZERO;
    message.bundleId = object.bundleId !== undefined && object.bundleId !== null ? Long.fromValue(object.bundleId) : Long.ZERO;
    message.bundleOrder = object.bundleOrder !== undefined && object.bundleOrder !== null ? Long.fromValue(object.bundleOrder) : Long.ZERO;
    message.bundleSize = object.bundleSize !== undefined && object.bundleSize !== null ? Long.fromValue(object.bundleSize) : Long.ZERO;
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? Long.fromValue(object.gasWanted) : Long.ZERO;
    return message;
  }
};