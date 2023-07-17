import { CellarIDSet, CellarIDSetSDKType } from "./cork";
import * as _m0 from "protobufjs/minimal";
export interface AddManagedCellarIDsProposal {
    title: string;
    description: string;
    cellarIds?: CellarIDSet;
}
export interface AddManagedCellarIDsProposalSDKType {
    title: string;
    description: string;
    cellar_ids?: CellarIDSetSDKType;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDeposit {
    title: string;
    description: string;
    cellarIds: string[];
    deposit: string;
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
    cellarIds?: CellarIDSet;
}
export interface RemoveManagedCellarIDsProposalSDKType {
    title: string;
    description: string;
    cellar_ids?: CellarIDSetSDKType;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDeposit {
    title: string;
    description: string;
    cellarIds: string[];
    deposit: string;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDepositSDKType {
    title: string;
    description: string;
    cellar_ids: string[];
    deposit: string;
}
export declare const AddManagedCellarIDsProposal: {
    encode(message: AddManagedCellarIDsProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AddManagedCellarIDsProposal;
    fromPartial(object: Partial<AddManagedCellarIDsProposal>): AddManagedCellarIDsProposal;
};
export declare const AddManagedCellarIDsProposalWithDeposit: {
    encode(message: AddManagedCellarIDsProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AddManagedCellarIDsProposalWithDeposit;
    fromPartial(object: Partial<AddManagedCellarIDsProposalWithDeposit>): AddManagedCellarIDsProposalWithDeposit;
};
export declare const RemoveManagedCellarIDsProposal: {
    encode(message: RemoveManagedCellarIDsProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RemoveManagedCellarIDsProposal;
    fromPartial(object: Partial<RemoveManagedCellarIDsProposal>): RemoveManagedCellarIDsProposal;
};
export declare const RemoveManagedCellarIDsProposalWithDeposit: {
    encode(message: RemoveManagedCellarIDsProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RemoveManagedCellarIDsProposalWithDeposit;
    fromPartial(object: Partial<RemoveManagedCellarIDsProposalWithDeposit>): RemoveManagedCellarIDsProposalWithDeposit;
};
