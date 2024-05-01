import { BinaryWriter } from "../../../binary";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
    /** group_id is the unique ID of the group. */
    groupId: bigint;
}
export interface EventCreateGroupProtoMsg {
    typeUrl: "/regen.group.v1alpha1.EventCreateGroup";
    value: Uint8Array;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupAmino {
    /** group_id is the unique ID of the group. */
    group_id?: string;
}
export interface EventCreateGroupAminoMsg {
    type: "/regen.group.v1alpha1.EventCreateGroup";
    value: EventCreateGroupAmino;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupSDKType {
    group_id: bigint;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
    /** group_id is the unique ID of the group. */
    groupId: bigint;
}
export interface EventUpdateGroupProtoMsg {
    typeUrl: "/regen.group.v1alpha1.EventUpdateGroup";
    value: Uint8Array;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupAmino {
    /** group_id is the unique ID of the group. */
    group_id?: string;
}
export interface EventUpdateGroupAminoMsg {
    type: "/regen.group.v1alpha1.EventUpdateGroup";
    value: EventUpdateGroupAmino;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupSDKType {
    group_id: bigint;
}
/** EventCreateGroupAccount is an event emitted when a group account is created. */
export interface EventCreateGroupAccount {
    /** address is the address of the group account. */
    address: string;
}
export interface EventCreateGroupAccountProtoMsg {
    typeUrl: "/regen.group.v1alpha1.EventCreateGroupAccount";
    value: Uint8Array;
}
/** EventCreateGroupAccount is an event emitted when a group account is created. */
export interface EventCreateGroupAccountAmino {
    /** address is the address of the group account. */
    address?: string;
}
export interface EventCreateGroupAccountAminoMsg {
    type: "/regen.group.v1alpha1.EventCreateGroupAccount";
    value: EventCreateGroupAccountAmino;
}
/** EventCreateGroupAccount is an event emitted when a group account is created. */
export interface EventCreateGroupAccountSDKType {
    address: string;
}
/** EventUpdateGroupAccount is an event emitted when a group account is updated. */
export interface EventUpdateGroupAccount {
    /** address is the address of the group account. */
    address: string;
}
export interface EventUpdateGroupAccountProtoMsg {
    typeUrl: "/regen.group.v1alpha1.EventUpdateGroupAccount";
    value: Uint8Array;
}
/** EventUpdateGroupAccount is an event emitted when a group account is updated. */
export interface EventUpdateGroupAccountAmino {
    /** address is the address of the group account. */
    address?: string;
}
export interface EventUpdateGroupAccountAminoMsg {
    type: "/regen.group.v1alpha1.EventUpdateGroupAccount";
    value: EventUpdateGroupAccountAmino;
}
/** EventUpdateGroupAccount is an event emitted when a group account is updated. */
export interface EventUpdateGroupAccountSDKType {
    address: string;
}
/** EventCreateProposal is an event emitted when a proposal is created. */
export interface EventCreateProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: bigint;
}
export interface EventCreateProposalProtoMsg {
    typeUrl: "/regen.group.v1alpha1.EventCreateProposal";
    value: Uint8Array;
}
/** EventCreateProposal is an event emitted when a proposal is created. */
export interface EventCreateProposalAmino {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id?: string;
}
export interface EventCreateProposalAminoMsg {
    type: "/regen.group.v1alpha1.EventCreateProposal";
    value: EventCreateProposalAmino;
}
/** EventCreateProposal is an event emitted when a proposal is created. */
export interface EventCreateProposalSDKType {
    proposal_id: bigint;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: bigint;
}
export interface EventVoteProtoMsg {
    typeUrl: "/regen.group.v1alpha1.EventVote";
    value: Uint8Array;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteAmino {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id?: string;
}
export interface EventVoteAminoMsg {
    type: "/regen.group.v1alpha1.EventVote";
    value: EventVoteAmino;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteSDKType {
    proposal_id: bigint;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: bigint;
}
export interface EventExecProtoMsg {
    typeUrl: "/regen.group.v1alpha1.EventExec";
    value: Uint8Array;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecAmino {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id?: string;
}
export interface EventExecAminoMsg {
    type: "/regen.group.v1alpha1.EventExec";
    value: EventExecAmino;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecSDKType {
    proposal_id: bigint;
}
export declare const EventCreateGroup: {
    typeUrl: string;
    encode(message: EventCreateGroup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateGroup;
    fromPartial(object: Partial<EventCreateGroup>): EventCreateGroup;
    fromAmino(object: EventCreateGroupAmino): EventCreateGroup;
    toAmino(message: EventCreateGroup): EventCreateGroupAmino;
    fromAminoMsg(object: EventCreateGroupAminoMsg): EventCreateGroup;
    fromProtoMsg(message: EventCreateGroupProtoMsg): EventCreateGroup;
    toProto(message: EventCreateGroup): Uint8Array;
    toProtoMsg(message: EventCreateGroup): EventCreateGroupProtoMsg;
};
export declare const EventUpdateGroup: {
    typeUrl: string;
    encode(message: EventUpdateGroup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateGroup;
    fromPartial(object: Partial<EventUpdateGroup>): EventUpdateGroup;
    fromAmino(object: EventUpdateGroupAmino): EventUpdateGroup;
    toAmino(message: EventUpdateGroup): EventUpdateGroupAmino;
    fromAminoMsg(object: EventUpdateGroupAminoMsg): EventUpdateGroup;
    fromProtoMsg(message: EventUpdateGroupProtoMsg): EventUpdateGroup;
    toProto(message: EventUpdateGroup): Uint8Array;
    toProtoMsg(message: EventUpdateGroup): EventUpdateGroupProtoMsg;
};
export declare const EventCreateGroupAccount: {
    typeUrl: string;
    encode(message: EventCreateGroupAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateGroupAccount;
    fromPartial(object: Partial<EventCreateGroupAccount>): EventCreateGroupAccount;
    fromAmino(object: EventCreateGroupAccountAmino): EventCreateGroupAccount;
    toAmino(message: EventCreateGroupAccount): EventCreateGroupAccountAmino;
    fromAminoMsg(object: EventCreateGroupAccountAminoMsg): EventCreateGroupAccount;
    fromProtoMsg(message: EventCreateGroupAccountProtoMsg): EventCreateGroupAccount;
    toProto(message: EventCreateGroupAccount): Uint8Array;
    toProtoMsg(message: EventCreateGroupAccount): EventCreateGroupAccountProtoMsg;
};
export declare const EventUpdateGroupAccount: {
    typeUrl: string;
    encode(message: EventUpdateGroupAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateGroupAccount;
    fromPartial(object: Partial<EventUpdateGroupAccount>): EventUpdateGroupAccount;
    fromAmino(object: EventUpdateGroupAccountAmino): EventUpdateGroupAccount;
    toAmino(message: EventUpdateGroupAccount): EventUpdateGroupAccountAmino;
    fromAminoMsg(object: EventUpdateGroupAccountAminoMsg): EventUpdateGroupAccount;
    fromProtoMsg(message: EventUpdateGroupAccountProtoMsg): EventUpdateGroupAccount;
    toProto(message: EventUpdateGroupAccount): Uint8Array;
    toProtoMsg(message: EventUpdateGroupAccount): EventUpdateGroupAccountProtoMsg;
};
export declare const EventCreateProposal: {
    typeUrl: string;
    encode(message: EventCreateProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateProposal;
    fromPartial(object: Partial<EventCreateProposal>): EventCreateProposal;
    fromAmino(object: EventCreateProposalAmino): EventCreateProposal;
    toAmino(message: EventCreateProposal): EventCreateProposalAmino;
    fromAminoMsg(object: EventCreateProposalAminoMsg): EventCreateProposal;
    fromProtoMsg(message: EventCreateProposalProtoMsg): EventCreateProposal;
    toProto(message: EventCreateProposal): Uint8Array;
    toProtoMsg(message: EventCreateProposal): EventCreateProposalProtoMsg;
};
export declare const EventVote: {
    typeUrl: string;
    encode(message: EventVote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventVote;
    fromPartial(object: Partial<EventVote>): EventVote;
    fromAmino(object: EventVoteAmino): EventVote;
    toAmino(message: EventVote): EventVoteAmino;
    fromAminoMsg(object: EventVoteAminoMsg): EventVote;
    fromProtoMsg(message: EventVoteProtoMsg): EventVote;
    toProto(message: EventVote): Uint8Array;
    toProtoMsg(message: EventVote): EventVoteProtoMsg;
};
export declare const EventExec: {
    typeUrl: string;
    encode(message: EventExec, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventExec;
    fromPartial(object: Partial<EventExec>): EventExec;
    fromAmino(object: EventExecAmino): EventExec;
    toAmino(message: EventExec): EventExecAmino;
    fromAminoMsg(object: EventExecAminoMsg): EventExec;
    fromProtoMsg(message: EventExecProtoMsg): EventExec;
    toProto(message: EventExec): Uint8Array;
    toProtoMsg(message: EventExec): EventExecProtoMsg;
};
