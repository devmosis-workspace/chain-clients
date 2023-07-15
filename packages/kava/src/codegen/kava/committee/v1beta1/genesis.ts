import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** VoteType enumerates the valid types of a vote. */
export enum VoteType {
  /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED defines a no-op vote option. */
  VOTE_TYPE_UNSPECIFIED = 0,
  /** VOTE_TYPE_YES - VOTE_TYPE_YES defines a yes vote option. */
  VOTE_TYPE_YES = 1,
  /** VOTE_TYPE_NO - VOTE_TYPE_NO defines a no vote option. */
  VOTE_TYPE_NO = 2,
  /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN defines an abstain vote option. */
  VOTE_TYPE_ABSTAIN = 3,
  UNRECOGNIZED = -1,
}
export const VoteTypeSDKType = VoteType;
export function voteTypeFromJSON(object: any): VoteType {
  switch (object) {
    case 0:
    case "VOTE_TYPE_UNSPECIFIED":
      return VoteType.VOTE_TYPE_UNSPECIFIED;
    case 1:
    case "VOTE_TYPE_YES":
      return VoteType.VOTE_TYPE_YES;
    case 2:
    case "VOTE_TYPE_NO":
      return VoteType.VOTE_TYPE_NO;
    case 3:
    case "VOTE_TYPE_ABSTAIN":
      return VoteType.VOTE_TYPE_ABSTAIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteType.UNRECOGNIZED;
  }
}
export function voteTypeToJSON(object: VoteType): string {
  switch (object) {
    case VoteType.VOTE_TYPE_UNSPECIFIED:
      return "VOTE_TYPE_UNSPECIFIED";
    case VoteType.VOTE_TYPE_YES:
      return "VOTE_TYPE_YES";
    case VoteType.VOTE_TYPE_NO:
      return "VOTE_TYPE_NO";
    case VoteType.VOTE_TYPE_ABSTAIN:
      return "VOTE_TYPE_ABSTAIN";
    case VoteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** GenesisState defines the committee module's genesis state. */
export interface GenesisState {
  nextProposalId: Long;
  committees: Any[];
  proposals: Proposal[];
  votes: Vote[];
}
/** GenesisState defines the committee module's genesis state. */
export interface GenesisStateSDKType {
  next_proposal_id: Long;
  committees: AnySDKType[];
  proposals: ProposalSDKType[];
  votes: VoteSDKType[];
}
/** Proposal is an internal record of a governance proposal submitted to a committee. */
export interface Proposal {
  content?: Any;
  id: Long;
  committeeId: Long;
  deadline?: Timestamp;
}
/** Proposal is an internal record of a governance proposal submitted to a committee. */
export interface ProposalSDKType {
  content?: AnySDKType;
  id: Long;
  committee_id: Long;
  deadline?: TimestampSDKType;
}
/** Vote is an internal record of a single governance vote. */
export interface Vote {
  proposalId: Long;
  voter: Uint8Array;
  voteType: VoteType;
}
/** Vote is an internal record of a single governance vote. */
export interface VoteSDKType {
  proposal_id: Long;
  voter: Uint8Array;
  vote_type: VoteType;
}
function createBaseGenesisState(): GenesisState {
  return {
    nextProposalId: Long.UZERO,
    committees: [],
    proposals: [],
    votes: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextProposalId.isZero()) {
      writer.uint32(8).uint64(message.nextProposalId);
    }
    for (const v of message.committees) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      nextProposalId: isSet(object.nextProposalId) ? Long.fromValue(object.nextProposalId) : Long.UZERO,
      committees: Array.isArray(object?.committees) ? object.committees.map((e: any) => Any.fromJSON(e)) : [],
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextProposalId = object.nextProposalId !== undefined && object.nextProposalId !== null ? Long.fromValue(object.nextProposalId) : Long.UZERO;
    message.committees = object.committees?.map(e => Any.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    return message;
  }
};
function createBaseProposal(): Proposal {
  return {
    content: undefined,
    id: Long.UZERO,
    committeeId: Long.UZERO,
    deadline: undefined
  };
}
export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.committeeId.isZero()) {
      writer.uint32(24).uint64(message.committeeId);
    }
    if (message.deadline !== undefined) {
      Timestamp.encode(message.deadline, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Proposal {
    return {
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      committeeId: isSet(object.committeeId) ? Long.fromValue(object.committeeId) : Long.UZERO,
      deadline: isSet(object.deadline) ? fromJsonTimestamp(object.deadline) : undefined
    };
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? Long.fromValue(object.committeeId) : Long.UZERO;
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Timestamp.fromPartial(object.deadline) : undefined;
    return message;
  }
};
function createBaseVote(): Vote {
  return {
    proposalId: Long.UZERO,
    voter: new Uint8Array(),
    voteType: 0
  };
}
export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter.length !== 0) {
      writer.uint32(18).bytes(message.voter);
    }
    if (message.voteType !== 0) {
      writer.uint32(24).int32(message.voteType);
    }
    return writer;
  },
  fromJSON(object: any): Vote {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? bytesFromBase64(object.voter) : new Uint8Array(),
      voteType: isSet(object.voteType) ? voteTypeFromJSON(object.voteType) : 0
    };
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? new Uint8Array();
    message.voteType = object.voteType ?? 0;
    return message;
  }
};