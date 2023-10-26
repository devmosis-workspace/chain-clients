import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
/** enum to specify that the IndexerTendermintEvent is a block event. */
export enum IndexerTendermintEvent_BlockEvent {
  /** BLOCK_EVENT_UNSPECIFIED - Default value. This value is invalid and unused. */
  BLOCK_EVENT_UNSPECIFIED = 0,
  /**
   * BLOCK_EVENT_BEGIN_BLOCK - BLOCK_EVENT_BEGIN_BLOCK indicates that the event was generated during
   * BeginBlock.
   */
  BLOCK_EVENT_BEGIN_BLOCK = 1,
  /**
   * BLOCK_EVENT_END_BLOCK - BLOCK_EVENT_END_BLOCK indicates that the event was generated during
   * EndBlock.
   */
  BLOCK_EVENT_END_BLOCK = 2,
  UNRECOGNIZED = -1,
}
export const IndexerTendermintEvent_BlockEventSDKType = IndexerTendermintEvent_BlockEvent;
export const IndexerTendermintEvent_BlockEventAmino = IndexerTendermintEvent_BlockEvent;
export function indexerTendermintEvent_BlockEventFromJSON(object: any): IndexerTendermintEvent_BlockEvent {
  switch (object) {
    case 0:
    case "BLOCK_EVENT_UNSPECIFIED":
      return IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_UNSPECIFIED;
    case 1:
    case "BLOCK_EVENT_BEGIN_BLOCK":
      return IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_BEGIN_BLOCK;
    case 2:
    case "BLOCK_EVENT_END_BLOCK":
      return IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_END_BLOCK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IndexerTendermintEvent_BlockEvent.UNRECOGNIZED;
  }
}
export function indexerTendermintEvent_BlockEventToJSON(object: IndexerTendermintEvent_BlockEvent): string {
  switch (object) {
    case IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_UNSPECIFIED:
      return "BLOCK_EVENT_UNSPECIFIED";
    case IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_BEGIN_BLOCK:
      return "BLOCK_EVENT_BEGIN_BLOCK";
    case IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_END_BLOCK:
      return "BLOCK_EVENT_END_BLOCK";
    case IndexerTendermintEvent_BlockEvent.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * IndexerTendermintEventWrapper is a wrapper around IndexerTendermintEvent,
 * with an additional txn_hash field.
 */
export interface IndexerTendermintEventWrapper {
  event: IndexerTendermintEvent;
  txnHash: string;
}
export interface IndexerTendermintEventWrapperProtoMsg {
  typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintEventWrapper";
  value: Uint8Array;
}
/**
 * IndexerTendermintEventWrapper is a wrapper around IndexerTendermintEvent,
 * with an additional txn_hash field.
 */
export interface IndexerTendermintEventWrapperAmino {
  event?: IndexerTendermintEventAmino;
  txn_hash: string;
}
export interface IndexerTendermintEventWrapperAminoMsg {
  type: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintEventWrapper";
  value: IndexerTendermintEventWrapperAmino;
}
/**
 * IndexerTendermintEventWrapper is a wrapper around IndexerTendermintEvent,
 * with an additional txn_hash field.
 */
export interface IndexerTendermintEventWrapperSDKType {
  event: IndexerTendermintEventSDKType;
  txn_hash: string;
}
/**
 * IndexerEventsStoreValue represents the type of the value of the
 * `IndexerEventsStore` in state.
 */
export interface IndexerEventsStoreValue {
  events: IndexerTendermintEventWrapper[];
}
export interface IndexerEventsStoreValueProtoMsg {
  typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerEventsStoreValue";
  value: Uint8Array;
}
/**
 * IndexerEventsStoreValue represents the type of the value of the
 * `IndexerEventsStore` in state.
 */
export interface IndexerEventsStoreValueAmino {
  events: IndexerTendermintEventWrapperAmino[];
}
export interface IndexerEventsStoreValueAminoMsg {
  type: "/dydxprotocol.indexer.indexer_manager.IndexerEventsStoreValue";
  value: IndexerEventsStoreValueAmino;
}
/**
 * IndexerEventsStoreValue represents the type of the value of the
 * `IndexerEventsStore` in state.
 */
export interface IndexerEventsStoreValueSDKType {
  events: IndexerTendermintEventWrapperSDKType[];
}
/**
 * IndexerTendermintEvent contains the base64 encoded event proto emitted from
 * the V4 application as well as additional metadata to determine the ordering
 * of the event within the block and the subtype of the event.
 */
export interface IndexerTendermintEvent {
  /** Subtype of the event e.g. "order_fill", "subaccount_update", etc. */
  subtype: string;
  transactionIndex?: number;
  blockEvent?: IndexerTendermintEvent_BlockEvent;
  /**
   * Index of the event within the list of events that happened either during a
   * transaction or during processing of a block.
   * TODO(DEC-537): Deprecate this field because events are already ordered.
   */
  eventIndex: number;
  /** Version of the event. */
  version: number;
  /** Tendermint event bytes. */
  dataBytes: Uint8Array;
}
export interface IndexerTendermintEventProtoMsg {
  typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintEvent";
  value: Uint8Array;
}
/**
 * IndexerTendermintEvent contains the base64 encoded event proto emitted from
 * the V4 application as well as additional metadata to determine the ordering
 * of the event within the block and the subtype of the event.
 */
export interface IndexerTendermintEventAmino {
  /** Subtype of the event e.g. "order_fill", "subaccount_update", etc. */
  subtype: string;
  transaction_index?: number;
  block_event?: IndexerTendermintEvent_BlockEvent;
  /**
   * Index of the event within the list of events that happened either during a
   * transaction or during processing of a block.
   * TODO(DEC-537): Deprecate this field because events are already ordered.
   */
  event_index: number;
  /** Version of the event. */
  version: number;
  /** Tendermint event bytes. */
  data_bytes: Uint8Array;
}
export interface IndexerTendermintEventAminoMsg {
  type: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintEvent";
  value: IndexerTendermintEventAmino;
}
/**
 * IndexerTendermintEvent contains the base64 encoded event proto emitted from
 * the V4 application as well as additional metadata to determine the ordering
 * of the event within the block and the subtype of the event.
 */
export interface IndexerTendermintEventSDKType {
  subtype: string;
  transaction_index?: number;
  block_event?: IndexerTendermintEvent_BlockEvent;
  event_index: number;
  version: number;
  data_bytes: Uint8Array;
}
/**
 * IndexerTendermintBlock contains all the events for the block along with
 * metadata for the block height, timestamp of the block and a list of all the
 * hashes of the transactions within the block. The transaction hashes follow
 * the ordering of the transactions as they appear within the block.
 */
export interface IndexerTendermintBlock {
  height: number;
  time: Timestamp;
  events: IndexerTendermintEvent[];
  txHashes: string[];
}
export interface IndexerTendermintBlockProtoMsg {
  typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintBlock";
  value: Uint8Array;
}
/**
 * IndexerTendermintBlock contains all the events for the block along with
 * metadata for the block height, timestamp of the block and a list of all the
 * hashes of the transactions within the block. The transaction hashes follow
 * the ordering of the transactions as they appear within the block.
 */
export interface IndexerTendermintBlockAmino {
  height: number;
  time?: TimestampAmino;
  events: IndexerTendermintEventAmino[];
  tx_hashes: string[];
}
export interface IndexerTendermintBlockAminoMsg {
  type: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintBlock";
  value: IndexerTendermintBlockAmino;
}
/**
 * IndexerTendermintBlock contains all the events for the block along with
 * metadata for the block height, timestamp of the block and a list of all the
 * hashes of the transactions within the block. The transaction hashes follow
 * the ordering of the transactions as they appear within the block.
 */
export interface IndexerTendermintBlockSDKType {
  height: number;
  time: TimestampSDKType;
  events: IndexerTendermintEventSDKType[];
  tx_hashes: string[];
}
function createBaseIndexerTendermintEventWrapper(): IndexerTendermintEventWrapper {
  return {
    event: IndexerTendermintEvent.fromPartial({}),
    txnHash: ""
  };
}
export const IndexerTendermintEventWrapper = {
  typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintEventWrapper",
  encode(message: IndexerTendermintEventWrapper, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.event !== undefined) {
      IndexerTendermintEvent.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    if (message.txnHash !== "") {
      writer.uint32(18).string(message.txnHash);
    }
    return writer;
  },
  fromJSON(object: any): IndexerTendermintEventWrapper {
    return {
      event: isSet(object.event) ? IndexerTendermintEvent.fromJSON(object.event) : undefined,
      txnHash: isSet(object.txnHash) ? String(object.txnHash) : ""
    };
  },
  fromPartial(object: Partial<IndexerTendermintEventWrapper>): IndexerTendermintEventWrapper {
    const message = createBaseIndexerTendermintEventWrapper();
    message.event = object.event !== undefined && object.event !== null ? IndexerTendermintEvent.fromPartial(object.event) : undefined;
    message.txnHash = object.txnHash ?? "";
    return message;
  },
  fromAmino(object: IndexerTendermintEventWrapperAmino): IndexerTendermintEventWrapper {
    return {
      event: object?.event ? IndexerTendermintEvent.fromAmino(object.event) : undefined,
      txnHash: object.txn_hash
    };
  },
  toAmino(message: IndexerTendermintEventWrapper): IndexerTendermintEventWrapperAmino {
    const obj: any = {};
    obj.event = message.event ? IndexerTendermintEvent.toAmino(message.event) : undefined;
    obj.txn_hash = message.txnHash;
    return obj;
  },
  fromAminoMsg(object: IndexerTendermintEventWrapperAminoMsg): IndexerTendermintEventWrapper {
    return IndexerTendermintEventWrapper.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexerTendermintEventWrapperProtoMsg): IndexerTendermintEventWrapper {
    return IndexerTendermintEventWrapper.decode(message.value);
  },
  toProto(message: IndexerTendermintEventWrapper): Uint8Array {
    return IndexerTendermintEventWrapper.encode(message).finish();
  },
  toProtoMsg(message: IndexerTendermintEventWrapper): IndexerTendermintEventWrapperProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintEventWrapper",
      value: IndexerTendermintEventWrapper.encode(message).finish()
    };
  }
};
function createBaseIndexerEventsStoreValue(): IndexerEventsStoreValue {
  return {
    events: []
  };
}
export const IndexerEventsStoreValue = {
  typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerEventsStoreValue",
  encode(message: IndexerEventsStoreValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      IndexerTendermintEventWrapper.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IndexerEventsStoreValue {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => IndexerTendermintEventWrapper.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<IndexerEventsStoreValue>): IndexerEventsStoreValue {
    const message = createBaseIndexerEventsStoreValue();
    message.events = object.events?.map(e => IndexerTendermintEventWrapper.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IndexerEventsStoreValueAmino): IndexerEventsStoreValue {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => IndexerTendermintEventWrapper.fromAmino(e)) : []
    };
  },
  toAmino(message: IndexerEventsStoreValue): IndexerEventsStoreValueAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e ? IndexerTendermintEventWrapper.toAmino(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAminoMsg(object: IndexerEventsStoreValueAminoMsg): IndexerEventsStoreValue {
    return IndexerEventsStoreValue.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexerEventsStoreValueProtoMsg): IndexerEventsStoreValue {
    return IndexerEventsStoreValue.decode(message.value);
  },
  toProto(message: IndexerEventsStoreValue): Uint8Array {
    return IndexerEventsStoreValue.encode(message).finish();
  },
  toProtoMsg(message: IndexerEventsStoreValue): IndexerEventsStoreValueProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerEventsStoreValue",
      value: IndexerEventsStoreValue.encode(message).finish()
    };
  }
};
function createBaseIndexerTendermintEvent(): IndexerTendermintEvent {
  return {
    subtype: "",
    transactionIndex: undefined,
    blockEvent: undefined,
    eventIndex: 0,
    version: 0,
    dataBytes: new Uint8Array()
  };
}
export const IndexerTendermintEvent = {
  typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintEvent",
  encode(message: IndexerTendermintEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subtype !== "") {
      writer.uint32(10).string(message.subtype);
    }
    if (message.transactionIndex !== undefined) {
      writer.uint32(24).uint32(message.transactionIndex);
    }
    if (message.blockEvent !== undefined) {
      writer.uint32(32).int32(message.blockEvent);
    }
    if (message.eventIndex !== 0) {
      writer.uint32(40).uint32(message.eventIndex);
    }
    if (message.version !== 0) {
      writer.uint32(48).uint32(message.version);
    }
    if (message.dataBytes.length !== 0) {
      writer.uint32(58).bytes(message.dataBytes);
    }
    return writer;
  },
  fromJSON(object: any): IndexerTendermintEvent {
    return {
      subtype: isSet(object.subtype) ? String(object.subtype) : "",
      transactionIndex: isSet(object.transactionIndex) ? Number(object.transactionIndex) : undefined,
      blockEvent: isSet(object.blockEvent) ? indexerTendermintEvent_BlockEventFromJSON(object.blockEvent) : undefined,
      eventIndex: isSet(object.eventIndex) ? Number(object.eventIndex) : 0,
      version: isSet(object.version) ? Number(object.version) : 0,
      dataBytes: isSet(object.dataBytes) ? bytesFromBase64(object.dataBytes) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<IndexerTendermintEvent>): IndexerTendermintEvent {
    const message = createBaseIndexerTendermintEvent();
    message.subtype = object.subtype ?? "";
    message.transactionIndex = object.transactionIndex ?? undefined;
    message.blockEvent = object.blockEvent ?? undefined;
    message.eventIndex = object.eventIndex ?? 0;
    message.version = object.version ?? 0;
    message.dataBytes = object.dataBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: IndexerTendermintEventAmino): IndexerTendermintEvent {
    return {
      subtype: object.subtype,
      transactionIndex: object?.transaction_index,
      blockEvent: isSet(object.block_event) ? indexerTendermintEvent_BlockEventFromJSON(object.block_event) : undefined,
      eventIndex: object.event_index,
      version: object.version,
      dataBytes: object.data_bytes
    };
  },
  toAmino(message: IndexerTendermintEvent): IndexerTendermintEventAmino {
    const obj: any = {};
    obj.subtype = message.subtype;
    obj.transaction_index = message.transactionIndex;
    obj.block_event = message.blockEvent;
    obj.event_index = message.eventIndex;
    obj.version = message.version;
    obj.data_bytes = message.dataBytes;
    return obj;
  },
  fromAminoMsg(object: IndexerTendermintEventAminoMsg): IndexerTendermintEvent {
    return IndexerTendermintEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexerTendermintEventProtoMsg): IndexerTendermintEvent {
    return IndexerTendermintEvent.decode(message.value);
  },
  toProto(message: IndexerTendermintEvent): Uint8Array {
    return IndexerTendermintEvent.encode(message).finish();
  },
  toProtoMsg(message: IndexerTendermintEvent): IndexerTendermintEventProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintEvent",
      value: IndexerTendermintEvent.encode(message).finish()
    };
  }
};
function createBaseIndexerTendermintBlock(): IndexerTendermintBlock {
  return {
    height: 0,
    time: Timestamp.fromPartial({}),
    events: [],
    txHashes: []
  };
}
export const IndexerTendermintBlock = {
  typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintBlock",
  encode(message: IndexerTendermintBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== 0) {
      writer.uint32(8).uint32(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.events) {
      IndexerTendermintEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.txHashes) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): IndexerTendermintBlock {
    return {
      height: isSet(object.height) ? Number(object.height) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => IndexerTendermintEvent.fromJSON(e)) : [],
      txHashes: Array.isArray(object?.txHashes) ? object.txHashes.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<IndexerTendermintBlock>): IndexerTendermintBlock {
    const message = createBaseIndexerTendermintBlock();
    message.height = object.height ?? 0;
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.events = object.events?.map(e => IndexerTendermintEvent.fromPartial(e)) || [];
    message.txHashes = object.txHashes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: IndexerTendermintBlockAmino): IndexerTendermintBlock {
    return {
      height: object.height,
      time: object.time,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => IndexerTendermintEvent.fromAmino(e)) : [],
      txHashes: Array.isArray(object?.tx_hashes) ? object.tx_hashes.map((e: any) => e) : []
    };
  },
  toAmino(message: IndexerTendermintBlock): IndexerTendermintBlockAmino {
    const obj: any = {};
    obj.height = message.height;
    obj.time = message.time;
    if (message.events) {
      obj.events = message.events.map(e => e ? IndexerTendermintEvent.toAmino(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.txHashes) {
      obj.tx_hashes = message.txHashes.map(e => e);
    } else {
      obj.tx_hashes = [];
    }
    return obj;
  },
  fromAminoMsg(object: IndexerTendermintBlockAminoMsg): IndexerTendermintBlock {
    return IndexerTendermintBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexerTendermintBlockProtoMsg): IndexerTendermintBlock {
    return IndexerTendermintBlock.decode(message.value);
  },
  toProto(message: IndexerTendermintBlock): Uint8Array {
    return IndexerTendermintBlock.encode(message).finish();
  },
  toProtoMsg(message: IndexerTendermintBlock): IndexerTendermintBlockProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.indexer_manager.IndexerTendermintBlock",
      value: IndexerTendermintBlock.encode(message).finish()
    };
  }
};