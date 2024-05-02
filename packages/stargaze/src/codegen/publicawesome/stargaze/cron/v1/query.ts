import { Params, ParamsAmino, ParamsSDKType } from "./cron";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequest {}
export interface QueryListPrivilegedRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest";
  value: Uint8Array;
}
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequestAmino {}
export interface QueryListPrivilegedRequestAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest";
  value: QueryListPrivilegedRequestAmino;
}
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequestSDKType {}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponse {
  /**
   * contract_addresses holds all the smart contract addresses which have
   * privilege status.
   */
  contractAddresses: string[];
}
export interface QueryListPrivilegedResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse";
  value: Uint8Array;
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponseAmino {
  /**
   * contract_addresses holds all the smart contract addresses which have
   * privilege status.
   */
  contract_addresses?: string[];
}
export interface QueryListPrivilegedResponseAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse";
  value: QueryListPrivilegedResponseAmino;
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponseSDKType {
  contract_addresses: string[];
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC
 * method.
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC
 * method.
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC
 * method.
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryListPrivilegedRequest(): QueryListPrivilegedRequest {
  return {};
}
export const QueryListPrivilegedRequest = {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest",
  encode(_: QueryListPrivilegedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryListPrivilegedRequest {
    return {};
  },
  fromPartial(_: Partial<QueryListPrivilegedRequest>): QueryListPrivilegedRequest {
    const message = createBaseQueryListPrivilegedRequest();
    return message;
  },
  fromAmino(_: QueryListPrivilegedRequestAmino): QueryListPrivilegedRequest {
    const message = createBaseQueryListPrivilegedRequest();
    return message;
  },
  toAmino(_: QueryListPrivilegedRequest): QueryListPrivilegedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryListPrivilegedRequestAminoMsg): QueryListPrivilegedRequest {
    return QueryListPrivilegedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPrivilegedRequestProtoMsg): QueryListPrivilegedRequest {
    return QueryListPrivilegedRequest.decode(message.value);
  },
  toProto(message: QueryListPrivilegedRequest): Uint8Array {
    return QueryListPrivilegedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListPrivilegedRequest): QueryListPrivilegedRequestProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest",
      value: QueryListPrivilegedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListPrivilegedResponse(): QueryListPrivilegedResponse {
  return {
    contractAddresses: []
  };
}
export const QueryListPrivilegedResponse = {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse",
  encode(message: QueryListPrivilegedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryListPrivilegedResponse {
    return {
      contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryListPrivilegedResponse>): QueryListPrivilegedResponse {
    const message = createBaseQueryListPrivilegedResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryListPrivilegedResponseAmino): QueryListPrivilegedResponse {
    const message = createBaseQueryListPrivilegedResponse();
    message.contractAddresses = object.contract_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryListPrivilegedResponse): QueryListPrivilegedResponseAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = message.contractAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: QueryListPrivilegedResponseAminoMsg): QueryListPrivilegedResponse {
    return QueryListPrivilegedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPrivilegedResponseProtoMsg): QueryListPrivilegedResponse {
    return QueryListPrivilegedResponse.decode(message.value);
  },
  toProto(message: QueryListPrivilegedResponse): Uint8Array {
    return QueryListPrivilegedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListPrivilegedResponse): QueryListPrivilegedResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse",
      value: QueryListPrivilegedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryParamsRequest",
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
      typeUrl: "/publicawesome.stargaze.cron.v1.QueryParamsRequest",
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
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryParamsResponse",
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
      typeUrl: "/publicawesome.stargaze.cron.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};