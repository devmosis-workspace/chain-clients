import { BinaryWriter } from "../../../binary";
/**
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposal {
    $typeUrl?: string;
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
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the bech32 address of the smart contract */
    contract: string;
}
export interface PromoteToPrivilegedContractProposalAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal";
    value: PromoteToPrivilegedContractProposalAmino;
}
/**
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    contract: string;
}
/**
 * DemotePrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposal {
    $typeUrl?: string;
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
 * DemotePrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the bech32 address of the smart contract */
    contract: string;
}
export interface DemotePrivilegedContractProposalAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal";
    value: DemotePrivilegedContractProposalAmino;
}
/**
 * DemotePrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposalSDKType {
    $typeUrl?: string;
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
    fromProtoMsg(message: DemotePrivilegedContractProposalProtoMsg): DemotePrivilegedContractProposal;
    toProto(message: DemotePrivilegedContractProposal): Uint8Array;
    toProtoMsg(message: DemotePrivilegedContractProposal): DemotePrivilegedContractProposalProtoMsg;
};
