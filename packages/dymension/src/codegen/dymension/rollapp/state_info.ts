import { StateStatus, stateStatusFromJSON } from "./state_status";
import { BlockDescriptors, BlockDescriptorsAmino, BlockDescriptorsSDKType } from "./block_descriptor";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * StateInfoIndex is the data used for indexing and retrieving a StateInfo
 * it updated and saved with every UpdateState in StateInfo.
 * We use the this structure also for:
 * 1. LatestStateInfoIndex which defines the rollapps' current (latest) index of the last UpdateState
 * 2. LatestFinalizedStateIndex which defines the rollapps' current (latest) index of the latest StateInfo that was finalized
 */
export interface StateInfoIndex {
  /**
   * rollappId is the rollapp that the sequencer belongs to and asking to update
   * it used to identify the what rollapp a StateInfo belongs
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId: string;
  /**
   * index is a sequential increasing number, updating on each
   * state update used for indexing to a specific state info, the first index is 1
   */
  index: bigint;
}
export interface StateInfoIndexProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.StateInfoIndex";
  value: Uint8Array;
}
/**
 * StateInfoIndex is the data used for indexing and retrieving a StateInfo
 * it updated and saved with every UpdateState in StateInfo.
 * We use the this structure also for:
 * 1. LatestStateInfoIndex which defines the rollapps' current (latest) index of the last UpdateState
 * 2. LatestFinalizedStateIndex which defines the rollapps' current (latest) index of the latest StateInfo that was finalized
 */
export interface StateInfoIndexAmino {
  /**
   * rollappId is the rollapp that the sequencer belongs to and asking to update
   * it used to identify the what rollapp a StateInfo belongs
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId?: string;
  /**
   * index is a sequential increasing number, updating on each
   * state update used for indexing to a specific state info, the first index is 1
   */
  index?: string;
}
export interface StateInfoIndexAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.StateInfoIndex";
  value: StateInfoIndexAmino;
}
/**
 * StateInfoIndex is the data used for indexing and retrieving a StateInfo
 * it updated and saved with every UpdateState in StateInfo.
 * We use the this structure also for:
 * 1. LatestStateInfoIndex which defines the rollapps' current (latest) index of the last UpdateState
 * 2. LatestFinalizedStateIndex which defines the rollapps' current (latest) index of the latest StateInfo that was finalized
 */
export interface StateInfoIndexSDKType {
  rollappId: string;
  index: bigint;
}
/** StateInfo defines a rollapps' state. */
export interface StateInfo {
  /**
   * stateInfoIndex defines what rollapp the state belongs to
   * and in which index it can be referenced
   */
  stateInfoIndex: StateInfoIndex;
  /** sequencer is the bech32-encoded address of the sequencer sent the update */
  sequencer: string;
  /** startHeight is the block height of the first block in the batch */
  startHeight: bigint;
  /** numBlocks is the number of blocks included in this batch update */
  numBlocks: bigint;
  /** DAPath is the description of the location on the DA layer */
  DAPath: string;
  /** version is the version of the rollapp */
  version: bigint;
  /** creationHeight is the height at which the UpdateState took place */
  creationHeight: bigint;
  /** status is the status of the state update */
  status: StateStatus;
  /**
   * BDs is a list of block description objects (one per block)
   * the list must be ordered by height, starting from startHeight to startHeight+numBlocks-1
   */
  BDs: BlockDescriptors;
}
export interface StateInfoProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.StateInfo";
  value: Uint8Array;
}
/** StateInfo defines a rollapps' state. */
export interface StateInfoAmino {
  /**
   * stateInfoIndex defines what rollapp the state belongs to
   * and in which index it can be referenced
   */
  stateInfoIndex?: StateInfoIndexAmino;
  /** sequencer is the bech32-encoded address of the sequencer sent the update */
  sequencer?: string;
  /** startHeight is the block height of the first block in the batch */
  startHeight?: string;
  /** numBlocks is the number of blocks included in this batch update */
  numBlocks?: string;
  /** DAPath is the description of the location on the DA layer */
  DAPath?: string;
  /** version is the version of the rollapp */
  version?: string;
  /** creationHeight is the height at which the UpdateState took place */
  creationHeight?: string;
  /** status is the status of the state update */
  status?: StateStatus;
  /**
   * BDs is a list of block description objects (one per block)
   * the list must be ordered by height, starting from startHeight to startHeight+numBlocks-1
   */
  BDs?: BlockDescriptorsAmino;
}
export interface StateInfoAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.StateInfo";
  value: StateInfoAmino;
}
/** StateInfo defines a rollapps' state. */
export interface StateInfoSDKType {
  stateInfoIndex: StateInfoIndexSDKType;
  sequencer: string;
  startHeight: bigint;
  numBlocks: bigint;
  DAPath: string;
  version: bigint;
  creationHeight: bigint;
  status: StateStatus;
  BDs: BlockDescriptorsSDKType;
}
/** StateInfoSummary is a compact representation of StateInfo */
export interface StateInfoSummary {
  /**
   * stateInfoIndex defines what rollapp the state belongs to
   * and in which index it can be referenced
   */
  stateInfoIndex: StateInfoIndex;
  /** status is the status of the state update */
  status: StateStatus;
  /** creationHeight is the height at which the UpdateState took place */
  creationHeight: bigint;
}
export interface StateInfoSummaryProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.StateInfoSummary";
  value: Uint8Array;
}
/** StateInfoSummary is a compact representation of StateInfo */
export interface StateInfoSummaryAmino {
  /**
   * stateInfoIndex defines what rollapp the state belongs to
   * and in which index it can be referenced
   */
  stateInfoIndex?: StateInfoIndexAmino;
  /** status is the status of the state update */
  status?: StateStatus;
  /** creationHeight is the height at which the UpdateState took place */
  creationHeight?: string;
}
export interface StateInfoSummaryAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.StateInfoSummary";
  value: StateInfoSummaryAmino;
}
/** StateInfoSummary is a compact representation of StateInfo */
export interface StateInfoSummarySDKType {
  stateInfoIndex: StateInfoIndexSDKType;
  status: StateStatus;
  creationHeight: bigint;
}
/** BlockHeightToFinalizationQueue defines a map from block height to list of states to finalized */
export interface BlockHeightToFinalizationQueue {
  /** finalizationHeight is the block height that the state should be finalized */
  finalizationHeight: bigint;
  /**
   * finalizationQueue is a list of states that are waiting to be finalized
   * when the block height becomes finalizationHeight
   */
  finalizationQueue: StateInfoIndex[];
}
export interface BlockHeightToFinalizationQueueProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.BlockHeightToFinalizationQueue";
  value: Uint8Array;
}
/** BlockHeightToFinalizationQueue defines a map from block height to list of states to finalized */
export interface BlockHeightToFinalizationQueueAmino {
  /** finalizationHeight is the block height that the state should be finalized */
  finalizationHeight?: string;
  /**
   * finalizationQueue is a list of states that are waiting to be finalized
   * when the block height becomes finalizationHeight
   */
  finalizationQueue?: StateInfoIndexAmino[];
}
export interface BlockHeightToFinalizationQueueAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.BlockHeightToFinalizationQueue";
  value: BlockHeightToFinalizationQueueAmino;
}
/** BlockHeightToFinalizationQueue defines a map from block height to list of states to finalized */
export interface BlockHeightToFinalizationQueueSDKType {
  finalizationHeight: bigint;
  finalizationQueue: StateInfoIndexSDKType[];
}
function createBaseStateInfoIndex(): StateInfoIndex {
  return {
    rollappId: "",
    index: BigInt(0)
  };
}
export const StateInfoIndex = {
  typeUrl: "/dymensionxyz.dymension.rollapp.StateInfoIndex",
  encode(message: StateInfoIndex, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rollappId !== "") {
      writer.uint32(10).string(message.rollappId);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(16).uint64(message.index);
    }
    return writer;
  },
  fromJSON(object: any): StateInfoIndex {
    return {
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : "",
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<StateInfoIndex>): StateInfoIndex {
    const message = createBaseStateInfoIndex();
    message.rollappId = object.rollappId ?? "";
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StateInfoIndexAmino): StateInfoIndex {
    const message = createBaseStateInfoIndex();
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    return message;
  },
  toAmino(message: StateInfoIndex): StateInfoIndexAmino {
    const obj: any = {};
    obj.rollappId = message.rollappId;
    obj.index = message.index ? message.index.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StateInfoIndexAminoMsg): StateInfoIndex {
    return StateInfoIndex.fromAmino(object.value);
  },
  fromProtoMsg(message: StateInfoIndexProtoMsg): StateInfoIndex {
    return StateInfoIndex.decode(message.value);
  },
  toProto(message: StateInfoIndex): Uint8Array {
    return StateInfoIndex.encode(message).finish();
  },
  toProtoMsg(message: StateInfoIndex): StateInfoIndexProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.StateInfoIndex",
      value: StateInfoIndex.encode(message).finish()
    };
  }
};
function createBaseStateInfo(): StateInfo {
  return {
    stateInfoIndex: StateInfoIndex.fromPartial({}),
    sequencer: "",
    startHeight: BigInt(0),
    numBlocks: BigInt(0),
    DAPath: "",
    version: BigInt(0),
    creationHeight: BigInt(0),
    status: 0,
    BDs: BlockDescriptors.fromPartial({})
  };
}
export const StateInfo = {
  typeUrl: "/dymensionxyz.dymension.rollapp.StateInfo",
  encode(message: StateInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stateInfoIndex !== undefined) {
      StateInfoIndex.encode(message.stateInfoIndex, writer.uint32(10).fork()).ldelim();
    }
    if (message.sequencer !== "") {
      writer.uint32(18).string(message.sequencer);
    }
    if (message.startHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.startHeight);
    }
    if (message.numBlocks !== BigInt(0)) {
      writer.uint32(32).uint64(message.numBlocks);
    }
    if (message.DAPath !== "") {
      writer.uint32(42).string(message.DAPath);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(48).uint64(message.version);
    }
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(56).uint64(message.creationHeight);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.BDs !== undefined) {
      BlockDescriptors.encode(message.BDs, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): StateInfo {
    return {
      stateInfoIndex: isSet(object.stateInfoIndex) ? StateInfoIndex.fromJSON(object.stateInfoIndex) : undefined,
      sequencer: isSet(object.sequencer) ? String(object.sequencer) : "",
      startHeight: isSet(object.startHeight) ? BigInt(object.startHeight.toString()) : BigInt(0),
      numBlocks: isSet(object.numBlocks) ? BigInt(object.numBlocks.toString()) : BigInt(0),
      DAPath: isSet(object.DAPath) ? String(object.DAPath) : "",
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      creationHeight: isSet(object.creationHeight) ? BigInt(object.creationHeight.toString()) : BigInt(0),
      status: isSet(object.status) ? stateStatusFromJSON(object.status) : -1,
      BDs: isSet(object.BDs) ? BlockDescriptors.fromJSON(object.BDs) : undefined
    };
  },
  fromPartial(object: Partial<StateInfo>): StateInfo {
    const message = createBaseStateInfo();
    message.stateInfoIndex = object.stateInfoIndex !== undefined && object.stateInfoIndex !== null ? StateInfoIndex.fromPartial(object.stateInfoIndex) : undefined;
    message.sequencer = object.sequencer ?? "";
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt(0);
    message.numBlocks = object.numBlocks !== undefined && object.numBlocks !== null ? BigInt(object.numBlocks.toString()) : BigInt(0);
    message.DAPath = object.DAPath ?? "";
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.BDs = object.BDs !== undefined && object.BDs !== null ? BlockDescriptors.fromPartial(object.BDs) : undefined;
    return message;
  },
  fromAmino(object: StateInfoAmino): StateInfo {
    const message = createBaseStateInfo();
    if (object.stateInfoIndex !== undefined && object.stateInfoIndex !== null) {
      message.stateInfoIndex = StateInfoIndex.fromAmino(object.stateInfoIndex);
    }
    if (object.sequencer !== undefined && object.sequencer !== null) {
      message.sequencer = object.sequencer;
    }
    if (object.startHeight !== undefined && object.startHeight !== null) {
      message.startHeight = BigInt(object.startHeight);
    }
    if (object.numBlocks !== undefined && object.numBlocks !== null) {
      message.numBlocks = BigInt(object.numBlocks);
    }
    if (object.DAPath !== undefined && object.DAPath !== null) {
      message.DAPath = object.DAPath;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = BigInt(object.creationHeight);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = stateStatusFromJSON(object.status);
    }
    if (object.BDs !== undefined && object.BDs !== null) {
      message.BDs = BlockDescriptors.fromAmino(object.BDs);
    }
    return message;
  },
  toAmino(message: StateInfo): StateInfoAmino {
    const obj: any = {};
    obj.stateInfoIndex = message.stateInfoIndex ? StateInfoIndex.toAmino(message.stateInfoIndex) : undefined;
    obj.sequencer = message.sequencer;
    obj.startHeight = message.startHeight ? message.startHeight.toString() : undefined;
    obj.numBlocks = message.numBlocks ? message.numBlocks.toString() : undefined;
    obj.DAPath = message.DAPath;
    obj.version = message.version ? message.version.toString() : undefined;
    obj.creationHeight = message.creationHeight ? message.creationHeight.toString() : undefined;
    obj.status = message.status;
    obj.BDs = message.BDs ? BlockDescriptors.toAmino(message.BDs) : undefined;
    return obj;
  },
  fromAminoMsg(object: StateInfoAminoMsg): StateInfo {
    return StateInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: StateInfoProtoMsg): StateInfo {
    return StateInfo.decode(message.value);
  },
  toProto(message: StateInfo): Uint8Array {
    return StateInfo.encode(message).finish();
  },
  toProtoMsg(message: StateInfo): StateInfoProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.StateInfo",
      value: StateInfo.encode(message).finish()
    };
  }
};
function createBaseStateInfoSummary(): StateInfoSummary {
  return {
    stateInfoIndex: StateInfoIndex.fromPartial({}),
    status: 0,
    creationHeight: BigInt(0)
  };
}
export const StateInfoSummary = {
  typeUrl: "/dymensionxyz.dymension.rollapp.StateInfoSummary",
  encode(message: StateInfoSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stateInfoIndex !== undefined) {
      StateInfoIndex.encode(message.stateInfoIndex, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.creationHeight);
    }
    return writer;
  },
  fromJSON(object: any): StateInfoSummary {
    return {
      stateInfoIndex: isSet(object.stateInfoIndex) ? StateInfoIndex.fromJSON(object.stateInfoIndex) : undefined,
      status: isSet(object.status) ? stateStatusFromJSON(object.status) : -1,
      creationHeight: isSet(object.creationHeight) ? BigInt(object.creationHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<StateInfoSummary>): StateInfoSummary {
    const message = createBaseStateInfoSummary();
    message.stateInfoIndex = object.stateInfoIndex !== undefined && object.stateInfoIndex !== null ? StateInfoIndex.fromPartial(object.stateInfoIndex) : undefined;
    message.status = object.status ?? 0;
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StateInfoSummaryAmino): StateInfoSummary {
    const message = createBaseStateInfoSummary();
    if (object.stateInfoIndex !== undefined && object.stateInfoIndex !== null) {
      message.stateInfoIndex = StateInfoIndex.fromAmino(object.stateInfoIndex);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = stateStatusFromJSON(object.status);
    }
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = BigInt(object.creationHeight);
    }
    return message;
  },
  toAmino(message: StateInfoSummary): StateInfoSummaryAmino {
    const obj: any = {};
    obj.stateInfoIndex = message.stateInfoIndex ? StateInfoIndex.toAmino(message.stateInfoIndex) : undefined;
    obj.status = message.status;
    obj.creationHeight = message.creationHeight ? message.creationHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StateInfoSummaryAminoMsg): StateInfoSummary {
    return StateInfoSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: StateInfoSummaryProtoMsg): StateInfoSummary {
    return StateInfoSummary.decode(message.value);
  },
  toProto(message: StateInfoSummary): Uint8Array {
    return StateInfoSummary.encode(message).finish();
  },
  toProtoMsg(message: StateInfoSummary): StateInfoSummaryProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.StateInfoSummary",
      value: StateInfoSummary.encode(message).finish()
    };
  }
};
function createBaseBlockHeightToFinalizationQueue(): BlockHeightToFinalizationQueue {
  return {
    finalizationHeight: BigInt(0),
    finalizationQueue: []
  };
}
export const BlockHeightToFinalizationQueue = {
  typeUrl: "/dymensionxyz.dymension.rollapp.BlockHeightToFinalizationQueue",
  encode(message: BlockHeightToFinalizationQueue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.finalizationHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.finalizationHeight);
    }
    for (const v of message.finalizationQueue) {
      StateInfoIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BlockHeightToFinalizationQueue {
    return {
      finalizationHeight: isSet(object.finalizationHeight) ? BigInt(object.finalizationHeight.toString()) : BigInt(0),
      finalizationQueue: Array.isArray(object?.finalizationQueue) ? object.finalizationQueue.map((e: any) => StateInfoIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<BlockHeightToFinalizationQueue>): BlockHeightToFinalizationQueue {
    const message = createBaseBlockHeightToFinalizationQueue();
    message.finalizationHeight = object.finalizationHeight !== undefined && object.finalizationHeight !== null ? BigInt(object.finalizationHeight.toString()) : BigInt(0);
    message.finalizationQueue = object.finalizationQueue?.map(e => StateInfoIndex.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BlockHeightToFinalizationQueueAmino): BlockHeightToFinalizationQueue {
    const message = createBaseBlockHeightToFinalizationQueue();
    if (object.finalizationHeight !== undefined && object.finalizationHeight !== null) {
      message.finalizationHeight = BigInt(object.finalizationHeight);
    }
    message.finalizationQueue = object.finalizationQueue?.map(e => StateInfoIndex.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BlockHeightToFinalizationQueue): BlockHeightToFinalizationQueueAmino {
    const obj: any = {};
    obj.finalizationHeight = message.finalizationHeight ? message.finalizationHeight.toString() : undefined;
    if (message.finalizationQueue) {
      obj.finalizationQueue = message.finalizationQueue.map(e => e ? StateInfoIndex.toAmino(e) : undefined);
    } else {
      obj.finalizationQueue = [];
    }
    return obj;
  },
  fromAminoMsg(object: BlockHeightToFinalizationQueueAminoMsg): BlockHeightToFinalizationQueue {
    return BlockHeightToFinalizationQueue.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockHeightToFinalizationQueueProtoMsg): BlockHeightToFinalizationQueue {
    return BlockHeightToFinalizationQueue.decode(message.value);
  },
  toProto(message: BlockHeightToFinalizationQueue): Uint8Array {
    return BlockHeightToFinalizationQueue.encode(message).finish();
  },
  toProtoMsg(message: BlockHeightToFinalizationQueue): BlockHeightToFinalizationQueueProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.BlockHeightToFinalizationQueue",
      value: BlockHeightToFinalizationQueue.encode(message).finish()
    };
  }
};