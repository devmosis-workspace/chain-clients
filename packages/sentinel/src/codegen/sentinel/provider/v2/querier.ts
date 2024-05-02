import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Status, statusFromJSON } from "../../types/v1/status";
import { Provider, ProviderAmino, ProviderSDKType } from "./provider";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryProvidersRequest {
  pagination?: PageRequest;
  status: Status;
}
export interface QueryProvidersRequestProtoMsg {
  typeUrl: "/sentinel.provider.v2.QueryProvidersRequest";
  value: Uint8Array;
}
export interface QueryProvidersRequestAmino {
  pagination?: PageRequestAmino;
  status?: Status;
}
export interface QueryProvidersRequestAminoMsg {
  type: "/sentinel.provider.v2.QueryProvidersRequest";
  value: QueryProvidersRequestAmino;
}
export interface QueryProvidersRequestSDKType {
  pagination?: PageRequestSDKType;
  status: Status;
}
export interface QueryProviderRequest {
  address: string;
}
export interface QueryProviderRequestProtoMsg {
  typeUrl: "/sentinel.provider.v2.QueryProviderRequest";
  value: Uint8Array;
}
export interface QueryProviderRequestAmino {
  address?: string;
}
export interface QueryProviderRequestAminoMsg {
  type: "/sentinel.provider.v2.QueryProviderRequest";
  value: QueryProviderRequestAmino;
}
export interface QueryProviderRequestSDKType {
  address: string;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sentinel.provider.v2.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sentinel.provider.v2.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryProvidersResponse {
  providers: Provider[];
  pagination?: PageResponse;
}
export interface QueryProvidersResponseProtoMsg {
  typeUrl: "/sentinel.provider.v2.QueryProvidersResponse";
  value: Uint8Array;
}
export interface QueryProvidersResponseAmino {
  providers?: ProviderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryProvidersResponseAminoMsg {
  type: "/sentinel.provider.v2.QueryProvidersResponse";
  value: QueryProvidersResponseAmino;
}
export interface QueryProvidersResponseSDKType {
  providers: ProviderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryProviderResponse {
  provider: Provider;
}
export interface QueryProviderResponseProtoMsg {
  typeUrl: "/sentinel.provider.v2.QueryProviderResponse";
  value: Uint8Array;
}
export interface QueryProviderResponseAmino {
  provider?: ProviderAmino;
}
export interface QueryProviderResponseAminoMsg {
  type: "/sentinel.provider.v2.QueryProviderResponse";
  value: QueryProviderResponseAmino;
}
export interface QueryProviderResponseSDKType {
  provider: ProviderSDKType;
}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sentinel.provider.v2.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sentinel.provider.v2.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryProvidersRequest(): QueryProvidersRequest {
  return {
    pagination: undefined,
    status: 0
  };
}
export const QueryProvidersRequest = {
  typeUrl: "/sentinel.provider.v2.QueryProvidersRequest",
  encode(message: QueryProvidersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): QueryProvidersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<QueryProvidersRequest>): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: QueryProvidersRequestAmino): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryProvidersRequest): QueryProvidersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QueryProvidersRequestAminoMsg): QueryProvidersRequest {
    return QueryProvidersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProvidersRequestProtoMsg): QueryProvidersRequest {
    return QueryProvidersRequest.decode(message.value);
  },
  toProto(message: QueryProvidersRequest): Uint8Array {
    return QueryProvidersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersRequest): QueryProvidersRequestProtoMsg {
    return {
      typeUrl: "/sentinel.provider.v2.QueryProvidersRequest",
      value: QueryProvidersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    address: ""
  };
}
export const QueryProviderRequest = {
  typeUrl: "/sentinel.provider.v2.QueryProviderRequest",
  encode(message: QueryProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryProviderRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryProviderRequest>): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryProviderRequestAmino): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryProviderRequest): QueryProviderRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryProviderRequestAminoMsg): QueryProviderRequest {
    return QueryProviderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderRequestProtoMsg): QueryProviderRequest {
    return QueryProviderRequest.decode(message.value);
  },
  toProto(message: QueryProviderRequest): Uint8Array {
    return QueryProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderRequest): QueryProviderRequestProtoMsg {
    return {
      typeUrl: "/sentinel.provider.v2.QueryProviderRequest",
      value: QueryProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/sentinel.provider.v2.QueryParamsRequest",
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
      typeUrl: "/sentinel.provider.v2.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    providers: [],
    pagination: undefined
  };
}
export const QueryProvidersResponse = {
  typeUrl: "/sentinel.provider.v2.QueryProvidersResponse",
  encode(message: QueryProvidersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryProvidersResponse>): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProvidersResponseAmino): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map(e => Provider.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProvidersResponse): QueryProvidersResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toAmino(e) : undefined);
    } else {
      obj.providers = message.providers;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProvidersResponseAminoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProvidersResponseProtoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.decode(message.value);
  },
  toProto(message: QueryProvidersResponse): Uint8Array {
    return QueryProvidersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersResponse): QueryProvidersResponseProtoMsg {
    return {
      typeUrl: "/sentinel.provider.v2.QueryProvidersResponse",
      value: QueryProvidersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProviderResponse(): QueryProviderResponse {
  return {
    provider: Provider.fromPartial({})
  };
}
export const QueryProviderResponse = {
  typeUrl: "/sentinel.provider.v2.QueryProviderResponse",
  encode(message: QueryProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== undefined) {
      Provider.encode(message.provider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProviderResponse {
    return {
      provider: isSet(object.provider) ? Provider.fromJSON(object.provider) : undefined
    };
  },
  fromPartial(object: Partial<QueryProviderResponse>): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
    message.provider = object.provider !== undefined && object.provider !== null ? Provider.fromPartial(object.provider) : undefined;
    return message;
  },
  fromAmino(object: QueryProviderResponseAmino): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = Provider.fromAmino(object.provider);
    }
    return message;
  },
  toAmino(message: QueryProviderResponse): QueryProviderResponseAmino {
    const obj: any = {};
    obj.provider = message.provider ? Provider.toAmino(message.provider) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProviderResponseAminoMsg): QueryProviderResponse {
    return QueryProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderResponseProtoMsg): QueryProviderResponse {
    return QueryProviderResponse.decode(message.value);
  },
  toProto(message: QueryProviderResponse): Uint8Array {
    return QueryProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderResponse): QueryProviderResponseProtoMsg {
    return {
      typeUrl: "/sentinel.provider.v2.QueryProviderResponse",
      value: QueryProviderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/sentinel.provider.v2.QueryParamsResponse",
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
      typeUrl: "/sentinel.provider.v2.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};