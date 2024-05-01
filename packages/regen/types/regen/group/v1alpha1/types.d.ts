import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { PercentageDecisionPolicy, PercentageDecisionPolicyProtoMsg, PercentageDecisionPolicySDKType } from "../../../cosmos/group/v1/types";
import { ThresholdDecisionPolicy as ThresholdDecisionPolicy1 } from "../../../cosmos/group/v1/types";
import { ThresholdDecisionPolicyProtoMsg as ThresholdDecisionPolicy1ProtoMsg } from "../../../cosmos/group/v1/types";
import { ThresholdDecisionPolicySDKType as ThresholdDecisionPolicy1SDKType } from "../../../cosmos/group/v1/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Choice defines available types of choices for voting. */
export declare enum Choice {
    /** CHOICE_UNSPECIFIED - CHOICE_UNSPECIFIED defines a no-op voting choice. */
    CHOICE_UNSPECIFIED = 0,
    /** CHOICE_NO - CHOICE_NO defines a no voting choice. */
    CHOICE_NO = 1,
    /** CHOICE_YES - CHOICE_YES defines a yes voting choice. */
    CHOICE_YES = 2,
    /** CHOICE_ABSTAIN - CHOICE_ABSTAIN defines an abstaining voting choice. */
    CHOICE_ABSTAIN = 3,
    /** CHOICE_VETO - CHOICE_VETO defines a voting choice with veto. */
    CHOICE_VETO = 4,
    UNRECOGNIZED = -1
}
export declare const ChoiceSDKType: typeof Choice;
export declare const ChoiceAmino: typeof Choice;
export declare function choiceFromJSON(object: any): Choice;
export declare function choiceToJSON(object: Choice): string;
/** Status defines proposal statuses. */
export declare enum Proposal_Status {
    /** STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    STATUS_UNSPECIFIED = 0,
    /** STATUS_SUBMITTED - Initial status of a proposal when persisted. */
    STATUS_SUBMITTED = 1,
    /** STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
    STATUS_CLOSED = 2,
    /**
     * STATUS_ABORTED - Final status of a proposal when the group was modified before the final
     * tally.
     */
    STATUS_ABORTED = 3,
    UNRECOGNIZED = -1
}
export declare const Proposal_StatusSDKType: typeof Proposal_Status;
export declare const Proposal_StatusAmino: typeof Proposal_Status;
export declare function proposal_StatusFromJSON(object: any): Proposal_Status;
export declare function proposal_StatusToJSON(object: Proposal_Status): string;
/** Result defines types of proposal results. */
export declare enum Proposal_Result {
    /** RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
    RESULT_UNSPECIFIED = 0,
    /** RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
    RESULT_UNFINALIZED = 1,
    /** RESULT_ACCEPTED - Final result of the tally */
    RESULT_ACCEPTED = 2,
    /** RESULT_REJECTED - Final result of the tally */
    RESULT_REJECTED = 3,
    UNRECOGNIZED = -1
}
export declare const Proposal_ResultSDKType: typeof Proposal_Result;
export declare const Proposal_ResultAmino: typeof Proposal_Result;
export declare function proposal_ResultFromJSON(object: any): Proposal_Result;
export declare function proposal_ResultToJSON(object: Proposal_Result): string;
/** ExecutorResult defines types of proposal executor results. */
export declare enum Proposal_ExecutorResult {
    /** EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    EXECUTOR_RESULT_UNSPECIFIED = 0,
    /** EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    EXECUTOR_RESULT_NOT_RUN = 1,
    /** EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    EXECUTOR_RESULT_SUCCESS = 2,
    /** EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    EXECUTOR_RESULT_FAILURE = 3,
    UNRECOGNIZED = -1
}
export declare const Proposal_ExecutorResultSDKType: typeof Proposal_ExecutorResult;
export declare const Proposal_ExecutorResultAmino: typeof Proposal_ExecutorResult;
export declare function proposal_ExecutorResultFromJSON(object: any): Proposal_ExecutorResult;
export declare function proposal_ExecutorResultToJSON(object: Proposal_ExecutorResult): string;
/**
 * Member represents a group member with an account address,
 * non-zero weight and metadata.
 */
export interface Member {
    /** address is the member's account address. */
    address: string;
    /** weight is the member's voting weight that should be greater than 0. */
    weight: string;
    /** metadata is any arbitrary metadata to attached to the member. */
    metadata: Uint8Array;
}
export interface MemberProtoMsg {
    typeUrl: "/regen.group.v1alpha1.Member";
    value: Uint8Array;
}
/**
 * Member represents a group member with an account address,
 * non-zero weight and metadata.
 */
export interface MemberAmino {
    /** address is the member's account address. */
    address?: string;
    /** weight is the member's voting weight that should be greater than 0. */
    weight?: string;
    /** metadata is any arbitrary metadata to attached to the member. */
    metadata?: string;
}
export interface MemberAminoMsg {
    type: "/regen.group.v1alpha1.Member";
    value: MemberAmino;
}
/**
 * Member represents a group member with an account address,
 * non-zero weight and metadata.
 */
export interface MemberSDKType {
    address: string;
    weight: string;
    metadata: Uint8Array;
}
/** Members defines a repeated slice of Member objects. */
export interface Members {
    /** members is the list of members. */
    members: Member[];
}
export interface MembersProtoMsg {
    typeUrl: "/regen.group.v1alpha1.Members";
    value: Uint8Array;
}
/** Members defines a repeated slice of Member objects. */
export interface MembersAmino {
    /** members is the list of members. */
    members?: MemberAmino[];
}
export interface MembersAminoMsg {
    type: "/regen.group.v1alpha1.Members";
    value: MembersAmino;
}
/** Members defines a repeated slice of Member objects. */
export interface MembersSDKType {
    members: MemberSDKType[];
}
/** ThresholdDecisionPolicy implements the DecisionPolicy interface */
export interface ThresholdDecisionPolicy {
    $typeUrl?: "/regen.group.v1alpha1.ThresholdDecisionPolicy";
    /**
     * threshold is the minimum weighted sum of yes votes that must be met or
     * exceeded for a proposal to succeed.
     */
    threshold: string;
    /**
     * timeout is the duration from submission of a proposal to the end of voting
     * period Within this times votes and exec messages can be submitted.
     */
    timeout: Duration;
}
export interface ThresholdDecisionPolicyProtoMsg {
    typeUrl: "/regen.group.v1alpha1.ThresholdDecisionPolicy";
    value: Uint8Array;
}
/** ThresholdDecisionPolicy implements the DecisionPolicy interface */
export interface ThresholdDecisionPolicyAmino {
    /**
     * threshold is the minimum weighted sum of yes votes that must be met or
     * exceeded for a proposal to succeed.
     */
    threshold?: string;
    /**
     * timeout is the duration from submission of a proposal to the end of voting
     * period Within this times votes and exec messages can be submitted.
     */
    timeout?: DurationAmino;
}
export interface ThresholdDecisionPolicyAminoMsg {
    type: "/regen.group.v1alpha1.ThresholdDecisionPolicy";
    value: ThresholdDecisionPolicyAmino;
}
/** ThresholdDecisionPolicy implements the DecisionPolicy interface */
export interface ThresholdDecisionPolicySDKType {
    $typeUrl?: "/regen.group.v1alpha1.ThresholdDecisionPolicy";
    threshold: string;
    timeout: DurationSDKType;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfo {
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** admin is the account address of the group's admin. */
    admin: string;
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: Uint8Array;
    /**
     * version is used to track changes to a group's membership structure that
     * would break existing proposals. Whenever any members weight is changed,
     * or any member is added or removed this version is incremented and will
     * cause proposals based on older versions of this group to fail
     */
    version: bigint;
    /** total_weight is the sum of the group members' weights. */
    totalWeight: string;
}
export interface GroupInfoProtoMsg {
    typeUrl: "/regen.group.v1alpha1.GroupInfo";
    value: Uint8Array;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfoAmino {
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** admin is the account address of the group's admin. */
    admin?: string;
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata?: string;
    /**
     * version is used to track changes to a group's membership structure that
     * would break existing proposals. Whenever any members weight is changed,
     * or any member is added or removed this version is incremented and will
     * cause proposals based on older versions of this group to fail
     */
    version?: string;
    /** total_weight is the sum of the group members' weights. */
    total_weight?: string;
}
export interface GroupInfoAminoMsg {
    type: "/regen.group.v1alpha1.GroupInfo";
    value: GroupInfoAmino;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfoSDKType {
    group_id: bigint;
    admin: string;
    metadata: Uint8Array;
    version: bigint;
    total_weight: string;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMember {
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** member is the member data. */
    member?: Member;
}
export interface GroupMemberProtoMsg {
    typeUrl: "/regen.group.v1alpha1.GroupMember";
    value: Uint8Array;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMemberAmino {
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** member is the member data. */
    member?: MemberAmino;
}
export interface GroupMemberAminoMsg {
    type: "/regen.group.v1alpha1.GroupMember";
    value: GroupMemberAmino;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMemberSDKType {
    group_id: bigint;
    member?: MemberSDKType;
}
/**
 * GroupAccountInfo represents the high-level on-chain information for a group
 * account.
 */
export interface GroupAccountInfo {
    /** address is the group account address. */
    address: string;
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** admin is the account address of the group admin. */
    admin: string;
    /** metadata is any arbitrary metadata to attached to the group account. */
    metadata: Uint8Array;
    /**
     * version is used to track changes to a group's GroupAccountInfo structure
     * that would create a different result on a running proposal.
     */
    version: bigint;
    /** decision_policy specifies the group account's decision policy. */
    decisionPolicy?: (ThresholdDecisionPolicy & ThresholdDecisionPolicy1 & PercentageDecisionPolicy & Any) | undefined;
    /**
     * derivation_key is the "derivation" key of the group account,
     * which is needed to derive the group root module key and execute proposals.
     */
    derivationKey: Uint8Array;
}
export interface GroupAccountInfoProtoMsg {
    typeUrl: "/regen.group.v1alpha1.GroupAccountInfo";
    value: Uint8Array;
}
export type GroupAccountInfoEncoded = Omit<GroupAccountInfo, "decisionPolicy"> & {
    /** decision_policy specifies the group account's decision policy. */ decisionPolicy?: ThresholdDecisionPolicyProtoMsg | ThresholdDecisionPolicy1ProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/**
 * GroupAccountInfo represents the high-level on-chain information for a group
 * account.
 */
export interface GroupAccountInfoAmino {
    /** address is the group account address. */
    address?: string;
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** admin is the account address of the group admin. */
    admin?: string;
    /** metadata is any arbitrary metadata to attached to the group account. */
    metadata?: string;
    /**
     * version is used to track changes to a group's GroupAccountInfo structure
     * that would create a different result on a running proposal.
     */
    version?: string;
    /** decision_policy specifies the group account's decision policy. */
    decision_policy?: AnyAmino;
    /**
     * derivation_key is the "derivation" key of the group account,
     * which is needed to derive the group root module key and execute proposals.
     */
    derivation_key?: string;
}
export interface GroupAccountInfoAminoMsg {
    type: "/regen.group.v1alpha1.GroupAccountInfo";
    value: GroupAccountInfoAmino;
}
/**
 * GroupAccountInfo represents the high-level on-chain information for a group
 * account.
 */
export interface GroupAccountInfoSDKType {
    address: string;
    group_id: bigint;
    admin: string;
    metadata: Uint8Array;
    version: bigint;
    decision_policy?: ThresholdDecisionPolicySDKType | ThresholdDecisionPolicy1SDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
    derivation_key: Uint8Array;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a
 * proposal for a group account to decide upon. A proposal consists of a set of
 * `sdk.Msg`s that will be executed if the proposal passes as well as some
 * optional metadata associated with the proposal.
 */
export interface Proposal {
    /** proposal_id is the unique id of the proposal. */
    proposalId: bigint;
    /** address is the group account address. */
    address: string;
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: Uint8Array;
    /** proposers are the account addresses of the proposers. */
    proposers: string[];
    /** submitted_at is a timestamp specifying when a proposal was submitted. */
    submittedAt: Timestamp;
    /**
     * group_version tracks the version of the group that this proposal
     * corresponds to. When group membership is changed, existing proposals from
     * previous group versions will become invalid.
     */
    groupVersion: bigint;
    /**
     * group_account_version tracks the version of the group account that this
     * proposal corresponds to. When a decision policy is changed, existing
     * proposals from previous policy versions will become invalid.
     */
    groupAccountVersion: bigint;
    /**
     * Status represents the high level position in the life cycle of the
     * proposal. Initial value is Submitted.
     */
    status: Proposal_Status;
    /**
     * result is the final result based on the votes and election rule. Initial
     * value is unfinalized. The result is persisted so that clients can always
     * rely on this state and not have to replicate the logic.
     */
    result: Proposal_Result;
    /** vote_state contains the sums of all weighted votes for this proposal. */
    voteState: Tally;
    /**
     * timeout is the timestamp of the block where the proposal execution times
     * out. Header times of the votes and execution messages must be before this
     * end time to be included in the election. After the timeout timestamp the
     * proposal can not be executed anymore and should be considered pending
     * delete.
     */
    timeout: Timestamp;
    /**
     * executor_result is the final result based on the votes and election rule.
     * Initial value is NotRun.
     */
    executorResult: Proposal_ExecutorResult;
    /** msgs is a list of Msgs that will be executed if the proposal passes. */
    msgs: Any[];
}
export interface ProposalProtoMsg {
    typeUrl: "/regen.group.v1alpha1.Proposal";
    value: Uint8Array;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a
 * proposal for a group account to decide upon. A proposal consists of a set of
 * `sdk.Msg`s that will be executed if the proposal passes as well as some
 * optional metadata associated with the proposal.
 */
export interface ProposalAmino {
    /** proposal_id is the unique id of the proposal. */
    proposal_id?: string;
    /** address is the group account address. */
    address?: string;
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata?: string;
    /** proposers are the account addresses of the proposers. */
    proposers?: string[];
    /** submitted_at is a timestamp specifying when a proposal was submitted. */
    submitted_at?: string;
    /**
     * group_version tracks the version of the group that this proposal
     * corresponds to. When group membership is changed, existing proposals from
     * previous group versions will become invalid.
     */
    group_version?: string;
    /**
     * group_account_version tracks the version of the group account that this
     * proposal corresponds to. When a decision policy is changed, existing
     * proposals from previous policy versions will become invalid.
     */
    group_account_version?: string;
    /**
     * Status represents the high level position in the life cycle of the
     * proposal. Initial value is Submitted.
     */
    status?: Proposal_Status;
    /**
     * result is the final result based on the votes and election rule. Initial
     * value is unfinalized. The result is persisted so that clients can always
     * rely on this state and not have to replicate the logic.
     */
    result?: Proposal_Result;
    /** vote_state contains the sums of all weighted votes for this proposal. */
    vote_state?: TallyAmino;
    /**
     * timeout is the timestamp of the block where the proposal execution times
     * out. Header times of the votes and execution messages must be before this
     * end time to be included in the election. After the timeout timestamp the
     * proposal can not be executed anymore and should be considered pending
     * delete.
     */
    timeout?: string;
    /**
     * executor_result is the final result based on the votes and election rule.
     * Initial value is NotRun.
     */
    executor_result?: Proposal_ExecutorResult;
    /** msgs is a list of Msgs that will be executed if the proposal passes. */
    msgs?: AnyAmino[];
}
export interface ProposalAminoMsg {
    type: "/regen.group.v1alpha1.Proposal";
    value: ProposalAmino;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a
 * proposal for a group account to decide upon. A proposal consists of a set of
 * `sdk.Msg`s that will be executed if the proposal passes as well as some
 * optional metadata associated with the proposal.
 */
export interface ProposalSDKType {
    proposal_id: bigint;
    address: string;
    metadata: Uint8Array;
    proposers: string[];
    submitted_at: TimestampSDKType;
    group_version: bigint;
    group_account_version: bigint;
    status: Proposal_Status;
    result: Proposal_Result;
    vote_state: TallySDKType;
    timeout: TimestampSDKType;
    executor_result: Proposal_ExecutorResult;
    msgs: AnySDKType[];
}
/** Tally represents the sum of weighted votes. */
export interface Tally {
    /** yes_count is the weighted sum of yes votes. */
    yesCount: string;
    /** no_count is the weighted sum of no votes. */
    noCount: string;
    /** abstain_count is the weighted sum of abstainers */
    abstainCount: string;
    /** veto_count is the weighted sum of vetoes. */
    vetoCount: string;
}
export interface TallyProtoMsg {
    typeUrl: "/regen.group.v1alpha1.Tally";
    value: Uint8Array;
}
/** Tally represents the sum of weighted votes. */
export interface TallyAmino {
    /** yes_count is the weighted sum of yes votes. */
    yes_count?: string;
    /** no_count is the weighted sum of no votes. */
    no_count?: string;
    /** abstain_count is the weighted sum of abstainers */
    abstain_count?: string;
    /** veto_count is the weighted sum of vetoes. */
    veto_count?: string;
}
export interface TallyAminoMsg {
    type: "/regen.group.v1alpha1.Tally";
    value: TallyAmino;
}
/** Tally represents the sum of weighted votes. */
export interface TallySDKType {
    yes_count: string;
    no_count: string;
    abstain_count: string;
    veto_count: string;
}
/** Vote represents a vote for a proposal. */
export interface Vote {
    /** proposal is the unique ID of the proposal. */
    proposalId: bigint;
    /** voter is the account address of the voter. */
    voter: string;
    /** choice is the voter's choice on the proposal. */
    choice: Choice;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: Uint8Array;
    /** submitted_at is the timestamp when the vote was submitted. */
    submittedAt: Timestamp;
}
export interface VoteProtoMsg {
    typeUrl: "/regen.group.v1alpha1.Vote";
    value: Uint8Array;
}
/** Vote represents a vote for a proposal. */
export interface VoteAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id?: string;
    /** voter is the account address of the voter. */
    voter?: string;
    /** choice is the voter's choice on the proposal. */
    choice?: Choice;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata?: string;
    /** submitted_at is the timestamp when the vote was submitted. */
    submitted_at?: string;
}
export interface VoteAminoMsg {
    type: "/regen.group.v1alpha1.Vote";
    value: VoteAmino;
}
/** Vote represents a vote for a proposal. */
export interface VoteSDKType {
    proposal_id: bigint;
    voter: string;
    choice: Choice;
    metadata: Uint8Array;
    submitted_at: TimestampSDKType;
}
export declare const Member: {
    typeUrl: string;
    encode(message: Member, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Member;
    fromPartial(object: Partial<Member>): Member;
    fromAmino(object: MemberAmino): Member;
    toAmino(message: Member): MemberAmino;
    fromAminoMsg(object: MemberAminoMsg): Member;
    fromProtoMsg(message: MemberProtoMsg): Member;
    toProto(message: Member): Uint8Array;
    toProtoMsg(message: Member): MemberProtoMsg;
};
export declare const Members: {
    typeUrl: string;
    encode(message: Members, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Members;
    fromPartial(object: Partial<Members>): Members;
    fromAmino(object: MembersAmino): Members;
    toAmino(message: Members): MembersAmino;
    fromAminoMsg(object: MembersAminoMsg): Members;
    fromProtoMsg(message: MembersProtoMsg): Members;
    toProto(message: Members): Uint8Array;
    toProtoMsg(message: Members): MembersProtoMsg;
};
export declare const ThresholdDecisionPolicy: {
    typeUrl: string;
    encode(message: ThresholdDecisionPolicy, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ThresholdDecisionPolicy;
    fromPartial(object: Partial<ThresholdDecisionPolicy>): ThresholdDecisionPolicy;
    fromAmino(object: ThresholdDecisionPolicyAmino): ThresholdDecisionPolicy;
    toAmino(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyAmino;
    fromAminoMsg(object: ThresholdDecisionPolicyAminoMsg): ThresholdDecisionPolicy;
    fromProtoMsg(message: ThresholdDecisionPolicyProtoMsg): ThresholdDecisionPolicy;
    toProto(message: ThresholdDecisionPolicy): Uint8Array;
    toProtoMsg(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyProtoMsg;
};
export declare const GroupInfo: {
    typeUrl: string;
    encode(message: GroupInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GroupInfo;
    fromPartial(object: Partial<GroupInfo>): GroupInfo;
    fromAmino(object: GroupInfoAmino): GroupInfo;
    toAmino(message: GroupInfo): GroupInfoAmino;
    fromAminoMsg(object: GroupInfoAminoMsg): GroupInfo;
    fromProtoMsg(message: GroupInfoProtoMsg): GroupInfo;
    toProto(message: GroupInfo): Uint8Array;
    toProtoMsg(message: GroupInfo): GroupInfoProtoMsg;
};
export declare const GroupMember: {
    typeUrl: string;
    encode(message: GroupMember, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GroupMember;
    fromPartial(object: Partial<GroupMember>): GroupMember;
    fromAmino(object: GroupMemberAmino): GroupMember;
    toAmino(message: GroupMember): GroupMemberAmino;
    fromAminoMsg(object: GroupMemberAminoMsg): GroupMember;
    fromProtoMsg(message: GroupMemberProtoMsg): GroupMember;
    toProto(message: GroupMember): Uint8Array;
    toProtoMsg(message: GroupMember): GroupMemberProtoMsg;
};
export declare const GroupAccountInfo: {
    typeUrl: string;
    encode(message: GroupAccountInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GroupAccountInfo;
    fromPartial(object: Partial<GroupAccountInfo>): GroupAccountInfo;
    fromAmino(object: GroupAccountInfoAmino): GroupAccountInfo;
    toAmino(message: GroupAccountInfo): GroupAccountInfoAmino;
    fromAminoMsg(object: GroupAccountInfoAminoMsg): GroupAccountInfo;
    fromProtoMsg(message: GroupAccountInfoProtoMsg): GroupAccountInfo;
    toProto(message: GroupAccountInfo): Uint8Array;
    toProtoMsg(message: GroupAccountInfo): GroupAccountInfoProtoMsg;
};
export declare const Proposal: {
    typeUrl: string;
    encode(message: Proposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Proposal;
    fromPartial(object: Partial<Proposal>): Proposal;
    fromAmino(object: ProposalAmino): Proposal;
    toAmino(message: Proposal): ProposalAmino;
    fromAminoMsg(object: ProposalAminoMsg): Proposal;
    fromProtoMsg(message: ProposalProtoMsg): Proposal;
    toProto(message: Proposal): Uint8Array;
    toProtoMsg(message: Proposal): ProposalProtoMsg;
};
export declare const Tally: {
    typeUrl: string;
    encode(message: Tally, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Tally;
    fromPartial(object: Partial<Tally>): Tally;
    fromAmino(object: TallyAmino): Tally;
    toAmino(message: Tally): TallyAmino;
    fromAminoMsg(object: TallyAminoMsg): Tally;
    fromProtoMsg(message: TallyProtoMsg): Tally;
    toProto(message: Tally): Uint8Array;
    toProtoMsg(message: Tally): TallyProtoMsg;
};
export declare const Vote: {
    typeUrl: string;
    encode(message: Vote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Vote;
    fromPartial(object: Partial<Vote>): Vote;
    fromAmino(object: VoteAmino): Vote;
    toAmino(message: Vote): VoteAmino;
    fromAminoMsg(object: VoteAminoMsg): Vote;
    fromProtoMsg(message: VoteProtoMsg): Vote;
    toProto(message: Vote): Uint8Array;
    toProtoMsg(message: Vote): VoteProtoMsg;
};
export declare const DecisionPolicy_InterfaceDecoder: (input: BinaryReader | Uint8Array) => ThresholdDecisionPolicy | ThresholdDecisionPolicy1 | PercentageDecisionPolicy | Any;
export declare const DecisionPolicy_FromAmino: (content: AnyAmino) => Any;
export declare const DecisionPolicy_ToAmino: (content: Any) => AnyAmino;
