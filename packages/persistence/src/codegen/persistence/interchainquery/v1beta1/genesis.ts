import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Query {
  id: string;
  connectionId: string;
  chainId: string;
  queryType: string;
  request: Uint8Array;
  /** change these to uint64 in v0.5.0 */
  period: string;
  lastHeight: string;
  callbackId: string;
  ttl: Long;
  lastEmission: string;
}
export interface QuerySDKType {
  id: string;
  connection_id: string;
  chain_id: string;
  query_type: string;
  request: Uint8Array;
  period: string;
  last_height: string;
  callback_id: string;
  ttl: Long;
  last_emission: string;
}
export interface DataPoint {
  id: string;
  /** change these to uint64 in v0.5.0 */
  remoteHeight: string;
  localHeight: string;
  value: Uint8Array;
}
export interface DataPointSDKType {
  id: string;
  remote_height: string;
  local_height: string;
  value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  queries: Query[];
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
  queries: QuerySDKType[];
}
function createBaseQuery(): Query {
  return {
    id: "",
    connectionId: "",
    chainId: "",
    queryType: "",
    request: new Uint8Array(),
    period: "",
    lastHeight: "",
    callbackId: "",
    ttl: Long.UZERO,
    lastEmission: ""
  };
}
export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.queryType !== "") {
      writer.uint32(34).string(message.queryType);
    }
    if (message.request.length !== 0) {
      writer.uint32(42).bytes(message.request);
    }
    if (message.period !== "") {
      writer.uint32(50).string(message.period);
    }
    if (message.lastHeight !== "") {
      writer.uint32(58).string(message.lastHeight);
    }
    if (message.callbackId !== "") {
      writer.uint32(66).string(message.callbackId);
    }
    if (!message.ttl.isZero()) {
      writer.uint32(72).uint64(message.ttl);
    }
    if (message.lastEmission !== "") {
      writer.uint32(82).string(message.lastEmission);
    }
    return writer;
  },
  fromJSON(object: any): Query {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      queryType: isSet(object.queryType) ? String(object.queryType) : "",
      request: isSet(object.request) ? bytesFromBase64(object.request) : new Uint8Array(),
      period: isSet(object.period) ? String(object.period) : "",
      lastHeight: isSet(object.lastHeight) ? String(object.lastHeight) : "",
      callbackId: isSet(object.callbackId) ? String(object.callbackId) : "",
      ttl: isSet(object.ttl) ? Long.fromValue(object.ttl) : Long.UZERO,
      lastEmission: isSet(object.lastEmission) ? String(object.lastEmission) : ""
    };
  },
  fromPartial(object: Partial<Query>): Query {
    const message = createBaseQuery();
    message.id = object.id ?? "";
    message.connectionId = object.connectionId ?? "";
    message.chainId = object.chainId ?? "";
    message.queryType = object.queryType ?? "";
    message.request = object.request ?? new Uint8Array();
    message.period = object.period ?? "";
    message.lastHeight = object.lastHeight ?? "";
    message.callbackId = object.callbackId ?? "";
    message.ttl = object.ttl !== undefined && object.ttl !== null ? Long.fromValue(object.ttl) : Long.UZERO;
    message.lastEmission = object.lastEmission ?? "";
    return message;
  }
};
function createBaseDataPoint(): DataPoint {
  return {
    id: "",
    remoteHeight: "",
    localHeight: "",
    value: new Uint8Array()
  };
}
export const DataPoint = {
  encode(message: DataPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.remoteHeight !== "") {
      writer.uint32(18).string(message.remoteHeight);
    }
    if (message.localHeight !== "") {
      writer.uint32(26).string(message.localHeight);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): DataPoint {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      remoteHeight: isSet(object.remoteHeight) ? String(object.remoteHeight) : "",
      localHeight: isSet(object.localHeight) ? String(object.localHeight) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<DataPoint>): DataPoint {
    const message = createBaseDataPoint();
    message.id = object.id ?? "";
    message.remoteHeight = object.remoteHeight ?? "";
    message.localHeight = object.localHeight ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    queries: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => Query.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.queries = object.queries?.map(e => Query.fromPartial(e)) || [];
    return message;
  }
};