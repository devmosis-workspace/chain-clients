import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { VoteType, voteTypeFromJSON } from "./genesis";
import { BaseCommittee, BaseCommitteeProtoMsg, BaseCommitteeSDKType, MemberCommittee, MemberCommitteeProtoMsg, MemberCommitteeSDKType, TokenCommittee, TokenCommitteeProtoMsg, TokenCommitteeSDKType } from "./committee";
import { CommitteeChangeProposal, CommitteeChangeProposalProtoMsg, CommitteeChangeProposalSDKType, CommitteeDeleteProposal, CommitteeDeleteProposalProtoMsg, CommitteeDeleteProposalSDKType } from "./proposal";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg, CommunityPoolSpendProposalWithDepositSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import { TextProposal, TextProposalProtoMsg, TextProposalSDKType } from "../../../cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal, ParameterChangeProposalProtoMsg, ParameterChangeProposalSDKType } from "../../../cosmos/params/v1beta1/params";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalProtoMsg, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalProtoMsg, CancelSoftwareUpgradeProposalSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */
export interface QueryCommitteesRequest {}
export interface QueryCommitteesRequestProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryCommitteesRequest";
  value: Uint8Array;
}
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */
export interface QueryCommitteesRequestAmino {}
export interface QueryCommitteesRequestAminoMsg {
  type: "/kava.committee.v1beta1.QueryCommitteesRequest";
  value: QueryCommitteesRequestAmino;
}
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */
export interface QueryCommitteesRequestSDKType {}
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */
export interface QueryCommitteesResponse {
  committees: (BaseCommittee & MemberCommittee & TokenCommittee & Any)[] | Any[];
}
export interface QueryCommitteesResponseProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryCommitteesResponse";
  value: Uint8Array;
}
export type QueryCommitteesResponseEncoded = Omit<QueryCommitteesResponse, "committees"> & {
  committees: (BaseCommitteeProtoMsg | MemberCommitteeProtoMsg | TokenCommitteeProtoMsg | AnyProtoMsg)[];
};
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */
export interface QueryCommitteesResponseAmino {
  committees?: AnyAmino[];
}
export interface QueryCommitteesResponseAminoMsg {
  type: "/kava.committee.v1beta1.QueryCommitteesResponse";
  value: QueryCommitteesResponseAmino;
}
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */
export interface QueryCommitteesResponseSDKType {
  committees: (BaseCommitteeSDKType | MemberCommitteeSDKType | TokenCommitteeSDKType | AnySDKType)[];
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */
export interface QueryCommitteeRequest {
  committeeId: bigint;
}
export interface QueryCommitteeRequestProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryCommitteeRequest";
  value: Uint8Array;
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */
export interface QueryCommitteeRequestAmino {
  committee_id?: string;
}
export interface QueryCommitteeRequestAminoMsg {
  type: "/kava.committee.v1beta1.QueryCommitteeRequest";
  value: QueryCommitteeRequestAmino;
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */
export interface QueryCommitteeRequestSDKType {
  committee_id: bigint;
}
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */
export interface QueryCommitteeResponse {
  committee?: (BaseCommittee & MemberCommittee & TokenCommittee & Any) | undefined;
}
export interface QueryCommitteeResponseProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryCommitteeResponse";
  value: Uint8Array;
}
export type QueryCommitteeResponseEncoded = Omit<QueryCommitteeResponse, "committee"> & {
  committee?: BaseCommitteeProtoMsg | MemberCommitteeProtoMsg | TokenCommitteeProtoMsg | AnyProtoMsg | undefined;
};
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */
export interface QueryCommitteeResponseAmino {
  committee?: AnyAmino;
}
export interface QueryCommitteeResponseAminoMsg {
  type: "/kava.committee.v1beta1.QueryCommitteeResponse";
  value: QueryCommitteeResponseAmino;
}
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */
export interface QueryCommitteeResponseSDKType {
  committee?: BaseCommitteeSDKType | MemberCommitteeSDKType | TokenCommitteeSDKType | AnySDKType | undefined;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */
export interface QueryProposalsRequest {
  committeeId: bigint;
}
export interface QueryProposalsRequestProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryProposalsRequest";
  value: Uint8Array;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */
export interface QueryProposalsRequestAmino {
  committee_id?: string;
}
export interface QueryProposalsRequestAminoMsg {
  type: "/kava.committee.v1beta1.QueryProposalsRequest";
  value: QueryProposalsRequestAmino;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */
export interface QueryProposalsRequestSDKType {
  committee_id: bigint;
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */
export interface QueryProposalsResponse {
  proposals: QueryProposalResponse[];
}
export interface QueryProposalsResponseProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryProposalsResponse";
  value: Uint8Array;
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */
export interface QueryProposalsResponseAmino {
  proposals?: QueryProposalResponseAmino[];
}
export interface QueryProposalsResponseAminoMsg {
  type: "/kava.committee.v1beta1.QueryProposalsResponse";
  value: QueryProposalsResponseAmino;
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */
export interface QueryProposalsResponseSDKType {
  proposals: QueryProposalResponseSDKType[];
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */
export interface QueryProposalRequest {
  proposalId: bigint;
}
export interface QueryProposalRequestProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryProposalRequest";
  value: Uint8Array;
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */
export interface QueryProposalRequestAmino {
  proposal_id?: string;
}
export interface QueryProposalRequestAminoMsg {
  type: "/kava.committee.v1beta1.QueryProposalRequest";
  value: QueryProposalRequestAmino;
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */
export interface QueryProposalRequestSDKType {
  proposal_id: bigint;
}
/** QueryProposalResponse defines the response type for querying x/committee proposal. */
export interface QueryProposalResponse {
  pubProposal?: (CommitteeChangeProposal & CommitteeDeleteProposal & CommunityPoolSpendProposal & CommunityPoolSpendProposalWithDeposit & TextProposal & ParameterChangeProposal & SoftwareUpgradeProposal & CancelSoftwareUpgradeProposal & Any) | undefined;
  id: bigint;
  committeeId: bigint;
  deadline: Timestamp;
}
export interface QueryProposalResponseProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryProposalResponse";
  value: Uint8Array;
}
export type QueryProposalResponseEncoded = Omit<QueryProposalResponse, "pubProposal"> & {
  pubProposal?: CommitteeChangeProposalProtoMsg | CommitteeDeleteProposalProtoMsg | CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | TextProposalProtoMsg | ParameterChangeProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | AnyProtoMsg | undefined;
};
/** QueryProposalResponse defines the response type for querying x/committee proposal. */
export interface QueryProposalResponseAmino {
  pub_proposal?: AnyAmino;
  id?: string;
  committee_id?: string;
  deadline?: string;
}
export interface QueryProposalResponseAminoMsg {
  type: "/kava.committee.v1beta1.QueryProposalResponse";
  value: QueryProposalResponseAmino;
}
/** QueryProposalResponse defines the response type for querying x/committee proposal. */
export interface QueryProposalResponseSDKType {
  pub_proposal?: CommitteeChangeProposalSDKType | CommitteeDeleteProposalSDKType | CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | TextProposalSDKType | ParameterChangeProposalSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | AnySDKType | undefined;
  id: bigint;
  committee_id: bigint;
  deadline: TimestampSDKType;
}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDRequest {}
export interface QueryNextProposalIDRequestProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryNextProposalIDRequest";
  value: Uint8Array;
}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDRequestAmino {}
export interface QueryNextProposalIDRequestAminoMsg {
  type: "/kava.committee.v1beta1.QueryNextProposalIDRequest";
  value: QueryNextProposalIDRequestAmino;
}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDRequestSDKType {}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDResponse {
  nextProposalId: bigint;
}
export interface QueryNextProposalIDResponseProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryNextProposalIDResponse";
  value: Uint8Array;
}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDResponseAmino {
  next_proposal_id?: string;
}
export interface QueryNextProposalIDResponseAminoMsg {
  type: "/kava.committee.v1beta1.QueryNextProposalIDResponse";
  value: QueryNextProposalIDResponseAmino;
}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDResponseSDKType {
  next_proposal_id: bigint;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */
export interface QueryVotesRequest {
  proposalId: bigint;
  pagination?: PageRequest;
}
export interface QueryVotesRequestProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryVotesRequest";
  value: Uint8Array;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */
export interface QueryVotesRequestAmino {
  proposal_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryVotesRequestAminoMsg {
  type: "/kava.committee.v1beta1.QueryVotesRequest";
  value: QueryVotesRequestAmino;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */
export interface QueryVotesRequestSDKType {
  proposal_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */
export interface QueryVotesResponse {
  /** votes defined the queried votes. */
  votes: QueryVoteResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVotesResponseProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryVotesResponse";
  value: Uint8Array;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */
export interface QueryVotesResponseAmino {
  /** votes defined the queried votes. */
  votes?: QueryVoteResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesResponseAminoMsg {
  type: "/kava.committee.v1beta1.QueryVotesResponse";
  value: QueryVotesResponseAmino;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */
export interface QueryVotesResponseSDKType {
  votes: QueryVoteResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */
export interface QueryVoteRequest {
  proposalId: bigint;
  voter: string;
}
export interface QueryVoteRequestProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryVoteRequest";
  value: Uint8Array;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */
export interface QueryVoteRequestAmino {
  proposal_id?: string;
  voter?: string;
}
export interface QueryVoteRequestAminoMsg {
  type: "/kava.committee.v1beta1.QueryVoteRequest";
  value: QueryVoteRequestAmino;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */
export interface QueryVoteRequestSDKType {
  proposal_id: bigint;
  voter: string;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */
export interface QueryVoteResponse {
  proposalId: bigint;
  voter: string;
  voteType: VoteType;
}
export interface QueryVoteResponseProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryVoteResponse";
  value: Uint8Array;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */
export interface QueryVoteResponseAmino {
  proposal_id?: string;
  voter?: string;
  vote_type?: VoteType;
}
export interface QueryVoteResponseAminoMsg {
  type: "/kava.committee.v1beta1.QueryVoteResponse";
  value: QueryVoteResponseAmino;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */
export interface QueryVoteResponseSDKType {
  proposal_id: bigint;
  voter: string;
  vote_type: VoteType;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */
export interface QueryTallyRequest {
  proposalId: bigint;
}
export interface QueryTallyRequestProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryTallyRequest";
  value: Uint8Array;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */
export interface QueryTallyRequestAmino {
  proposal_id?: string;
}
export interface QueryTallyRequestAminoMsg {
  type: "/kava.committee.v1beta1.QueryTallyRequest";
  value: QueryTallyRequestAmino;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */
export interface QueryTallyRequestSDKType {
  proposal_id: bigint;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */
export interface QueryTallyResponse {
  proposalId: bigint;
  yesVotes: string;
  noVotes: string;
  currentVotes: string;
  possibleVotes: string;
  voteThreshold: string;
  quorum: string;
}
export interface QueryTallyResponseProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryTallyResponse";
  value: Uint8Array;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */
export interface QueryTallyResponseAmino {
  proposal_id?: string;
  yes_votes?: string;
  no_votes?: string;
  current_votes?: string;
  possible_votes?: string;
  vote_threshold?: string;
  quorum?: string;
}
export interface QueryTallyResponseAminoMsg {
  type: "/kava.committee.v1beta1.QueryTallyResponse";
  value: QueryTallyResponseAmino;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */
export interface QueryTallyResponseSDKType {
  proposal_id: bigint;
  yes_votes: string;
  no_votes: string;
  current_votes: string;
  possible_votes: string;
  vote_threshold: string;
  quorum: string;
}
/** QueryRawParamsRequest defines the request type for querying x/committee raw params. */
export interface QueryRawParamsRequest {
  subspace: string;
  key: string;
}
export interface QueryRawParamsRequestProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryRawParamsRequest";
  value: Uint8Array;
}
/** QueryRawParamsRequest defines the request type for querying x/committee raw params. */
export interface QueryRawParamsRequestAmino {
  subspace?: string;
  key?: string;
}
export interface QueryRawParamsRequestAminoMsg {
  type: "/kava.committee.v1beta1.QueryRawParamsRequest";
  value: QueryRawParamsRequestAmino;
}
/** QueryRawParamsRequest defines the request type for querying x/committee raw params. */
export interface QueryRawParamsRequestSDKType {
  subspace: string;
  key: string;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */
export interface QueryRawParamsResponse {
  rawData: string;
}
export interface QueryRawParamsResponseProtoMsg {
  typeUrl: "/kava.committee.v1beta1.QueryRawParamsResponse";
  value: Uint8Array;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */
export interface QueryRawParamsResponseAmino {
  raw_data?: string;
}
export interface QueryRawParamsResponseAminoMsg {
  type: "/kava.committee.v1beta1.QueryRawParamsResponse";
  value: QueryRawParamsResponseAmino;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */
export interface QueryRawParamsResponseSDKType {
  raw_data: string;
}
function createBaseQueryCommitteesRequest(): QueryCommitteesRequest {
  return {};
}
export const QueryCommitteesRequest = {
  typeUrl: "/kava.committee.v1beta1.QueryCommitteesRequest",
  encode(_: QueryCommitteesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryCommitteesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCommitteesRequest>): QueryCommitteesRequest {
    const message = createBaseQueryCommitteesRequest();
    return message;
  },
  fromAmino(_: QueryCommitteesRequestAmino): QueryCommitteesRequest {
    const message = createBaseQueryCommitteesRequest();
    return message;
  },
  toAmino(_: QueryCommitteesRequest): QueryCommitteesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCommitteesRequestAminoMsg): QueryCommitteesRequest {
    return QueryCommitteesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommitteesRequestProtoMsg): QueryCommitteesRequest {
    return QueryCommitteesRequest.decode(message.value);
  },
  toProto(message: QueryCommitteesRequest): Uint8Array {
    return QueryCommitteesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommitteesRequest): QueryCommitteesRequestProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryCommitteesRequest",
      value: QueryCommitteesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCommitteesResponse(): QueryCommitteesResponse {
  return {
    committees: []
  };
}
export const QueryCommitteesResponse = {
  typeUrl: "/kava.committee.v1beta1.QueryCommitteesResponse",
  encode(message: QueryCommitteesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.committees) {
      Any.encode((v! as Any), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCommitteesResponse {
    return {
      committees: Array.isArray(object?.committees) ? object.committees.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCommitteesResponse>): QueryCommitteesResponse {
    const message = createBaseQueryCommitteesResponse();
    message.committees = object.committees?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCommitteesResponseAmino): QueryCommitteesResponse {
    const message = createBaseQueryCommitteesResponse();
    message.committees = object.committees?.map(e => Committee_FromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCommitteesResponse): QueryCommitteesResponseAmino {
    const obj: any = {};
    if (message.committees) {
      obj.committees = message.committees.map(e => e ? Committee_ToAmino((e as Any)) : undefined);
    } else {
      obj.committees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCommitteesResponseAminoMsg): QueryCommitteesResponse {
    return QueryCommitteesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommitteesResponseProtoMsg): QueryCommitteesResponse {
    return QueryCommitteesResponse.decode(message.value);
  },
  toProto(message: QueryCommitteesResponse): Uint8Array {
    return QueryCommitteesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommitteesResponse): QueryCommitteesResponseProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryCommitteesResponse",
      value: QueryCommitteesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCommitteeRequest(): QueryCommitteeRequest {
  return {
    committeeId: BigInt(0)
  };
}
export const QueryCommitteeRequest = {
  typeUrl: "/kava.committee.v1beta1.QueryCommitteeRequest",
  encode(message: QueryCommitteeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.committeeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.committeeId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCommitteeRequest {
    return {
      committeeId: isSet(object.committeeId) ? BigInt(object.committeeId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCommitteeRequest>): QueryCommitteeRequest {
    const message = createBaseQueryCommitteeRequest();
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? BigInt(object.committeeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCommitteeRequestAmino): QueryCommitteeRequest {
    const message = createBaseQueryCommitteeRequest();
    if (object.committee_id !== undefined && object.committee_id !== null) {
      message.committeeId = BigInt(object.committee_id);
    }
    return message;
  },
  toAmino(message: QueryCommitteeRequest): QueryCommitteeRequestAmino {
    const obj: any = {};
    obj.committee_id = message.committeeId ? message.committeeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCommitteeRequestAminoMsg): QueryCommitteeRequest {
    return QueryCommitteeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommitteeRequestProtoMsg): QueryCommitteeRequest {
    return QueryCommitteeRequest.decode(message.value);
  },
  toProto(message: QueryCommitteeRequest): Uint8Array {
    return QueryCommitteeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommitteeRequest): QueryCommitteeRequestProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryCommitteeRequest",
      value: QueryCommitteeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCommitteeResponse(): QueryCommitteeResponse {
  return {
    committee: undefined
  };
}
export const QueryCommitteeResponse = {
  typeUrl: "/kava.committee.v1beta1.QueryCommitteeResponse",
  encode(message: QueryCommitteeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.committee !== undefined) {
      Any.encode((message.committee as Any), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCommitteeResponse {
    return {
      committee: isSet(object.committee) ? Any.fromJSON(object.committee) : undefined
    };
  },
  fromPartial(object: Partial<QueryCommitteeResponse>): QueryCommitteeResponse {
    const message = createBaseQueryCommitteeResponse();
    message.committee = object.committee !== undefined && object.committee !== null ? Any.fromPartial(object.committee) : undefined;
    return message;
  },
  fromAmino(object: QueryCommitteeResponseAmino): QueryCommitteeResponse {
    const message = createBaseQueryCommitteeResponse();
    if (object.committee !== undefined && object.committee !== null) {
      message.committee = Committee_FromAmino(object.committee);
    }
    return message;
  },
  toAmino(message: QueryCommitteeResponse): QueryCommitteeResponseAmino {
    const obj: any = {};
    obj.committee = message.committee ? Committee_ToAmino((message.committee as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCommitteeResponseAminoMsg): QueryCommitteeResponse {
    return QueryCommitteeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommitteeResponseProtoMsg): QueryCommitteeResponse {
    return QueryCommitteeResponse.decode(message.value);
  },
  toProto(message: QueryCommitteeResponse): Uint8Array {
    return QueryCommitteeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommitteeResponse): QueryCommitteeResponseProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryCommitteeResponse",
      value: QueryCommitteeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    committeeId: BigInt(0)
  };
}
export const QueryProposalsRequest = {
  typeUrl: "/kava.committee.v1beta1.QueryProposalsRequest",
  encode(message: QueryProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.committeeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.committeeId);
    }
    return writer;
  },
  fromJSON(object: any): QueryProposalsRequest {
    return {
      committeeId: isSet(object.committeeId) ? BigInt(object.committeeId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? BigInt(object.committeeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    if (object.committee_id !== undefined && object.committee_id !== null) {
      message.committeeId = BigInt(object.committee_id);
    }
    return message;
  },
  toAmino(message: QueryProposalsRequest): QueryProposalsRequestAmino {
    const obj: any = {};
    obj.committee_id = message.committeeId ? message.committeeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsRequestProtoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.decode(message.value);
  },
  toProto(message: QueryProposalsRequest): Uint8Array {
    return QueryProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryProposalsRequest",
      value: QueryProposalsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: []
  };
}
export const QueryProposalsResponse = {
  typeUrl: "/kava.committee.v1beta1.QueryProposalsResponse",
  encode(message: QueryProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      QueryProposalResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => QueryProposalResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => QueryProposalResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => QueryProposalResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryProposalsResponse): QueryProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? QueryProposalResponse.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsResponseProtoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.decode(message.value);
  },
  toProto(message: QueryProposalsResponse): Uint8Array {
    return QueryProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryProposalsResponse",
      value: QueryProposalsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryProposalRequest = {
  typeUrl: "/kava.committee.v1beta1.QueryProposalRequest",
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
      typeUrl: "/kava.committee.v1beta1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    pubProposal: undefined,
    id: BigInt(0),
    committeeId: BigInt(0),
    deadline: Timestamp.fromPartial({})
  };
}
export const QueryProposalResponse = {
  typeUrl: "/kava.committee.v1beta1.QueryProposalResponse",
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubProposal !== undefined) {
      Any.encode((message.pubProposal as Any), writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.committeeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.committeeId);
    }
    if (message.deadline !== undefined) {
      Timestamp.encode(message.deadline, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProposalResponse {
    return {
      pubProposal: isSet(object.pubProposal) ? Any.fromJSON(object.pubProposal) : undefined,
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      committeeId: isSet(object.committeeId) ? BigInt(object.committeeId.toString()) : BigInt(0),
      deadline: isSet(object.deadline) ? fromJsonTimestamp(object.deadline) : undefined
    };
  },
  fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.pubProposal = object.pubProposal !== undefined && object.pubProposal !== null ? Any.fromPartial(object.pubProposal) : undefined;
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? BigInt(object.committeeId.toString()) : BigInt(0);
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Timestamp.fromPartial(object.deadline) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.pub_proposal !== undefined && object.pub_proposal !== null) {
      message.pubProposal = Cosmos_govv1beta1Content_FromAmino(object.pub_proposal);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.committee_id !== undefined && object.committee_id !== null) {
      message.committeeId = BigInt(object.committee_id);
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Timestamp.fromAmino(object.deadline);
    }
    return message;
  },
  toAmino(message: QueryProposalResponse): QueryProposalResponseAmino {
    const obj: any = {};
    obj.pub_proposal = message.pubProposal ? Cosmos_govv1beta1Content_ToAmino((message.pubProposal as Any)) : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.committee_id = message.committeeId ? message.committeeId.toString() : undefined;
    obj.deadline = message.deadline ? Timestamp.toAmino(message.deadline) : undefined;
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
      typeUrl: "/kava.committee.v1beta1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNextProposalIDRequest(): QueryNextProposalIDRequest {
  return {};
}
export const QueryNextProposalIDRequest = {
  typeUrl: "/kava.committee.v1beta1.QueryNextProposalIDRequest",
  encode(_: QueryNextProposalIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryNextProposalIDRequest {
    return {};
  },
  fromPartial(_: Partial<QueryNextProposalIDRequest>): QueryNextProposalIDRequest {
    const message = createBaseQueryNextProposalIDRequest();
    return message;
  },
  fromAmino(_: QueryNextProposalIDRequestAmino): QueryNextProposalIDRequest {
    const message = createBaseQueryNextProposalIDRequest();
    return message;
  },
  toAmino(_: QueryNextProposalIDRequest): QueryNextProposalIDRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNextProposalIDRequestAminoMsg): QueryNextProposalIDRequest {
    return QueryNextProposalIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNextProposalIDRequestProtoMsg): QueryNextProposalIDRequest {
    return QueryNextProposalIDRequest.decode(message.value);
  },
  toProto(message: QueryNextProposalIDRequest): Uint8Array {
    return QueryNextProposalIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNextProposalIDRequest): QueryNextProposalIDRequestProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryNextProposalIDRequest",
      value: QueryNextProposalIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNextProposalIDResponse(): QueryNextProposalIDResponse {
  return {
    nextProposalId: BigInt(0)
  };
}
export const QueryNextProposalIDResponse = {
  typeUrl: "/kava.committee.v1beta1.QueryNextProposalIDResponse",
  encode(message: QueryNextProposalIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextProposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextProposalId);
    }
    return writer;
  },
  fromJSON(object: any): QueryNextProposalIDResponse {
    return {
      nextProposalId: isSet(object.nextProposalId) ? BigInt(object.nextProposalId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryNextProposalIDResponse>): QueryNextProposalIDResponse {
    const message = createBaseQueryNextProposalIDResponse();
    message.nextProposalId = object.nextProposalId !== undefined && object.nextProposalId !== null ? BigInt(object.nextProposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryNextProposalIDResponseAmino): QueryNextProposalIDResponse {
    const message = createBaseQueryNextProposalIDResponse();
    if (object.next_proposal_id !== undefined && object.next_proposal_id !== null) {
      message.nextProposalId = BigInt(object.next_proposal_id);
    }
    return message;
  },
  toAmino(message: QueryNextProposalIDResponse): QueryNextProposalIDResponseAmino {
    const obj: any = {};
    obj.next_proposal_id = message.nextProposalId ? message.nextProposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNextProposalIDResponseAminoMsg): QueryNextProposalIDResponse {
    return QueryNextProposalIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNextProposalIDResponseProtoMsg): QueryNextProposalIDResponse {
    return QueryNextProposalIDResponse.decode(message.value);
  },
  toProto(message: QueryNextProposalIDResponse): Uint8Array {
    return QueryNextProposalIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNextProposalIDResponse): QueryNextProposalIDResponseProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryNextProposalIDResponse",
      value: QueryNextProposalIDResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined
  };
}
export const QueryVotesRequest = {
  typeUrl: "/kava.committee.v1beta1.QueryVotesRequest",
  encode(message: QueryVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVotesRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesRequestAmino): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesRequest): QueryVotesRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesRequestAminoMsg): QueryVotesRequest {
    return QueryVotesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesRequestProtoMsg): QueryVotesRequest {
    return QueryVotesRequest.decode(message.value);
  },
  toProto(message: QueryVotesRequest): Uint8Array {
    return QueryVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesRequest): QueryVotesRequestProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryVotesRequest",
      value: QueryVotesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesResponse = {
  typeUrl: "/kava.committee.v1beta1.QueryVotesResponse",
  encode(message: QueryVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      QueryVoteResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => QueryVoteResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => QueryVoteResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesResponseAmino): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => QueryVoteResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesResponse): QueryVotesResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? QueryVoteResponse.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesResponseAminoMsg): QueryVotesResponse {
    return QueryVotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesResponseProtoMsg): QueryVotesResponse {
    return QueryVotesResponse.decode(message.value);
  },
  toProto(message: QueryVotesResponse): Uint8Array {
    return QueryVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesResponse): QueryVotesResponseProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryVotesResponse",
      value: QueryVotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposalId: BigInt(0),
    voter: ""
  };
}
export const QueryVoteRequest = {
  typeUrl: "/kava.committee.v1beta1.QueryVoteRequest",
  encode(message: QueryVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  fromJSON(object: any): QueryVoteRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },
  fromPartial(object: Partial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: QueryVoteRequestAmino): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: QueryVoteRequest): QueryVoteRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryVoteRequestAminoMsg): QueryVoteRequest {
    return QueryVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteRequestProtoMsg): QueryVoteRequest {
    return QueryVoteRequest.decode(message.value);
  },
  toProto(message: QueryVoteRequest): Uint8Array {
    return QueryVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteRequest): QueryVoteRequestProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryVoteRequest",
      value: QueryVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    proposalId: BigInt(0),
    voter: "",
    voteType: 0
  };
}
export const QueryVoteResponse = {
  typeUrl: "/kava.committee.v1beta1.QueryVoteResponse",
  encode(message: QueryVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.voteType !== 0) {
      writer.uint32(24).int32(message.voteType);
    }
    return writer;
  },
  fromJSON(object: any): QueryVoteResponse {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      voteType: isSet(object.voteType) ? voteTypeFromJSON(object.voteType) : -1
    };
  },
  fromPartial(object: Partial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.voteType = object.voteType ?? 0;
    return message;
  },
  fromAmino(object: QueryVoteResponseAmino): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.vote_type !== undefined && object.vote_type !== null) {
      message.voteType = voteTypeFromJSON(object.vote_type);
    }
    return message;
  },
  toAmino(message: QueryVoteResponse): QueryVoteResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.vote_type = message.voteType;
    return obj;
  },
  fromAminoMsg(object: QueryVoteResponseAminoMsg): QueryVoteResponse {
    return QueryVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteResponseProtoMsg): QueryVoteResponse {
    return QueryVoteResponse.decode(message.value);
  },
  toProto(message: QueryVoteResponse): Uint8Array {
    return QueryVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteResponse): QueryVoteResponseProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryVoteResponse",
      value: QueryVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTallyRequest(): QueryTallyRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryTallyRequest = {
  typeUrl: "/kava.committee.v1beta1.QueryTallyRequest",
  encode(message: QueryTallyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  fromJSON(object: any): QueryTallyRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryTallyRequest>): QueryTallyRequest {
    const message = createBaseQueryTallyRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTallyRequestAmino): QueryTallyRequest {
    const message = createBaseQueryTallyRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryTallyRequest): QueryTallyRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyRequestAminoMsg): QueryTallyRequest {
    return QueryTallyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTallyRequestProtoMsg): QueryTallyRequest {
    return QueryTallyRequest.decode(message.value);
  },
  toProto(message: QueryTallyRequest): Uint8Array {
    return QueryTallyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyRequest): QueryTallyRequestProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryTallyRequest",
      value: QueryTallyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResponse(): QueryTallyResponse {
  return {
    proposalId: BigInt(0),
    yesVotes: "",
    noVotes: "",
    currentVotes: "",
    possibleVotes: "",
    voteThreshold: "",
    quorum: ""
  };
}
export const QueryTallyResponse = {
  typeUrl: "/kava.committee.v1beta1.QueryTallyResponse",
  encode(message: QueryTallyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.yesVotes !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.yesVotes, 18).atomics);
    }
    if (message.noVotes !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.noVotes, 18).atomics);
    }
    if (message.currentVotes !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.currentVotes, 18).atomics);
    }
    if (message.possibleVotes !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.possibleVotes, 18).atomics);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
    }
    if (message.quorum !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.quorum, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryTallyResponse {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      yesVotes: isSet(object.yesVotes) ? String(object.yesVotes) : "",
      noVotes: isSet(object.noVotes) ? String(object.noVotes) : "",
      currentVotes: isSet(object.currentVotes) ? String(object.currentVotes) : "",
      possibleVotes: isSet(object.possibleVotes) ? String(object.possibleVotes) : "",
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      quorum: isSet(object.quorum) ? String(object.quorum) : ""
    };
  },
  fromPartial(object: Partial<QueryTallyResponse>): QueryTallyResponse {
    const message = createBaseQueryTallyResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.yesVotes = object.yesVotes ?? "";
    message.noVotes = object.noVotes ?? "";
    message.currentVotes = object.currentVotes ?? "";
    message.possibleVotes = object.possibleVotes ?? "";
    message.voteThreshold = object.voteThreshold ?? "";
    message.quorum = object.quorum ?? "";
    return message;
  },
  fromAmino(object: QueryTallyResponseAmino): QueryTallyResponse {
    const message = createBaseQueryTallyResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.yes_votes !== undefined && object.yes_votes !== null) {
      message.yesVotes = object.yes_votes;
    }
    if (object.no_votes !== undefined && object.no_votes !== null) {
      message.noVotes = object.no_votes;
    }
    if (object.current_votes !== undefined && object.current_votes !== null) {
      message.currentVotes = object.current_votes;
    }
    if (object.possible_votes !== undefined && object.possible_votes !== null) {
      message.possibleVotes = object.possible_votes;
    }
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.voteThreshold = object.vote_threshold;
    }
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = object.quorum;
    }
    return message;
  },
  toAmino(message: QueryTallyResponse): QueryTallyResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.yes_votes = message.yesVotes;
    obj.no_votes = message.noVotes;
    obj.current_votes = message.currentVotes;
    obj.possible_votes = message.possibleVotes;
    obj.vote_threshold = message.voteThreshold;
    obj.quorum = message.quorum;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResponseAminoMsg): QueryTallyResponse {
    return QueryTallyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTallyResponseProtoMsg): QueryTallyResponse {
    return QueryTallyResponse.decode(message.value);
  },
  toProto(message: QueryTallyResponse): Uint8Array {
    return QueryTallyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResponse): QueryTallyResponseProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryTallyResponse",
      value: QueryTallyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRawParamsRequest(): QueryRawParamsRequest {
  return {
    subspace: "",
    key: ""
  };
}
export const QueryRawParamsRequest = {
  typeUrl: "/kava.committee.v1beta1.QueryRawParamsRequest",
  encode(message: QueryRawParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  fromJSON(object: any): QueryRawParamsRequest {
    return {
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      key: isSet(object.key) ? String(object.key) : ""
    };
  },
  fromPartial(object: Partial<QueryRawParamsRequest>): QueryRawParamsRequest {
    const message = createBaseQueryRawParamsRequest();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: QueryRawParamsRequestAmino): QueryRawParamsRequest {
    const message = createBaseQueryRawParamsRequest();
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryRawParamsRequest): QueryRawParamsRequestAmino {
    const obj: any = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg(object: QueryRawParamsRequestAminoMsg): QueryRawParamsRequest {
    return QueryRawParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRawParamsRequestProtoMsg): QueryRawParamsRequest {
    return QueryRawParamsRequest.decode(message.value);
  },
  toProto(message: QueryRawParamsRequest): Uint8Array {
    return QueryRawParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRawParamsRequest): QueryRawParamsRequestProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryRawParamsRequest",
      value: QueryRawParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRawParamsResponse(): QueryRawParamsResponse {
  return {
    rawData: ""
  };
}
export const QueryRawParamsResponse = {
  typeUrl: "/kava.committee.v1beta1.QueryRawParamsResponse",
  encode(message: QueryRawParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rawData !== "") {
      writer.uint32(10).string(message.rawData);
    }
    return writer;
  },
  fromJSON(object: any): QueryRawParamsResponse {
    return {
      rawData: isSet(object.rawData) ? String(object.rawData) : ""
    };
  },
  fromPartial(object: Partial<QueryRawParamsResponse>): QueryRawParamsResponse {
    const message = createBaseQueryRawParamsResponse();
    message.rawData = object.rawData ?? "";
    return message;
  },
  fromAmino(object: QueryRawParamsResponseAmino): QueryRawParamsResponse {
    const message = createBaseQueryRawParamsResponse();
    if (object.raw_data !== undefined && object.raw_data !== null) {
      message.rawData = object.raw_data;
    }
    return message;
  },
  toAmino(message: QueryRawParamsResponse): QueryRawParamsResponseAmino {
    const obj: any = {};
    obj.raw_data = message.rawData;
    return obj;
  },
  fromAminoMsg(object: QueryRawParamsResponseAminoMsg): QueryRawParamsResponse {
    return QueryRawParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRawParamsResponseProtoMsg): QueryRawParamsResponse {
    return QueryRawParamsResponse.decode(message.value);
  },
  toProto(message: QueryRawParamsResponse): Uint8Array {
    return QueryRawParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRawParamsResponse): QueryRawParamsResponseProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.QueryRawParamsResponse",
      value: QueryRawParamsResponse.encode(message).finish()
    };
  }
};
export const Committee_InterfaceDecoder = (input: BinaryReader | Uint8Array): BaseCommittee | MemberCommittee | TokenCommittee | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/kava.committee.v1beta1.BaseCommittee":
      return BaseCommittee.decode(data.value);
    case "/kava.committee.v1beta1.MemberCommittee":
      return MemberCommittee.decode(data.value);
    case "/kava.committee.v1beta1.TokenCommittee":
      return TokenCommittee.decode(data.value);
    default:
      return data;
  }
};
export const Committee_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "/kava.committee.v1beta1.BaseCommittee":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.BaseCommittee",
        value: BaseCommittee.encode(BaseCommittee.fromPartial(BaseCommittee.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.MemberCommittee":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.MemberCommittee",
        value: MemberCommittee.encode(MemberCommittee.fromPartial(MemberCommittee.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.TokenCommittee":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.TokenCommittee",
        value: TokenCommittee.encode(TokenCommittee.fromPartial(TokenCommittee.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Committee_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/kava.committee.v1beta1.BaseCommittee":
      return {
        type: "/kava.committee.v1beta1.BaseCommittee",
        value: BaseCommittee.toAmino(BaseCommittee.decode(content.value, undefined))
      };
    case "/kava.committee.v1beta1.MemberCommittee":
      return {
        type: "/kava.committee.v1beta1.MemberCommittee",
        value: MemberCommittee.toAmino(MemberCommittee.decode(content.value, undefined))
      };
    case "/kava.committee.v1beta1.TokenCommittee":
      return {
        type: "/kava.committee.v1beta1.TokenCommittee",
        value: TokenCommittee.toAmino(TokenCommittee.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};
export const Cosmos_govv1beta1Content_InterfaceDecoder = (input: BinaryReader | Uint8Array): CommitteeChangeProposal | CommitteeDeleteProposal | CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | TextProposal | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/kava.committee.v1beta1.CommitteeChangeProposal":
      return CommitteeChangeProposal.decode(data.value);
    case "/kava.committee.v1beta1.CommitteeDeleteProposal":
      return CommitteeDeleteProposal.decode(data.value);
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return CommunityPoolSpendProposal.decode(data.value);
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return CommunityPoolSpendProposalWithDeposit.decode(data.value);
    case "/cosmos.gov.v1beta1.TextProposal":
      return TextProposal.decode(data.value);
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return ParameterChangeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return SoftwareUpgradeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return CancelSoftwareUpgradeProposal.decode(data.value);
    default:
      return data;
  }
};
export const Cosmos_govv1beta1Content_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "/kava.committee.v1beta1.CommitteeChangeProposal":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.CommitteeChangeProposal",
        value: CommitteeChangeProposal.encode(CommitteeChangeProposal.fromPartial(CommitteeChangeProposal.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.CommitteeDeleteProposal":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.CommitteeDeleteProposal",
        value: CommitteeDeleteProposal.encode(CommitteeDeleteProposal.fromPartial(CommitteeDeleteProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CommunityPoolSpendProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.encode(CommunityPoolSpendProposal.fromPartial(CommunityPoolSpendProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CommunityPoolSpendProposalWithDeposit":
      return Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
        value: CommunityPoolSpendProposalWithDeposit.encode(CommunityPoolSpendProposalWithDeposit.fromPartial(CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/TextProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: TextProposal.encode(TextProposal.fromPartial(TextProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/ParameterChangeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
        value: ParameterChangeProposal.encode(ParameterChangeProposal.fromPartial(ParameterChangeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/SoftwareUpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.encode(SoftwareUpgradeProposal.fromPartial(SoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CancelSoftwareUpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.encode(CancelSoftwareUpgradeProposal.fromPartial(CancelSoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_govv1beta1Content_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/kava.committee.v1beta1.CommitteeChangeProposal":
      return {
        type: "/kava.committee.v1beta1.CommitteeChangeProposal",
        value: CommitteeChangeProposal.toAmino(CommitteeChangeProposal.decode(content.value, undefined))
      };
    case "/kava.committee.v1beta1.CommitteeDeleteProposal":
      return {
        type: "/kava.committee.v1beta1.CommitteeDeleteProposal",
        value: CommitteeDeleteProposal.toAmino(CommitteeDeleteProposal.decode(content.value, undefined))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.toAmino(CommunityPoolSpendProposal.decode(content.value, undefined))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
        value: CommunityPoolSpendProposalWithDeposit.toAmino(CommunityPoolSpendProposalWithDeposit.decode(content.value, undefined))
      };
    case "/cosmos.gov.v1beta1.TextProposal":
      return {
        type: "cosmos-sdk/TextProposal",
        value: TextProposal.toAmino(TextProposal.decode(content.value, undefined))
      };
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return {
        type: "cosmos-sdk/ParameterChangeProposal",
        value: ParameterChangeProposal.toAmino(ParameterChangeProposal.decode(content.value, undefined))
      };
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.toAmino(SoftwareUpgradeProposal.decode(content.value, undefined))
      };
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.toAmino(CancelSoftwareUpgradeProposal.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};