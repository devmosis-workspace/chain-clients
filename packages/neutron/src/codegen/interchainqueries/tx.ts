import { KVKey, KVKeySDKType } from "./genesis";
import { ProofOps, ProofOpsSDKType, Proof, ProofSDKType } from "../tendermint/crypto/proof";
import { Any, AnySDKType } from "../google/protobuf/any";
import { ResponseDeliverTx, ResponseDeliverTxSDKType } from "../tendermint/abci/types";
import { Long, isSet, bytesFromBase64 } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgRegisterInterchainQuery {
  /** defines a query type: `kv` or `tx` now */
  queryType: string;
  /**
   * is used to define KV-storage keys for which we want to get values from
   * remote chain
   */
  keys: KVKey[];
  /** is used to define a filter for transaction search ICQ */
  transactionsFilter: string;
  /** is IBC connection ID for getting ConsensusState to verify proofs */
  connectionId: string;
  /** is used to specify how often (in neutron blocks) the query must be updated */
  updatePeriod: Long;
  /** is the signer of the message */
  sender: string;
}
export interface MsgRegisterInterchainQuerySDKType {
  query_type: string;
  keys: KVKeySDKType[];
  transactions_filter: string;
  connection_id: string;
  update_period: Long;
  sender: string;
}
export interface MsgRegisterInterchainQueryResponse {
  id: Long;
}
export interface MsgRegisterInterchainQueryResponseSDKType {
  id: Long;
}
export interface MsgSubmitQueryResult {
  queryId: Long;
  sender: string;
  /**
   * is the IBC client ID for an IBC connection between Neutron chain and target
   * chain (where the result was obtained from)
   */
  clientId: string;
  result?: QueryResult;
}
export interface MsgSubmitQueryResultSDKType {
  query_id: Long;
  sender: string;
  client_id: string;
  result?: QueryResultSDKType;
}
export interface QueryResult {
  kvResults: StorageValue[];
  block?: Block;
  height: Long;
  revision: Long;
  allowKvCallbacks: boolean;
}
export interface QueryResultSDKType {
  kv_results: StorageValueSDKType[];
  block?: BlockSDKType;
  height: Long;
  revision: Long;
  allow_kv_callbacks: boolean;
}
export interface StorageValue {
  /** is the substore name (acc, staking, etc.) */
  storagePrefix: string;
  /** is the key in IAVL store */
  key: Uint8Array;
  /** is the value in IAVL store */
  value: Uint8Array;
  /**
   * is the Merkle Proof which proves existence of key-value pair in IAVL
   * storage
   */
  Proof?: ProofOps;
}
export interface StorageValueSDKType {
  storage_prefix: string;
  key: Uint8Array;
  value: Uint8Array;
  Proof?: ProofOpsSDKType;
}
export interface Block {
  /**
   * We need to know block X+1 to verify response of transaction for block X
   * since LastResultsHash is root hash of all results from the txs from the
   * previous block
   */
  nextBlockHeader?: Any;
  /** We need to know block X to verify inclusion of transaction for block X */
  header?: Any;
  tx?: TxValue;
}
export interface BlockSDKType {
  next_block_header?: AnySDKType;
  header?: AnySDKType;
  tx?: TxValueSDKType;
}
export interface TxValue {
  response?: ResponseDeliverTx;
  /**
   * is the Merkle Proof which proves existence of response in block with height
   * next_block_header.Height
   */
  deliveryProof?: Proof;
  /**
   * is the Merkle Proof which proves existence of data in block with height
   * header.Height
   */
  inclusionProof?: Proof;
  /** is body of the transaction */
  data: Uint8Array;
}
export interface TxValueSDKType {
  response?: ResponseDeliverTxSDKType;
  delivery_proof?: ProofSDKType;
  inclusion_proof?: ProofSDKType;
  data: Uint8Array;
}
export interface MsgSubmitQueryResultResponse {}
export interface MsgSubmitQueryResultResponseSDKType {}
export interface MsgRemoveInterchainQueryRequest {
  queryId: Long;
  /** is the signer of the message */
  sender: string;
}
export interface MsgRemoveInterchainQueryRequestSDKType {
  query_id: Long;
  sender: string;
}
export interface MsgRemoveInterchainQueryResponse {}
export interface MsgRemoveInterchainQueryResponseSDKType {}
export interface MsgUpdateInterchainQueryRequest {
  queryId: Long;
  newKeys: KVKey[];
  newUpdatePeriod: Long;
  newTransactionsFilter: string;
  /** is the signer of the message */
  sender: string;
}
export interface MsgUpdateInterchainQueryRequestSDKType {
  query_id: Long;
  new_keys: KVKeySDKType[];
  new_update_period: Long;
  new_transactions_filter: string;
  sender: string;
}
export interface MsgUpdateInterchainQueryResponse {}
export interface MsgUpdateInterchainQueryResponseSDKType {}
function createBaseMsgRegisterInterchainQuery(): MsgRegisterInterchainQuery {
  return {
    queryType: "",
    keys: [],
    transactionsFilter: "",
    connectionId: "",
    updatePeriod: Long.UZERO,
    sender: ""
  };
}
export const MsgRegisterInterchainQuery = {
  encode(message: MsgRegisterInterchainQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryType !== "") {
      writer.uint32(10).string(message.queryType);
    }
    for (const v of message.keys) {
      KVKey.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.transactionsFilter !== "") {
      writer.uint32(26).string(message.transactionsFilter);
    }
    if (message.connectionId !== "") {
      writer.uint32(34).string(message.connectionId);
    }
    if (!message.updatePeriod.isZero()) {
      writer.uint32(40).uint64(message.updatePeriod);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterInterchainQuery {
    return {
      queryType: isSet(object.queryType) ? String(object.queryType) : "",
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => KVKey.fromJSON(e)) : [],
      transactionsFilter: isSet(object.transactionsFilter) ? String(object.transactionsFilter) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      updatePeriod: isSet(object.updatePeriod) ? Long.fromValue(object.updatePeriod) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterInterchainQuery>): MsgRegisterInterchainQuery {
    const message = createBaseMsgRegisterInterchainQuery();
    message.queryType = object.queryType ?? "";
    message.keys = object.keys?.map(e => KVKey.fromPartial(e)) || [];
    message.transactionsFilter = object.transactionsFilter ?? "";
    message.connectionId = object.connectionId ?? "";
    message.updatePeriod = object.updatePeriod !== undefined && object.updatePeriod !== null ? Long.fromValue(object.updatePeriod) : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseMsgRegisterInterchainQueryResponse(): MsgRegisterInterchainQueryResponse {
  return {
    id: Long.UZERO
  };
}
export const MsgRegisterInterchainQueryResponse = {
  encode(message: MsgRegisterInterchainQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterInterchainQueryResponse {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgRegisterInterchainQueryResponse>): MsgRegisterInterchainQueryResponse {
    const message = createBaseMsgRegisterInterchainQueryResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseMsgSubmitQueryResult(): MsgSubmitQueryResult {
  return {
    queryId: Long.UZERO,
    sender: "",
    clientId: "",
    result: undefined
  };
}
export const MsgSubmitQueryResult = {
  encode(message: MsgSubmitQueryResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.queryId.isZero()) {
      writer.uint32(8).uint64(message.queryId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.clientId !== "") {
      writer.uint32(26).string(message.clientId);
    }
    if (message.result !== undefined) {
      QueryResult.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitQueryResult {
    return {
      queryId: isSet(object.queryId) ? Long.fromValue(object.queryId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      result: isSet(object.result) ? QueryResult.fromJSON(object.result) : undefined
    };
  },
  fromPartial(object: Partial<MsgSubmitQueryResult>): MsgSubmitQueryResult {
    const message = createBaseMsgSubmitQueryResult();
    message.queryId = object.queryId !== undefined && object.queryId !== null ? Long.fromValue(object.queryId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.clientId = object.clientId ?? "";
    message.result = object.result !== undefined && object.result !== null ? QueryResult.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseQueryResult(): QueryResult {
  return {
    kvResults: [],
    block: undefined,
    height: Long.UZERO,
    revision: Long.UZERO,
    allowKvCallbacks: false
  };
}
export const QueryResult = {
  encode(message: QueryResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.kvResults) {
      StorageValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    if (!message.revision.isZero()) {
      writer.uint32(32).uint64(message.revision);
    }
    if (message.allowKvCallbacks === true) {
      writer.uint32(40).bool(message.allowKvCallbacks);
    }
    return writer;
  },
  fromJSON(object: any): QueryResult {
    return {
      kvResults: Array.isArray(object?.kvResults) ? object.kvResults.map((e: any) => StorageValue.fromJSON(e)) : [],
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      revision: isSet(object.revision) ? Long.fromValue(object.revision) : Long.UZERO,
      allowKvCallbacks: isSet(object.allowKvCallbacks) ? Boolean(object.allowKvCallbacks) : false
    };
  },
  fromPartial(object: Partial<QueryResult>): QueryResult {
    const message = createBaseQueryResult();
    message.kvResults = object.kvResults?.map(e => StorageValue.fromPartial(e)) || [];
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.revision = object.revision !== undefined && object.revision !== null ? Long.fromValue(object.revision) : Long.UZERO;
    message.allowKvCallbacks = object.allowKvCallbacks ?? false;
    return message;
  }
};
function createBaseStorageValue(): StorageValue {
  return {
    storagePrefix: "",
    key: new Uint8Array(),
    value: new Uint8Array(),
    Proof: undefined
  };
}
export const StorageValue = {
  encode(message: StorageValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storagePrefix !== "") {
      writer.uint32(10).string(message.storagePrefix);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(26).bytes(message.value);
    }
    if (message.Proof !== undefined) {
      ProofOps.encode(message.Proof, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): StorageValue {
    return {
      storagePrefix: isSet(object.storagePrefix) ? String(object.storagePrefix) : "",
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      Proof: isSet(object.Proof) ? ProofOps.fromJSON(object.Proof) : undefined
    };
  },
  fromPartial(object: Partial<StorageValue>): StorageValue {
    const message = createBaseStorageValue();
    message.storagePrefix = object.storagePrefix ?? "";
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.Proof = object.Proof !== undefined && object.Proof !== null ? ProofOps.fromPartial(object.Proof) : undefined;
    return message;
  }
};
function createBaseBlock(): Block {
  return {
    nextBlockHeader: undefined,
    header: undefined,
    tx: undefined
  };
}
export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextBlockHeader !== undefined) {
      Any.encode(message.nextBlockHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.header !== undefined) {
      Any.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.tx !== undefined) {
      TxValue.encode(message.tx, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Block {
    return {
      nextBlockHeader: isSet(object.nextBlockHeader) ? Any.fromJSON(object.nextBlockHeader) : undefined,
      header: isSet(object.header) ? Any.fromJSON(object.header) : undefined,
      tx: isSet(object.tx) ? TxValue.fromJSON(object.tx) : undefined
    };
  },
  fromPartial(object: Partial<Block>): Block {
    const message = createBaseBlock();
    message.nextBlockHeader = object.nextBlockHeader !== undefined && object.nextBlockHeader !== null ? Any.fromPartial(object.nextBlockHeader) : undefined;
    message.header = object.header !== undefined && object.header !== null ? Any.fromPartial(object.header) : undefined;
    message.tx = object.tx !== undefined && object.tx !== null ? TxValue.fromPartial(object.tx) : undefined;
    return message;
  }
};
function createBaseTxValue(): TxValue {
  return {
    response: undefined,
    deliveryProof: undefined,
    inclusionProof: undefined,
    data: new Uint8Array()
  };
}
export const TxValue = {
  encode(message: TxValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      ResponseDeliverTx.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.deliveryProof !== undefined) {
      Proof.encode(message.deliveryProof, writer.uint32(18).fork()).ldelim();
    }
    if (message.inclusionProof !== undefined) {
      Proof.encode(message.inclusionProof, writer.uint32(26).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): TxValue {
    return {
      response: isSet(object.response) ? ResponseDeliverTx.fromJSON(object.response) : undefined,
      deliveryProof: isSet(object.deliveryProof) ? Proof.fromJSON(object.deliveryProof) : undefined,
      inclusionProof: isSet(object.inclusionProof) ? Proof.fromJSON(object.inclusionProof) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<TxValue>): TxValue {
    const message = createBaseTxValue();
    message.response = object.response !== undefined && object.response !== null ? ResponseDeliverTx.fromPartial(object.response) : undefined;
    message.deliveryProof = object.deliveryProof !== undefined && object.deliveryProof !== null ? Proof.fromPartial(object.deliveryProof) : undefined;
    message.inclusionProof = object.inclusionProof !== undefined && object.inclusionProof !== null ? Proof.fromPartial(object.inclusionProof) : undefined;
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgSubmitQueryResultResponse(): MsgSubmitQueryResultResponse {
  return {};
}
export const MsgSubmitQueryResultResponse = {
  encode(_: MsgSubmitQueryResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSubmitQueryResultResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitQueryResultResponse>): MsgSubmitQueryResultResponse {
    const message = createBaseMsgSubmitQueryResultResponse();
    return message;
  }
};
function createBaseMsgRemoveInterchainQueryRequest(): MsgRemoveInterchainQueryRequest {
  return {
    queryId: Long.UZERO,
    sender: ""
  };
}
export const MsgRemoveInterchainQueryRequest = {
  encode(message: MsgRemoveInterchainQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.queryId.isZero()) {
      writer.uint32(8).uint64(message.queryId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveInterchainQueryRequest {
    return {
      queryId: isSet(object.queryId) ? Long.fromValue(object.queryId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveInterchainQueryRequest>): MsgRemoveInterchainQueryRequest {
    const message = createBaseMsgRemoveInterchainQueryRequest();
    message.queryId = object.queryId !== undefined && object.queryId !== null ? Long.fromValue(object.queryId) : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseMsgRemoveInterchainQueryResponse(): MsgRemoveInterchainQueryResponse {
  return {};
}
export const MsgRemoveInterchainQueryResponse = {
  encode(_: MsgRemoveInterchainQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRemoveInterchainQueryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveInterchainQueryResponse>): MsgRemoveInterchainQueryResponse {
    const message = createBaseMsgRemoveInterchainQueryResponse();
    return message;
  }
};
function createBaseMsgUpdateInterchainQueryRequest(): MsgUpdateInterchainQueryRequest {
  return {
    queryId: Long.UZERO,
    newKeys: [],
    newUpdatePeriod: Long.UZERO,
    newTransactionsFilter: "",
    sender: ""
  };
}
export const MsgUpdateInterchainQueryRequest = {
  encode(message: MsgUpdateInterchainQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.queryId.isZero()) {
      writer.uint32(8).uint64(message.queryId);
    }
    for (const v of message.newKeys) {
      KVKey.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.newUpdatePeriod.isZero()) {
      writer.uint32(24).uint64(message.newUpdatePeriod);
    }
    if (message.newTransactionsFilter !== "") {
      writer.uint32(34).string(message.newTransactionsFilter);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateInterchainQueryRequest {
    return {
      queryId: isSet(object.queryId) ? Long.fromValue(object.queryId) : Long.UZERO,
      newKeys: Array.isArray(object?.newKeys) ? object.newKeys.map((e: any) => KVKey.fromJSON(e)) : [],
      newUpdatePeriod: isSet(object.newUpdatePeriod) ? Long.fromValue(object.newUpdatePeriod) : Long.UZERO,
      newTransactionsFilter: isSet(object.newTransactionsFilter) ? String(object.newTransactionsFilter) : "",
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateInterchainQueryRequest>): MsgUpdateInterchainQueryRequest {
    const message = createBaseMsgUpdateInterchainQueryRequest();
    message.queryId = object.queryId !== undefined && object.queryId !== null ? Long.fromValue(object.queryId) : Long.UZERO;
    message.newKeys = object.newKeys?.map(e => KVKey.fromPartial(e)) || [];
    message.newUpdatePeriod = object.newUpdatePeriod !== undefined && object.newUpdatePeriod !== null ? Long.fromValue(object.newUpdatePeriod) : Long.UZERO;
    message.newTransactionsFilter = object.newTransactionsFilter ?? "";
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseMsgUpdateInterchainQueryResponse(): MsgUpdateInterchainQueryResponse {
  return {};
}
export const MsgUpdateInterchainQueryResponse = {
  encode(_: MsgUpdateInterchainQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateInterchainQueryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateInterchainQueryResponse>): MsgUpdateInterchainQueryResponse {
    const message = createBaseMsgUpdateInterchainQueryResponse();
    return message;
  }
};