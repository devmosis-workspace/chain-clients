import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
export interface QueryResponseRecord {
  ipld: string;
  data: Uint8Array;
}
export interface QueryResponseRecordProtoMsg {
  typeUrl: "/likechain.iscn.QueryResponseRecord";
  value: Uint8Array;
}
export interface QueryResponseRecordAmino {
  ipld: string;
  data: Uint8Array;
}
export interface QueryResponseRecordAminoMsg {
  type: "/likechain.iscn.QueryResponseRecord";
  value: QueryResponseRecordAmino;
}
export interface QueryResponseRecordSDKType {
  ipld: string;
  data: Uint8Array;
}
export interface QueryRecordsByIdRequest {
  /**
   * The ISCN ID of the record(s) to be queried.
   * Format: iscn://REGISTRY_NAME/CONTENT_ID[/VERSION]
   * If version part omitted, version is default to 0.
   * if non-zero version exists, then from_version and to_version are ignored.
   */
  iscnId: string;
  /**
   * The initial version in the resulting records.
   * If omitted or is 0, then it will be interpreted as the latest version.
   */
  fromVersion: bigint;
  /**
   * The final version in the resulting records.
   * If omitted or is 0, then it will be interpreted as the latest version.
   */
  toVersion: bigint;
}
export interface QueryRecordsByIdRequestProtoMsg {
  typeUrl: "/likechain.iscn.QueryRecordsByIdRequest";
  value: Uint8Array;
}
export interface QueryRecordsByIdRequestAmino {
  /**
   * The ISCN ID of the record(s) to be queried.
   * Format: iscn://REGISTRY_NAME/CONTENT_ID[/VERSION]
   * If version part omitted, version is default to 0.
   * if non-zero version exists, then from_version and to_version are ignored.
   */
  iscn_id: string;
  /**
   * The initial version in the resulting records.
   * If omitted or is 0, then it will be interpreted as the latest version.
   */
  from_version: string;
  /**
   * The final version in the resulting records.
   * If omitted or is 0, then it will be interpreted as the latest version.
   */
  to_version: string;
}
export interface QueryRecordsByIdRequestAminoMsg {
  type: "/likechain.iscn.QueryRecordsByIdRequest";
  value: QueryRecordsByIdRequestAmino;
}
export interface QueryRecordsByIdRequestSDKType {
  iscn_id: string;
  from_version: bigint;
  to_version: bigint;
}
export interface QueryRecordsByIdResponse {
  owner: string;
  latestVersion: bigint;
  records: QueryResponseRecord[];
}
export interface QueryRecordsByIdResponseProtoMsg {
  typeUrl: "/likechain.iscn.QueryRecordsByIdResponse";
  value: Uint8Array;
}
export interface QueryRecordsByIdResponseAmino {
  owner: string;
  latest_version: string;
  records: QueryResponseRecordAmino[];
}
export interface QueryRecordsByIdResponseAminoMsg {
  type: "/likechain.iscn.QueryRecordsByIdResponse";
  value: QueryRecordsByIdResponseAmino;
}
export interface QueryRecordsByIdResponseSDKType {
  owner: string;
  latest_version: bigint;
  records: QueryResponseRecordSDKType[];
}
export interface QueryRecordsByFingerprintRequest {
  /**
   * The fingerprint of the record(s) to be queried.
   * All fingerprints in records should be URIs.
   */
  fingerprint: string;
  /**
   * For pagination.
   * For the first query, fill in 0 or just omit this field.
   * For continuous queries, fill in the `next_sequence` field in the previous response.
   */
  fromSequence: bigint;
}
export interface QueryRecordsByFingerprintRequestProtoMsg {
  typeUrl: "/likechain.iscn.QueryRecordsByFingerprintRequest";
  value: Uint8Array;
}
export interface QueryRecordsByFingerprintRequestAmino {
  /**
   * The fingerprint of the record(s) to be queried.
   * All fingerprints in records should be URIs.
   */
  fingerprint: string;
  /**
   * For pagination.
   * For the first query, fill in 0 or just omit this field.
   * For continuous queries, fill in the `next_sequence` field in the previous response.
   */
  from_sequence: string;
}
export interface QueryRecordsByFingerprintRequestAminoMsg {
  type: "/likechain.iscn.QueryRecordsByFingerprintRequest";
  value: QueryRecordsByFingerprintRequestAmino;
}
export interface QueryRecordsByFingerprintRequestSDKType {
  fingerprint: string;
  from_sequence: bigint;
}
export interface QueryRecordsByFingerprintResponse {
  records: QueryResponseRecord[];
  /** For pagination. */
  nextSequence: bigint;
}
export interface QueryRecordsByFingerprintResponseProtoMsg {
  typeUrl: "/likechain.iscn.QueryRecordsByFingerprintResponse";
  value: Uint8Array;
}
export interface QueryRecordsByFingerprintResponseAmino {
  records: QueryResponseRecordAmino[];
  /** For pagination. */
  next_sequence: string;
}
export interface QueryRecordsByFingerprintResponseAminoMsg {
  type: "/likechain.iscn.QueryRecordsByFingerprintResponse";
  value: QueryRecordsByFingerprintResponseAmino;
}
export interface QueryRecordsByFingerprintResponseSDKType {
  records: QueryResponseRecordSDKType[];
  next_sequence: bigint;
}
export interface QueryRecordsByOwnerRequest {
  /** Owner address of the record(s) to be queried. */
  owner: string;
  /**
   * For pagination.
   * For the first query, fill in 0 or just omit this field.
   * For continuous queries, fill in the `next_sequence` field in the previous response.
   */
  fromSequence: bigint;
}
export interface QueryRecordsByOwnerRequestProtoMsg {
  typeUrl: "/likechain.iscn.QueryRecordsByOwnerRequest";
  value: Uint8Array;
}
export interface QueryRecordsByOwnerRequestAmino {
  /** Owner address of the record(s) to be queried. */
  owner: string;
  /**
   * For pagination.
   * For the first query, fill in 0 or just omit this field.
   * For continuous queries, fill in the `next_sequence` field in the previous response.
   */
  from_sequence: string;
}
export interface QueryRecordsByOwnerRequestAminoMsg {
  type: "/likechain.iscn.QueryRecordsByOwnerRequest";
  value: QueryRecordsByOwnerRequestAmino;
}
export interface QueryRecordsByOwnerRequestSDKType {
  owner: string;
  from_sequence: bigint;
}
export interface QueryRecordsByOwnerResponse {
  records: QueryResponseRecord[];
  nextSequence: bigint;
}
export interface QueryRecordsByOwnerResponseProtoMsg {
  typeUrl: "/likechain.iscn.QueryRecordsByOwnerResponse";
  value: Uint8Array;
}
export interface QueryRecordsByOwnerResponseAmino {
  records: QueryResponseRecordAmino[];
  next_sequence: string;
}
export interface QueryRecordsByOwnerResponseAminoMsg {
  type: "/likechain.iscn.QueryRecordsByOwnerResponse";
  value: QueryRecordsByOwnerResponseAmino;
}
export interface QueryRecordsByOwnerResponseSDKType {
  records: QueryResponseRecordSDKType[];
  next_sequence: bigint;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/likechain.iscn.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/likechain.iscn.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/likechain.iscn.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/likechain.iscn.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetCidRequest {
  cid: string;
}
export interface QueryGetCidRequestProtoMsg {
  typeUrl: "/likechain.iscn.QueryGetCidRequest";
  value: Uint8Array;
}
export interface QueryGetCidRequestAmino {
  cid: string;
}
export interface QueryGetCidRequestAminoMsg {
  type: "/likechain.iscn.QueryGetCidRequest";
  value: QueryGetCidRequestAmino;
}
export interface QueryGetCidRequestSDKType {
  cid: string;
}
export interface QueryGetCidResponse {
  data: Uint8Array;
}
export interface QueryGetCidResponseProtoMsg {
  typeUrl: "/likechain.iscn.QueryGetCidResponse";
  value: Uint8Array;
}
export interface QueryGetCidResponseAmino {
  data: Uint8Array;
}
export interface QueryGetCidResponseAminoMsg {
  type: "/likechain.iscn.QueryGetCidResponse";
  value: QueryGetCidResponseAmino;
}
export interface QueryGetCidResponseSDKType {
  data: Uint8Array;
}
export interface QueryGetCidSizeRequest {
  cid: string;
}
export interface QueryGetCidSizeRequestProtoMsg {
  typeUrl: "/likechain.iscn.QueryGetCidSizeRequest";
  value: Uint8Array;
}
export interface QueryGetCidSizeRequestAmino {
  cid: string;
}
export interface QueryGetCidSizeRequestAminoMsg {
  type: "/likechain.iscn.QueryGetCidSizeRequest";
  value: QueryGetCidSizeRequestAmino;
}
export interface QueryGetCidSizeRequestSDKType {
  cid: string;
}
export interface QueryGetCidSizeResponse {
  size: bigint;
}
export interface QueryGetCidSizeResponseProtoMsg {
  typeUrl: "/likechain.iscn.QueryGetCidSizeResponse";
  value: Uint8Array;
}
export interface QueryGetCidSizeResponseAmino {
  size: string;
}
export interface QueryGetCidSizeResponseAminoMsg {
  type: "/likechain.iscn.QueryGetCidSizeResponse";
  value: QueryGetCidSizeResponseAmino;
}
export interface QueryGetCidSizeResponseSDKType {
  size: bigint;
}
export interface QueryHasCidRequest {
  cid: string;
}
export interface QueryHasCidRequestProtoMsg {
  typeUrl: "/likechain.iscn.QueryHasCidRequest";
  value: Uint8Array;
}
export interface QueryHasCidRequestAmino {
  cid: string;
}
export interface QueryHasCidRequestAminoMsg {
  type: "/likechain.iscn.QueryHasCidRequest";
  value: QueryHasCidRequestAmino;
}
export interface QueryHasCidRequestSDKType {
  cid: string;
}
export interface QueryHasCidResponse {
  exist: boolean;
}
export interface QueryHasCidResponseProtoMsg {
  typeUrl: "/likechain.iscn.QueryHasCidResponse";
  value: Uint8Array;
}
export interface QueryHasCidResponseAmino {
  exist: boolean;
}
export interface QueryHasCidResponseAminoMsg {
  type: "/likechain.iscn.QueryHasCidResponse";
  value: QueryHasCidResponseAmino;
}
export interface QueryHasCidResponseSDKType {
  exist: boolean;
}
function createBaseQueryResponseRecord(): QueryResponseRecord {
  return {
    ipld: "",
    data: new Uint8Array()
  };
}
export const QueryResponseRecord = {
  typeUrl: "/likechain.iscn.QueryResponseRecord",
  encode(message: QueryResponseRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ipld !== "") {
      writer.uint32(10).string(message.ipld);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): QueryResponseRecord {
    return {
      ipld: isSet(object.ipld) ? String(object.ipld) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryResponseRecord>): QueryResponseRecord {
    const message = createBaseQueryResponseRecord();
    message.ipld = object.ipld ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryResponseRecordAmino): QueryResponseRecord {
    return {
      ipld: object.ipld,
      data: object.data
    };
  },
  toAmino(message: QueryResponseRecord): QueryResponseRecordAmino {
    const obj: any = {};
    obj.ipld = message.ipld;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: QueryResponseRecordAminoMsg): QueryResponseRecord {
    return QueryResponseRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResponseRecordProtoMsg): QueryResponseRecord {
    return QueryResponseRecord.decode(message.value);
  },
  toProto(message: QueryResponseRecord): Uint8Array {
    return QueryResponseRecord.encode(message).finish();
  },
  toProtoMsg(message: QueryResponseRecord): QueryResponseRecordProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryResponseRecord",
      value: QueryResponseRecord.encode(message).finish()
    };
  }
};
function createBaseQueryRecordsByIdRequest(): QueryRecordsByIdRequest {
  return {
    iscnId: "",
    fromVersion: BigInt(0),
    toVersion: BigInt(0)
  };
}
export const QueryRecordsByIdRequest = {
  typeUrl: "/likechain.iscn.QueryRecordsByIdRequest",
  encode(message: QueryRecordsByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iscnId !== "") {
      writer.uint32(10).string(message.iscnId);
    }
    if (message.fromVersion !== BigInt(0)) {
      writer.uint32(16).uint64(message.fromVersion);
    }
    if (message.toVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.toVersion);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByIdRequest {
    return {
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      fromVersion: isSet(object.fromVersion) ? BigInt(object.fromVersion.toString()) : BigInt(0),
      toVersion: isSet(object.toVersion) ? BigInt(object.toVersion.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryRecordsByIdRequest>): QueryRecordsByIdRequest {
    const message = createBaseQueryRecordsByIdRequest();
    message.iscnId = object.iscnId ?? "";
    message.fromVersion = object.fromVersion !== undefined && object.fromVersion !== null ? BigInt(object.fromVersion.toString()) : BigInt(0);
    message.toVersion = object.toVersion !== undefined && object.toVersion !== null ? BigInt(object.toVersion.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRecordsByIdRequestAmino): QueryRecordsByIdRequest {
    return {
      iscnId: object.iscn_id,
      fromVersion: BigInt(object.from_version),
      toVersion: BigInt(object.to_version)
    };
  },
  toAmino(message: QueryRecordsByIdRequest): QueryRecordsByIdRequestAmino {
    const obj: any = {};
    obj.iscn_id = message.iscnId;
    obj.from_version = message.fromVersion ? message.fromVersion.toString() : undefined;
    obj.to_version = message.toVersion ? message.toVersion.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRecordsByIdRequestAminoMsg): QueryRecordsByIdRequest {
    return QueryRecordsByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecordsByIdRequestProtoMsg): QueryRecordsByIdRequest {
    return QueryRecordsByIdRequest.decode(message.value);
  },
  toProto(message: QueryRecordsByIdRequest): Uint8Array {
    return QueryRecordsByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRecordsByIdRequest): QueryRecordsByIdRequestProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryRecordsByIdRequest",
      value: QueryRecordsByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRecordsByIdResponse(): QueryRecordsByIdResponse {
  return {
    owner: "",
    latestVersion: BigInt(0),
    records: []
  };
}
export const QueryRecordsByIdResponse = {
  typeUrl: "/likechain.iscn.QueryRecordsByIdResponse",
  encode(message: QueryRecordsByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.latestVersion !== BigInt(0)) {
      writer.uint32(16).uint64(message.latestVersion);
    }
    for (const v of message.records) {
      QueryResponseRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByIdResponse {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      latestVersion: isSet(object.latestVersion) ? BigInt(object.latestVersion.toString()) : BigInt(0),
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryRecordsByIdResponse>): QueryRecordsByIdResponse {
    const message = createBaseQueryRecordsByIdResponse();
    message.owner = object.owner ?? "";
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? BigInt(object.latestVersion.toString()) : BigInt(0);
    message.records = object.records?.map(e => QueryResponseRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRecordsByIdResponseAmino): QueryRecordsByIdResponse {
    return {
      owner: object.owner,
      latestVersion: BigInt(object.latest_version),
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryRecordsByIdResponse): QueryRecordsByIdResponseAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.latest_version = message.latestVersion ? message.latestVersion.toString() : undefined;
    if (message.records) {
      obj.records = message.records.map(e => e ? QueryResponseRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryRecordsByIdResponseAminoMsg): QueryRecordsByIdResponse {
    return QueryRecordsByIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecordsByIdResponseProtoMsg): QueryRecordsByIdResponse {
    return QueryRecordsByIdResponse.decode(message.value);
  },
  toProto(message: QueryRecordsByIdResponse): Uint8Array {
    return QueryRecordsByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRecordsByIdResponse): QueryRecordsByIdResponseProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryRecordsByIdResponse",
      value: QueryRecordsByIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRecordsByFingerprintRequest(): QueryRecordsByFingerprintRequest {
  return {
    fingerprint: "",
    fromSequence: BigInt(0)
  };
}
export const QueryRecordsByFingerprintRequest = {
  typeUrl: "/likechain.iscn.QueryRecordsByFingerprintRequest",
  encode(message: QueryRecordsByFingerprintRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fingerprint !== "") {
      writer.uint32(10).string(message.fingerprint);
    }
    if (message.fromSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.fromSequence);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByFingerprintRequest {
    return {
      fingerprint: isSet(object.fingerprint) ? String(object.fingerprint) : "",
      fromSequence: isSet(object.fromSequence) ? BigInt(object.fromSequence.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryRecordsByFingerprintRequest>): QueryRecordsByFingerprintRequest {
    const message = createBaseQueryRecordsByFingerprintRequest();
    message.fingerprint = object.fingerprint ?? "";
    message.fromSequence = object.fromSequence !== undefined && object.fromSequence !== null ? BigInt(object.fromSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRecordsByFingerprintRequestAmino): QueryRecordsByFingerprintRequest {
    return {
      fingerprint: object.fingerprint,
      fromSequence: BigInt(object.from_sequence)
    };
  },
  toAmino(message: QueryRecordsByFingerprintRequest): QueryRecordsByFingerprintRequestAmino {
    const obj: any = {};
    obj.fingerprint = message.fingerprint;
    obj.from_sequence = message.fromSequence ? message.fromSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRecordsByFingerprintRequestAminoMsg): QueryRecordsByFingerprintRequest {
    return QueryRecordsByFingerprintRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecordsByFingerprintRequestProtoMsg): QueryRecordsByFingerprintRequest {
    return QueryRecordsByFingerprintRequest.decode(message.value);
  },
  toProto(message: QueryRecordsByFingerprintRequest): Uint8Array {
    return QueryRecordsByFingerprintRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRecordsByFingerprintRequest): QueryRecordsByFingerprintRequestProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryRecordsByFingerprintRequest",
      value: QueryRecordsByFingerprintRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRecordsByFingerprintResponse(): QueryRecordsByFingerprintResponse {
  return {
    records: [],
    nextSequence: BigInt(0)
  };
}
export const QueryRecordsByFingerprintResponse = {
  typeUrl: "/likechain.iscn.QueryRecordsByFingerprintResponse",
  encode(message: QueryRecordsByFingerprintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      QueryResponseRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextSequence);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByFingerprintResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromJSON(e)) : [],
      nextSequence: isSet(object.nextSequence) ? BigInt(object.nextSequence.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryRecordsByFingerprintResponse>): QueryRecordsByFingerprintResponse {
    const message = createBaseQueryRecordsByFingerprintResponse();
    message.records = object.records?.map(e => QueryResponseRecord.fromPartial(e)) || [];
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? BigInt(object.nextSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRecordsByFingerprintResponseAmino): QueryRecordsByFingerprintResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromAmino(e)) : [],
      nextSequence: BigInt(object.next_sequence)
    };
  },
  toAmino(message: QueryRecordsByFingerprintResponse): QueryRecordsByFingerprintResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? QueryResponseRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    obj.next_sequence = message.nextSequence ? message.nextSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRecordsByFingerprintResponseAminoMsg): QueryRecordsByFingerprintResponse {
    return QueryRecordsByFingerprintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecordsByFingerprintResponseProtoMsg): QueryRecordsByFingerprintResponse {
    return QueryRecordsByFingerprintResponse.decode(message.value);
  },
  toProto(message: QueryRecordsByFingerprintResponse): Uint8Array {
    return QueryRecordsByFingerprintResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRecordsByFingerprintResponse): QueryRecordsByFingerprintResponseProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryRecordsByFingerprintResponse",
      value: QueryRecordsByFingerprintResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRecordsByOwnerRequest(): QueryRecordsByOwnerRequest {
  return {
    owner: "",
    fromSequence: BigInt(0)
  };
}
export const QueryRecordsByOwnerRequest = {
  typeUrl: "/likechain.iscn.QueryRecordsByOwnerRequest",
  encode(message: QueryRecordsByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.fromSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.fromSequence);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      fromSequence: isSet(object.fromSequence) ? BigInt(object.fromSequence.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryRecordsByOwnerRequest>): QueryRecordsByOwnerRequest {
    const message = createBaseQueryRecordsByOwnerRequest();
    message.owner = object.owner ?? "";
    message.fromSequence = object.fromSequence !== undefined && object.fromSequence !== null ? BigInt(object.fromSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRecordsByOwnerRequestAmino): QueryRecordsByOwnerRequest {
    return {
      owner: object.owner,
      fromSequence: BigInt(object.from_sequence)
    };
  },
  toAmino(message: QueryRecordsByOwnerRequest): QueryRecordsByOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.from_sequence = message.fromSequence ? message.fromSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRecordsByOwnerRequestAminoMsg): QueryRecordsByOwnerRequest {
    return QueryRecordsByOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecordsByOwnerRequestProtoMsg): QueryRecordsByOwnerRequest {
    return QueryRecordsByOwnerRequest.decode(message.value);
  },
  toProto(message: QueryRecordsByOwnerRequest): Uint8Array {
    return QueryRecordsByOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRecordsByOwnerRequest): QueryRecordsByOwnerRequestProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryRecordsByOwnerRequest",
      value: QueryRecordsByOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRecordsByOwnerResponse(): QueryRecordsByOwnerResponse {
  return {
    records: [],
    nextSequence: BigInt(0)
  };
}
export const QueryRecordsByOwnerResponse = {
  typeUrl: "/likechain.iscn.QueryRecordsByOwnerResponse",
  encode(message: QueryRecordsByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      QueryResponseRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextSequence);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByOwnerResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromJSON(e)) : [],
      nextSequence: isSet(object.nextSequence) ? BigInt(object.nextSequence.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryRecordsByOwnerResponse>): QueryRecordsByOwnerResponse {
    const message = createBaseQueryRecordsByOwnerResponse();
    message.records = object.records?.map(e => QueryResponseRecord.fromPartial(e)) || [];
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? BigInt(object.nextSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRecordsByOwnerResponseAmino): QueryRecordsByOwnerResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromAmino(e)) : [],
      nextSequence: BigInt(object.next_sequence)
    };
  },
  toAmino(message: QueryRecordsByOwnerResponse): QueryRecordsByOwnerResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? QueryResponseRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    obj.next_sequence = message.nextSequence ? message.nextSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRecordsByOwnerResponseAminoMsg): QueryRecordsByOwnerResponse {
    return QueryRecordsByOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecordsByOwnerResponseProtoMsg): QueryRecordsByOwnerResponse {
    return QueryRecordsByOwnerResponse.decode(message.value);
  },
  toProto(message: QueryRecordsByOwnerResponse): Uint8Array {
    return QueryRecordsByOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRecordsByOwnerResponse): QueryRecordsByOwnerResponseProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryRecordsByOwnerResponse",
      value: QueryRecordsByOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/likechain.iscn.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/likechain.iscn.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetCidRequest(): QueryGetCidRequest {
  return {
    cid: ""
  };
}
export const QueryGetCidRequest = {
  typeUrl: "/likechain.iscn.QueryGetCidRequest",
  encode(message: QueryGetCidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetCidRequest {
    return {
      cid: isSet(object.cid) ? String(object.cid) : ""
    };
  },
  fromPartial(object: Partial<QueryGetCidRequest>): QueryGetCidRequest {
    const message = createBaseQueryGetCidRequest();
    message.cid = object.cid ?? "";
    return message;
  },
  fromAmino(object: QueryGetCidRequestAmino): QueryGetCidRequest {
    return {
      cid: object.cid
    };
  },
  toAmino(message: QueryGetCidRequest): QueryGetCidRequestAmino {
    const obj: any = {};
    obj.cid = message.cid;
    return obj;
  },
  fromAminoMsg(object: QueryGetCidRequestAminoMsg): QueryGetCidRequest {
    return QueryGetCidRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCidRequestProtoMsg): QueryGetCidRequest {
    return QueryGetCidRequest.decode(message.value);
  },
  toProto(message: QueryGetCidRequest): Uint8Array {
    return QueryGetCidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCidRequest): QueryGetCidRequestProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryGetCidRequest",
      value: QueryGetCidRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetCidResponse(): QueryGetCidResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryGetCidResponse = {
  typeUrl: "/likechain.iscn.QueryGetCidResponse",
  encode(message: QueryGetCidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetCidResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryGetCidResponse>): QueryGetCidResponse {
    const message = createBaseQueryGetCidResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryGetCidResponseAmino): QueryGetCidResponse {
    return {
      data: object.data
    };
  },
  toAmino(message: QueryGetCidResponse): QueryGetCidResponseAmino {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: QueryGetCidResponseAminoMsg): QueryGetCidResponse {
    return QueryGetCidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCidResponseProtoMsg): QueryGetCidResponse {
    return QueryGetCidResponse.decode(message.value);
  },
  toProto(message: QueryGetCidResponse): Uint8Array {
    return QueryGetCidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCidResponse): QueryGetCidResponseProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryGetCidResponse",
      value: QueryGetCidResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetCidSizeRequest(): QueryGetCidSizeRequest {
  return {
    cid: ""
  };
}
export const QueryGetCidSizeRequest = {
  typeUrl: "/likechain.iscn.QueryGetCidSizeRequest",
  encode(message: QueryGetCidSizeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetCidSizeRequest {
    return {
      cid: isSet(object.cid) ? String(object.cid) : ""
    };
  },
  fromPartial(object: Partial<QueryGetCidSizeRequest>): QueryGetCidSizeRequest {
    const message = createBaseQueryGetCidSizeRequest();
    message.cid = object.cid ?? "";
    return message;
  },
  fromAmino(object: QueryGetCidSizeRequestAmino): QueryGetCidSizeRequest {
    return {
      cid: object.cid
    };
  },
  toAmino(message: QueryGetCidSizeRequest): QueryGetCidSizeRequestAmino {
    const obj: any = {};
    obj.cid = message.cid;
    return obj;
  },
  fromAminoMsg(object: QueryGetCidSizeRequestAminoMsg): QueryGetCidSizeRequest {
    return QueryGetCidSizeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCidSizeRequestProtoMsg): QueryGetCidSizeRequest {
    return QueryGetCidSizeRequest.decode(message.value);
  },
  toProto(message: QueryGetCidSizeRequest): Uint8Array {
    return QueryGetCidSizeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCidSizeRequest): QueryGetCidSizeRequestProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryGetCidSizeRequest",
      value: QueryGetCidSizeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetCidSizeResponse(): QueryGetCidSizeResponse {
  return {
    size: BigInt(0)
  };
}
export const QueryGetCidSizeResponse = {
  typeUrl: "/likechain.iscn.QueryGetCidSizeResponse",
  encode(message: QueryGetCidSizeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.size !== BigInt(0)) {
      writer.uint32(8).uint64(message.size);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetCidSizeResponse {
    return {
      size: isSet(object.size) ? BigInt(object.size.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetCidSizeResponse>): QueryGetCidSizeResponse {
    const message = createBaseQueryGetCidSizeResponse();
    message.size = object.size !== undefined && object.size !== null ? BigInt(object.size.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetCidSizeResponseAmino): QueryGetCidSizeResponse {
    return {
      size: BigInt(object.size)
    };
  },
  toAmino(message: QueryGetCidSizeResponse): QueryGetCidSizeResponseAmino {
    const obj: any = {};
    obj.size = message.size ? message.size.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetCidSizeResponseAminoMsg): QueryGetCidSizeResponse {
    return QueryGetCidSizeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCidSizeResponseProtoMsg): QueryGetCidSizeResponse {
    return QueryGetCidSizeResponse.decode(message.value);
  },
  toProto(message: QueryGetCidSizeResponse): Uint8Array {
    return QueryGetCidSizeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCidSizeResponse): QueryGetCidSizeResponseProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryGetCidSizeResponse",
      value: QueryGetCidSizeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHasCidRequest(): QueryHasCidRequest {
  return {
    cid: ""
  };
}
export const QueryHasCidRequest = {
  typeUrl: "/likechain.iscn.QueryHasCidRequest",
  encode(message: QueryHasCidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    return writer;
  },
  fromJSON(object: any): QueryHasCidRequest {
    return {
      cid: isSet(object.cid) ? String(object.cid) : ""
    };
  },
  fromPartial(object: Partial<QueryHasCidRequest>): QueryHasCidRequest {
    const message = createBaseQueryHasCidRequest();
    message.cid = object.cid ?? "";
    return message;
  },
  fromAmino(object: QueryHasCidRequestAmino): QueryHasCidRequest {
    return {
      cid: object.cid
    };
  },
  toAmino(message: QueryHasCidRequest): QueryHasCidRequestAmino {
    const obj: any = {};
    obj.cid = message.cid;
    return obj;
  },
  fromAminoMsg(object: QueryHasCidRequestAminoMsg): QueryHasCidRequest {
    return QueryHasCidRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHasCidRequestProtoMsg): QueryHasCidRequest {
    return QueryHasCidRequest.decode(message.value);
  },
  toProto(message: QueryHasCidRequest): Uint8Array {
    return QueryHasCidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHasCidRequest): QueryHasCidRequestProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryHasCidRequest",
      value: QueryHasCidRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHasCidResponse(): QueryHasCidResponse {
  return {
    exist: false
  };
}
export const QueryHasCidResponse = {
  typeUrl: "/likechain.iscn.QueryHasCidResponse",
  encode(message: QueryHasCidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exist === true) {
      writer.uint32(8).bool(message.exist);
    }
    return writer;
  },
  fromJSON(object: any): QueryHasCidResponse {
    return {
      exist: isSet(object.exist) ? Boolean(object.exist) : false
    };
  },
  fromPartial(object: Partial<QueryHasCidResponse>): QueryHasCidResponse {
    const message = createBaseQueryHasCidResponse();
    message.exist = object.exist ?? false;
    return message;
  },
  fromAmino(object: QueryHasCidResponseAmino): QueryHasCidResponse {
    return {
      exist: object.exist
    };
  },
  toAmino(message: QueryHasCidResponse): QueryHasCidResponseAmino {
    const obj: any = {};
    obj.exist = message.exist;
    return obj;
  },
  fromAminoMsg(object: QueryHasCidResponseAminoMsg): QueryHasCidResponse {
    return QueryHasCidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHasCidResponseProtoMsg): QueryHasCidResponse {
    return QueryHasCidResponse.decode(message.value);
  },
  toProto(message: QueryHasCidResponse): Uint8Array {
    return QueryHasCidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHasCidResponse): QueryHasCidResponseProtoMsg {
    return {
      typeUrl: "/likechain.iscn.QueryHasCidResponse",
      value: QueryHasCidResponse.encode(message).finish()
    };
  }
};