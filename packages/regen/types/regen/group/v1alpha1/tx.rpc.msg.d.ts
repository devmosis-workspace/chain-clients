import { Rpc } from "../../../helpers";
import { MsgCreateGroup, MsgCreateGroupResponse, MsgUpdateGroupMembers, MsgUpdateGroupMembersResponse, MsgUpdateGroupAdmin, MsgUpdateGroupAdminResponse, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataResponse, MsgCreateGroupAccount, MsgCreateGroupAccountResponse, MsgUpdateGroupAccountAdmin, MsgUpdateGroupAccountAdminResponse, MsgUpdateGroupAccountDecisionPolicy, MsgUpdateGroupAccountDecisionPolicyResponse, MsgUpdateGroupAccountMetadata, MsgUpdateGroupAccountMetadataResponse, MsgCreateProposal, MsgCreateProposalResponse, MsgVote, MsgVoteResponse, MsgExec, MsgExecResponse } from "./tx";
/** Msg is the regen.group.v1alpha1 Msg service. */
export interface Msg {
    /**
     * CreateGroup creates a new group with an admin account address, a list of
     * members and some optional metadata.
     */
    createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
    /**
     * UpdateGroupMembers updates the group members with given group id and admin
     * address.
     */
    updateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;
    /**
     * UpdateGroupAdmin updates the group admin with given group id and previous
     * admin address.
     */
    updateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse>;
    /**
     * UpdateGroupMetadata updates the group metadata with given group id and
     * admin address.
     */
    updateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse>;
    /** CreateGroupAccount creates a new group account using given DecisionPolicy. */
    createGroupAccount(request: MsgCreateGroupAccount): Promise<MsgCreateGroupAccountResponse>;
    /** UpdateGroupAccountAdmin updates a group account admin. */
    updateGroupAccountAdmin(request: MsgUpdateGroupAccountAdmin): Promise<MsgUpdateGroupAccountAdminResponse>;
    /**
     * UpdateGroupAccountDecisionPolicy allows a group account decision policy to
     * be updated.
     */
    updateGroupAccountDecisionPolicy(request: MsgUpdateGroupAccountDecisionPolicy): Promise<MsgUpdateGroupAccountDecisionPolicyResponse>;
    /** UpdateGroupAccountMetadata updates a group account metadata. */
    updateGroupAccountMetadata(request: MsgUpdateGroupAccountMetadata): Promise<MsgUpdateGroupAccountMetadataResponse>;
    /** CreateProposal submits a new proposal. */
    createProposal(request: MsgCreateProposal): Promise<MsgCreateProposalResponse>;
    /** Vote allows a voter to vote on a proposal. */
    vote(request: MsgVote): Promise<MsgVoteResponse>;
    /** Exec executes a proposal. */
    exec(request: MsgExec): Promise<MsgExecResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
    updateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;
    updateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse>;
    updateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse>;
    createGroupAccount(request: MsgCreateGroupAccount): Promise<MsgCreateGroupAccountResponse>;
    updateGroupAccountAdmin(request: MsgUpdateGroupAccountAdmin): Promise<MsgUpdateGroupAccountAdminResponse>;
    updateGroupAccountDecisionPolicy(request: MsgUpdateGroupAccountDecisionPolicy): Promise<MsgUpdateGroupAccountDecisionPolicyResponse>;
    updateGroupAccountMetadata(request: MsgUpdateGroupAccountMetadata): Promise<MsgUpdateGroupAccountMetadataResponse>;
    createProposal(request: MsgCreateProposal): Promise<MsgCreateProposalResponse>;
    vote(request: MsgVote): Promise<MsgVoteResponse>;
    exec(request: MsgExec): Promise<MsgExecResponse>;
}
