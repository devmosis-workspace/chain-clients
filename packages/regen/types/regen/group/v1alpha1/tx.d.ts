import { Member, MemberAmino, MemberSDKType, Choice } from "./types";
import { ThresholdDecisionPolicy as ThresholdDecisionPolicy1 } from "./types";
import { ThresholdDecisionPolicyProtoMsg as ThresholdDecisionPolicy1ProtoMsg } from "./types";
import { ThresholdDecisionPolicySDKType as ThresholdDecisionPolicy1SDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { PercentageDecisionPolicy, PercentageDecisionPolicyProtoMsg, PercentageDecisionPolicySDKType } from "../../../cosmos/group/v1/types";
import { ThresholdDecisionPolicy as ThresholdDecisionPolicy2 } from "../../../cosmos/group/v1/types";
import { ThresholdDecisionPolicyProtoMsg as ThresholdDecisionPolicy2ProtoMsg } from "../../../cosmos/group/v1/types";
import { ThresholdDecisionPolicySDKType as ThresholdDecisionPolicy2SDKType } from "../../../cosmos/group/v1/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export declare enum Exec {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    EXEC_UNSPECIFIED = 0,
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    EXEC_TRY = 1,
    UNRECOGNIZED = -1
}
export declare const ExecSDKType: typeof Exec;
export declare const ExecAmino: typeof Exec;
export declare function execFromJSON(object: any): Exec;
export declare function execToJSON(object: Exec): string;
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
    /** admin is the account address of the group admin. */
    admin: string;
    /** members defines the group members. */
    members: Member[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: Uint8Array;
}
export interface MsgCreateGroupProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroup";
    value: Uint8Array;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** members defines the group members. */
    members?: MemberAmino[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata?: string;
}
export interface MsgCreateGroupAminoMsg {
    type: "/regen.group.v1alpha1.MsgCreateGroup";
    value: MsgCreateGroupAmino;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupSDKType {
    admin: string;
    members: MemberSDKType[];
    metadata: Uint8Array;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
    /** group_id is the unique ID of the newly created group. */
    groupId: bigint;
}
export interface MsgCreateGroupResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroupResponse";
    value: Uint8Array;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseAmino {
    /** group_id is the unique ID of the newly created group. */
    group_id?: string;
}
export interface MsgCreateGroupResponseAminoMsg {
    type: "/regen.group.v1alpha1.MsgCreateGroupResponse";
    value: MsgCreateGroupResponseAmino;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseSDKType {
    group_id: bigint;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    memberUpdates: Member[];
}
export interface MsgUpdateGroupMembersProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembers";
    value: Uint8Array;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    member_updates?: MemberAmino[];
}
export interface MsgUpdateGroupMembersAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupMembers";
    value: MsgUpdateGroupMembersAmino;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersSDKType {
    admin: string;
    group_id: bigint;
    member_updates: MemberSDKType[];
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {
}
export interface MsgUpdateGroupMembersResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembersResponse";
    value: Uint8Array;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseAmino {
}
export interface MsgUpdateGroupMembersResponseAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupMembersResponse";
    value: MsgUpdateGroupMembersResponseAmino;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseSDKType {
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
    /** admin is the current account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** new_admin is the group new admin account address. */
    newAdmin: string;
}
export interface MsgUpdateGroupAdminProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdmin";
    value: Uint8Array;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminAmino {
    /** admin is the current account address of the group admin. */
    admin?: string;
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** new_admin is the group new admin account address. */
    new_admin?: string;
}
export interface MsgUpdateGroupAdminAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAdmin";
    value: MsgUpdateGroupAdminAmino;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminSDKType {
    admin: string;
    group_id: bigint;
    new_admin: string;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {
}
export interface MsgUpdateGroupAdminResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseAmino {
}
export interface MsgUpdateGroupAdminResponseAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAdminResponse";
    value: MsgUpdateGroupAdminResponseAmino;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseSDKType {
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** metadata is the updated group's metadata. */
    metadata: Uint8Array;
}
export interface MsgUpdateGroupMetadataProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadata";
    value: Uint8Array;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** metadata is the updated group's metadata. */
    metadata?: string;
}
export interface MsgUpdateGroupMetadataAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupMetadata";
    value: MsgUpdateGroupMetadataAmino;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataSDKType {
    admin: string;
    group_id: bigint;
    metadata: Uint8Array;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {
}
export interface MsgUpdateGroupMetadataResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadataResponse";
    value: Uint8Array;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseAmino {
}
export interface MsgUpdateGroupMetadataResponseAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupMetadataResponse";
    value: MsgUpdateGroupMetadataResponseAmino;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseSDKType {
}
/** MsgCreateGroupAccount is the Msg/CreateGroupAccount request type. */
export interface MsgCreateGroupAccount {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** metadata is any arbitrary metadata to attached to the group account. */
    metadata: Uint8Array;
    /** decision_policy specifies the group account's decision policy. */
    decisionPolicy?: (ThresholdDecisionPolicy1 & ThresholdDecisionPolicy2 & PercentageDecisionPolicy & Any) | undefined;
}
export interface MsgCreateGroupAccountProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccount";
    value: Uint8Array;
}
export type MsgCreateGroupAccountEncoded = Omit<MsgCreateGroupAccount, "decisionPolicy"> & {
    /** decision_policy specifies the group account's decision policy. */ decisionPolicy?: ThresholdDecisionPolicy1ProtoMsg | ThresholdDecisionPolicy2ProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/** MsgCreateGroupAccount is the Msg/CreateGroupAccount request type. */
export interface MsgCreateGroupAccountAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** metadata is any arbitrary metadata to attached to the group account. */
    metadata?: string;
    /** decision_policy specifies the group account's decision policy. */
    decision_policy?: AnyAmino;
}
export interface MsgCreateGroupAccountAminoMsg {
    type: "/regen.group.v1alpha1.MsgCreateGroupAccount";
    value: MsgCreateGroupAccountAmino;
}
/** MsgCreateGroupAccount is the Msg/CreateGroupAccount request type. */
export interface MsgCreateGroupAccountSDKType {
    admin: string;
    group_id: bigint;
    metadata: Uint8Array;
    decision_policy?: ThresholdDecisionPolicy1SDKType | ThresholdDecisionPolicy2SDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
}
/** MsgCreateGroupAccountResponse is the Msg/CreateGroupAccount response type. */
export interface MsgCreateGroupAccountResponse {
    /** address is the account address of the newly created group account. */
    address: string;
}
export interface MsgCreateGroupAccountResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccountResponse";
    value: Uint8Array;
}
/** MsgCreateGroupAccountResponse is the Msg/CreateGroupAccount response type. */
export interface MsgCreateGroupAccountResponseAmino {
    /** address is the account address of the newly created group account. */
    address?: string;
}
export interface MsgCreateGroupAccountResponseAminoMsg {
    type: "/regen.group.v1alpha1.MsgCreateGroupAccountResponse";
    value: MsgCreateGroupAccountResponseAmino;
}
/** MsgCreateGroupAccountResponse is the Msg/CreateGroupAccount response type. */
export interface MsgCreateGroupAccountResponseSDKType {
    address: string;
}
/** MsgUpdateGroupAccountAdmin is the Msg/UpdateGroupAccountAdmin request type. */
export interface MsgUpdateGroupAccountAdmin {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the group account address. */
    address: string;
    /** new_admin is the new group account admin. */
    newAdmin: string;
}
export interface MsgUpdateGroupAccountAdminProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin";
    value: Uint8Array;
}
/** MsgUpdateGroupAccountAdmin is the Msg/UpdateGroupAccountAdmin request type. */
export interface MsgUpdateGroupAccountAdminAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** address is the group account address. */
    address?: string;
    /** new_admin is the new group account admin. */
    new_admin?: string;
}
export interface MsgUpdateGroupAccountAdminAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin";
    value: MsgUpdateGroupAccountAdminAmino;
}
/** MsgUpdateGroupAccountAdmin is the Msg/UpdateGroupAccountAdmin request type. */
export interface MsgUpdateGroupAccountAdminSDKType {
    admin: string;
    address: string;
    new_admin: string;
}
/**
 * MsgUpdateGroupAccountAdminResponse is the Msg/UpdateGroupAccountAdmin
 * response type.
 */
export interface MsgUpdateGroupAccountAdminResponse {
}
export interface MsgUpdateGroupAccountAdminResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateGroupAccountAdminResponse is the Msg/UpdateGroupAccountAdmin
 * response type.
 */
export interface MsgUpdateGroupAccountAdminResponseAmino {
}
export interface MsgUpdateGroupAccountAdminResponseAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse";
    value: MsgUpdateGroupAccountAdminResponseAmino;
}
/**
 * MsgUpdateGroupAccountAdminResponse is the Msg/UpdateGroupAccountAdmin
 * response type.
 */
export interface MsgUpdateGroupAccountAdminResponseSDKType {
}
/**
 * MsgUpdateGroupAccountDecisionPolicy is the
 * Msg/UpdateGroupAccountDecisionPolicy request type.
 */
export interface MsgUpdateGroupAccountDecisionPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the group account address. */
    address: string;
    /** decision_policy is the updated group account decision policy. */
    decisionPolicy?: (ThresholdDecisionPolicy1 & ThresholdDecisionPolicy2 & PercentageDecisionPolicy & Any) | undefined;
}
export interface MsgUpdateGroupAccountDecisionPolicyProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy";
    value: Uint8Array;
}
export type MsgUpdateGroupAccountDecisionPolicyEncoded = Omit<MsgUpdateGroupAccountDecisionPolicy, "decisionPolicy"> & {
    /** decision_policy is the updated group account decision policy. */ decisionPolicy?: ThresholdDecisionPolicy1ProtoMsg | ThresholdDecisionPolicy2ProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/**
 * MsgUpdateGroupAccountDecisionPolicy is the
 * Msg/UpdateGroupAccountDecisionPolicy request type.
 */
export interface MsgUpdateGroupAccountDecisionPolicyAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** address is the group account address. */
    address?: string;
    /** decision_policy is the updated group account decision policy. */
    decision_policy?: AnyAmino;
}
export interface MsgUpdateGroupAccountDecisionPolicyAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy";
    value: MsgUpdateGroupAccountDecisionPolicyAmino;
}
/**
 * MsgUpdateGroupAccountDecisionPolicy is the
 * Msg/UpdateGroupAccountDecisionPolicy request type.
 */
export interface MsgUpdateGroupAccountDecisionPolicySDKType {
    admin: string;
    address: string;
    decision_policy?: ThresholdDecisionPolicy1SDKType | ThresholdDecisionPolicy2SDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
}
/**
 * MsgUpdateGroupAccountDecisionPolicyResponse is the
 * Msg/UpdateGroupAccountDecisionPolicy response type.
 */
export interface MsgUpdateGroupAccountDecisionPolicyResponse {
}
export interface MsgUpdateGroupAccountDecisionPolicyResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateGroupAccountDecisionPolicyResponse is the
 * Msg/UpdateGroupAccountDecisionPolicy response type.
 */
export interface MsgUpdateGroupAccountDecisionPolicyResponseAmino {
}
export interface MsgUpdateGroupAccountDecisionPolicyResponseAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse";
    value: MsgUpdateGroupAccountDecisionPolicyResponseAmino;
}
/**
 * MsgUpdateGroupAccountDecisionPolicyResponse is the
 * Msg/UpdateGroupAccountDecisionPolicy response type.
 */
export interface MsgUpdateGroupAccountDecisionPolicyResponseSDKType {
}
/**
 * MsgUpdateGroupAccountMetadata is the Msg/UpdateGroupAccountMetadata request
 * type.
 */
export interface MsgUpdateGroupAccountMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the group account address. */
    address: string;
    /** metadata is the updated group account metadata. */
    metadata: Uint8Array;
}
export interface MsgUpdateGroupAccountMetadataProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata";
    value: Uint8Array;
}
/**
 * MsgUpdateGroupAccountMetadata is the Msg/UpdateGroupAccountMetadata request
 * type.
 */
export interface MsgUpdateGroupAccountMetadataAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** address is the group account address. */
    address?: string;
    /** metadata is the updated group account metadata. */
    metadata?: string;
}
export interface MsgUpdateGroupAccountMetadataAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata";
    value: MsgUpdateGroupAccountMetadataAmino;
}
/**
 * MsgUpdateGroupAccountMetadata is the Msg/UpdateGroupAccountMetadata request
 * type.
 */
export interface MsgUpdateGroupAccountMetadataSDKType {
    admin: string;
    address: string;
    metadata: Uint8Array;
}
/**
 * MsgUpdateGroupAccountMetadataResponse is the Msg/UpdateGroupAccountMetadata
 * response type.
 */
export interface MsgUpdateGroupAccountMetadataResponse {
}
export interface MsgUpdateGroupAccountMetadataResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateGroupAccountMetadataResponse is the Msg/UpdateGroupAccountMetadata
 * response type.
 */
export interface MsgUpdateGroupAccountMetadataResponseAmino {
}
export interface MsgUpdateGroupAccountMetadataResponseAminoMsg {
    type: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse";
    value: MsgUpdateGroupAccountMetadataResponseAmino;
}
/**
 * MsgUpdateGroupAccountMetadataResponse is the Msg/UpdateGroupAccountMetadata
 * response type.
 */
export interface MsgUpdateGroupAccountMetadataResponseSDKType {
}
/** MsgCreateProposal is the Msg/CreateProposal request type. */
export interface MsgCreateProposal {
    /** address is the group account address. */
    address: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers: string[];
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: Uint8Array;
    /** msgs is a list of Msgs that will be executed if the proposal passes. */
    msgs: Any[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec: Exec;
}
export interface MsgCreateProposalProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgCreateProposal";
    value: Uint8Array;
}
/** MsgCreateProposal is the Msg/CreateProposal request type. */
export interface MsgCreateProposalAmino {
    /** address is the group account address. */
    address?: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers?: string[];
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata?: string;
    /** msgs is a list of Msgs that will be executed if the proposal passes. */
    msgs?: AnyAmino[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec?: Exec;
}
export interface MsgCreateProposalAminoMsg {
    type: "/regen.group.v1alpha1.MsgCreateProposal";
    value: MsgCreateProposalAmino;
}
/** MsgCreateProposal is the Msg/CreateProposal request type. */
export interface MsgCreateProposalSDKType {
    address: string;
    proposers: string[];
    metadata: Uint8Array;
    msgs: AnySDKType[];
    exec: Exec;
}
/** MsgCreateProposalResponse is the Msg/CreateProposal response type. */
export interface MsgCreateProposalResponse {
    /** proposal is the unique ID of the proposal. */
    proposalId: bigint;
}
export interface MsgCreateProposalResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgCreateProposalResponse";
    value: Uint8Array;
}
/** MsgCreateProposalResponse is the Msg/CreateProposal response type. */
export interface MsgCreateProposalResponseAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id?: string;
}
export interface MsgCreateProposalResponseAminoMsg {
    type: "/regen.group.v1alpha1.MsgCreateProposalResponse";
    value: MsgCreateProposalResponseAmino;
}
/** MsgCreateProposalResponse is the Msg/CreateProposal response type. */
export interface MsgCreateProposalResponseSDKType {
    proposal_id: bigint;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
    /** proposal is the unique ID of the proposal. */
    proposalId: bigint;
    /** voter is the voter account address. */
    voter: string;
    /** choice is the voter's choice on the proposal. */
    choice: Choice;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: Uint8Array;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec: Exec;
}
export interface MsgVoteProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgVote";
    value: Uint8Array;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id?: string;
    /** voter is the voter account address. */
    voter?: string;
    /** choice is the voter's choice on the proposal. */
    choice?: Choice;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata?: string;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec?: Exec;
}
export interface MsgVoteAminoMsg {
    type: "/regen.group.v1alpha1.MsgVote";
    value: MsgVoteAmino;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteSDKType {
    proposal_id: bigint;
    voter: string;
    choice: Choice;
    metadata: Uint8Array;
    exec: Exec;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {
}
export interface MsgVoteResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgVoteResponse";
    value: Uint8Array;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseAmino {
}
export interface MsgVoteResponseAminoMsg {
    type: "/regen.group.v1alpha1.MsgVoteResponse";
    value: MsgVoteResponseAmino;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
    /** proposal is the unique ID of the proposal. */
    proposalId: bigint;
    /** signer is the account address used to execute the proposal. */
    signer: string;
}
export interface MsgExecProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgExec";
    value: Uint8Array;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id?: string;
    /** signer is the account address used to execute the proposal. */
    signer?: string;
}
export interface MsgExecAminoMsg {
    type: "/regen.group.v1alpha1.MsgExec";
    value: MsgExecAmino;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecSDKType {
    proposal_id: bigint;
    signer: string;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
}
export interface MsgExecResponseProtoMsg {
    typeUrl: "/regen.group.v1alpha1.MsgExecResponse";
    value: Uint8Array;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseAmino {
}
export interface MsgExecResponseAminoMsg {
    type: "/regen.group.v1alpha1.MsgExecResponse";
    value: MsgExecResponseAmino;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseSDKType {
}
export declare const MsgCreateGroup: {
    typeUrl: string;
    encode(message: MsgCreateGroup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateGroup;
    fromPartial(object: Partial<MsgCreateGroup>): MsgCreateGroup;
    fromAmino(object: MsgCreateGroupAmino): MsgCreateGroup;
    toAmino(message: MsgCreateGroup): MsgCreateGroupAmino;
    fromAminoMsg(object: MsgCreateGroupAminoMsg): MsgCreateGroup;
    fromProtoMsg(message: MsgCreateGroupProtoMsg): MsgCreateGroup;
    toProto(message: MsgCreateGroup): Uint8Array;
    toProtoMsg(message: MsgCreateGroup): MsgCreateGroupProtoMsg;
};
export declare const MsgCreateGroupResponse: {
    typeUrl: string;
    encode(message: MsgCreateGroupResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateGroupResponse;
    fromPartial(object: Partial<MsgCreateGroupResponse>): MsgCreateGroupResponse;
    fromAmino(object: MsgCreateGroupResponseAmino): MsgCreateGroupResponse;
    toAmino(message: MsgCreateGroupResponse): MsgCreateGroupResponseAmino;
    fromAminoMsg(object: MsgCreateGroupResponseAminoMsg): MsgCreateGroupResponse;
    fromProtoMsg(message: MsgCreateGroupResponseProtoMsg): MsgCreateGroupResponse;
    toProto(message: MsgCreateGroupResponse): Uint8Array;
    toProtoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseProtoMsg;
};
export declare const MsgUpdateGroupMembers: {
    typeUrl: string;
    encode(message: MsgUpdateGroupMembers, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateGroupMembers;
    fromPartial(object: Partial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers;
    fromAmino(object: MsgUpdateGroupMembersAmino): MsgUpdateGroupMembers;
    toAmino(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAmino;
    fromAminoMsg(object: MsgUpdateGroupMembersAminoMsg): MsgUpdateGroupMembers;
    fromProtoMsg(message: MsgUpdateGroupMembersProtoMsg): MsgUpdateGroupMembers;
    toProto(message: MsgUpdateGroupMembers): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersProtoMsg;
};
export declare const MsgUpdateGroupMembersResponse: {
    typeUrl: string;
    encode(_: MsgUpdateGroupMembersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateGroupMembersResponse;
    fromPartial(_: Partial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse;
    fromAmino(_: MsgUpdateGroupMembersResponseAmino): MsgUpdateGroupMembersResponse;
    toAmino(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupMembersResponseAminoMsg): MsgUpdateGroupMembersResponse;
    fromProtoMsg(message: MsgUpdateGroupMembersResponseProtoMsg): MsgUpdateGroupMembersResponse;
    toProto(message: MsgUpdateGroupMembersResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseProtoMsg;
};
export declare const MsgUpdateGroupAdmin: {
    typeUrl: string;
    encode(message: MsgUpdateGroupAdmin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateGroupAdmin;
    fromPartial(object: Partial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin;
    fromAmino(object: MsgUpdateGroupAdminAmino): MsgUpdateGroupAdmin;
    toAmino(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAmino;
    fromAminoMsg(object: MsgUpdateGroupAdminAminoMsg): MsgUpdateGroupAdmin;
    fromProtoMsg(message: MsgUpdateGroupAdminProtoMsg): MsgUpdateGroupAdmin;
    toProto(message: MsgUpdateGroupAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminProtoMsg;
};
export declare const MsgUpdateGroupAdminResponse: {
    typeUrl: string;
    encode(_: MsgUpdateGroupAdminResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateGroupAdminResponse;
    fromPartial(_: Partial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse;
    fromAmino(_: MsgUpdateGroupAdminResponseAmino): MsgUpdateGroupAdminResponse;
    toAmino(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupAdminResponseAminoMsg): MsgUpdateGroupAdminResponse;
    fromProtoMsg(message: MsgUpdateGroupAdminResponseProtoMsg): MsgUpdateGroupAdminResponse;
    toProto(message: MsgUpdateGroupAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseProtoMsg;
};
export declare const MsgUpdateGroupMetadata: {
    typeUrl: string;
    encode(message: MsgUpdateGroupMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateGroupMetadata;
    fromPartial(object: Partial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata;
    fromAmino(object: MsgUpdateGroupMetadataAmino): MsgUpdateGroupMetadata;
    toAmino(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAmino;
    fromAminoMsg(object: MsgUpdateGroupMetadataAminoMsg): MsgUpdateGroupMetadata;
    fromProtoMsg(message: MsgUpdateGroupMetadataProtoMsg): MsgUpdateGroupMetadata;
    toProto(message: MsgUpdateGroupMetadata): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataProtoMsg;
};
export declare const MsgUpdateGroupMetadataResponse: {
    typeUrl: string;
    encode(_: MsgUpdateGroupMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateGroupMetadataResponse;
    fromPartial(_: Partial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse;
    fromAmino(_: MsgUpdateGroupMetadataResponseAmino): MsgUpdateGroupMetadataResponse;
    toAmino(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupMetadataResponseAminoMsg): MsgUpdateGroupMetadataResponse;
    fromProtoMsg(message: MsgUpdateGroupMetadataResponseProtoMsg): MsgUpdateGroupMetadataResponse;
    toProto(message: MsgUpdateGroupMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseProtoMsg;
};
export declare const MsgCreateGroupAccount: {
    typeUrl: string;
    encode(message: MsgCreateGroupAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateGroupAccount;
    fromPartial(object: Partial<MsgCreateGroupAccount>): MsgCreateGroupAccount;
    fromAmino(object: MsgCreateGroupAccountAmino): MsgCreateGroupAccount;
    toAmino(message: MsgCreateGroupAccount): MsgCreateGroupAccountAmino;
    fromAminoMsg(object: MsgCreateGroupAccountAminoMsg): MsgCreateGroupAccount;
    fromProtoMsg(message: MsgCreateGroupAccountProtoMsg): MsgCreateGroupAccount;
    toProto(message: MsgCreateGroupAccount): Uint8Array;
    toProtoMsg(message: MsgCreateGroupAccount): MsgCreateGroupAccountProtoMsg;
};
export declare const MsgCreateGroupAccountResponse: {
    typeUrl: string;
    encode(message: MsgCreateGroupAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateGroupAccountResponse;
    fromPartial(object: Partial<MsgCreateGroupAccountResponse>): MsgCreateGroupAccountResponse;
    fromAmino(object: MsgCreateGroupAccountResponseAmino): MsgCreateGroupAccountResponse;
    toAmino(message: MsgCreateGroupAccountResponse): MsgCreateGroupAccountResponseAmino;
    fromAminoMsg(object: MsgCreateGroupAccountResponseAminoMsg): MsgCreateGroupAccountResponse;
    fromProtoMsg(message: MsgCreateGroupAccountResponseProtoMsg): MsgCreateGroupAccountResponse;
    toProto(message: MsgCreateGroupAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateGroupAccountResponse): MsgCreateGroupAccountResponseProtoMsg;
};
export declare const MsgUpdateGroupAccountAdmin: {
    typeUrl: string;
    encode(message: MsgUpdateGroupAccountAdmin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateGroupAccountAdmin;
    fromPartial(object: Partial<MsgUpdateGroupAccountAdmin>): MsgUpdateGroupAccountAdmin;
    fromAmino(object: MsgUpdateGroupAccountAdminAmino): MsgUpdateGroupAccountAdmin;
    toAmino(message: MsgUpdateGroupAccountAdmin): MsgUpdateGroupAccountAdminAmino;
    fromAminoMsg(object: MsgUpdateGroupAccountAdminAminoMsg): MsgUpdateGroupAccountAdmin;
    fromProtoMsg(message: MsgUpdateGroupAccountAdminProtoMsg): MsgUpdateGroupAccountAdmin;
    toProto(message: MsgUpdateGroupAccountAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupAccountAdmin): MsgUpdateGroupAccountAdminProtoMsg;
};
export declare const MsgUpdateGroupAccountAdminResponse: {
    typeUrl: string;
    encode(_: MsgUpdateGroupAccountAdminResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateGroupAccountAdminResponse;
    fromPartial(_: Partial<MsgUpdateGroupAccountAdminResponse>): MsgUpdateGroupAccountAdminResponse;
    fromAmino(_: MsgUpdateGroupAccountAdminResponseAmino): MsgUpdateGroupAccountAdminResponse;
    toAmino(_: MsgUpdateGroupAccountAdminResponse): MsgUpdateGroupAccountAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupAccountAdminResponseAminoMsg): MsgUpdateGroupAccountAdminResponse;
    fromProtoMsg(message: MsgUpdateGroupAccountAdminResponseProtoMsg): MsgUpdateGroupAccountAdminResponse;
    toProto(message: MsgUpdateGroupAccountAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupAccountAdminResponse): MsgUpdateGroupAccountAdminResponseProtoMsg;
};
export declare const MsgUpdateGroupAccountDecisionPolicy: {
    typeUrl: string;
    encode(message: MsgUpdateGroupAccountDecisionPolicy, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateGroupAccountDecisionPolicy;
    fromPartial(object: Partial<MsgUpdateGroupAccountDecisionPolicy>): MsgUpdateGroupAccountDecisionPolicy;
    fromAmino(object: MsgUpdateGroupAccountDecisionPolicyAmino): MsgUpdateGroupAccountDecisionPolicy;
    toAmino(message: MsgUpdateGroupAccountDecisionPolicy): MsgUpdateGroupAccountDecisionPolicyAmino;
    fromAminoMsg(object: MsgUpdateGroupAccountDecisionPolicyAminoMsg): MsgUpdateGroupAccountDecisionPolicy;
    fromProtoMsg(message: MsgUpdateGroupAccountDecisionPolicyProtoMsg): MsgUpdateGroupAccountDecisionPolicy;
    toProto(message: MsgUpdateGroupAccountDecisionPolicy): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupAccountDecisionPolicy): MsgUpdateGroupAccountDecisionPolicyProtoMsg;
};
export declare const MsgUpdateGroupAccountDecisionPolicyResponse: {
    typeUrl: string;
    encode(_: MsgUpdateGroupAccountDecisionPolicyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateGroupAccountDecisionPolicyResponse;
    fromPartial(_: Partial<MsgUpdateGroupAccountDecisionPolicyResponse>): MsgUpdateGroupAccountDecisionPolicyResponse;
    fromAmino(_: MsgUpdateGroupAccountDecisionPolicyResponseAmino): MsgUpdateGroupAccountDecisionPolicyResponse;
    toAmino(_: MsgUpdateGroupAccountDecisionPolicyResponse): MsgUpdateGroupAccountDecisionPolicyResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupAccountDecisionPolicyResponseAminoMsg): MsgUpdateGroupAccountDecisionPolicyResponse;
    fromProtoMsg(message: MsgUpdateGroupAccountDecisionPolicyResponseProtoMsg): MsgUpdateGroupAccountDecisionPolicyResponse;
    toProto(message: MsgUpdateGroupAccountDecisionPolicyResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupAccountDecisionPolicyResponse): MsgUpdateGroupAccountDecisionPolicyResponseProtoMsg;
};
export declare const MsgUpdateGroupAccountMetadata: {
    typeUrl: string;
    encode(message: MsgUpdateGroupAccountMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateGroupAccountMetadata;
    fromPartial(object: Partial<MsgUpdateGroupAccountMetadata>): MsgUpdateGroupAccountMetadata;
    fromAmino(object: MsgUpdateGroupAccountMetadataAmino): MsgUpdateGroupAccountMetadata;
    toAmino(message: MsgUpdateGroupAccountMetadata): MsgUpdateGroupAccountMetadataAmino;
    fromAminoMsg(object: MsgUpdateGroupAccountMetadataAminoMsg): MsgUpdateGroupAccountMetadata;
    fromProtoMsg(message: MsgUpdateGroupAccountMetadataProtoMsg): MsgUpdateGroupAccountMetadata;
    toProto(message: MsgUpdateGroupAccountMetadata): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupAccountMetadata): MsgUpdateGroupAccountMetadataProtoMsg;
};
export declare const MsgUpdateGroupAccountMetadataResponse: {
    typeUrl: string;
    encode(_: MsgUpdateGroupAccountMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateGroupAccountMetadataResponse;
    fromPartial(_: Partial<MsgUpdateGroupAccountMetadataResponse>): MsgUpdateGroupAccountMetadataResponse;
    fromAmino(_: MsgUpdateGroupAccountMetadataResponseAmino): MsgUpdateGroupAccountMetadataResponse;
    toAmino(_: MsgUpdateGroupAccountMetadataResponse): MsgUpdateGroupAccountMetadataResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupAccountMetadataResponseAminoMsg): MsgUpdateGroupAccountMetadataResponse;
    fromProtoMsg(message: MsgUpdateGroupAccountMetadataResponseProtoMsg): MsgUpdateGroupAccountMetadataResponse;
    toProto(message: MsgUpdateGroupAccountMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupAccountMetadataResponse): MsgUpdateGroupAccountMetadataResponseProtoMsg;
};
export declare const MsgCreateProposal: {
    typeUrl: string;
    encode(message: MsgCreateProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateProposal;
    fromPartial(object: Partial<MsgCreateProposal>): MsgCreateProposal;
    fromAmino(object: MsgCreateProposalAmino): MsgCreateProposal;
    toAmino(message: MsgCreateProposal): MsgCreateProposalAmino;
    fromAminoMsg(object: MsgCreateProposalAminoMsg): MsgCreateProposal;
    fromProtoMsg(message: MsgCreateProposalProtoMsg): MsgCreateProposal;
    toProto(message: MsgCreateProposal): Uint8Array;
    toProtoMsg(message: MsgCreateProposal): MsgCreateProposalProtoMsg;
};
export declare const MsgCreateProposalResponse: {
    typeUrl: string;
    encode(message: MsgCreateProposalResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateProposalResponse;
    fromPartial(object: Partial<MsgCreateProposalResponse>): MsgCreateProposalResponse;
    fromAmino(object: MsgCreateProposalResponseAmino): MsgCreateProposalResponse;
    toAmino(message: MsgCreateProposalResponse): MsgCreateProposalResponseAmino;
    fromAminoMsg(object: MsgCreateProposalResponseAminoMsg): MsgCreateProposalResponse;
    fromProtoMsg(message: MsgCreateProposalResponseProtoMsg): MsgCreateProposalResponse;
    toProto(message: MsgCreateProposalResponse): Uint8Array;
    toProtoMsg(message: MsgCreateProposalResponse): MsgCreateProposalResponseProtoMsg;
};
export declare const MsgVote: {
    typeUrl: string;
    encode(message: MsgVote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgVote;
    fromPartial(object: Partial<MsgVote>): MsgVote;
    fromAmino(object: MsgVoteAmino): MsgVote;
    toAmino(message: MsgVote): MsgVoteAmino;
    fromAminoMsg(object: MsgVoteAminoMsg): MsgVote;
    fromProtoMsg(message: MsgVoteProtoMsg): MsgVote;
    toProto(message: MsgVote): Uint8Array;
    toProtoMsg(message: MsgVote): MsgVoteProtoMsg;
};
export declare const MsgVoteResponse: {
    typeUrl: string;
    encode(_: MsgVoteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgVoteResponse;
    fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse;
    fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse;
    toAmino(_: MsgVoteResponse): MsgVoteResponseAmino;
    fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse;
    fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse;
    toProto(message: MsgVoteResponse): Uint8Array;
    toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg;
};
export declare const MsgExec: {
    typeUrl: string;
    encode(message: MsgExec, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgExec;
    fromPartial(object: Partial<MsgExec>): MsgExec;
    fromAmino(object: MsgExecAmino): MsgExec;
    toAmino(message: MsgExec): MsgExecAmino;
    fromAminoMsg(object: MsgExecAminoMsg): MsgExec;
    fromProtoMsg(message: MsgExecProtoMsg): MsgExec;
    toProto(message: MsgExec): Uint8Array;
    toProtoMsg(message: MsgExec): MsgExecProtoMsg;
};
export declare const MsgExecResponse: {
    typeUrl: string;
    encode(_: MsgExecResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgExecResponse;
    fromPartial(_: Partial<MsgExecResponse>): MsgExecResponse;
    fromAmino(_: MsgExecResponseAmino): MsgExecResponse;
    toAmino(_: MsgExecResponse): MsgExecResponseAmino;
    fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse;
    fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse;
    toProto(message: MsgExecResponse): Uint8Array;
    toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg;
};
export declare const DecisionPolicy_InterfaceDecoder: (input: BinaryReader | Uint8Array) => ThresholdDecisionPolicy1 | ThresholdDecisionPolicy2 | PercentageDecisionPolicy | Any;
export declare const DecisionPolicy_FromAmino: (content: AnyAmino) => Any;
export declare const DecisionPolicy_ToAmino: (content: Any) => AnyAmino;
