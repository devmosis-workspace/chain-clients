import { CodeAuthorization, CodeAuthorizationAmino, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationAmino, ContractAuthorizationSDKType } from "./globalfee";
import { BinaryWriter } from "../../../../binary";
/** SetCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetCodeAuthorizationProposal {
    $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
    title: string;
    description: string;
    codeAuthorization?: CodeAuthorization;
}
export interface SetCodeAuthorizationProposalProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
    value: Uint8Array;
}
/** SetCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetCodeAuthorizationProposalAmino {
    title?: string;
    description?: string;
    code_authorization?: CodeAuthorizationAmino;
}
export interface SetCodeAuthorizationProposalAminoMsg {
    type: "globalfee/SetCodeAuthorizationProposal";
    value: SetCodeAuthorizationProposalAmino;
}
/** SetCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetCodeAuthorizationProposalSDKType {
    $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
    title: string;
    description: string;
    code_authorization?: CodeAuthorizationSDKType;
}
/** RemoveCodeAuthorizationProposal */
/** @deprecated */
export interface RemoveCodeAuthorizationProposal {
    $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
    title: string;
    description: string;
    codeId: bigint;
}
export interface RemoveCodeAuthorizationProposalProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
    value: Uint8Array;
}
/** RemoveCodeAuthorizationProposal */
/** @deprecated */
export interface RemoveCodeAuthorizationProposalAmino {
    title?: string;
    description?: string;
    code_id?: string;
}
export interface RemoveCodeAuthorizationProposalAminoMsg {
    type: "globalfee/RemoveCodeAuthorizationProposal";
    value: RemoveCodeAuthorizationProposalAmino;
}
/** RemoveCodeAuthorizationProposal */
/** @deprecated */
export interface RemoveCodeAuthorizationProposalSDKType {
    $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
    title: string;
    description: string;
    code_id: bigint;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetContractAuthorizationProposal {
    $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
    title: string;
    description: string;
    contractAuthorization?: ContractAuthorization;
}
export interface SetContractAuthorizationProposalProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
    value: Uint8Array;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetContractAuthorizationProposalAmino {
    title?: string;
    description?: string;
    contract_authorization?: ContractAuthorizationAmino;
}
export interface SetContractAuthorizationProposalAminoMsg {
    type: "globalfee/SetContractAuthorizationProposal";
    value: SetContractAuthorizationProposalAmino;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetContractAuthorizationProposalSDKType {
    $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
    title: string;
    description: string;
    contract_authorization?: ContractAuthorizationSDKType;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface RemoveContractAuthorizationProposal {
    $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
    title: string;
    description: string;
    contractAddress: string;
}
export interface RemoveContractAuthorizationProposalProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
    value: Uint8Array;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface RemoveContractAuthorizationProposalAmino {
    title?: string;
    description?: string;
    contract_address?: string;
}
export interface RemoveContractAuthorizationProposalAminoMsg {
    type: "globalfee/RemoveContractAuthorizationProposal";
    value: RemoveContractAuthorizationProposalAmino;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface RemoveContractAuthorizationProposalSDKType {
    $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
    title: string;
    description: string;
    contract_address: string;
}
export declare const SetCodeAuthorizationProposal: {
    typeUrl: string;
    encode(message: SetCodeAuthorizationProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetCodeAuthorizationProposal;
    fromPartial(object: Partial<SetCodeAuthorizationProposal>): SetCodeAuthorizationProposal;
    fromAmino(object: SetCodeAuthorizationProposalAmino): SetCodeAuthorizationProposal;
    toAmino(message: SetCodeAuthorizationProposal): SetCodeAuthorizationProposalAmino;
    fromAminoMsg(object: SetCodeAuthorizationProposalAminoMsg): SetCodeAuthorizationProposal;
    toAminoMsg(message: SetCodeAuthorizationProposal): SetCodeAuthorizationProposalAminoMsg;
    fromProtoMsg(message: SetCodeAuthorizationProposalProtoMsg): SetCodeAuthorizationProposal;
    toProto(message: SetCodeAuthorizationProposal): Uint8Array;
    toProtoMsg(message: SetCodeAuthorizationProposal): SetCodeAuthorizationProposalProtoMsg;
};
export declare const RemoveCodeAuthorizationProposal: {
    typeUrl: string;
    encode(message: RemoveCodeAuthorizationProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveCodeAuthorizationProposal;
    fromPartial(object: Partial<RemoveCodeAuthorizationProposal>): RemoveCodeAuthorizationProposal;
    fromAmino(object: RemoveCodeAuthorizationProposalAmino): RemoveCodeAuthorizationProposal;
    toAmino(message: RemoveCodeAuthorizationProposal): RemoveCodeAuthorizationProposalAmino;
    fromAminoMsg(object: RemoveCodeAuthorizationProposalAminoMsg): RemoveCodeAuthorizationProposal;
    toAminoMsg(message: RemoveCodeAuthorizationProposal): RemoveCodeAuthorizationProposalAminoMsg;
    fromProtoMsg(message: RemoveCodeAuthorizationProposalProtoMsg): RemoveCodeAuthorizationProposal;
    toProto(message: RemoveCodeAuthorizationProposal): Uint8Array;
    toProtoMsg(message: RemoveCodeAuthorizationProposal): RemoveCodeAuthorizationProposalProtoMsg;
};
export declare const SetContractAuthorizationProposal: {
    typeUrl: string;
    encode(message: SetContractAuthorizationProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetContractAuthorizationProposal;
    fromPartial(object: Partial<SetContractAuthorizationProposal>): SetContractAuthorizationProposal;
    fromAmino(object: SetContractAuthorizationProposalAmino): SetContractAuthorizationProposal;
    toAmino(message: SetContractAuthorizationProposal): SetContractAuthorizationProposalAmino;
    fromAminoMsg(object: SetContractAuthorizationProposalAminoMsg): SetContractAuthorizationProposal;
    toAminoMsg(message: SetContractAuthorizationProposal): SetContractAuthorizationProposalAminoMsg;
    fromProtoMsg(message: SetContractAuthorizationProposalProtoMsg): SetContractAuthorizationProposal;
    toProto(message: SetContractAuthorizationProposal): Uint8Array;
    toProtoMsg(message: SetContractAuthorizationProposal): SetContractAuthorizationProposalProtoMsg;
};
export declare const RemoveContractAuthorizationProposal: {
    typeUrl: string;
    encode(message: RemoveContractAuthorizationProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveContractAuthorizationProposal;
    fromPartial(object: Partial<RemoveContractAuthorizationProposal>): RemoveContractAuthorizationProposal;
    fromAmino(object: RemoveContractAuthorizationProposalAmino): RemoveContractAuthorizationProposal;
    toAmino(message: RemoveContractAuthorizationProposal): RemoveContractAuthorizationProposalAmino;
    fromAminoMsg(object: RemoveContractAuthorizationProposalAminoMsg): RemoveContractAuthorizationProposal;
    toAminoMsg(message: RemoveContractAuthorizationProposal): RemoveContractAuthorizationProposalAminoMsg;
    fromProtoMsg(message: RemoveContractAuthorizationProposalProtoMsg): RemoveContractAuthorizationProposal;
    toProto(message: RemoveContractAuthorizationProposal): Uint8Array;
    toProtoMsg(message: RemoveContractAuthorizationProposal): RemoveContractAuthorizationProposalProtoMsg;
};
