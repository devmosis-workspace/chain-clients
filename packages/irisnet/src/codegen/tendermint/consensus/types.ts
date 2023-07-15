import { PartSetHeader, PartSetHeaderSDKType, Part, PartSDKType, SignedMsgType, BlockID, BlockIDSDKType, signedMsgTypeFromJSON } from "../types/types";
import { Proposal as Proposal1 } from "../types/types";
import { ProposalSDKType as Proposal1SDKType } from "../types/types";
import { Vote as Vote1 } from "../types/types";
import { VoteSDKType as Vote1SDKType } from "../types/types";
import { BitArray, BitArraySDKType } from "../libs/bits/types";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */
export interface NewRoundStep {
  height: Long;
  round: number;
  step: number;
  secondsSinceStartTime: Long;
  lastCommitRound: number;
}
/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */
export interface NewRoundStepSDKType {
  height: Long;
  round: number;
  step: number;
  seconds_since_start_time: Long;
  last_commit_round: number;
}
/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 */
export interface NewValidBlock {
  height: Long;
  round: number;
  blockPartSetHeader?: PartSetHeader;
  blockParts?: BitArray;
  isCommit: boolean;
}
/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 */
export interface NewValidBlockSDKType {
  height: Long;
  round: number;
  block_part_set_header?: PartSetHeaderSDKType;
  block_parts?: BitArraySDKType;
  is_commit: boolean;
}
/** Proposal is sent when a new block is proposed. */
export interface Proposal {
  proposal?: Proposal1;
}
/** Proposal is sent when a new block is proposed. */
export interface ProposalSDKType {
  proposal?: Proposal1SDKType;
}
/** ProposalPOL is sent when a previous proposal is re-proposed. */
export interface ProposalPOL {
  height: Long;
  proposalPolRound: number;
  proposalPol?: BitArray;
}
/** ProposalPOL is sent when a previous proposal is re-proposed. */
export interface ProposalPOLSDKType {
  height: Long;
  proposal_pol_round: number;
  proposal_pol?: BitArraySDKType;
}
/** BlockPart is sent when gossipping a piece of the proposed block. */
export interface BlockPart {
  height: Long;
  round: number;
  part?: Part;
}
/** BlockPart is sent when gossipping a piece of the proposed block. */
export interface BlockPartSDKType {
  height: Long;
  round: number;
  part?: PartSDKType;
}
/** Vote is sent when voting for a proposal (or lack thereof). */
export interface Vote {
  vote?: Vote1;
}
/** Vote is sent when voting for a proposal (or lack thereof). */
export interface VoteSDKType {
  vote?: Vote1SDKType;
}
/** HasVote is sent to indicate that a particular vote has been received. */
export interface HasVote {
  height: Long;
  round: number;
  type: SignedMsgType;
  index: number;
}
/** HasVote is sent to indicate that a particular vote has been received. */
export interface HasVoteSDKType {
  height: Long;
  round: number;
  type: SignedMsgType;
  index: number;
}
/** VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes. */
export interface VoteSetMaj23 {
  height: Long;
  round: number;
  type: SignedMsgType;
  blockId?: BlockID;
}
/** VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes. */
export interface VoteSetMaj23SDKType {
  height: Long;
  round: number;
  type: SignedMsgType;
  block_id?: BlockIDSDKType;
}
/** VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID. */
export interface VoteSetBits {
  height: Long;
  round: number;
  type: SignedMsgType;
  blockId?: BlockID;
  votes?: BitArray;
}
/** VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID. */
export interface VoteSetBitsSDKType {
  height: Long;
  round: number;
  type: SignedMsgType;
  block_id?: BlockIDSDKType;
  votes?: BitArraySDKType;
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
function createBaseNewRoundStep(): NewRoundStep {
  return {
    height: Long.ZERO,
    round: 0,
    step: 0,
    secondsSinceStartTime: Long.ZERO,
    lastCommitRound: 0
  };
}
export const NewRoundStep = {
  encode(message: NewRoundStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.step !== 0) {
      writer.uint32(24).uint32(message.step);
    }
    if (!message.secondsSinceStartTime.isZero()) {
      writer.uint32(32).int64(message.secondsSinceStartTime);
    }
    if (message.lastCommitRound !== 0) {
      writer.uint32(40).int32(message.lastCommitRound);
    }
    return writer;
  },
  fromJSON(object: any): NewRoundStep {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? Number(object.step) : 0,
      secondsSinceStartTime: isSet(object.secondsSinceStartTime) ? Long.fromValue(object.secondsSinceStartTime) : Long.ZERO,
      lastCommitRound: isSet(object.lastCommitRound) ? Number(object.lastCommitRound) : 0
    };
  },
  fromPartial(object: Partial<NewRoundStep>): NewRoundStep {
    const message = createBaseNewRoundStep();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.step = object.step ?? 0;
    message.secondsSinceStartTime = object.secondsSinceStartTime !== undefined && object.secondsSinceStartTime !== null ? Long.fromValue(object.secondsSinceStartTime) : Long.ZERO;
    message.lastCommitRound = object.lastCommitRound ?? 0;
    return message;
  }
};
function createBaseNewValidBlock(): NewValidBlock {
  return {
    height: Long.ZERO,
    round: 0,
    blockPartSetHeader: undefined,
    blockParts: undefined,
    isCommit: false
  };
}
export const NewValidBlock = {
  encode(message: NewValidBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.blockPartSetHeader !== undefined) {
      PartSetHeader.encode(message.blockPartSetHeader, writer.uint32(26).fork()).ldelim();
    }
    if (message.blockParts !== undefined) {
      BitArray.encode(message.blockParts, writer.uint32(34).fork()).ldelim();
    }
    if (message.isCommit === true) {
      writer.uint32(40).bool(message.isCommit);
    }
    return writer;
  },
  fromJSON(object: any): NewValidBlock {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      blockPartSetHeader: isSet(object.blockPartSetHeader) ? PartSetHeader.fromJSON(object.blockPartSetHeader) : undefined,
      blockParts: isSet(object.blockParts) ? BitArray.fromJSON(object.blockParts) : undefined,
      isCommit: isSet(object.isCommit) ? Boolean(object.isCommit) : false
    };
  },
  fromPartial(object: Partial<NewValidBlock>): NewValidBlock {
    const message = createBaseNewValidBlock();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.blockPartSetHeader = object.blockPartSetHeader !== undefined && object.blockPartSetHeader !== null ? PartSetHeader.fromPartial(object.blockPartSetHeader) : undefined;
    message.blockParts = object.blockParts !== undefined && object.blockParts !== null ? BitArray.fromPartial(object.blockParts) : undefined;
    message.isCommit = object.isCommit ?? false;
    return message;
  }
};
function createBaseProposal(): Proposal {
  return {
    proposal: undefined
  };
}
export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal1.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Proposal {
    return {
      proposal: isSet(object.proposal) ? Proposal1.fromJSON(object.proposal) : undefined
    };
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal1.fromPartial(object.proposal) : undefined;
    return message;
  }
};
function createBaseProposalPOL(): ProposalPOL {
  return {
    height: Long.ZERO,
    proposalPolRound: 0,
    proposalPol: undefined
  };
}
export const ProposalPOL = {
  encode(message: ProposalPOL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.proposalPolRound !== 0) {
      writer.uint32(16).int32(message.proposalPolRound);
    }
    if (message.proposalPol !== undefined) {
      BitArray.encode(message.proposalPol, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProposalPOL {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      proposalPolRound: isSet(object.proposalPolRound) ? Number(object.proposalPolRound) : 0,
      proposalPol: isSet(object.proposalPol) ? BitArray.fromJSON(object.proposalPol) : undefined
    };
  },
  fromPartial(object: Partial<ProposalPOL>): ProposalPOL {
    const message = createBaseProposalPOL();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.proposalPolRound = object.proposalPolRound ?? 0;
    message.proposalPol = object.proposalPol !== undefined && object.proposalPol !== null ? BitArray.fromPartial(object.proposalPol) : undefined;
    return message;
  }
};
function createBaseBlockPart(): BlockPart {
  return {
    height: Long.ZERO,
    round: 0,
    part: undefined
  };
}
export const BlockPart = {
  encode(message: BlockPart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.part !== undefined) {
      Part.encode(message.part, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BlockPart {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      part: isSet(object.part) ? Part.fromJSON(object.part) : undefined
    };
  },
  fromPartial(object: Partial<BlockPart>): BlockPart {
    const message = createBaseBlockPart();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.part = object.part !== undefined && object.part !== null ? Part.fromPartial(object.part) : undefined;
    return message;
  }
};
function createBaseVote(): Vote {
  return {
    vote: undefined
  };
}
export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote1.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Vote {
    return {
      vote: isSet(object.vote) ? Vote1.fromJSON(object.vote) : undefined
    };
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote1.fromPartial(object.vote) : undefined;
    return message;
  }
};
function createBaseHasVote(): HasVote {
  return {
    height: Long.ZERO,
    round: 0,
    type: 0,
    index: 0
  };
}
export const HasVote = {
  encode(message: HasVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.index !== 0) {
      writer.uint32(32).int32(message.index);
    }
    return writer;
  },
  fromJSON(object: any): HasVote {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      index: isSet(object.index) ? Number(object.index) : 0
    };
  },
  fromPartial(object: Partial<HasVote>): HasVote {
    const message = createBaseHasVote();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.type = object.type ?? 0;
    message.index = object.index ?? 0;
    return message;
  }
};
function createBaseVoteSetMaj23(): VoteSetMaj23 {
  return {
    height: Long.ZERO,
    round: 0,
    type: 0,
    blockId: undefined
  };
}
export const VoteSetMaj23 = {
  encode(message: VoteSetMaj23, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VoteSetMaj23 {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined
    };
  },
  fromPartial(object: Partial<VoteSetMaj23>): VoteSetMaj23 {
    const message = createBaseVoteSetMaj23();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.type = object.type ?? 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    return message;
  }
};
function createBaseVoteSetBits(): VoteSetBits {
  return {
    height: Long.ZERO,
    round: 0,
    type: 0,
    blockId: undefined,
    votes: undefined
  };
}
export const VoteSetBits = {
  encode(message: VoteSetBits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.votes !== undefined) {
      BitArray.encode(message.votes, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VoteSetBits {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      votes: isSet(object.votes) ? BitArray.fromJSON(object.votes) : undefined
    };
  },
  fromPartial(object: Partial<VoteSetBits>): VoteSetBits {
    const message = createBaseVoteSetBits();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.type = object.type ?? 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.votes = object.votes !== undefined && object.votes !== null ? BitArray.fromPartial(object.votes) : undefined;
    return message;
  }
};
function createBaseMessage(): Message {
  return {
    newRoundStep: undefined,
    newValidBlock: undefined,
    proposal: undefined,
    proposalPol: undefined,
    blockPart: undefined,
    vote: undefined,
    hasVote: undefined,
    voteSetMaj23: undefined,
    voteSetBits: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newRoundStep !== undefined) {
      NewRoundStep.encode(message.newRoundStep, writer.uint32(10).fork()).ldelim();
    }
    if (message.newValidBlock !== undefined) {
      NewValidBlock.encode(message.newValidBlock, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(26).fork()).ldelim();
    }
    if (message.proposalPol !== undefined) {
      ProposalPOL.encode(message.proposalPol, writer.uint32(34).fork()).ldelim();
    }
    if (message.blockPart !== undefined) {
      BlockPart.encode(message.blockPart, writer.uint32(42).fork()).ldelim();
    }
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(50).fork()).ldelim();
    }
    if (message.hasVote !== undefined) {
      HasVote.encode(message.hasVote, writer.uint32(58).fork()).ldelim();
    }
    if (message.voteSetMaj23 !== undefined) {
      VoteSetMaj23.encode(message.voteSetMaj23, writer.uint32(66).fork()).ldelim();
    }
    if (message.voteSetBits !== undefined) {
      VoteSetBits.encode(message.voteSetBits, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Message {
    return {
      newRoundStep: isSet(object.newRoundStep) ? NewRoundStep.fromJSON(object.newRoundStep) : undefined,
      newValidBlock: isSet(object.newValidBlock) ? NewValidBlock.fromJSON(object.newValidBlock) : undefined,
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      proposalPol: isSet(object.proposalPol) ? ProposalPOL.fromJSON(object.proposalPol) : undefined,
      blockPart: isSet(object.blockPart) ? BlockPart.fromJSON(object.blockPart) : undefined,
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      hasVote: isSet(object.hasVote) ? HasVote.fromJSON(object.hasVote) : undefined,
      voteSetMaj23: isSet(object.voteSetMaj23) ? VoteSetMaj23.fromJSON(object.voteSetMaj23) : undefined,
      voteSetBits: isSet(object.voteSetBits) ? VoteSetBits.fromJSON(object.voteSetBits) : undefined
    };
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.newRoundStep = object.newRoundStep !== undefined && object.newRoundStep !== null ? NewRoundStep.fromPartial(object.newRoundStep) : undefined;
    message.newValidBlock = object.newValidBlock !== undefined && object.newValidBlock !== null ? NewValidBlock.fromPartial(object.newValidBlock) : undefined;
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.proposalPol = object.proposalPol !== undefined && object.proposalPol !== null ? ProposalPOL.fromPartial(object.proposalPol) : undefined;
    message.blockPart = object.blockPart !== undefined && object.blockPart !== null ? BlockPart.fromPartial(object.blockPart) : undefined;
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    message.hasVote = object.hasVote !== undefined && object.hasVote !== null ? HasVote.fromPartial(object.hasVote) : undefined;
    message.voteSetMaj23 = object.voteSetMaj23 !== undefined && object.voteSetMaj23 !== null ? VoteSetMaj23.fromPartial(object.voteSetMaj23) : undefined;
    message.voteSetBits = object.voteSetBits !== undefined && object.voteSetBits !== null ? VoteSetBits.fromPartial(object.voteSetBits) : undefined;
    return message;
  }
};