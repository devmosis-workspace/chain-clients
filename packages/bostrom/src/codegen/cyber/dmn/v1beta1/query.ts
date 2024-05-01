import { Params, ParamsAmino, ParamsSDKType, Thought, ThoughtAmino, ThoughtSDKType, ThoughtStats, ThoughtStatsAmino, ThoughtStatsSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/cyber.dmn.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryThoughtParamsRequest {
  program: string;
  name: string;
}
export interface QueryThoughtParamsRequestProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtParamsRequest";
  value: Uint8Array;
}
export interface QueryThoughtParamsRequestAmino {
  program?: string;
  name?: string;
}
export interface QueryThoughtParamsRequestAminoMsg {
  type: "/cyber.dmn.v1beta1.QueryThoughtParamsRequest";
  value: QueryThoughtParamsRequestAmino;
}
export interface QueryThoughtParamsRequestSDKType {
  program: string;
  name: string;
}
export interface QueryThoughtResponse {
  thought: Thought;
}
export interface QueryThoughtResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtResponse";
  value: Uint8Array;
}
export interface QueryThoughtResponseAmino {
  thought?: ThoughtAmino;
}
export interface QueryThoughtResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.QueryThoughtResponse";
  value: QueryThoughtResponseAmino;
}
export interface QueryThoughtResponseSDKType {
  thought: ThoughtSDKType;
}
export interface QueryThoughtStatsResponse {
  thoughtStats: ThoughtStats;
}
export interface QueryThoughtStatsResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtStatsResponse";
  value: Uint8Array;
}
export interface QueryThoughtStatsResponseAmino {
  thought_stats?: ThoughtStatsAmino;
}
export interface QueryThoughtStatsResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.QueryThoughtStatsResponse";
  value: QueryThoughtStatsResponseAmino;
}
export interface QueryThoughtStatsResponseSDKType {
  thought_stats: ThoughtStatsSDKType;
}
export interface QueryThoughtsRequest {}
export interface QueryThoughtsRequestProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsRequest";
  value: Uint8Array;
}
export interface QueryThoughtsRequestAmino {}
export interface QueryThoughtsRequestAminoMsg {
  type: "/cyber.dmn.v1beta1.QueryThoughtsRequest";
  value: QueryThoughtsRequestAmino;
}
export interface QueryThoughtsRequestSDKType {}
export interface QueryThoughtsResponse {
  thoughts: Thought[];
}
export interface QueryThoughtsResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsResponse";
  value: Uint8Array;
}
export interface QueryThoughtsResponseAmino {
  thoughts?: ThoughtAmino[];
}
export interface QueryThoughtsResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.QueryThoughtsResponse";
  value: QueryThoughtsResponseAmino;
}
export interface QueryThoughtsResponseSDKType {
  thoughts: ThoughtSDKType[];
}
export interface QueryThoughtsStatsRequest {}
export interface QueryThoughtsStatsRequestProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsStatsRequest";
  value: Uint8Array;
}
export interface QueryThoughtsStatsRequestAmino {}
export interface QueryThoughtsStatsRequestAminoMsg {
  type: "/cyber.dmn.v1beta1.QueryThoughtsStatsRequest";
  value: QueryThoughtsStatsRequestAmino;
}
export interface QueryThoughtsStatsRequestSDKType {}
export interface QueryThoughtsStatsResponse {
  thoughtsStats: ThoughtStats[];
}
export interface QueryThoughtsStatsResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsStatsResponse";
  value: Uint8Array;
}
export interface QueryThoughtsStatsResponseAmino {
  thoughts_stats?: ThoughtStatsAmino[];
}
export interface QueryThoughtsStatsResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.QueryThoughtsStatsResponse";
  value: QueryThoughtsStatsResponseAmino;
}
export interface QueryThoughtsStatsResponseSDKType {
  thoughts_stats: ThoughtStatsSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cyber.dmn.v1beta1.QueryParamsRequest",
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
    const message = createBaseQueryParamsRequest();
    return message;
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
      typeUrl: "/cyber.dmn.v1beta1.QueryParamsRequest",
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
  typeUrl: "/cyber.dmn.v1beta1.QueryParamsResponse",
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
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
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
      typeUrl: "/cyber.dmn.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryThoughtParamsRequest(): QueryThoughtParamsRequest {
  return {
    program: "",
    name: ""
  };
}
export const QueryThoughtParamsRequest = {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtParamsRequest",
  encode(message: QueryThoughtParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): QueryThoughtParamsRequest {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<QueryThoughtParamsRequest>): QueryThoughtParamsRequest {
    const message = createBaseQueryThoughtParamsRequest();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryThoughtParamsRequestAmino): QueryThoughtParamsRequest {
    const message = createBaseQueryThoughtParamsRequest();
    if (object.program !== undefined && object.program !== null) {
      message.program = object.program;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryThoughtParamsRequest): QueryThoughtParamsRequestAmino {
    const obj: any = {};
    obj.program = message.program === "" ? undefined : message.program;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryThoughtParamsRequestAminoMsg): QueryThoughtParamsRequest {
    return QueryThoughtParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThoughtParamsRequestProtoMsg): QueryThoughtParamsRequest {
    return QueryThoughtParamsRequest.decode(message.value);
  },
  toProto(message: QueryThoughtParamsRequest): Uint8Array {
    return QueryThoughtParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryThoughtParamsRequest): QueryThoughtParamsRequestProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.QueryThoughtParamsRequest",
      value: QueryThoughtParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryThoughtResponse(): QueryThoughtResponse {
  return {
    thought: Thought.fromPartial({})
  };
}
export const QueryThoughtResponse = {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtResponse",
  encode(message: QueryThoughtResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.thought !== undefined) {
      Thought.encode(message.thought, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryThoughtResponse {
    return {
      thought: isSet(object.thought) ? Thought.fromJSON(object.thought) : undefined
    };
  },
  fromPartial(object: Partial<QueryThoughtResponse>): QueryThoughtResponse {
    const message = createBaseQueryThoughtResponse();
    message.thought = object.thought !== undefined && object.thought !== null ? Thought.fromPartial(object.thought) : undefined;
    return message;
  },
  fromAmino(object: QueryThoughtResponseAmino): QueryThoughtResponse {
    const message = createBaseQueryThoughtResponse();
    if (object.thought !== undefined && object.thought !== null) {
      message.thought = Thought.fromAmino(object.thought);
    }
    return message;
  },
  toAmino(message: QueryThoughtResponse): QueryThoughtResponseAmino {
    const obj: any = {};
    obj.thought = message.thought ? Thought.toAmino(message.thought) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThoughtResponseAminoMsg): QueryThoughtResponse {
    return QueryThoughtResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThoughtResponseProtoMsg): QueryThoughtResponse {
    return QueryThoughtResponse.decode(message.value);
  },
  toProto(message: QueryThoughtResponse): Uint8Array {
    return QueryThoughtResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryThoughtResponse): QueryThoughtResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.QueryThoughtResponse",
      value: QueryThoughtResponse.encode(message).finish()
    };
  }
};
function createBaseQueryThoughtStatsResponse(): QueryThoughtStatsResponse {
  return {
    thoughtStats: ThoughtStats.fromPartial({})
  };
}
export const QueryThoughtStatsResponse = {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtStatsResponse",
  encode(message: QueryThoughtStatsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.thoughtStats !== undefined) {
      ThoughtStats.encode(message.thoughtStats, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryThoughtStatsResponse {
    return {
      thoughtStats: isSet(object.thoughtStats) ? ThoughtStats.fromJSON(object.thoughtStats) : undefined
    };
  },
  fromPartial(object: Partial<QueryThoughtStatsResponse>): QueryThoughtStatsResponse {
    const message = createBaseQueryThoughtStatsResponse();
    message.thoughtStats = object.thoughtStats !== undefined && object.thoughtStats !== null ? ThoughtStats.fromPartial(object.thoughtStats) : undefined;
    return message;
  },
  fromAmino(object: QueryThoughtStatsResponseAmino): QueryThoughtStatsResponse {
    const message = createBaseQueryThoughtStatsResponse();
    if (object.thought_stats !== undefined && object.thought_stats !== null) {
      message.thoughtStats = ThoughtStats.fromAmino(object.thought_stats);
    }
    return message;
  },
  toAmino(message: QueryThoughtStatsResponse): QueryThoughtStatsResponseAmino {
    const obj: any = {};
    obj.thought_stats = message.thoughtStats ? ThoughtStats.toAmino(message.thoughtStats) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThoughtStatsResponseAminoMsg): QueryThoughtStatsResponse {
    return QueryThoughtStatsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThoughtStatsResponseProtoMsg): QueryThoughtStatsResponse {
    return QueryThoughtStatsResponse.decode(message.value);
  },
  toProto(message: QueryThoughtStatsResponse): Uint8Array {
    return QueryThoughtStatsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryThoughtStatsResponse): QueryThoughtStatsResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.QueryThoughtStatsResponse",
      value: QueryThoughtStatsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryThoughtsRequest(): QueryThoughtsRequest {
  return {};
}
export const QueryThoughtsRequest = {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsRequest",
  encode(_: QueryThoughtsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryThoughtsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryThoughtsRequest>): QueryThoughtsRequest {
    const message = createBaseQueryThoughtsRequest();
    return message;
  },
  fromAmino(_: QueryThoughtsRequestAmino): QueryThoughtsRequest {
    const message = createBaseQueryThoughtsRequest();
    return message;
  },
  toAmino(_: QueryThoughtsRequest): QueryThoughtsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryThoughtsRequestAminoMsg): QueryThoughtsRequest {
    return QueryThoughtsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThoughtsRequestProtoMsg): QueryThoughtsRequest {
    return QueryThoughtsRequest.decode(message.value);
  },
  toProto(message: QueryThoughtsRequest): Uint8Array {
    return QueryThoughtsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryThoughtsRequest): QueryThoughtsRequestProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsRequest",
      value: QueryThoughtsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryThoughtsResponse(): QueryThoughtsResponse {
  return {
    thoughts: []
  };
}
export const QueryThoughtsResponse = {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsResponse",
  encode(message: QueryThoughtsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.thoughts) {
      Thought.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryThoughtsResponse {
    return {
      thoughts: Array.isArray(object?.thoughts) ? object.thoughts.map((e: any) => Thought.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryThoughtsResponse>): QueryThoughtsResponse {
    const message = createBaseQueryThoughtsResponse();
    message.thoughts = object.thoughts?.map(e => Thought.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryThoughtsResponseAmino): QueryThoughtsResponse {
    const message = createBaseQueryThoughtsResponse();
    message.thoughts = object.thoughts?.map(e => Thought.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryThoughtsResponse): QueryThoughtsResponseAmino {
    const obj: any = {};
    if (message.thoughts) {
      obj.thoughts = message.thoughts.map(e => e ? Thought.toAmino(e) : undefined);
    } else {
      obj.thoughts = message.thoughts;
    }
    return obj;
  },
  fromAminoMsg(object: QueryThoughtsResponseAminoMsg): QueryThoughtsResponse {
    return QueryThoughtsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThoughtsResponseProtoMsg): QueryThoughtsResponse {
    return QueryThoughtsResponse.decode(message.value);
  },
  toProto(message: QueryThoughtsResponse): Uint8Array {
    return QueryThoughtsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryThoughtsResponse): QueryThoughtsResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsResponse",
      value: QueryThoughtsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryThoughtsStatsRequest(): QueryThoughtsStatsRequest {
  return {};
}
export const QueryThoughtsStatsRequest = {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsStatsRequest",
  encode(_: QueryThoughtsStatsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryThoughtsStatsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryThoughtsStatsRequest>): QueryThoughtsStatsRequest {
    const message = createBaseQueryThoughtsStatsRequest();
    return message;
  },
  fromAmino(_: QueryThoughtsStatsRequestAmino): QueryThoughtsStatsRequest {
    const message = createBaseQueryThoughtsStatsRequest();
    return message;
  },
  toAmino(_: QueryThoughtsStatsRequest): QueryThoughtsStatsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryThoughtsStatsRequestAminoMsg): QueryThoughtsStatsRequest {
    return QueryThoughtsStatsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThoughtsStatsRequestProtoMsg): QueryThoughtsStatsRequest {
    return QueryThoughtsStatsRequest.decode(message.value);
  },
  toProto(message: QueryThoughtsStatsRequest): Uint8Array {
    return QueryThoughtsStatsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryThoughtsStatsRequest): QueryThoughtsStatsRequestProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsStatsRequest",
      value: QueryThoughtsStatsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryThoughtsStatsResponse(): QueryThoughtsStatsResponse {
  return {
    thoughtsStats: []
  };
}
export const QueryThoughtsStatsResponse = {
  typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsStatsResponse",
  encode(message: QueryThoughtsStatsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.thoughtsStats) {
      ThoughtStats.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryThoughtsStatsResponse {
    return {
      thoughtsStats: Array.isArray(object?.thoughtsStats) ? object.thoughtsStats.map((e: any) => ThoughtStats.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryThoughtsStatsResponse>): QueryThoughtsStatsResponse {
    const message = createBaseQueryThoughtsStatsResponse();
    message.thoughtsStats = object.thoughtsStats?.map(e => ThoughtStats.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryThoughtsStatsResponseAmino): QueryThoughtsStatsResponse {
    const message = createBaseQueryThoughtsStatsResponse();
    message.thoughtsStats = object.thoughts_stats?.map(e => ThoughtStats.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryThoughtsStatsResponse): QueryThoughtsStatsResponseAmino {
    const obj: any = {};
    if (message.thoughtsStats) {
      obj.thoughts_stats = message.thoughtsStats.map(e => e ? ThoughtStats.toAmino(e) : undefined);
    } else {
      obj.thoughts_stats = message.thoughtsStats;
    }
    return obj;
  },
  fromAminoMsg(object: QueryThoughtsStatsResponseAminoMsg): QueryThoughtsStatsResponse {
    return QueryThoughtsStatsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThoughtsStatsResponseProtoMsg): QueryThoughtsStatsResponse {
    return QueryThoughtsStatsResponse.decode(message.value);
  },
  toProto(message: QueryThoughtsStatsResponse): Uint8Array {
    return QueryThoughtsStatsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryThoughtsStatsResponse): QueryThoughtsStatsResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.QueryThoughtsStatsResponse",
      value: QueryThoughtsStatsResponse.encode(message).finish()
    };
  }
};