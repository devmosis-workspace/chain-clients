import { MsgEthereumTx, MsgEthereumTxSDKType } from "./tx";
import { TraceConfig, TraceConfigSDKType, Log, LogSDKType, Params, ParamsSDKType } from "./evm";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
  address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
  /** code_hash is the hex-formatted code bytes from the EOA. */
  codeHash: string;
  /** nonce is the account's sequence number. */
  nonce: Long;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
  balance: string;
  code_hash: string;
  nonce: Long;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequestSDKType {
  address: string;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponse {
  /** cosmos_address is the cosmos address of the account. */
  cosmosAddress: string;
  /** sequence is the account's sequence number. */
  sequence: Long;
  /** account_number is the account number */
  accountNumber: Long;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponseSDKType {
  cosmos_address: string;
  sequence: Long;
  account_number: Long;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequest {
  /** cons_address is the validator cons address to query the account for. */
  consAddress: string;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequestSDKType {
  cons_address: string;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponse {
  /** account_address is the cosmos address of the account in bech32 format. */
  accountAddress: string;
  /** sequence is the account's sequence number. */
  sequence: Long;
  /** account_number is the account number */
  accountNumber: Long;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponseSDKType {
  account_address: string;
  sequence: Long;
  account_number: Long;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  /** address is the ethereum hex address to query the balance for. */
  address: string;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestSDKType {
  address: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseSDKType {
  balance: string;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequest {
  /** address is the ethereum hex address to query the storage state for. */
  address: string;
  /** key defines the key of the storage state */
  key: string;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequestSDKType {
  address: string;
  key: string;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponse {
  /** value defines the storage state value hash associated with the given key. */
  value: string;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponseSDKType {
  value: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
  /** address is the ethereum hex address to query the code for. */
  address: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestSDKType {
  address: string;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponse {
  /** code represents the code bytes from an ethereum address. */
  code: Uint8Array;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponseSDKType {
  code: Uint8Array;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequest {
  /** hash is the ethereum transaction hex hash to query the logs for. */
  hash: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequestSDKType {
  hash: string;
  pagination?: PageRequestSDKType;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponse {
  /** logs represents the ethereum logs generated from the given transaction. */
  logs: Log[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponseSDKType {
  logs: LogSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
  /** params define the evm module parameters. */
  params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequest {
  /** args uses the same json format as the json rpc api. */
  args: Uint8Array;
  /** gas_cap defines the default gas cap to be used */
  gasCap: Long;
  /** proposer_address of the requested block in hex format */
  proposerAddress: Uint8Array;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chainId: Long;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequestSDKType {
  args: Uint8Array;
  gas_cap: Long;
  proposer_address: Uint8Array;
  chain_id: Long;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponse {
  /** gas returns the estimated gas */
  gas: Long;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponseSDKType {
  gas: Long;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequest {
  /** msg is the MsgEthereumTx for the requested transaction */
  msg?: MsgEthereumTx;
  /** trace_config holds extra parameters to trace functions. */
  traceConfig?: TraceConfig;
  /**
   * predecessors is an array of transactions included in the same block
   * need to be replayed first to get correct context for tracing.
   */
  predecessors: MsgEthereumTx[];
  /** block_number of requested transaction */
  blockNumber: Long;
  /** block_hash of requested transaction */
  blockHash: string;
  /** block_time of requested transaction */
  blockTime?: Timestamp;
  /** proposer_address is the proposer of the requested block */
  proposerAddress: Uint8Array;
  /** chain_id is the the eip155 chain id parsed from the requested block header */
  chainId: Long;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequestSDKType {
  msg?: MsgEthereumTxSDKType;
  trace_config?: TraceConfigSDKType;
  predecessors: MsgEthereumTxSDKType[];
  block_number: Long;
  block_hash: string;
  block_time?: TimestampSDKType;
  proposer_address: Uint8Array;
  chain_id: Long;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponse {
  /** data is the response serialized in bytes */
  data: Uint8Array;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponseSDKType {
  data: Uint8Array;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequest {
  /** txs is an array of messages in the block */
  txs: MsgEthereumTx[];
  /** trace_config holds extra parameters to trace functions. */
  traceConfig?: TraceConfig;
  /** block_number of the traced block */
  blockNumber: Long;
  /** block_hash (hex) of the traced block */
  blockHash: string;
  /** block_time of the traced block */
  blockTime?: Timestamp;
  /** proposer_address is the address of the requested block */
  proposerAddress: Uint8Array;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chainId: Long;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequestSDKType {
  txs: MsgEthereumTxSDKType[];
  trace_config?: TraceConfigSDKType;
  block_number: Long;
  block_hash: string;
  block_time?: TimestampSDKType;
  proposer_address: Uint8Array;
  chain_id: Long;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponse {
  /** data is the response serialized in bytes */
  data: Uint8Array;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponseSDKType {
  data: Uint8Array;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequestSDKType {}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
  /** base_fee is the EIP1559 base fee */
  baseFee: string;
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponseSDKType {
  base_fee: string;
}
function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: ""
  };
}
export const QueryAccountRequest = {
  encode(message: QueryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    balance: "",
    codeHash: "",
    nonce: Long.UZERO
  };
}
export const QueryAccountResponse = {
  encode(message: QueryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    if (message.codeHash !== "") {
      writer.uint32(18).string(message.codeHash);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountResponse {
    return {
      balance: isSet(object.balance) ? String(object.balance) : "",
      codeHash: isSet(object.codeHash) ? String(object.codeHash) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.balance = object.balance ?? "";
    message.codeHash = object.codeHash ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  }
};
function createBaseQueryCosmosAccountRequest(): QueryCosmosAccountRequest {
  return {
    address: ""
  };
}
export const QueryCosmosAccountRequest = {
  encode(message: QueryCosmosAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryCosmosAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryCosmosAccountRequest>): QueryCosmosAccountRequest {
    const message = createBaseQueryCosmosAccountRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryCosmosAccountResponse(): QueryCosmosAccountResponse {
  return {
    cosmosAddress: "",
    sequence: Long.UZERO,
    accountNumber: Long.UZERO
  };
}
export const QueryCosmosAccountResponse = {
  encode(message: QueryCosmosAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosAddress !== "") {
      writer.uint32(10).string(message.cosmosAddress);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    return writer;
  },
  fromJSON(object: any): QueryCosmosAccountResponse {
    return {
      cosmosAddress: isSet(object.cosmosAddress) ? String(object.cosmosAddress) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      accountNumber: isSet(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryCosmosAccountResponse>): QueryCosmosAccountResponse {
    const message = createBaseQueryCosmosAccountResponse();
    message.cosmosAddress = object.cosmosAddress ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
    return message;
  }
};
function createBaseQueryValidatorAccountRequest(): QueryValidatorAccountRequest {
  return {
    consAddress: ""
  };
}
export const QueryValidatorAccountRequest = {
  encode(message: QueryValidatorAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorAccountRequest {
    return {
      consAddress: isSet(object.consAddress) ? String(object.consAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryValidatorAccountRequest>): QueryValidatorAccountRequest {
    const message = createBaseQueryValidatorAccountRequest();
    message.consAddress = object.consAddress ?? "";
    return message;
  }
};
function createBaseQueryValidatorAccountResponse(): QueryValidatorAccountResponse {
  return {
    accountAddress: "",
    sequence: Long.UZERO,
    accountNumber: Long.UZERO
  };
}
export const QueryValidatorAccountResponse = {
  encode(message: QueryValidatorAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorAccountResponse {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      accountNumber: isSet(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryValidatorAccountResponse>): QueryValidatorAccountResponse {
    const message = createBaseQueryValidatorAccountResponse();
    message.accountAddress = object.accountAddress ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
    return message;
  }
};
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    address: ""
  };
}
export const QueryBalanceRequest = {
  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryBalanceRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: ""
  };
}
export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },
  fromJSON(object: any): QueryBalanceResponse {
    return {
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance ?? "";
    return message;
  }
};
function createBaseQueryStorageRequest(): QueryStorageRequest {
  return {
    address: "",
    key: ""
  };
}
export const QueryStorageRequest = {
  encode(message: QueryStorageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  fromJSON(object: any): QueryStorageRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      key: isSet(object.key) ? String(object.key) : ""
    };
  },
  fromPartial(object: Partial<QueryStorageRequest>): QueryStorageRequest {
    const message = createBaseQueryStorageRequest();
    message.address = object.address ?? "";
    message.key = object.key ?? "";
    return message;
  }
};
function createBaseQueryStorageResponse(): QueryStorageResponse {
  return {
    value: ""
  };
}
export const QueryStorageResponse = {
  encode(message: QueryStorageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): QueryStorageResponse {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<QueryStorageResponse>): QueryStorageResponse {
    const message = createBaseQueryStorageResponse();
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    address: ""
  };
}
export const QueryCodeRequest = {
  encode(message: QueryCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryCodeRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    code: new Uint8Array()
  };
}
export const QueryCodeResponse = {
  encode(message: QueryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code.length !== 0) {
      writer.uint32(10).bytes(message.code);
    }
    return writer;
  },
  fromJSON(object: any): QueryCodeResponse {
    return {
      code: isSet(object.code) ? bytesFromBase64(object.code) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.code = object.code ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryTxLogsRequest(): QueryTxLogsRequest {
  return {
    hash: "",
    pagination: undefined
  };
}
export const QueryTxLogsRequest = {
  encode(message: QueryTxLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTxLogsRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryTxLogsRequest>): QueryTxLogsRequest {
    const message = createBaseQueryTxLogsRequest();
    message.hash = object.hash ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryTxLogsResponse(): QueryTxLogsResponse {
  return {
    logs: [],
    pagination: undefined
  };
}
export const QueryTxLogsResponse = {
  encode(message: QueryTxLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTxLogsResponse {
    return {
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => Log.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryTxLogsResponse>): QueryTxLogsResponse {
    const message = createBaseQueryTxLogsResponse();
    message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseEthCallRequest(): EthCallRequest {
  return {
    args: new Uint8Array(),
    gasCap: Long.UZERO,
    proposerAddress: new Uint8Array(),
    chainId: Long.ZERO
  };
}
export const EthCallRequest = {
  encode(message: EthCallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.args.length !== 0) {
      writer.uint32(10).bytes(message.args);
    }
    if (!message.gasCap.isZero()) {
      writer.uint32(16).uint64(message.gasCap);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(26).bytes(message.proposerAddress);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(32).int64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): EthCallRequest {
    return {
      args: isSet(object.args) ? bytesFromBase64(object.args) : new Uint8Array(),
      gasCap: isSet(object.gasCap) ? Long.fromValue(object.gasCap) : Long.UZERO,
      proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(),
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.ZERO
    };
  },
  fromPartial(object: Partial<EthCallRequest>): EthCallRequest {
    const message = createBaseEthCallRequest();
    message.args = object.args ?? new Uint8Array();
    message.gasCap = object.gasCap !== undefined && object.gasCap !== null ? Long.fromValue(object.gasCap) : Long.UZERO;
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? Long.fromValue(object.chainId) : Long.ZERO;
    return message;
  }
};
function createBaseEstimateGasResponse(): EstimateGasResponse {
  return {
    gas: Long.UZERO
  };
}
export const EstimateGasResponse = {
  encode(message: EstimateGasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gas.isZero()) {
      writer.uint32(8).uint64(message.gas);
    }
    return writer;
  },
  fromJSON(object: any): EstimateGasResponse {
    return {
      gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EstimateGasResponse>): EstimateGasResponse {
    const message = createBaseEstimateGasResponse();
    message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
    return message;
  }
};
function createBaseQueryTraceTxRequest(): QueryTraceTxRequest {
  return {
    msg: undefined,
    traceConfig: undefined,
    predecessors: [],
    blockNumber: Long.ZERO,
    blockHash: "",
    blockTime: undefined,
    proposerAddress: new Uint8Array(),
    chainId: Long.ZERO
  };
}
export const QueryTraceTxRequest = {
  encode(message: QueryTraceTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== undefined) {
      MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.traceConfig !== undefined) {
      TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.predecessors) {
      MsgEthereumTx.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(40).int64(message.blockNumber);
    }
    if (message.blockHash !== "") {
      writer.uint32(50).string(message.blockHash);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(58).fork()).ldelim();
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(72).int64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryTraceTxRequest {
    return {
      msg: isSet(object.msg) ? MsgEthereumTx.fromJSON(object.msg) : undefined,
      traceConfig: isSet(object.traceConfig) ? TraceConfig.fromJSON(object.traceConfig) : undefined,
      predecessors: Array.isArray(object?.predecessors) ? object.predecessors.map((e: any) => MsgEthereumTx.fromJSON(e)) : [],
      blockNumber: isSet(object.blockNumber) ? Long.fromValue(object.blockNumber) : Long.ZERO,
      blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(),
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.ZERO
    };
  },
  fromPartial(object: Partial<QueryTraceTxRequest>): QueryTraceTxRequest {
    const message = createBaseQueryTraceTxRequest();
    message.msg = object.msg !== undefined && object.msg !== null ? MsgEthereumTx.fromPartial(object.msg) : undefined;
    message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? TraceConfig.fromPartial(object.traceConfig) : undefined;
    message.predecessors = object.predecessors?.map(e => MsgEthereumTx.fromPartial(e)) || [];
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? Long.fromValue(object.blockNumber) : Long.ZERO;
    message.blockHash = object.blockHash ?? "";
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? Long.fromValue(object.chainId) : Long.ZERO;
    return message;
  }
};
function createBaseQueryTraceTxResponse(): QueryTraceTxResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryTraceTxResponse = {
  encode(message: QueryTraceTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): QueryTraceTxResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryTraceTxResponse>): QueryTraceTxResponse {
    const message = createBaseQueryTraceTxResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryTraceBlockRequest(): QueryTraceBlockRequest {
  return {
    txs: [],
    traceConfig: undefined,
    blockNumber: Long.ZERO,
    blockHash: "",
    blockTime: undefined,
    proposerAddress: new Uint8Array(),
    chainId: Long.ZERO
  };
}
export const QueryTraceBlockRequest = {
  encode(message: QueryTraceBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      MsgEthereumTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.traceConfig !== undefined) {
      TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(40).int64(message.blockNumber);
    }
    if (message.blockHash !== "") {
      writer.uint32(50).string(message.blockHash);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(58).fork()).ldelim();
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(72).int64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryTraceBlockRequest {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => MsgEthereumTx.fromJSON(e)) : [],
      traceConfig: isSet(object.traceConfig) ? TraceConfig.fromJSON(object.traceConfig) : undefined,
      blockNumber: isSet(object.blockNumber) ? Long.fromValue(object.blockNumber) : Long.ZERO,
      blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(),
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.ZERO
    };
  },
  fromPartial(object: Partial<QueryTraceBlockRequest>): QueryTraceBlockRequest {
    const message = createBaseQueryTraceBlockRequest();
    message.txs = object.txs?.map(e => MsgEthereumTx.fromPartial(e)) || [];
    message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? TraceConfig.fromPartial(object.traceConfig) : undefined;
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? Long.fromValue(object.blockNumber) : Long.ZERO;
    message.blockHash = object.blockHash ?? "";
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? Long.fromValue(object.chainId) : Long.ZERO;
    return message;
  }
};
function createBaseQueryTraceBlockResponse(): QueryTraceBlockResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryTraceBlockResponse = {
  encode(message: QueryTraceBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): QueryTraceBlockResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryTraceBlockResponse>): QueryTraceBlockResponse {
    const message = createBaseQueryTraceBlockResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryBaseFeeRequest(): QueryBaseFeeRequest {
  return {};
}
export const QueryBaseFeeRequest = {
  encode(_: QueryBaseFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryBaseFeeRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBaseFeeRequest>): QueryBaseFeeRequest {
    const message = createBaseQueryBaseFeeRequest();
    return message;
  }
};
function createBaseQueryBaseFeeResponse(): QueryBaseFeeResponse {
  return {
    baseFee: ""
  };
}
export const QueryBaseFeeResponse = {
  encode(message: QueryBaseFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseFee !== "") {
      writer.uint32(10).string(message.baseFee);
    }
    return writer;
  },
  fromJSON(object: any): QueryBaseFeeResponse {
    return {
      baseFee: isSet(object.baseFee) ? String(object.baseFee) : ""
    };
  },
  fromPartial(object: Partial<QueryBaseFeeResponse>): QueryBaseFeeResponse {
    const message = createBaseQueryBaseFeeResponse();
    message.baseFee = object.baseFee ?? "";
    return message;
  }
};