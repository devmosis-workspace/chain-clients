import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
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
  ttl: bigint;
  lastEmission: string;
}
export interface QueryProtoMsg {
  typeUrl: "/persistence.interchainquery.v1beta1.Query";
  value: Uint8Array;
}
export interface QueryAmino {
  id: string;
  connection_id: string;
  chain_id: string;
  query_type: string;
  request: Uint8Array;
  /** change these to uint64 in v0.5.0 */
  period: string;
  last_height: string;
  callback_id: string;
  ttl: string;
  last_emission: string;
}
export interface QueryAminoMsg {
  type: "/persistence.interchainquery.v1beta1.Query";
  value: QueryAmino;
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
  ttl: bigint;
  last_emission: string;
}
export interface DataPoint {
  id: string;
  /** change these to uint64 in v0.5.0 */
  remoteHeight: string;
  localHeight: string;
  value: Uint8Array;
}
export interface DataPointProtoMsg {
  typeUrl: "/persistence.interchainquery.v1beta1.DataPoint";
  value: Uint8Array;
}
export interface DataPointAmino {
  id: string;
  /** change these to uint64 in v0.5.0 */
  remote_height: string;
  local_height: string;
  value: Uint8Array;
}
export interface DataPointAminoMsg {
  type: "/persistence.interchainquery.v1beta1.DataPoint";
  value: DataPointAmino;
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
export interface GenesisStateProtoMsg {
  typeUrl: "/persistence.interchainquery.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
  queries: QueryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/persistence.interchainquery.v1beta1.GenesisState";
  value: GenesisStateAmino;
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
    ttl: BigInt(0),
    lastEmission: ""
  };
}
export const Query = {
  typeUrl: "/persistence.interchainquery.v1beta1.Query",
  encode(message: Query, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.ttl !== BigInt(0)) {
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
      ttl: isSet(object.ttl) ? BigInt(object.ttl.toString()) : BigInt(0),
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
    message.ttl = object.ttl !== undefined && object.ttl !== null ? BigInt(object.ttl.toString()) : BigInt(0);
    message.lastEmission = object.lastEmission ?? "";
    return message;
  },
  fromAmino(object: QueryAmino): Query {
    return {
      id: object.id,
      connectionId: object.connection_id,
      chainId: object.chain_id,
      queryType: object.query_type,
      request: object.request,
      period: object.period,
      lastHeight: object.last_height,
      callbackId: object.callback_id,
      ttl: BigInt(object.ttl),
      lastEmission: object.last_emission
    };
  },
  toAmino(message: Query): QueryAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.connection_id = message.connectionId;
    obj.chain_id = message.chainId;
    obj.query_type = message.queryType;
    obj.request = message.request;
    obj.period = message.period;
    obj.last_height = message.lastHeight;
    obj.callback_id = message.callbackId;
    obj.ttl = message.ttl ? message.ttl.toString() : undefined;
    obj.last_emission = message.lastEmission;
    return obj;
  },
  fromAminoMsg(object: QueryAminoMsg): Query {
    return Query.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProtoMsg): Query {
    return Query.decode(message.value);
  },
  toProto(message: Query): Uint8Array {
    return Query.encode(message).finish();
  },
  toProtoMsg(message: Query): QueryProtoMsg {
    return {
      typeUrl: "/persistence.interchainquery.v1beta1.Query",
      value: Query.encode(message).finish()
    };
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
  typeUrl: "/persistence.interchainquery.v1beta1.DataPoint",
  encode(message: DataPoint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DataPointAmino): DataPoint {
    return {
      id: object.id,
      remoteHeight: object.remote_height,
      localHeight: object.local_height,
      value: object.value
    };
  },
  toAmino(message: DataPoint): DataPointAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.remote_height = message.remoteHeight;
    obj.local_height = message.localHeight;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: DataPointAminoMsg): DataPoint {
    return DataPoint.fromAmino(object.value);
  },
  fromProtoMsg(message: DataPointProtoMsg): DataPoint {
    return DataPoint.decode(message.value);
  },
  toProto(message: DataPoint): Uint8Array {
    return DataPoint.encode(message).finish();
  },
  toProtoMsg(message: DataPoint): DataPointProtoMsg {
    return {
      typeUrl: "/persistence.interchainquery.v1beta1.DataPoint",
      value: DataPoint.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    queries: []
  };
}
export const GenesisState = {
  typeUrl: "/persistence.interchainquery.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => Query.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map(e => e ? Query.toAmino(e) : undefined);
    } else {
      obj.queries = [];
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
      typeUrl: "/persistence.interchainquery.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};