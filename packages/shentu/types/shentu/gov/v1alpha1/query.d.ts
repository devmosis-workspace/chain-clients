import { VotingParams, VotingParamsAmino, VotingParamsSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType } from "../../../cosmos/gov/v1beta1/gov";
import { CustomParams, CustomParamsAmino, CustomParamsSDKType } from "./gov";
import { BinaryWriter } from "../../../binary";
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
export declare const QueryCertVotedRequest: {
    typeUrl: string;
    encode(message: QueryCertVotedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCertVotedRequest;
    fromPartial(object: Partial<QueryCertVotedRequest>): QueryCertVotedRequest;
    fromAmino(object: QueryCertVotedRequestAmino): QueryCertVotedRequest;
    toAmino(message: QueryCertVotedRequest): QueryCertVotedRequestAmino;
    fromAminoMsg(object: QueryCertVotedRequestAminoMsg): QueryCertVotedRequest;
    fromProtoMsg(message: QueryCertVotedRequestProtoMsg): QueryCertVotedRequest;
    toProto(message: QueryCertVotedRequest): Uint8Array;
    toProtoMsg(message: QueryCertVotedRequest): QueryCertVotedRequestProtoMsg;
};
export declare const QueryCertVotedResponse: {
    typeUrl: string;
    encode(message: QueryCertVotedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCertVotedResponse;
    fromPartial(object: Partial<QueryCertVotedResponse>): QueryCertVotedResponse;
    fromAmino(object: QueryCertVotedResponseAmino): QueryCertVotedResponse;
    toAmino(message: QueryCertVotedResponse): QueryCertVotedResponseAmino;
    fromAminoMsg(object: QueryCertVotedResponseAminoMsg): QueryCertVotedResponse;
    fromProtoMsg(message: QueryCertVotedResponseProtoMsg): QueryCertVotedResponse;
    toProto(message: QueryCertVotedResponse): Uint8Array;
    toProtoMsg(message: QueryCertVotedResponse): QueryCertVotedResponseProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
