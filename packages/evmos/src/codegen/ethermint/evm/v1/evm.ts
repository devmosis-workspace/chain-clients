import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  extraEips: Long[];
  /** chain_config defines the EVM chain configuration parameters */
  chainConfig?: ChainConfig;
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
/** Params defines the EVM module parameters */
export interface ParamsSDKType {
  evm_denom: string;
  enable_create: boolean;
  enable_call: boolean;
  extra_eips: Long[];
  chain_config?: ChainConfigSDKType;
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
  blockNumber: Long;
  /** tx_hash is the transaction hash */
  txHash: string;
  /** tx_index of the transaction in the block */
  txIndex: Long;
  /** block_hash of the block in which the transaction was included */
  blockHash: string;
  /** index of the log in the block */
  index: Long;
  /**
   * removed is true if this log was reverted due to a chain
   * reorganisation. You must pay attention to this field if you receive logs
   * through a filter query.
   */
  removed: boolean;
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
  block_number: Long;
  tx_hash: string;
  tx_index: Long;
  block_hash: string;
  index: Long;
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
  txLogs?: TransactionLogs;
  /** ret defines the bytes from the execution. */
  ret: Uint8Array;
  /** reverted flag is set to true when the call has been reverted */
  reverted: boolean;
  /** gas_used notes the amount of gas consumed while execution */
  gasUsed: Long;
}
/** TxResult stores results of Tx execution. */
export interface TxResultSDKType {
  contract_address: string;
  bloom: Uint8Array;
  tx_logs?: TransactionLogsSDKType;
  ret: Uint8Array;
  reverted: boolean;
  gas_used: Long;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTuple {
  /** address is a hex formatted ethereum address */
  address: string;
  /** storage_keys are hex formatted hashes of the storage keys */
  storageKeys: string[];
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
  reexec: Long;
  /** disable_stack switches stack capture */
  disableStack: boolean;
  /** disable_storage switches storage capture */
  disableStorage: boolean;
  /** debug can be used to print output during capture end */
  debug: boolean;
  /** limit defines the maximum length of output, but zero means unlimited */
  limit: number;
  /** overrides can be used to execute a trace using future fork rules */
  overrides?: ChainConfig;
  /** enable_memory switches memory capture */
  enableMemory: boolean;
  /** enable_return_data switches the capture of return data */
  enableReturnData: boolean;
  /** tracer_json_config configures the tracer using a JSON string */
  tracerJsonConfig: string;
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfigSDKType {
  tracer: string;
  timeout: string;
  reexec: Long;
  disable_stack: boolean;
  disable_storage: boolean;
  debug: boolean;
  limit: number;
  overrides?: ChainConfigSDKType;
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
    chainConfig: undefined,
    allowUnprotectedTxs: false,
    activePrecompiles: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      extraEips: Array.isArray(object?.extraEips) ? object.extraEips.map((e: any) => Long.fromValue(e)) : [],
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
    message.extraEips = object.extraEips?.map(e => Long.fromValue(e)) || [];
    message.chainConfig = object.chainConfig !== undefined && object.chainConfig !== null ? ChainConfig.fromPartial(object.chainConfig) : undefined;
    message.allowUnprotectedTxs = object.allowUnprotectedTxs ?? false;
    message.activePrecompiles = object.activePrecompiles?.map(e => e) || [];
    return message;
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
  encode(message: ChainConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseState(): State {
  return {
    key: "",
    value: ""
  };
}
export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseTransactionLogs(): TransactionLogs {
  return {
    hash: "",
    logs: []
  };
}
export const TransactionLogs = {
  encode(message: TransactionLogs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseLog(): Log {
  return {
    address: "",
    topics: [],
    data: new Uint8Array(),
    blockNumber: Long.UZERO,
    txHash: "",
    txIndex: Long.UZERO,
    blockHash: "",
    index: Long.UZERO,
    removed: false
  };
}
export const Log = {
  encode(message: Log, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.topics) {
      writer.uint32(18).string(v!);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(32).uint64(message.blockNumber);
    }
    if (message.txHash !== "") {
      writer.uint32(42).string(message.txHash);
    }
    if (!message.txIndex.isZero()) {
      writer.uint32(48).uint64(message.txIndex);
    }
    if (message.blockHash !== "") {
      writer.uint32(58).string(message.blockHash);
    }
    if (!message.index.isZero()) {
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
      blockNumber: isSet(object.blockNumber) ? Long.fromValue(object.blockNumber) : Long.UZERO,
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      txIndex: isSet(object.txIndex) ? Long.fromValue(object.txIndex) : Long.UZERO,
      blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      removed: isSet(object.removed) ? Boolean(object.removed) : false
    };
  },
  fromPartial(object: Partial<Log>): Log {
    const message = createBaseLog();
    message.address = object.address ?? "";
    message.topics = object.topics?.map(e => e) || [];
    message.data = object.data ?? new Uint8Array();
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? Long.fromValue(object.blockNumber) : Long.UZERO;
    message.txHash = object.txHash ?? "";
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? Long.fromValue(object.txIndex) : Long.UZERO;
    message.blockHash = object.blockHash ?? "";
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.removed = object.removed ?? false;
    return message;
  }
};
function createBaseTxResult(): TxResult {
  return {
    contractAddress: "",
    bloom: new Uint8Array(),
    txLogs: undefined,
    ret: new Uint8Array(),
    reverted: false,
    gasUsed: Long.UZERO
  };
}
export const TxResult = {
  encode(message: TxResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.gasUsed.isZero()) {
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
      gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.UZERO
    };
  },
  fromPartial(object: Partial<TxResult>): TxResult {
    const message = createBaseTxResult();
    message.contractAddress = object.contractAddress ?? "";
    message.bloom = object.bloom ?? new Uint8Array();
    message.txLogs = object.txLogs !== undefined && object.txLogs !== null ? TransactionLogs.fromPartial(object.txLogs) : undefined;
    message.ret = object.ret ?? new Uint8Array();
    message.reverted = object.reverted ?? false;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.UZERO;
    return message;
  }
};
function createBaseAccessTuple(): AccessTuple {
  return {
    address: "",
    storageKeys: []
  };
}
export const AccessTuple = {
  encode(message: AccessTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseTraceConfig(): TraceConfig {
  return {
    tracer: "",
    timeout: "",
    reexec: Long.UZERO,
    disableStack: false,
    disableStorage: false,
    debug: false,
    limit: 0,
    overrides: undefined,
    enableMemory: false,
    enableReturnData: false,
    tracerJsonConfig: ""
  };
}
export const TraceConfig = {
  encode(message: TraceConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tracer !== "") {
      writer.uint32(10).string(message.tracer);
    }
    if (message.timeout !== "") {
      writer.uint32(18).string(message.timeout);
    }
    if (!message.reexec.isZero()) {
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
      reexec: isSet(object.reexec) ? Long.fromValue(object.reexec) : Long.UZERO,
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
    message.reexec = object.reexec !== undefined && object.reexec !== null ? Long.fromValue(object.reexec) : Long.UZERO;
    message.disableStack = object.disableStack ?? false;
    message.disableStorage = object.disableStorage ?? false;
    message.debug = object.debug ?? false;
    message.limit = object.limit ?? 0;
    message.overrides = object.overrides !== undefined && object.overrides !== null ? ChainConfig.fromPartial(object.overrides) : undefined;
    message.enableMemory = object.enableMemory ?? false;
    message.enableReturnData = object.enableReturnData ?? false;
    message.tracerJsonConfig = object.tracerJsonConfig ?? "";
    return message;
  }
};