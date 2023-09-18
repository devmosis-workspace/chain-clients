import { PartSetHeader, PartSetHeaderAmino, PartSetHeaderSDKType, Part, PartAmino, PartSDKType, SignedMsgType, BlockID, BlockIDAmino, BlockIDSDKType } from "../types/types";
import { Proposal as Proposal1 } from "../types/types";
import { ProposalAmino as Proposal1Amino } from "../types/types";
import { ProposalSDKType as Proposal1SDKType } from "../types/types";
import { Vote as Vote1 } from "../types/types";
import { VoteAmino as Vote1Amino } from "../types/types";
import { VoteSDKType as Vote1SDKType } from "../types/types";
import { BitArray, BitArrayAmino, BitArraySDKType } from "../libs/bits/types";
import { BinaryWriter } from "../../binary";
/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */
export interface NewRoundStep {
    height: bigint;
    round: number;
    step: number;
    secondsSinceStartTime: bigint;
    lastCommitRound: number;
}
export interface NewRoundStepProtoMsg {
    typeUrl: "/tendermint.consensus.NewRoundStep";
    value: Uint8Array;
}
/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */
export interface NewRoundStepAmino {
    height: string;
    round: number;
    step: number;
    seconds_since_start_time: string;
    last_commit_round: number;
}
export interface NewRoundStepAminoMsg {
    type: "/tendermint.consensus.NewRoundStep";
    value: NewRoundStepAmino;
}
/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */
export interface NewRoundStepSDKType {
    height: bigint;
    round: number;
    step: number;
    seconds_since_start_time: bigint;
    last_commit_round: number;
}
/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 */
export interface NewValidBlock {
    height: bigint;
    round: number;
    blockPartSetHeader: PartSetHeader;
    blockParts: BitArray;
    isCommit: boolean;
}
export interface NewValidBlockProtoMsg {
    typeUrl: "/tendermint.consensus.NewValidBlock";
    value: Uint8Array;
}
/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 */
export interface NewValidBlockAmino {
    height: string;
    round: number;
    block_part_set_header?: PartSetHeaderAmino;
    block_parts?: BitArrayAmino;
    is_commit: boolean;
}
export interface NewValidBlockAminoMsg {
    type: "/tendermint.consensus.NewValidBlock";
    value: NewValidBlockAmino;
}
/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 */
export interface NewValidBlockSDKType {
    height: bigint;
    round: number;
    block_part_set_header: PartSetHeaderSDKType;
    block_parts: BitArraySDKType;
    is_commit: boolean;
}
/** Proposal is sent when a new block is proposed. */
export interface Proposal {
    proposal: Proposal1;
}
export interface ProposalProtoMsg {
    typeUrl: "/tendermint.consensus.Proposal";
    value: Uint8Array;
}
/** Proposal is sent when a new block is proposed. */
export interface ProposalAmino {
    proposal?: Proposal1Amino;
}
export interface ProposalAminoMsg {
    type: "/tendermint.consensus.Proposal";
    value: ProposalAmino;
}
/** Proposal is sent when a new block is proposed. */
export interface ProposalSDKType {
    proposal: Proposal1SDKType;
}
/** ProposalPOL is sent when a previous proposal is re-proposed. */
export interface ProposalPOL {
    height: bigint;
    proposalPolRound: number;
    proposalPol: BitArray;
}
export interface ProposalPOLProtoMsg {
    typeUrl: "/tendermint.consensus.ProposalPOL";
    value: Uint8Array;
}
/** ProposalPOL is sent when a previous proposal is re-proposed. */
export interface ProposalPOLAmino {
    height: string;
    proposal_pol_round: number;
    proposal_pol?: BitArrayAmino;
}
export interface ProposalPOLAminoMsg {
    type: "/tendermint.consensus.ProposalPOL";
    value: ProposalPOLAmino;
}
/** ProposalPOL is sent when a previous proposal is re-proposed. */
export interface ProposalPOLSDKType {
    height: bigint;
    proposal_pol_round: number;
    proposal_pol: BitArraySDKType;
}
/** BlockPart is sent when gossipping a piece of the proposed block. */
export interface BlockPart {
    height: bigint;
    round: number;
    part: Part;
}
export interface BlockPartProtoMsg {
    typeUrl: "/tendermint.consensus.BlockPart";
    value: Uint8Array;
}
/** BlockPart is sent when gossipping a piece of the proposed block. */
export interface BlockPartAmino {
    height: string;
    round: number;
    part?: PartAmino;
}
export interface BlockPartAminoMsg {
    type: "/tendermint.consensus.BlockPart";
    value: BlockPartAmino;
}
/** BlockPart is sent when gossipping a piece of the proposed block. */
export interface BlockPartSDKType {
    height: bigint;
    round: number;
    part: PartSDKType;
}
/** Vote is sent when voting for a proposal (or lack thereof). */
export interface Vote {
    vote: Vote1;
}
export interface VoteProtoMsg {
    typeUrl: "/tendermint.consensus.Vote";
    value: Uint8Array;
}
/** Vote is sent when voting for a proposal (or lack thereof). */
export interface VoteAmino {
    vote?: Vote1Amino;
}
export interface VoteAminoMsg {
    type: "/tendermint.consensus.Vote";
    value: VoteAmino;
}
/** Vote is sent when voting for a proposal (or lack thereof). */
export interface VoteSDKType {
    vote: Vote1SDKType;
}
/** HasVote is sent to indicate that a particular vote has been received. */
export interface HasVote {
    height: bigint;
    round: number;
    type: SignedMsgType;
    index: number;
}
export interface HasVoteProtoMsg {
    typeUrl: "/tendermint.consensus.HasVote";
    value: Uint8Array;
}
/** HasVote is sent to indicate that a particular vote has been received. */
export interface HasVoteAmino {
    height: string;
    round: number;
    type: SignedMsgType;
    index: number;
}
export interface HasVoteAminoMsg {
    type: "/tendermint.consensus.HasVote";
    value: HasVoteAmino;
}
/** HasVote is sent to indicate that a particular vote has been received. */
export interface HasVoteSDKType {
    height: bigint;
    round: number;
    type: SignedMsgType;
    index: number;
}
/** VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes. */
export interface VoteSetMaj23 {
    height: bigint;
    round: number;
    type: SignedMsgType;
    blockId: BlockID;
}
export interface VoteSetMaj23ProtoMsg {
    typeUrl: "/tendermint.consensus.VoteSetMaj23";
    value: Uint8Array;
}
/** VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes. */
export interface VoteSetMaj23Amino {
    height: string;
    round: number;
    type: SignedMsgType;
    block_id?: BlockIDAmino;
}
export interface VoteSetMaj23AminoMsg {
    type: "/tendermint.consensus.VoteSetMaj23";
    value: VoteSetMaj23Amino;
}
/** VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes. */
export interface VoteSetMaj23SDKType {
    height: bigint;
    round: number;
    type: SignedMsgType;
    block_id: BlockIDSDKType;
}
/** VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID. */
export interface VoteSetBits {
    height: bigint;
    round: number;
    type: SignedMsgType;
    blockId: BlockID;
    votes: BitArray;
}
export interface VoteSetBitsProtoMsg {
    typeUrl: "/tendermint.consensus.VoteSetBits";
    value: Uint8Array;
}
/** VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID. */
export interface VoteSetBitsAmino {
    height: string;
    round: number;
    type: SignedMsgType;
    block_id?: BlockIDAmino;
    votes?: BitArrayAmino;
}
export interface VoteSetBitsAminoMsg {
    type: "/tendermint.consensus.VoteSetBits";
    value: VoteSetBitsAmino;
}
/** VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID. */
export interface VoteSetBitsSDKType {
    height: bigint;
    round: number;
    type: SignedMsgType;
    block_id: BlockIDSDKType;
    votes: BitArraySDKType;
}
export interface Message {
    newRoundStep?: NewRoundStep;
    newValidBlock?: NewValidBlock;
    proposal?: Proposal;
    proposalPol?: ProposalPOL;
    blockPart?: BlockPart;
    vote?: Vote;
    hasVote?: HasVote;
    voteSetMaj23?: VoteSetMaj23;
    voteSetBits?: VoteSetBits;
}
export interface MessageProtoMsg {
    typeUrl: "/tendermint.consensus.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    new_round_step?: NewRoundStepAmino;
    new_valid_block?: NewValidBlockAmino;
    proposal?: ProposalAmino;
    proposal_pol?: ProposalPOLAmino;
    block_part?: BlockPartAmino;
    vote?: VoteAmino;
    has_vote?: HasVoteAmino;
    vote_set_maj23?: VoteSetMaj23Amino;
    vote_set_bits?: VoteSetBitsAmino;
}
export interface MessageAminoMsg {
    type: "/tendermint.consensus.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    new_round_step?: NewRoundStepSDKType;
    new_valid_block?: NewValidBlockSDKType;
    proposal?: ProposalSDKType;
    proposal_pol?: ProposalPOLSDKType;
    block_part?: BlockPartSDKType;
    vote?: VoteSDKType;
    has_vote?: HasVoteSDKType;
    vote_set_maj23?: VoteSetMaj23SDKType;
    vote_set_bits?: VoteSetBitsSDKType;
}
export declare const NewRoundStep: {
    typeUrl: string;
    encode(message: NewRoundStep, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NewRoundStep;
    fromPartial(object: Partial<NewRoundStep>): NewRoundStep;
    fromAmino(object: NewRoundStepAmino): NewRoundStep;
    toAmino(message: NewRoundStep): NewRoundStepAmino;
    fromAminoMsg(object: NewRoundStepAminoMsg): NewRoundStep;
    fromProtoMsg(message: NewRoundStepProtoMsg): NewRoundStep;
    toProto(message: NewRoundStep): Uint8Array;
    toProtoMsg(message: NewRoundStep): NewRoundStepProtoMsg;
};
export declare const NewValidBlock: {
    typeUrl: string;
    encode(message: NewValidBlock, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NewValidBlock;
    fromPartial(object: Partial<NewValidBlock>): NewValidBlock;
    fromAmino(object: NewValidBlockAmino): NewValidBlock;
    toAmino(message: NewValidBlock): NewValidBlockAmino;
    fromAminoMsg(object: NewValidBlockAminoMsg): NewValidBlock;
    fromProtoMsg(message: NewValidBlockProtoMsg): NewValidBlock;
    toProto(message: NewValidBlock): Uint8Array;
    toProtoMsg(message: NewValidBlock): NewValidBlockProtoMsg;
};
export declare const Proposal: {
    typeUrl: string;
    encode(message: Proposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Proposal;
    fromPartial(object: Partial<Proposal>): Proposal;
    fromAmino(object: ProposalAmino): Proposal;
    toAmino(message: Proposal): ProposalAmino;
    fromAminoMsg(object: ProposalAminoMsg): Proposal;
    fromProtoMsg(message: ProposalProtoMsg): Proposal;
    toProto(message: Proposal): Uint8Array;
    toProtoMsg(message: Proposal): ProposalProtoMsg;
};
export declare const ProposalPOL: {
    typeUrl: string;
    encode(message: ProposalPOL, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProposalPOL;
    fromPartial(object: Partial<ProposalPOL>): ProposalPOL;
    fromAmino(object: ProposalPOLAmino): ProposalPOL;
    toAmino(message: ProposalPOL): ProposalPOLAmino;
    fromAminoMsg(object: ProposalPOLAminoMsg): ProposalPOL;
    fromProtoMsg(message: ProposalPOLProtoMsg): ProposalPOL;
    toProto(message: ProposalPOL): Uint8Array;
    toProtoMsg(message: ProposalPOL): ProposalPOLProtoMsg;
};
export declare const BlockPart: {
    typeUrl: string;
    encode(message: BlockPart, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BlockPart;
    fromPartial(object: Partial<BlockPart>): BlockPart;
    fromAmino(object: BlockPartAmino): BlockPart;
    toAmino(message: BlockPart): BlockPartAmino;
    fromAminoMsg(object: BlockPartAminoMsg): BlockPart;
    fromProtoMsg(message: BlockPartProtoMsg): BlockPart;
    toProto(message: BlockPart): Uint8Array;
    toProtoMsg(message: BlockPart): BlockPartProtoMsg;
};
export declare const Vote: {
    typeUrl: string;
    encode(message: Vote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Vote;
    fromPartial(object: Partial<Vote>): Vote;
    fromAmino(object: VoteAmino): Vote;
    toAmino(message: Vote): VoteAmino;
    fromAminoMsg(object: VoteAminoMsg): Vote;
    fromProtoMsg(message: VoteProtoMsg): Vote;
    toProto(message: Vote): Uint8Array;
    toProtoMsg(message: Vote): VoteProtoMsg;
};
export declare const HasVote: {
    typeUrl: string;
    encode(message: HasVote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): HasVote;
    fromPartial(object: Partial<HasVote>): HasVote;
    fromAmino(object: HasVoteAmino): HasVote;
    toAmino(message: HasVote): HasVoteAmino;
    fromAminoMsg(object: HasVoteAminoMsg): HasVote;
    fromProtoMsg(message: HasVoteProtoMsg): HasVote;
    toProto(message: HasVote): Uint8Array;
    toProtoMsg(message: HasVote): HasVoteProtoMsg;
};
export declare const VoteSetMaj23: {
    typeUrl: string;
    encode(message: VoteSetMaj23, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VoteSetMaj23;
    fromPartial(object: Partial<VoteSetMaj23>): VoteSetMaj23;
    fromAmino(object: VoteSetMaj23Amino): VoteSetMaj23;
    toAmino(message: VoteSetMaj23): VoteSetMaj23Amino;
    fromAminoMsg(object: VoteSetMaj23AminoMsg): VoteSetMaj23;
    fromProtoMsg(message: VoteSetMaj23ProtoMsg): VoteSetMaj23;
    toProto(message: VoteSetMaj23): Uint8Array;
    toProtoMsg(message: VoteSetMaj23): VoteSetMaj23ProtoMsg;
};
export declare const VoteSetBits: {
    typeUrl: string;
    encode(message: VoteSetBits, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VoteSetBits;
    fromPartial(object: Partial<VoteSetBits>): VoteSetBits;
    fromAmino(object: VoteSetBitsAmino): VoteSetBits;
    toAmino(message: VoteSetBits): VoteSetBitsAmino;
    fromAminoMsg(object: VoteSetBitsAminoMsg): VoteSetBits;
    fromProtoMsg(message: VoteSetBitsProtoMsg): VoteSetBits;
    toProto(message: VoteSetBits): Uint8Array;
    toProtoMsg(message: VoteSetBits): VoteSetBitsProtoMsg;
};
export declare const Message: {
    typeUrl: string;
    encode(message: Message, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Message;
    fromPartial(object: Partial<Message>): Message;
    fromAmino(object: MessageAmino): Message;
    toAmino(message: Message): MessageAmino;
    fromAminoMsg(object: MessageAminoMsg): Message;
    fromProtoMsg(message: MessageProtoMsg): Message;
    toProto(message: Message): Uint8Array;
    toProtoMsg(message: Message): MessageProtoMsg;
};
