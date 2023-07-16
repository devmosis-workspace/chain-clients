import { Height, HeightSDKType } from "../ibc/core/client/v1/client";
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { Long, isSet, bytesFromBase64 } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface RegisteredQuery {
  /** The unique id of the registered query. */
  id: Long;
  /** The address that registered the query. */
  owner: string;
  /** The query type identifier: `kv` or `tx` now */
  queryType: string;
  /** The KV-storage keys for which we want to get values from remote chain */
  keys: KVKey[];
  /** The filter for transaction search ICQ */
  transactionsFilter: string;
  /** The IBC connection ID for getting ConsensusState to verify proofs */
  connectionId: string;
  /** Parameter that defines how often the query must be updated. */
  updatePeriod: Long;
  /** The local chain last block height when the query result was updated. */
  lastSubmittedResultLocalHeight: Long;
  /** The remote chain last block height when the query result was updated. */
  lastSubmittedResultRemoteHeight?: Height;
  /** Amount of coins deposited for the query. */
  deposit: Coin[];
  /** Timeout before query becomes available for everybody to remove. */
  submitTimeout: Long;
  /** The local chain height when the query was registered. */
  registeredAtHeight: Long;
}
export interface RegisteredQuerySDKType {
  id: Long;
  owner: string;
  query_type: string;
  keys: KVKeySDKType[];
  transactions_filter: string;
  connection_id: string;
  update_period: Long;
  last_submitted_result_local_height: Long;
  last_submitted_result_remote_height?: HeightSDKType;
  deposit: CoinSDKType[];
  submit_timeout: Long;
  registered_at_height: Long;
}
export interface KVKey {
  /**
   * Path (storage prefix) to the storage where you want to read value by key
   * (usually name of cosmos-sdk module: 'staking', 'bank', etc.)
   */
  path: string;
  /** Key you want to read from the storage */
  key: Uint8Array;
}
export interface KVKeySDKType {
  path: string;
  key: Uint8Array;
}
/** GenesisState defines the interchainqueries module's genesis state. */
export interface GenesisState {
  params?: Params;
  registeredQueries: RegisteredQuery[];
}
/** GenesisState defines the interchainqueries module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  registered_queries: RegisteredQuerySDKType[];
}
function createBaseRegisteredQuery(): RegisteredQuery {
  return {
    id: Long.UZERO,
    owner: "",
    queryType: "",
    keys: [],
    transactionsFilter: "",
    connectionId: "",
    updatePeriod: Long.UZERO,
    lastSubmittedResultLocalHeight: Long.UZERO,
    lastSubmittedResultRemoteHeight: undefined,
    deposit: [],
    submitTimeout: Long.UZERO,
    registeredAtHeight: Long.UZERO
  };
}
export const RegisteredQuery = {
  encode(message: RegisteredQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.queryType !== "") {
      writer.uint32(26).string(message.queryType);
    }
    for (const v of message.keys) {
      KVKey.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.transactionsFilter !== "") {
      writer.uint32(42).string(message.transactionsFilter);
    }
    if (message.connectionId !== "") {
      writer.uint32(50).string(message.connectionId);
    }
    if (!message.updatePeriod.isZero()) {
      writer.uint32(56).uint64(message.updatePeriod);
    }
    if (!message.lastSubmittedResultLocalHeight.isZero()) {
      writer.uint32(64).uint64(message.lastSubmittedResultLocalHeight);
    }
    if (message.lastSubmittedResultRemoteHeight !== undefined) {
      Height.encode(message.lastSubmittedResultRemoteHeight, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (!message.submitTimeout.isZero()) {
      writer.uint32(88).uint64(message.submitTimeout);
    }
    if (!message.registeredAtHeight.isZero()) {
      writer.uint32(96).uint64(message.registeredAtHeight);
    }
    return writer;
  },
  fromJSON(object: any): RegisteredQuery {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      queryType: isSet(object.queryType) ? String(object.queryType) : "",
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => KVKey.fromJSON(e)) : [],
      transactionsFilter: isSet(object.transactionsFilter) ? String(object.transactionsFilter) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      updatePeriod: isSet(object.updatePeriod) ? Long.fromValue(object.updatePeriod) : Long.UZERO,
      lastSubmittedResultLocalHeight: isSet(object.lastSubmittedResultLocalHeight) ? Long.fromValue(object.lastSubmittedResultLocalHeight) : Long.UZERO,
      lastSubmittedResultRemoteHeight: isSet(object.lastSubmittedResultRemoteHeight) ? Height.fromJSON(object.lastSubmittedResultRemoteHeight) : undefined,
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : [],
      submitTimeout: isSet(object.submitTimeout) ? Long.fromValue(object.submitTimeout) : Long.UZERO,
      registeredAtHeight: isSet(object.registeredAtHeight) ? Long.fromValue(object.registeredAtHeight) : Long.UZERO
    };
  },
  fromPartial(object: Partial<RegisteredQuery>): RegisteredQuery {
    const message = createBaseRegisteredQuery();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.queryType = object.queryType ?? "";
    message.keys = object.keys?.map(e => KVKey.fromPartial(e)) || [];
    message.transactionsFilter = object.transactionsFilter ?? "";
    message.connectionId = object.connectionId ?? "";
    message.updatePeriod = object.updatePeriod !== undefined && object.updatePeriod !== null ? Long.fromValue(object.updatePeriod) : Long.UZERO;
    message.lastSubmittedResultLocalHeight = object.lastSubmittedResultLocalHeight !== undefined && object.lastSubmittedResultLocalHeight !== null ? Long.fromValue(object.lastSubmittedResultLocalHeight) : Long.UZERO;
    message.lastSubmittedResultRemoteHeight = object.lastSubmittedResultRemoteHeight !== undefined && object.lastSubmittedResultRemoteHeight !== null ? Height.fromPartial(object.lastSubmittedResultRemoteHeight) : undefined;
    message.deposit = object.deposit?.map(e => Coin.fromPartial(e)) || [];
    message.submitTimeout = object.submitTimeout !== undefined && object.submitTimeout !== null ? Long.fromValue(object.submitTimeout) : Long.UZERO;
    message.registeredAtHeight = object.registeredAtHeight !== undefined && object.registeredAtHeight !== null ? Long.fromValue(object.registeredAtHeight) : Long.UZERO;
    return message;
  }
};
function createBaseKVKey(): KVKey {
  return {
    path: "",
    key: new Uint8Array()
  };
}
export const KVKey = {
  encode(message: KVKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },
  fromJSON(object: any): KVKey {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<KVKey>): KVKey {
    const message = createBaseKVKey();
    message.path = object.path ?? "";
    message.key = object.key ?? new Uint8Array();
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    registeredQueries: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registeredQueries) {
      RegisteredQuery.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      registeredQueries: Array.isArray(object?.registeredQueries) ? object.registeredQueries.map((e: any) => RegisteredQuery.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.registeredQueries = object.registeredQueries?.map(e => RegisteredQuery.fromPartial(e)) || [];
    return message;
  }
};