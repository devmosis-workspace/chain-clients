import { ParamChange, ParamChangeAmino, ParamChangeSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  /** subspace defines the module to query the parameter for. */
  subspace: string;
  /** key defines the key of the parameter in the subspace. */
  key: string;
}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
  /** subspace defines the module to query the parameter for. */
  subspace: string;
  /** key defines the key of the parameter in the subspace. */
  key: string;
}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
  subspace: string;
  key: string;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** param defines the queried parameter. */
  param: ParamChange;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** param defines the queried parameter. */
  param?: ParamChangeAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  param: ParamChangeSDKType;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesRequest {}
export interface QuerySubspacesRequestProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest";
  value: Uint8Array;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesRequestAmino {}
export interface QuerySubspacesRequestAminoMsg {
  type: "cosmos-sdk/QuerySubspacesRequest";
  value: QuerySubspacesRequestAmino;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesRequestSDKType {}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesResponse {
  subspaces: Subspace[];
}
export interface QuerySubspacesResponseProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse";
  value: Uint8Array;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesResponseAmino {
  subspaces: SubspaceAmino[];
}
export interface QuerySubspacesResponseAminoMsg {
  type: "cosmos-sdk/QuerySubspacesResponse";
  value: QuerySubspacesResponseAmino;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesResponseSDKType {
  subspaces: SubspaceSDKType[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface Subspace {
  subspace: string;
  keys: string[];
}
export interface SubspaceProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.Subspace";
  value: Uint8Array;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SubspaceAmino {
  subspace: string;
  keys: string[];
}
export interface SubspaceAminoMsg {
  type: "cosmos-sdk/Subspace";
  value: SubspaceAmino;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface SubspaceSDKType {
  subspace: string;
  keys: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    subspace: "",
    key: ""
  };
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
  encode(message: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsRequest {
    return {
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      key: isSet(object.key) ? String(object.key) : ""
    };
  },
  fromPartial(object: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest {
    return {
      subspace: object.subspace,
      key: object.key
    };
  },
  toAmino(message: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    param: ParamChange.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.param !== undefined) {
      ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      param: isSet(object.param) ? ParamChange.fromJSON(object.param) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.param = object.param !== undefined && object.param !== null ? ParamChange.fromPartial(object.param) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      param: object?.param ? ParamChange.fromAmino(object.param) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.param = message.param ? ParamChange.toAmino(message.param) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubspacesRequest(): QuerySubspacesRequest {
  return {};
}
export const QuerySubspacesRequest = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
  encode(_: QuerySubspacesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QuerySubspacesRequest {
    return {};
  },
  fromPartial(_: Partial<QuerySubspacesRequest>): QuerySubspacesRequest {
    const message = createBaseQuerySubspacesRequest();
    return message;
  },
  fromAmino(_: QuerySubspacesRequestAmino): QuerySubspacesRequest {
    return {};
  },
  toAmino(_: QuerySubspacesRequest): QuerySubspacesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySubspacesRequestAminoMsg): QuerySubspacesRequest {
    return QuerySubspacesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySubspacesRequest",
      value: QuerySubspacesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySubspacesRequestProtoMsg): QuerySubspacesRequest {
    return QuerySubspacesRequest.decode(message.value);
  },
  toProto(message: QuerySubspacesRequest): Uint8Array {
    return QuerySubspacesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
      value: QuerySubspacesRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubspacesResponse(): QuerySubspacesResponse {
  return {
    subspaces: []
  };
}
export const QuerySubspacesResponse = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
  encode(message: QuerySubspacesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subspaces) {
      Subspace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubspacesResponse {
    return {
      subspaces: Array.isArray(object?.subspaces) ? object.subspaces.map((e: any) => Subspace.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySubspacesResponse>): QuerySubspacesResponse {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces = object.subspaces?.map(e => Subspace.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubspacesResponseAmino): QuerySubspacesResponse {
    return {
      subspaces: Array.isArray(object?.subspaces) ? object.subspaces.map((e: any) => Subspace.fromAmino(e)) : []
    };
  },
  toAmino(message: QuerySubspacesResponse): QuerySubspacesResponseAmino {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map(e => e ? Subspace.toAmino(e) : undefined);
    } else {
      obj.subspaces = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubspacesResponseAminoMsg): QuerySubspacesResponse {
    return QuerySubspacesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySubspacesResponse",
      value: QuerySubspacesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySubspacesResponseProtoMsg): QuerySubspacesResponse {
    return QuerySubspacesResponse.decode(message.value);
  },
  toProto(message: QuerySubspacesResponse): Uint8Array {
    return QuerySubspacesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
      value: QuerySubspacesResponse.encode(message).finish()
    };
  }
};
function createBaseSubspace(): Subspace {
  return {
    subspace: "",
    keys: []
  };
}
export const Subspace = {
  typeUrl: "/cosmos.params.v1beta1.Subspace",
  encode(message: Subspace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    for (const v of message.keys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Subspace {
    return {
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Subspace>): Subspace {
    const message = createBaseSubspace();
    message.subspace = object.subspace ?? "";
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SubspaceAmino): Subspace {
    return {
      subspace: object.subspace,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => e) : []
    };
  },
  toAmino(message: Subspace): SubspaceAmino {
    const obj: any = {};
    obj.subspace = message.subspace;
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromAminoMsg(object: SubspaceAminoMsg): Subspace {
    return Subspace.fromAmino(object.value);
  },
  toAminoMsg(message: Subspace): SubspaceAminoMsg {
    return {
      type: "cosmos-sdk/Subspace",
      value: Subspace.toAmino(message)
    };
  },
  fromProtoMsg(message: SubspaceProtoMsg): Subspace {
    return Subspace.decode(message.value);
  },
  toProto(message: Subspace): Uint8Array {
    return Subspace.encode(message).finish();
  },
  toProtoMsg(message: Subspace): SubspaceProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.Subspace",
      value: Subspace.encode(message).finish()
    };
  }
};