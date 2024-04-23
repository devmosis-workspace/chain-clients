import { StateStatus } from "./state_status";
import { BlockDescriptors, BlockDescriptorsAmino, BlockDescriptorsSDKType } from "./block_descriptor";
import { BinaryWriter } from "../../binary";
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
export declare const StateInfoIndex: {
    typeUrl: string;
    encode(message: StateInfoIndex, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StateInfoIndex;
    fromPartial(object: Partial<StateInfoIndex>): StateInfoIndex;
    fromAmino(object: StateInfoIndexAmino): StateInfoIndex;
    toAmino(message: StateInfoIndex): StateInfoIndexAmino;
    fromAminoMsg(object: StateInfoIndexAminoMsg): StateInfoIndex;
    fromProtoMsg(message: StateInfoIndexProtoMsg): StateInfoIndex;
    toProto(message: StateInfoIndex): Uint8Array;
    toProtoMsg(message: StateInfoIndex): StateInfoIndexProtoMsg;
};
export declare const StateInfo: {
    typeUrl: string;
    encode(message: StateInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StateInfo;
    fromPartial(object: Partial<StateInfo>): StateInfo;
    fromAmino(object: StateInfoAmino): StateInfo;
    toAmino(message: StateInfo): StateInfoAmino;
    fromAminoMsg(object: StateInfoAminoMsg): StateInfo;
    fromProtoMsg(message: StateInfoProtoMsg): StateInfo;
    toProto(message: StateInfo): Uint8Array;
    toProtoMsg(message: StateInfo): StateInfoProtoMsg;
};
export declare const StateInfoSummary: {
    typeUrl: string;
    encode(message: StateInfoSummary, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StateInfoSummary;
    fromPartial(object: Partial<StateInfoSummary>): StateInfoSummary;
    fromAmino(object: StateInfoSummaryAmino): StateInfoSummary;
    toAmino(message: StateInfoSummary): StateInfoSummaryAmino;
    fromAminoMsg(object: StateInfoSummaryAminoMsg): StateInfoSummary;
    fromProtoMsg(message: StateInfoSummaryProtoMsg): StateInfoSummary;
    toProto(message: StateInfoSummary): Uint8Array;
    toProtoMsg(message: StateInfoSummary): StateInfoSummaryProtoMsg;
};
export declare const BlockHeightToFinalizationQueue: {
    typeUrl: string;
    encode(message: BlockHeightToFinalizationQueue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BlockHeightToFinalizationQueue;
    fromPartial(object: Partial<BlockHeightToFinalizationQueue>): BlockHeightToFinalizationQueue;
    fromAmino(object: BlockHeightToFinalizationQueueAmino): BlockHeightToFinalizationQueue;
    toAmino(message: BlockHeightToFinalizationQueue): BlockHeightToFinalizationQueueAmino;
    fromAminoMsg(object: BlockHeightToFinalizationQueueAminoMsg): BlockHeightToFinalizationQueue;
    fromProtoMsg(message: BlockHeightToFinalizationQueueProtoMsg): BlockHeightToFinalizationQueue;
    toProto(message: BlockHeightToFinalizationQueue): Uint8Array;
    toProtoMsg(message: BlockHeightToFinalizationQueue): BlockHeightToFinalizationQueueProtoMsg;
};
