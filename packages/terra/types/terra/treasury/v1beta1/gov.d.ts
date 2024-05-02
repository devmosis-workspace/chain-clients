import { BinaryWriter } from "../../../binary";
/** proposal request structure for adding burn tax exemption address(es) */
export interface AddBurnTaxExemptionAddressProposal {
    title: string;
    description: string;
    addresses: string[];
}
export interface AddBurnTaxExemptionAddressProposalProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.AddBurnTaxExemptionAddressProposal";
    value: Uint8Array;
}
/** proposal request structure for adding burn tax exemption address(es) */
export interface AddBurnTaxExemptionAddressProposalAmino {
    title?: string;
    description?: string;
    addresses?: string[];
}
export interface AddBurnTaxExemptionAddressProposalAminoMsg {
    type: "/terra.treasury.v1beta1.AddBurnTaxExemptionAddressProposal";
    value: AddBurnTaxExemptionAddressProposalAmino;
}
/** proposal request structure for adding burn tax exemption address(es) */
export interface AddBurnTaxExemptionAddressProposalSDKType {
    title: string;
    description: string;
    addresses: string[];
}
/** proposal request structure for removing burn tax exemption address(es) */
export interface RemoveBurnTaxExemptionAddressProposal {
    title: string;
    description: string;
    addresses: string[];
}
export interface RemoveBurnTaxExemptionAddressProposalProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.RemoveBurnTaxExemptionAddressProposal";
    value: Uint8Array;
}
/** proposal request structure for removing burn tax exemption address(es) */
export interface RemoveBurnTaxExemptionAddressProposalAmino {
    title?: string;
    description?: string;
    addresses?: string[];
}
export interface RemoveBurnTaxExemptionAddressProposalAminoMsg {
    type: "/terra.treasury.v1beta1.RemoveBurnTaxExemptionAddressProposal";
    value: RemoveBurnTaxExemptionAddressProposalAmino;
}
/** proposal request structure for removing burn tax exemption address(es) */
export interface RemoveBurnTaxExemptionAddressProposalSDKType {
    title: string;
    description: string;
    addresses: string[];
}
export declare const AddBurnTaxExemptionAddressProposal: {
    typeUrl: string;
    encode(message: AddBurnTaxExemptionAddressProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddBurnTaxExemptionAddressProposal;
    fromPartial(object: Partial<AddBurnTaxExemptionAddressProposal>): AddBurnTaxExemptionAddressProposal;
    fromAmino(object: AddBurnTaxExemptionAddressProposalAmino): AddBurnTaxExemptionAddressProposal;
    toAmino(message: AddBurnTaxExemptionAddressProposal): AddBurnTaxExemptionAddressProposalAmino;
    fromAminoMsg(object: AddBurnTaxExemptionAddressProposalAminoMsg): AddBurnTaxExemptionAddressProposal;
    fromProtoMsg(message: AddBurnTaxExemptionAddressProposalProtoMsg): AddBurnTaxExemptionAddressProposal;
    toProto(message: AddBurnTaxExemptionAddressProposal): Uint8Array;
    toProtoMsg(message: AddBurnTaxExemptionAddressProposal): AddBurnTaxExemptionAddressProposalProtoMsg;
};
export declare const RemoveBurnTaxExemptionAddressProposal: {
    typeUrl: string;
    encode(message: RemoveBurnTaxExemptionAddressProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveBurnTaxExemptionAddressProposal;
    fromPartial(object: Partial<RemoveBurnTaxExemptionAddressProposal>): RemoveBurnTaxExemptionAddressProposal;
    fromAmino(object: RemoveBurnTaxExemptionAddressProposalAmino): RemoveBurnTaxExemptionAddressProposal;
    toAmino(message: RemoveBurnTaxExemptionAddressProposal): RemoveBurnTaxExemptionAddressProposalAmino;
    fromAminoMsg(object: RemoveBurnTaxExemptionAddressProposalAminoMsg): RemoveBurnTaxExemptionAddressProposal;
    fromProtoMsg(message: RemoveBurnTaxExemptionAddressProposalProtoMsg): RemoveBurnTaxExemptionAddressProposal;
    toProto(message: RemoveBurnTaxExemptionAddressProposal): Uint8Array;
    toProtoMsg(message: RemoveBurnTaxExemptionAddressProposal): RemoveBurnTaxExemptionAddressProposalProtoMsg;
};
