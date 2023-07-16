import { Params, ParamsSDKType } from "./params";
import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryResponseRecord {
  ipld: string;
  data: Uint8Array;
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
  fromVersion: Long;
  /**
   * The final version in the resulting records.
   * If omitted or is 0, then it will be interpreted as the latest version.
   */
  toVersion: Long;
}
export interface QueryRecordsByIdRequestSDKType {
  iscn_id: string;
  from_version: Long;
  to_version: Long;
}
export interface QueryRecordsByIdResponse {
  owner: string;
  latestVersion: Long;
  records: QueryResponseRecord[];
}
export interface QueryRecordsByIdResponseSDKType {
  owner: string;
  latest_version: Long;
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
  fromSequence: Long;
}
export interface QueryRecordsByFingerprintRequestSDKType {
  fingerprint: string;
  from_sequence: Long;
}
export interface QueryRecordsByFingerprintResponse {
  records: QueryResponseRecord[];
  /** For pagination. */
  nextSequence: Long;
}
export interface QueryRecordsByFingerprintResponseSDKType {
  records: QueryResponseRecordSDKType[];
  next_sequence: Long;
}
export interface QueryRecordsByOwnerRequest {
  /** Owner address of the record(s) to be queried. */
  owner: string;
  /**
   * For pagination.
   * For the first query, fill in 0 or just omit this field.
   * For continuous queries, fill in the `next_sequence` field in the previous response.
   */
  fromSequence: Long;
}
export interface QueryRecordsByOwnerRequestSDKType {
  owner: string;
  from_sequence: Long;
}
export interface QueryRecordsByOwnerResponse {
  records: QueryResponseRecord[];
  nextSequence: Long;
}
export interface QueryRecordsByOwnerResponseSDKType {
  records: QueryResponseRecordSDKType[];
  next_sequence: Long;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryGetCidRequest {
  cid: string;
}
export interface QueryGetCidRequestSDKType {
  cid: string;
}
export interface QueryGetCidResponse {
  data: Uint8Array;
}
export interface QueryGetCidResponseSDKType {
  data: Uint8Array;
}
export interface QueryGetCidSizeRequest {
  cid: string;
}
export interface QueryGetCidSizeRequestSDKType {
  cid: string;
}
export interface QueryGetCidSizeResponse {
  size: Long;
}
export interface QueryGetCidSizeResponseSDKType {
  size: Long;
}
export interface QueryHasCidRequest {
  cid: string;
}
export interface QueryHasCidRequestSDKType {
  cid: string;
}
export interface QueryHasCidResponse {
  exist: boolean;
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
  encode(message: QueryResponseRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryRecordsByIdRequest(): QueryRecordsByIdRequest {
  return {
    iscnId: "",
    fromVersion: Long.UZERO,
    toVersion: Long.UZERO
  };
}
export const QueryRecordsByIdRequest = {
  encode(message: QueryRecordsByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnId !== "") {
      writer.uint32(10).string(message.iscnId);
    }
    if (!message.fromVersion.isZero()) {
      writer.uint32(16).uint64(message.fromVersion);
    }
    if (!message.toVersion.isZero()) {
      writer.uint32(24).uint64(message.toVersion);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByIdRequest {
    return {
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      fromVersion: isSet(object.fromVersion) ? Long.fromValue(object.fromVersion) : Long.UZERO,
      toVersion: isSet(object.toVersion) ? Long.fromValue(object.toVersion) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryRecordsByIdRequest>): QueryRecordsByIdRequest {
    const message = createBaseQueryRecordsByIdRequest();
    message.iscnId = object.iscnId ?? "";
    message.fromVersion = object.fromVersion !== undefined && object.fromVersion !== null ? Long.fromValue(object.fromVersion) : Long.UZERO;
    message.toVersion = object.toVersion !== undefined && object.toVersion !== null ? Long.fromValue(object.toVersion) : Long.UZERO;
    return message;
  }
};
function createBaseQueryRecordsByIdResponse(): QueryRecordsByIdResponse {
  return {
    owner: "",
    latestVersion: Long.UZERO,
    records: []
  };
}
export const QueryRecordsByIdResponse = {
  encode(message: QueryRecordsByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.latestVersion.isZero()) {
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
      latestVersion: isSet(object.latestVersion) ? Long.fromValue(object.latestVersion) : Long.UZERO,
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryRecordsByIdResponse>): QueryRecordsByIdResponse {
    const message = createBaseQueryRecordsByIdResponse();
    message.owner = object.owner ?? "";
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? Long.fromValue(object.latestVersion) : Long.UZERO;
    message.records = object.records?.map(e => QueryResponseRecord.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryRecordsByFingerprintRequest(): QueryRecordsByFingerprintRequest {
  return {
    fingerprint: "",
    fromSequence: Long.UZERO
  };
}
export const QueryRecordsByFingerprintRequest = {
  encode(message: QueryRecordsByFingerprintRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fingerprint !== "") {
      writer.uint32(10).string(message.fingerprint);
    }
    if (!message.fromSequence.isZero()) {
      writer.uint32(16).uint64(message.fromSequence);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByFingerprintRequest {
    return {
      fingerprint: isSet(object.fingerprint) ? String(object.fingerprint) : "",
      fromSequence: isSet(object.fromSequence) ? Long.fromValue(object.fromSequence) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryRecordsByFingerprintRequest>): QueryRecordsByFingerprintRequest {
    const message = createBaseQueryRecordsByFingerprintRequest();
    message.fingerprint = object.fingerprint ?? "";
    message.fromSequence = object.fromSequence !== undefined && object.fromSequence !== null ? Long.fromValue(object.fromSequence) : Long.UZERO;
    return message;
  }
};
function createBaseQueryRecordsByFingerprintResponse(): QueryRecordsByFingerprintResponse {
  return {
    records: [],
    nextSequence: Long.UZERO
  };
}
export const QueryRecordsByFingerprintResponse = {
  encode(message: QueryRecordsByFingerprintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      QueryResponseRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.nextSequence.isZero()) {
      writer.uint32(16).uint64(message.nextSequence);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByFingerprintResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromJSON(e)) : [],
      nextSequence: isSet(object.nextSequence) ? Long.fromValue(object.nextSequence) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryRecordsByFingerprintResponse>): QueryRecordsByFingerprintResponse {
    const message = createBaseQueryRecordsByFingerprintResponse();
    message.records = object.records?.map(e => QueryResponseRecord.fromPartial(e)) || [];
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? Long.fromValue(object.nextSequence) : Long.UZERO;
    return message;
  }
};
function createBaseQueryRecordsByOwnerRequest(): QueryRecordsByOwnerRequest {
  return {
    owner: "",
    fromSequence: Long.UZERO
  };
}
export const QueryRecordsByOwnerRequest = {
  encode(message: QueryRecordsByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.fromSequence.isZero()) {
      writer.uint32(16).uint64(message.fromSequence);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      fromSequence: isSet(object.fromSequence) ? Long.fromValue(object.fromSequence) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryRecordsByOwnerRequest>): QueryRecordsByOwnerRequest {
    const message = createBaseQueryRecordsByOwnerRequest();
    message.owner = object.owner ?? "";
    message.fromSequence = object.fromSequence !== undefined && object.fromSequence !== null ? Long.fromValue(object.fromSequence) : Long.UZERO;
    return message;
  }
};
function createBaseQueryRecordsByOwnerResponse(): QueryRecordsByOwnerResponse {
  return {
    records: [],
    nextSequence: Long.UZERO
  };
}
export const QueryRecordsByOwnerResponse = {
  encode(message: QueryRecordsByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      QueryResponseRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.nextSequence.isZero()) {
      writer.uint32(16).uint64(message.nextSequence);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByOwnerResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromJSON(e)) : [],
      nextSequence: isSet(object.nextSequence) ? Long.fromValue(object.nextSequence) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryRecordsByOwnerResponse>): QueryRecordsByOwnerResponse {
    const message = createBaseQueryRecordsByOwnerResponse();
    message.records = object.records?.map(e => QueryResponseRecord.fromPartial(e)) || [];
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? Long.fromValue(object.nextSequence) : Long.UZERO;
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
function createBaseQueryGetCidRequest(): QueryGetCidRequest {
  return {
    cid: ""
  };
}
export const QueryGetCidRequest = {
  encode(message: QueryGetCidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryGetCidResponse(): QueryGetCidResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryGetCidResponse = {
  encode(message: QueryGetCidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryGetCidSizeRequest(): QueryGetCidSizeRequest {
  return {
    cid: ""
  };
}
export const QueryGetCidSizeRequest = {
  encode(message: QueryGetCidSizeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryGetCidSizeResponse(): QueryGetCidSizeResponse {
  return {
    size: Long.UZERO
  };
}
export const QueryGetCidSizeResponse = {
  encode(message: QueryGetCidSizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.size.isZero()) {
      writer.uint32(8).uint64(message.size);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetCidSizeResponse {
    return {
      size: isSet(object.size) ? Long.fromValue(object.size) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryGetCidSizeResponse>): QueryGetCidSizeResponse {
    const message = createBaseQueryGetCidSizeResponse();
    message.size = object.size !== undefined && object.size !== null ? Long.fromValue(object.size) : Long.UZERO;
    return message;
  }
};
function createBaseQueryHasCidRequest(): QueryHasCidRequest {
  return {
    cid: ""
  };
}
export const QueryHasCidRequest = {
  encode(message: QueryHasCidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryHasCidResponse(): QueryHasCidResponse {
  return {
    exist: false
  };
}
export const QueryHasCidResponse = {
  encode(message: QueryHasCidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};