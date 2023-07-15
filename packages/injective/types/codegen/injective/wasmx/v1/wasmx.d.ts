import { FundingMode } from "./proposal";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    maxBeginBlockTotalGas: Long;
    /**
     * the maximum gas limit each individual contract can consume in the
     * BeginBlocker.
     */
    maxContractGasLimit: Long;
    /**
     * min_gas_price defines the minimum gas price the contracts must pay to be
     * executed in the BeginBlocker.
     */
    minGasPrice: Long;
}
export interface ParamsSDKType {
    is_execution_enabled: boolean;
    max_begin_block_total_gas: Long;
    max_contract_gas_limit: Long;
    min_gas_price: Long;
}
export interface RegisteredContract {
    /** limit of gas per BB execution */
    gasLimit: Long;
    /** gas price that contract is willing to pay for execution in BeginBlocker */
    gasPrice: Long;
    /** is contract currently active */
    isExecutable: boolean;
    /**
     * code_id that is allowed to be executed (to prevent malicious updates) - if
     * nil/0 any code_id can be executed
     */
    codeId: Long;
    /** optional - admin addr that is allowed to update contract data */
    adminAddress: string;
    /**
     * Optional: address of the contract granting fee
     * Must be set if fund_mode is GrantOnly
     */
    granterAddress: string;
    /** funding mode */
    fundMode: FundingMode;
}
export interface RegisteredContractSDKType {
    gas_limit: Long;
    gas_price: Long;
    is_executable: boolean;
    code_id: Long;
    admin_address: string;
    granter_address: string;
    fund_mode: FundingMode;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const RegisteredContract: {
    encode(message: RegisteredContract, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisteredContract;
    fromPartial(object: Partial<RegisteredContract>): RegisteredContract;
};
