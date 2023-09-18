import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BaseCommittee, BaseCommitteeProtoMsg, BaseCommitteeSDKType, MemberCommittee, MemberCommitteeProtoMsg, MemberCommitteeSDKType, TokenCommittee, TokenCommitteeProtoMsg, TokenCommitteeSDKType } from "./committee";
import { CommitteeChangeProposal, CommitteeChangeProposalProtoMsg, CommitteeChangeProposalSDKType, CommitteeDeleteProposal, CommitteeDeleteProposalProtoMsg, CommitteeDeleteProposalSDKType } from "./proposal";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg, CommunityPoolSpendProposalWithDepositSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import { ParameterChangeProposal, ParameterChangeProposalProtoMsg, ParameterChangeProposalSDKType } from "../../../cosmos/params/v1beta1/params";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalProtoMsg, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalProtoMsg, CancelSoftwareUpgradeProposalSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64 } from "../../../helpers";
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
export const VoteTypeAmino = VoteType;
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
  nextProposalId: bigint;
  committees: (BaseCommittee & MemberCommittee & TokenCommittee & Any)[] | Any[];
  proposals: Proposal[];
  votes: Vote[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.committee.v1beta1.GenesisState";
  value: Uint8Array;
}
export type GenesisStateEncoded = Omit<GenesisState, "committees"> & {
  committees: (BaseCommitteeProtoMsg | MemberCommitteeProtoMsg | TokenCommitteeProtoMsg | AnyProtoMsg)[];
};
/** GenesisState defines the committee module's genesis state. */
export interface GenesisStateAmino {
  next_proposal_id: string;
  committees: AnyAmino[];
  proposals: ProposalAmino[];
  votes: VoteAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kava.committee.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the committee module's genesis state. */
export interface GenesisStateSDKType {
  next_proposal_id: bigint;
  committees: (BaseCommitteeSDKType | MemberCommitteeSDKType | TokenCommitteeSDKType | AnySDKType)[];
  proposals: ProposalSDKType[];
  votes: VoteSDKType[];
}
/** Proposal is an internal record of a governance proposal submitted to a committee. */
export interface Proposal {
  content: (CommitteeChangeProposal & CommitteeDeleteProposal & CommunityPoolSpendProposal & CommunityPoolSpendProposalWithDeposit & ParameterChangeProposal & SoftwareUpgradeProposal & CancelSoftwareUpgradeProposal & Any) | undefined;
  id: bigint;
  committeeId: bigint;
  deadline: Timestamp;
}
export interface ProposalProtoMsg {
  typeUrl: "/kava.committee.v1beta1.Proposal";
  value: Uint8Array;
}
export type ProposalEncoded = Omit<Proposal, "content"> & {
  content?: CommitteeChangeProposalProtoMsg | CommitteeDeleteProposalProtoMsg | CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | ParameterChangeProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | AnyProtoMsg | undefined;
};
/** Proposal is an internal record of a governance proposal submitted to a committee. */
export interface ProposalAmino {
  content?: AnyAmino;
  id: string;
  committee_id: string;
  deadline?: TimestampAmino;
}
export interface ProposalAminoMsg {
  type: "/kava.committee.v1beta1.Proposal";
  value: ProposalAmino;
}
/** Proposal is an internal record of a governance proposal submitted to a committee. */
export interface ProposalSDKType {
  content: CommitteeChangeProposalSDKType | CommitteeDeleteProposalSDKType | CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | ParameterChangeProposalSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | AnySDKType | undefined;
  id: bigint;
  committee_id: bigint;
  deadline: TimestampSDKType;
}
/** Vote is an internal record of a single governance vote. */
export interface Vote {
  proposalId: bigint;
  voter: Uint8Array;
  voteType: VoteType;
}
export interface VoteProtoMsg {
  typeUrl: "/kava.committee.v1beta1.Vote";
  value: Uint8Array;
}
/** Vote is an internal record of a single governance vote. */
export interface VoteAmino {
  proposal_id: string;
  voter: Uint8Array;
  vote_type: VoteType;
}
export interface VoteAminoMsg {
  type: "/kava.committee.v1beta1.Vote";
  value: VoteAmino;
}
/** Vote is an internal record of a single governance vote. */
export interface VoteSDKType {
  proposal_id: bigint;
  voter: Uint8Array;
  vote_type: VoteType;
}
function createBaseGenesisState(): GenesisState {
  return {
    nextProposalId: BigInt(0),
    committees: [],
    proposals: [],
    votes: []
  };
}
export const GenesisState = {
  typeUrl: "/kava.committee.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextProposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextProposalId);
    }
    for (const v of message.committees) {
      Any.encode((v! as Any), writer.uint32(18).fork()).ldelim();
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
      nextProposalId: isSet(object.nextProposalId) ? BigInt(object.nextProposalId.toString()) : BigInt(0),
      committees: Array.isArray(object?.committees) ? object.committees.map((e: any) => Any.fromJSON(e)) : [],
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextProposalId = object.nextProposalId !== undefined && object.nextProposalId !== null ? BigInt(object.nextProposalId.toString()) : BigInt(0);
    message.committees = object.committees?.map(e => Any.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      nextProposalId: BigInt(object.next_proposal_id),
      committees: Array.isArray(object?.committees) ? object.committees.map((e: any) => Committee_FromAmino(e)) : [],
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromAmino(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.next_proposal_id = message.nextProposalId ? message.nextProposalId.toString() : undefined;
    if (message.committees) {
      obj.committees = message.committees.map(e => e ? Committee_ToAmino((e as Any)) : undefined);
    } else {
      obj.committees = [];
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseProposal(): Proposal {
  return {
    content: Any.fromPartial({}),
    id: BigInt(0),
    committeeId: BigInt(0),
    deadline: Timestamp.fromPartial({})
  };
}
export const Proposal = {
  typeUrl: "/kava.committee.v1beta1.Proposal",
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== undefined) {
      Any.encode((message.content as Any), writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.committeeId !== BigInt(0)) {
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      committeeId: isSet(object.committeeId) ? BigInt(object.committeeId.toString()) : BigInt(0),
      deadline: isSet(object.deadline) ? fromJsonTimestamp(object.deadline) : undefined
    };
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? BigInt(object.committeeId.toString()) : BigInt(0);
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Timestamp.fromPartial(object.deadline) : undefined;
    return message;
  },
  fromAmino(object: ProposalAmino): Proposal {
    return {
      content: object?.content ? Cosmos_govv1beta1Content_FromAmino(object.content) : undefined,
      id: BigInt(object.id),
      committeeId: BigInt(object.committee_id),
      deadline: object.deadline
    };
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.content = message.content ? Cosmos_govv1beta1Content_ToAmino((message.content as Any)) : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.committee_id = message.committeeId ? message.committeeId.toString() : undefined;
    obj.deadline = message.deadline;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
function createBaseVote(): Vote {
  return {
    proposalId: BigInt(0),
    voter: new Uint8Array(),
    voteType: 0
  };
}
export const Vote = {
  typeUrl: "/kava.committee.v1beta1.Vote",
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
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
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? bytesFromBase64(object.voter) : new Uint8Array(),
      voteType: isSet(object.voteType) ? voteTypeFromJSON(object.voteType) : -1
    };
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? new Uint8Array();
    message.voteType = object.voteType ?? 0;
    return message;
  },
  fromAmino(object: VoteAmino): Vote {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter,
      voteType: isSet(object.vote_type) ? voteTypeFromJSON(object.vote_type) : -1
    };
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.vote_type = message.voteType;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
export const Committee_InterfaceDecoder = (input: BinaryReader | Uint8Array): BaseCommittee | MemberCommittee | TokenCommittee | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/kava.committee.v1beta1.BaseCommittee":
      return BaseCommittee.decode(data.value);
    case "/kava.committee.v1beta1.MemberCommittee":
      return MemberCommittee.decode(data.value);
    case "/kava.committee.v1beta1.TokenCommittee":
      return TokenCommittee.decode(data.value);
    default:
      return data;
  }
};
export const Committee_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "/kava.committee.v1beta1.BaseCommittee":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.BaseCommittee",
        value: BaseCommittee.encode(BaseCommittee.fromPartial(BaseCommittee.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.MemberCommittee":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.MemberCommittee",
        value: MemberCommittee.encode(MemberCommittee.fromPartial(MemberCommittee.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.TokenCommittee":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.TokenCommittee",
        value: TokenCommittee.encode(TokenCommittee.fromPartial(TokenCommittee.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Committee_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/kava.committee.v1beta1.BaseCommittee":
      return {
        type: "/kava.committee.v1beta1.BaseCommittee",
        value: BaseCommittee.toAmino(BaseCommittee.decode(content.value))
      };
    case "/kava.committee.v1beta1.MemberCommittee":
      return {
        type: "/kava.committee.v1beta1.MemberCommittee",
        value: MemberCommittee.toAmino(MemberCommittee.decode(content.value))
      };
    case "/kava.committee.v1beta1.TokenCommittee":
      return {
        type: "/kava.committee.v1beta1.TokenCommittee",
        value: TokenCommittee.toAmino(TokenCommittee.decode(content.value))
      };
    default:
      return Any.toAmino(content);
  }
};
export const Cosmos_govv1beta1Content_InterfaceDecoder = (input: BinaryReader | Uint8Array): CommitteeChangeProposal | CommitteeDeleteProposal | CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/kava.committee.v1beta1.CommitteeChangeProposal":
      return CommitteeChangeProposal.decode(data.value);
    case "/kava.committee.v1beta1.CommitteeDeleteProposal":
      return CommitteeDeleteProposal.decode(data.value);
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return CommunityPoolSpendProposal.decode(data.value);
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return CommunityPoolSpendProposalWithDeposit.decode(data.value);
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return ParameterChangeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return SoftwareUpgradeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return CancelSoftwareUpgradeProposal.decode(data.value);
    default:
      return data;
  }
};
export const Cosmos_govv1beta1Content_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "/kava.committee.v1beta1.CommitteeChangeProposal":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.CommitteeChangeProposal",
        value: CommitteeChangeProposal.encode(CommitteeChangeProposal.fromPartial(CommitteeChangeProposal.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.CommitteeDeleteProposal":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.CommitteeDeleteProposal",
        value: CommitteeDeleteProposal.encode(CommitteeDeleteProposal.fromPartial(CommitteeDeleteProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CommunityPoolSpendProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.encode(CommunityPoolSpendProposal.fromPartial(CommunityPoolSpendProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CommunityPoolSpendProposalWithDeposit":
      return Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
        value: CommunityPoolSpendProposalWithDeposit.encode(CommunityPoolSpendProposalWithDeposit.fromPartial(CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/ParameterChangeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
        value: ParameterChangeProposal.encode(ParameterChangeProposal.fromPartial(ParameterChangeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/SoftwareUpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.encode(SoftwareUpgradeProposal.fromPartial(SoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CancelSoftwareUpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.encode(CancelSoftwareUpgradeProposal.fromPartial(CancelSoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_govv1beta1Content_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/kava.committee.v1beta1.CommitteeChangeProposal":
      return {
        type: "/kava.committee.v1beta1.CommitteeChangeProposal",
        value: CommitteeChangeProposal.toAmino(CommitteeChangeProposal.decode(content.value))
      };
    case "/kava.committee.v1beta1.CommitteeDeleteProposal":
      return {
        type: "/kava.committee.v1beta1.CommitteeDeleteProposal",
        value: CommitteeDeleteProposal.toAmino(CommitteeDeleteProposal.decode(content.value))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.toAmino(CommunityPoolSpendProposal.decode(content.value))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
        value: CommunityPoolSpendProposalWithDeposit.toAmino(CommunityPoolSpendProposalWithDeposit.decode(content.value))
      };
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return {
        type: "cosmos-sdk/ParameterChangeProposal",
        value: ParameterChangeProposal.toAmino(ParameterChangeProposal.decode(content.value))
      };
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.toAmino(SoftwareUpgradeProposal.decode(content.value))
      };
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.toAmino(CancelSoftwareUpgradeProposal.decode(content.value))
      };
    default:
      return Any.toAmino(content);
  }
};