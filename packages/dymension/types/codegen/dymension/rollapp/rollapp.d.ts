import { TokenMetadata, TokenMetadataAmino, TokenMetadataSDKType } from "./bank";
import { StateInfoIndex, StateInfoIndexAmino, StateInfoIndexSDKType } from "./state_info";
import { BinaryWriter } from "../../binary";
/**
 * Rollapp defines a rollapp object. First the RollApp is created and then
 * sequencers can be created and attached. The RollApp is identified by rollappId
 */
export interface Rollapp {
    /**
     * The unique identifier of the rollapp chain.
     * The rollappId follows the same standard as cosmos chain_id.
     */
    rollappId: string;
    /** creator is the bech32-encoded address of the rollapp creator. */
    creator: string;
    /**
     * version is the software and configuration version.
     * starts from 1 and increases by one on every MsgUpdateState
     */
    version: bigint;
    /** codeStamp is a generated hash for unique identification of the rollapp code. */
    /** @deprecated */
    codeStamp: string;
    /** genesisPath is the description of the genesis file location on the DA. */
    /** @deprecated */
    genesisPath: string;
    /**
     * maxWithholdingBlocks is the maximum number of blocks for
     * an active sequencer to send a state update (MsgUpdateState).
     */
    /** @deprecated */
    maxWithholdingBlocks: bigint;
    /** maxSequencers is the maximum number of sequencers. */
    maxSequencers: bigint;
    /**
     * permissionedAddresses is a bech32-encoded address list of the sequencers that are allowed to serve this rollappId.
     * In the case of an empty list, the rollapp is considered permissionless.
     */
    permissionedAddresses: string[];
    /** tokenMetadata is a list of TokenMetadata that are registered on this rollapp */
    tokenMetadata: TokenMetadata[];
}
export interface RollappProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.Rollapp";
    value: Uint8Array;
}
/**
 * Rollapp defines a rollapp object. First the RollApp is created and then
 * sequencers can be created and attached. The RollApp is identified by rollappId
 */
export interface RollappAmino {
    /**
     * The unique identifier of the rollapp chain.
     * The rollappId follows the same standard as cosmos chain_id.
     */
    rollappId?: string;
    /** creator is the bech32-encoded address of the rollapp creator. */
    creator?: string;
    /**
     * version is the software and configuration version.
     * starts from 1 and increases by one on every MsgUpdateState
     */
    version?: string;
    /** codeStamp is a generated hash for unique identification of the rollapp code. */
    /** @deprecated */
    codeStamp?: string;
    /** genesisPath is the description of the genesis file location on the DA. */
    /** @deprecated */
    genesisPath?: string;
    /**
     * maxWithholdingBlocks is the maximum number of blocks for
     * an active sequencer to send a state update (MsgUpdateState).
     */
    /** @deprecated */
    maxWithholdingBlocks?: string;
    /** maxSequencers is the maximum number of sequencers. */
    maxSequencers?: string;
    /**
     * permissionedAddresses is a bech32-encoded address list of the sequencers that are allowed to serve this rollappId.
     * In the case of an empty list, the rollapp is considered permissionless.
     */
    permissionedAddresses?: string[];
    /** tokenMetadata is a list of TokenMetadata that are registered on this rollapp */
    tokenMetadata?: TokenMetadataAmino[];
}
export interface RollappAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.Rollapp";
    value: RollappAmino;
}
/**
 * Rollapp defines a rollapp object. First the RollApp is created and then
 * sequencers can be created and attached. The RollApp is identified by rollappId
 */
export interface RollappSDKType {
    rollappId: string;
    creator: string;
    version: bigint;
    /** @deprecated */
    codeStamp: string;
    /** @deprecated */
    genesisPath: string;
    /** @deprecated */
    maxWithholdingBlocks: bigint;
    maxSequencers: bigint;
    permissionedAddresses: string[];
    tokenMetadata: TokenMetadataSDKType[];
}
/** Rollapp summary is a compact representation of Rollapp */
export interface RollappSummary {
    /**
     * The unique identifier of the rollapp chain.
     * The rollappId follows the same standard as cosmos chain_id.
     */
    rollappId: string;
    /** Defines the index of the last rollapp UpdateState. */
    latestStateIndex?: StateInfoIndex;
    /** Defines the index of the last rollapp UpdateState that was finalized. */
    latestFinalizedStateIndex?: StateInfoIndex;
}
export interface RollappSummaryProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.RollappSummary";
    value: Uint8Array;
}
/** Rollapp summary is a compact representation of Rollapp */
export interface RollappSummaryAmino {
    /**
     * The unique identifier of the rollapp chain.
     * The rollappId follows the same standard as cosmos chain_id.
     */
    rollappId?: string;
    /** Defines the index of the last rollapp UpdateState. */
    latestStateIndex?: StateInfoIndexAmino;
    /** Defines the index of the last rollapp UpdateState that was finalized. */
    latestFinalizedStateIndex?: StateInfoIndexAmino;
}
export interface RollappSummaryAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.RollappSummary";
    value: RollappSummaryAmino;
}
/** Rollapp summary is a compact representation of Rollapp */
export interface RollappSummarySDKType {
    rollappId: string;
    latestStateIndex?: StateInfoIndexSDKType;
    latestFinalizedStateIndex?: StateInfoIndexSDKType;
}
export declare const Rollapp: {
    typeUrl: string;
    encode(message: Rollapp, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Rollapp;
    fromPartial(object: Partial<Rollapp>): Rollapp;
    fromAmino(object: RollappAmino): Rollapp;
    toAmino(message: Rollapp): RollappAmino;
    fromAminoMsg(object: RollappAminoMsg): Rollapp;
    fromProtoMsg(message: RollappProtoMsg): Rollapp;
    toProto(message: Rollapp): Uint8Array;
    toProtoMsg(message: Rollapp): RollappProtoMsg;
};
export declare const RollappSummary: {
    typeUrl: string;
    encode(message: RollappSummary, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RollappSummary;
    fromPartial(object: Partial<RollappSummary>): RollappSummary;
    fromAmino(object: RollappSummaryAmino): RollappSummary;
    toAmino(message: RollappSummary): RollappSummaryAmino;
    fromAminoMsg(object: RollappSummaryAminoMsg): RollappSummary;
    fromProtoMsg(message: RollappSummaryProtoMsg): RollappSummary;
    toProto(message: RollappSummary): Uint8Array;
    toProtoMsg(message: RollappSummary): RollappSummaryProtoMsg;
};
