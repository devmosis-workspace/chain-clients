import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
export interface AddManagedCellarIDsProposal {
    title: string;
    description: string;
    cellarIds: CellarIDSet;
}
export interface AddManagedCellarIDsProposalProtoMsg {
    typeUrl: "/cork.v1.AddManagedCellarIDsProposal";
    value: Uint8Array;
}
export interface AddManagedCellarIDsProposalAmino {
    title: string;
    description: string;
    cellar_ids?: CellarIDSetAmino;
}
export interface AddManagedCellarIDsProposalAminoMsg {
    type: "/cork.v1.AddManagedCellarIDsProposal";
    value: AddManagedCellarIDsProposalAmino;
}
export interface AddManagedCellarIDsProposalSDKType {
    title: string;
    description: string;
    cellar_ids: CellarIDSetSDKType;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDeposit {
    title: string;
    description: string;
    cellarIds: string[];
    deposit: string;
}
export interface AddManagedCellarIDsProposalWithDepositProtoMsg {
    typeUrl: "/cork.v1.AddManagedCellarIDsProposalWithDeposit";
    value: Uint8Array;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDepositAmino {
    title: string;
    description: string;
    cellar_ids: string[];
    deposit: string;
}
export interface AddManagedCellarIDsProposalWithDepositAminoMsg {
    type: "/cork.v1.AddManagedCellarIDsProposalWithDeposit";
    value: AddManagedCellarIDsProposalWithDepositAmino;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDepositSDKType {
    title: string;
    description: string;
    cellar_ids: string[];
    deposit: string;
}
export interface RemoveManagedCellarIDsProposal {
    title: string;
    description: string;
    cellarIds: CellarIDSet;
}
export interface RemoveManagedCellarIDsProposalProtoMsg {
    typeUrl: "/cork.v1.RemoveManagedCellarIDsProposal";
    value: Uint8Array;
}
export interface RemoveManagedCellarIDsProposalAmino {
    title: string;
    description: string;
    cellar_ids?: CellarIDSetAmino;
}
export interface RemoveManagedCellarIDsProposalAminoMsg {
    type: "/cork.v1.RemoveManagedCellarIDsProposal";
    value: RemoveManagedCellarIDsProposalAmino;
}
export interface RemoveManagedCellarIDsProposalSDKType {
    title: string;
    description: string;
    cellar_ids: CellarIDSetSDKType;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDeposit {
    title: string;
    description: string;
    cellarIds: string[];
    deposit: string;
}
export interface RemoveManagedCellarIDsProposalWithDepositProtoMsg {
    typeUrl: "/cork.v1.RemoveManagedCellarIDsProposalWithDeposit";
    value: Uint8Array;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDepositAmino {
    title: string;
    description: string;
    cellar_ids: string[];
    deposit: string;
}
export interface RemoveManagedCellarIDsProposalWithDepositAminoMsg {
    type: "/cork.v1.RemoveManagedCellarIDsProposalWithDeposit";
    value: RemoveManagedCellarIDsProposalWithDepositAmino;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDepositSDKType {
    title: string;
    description: string;
    cellar_ids: string[];
    deposit: string;
}
export declare const AddManagedCellarIDsProposal: {
    typeUrl: string;
    encode(message: AddManagedCellarIDsProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddManagedCellarIDsProposal;
    fromPartial(object: Partial<AddManagedCellarIDsProposal>): AddManagedCellarIDsProposal;
    fromAmino(object: AddManagedCellarIDsProposalAmino): AddManagedCellarIDsProposal;
    toAmino(message: AddManagedCellarIDsProposal): AddManagedCellarIDsProposalAmino;
    fromAminoMsg(object: AddManagedCellarIDsProposalAminoMsg): AddManagedCellarIDsProposal;
    fromProtoMsg(message: AddManagedCellarIDsProposalProtoMsg): AddManagedCellarIDsProposal;
    toProto(message: AddManagedCellarIDsProposal): Uint8Array;
    toProtoMsg(message: AddManagedCellarIDsProposal): AddManagedCellarIDsProposalProtoMsg;
};
export declare const AddManagedCellarIDsProposalWithDeposit: {
    typeUrl: string;
    encode(message: AddManagedCellarIDsProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddManagedCellarIDsProposalWithDeposit;
    fromPartial(object: Partial<AddManagedCellarIDsProposalWithDeposit>): AddManagedCellarIDsProposalWithDeposit;
    fromAmino(object: AddManagedCellarIDsProposalWithDepositAmino): AddManagedCellarIDsProposalWithDeposit;
    toAmino(message: AddManagedCellarIDsProposalWithDeposit): AddManagedCellarIDsProposalWithDepositAmino;
    fromAminoMsg(object: AddManagedCellarIDsProposalWithDepositAminoMsg): AddManagedCellarIDsProposalWithDeposit;
    fromProtoMsg(message: AddManagedCellarIDsProposalWithDepositProtoMsg): AddManagedCellarIDsProposalWithDeposit;
    toProto(message: AddManagedCellarIDsProposalWithDeposit): Uint8Array;
    toProtoMsg(message: AddManagedCellarIDsProposalWithDeposit): AddManagedCellarIDsProposalWithDepositProtoMsg;
};
export declare const RemoveManagedCellarIDsProposal: {
    typeUrl: string;
    encode(message: RemoveManagedCellarIDsProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveManagedCellarIDsProposal;
    fromPartial(object: Partial<RemoveManagedCellarIDsProposal>): RemoveManagedCellarIDsProposal;
    fromAmino(object: RemoveManagedCellarIDsProposalAmino): RemoveManagedCellarIDsProposal;
    toAmino(message: RemoveManagedCellarIDsProposal): RemoveManagedCellarIDsProposalAmino;
    fromAminoMsg(object: RemoveManagedCellarIDsProposalAminoMsg): RemoveManagedCellarIDsProposal;
    fromProtoMsg(message: RemoveManagedCellarIDsProposalProtoMsg): RemoveManagedCellarIDsProposal;
    toProto(message: RemoveManagedCellarIDsProposal): Uint8Array;
    toProtoMsg(message: RemoveManagedCellarIDsProposal): RemoveManagedCellarIDsProposalProtoMsg;
};
export declare const RemoveManagedCellarIDsProposalWithDeposit: {
    typeUrl: string;
    encode(message: RemoveManagedCellarIDsProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveManagedCellarIDsProposalWithDeposit;
    fromPartial(object: Partial<RemoveManagedCellarIDsProposalWithDeposit>): RemoveManagedCellarIDsProposalWithDeposit;
    fromAmino(object: RemoveManagedCellarIDsProposalWithDepositAmino): RemoveManagedCellarIDsProposalWithDeposit;
    toAmino(message: RemoveManagedCellarIDsProposalWithDeposit): RemoveManagedCellarIDsProposalWithDepositAmino;
    fromAminoMsg(object: RemoveManagedCellarIDsProposalWithDepositAminoMsg): RemoveManagedCellarIDsProposalWithDeposit;
    fromProtoMsg(message: RemoveManagedCellarIDsProposalWithDepositProtoMsg): RemoveManagedCellarIDsProposalWithDeposit;
    toProto(message: RemoveManagedCellarIDsProposalWithDeposit): Uint8Array;
    toProtoMsg(message: RemoveManagedCellarIDsProposalWithDeposit): RemoveManagedCellarIDsProposalWithDepositProtoMsg;
};
