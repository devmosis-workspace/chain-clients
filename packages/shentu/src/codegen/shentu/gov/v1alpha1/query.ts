import { VotingParams, VotingParamsAmino, VotingParamsSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType } from "../../../cosmos/gov/v1beta1/gov";
import { CustomParams, CustomParamsAmino, CustomParamsSDKType } from "./gov";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryCertVotedRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
}
export interface QueryCertVotedRequestProtoMsg {
  typeUrl: "/shentu.gov.v1alpha1.QueryCertVotedRequest";
  value: Uint8Array;
}
export interface QueryCertVotedRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
}
export interface QueryCertVotedRequestAminoMsg {
  type: "/shentu.gov.v1alpha1.QueryCertVotedRequest";
  value: QueryCertVotedRequestAmino;
}
export interface QueryCertVotedRequestSDKType {
  proposal_id: bigint;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryCertVotedResponse {
  certVoted: boolean;
}
export interface QueryCertVotedResponseProtoMsg {
  typeUrl: "/shentu.gov.v1alpha1.QueryCertVotedResponse";
  value: Uint8Array;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryCertVotedResponseAmino {
  cert_voted?: boolean;
}
export interface QueryCertVotedResponseAminoMsg {
  type: "/shentu.gov.v1alpha1.QueryCertVotedResponse";
  value: QueryCertVotedResponseAmino;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryCertVotedResponseSDKType {
  cert_voted: boolean;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** voting_params defines the parameters related to voting. */
  votingParams: VotingParams;
  /** deposit_params defines the parameters related to deposit. */
  depositParams: DepositParams;
  /** tally_params defines the parameters related to tally. */
  tallyParams: TallyParams;
  /** custom_params defines the parameters related to custom. */
  customParams: CustomParams;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/shentu.gov.v1alpha1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** voting_params defines the parameters related to voting. */
  voting_params?: VotingParamsAmino;
  /** deposit_params defines the parameters related to deposit. */
  deposit_params?: DepositParamsAmino;
  /** tally_params defines the parameters related to tally. */
  tally_params?: TallyParamsAmino;
  /** custom_params defines the parameters related to custom. */
  custom_params?: CustomParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/shentu.gov.v1alpha1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  voting_params: VotingParamsSDKType;
  deposit_params: DepositParamsSDKType;
  tally_params: TallyParamsSDKType;
  custom_params: CustomParamsSDKType;
}
function createBaseQueryCertVotedRequest(): QueryCertVotedRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryCertVotedRequest = {
  typeUrl: "/shentu.gov.v1alpha1.QueryCertVotedRequest",
  encode(message: QueryCertVotedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCertVotedRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCertVotedRequest>): QueryCertVotedRequest {
    const message = createBaseQueryCertVotedRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCertVotedRequestAmino): QueryCertVotedRequest {
    const message = createBaseQueryCertVotedRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryCertVotedRequest): QueryCertVotedRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCertVotedRequestAminoMsg): QueryCertVotedRequest {
    return QueryCertVotedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertVotedRequestProtoMsg): QueryCertVotedRequest {
    return QueryCertVotedRequest.decode(message.value);
  },
  toProto(message: QueryCertVotedRequest): Uint8Array {
    return QueryCertVotedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCertVotedRequest): QueryCertVotedRequestProtoMsg {
    return {
      typeUrl: "/shentu.gov.v1alpha1.QueryCertVotedRequest",
      value: QueryCertVotedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCertVotedResponse(): QueryCertVotedResponse {
  return {
    certVoted: false
  };
}
export const QueryCertVotedResponse = {
  typeUrl: "/shentu.gov.v1alpha1.QueryCertVotedResponse",
  encode(message: QueryCertVotedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.certVoted === true) {
      writer.uint32(8).bool(message.certVoted);
    }
    return writer;
  },
  fromJSON(object: any): QueryCertVotedResponse {
    return {
      certVoted: isSet(object.certVoted) ? Boolean(object.certVoted) : false
    };
  },
  fromPartial(object: Partial<QueryCertVotedResponse>): QueryCertVotedResponse {
    const message = createBaseQueryCertVotedResponse();
    message.certVoted = object.certVoted ?? false;
    return message;
  },
  fromAmino(object: QueryCertVotedResponseAmino): QueryCertVotedResponse {
    const message = createBaseQueryCertVotedResponse();
    if (object.cert_voted !== undefined && object.cert_voted !== null) {
      message.certVoted = object.cert_voted;
    }
    return message;
  },
  toAmino(message: QueryCertVotedResponse): QueryCertVotedResponseAmino {
    const obj: any = {};
    obj.cert_voted = message.certVoted === false ? undefined : message.certVoted;
    return obj;
  },
  fromAminoMsg(object: QueryCertVotedResponseAminoMsg): QueryCertVotedResponse {
    return QueryCertVotedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertVotedResponseProtoMsg): QueryCertVotedResponse {
    return QueryCertVotedResponse.decode(message.value);
  },
  toProto(message: QueryCertVotedResponse): Uint8Array {
    return QueryCertVotedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCertVotedResponse): QueryCertVotedResponseProtoMsg {
    return {
      typeUrl: "/shentu.gov.v1alpha1.QueryCertVotedResponse",
      value: QueryCertVotedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    votingParams: VotingParams.fromPartial({}),
    depositParams: DepositParams.fromPartial({}),
    tallyParams: TallyParams.fromPartial({}),
    customParams: CustomParams.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/shentu.gov.v1alpha1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.customParams !== undefined) {
      CustomParams.encode(message.customParams, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      votingParams: isSet(object.votingParams) ? VotingParams.fromJSON(object.votingParams) : undefined,
      depositParams: isSet(object.depositParams) ? DepositParams.fromJSON(object.depositParams) : undefined,
      tallyParams: isSet(object.tallyParams) ? TallyParams.fromJSON(object.tallyParams) : undefined,
      customParams: isSet(object.customParams) ? CustomParams.fromJSON(object.customParams) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
    message.customParams = object.customParams !== undefined && object.customParams !== null ? CustomParams.fromPartial(object.customParams) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.voting_params !== undefined && object.voting_params !== null) {
      message.votingParams = VotingParams.fromAmino(object.voting_params);
    }
    if (object.deposit_params !== undefined && object.deposit_params !== null) {
      message.depositParams = DepositParams.fromAmino(object.deposit_params);
    }
    if (object.tally_params !== undefined && object.tally_params !== null) {
      message.tallyParams = TallyParams.fromAmino(object.tally_params);
    }
    if (object.custom_params !== undefined && object.custom_params !== null) {
      message.customParams = CustomParams.fromAmino(object.custom_params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
    obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
    obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
    obj.custom_params = message.customParams ? CustomParams.toAmino(message.customParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/shentu.gov.v1alpha1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};