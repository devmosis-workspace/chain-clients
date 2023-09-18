import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BaseCommittee, BaseCommitteeProtoMsg, BaseCommitteeSDKType, MemberCommittee, MemberCommitteeProtoMsg, MemberCommitteeSDKType, TokenCommittee, TokenCommitteeProtoMsg, TokenCommitteeSDKType } from "./committee";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */
export interface CommitteeChangeProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    newCommittee: (BaseCommittee & MemberCommittee & TokenCommittee & Any) | undefined;
}
export interface CommitteeChangeProposalProtoMsg {
    typeUrl: "/kava.committee.v1beta1.CommitteeChangeProposal";
    value: Uint8Array;
}
export type CommitteeChangeProposalEncoded = Omit<CommitteeChangeProposal, "newCommittee"> & {
    newCommittee?: BaseCommitteeProtoMsg | MemberCommitteeProtoMsg | TokenCommitteeProtoMsg | AnyProtoMsg | undefined;
};
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */
export interface CommitteeChangeProposalAmino {
    title: string;
    description: string;
    new_committee?: AnyAmino;
}
export interface CommitteeChangeProposalAminoMsg {
    type: "/kava.committee.v1beta1.CommitteeChangeProposal";
    value: CommitteeChangeProposalAmino;
}
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */
export interface CommitteeChangeProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    new_committee: BaseCommitteeSDKType | MemberCommitteeSDKType | TokenCommitteeSDKType | AnySDKType | undefined;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */
export interface CommitteeDeleteProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    committeeId: bigint;
}
export interface CommitteeDeleteProposalProtoMsg {
    typeUrl: "/kava.committee.v1beta1.CommitteeDeleteProposal";
    value: Uint8Array;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */
export interface CommitteeDeleteProposalAmino {
    title: string;
    description: string;
    committee_id: string;
}
export interface CommitteeDeleteProposalAminoMsg {
    type: "/kava.committee.v1beta1.CommitteeDeleteProposal";
    value: CommitteeDeleteProposalAmino;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */
export interface CommitteeDeleteProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    committee_id: bigint;
}
export declare const CommitteeChangeProposal: {
    typeUrl: string;
    encode(message: CommitteeChangeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommitteeChangeProposal;
    fromPartial(object: Partial<CommitteeChangeProposal>): CommitteeChangeProposal;
    fromAmino(object: CommitteeChangeProposalAmino): CommitteeChangeProposal;
    toAmino(message: CommitteeChangeProposal): CommitteeChangeProposalAmino;
    fromAminoMsg(object: CommitteeChangeProposalAminoMsg): CommitteeChangeProposal;
    fromProtoMsg(message: CommitteeChangeProposalProtoMsg): CommitteeChangeProposal;
    toProto(message: CommitteeChangeProposal): Uint8Array;
    toProtoMsg(message: CommitteeChangeProposal): CommitteeChangeProposalProtoMsg;
};
export declare const CommitteeDeleteProposal: {
    typeUrl: string;
    encode(message: CommitteeDeleteProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommitteeDeleteProposal;
    fromPartial(object: Partial<CommitteeDeleteProposal>): CommitteeDeleteProposal;
    fromAmino(object: CommitteeDeleteProposalAmino): CommitteeDeleteProposal;
    toAmino(message: CommitteeDeleteProposal): CommitteeDeleteProposalAmino;
    fromAminoMsg(object: CommitteeDeleteProposalAminoMsg): CommitteeDeleteProposal;
    fromProtoMsg(message: CommitteeDeleteProposalProtoMsg): CommitteeDeleteProposal;
    toProto(message: CommitteeDeleteProposal): Uint8Array;
    toProtoMsg(message: CommitteeDeleteProposal): CommitteeDeleteProposalProtoMsg;
};
export declare const Committee_InterfaceDecoder: (input: BinaryReader | Uint8Array) => BaseCommittee | MemberCommittee | TokenCommittee | Any;
export declare const Committee_FromAmino: (content: AnyAmino) => Any;
export declare const Committee_ToAmino: (content: Any) => AnyAmino;
