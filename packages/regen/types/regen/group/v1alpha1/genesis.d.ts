import { GroupInfo, GroupInfoAmino, GroupInfoSDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType, GroupAccountInfo, GroupAccountInfoAmino, GroupAccountInfoSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
