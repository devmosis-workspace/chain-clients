import { CodeAuthorization, CodeAuthorizationAmino, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationAmino, ContractAuthorizationSDKType } from "./globalfee";
import { BinaryWriter } from "../../../binary";
export interface SetCodeAuthorizationProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    codeAuthorization: CodeAuthorization;
}
export interface SetCodeAuthorizationProposalProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
    value: Uint8Array;
}
export interface SetCodeAuthorizationProposalAmino {
    title: string;
    description: string;
    code_authorization?: CodeAuthorizationAmino;
}
export interface SetCodeAuthorizationProposalAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
    value: SetCodeAuthorizationProposalAmino;
}
export interface SetCodeAuthorizationProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    code_authorization: CodeAuthorizationSDKType;
}
export interface RemoveCodeAuthorizationProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    codeId: bigint;
}
export interface RemoveCodeAuthorizationProposalProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
    value: Uint8Array;
}
export interface RemoveCodeAuthorizationProposalAmino {
    title: string;
    description: string;
    code_id: string;
}
export interface RemoveCodeAuthorizationProposalAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
    value: RemoveCodeAuthorizationProposalAmino;
}
export interface RemoveCodeAuthorizationProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    code_id: bigint;
}
export interface SetContractAuthorizationProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    contractAuthorization: ContractAuthorization;
}
export interface SetContractAuthorizationProposalProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
    value: Uint8Array;
}
export interface SetContractAuthorizationProposalAmino {
    title: string;
    description: string;
    contract_authorization?: ContractAuthorizationAmino;
}
export interface SetContractAuthorizationProposalAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
    value: SetContractAuthorizationProposalAmino;
}
export interface SetContractAuthorizationProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    contract_authorization: ContractAuthorizationSDKType;
}
export interface RemoveContractAuthorizationProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    contractAddress: string;
}
export interface RemoveContractAuthorizationProposalProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
    value: Uint8Array;
}
export interface RemoveContractAuthorizationProposalAmino {
    title: string;
    description: string;
    contract_address: string;
}
export interface RemoveContractAuthorizationProposalAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
    value: RemoveContractAuthorizationProposalAmino;
}
export interface RemoveContractAuthorizationProposalSDKType {
    $typeUrl?: string;
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
    fromProtoMsg(message: RemoveContractAuthorizationProposalProtoMsg): RemoveContractAuthorizationProposal;
    toProto(message: RemoveContractAuthorizationProposal): Uint8Array;
    toProtoMsg(message: RemoveContractAuthorizationProposal): RemoveContractAuthorizationProposalProtoMsg;
};
