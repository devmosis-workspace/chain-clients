import { FundingMode, fundingModeFromJSON } from "./proposal";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseParams(): Params {
  return {
    isExecutionEnabled: false,
    maxBeginBlockTotalGas: BigInt(0),
    maxContractGasLimit: BigInt(0),
    minGasPrice: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/injective.wasmx.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isExecutionEnabled === true) {
      writer.uint32(8).bool(message.isExecutionEnabled);
    }
    if (message.maxBeginBlockTotalGas !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxBeginBlockTotalGas);
    }
    if (message.maxContractGasLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxContractGasLimit);
    }
    if (message.minGasPrice !== BigInt(0)) {
      writer.uint32(32).uint64(message.minGasPrice);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      isExecutionEnabled: isSet(object.isExecutionEnabled) ? Boolean(object.isExecutionEnabled) : false,
      maxBeginBlockTotalGas: isSet(object.maxBeginBlockTotalGas) ? BigInt(object.maxBeginBlockTotalGas.toString()) : BigInt(0),
      maxContractGasLimit: isSet(object.maxContractGasLimit) ? BigInt(object.maxContractGasLimit.toString()) : BigInt(0),
      minGasPrice: isSet(object.minGasPrice) ? BigInt(object.minGasPrice.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.isExecutionEnabled = object.isExecutionEnabled ?? false;
    message.maxBeginBlockTotalGas = object.maxBeginBlockTotalGas !== undefined && object.maxBeginBlockTotalGas !== null ? BigInt(object.maxBeginBlockTotalGas.toString()) : BigInt(0);
    message.maxContractGasLimit = object.maxContractGasLimit !== undefined && object.maxContractGasLimit !== null ? BigInt(object.maxContractGasLimit.toString()) : BigInt(0);
    message.minGasPrice = object.minGasPrice !== undefined && object.minGasPrice !== null ? BigInt(object.minGasPrice.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      isExecutionEnabled: object.is_execution_enabled,
      maxBeginBlockTotalGas: BigInt(object.max_begin_block_total_gas),
      maxContractGasLimit: BigInt(object.max_contract_gas_limit),
      minGasPrice: BigInt(object.min_gas_price)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.is_execution_enabled = message.isExecutionEnabled;
    obj.max_begin_block_total_gas = message.maxBeginBlockTotalGas ? message.maxBeginBlockTotalGas.toString() : undefined;
    obj.max_contract_gas_limit = message.maxContractGasLimit ? message.maxContractGasLimit.toString() : undefined;
    obj.min_gas_price = message.minGasPrice ? message.minGasPrice.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseRegisteredContract(): RegisteredContract {
  return {
    gasLimit: BigInt(0),
    gasPrice: BigInt(0),
    isExecutable: false,
    codeId: undefined,
    adminAddress: undefined,
    granterAddress: undefined,
    fundMode: 0
  };
}
export const RegisteredContract = {
  typeUrl: "/injective.wasmx.v1.RegisteredContract",
  encode(message: RegisteredContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(8).uint64(message.gasLimit);
    }
    if (message.gasPrice !== BigInt(0)) {
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
      gasLimit: isSet(object.gasLimit) ? BigInt(object.gasLimit.toString()) : BigInt(0),
      gasPrice: isSet(object.gasPrice) ? BigInt(object.gasPrice.toString()) : BigInt(0),
      isExecutable: isSet(object.isExecutable) ? Boolean(object.isExecutable) : false,
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : undefined,
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : undefined,
      granterAddress: isSet(object.granterAddress) ? String(object.granterAddress) : undefined,
      fundMode: isSet(object.fundMode) ? fundingModeFromJSON(object.fundMode) : -1
    };
  },
  fromPartial(object: Partial<RegisteredContract>): RegisteredContract {
    const message = createBaseRegisteredContract();
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
    message.gasPrice = object.gasPrice !== undefined && object.gasPrice !== null ? BigInt(object.gasPrice.toString()) : BigInt(0);
    message.isExecutable = object.isExecutable ?? false;
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : undefined;
    message.adminAddress = object.adminAddress ?? undefined;
    message.granterAddress = object.granterAddress ?? undefined;
    message.fundMode = object.fundMode ?? 0;
    return message;
  },
  fromAmino(object: RegisteredContractAmino): RegisteredContract {
    return {
      gasLimit: BigInt(object.gas_limit),
      gasPrice: BigInt(object.gas_price),
      isExecutable: object.is_executable,
      codeId: object?.code_id ? BigInt(object.code_id) : undefined,
      adminAddress: object?.admin_address,
      granterAddress: object?.granter_address,
      fundMode: isSet(object.fund_mode) ? fundingModeFromJSON(object.fund_mode) : -1
    };
  },
  toAmino(message: RegisteredContract): RegisteredContractAmino {
    const obj: any = {};
    obj.gas_limit = message.gasLimit ? message.gasLimit.toString() : undefined;
    obj.gas_price = message.gasPrice ? message.gasPrice.toString() : undefined;
    obj.is_executable = message.isExecutable;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.admin_address = message.adminAddress;
    obj.granter_address = message.granterAddress;
    obj.fund_mode = message.fundMode;
    return obj;
  },
  fromAminoMsg(object: RegisteredContractAminoMsg): RegisteredContract {
    return RegisteredContract.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisteredContractProtoMsg): RegisteredContract {
    return RegisteredContract.decode(message.value);
  },
  toProto(message: RegisteredContract): Uint8Array {
    return RegisteredContract.encode(message).finish();
  },
  toProtoMsg(message: RegisteredContract): RegisteredContractProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.RegisteredContract",
      value: RegisteredContract.encode(message).finish()
    };
  }
};