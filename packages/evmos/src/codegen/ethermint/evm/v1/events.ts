import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseEventEthereumTx(): EventEthereumTx {
  return {
    amount: "",
    ethHash: "",
    index: "",
    gasUsed: "",
    hash: "",
    recipient: "",
    ethTxFailed: ""
  };
}
export const EventEthereumTx = {
  typeUrl: "/ethermint.evm.v1.EventEthereumTx",
  encode(message: EventEthereumTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.ethHash !== "") {
      writer.uint32(18).string(message.ethHash);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (message.gasUsed !== "") {
      writer.uint32(34).string(message.gasUsed);
    }
    if (message.hash !== "") {
      writer.uint32(42).string(message.hash);
    }
    if (message.recipient !== "") {
      writer.uint32(50).string(message.recipient);
    }
    if (message.ethTxFailed !== "") {
      writer.uint32(58).string(message.ethTxFailed);
    }
    return writer;
  },
  fromJSON(object: any): EventEthereumTx {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      ethHash: isSet(object.ethHash) ? String(object.ethHash) : "",
      index: isSet(object.index) ? String(object.index) : "",
      gasUsed: isSet(object.gasUsed) ? String(object.gasUsed) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      ethTxFailed: isSet(object.ethTxFailed) ? String(object.ethTxFailed) : ""
    };
  },
  fromPartial(object: Partial<EventEthereumTx>): EventEthereumTx {
    const message = createBaseEventEthereumTx();
    message.amount = object.amount ?? "";
    message.ethHash = object.ethHash ?? "";
    message.index = object.index ?? "";
    message.gasUsed = object.gasUsed ?? "";
    message.hash = object.hash ?? "";
    message.recipient = object.recipient ?? "";
    message.ethTxFailed = object.ethTxFailed ?? "";
    return message;
  },
  fromAmino(object: EventEthereumTxAmino): EventEthereumTx {
    return {
      amount: object.amount,
      ethHash: object.eth_hash,
      index: object.index,
      gasUsed: object.gas_used,
      hash: object.hash,
      recipient: object.recipient,
      ethTxFailed: object.eth_tx_failed
    };
  },
  toAmino(message: EventEthereumTx): EventEthereumTxAmino {
    const obj: any = {};
    obj.amount = message.amount;
    obj.eth_hash = message.ethHash;
    obj.index = message.index;
    obj.gas_used = message.gasUsed;
    obj.hash = message.hash;
    obj.recipient = message.recipient;
    obj.eth_tx_failed = message.ethTxFailed;
    return obj;
  },
  fromAminoMsg(object: EventEthereumTxAminoMsg): EventEthereumTx {
    return EventEthereumTx.fromAmino(object.value);
  },
  fromProtoMsg(message: EventEthereumTxProtoMsg): EventEthereumTx {
    return EventEthereumTx.decode(message.value);
  },
  toProto(message: EventEthereumTx): Uint8Array {
    return EventEthereumTx.encode(message).finish();
  },
  toProtoMsg(message: EventEthereumTx): EventEthereumTxProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.EventEthereumTx",
      value: EventEthereumTx.encode(message).finish()
    };
  }
};
function createBaseEventTxLog(): EventTxLog {
  return {
    txLogs: []
  };
}
export const EventTxLog = {
  typeUrl: "/ethermint.evm.v1.EventTxLog",
  encode(message: EventTxLog, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txLogs) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): EventTxLog {
    return {
      txLogs: Array.isArray(object?.txLogs) ? object.txLogs.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<EventTxLog>): EventTxLog {
    const message = createBaseEventTxLog();
    message.txLogs = object.txLogs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EventTxLogAmino): EventTxLog {
    return {
      txLogs: Array.isArray(object?.tx_logs) ? object.tx_logs.map((e: any) => e) : []
    };
  },
  toAmino(message: EventTxLog): EventTxLogAmino {
    const obj: any = {};
    if (message.txLogs) {
      obj.tx_logs = message.txLogs.map(e => e);
    } else {
      obj.tx_logs = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventTxLogAminoMsg): EventTxLog {
    return EventTxLog.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTxLogProtoMsg): EventTxLog {
    return EventTxLog.decode(message.value);
  },
  toProto(message: EventTxLog): Uint8Array {
    return EventTxLog.encode(message).finish();
  },
  toProtoMsg(message: EventTxLog): EventTxLogProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.EventTxLog",
      value: EventTxLog.encode(message).finish()
    };
  }
};
function createBaseEventMessage(): EventMessage {
  return {
    module: "",
    sender: "",
    txType: ""
  };
}
export const EventMessage = {
  typeUrl: "/ethermint.evm.v1.EventMessage",
  encode(message: EventMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.txType !== "") {
      writer.uint32(26).string(message.txType);
    }
    return writer;
  },
  fromJSON(object: any): EventMessage {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      txType: isSet(object.txType) ? String(object.txType) : ""
    };
  },
  fromPartial(object: Partial<EventMessage>): EventMessage {
    const message = createBaseEventMessage();
    message.module = object.module ?? "";
    message.sender = object.sender ?? "";
    message.txType = object.txType ?? "";
    return message;
  },
  fromAmino(object: EventMessageAmino): EventMessage {
    return {
      module: object.module,
      sender: object.sender,
      txType: object.tx_type
    };
  },
  toAmino(message: EventMessage): EventMessageAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.sender = message.sender;
    obj.tx_type = message.txType;
    return obj;
  },
  fromAminoMsg(object: EventMessageAminoMsg): EventMessage {
    return EventMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMessageProtoMsg): EventMessage {
    return EventMessage.decode(message.value);
  },
  toProto(message: EventMessage): Uint8Array {
    return EventMessage.encode(message).finish();
  },
  toProtoMsg(message: EventMessage): EventMessageProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.EventMessage",
      value: EventMessage.encode(message).finish()
    };
  }
};
function createBaseEventBlockBloom(): EventBlockBloom {
  return {
    bloom: ""
  };
}
export const EventBlockBloom = {
  typeUrl: "/ethermint.evm.v1.EventBlockBloom",
  encode(message: EventBlockBloom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bloom !== "") {
      writer.uint32(10).string(message.bloom);
    }
    return writer;
  },
  fromJSON(object: any): EventBlockBloom {
    return {
      bloom: isSet(object.bloom) ? String(object.bloom) : ""
    };
  },
  fromPartial(object: Partial<EventBlockBloom>): EventBlockBloom {
    const message = createBaseEventBlockBloom();
    message.bloom = object.bloom ?? "";
    return message;
  },
  fromAmino(object: EventBlockBloomAmino): EventBlockBloom {
    return {
      bloom: object.bloom
    };
  },
  toAmino(message: EventBlockBloom): EventBlockBloomAmino {
    const obj: any = {};
    obj.bloom = message.bloom;
    return obj;
  },
  fromAminoMsg(object: EventBlockBloomAminoMsg): EventBlockBloom {
    return EventBlockBloom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBlockBloomProtoMsg): EventBlockBloom {
    return EventBlockBloom.decode(message.value);
  },
  toProto(message: EventBlockBloom): Uint8Array {
    return EventBlockBloom.encode(message).finish();
  },
  toProtoMsg(message: EventBlockBloom): EventBlockBloomProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.EventBlockBloom",
      value: EventBlockBloom.encode(message).finish()
    };
  }
};