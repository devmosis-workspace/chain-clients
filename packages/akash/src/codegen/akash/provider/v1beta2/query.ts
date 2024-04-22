import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderAmino, ProviderSDKType } from "./provider";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequest {
  pagination?: PageRequest;
}
export interface QueryProvidersRequestProtoMsg {
  typeUrl: "/akash.provider.v1beta2.QueryProvidersRequest";
  value: Uint8Array;
}
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryProvidersRequestAminoMsg {
  type: "/akash.provider.v1beta2.QueryProvidersRequest";
  value: QueryProvidersRequestAmino;
}
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
  providers: Provider[];
  pagination?: PageResponse;
}
export interface QueryProvidersResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta2.QueryProvidersResponse";
  value: Uint8Array;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseAmino {
  providers?: ProviderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryProvidersResponseAminoMsg {
  type: "/akash.provider.v1beta2.QueryProvidersResponse";
  value: QueryProvidersResponseAmino;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseSDKType {
  providers: ProviderSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
  owner: string;
}
export interface QueryProviderRequestProtoMsg {
  typeUrl: "/akash.provider.v1beta2.QueryProviderRequest";
  value: Uint8Array;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestAmino {
  owner?: string;
}
export interface QueryProviderRequestAminoMsg {
  type: "/akash.provider.v1beta2.QueryProviderRequest";
  value: QueryProviderRequestAmino;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestSDKType {
  owner: string;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponse {
  provider: Provider;
}
export interface QueryProviderResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta2.QueryProviderResponse";
  value: Uint8Array;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponseAmino {
  provider?: ProviderAmino;
}
export interface QueryProviderResponseAminoMsg {
  type: "/akash.provider.v1beta2.QueryProviderResponse";
  value: QueryProviderResponseAmino;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponseSDKType {
  provider: ProviderSDKType;
}
function createBaseQueryProvidersRequest(): QueryProvidersRequest {
  return {
    pagination: undefined
  };
}
export const QueryProvidersRequest = {
  typeUrl: "/akash.provider.v1beta2.QueryProvidersRequest",
  encode(message: QueryProvidersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProvidersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryProvidersRequest>): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProvidersRequestAmino): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProvidersRequest): QueryProvidersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
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
      typeUrl: "/akash.provider.v1beta2.QueryProvidersRequest",
      value: QueryProvidersRequest.encode(message).finish()
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
  typeUrl: "/akash.provider.v1beta2.QueryProvidersResponse",
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
      obj.providers = [];
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
      typeUrl: "/akash.provider.v1beta2.QueryProvidersResponse",
      value: QueryProvidersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    owner: ""
  };
}
export const QueryProviderRequest = {
  typeUrl: "/akash.provider.v1beta2.QueryProviderRequest",
  encode(message: QueryProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): QueryProviderRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<QueryProviderRequest>): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryProviderRequestAmino): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryProviderRequest): QueryProviderRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
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
      typeUrl: "/akash.provider.v1beta2.QueryProviderRequest",
      value: QueryProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProviderResponse(): QueryProviderResponse {
  return {
    provider: Provider.fromPartial({})
  };
}
export const QueryProviderResponse = {
  typeUrl: "/akash.provider.v1beta2.QueryProviderResponse",
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
      typeUrl: "/akash.provider.v1beta2.QueryProviderResponse",
      value: QueryProviderResponse.encode(message).finish()
    };
  }
};