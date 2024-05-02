import { BinaryWriter } from "../../../../binary";
/**
 * Deprecated: Do not use. To promote a contract, a
 * MsgPromoteToPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface PromoteToPrivilegedContractProposal {
    $typeUrl?: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the bech32 address of the smart contract */
    contract: string;
}
export interface PromoteToPrivilegedContractProposalProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. To promote a contract, a
 * MsgPromoteToPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface PromoteToPrivilegedContractProposalAmino {
    /** Title is a short summary */
    title?: string;
    /** Description is a human readable text */
    description?: string;
    /** Contract is the bech32 address of the smart contract */
    contract?: string;
}
export interface PromoteToPrivilegedContractProposalAminoMsg {
    type: "cron/PromoteToPrivilegedContractProposal";
    value: PromoteToPrivilegedContractProposalAmino;
}
/**
 * Deprecated: Do not use. To promote a contract, a
 * MsgPromoteToPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface PromoteToPrivilegedContractProposalSDKType {
    $typeUrl?: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal";
    title: string;
    description: string;
    contract: string;
}
/**
 * Deprecated: Do not use. To demote a contract, a
 * MsgDemoteFromPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface DemotePrivilegedContractProposal {
    $typeUrl?: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal";
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the bech32 address of the smart contract */
    contract: string;
}
export interface DemotePrivilegedContractProposalProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. To demote a contract, a
 * MsgDemoteFromPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface DemotePrivilegedContractProposalAmino {
    /** Title is a short summary */
    title?: string;
    /** Description is a human readable text */
    description?: string;
    /** Contract is the bech32 address of the smart contract */
    contract?: string;
}
export interface DemotePrivilegedContractProposalAminoMsg {
    type: "cron/DemotePrivilegedContractProposal";
    value: DemotePrivilegedContractProposalAmino;
}
/**
 * Deprecated: Do not use. To demote a contract, a
 * MsgDemoteFromPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface DemotePrivilegedContractProposalSDKType {
    $typeUrl?: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal";
    title: string;
    description: string;
    contract: string;
}
export declare const PromoteToPrivilegedContractProposal: {
    typeUrl: string;
    encode(message: PromoteToPrivilegedContractProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PromoteToPrivilegedContractProposal;
    fromPartial(object: Partial<PromoteToPrivilegedContractProposal>): PromoteToPrivilegedContractProposal;
    fromAmino(object: PromoteToPrivilegedContractProposalAmino): PromoteToPrivilegedContractProposal;
    toAmino(message: PromoteToPrivilegedContractProposal): PromoteToPrivilegedContractProposalAmino;
    fromAminoMsg(object: PromoteToPrivilegedContractProposalAminoMsg): PromoteToPrivilegedContractProposal;
    toAminoMsg(message: PromoteToPrivilegedContractProposal): PromoteToPrivilegedContractProposalAminoMsg;
    fromProtoMsg(message: PromoteToPrivilegedContractProposalProtoMsg): PromoteToPrivilegedContractProposal;
    toProto(message: PromoteToPrivilegedContractProposal): Uint8Array;
    toProtoMsg(message: PromoteToPrivilegedContractProposal): PromoteToPrivilegedContractProposalProtoMsg;
};
export declare const DemotePrivilegedContractProposal: {
    typeUrl: string;
    encode(message: DemotePrivilegedContractProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DemotePrivilegedContractProposal;
    fromPartial(object: Partial<DemotePrivilegedContractProposal>): DemotePrivilegedContractProposal;
    fromAmino(object: DemotePrivilegedContractProposalAmino): DemotePrivilegedContractProposal;
    toAmino(message: DemotePrivilegedContractProposal): DemotePrivilegedContractProposalAmino;
    fromAminoMsg(object: DemotePrivilegedContractProposalAminoMsg): DemotePrivilegedContractProposal;
    toAminoMsg(message: DemotePrivilegedContractProposal): DemotePrivilegedContractProposalAminoMsg;
    fromProtoMsg(message: DemotePrivilegedContractProposalProtoMsg): DemotePrivilegedContractProposal;
    toProto(message: DemotePrivilegedContractProposal): Uint8Array;
    toProtoMsg(message: DemotePrivilegedContractProposal): DemotePrivilegedContractProposalProtoMsg;
};
