import { ProposalExecutorResult, ProposalStatus, TallyResult, TallyResultSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupSDKType {
    group_id: Long;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupSDKType {
    group_id: Long;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicySDKType {
    address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicySDKType {
    address: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalSDKType {
    proposal_id: Long;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalSDKType {
    proposal_id: Long;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteSDKType {
    proposal_id: Long;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
    /** result is the proposal execution result. */
    result: ProposalExecutorResult;
    /** logs contains error logs in case the execution result is FAILURE. */
    logs: string;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecSDKType {
    proposal_id: Long;
    result: ProposalExecutorResult;
    logs: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** address is the account address of the group member. */
    address: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupSDKType {
    group_id: Long;
    address: string;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPruned {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
    /** status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). */
    status: ProposalStatus;
    /** tally_result is the proposal tally result (when applicable). */
    tallyResult?: TallyResult;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPrunedSDKType {
    proposal_id: Long;
    status: ProposalStatus;
    tally_result?: TallyResultSDKType;
}
export declare const EventCreateGroup: {
    encode(message: EventCreateGroup, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreateGroup;
    fromPartial(object: Partial<EventCreateGroup>): EventCreateGroup;
};
export declare const EventUpdateGroup: {
    encode(message: EventUpdateGroup, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateGroup;
    fromPartial(object: Partial<EventUpdateGroup>): EventUpdateGroup;
};
export declare const EventCreateGroupPolicy: {
    encode(message: EventCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreateGroupPolicy;
    fromPartial(object: Partial<EventCreateGroupPolicy>): EventCreateGroupPolicy;
};
export declare const EventUpdateGroupPolicy: {
    encode(message: EventUpdateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateGroupPolicy;
    fromPartial(object: Partial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy;
};
export declare const EventSubmitProposal: {
    encode(message: EventSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSubmitProposal;
    fromPartial(object: Partial<EventSubmitProposal>): EventSubmitProposal;
};
export declare const EventWithdrawProposal: {
    encode(message: EventWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventWithdrawProposal;
    fromPartial(object: Partial<EventWithdrawProposal>): EventWithdrawProposal;
};
export declare const EventVote: {
    encode(message: EventVote, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventVote;
    fromPartial(object: Partial<EventVote>): EventVote;
};
export declare const EventExec: {
    encode(message: EventExec, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventExec;
    fromPartial(object: Partial<EventExec>): EventExec;
};
export declare const EventLeaveGroup: {
    encode(message: EventLeaveGroup, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventLeaveGroup;
    fromPartial(object: Partial<EventLeaveGroup>): EventLeaveGroup;
};
export declare const EventProposalPruned: {
    encode(message: EventProposalPruned, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventProposalPruned;
    fromPartial(object: Partial<EventProposalPruned>): EventProposalPruned;
};
