import { KVKey, KVKeyAmino, KVKeySDKType } from "./genesis";
import { ProofOps, ProofOpsAmino, ProofOpsSDKType, Proof, ProofAmino, ProofSDKType } from "../tendermint/crypto/proof";
import { Any, AnyAmino, AnySDKType } from "../google/protobuf/any";
import { ResponseDeliverTx, ResponseDeliverTxAmino, ResponseDeliverTxSDKType } from "../tendermint/abci/types";
import { BinaryWriter } from "../binary";
import { isSet, bytesFromBase64 } from "../helpers";
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
  updatePeriod: bigint;
  /** is the signer of the message */
  sender: string;
}
export interface MsgRegisterInterchainQueryProtoMsg {
  typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery";
  value: Uint8Array;
}
export interface MsgRegisterInterchainQueryAmino {
  /** defines a query type: `kv` or `tx` now */
  query_type: string;
  /**
   * is used to define KV-storage keys for which we want to get values from
   * remote chain
   */
  keys: KVKeyAmino[];
  /** is used to define a filter for transaction search ICQ */
  transactions_filter: string;
  /** is IBC connection ID for getting ConsensusState to verify proofs */
  connection_id: string;
  /** is used to specify how often (in neutron blocks) the query must be updated */
  update_period: string;
  /** is the signer of the message */
  sender: string;
}
export interface MsgRegisterInterchainQueryAminoMsg {
  type: "/neutron.interchainqueries.MsgRegisterInterchainQuery";
  value: MsgRegisterInterchainQueryAmino;
}
export interface MsgRegisterInterchainQuerySDKType {
  query_type: string;
  keys: KVKeySDKType[];
  transactions_filter: string;
  connection_id: string;
  update_period: bigint;
  sender: string;
}
export interface MsgRegisterInterchainQueryResponse {
  id: bigint;
}
export interface MsgRegisterInterchainQueryResponseProtoMsg {
  typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQueryResponse";
  value: Uint8Array;
}
export interface MsgRegisterInterchainQueryResponseAmino {
  id: string;
}
export interface MsgRegisterInterchainQueryResponseAminoMsg {
  type: "/neutron.interchainqueries.MsgRegisterInterchainQueryResponse";
  value: MsgRegisterInterchainQueryResponseAmino;
}
export interface MsgRegisterInterchainQueryResponseSDKType {
  id: bigint;
}
export interface MsgSubmitQueryResult {
  queryId: bigint;
  sender: string;
  /**
   * is the IBC client ID for an IBC connection between Neutron chain and target
   * chain (where the result was obtained from)
   */
  clientId: string;
  result: QueryResult;
}
export interface MsgSubmitQueryResultProtoMsg {
  typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult";
  value: Uint8Array;
}
export interface MsgSubmitQueryResultAmino {
  query_id: string;
  sender: string;
  /**
   * is the IBC client ID for an IBC connection between Neutron chain and target
   * chain (where the result was obtained from)
   */
  client_id: string;
  result?: QueryResultAmino;
}
export interface MsgSubmitQueryResultAminoMsg {
  type: "/neutron.interchainqueries.MsgSubmitQueryResult";
  value: MsgSubmitQueryResultAmino;
}
export interface MsgSubmitQueryResultSDKType {
  query_id: bigint;
  sender: string;
  client_id: string;
  result: QueryResultSDKType;
}
export interface QueryResult {
  kvResults: StorageValue[];
  block: Block;
  height: bigint;
  revision: bigint;
  allowKvCallbacks: boolean;
}
export interface QueryResultProtoMsg {
  typeUrl: "/neutron.interchainqueries.QueryResult";
  value: Uint8Array;
}
export interface QueryResultAmino {
  kv_results: StorageValueAmino[];
  block?: BlockAmino;
  height: string;
  revision: string;
  allow_kv_callbacks: boolean;
}
export interface QueryResultAminoMsg {
  type: "/neutron.interchainqueries.QueryResult";
  value: QueryResultAmino;
}
export interface QueryResultSDKType {
  kv_results: StorageValueSDKType[];
  block: BlockSDKType;
  height: bigint;
  revision: bigint;
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
  Proof: ProofOps;
}
export interface StorageValueProtoMsg {
  typeUrl: "/neutron.interchainqueries.StorageValue";
  value: Uint8Array;
}
export interface StorageValueAmino {
  /** is the substore name (acc, staking, etc.) */
  storage_prefix: string;
  /** is the key in IAVL store */
  key: Uint8Array;
  /** is the value in IAVL store */
  value: Uint8Array;
  /**
   * is the Merkle Proof which proves existence of key-value pair in IAVL
   * storage
   */
  Proof?: ProofOpsAmino;
}
export interface StorageValueAminoMsg {
  type: "/neutron.interchainqueries.StorageValue";
  value: StorageValueAmino;
}
export interface StorageValueSDKType {
  storage_prefix: string;
  key: Uint8Array;
  value: Uint8Array;
  Proof: ProofOpsSDKType;
}
export interface Block {
  /**
   * We need to know block X+1 to verify response of transaction for block X
   * since LastResultsHash is root hash of all results from the txs from the
   * previous block
   */
  nextBlockHeader: Any;
  /** We need to know block X to verify inclusion of transaction for block X */
  header: Any;
  tx: TxValue;
}
export interface BlockProtoMsg {
  typeUrl: "/neutron.interchainqueries.Block";
  value: Uint8Array;
}
export interface BlockAmino {
  /**
   * We need to know block X+1 to verify response of transaction for block X
   * since LastResultsHash is root hash of all results from the txs from the
   * previous block
   */
  next_block_header?: AnyAmino;
  /** We need to know block X to verify inclusion of transaction for block X */
  header?: AnyAmino;
  tx?: TxValueAmino;
}
export interface BlockAminoMsg {
  type: "/neutron.interchainqueries.Block";
  value: BlockAmino;
}
export interface BlockSDKType {
  next_block_header: AnySDKType;
  header: AnySDKType;
  tx: TxValueSDKType;
}
export interface TxValue {
  response: ResponseDeliverTx;
  /**
   * is the Merkle Proof which proves existence of response in block with height
   * next_block_header.Height
   */
  deliveryProof: Proof;
  /**
   * is the Merkle Proof which proves existence of data in block with height
   * header.Height
   */
  inclusionProof: Proof;
  /** is body of the transaction */
  data: Uint8Array;
}
export interface TxValueProtoMsg {
  typeUrl: "/neutron.interchainqueries.TxValue";
  value: Uint8Array;
}
export interface TxValueAmino {
  response?: ResponseDeliverTxAmino;
  /**
   * is the Merkle Proof which proves existence of response in block with height
   * next_block_header.Height
   */
  delivery_proof?: ProofAmino;
  /**
   * is the Merkle Proof which proves existence of data in block with height
   * header.Height
   */
  inclusion_proof?: ProofAmino;
  /** is body of the transaction */
  data: Uint8Array;
}
export interface TxValueAminoMsg {
  type: "/neutron.interchainqueries.TxValue";
  value: TxValueAmino;
}
export interface TxValueSDKType {
  response: ResponseDeliverTxSDKType;
  delivery_proof: ProofSDKType;
  inclusion_proof: ProofSDKType;
  data: Uint8Array;
}
export interface MsgSubmitQueryResultResponse {}
export interface MsgSubmitQueryResultResponseProtoMsg {
  typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResultResponse";
  value: Uint8Array;
}
export interface MsgSubmitQueryResultResponseAmino {}
export interface MsgSubmitQueryResultResponseAminoMsg {
  type: "/neutron.interchainqueries.MsgSubmitQueryResultResponse";
  value: MsgSubmitQueryResultResponseAmino;
}
export interface MsgSubmitQueryResultResponseSDKType {}
export interface MsgRemoveInterchainQueryRequest {
  queryId: bigint;
  /** is the signer of the message */
  sender: string;
}
export interface MsgRemoveInterchainQueryRequestProtoMsg {
  typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest";
  value: Uint8Array;
}
export interface MsgRemoveInterchainQueryRequestAmino {
  query_id: string;
  /** is the signer of the message */
  sender: string;
}
export interface MsgRemoveInterchainQueryRequestAminoMsg {
  type: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest";
  value: MsgRemoveInterchainQueryRequestAmino;
}
export interface MsgRemoveInterchainQueryRequestSDKType {
  query_id: bigint;
  sender: string;
}
export interface MsgRemoveInterchainQueryResponse {}
export interface MsgRemoveInterchainQueryResponseProtoMsg {
  typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryResponse";
  value: Uint8Array;
}
export interface MsgRemoveInterchainQueryResponseAmino {}
export interface MsgRemoveInterchainQueryResponseAminoMsg {
  type: "/neutron.interchainqueries.MsgRemoveInterchainQueryResponse";
  value: MsgRemoveInterchainQueryResponseAmino;
}
export interface MsgRemoveInterchainQueryResponseSDKType {}
export interface MsgUpdateInterchainQueryRequest {
  queryId: bigint;
  newKeys: KVKey[];
  newUpdatePeriod: bigint;
  newTransactionsFilter: string;
  /** is the signer of the message */
  sender: string;
}
export interface MsgUpdateInterchainQueryRequestProtoMsg {
  typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest";
  value: Uint8Array;
}
export interface MsgUpdateInterchainQueryRequestAmino {
  query_id: string;
  new_keys: KVKeyAmino[];
  new_update_period: string;
  new_transactions_filter: string;
  /** is the signer of the message */
  sender: string;
}
export interface MsgUpdateInterchainQueryRequestAminoMsg {
  type: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest";
  value: MsgUpdateInterchainQueryRequestAmino;
}
export interface MsgUpdateInterchainQueryRequestSDKType {
  query_id: bigint;
  new_keys: KVKeySDKType[];
  new_update_period: bigint;
  new_transactions_filter: string;
  sender: string;
}
export interface MsgUpdateInterchainQueryResponse {}
export interface MsgUpdateInterchainQueryResponseProtoMsg {
  typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryResponse";
  value: Uint8Array;
}
export interface MsgUpdateInterchainQueryResponseAmino {}
export interface MsgUpdateInterchainQueryResponseAminoMsg {
  type: "/neutron.interchainqueries.MsgUpdateInterchainQueryResponse";
  value: MsgUpdateInterchainQueryResponseAmino;
}
export interface MsgUpdateInterchainQueryResponseSDKType {}
function createBaseMsgRegisterInterchainQuery(): MsgRegisterInterchainQuery {
  return {
    queryType: "",
    keys: [],
    transactionsFilter: "",
    connectionId: "",
    updatePeriod: BigInt(0),
    sender: ""
  };
}
export const MsgRegisterInterchainQuery = {
  typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
  encode(message: MsgRegisterInterchainQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.updatePeriod !== BigInt(0)) {
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
      updatePeriod: isSet(object.updatePeriod) ? BigInt(object.updatePeriod.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterInterchainQuery>): MsgRegisterInterchainQuery {
    const message = createBaseMsgRegisterInterchainQuery();
    message.queryType = object.queryType ?? "";
    message.keys = object.keys?.map(e => KVKey.fromPartial(e)) || [];
    message.transactionsFilter = object.transactionsFilter ?? "";
    message.connectionId = object.connectionId ?? "";
    message.updatePeriod = object.updatePeriod !== undefined && object.updatePeriod !== null ? BigInt(object.updatePeriod.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterInterchainQueryAmino): MsgRegisterInterchainQuery {
    return {
      queryType: object.query_type,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => KVKey.fromAmino(e)) : [],
      transactionsFilter: object.transactions_filter,
      connectionId: object.connection_id,
      updatePeriod: BigInt(object.update_period),
      sender: object.sender
    };
  },
  toAmino(message: MsgRegisterInterchainQuery): MsgRegisterInterchainQueryAmino {
    const obj: any = {};
    obj.query_type = message.queryType;
    if (message.keys) {
      obj.keys = message.keys.map(e => e ? KVKey.toAmino(e) : undefined);
    } else {
      obj.keys = [];
    }
    obj.transactions_filter = message.transactionsFilter;
    obj.connection_id = message.connectionId;
    obj.update_period = message.updatePeriod ? message.updatePeriod.toString() : undefined;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterInterchainQueryAminoMsg): MsgRegisterInterchainQuery {
    return MsgRegisterInterchainQuery.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterInterchainQueryProtoMsg): MsgRegisterInterchainQuery {
    return MsgRegisterInterchainQuery.decode(message.value);
  },
  toProto(message: MsgRegisterInterchainQuery): Uint8Array {
    return MsgRegisterInterchainQuery.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterInterchainQuery): MsgRegisterInterchainQueryProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
      value: MsgRegisterInterchainQuery.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterInterchainQueryResponse(): MsgRegisterInterchainQueryResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgRegisterInterchainQueryResponse = {
  typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQueryResponse",
  encode(message: MsgRegisterInterchainQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterInterchainQueryResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgRegisterInterchainQueryResponse>): MsgRegisterInterchainQueryResponse {
    const message = createBaseMsgRegisterInterchainQueryResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRegisterInterchainQueryResponseAmino): MsgRegisterInterchainQueryResponse {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: MsgRegisterInterchainQueryResponse): MsgRegisterInterchainQueryResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterInterchainQueryResponseAminoMsg): MsgRegisterInterchainQueryResponse {
    return MsgRegisterInterchainQueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterInterchainQueryResponseProtoMsg): MsgRegisterInterchainQueryResponse {
    return MsgRegisterInterchainQueryResponse.decode(message.value);
  },
  toProto(message: MsgRegisterInterchainQueryResponse): Uint8Array {
    return MsgRegisterInterchainQueryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterInterchainQueryResponse): MsgRegisterInterchainQueryResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQueryResponse",
      value: MsgRegisterInterchainQueryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitQueryResult(): MsgSubmitQueryResult {
  return {
    queryId: BigInt(0),
    sender: "",
    clientId: "",
    result: QueryResult.fromPartial({})
  };
}
export const MsgSubmitQueryResult = {
  typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
  encode(message: MsgSubmitQueryResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.queryId !== BigInt(0)) {
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
      queryId: isSet(object.queryId) ? BigInt(object.queryId.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      result: isSet(object.result) ? QueryResult.fromJSON(object.result) : undefined
    };
  },
  fromPartial(object: Partial<MsgSubmitQueryResult>): MsgSubmitQueryResult {
    const message = createBaseMsgSubmitQueryResult();
    message.queryId = object.queryId !== undefined && object.queryId !== null ? BigInt(object.queryId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.clientId = object.clientId ?? "";
    message.result = object.result !== undefined && object.result !== null ? QueryResult.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitQueryResultAmino): MsgSubmitQueryResult {
    return {
      queryId: BigInt(object.query_id),
      sender: object.sender,
      clientId: object.client_id,
      result: object?.result ? QueryResult.fromAmino(object.result) : undefined
    };
  },
  toAmino(message: MsgSubmitQueryResult): MsgSubmitQueryResultAmino {
    const obj: any = {};
    obj.query_id = message.queryId ? message.queryId.toString() : undefined;
    obj.sender = message.sender;
    obj.client_id = message.clientId;
    obj.result = message.result ? QueryResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitQueryResultAminoMsg): MsgSubmitQueryResult {
    return MsgSubmitQueryResult.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitQueryResultProtoMsg): MsgSubmitQueryResult {
    return MsgSubmitQueryResult.decode(message.value);
  },
  toProto(message: MsgSubmitQueryResult): Uint8Array {
    return MsgSubmitQueryResult.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitQueryResult): MsgSubmitQueryResultProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
      value: MsgSubmitQueryResult.encode(message).finish()
    };
  }
};
function createBaseQueryResult(): QueryResult {
  return {
    kvResults: [],
    block: Block.fromPartial({}),
    height: BigInt(0),
    revision: BigInt(0),
    allowKvCallbacks: false
  };
}
export const QueryResult = {
  typeUrl: "/neutron.interchainqueries.QueryResult",
  encode(message: QueryResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.kvResults) {
      StorageValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.revision !== BigInt(0)) {
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      revision: isSet(object.revision) ? BigInt(object.revision.toString()) : BigInt(0),
      allowKvCallbacks: isSet(object.allowKvCallbacks) ? Boolean(object.allowKvCallbacks) : false
    };
  },
  fromPartial(object: Partial<QueryResult>): QueryResult {
    const message = createBaseQueryResult();
    message.kvResults = object.kvResults?.map(e => StorageValue.fromPartial(e)) || [];
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.revision = object.revision !== undefined && object.revision !== null ? BigInt(object.revision.toString()) : BigInt(0);
    message.allowKvCallbacks = object.allowKvCallbacks ?? false;
    return message;
  },
  fromAmino(object: QueryResultAmino): QueryResult {
    return {
      kvResults: Array.isArray(object?.kv_results) ? object.kv_results.map((e: any) => StorageValue.fromAmino(e)) : [],
      block: object?.block ? Block.fromAmino(object.block) : undefined,
      height: BigInt(object.height),
      revision: BigInt(object.revision),
      allowKvCallbacks: object.allow_kv_callbacks
    };
  },
  toAmino(message: QueryResult): QueryResultAmino {
    const obj: any = {};
    if (message.kvResults) {
      obj.kv_results = message.kvResults.map(e => e ? StorageValue.toAmino(e) : undefined);
    } else {
      obj.kv_results = [];
    }
    obj.block = message.block ? Block.toAmino(message.block) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.revision = message.revision ? message.revision.toString() : undefined;
    obj.allow_kv_callbacks = message.allowKvCallbacks;
    return obj;
  },
  fromAminoMsg(object: QueryResultAminoMsg): QueryResult {
    return QueryResult.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResultProtoMsg): QueryResult {
    return QueryResult.decode(message.value);
  },
  toProto(message: QueryResult): Uint8Array {
    return QueryResult.encode(message).finish();
  },
  toProtoMsg(message: QueryResult): QueryResultProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.QueryResult",
      value: QueryResult.encode(message).finish()
    };
  }
};
function createBaseStorageValue(): StorageValue {
  return {
    storagePrefix: "",
    key: new Uint8Array(),
    value: new Uint8Array(),
    Proof: ProofOps.fromPartial({})
  };
}
export const StorageValue = {
  typeUrl: "/neutron.interchainqueries.StorageValue",
  encode(message: StorageValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: StorageValueAmino): StorageValue {
    return {
      storagePrefix: object.storage_prefix,
      key: object.key,
      value: object.value,
      Proof: object?.Proof ? ProofOps.fromAmino(object.Proof) : undefined
    };
  },
  toAmino(message: StorageValue): StorageValueAmino {
    const obj: any = {};
    obj.storage_prefix = message.storagePrefix;
    obj.key = message.key;
    obj.value = message.value;
    obj.Proof = message.Proof ? ProofOps.toAmino(message.Proof) : undefined;
    return obj;
  },
  fromAminoMsg(object: StorageValueAminoMsg): StorageValue {
    return StorageValue.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageValueProtoMsg): StorageValue {
    return StorageValue.decode(message.value);
  },
  toProto(message: StorageValue): Uint8Array {
    return StorageValue.encode(message).finish();
  },
  toProtoMsg(message: StorageValue): StorageValueProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.StorageValue",
      value: StorageValue.encode(message).finish()
    };
  }
};
function createBaseBlock(): Block {
  return {
    nextBlockHeader: Any.fromPartial({}),
    header: Any.fromPartial({}),
    tx: TxValue.fromPartial({})
  };
}
export const Block = {
  typeUrl: "/neutron.interchainqueries.Block",
  encode(message: Block, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BlockAmino): Block {
    return {
      nextBlockHeader: object?.next_block_header ? Any.fromAmino(object.next_block_header) : undefined,
      header: object?.header ? Any.fromAmino(object.header) : undefined,
      tx: object?.tx ? TxValue.fromAmino(object.tx) : undefined
    };
  },
  toAmino(message: Block): BlockAmino {
    const obj: any = {};
    obj.next_block_header = message.nextBlockHeader ? Any.toAmino(message.nextBlockHeader) : undefined;
    obj.header = message.header ? Any.toAmino(message.header) : undefined;
    obj.tx = message.tx ? TxValue.toAmino(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockAminoMsg): Block {
    return Block.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockProtoMsg): Block {
    return Block.decode(message.value);
  },
  toProto(message: Block): Uint8Array {
    return Block.encode(message).finish();
  },
  toProtoMsg(message: Block): BlockProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.Block",
      value: Block.encode(message).finish()
    };
  }
};
function createBaseTxValue(): TxValue {
  return {
    response: ResponseDeliverTx.fromPartial({}),
    deliveryProof: Proof.fromPartial({}),
    inclusionProof: Proof.fromPartial({}),
    data: new Uint8Array()
  };
}
export const TxValue = {
  typeUrl: "/neutron.interchainqueries.TxValue",
  encode(message: TxValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TxValueAmino): TxValue {
    return {
      response: object?.response ? ResponseDeliverTx.fromAmino(object.response) : undefined,
      deliveryProof: object?.delivery_proof ? Proof.fromAmino(object.delivery_proof) : undefined,
      inclusionProof: object?.inclusion_proof ? Proof.fromAmino(object.inclusion_proof) : undefined,
      data: object.data
    };
  },
  toAmino(message: TxValue): TxValueAmino {
    const obj: any = {};
    obj.response = message.response ? ResponseDeliverTx.toAmino(message.response) : undefined;
    obj.delivery_proof = message.deliveryProof ? Proof.toAmino(message.deliveryProof) : undefined;
    obj.inclusion_proof = message.inclusionProof ? Proof.toAmino(message.inclusionProof) : undefined;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: TxValueAminoMsg): TxValue {
    return TxValue.fromAmino(object.value);
  },
  fromProtoMsg(message: TxValueProtoMsg): TxValue {
    return TxValue.decode(message.value);
  },
  toProto(message: TxValue): Uint8Array {
    return TxValue.encode(message).finish();
  },
  toProtoMsg(message: TxValue): TxValueProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.TxValue",
      value: TxValue.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitQueryResultResponse(): MsgSubmitQueryResultResponse {
  return {};
}
export const MsgSubmitQueryResultResponse = {
  typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResultResponse",
  encode(_: MsgSubmitQueryResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSubmitQueryResultResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitQueryResultResponse>): MsgSubmitQueryResultResponse {
    const message = createBaseMsgSubmitQueryResultResponse();
    return message;
  },
  fromAmino(_: MsgSubmitQueryResultResponseAmino): MsgSubmitQueryResultResponse {
    return {};
  },
  toAmino(_: MsgSubmitQueryResultResponse): MsgSubmitQueryResultResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitQueryResultResponseAminoMsg): MsgSubmitQueryResultResponse {
    return MsgSubmitQueryResultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitQueryResultResponseProtoMsg): MsgSubmitQueryResultResponse {
    return MsgSubmitQueryResultResponse.decode(message.value);
  },
  toProto(message: MsgSubmitQueryResultResponse): Uint8Array {
    return MsgSubmitQueryResultResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitQueryResultResponse): MsgSubmitQueryResultResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResultResponse",
      value: MsgSubmitQueryResultResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveInterchainQueryRequest(): MsgRemoveInterchainQueryRequest {
  return {
    queryId: BigInt(0),
    sender: ""
  };
}
export const MsgRemoveInterchainQueryRequest = {
  typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
  encode(message: MsgRemoveInterchainQueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.queryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.queryId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveInterchainQueryRequest {
    return {
      queryId: isSet(object.queryId) ? BigInt(object.queryId.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveInterchainQueryRequest>): MsgRemoveInterchainQueryRequest {
    const message = createBaseMsgRemoveInterchainQueryRequest();
    message.queryId = object.queryId !== undefined && object.queryId !== null ? BigInt(object.queryId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveInterchainQueryRequestAmino): MsgRemoveInterchainQueryRequest {
    return {
      queryId: BigInt(object.query_id),
      sender: object.sender
    };
  },
  toAmino(message: MsgRemoveInterchainQueryRequest): MsgRemoveInterchainQueryRequestAmino {
    const obj: any = {};
    obj.query_id = message.queryId ? message.queryId.toString() : undefined;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveInterchainQueryRequestAminoMsg): MsgRemoveInterchainQueryRequest {
    return MsgRemoveInterchainQueryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveInterchainQueryRequestProtoMsg): MsgRemoveInterchainQueryRequest {
    return MsgRemoveInterchainQueryRequest.decode(message.value);
  },
  toProto(message: MsgRemoveInterchainQueryRequest): Uint8Array {
    return MsgRemoveInterchainQueryRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveInterchainQueryRequest): MsgRemoveInterchainQueryRequestProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
      value: MsgRemoveInterchainQueryRequest.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveInterchainQueryResponse(): MsgRemoveInterchainQueryResponse {
  return {};
}
export const MsgRemoveInterchainQueryResponse = {
  typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryResponse",
  encode(_: MsgRemoveInterchainQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveInterchainQueryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveInterchainQueryResponse>): MsgRemoveInterchainQueryResponse {
    const message = createBaseMsgRemoveInterchainQueryResponse();
    return message;
  },
  fromAmino(_: MsgRemoveInterchainQueryResponseAmino): MsgRemoveInterchainQueryResponse {
    return {};
  },
  toAmino(_: MsgRemoveInterchainQueryResponse): MsgRemoveInterchainQueryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveInterchainQueryResponseAminoMsg): MsgRemoveInterchainQueryResponse {
    return MsgRemoveInterchainQueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveInterchainQueryResponseProtoMsg): MsgRemoveInterchainQueryResponse {
    return MsgRemoveInterchainQueryResponse.decode(message.value);
  },
  toProto(message: MsgRemoveInterchainQueryResponse): Uint8Array {
    return MsgRemoveInterchainQueryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveInterchainQueryResponse): MsgRemoveInterchainQueryResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryResponse",
      value: MsgRemoveInterchainQueryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateInterchainQueryRequest(): MsgUpdateInterchainQueryRequest {
  return {
    queryId: BigInt(0),
    newKeys: [],
    newUpdatePeriod: BigInt(0),
    newTransactionsFilter: "",
    sender: ""
  };
}
export const MsgUpdateInterchainQueryRequest = {
  typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
  encode(message: MsgUpdateInterchainQueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.queryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.queryId);
    }
    for (const v of message.newKeys) {
      KVKey.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.newUpdatePeriod !== BigInt(0)) {
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
      queryId: isSet(object.queryId) ? BigInt(object.queryId.toString()) : BigInt(0),
      newKeys: Array.isArray(object?.newKeys) ? object.newKeys.map((e: any) => KVKey.fromJSON(e)) : [],
      newUpdatePeriod: isSet(object.newUpdatePeriod) ? BigInt(object.newUpdatePeriod.toString()) : BigInt(0),
      newTransactionsFilter: isSet(object.newTransactionsFilter) ? String(object.newTransactionsFilter) : "",
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateInterchainQueryRequest>): MsgUpdateInterchainQueryRequest {
    const message = createBaseMsgUpdateInterchainQueryRequest();
    message.queryId = object.queryId !== undefined && object.queryId !== null ? BigInt(object.queryId.toString()) : BigInt(0);
    message.newKeys = object.newKeys?.map(e => KVKey.fromPartial(e)) || [];
    message.newUpdatePeriod = object.newUpdatePeriod !== undefined && object.newUpdatePeriod !== null ? BigInt(object.newUpdatePeriod.toString()) : BigInt(0);
    message.newTransactionsFilter = object.newTransactionsFilter ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateInterchainQueryRequestAmino): MsgUpdateInterchainQueryRequest {
    return {
      queryId: BigInt(object.query_id),
      newKeys: Array.isArray(object?.new_keys) ? object.new_keys.map((e: any) => KVKey.fromAmino(e)) : [],
      newUpdatePeriod: BigInt(object.new_update_period),
      newTransactionsFilter: object.new_transactions_filter,
      sender: object.sender
    };
  },
  toAmino(message: MsgUpdateInterchainQueryRequest): MsgUpdateInterchainQueryRequestAmino {
    const obj: any = {};
    obj.query_id = message.queryId ? message.queryId.toString() : undefined;
    if (message.newKeys) {
      obj.new_keys = message.newKeys.map(e => e ? KVKey.toAmino(e) : undefined);
    } else {
      obj.new_keys = [];
    }
    obj.new_update_period = message.newUpdatePeriod ? message.newUpdatePeriod.toString() : undefined;
    obj.new_transactions_filter = message.newTransactionsFilter;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateInterchainQueryRequestAminoMsg): MsgUpdateInterchainQueryRequest {
    return MsgUpdateInterchainQueryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateInterchainQueryRequestProtoMsg): MsgUpdateInterchainQueryRequest {
    return MsgUpdateInterchainQueryRequest.decode(message.value);
  },
  toProto(message: MsgUpdateInterchainQueryRequest): Uint8Array {
    return MsgUpdateInterchainQueryRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateInterchainQueryRequest): MsgUpdateInterchainQueryRequestProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
      value: MsgUpdateInterchainQueryRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateInterchainQueryResponse(): MsgUpdateInterchainQueryResponse {
  return {};
}
export const MsgUpdateInterchainQueryResponse = {
  typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryResponse",
  encode(_: MsgUpdateInterchainQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateInterchainQueryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateInterchainQueryResponse>): MsgUpdateInterchainQueryResponse {
    const message = createBaseMsgUpdateInterchainQueryResponse();
    return message;
  },
  fromAmino(_: MsgUpdateInterchainQueryResponseAmino): MsgUpdateInterchainQueryResponse {
    return {};
  },
  toAmino(_: MsgUpdateInterchainQueryResponse): MsgUpdateInterchainQueryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateInterchainQueryResponseAminoMsg): MsgUpdateInterchainQueryResponse {
    return MsgUpdateInterchainQueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateInterchainQueryResponseProtoMsg): MsgUpdateInterchainQueryResponse {
    return MsgUpdateInterchainQueryResponse.decode(message.value);
  },
  toProto(message: MsgUpdateInterchainQueryResponse): Uint8Array {
    return MsgUpdateInterchainQueryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateInterchainQueryResponse): MsgUpdateInterchainQueryResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryResponse",
      value: MsgUpdateInterchainQueryResponse.encode(message).finish()
    };
  }
};