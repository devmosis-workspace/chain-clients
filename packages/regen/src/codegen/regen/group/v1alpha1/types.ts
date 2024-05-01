import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { PercentageDecisionPolicy, PercentageDecisionPolicyProtoMsg, PercentageDecisionPolicySDKType } from "../../../cosmos/group/v1/types";
import { ThresholdDecisionPolicy as ThresholdDecisionPolicy1 } from "../../../cosmos/group/v1/types";
import { ThresholdDecisionPolicyProtoMsg as ThresholdDecisionPolicy1ProtoMsg } from "../../../cosmos/group/v1/types";
import { ThresholdDecisionPolicySDKType as ThresholdDecisionPolicy1SDKType } from "../../../cosmos/group/v1/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp } from "../../../helpers";
/** Choice defines available types of choices for voting. */
export enum Choice {
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
  UNRECOGNIZED = -1,
}
export const ChoiceSDKType = Choice;
export const ChoiceAmino = Choice;
export function choiceFromJSON(object: any): Choice {
  switch (object) {
    case 0:
    case "CHOICE_UNSPECIFIED":
      return Choice.CHOICE_UNSPECIFIED;
    case 1:
    case "CHOICE_NO":
      return Choice.CHOICE_NO;
    case 2:
    case "CHOICE_YES":
      return Choice.CHOICE_YES;
    case 3:
    case "CHOICE_ABSTAIN":
      return Choice.CHOICE_ABSTAIN;
    case 4:
    case "CHOICE_VETO":
      return Choice.CHOICE_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Choice.UNRECOGNIZED;
  }
}
export function choiceToJSON(object: Choice): string {
  switch (object) {
    case Choice.CHOICE_UNSPECIFIED:
      return "CHOICE_UNSPECIFIED";
    case Choice.CHOICE_NO:
      return "CHOICE_NO";
    case Choice.CHOICE_YES:
      return "CHOICE_YES";
    case Choice.CHOICE_ABSTAIN:
      return "CHOICE_ABSTAIN";
    case Choice.CHOICE_VETO:
      return "CHOICE_VETO";
    case Choice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Status defines proposal statuses. */
export enum Proposal_Status {
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
  UNRECOGNIZED = -1,
}
export const Proposal_StatusSDKType = Proposal_Status;
export const Proposal_StatusAmino = Proposal_Status;
export function proposal_StatusFromJSON(object: any): Proposal_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Proposal_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_SUBMITTED":
      return Proposal_Status.STATUS_SUBMITTED;
    case 2:
    case "STATUS_CLOSED":
      return Proposal_Status.STATUS_CLOSED;
    case 3:
    case "STATUS_ABORTED":
      return Proposal_Status.STATUS_ABORTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Proposal_Status.UNRECOGNIZED;
  }
}
export function proposal_StatusToJSON(object: Proposal_Status): string {
  switch (object) {
    case Proposal_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Proposal_Status.STATUS_SUBMITTED:
      return "STATUS_SUBMITTED";
    case Proposal_Status.STATUS_CLOSED:
      return "STATUS_CLOSED";
    case Proposal_Status.STATUS_ABORTED:
      return "STATUS_ABORTED";
    case Proposal_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Result defines types of proposal results. */
export enum Proposal_Result {
  /** RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
  RESULT_UNSPECIFIED = 0,
  /** RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
  RESULT_UNFINALIZED = 1,
  /** RESULT_ACCEPTED - Final result of the tally */
  RESULT_ACCEPTED = 2,
  /** RESULT_REJECTED - Final result of the tally */
  RESULT_REJECTED = 3,
  UNRECOGNIZED = -1,
}
export const Proposal_ResultSDKType = Proposal_Result;
export const Proposal_ResultAmino = Proposal_Result;
export function proposal_ResultFromJSON(object: any): Proposal_Result {
  switch (object) {
    case 0:
    case "RESULT_UNSPECIFIED":
      return Proposal_Result.RESULT_UNSPECIFIED;
    case 1:
    case "RESULT_UNFINALIZED":
      return Proposal_Result.RESULT_UNFINALIZED;
    case 2:
    case "RESULT_ACCEPTED":
      return Proposal_Result.RESULT_ACCEPTED;
    case 3:
    case "RESULT_REJECTED":
      return Proposal_Result.RESULT_REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Proposal_Result.UNRECOGNIZED;
  }
}
export function proposal_ResultToJSON(object: Proposal_Result): string {
  switch (object) {
    case Proposal_Result.RESULT_UNSPECIFIED:
      return "RESULT_UNSPECIFIED";
    case Proposal_Result.RESULT_UNFINALIZED:
      return "RESULT_UNFINALIZED";
    case Proposal_Result.RESULT_ACCEPTED:
      return "RESULT_ACCEPTED";
    case Proposal_Result.RESULT_REJECTED:
      return "RESULT_REJECTED";
    case Proposal_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ExecutorResult defines types of proposal executor results. */
export enum Proposal_ExecutorResult {
  /** EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
  EXECUTOR_RESULT_UNSPECIFIED = 0,
  /** EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
  EXECUTOR_RESULT_NOT_RUN = 1,
  /** EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
  EXECUTOR_RESULT_SUCCESS = 2,
  /** EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
  EXECUTOR_RESULT_FAILURE = 3,
  UNRECOGNIZED = -1,
}
export const Proposal_ExecutorResultSDKType = Proposal_ExecutorResult;
export const Proposal_ExecutorResultAmino = Proposal_ExecutorResult;
export function proposal_ExecutorResultFromJSON(object: any): Proposal_ExecutorResult {
  switch (object) {
    case 0:
    case "EXECUTOR_RESULT_UNSPECIFIED":
      return Proposal_ExecutorResult.EXECUTOR_RESULT_UNSPECIFIED;
    case 1:
    case "EXECUTOR_RESULT_NOT_RUN":
      return Proposal_ExecutorResult.EXECUTOR_RESULT_NOT_RUN;
    case 2:
    case "EXECUTOR_RESULT_SUCCESS":
      return Proposal_ExecutorResult.EXECUTOR_RESULT_SUCCESS;
    case 3:
    case "EXECUTOR_RESULT_FAILURE":
      return Proposal_ExecutorResult.EXECUTOR_RESULT_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Proposal_ExecutorResult.UNRECOGNIZED;
  }
}
export function proposal_ExecutorResultToJSON(object: Proposal_ExecutorResult): string {
  switch (object) {
    case Proposal_ExecutorResult.EXECUTOR_RESULT_UNSPECIFIED:
      return "EXECUTOR_RESULT_UNSPECIFIED";
    case Proposal_ExecutorResult.EXECUTOR_RESULT_NOT_RUN:
      return "EXECUTOR_RESULT_NOT_RUN";
    case Proposal_ExecutorResult.EXECUTOR_RESULT_SUCCESS:
      return "EXECUTOR_RESULT_SUCCESS";
    case Proposal_ExecutorResult.EXECUTOR_RESULT_FAILURE:
      return "EXECUTOR_RESULT_FAILURE";
    case Proposal_ExecutorResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
  /** decision_policy specifies the group account's decision policy. */decisionPolicy?: ThresholdDecisionPolicyProtoMsg | ThresholdDecisionPolicy1ProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
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
function createBaseMember(): Member {
  return {
    address: "",
    weight: "",
    metadata: new Uint8Array()
  };
}
export const Member = {
  typeUrl: "/regen.group.v1alpha1.Member",
  encode(message: Member, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },
  fromJSON(object: any): Member {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Member>): Member {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MemberAmino): Member {
    const message = createBaseMember();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  toAmino(message: Member): MemberAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberAminoMsg): Member {
    return Member.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberProtoMsg): Member {
    return Member.decode(message.value);
  },
  toProto(message: Member): Uint8Array {
    return Member.encode(message).finish();
  },
  toProtoMsg(message: Member): MemberProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.Member",
      value: Member.encode(message).finish()
    };
  }
};
function createBaseMembers(): Members {
  return {
    members: []
  };
}
export const Members = {
  typeUrl: "/regen.group.v1alpha1.Members",
  encode(message: Members, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Members {
    return {
      members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Members>): Members {
    const message = createBaseMembers();
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MembersAmino): Members {
    const message = createBaseMembers();
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Members): MembersAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromAminoMsg(object: MembersAminoMsg): Members {
    return Members.fromAmino(object.value);
  },
  fromProtoMsg(message: MembersProtoMsg): Members {
    return Members.decode(message.value);
  },
  toProto(message: Members): Uint8Array {
    return Members.encode(message).finish();
  },
  toProtoMsg(message: Members): MembersProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.Members",
      value: Members.encode(message).finish()
    };
  }
};
function createBaseThresholdDecisionPolicy(): ThresholdDecisionPolicy {
  return {
    $typeUrl: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
    threshold: "",
    timeout: Duration.fromPartial({})
  };
}
export const ThresholdDecisionPolicy = {
  typeUrl: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
  encode(message: ThresholdDecisionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ThresholdDecisionPolicy {
    return {
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined
    };
  },
  fromPartial(object: Partial<ThresholdDecisionPolicy>): ThresholdDecisionPolicy {
    const message = createBaseThresholdDecisionPolicy();
    message.threshold = object.threshold ?? "";
    message.timeout = object.timeout !== undefined && object.timeout !== null ? Duration.fromPartial(object.timeout) : undefined;
    return message;
  },
  fromAmino(object: ThresholdDecisionPolicyAmino): ThresholdDecisionPolicy {
    const message = createBaseThresholdDecisionPolicy();
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = Duration.fromAmino(object.timeout);
    }
    return message;
  },
  toAmino(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyAmino {
    const obj: any = {};
    obj.threshold = message.threshold;
    obj.timeout = message.timeout ? Duration.toAmino(message.timeout) : undefined;
    return obj;
  },
  fromAminoMsg(object: ThresholdDecisionPolicyAminoMsg): ThresholdDecisionPolicy {
    return ThresholdDecisionPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: ThresholdDecisionPolicyProtoMsg): ThresholdDecisionPolicy {
    return ThresholdDecisionPolicy.decode(message.value);
  },
  toProto(message: ThresholdDecisionPolicy): Uint8Array {
    return ThresholdDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
      value: ThresholdDecisionPolicy.encode(message).finish()
    };
  }
};
function createBaseGroupInfo(): GroupInfo {
  return {
    groupId: BigInt(0),
    admin: "",
    metadata: new Uint8Array(),
    version: BigInt(0),
    totalWeight: ""
  };
}
export const GroupInfo = {
  typeUrl: "/regen.group.v1alpha1.GroupInfo",
  encode(message: GroupInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(32).uint64(message.version);
    }
    if (message.totalWeight !== "") {
      writer.uint32(42).string(message.totalWeight);
    }
    return writer;
  },
  fromJSON(object: any): GroupInfo {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : ""
    };
  },
  fromPartial(object: Partial<GroupInfo>): GroupInfo {
    const message = createBaseGroupInfo();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.totalWeight = object.totalWeight ?? "";
    return message;
  },
  fromAmino(object: GroupInfoAmino): GroupInfo {
    const message = createBaseGroupInfo();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    return message;
  },
  toAmino(message: GroupInfo): GroupInfoAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.admin = message.admin;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    obj.version = message.version ? message.version.toString() : undefined;
    obj.total_weight = message.totalWeight;
    return obj;
  },
  fromAminoMsg(object: GroupInfoAminoMsg): GroupInfo {
    return GroupInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupInfoProtoMsg): GroupInfo {
    return GroupInfo.decode(message.value);
  },
  toProto(message: GroupInfo): Uint8Array {
    return GroupInfo.encode(message).finish();
  },
  toProtoMsg(message: GroupInfo): GroupInfoProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.GroupInfo",
      value: GroupInfo.encode(message).finish()
    };
  }
};
function createBaseGroupMember(): GroupMember {
  return {
    groupId: BigInt(0),
    member: undefined
  };
}
export const GroupMember = {
  typeUrl: "/regen.group.v1alpha1.GroupMember",
  encode(message: GroupMember, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GroupMember {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined
    };
  },
  fromPartial(object: Partial<GroupMember>): GroupMember {
    const message = createBaseGroupMember();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.member = object.member !== undefined && object.member !== null ? Member.fromPartial(object.member) : undefined;
    return message;
  },
  fromAmino(object: GroupMemberAmino): GroupMember {
    const message = createBaseGroupMember();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = Member.fromAmino(object.member);
    }
    return message;
  },
  toAmino(message: GroupMember): GroupMemberAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.member = message.member ? Member.toAmino(message.member) : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupMemberAminoMsg): GroupMember {
    return GroupMember.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupMemberProtoMsg): GroupMember {
    return GroupMember.decode(message.value);
  },
  toProto(message: GroupMember): Uint8Array {
    return GroupMember.encode(message).finish();
  },
  toProtoMsg(message: GroupMember): GroupMemberProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.GroupMember",
      value: GroupMember.encode(message).finish()
    };
  }
};
function createBaseGroupAccountInfo(): GroupAccountInfo {
  return {
    address: "",
    groupId: BigInt(0),
    admin: "",
    metadata: new Uint8Array(),
    version: BigInt(0),
    decisionPolicy: undefined,
    derivationKey: new Uint8Array()
  };
}
export const GroupAccountInfo = {
  typeUrl: "/regen.group.v1alpha1.GroupAccountInfo",
  encode(message: GroupAccountInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(40).uint64(message.version);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode((message.decisionPolicy as Any), writer.uint32(50).fork()).ldelim();
    }
    if (message.derivationKey.length !== 0) {
      writer.uint32(58).bytes(message.derivationKey);
    }
    return writer;
  },
  fromJSON(object: any): GroupAccountInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined,
      derivationKey: isSet(object.derivationKey) ? bytesFromBase64(object.derivationKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<GroupAccountInfo>): GroupAccountInfo {
    const message = createBaseGroupAccountInfo();
    message.address = object.address ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    message.derivationKey = object.derivationKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: GroupAccountInfoAmino): GroupAccountInfo {
    const message = createBaseGroupAccountInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.decision_policy !== undefined && object.decision_policy !== null) {
      message.decisionPolicy = DecisionPolicy_FromAmino(object.decision_policy);
    }
    if (object.derivation_key !== undefined && object.derivation_key !== null) {
      message.derivationKey = bytesFromBase64(object.derivation_key);
    }
    return message;
  },
  toAmino(message: GroupAccountInfo): GroupAccountInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.admin = message.admin;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    obj.version = message.version ? message.version.toString() : undefined;
    obj.decision_policy = message.decisionPolicy ? DecisionPolicy_ToAmino((message.decisionPolicy as Any)) : undefined;
    obj.derivation_key = message.derivationKey ? base64FromBytes(message.derivationKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupAccountInfoAminoMsg): GroupAccountInfo {
    return GroupAccountInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupAccountInfoProtoMsg): GroupAccountInfo {
    return GroupAccountInfo.decode(message.value);
  },
  toProto(message: GroupAccountInfo): Uint8Array {
    return GroupAccountInfo.encode(message).finish();
  },
  toProtoMsg(message: GroupAccountInfo): GroupAccountInfoProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.GroupAccountInfo",
      value: GroupAccountInfo.encode(message).finish()
    };
  }
};
function createBaseProposal(): Proposal {
  return {
    proposalId: BigInt(0),
    address: "",
    metadata: new Uint8Array(),
    proposers: [],
    submittedAt: Timestamp.fromPartial({}),
    groupVersion: BigInt(0),
    groupAccountVersion: BigInt(0),
    status: 0,
    result: 0,
    voteState: Tally.fromPartial({}),
    timeout: Timestamp.fromPartial({}),
    executorResult: 0,
    msgs: []
  };
}
export const Proposal = {
  typeUrl: "/regen.group.v1alpha1.Proposal",
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    for (const v of message.proposers) {
      writer.uint32(34).string(v!);
    }
    if (message.submittedAt !== undefined) {
      Timestamp.encode(message.submittedAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.groupVersion !== BigInt(0)) {
      writer.uint32(48).uint64(message.groupVersion);
    }
    if (message.groupAccountVersion !== BigInt(0)) {
      writer.uint32(56).uint64(message.groupAccountVersion);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.result !== 0) {
      writer.uint32(72).int32(message.result);
    }
    if (message.voteState !== undefined) {
      Tally.encode(message.voteState, writer.uint32(82).fork()).ldelim();
    }
    if (message.timeout !== undefined) {
      Timestamp.encode(message.timeout, writer.uint32(90).fork()).ldelim();
    }
    if (message.executorResult !== 0) {
      writer.uint32(96).int32(message.executorResult);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Proposal {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => String(e)) : [],
      submittedAt: isSet(object.submittedAt) ? fromJsonTimestamp(object.submittedAt) : undefined,
      groupVersion: isSet(object.groupVersion) ? BigInt(object.groupVersion.toString()) : BigInt(0),
      groupAccountVersion: isSet(object.groupAccountVersion) ? BigInt(object.groupAccountVersion.toString()) : BigInt(0),
      status: isSet(object.status) ? proposal_StatusFromJSON(object.status) : -1,
      result: isSet(object.result) ? proposal_ResultFromJSON(object.result) : -1,
      voteState: isSet(object.voteState) ? Tally.fromJSON(object.voteState) : undefined,
      timeout: isSet(object.timeout) ? fromJsonTimestamp(object.timeout) : undefined,
      executorResult: isSet(object.executorResult) ? proposal_ExecutorResultFromJSON(object.executorResult) : -1,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    message.proposers = object.proposers?.map(e => e) || [];
    message.submittedAt = object.submittedAt !== undefined && object.submittedAt !== null ? Timestamp.fromPartial(object.submittedAt) : undefined;
    message.groupVersion = object.groupVersion !== undefined && object.groupVersion !== null ? BigInt(object.groupVersion.toString()) : BigInt(0);
    message.groupAccountVersion = object.groupAccountVersion !== undefined && object.groupAccountVersion !== null ? BigInt(object.groupAccountVersion.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.result = object.result ?? 0;
    message.voteState = object.voteState !== undefined && object.voteState !== null ? Tally.fromPartial(object.voteState) : undefined;
    message.timeout = object.timeout !== undefined && object.timeout !== null ? Timestamp.fromPartial(object.timeout) : undefined;
    message.executorResult = object.executorResult ?? 0;
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    message.proposers = object.proposers?.map(e => e) || [];
    if (object.submitted_at !== undefined && object.submitted_at !== null) {
      message.submittedAt = Timestamp.fromAmino(object.submitted_at);
    }
    if (object.group_version !== undefined && object.group_version !== null) {
      message.groupVersion = BigInt(object.group_version);
    }
    if (object.group_account_version !== undefined && object.group_account_version !== null) {
      message.groupAccountVersion = BigInt(object.group_account_version);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = proposal_StatusFromJSON(object.status);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = proposal_ResultFromJSON(object.result);
    }
    if (object.vote_state !== undefined && object.vote_state !== null) {
      message.voteState = Tally.fromAmino(object.vote_state);
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = Timestamp.fromAmino(object.timeout);
    }
    if (object.executor_result !== undefined && object.executor_result !== null) {
      message.executorResult = proposal_ExecutorResultFromJSON(object.executor_result);
    }
    message.msgs = object.msgs?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.address = message.address;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    obj.submitted_at = message.submittedAt ? Timestamp.toAmino(message.submittedAt) : undefined;
    obj.group_version = message.groupVersion ? message.groupVersion.toString() : undefined;
    obj.group_account_version = message.groupAccountVersion ? message.groupAccountVersion.toString() : undefined;
    obj.status = message.status;
    obj.result = message.result;
    obj.vote_state = message.voteState ? Tally.toAmino(message.voteState) : undefined;
    obj.timeout = message.timeout ? Timestamp.toAmino(message.timeout) : undefined;
    obj.executor_result = message.executorResult;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.msgs = [];
    }
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
      typeUrl: "/regen.group.v1alpha1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
function createBaseTally(): Tally {
  return {
    yesCount: "",
    noCount: "",
    abstainCount: "",
    vetoCount: ""
  };
}
export const Tally = {
  typeUrl: "/regen.group.v1alpha1.Tally",
  encode(message: Tally, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.noCount !== "") {
      writer.uint32(18).string(message.noCount);
    }
    if (message.abstainCount !== "") {
      writer.uint32(26).string(message.abstainCount);
    }
    if (message.vetoCount !== "") {
      writer.uint32(34).string(message.vetoCount);
    }
    return writer;
  },
  fromJSON(object: any): Tally {
    return {
      yesCount: isSet(object.yesCount) ? String(object.yesCount) : "",
      noCount: isSet(object.noCount) ? String(object.noCount) : "",
      abstainCount: isSet(object.abstainCount) ? String(object.abstainCount) : "",
      vetoCount: isSet(object.vetoCount) ? String(object.vetoCount) : ""
    };
  },
  fromPartial(object: Partial<Tally>): Tally {
    const message = createBaseTally();
    message.yesCount = object.yesCount ?? "";
    message.noCount = object.noCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.vetoCount = object.vetoCount ?? "";
    return message;
  },
  fromAmino(object: TallyAmino): Tally {
    const message = createBaseTally();
    if (object.yes_count !== undefined && object.yes_count !== null) {
      message.yesCount = object.yes_count;
    }
    if (object.no_count !== undefined && object.no_count !== null) {
      message.noCount = object.no_count;
    }
    if (object.abstain_count !== undefined && object.abstain_count !== null) {
      message.abstainCount = object.abstain_count;
    }
    if (object.veto_count !== undefined && object.veto_count !== null) {
      message.vetoCount = object.veto_count;
    }
    return message;
  },
  toAmino(message: Tally): TallyAmino {
    const obj: any = {};
    obj.yes_count = message.yesCount;
    obj.no_count = message.noCount;
    obj.abstain_count = message.abstainCount;
    obj.veto_count = message.vetoCount;
    return obj;
  },
  fromAminoMsg(object: TallyAminoMsg): Tally {
    return Tally.fromAmino(object.value);
  },
  fromProtoMsg(message: TallyProtoMsg): Tally {
    return Tally.decode(message.value);
  },
  toProto(message: Tally): Uint8Array {
    return Tally.encode(message).finish();
  },
  toProtoMsg(message: Tally): TallyProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.Tally",
      value: Tally.encode(message).finish()
    };
  }
};
function createBaseVote(): Vote {
  return {
    proposalId: BigInt(0),
    voter: "",
    choice: 0,
    metadata: new Uint8Array(),
    submittedAt: Timestamp.fromPartial({})
  };
}
export const Vote = {
  typeUrl: "/regen.group.v1alpha1.Vote",
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.choice !== 0) {
      writer.uint32(24).int32(message.choice);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
    }
    if (message.submittedAt !== undefined) {
      Timestamp.encode(message.submittedAt, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Vote {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      choice: isSet(object.choice) ? choiceFromJSON(object.choice) : -1,
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      submittedAt: isSet(object.submittedAt) ? fromJsonTimestamp(object.submittedAt) : undefined
    };
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.choice = object.choice ?? 0;
    message.metadata = object.metadata ?? new Uint8Array();
    message.submittedAt = object.submittedAt !== undefined && object.submittedAt !== null ? Timestamp.fromPartial(object.submittedAt) : undefined;
    return message;
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.choice !== undefined && object.choice !== null) {
      message.choice = choiceFromJSON(object.choice);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.submitted_at !== undefined && object.submitted_at !== null) {
      message.submittedAt = Timestamp.fromAmino(object.submitted_at);
    }
    return message;
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.choice = message.choice;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    obj.submitted_at = message.submittedAt ? Timestamp.toAmino(message.submittedAt) : undefined;
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
      typeUrl: "/regen.group.v1alpha1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
export const DecisionPolicy_InterfaceDecoder = (input: BinaryReader | Uint8Array): ThresholdDecisionPolicy | ThresholdDecisionPolicy1 | PercentageDecisionPolicy | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
      return ThresholdDecisionPolicy.decode(data.value);
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return ThresholdDecisionPolicy1.decode(data.value);
    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return PercentageDecisionPolicy.decode(data.value);
    default:
      return data;
  }
};
export const DecisionPolicy_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
      return Any.fromPartial({
        typeUrl: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy.encode(ThresholdDecisionPolicy.fromPartial(ThresholdDecisionPolicy.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/ThresholdDecisionPolicy":
      return Any.fromPartial({
        typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy1.encode(ThresholdDecisionPolicy1.fromPartial(ThresholdDecisionPolicy1.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/PercentageDecisionPolicy":
      return Any.fromPartial({
        typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
        value: PercentageDecisionPolicy.encode(PercentageDecisionPolicy.fromPartial(PercentageDecisionPolicy.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const DecisionPolicy_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
      return {
        type: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy.toAmino(ThresholdDecisionPolicy.decode(content.value, undefined))
      };
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return {
        type: "cosmos-sdk/ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy1.toAmino(ThresholdDecisionPolicy1.decode(content.value, undefined))
      };
    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return {
        type: "cosmos-sdk/PercentageDecisionPolicy",
        value: PercentageDecisionPolicy.toAmino(PercentageDecisionPolicy.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};