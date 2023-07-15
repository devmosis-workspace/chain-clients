import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
  providers: Provider[];
  pagination?: PageResponse;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseSDKType {
  providers: ProviderSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
  auditor: string;
  owner: string;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestSDKType {
  auditor: string;
  owner: string;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
  pagination?: PageRequest;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
  owner: string;
  pagination?: PageRequest;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
  auditor: string;
  owner: string;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequestSDKType {
  auditor: string;
  owner: string;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
  auditor: string;
  pagination?: PageRequest;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequestSDKType {
  auditor: string;
  pagination?: PageRequestSDKType;
}
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    providers: [],
    pagination: undefined
  };
}
export const QueryProvidersResponse = {
  encode(message: QueryProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    auditor: "",
    owner: ""
  };
}
export const QueryProviderRequest = {
  encode(message: QueryProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): QueryProviderRequest {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<QueryProviderRequest>): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.auditor = object.auditor ?? "";
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseQueryAllProvidersAttributesRequest(): QueryAllProvidersAttributesRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllProvidersAttributesRequest = {
  encode(message: QueryAllProvidersAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllProvidersAttributesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllProvidersAttributesRequest>): QueryAllProvidersAttributesRequest {
    const message = createBaseQueryAllProvidersAttributesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryProviderAttributesRequest(): QueryProviderAttributesRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
export const QueryProviderAttributesRequest = {
  encode(message: QueryProviderAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProviderAttributesRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryProviderAttributesRequest>): QueryProviderAttributesRequest {
    const message = createBaseQueryProviderAttributesRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryProviderAuditorRequest(): QueryProviderAuditorRequest {
  return {
    auditor: "",
    owner: ""
  };
}
export const QueryProviderAuditorRequest = {
  encode(message: QueryProviderAuditorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): QueryProviderAuditorRequest {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<QueryProviderAuditorRequest>): QueryProviderAuditorRequest {
    const message = createBaseQueryProviderAuditorRequest();
    message.auditor = object.auditor ?? "";
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseQueryAuditorAttributesRequest(): QueryAuditorAttributesRequest {
  return {
    auditor: "",
    pagination: undefined
  };
}
export const QueryAuditorAttributesRequest = {
  encode(message: QueryAuditorAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuditorAttributesRequest {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAuditorAttributesRequest>): QueryAuditorAttributesRequest {
    const message = createBaseQueryAuditorAttributesRequest();
    message.auditor = object.auditor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};