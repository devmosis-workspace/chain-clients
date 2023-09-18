import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** Params defines the EVM module parameters */
export interface Params {
  /**
   * evm_denom represents the token denomination used to run the EVM state
   * transitions.
   */
  evmDenom: string;
  /** enable_create toggles state transitions that use the vm.Create function */
  enableCreate: boolean;
  /** enable_call toggles state transitions that use the vm.Call function */
  enableCall: boolean;
  /** extra_eips defines the additional EIPs for the vm.Config */
  extraEips: bigint[];
  /** chain_config defines the EVM chain configuration parameters */
  chainConfig: ChainConfig;
  /**
   * allow_unprotected_txs defines if replay-protected (i.e non EIP155
   * signed) transactions can be executed on the state machine.
   */
  allowUnprotectedTxs: boolean;
  /**
   * active_precompiles defines the slice of hex addresses of the precompiled
   * contracts that are active
   */
  activePrecompiles: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/ethermint.evm.v1.Params";
  value: Uint8Array;
}
/** Params defines the EVM module parameters */
export interface ParamsAmino {
  /**
   * evm_denom represents the token denomination used to run the EVM state
   * transitions.
   */
  evm_denom: string;
  /** enable_create toggles state transitions that use the vm.Create function */
  enable_create: boolean;
  /** enable_call toggles state transitions that use the vm.Call function */
  enable_call: boolean;
  /** extra_eips defines the additional EIPs for the vm.Config */
  extra_eips: string[];
  /** chain_config defines the EVM chain configuration parameters */
  chain_config?: ChainConfigAmino;
  /**
   * allow_unprotected_txs defines if replay-protected (i.e non EIP155
   * signed) transactions can be executed on the state machine.
   */
  allow_unprotected_txs: boolean;
  /**
   * active_precompiles defines the slice of hex addresses of the precompiled
   * contracts that are active
   */
  active_precompiles: string[];
}
export interface ParamsAminoMsg {
  type: "/ethermint.evm.v1.Params";
  value: ParamsAmino;
}
/** Params defines the EVM module parameters */
export interface ParamsSDKType {
  evm_denom: string;
  enable_create: boolean;
  enable_call: boolean;
  extra_eips: bigint[];
  chain_config: ChainConfigSDKType;
  allow_unprotected_txs: boolean;
  active_precompiles: string[];
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfig {
  /** homestead_block switch (nil no fork, 0 = already homestead) */
  homesteadBlock: string;
  /** dao_fork_block corresponds to TheDAO hard-fork switch block (nil no fork) */
  daoForkBlock: string;
  /** dao_fork_support defines whether the nodes supports or opposes the DAO hard-fork */
  daoForkSupport: boolean;
  /**
   * eip150_block: EIP150 implements the Gas price changes
   * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
   */
  eip150Block: string;
  /** eip150_hash: EIP150 HF hash (needed for header only clients as only gas pricing changed) */
  eip150Hash: string;
  /** eip155_block: EIP155Block HF block */
  eip155Block: string;
  /** eip158_block: EIP158 HF block */
  eip158Block: string;
  /** byzantium_block: Byzantium switch block (nil no fork, 0 = already on byzantium) */
  byzantiumBlock: string;
  /** constantinople_block: Constantinople switch block (nil no fork, 0 = already activated) */
  constantinopleBlock: string;
  /** petersburg_block: Petersburg switch block (nil same as Constantinople) */
  petersburgBlock: string;
  /** istanbul_block: Istanbul switch block (nil no fork, 0 = already on istanbul) */
  istanbulBlock: string;
  /** muir_glacier_block: Eip-2384 (bomb delay) switch block (nil no fork, 0 = already activated) */
  muirGlacierBlock: string;
  /** berlin_block: Berlin switch block (nil = no fork, 0 = already on berlin) */
  berlinBlock: string;
  /** london_block: London switch block (nil = no fork, 0 = already on london) */
  londonBlock: string;
  /** arrow_glacier_block: Eip-4345 (bomb delay) switch block (nil = no fork, 0 = already activated) */
  arrowGlacierBlock: string;
  /** gray_glacier_block: EIP-5133 (bomb delay) switch block (nil = no fork, 0 = already activated) */
  grayGlacierBlock: string;
  /** merge_netsplit_block: Virtual fork after The Merge to use as a network splitter */
  mergeNetsplitBlock: string;
  /** shanghai_block switch block (nil = no fork, 0 = already on shanghai) */
  shanghaiBlock: string;
  /** cancun_block switch block (nil = no fork, 0 = already on cancun) */
  cancunBlock: string;
}
export interface ChainConfigProtoMsg {
  typeUrl: "/ethermint.evm.v1.ChainConfig";
  value: Uint8Array;
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfigAmino {
  /** homestead_block switch (nil no fork, 0 = already homestead) */
  homestead_block: string;
  /** dao_fork_block corresponds to TheDAO hard-fork switch block (nil no fork) */
  dao_fork_block: string;
  /** dao_fork_support defines whether the nodes supports or opposes the DAO hard-fork */
  dao_fork_support: boolean;
  /**
   * eip150_block: EIP150 implements the Gas price changes
   * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
   */
  eip150_block: string;
  /** eip150_hash: EIP150 HF hash (needed for header only clients as only gas pricing changed) */
  eip150_hash: string;
  /** eip155_block: EIP155Block HF block */
  eip155_block: string;
  /** eip158_block: EIP158 HF block */
  eip158_block: string;
  /** byzantium_block: Byzantium switch block (nil no fork, 0 = already on byzantium) */
  byzantium_block: string;
  /** constantinople_block: Constantinople switch block (nil no fork, 0 = already activated) */
  constantinople_block: string;
  /** petersburg_block: Petersburg switch block (nil same as Constantinople) */
  petersburg_block: string;
  /** istanbul_block: Istanbul switch block (nil no fork, 0 = already on istanbul) */
  istanbul_block: string;
  /** muir_glacier_block: Eip-2384 (bomb delay) switch block (nil no fork, 0 = already activated) */
  muir_glacier_block: string;
  /** berlin_block: Berlin switch block (nil = no fork, 0 = already on berlin) */
  berlin_block: string;
  /** london_block: London switch block (nil = no fork, 0 = already on london) */
  london_block: string;
  /** arrow_glacier_block: Eip-4345 (bomb delay) switch block (nil = no fork, 0 = already activated) */
  arrow_glacier_block: string;
  /** gray_glacier_block: EIP-5133 (bomb delay) switch block (nil = no fork, 0 = already activated) */
  gray_glacier_block: string;
  /** merge_netsplit_block: Virtual fork after The Merge to use as a network splitter */
  merge_netsplit_block: string;
  /** shanghai_block switch block (nil = no fork, 0 = already on shanghai) */
  shanghai_block: string;
  /** cancun_block switch block (nil = no fork, 0 = already on cancun) */
  cancun_block: string;
}
export interface ChainConfigAminoMsg {
  type: "/ethermint.evm.v1.ChainConfig";
  value: ChainConfigAmino;
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfigSDKType {
  homestead_block: string;
  dao_fork_block: string;
  dao_fork_support: boolean;
  eip150_block: string;
  eip150_hash: string;
  eip155_block: string;
  eip158_block: string;
  byzantium_block: string;
  constantinople_block: string;
  petersburg_block: string;
  istanbul_block: string;
  muir_glacier_block: string;
  berlin_block: string;
  london_block: string;
  arrow_glacier_block: string;
  gray_glacier_block: string;
  merge_netsplit_block: string;
  shanghai_block: string;
  cancun_block: string;
}
/** State represents a single Storage key value pair item. */
export interface State {
  /** key is the stored key */
  key: string;
  /** value is the stored value for the given key */
  value: string;
}
export interface StateProtoMsg {
  typeUrl: "/ethermint.evm.v1.State";
  value: Uint8Array;
}
/** State represents a single Storage key value pair item. */
export interface StateAmino {
  /** key is the stored key */
  key: string;
  /** value is the stored value for the given key */
  value: string;
}
export interface StateAminoMsg {
  type: "/ethermint.evm.v1.State";
  value: StateAmino;
}
/** State represents a single Storage key value pair item. */
export interface StateSDKType {
  key: string;
  value: string;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogs {
  /** hash of the transaction */
  hash: string;
  /** logs is an array of Logs for the given transaction hash */
  logs: Log[];
}
export interface TransactionLogsProtoMsg {
  typeUrl: "/ethermint.evm.v1.TransactionLogs";
  value: Uint8Array;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogsAmino {
  /** hash of the transaction */
  hash: string;
  /** logs is an array of Logs for the given transaction hash */
  logs: LogAmino[];
}
export interface TransactionLogsAminoMsg {
  type: "/ethermint.evm.v1.TransactionLogs";
  value: TransactionLogsAmino;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogsSDKType {
  hash: string;
  logs: LogSDKType[];
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 * 
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface Log {
  /** address of the contract that generated the event */
  address: string;
  /** topics is a list of topics provided by the contract. */
  topics: string[];
  /** data which is supplied by the contract, usually ABI-encoded */
  data: Uint8Array;
  /** block_number of the block in which the transaction was included */
  blockNumber: bigint;
  /** tx_hash is the transaction hash */
  txHash: string;
  /** tx_index of the transaction in the block */
  txIndex: bigint;
  /** block_hash of the block in which the transaction was included */
  blockHash: string;
  /** index of the log in the block */
  index: bigint;
  /**
   * removed is true if this log was reverted due to a chain
   * reorganisation. You must pay attention to this field if you receive logs
   * through a filter query.
   */
  removed: boolean;
}
export interface LogProtoMsg {
  typeUrl: "/ethermint.evm.v1.Log";
  value: Uint8Array;
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 * 
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface LogAmino {
  /** address of the contract that generated the event */
  address: string;
  /** topics is a list of topics provided by the contract. */
  topics: string[];
  /** data which is supplied by the contract, usually ABI-encoded */
  data: Uint8Array;
  /** block_number of the block in which the transaction was included */
  block_number: string;
  /** tx_hash is the transaction hash */
  tx_hash: string;
  /** tx_index of the transaction in the block */
  tx_index: string;
  /** block_hash of the block in which the transaction was included */
  block_hash: string;
  /** index of the log in the block */
  index: string;
  /**
   * removed is true if this log was reverted due to a chain
   * reorganisation. You must pay attention to this field if you receive logs
   * through a filter query.
   */
  removed: boolean;
}
export interface LogAminoMsg {
  type: "/ethermint.evm.v1.Log";
  value: LogAmino;
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 * 
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface LogSDKType {
  address: string;
  topics: string[];
  data: Uint8Array;
  block_number: bigint;
  tx_hash: string;
  tx_index: bigint;
  block_hash: string;
  index: bigint;
  removed: boolean;
}
/** TxResult stores results of Tx execution. */
export interface TxResult {
  /**
   * contract_address contains the ethereum address of the created contract (if
   * any). If the state transition is an evm.Call, the contract address will be
   * empty.
   */
  contractAddress: string;
  /** bloom represents the bloom filter bytes */
  bloom: Uint8Array;
  /**
   * tx_logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  txLogs: TransactionLogs;
  /** ret defines the bytes from the execution. */
  ret: Uint8Array;
  /** reverted flag is set to true when the call has been reverted */
  reverted: boolean;
  /** gas_used notes the amount of gas consumed while execution */
  gasUsed: bigint;
}
export interface TxResultProtoMsg {
  typeUrl: "/ethermint.evm.v1.TxResult";
  value: Uint8Array;
}
/** TxResult stores results of Tx execution. */
export interface TxResultAmino {
  /**
   * contract_address contains the ethereum address of the created contract (if
   * any). If the state transition is an evm.Call, the contract address will be
   * empty.
   */
  contract_address: string;
  /** bloom represents the bloom filter bytes */
  bloom: Uint8Array;
  /**
   * tx_logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  tx_logs?: TransactionLogsAmino;
  /** ret defines the bytes from the execution. */
  ret: Uint8Array;
  /** reverted flag is set to true when the call has been reverted */
  reverted: boolean;
  /** gas_used notes the amount of gas consumed while execution */
  gas_used: string;
}
export interface TxResultAminoMsg {
  type: "/ethermint.evm.v1.TxResult";
  value: TxResultAmino;
}
/** TxResult stores results of Tx execution. */
export interface TxResultSDKType {
  contract_address: string;
  bloom: Uint8Array;
  tx_logs: TransactionLogsSDKType;
  ret: Uint8Array;
  reverted: boolean;
  gas_used: bigint;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTuple {
  /** address is a hex formatted ethereum address */
  address: string;
  /** storage_keys are hex formatted hashes of the storage keys */
  storageKeys: string[];
}
export interface AccessTupleProtoMsg {
  typeUrl: "/ethermint.evm.v1.AccessTuple";
  value: Uint8Array;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTupleAmino {
  /** address is a hex formatted ethereum address */
  address: string;
  /** storage_keys are hex formatted hashes of the storage keys */
  storage_keys: string[];
}
export interface AccessTupleAminoMsg {
  type: "/ethermint.evm.v1.AccessTuple";
  value: AccessTupleAmino;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTupleSDKType {
  address: string;
  storage_keys: string[];
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfig {
  /** tracer is a custom javascript tracer */
  tracer: string;
  /**
   * timeout overrides the default timeout of 5 seconds for JavaScript-based tracing
   * calls
   */
  timeout: string;
  /** reexec defines the number of blocks the tracer is willing to go back */
  reexec: bigint;
  /** disable_stack switches stack capture */
  disableStack: boolean;
  /** disable_storage switches storage capture */
  disableStorage: boolean;
  /** debug can be used to print output during capture end */
  debug: boolean;
  /** limit defines the maximum length of output, but zero means unlimited */
  limit: number;
  /** overrides can be used to execute a trace using future fork rules */
  overrides: ChainConfig;
  /** enable_memory switches memory capture */
  enableMemory: boolean;
  /** enable_return_data switches the capture of return data */
  enableReturnData: boolean;
  /** tracer_json_config configures the tracer using a JSON string */
  tracerJsonConfig: string;
}
export interface TraceConfigProtoMsg {
  typeUrl: "/ethermint.evm.v1.TraceConfig";
  value: Uint8Array;
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfigAmino {
  /** tracer is a custom javascript tracer */
  tracer: string;
  /**
   * timeout overrides the default timeout of 5 seconds for JavaScript-based tracing
   * calls
   */
  timeout: string;
  /** reexec defines the number of blocks the tracer is willing to go back */
  reexec: string;
  /** disable_stack switches stack capture */
  disable_stack: boolean;
  /** disable_storage switches storage capture */
  disable_storage: boolean;
  /** debug can be used to print output during capture end */
  debug: boolean;
  /** limit defines the maximum length of output, but zero means unlimited */
  limit: number;
  /** overrides can be used to execute a trace using future fork rules */
  overrides?: ChainConfigAmino;
  /** enable_memory switches memory capture */
  enable_memory: boolean;
  /** enable_return_data switches the capture of return data */
  enable_return_data: boolean;
  /** tracer_json_config configures the tracer using a JSON string */
  tracer_json_config: string;
}
export interface TraceConfigAminoMsg {
  type: "/ethermint.evm.v1.TraceConfig";
  value: TraceConfigAmino;
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfigSDKType {
  tracer: string;
  timeout: string;
  reexec: bigint;
  disable_stack: boolean;
  disable_storage: boolean;
  debug: boolean;
  limit: number;
  overrides: ChainConfigSDKType;
  enable_memory: boolean;
  enable_return_data: boolean;
  tracer_json_config: string;
}
function createBaseParams(): Params {
  return {
    evmDenom: "",
    enableCreate: false,
    enableCall: false,
    extraEips: [],
    chainConfig: ChainConfig.fromPartial({}),
    allowUnprotectedTxs: false,
    activePrecompiles: []
  };
}
export const Params = {
  typeUrl: "/ethermint.evm.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evmDenom !== "") {
      writer.uint32(10).string(message.evmDenom);
    }
    if (message.enableCreate === true) {
      writer.uint32(16).bool(message.enableCreate);
    }
    if (message.enableCall === true) {
      writer.uint32(24).bool(message.enableCall);
    }
    writer.uint32(34).fork();
    for (const v of message.extraEips) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.chainConfig !== undefined) {
      ChainConfig.encode(message.chainConfig, writer.uint32(42).fork()).ldelim();
    }
    if (message.allowUnprotectedTxs === true) {
      writer.uint32(48).bool(message.allowUnprotectedTxs);
    }
    for (const v of message.activePrecompiles) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      evmDenom: isSet(object.evmDenom) ? String(object.evmDenom) : "",
      enableCreate: isSet(object.enableCreate) ? Boolean(object.enableCreate) : false,
      enableCall: isSet(object.enableCall) ? Boolean(object.enableCall) : false,
      extraEips: Array.isArray(object?.extraEips) ? object.extraEips.map((e: any) => BigInt(e.toString())) : [],
      chainConfig: isSet(object.chainConfig) ? ChainConfig.fromJSON(object.chainConfig) : undefined,
      allowUnprotectedTxs: isSet(object.allowUnprotectedTxs) ? Boolean(object.allowUnprotectedTxs) : false,
      activePrecompiles: Array.isArray(object?.activePrecompiles) ? object.activePrecompiles.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.evmDenom = object.evmDenom ?? "";
    message.enableCreate = object.enableCreate ?? false;
    message.enableCall = object.enableCall ?? false;
    message.extraEips = object.extraEips?.map(e => BigInt(e.toString())) || [];
    message.chainConfig = object.chainConfig !== undefined && object.chainConfig !== null ? ChainConfig.fromPartial(object.chainConfig) : undefined;
    message.allowUnprotectedTxs = object.allowUnprotectedTxs ?? false;
    message.activePrecompiles = object.activePrecompiles?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      evmDenom: object.evm_denom,
      enableCreate: object.enable_create,
      enableCall: object.enable_call,
      extraEips: Array.isArray(object?.extra_eips) ? object.extra_eips.map((e: any) => BigInt(e)) : [],
      chainConfig: object?.chain_config ? ChainConfig.fromAmino(object.chain_config) : undefined,
      allowUnprotectedTxs: object.allow_unprotected_txs,
      activePrecompiles: Array.isArray(object?.active_precompiles) ? object.active_precompiles.map((e: any) => e) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.evm_denom = message.evmDenom;
    obj.enable_create = message.enableCreate;
    obj.enable_call = message.enableCall;
    if (message.extraEips) {
      obj.extra_eips = message.extraEips.map(e => e.toString());
    } else {
      obj.extra_eips = [];
    }
    obj.chain_config = message.chainConfig ? ChainConfig.toAmino(message.chainConfig) : undefined;
    obj.allow_unprotected_txs = message.allowUnprotectedTxs;
    if (message.activePrecompiles) {
      obj.active_precompiles = message.activePrecompiles.map(e => e);
    } else {
      obj.active_precompiles = [];
    }
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
      typeUrl: "/ethermint.evm.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseChainConfig(): ChainConfig {
  return {
    homesteadBlock: "",
    daoForkBlock: "",
    daoForkSupport: false,
    eip150Block: "",
    eip150Hash: "",
    eip155Block: "",
    eip158Block: "",
    byzantiumBlock: "",
    constantinopleBlock: "",
    petersburgBlock: "",
    istanbulBlock: "",
    muirGlacierBlock: "",
    berlinBlock: "",
    londonBlock: "",
    arrowGlacierBlock: "",
    grayGlacierBlock: "",
    mergeNetsplitBlock: "",
    shanghaiBlock: "",
    cancunBlock: ""
  };
}
export const ChainConfig = {
  typeUrl: "/ethermint.evm.v1.ChainConfig",
  encode(message: ChainConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.homesteadBlock !== "") {
      writer.uint32(10).string(message.homesteadBlock);
    }
    if (message.daoForkBlock !== "") {
      writer.uint32(18).string(message.daoForkBlock);
    }
    if (message.daoForkSupport === true) {
      writer.uint32(24).bool(message.daoForkSupport);
    }
    if (message.eip150Block !== "") {
      writer.uint32(34).string(message.eip150Block);
    }
    if (message.eip150Hash !== "") {
      writer.uint32(42).string(message.eip150Hash);
    }
    if (message.eip155Block !== "") {
      writer.uint32(50).string(message.eip155Block);
    }
    if (message.eip158Block !== "") {
      writer.uint32(58).string(message.eip158Block);
    }
    if (message.byzantiumBlock !== "") {
      writer.uint32(66).string(message.byzantiumBlock);
    }
    if (message.constantinopleBlock !== "") {
      writer.uint32(74).string(message.constantinopleBlock);
    }
    if (message.petersburgBlock !== "") {
      writer.uint32(82).string(message.petersburgBlock);
    }
    if (message.istanbulBlock !== "") {
      writer.uint32(90).string(message.istanbulBlock);
    }
    if (message.muirGlacierBlock !== "") {
      writer.uint32(98).string(message.muirGlacierBlock);
    }
    if (message.berlinBlock !== "") {
      writer.uint32(106).string(message.berlinBlock);
    }
    if (message.londonBlock !== "") {
      writer.uint32(138).string(message.londonBlock);
    }
    if (message.arrowGlacierBlock !== "") {
      writer.uint32(146).string(message.arrowGlacierBlock);
    }
    if (message.grayGlacierBlock !== "") {
      writer.uint32(162).string(message.grayGlacierBlock);
    }
    if (message.mergeNetsplitBlock !== "") {
      writer.uint32(170).string(message.mergeNetsplitBlock);
    }
    if (message.shanghaiBlock !== "") {
      writer.uint32(178).string(message.shanghaiBlock);
    }
    if (message.cancunBlock !== "") {
      writer.uint32(186).string(message.cancunBlock);
    }
    return writer;
  },
  fromJSON(object: any): ChainConfig {
    return {
      homesteadBlock: isSet(object.homesteadBlock) ? String(object.homesteadBlock) : "",
      daoForkBlock: isSet(object.daoForkBlock) ? String(object.daoForkBlock) : "",
      daoForkSupport: isSet(object.daoForkSupport) ? Boolean(object.daoForkSupport) : false,
      eip150Block: isSet(object.eip150Block) ? String(object.eip150Block) : "",
      eip150Hash: isSet(object.eip150Hash) ? String(object.eip150Hash) : "",
      eip155Block: isSet(object.eip155Block) ? String(object.eip155Block) : "",
      eip158Block: isSet(object.eip158Block) ? String(object.eip158Block) : "",
      byzantiumBlock: isSet(object.byzantiumBlock) ? String(object.byzantiumBlock) : "",
      constantinopleBlock: isSet(object.constantinopleBlock) ? String(object.constantinopleBlock) : "",
      petersburgBlock: isSet(object.petersburgBlock) ? String(object.petersburgBlock) : "",
      istanbulBlock: isSet(object.istanbulBlock) ? String(object.istanbulBlock) : "",
      muirGlacierBlock: isSet(object.muirGlacierBlock) ? String(object.muirGlacierBlock) : "",
      berlinBlock: isSet(object.berlinBlock) ? String(object.berlinBlock) : "",
      londonBlock: isSet(object.londonBlock) ? String(object.londonBlock) : "",
      arrowGlacierBlock: isSet(object.arrowGlacierBlock) ? String(object.arrowGlacierBlock) : "",
      grayGlacierBlock: isSet(object.grayGlacierBlock) ? String(object.grayGlacierBlock) : "",
      mergeNetsplitBlock: isSet(object.mergeNetsplitBlock) ? String(object.mergeNetsplitBlock) : "",
      shanghaiBlock: isSet(object.shanghaiBlock) ? String(object.shanghaiBlock) : "",
      cancunBlock: isSet(object.cancunBlock) ? String(object.cancunBlock) : ""
    };
  },
  fromPartial(object: Partial<ChainConfig>): ChainConfig {
    const message = createBaseChainConfig();
    message.homesteadBlock = object.homesteadBlock ?? "";
    message.daoForkBlock = object.daoForkBlock ?? "";
    message.daoForkSupport = object.daoForkSupport ?? false;
    message.eip150Block = object.eip150Block ?? "";
    message.eip150Hash = object.eip150Hash ?? "";
    message.eip155Block = object.eip155Block ?? "";
    message.eip158Block = object.eip158Block ?? "";
    message.byzantiumBlock = object.byzantiumBlock ?? "";
    message.constantinopleBlock = object.constantinopleBlock ?? "";
    message.petersburgBlock = object.petersburgBlock ?? "";
    message.istanbulBlock = object.istanbulBlock ?? "";
    message.muirGlacierBlock = object.muirGlacierBlock ?? "";
    message.berlinBlock = object.berlinBlock ?? "";
    message.londonBlock = object.londonBlock ?? "";
    message.arrowGlacierBlock = object.arrowGlacierBlock ?? "";
    message.grayGlacierBlock = object.grayGlacierBlock ?? "";
    message.mergeNetsplitBlock = object.mergeNetsplitBlock ?? "";
    message.shanghaiBlock = object.shanghaiBlock ?? "";
    message.cancunBlock = object.cancunBlock ?? "";
    return message;
  },
  fromAmino(object: ChainConfigAmino): ChainConfig {
    return {
      homesteadBlock: object.homestead_block,
      daoForkBlock: object.dao_fork_block,
      daoForkSupport: object.dao_fork_support,
      eip150Block: object.eip150_block,
      eip150Hash: object.eip150_hash,
      eip155Block: object.eip155_block,
      eip158Block: object.eip158_block,
      byzantiumBlock: object.byzantium_block,
      constantinopleBlock: object.constantinople_block,
      petersburgBlock: object.petersburg_block,
      istanbulBlock: object.istanbul_block,
      muirGlacierBlock: object.muir_glacier_block,
      berlinBlock: object.berlin_block,
      londonBlock: object.london_block,
      arrowGlacierBlock: object.arrow_glacier_block,
      grayGlacierBlock: object.gray_glacier_block,
      mergeNetsplitBlock: object.merge_netsplit_block,
      shanghaiBlock: object.shanghai_block,
      cancunBlock: object.cancun_block
    };
  },
  toAmino(message: ChainConfig): ChainConfigAmino {
    const obj: any = {};
    obj.homestead_block = message.homesteadBlock;
    obj.dao_fork_block = message.daoForkBlock;
    obj.dao_fork_support = message.daoForkSupport;
    obj.eip150_block = message.eip150Block;
    obj.eip150_hash = message.eip150Hash;
    obj.eip155_block = message.eip155Block;
    obj.eip158_block = message.eip158Block;
    obj.byzantium_block = message.byzantiumBlock;
    obj.constantinople_block = message.constantinopleBlock;
    obj.petersburg_block = message.petersburgBlock;
    obj.istanbul_block = message.istanbulBlock;
    obj.muir_glacier_block = message.muirGlacierBlock;
    obj.berlin_block = message.berlinBlock;
    obj.london_block = message.londonBlock;
    obj.arrow_glacier_block = message.arrowGlacierBlock;
    obj.gray_glacier_block = message.grayGlacierBlock;
    obj.merge_netsplit_block = message.mergeNetsplitBlock;
    obj.shanghai_block = message.shanghaiBlock;
    obj.cancun_block = message.cancunBlock;
    return obj;
  },
  fromAminoMsg(object: ChainConfigAminoMsg): ChainConfig {
    return ChainConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainConfigProtoMsg): ChainConfig {
    return ChainConfig.decode(message.value);
  },
  toProto(message: ChainConfig): Uint8Array {
    return ChainConfig.encode(message).finish();
  },
  toProtoMsg(message: ChainConfig): ChainConfigProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.ChainConfig",
      value: ChainConfig.encode(message).finish()
    };
  }
};
function createBaseState(): State {
  return {
    key: "",
    value: ""
  };
}
export const State = {
  typeUrl: "/ethermint.evm.v1.State",
  encode(message: State, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): State {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<State>): State {
    const message = createBaseState();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: StateAmino): State {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: State): StateAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: StateAminoMsg): State {
    return State.fromAmino(object.value);
  },
  fromProtoMsg(message: StateProtoMsg): State {
    return State.decode(message.value);
  },
  toProto(message: State): Uint8Array {
    return State.encode(message).finish();
  },
  toProtoMsg(message: State): StateProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.State",
      value: State.encode(message).finish()
    };
  }
};
function createBaseTransactionLogs(): TransactionLogs {
  return {
    hash: "",
    logs: []
  };
}
export const TransactionLogs = {
  typeUrl: "/ethermint.evm.v1.TransactionLogs",
  encode(message: TransactionLogs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TransactionLogs {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => Log.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TransactionLogs>): TransactionLogs {
    const message = createBaseTransactionLogs();
    message.hash = object.hash ?? "";
    message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TransactionLogsAmino): TransactionLogs {
    return {
      hash: object.hash,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => Log.fromAmino(e)) : []
    };
  },
  toAmino(message: TransactionLogs): TransactionLogsAmino {
    const obj: any = {};
    obj.hash = message.hash;
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? Log.toAmino(e) : undefined);
    } else {
      obj.logs = [];
    }
    return obj;
  },
  fromAminoMsg(object: TransactionLogsAminoMsg): TransactionLogs {
    return TransactionLogs.fromAmino(object.value);
  },
  fromProtoMsg(message: TransactionLogsProtoMsg): TransactionLogs {
    return TransactionLogs.decode(message.value);
  },
  toProto(message: TransactionLogs): Uint8Array {
    return TransactionLogs.encode(message).finish();
  },
  toProtoMsg(message: TransactionLogs): TransactionLogsProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.TransactionLogs",
      value: TransactionLogs.encode(message).finish()
    };
  }
};
function createBaseLog(): Log {
  return {
    address: "",
    topics: [],
    data: new Uint8Array(),
    blockNumber: BigInt(0),
    txHash: "",
    txIndex: BigInt(0),
    blockHash: "",
    index: BigInt(0),
    removed: false
  };
}
export const Log = {
  typeUrl: "/ethermint.evm.v1.Log",
  encode(message: Log, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.topics) {
      writer.uint32(18).string(v!);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.blockNumber !== BigInt(0)) {
      writer.uint32(32).uint64(message.blockNumber);
    }
    if (message.txHash !== "") {
      writer.uint32(42).string(message.txHash);
    }
    if (message.txIndex !== BigInt(0)) {
      writer.uint32(48).uint64(message.txIndex);
    }
    if (message.blockHash !== "") {
      writer.uint32(58).string(message.blockHash);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(64).uint64(message.index);
    }
    if (message.removed === true) {
      writer.uint32(72).bool(message.removed);
    }
    return writer;
  },
  fromJSON(object: any): Log {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      topics: Array.isArray(object?.topics) ? object.topics.map((e: any) => String(e)) : [],
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      blockNumber: isSet(object.blockNumber) ? BigInt(object.blockNumber.toString()) : BigInt(0),
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      txIndex: isSet(object.txIndex) ? BigInt(object.txIndex.toString()) : BigInt(0),
      blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      removed: isSet(object.removed) ? Boolean(object.removed) : false
    };
  },
  fromPartial(object: Partial<Log>): Log {
    const message = createBaseLog();
    message.address = object.address ?? "";
    message.topics = object.topics?.map(e => e) || [];
    message.data = object.data ?? new Uint8Array();
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? BigInt(object.blockNumber.toString()) : BigInt(0);
    message.txHash = object.txHash ?? "";
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt(0);
    message.blockHash = object.blockHash ?? "";
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.removed = object.removed ?? false;
    return message;
  },
  fromAmino(object: LogAmino): Log {
    return {
      address: object.address,
      topics: Array.isArray(object?.topics) ? object.topics.map((e: any) => e) : [],
      data: object.data,
      blockNumber: BigInt(object.block_number),
      txHash: object.tx_hash,
      txIndex: BigInt(object.tx_index),
      blockHash: object.block_hash,
      index: BigInt(object.index),
      removed: object.removed
    };
  },
  toAmino(message: Log): LogAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.topics) {
      obj.topics = message.topics.map(e => e);
    } else {
      obj.topics = [];
    }
    obj.data = message.data;
    obj.block_number = message.blockNumber ? message.blockNumber.toString() : undefined;
    obj.tx_hash = message.txHash;
    obj.tx_index = message.txIndex ? message.txIndex.toString() : undefined;
    obj.block_hash = message.blockHash;
    obj.index = message.index ? message.index.toString() : undefined;
    obj.removed = message.removed;
    return obj;
  },
  fromAminoMsg(object: LogAminoMsg): Log {
    return Log.fromAmino(object.value);
  },
  fromProtoMsg(message: LogProtoMsg): Log {
    return Log.decode(message.value);
  },
  toProto(message: Log): Uint8Array {
    return Log.encode(message).finish();
  },
  toProtoMsg(message: Log): LogProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.Log",
      value: Log.encode(message).finish()
    };
  }
};
function createBaseTxResult(): TxResult {
  return {
    contractAddress: "",
    bloom: new Uint8Array(),
    txLogs: TransactionLogs.fromPartial({}),
    ret: new Uint8Array(),
    reverted: false,
    gasUsed: BigInt(0)
  };
}
export const TxResult = {
  typeUrl: "/ethermint.evm.v1.TxResult",
  encode(message: TxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.bloom.length !== 0) {
      writer.uint32(18).bytes(message.bloom);
    }
    if (message.txLogs !== undefined) {
      TransactionLogs.encode(message.txLogs, writer.uint32(26).fork()).ldelim();
    }
    if (message.ret.length !== 0) {
      writer.uint32(34).bytes(message.ret);
    }
    if (message.reverted === true) {
      writer.uint32(40).bool(message.reverted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).uint64(message.gasUsed);
    }
    return writer;
  },
  fromJSON(object: any): TxResult {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      bloom: isSet(object.bloom) ? bytesFromBase64(object.bloom) : new Uint8Array(),
      txLogs: isSet(object.txLogs) ? TransactionLogs.fromJSON(object.txLogs) : undefined,
      ret: isSet(object.ret) ? bytesFromBase64(object.ret) : new Uint8Array(),
      reverted: isSet(object.reverted) ? Boolean(object.reverted) : false,
      gasUsed: isSet(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<TxResult>): TxResult {
    const message = createBaseTxResult();
    message.contractAddress = object.contractAddress ?? "";
    message.bloom = object.bloom ?? new Uint8Array();
    message.txLogs = object.txLogs !== undefined && object.txLogs !== null ? TransactionLogs.fromPartial(object.txLogs) : undefined;
    message.ret = object.ret ?? new Uint8Array();
    message.reverted = object.reverted ?? false;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TxResultAmino): TxResult {
    return {
      contractAddress: object.contract_address,
      bloom: object.bloom,
      txLogs: object?.tx_logs ? TransactionLogs.fromAmino(object.tx_logs) : undefined,
      ret: object.ret,
      reverted: object.reverted,
      gasUsed: BigInt(object.gas_used)
    };
  },
  toAmino(message: TxResult): TxResultAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.bloom = message.bloom;
    obj.tx_logs = message.txLogs ? TransactionLogs.toAmino(message.txLogs) : undefined;
    obj.ret = message.ret;
    obj.reverted = message.reverted;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TxResultAminoMsg): TxResult {
    return TxResult.fromAmino(object.value);
  },
  fromProtoMsg(message: TxResultProtoMsg): TxResult {
    return TxResult.decode(message.value);
  },
  toProto(message: TxResult): Uint8Array {
    return TxResult.encode(message).finish();
  },
  toProtoMsg(message: TxResult): TxResultProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.TxResult",
      value: TxResult.encode(message).finish()
    };
  }
};
function createBaseAccessTuple(): AccessTuple {
  return {
    address: "",
    storageKeys: []
  };
}
export const AccessTuple = {
  typeUrl: "/ethermint.evm.v1.AccessTuple",
  encode(message: AccessTuple, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.storageKeys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): AccessTuple {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      storageKeys: Array.isArray(object?.storageKeys) ? object.storageKeys.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<AccessTuple>): AccessTuple {
    const message = createBaseAccessTuple();
    message.address = object.address ?? "";
    message.storageKeys = object.storageKeys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AccessTupleAmino): AccessTuple {
    return {
      address: object.address,
      storageKeys: Array.isArray(object?.storage_keys) ? object.storage_keys.map((e: any) => e) : []
    };
  },
  toAmino(message: AccessTuple): AccessTupleAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.storageKeys) {
      obj.storage_keys = message.storageKeys.map(e => e);
    } else {
      obj.storage_keys = [];
    }
    return obj;
  },
  fromAminoMsg(object: AccessTupleAminoMsg): AccessTuple {
    return AccessTuple.fromAmino(object.value);
  },
  fromProtoMsg(message: AccessTupleProtoMsg): AccessTuple {
    return AccessTuple.decode(message.value);
  },
  toProto(message: AccessTuple): Uint8Array {
    return AccessTuple.encode(message).finish();
  },
  toProtoMsg(message: AccessTuple): AccessTupleProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.AccessTuple",
      value: AccessTuple.encode(message).finish()
    };
  }
};
function createBaseTraceConfig(): TraceConfig {
  return {
    tracer: "",
    timeout: "",
    reexec: BigInt(0),
    disableStack: false,
    disableStorage: false,
    debug: false,
    limit: 0,
    overrides: ChainConfig.fromPartial({}),
    enableMemory: false,
    enableReturnData: false,
    tracerJsonConfig: ""
  };
}
export const TraceConfig = {
  typeUrl: "/ethermint.evm.v1.TraceConfig",
  encode(message: TraceConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tracer !== "") {
      writer.uint32(10).string(message.tracer);
    }
    if (message.timeout !== "") {
      writer.uint32(18).string(message.timeout);
    }
    if (message.reexec !== BigInt(0)) {
      writer.uint32(24).uint64(message.reexec);
    }
    if (message.disableStack === true) {
      writer.uint32(40).bool(message.disableStack);
    }
    if (message.disableStorage === true) {
      writer.uint32(48).bool(message.disableStorage);
    }
    if (message.debug === true) {
      writer.uint32(64).bool(message.debug);
    }
    if (message.limit !== 0) {
      writer.uint32(72).int32(message.limit);
    }
    if (message.overrides !== undefined) {
      ChainConfig.encode(message.overrides, writer.uint32(82).fork()).ldelim();
    }
    if (message.enableMemory === true) {
      writer.uint32(88).bool(message.enableMemory);
    }
    if (message.enableReturnData === true) {
      writer.uint32(96).bool(message.enableReturnData);
    }
    if (message.tracerJsonConfig !== "") {
      writer.uint32(106).string(message.tracerJsonConfig);
    }
    return writer;
  },
  fromJSON(object: any): TraceConfig {
    return {
      tracer: isSet(object.tracer) ? String(object.tracer) : "",
      timeout: isSet(object.timeout) ? String(object.timeout) : "",
      reexec: isSet(object.reexec) ? BigInt(object.reexec.toString()) : BigInt(0),
      disableStack: isSet(object.disableStack) ? Boolean(object.disableStack) : false,
      disableStorage: isSet(object.disableStorage) ? Boolean(object.disableStorage) : false,
      debug: isSet(object.debug) ? Boolean(object.debug) : false,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      overrides: isSet(object.overrides) ? ChainConfig.fromJSON(object.overrides) : undefined,
      enableMemory: isSet(object.enableMemory) ? Boolean(object.enableMemory) : false,
      enableReturnData: isSet(object.enableReturnData) ? Boolean(object.enableReturnData) : false,
      tracerJsonConfig: isSet(object.tracerJsonConfig) ? String(object.tracerJsonConfig) : ""
    };
  },
  fromPartial(object: Partial<TraceConfig>): TraceConfig {
    const message = createBaseTraceConfig();
    message.tracer = object.tracer ?? "";
    message.timeout = object.timeout ?? "";
    message.reexec = object.reexec !== undefined && object.reexec !== null ? BigInt(object.reexec.toString()) : BigInt(0);
    message.disableStack = object.disableStack ?? false;
    message.disableStorage = object.disableStorage ?? false;
    message.debug = object.debug ?? false;
    message.limit = object.limit ?? 0;
    message.overrides = object.overrides !== undefined && object.overrides !== null ? ChainConfig.fromPartial(object.overrides) : undefined;
    message.enableMemory = object.enableMemory ?? false;
    message.enableReturnData = object.enableReturnData ?? false;
    message.tracerJsonConfig = object.tracerJsonConfig ?? "";
    return message;
  },
  fromAmino(object: TraceConfigAmino): TraceConfig {
    return {
      tracer: object.tracer,
      timeout: object.timeout,
      reexec: BigInt(object.reexec),
      disableStack: object.disable_stack,
      disableStorage: object.disable_storage,
      debug: object.debug,
      limit: object.limit,
      overrides: object?.overrides ? ChainConfig.fromAmino(object.overrides) : undefined,
      enableMemory: object.enable_memory,
      enableReturnData: object.enable_return_data,
      tracerJsonConfig: object.tracer_json_config
    };
  },
  toAmino(message: TraceConfig): TraceConfigAmino {
    const obj: any = {};
    obj.tracer = message.tracer;
    obj.timeout = message.timeout;
    obj.reexec = message.reexec ? message.reexec.toString() : undefined;
    obj.disable_stack = message.disableStack;
    obj.disable_storage = message.disableStorage;
    obj.debug = message.debug;
    obj.limit = message.limit;
    obj.overrides = message.overrides ? ChainConfig.toAmino(message.overrides) : undefined;
    obj.enable_memory = message.enableMemory;
    obj.enable_return_data = message.enableReturnData;
    obj.tracer_json_config = message.tracerJsonConfig;
    return obj;
  },
  fromAminoMsg(object: TraceConfigAminoMsg): TraceConfig {
    return TraceConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: TraceConfigProtoMsg): TraceConfig {
    return TraceConfig.decode(message.value);
  },
  toProto(message: TraceConfig): Uint8Array {
    return TraceConfig.encode(message).finish();
  },
  toProtoMsg(message: TraceConfig): TraceConfigProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.TraceConfig",
      value: TraceConfig.encode(message).finish()
    };
  }
};