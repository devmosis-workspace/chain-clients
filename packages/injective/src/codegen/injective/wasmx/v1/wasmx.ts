import { FundingMode, fundingModeFromJSON } from "./proposal";
import { Long, isSet } from "../../../helpers";
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
function createBaseParams(): Params {
  return {
    isExecutionEnabled: false,
    maxBeginBlockTotalGas: Long.UZERO,
    maxContractGasLimit: Long.UZERO,
    minGasPrice: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isExecutionEnabled === true) {
      writer.uint32(8).bool(message.isExecutionEnabled);
    }
    if (!message.maxBeginBlockTotalGas.isZero()) {
      writer.uint32(16).uint64(message.maxBeginBlockTotalGas);
    }
    if (!message.maxContractGasLimit.isZero()) {
      writer.uint32(24).uint64(message.maxContractGasLimit);
    }
    if (!message.minGasPrice.isZero()) {
      writer.uint32(32).uint64(message.minGasPrice);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      isExecutionEnabled: isSet(object.isExecutionEnabled) ? Boolean(object.isExecutionEnabled) : false,
      maxBeginBlockTotalGas: isSet(object.maxBeginBlockTotalGas) ? Long.fromValue(object.maxBeginBlockTotalGas) : Long.UZERO,
      maxContractGasLimit: isSet(object.maxContractGasLimit) ? Long.fromValue(object.maxContractGasLimit) : Long.UZERO,
      minGasPrice: isSet(object.minGasPrice) ? Long.fromValue(object.minGasPrice) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.isExecutionEnabled = object.isExecutionEnabled ?? false;
    message.maxBeginBlockTotalGas = object.maxBeginBlockTotalGas !== undefined && object.maxBeginBlockTotalGas !== null ? Long.fromValue(object.maxBeginBlockTotalGas) : Long.UZERO;
    message.maxContractGasLimit = object.maxContractGasLimit !== undefined && object.maxContractGasLimit !== null ? Long.fromValue(object.maxContractGasLimit) : Long.UZERO;
    message.minGasPrice = object.minGasPrice !== undefined && object.minGasPrice !== null ? Long.fromValue(object.minGasPrice) : Long.UZERO;
    return message;
  }
};
function createBaseRegisteredContract(): RegisteredContract {
  return {
    gasLimit: Long.UZERO,
    gasPrice: Long.UZERO,
    isExecutable: false,
    codeId: undefined,
    adminAddress: undefined,
    granterAddress: undefined,
    fundMode: 0
  };
}
export const RegisteredContract = {
  encode(message: RegisteredContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gasLimit.isZero()) {
      writer.uint32(8).uint64(message.gasLimit);
    }
    if (!message.gasPrice.isZero()) {
      writer.uint32(16).uint64(message.gasPrice);
    }
    if (message.isExecutable === true) {
      writer.uint32(24).bool(message.isExecutable);
    }
    if (message.codeId !== undefined) {
      writer.uint32(32).uint64(message.codeId);
    }
    if (message.adminAddress !== undefined) {
      writer.uint32(42).string(message.adminAddress);
    }
    if (message.granterAddress !== undefined) {
      writer.uint32(50).string(message.granterAddress);
    }
    if (message.fundMode !== 0) {
      writer.uint32(56).int32(message.fundMode);
    }
    return writer;
  },
  fromJSON(object: any): RegisteredContract {
    return {
      gasLimit: isSet(object.gasLimit) ? Long.fromValue(object.gasLimit) : Long.UZERO,
      gasPrice: isSet(object.gasPrice) ? Long.fromValue(object.gasPrice) : Long.UZERO,
      isExecutable: isSet(object.isExecutable) ? Boolean(object.isExecutable) : false,
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : undefined,
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : undefined,
      granterAddress: isSet(object.granterAddress) ? String(object.granterAddress) : undefined,
      fundMode: isSet(object.fundMode) ? fundingModeFromJSON(object.fundMode) : 0
    };
  },
  fromPartial(object: Partial<RegisteredContract>): RegisteredContract {
    const message = createBaseRegisteredContract();
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? Long.fromValue(object.gasLimit) : Long.UZERO;
    message.gasPrice = object.gasPrice !== undefined && object.gasPrice !== null ? Long.fromValue(object.gasPrice) : Long.UZERO;
    message.isExecutable = object.isExecutable ?? false;
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : undefined;
    message.adminAddress = object.adminAddress ?? undefined;
    message.granterAddress = object.granterAddress ?? undefined;
    message.fundMode = object.fundMode ?? 0;
    return message;
  }
};