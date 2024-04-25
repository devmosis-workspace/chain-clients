import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BaseCommittee, BaseCommitteeProtoMsg, BaseCommitteeSDKType, MemberCommittee, MemberCommitteeProtoMsg, MemberCommitteeSDKType, TokenCommittee, TokenCommitteeProtoMsg, TokenCommitteeSDKType } from "./committee";
import { CommitteeChangeProposal, CommitteeChangeProposalProtoMsg, CommitteeChangeProposalSDKType, CommitteeDeleteProposal, CommitteeDeleteProposalProtoMsg, CommitteeDeleteProposalSDKType } from "./proposal";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg, CommunityPoolSpendProposalWithDepositSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import { TextProposal, TextProposalProtoMsg, TextProposalSDKType } from "../../../cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal, ParameterChangeProposalProtoMsg, ParameterChangeProposalSDKType } from "../../../cosmos/params/v1beta1/params";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalProtoMsg, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalProtoMsg, CancelSoftwareUpgradeProposalSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** VoteType enumerates the valid types of a vote. */
export declare enum VoteType {
    /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED defines a no-op vote option. */
    VOTE_TYPE_UNSPECIFIED = 0,
    /** VOTE_TYPE_YES - VOTE_TYPE_YES defines a yes vote option. */
    VOTE_TYPE_YES = 1,
    /** VOTE_TYPE_NO - VOTE_TYPE_NO defines a no vote option. */
    VOTE_TYPE_NO = 2,
    /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN defines an abstain vote option. */
    VOTE_TYPE_ABSTAIN = 3,
    UNRECOGNIZED = -1
}
export declare const VoteTypeSDKType: typeof VoteType;
export declare const VoteTypeAmino: typeof VoteType;
export declare function voteTypeFromJSON(object: any): VoteType;
export declare function voteTypeToJSON(object: VoteType): string;
/** GenesisState defines the committee module's genesis state. */
export interface GenesisState {
    nextProposalId: bigint;
    committees: (BaseCommittee & MemberCommittee & TokenCommittee & Any)[] | Any[];
    proposals: Proposal[];
    votes: Vote[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.committee.v1beta1.GenesisState";
    value: Uint8Array;
}
export type GenesisStateEncoded = Omit<GenesisState, "committees"> & {
    committees: (BaseCommitteeProtoMsg | MemberCommitteeProtoMsg | TokenCommitteeProtoMsg | AnyProtoMsg)[];
};
/** GenesisState defines the committee module's genesis state. */
export interface GenesisStateAmino {
    next_proposal_id?: string;
    committees?: AnyAmino[];
    proposals?: ProposalAmino[];
    votes?: VoteAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/kava.committee.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the committee module's genesis state. */
export interface GenesisStateSDKType {
    next_proposal_id: bigint;
    committees: (BaseCommitteeSDKType | MemberCommitteeSDKType | TokenCommitteeSDKType | AnySDKType)[];
    proposals: ProposalSDKType[];
    votes: VoteSDKType[];
}
/** Proposal is an internal record of a governance proposal submitted to a committee. */
export interface Proposal {
    content?: (CommitteeChangeProposal & CommitteeDeleteProposal & CommunityPoolSpendProposal & CommunityPoolSpendProposalWithDeposit & TextProposal & ParameterChangeProposal & SoftwareUpgradeProposal & CancelSoftwareUpgradeProposal & Any) | undefined;
    id: bigint;
    committeeId: bigint;
    deadline: Timestamp;
}
export interface ProposalProtoMsg {
    typeUrl: "/kava.committee.v1beta1.Proposal";
    value: Uint8Array;
}
export type ProposalEncoded = Omit<Proposal, "content"> & {
    content?: CommitteeChangeProposalProtoMsg | CommitteeDeleteProposalProtoMsg | CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | TextProposalProtoMsg | ParameterChangeProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | AnyProtoMsg | undefined;
};
/** Proposal is an internal record of a governance proposal submitted to a committee. */
export interface ProposalAmino {
    content?: AnyAmino;
    id?: string;
    committee_id?: string;
    deadline?: string;
}
export interface ProposalAminoMsg {
    type: "/kava.committee.v1beta1.Proposal";
    value: ProposalAmino;
}
/** Proposal is an internal record of a governance proposal submitted to a committee. */
export interface ProposalSDKType {
    content?: CommitteeChangeProposalSDKType | CommitteeDeleteProposalSDKType | CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | TextProposalSDKType | ParameterChangeProposalSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | AnySDKType | undefined;
    id: bigint;
    committee_id: bigint;
    deadline: TimestampSDKType;
}
/** Vote is an internal record of a single governance vote. */
export interface Vote {
    proposalId: bigint;
    voter: Uint8Array;
    voteType: VoteType;
}
export interface VoteProtoMsg {
    typeUrl: "/kava.committee.v1beta1.Vote";
    value: Uint8Array;
}
/** Vote is an internal record of a single governance vote. */
export interface VoteAmino {
    proposal_id?: string;
    voter?: string;
    vote_type?: VoteType;
}
export interface VoteAminoMsg {
    type: "/kava.committee.v1beta1.Vote";
    value: VoteAmino;
}
/** Vote is an internal record of a single governance vote. */
export interface VoteSDKType {
    proposal_id: bigint;
    voter: Uint8Array;
    vote_type: VoteType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
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
export declare const Committee_InterfaceDecoder: (input: BinaryReader | Uint8Array) => BaseCommittee | MemberCommittee | TokenCommittee | Any;
export declare const Committee_FromAmino: (content: AnyAmino) => Any;
export declare const Committee_ToAmino: (content: Any) => AnyAmino;
export declare const Cosmos_govv1beta1Content_InterfaceDecoder: (input: BinaryReader | Uint8Array) => CommitteeChangeProposal | CommitteeDeleteProposal | CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | TextProposal | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | Any;
export declare const Cosmos_govv1beta1Content_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_govv1beta1Content_ToAmino: (content: Any) => AnyAmino;
