import { StoreCodeProposal, StoreCodeProposalAmino, StoreCodeProposalSDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { BinaryWriter } from "../../../binary";
export declare enum FundingMode {
    Unspecified = 0,
    SelfFunded = 1,
    GrantOnly = 2,
    Dual = 3,
    UNRECOGNIZED = -1
}
export declare const FundingModeSDKType: typeof FundingMode;
export declare const FundingModeAmino: typeof FundingMode;
export declare function fundingModeFromJSON(object: any): FundingMode;
export declare function fundingModeToJSON(object: FundingMode): string;
export interface ContractRegistrationRequestProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    contractRegistrationRequest: ContractRegistrationRequest;
}
export interface ContractRegistrationRequestProposalProtoMsg {
    typeUrl: "/injective.wasmx.v1.ContractRegistrationRequestProposal";
    value: Uint8Array;
}
export interface ContractRegistrationRequestProposalAmino {
    title: string;
    description: string;
    contract_registration_request?: ContractRegistrationRequestAmino;
}
export interface ContractRegistrationRequestProposalAminoMsg {
    type: "/injective.wasmx.v1.ContractRegistrationRequestProposal";
    value: ContractRegistrationRequestProposalAmino;
}
export interface ContractRegistrationRequestProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    contract_registration_request: ContractRegistrationRequestSDKType;
}
export interface BatchContractRegistrationRequestProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    contractRegistrationRequests: ContractRegistrationRequest[];
}
export interface BatchContractRegistrationRequestProposalProtoMsg {
    typeUrl: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal";
    value: Uint8Array;
}
export interface BatchContractRegistrationRequestProposalAmino {
    title: string;
    description: string;
    contract_registration_requests: ContractRegistrationRequestAmino[];
}
export interface BatchContractRegistrationRequestProposalAminoMsg {
    type: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal";
    value: BatchContractRegistrationRequestProposalAmino;
}
export interface BatchContractRegistrationRequestProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    contract_registration_requests: ContractRegistrationRequestSDKType[];
}
export interface BatchContractDeregistrationProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    contracts: string[];
}
export interface BatchContractDeregistrationProposalProtoMsg {
    typeUrl: "/injective.wasmx.v1.BatchContractDeregistrationProposal";
    value: Uint8Array;
}
export interface BatchContractDeregistrationProposalAmino {
    title: string;
    description: string;
    contracts: string[];
}
export interface BatchContractDeregistrationProposalAminoMsg {
    type: "/injective.wasmx.v1.BatchContractDeregistrationProposal";
    value: BatchContractDeregistrationProposalAmino;
}
export interface BatchContractDeregistrationProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    contracts: string[];
}
export interface ContractRegistrationRequest {
    $typeUrl?: string;
    /** Unique Identifier for contract instance to be registered. */
    contractAddress: string;
    /** Maximum gas to be used for the smart contract execution. */
    gasLimit: bigint;
    /** gas price to be used for the smart contract execution. */
    gasPrice: bigint;
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
    codeId: bigint;
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
export interface ContractRegistrationRequestProtoMsg {
    typeUrl: "/injective.wasmx.v1.ContractRegistrationRequest";
    value: Uint8Array;
}
export interface ContractRegistrationRequestAmino {
    /** Unique Identifier for contract instance to be registered. */
    contract_address: string;
    /** Maximum gas to be used for the smart contract execution. */
    gas_limit: string;
    /** gas price to be used for the smart contract execution. */
    gas_price: string;
    should_pin_contract: boolean;
    /**
     * if true contract owner can update it, if false only current code_id will be
     * allowed to be executed
     */
    is_migration_allowed: boolean;
    /**
     * code_id of the contract being registered - will be verified upon every
     * execution but only if is_migration_allowed is false
     */
    code_id: string;
    /**
     * Optional address of admin account (that will be allowed to pause or update
     * contract params)
     */
    admin_address: string;
    /**
     * Optional address of the contract that grants fees. Must be set if
     * funding_mode is other than SelfFunded
     */
    granter_address: string;
    /** Specifies how the contract will fund its execution */
    funding_mode: FundingMode;
}
export interface ContractRegistrationRequestAminoMsg {
    type: "/injective.wasmx.v1.ContractRegistrationRequest";
    value: ContractRegistrationRequestAmino;
}
export interface ContractRegistrationRequestSDKType {
    $typeUrl?: string;
    contract_address: string;
    gas_limit: bigint;
    gas_price: bigint;
    should_pin_contract: boolean;
    is_migration_allowed: boolean;
    code_id: bigint;
    admin_address: string;
    granter_address: string;
    funding_mode: FundingMode;
}
export interface BatchStoreCodeProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    proposals: StoreCodeProposal[];
}
export interface BatchStoreCodeProposalProtoMsg {
    typeUrl: "/injective.wasmx.v1.BatchStoreCodeProposal";
    value: Uint8Array;
}
export interface BatchStoreCodeProposalAmino {
    title: string;
    description: string;
    proposals: StoreCodeProposalAmino[];
}
export interface BatchStoreCodeProposalAminoMsg {
    type: "/injective.wasmx.v1.BatchStoreCodeProposal";
    value: BatchStoreCodeProposalAmino;
}
export interface BatchStoreCodeProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    proposals: StoreCodeProposalSDKType[];
}
export declare const ContractRegistrationRequestProposal: {
    typeUrl: string;
    encode(message: ContractRegistrationRequestProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractRegistrationRequestProposal;
    fromPartial(object: Partial<ContractRegistrationRequestProposal>): ContractRegistrationRequestProposal;
    fromAmino(object: ContractRegistrationRequestProposalAmino): ContractRegistrationRequestProposal;
    toAmino(message: ContractRegistrationRequestProposal): ContractRegistrationRequestProposalAmino;
    fromAminoMsg(object: ContractRegistrationRequestProposalAminoMsg): ContractRegistrationRequestProposal;
    fromProtoMsg(message: ContractRegistrationRequestProposalProtoMsg): ContractRegistrationRequestProposal;
    toProto(message: ContractRegistrationRequestProposal): Uint8Array;
    toProtoMsg(message: ContractRegistrationRequestProposal): ContractRegistrationRequestProposalProtoMsg;
};
export declare const BatchContractRegistrationRequestProposal: {
    typeUrl: string;
    encode(message: BatchContractRegistrationRequestProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchContractRegistrationRequestProposal;
    fromPartial(object: Partial<BatchContractRegistrationRequestProposal>): BatchContractRegistrationRequestProposal;
    fromAmino(object: BatchContractRegistrationRequestProposalAmino): BatchContractRegistrationRequestProposal;
    toAmino(message: BatchContractRegistrationRequestProposal): BatchContractRegistrationRequestProposalAmino;
    fromAminoMsg(object: BatchContractRegistrationRequestProposalAminoMsg): BatchContractRegistrationRequestProposal;
    fromProtoMsg(message: BatchContractRegistrationRequestProposalProtoMsg): BatchContractRegistrationRequestProposal;
    toProto(message: BatchContractRegistrationRequestProposal): Uint8Array;
    toProtoMsg(message: BatchContractRegistrationRequestProposal): BatchContractRegistrationRequestProposalProtoMsg;
};
export declare const BatchContractDeregistrationProposal: {
    typeUrl: string;
    encode(message: BatchContractDeregistrationProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchContractDeregistrationProposal;
    fromPartial(object: Partial<BatchContractDeregistrationProposal>): BatchContractDeregistrationProposal;
    fromAmino(object: BatchContractDeregistrationProposalAmino): BatchContractDeregistrationProposal;
    toAmino(message: BatchContractDeregistrationProposal): BatchContractDeregistrationProposalAmino;
    fromAminoMsg(object: BatchContractDeregistrationProposalAminoMsg): BatchContractDeregistrationProposal;
    fromProtoMsg(message: BatchContractDeregistrationProposalProtoMsg): BatchContractDeregistrationProposal;
    toProto(message: BatchContractDeregistrationProposal): Uint8Array;
    toProtoMsg(message: BatchContractDeregistrationProposal): BatchContractDeregistrationProposalProtoMsg;
};
export declare const ContractRegistrationRequest: {
    typeUrl: string;
    encode(message: ContractRegistrationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractRegistrationRequest;
    fromPartial(object: Partial<ContractRegistrationRequest>): ContractRegistrationRequest;
    fromAmino(object: ContractRegistrationRequestAmino): ContractRegistrationRequest;
    toAmino(message: ContractRegistrationRequest): ContractRegistrationRequestAmino;
    fromAminoMsg(object: ContractRegistrationRequestAminoMsg): ContractRegistrationRequest;
    fromProtoMsg(message: ContractRegistrationRequestProtoMsg): ContractRegistrationRequest;
    toProto(message: ContractRegistrationRequest): Uint8Array;
    toProtoMsg(message: ContractRegistrationRequest): ContractRegistrationRequestProtoMsg;
};
export declare const BatchStoreCodeProposal: {
    typeUrl: string;
    encode(message: BatchStoreCodeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchStoreCodeProposal;
    fromPartial(object: Partial<BatchStoreCodeProposal>): BatchStoreCodeProposal;
    fromAmino(object: BatchStoreCodeProposalAmino): BatchStoreCodeProposal;
    toAmino(message: BatchStoreCodeProposal): BatchStoreCodeProposalAmino;
    fromAminoMsg(object: BatchStoreCodeProposalAminoMsg): BatchStoreCodeProposal;
    fromProtoMsg(message: BatchStoreCodeProposalProtoMsg): BatchStoreCodeProposal;
    toProto(message: BatchStoreCodeProposal): Uint8Array;
    toProtoMsg(message: BatchStoreCodeProposal): BatchStoreCodeProposalProtoMsg;
};
