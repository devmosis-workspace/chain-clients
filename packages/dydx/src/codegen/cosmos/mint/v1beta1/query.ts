import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
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
  typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequest {}
export interface QueryInflationRequestProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest";
  value: Uint8Array;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequestAmino {}
export interface QueryInflationRequestAminoMsg {
  type: "cosmos-sdk/QueryInflationRequest";
  value: QueryInflationRequestAmino;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequestSDKType {}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponse {
  /** inflation is the current minting inflation value. */
  inflation: Uint8Array;
}
export interface QueryInflationResponseProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse";
  value: Uint8Array;
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponseAmino {
  /** inflation is the current minting inflation value. */
  inflation: Uint8Array;
}
export interface QueryInflationResponseAminoMsg {
  type: "cosmos-sdk/QueryInflationResponse";
  value: QueryInflationResponseAmino;
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponseSDKType {
  inflation: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {}
export interface QueryAnnualProvisionsRequestProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest";
  value: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestAmino {}
export interface QueryAnnualProvisionsRequestAminoMsg {
  type: "cosmos-sdk/QueryAnnualProvisionsRequest";
  value: QueryAnnualProvisionsRequestAmino;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestSDKType {}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
  /** annual_provisions is the current minting annual provisions value. */
  annualProvisions: Uint8Array;
}
export interface QueryAnnualProvisionsResponseProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse";
  value: Uint8Array;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseAmino {
  /** annual_provisions is the current minting annual provisions value. */
  annual_provisions: Uint8Array;
}
export interface QueryAnnualProvisionsResponseAminoMsg {
  type: "cosmos-sdk/QueryAnnualProvisionsResponse";
  value: QueryAnnualProvisionsResponseAmino;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseSDKType {
  annual_provisions: Uint8Array;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest",
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
      typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest",
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
  typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse",
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
      typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInflationRequest(): QueryInflationRequest {
  return {};
}
export const QueryInflationRequest = {
  typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest",
  encode(_: QueryInflationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryInflationRequest {
    return {};
  },
  fromPartial(_: Partial<QueryInflationRequest>): QueryInflationRequest {
    const message = createBaseQueryInflationRequest();
    return message;
  },
  fromAmino(_: QueryInflationRequestAmino): QueryInflationRequest {
    return {};
  },
  toAmino(_: QueryInflationRequest): QueryInflationRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInflationRequestAminoMsg): QueryInflationRequest {
    return QueryInflationRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryInflationRequest): QueryInflationRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryInflationRequest",
      value: QueryInflationRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryInflationRequestProtoMsg): QueryInflationRequest {
    return QueryInflationRequest.decode(message.value);
  },
  toProto(message: QueryInflationRequest): Uint8Array {
    return QueryInflationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationRequest): QueryInflationRequestProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest",
      value: QueryInflationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInflationResponse(): QueryInflationResponse {
  return {
    inflation: new Uint8Array()
  };
}
export const QueryInflationResponse = {
  typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse",
  encode(message: QueryInflationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflation.length !== 0) {
      writer.uint32(10).bytes(message.inflation);
    }
    return writer;
  },
  fromJSON(object: any): QueryInflationResponse {
    return {
      inflation: isSet(object.inflation) ? bytesFromBase64(object.inflation) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryInflationResponse>): QueryInflationResponse {
    const message = createBaseQueryInflationResponse();
    message.inflation = object.inflation ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryInflationResponseAmino): QueryInflationResponse {
    return {
      inflation: object.inflation
    };
  },
  toAmino(message: QueryInflationResponse): QueryInflationResponseAmino {
    const obj: any = {};
    obj.inflation = message.inflation;
    return obj;
  },
  fromAminoMsg(object: QueryInflationResponseAminoMsg): QueryInflationResponse {
    return QueryInflationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryInflationResponse): QueryInflationResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryInflationResponse",
      value: QueryInflationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryInflationResponseProtoMsg): QueryInflationResponse {
    return QueryInflationResponse.decode(message.value);
  },
  toProto(message: QueryInflationResponse): Uint8Array {
    return QueryInflationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationResponse): QueryInflationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse",
      value: QueryInflationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAnnualProvisionsRequest(): QueryAnnualProvisionsRequest {
  return {};
}
export const QueryAnnualProvisionsRequest = {
  typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest",
  encode(_: QueryAnnualProvisionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAnnualProvisionsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest {
    const message = createBaseQueryAnnualProvisionsRequest();
    return message;
  },
  fromAmino(_: QueryAnnualProvisionsRequestAmino): QueryAnnualProvisionsRequest {
    return {};
  },
  toAmino(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAnnualProvisionsRequestAminoMsg): QueryAnnualProvisionsRequest {
    return QueryAnnualProvisionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAnnualProvisionsRequest",
      value: QueryAnnualProvisionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAnnualProvisionsRequestProtoMsg): QueryAnnualProvisionsRequest {
    return QueryAnnualProvisionsRequest.decode(message.value);
  },
  toProto(message: QueryAnnualProvisionsRequest): Uint8Array {
    return QueryAnnualProvisionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest",
      value: QueryAnnualProvisionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAnnualProvisionsResponse(): QueryAnnualProvisionsResponse {
  return {
    annualProvisions: new Uint8Array()
  };
}
export const QueryAnnualProvisionsResponse = {
  typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse",
  encode(message: QueryAnnualProvisionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.annualProvisions.length !== 0) {
      writer.uint32(10).bytes(message.annualProvisions);
    }
    return writer;
  },
  fromJSON(object: any): QueryAnnualProvisionsResponse {
    return {
      annualProvisions: isSet(object.annualProvisions) ? bytesFromBase64(object.annualProvisions) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse {
    const message = createBaseQueryAnnualProvisionsResponse();
    message.annualProvisions = object.annualProvisions ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryAnnualProvisionsResponseAmino): QueryAnnualProvisionsResponse {
    return {
      annualProvisions: object.annual_provisions
    };
  },
  toAmino(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseAmino {
    const obj: any = {};
    obj.annual_provisions = message.annualProvisions;
    return obj;
  },
  fromAminoMsg(object: QueryAnnualProvisionsResponseAminoMsg): QueryAnnualProvisionsResponse {
    return QueryAnnualProvisionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAnnualProvisionsResponse",
      value: QueryAnnualProvisionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAnnualProvisionsResponseProtoMsg): QueryAnnualProvisionsResponse {
    return QueryAnnualProvisionsResponse.decode(message.value);
  },
  toProto(message: QueryAnnualProvisionsResponse): Uint8Array {
    return QueryAnnualProvisionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse",
      value: QueryAnnualProvisionsResponse.encode(message).finish()
    };
  }
};