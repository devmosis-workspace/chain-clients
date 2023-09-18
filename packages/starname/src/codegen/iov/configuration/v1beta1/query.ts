import { Config, ConfigAmino, ConfigSDKType, Fees, FeesAmino, FeesSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * QueryConfigRequest is the request type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigRequest {}
export interface QueryConfigRequestProtoMsg {
  typeUrl: "/starnamed.x.configuration.v1beta1.QueryConfigRequest";
  value: Uint8Array;
}
/**
 * QueryConfigRequest is the request type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigRequestAmino {}
export interface QueryConfigRequestAminoMsg {
  type: "/starnamed.x.configuration.v1beta1.QueryConfigRequest";
  value: QueryConfigRequestAmino;
}
/**
 * QueryConfigRequest is the request type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigRequestSDKType {}
/**
 * QueryConfigResponse is the response type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigResponse {
  /** Configuration is the starname configuration. */
  config: Config;
}
export interface QueryConfigResponseProtoMsg {
  typeUrl: "/starnamed.x.configuration.v1beta1.QueryConfigResponse";
  value: Uint8Array;
}
/**
 * QueryConfigResponse is the response type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigResponseAmino {
  /** Configuration is the starname configuration. */
  config?: ConfigAmino;
}
export interface QueryConfigResponseAminoMsg {
  type: "/starnamed.x.configuration.v1beta1.QueryConfigResponse";
  value: QueryConfigResponseAmino;
}
/**
 * QueryConfigResponse is the response type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigResponseSDKType {
  config: ConfigSDKType;
}
/** QueryFeesRequest is the request type for the Query/Configuration RPC method. */
export interface QueryFeesRequest {}
export interface QueryFeesRequestProtoMsg {
  typeUrl: "/starnamed.x.configuration.v1beta1.QueryFeesRequest";
  value: Uint8Array;
}
/** QueryFeesRequest is the request type for the Query/Configuration RPC method. */
export interface QueryFeesRequestAmino {}
export interface QueryFeesRequestAminoMsg {
  type: "/starnamed.x.configuration.v1beta1.QueryFeesRequest";
  value: QueryFeesRequestAmino;
}
/** QueryFeesRequest is the request type for the Query/Configuration RPC method. */
export interface QueryFeesRequestSDKType {}
/** QueryFeesResponse is the response type for the Query/Fees RPC method */
export interface QueryFeesResponse {
  /** Fees is the starname product fee object. */
  fees: Fees;
}
export interface QueryFeesResponseProtoMsg {
  typeUrl: "/starnamed.x.configuration.v1beta1.QueryFeesResponse";
  value: Uint8Array;
}
/** QueryFeesResponse is the response type for the Query/Fees RPC method */
export interface QueryFeesResponseAmino {
  /** Fees is the starname product fee object. */
  fees?: FeesAmino;
}
export interface QueryFeesResponseAminoMsg {
  type: "/starnamed.x.configuration.v1beta1.QueryFeesResponse";
  value: QueryFeesResponseAmino;
}
/** QueryFeesResponse is the response type for the Query/Fees RPC method */
export interface QueryFeesResponseSDKType {
  fees: FeesSDKType;
}
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}
export const QueryConfigRequest = {
  typeUrl: "/starnamed.x.configuration.v1beta1.QueryConfigRequest",
  encode(_: QueryConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryConfigRequest {
    return {};
  },
  fromPartial(_: Partial<QueryConfigRequest>): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  fromAmino(_: QueryConfigRequestAmino): QueryConfigRequest {
    return {};
  },
  toAmino(_: QueryConfigRequest): QueryConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryConfigRequestAminoMsg): QueryConfigRequest {
    return QueryConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConfigRequestProtoMsg): QueryConfigRequest {
    return QueryConfigRequest.decode(message.value);
  },
  toProto(message: QueryConfigRequest): Uint8Array {
    return QueryConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigRequest): QueryConfigRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.configuration.v1beta1.QueryConfigRequest",
      value: QueryConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: Config.fromPartial({})
  };
}
export const QueryConfigResponse = {
  typeUrl: "/starnamed.x.configuration.v1beta1.QueryConfigResponse",
  encode(message: QueryConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryConfigResponse {
    return {
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined
    };
  },
  fromPartial(object: Partial<QueryConfigResponse>): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config = object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse {
    return {
      config: object?.config ? Config.fromAmino(object.config) : undefined
    };
  },
  toAmino(message: QueryConfigResponse): QueryConfigResponseAmino {
    const obj: any = {};
    obj.config = message.config ? Config.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConfigResponseAminoMsg): QueryConfigResponse {
    return QueryConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConfigResponseProtoMsg): QueryConfigResponse {
    return QueryConfigResponse.decode(message.value);
  },
  toProto(message: QueryConfigResponse): Uint8Array {
    return QueryConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigResponse): QueryConfigResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.configuration.v1beta1.QueryConfigResponse",
      value: QueryConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeesRequest(): QueryFeesRequest {
  return {};
}
export const QueryFeesRequest = {
  typeUrl: "/starnamed.x.configuration.v1beta1.QueryFeesRequest",
  encode(_: QueryFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryFeesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryFeesRequest>): QueryFeesRequest {
    const message = createBaseQueryFeesRequest();
    return message;
  },
  fromAmino(_: QueryFeesRequestAmino): QueryFeesRequest {
    return {};
  },
  toAmino(_: QueryFeesRequest): QueryFeesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeesRequestAminoMsg): QueryFeesRequest {
    return QueryFeesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeesRequestProtoMsg): QueryFeesRequest {
    return QueryFeesRequest.decode(message.value);
  },
  toProto(message: QueryFeesRequest): Uint8Array {
    return QueryFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeesRequest): QueryFeesRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.configuration.v1beta1.QueryFeesRequest",
      value: QueryFeesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeesResponse(): QueryFeesResponse {
  return {
    fees: Fees.fromPartial({})
  };
}
export const QueryFeesResponse = {
  typeUrl: "/starnamed.x.configuration.v1beta1.QueryFeesResponse",
  encode(message: QueryFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fees !== undefined) {
      Fees.encode(message.fees, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFeesResponse {
    return {
      fees: isSet(object.fees) ? Fees.fromJSON(object.fees) : undefined
    };
  },
  fromPartial(object: Partial<QueryFeesResponse>): QueryFeesResponse {
    const message = createBaseQueryFeesResponse();
    message.fees = object.fees !== undefined && object.fees !== null ? Fees.fromPartial(object.fees) : undefined;
    return message;
  },
  fromAmino(object: QueryFeesResponseAmino): QueryFeesResponse {
    return {
      fees: object?.fees ? Fees.fromAmino(object.fees) : undefined
    };
  },
  toAmino(message: QueryFeesResponse): QueryFeesResponseAmino {
    const obj: any = {};
    obj.fees = message.fees ? Fees.toAmino(message.fees) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeesResponseAminoMsg): QueryFeesResponse {
    return QueryFeesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeesResponseProtoMsg): QueryFeesResponse {
    return QueryFeesResponse.decode(message.value);
  },
  toProto(message: QueryFeesResponse): Uint8Array {
    return QueryFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeesResponse): QueryFeesResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.configuration.v1beta1.QueryFeesResponse",
      value: QueryFeesResponse.encode(message).finish()
    };
  }
};