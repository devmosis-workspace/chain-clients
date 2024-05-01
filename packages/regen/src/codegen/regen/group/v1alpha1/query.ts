import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoAmino, GroupInfoSDKType, GroupAccountInfo, GroupAccountInfoAmino, GroupAccountInfoSDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
export interface QueryGroupInfoRequestProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupInfoRequest";
  value: Uint8Array;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
}
export interface QueryGroupInfoRequestAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupInfoRequest";
  value: QueryGroupInfoRequestAmino;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestSDKType {
  group_id: bigint;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
  /** info is the GroupInfo for the group. */
  info?: GroupInfo;
}
export interface QueryGroupInfoResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupInfoResponse";
  value: Uint8Array;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseAmino {
  /** info is the GroupInfo for the group. */
  info?: GroupInfoAmino;
}
export interface QueryGroupInfoResponseAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupInfoResponse";
  value: QueryGroupInfoResponseAmino;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseSDKType {
  info?: GroupInfoSDKType;
}
/** QueryGroupAccountInfoRequest is the Query/GroupAccountInfo request type. */
export interface QueryGroupAccountInfoRequest {
  /** address is the account address of the group account. */
  address: string;
}
export interface QueryGroupAccountInfoRequestProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoRequest";
  value: Uint8Array;
}
/** QueryGroupAccountInfoRequest is the Query/GroupAccountInfo request type. */
export interface QueryGroupAccountInfoRequestAmino {
  /** address is the account address of the group account. */
  address?: string;
}
export interface QueryGroupAccountInfoRequestAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupAccountInfoRequest";
  value: QueryGroupAccountInfoRequestAmino;
}
/** QueryGroupAccountInfoRequest is the Query/GroupAccountInfo request type. */
export interface QueryGroupAccountInfoRequestSDKType {
  address: string;
}
/** QueryGroupAccountInfoResponse is the Query/GroupAccountInfo response type. */
export interface QueryGroupAccountInfoResponse {
  /** info is the GroupAccountInfo for the group account. */
  info?: GroupAccountInfo;
}
export interface QueryGroupAccountInfoResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoResponse";
  value: Uint8Array;
}
/** QueryGroupAccountInfoResponse is the Query/GroupAccountInfo response type. */
export interface QueryGroupAccountInfoResponseAmino {
  /** info is the GroupAccountInfo for the group account. */
  info?: GroupAccountInfoAmino;
}
export interface QueryGroupAccountInfoResponseAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupAccountInfoResponse";
  value: QueryGroupAccountInfoResponseAmino;
}
/** QueryGroupAccountInfoResponse is the Query/GroupAccountInfo response type. */
export interface QueryGroupAccountInfoResponseSDKType {
  info?: GroupAccountInfoSDKType;
}
/** QueryGroupMembersRequest is the Query/GroupMembersRequest request type. */
export interface QueryGroupMembersRequest {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupMembersRequestProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupMembersRequest";
  value: Uint8Array;
}
/** QueryGroupMembersRequest is the Query/GroupMembersRequest request type. */
export interface QueryGroupMembersRequestAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupMembersRequestAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupMembersRequest";
  value: QueryGroupMembersRequestAmino;
}
/** QueryGroupMembersRequest is the Query/GroupMembersRequest request type. */
export interface QueryGroupMembersRequestSDKType {
  group_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
  /** members are the members of the group with given group_id. */
  members: GroupMember[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupMembersResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupMembersResponse";
  value: Uint8Array;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseAmino {
  /** members are the members of the group with given group_id. */
  members?: GroupMemberAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupMembersResponseAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupMembersResponse";
  value: QueryGroupMembersResponseAmino;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseSDKType {
  members: GroupMemberSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdminRequest request type. */
export interface QueryGroupsByAdminRequest {
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupsByAdminRequestProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminRequest";
  value: Uint8Array;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdminRequest request type. */
export interface QueryGroupsByAdminRequestAmino {
  /** admin is the account address of a group's admin. */
  admin?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupsByAdminRequestAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupsByAdminRequest";
  value: QueryGroupsByAdminRequestAmino;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdminRequest request type. */
export interface QueryGroupsByAdminRequestSDKType {
  admin: string;
  pagination?: PageRequestSDKType;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
  /** groups are the groups info with the provided admin. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupsByAdminResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminResponse";
  value: Uint8Array;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseAmino {
  /** groups are the groups info with the provided admin. */
  groups?: GroupInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupsByAdminResponseAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupsByAdminResponse";
  value: QueryGroupsByAdminResponseAmino;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseSDKType {
  groups: GroupInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryGroupAccountsByGroupRequest is the Query/GroupAccountsByGroup request
 * type.
 */
export interface QueryGroupAccountsByGroupRequest {
  /** group_id is the unique ID of the group account's group. */
  groupId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupAccountsByGroupRequestProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupRequest";
  value: Uint8Array;
}
/**
 * QueryGroupAccountsByGroupRequest is the Query/GroupAccountsByGroup request
 * type.
 */
export interface QueryGroupAccountsByGroupRequestAmino {
  /** group_id is the unique ID of the group account's group. */
  group_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupAccountsByGroupRequestAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupAccountsByGroupRequest";
  value: QueryGroupAccountsByGroupRequestAmino;
}
/**
 * QueryGroupAccountsByGroupRequest is the Query/GroupAccountsByGroup request
 * type.
 */
export interface QueryGroupAccountsByGroupRequestSDKType {
  group_id: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * QueryGroupAccountsByGroupResponse is the Query/GroupAccountsByGroup response
 * type.
 */
export interface QueryGroupAccountsByGroupResponse {
  /**
   * group_accounts are the group accounts info associated with the provided
   * group.
   */
  groupAccounts: GroupAccountInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupAccountsByGroupResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupResponse";
  value: Uint8Array;
}
/**
 * QueryGroupAccountsByGroupResponse is the Query/GroupAccountsByGroup response
 * type.
 */
export interface QueryGroupAccountsByGroupResponseAmino {
  /**
   * group_accounts are the group accounts info associated with the provided
   * group.
   */
  group_accounts?: GroupAccountInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupAccountsByGroupResponseAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupAccountsByGroupResponse";
  value: QueryGroupAccountsByGroupResponseAmino;
}
/**
 * QueryGroupAccountsByGroupResponse is the Query/GroupAccountsByGroup response
 * type.
 */
export interface QueryGroupAccountsByGroupResponseSDKType {
  group_accounts: GroupAccountInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryGroupAccountsByAdminRequest is the Query/GroupAccountsByAdmin request
 * type.
 */
export interface QueryGroupAccountsByAdminRequest {
  /** admin is the admin address of the group account. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupAccountsByAdminRequestProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminRequest";
  value: Uint8Array;
}
/**
 * QueryGroupAccountsByAdminRequest is the Query/GroupAccountsByAdmin request
 * type.
 */
export interface QueryGroupAccountsByAdminRequestAmino {
  /** admin is the admin address of the group account. */
  admin?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupAccountsByAdminRequestAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupAccountsByAdminRequest";
  value: QueryGroupAccountsByAdminRequestAmino;
}
/**
 * QueryGroupAccountsByAdminRequest is the Query/GroupAccountsByAdmin request
 * type.
 */
export interface QueryGroupAccountsByAdminRequestSDKType {
  admin: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryGroupAccountsByAdminResponse is the Query/GroupAccountsByAdmin response
 * type.
 */
export interface QueryGroupAccountsByAdminResponse {
  /** group_accounts are the group accounts info with provided admin. */
  groupAccounts: GroupAccountInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupAccountsByAdminResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminResponse";
  value: Uint8Array;
}
/**
 * QueryGroupAccountsByAdminResponse is the Query/GroupAccountsByAdmin response
 * type.
 */
export interface QueryGroupAccountsByAdminResponseAmino {
  /** group_accounts are the group accounts info with provided admin. */
  group_accounts?: GroupAccountInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupAccountsByAdminResponseAminoMsg {
  type: "/regen.group.v1alpha1.QueryGroupAccountsByAdminResponse";
  value: QueryGroupAccountsByAdminResponseAmino;
}
/**
 * QueryGroupAccountsByAdminResponse is the Query/GroupAccountsByAdmin response
 * type.
 */
export interface QueryGroupAccountsByAdminResponseSDKType {
  group_accounts: GroupAccountInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
}
export interface QueryProposalRequestProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryProposalRequest";
  value: Uint8Array;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id?: string;
}
export interface QueryProposalRequestAminoMsg {
  type: "/regen.group.v1alpha1.QueryProposalRequest";
  value: QueryProposalRequestAmino;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestSDKType {
  proposal_id: bigint;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
  /** proposal is the proposal info. */
  proposal?: Proposal;
}
export interface QueryProposalResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryProposalResponse";
  value: Uint8Array;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseAmino {
  /** proposal is the proposal info. */
  proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
  type: "/regen.group.v1alpha1.QueryProposalResponse";
  value: QueryProposalResponseAmino;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseSDKType {
  proposal?: ProposalSDKType;
}
/**
 * QueryProposalsByGroupAccountRequest is the Query/ProposalByGroupAccount
 * request type.
 */
export interface QueryProposalsByGroupAccountRequest {
  /** address is the group account address related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryProposalsByGroupAccountRequestProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountRequest";
  value: Uint8Array;
}
/**
 * QueryProposalsByGroupAccountRequest is the Query/ProposalByGroupAccount
 * request type.
 */
export interface QueryProposalsByGroupAccountRequestAmino {
  /** address is the group account address related to proposals. */
  address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryProposalsByGroupAccountRequestAminoMsg {
  type: "/regen.group.v1alpha1.QueryProposalsByGroupAccountRequest";
  value: QueryProposalsByGroupAccountRequestAmino;
}
/**
 * QueryProposalsByGroupAccountRequest is the Query/ProposalByGroupAccount
 * request type.
 */
export interface QueryProposalsByGroupAccountRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryProposalsByGroupAccountResponse is the Query/ProposalByGroupAccount
 * response type.
 */
export interface QueryProposalsByGroupAccountResponse {
  /** proposals are the proposals with given group account. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryProposalsByGroupAccountResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountResponse";
  value: Uint8Array;
}
/**
 * QueryProposalsByGroupAccountResponse is the Query/ProposalByGroupAccount
 * response type.
 */
export interface QueryProposalsByGroupAccountResponseAmino {
  /** proposals are the proposals with given group account. */
  proposals?: ProposalAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryProposalsByGroupAccountResponseAminoMsg {
  type: "/regen.group.v1alpha1.QueryProposalsByGroupAccountResponse";
  value: QueryProposalsByGroupAccountResponseAmino;
}
/**
 * QueryProposalsByGroupAccountResponse is the Query/ProposalByGroupAccount
 * response type.
 */
export interface QueryProposalsByGroupAccountResponseSDKType {
  proposals: ProposalSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter request
 * type.
 */
export interface QueryVoteByProposalVoterRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
  /** voter is a proposal voter account address. */
  voter: string;
}
export interface QueryVoteByProposalVoterRequestProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterRequest";
  value: Uint8Array;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter request
 * type.
 */
export interface QueryVoteByProposalVoterRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id?: string;
  /** voter is a proposal voter account address. */
  voter?: string;
}
export interface QueryVoteByProposalVoterRequestAminoMsg {
  type: "/regen.group.v1alpha1.QueryVoteByProposalVoterRequest";
  value: QueryVoteByProposalVoterRequestAmino;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter request
 * type.
 */
export interface QueryVoteByProposalVoterRequestSDKType {
  proposal_id: bigint;
  voter: string;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response
 * type.
 */
export interface QueryVoteByProposalVoterResponse {
  /** vote is the vote with given proposal_id and voter. */
  vote?: Vote;
}
export interface QueryVoteByProposalVoterResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterResponse";
  value: Uint8Array;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response
 * type.
 */
export interface QueryVoteByProposalVoterResponseAmino {
  /** vote is the vote with given proposal_id and voter. */
  vote?: VoteAmino;
}
export interface QueryVoteByProposalVoterResponseAminoMsg {
  type: "/regen.group.v1alpha1.QueryVoteByProposalVoterResponse";
  value: QueryVoteByProposalVoterResponseAmino;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response
 * type.
 */
export interface QueryVoteByProposalVoterResponseSDKType {
  vote?: VoteSDKType;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryVotesByProposalRequestProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalRequest";
  value: Uint8Array;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVotesByProposalRequestAminoMsg {
  type: "/regen.group.v1alpha1.QueryVotesByProposalRequest";
  value: QueryVotesByProposalRequestAmino;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestSDKType {
  proposal_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
  /** votes are the list of votes for given proposal_id. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVotesByProposalResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalResponse";
  value: Uint8Array;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseAmino {
  /** votes are the list of votes for given proposal_id. */
  votes?: VoteAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesByProposalResponseAminoMsg {
  type: "/regen.group.v1alpha1.QueryVotesByProposalResponse";
  value: QueryVotesByProposalResponseAmino;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseSDKType {
  votes: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryVotesByVoterRequestProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterRequest";
  value: Uint8Array;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestAmino {
  /** voter is a proposal voter account address. */
  voter?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVotesByVoterRequestAminoMsg {
  type: "/regen.group.v1alpha1.QueryVotesByVoterRequest";
  value: QueryVotesByVoterRequestAmino;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestSDKType {
  voter: string;
  pagination?: PageRequestSDKType;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
  /** votes are the list of votes by given voter. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVotesByVoterResponseProtoMsg {
  typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterResponse";
  value: Uint8Array;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseAmino {
  /** votes are the list of votes by given voter. */
  votes?: VoteAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesByVoterResponseAminoMsg {
  type: "/regen.group.v1alpha1.QueryVotesByVoterResponse";
  value: QueryVotesByVoterResponseAmino;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseSDKType {
  votes: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryGroupInfoRequest(): QueryGroupInfoRequest {
  return {
    groupId: BigInt(0)
  };
}
export const QueryGroupInfoRequest = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupInfoRequest",
  encode(message: QueryGroupInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupInfoRequest {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGroupInfoRequest>): QueryGroupInfoRequest {
    const message = createBaseQueryGroupInfoRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGroupInfoRequestAmino): QueryGroupInfoRequest {
    const message = createBaseQueryGroupInfoRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: QueryGroupInfoRequest): QueryGroupInfoRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupInfoRequestAminoMsg): QueryGroupInfoRequest {
    return QueryGroupInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupInfoRequestProtoMsg): QueryGroupInfoRequest {
    return QueryGroupInfoRequest.decode(message.value);
  },
  toProto(message: QueryGroupInfoRequest): Uint8Array {
    return QueryGroupInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupInfoRequest): QueryGroupInfoRequestProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupInfoRequest",
      value: QueryGroupInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupInfoResponse(): QueryGroupInfoResponse {
  return {
    info: undefined
  };
}
export const QueryGroupInfoResponse = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupInfoResponse",
  encode(message: QueryGroupInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupInfoResponse {
    return {
      info: isSet(object.info) ? GroupInfo.fromJSON(object.info) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupInfoResponse>): QueryGroupInfoResponse {
    const message = createBaseQueryGroupInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? GroupInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupInfoResponseAmino): QueryGroupInfoResponse {
    const message = createBaseQueryGroupInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryGroupInfoResponse): QueryGroupInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? GroupInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupInfoResponseAminoMsg): QueryGroupInfoResponse {
    return QueryGroupInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupInfoResponseProtoMsg): QueryGroupInfoResponse {
    return QueryGroupInfoResponse.decode(message.value);
  },
  toProto(message: QueryGroupInfoResponse): Uint8Array {
    return QueryGroupInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupInfoResponse): QueryGroupInfoResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupInfoResponse",
      value: QueryGroupInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupAccountInfoRequest(): QueryGroupAccountInfoRequest {
  return {
    address: ""
  };
}
export const QueryGroupAccountInfoRequest = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoRequest",
  encode(message: QueryGroupAccountInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupAccountInfoRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryGroupAccountInfoRequest>): QueryGroupAccountInfoRequest {
    const message = createBaseQueryGroupAccountInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGroupAccountInfoRequestAmino): QueryGroupAccountInfoRequest {
    const message = createBaseQueryGroupAccountInfoRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGroupAccountInfoRequest): QueryGroupAccountInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGroupAccountInfoRequestAminoMsg): QueryGroupAccountInfoRequest {
    return QueryGroupAccountInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupAccountInfoRequestProtoMsg): QueryGroupAccountInfoRequest {
    return QueryGroupAccountInfoRequest.decode(message.value);
  },
  toProto(message: QueryGroupAccountInfoRequest): Uint8Array {
    return QueryGroupAccountInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupAccountInfoRequest): QueryGroupAccountInfoRequestProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoRequest",
      value: QueryGroupAccountInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupAccountInfoResponse(): QueryGroupAccountInfoResponse {
  return {
    info: undefined
  };
}
export const QueryGroupAccountInfoResponse = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoResponse",
  encode(message: QueryGroupAccountInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      GroupAccountInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupAccountInfoResponse {
    return {
      info: isSet(object.info) ? GroupAccountInfo.fromJSON(object.info) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupAccountInfoResponse>): QueryGroupAccountInfoResponse {
    const message = createBaseQueryGroupAccountInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? GroupAccountInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupAccountInfoResponseAmino): QueryGroupAccountInfoResponse {
    const message = createBaseQueryGroupAccountInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupAccountInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryGroupAccountInfoResponse): QueryGroupAccountInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? GroupAccountInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupAccountInfoResponseAminoMsg): QueryGroupAccountInfoResponse {
    return QueryGroupAccountInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupAccountInfoResponseProtoMsg): QueryGroupAccountInfoResponse {
    return QueryGroupAccountInfoResponse.decode(message.value);
  },
  toProto(message: QueryGroupAccountInfoResponse): Uint8Array {
    return QueryGroupAccountInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupAccountInfoResponse): QueryGroupAccountInfoResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoResponse",
      value: QueryGroupAccountInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupMembersRequest(): QueryGroupMembersRequest {
  return {
    groupId: BigInt(0),
    pagination: undefined
  };
}
export const QueryGroupMembersRequest = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupMembersRequest",
  encode(message: QueryGroupMembersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupMembersRequest {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupMembersRequest>): QueryGroupMembersRequest {
    const message = createBaseQueryGroupMembersRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupMembersRequestAmino): QueryGroupMembersRequest {
    const message = createBaseQueryGroupMembersRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupMembersRequest): QueryGroupMembersRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupMembersRequestAminoMsg): QueryGroupMembersRequest {
    return QueryGroupMembersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupMembersRequestProtoMsg): QueryGroupMembersRequest {
    return QueryGroupMembersRequest.decode(message.value);
  },
  toProto(message: QueryGroupMembersRequest): Uint8Array {
    return QueryGroupMembersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupMembersRequest): QueryGroupMembersRequestProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupMembersRequest",
      value: QueryGroupMembersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupMembersResponse(): QueryGroupMembersResponse {
  return {
    members: [],
    pagination: undefined
  };
}
export const QueryGroupMembersResponse = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupMembersResponse",
  encode(message: QueryGroupMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.members) {
      GroupMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupMembersResponse {
    return {
      members: Array.isArray(object?.members) ? object.members.map((e: any) => GroupMember.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupMembersResponse>): QueryGroupMembersResponse {
    const message = createBaseQueryGroupMembersResponse();
    message.members = object.members?.map(e => GroupMember.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupMembersResponseAmino): QueryGroupMembersResponse {
    const message = createBaseQueryGroupMembersResponse();
    message.members = object.members?.map(e => GroupMember.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupMembersResponse): QueryGroupMembersResponseAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? GroupMember.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupMembersResponseAminoMsg): QueryGroupMembersResponse {
    return QueryGroupMembersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupMembersResponseProtoMsg): QueryGroupMembersResponse {
    return QueryGroupMembersResponse.decode(message.value);
  },
  toProto(message: QueryGroupMembersResponse): Uint8Array {
    return QueryGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupMembersResponse): QueryGroupMembersResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupMembersResponse",
      value: QueryGroupMembersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByAdminRequest(): QueryGroupsByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryGroupsByAdminRequest = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminRequest",
  encode(message: QueryGroupsByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupsByAdminRequest {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupsByAdminRequest>): QueryGroupsByAdminRequest {
    const message = createBaseQueryGroupsByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupsByAdminRequestAmino): QueryGroupsByAdminRequest {
    const message = createBaseQueryGroupsByAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByAdminRequestAminoMsg): QueryGroupsByAdminRequest {
    return QueryGroupsByAdminRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupsByAdminRequestProtoMsg): QueryGroupsByAdminRequest {
    return QueryGroupsByAdminRequest.decode(message.value);
  },
  toProto(message: QueryGroupsByAdminRequest): Uint8Array {
    return QueryGroupsByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminRequest",
      value: QueryGroupsByAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByAdminResponse(): QueryGroupsByAdminResponse {
  return {
    groups: [],
    pagination: undefined
  };
}
export const QueryGroupsByAdminResponse = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminResponse",
  encode(message: QueryGroupsByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupsByAdminResponse {
    return {
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupsByAdminResponse>): QueryGroupsByAdminResponse {
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupsByAdminResponseAmino): QueryGroupsByAdminResponse {
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
    } else {
      obj.groups = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByAdminResponseAminoMsg): QueryGroupsByAdminResponse {
    return QueryGroupsByAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupsByAdminResponseProtoMsg): QueryGroupsByAdminResponse {
    return QueryGroupsByAdminResponse.decode(message.value);
  },
  toProto(message: QueryGroupsByAdminResponse): Uint8Array {
    return QueryGroupsByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminResponse",
      value: QueryGroupsByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupAccountsByGroupRequest(): QueryGroupAccountsByGroupRequest {
  return {
    groupId: BigInt(0),
    pagination: undefined
  };
}
export const QueryGroupAccountsByGroupRequest = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupRequest",
  encode(message: QueryGroupAccountsByGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupAccountsByGroupRequest {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupAccountsByGroupRequest>): QueryGroupAccountsByGroupRequest {
    const message = createBaseQueryGroupAccountsByGroupRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupAccountsByGroupRequestAmino): QueryGroupAccountsByGroupRequest {
    const message = createBaseQueryGroupAccountsByGroupRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupAccountsByGroupRequest): QueryGroupAccountsByGroupRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupAccountsByGroupRequestAminoMsg): QueryGroupAccountsByGroupRequest {
    return QueryGroupAccountsByGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupAccountsByGroupRequestProtoMsg): QueryGroupAccountsByGroupRequest {
    return QueryGroupAccountsByGroupRequest.decode(message.value);
  },
  toProto(message: QueryGroupAccountsByGroupRequest): Uint8Array {
    return QueryGroupAccountsByGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupAccountsByGroupRequest): QueryGroupAccountsByGroupRequestProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupRequest",
      value: QueryGroupAccountsByGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupAccountsByGroupResponse(): QueryGroupAccountsByGroupResponse {
  return {
    groupAccounts: [],
    pagination: undefined
  };
}
export const QueryGroupAccountsByGroupResponse = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupResponse",
  encode(message: QueryGroupAccountsByGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groupAccounts) {
      GroupAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupAccountsByGroupResponse {
    return {
      groupAccounts: Array.isArray(object?.groupAccounts) ? object.groupAccounts.map((e: any) => GroupAccountInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupAccountsByGroupResponse>): QueryGroupAccountsByGroupResponse {
    const message = createBaseQueryGroupAccountsByGroupResponse();
    message.groupAccounts = object.groupAccounts?.map(e => GroupAccountInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupAccountsByGroupResponseAmino): QueryGroupAccountsByGroupResponse {
    const message = createBaseQueryGroupAccountsByGroupResponse();
    message.groupAccounts = object.group_accounts?.map(e => GroupAccountInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupAccountsByGroupResponse): QueryGroupAccountsByGroupResponseAmino {
    const obj: any = {};
    if (message.groupAccounts) {
      obj.group_accounts = message.groupAccounts.map(e => e ? GroupAccountInfo.toAmino(e) : undefined);
    } else {
      obj.group_accounts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupAccountsByGroupResponseAminoMsg): QueryGroupAccountsByGroupResponse {
    return QueryGroupAccountsByGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupAccountsByGroupResponseProtoMsg): QueryGroupAccountsByGroupResponse {
    return QueryGroupAccountsByGroupResponse.decode(message.value);
  },
  toProto(message: QueryGroupAccountsByGroupResponse): Uint8Array {
    return QueryGroupAccountsByGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupAccountsByGroupResponse): QueryGroupAccountsByGroupResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupResponse",
      value: QueryGroupAccountsByGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupAccountsByAdminRequest(): QueryGroupAccountsByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryGroupAccountsByAdminRequest = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminRequest",
  encode(message: QueryGroupAccountsByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupAccountsByAdminRequest {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupAccountsByAdminRequest>): QueryGroupAccountsByAdminRequest {
    const message = createBaseQueryGroupAccountsByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupAccountsByAdminRequestAmino): QueryGroupAccountsByAdminRequest {
    const message = createBaseQueryGroupAccountsByAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupAccountsByAdminRequest): QueryGroupAccountsByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupAccountsByAdminRequestAminoMsg): QueryGroupAccountsByAdminRequest {
    return QueryGroupAccountsByAdminRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupAccountsByAdminRequestProtoMsg): QueryGroupAccountsByAdminRequest {
    return QueryGroupAccountsByAdminRequest.decode(message.value);
  },
  toProto(message: QueryGroupAccountsByAdminRequest): Uint8Array {
    return QueryGroupAccountsByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupAccountsByAdminRequest): QueryGroupAccountsByAdminRequestProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminRequest",
      value: QueryGroupAccountsByAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupAccountsByAdminResponse(): QueryGroupAccountsByAdminResponse {
  return {
    groupAccounts: [],
    pagination: undefined
  };
}
export const QueryGroupAccountsByAdminResponse = {
  typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminResponse",
  encode(message: QueryGroupAccountsByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groupAccounts) {
      GroupAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGroupAccountsByAdminResponse {
    return {
      groupAccounts: Array.isArray(object?.groupAccounts) ? object.groupAccounts.map((e: any) => GroupAccountInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryGroupAccountsByAdminResponse>): QueryGroupAccountsByAdminResponse {
    const message = createBaseQueryGroupAccountsByAdminResponse();
    message.groupAccounts = object.groupAccounts?.map(e => GroupAccountInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupAccountsByAdminResponseAmino): QueryGroupAccountsByAdminResponse {
    const message = createBaseQueryGroupAccountsByAdminResponse();
    message.groupAccounts = object.group_accounts?.map(e => GroupAccountInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupAccountsByAdminResponse): QueryGroupAccountsByAdminResponseAmino {
    const obj: any = {};
    if (message.groupAccounts) {
      obj.group_accounts = message.groupAccounts.map(e => e ? GroupAccountInfo.toAmino(e) : undefined);
    } else {
      obj.group_accounts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupAccountsByAdminResponseAminoMsg): QueryGroupAccountsByAdminResponse {
    return QueryGroupAccountsByAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupAccountsByAdminResponseProtoMsg): QueryGroupAccountsByAdminResponse {
    return QueryGroupAccountsByAdminResponse.decode(message.value);
  },
  toProto(message: QueryGroupAccountsByAdminResponse): Uint8Array {
    return QueryGroupAccountsByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupAccountsByAdminResponse): QueryGroupAccountsByAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminResponse",
      value: QueryGroupAccountsByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryProposalRequest = {
  typeUrl: "/regen.group.v1alpha1.QueryProposalRequest",
  encode(message: QueryProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  fromJSON(object: any): QueryProposalRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryProposalRequest): QueryProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest {
    return QueryProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest {
    return QueryProposalRequest.decode(message.value);
  },
  toProto(message: QueryProposalRequest): Uint8Array {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}
export const QueryProposalResponse = {
  typeUrl: "/regen.group.v1alpha1.QueryProposalResponse",
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: QueryProposalResponse): QueryProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse {
    return QueryProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse {
    return QueryProposalResponse.decode(message.value);
  },
  toProto(message: QueryProposalResponse): Uint8Array {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByGroupAccountRequest(): QueryProposalsByGroupAccountRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryProposalsByGroupAccountRequest = {
  typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountRequest",
  encode(message: QueryProposalsByGroupAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProposalsByGroupAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryProposalsByGroupAccountRequest>): QueryProposalsByGroupAccountRequest {
    const message = createBaseQueryProposalsByGroupAccountRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsByGroupAccountRequestAmino): QueryProposalsByGroupAccountRequest {
    const message = createBaseQueryProposalsByGroupAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsByGroupAccountRequest): QueryProposalsByGroupAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByGroupAccountRequestAminoMsg): QueryProposalsByGroupAccountRequest {
    return QueryProposalsByGroupAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsByGroupAccountRequestProtoMsg): QueryProposalsByGroupAccountRequest {
    return QueryProposalsByGroupAccountRequest.decode(message.value);
  },
  toProto(message: QueryProposalsByGroupAccountRequest): Uint8Array {
    return QueryProposalsByGroupAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByGroupAccountRequest): QueryProposalsByGroupAccountRequestProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountRequest",
      value: QueryProposalsByGroupAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByGroupAccountResponse(): QueryProposalsByGroupAccountResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
export const QueryProposalsByGroupAccountResponse = {
  typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountResponse",
  encode(message: QueryProposalsByGroupAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProposalsByGroupAccountResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryProposalsByGroupAccountResponse>): QueryProposalsByGroupAccountResponse {
    const message = createBaseQueryProposalsByGroupAccountResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsByGroupAccountResponseAmino): QueryProposalsByGroupAccountResponse {
    const message = createBaseQueryProposalsByGroupAccountResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsByGroupAccountResponse): QueryProposalsByGroupAccountResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByGroupAccountResponseAminoMsg): QueryProposalsByGroupAccountResponse {
    return QueryProposalsByGroupAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsByGroupAccountResponseProtoMsg): QueryProposalsByGroupAccountResponse {
    return QueryProposalsByGroupAccountResponse.decode(message.value);
  },
  toProto(message: QueryProposalsByGroupAccountResponse): Uint8Array {
    return QueryProposalsByGroupAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByGroupAccountResponse): QueryProposalsByGroupAccountResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountResponse",
      value: QueryProposalsByGroupAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteByProposalVoterRequest(): QueryVoteByProposalVoterRequest {
  return {
    proposalId: BigInt(0),
    voter: ""
  };
}
export const QueryVoteByProposalVoterRequest = {
  typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterRequest",
  encode(message: QueryVoteByProposalVoterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  fromJSON(object: any): QueryVoteByProposalVoterRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },
  fromPartial(object: Partial<QueryVoteByProposalVoterRequest>): QueryVoteByProposalVoterRequest {
    const message = createBaseQueryVoteByProposalVoterRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: QueryVoteByProposalVoterRequestAmino): QueryVoteByProposalVoterRequest {
    const message = createBaseQueryVoteByProposalVoterRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryVoteByProposalVoterRequestAminoMsg): QueryVoteByProposalVoterRequest {
    return QueryVoteByProposalVoterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteByProposalVoterRequestProtoMsg): QueryVoteByProposalVoterRequest {
    return QueryVoteByProposalVoterRequest.decode(message.value);
  },
  toProto(message: QueryVoteByProposalVoterRequest): Uint8Array {
    return QueryVoteByProposalVoterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterRequest",
      value: QueryVoteByProposalVoterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteByProposalVoterResponse(): QueryVoteByProposalVoterResponse {
  return {
    vote: undefined
  };
}
export const QueryVoteByProposalVoterResponse = {
  typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterResponse",
  encode(message: QueryVoteByProposalVoterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVoteByProposalVoterResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
    };
  },
  fromPartial(object: Partial<QueryVoteByProposalVoterResponse>): QueryVoteByProposalVoterResponse {
    const message = createBaseQueryVoteByProposalVoterResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
  fromAmino(object: QueryVoteByProposalVoterResponseAmino): QueryVoteByProposalVoterResponse {
    const message = createBaseQueryVoteByProposalVoterResponse();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteByProposalVoterResponseAminoMsg): QueryVoteByProposalVoterResponse {
    return QueryVoteByProposalVoterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteByProposalVoterResponseProtoMsg): QueryVoteByProposalVoterResponse {
    return QueryVoteByProposalVoterResponse.decode(message.value);
  },
  toProto(message: QueryVoteByProposalVoterResponse): Uint8Array {
    return QueryVoteByProposalVoterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterResponse",
      value: QueryVoteByProposalVoterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByProposalRequest(): QueryVotesByProposalRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined
  };
}
export const QueryVotesByProposalRequest = {
  typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalRequest",
  encode(message: QueryVotesByProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVotesByProposalRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryVotesByProposalRequest>): QueryVotesByProposalRequest {
    const message = createBaseQueryVotesByProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesByProposalRequestAmino): QueryVotesByProposalRequest {
    const message = createBaseQueryVotesByProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByProposalRequestAminoMsg): QueryVotesByProposalRequest {
    return QueryVotesByProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesByProposalRequestProtoMsg): QueryVotesByProposalRequest {
    return QueryVotesByProposalRequest.decode(message.value);
  },
  toProto(message: QueryVotesByProposalRequest): Uint8Array {
    return QueryVotesByProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalRequest",
      value: QueryVotesByProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByProposalResponse(): QueryVotesByProposalResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesByProposalResponse = {
  typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalResponse",
  encode(message: QueryVotesByProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVotesByProposalResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryVotesByProposalResponse>): QueryVotesByProposalResponse {
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesByProposalResponseAmino): QueryVotesByProposalResponse {
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByProposalResponseAminoMsg): QueryVotesByProposalResponse {
    return QueryVotesByProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesByProposalResponseProtoMsg): QueryVotesByProposalResponse {
    return QueryVotesByProposalResponse.decode(message.value);
  },
  toProto(message: QueryVotesByProposalResponse): Uint8Array {
    return QueryVotesByProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalResponse",
      value: QueryVotesByProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByVoterRequest(): QueryVotesByVoterRequest {
  return {
    voter: "",
    pagination: undefined
  };
}
export const QueryVotesByVoterRequest = {
  typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterRequest",
  encode(message: QueryVotesByVoterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVotesByVoterRequest {
    return {
      voter: isSet(object.voter) ? String(object.voter) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryVotesByVoterRequest>): QueryVotesByVoterRequest {
    const message = createBaseQueryVotesByVoterRequest();
    message.voter = object.voter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesByVoterRequestAmino): QueryVotesByVoterRequest {
    const message = createBaseQueryVotesByVoterRequest();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestAmino {
    const obj: any = {};
    obj.voter = message.voter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByVoterRequestAminoMsg): QueryVotesByVoterRequest {
    return QueryVotesByVoterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesByVoterRequestProtoMsg): QueryVotesByVoterRequest {
    return QueryVotesByVoterRequest.decode(message.value);
  },
  toProto(message: QueryVotesByVoterRequest): Uint8Array {
    return QueryVotesByVoterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterRequest",
      value: QueryVotesByVoterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByVoterResponse(): QueryVotesByVoterResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesByVoterResponse = {
  typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterResponse",
  encode(message: QueryVotesByVoterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVotesByVoterResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryVotesByVoterResponse>): QueryVotesByVoterResponse {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesByVoterResponseAmino): QueryVotesByVoterResponse {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByVoterResponseAminoMsg): QueryVotesByVoterResponse {
    return QueryVotesByVoterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesByVoterResponseProtoMsg): QueryVotesByVoterResponse {
    return QueryVotesByVoterResponse.decode(message.value);
  },
  toProto(message: QueryVotesByVoterResponse): Uint8Array {
    return QueryVotesByVoterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterResponse",
      value: QueryVotesByVoterResponse.encode(message).finish()
    };
  }
};