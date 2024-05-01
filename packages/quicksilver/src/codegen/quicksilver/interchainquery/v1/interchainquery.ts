import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
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
  typeUrl: "/quicksilver.interchainquery.v1.Query";
  value: Uint8Array;
}
export interface QueryAmino {
  id?: string;
  connection_id?: string;
  chain_id?: string;
  query_type?: string;
  request?: string;
  /** change these to uint64 in v0.5.0 */
  period?: string;
  last_height?: string;
  callback_id?: string;
  ttl?: string;
  last_emission?: string;
}
export interface QueryAminoMsg {
  type: "/quicksilver.interchainquery.v1.Query";
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
  typeUrl: "/quicksilver.interchainquery.v1.DataPoint";
  value: Uint8Array;
}
export interface DataPointAmino {
  id?: string;
  /** change these to uint64 in v0.5.0 */
  remote_height?: string;
  local_height?: string;
  value?: string;
}
export interface DataPointAminoMsg {
  type: "/quicksilver.interchainquery.v1.DataPoint";
  value: DataPointAmino;
}
export interface DataPointSDKType {
  id: string;
  remote_height: string;
  local_height: string;
  value: Uint8Array;
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
  typeUrl: "/quicksilver.interchainquery.v1.Query",
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
    const message = createBaseQuery();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.query_type !== undefined && object.query_type !== null) {
      message.queryType = object.query_type;
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = bytesFromBase64(object.request);
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = object.period;
    }
    if (object.last_height !== undefined && object.last_height !== null) {
      message.lastHeight = object.last_height;
    }
    if (object.callback_id !== undefined && object.callback_id !== null) {
      message.callbackId = object.callback_id;
    }
    if (object.ttl !== undefined && object.ttl !== null) {
      message.ttl = BigInt(object.ttl);
    }
    if (object.last_emission !== undefined && object.last_emission !== null) {
      message.lastEmission = object.last_emission;
    }
    return message;
  },
  toAmino(message: Query): QueryAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.connection_id = message.connectionId;
    obj.chain_id = message.chainId;
    obj.query_type = message.queryType;
    obj.request = message.request ? base64FromBytes(message.request) : undefined;
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
      typeUrl: "/quicksilver.interchainquery.v1.Query",
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
  typeUrl: "/quicksilver.interchainquery.v1.DataPoint",
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
    const message = createBaseDataPoint();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.remote_height !== undefined && object.remote_height !== null) {
      message.remoteHeight = object.remote_height;
    }
    if (object.local_height !== undefined && object.local_height !== null) {
      message.localHeight = object.local_height;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: DataPoint): DataPointAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.remote_height = message.remoteHeight;
    obj.local_height = message.localHeight;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
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
      typeUrl: "/quicksilver.interchainquery.v1.DataPoint",
      value: DataPoint.encode(message).finish()
    };
  }
};