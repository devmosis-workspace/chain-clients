import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Stream, StreamAmino, StreamSDKType } from "./stream";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface ModuleToDistributeCoinsRequest {}
export interface ModuleToDistributeCoinsRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsRequest";
  value: Uint8Array;
}
export interface ModuleToDistributeCoinsRequestAmino {}
export interface ModuleToDistributeCoinsRequestAminoMsg {
  type: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsRequest";
  value: ModuleToDistributeCoinsRequestAmino;
}
export interface ModuleToDistributeCoinsRequestSDKType {}
export interface ModuleToDistributeCoinsResponse {
  /** Coins that have yet to be distributed */
  coins: Coin[];
}
export interface ModuleToDistributeCoinsResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsResponse";
  value: Uint8Array;
}
export interface ModuleToDistributeCoinsResponseAmino {
  /** Coins that have yet to be distributed */
  coins?: CoinAmino[];
}
export interface ModuleToDistributeCoinsResponseAminoMsg {
  type: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsResponse";
  value: ModuleToDistributeCoinsResponseAmino;
}
export interface ModuleToDistributeCoinsResponseSDKType {
  coins: CoinSDKType[];
}
export interface StreamByIDRequest {
  /** Gague ID being queried */
  id: bigint;
}
export interface StreamByIDRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.StreamByIDRequest";
  value: Uint8Array;
}
export interface StreamByIDRequestAmino {
  /** Gague ID being queried */
  id?: string;
}
export interface StreamByIDRequestAminoMsg {
  type: "/dymensionxyz.dymension.streamer.StreamByIDRequest";
  value: StreamByIDRequestAmino;
}
export interface StreamByIDRequestSDKType {
  id: bigint;
}
export interface StreamByIDResponse {
  /** Stream that corresponds to provided gague ID */
  stream?: Stream;
}
export interface StreamByIDResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.StreamByIDResponse";
  value: Uint8Array;
}
export interface StreamByIDResponseAmino {
  /** Stream that corresponds to provided gague ID */
  stream?: StreamAmino;
}
export interface StreamByIDResponseAminoMsg {
  type: "/dymensionxyz.dymension.streamer.StreamByIDResponse";
  value: StreamByIDResponseAmino;
}
export interface StreamByIDResponseSDKType {
  stream?: StreamSDKType;
}
export interface StreamsRequest {
  /** Pagination defines pagination for the request */
  pagination?: PageRequest;
}
export interface StreamsRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.StreamsRequest";
  value: Uint8Array;
}
export interface StreamsRequestAmino {
  /** Pagination defines pagination for the request */
  pagination?: PageRequestAmino;
}
export interface StreamsRequestAminoMsg {
  type: "/dymensionxyz.dymension.streamer.StreamsRequest";
  value: StreamsRequestAmino;
}
export interface StreamsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface StreamsResponse {
  /** Upcoming and active streams */
  data: Stream[];
  /** Pagination defines pagination for the response */
  pagination?: PageResponse;
}
export interface StreamsResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.StreamsResponse";
  value: Uint8Array;
}
export interface StreamsResponseAmino {
  /** Upcoming and active streams */
  data?: StreamAmino[];
  /** Pagination defines pagination for the response */
  pagination?: PageResponseAmino;
}
export interface StreamsResponseAminoMsg {
  type: "/dymensionxyz.dymension.streamer.StreamsResponse";
  value: StreamsResponseAmino;
}
export interface StreamsResponseSDKType {
  data: StreamSDKType[];
  pagination?: PageResponseSDKType;
}
export interface ActiveStreamsRequest {
  /** Pagination defines pagination for the request */
  pagination?: PageRequest;
}
export interface ActiveStreamsRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.ActiveStreamsRequest";
  value: Uint8Array;
}
export interface ActiveStreamsRequestAmino {
  /** Pagination defines pagination for the request */
  pagination?: PageRequestAmino;
}
export interface ActiveStreamsRequestAminoMsg {
  type: "/dymensionxyz.dymension.streamer.ActiveStreamsRequest";
  value: ActiveStreamsRequestAmino;
}
export interface ActiveStreamsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface ActiveStreamsResponse {
  /** Active gagues only */
  data: Stream[];
  /** Pagination defines pagination for the response */
  pagination?: PageResponse;
}
export interface ActiveStreamsResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.ActiveStreamsResponse";
  value: Uint8Array;
}
export interface ActiveStreamsResponseAmino {
  /** Active gagues only */
  data?: StreamAmino[];
  /** Pagination defines pagination for the response */
  pagination?: PageResponseAmino;
}
export interface ActiveStreamsResponseAminoMsg {
  type: "/dymensionxyz.dymension.streamer.ActiveStreamsResponse";
  value: ActiveStreamsResponseAmino;
}
export interface ActiveStreamsResponseSDKType {
  data: StreamSDKType[];
  pagination?: PageResponseSDKType;
}
export interface UpcomingStreamsRequest {
  /** Pagination defines pagination for the request */
  pagination?: PageRequest;
}
export interface UpcomingStreamsRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.UpcomingStreamsRequest";
  value: Uint8Array;
}
export interface UpcomingStreamsRequestAmino {
  /** Pagination defines pagination for the request */
  pagination?: PageRequestAmino;
}
export interface UpcomingStreamsRequestAminoMsg {
  type: "/dymensionxyz.dymension.streamer.UpcomingStreamsRequest";
  value: UpcomingStreamsRequestAmino;
}
export interface UpcomingStreamsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface UpcomingStreamsResponse {
  /** Streams whose distribution is upcoming */
  data: Stream[];
  /** Pagination defines pagination for the response */
  pagination?: PageResponse;
}
export interface UpcomingStreamsResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.UpcomingStreamsResponse";
  value: Uint8Array;
}
export interface UpcomingStreamsResponseAmino {
  /** Streams whose distribution is upcoming */
  data?: StreamAmino[];
  /** Pagination defines pagination for the response */
  pagination?: PageResponseAmino;
}
export interface UpcomingStreamsResponseAminoMsg {
  type: "/dymensionxyz.dymension.streamer.UpcomingStreamsResponse";
  value: UpcomingStreamsResponseAmino;
}
export interface UpcomingStreamsResponseSDKType {
  data: StreamSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseModuleToDistributeCoinsRequest(): ModuleToDistributeCoinsRequest {
  return {};
}
export const ModuleToDistributeCoinsRequest = {
  typeUrl: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsRequest",
  encode(_: ModuleToDistributeCoinsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ModuleToDistributeCoinsRequest {
    return {};
  },
  fromPartial(_: Partial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest {
    const message = createBaseModuleToDistributeCoinsRequest();
    return message;
  },
  fromAmino(_: ModuleToDistributeCoinsRequestAmino): ModuleToDistributeCoinsRequest {
    const message = createBaseModuleToDistributeCoinsRequest();
    return message;
  },
  toAmino(_: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ModuleToDistributeCoinsRequestAminoMsg): ModuleToDistributeCoinsRequest {
    return ModuleToDistributeCoinsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ModuleToDistributeCoinsRequestProtoMsg): ModuleToDistributeCoinsRequest {
    return ModuleToDistributeCoinsRequest.decode(message.value);
  },
  toProto(message: ModuleToDistributeCoinsRequest): Uint8Array {
    return ModuleToDistributeCoinsRequest.encode(message).finish();
  },
  toProtoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsRequest",
      value: ModuleToDistributeCoinsRequest.encode(message).finish()
    };
  }
};
function createBaseModuleToDistributeCoinsResponse(): ModuleToDistributeCoinsResponse {
  return {
    coins: []
  };
}
export const ModuleToDistributeCoinsResponse = {
  typeUrl: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsResponse",
  encode(message: ModuleToDistributeCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ModuleToDistributeCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse {
    const message = createBaseModuleToDistributeCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ModuleToDistributeCoinsResponseAmino): ModuleToDistributeCoinsResponse {
    const message = createBaseModuleToDistributeCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: ModuleToDistributeCoinsResponseAminoMsg): ModuleToDistributeCoinsResponse {
    return ModuleToDistributeCoinsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ModuleToDistributeCoinsResponseProtoMsg): ModuleToDistributeCoinsResponse {
    return ModuleToDistributeCoinsResponse.decode(message.value);
  },
  toProto(message: ModuleToDistributeCoinsResponse): Uint8Array {
    return ModuleToDistributeCoinsResponse.encode(message).finish();
  },
  toProtoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsResponse",
      value: ModuleToDistributeCoinsResponse.encode(message).finish()
    };
  }
};
function createBaseStreamByIDRequest(): StreamByIDRequest {
  return {
    id: BigInt(0)
  };
}
export const StreamByIDRequest = {
  typeUrl: "/dymensionxyz.dymension.streamer.StreamByIDRequest",
  encode(message: StreamByIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): StreamByIDRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<StreamByIDRequest>): StreamByIDRequest {
    const message = createBaseStreamByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StreamByIDRequestAmino): StreamByIDRequest {
    const message = createBaseStreamByIDRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: StreamByIDRequest): StreamByIDRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StreamByIDRequestAminoMsg): StreamByIDRequest {
    return StreamByIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamByIDRequestProtoMsg): StreamByIDRequest {
    return StreamByIDRequest.decode(message.value);
  },
  toProto(message: StreamByIDRequest): Uint8Array {
    return StreamByIDRequest.encode(message).finish();
  },
  toProtoMsg(message: StreamByIDRequest): StreamByIDRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.StreamByIDRequest",
      value: StreamByIDRequest.encode(message).finish()
    };
  }
};
function createBaseStreamByIDResponse(): StreamByIDResponse {
  return {
    stream: undefined
  };
}
export const StreamByIDResponse = {
  typeUrl: "/dymensionxyz.dymension.streamer.StreamByIDResponse",
  encode(message: StreamByIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stream !== undefined) {
      Stream.encode(message.stream, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): StreamByIDResponse {
    return {
      stream: isSet(object.stream) ? Stream.fromJSON(object.stream) : undefined
    };
  },
  fromPartial(object: Partial<StreamByIDResponse>): StreamByIDResponse {
    const message = createBaseStreamByIDResponse();
    message.stream = object.stream !== undefined && object.stream !== null ? Stream.fromPartial(object.stream) : undefined;
    return message;
  },
  fromAmino(object: StreamByIDResponseAmino): StreamByIDResponse {
    const message = createBaseStreamByIDResponse();
    if (object.stream !== undefined && object.stream !== null) {
      message.stream = Stream.fromAmino(object.stream);
    }
    return message;
  },
  toAmino(message: StreamByIDResponse): StreamByIDResponseAmino {
    const obj: any = {};
    obj.stream = message.stream ? Stream.toAmino(message.stream) : undefined;
    return obj;
  },
  fromAminoMsg(object: StreamByIDResponseAminoMsg): StreamByIDResponse {
    return StreamByIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamByIDResponseProtoMsg): StreamByIDResponse {
    return StreamByIDResponse.decode(message.value);
  },
  toProto(message: StreamByIDResponse): Uint8Array {
    return StreamByIDResponse.encode(message).finish();
  },
  toProtoMsg(message: StreamByIDResponse): StreamByIDResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.StreamByIDResponse",
      value: StreamByIDResponse.encode(message).finish()
    };
  }
};
function createBaseStreamsRequest(): StreamsRequest {
  return {
    pagination: undefined
  };
}
export const StreamsRequest = {
  typeUrl: "/dymensionxyz.dymension.streamer.StreamsRequest",
  encode(message: StreamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): StreamsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<StreamsRequest>): StreamsRequest {
    const message = createBaseStreamsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: StreamsRequestAmino): StreamsRequest {
    const message = createBaseStreamsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: StreamsRequest): StreamsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: StreamsRequestAminoMsg): StreamsRequest {
    return StreamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamsRequestProtoMsg): StreamsRequest {
    return StreamsRequest.decode(message.value);
  },
  toProto(message: StreamsRequest): Uint8Array {
    return StreamsRequest.encode(message).finish();
  },
  toProtoMsg(message: StreamsRequest): StreamsRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.StreamsRequest",
      value: StreamsRequest.encode(message).finish()
    };
  }
};
function createBaseStreamsResponse(): StreamsResponse {
  return {
    data: [],
    pagination: undefined
  };
}
export const StreamsResponse = {
  typeUrl: "/dymensionxyz.dymension.streamer.StreamsResponse",
  encode(message: StreamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Stream.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): StreamsResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Stream.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<StreamsResponse>): StreamsResponse {
    const message = createBaseStreamsResponse();
    message.data = object.data?.map(e => Stream.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: StreamsResponseAmino): StreamsResponse {
    const message = createBaseStreamsResponse();
    message.data = object.data?.map(e => Stream.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: StreamsResponse): StreamsResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Stream.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: StreamsResponseAminoMsg): StreamsResponse {
    return StreamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamsResponseProtoMsg): StreamsResponse {
    return StreamsResponse.decode(message.value);
  },
  toProto(message: StreamsResponse): Uint8Array {
    return StreamsResponse.encode(message).finish();
  },
  toProtoMsg(message: StreamsResponse): StreamsResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.StreamsResponse",
      value: StreamsResponse.encode(message).finish()
    };
  }
};
function createBaseActiveStreamsRequest(): ActiveStreamsRequest {
  return {
    pagination: undefined
  };
}
export const ActiveStreamsRequest = {
  typeUrl: "/dymensionxyz.dymension.streamer.ActiveStreamsRequest",
  encode(message: ActiveStreamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ActiveStreamsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<ActiveStreamsRequest>): ActiveStreamsRequest {
    const message = createBaseActiveStreamsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: ActiveStreamsRequestAmino): ActiveStreamsRequest {
    const message = createBaseActiveStreamsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: ActiveStreamsRequest): ActiveStreamsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActiveStreamsRequestAminoMsg): ActiveStreamsRequest {
    return ActiveStreamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ActiveStreamsRequestProtoMsg): ActiveStreamsRequest {
    return ActiveStreamsRequest.decode(message.value);
  },
  toProto(message: ActiveStreamsRequest): Uint8Array {
    return ActiveStreamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ActiveStreamsRequest): ActiveStreamsRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.ActiveStreamsRequest",
      value: ActiveStreamsRequest.encode(message).finish()
    };
  }
};
function createBaseActiveStreamsResponse(): ActiveStreamsResponse {
  return {
    data: [],
    pagination: undefined
  };
}
export const ActiveStreamsResponse = {
  typeUrl: "/dymensionxyz.dymension.streamer.ActiveStreamsResponse",
  encode(message: ActiveStreamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Stream.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ActiveStreamsResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Stream.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<ActiveStreamsResponse>): ActiveStreamsResponse {
    const message = createBaseActiveStreamsResponse();
    message.data = object.data?.map(e => Stream.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: ActiveStreamsResponseAmino): ActiveStreamsResponse {
    const message = createBaseActiveStreamsResponse();
    message.data = object.data?.map(e => Stream.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: ActiveStreamsResponse): ActiveStreamsResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Stream.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActiveStreamsResponseAminoMsg): ActiveStreamsResponse {
    return ActiveStreamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ActiveStreamsResponseProtoMsg): ActiveStreamsResponse {
    return ActiveStreamsResponse.decode(message.value);
  },
  toProto(message: ActiveStreamsResponse): Uint8Array {
    return ActiveStreamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ActiveStreamsResponse): ActiveStreamsResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.ActiveStreamsResponse",
      value: ActiveStreamsResponse.encode(message).finish()
    };
  }
};
function createBaseUpcomingStreamsRequest(): UpcomingStreamsRequest {
  return {
    pagination: undefined
  };
}
export const UpcomingStreamsRequest = {
  typeUrl: "/dymensionxyz.dymension.streamer.UpcomingStreamsRequest",
  encode(message: UpcomingStreamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UpcomingStreamsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<UpcomingStreamsRequest>): UpcomingStreamsRequest {
    const message = createBaseUpcomingStreamsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: UpcomingStreamsRequestAmino): UpcomingStreamsRequest {
    const message = createBaseUpcomingStreamsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: UpcomingStreamsRequest): UpcomingStreamsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpcomingStreamsRequestAminoMsg): UpcomingStreamsRequest {
    return UpcomingStreamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpcomingStreamsRequestProtoMsg): UpcomingStreamsRequest {
    return UpcomingStreamsRequest.decode(message.value);
  },
  toProto(message: UpcomingStreamsRequest): Uint8Array {
    return UpcomingStreamsRequest.encode(message).finish();
  },
  toProtoMsg(message: UpcomingStreamsRequest): UpcomingStreamsRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.UpcomingStreamsRequest",
      value: UpcomingStreamsRequest.encode(message).finish()
    };
  }
};
function createBaseUpcomingStreamsResponse(): UpcomingStreamsResponse {
  return {
    data: [],
    pagination: undefined
  };
}
export const UpcomingStreamsResponse = {
  typeUrl: "/dymensionxyz.dymension.streamer.UpcomingStreamsResponse",
  encode(message: UpcomingStreamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Stream.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UpcomingStreamsResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Stream.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<UpcomingStreamsResponse>): UpcomingStreamsResponse {
    const message = createBaseUpcomingStreamsResponse();
    message.data = object.data?.map(e => Stream.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: UpcomingStreamsResponseAmino): UpcomingStreamsResponse {
    const message = createBaseUpcomingStreamsResponse();
    message.data = object.data?.map(e => Stream.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: UpcomingStreamsResponse): UpcomingStreamsResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Stream.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpcomingStreamsResponseAminoMsg): UpcomingStreamsResponse {
    return UpcomingStreamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: UpcomingStreamsResponseProtoMsg): UpcomingStreamsResponse {
    return UpcomingStreamsResponse.decode(message.value);
  },
  toProto(message: UpcomingStreamsResponse): Uint8Array {
    return UpcomingStreamsResponse.encode(message).finish();
  },
  toProtoMsg(message: UpcomingStreamsResponse): UpcomingStreamsResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.UpcomingStreamsResponse",
      value: UpcomingStreamsResponse.encode(message).finish()
    };
  }
};