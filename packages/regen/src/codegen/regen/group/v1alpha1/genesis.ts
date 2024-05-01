import { GroupInfo, GroupInfoAmino, GroupInfoSDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType, GroupAccountInfo, GroupAccountInfoAmino, GroupAccountInfoSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  groupSeq: bigint;
  /** groups is the list of groups info. */
  groups: GroupInfo[];
  /** group_members is the list of groups members. */
  groupMembers: GroupMember[];
  /**
   * group_account_seq is the group account table orm.Sequence,
   * it is used to generate the next group account address.
   */
  groupAccountSeq: bigint;
  /** group_accounts is the list of group accounts info. */
  groupAccounts: GroupAccountInfo[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposalSeq: bigint;
  /** proposals is the list of proposals. */
  proposals: Proposal[];
  /** votes is the list of votes. */
  votes: Vote[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/regen.group.v1alpha1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the group module's genesis state. */
export interface GenesisStateAmino {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  group_seq?: string;
  /** groups is the list of groups info. */
  groups?: GroupInfoAmino[];
  /** group_members is the list of groups members. */
  group_members?: GroupMemberAmino[];
  /**
   * group_account_seq is the group account table orm.Sequence,
   * it is used to generate the next group account address.
   */
  group_account_seq?: string;
  /** group_accounts is the list of group accounts info. */
  group_accounts?: GroupAccountInfoAmino[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposal_seq?: string;
  /** proposals is the list of proposals. */
  proposals?: ProposalAmino[];
  /** votes is the list of votes. */
  votes?: VoteAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/regen.group.v1alpha1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the group module's genesis state. */
export interface GenesisStateSDKType {
  group_seq: bigint;
  groups: GroupInfoSDKType[];
  group_members: GroupMemberSDKType[];
  group_account_seq: bigint;
  group_accounts: GroupAccountInfoSDKType[];
  proposal_seq: bigint;
  proposals: ProposalSDKType[];
  votes: VoteSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    groupSeq: BigInt(0),
    groups: [],
    groupMembers: [],
    groupAccountSeq: BigInt(0),
    groupAccounts: [],
    proposalSeq: BigInt(0),
    proposals: [],
    votes: []
  };
}
export const GenesisState = {
  typeUrl: "/regen.group.v1alpha1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupSeq !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupSeq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMembers) {
      GroupMember.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.groupAccountSeq !== BigInt(0)) {
      writer.uint32(32).uint64(message.groupAccountSeq);
    }
    for (const v of message.groupAccounts) {
      GroupAccountInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.proposalSeq !== BigInt(0)) {
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
      groupSeq: isSet(object.groupSeq) ? BigInt(object.groupSeq.toString()) : BigInt(0),
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromJSON(e)) : [],
      groupMembers: Array.isArray(object?.groupMembers) ? object.groupMembers.map((e: any) => GroupMember.fromJSON(e)) : [],
      groupAccountSeq: isSet(object.groupAccountSeq) ? BigInt(object.groupAccountSeq.toString()) : BigInt(0),
      groupAccounts: Array.isArray(object?.groupAccounts) ? object.groupAccounts.map((e: any) => GroupAccountInfo.fromJSON(e)) : [],
      proposalSeq: isSet(object.proposalSeq) ? BigInt(object.proposalSeq.toString()) : BigInt(0),
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.groupSeq = object.groupSeq !== undefined && object.groupSeq !== null ? BigInt(object.groupSeq.toString()) : BigInt(0);
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.groupMembers = object.groupMembers?.map(e => GroupMember.fromPartial(e)) || [];
    message.groupAccountSeq = object.groupAccountSeq !== undefined && object.groupAccountSeq !== null ? BigInt(object.groupAccountSeq.toString()) : BigInt(0);
    message.groupAccounts = object.groupAccounts?.map(e => GroupAccountInfo.fromPartial(e)) || [];
    message.proposalSeq = object.proposalSeq !== undefined && object.proposalSeq !== null ? BigInt(object.proposalSeq.toString()) : BigInt(0);
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.group_seq !== undefined && object.group_seq !== null) {
      message.groupSeq = BigInt(object.group_seq);
    }
    message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
    message.groupMembers = object.group_members?.map(e => GroupMember.fromAmino(e)) || [];
    if (object.group_account_seq !== undefined && object.group_account_seq !== null) {
      message.groupAccountSeq = BigInt(object.group_account_seq);
    }
    message.groupAccounts = object.group_accounts?.map(e => GroupAccountInfo.fromAmino(e)) || [];
    if (object.proposal_seq !== undefined && object.proposal_seq !== null) {
      message.proposalSeq = BigInt(object.proposal_seq);
    }
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.group_seq = message.groupSeq ? message.groupSeq.toString() : undefined;
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
    } else {
      obj.groups = [];
    }
    if (message.groupMembers) {
      obj.group_members = message.groupMembers.map(e => e ? GroupMember.toAmino(e) : undefined);
    } else {
      obj.group_members = [];
    }
    obj.group_account_seq = message.groupAccountSeq ? message.groupAccountSeq.toString() : undefined;
    if (message.groupAccounts) {
      obj.group_accounts = message.groupAccounts.map(e => e ? GroupAccountInfo.toAmino(e) : undefined);
    } else {
      obj.group_accounts = [];
    }
    obj.proposal_seq = message.proposalSeq ? message.proposalSeq.toString() : undefined;
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
      typeUrl: "/regen.group.v1alpha1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};