import { SignedMsgType } from "./types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
export interface CanonicalBlockID {
    hash: Uint8Array;
    partSetHeader: CanonicalPartSetHeader;
}
export interface CanonicalBlockIDProtoMsg {
    typeUrl: "/tendermint.types.CanonicalBlockID";
    value: Uint8Array;
}
export interface CanonicalBlockIDAmino {
    hash?: string;
    part_set_header?: CanonicalPartSetHeaderAmino;
}
export interface CanonicalBlockIDAminoMsg {
    type: "/tendermint.types.CanonicalBlockID";
    value: CanonicalBlockIDAmino;
}
export interface CanonicalBlockIDSDKType {
    hash: Uint8Array;
    part_set_header: CanonicalPartSetHeaderSDKType;
}
export interface CanonicalPartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface CanonicalPartSetHeaderProtoMsg {
    typeUrl: "/tendermint.types.CanonicalPartSetHeader";
    value: Uint8Array;
}
export interface CanonicalPartSetHeaderAmino {
    total?: number;
    hash?: string;
}
export interface CanonicalPartSetHeaderAminoMsg {
    type: "/tendermint.types.CanonicalPartSetHeader";
    value: CanonicalPartSetHeaderAmino;
}
export interface CanonicalPartSetHeaderSDKType {
    total: number;
    hash: Uint8Array;
}
export interface CanonicalProposal {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: bigint;
    /** canonicalization requires fixed size encoding here */
    round: bigint;
    polRound: bigint;
    blockId?: CanonicalBlockID;
    timestamp: Timestamp;
    chainId: string;
}
export interface CanonicalProposalProtoMsg {
    typeUrl: "/tendermint.types.CanonicalProposal";
    value: Uint8Array;
}
export interface CanonicalProposalAmino {
    /** type alias for byte */
    type?: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height?: string;
    /** canonicalization requires fixed size encoding here */
    round?: string;
    pol_round?: string;
    block_id?: CanonicalBlockIDAmino;
    timestamp?: string;
    chain_id?: string;
}
export interface CanonicalProposalAminoMsg {
    type: "/tendermint.types.CanonicalProposal";
    value: CanonicalProposalAmino;
}
export interface CanonicalProposalSDKType {
    type: SignedMsgType;
    height: bigint;
    round: bigint;
    pol_round: bigint;
    block_id?: CanonicalBlockIDSDKType;
    timestamp: TimestampSDKType;
    chain_id: string;
}
export interface CanonicalVote {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: bigint;
    /** canonicalization requires fixed size encoding here */
    round: bigint;
    blockId?: CanonicalBlockID;
    timestamp: Timestamp;
    chainId: string;
}
export interface CanonicalVoteProtoMsg {
    typeUrl: "/tendermint.types.CanonicalVote";
    value: Uint8Array;
}
export interface CanonicalVoteAmino {
    /** type alias for byte */
    type?: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height?: string;
    /** canonicalization requires fixed size encoding here */
    round?: string;
    block_id?: CanonicalBlockIDAmino;
    timestamp?: string;
    chain_id?: string;
}
export interface CanonicalVoteAminoMsg {
    type: "/tendermint.types.CanonicalVote";
    value: CanonicalVoteAmino;
}
export interface CanonicalVoteSDKType {
    type: SignedMsgType;
    height: bigint;
    round: bigint;
    block_id?: CanonicalBlockIDSDKType;
    timestamp: TimestampSDKType;
    chain_id: string;
}
export declare const CanonicalBlockID: {
    typeUrl: string;
    encode(message: CanonicalBlockID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CanonicalBlockID;
    fromPartial(object: Partial<CanonicalBlockID>): CanonicalBlockID;
    fromAmino(object: CanonicalBlockIDAmino): CanonicalBlockID;
    toAmino(message: CanonicalBlockID): CanonicalBlockIDAmino;
    fromAminoMsg(object: CanonicalBlockIDAminoMsg): CanonicalBlockID;
    fromProtoMsg(message: CanonicalBlockIDProtoMsg): CanonicalBlockID;
    toProto(message: CanonicalBlockID): Uint8Array;
    toProtoMsg(message: CanonicalBlockID): CanonicalBlockIDProtoMsg;
};
export declare const CanonicalPartSetHeader: {
    typeUrl: string;
    encode(message: CanonicalPartSetHeader, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CanonicalPartSetHeader;
    fromPartial(object: Partial<CanonicalPartSetHeader>): CanonicalPartSetHeader;
    fromAmino(object: CanonicalPartSetHeaderAmino): CanonicalPartSetHeader;
    toAmino(message: CanonicalPartSetHeader): CanonicalPartSetHeaderAmino;
    fromAminoMsg(object: CanonicalPartSetHeaderAminoMsg): CanonicalPartSetHeader;
    fromProtoMsg(message: CanonicalPartSetHeaderProtoMsg): CanonicalPartSetHeader;
    toProto(message: CanonicalPartSetHeader): Uint8Array;
    toProtoMsg(message: CanonicalPartSetHeader): CanonicalPartSetHeaderProtoMsg;
};
export declare const CanonicalProposal: {
    typeUrl: string;
    encode(message: CanonicalProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CanonicalProposal;
    fromPartial(object: Partial<CanonicalProposal>): CanonicalProposal;
    fromAmino(object: CanonicalProposalAmino): CanonicalProposal;
    toAmino(message: CanonicalProposal): CanonicalProposalAmino;
    fromAminoMsg(object: CanonicalProposalAminoMsg): CanonicalProposal;
    fromProtoMsg(message: CanonicalProposalProtoMsg): CanonicalProposal;
    toProto(message: CanonicalProposal): Uint8Array;
    toProtoMsg(message: CanonicalProposal): CanonicalProposalProtoMsg;
};
export declare const CanonicalVote: {
    typeUrl: string;
    encode(message: CanonicalVote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CanonicalVote;
    fromPartial(object: Partial<CanonicalVote>): CanonicalVote;
    fromAmino(object: CanonicalVoteAmino): CanonicalVote;
    toAmino(message: CanonicalVote): CanonicalVoteAmino;
    fromAminoMsg(object: CanonicalVoteAminoMsg): CanonicalVote;
    fromProtoMsg(message: CanonicalVoteProtoMsg): CanonicalVote;
    toProto(message: CanonicalVote): Uint8Array;
    toProtoMsg(message: CanonicalVote): CanonicalVoteProtoMsg;
};
