import { StoreCodeProposal, StoreCodeProposalSDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum FundingMode {
    Unspecified = 0,
    SelfFunded = 1,
    GrantOnly = 2,
    Dual = 3,
    UNRECOGNIZED = -1
}
export declare const FundingModeSDKType: typeof FundingMode;
export declare function fundingModeFromJSON(object: any): FundingMode;
export declare function fundingModeToJSON(object: FundingMode): string;
export interface ContractRegistrationRequestProposal {
    title: string;
    description: string;
    contractRegistrationRequest?: ContractRegistrationRequest;
}
export interface ContractRegistrationRequestProposalSDKType {
    title: string;
    description: string;
    contract_registration_request?: ContractRegistrationRequestSDKType;
}
export interface BatchContractRegistrationRequestProposal {
    title: string;
    description: string;
    contractRegistrationRequests: ContractRegistrationRequest[];
}
export interface BatchContractRegistrationRequestProposalSDKType {
    title: string;
    description: string;
    contract_registration_requests: ContractRegistrationRequestSDKType[];
}
export interface BatchContractDeregistrationProposal {
    title: string;
    description: string;
    contracts: string[];
}
export interface BatchContractDeregistrationProposalSDKType {
    title: string;
    description: string;
    contracts: string[];
}
export interface ContractRegistrationRequest {
    /** Unique Identifier for contract instance to be registered. */
    contractAddress: string;
    /** Maximum gas to be used for the smart contract execution. */
    gasLimit: Long;
    /** gas price to be used for the smart contract execution. */
    gasPrice: Long;
    shouldPinContract: boolean;
    /**
     * if true contract owner can update it, if false only current code_id will be
     * allowed to be executed
     */
    isMigrationAllowed: boolean;
    /**
     * code_id of the contract being registered - will be verified upon every
     * execution but only if is_migration_allowed is false
     */
    codeId: Long;
    /**
     * Optional address of admin account (that will be allowed to pause or update
     * contract params)
     */
    adminAddress: string;
    /**
     * Optional address of the contract that grants fees. Must be set if
     * funding_mode is other than SelfFunded
     */
    granterAddress: string;
    /** Specifies how the contract will fund its execution */
    fundingMode: FundingMode;
}
export interface ContractRegistrationRequestSDKType {
    contract_address: string;
    gas_limit: Long;
    gas_price: Long;
    should_pin_contract: boolean;
    is_migration_allowed: boolean;
    code_id: Long;
    admin_address: string;
    granter_address: string;
    funding_mode: FundingMode;
}
export interface BatchStoreCodeProposal {
    title: string;
    description: string;
    proposals: StoreCodeProposal[];
}
export interface BatchStoreCodeProposalSDKType {
    title: string;
    description: string;
    proposals: StoreCodeProposalSDKType[];
}
export declare const ContractRegistrationRequestProposal: {
    encode(message: ContractRegistrationRequestProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractRegistrationRequestProposal;
    fromPartial(object: Partial<ContractRegistrationRequestProposal>): ContractRegistrationRequestProposal;
};
export declare const BatchContractRegistrationRequestProposal: {
    encode(message: BatchContractRegistrationRequestProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchContractRegistrationRequestProposal;
    fromPartial(object: Partial<BatchContractRegistrationRequestProposal>): BatchContractRegistrationRequestProposal;
};
export declare const BatchContractDeregistrationProposal: {
    encode(message: BatchContractDeregistrationProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchContractDeregistrationProposal;
    fromPartial(object: Partial<BatchContractDeregistrationProposal>): BatchContractDeregistrationProposal;
};
export declare const ContractRegistrationRequest: {
    encode(message: ContractRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractRegistrationRequest;
    fromPartial(object: Partial<ContractRegistrationRequest>): ContractRegistrationRequest;
};
export declare const BatchStoreCodeProposal: {
    encode(message: BatchStoreCodeProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchStoreCodeProposal;
    fromPartial(object: Partial<BatchStoreCodeProposal>): BatchStoreCodeProposal;
};
