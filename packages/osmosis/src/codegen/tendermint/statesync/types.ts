import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export interface Message {
  snapshotsRequest?: SnapshotsRequest;
  snapshotsResponse?: SnapshotsResponse;
  chunkRequest?: ChunkRequest;
  chunkResponse?: ChunkResponse;
}
export interface MessageProtoMsg {
  typeUrl: "/tendermint.statesync.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  snapshots_request?: SnapshotsRequestAmino;
  snapshots_response?: SnapshotsResponseAmino;
  chunk_request?: ChunkRequestAmino;
  chunk_response?: ChunkResponseAmino;
}
export interface MessageAminoMsg {
  type: "/tendermint.statesync.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  snapshots_request?: SnapshotsRequestSDKType;
  snapshots_response?: SnapshotsResponseSDKType;
  chunk_request?: ChunkRequestSDKType;
  chunk_response?: ChunkResponseSDKType;
}
export interface SnapshotsRequest {}
export interface SnapshotsRequestProtoMsg {
  typeUrl: "/tendermint.statesync.SnapshotsRequest";
  value: Uint8Array;
}
export interface SnapshotsRequestAmino {}
export interface SnapshotsRequestAminoMsg {
  type: "/tendermint.statesync.SnapshotsRequest";
  value: SnapshotsRequestAmino;
}
export interface SnapshotsRequestSDKType {}
export interface SnapshotsResponse {
  height: bigint;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}
export interface SnapshotsResponseProtoMsg {
  typeUrl: "/tendermint.statesync.SnapshotsResponse";
  value: Uint8Array;
}
export interface SnapshotsResponseAmino {
  height?: string;
  format?: number;
  chunks?: number;
  hash?: string;
  metadata?: string;
}
export interface SnapshotsResponseAminoMsg {
  type: "/tendermint.statesync.SnapshotsResponse";
  value: SnapshotsResponseAmino;
}
export interface SnapshotsResponseSDKType {
  height: bigint;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}
export interface ChunkRequest {
  height: bigint;
  format: number;
  index: number;
}
export interface ChunkRequestProtoMsg {
  typeUrl: "/tendermint.statesync.ChunkRequest";
  value: Uint8Array;
}
export interface ChunkRequestAmino {
  height?: string;
  format?: number;
  index?: number;
}
export interface ChunkRequestAminoMsg {
  type: "/tendermint.statesync.ChunkRequest";
  value: ChunkRequestAmino;
}
export interface ChunkRequestSDKType {
  height: bigint;
  format: number;
  index: number;
}
export interface ChunkResponse {
  height: bigint;
  format: number;
  index: number;
  chunk: Uint8Array;
  missing: boolean;
}
export interface ChunkResponseProtoMsg {
  typeUrl: "/tendermint.statesync.ChunkResponse";
  value: Uint8Array;
}
export interface ChunkResponseAmino {
  height?: string;
  format?: number;
  index?: number;
  chunk?: string;
  missing?: boolean;
}
export interface ChunkResponseAminoMsg {
  type: "/tendermint.statesync.ChunkResponse";
  value: ChunkResponseAmino;
}
export interface ChunkResponseSDKType {
  height: bigint;
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
  typeUrl: "/tendermint.statesync.Message",
  encode(message: Message, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MessageAmino): Message {
    const message = createBaseMessage();
    if (object.snapshots_request !== undefined && object.snapshots_request !== null) {
      message.snapshotsRequest = SnapshotsRequest.fromAmino(object.snapshots_request);
    }
    if (object.snapshots_response !== undefined && object.snapshots_response !== null) {
      message.snapshotsResponse = SnapshotsResponse.fromAmino(object.snapshots_response);
    }
    if (object.chunk_request !== undefined && object.chunk_request !== null) {
      message.chunkRequest = ChunkRequest.fromAmino(object.chunk_request);
    }
    if (object.chunk_response !== undefined && object.chunk_response !== null) {
      message.chunkResponse = ChunkResponse.fromAmino(object.chunk_response);
    }
    return message;
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.snapshots_request = message.snapshotsRequest ? SnapshotsRequest.toAmino(message.snapshotsRequest) : undefined;
    obj.snapshots_response = message.snapshotsResponse ? SnapshotsResponse.toAmino(message.snapshotsResponse) : undefined;
    obj.chunk_request = message.chunkRequest ? ChunkRequest.toAmino(message.chunkRequest) : undefined;
    obj.chunk_response = message.chunkResponse ? ChunkResponse.toAmino(message.chunkResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: MessageAminoMsg): Message {
    return Message.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageProtoMsg): Message {
    return Message.decode(message.value);
  },
  toProto(message: Message): Uint8Array {
    return Message.encode(message).finish();
  },
  toProtoMsg(message: Message): MessageProtoMsg {
    return {
      typeUrl: "/tendermint.statesync.Message",
      value: Message.encode(message).finish()
    };
  }
};
function createBaseSnapshotsRequest(): SnapshotsRequest {
  return {};
}
export const SnapshotsRequest = {
  typeUrl: "/tendermint.statesync.SnapshotsRequest",
  encode(_: SnapshotsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): SnapshotsRequest {
    return {};
  },
  fromPartial(_: Partial<SnapshotsRequest>): SnapshotsRequest {
    const message = createBaseSnapshotsRequest();
    return message;
  },
  fromAmino(_: SnapshotsRequestAmino): SnapshotsRequest {
    const message = createBaseSnapshotsRequest();
    return message;
  },
  toAmino(_: SnapshotsRequest): SnapshotsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SnapshotsRequestAminoMsg): SnapshotsRequest {
    return SnapshotsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SnapshotsRequestProtoMsg): SnapshotsRequest {
    return SnapshotsRequest.decode(message.value);
  },
  toProto(message: SnapshotsRequest): Uint8Array {
    return SnapshotsRequest.encode(message).finish();
  },
  toProtoMsg(message: SnapshotsRequest): SnapshotsRequestProtoMsg {
    return {
      typeUrl: "/tendermint.statesync.SnapshotsRequest",
      value: SnapshotsRequest.encode(message).finish()
    };
  }
};
function createBaseSnapshotsResponse(): SnapshotsResponse {
  return {
    height: BigInt(0),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
export const SnapshotsResponse = {
  typeUrl: "/tendermint.statesync.SnapshotsResponse",
  encode(message: SnapshotsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      format: isSet(object.format) ? Number(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SnapshotsResponse>): SnapshotsResponse {
    const message = createBaseSnapshotsResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SnapshotsResponseAmino): SnapshotsResponse {
    const message = createBaseSnapshotsResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  toAmino(message: SnapshotsResponse): SnapshotsResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.format = message.format;
    obj.chunks = message.chunks;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotsResponseAminoMsg): SnapshotsResponse {
    return SnapshotsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SnapshotsResponseProtoMsg): SnapshotsResponse {
    return SnapshotsResponse.decode(message.value);
  },
  toProto(message: SnapshotsResponse): Uint8Array {
    return SnapshotsResponse.encode(message).finish();
  },
  toProtoMsg(message: SnapshotsResponse): SnapshotsResponseProtoMsg {
    return {
      typeUrl: "/tendermint.statesync.SnapshotsResponse",
      value: SnapshotsResponse.encode(message).finish()
    };
  }
};
function createBaseChunkRequest(): ChunkRequest {
  return {
    height: BigInt(0),
    format: 0,
    index: 0
  };
}
export const ChunkRequest = {
  typeUrl: "/tendermint.statesync.ChunkRequest",
  encode(message: ChunkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      format: isSet(object.format) ? Number(object.format) : 0,
      index: isSet(object.index) ? Number(object.index) : 0
    };
  },
  fromPartial(object: Partial<ChunkRequest>): ChunkRequest {
    const message = createBaseChunkRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.index = object.index ?? 0;
    return message;
  },
  fromAmino(object: ChunkRequestAmino): ChunkRequest {
    const message = createBaseChunkRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: ChunkRequest): ChunkRequestAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.format = message.format;
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: ChunkRequestAminoMsg): ChunkRequest {
    return ChunkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ChunkRequestProtoMsg): ChunkRequest {
    return ChunkRequest.decode(message.value);
  },
  toProto(message: ChunkRequest): Uint8Array {
    return ChunkRequest.encode(message).finish();
  },
  toProtoMsg(message: ChunkRequest): ChunkRequestProtoMsg {
    return {
      typeUrl: "/tendermint.statesync.ChunkRequest",
      value: ChunkRequest.encode(message).finish()
    };
  }
};
function createBaseChunkResponse(): ChunkResponse {
  return {
    height: BigInt(0),
    format: 0,
    index: 0,
    chunk: new Uint8Array(),
    missing: false
  };
}
export const ChunkResponse = {
  typeUrl: "/tendermint.statesync.ChunkResponse",
  encode(message: ChunkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      format: isSet(object.format) ? Number(object.format) : 0,
      index: isSet(object.index) ? Number(object.index) : 0,
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
      missing: isSet(object.missing) ? Boolean(object.missing) : false
    };
  },
  fromPartial(object: Partial<ChunkResponse>): ChunkResponse {
    const message = createBaseChunkResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.missing = object.missing ?? false;
    return message;
  },
  fromAmino(object: ChunkResponseAmino): ChunkResponse {
    const message = createBaseChunkResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    if (object.missing !== undefined && object.missing !== null) {
      message.missing = object.missing;
    }
    return message;
  },
  toAmino(message: ChunkResponse): ChunkResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.format = message.format;
    obj.index = message.index;
    obj.chunk = message.chunk ? base64FromBytes(message.chunk) : undefined;
    obj.missing = message.missing;
    return obj;
  },
  fromAminoMsg(object: ChunkResponseAminoMsg): ChunkResponse {
    return ChunkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ChunkResponseProtoMsg): ChunkResponse {
    return ChunkResponse.decode(message.value);
  },
  toProto(message: ChunkResponse): Uint8Array {
    return ChunkResponse.encode(message).finish();
  },
  toProtoMsg(message: ChunkResponse): ChunkResponseProtoMsg {
    return {
      typeUrl: "/tendermint.statesync.ChunkResponse",
      value: ChunkResponse.encode(message).finish()
    };
  }
};