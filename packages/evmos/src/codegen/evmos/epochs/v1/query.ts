import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * QueryEpochsInfoRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryEpochsInfoRequestProtoMsg {
  typeUrl: "/evmos.epochs.v1.QueryEpochsInfoRequest";
  value: Uint8Array;
}
/**
 * QueryEpochsInfoRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryEpochsInfoRequestAminoMsg {
  type: "/evmos.epochs.v1.QueryEpochsInfoRequest";
  value: QueryEpochsInfoRequestAmino;
}
/**
 * QueryEpochsInfoRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoRequestSDKType {
  pagination: PageRequestSDKType;
}
/**
 * QueryEpochsInfoResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoResponse {
  /** epochs is a slice of all EpochInfos */
  epochs: EpochInfo[];
  /** pagination defines an optional pagination for the request. */
  pagination: PageResponse;
}
export interface QueryEpochsInfoResponseProtoMsg {
  typeUrl: "/evmos.epochs.v1.QueryEpochsInfoResponse";
  value: Uint8Array;
}
/**
 * QueryEpochsInfoResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoResponseAmino {
  /** epochs is a slice of all EpochInfos */
  epochs: EpochInfoAmino[];
  /** pagination defines an optional pagination for the request. */
  pagination?: PageResponseAmino;
}
export interface QueryEpochsInfoResponseAminoMsg {
  type: "/evmos.epochs.v1.QueryEpochsInfoResponse";
  value: QueryEpochsInfoResponseAmino;
}
/**
 * QueryEpochsInfoResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoResponseSDKType {
  epochs: EpochInfoSDKType[];
  pagination: PageResponseSDKType;
}
/**
 * QueryCurrentEpochRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochRequest {
  /** identifier of the current epoch */
  identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
  typeUrl: "/evmos.epochs.v1.QueryCurrentEpochRequest";
  value: Uint8Array;
}
/**
 * QueryCurrentEpochRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochRequestAmino {
  /** identifier of the current epoch */
  identifier: string;
}
export interface QueryCurrentEpochRequestAminoMsg {
  type: "/evmos.epochs.v1.QueryCurrentEpochRequest";
  value: QueryCurrentEpochRequestAmino;
}
/**
 * QueryCurrentEpochRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochRequestSDKType {
  identifier: string;
}
/**
 * QueryCurrentEpochResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochResponse {
  /** current_epoch is the number of the current epoch */
  currentEpoch: bigint;
}
export interface QueryCurrentEpochResponseProtoMsg {
  typeUrl: "/evmos.epochs.v1.QueryCurrentEpochResponse";
  value: Uint8Array;
}
/**
 * QueryCurrentEpochResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochResponseAmino {
  /** current_epoch is the number of the current epoch */
  current_epoch: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
  type: "/evmos.epochs.v1.QueryCurrentEpochResponse";
  value: QueryCurrentEpochResponseAmino;
}
/**
 * QueryCurrentEpochResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochResponseSDKType {
  current_epoch: bigint;
}
function createBaseQueryEpochsInfoRequest(): QueryEpochsInfoRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryEpochsInfoRequest = {
  typeUrl: "/evmos.epochs.v1.QueryEpochsInfoRequest",
  encode(message: QueryEpochsInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEpochsInfoRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest {
    const message = createBaseQueryEpochsInfoRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochsInfoRequestAmino): QueryEpochsInfoRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochsInfoRequestAminoMsg): QueryEpochsInfoRequest {
    return QueryEpochsInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochsInfoRequestProtoMsg): QueryEpochsInfoRequest {
    return QueryEpochsInfoRequest.decode(message.value);
  },
  toProto(message: QueryEpochsInfoRequest): Uint8Array {
    return QueryEpochsInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestProtoMsg {
    return {
      typeUrl: "/evmos.epochs.v1.QueryEpochsInfoRequest",
      value: QueryEpochsInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochsInfoResponse(): QueryEpochsInfoResponse {
  return {
    epochs: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryEpochsInfoResponse = {
  typeUrl: "/evmos.epochs.v1.QueryEpochsInfoResponse",
  encode(message: QueryEpochsInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEpochsInfoResponse {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochsInfoResponseAmino): QueryEpochsInfoResponse {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseAmino {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochsInfoResponseAminoMsg): QueryEpochsInfoResponse {
    return QueryEpochsInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochsInfoResponseProtoMsg): QueryEpochsInfoResponse {
    return QueryEpochsInfoResponse.decode(message.value);
  },
  toProto(message: QueryEpochsInfoResponse): Uint8Array {
    return QueryEpochsInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.epochs.v1.QueryEpochsInfoResponse",
      value: QueryEpochsInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return {
    identifier: ""
  };
}
export const QueryCurrentEpochRequest = {
  typeUrl: "/evmos.epochs.v1.QueryCurrentEpochRequest",
  encode(message: QueryCurrentEpochRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  fromJSON(object: any): QueryCurrentEpochRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : ""
    };
  },
  fromPartial(object: Partial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
  fromAmino(object: QueryCurrentEpochRequestAmino): QueryCurrentEpochRequest {
    return {
      identifier: object.identifier
    };
  },
  toAmino(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAmino {
    const obj: any = {};
    obj.identifier = message.identifier;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochRequestAminoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentEpochRequestProtoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.decode(message.value);
  },
  toProto(message: QueryCurrentEpochRequest): Uint8Array {
    return QueryCurrentEpochRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestProtoMsg {
    return {
      typeUrl: "/evmos.epochs.v1.QueryCurrentEpochRequest",
      value: QueryCurrentEpochRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return {
    currentEpoch: BigInt(0)
  };
}
export const QueryCurrentEpochResponse = {
  typeUrl: "/evmos.epochs.v1.QueryCurrentEpochResponse",
  encode(message: QueryCurrentEpochResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(8).int64(message.currentEpoch);
    }
    return writer;
  },
  fromJSON(object: any): QueryCurrentEpochResponse {
    return {
      currentEpoch: isSet(object.currentEpoch) ? BigInt(object.currentEpoch.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCurrentEpochResponseAmino): QueryCurrentEpochResponse {
    return {
      currentEpoch: BigInt(object.current_epoch)
    };
  },
  toAmino(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAmino {
    const obj: any = {};
    obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochResponseAminoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentEpochResponseProtoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.decode(message.value);
  },
  toProto(message: QueryCurrentEpochResponse): Uint8Array {
    return QueryCurrentEpochResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseProtoMsg {
    return {
      typeUrl: "/evmos.epochs.v1.QueryCurrentEpochResponse",
      value: QueryCurrentEpochResponse.encode(message).finish()
    };
  }
};