import { Any, AnySDKType } from "../../../google/protobuf/any";
import { VoteType, voteTypeFromJSON } from "./genesis";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgSubmitProposal is used by committee members to create a new proposal that they can vote on. */
export interface MsgSubmitProposal {
  pubProposal?: Any;
  proposer: string;
  committeeId: Long;
}
/** MsgSubmitProposal is used by committee members to create a new proposal that they can vote on. */
export interface MsgSubmitProposalSDKType {
  pub_proposal?: AnySDKType;
  proposer: string;
  committee_id: Long;
}
/** MsgSubmitProposalResponse defines the SubmitProposal response type */
export interface MsgSubmitProposalResponse {
  proposalId: Long;
}
/** MsgSubmitProposalResponse defines the SubmitProposal response type */
export interface MsgSubmitProposalResponseSDKType {
  proposal_id: Long;
}
/** MsgVote is submitted by committee members to vote on proposals. */
export interface MsgVote {
  proposalId: Long;
  voter: string;
  voteType: VoteType;
}
/** MsgVote is submitted by committee members to vote on proposals. */
export interface MsgVoteSDKType {
  proposal_id: Long;
  voter: string;
  vote_type: VoteType;
}
/** MsgVoteResponse defines the Vote response type */
export interface MsgVoteResponse {}
/** MsgVoteResponse defines the Vote response type */
export interface MsgVoteResponseSDKType {}
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    pubProposal: undefined,
    proposer: "",
    committeeId: Long.UZERO
  };
}
export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubProposal !== undefined) {
      Any.encode(message.pubProposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    if (!message.committeeId.isZero()) {
      writer.uint32(24).uint64(message.committeeId);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitProposal {
    return {
      pubProposal: isSet(object.pubProposal) ? Any.fromJSON(object.pubProposal) : undefined,
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      committeeId: isSet(object.committeeId) ? Long.fromValue(object.committeeId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.pubProposal = object.pubProposal !== undefined && object.pubProposal !== null ? Any.fromPartial(object.pubProposal) : undefined;
    message.proposer = object.proposer ?? "";
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? Long.fromValue(object.committeeId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: Long.UZERO
  };
}
export const MsgSubmitProposalResponse = {
  encode(message: MsgSubmitProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgVote(): MsgVote {
  return {
    proposalId: Long.UZERO,
    voter: "",
    voteType: 0
  };
}
export const MsgVote = {
  encode(message: MsgVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.voteType !== 0) {
      writer.uint32(24).int32(message.voteType);
    }
    return writer;
  },
  fromJSON(object: any): MsgVote {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      voteType: isSet(object.voteType) ? voteTypeFromJSON(object.voteType) : 0
    };
  },
  fromPartial(object: Partial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.voteType = object.voteType ?? 0;
    return message;
  }
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgVoteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  }
};