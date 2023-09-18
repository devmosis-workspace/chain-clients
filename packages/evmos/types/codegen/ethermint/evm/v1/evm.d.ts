import { BinaryWriter } from "../../../binary";
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
export declare const ChainConfig: {
    typeUrl: string;
    encode(message: ChainConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainConfig;
    fromPartial(object: Partial<ChainConfig>): ChainConfig;
    fromAmino(object: ChainConfigAmino): ChainConfig;
    toAmino(message: ChainConfig): ChainConfigAmino;
    fromAminoMsg(object: ChainConfigAminoMsg): ChainConfig;
    fromProtoMsg(message: ChainConfigProtoMsg): ChainConfig;
    toProto(message: ChainConfig): Uint8Array;
    toProtoMsg(message: ChainConfig): ChainConfigProtoMsg;
};
export declare const State: {
    typeUrl: string;
    encode(message: State, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): State;
    fromPartial(object: Partial<State>): State;
    fromAmino(object: StateAmino): State;
    toAmino(message: State): StateAmino;
    fromAminoMsg(object: StateAminoMsg): State;
    fromProtoMsg(message: StateProtoMsg): State;
    toProto(message: State): Uint8Array;
    toProtoMsg(message: State): StateProtoMsg;
};
export declare const TransactionLogs: {
    typeUrl: string;
    encode(message: TransactionLogs, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransactionLogs;
    fromPartial(object: Partial<TransactionLogs>): TransactionLogs;
    fromAmino(object: TransactionLogsAmino): TransactionLogs;
    toAmino(message: TransactionLogs): TransactionLogsAmino;
    fromAminoMsg(object: TransactionLogsAminoMsg): TransactionLogs;
    fromProtoMsg(message: TransactionLogsProtoMsg): TransactionLogs;
    toProto(message: TransactionLogs): Uint8Array;
    toProtoMsg(message: TransactionLogs): TransactionLogsProtoMsg;
};
export declare const Log: {
    typeUrl: string;
    encode(message: Log, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Log;
    fromPartial(object: Partial<Log>): Log;
    fromAmino(object: LogAmino): Log;
    toAmino(message: Log): LogAmino;
    fromAminoMsg(object: LogAminoMsg): Log;
    fromProtoMsg(message: LogProtoMsg): Log;
    toProto(message: Log): Uint8Array;
    toProtoMsg(message: Log): LogProtoMsg;
};
export declare const TxResult: {
    typeUrl: string;
    encode(message: TxResult, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TxResult;
    fromPartial(object: Partial<TxResult>): TxResult;
    fromAmino(object: TxResultAmino): TxResult;
    toAmino(message: TxResult): TxResultAmino;
    fromAminoMsg(object: TxResultAminoMsg): TxResult;
    fromProtoMsg(message: TxResultProtoMsg): TxResult;
    toProto(message: TxResult): Uint8Array;
    toProtoMsg(message: TxResult): TxResultProtoMsg;
};
export declare const AccessTuple: {
    typeUrl: string;
    encode(message: AccessTuple, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccessTuple;
    fromPartial(object: Partial<AccessTuple>): AccessTuple;
    fromAmino(object: AccessTupleAmino): AccessTuple;
    toAmino(message: AccessTuple): AccessTupleAmino;
    fromAminoMsg(object: AccessTupleAminoMsg): AccessTuple;
    fromProtoMsg(message: AccessTupleProtoMsg): AccessTuple;
    toProto(message: AccessTuple): Uint8Array;
    toProtoMsg(message: AccessTuple): AccessTupleProtoMsg;
};
export declare const TraceConfig: {
    typeUrl: string;
    encode(message: TraceConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TraceConfig;
    fromPartial(object: Partial<TraceConfig>): TraceConfig;
    fromAmino(object: TraceConfigAmino): TraceConfig;
    toAmino(message: TraceConfig): TraceConfigAmino;
    fromAminoMsg(object: TraceConfigAminoMsg): TraceConfig;
    fromProtoMsg(message: TraceConfigProtoMsg): TraceConfig;
    toProto(message: TraceConfig): Uint8Array;
    toProtoMsg(message: TraceConfig): TraceConfigProtoMsg;
};
