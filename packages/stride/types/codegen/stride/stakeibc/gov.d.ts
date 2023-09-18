import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { BinaryWriter } from "../../binary";
export interface AddValidatorsProposal {
    title: string;
    description: string;
    hostZone: string;
    validators: Validator[];
    deposit: string;
}
export interface AddValidatorsProposalProtoMsg {
    typeUrl: "/stride.stakeibc.AddValidatorsProposal";
    value: Uint8Array;
}
export interface AddValidatorsProposalAmino {
    title: string;
    description: string;
    host_zone: string;
    validators: ValidatorAmino[];
    deposit: string;
}
export interface AddValidatorsProposalAminoMsg {
    type: "/stride.stakeibc.AddValidatorsProposal";
    value: AddValidatorsProposalAmino;
}
export interface AddValidatorsProposalSDKType {
    title: string;
    description: string;
    host_zone: string;
    validators: ValidatorSDKType[];
    deposit: string;
}
export declare const AddValidatorsProposal: {
    typeUrl: string;
    encode(message: AddValidatorsProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddValidatorsProposal;
    fromPartial(object: Partial<AddValidatorsProposal>): AddValidatorsProposal;
    fromAmino(object: AddValidatorsProposalAmino): AddValidatorsProposal;
    toAmino(message: AddValidatorsProposal): AddValidatorsProposalAmino;
    fromAminoMsg(object: AddValidatorsProposalAminoMsg): AddValidatorsProposal;
    fromProtoMsg(message: AddValidatorsProposalProtoMsg): AddValidatorsProposal;
    toProto(message: AddValidatorsProposal): Uint8Array;
    toProtoMsg(message: AddValidatorsProposal): AddValidatorsProposalProtoMsg;
};
