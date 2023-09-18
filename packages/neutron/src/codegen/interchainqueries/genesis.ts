import { Height, HeightAmino, HeightSDKType } from "../ibc/core/client/v1/client";
import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../binary";
import { isSet, bytesFromBase64 } from "../helpers";
export interface RegisteredQuery {
  /** The unique id of the registered query. */
  id: bigint;
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
  updatePeriod: bigint;
  /** The local chain last block height when the query result was updated. */
  lastSubmittedResultLocalHeight: bigint;
  /** The remote chain last block height when the query result was updated. */
  lastSubmittedResultRemoteHeight: Height;
  /** Amount of coins deposited for the query. */
  deposit: Coin[];
  /** Timeout before query becomes available for everybody to remove. */
  submitTimeout: bigint;
  /** The local chain height when the query was registered. */
  registeredAtHeight: bigint;
}
export interface RegisteredQueryProtoMsg {
  typeUrl: "/neutron.interchainqueries.RegisteredQuery";
  value: Uint8Array;
}
export interface RegisteredQueryAmino {
  /** The unique id of the registered query. */
  id: string;
  /** The address that registered the query. */
  owner: string;
  /** The query type identifier: `kv` or `tx` now */
  query_type: string;
  /** The KV-storage keys for which we want to get values from remote chain */
  keys: KVKeyAmino[];
  /** The filter for transaction search ICQ */
  transactions_filter: string;
  /** The IBC connection ID for getting ConsensusState to verify proofs */
  connection_id: string;
  /** Parameter that defines how often the query must be updated. */
  update_period: string;
  /** The local chain last block height when the query result was updated. */
  last_submitted_result_local_height: string;
  /** The remote chain last block height when the query result was updated. */
  last_submitted_result_remote_height?: HeightAmino;
  /** Amount of coins deposited for the query. */
  deposit: CoinAmino[];
  /** Timeout before query becomes available for everybody to remove. */
  submit_timeout: string;
  /** The local chain height when the query was registered. */
  registered_at_height: string;
}
export interface RegisteredQueryAminoMsg {
  type: "/neutron.interchainqueries.RegisteredQuery";
  value: RegisteredQueryAmino;
}
export interface RegisteredQuerySDKType {
  id: bigint;
  owner: string;
  query_type: string;
  keys: KVKeySDKType[];
  transactions_filter: string;
  connection_id: string;
  update_period: bigint;
  last_submitted_result_local_height: bigint;
  last_submitted_result_remote_height: HeightSDKType;
  deposit: CoinSDKType[];
  submit_timeout: bigint;
  registered_at_height: bigint;
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
export interface KVKeyProtoMsg {
  typeUrl: "/neutron.interchainqueries.KVKey";
  value: Uint8Array;
}
export interface KVKeyAmino {
  /**
   * Path (storage prefix) to the storage where you want to read value by key
   * (usually name of cosmos-sdk module: 'staking', 'bank', etc.)
   */
  path: string;
  /** Key you want to read from the storage */
  key: Uint8Array;
}
export interface KVKeyAminoMsg {
  type: "/neutron.interchainqueries.KVKey";
  value: KVKeyAmino;
}
export interface KVKeySDKType {
  path: string;
  key: Uint8Array;
}
/** GenesisState defines the interchainqueries module's genesis state. */
export interface GenesisState {
  params: Params;
  registeredQueries: RegisteredQuery[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/neutron.interchainqueries.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the interchainqueries module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  registered_queries: RegisteredQueryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/neutron.interchainqueries.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the interchainqueries module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  registered_queries: RegisteredQuerySDKType[];
}
function createBaseRegisteredQuery(): RegisteredQuery {
  return {
    id: BigInt(0),
    owner: "",
    queryType: "",
    keys: [],
    transactionsFilter: "",
    connectionId: "",
    updatePeriod: BigInt(0),
    lastSubmittedResultLocalHeight: BigInt(0),
    lastSubmittedResultRemoteHeight: Height.fromPartial({}),
    deposit: [],
    submitTimeout: BigInt(0),
    registeredAtHeight: BigInt(0)
  };
}
export const RegisteredQuery = {
  typeUrl: "/neutron.interchainqueries.RegisteredQuery",
  encode(message: RegisteredQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
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
    if (message.updatePeriod !== BigInt(0)) {
      writer.uint32(56).uint64(message.updatePeriod);
    }
    if (message.lastSubmittedResultLocalHeight !== BigInt(0)) {
      writer.uint32(64).uint64(message.lastSubmittedResultLocalHeight);
    }
    if (message.lastSubmittedResultRemoteHeight !== undefined) {
      Height.encode(message.lastSubmittedResultRemoteHeight, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.submitTimeout !== BigInt(0)) {
      writer.uint32(88).uint64(message.submitTimeout);
    }
    if (message.registeredAtHeight !== BigInt(0)) {
      writer.uint32(96).uint64(message.registeredAtHeight);
    }
    return writer;
  },
  fromJSON(object: any): RegisteredQuery {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      queryType: isSet(object.queryType) ? String(object.queryType) : "",
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => KVKey.fromJSON(e)) : [],
      transactionsFilter: isSet(object.transactionsFilter) ? String(object.transactionsFilter) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      updatePeriod: isSet(object.updatePeriod) ? BigInt(object.updatePeriod.toString()) : BigInt(0),
      lastSubmittedResultLocalHeight: isSet(object.lastSubmittedResultLocalHeight) ? BigInt(object.lastSubmittedResultLocalHeight.toString()) : BigInt(0),
      lastSubmittedResultRemoteHeight: isSet(object.lastSubmittedResultRemoteHeight) ? Height.fromJSON(object.lastSubmittedResultRemoteHeight) : undefined,
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : [],
      submitTimeout: isSet(object.submitTimeout) ? BigInt(object.submitTimeout.toString()) : BigInt(0),
      registeredAtHeight: isSet(object.registeredAtHeight) ? BigInt(object.registeredAtHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RegisteredQuery>): RegisteredQuery {
    const message = createBaseRegisteredQuery();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.queryType = object.queryType ?? "";
    message.keys = object.keys?.map(e => KVKey.fromPartial(e)) || [];
    message.transactionsFilter = object.transactionsFilter ?? "";
    message.connectionId = object.connectionId ?? "";
    message.updatePeriod = object.updatePeriod !== undefined && object.updatePeriod !== null ? BigInt(object.updatePeriod.toString()) : BigInt(0);
    message.lastSubmittedResultLocalHeight = object.lastSubmittedResultLocalHeight !== undefined && object.lastSubmittedResultLocalHeight !== null ? BigInt(object.lastSubmittedResultLocalHeight.toString()) : BigInt(0);
    message.lastSubmittedResultRemoteHeight = object.lastSubmittedResultRemoteHeight !== undefined && object.lastSubmittedResultRemoteHeight !== null ? Height.fromPartial(object.lastSubmittedResultRemoteHeight) : undefined;
    message.deposit = object.deposit?.map(e => Coin.fromPartial(e)) || [];
    message.submitTimeout = object.submitTimeout !== undefined && object.submitTimeout !== null ? BigInt(object.submitTimeout.toString()) : BigInt(0);
    message.registeredAtHeight = object.registeredAtHeight !== undefined && object.registeredAtHeight !== null ? BigInt(object.registeredAtHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RegisteredQueryAmino): RegisteredQuery {
    return {
      id: BigInt(object.id),
      owner: object.owner,
      queryType: object.query_type,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => KVKey.fromAmino(e)) : [],
      transactionsFilter: object.transactions_filter,
      connectionId: object.connection_id,
      updatePeriod: BigInt(object.update_period),
      lastSubmittedResultLocalHeight: BigInt(object.last_submitted_result_local_height),
      lastSubmittedResultRemoteHeight: object?.last_submitted_result_remote_height ? Height.fromAmino(object.last_submitted_result_remote_height) : undefined,
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromAmino(e)) : [],
      submitTimeout: BigInt(object.submit_timeout),
      registeredAtHeight: BigInt(object.registered_at_height)
    };
  },
  toAmino(message: RegisteredQuery): RegisteredQueryAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.owner = message.owner;
    obj.query_type = message.queryType;
    if (message.keys) {
      obj.keys = message.keys.map(e => e ? KVKey.toAmino(e) : undefined);
    } else {
      obj.keys = [];
    }
    obj.transactions_filter = message.transactionsFilter;
    obj.connection_id = message.connectionId;
    obj.update_period = message.updatePeriod ? message.updatePeriod.toString() : undefined;
    obj.last_submitted_result_local_height = message.lastSubmittedResultLocalHeight ? message.lastSubmittedResultLocalHeight.toString() : undefined;
    obj.last_submitted_result_remote_height = message.lastSubmittedResultRemoteHeight ? Height.toAmino(message.lastSubmittedResultRemoteHeight) : {};
    if (message.deposit) {
      obj.deposit = message.deposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.deposit = [];
    }
    obj.submit_timeout = message.submitTimeout ? message.submitTimeout.toString() : undefined;
    obj.registered_at_height = message.registeredAtHeight ? message.registeredAtHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisteredQueryAminoMsg): RegisteredQuery {
    return RegisteredQuery.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisteredQueryProtoMsg): RegisteredQuery {
    return RegisteredQuery.decode(message.value);
  },
  toProto(message: RegisteredQuery): Uint8Array {
    return RegisteredQuery.encode(message).finish();
  },
  toProtoMsg(message: RegisteredQuery): RegisteredQueryProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.RegisteredQuery",
      value: RegisteredQuery.encode(message).finish()
    };
  }
};
function createBaseKVKey(): KVKey {
  return {
    path: "",
    key: new Uint8Array()
  };
}
export const KVKey = {
  typeUrl: "/neutron.interchainqueries.KVKey",
  encode(message: KVKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: KVKeyAmino): KVKey {
    return {
      path: object.path,
      key: object.key
    };
  },
  toAmino(message: KVKey): KVKeyAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg(object: KVKeyAminoMsg): KVKey {
    return KVKey.fromAmino(object.value);
  },
  fromProtoMsg(message: KVKeyProtoMsg): KVKey {
    return KVKey.decode(message.value);
  },
  toProto(message: KVKey): Uint8Array {
    return KVKey.encode(message).finish();
  },
  toProtoMsg(message: KVKey): KVKeyProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.KVKey",
      value: KVKey.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    registeredQueries: []
  };
}
export const GenesisState = {
  typeUrl: "/neutron.interchainqueries.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      registeredQueries: Array.isArray(object?.registered_queries) ? object.registered_queries.map((e: any) => RegisteredQuery.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.registeredQueries) {
      obj.registered_queries = message.registeredQueries.map(e => e ? RegisteredQuery.toAmino(e) : undefined);
    } else {
      obj.registered_queries = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/neutron.interchainqueries.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};