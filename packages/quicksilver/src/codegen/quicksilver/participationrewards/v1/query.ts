import { Params, ParamsAmino, ParamsSDKType } from "./participationrewards";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/quicksilver.participationrewards.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/quicksilver.participationrewards.v1.QueryParamsRequest";
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
  typeUrl: "/quicksilver.participationrewards.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/quicksilver.participationrewards.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryProtocolDataRequest is the request type for querying Protocol Data. */
export interface QueryProtocolDataRequest {
  type: string;
  key: string;
}
export interface QueryProtocolDataRequestProtoMsg {
  typeUrl: "/quicksilver.participationrewards.v1.QueryProtocolDataRequest";
  value: Uint8Array;
}
/** QueryProtocolDataRequest is the request type for querying Protocol Data. */
export interface QueryProtocolDataRequestAmino {
  type?: string;
  key?: string;
}
export interface QueryProtocolDataRequestAminoMsg {
  type: "/quicksilver.participationrewards.v1.QueryProtocolDataRequest";
  value: QueryProtocolDataRequestAmino;
}
/** QueryProtocolDataRequest is the request type for querying Protocol Data. */
export interface QueryProtocolDataRequestSDKType {
  type: string;
  key: string;
}
/** QueryProtocolDataResponse is the response type for querying Protocol Data. */
export interface QueryProtocolDataResponse {
  /** data defines the underlying protocol data. */
  data: Uint8Array[];
}
export interface QueryProtocolDataResponseProtoMsg {
  typeUrl: "/quicksilver.participationrewards.v1.QueryProtocolDataResponse";
  value: Uint8Array;
}
/** QueryProtocolDataResponse is the response type for querying Protocol Data. */
export interface QueryProtocolDataResponseAmino {
  /** data defines the underlying protocol data. */
  data?: string[];
}
export interface QueryProtocolDataResponseAminoMsg {
  type: "/quicksilver.participationrewards.v1.QueryProtocolDataResponse";
  value: QueryProtocolDataResponseAmino;
}
/** QueryProtocolDataResponse is the response type for querying Protocol Data. */
export interface QueryProtocolDataResponseSDKType {
  data: Uint8Array[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/quicksilver.participationrewards.v1.QueryParamsRequest",
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
      typeUrl: "/quicksilver.participationrewards.v1.QueryParamsRequest",
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
  typeUrl: "/quicksilver.participationrewards.v1.QueryParamsResponse",
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
      typeUrl: "/quicksilver.participationrewards.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProtocolDataRequest(): QueryProtocolDataRequest {
  return {
    type: "",
    key: ""
  };
}
export const QueryProtocolDataRequest = {
  typeUrl: "/quicksilver.participationrewards.v1.QueryProtocolDataRequest",
  encode(message: QueryProtocolDataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  fromJSON(object: any): QueryProtocolDataRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      key: isSet(object.key) ? String(object.key) : ""
    };
  },
  fromPartial(object: Partial<QueryProtocolDataRequest>): QueryProtocolDataRequest {
    const message = createBaseQueryProtocolDataRequest();
    message.type = object.type ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: QueryProtocolDataRequestAmino): QueryProtocolDataRequest {
    const message = createBaseQueryProtocolDataRequest();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryProtocolDataRequest): QueryProtocolDataRequestAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg(object: QueryProtocolDataRequestAminoMsg): QueryProtocolDataRequest {
    return QueryProtocolDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProtocolDataRequestProtoMsg): QueryProtocolDataRequest {
    return QueryProtocolDataRequest.decode(message.value);
  },
  toProto(message: QueryProtocolDataRequest): Uint8Array {
    return QueryProtocolDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProtocolDataRequest): QueryProtocolDataRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.QueryProtocolDataRequest",
      value: QueryProtocolDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProtocolDataResponse(): QueryProtocolDataResponse {
  return {
    data: []
  };
}
export const QueryProtocolDataResponse = {
  typeUrl: "/quicksilver.participationrewards.v1.QueryProtocolDataResponse",
  encode(message: QueryProtocolDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryProtocolDataResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<QueryProtocolDataResponse>): QueryProtocolDataResponse {
    const message = createBaseQueryProtocolDataResponse();
    message.data = object.data?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryProtocolDataResponseAmino): QueryProtocolDataResponse {
    const message = createBaseQueryProtocolDataResponse();
    message.data = object.data?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: QueryProtocolDataResponse): QueryProtocolDataResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => base64FromBytes(e));
    } else {
      obj.data = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryProtocolDataResponseAminoMsg): QueryProtocolDataResponse {
    return QueryProtocolDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProtocolDataResponseProtoMsg): QueryProtocolDataResponse {
    return QueryProtocolDataResponse.decode(message.value);
  },
  toProto(message: QueryProtocolDataResponse): Uint8Array {
    return QueryProtocolDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProtocolDataResponse): QueryProtocolDataResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.QueryProtocolDataResponse",
      value: QueryProtocolDataResponse.encode(message).finish()
    };
  }
};