import { FundingMode } from "./proposal";
import { BinaryWriter } from "../../../binary";
export interface Params {
    /**
     * Set the status to active to indicate that contracts can be executed in
     * begin blocker.
     */
    isExecutionEnabled: boolean;
    /**
     * Maximum aggregate total gas to be used for the contract executions in the
     * BeginBlocker.
     */
    maxBeginBlockTotalGas: bigint;
    /**
     * the maximum gas limit each individual contract can consume in the
     * BeginBlocker.
     */
    maxContractGasLimit: bigint;
    /**
     * min_gas_price defines the minimum gas price the contracts must pay to be
     * executed in the BeginBlocker.
     */
    minGasPrice: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/injective.wasmx.v1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /**
     * Set the status to active to indicate that contracts can be executed in
     * begin blocker.
     */
    is_execution_enabled: boolean;
    /**
     * Maximum aggregate total gas to be used for the contract executions in the
     * BeginBlocker.
     */
    max_begin_block_total_gas: string;
    /**
     * the maximum gas limit each individual contract can consume in the
     * BeginBlocker.
     */
    max_contract_gas_limit: string;
    /**
     * min_gas_price defines the minimum gas price the contracts must pay to be
     * executed in the BeginBlocker.
     */
    min_gas_price: string;
}
export interface ParamsAminoMsg {
    type: "/injective.wasmx.v1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    is_execution_enabled: boolean;
    max_begin_block_total_gas: bigint;
    max_contract_gas_limit: bigint;
    min_gas_price: bigint;
}
export interface RegisteredContract {
    /** limit of gas per BB execution */
    gasLimit: bigint;
    /** gas price that contract is willing to pay for execution in BeginBlocker */
    gasPrice: bigint;
    /** is contract currently active */
    isExecutable: boolean;
    /**
     * code_id that is allowed to be executed (to prevent malicious updates) - if
     * nil/0 any code_id can be executed
     */
    codeId?: bigint;
    /** optional - admin addr that is allowed to update contract data */
    adminAddress?: string;
    /**
     * Optional: address of the contract granting fee
     * Must be set if fund_mode is GrantOnly
     */
    granterAddress?: string;
    /** funding mode */
    fundMode: FundingMode;
}
export interface RegisteredContractProtoMsg {
    typeUrl: "/injective.wasmx.v1.RegisteredContract";
    value: Uint8Array;
}
export interface RegisteredContractAmino {
    /** limit of gas per BB execution */
    gas_limit: string;
    /** gas price that contract is willing to pay for execution in BeginBlocker */
    gas_price: string;
    /** is contract currently active */
    is_executable: boolean;
    /**
     * code_id that is allowed to be executed (to prevent malicious updates) - if
     * nil/0 any code_id can be executed
     */
    code_id: string;
    /** optional - admin addr that is allowed to update contract data */
    admin_address: string;
    /**
     * Optional: address of the contract granting fee
     * Must be set if fund_mode is GrantOnly
     */
    granter_address: string;
    /** funding mode */
    fund_mode: FundingMode;
}
export interface RegisteredContractAminoMsg {
    type: "/injective.wasmx.v1.RegisteredContract";
    value: RegisteredContractAmino;
}
export interface RegisteredContractSDKType {
    gas_limit: bigint;
    gas_price: bigint;
    is_executable: boolean;
    code_id?: bigint;
    admin_address?: string;
    granter_address?: string;
    fund_mode: FundingMode;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const RegisteredContract: {
    typeUrl: string;
    encode(message: RegisteredContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisteredContract;
    fromPartial(object: Partial<RegisteredContract>): RegisteredContract;
    fromAmino(object: RegisteredContractAmino): RegisteredContract;
    toAmino(message: RegisteredContract): RegisteredContractAmino;
    fromAminoMsg(object: RegisteredContractAminoMsg): RegisteredContract;
    fromProtoMsg(message: RegisteredContractProtoMsg): RegisteredContract;
    toProto(message: RegisteredContract): Uint8Array;
    toProtoMsg(message: RegisteredContract): RegisteredContractProtoMsg;
};
