import { Params, ParamsAmino, ParamsSDKType, State, StateAmino, StateSDKType } from "./vbank";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/agoric.vbank.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/agoric.vbank.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/agoric.vbank.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/agoric.vbank.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryStateRequest is the request type for the Query/State RPC method. */
export interface QueryStateRequest {}
export interface QueryStateRequestProtoMsg {
  typeUrl: "/agoric.vbank.QueryStateRequest";
  value: Uint8Array;
}
/** QueryStateRequest is the request type for the Query/State RPC method. */
export interface QueryStateRequestAmino {}
export interface QueryStateRequestAminoMsg {
  type: "/agoric.vbank.QueryStateRequest";
  value: QueryStateRequestAmino;
}
/** QueryStateRequest is the request type for the Query/State RPC method. */
export interface QueryStateRequestSDKType {}
/** QueryStateResponse is the response type for the Query/State RPC method. */
export interface QueryStateResponse {
  /** state defines the parameters of the module. */
  state: State;
}
export interface QueryStateResponseProtoMsg {
  typeUrl: "/agoric.vbank.QueryStateResponse";
  value: Uint8Array;
}
/** QueryStateResponse is the response type for the Query/State RPC method. */
export interface QueryStateResponseAmino {
  /** state defines the parameters of the module. */
  state?: StateAmino;
}
export interface QueryStateResponseAminoMsg {
  type: "/agoric.vbank.QueryStateResponse";
  value: QueryStateResponseAmino;
}
/** QueryStateResponse is the response type for the Query/State RPC method. */
export interface QueryStateResponseSDKType {
  state: StateSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/agoric.vbank.QueryParamsRequest",
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
      typeUrl: "/agoric.vbank.QueryParamsRequest",
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
  typeUrl: "/agoric.vbank.QueryParamsResponse",
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
      typeUrl: "/agoric.vbank.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStateRequest(): QueryStateRequest {
  return {};
}
export const QueryStateRequest = {
  typeUrl: "/agoric.vbank.QueryStateRequest",
  encode(_: QueryStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryStateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryStateRequest>): QueryStateRequest {
    const message = createBaseQueryStateRequest();
    return message;
  },
  fromAmino(_: QueryStateRequestAmino): QueryStateRequest {
    return {};
  },
  toAmino(_: QueryStateRequest): QueryStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryStateRequestAminoMsg): QueryStateRequest {
    return QueryStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStateRequestProtoMsg): QueryStateRequest {
    return QueryStateRequest.decode(message.value);
  },
  toProto(message: QueryStateRequest): Uint8Array {
    return QueryStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStateRequest): QueryStateRequestProtoMsg {
    return {
      typeUrl: "/agoric.vbank.QueryStateRequest",
      value: QueryStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStateResponse(): QueryStateResponse {
  return {
    state: State.fromPartial({})
  };
}
export const QueryStateResponse = {
  typeUrl: "/agoric.vbank.QueryStateResponse",
  encode(message: QueryStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryStateResponse {
    return {
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QueryStateResponse>): QueryStateResponse {
    const message = createBaseQueryStateResponse();
    message.state = object.state !== undefined && object.state !== null ? State.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryStateResponseAmino): QueryStateResponse {
    return {
      state: object?.state ? State.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: QueryStateResponse): QueryStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? State.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStateResponseAminoMsg): QueryStateResponse {
    return QueryStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStateResponseProtoMsg): QueryStateResponse {
    return QueryStateResponse.decode(message.value);
  },
  toProto(message: QueryStateResponse): Uint8Array {
    return QueryStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStateResponse): QueryStateResponseProtoMsg {
    return {
      typeUrl: "/agoric.vbank.QueryStateResponse",
      value: QueryStateResponse.encode(message).finish()
    };
  }
};