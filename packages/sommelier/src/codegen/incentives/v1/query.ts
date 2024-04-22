import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is the request type for the QueryParams gRPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/incentives.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the QueryParams gRPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/incentives.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the QueryParams gRPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsRequest is the response type for the QueryParams gRPC method. */
export interface QueryParamsResponse {
  /** allocation parameters */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/incentives.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsRequest is the response type for the QueryParams gRPC method. */
export interface QueryParamsResponseAmino {
  /** allocation parameters */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/incentives.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsRequest is the response type for the QueryParams gRPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryAPYRequest is the request type for the QueryAPY gRPC method. */
export interface QueryAPYRequest {}
export interface QueryAPYRequestProtoMsg {
  typeUrl: "/incentives.v1.QueryAPYRequest";
  value: Uint8Array;
}
/** QueryAPYRequest is the request type for the QueryAPY gRPC method. */
export interface QueryAPYRequestAmino {}
export interface QueryAPYRequestAminoMsg {
  type: "/incentives.v1.QueryAPYRequest";
  value: QueryAPYRequestAmino;
}
/** QueryAPYRequest is the request type for the QueryAPY gRPC method. */
export interface QueryAPYRequestSDKType {}
/** QueryAPYRequest is the response type for the QueryAPY gRPC method. */
export interface QueryAPYResponse {
  apy: string;
}
export interface QueryAPYResponseProtoMsg {
  typeUrl: "/incentives.v1.QueryAPYResponse";
  value: Uint8Array;
}
/** QueryAPYRequest is the response type for the QueryAPY gRPC method. */
export interface QueryAPYResponseAmino {
  apy?: string;
}
export interface QueryAPYResponseAminoMsg {
  type: "/incentives.v1.QueryAPYResponse";
  value: QueryAPYResponseAmino;
}
/** QueryAPYRequest is the response type for the QueryAPY gRPC method. */
export interface QueryAPYResponseSDKType {
  apy: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/incentives.v1.QueryParamsRequest",
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
      typeUrl: "/incentives.v1.QueryParamsRequest",
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
  typeUrl: "/incentives.v1.QueryParamsResponse",
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
      typeUrl: "/incentives.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAPYRequest(): QueryAPYRequest {
  return {};
}
export const QueryAPYRequest = {
  typeUrl: "/incentives.v1.QueryAPYRequest",
  encode(_: QueryAPYRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAPYRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAPYRequest>): QueryAPYRequest {
    const message = createBaseQueryAPYRequest();
    return message;
  },
  fromAmino(_: QueryAPYRequestAmino): QueryAPYRequest {
    const message = createBaseQueryAPYRequest();
    return message;
  },
  toAmino(_: QueryAPYRequest): QueryAPYRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAPYRequestAminoMsg): QueryAPYRequest {
    return QueryAPYRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAPYRequestProtoMsg): QueryAPYRequest {
    return QueryAPYRequest.decode(message.value);
  },
  toProto(message: QueryAPYRequest): Uint8Array {
    return QueryAPYRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAPYRequest): QueryAPYRequestProtoMsg {
    return {
      typeUrl: "/incentives.v1.QueryAPYRequest",
      value: QueryAPYRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAPYResponse(): QueryAPYResponse {
  return {
    apy: ""
  };
}
export const QueryAPYResponse = {
  typeUrl: "/incentives.v1.QueryAPYResponse",
  encode(message: QueryAPYResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apy !== "") {
      writer.uint32(10).string(message.apy);
    }
    return writer;
  },
  fromJSON(object: any): QueryAPYResponse {
    return {
      apy: isSet(object.apy) ? String(object.apy) : ""
    };
  },
  fromPartial(object: Partial<QueryAPYResponse>): QueryAPYResponse {
    const message = createBaseQueryAPYResponse();
    message.apy = object.apy ?? "";
    return message;
  },
  fromAmino(object: QueryAPYResponseAmino): QueryAPYResponse {
    const message = createBaseQueryAPYResponse();
    if (object.apy !== undefined && object.apy !== null) {
      message.apy = object.apy;
    }
    return message;
  },
  toAmino(message: QueryAPYResponse): QueryAPYResponseAmino {
    const obj: any = {};
    obj.apy = message.apy;
    return obj;
  },
  fromAminoMsg(object: QueryAPYResponseAminoMsg): QueryAPYResponse {
    return QueryAPYResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAPYResponseProtoMsg): QueryAPYResponse {
    return QueryAPYResponse.decode(message.value);
  },
  toProto(message: QueryAPYResponse): Uint8Array {
    return QueryAPYResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAPYResponse): QueryAPYResponseProtoMsg {
    return {
      typeUrl: "/incentives.v1.QueryAPYResponse",
      value: QueryAPYResponse.encode(message).finish()
    };
  }
};