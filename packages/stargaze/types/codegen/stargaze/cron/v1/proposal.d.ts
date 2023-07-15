import * as _m0 from "protobufjs/minimal";
/**
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the bech32 address of the smart contract */
    contract: string;
}
/**
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposalSDKType {
    title: string;
    description: string;
    contract: string;
}
/**
 * DemotePrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the bech32 address of the smart contract */
    contract: string;
}
/**
 * DemotePrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposalSDKType {
    title: string;
    description: string;
    contract: string;
}
export declare const PromoteToPrivilegedContractProposal: {
    encode(message: PromoteToPrivilegedContractProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PromoteToPrivilegedContractProposal;
    fromPartial(object: Partial<PromoteToPrivilegedContractProposal>): PromoteToPrivilegedContractProposal;
};
export declare const DemotePrivilegedContractProposal: {
    encode(message: DemotePrivilegedContractProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DemotePrivilegedContractProposal;
    fromPartial(object: Partial<DemotePrivilegedContractProposal>): DemotePrivilegedContractProposal;
};
