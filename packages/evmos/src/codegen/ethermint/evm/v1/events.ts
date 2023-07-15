import * as _m0 from "protobufjs/minimal";
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
  encode(message: EventEthereumTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventTxLog(): EventTxLog {
  return {
    txLogs: []
  };
}
export const EventTxLog = {
  encode(message: EventTxLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventBlockBloom(): EventBlockBloom {
  return {
    bloom: ""
  };
}
export const EventBlockBloom = {
  encode(message: EventBlockBloom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};