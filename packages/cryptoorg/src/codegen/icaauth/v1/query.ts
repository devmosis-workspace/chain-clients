import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/chainmain.icaauth.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/chainmain.icaauth.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/chainmain.icaauth.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/chainmain.icaauth.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryInterchainAccountAddressRequest defines the request for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressRequest {
  connectionId: string;
  owner: string;
}
export interface QueryInterchainAccountAddressRequestProtoMsg {
  typeUrl: "/chainmain.icaauth.v1.QueryInterchainAccountAddressRequest";
  value: Uint8Array;
}
/** QueryInterchainAccountAddressRequest defines the request for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressRequestAmino {
  connectionId: string;
  owner: string;
}
export interface QueryInterchainAccountAddressRequestAminoMsg {
  type: "/chainmain.icaauth.v1.QueryInterchainAccountAddressRequest";
  value: QueryInterchainAccountAddressRequestAmino;
}
/** QueryInterchainAccountAddressRequest defines the request for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressRequestSDKType {
  connectionId: string;
  owner: string;
}
/** QueryInterchainAccountAddressResponse defines the response for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressResponse {
  interchainAccountAddress: string;
}
export interface QueryInterchainAccountAddressResponseProtoMsg {
  typeUrl: "/chainmain.icaauth.v1.QueryInterchainAccountAddressResponse";
  value: Uint8Array;
}
/** QueryInterchainAccountAddressResponse defines the response for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressResponseAmino {
  interchainAccountAddress: string;
}
export interface QueryInterchainAccountAddressResponseAminoMsg {
  type: "/chainmain.icaauth.v1.QueryInterchainAccountAddressResponse";
  value: QueryInterchainAccountAddressResponseAmino;
}
/** QueryInterchainAccountAddressResponse defines the response for the InterchainAccountAddress query. */
export interface QueryInterchainAccountAddressResponseSDKType {
  interchainAccountAddress: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/chainmain.icaauth.v1.QueryParamsRequest",
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
      typeUrl: "/chainmain.icaauth.v1.QueryParamsRequest",
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
  typeUrl: "/chainmain.icaauth.v1.QueryParamsResponse",
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
      typeUrl: "/chainmain.icaauth.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInterchainAccountAddressRequest(): QueryInterchainAccountAddressRequest {
  return {
    connectionId: "",
    owner: ""
  };
}
export const QueryInterchainAccountAddressRequest = {
  typeUrl: "/chainmain.icaauth.v1.QueryInterchainAccountAddressRequest",
  encode(message: QueryInterchainAccountAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): QueryInterchainAccountAddressRequest {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<QueryInterchainAccountAddressRequest>): QueryInterchainAccountAddressRequest {
    const message = createBaseQueryInterchainAccountAddressRequest();
    message.connectionId = object.connectionId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountAddressRequestAmino): QueryInterchainAccountAddressRequest {
    return {
      connectionId: object.connectionId,
      owner: object.owner
    };
  },
  toAmino(message: QueryInterchainAccountAddressRequest): QueryInterchainAccountAddressRequestAmino {
    const obj: any = {};
    obj.connectionId = message.connectionId;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountAddressRequestAminoMsg): QueryInterchainAccountAddressRequest {
    return QueryInterchainAccountAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterchainAccountAddressRequestProtoMsg): QueryInterchainAccountAddressRequest {
    return QueryInterchainAccountAddressRequest.decode(message.value);
  },
  toProto(message: QueryInterchainAccountAddressRequest): Uint8Array {
    return QueryInterchainAccountAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountAddressRequest): QueryInterchainAccountAddressRequestProtoMsg {
    return {
      typeUrl: "/chainmain.icaauth.v1.QueryInterchainAccountAddressRequest",
      value: QueryInterchainAccountAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInterchainAccountAddressResponse(): QueryInterchainAccountAddressResponse {
  return {
    interchainAccountAddress: ""
  };
}
export const QueryInterchainAccountAddressResponse = {
  typeUrl: "/chainmain.icaauth.v1.QueryInterchainAccountAddressResponse",
  encode(message: QueryInterchainAccountAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryInterchainAccountAddressResponse {
    return {
      interchainAccountAddress: isSet(object.interchainAccountAddress) ? String(object.interchainAccountAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryInterchainAccountAddressResponse>): QueryInterchainAccountAddressResponse {
    const message = createBaseQueryInterchainAccountAddressResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountAddressResponseAmino): QueryInterchainAccountAddressResponse {
    return {
      interchainAccountAddress: object.interchainAccountAddress
    };
  },
  toAmino(message: QueryInterchainAccountAddressResponse): QueryInterchainAccountAddressResponseAmino {
    const obj: any = {};
    obj.interchainAccountAddress = message.interchainAccountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountAddressResponseAminoMsg): QueryInterchainAccountAddressResponse {
    return QueryInterchainAccountAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterchainAccountAddressResponseProtoMsg): QueryInterchainAccountAddressResponse {
    return QueryInterchainAccountAddressResponse.decode(message.value);
  },
  toProto(message: QueryInterchainAccountAddressResponse): Uint8Array {
    return QueryInterchainAccountAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountAddressResponse): QueryInterchainAccountAddressResponseProtoMsg {
    return {
      typeUrl: "/chainmain.icaauth.v1.QueryInterchainAccountAddressResponse",
      value: QueryInterchainAccountAddressResponse.encode(message).finish()
    };
  }
};