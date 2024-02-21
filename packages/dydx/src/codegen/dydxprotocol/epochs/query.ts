import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoSDKType } from "./epoch_info";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryGetEpochInfoRequest is request type for the GetEpochInfo RPC method. */
export interface QueryGetEpochInfoRequest {
  /** QueryGetEpochInfoRequest is request type for the GetEpochInfo RPC method. */
  name: string;
}
export interface QueryGetEpochInfoRequestProtoMsg {
  typeUrl: "/dydxprotocol.epochs.QueryGetEpochInfoRequest";
  value: Uint8Array;
}
/** QueryGetEpochInfoRequest is request type for the GetEpochInfo RPC method. */
export interface QueryGetEpochInfoRequestSDKType {
  name: string;
}
/** QueryEpochInfoResponse is response type for the GetEpochInfo RPC method. */
export interface QueryEpochInfoResponse {
  epochInfo: EpochInfo;
}
export interface QueryEpochInfoResponseProtoMsg {
  typeUrl: "/dydxprotocol.epochs.QueryEpochInfoResponse";
  value: Uint8Array;
}
/** QueryEpochInfoResponse is response type for the GetEpochInfo RPC method. */
export interface QueryEpochInfoResponseSDKType {
  epoch_info: EpochInfoSDKType;
}
/** QueryAllEpochInfoRequest is request type for the AllEpochInfo RPC method. */
export interface QueryAllEpochInfoRequest {
  pagination?: PageRequest;
}
export interface QueryAllEpochInfoRequestProtoMsg {
  typeUrl: "/dydxprotocol.epochs.QueryAllEpochInfoRequest";
  value: Uint8Array;
}
/** QueryAllEpochInfoRequest is request type for the AllEpochInfo RPC method. */
export interface QueryAllEpochInfoRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryEpochInfoAllResponse is response type for the AllEpochInfo RPC method. */
export interface QueryEpochInfoAllResponse {
  epochInfo: EpochInfo[];
  pagination?: PageResponse;
}
export interface QueryEpochInfoAllResponseProtoMsg {
  typeUrl: "/dydxprotocol.epochs.QueryEpochInfoAllResponse";
  value: Uint8Array;
}
/** QueryEpochInfoAllResponse is response type for the AllEpochInfo RPC method. */
export interface QueryEpochInfoAllResponseSDKType {
  epoch_info: EpochInfoSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryGetEpochInfoRequest(): QueryGetEpochInfoRequest {
  return {
    name: ""
  };
}
export const QueryGetEpochInfoRequest = {
  typeUrl: "/dydxprotocol.epochs.QueryGetEpochInfoRequest",
  encode(message: QueryGetEpochInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetEpochInfoRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<QueryGetEpochInfoRequest>): QueryGetEpochInfoRequest {
    const message = createBaseQueryGetEpochInfoRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryGetEpochInfoRequestAmino): QueryGetEpochInfoRequest {
    const message = createBaseQueryGetEpochInfoRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetEpochInfoRequest): QueryGetEpochInfoRequestAmino {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochInfoRequestAminoMsg): QueryGetEpochInfoRequest {
    return QueryGetEpochInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochInfoRequestProtoMsg): QueryGetEpochInfoRequest {
    return QueryGetEpochInfoRequest.decode(message.value);
  },
  toProto(message: QueryGetEpochInfoRequest): Uint8Array {
    return QueryGetEpochInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochInfoRequest): QueryGetEpochInfoRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.epochs.QueryGetEpochInfoRequest",
      value: QueryGetEpochInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochInfoResponse(): QueryEpochInfoResponse {
  return {
    epochInfo: EpochInfo.fromPartial({})
  };
}
export const QueryEpochInfoResponse = {
  typeUrl: "/dydxprotocol.epochs.QueryEpochInfoResponse",
  encode(message: QueryEpochInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochInfo !== undefined) {
      EpochInfo.encode(message.epochInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEpochInfoResponse {
    return {
      epochInfo: isSet(object.epochInfo) ? EpochInfo.fromJSON(object.epochInfo) : undefined
    };
  },
  fromPartial(object: Partial<QueryEpochInfoResponse>): QueryEpochInfoResponse {
    const message = createBaseQueryEpochInfoResponse();
    message.epochInfo = object.epochInfo !== undefined && object.epochInfo !== null ? EpochInfo.fromPartial(object.epochInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochInfoResponseAmino): QueryEpochInfoResponse {
    const message = createBaseQueryEpochInfoResponse();
    if (object.epoch_info !== undefined && object.epoch_info !== null) {
      message.epochInfo = EpochInfo.fromAmino(object.epoch_info);
    }
    return message;
  },
  toAmino(message: QueryEpochInfoResponse): QueryEpochInfoResponseAmino {
    const obj: any = {};
    obj.epoch_info = message.epochInfo ? EpochInfo.toAmino(message.epochInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochInfoResponseAminoMsg): QueryEpochInfoResponse {
    return QueryEpochInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochInfoResponseProtoMsg): QueryEpochInfoResponse {
    return QueryEpochInfoResponse.decode(message.value);
  },
  toProto(message: QueryEpochInfoResponse): Uint8Array {
    return QueryEpochInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochInfoResponse): QueryEpochInfoResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.epochs.QueryEpochInfoResponse",
      value: QueryEpochInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochInfoRequest(): QueryAllEpochInfoRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllEpochInfoRequest = {
  typeUrl: "/dydxprotocol.epochs.QueryAllEpochInfoRequest",
  encode(message: QueryAllEpochInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllEpochInfoRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllEpochInfoRequest>): QueryAllEpochInfoRequest {
    const message = createBaseQueryAllEpochInfoRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllEpochInfoRequestAmino): QueryAllEpochInfoRequest {
    const message = createBaseQueryAllEpochInfoRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllEpochInfoRequest): QueryAllEpochInfoRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEpochInfoRequestAminoMsg): QueryAllEpochInfoRequest {
    return QueryAllEpochInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllEpochInfoRequestProtoMsg): QueryAllEpochInfoRequest {
    return QueryAllEpochInfoRequest.decode(message.value);
  },
  toProto(message: QueryAllEpochInfoRequest): Uint8Array {
    return QueryAllEpochInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEpochInfoRequest): QueryAllEpochInfoRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.epochs.QueryAllEpochInfoRequest",
      value: QueryAllEpochInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochInfoAllResponse(): QueryEpochInfoAllResponse {
  return {
    epochInfo: [],
    pagination: undefined
  };
}
export const QueryEpochInfoAllResponse = {
  typeUrl: "/dydxprotocol.epochs.QueryEpochInfoAllResponse",
  encode(message: QueryEpochInfoAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochInfo) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEpochInfoAllResponse {
    return {
      epochInfo: Array.isArray(object?.epochInfo) ? object.epochInfo.map((e: any) => EpochInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryEpochInfoAllResponse>): QueryEpochInfoAllResponse {
    const message = createBaseQueryEpochInfoAllResponse();
    message.epochInfo = object.epochInfo?.map(e => EpochInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochInfoAllResponseAmino): QueryEpochInfoAllResponse {
    const message = createBaseQueryEpochInfoAllResponse();
    message.epochInfo = object.epoch_info?.map(e => EpochInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEpochInfoAllResponse): QueryEpochInfoAllResponseAmino {
    const obj: any = {};
    if (message.epochInfo) {
      obj.epoch_info = message.epochInfo.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epoch_info = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochInfoAllResponseAminoMsg): QueryEpochInfoAllResponse {
    return QueryEpochInfoAllResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochInfoAllResponseProtoMsg): QueryEpochInfoAllResponse {
    return QueryEpochInfoAllResponse.decode(message.value);
  },
  toProto(message: QueryEpochInfoAllResponse): Uint8Array {
    return QueryEpochInfoAllResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochInfoAllResponse): QueryEpochInfoAllResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.epochs.QueryEpochInfoAllResponse",
      value: QueryEpochInfoAllResponse.encode(message).finish()
    };
  }
};