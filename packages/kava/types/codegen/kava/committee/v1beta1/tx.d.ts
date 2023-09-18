import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { VoteType } from "./genesis";
import { CommitteeChangeProposal, CommitteeChangeProposalProtoMsg, CommitteeChangeProposalSDKType, CommitteeDeleteProposal, CommitteeDeleteProposalProtoMsg, CommitteeDeleteProposalSDKType } from "./proposal";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg, CommunityPoolSpendProposalWithDepositSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import { ParameterChangeProposal, ParameterChangeProposalProtoMsg, ParameterChangeProposalSDKType } from "../../../cosmos/params/v1beta1/params";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalProtoMsg, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalProtoMsg, CancelSoftwareUpgradeProposalSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgSubmitProposal is used by committee members to create a new proposal that they can vote on. */
export interface MsgSubmitProposal {
    pubProposal: (CommitteeChangeProposal & CommitteeDeleteProposal & CommunityPoolSpendProposal & CommunityPoolSpendProposalWithDeposit & ParameterChangeProposal & SoftwareUpgradeProposal & CancelSoftwareUpgradeProposal & Any) | undefined;
    proposer: string;
    committeeId: bigint;
}
export interface MsgSubmitProposalProtoMsg {
    typeUrl: "/kava.committee.v1beta1.MsgSubmitProposal";
    value: Uint8Array;
}
export type MsgSubmitProposalEncoded = Omit<MsgSubmitProposal, "pubProposal"> & {
    pubProposal?: CommitteeChangeProposalProtoMsg | CommitteeDeleteProposalProtoMsg | CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | ParameterChangeProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | AnyProtoMsg | undefined;
};
/** MsgSubmitProposal is used by committee members to create a new proposal that they can vote on. */
export interface MsgSubmitProposalAmino {
    pub_proposal?: AnyAmino;
    proposer: string;
    committee_id: string;
}
export interface MsgSubmitProposalAminoMsg {
    type: "/kava.committee.v1beta1.MsgSubmitProposal";
    value: MsgSubmitProposalAmino;
}
/** MsgSubmitProposal is used by committee members to create a new proposal that they can vote on. */
export interface MsgSubmitProposalSDKType {
    pub_proposal: CommitteeChangeProposalSDKType | CommitteeDeleteProposalSDKType | CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | ParameterChangeProposalSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | AnySDKType | undefined;
    proposer: string;
    committee_id: bigint;
}
/** MsgSubmitProposalResponse defines the SubmitProposal response type */
export interface MsgSubmitProposalResponse {
    proposalId: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
    typeUrl: "/kava.committee.v1beta1.MsgSubmitProposalResponse";
    value: Uint8Array;
}
/** MsgSubmitProposalResponse defines the SubmitProposal response type */
export interface MsgSubmitProposalResponseAmino {
    proposal_id: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
    type: "/kava.committee.v1beta1.MsgSubmitProposalResponse";
    value: MsgSubmitProposalResponseAmino;
}
/** MsgSubmitProposalResponse defines the SubmitProposal response type */
export interface MsgSubmitProposalResponseSDKType {
    proposal_id: bigint;
}
/** MsgVote is submitted by committee members to vote on proposals. */
export interface MsgVote {
    proposalId: bigint;
    voter: string;
    voteType: VoteType;
}
export interface MsgVoteProtoMsg {
    typeUrl: "/kava.committee.v1beta1.MsgVote";
    value: Uint8Array;
}
/** MsgVote is submitted by committee members to vote on proposals. */
export interface MsgVoteAmino {
    proposal_id: string;
    voter: string;
    vote_type: VoteType;
}
export interface MsgVoteAminoMsg {
    type: "/kava.committee.v1beta1.MsgVote";
    value: MsgVoteAmino;
}
/** MsgVote is submitted by committee members to vote on proposals. */
export interface MsgVoteSDKType {
    proposal_id: bigint;
    voter: string;
    vote_type: VoteType;
}
/** MsgVoteResponse defines the Vote response type */
export interface MsgVoteResponse {
}
export interface MsgVoteResponseProtoMsg {
    typeUrl: "/kava.committee.v1beta1.MsgVoteResponse";
    value: Uint8Array;
}
/** MsgVoteResponse defines the Vote response type */
export interface MsgVoteResponseAmino {
}
export interface MsgVoteResponseAminoMsg {
    type: "/kava.committee.v1beta1.MsgVoteResponse";
    value: MsgVoteResponseAmino;
}
/** MsgVoteResponse defines the Vote response type */
export interface MsgVoteResponseSDKType {
}
export declare const MsgSubmitProposal: {
    typeUrl: string;
    encode(message: MsgSubmitProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitProposal;
    fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal;
    fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal;
    toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino;
    fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal;
    fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal;
    toProto(message: MsgSubmitProposal): Uint8Array;
    toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg;
};
export declare const MsgSubmitProposalResponse: {
    typeUrl: string;
    encode(message: MsgSubmitProposalResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitProposalResponse;
    fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse;
    fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse;
    toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino;
    fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse;
    fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse;
    toProto(message: MsgSubmitProposalResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg;
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
export declare const Cosmos_govv1beta1Content_InterfaceDecoder: (input: BinaryReader | Uint8Array) => CommitteeChangeProposal | CommitteeDeleteProposal | CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | Any;
export declare const Cosmos_govv1beta1Content_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_govv1beta1Content_ToAmino: (content: Any) => AnyAmino;
