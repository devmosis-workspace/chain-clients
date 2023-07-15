import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Message {
  snapshotsRequest?: SnapshotsRequest;
  snapshotsResponse?: SnapshotsResponse;
  chunkRequest?: ChunkRequest;
  chunkResponse?: ChunkResponse;
}
export interface MessageSDKType {
  snapshots_request?: SnapshotsRequestSDKType;
  snapshots_response?: SnapshotsResponseSDKType;
  chunk_request?: ChunkRequestSDKType;
  chunk_response?: ChunkResponseSDKType;
}
export interface SnapshotsRequest {}
export interface SnapshotsRequestSDKType {}
export interface SnapshotsResponse {
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}
export interface SnapshotsResponseSDKType {
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}
export interface ChunkRequest {
  height: Long;
  format: number;
  index: number;
}
export interface ChunkRequestSDKType {
  height: Long;
  format: number;
  index: number;
}
export interface ChunkResponse {
  height: Long;
  format: number;
  index: number;
  chunk: Uint8Array;
  missing: boolean;
}
export interface ChunkResponseSDKType {
  height: Long;
  format: number;
  index: number;
  chunk: Uint8Array;
  missing: boolean;
}
function createBaseMessage(): Message {
  return {
    snapshotsRequest: undefined,
    snapshotsResponse: undefined,
    chunkRequest: undefined,
    chunkResponse: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshotsRequest !== undefined) {
      SnapshotsRequest.encode(message.snapshotsRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.snapshotsResponse !== undefined) {
      SnapshotsResponse.encode(message.snapshotsResponse, writer.uint32(18).fork()).ldelim();
    }
    if (message.chunkRequest !== undefined) {
      ChunkRequest.encode(message.chunkRequest, writer.uint32(26).fork()).ldelim();
    }
    if (message.chunkResponse !== undefined) {
      ChunkResponse.encode(message.chunkResponse, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Message {
    return {
      snapshotsRequest: isSet(object.snapshotsRequest) ? SnapshotsRequest.fromJSON(object.snapshotsRequest) : undefined,
      snapshotsResponse: isSet(object.snapshotsResponse) ? SnapshotsResponse.fromJSON(object.snapshotsResponse) : undefined,
      chunkRequest: isSet(object.chunkRequest) ? ChunkRequest.fromJSON(object.chunkRequest) : undefined,
      chunkResponse: isSet(object.chunkResponse) ? ChunkResponse.fromJSON(object.chunkResponse) : undefined
    };
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.snapshotsRequest = object.snapshotsRequest !== undefined && object.snapshotsRequest !== null ? SnapshotsRequest.fromPartial(object.snapshotsRequest) : undefined;
    message.snapshotsResponse = object.snapshotsResponse !== undefined && object.snapshotsResponse !== null ? SnapshotsResponse.fromPartial(object.snapshotsResponse) : undefined;
    message.chunkRequest = object.chunkRequest !== undefined && object.chunkRequest !== null ? ChunkRequest.fromPartial(object.chunkRequest) : undefined;
    message.chunkResponse = object.chunkResponse !== undefined && object.chunkResponse !== null ? ChunkResponse.fromPartial(object.chunkResponse) : undefined;
    return message;
  }
};
function createBaseSnapshotsRequest(): SnapshotsRequest {
  return {};
}
export const SnapshotsRequest = {
  encode(_: SnapshotsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): SnapshotsRequest {
    return {};
  },
  fromPartial(_: Partial<SnapshotsRequest>): SnapshotsRequest {
    const message = createBaseSnapshotsRequest();
    return message;
  }
};
function createBaseSnapshotsResponse(): SnapshotsResponse {
  return {
    height: Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
export const SnapshotsResponse = {
  encode(message: SnapshotsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  fromJSON(object: any): SnapshotsResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SnapshotsResponse>): SnapshotsResponse {
    const message = createBaseSnapshotsResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  }
};
function createBaseChunkRequest(): ChunkRequest {
  return {
    height: Long.UZERO,
    format: 0,
    index: 0
  };
}
export const ChunkRequest = {
  encode(message: ChunkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    return writer;
  },
  fromJSON(object: any): ChunkRequest {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      index: isSet(object.index) ? Number(object.index) : 0
    };
  },
  fromPartial(object: Partial<ChunkRequest>): ChunkRequest {
    const message = createBaseChunkRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.index = object.index ?? 0;
    return message;
  }
};
function createBaseChunkResponse(): ChunkResponse {
  return {
    height: Long.UZERO,
    format: 0,
    index: 0,
    chunk: new Uint8Array(),
    missing: false
  };
}
export const ChunkResponse = {
  encode(message: ChunkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(34).bytes(message.chunk);
    }
    if (message.missing === true) {
      writer.uint32(40).bool(message.missing);
    }
    return writer;
  },
  fromJSON(object: any): ChunkResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      index: isSet(object.index) ? Number(object.index) : 0,
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
      missing: isSet(object.missing) ? Boolean(object.missing) : false
    };
  },
  fromPartial(object: Partial<ChunkResponse>): ChunkResponse {
    const message = createBaseChunkResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.missing = object.missing ?? false;
    return message;
  }
};