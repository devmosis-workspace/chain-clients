import { BinaryWriter } from "../../binary";
import { bytesFromBase64, isSet } from "../../helpers";
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
function createBaseTxs(): Txs {
  return {
    txs: []
  };
}
export const Txs = {
  typeUrl: "/tendermint.mempool.Txs",
  encode(message: Txs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TxsAmino): Txs {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => e) : []
    };
  },
  toAmino(message: Txs): TxsAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromAminoMsg(object: TxsAminoMsg): Txs {
    return Txs.fromAmino(object.value);
  },
  fromProtoMsg(message: TxsProtoMsg): Txs {
    return Txs.decode(message.value);
  },
  toProto(message: Txs): Uint8Array {
    return Txs.encode(message).finish();
  },
  toProtoMsg(message: Txs): TxsProtoMsg {
    return {
      typeUrl: "/tendermint.mempool.Txs",
      value: Txs.encode(message).finish()
    };
  }
};
function createBaseMessage(): Message {
  return {
    txs: undefined,
    mevTxs: undefined
  };
}
export const Message = {
  typeUrl: "/tendermint.mempool.Message",
  encode(message: Message, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MessageAmino): Message {
    return {
      txs: object?.txs ? Txs.fromAmino(object.txs) : undefined,
      mevTxs: object?.mev_txs ? MEVTxs.fromAmino(object.mev_txs) : undefined
    };
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.txs = message.txs ? Txs.toAmino(message.txs) : undefined;
    obj.mev_txs = message.mevTxs ? MEVTxs.toAmino(message.mevTxs) : undefined;
    return obj;
  },
  fromAminoMsg(object: MessageAminoMsg): Message {
    return Message.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageProtoMsg): Message {
    return Message.decode(message.value);
  },
  toProto(message: Message): Uint8Array {
    return Message.encode(message).finish();
  },
  toProtoMsg(message: Message): MessageProtoMsg {
    return {
      typeUrl: "/tendermint.mempool.Message",
      value: Message.encode(message).finish()
    };
  }
};
function createBaseMEVMessage(): MEVMessage {
  return {
    txs: undefined,
    desiredHeight: BigInt(0),
    bundleId: BigInt(0),
    bundleOrder: BigInt(0),
    bundleSize: BigInt(0),
    gasWanted: BigInt(0)
  };
}
export const MEVMessage = {
  typeUrl: "/tendermint.mempool.MEVMessage",
  encode(message: MEVMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txs !== undefined) {
      Txs.encode(message.txs, writer.uint32(10).fork()).ldelim();
    }
    if (message.desiredHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.desiredHeight);
    }
    if (message.bundleId !== BigInt(0)) {
      writer.uint32(24).int64(message.bundleId);
    }
    if (message.bundleOrder !== BigInt(0)) {
      writer.uint32(32).int64(message.bundleOrder);
    }
    if (message.bundleSize !== BigInt(0)) {
      writer.uint32(40).int64(message.bundleSize);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(48).int64(message.gasWanted);
    }
    return writer;
  },
  fromJSON(object: any): MEVMessage {
    return {
      txs: isSet(object.txs) ? Txs.fromJSON(object.txs) : undefined,
      desiredHeight: isSet(object.desiredHeight) ? BigInt(object.desiredHeight.toString()) : BigInt(0),
      bundleId: isSet(object.bundleId) ? BigInt(object.bundleId.toString()) : BigInt(0),
      bundleOrder: isSet(object.bundleOrder) ? BigInt(object.bundleOrder.toString()) : BigInt(0),
      bundleSize: isSet(object.bundleSize) ? BigInt(object.bundleSize.toString()) : BigInt(0),
      gasWanted: isSet(object.gasWanted) ? BigInt(object.gasWanted.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MEVMessage>): MEVMessage {
    const message = createBaseMEVMessage();
    message.txs = object.txs !== undefined && object.txs !== null ? Txs.fromPartial(object.txs) : undefined;
    message.desiredHeight = object.desiredHeight !== undefined && object.desiredHeight !== null ? BigInt(object.desiredHeight.toString()) : BigInt(0);
    message.bundleId = object.bundleId !== undefined && object.bundleId !== null ? BigInt(object.bundleId.toString()) : BigInt(0);
    message.bundleOrder = object.bundleOrder !== undefined && object.bundleOrder !== null ? BigInt(object.bundleOrder.toString()) : BigInt(0);
    message.bundleSize = object.bundleSize !== undefined && object.bundleSize !== null ? BigInt(object.bundleSize.toString()) : BigInt(0);
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MEVMessageAmino): MEVMessage {
    return {
      txs: object?.txs ? Txs.fromAmino(object.txs) : undefined,
      desiredHeight: BigInt(object.desired_height),
      bundleId: BigInt(object.bundle_id),
      bundleOrder: BigInt(object.bundle_order),
      bundleSize: BigInt(object.bundle_size),
      gasWanted: BigInt(object.gas_wanted)
    };
  },
  toAmino(message: MEVMessage): MEVMessageAmino {
    const obj: any = {};
    obj.txs = message.txs ? Txs.toAmino(message.txs) : undefined;
    obj.desired_height = message.desiredHeight ? message.desiredHeight.toString() : undefined;
    obj.bundle_id = message.bundleId ? message.bundleId.toString() : undefined;
    obj.bundle_order = message.bundleOrder ? message.bundleOrder.toString() : undefined;
    obj.bundle_size = message.bundleSize ? message.bundleSize.toString() : undefined;
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MEVMessageAminoMsg): MEVMessage {
    return MEVMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: MEVMessageProtoMsg): MEVMessage {
    return MEVMessage.decode(message.value);
  },
  toProto(message: MEVMessage): Uint8Array {
    return MEVMessage.encode(message).finish();
  },
  toProtoMsg(message: MEVMessage): MEVMessageProtoMsg {
    return {
      typeUrl: "/tendermint.mempool.MEVMessage",
      value: MEVMessage.encode(message).finish()
    };
  }
};
function createBaseMEVTxs(): MEVTxs {
  return {
    txs: [],
    desiredHeight: BigInt(0),
    bundleId: BigInt(0),
    bundleOrder: BigInt(0),
    bundleSize: BigInt(0),
    gasWanted: BigInt(0)
  };
}
export const MEVTxs = {
  typeUrl: "/tendermint.mempool.MEVTxs",
  encode(message: MEVTxs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.desiredHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.desiredHeight);
    }
    if (message.bundleId !== BigInt(0)) {
      writer.uint32(24).int64(message.bundleId);
    }
    if (message.bundleOrder !== BigInt(0)) {
      writer.uint32(32).int64(message.bundleOrder);
    }
    if (message.bundleSize !== BigInt(0)) {
      writer.uint32(40).int64(message.bundleSize);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(48).int64(message.gasWanted);
    }
    return writer;
  },
  fromJSON(object: any): MEVTxs {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : [],
      desiredHeight: isSet(object.desiredHeight) ? BigInt(object.desiredHeight.toString()) : BigInt(0),
      bundleId: isSet(object.bundleId) ? BigInt(object.bundleId.toString()) : BigInt(0),
      bundleOrder: isSet(object.bundleOrder) ? BigInt(object.bundleOrder.toString()) : BigInt(0),
      bundleSize: isSet(object.bundleSize) ? BigInt(object.bundleSize.toString()) : BigInt(0),
      gasWanted: isSet(object.gasWanted) ? BigInt(object.gasWanted.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MEVTxs>): MEVTxs {
    const message = createBaseMEVTxs();
    message.txs = object.txs?.map(e => e) || [];
    message.desiredHeight = object.desiredHeight !== undefined && object.desiredHeight !== null ? BigInt(object.desiredHeight.toString()) : BigInt(0);
    message.bundleId = object.bundleId !== undefined && object.bundleId !== null ? BigInt(object.bundleId.toString()) : BigInt(0);
    message.bundleOrder = object.bundleOrder !== undefined && object.bundleOrder !== null ? BigInt(object.bundleOrder.toString()) : BigInt(0);
    message.bundleSize = object.bundleSize !== undefined && object.bundleSize !== null ? BigInt(object.bundleSize.toString()) : BigInt(0);
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MEVTxsAmino): MEVTxs {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => e) : [],
      desiredHeight: BigInt(object.desired_height),
      bundleId: BigInt(object.bundle_id),
      bundleOrder: BigInt(object.bundle_order),
      bundleSize: BigInt(object.bundle_size),
      gasWanted: BigInt(object.gas_wanted)
    };
  },
  toAmino(message: MEVTxs): MEVTxsAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e);
    } else {
      obj.txs = [];
    }
    obj.desired_height = message.desiredHeight ? message.desiredHeight.toString() : undefined;
    obj.bundle_id = message.bundleId ? message.bundleId.toString() : undefined;
    obj.bundle_order = message.bundleOrder ? message.bundleOrder.toString() : undefined;
    obj.bundle_size = message.bundleSize ? message.bundleSize.toString() : undefined;
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MEVTxsAminoMsg): MEVTxs {
    return MEVTxs.fromAmino(object.value);
  },
  fromProtoMsg(message: MEVTxsProtoMsg): MEVTxs {
    return MEVTxs.decode(message.value);
  },
  toProto(message: MEVTxs): Uint8Array {
    return MEVTxs.encode(message).finish();
  },
  toProtoMsg(message: MEVTxs): MEVTxsProtoMsg {
    return {
      typeUrl: "/tendermint.mempool.MEVTxs",
      value: MEVTxs.encode(message).finish()
    };
  }
};