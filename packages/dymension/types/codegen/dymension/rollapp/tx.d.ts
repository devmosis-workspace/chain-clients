import { TokenMetadata, TokenMetadataAmino, TokenMetadataSDKType } from "./bank";
import { BlockDescriptors, BlockDescriptorsAmino, BlockDescriptorsSDKType } from "./block_descriptor";
import { BinaryWriter } from "../../binary";
/** ===================== MsgCreateRollapp */
export interface MsgCreateRollapp {
    /** creator is the bech32-encoded address of the rollapp creator */
    creator: string;
    /**
     * rollappId is the unique identifier of the rollapp chain.
     * The rollappId follows the same standard as cosmos chain_id
     */
    rollappId: string;
    /** @deprecated */
    codeStamp: string;
    /** genesisPath is the description of the genesis file location on the DA */
    /** @deprecated */
    genesisPath: string;
    /**
     * maxWithholdingBlocks is the maximum number of blocks for
     * an active sequencer to send a state update (MsgUpdateState)
     */
    /** @deprecated */
    maxWithholdingBlocks: bigint;
    /** maxSequencers is the maximum number of sequencers */
    maxSequencers: bigint;
    /**
     * permissionedAddresses is a bech32-encoded address list of the
     * sequencers that are allowed to serve this rollappId.
     * In the case of an empty list, the rollapp is considered permissionless
     */
    permissionedAddresses: string[];
    /** metadata provides the client information for all the registered tokens. */
    metadatas: TokenMetadata[];
}
export interface MsgCreateRollappProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp";
    value: Uint8Array;
}
/** ===================== MsgCreateRollapp */
export interface MsgCreateRollappAmino {
    /** creator is the bech32-encoded address of the rollapp creator */
    creator?: string;
    /**
     * rollappId is the unique identifier of the rollapp chain.
     * The rollappId follows the same standard as cosmos chain_id
     */
    rollappId?: string;
    /** @deprecated */
    codeStamp?: string;
    /** genesisPath is the description of the genesis file location on the DA */
    /** @deprecated */
    genesisPath?: string;
    /**
     * maxWithholdingBlocks is the maximum number of blocks for
     * an active sequencer to send a state update (MsgUpdateState)
     */
    /** @deprecated */
    maxWithholdingBlocks?: string;
    /** maxSequencers is the maximum number of sequencers */
    maxSequencers?: string;
    /**
     * permissionedAddresses is a bech32-encoded address list of the
     * sequencers that are allowed to serve this rollappId.
     * In the case of an empty list, the rollapp is considered permissionless
     */
    permissionedAddresses?: string[];
    /** metadata provides the client information for all the registered tokens. */
    metadatas?: TokenMetadataAmino[];
}
export interface MsgCreateRollappAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp";
    value: MsgCreateRollappAmino;
}
/** ===================== MsgCreateRollapp */
export interface MsgCreateRollappSDKType {
    creator: string;
    rollappId: string;
    /** @deprecated */
    codeStamp: string;
    /** @deprecated */
    genesisPath: string;
    /** @deprecated */
    maxWithholdingBlocks: bigint;
    maxSequencers: bigint;
    permissionedAddresses: string[];
    metadatas: TokenMetadataSDKType[];
}
export interface MsgCreateRollappResponse {
}
export interface MsgCreateRollappResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollappResponse";
    value: Uint8Array;
}
export interface MsgCreateRollappResponseAmino {
}
export interface MsgCreateRollappResponseAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.MsgCreateRollappResponse";
    value: MsgCreateRollappResponseAmino;
}
export interface MsgCreateRollappResponseSDKType {
}
/**
 * ===================== MsgUpdateState
 * Updating a rollapp state with a block batch
 * a block batch is a list of ordered blocks (by height)
 */
export interface MsgUpdateState {
    /** creator is the bech32-encoded address of the sequencer sending the update */
    creator: string;
    /**
     * rollappId is the rollapp that the sequencer belongs to and asking to update
     * The rollappId follows the same standard as cosmos chain_id
     */
    rollappId: string;
    /** startHeight is the block height of the first block in the batch */
    startHeight: bigint;
    /** numBlocks is the number of blocks included in this batch update */
    numBlocks: bigint;
    /** DAPath is the description of the location on the DA layer */
    DAPath: string;
    /** version is the version of the rollapp */
    version: bigint;
    /**
     * BDs is a list of block description objects (one per block)
     * the list must be ordered by height, starting from startHeight to startHeight+numBlocks-1
     */
    BDs: BlockDescriptors;
}
export interface MsgUpdateStateProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateState";
    value: Uint8Array;
}
/**
 * ===================== MsgUpdateState
 * Updating a rollapp state with a block batch
 * a block batch is a list of ordered blocks (by height)
 */
export interface MsgUpdateStateAmino {
    /** creator is the bech32-encoded address of the sequencer sending the update */
    creator?: string;
    /**
     * rollappId is the rollapp that the sequencer belongs to and asking to update
     * The rollappId follows the same standard as cosmos chain_id
     */
    rollappId?: string;
    /** startHeight is the block height of the first block in the batch */
    startHeight?: string;
    /** numBlocks is the number of blocks included in this batch update */
    numBlocks?: string;
    /** DAPath is the description of the location on the DA layer */
    DAPath?: string;
    /** version is the version of the rollapp */
    version?: string;
    /**
     * BDs is a list of block description objects (one per block)
     * the list must be ordered by height, starting from startHeight to startHeight+numBlocks-1
     */
    BDs?: BlockDescriptorsAmino;
}
export interface MsgUpdateStateAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.MsgUpdateState";
    value: MsgUpdateStateAmino;
}
/**
 * ===================== MsgUpdateState
 * Updating a rollapp state with a block batch
 * a block batch is a list of ordered blocks (by height)
 */
export interface MsgUpdateStateSDKType {
    creator: string;
    rollappId: string;
    startHeight: bigint;
    numBlocks: bigint;
    DAPath: string;
    version: bigint;
    BDs: BlockDescriptorsSDKType;
}
export interface MsgUpdateStateResponse {
}
export interface MsgUpdateStateResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateStateResponse";
    value: Uint8Array;
}
export interface MsgUpdateStateResponseAmino {
}
export interface MsgUpdateStateResponseAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.MsgUpdateStateResponse";
    value: MsgUpdateStateResponseAmino;
}
export interface MsgUpdateStateResponseSDKType {
}
export declare const MsgCreateRollapp: {
    typeUrl: string;
    encode(message: MsgCreateRollapp, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateRollapp;
    fromPartial(object: Partial<MsgCreateRollapp>): MsgCreateRollapp;
    fromAmino(object: MsgCreateRollappAmino): MsgCreateRollapp;
    toAmino(message: MsgCreateRollapp): MsgCreateRollappAmino;
    fromAminoMsg(object: MsgCreateRollappAminoMsg): MsgCreateRollapp;
    fromProtoMsg(message: MsgCreateRollappProtoMsg): MsgCreateRollapp;
    toProto(message: MsgCreateRollapp): Uint8Array;
    toProtoMsg(message: MsgCreateRollapp): MsgCreateRollappProtoMsg;
};
export declare const MsgCreateRollappResponse: {
    typeUrl: string;
    encode(_: MsgCreateRollappResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateRollappResponse;
    fromPartial(_: Partial<MsgCreateRollappResponse>): MsgCreateRollappResponse;
    fromAmino(_: MsgCreateRollappResponseAmino): MsgCreateRollappResponse;
    toAmino(_: MsgCreateRollappResponse): MsgCreateRollappResponseAmino;
    fromAminoMsg(object: MsgCreateRollappResponseAminoMsg): MsgCreateRollappResponse;
    fromProtoMsg(message: MsgCreateRollappResponseProtoMsg): MsgCreateRollappResponse;
    toProto(message: MsgCreateRollappResponse): Uint8Array;
    toProtoMsg(message: MsgCreateRollappResponse): MsgCreateRollappResponseProtoMsg;
};
export declare const MsgUpdateState: {
    typeUrl: string;
    encode(message: MsgUpdateState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateState;
    fromPartial(object: Partial<MsgUpdateState>): MsgUpdateState;
    fromAmino(object: MsgUpdateStateAmino): MsgUpdateState;
    toAmino(message: MsgUpdateState): MsgUpdateStateAmino;
    fromAminoMsg(object: MsgUpdateStateAminoMsg): MsgUpdateState;
    fromProtoMsg(message: MsgUpdateStateProtoMsg): MsgUpdateState;
    toProto(message: MsgUpdateState): Uint8Array;
    toProtoMsg(message: MsgUpdateState): MsgUpdateStateProtoMsg;
};
export declare const MsgUpdateStateResponse: {
    typeUrl: string;
    encode(_: MsgUpdateStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateStateResponse;
    fromPartial(_: Partial<MsgUpdateStateResponse>): MsgUpdateStateResponse;
    fromAmino(_: MsgUpdateStateResponseAmino): MsgUpdateStateResponse;
    toAmino(_: MsgUpdateStateResponse): MsgUpdateStateResponseAmino;
    fromAminoMsg(object: MsgUpdateStateResponseAminoMsg): MsgUpdateStateResponse;
    fromProtoMsg(message: MsgUpdateStateResponseProtoMsg): MsgUpdateStateResponse;
    toProto(message: MsgUpdateStateResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateStateResponse): MsgUpdateStateResponseProtoMsg;
};
