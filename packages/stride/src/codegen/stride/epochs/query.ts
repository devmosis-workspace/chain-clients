import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./genesis";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface QueryEpochsInfoRequest {
  pagination: PageRequest;
}
export interface QueryEpochsInfoRequestProtoMsg {
  typeUrl: "/stride.epochs.QueryEpochsInfoRequest";
  value: Uint8Array;
}
export interface QueryEpochsInfoRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryEpochsInfoRequestAminoMsg {
  type: "/stride.epochs.QueryEpochsInfoRequest";
  value: QueryEpochsInfoRequestAmino;
}
export interface QueryEpochsInfoRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryEpochsInfoResponse {
  epochs: EpochInfo[];
  pagination: PageResponse;
}
export interface QueryEpochsInfoResponseProtoMsg {
  typeUrl: "/stride.epochs.QueryEpochsInfoResponse";
  value: Uint8Array;
}
export interface QueryEpochsInfoResponseAmino {
  epochs: EpochInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryEpochsInfoResponseAminoMsg {
  type: "/stride.epochs.QueryEpochsInfoResponse";
  value: QueryEpochsInfoResponseAmino;
}
export interface QueryEpochsInfoResponseSDKType {
  epochs: EpochInfoSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryCurrentEpochRequest {
  identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
  typeUrl: "/stride.epochs.QueryCurrentEpochRequest";
  value: Uint8Array;
}
export interface QueryCurrentEpochRequestAmino {
  identifier: string;
}
export interface QueryCurrentEpochRequestAminoMsg {
  type: "/stride.epochs.QueryCurrentEpochRequest";
  value: QueryCurrentEpochRequestAmino;
}
export interface QueryCurrentEpochRequestSDKType {
  identifier: string;
}
export interface QueryCurrentEpochResponse {
  currentEpoch: bigint;
}
export interface QueryCurrentEpochResponseProtoMsg {
  typeUrl: "/stride.epochs.QueryCurrentEpochResponse";
  value: Uint8Array;
}
export interface QueryCurrentEpochResponseAmino {
  current_epoch: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
  type: "/stride.epochs.QueryCurrentEpochResponse";
  value: QueryCurrentEpochResponseAmino;
}
export interface QueryCurrentEpochResponseSDKType {
  current_epoch: bigint;
}
export interface QueryEpochInfoRequest {
  identifier: string;
}
export interface QueryEpochInfoRequestProtoMsg {
  typeUrl: "/stride.epochs.QueryEpochInfoRequest";
  value: Uint8Array;
}
export interface QueryEpochInfoRequestAmino {
  identifier: string;
}
export interface QueryEpochInfoRequestAminoMsg {
  type: "/stride.epochs.QueryEpochInfoRequest";
  value: QueryEpochInfoRequestAmino;
}
export interface QueryEpochInfoRequestSDKType {
  identifier: string;
}
export interface QueryEpochInfoResponse {
  epoch: EpochInfo;
}
export interface QueryEpochInfoResponseProtoMsg {
  typeUrl: "/stride.epochs.QueryEpochInfoResponse";
  value: Uint8Array;
}
export interface QueryEpochInfoResponseAmino {
  epoch?: EpochInfoAmino;
}
export interface QueryEpochInfoResponseAminoMsg {
  type: "/stride.epochs.QueryEpochInfoResponse";
  value: QueryEpochInfoResponseAmino;
}
export interface QueryEpochInfoResponseSDKType {
  epoch: EpochInfoSDKType;
}
function createBaseQueryEpochsInfoRequest(): QueryEpochsInfoRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryEpochsInfoRequest = {
  typeUrl: "/stride.epochs.QueryEpochsInfoRequest",
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
      typeUrl: "/stride.epochs.QueryEpochsInfoRequest",
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
  typeUrl: "/stride.epochs.QueryEpochsInfoResponse",
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
      typeUrl: "/stride.epochs.QueryEpochsInfoResponse",
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
  typeUrl: "/stride.epochs.QueryCurrentEpochRequest",
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
      typeUrl: "/stride.epochs.QueryCurrentEpochRequest",
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
  typeUrl: "/stride.epochs.QueryCurrentEpochResponse",
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
      typeUrl: "/stride.epochs.QueryCurrentEpochResponse",
      value: QueryCurrentEpochResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEpochInfoRequest(): QueryEpochInfoRequest {
  return {
    identifier: ""
  };
}
export const QueryEpochInfoRequest = {
  typeUrl: "/stride.epochs.QueryEpochInfoRequest",
  encode(message: QueryEpochInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  fromJSON(object: any): QueryEpochInfoRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : ""
    };
  },
  fromPartial(object: Partial<QueryEpochInfoRequest>): QueryEpochInfoRequest {
    const message = createBaseQueryEpochInfoRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
  fromAmino(object: QueryEpochInfoRequestAmino): QueryEpochInfoRequest {
    return {
      identifier: object.identifier
    };
  },
  toAmino(message: QueryEpochInfoRequest): QueryEpochInfoRequestAmino {
    const obj: any = {};
    obj.identifier = message.identifier;
    return obj;
  },
  fromAminoMsg(object: QueryEpochInfoRequestAminoMsg): QueryEpochInfoRequest {
    return QueryEpochInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochInfoRequestProtoMsg): QueryEpochInfoRequest {
    return QueryEpochInfoRequest.decode(message.value);
  },
  toProto(message: QueryEpochInfoRequest): Uint8Array {
    return QueryEpochInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochInfoRequest): QueryEpochInfoRequestProtoMsg {
    return {
      typeUrl: "/stride.epochs.QueryEpochInfoRequest",
      value: QueryEpochInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochInfoResponse(): QueryEpochInfoResponse {
  return {
    epoch: EpochInfo.fromPartial({})
  };
}
export const QueryEpochInfoResponse = {
  typeUrl: "/stride.epochs.QueryEpochInfoResponse",
  encode(message: QueryEpochInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== undefined) {
      EpochInfo.encode(message.epoch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEpochInfoResponse {
    return {
      epoch: isSet(object.epoch) ? EpochInfo.fromJSON(object.epoch) : undefined
    };
  },
  fromPartial(object: Partial<QueryEpochInfoResponse>): QueryEpochInfoResponse {
    const message = createBaseQueryEpochInfoResponse();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? EpochInfo.fromPartial(object.epoch) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochInfoResponseAmino): QueryEpochInfoResponse {
    return {
      epoch: object?.epoch ? EpochInfo.fromAmino(object.epoch) : undefined
    };
  },
  toAmino(message: QueryEpochInfoResponse): QueryEpochInfoResponseAmino {
    const obj: any = {};
    obj.epoch = message.epoch ? EpochInfo.toAmino(message.epoch) : undefined;
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
      typeUrl: "/stride.epochs.QueryEpochInfoResponse",
      value: QueryEpochInfoResponse.encode(message).finish()
    };
  }
};