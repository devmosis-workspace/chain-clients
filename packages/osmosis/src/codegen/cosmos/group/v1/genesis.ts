import { GroupInfo, GroupInfoSDKType, GroupMember, GroupMemberSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  groupSeq: Long;
  /** groups is the list of groups info. */
  groups: GroupInfo[];
  /** group_members is the list of groups members. */
  groupMembers: GroupMember[];
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */
  groupPolicySeq: Long;
  /** group_policies is the list of group policies info. */
  groupPolicies: GroupPolicyInfo[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposalSeq: Long;
  /** proposals is the list of proposals. */
  proposals: Proposal[];
  /** votes is the list of votes. */
  votes: Vote[];
}
/** GenesisState defines the group module's genesis state. */
export interface GenesisStateSDKType {
  group_seq: Long;
  groups: GroupInfoSDKType[];
  group_members: GroupMemberSDKType[];
  group_policy_seq: Long;
  group_policies: GroupPolicyInfoSDKType[];
  proposal_seq: Long;
  proposals: ProposalSDKType[];
  votes: VoteSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    groupSeq: Long.UZERO,
    groups: [],
    groupMembers: [],
    groupPolicySeq: Long.UZERO,
    groupPolicies: [],
    proposalSeq: Long.UZERO,
    proposals: [],
    votes: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupSeq.isZero()) {
      writer.uint32(8).uint64(message.groupSeq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMembers) {
      GroupMember.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.groupPolicySeq.isZero()) {
      writer.uint32(32).uint64(message.groupPolicySeq);
    }
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.proposalSeq.isZero()) {
      writer.uint32(48).uint64(message.proposalSeq);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      groupSeq: isSet(object.groupSeq) ? Long.fromValue(object.groupSeq) : Long.UZERO,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromJSON(e)) : [],
      groupMembers: Array.isArray(object?.groupMembers) ? object.groupMembers.map((e: any) => GroupMember.fromJSON(e)) : [],
      groupPolicySeq: isSet(object.groupPolicySeq) ? Long.fromValue(object.groupPolicySeq) : Long.UZERO,
      groupPolicies: Array.isArray(object?.groupPolicies) ? object.groupPolicies.map((e: any) => GroupPolicyInfo.fromJSON(e)) : [],
      proposalSeq: isSet(object.proposalSeq) ? Long.fromValue(object.proposalSeq) : Long.UZERO,
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.groupSeq = object.groupSeq !== undefined && object.groupSeq !== null ? Long.fromValue(object.groupSeq) : Long.UZERO;
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.groupMembers = object.groupMembers?.map(e => GroupMember.fromPartial(e)) || [];
    message.groupPolicySeq = object.groupPolicySeq !== undefined && object.groupPolicySeq !== null ? Long.fromValue(object.groupPolicySeq) : Long.UZERO;
    message.groupPolicies = object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
    message.proposalSeq = object.proposalSeq !== undefined && object.proposalSeq !== null ? Long.fromValue(object.proposalSeq) : Long.UZERO;
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    return message;
  }
};