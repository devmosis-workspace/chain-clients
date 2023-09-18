import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Super, SuperAmino, SuperSDKType } from "./guardian";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequest {
  /** pagination defines an optional pagination for the request */
  pagination: PageRequest;
}
export interface QuerySupersRequestProtoMsg {
  typeUrl: "/irishub.guardian.QuerySupersRequest";
  value: Uint8Array;
}
/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequestAmino {
  /** pagination defines an optional pagination for the request */
  pagination?: PageRequestAmino;
}
export interface QuerySupersRequestAminoMsg {
  type: "/irishub.guardian.QuerySupersRequest";
  value: QuerySupersRequestAmino;
}
/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequestSDKType {
  pagination: PageRequestSDKType;
}
/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponse {
  supers: Super[];
  pagination: PageResponse;
}
export interface QuerySupersResponseProtoMsg {
  typeUrl: "/irishub.guardian.QuerySupersResponse";
  value: Uint8Array;
}
/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponseAmino {
  supers: SuperAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySupersResponseAminoMsg {
  type: "/irishub.guardian.QuerySupersResponse";
  value: QuerySupersResponseAmino;
}
/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponseSDKType {
  supers: SuperSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQuerySupersRequest(): QuerySupersRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QuerySupersRequest = {
  typeUrl: "/irishub.guardian.QuerySupersRequest",
  encode(message: QuerySupersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySupersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySupersRequest>): QuerySupersRequest {
    const message = createBaseQuerySupersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySupersRequestAmino): QuerySupersRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QuerySupersRequest): QuerySupersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupersRequestAminoMsg): QuerySupersRequest {
    return QuerySupersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupersRequestProtoMsg): QuerySupersRequest {
    return QuerySupersRequest.decode(message.value);
  },
  toProto(message: QuerySupersRequest): Uint8Array {
    return QuerySupersRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupersRequest): QuerySupersRequestProtoMsg {
    return {
      typeUrl: "/irishub.guardian.QuerySupersRequest",
      value: QuerySupersRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySupersResponse(): QuerySupersResponse {
  return {
    supers: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QuerySupersResponse = {
  typeUrl: "/irishub.guardian.QuerySupersResponse",
  encode(message: QuerySupersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supers) {
      Super.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySupersResponse {
    return {
      supers: Array.isArray(object?.supers) ? object.supers.map((e: any) => Super.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySupersResponse>): QuerySupersResponse {
    const message = createBaseQuerySupersResponse();
    message.supers = object.supers?.map(e => Super.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySupersResponseAmino): QuerySupersResponse {
    return {
      supers: Array.isArray(object?.supers) ? object.supers.map((e: any) => Super.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QuerySupersResponse): QuerySupersResponseAmino {
    const obj: any = {};
    if (message.supers) {
      obj.supers = message.supers.map(e => e ? Super.toAmino(e) : undefined);
    } else {
      obj.supers = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupersResponseAminoMsg): QuerySupersResponse {
    return QuerySupersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupersResponseProtoMsg): QuerySupersResponse {
    return QuerySupersResponse.decode(message.value);
  },
  toProto(message: QuerySupersResponse): Uint8Array {
    return QuerySupersResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupersResponse): QuerySupersResponseProtoMsg {
    return {
      typeUrl: "/irishub.guardian.QuerySupersResponse",
      value: QuerySupersResponse.encode(message).finish()
    };
  }
};