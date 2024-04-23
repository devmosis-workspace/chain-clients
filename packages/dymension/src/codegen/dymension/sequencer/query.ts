import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Sequencer, SequencerAmino, SequencerSDKType } from "./sequencer";
import { OperatingStatus, operatingStatusFromJSON } from "./operating_status";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Scheduler, SchedulerAmino, SchedulerSDKType } from "./scheduler";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** SequencerInfo holds information for user query. */
export interface SequencerInfo {
  /** basic sequencer info */
  sequencer: Sequencer;
  /** sequencers' operating status */
  status: OperatingStatus;
}
export interface SequencerInfoProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.SequencerInfo";
  value: Uint8Array;
}
/** SequencerInfo holds information for user query. */
export interface SequencerInfoAmino {
  /** basic sequencer info */
  sequencer?: SequencerAmino;
  /** sequencers' operating status */
  status?: OperatingStatus;
}
export interface SequencerInfoAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.SequencerInfo";
  value: SequencerInfoAmino;
}
/** SequencerInfo holds information for user query. */
export interface SequencerInfoSDKType {
  sequencer: SequencerSDKType;
  status: OperatingStatus;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryParamsRequest";
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
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetSequencerRequest {
  sequencerAddress: string;
}
export interface QueryGetSequencerRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencerRequest";
  value: Uint8Array;
}
export interface QueryGetSequencerRequestAmino {
  sequencerAddress?: string;
}
export interface QueryGetSequencerRequestAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryGetSequencerRequest";
  value: QueryGetSequencerRequestAmino;
}
export interface QueryGetSequencerRequestSDKType {
  sequencerAddress: string;
}
export interface QueryGetSequencerResponse {
  sequencerInfo: SequencerInfo;
}
export interface QueryGetSequencerResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencerResponse";
  value: Uint8Array;
}
export interface QueryGetSequencerResponseAmino {
  sequencerInfo?: SequencerInfoAmino;
}
export interface QueryGetSequencerResponseAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryGetSequencerResponse";
  value: QueryGetSequencerResponseAmino;
}
export interface QueryGetSequencerResponseSDKType {
  sequencerInfo: SequencerInfoSDKType;
}
export interface QueryAllSequencerRequest {
  pagination?: PageRequest;
}
export interface QueryAllSequencerRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencerRequest";
  value: Uint8Array;
}
export interface QueryAllSequencerRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllSequencerRequestAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryAllSequencerRequest";
  value: QueryAllSequencerRequestAmino;
}
export interface QueryAllSequencerRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllSequencerResponse {
  sequencerInfoList: SequencerInfo[];
  pagination?: PageResponse;
}
export interface QueryAllSequencerResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencerResponse";
  value: Uint8Array;
}
export interface QueryAllSequencerResponseAmino {
  sequencerInfoList?: SequencerInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllSequencerResponseAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryAllSequencerResponse";
  value: QueryAllSequencerResponseAmino;
}
export interface QueryAllSequencerResponseSDKType {
  sequencerInfoList: SequencerInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetSequencersByRollappRequest {
  rollappId: string;
}
export interface QueryGetSequencersByRollappRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappRequest";
  value: Uint8Array;
}
export interface QueryGetSequencersByRollappRequestAmino {
  rollappId?: string;
}
export interface QueryGetSequencersByRollappRequestAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappRequest";
  value: QueryGetSequencersByRollappRequestAmino;
}
export interface QueryGetSequencersByRollappRequestSDKType {
  rollappId: string;
}
export interface QueryGetSequencersByRollappResponse {
  rollappId: string;
  sequencerInfoList: SequencerInfo[];
}
export interface QueryGetSequencersByRollappResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappResponse";
  value: Uint8Array;
}
export interface QueryGetSequencersByRollappResponseAmino {
  rollappId?: string;
  sequencerInfoList?: SequencerInfoAmino[];
}
export interface QueryGetSequencersByRollappResponseAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappResponse";
  value: QueryGetSequencersByRollappResponseAmino;
}
export interface QueryGetSequencersByRollappResponseSDKType {
  rollappId: string;
  sequencerInfoList: SequencerInfoSDKType[];
}
export interface QueryAllSequencersByRollappRequest {
  pagination?: PageRequest;
}
export interface QueryAllSequencersByRollappRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappRequest";
  value: Uint8Array;
}
export interface QueryAllSequencersByRollappRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllSequencersByRollappRequestAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappRequest";
  value: QueryAllSequencersByRollappRequestAmino;
}
export interface QueryAllSequencersByRollappRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllSequencersByRollappResponse {
  sequencersByRollapp: QueryGetSequencersByRollappResponse[];
  pagination?: PageResponse;
}
export interface QueryAllSequencersByRollappResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappResponse";
  value: Uint8Array;
}
export interface QueryAllSequencersByRollappResponseAmino {
  sequencersByRollapp?: QueryGetSequencersByRollappResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllSequencersByRollappResponseAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappResponse";
  value: QueryAllSequencersByRollappResponseAmino;
}
export interface QueryAllSequencersByRollappResponseSDKType {
  sequencersByRollapp: QueryGetSequencersByRollappResponseSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetSchedulerRequest {
  sequencerAddress: string;
}
export interface QueryGetSchedulerRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerRequest";
  value: Uint8Array;
}
export interface QueryGetSchedulerRequestAmino {
  sequencerAddress?: string;
}
export interface QueryGetSchedulerRequestAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerRequest";
  value: QueryGetSchedulerRequestAmino;
}
export interface QueryGetSchedulerRequestSDKType {
  sequencerAddress: string;
}
export interface QueryGetSchedulerResponse {
  scheduler: Scheduler;
}
export interface QueryGetSchedulerResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerResponse";
  value: Uint8Array;
}
export interface QueryGetSchedulerResponseAmino {
  scheduler?: SchedulerAmino;
}
export interface QueryGetSchedulerResponseAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerResponse";
  value: QueryGetSchedulerResponseAmino;
}
export interface QueryGetSchedulerResponseSDKType {
  scheduler: SchedulerSDKType;
}
export interface QueryAllSchedulerRequest {
  pagination?: PageRequest;
}
export interface QueryAllSchedulerRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerRequest";
  value: Uint8Array;
}
export interface QueryAllSchedulerRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllSchedulerRequestAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerRequest";
  value: QueryAllSchedulerRequestAmino;
}
export interface QueryAllSchedulerRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllSchedulerResponse {
  scheduler: Scheduler[];
  pagination?: PageResponse;
}
export interface QueryAllSchedulerResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerResponse";
  value: Uint8Array;
}
export interface QueryAllSchedulerResponseAmino {
  scheduler?: SchedulerAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllSchedulerResponseAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerResponse";
  value: QueryAllSchedulerResponseAmino;
}
export interface QueryAllSchedulerResponseSDKType {
  scheduler: SchedulerSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseSequencerInfo(): SequencerInfo {
  return {
    sequencer: Sequencer.fromPartial({}),
    status: 0
  };
}
export const SequencerInfo = {
  typeUrl: "/dymensionxyz.dymension.sequencer.SequencerInfo",
  encode(message: SequencerInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequencer !== undefined) {
      Sequencer.encode(message.sequencer, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): SequencerInfo {
    return {
      sequencer: isSet(object.sequencer) ? Sequencer.fromJSON(object.sequencer) : undefined,
      status: isSet(object.status) ? operatingStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<SequencerInfo>): SequencerInfo {
    const message = createBaseSequencerInfo();
    message.sequencer = object.sequencer !== undefined && object.sequencer !== null ? Sequencer.fromPartial(object.sequencer) : undefined;
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: SequencerInfoAmino): SequencerInfo {
    const message = createBaseSequencerInfo();
    if (object.sequencer !== undefined && object.sequencer !== null) {
      message.sequencer = Sequencer.fromAmino(object.sequencer);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = operatingStatusFromJSON(object.status);
    }
    return message;
  },
  toAmino(message: SequencerInfo): SequencerInfoAmino {
    const obj: any = {};
    obj.sequencer = message.sequencer ? Sequencer.toAmino(message.sequencer) : undefined;
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: SequencerInfoAminoMsg): SequencerInfo {
    return SequencerInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SequencerInfoProtoMsg): SequencerInfo {
    return SequencerInfo.decode(message.value);
  },
  toProto(message: SequencerInfo): Uint8Array {
    return SequencerInfo.encode(message).finish();
  },
  toProtoMsg(message: SequencerInfo): SequencerInfoProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.SequencerInfo",
      value: SequencerInfo.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryParamsRequest",
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
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryParamsRequest",
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
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryParamsResponse",
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
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSequencerRequest(): QueryGetSequencerRequest {
  return {
    sequencerAddress: ""
  };
}
export const QueryGetSequencerRequest = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencerRequest",
  encode(message: QueryGetSequencerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequencerAddress !== "") {
      writer.uint32(10).string(message.sequencerAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetSequencerRequest {
    return {
      sequencerAddress: isSet(object.sequencerAddress) ? String(object.sequencerAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryGetSequencerRequest>): QueryGetSequencerRequest {
    const message = createBaseQueryGetSequencerRequest();
    message.sequencerAddress = object.sequencerAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetSequencerRequestAmino): QueryGetSequencerRequest {
    const message = createBaseQueryGetSequencerRequest();
    if (object.sequencerAddress !== undefined && object.sequencerAddress !== null) {
      message.sequencerAddress = object.sequencerAddress;
    }
    return message;
  },
  toAmino(message: QueryGetSequencerRequest): QueryGetSequencerRequestAmino {
    const obj: any = {};
    obj.sequencerAddress = message.sequencerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetSequencerRequestAminoMsg): QueryGetSequencerRequest {
    return QueryGetSequencerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSequencerRequestProtoMsg): QueryGetSequencerRequest {
    return QueryGetSequencerRequest.decode(message.value);
  },
  toProto(message: QueryGetSequencerRequest): Uint8Array {
    return QueryGetSequencerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSequencerRequest): QueryGetSequencerRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencerRequest",
      value: QueryGetSequencerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSequencerResponse(): QueryGetSequencerResponse {
  return {
    sequencerInfo: SequencerInfo.fromPartial({})
  };
}
export const QueryGetSequencerResponse = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencerResponse",
  encode(message: QueryGetSequencerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequencerInfo !== undefined) {
      SequencerInfo.encode(message.sequencerInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetSequencerResponse {
    return {
      sequencerInfo: isSet(object.sequencerInfo) ? SequencerInfo.fromJSON(object.sequencerInfo) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetSequencerResponse>): QueryGetSequencerResponse {
    const message = createBaseQueryGetSequencerResponse();
    message.sequencerInfo = object.sequencerInfo !== undefined && object.sequencerInfo !== null ? SequencerInfo.fromPartial(object.sequencerInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSequencerResponseAmino): QueryGetSequencerResponse {
    const message = createBaseQueryGetSequencerResponse();
    if (object.sequencerInfo !== undefined && object.sequencerInfo !== null) {
      message.sequencerInfo = SequencerInfo.fromAmino(object.sequencerInfo);
    }
    return message;
  },
  toAmino(message: QueryGetSequencerResponse): QueryGetSequencerResponseAmino {
    const obj: any = {};
    obj.sequencerInfo = message.sequencerInfo ? SequencerInfo.toAmino(message.sequencerInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSequencerResponseAminoMsg): QueryGetSequencerResponse {
    return QueryGetSequencerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSequencerResponseProtoMsg): QueryGetSequencerResponse {
    return QueryGetSequencerResponse.decode(message.value);
  },
  toProto(message: QueryGetSequencerResponse): Uint8Array {
    return QueryGetSequencerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSequencerResponse): QueryGetSequencerResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencerResponse",
      value: QueryGetSequencerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSequencerRequest(): QueryAllSequencerRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllSequencerRequest = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencerRequest",
  encode(message: QueryAllSequencerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllSequencerRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllSequencerRequest>): QueryAllSequencerRequest {
    const message = createBaseQueryAllSequencerRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSequencerRequestAmino): QueryAllSequencerRequest {
    const message = createBaseQueryAllSequencerRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSequencerRequest): QueryAllSequencerRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSequencerRequestAminoMsg): QueryAllSequencerRequest {
    return QueryAllSequencerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSequencerRequestProtoMsg): QueryAllSequencerRequest {
    return QueryAllSequencerRequest.decode(message.value);
  },
  toProto(message: QueryAllSequencerRequest): Uint8Array {
    return QueryAllSequencerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSequencerRequest): QueryAllSequencerRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencerRequest",
      value: QueryAllSequencerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSequencerResponse(): QueryAllSequencerResponse {
  return {
    sequencerInfoList: [],
    pagination: undefined
  };
}
export const QueryAllSequencerResponse = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencerResponse",
  encode(message: QueryAllSequencerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sequencerInfoList) {
      SequencerInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllSequencerResponse {
    return {
      sequencerInfoList: Array.isArray(object?.sequencerInfoList) ? object.sequencerInfoList.map((e: any) => SequencerInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllSequencerResponse>): QueryAllSequencerResponse {
    const message = createBaseQueryAllSequencerResponse();
    message.sequencerInfoList = object.sequencerInfoList?.map(e => SequencerInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSequencerResponseAmino): QueryAllSequencerResponse {
    const message = createBaseQueryAllSequencerResponse();
    message.sequencerInfoList = object.sequencerInfoList?.map(e => SequencerInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSequencerResponse): QueryAllSequencerResponseAmino {
    const obj: any = {};
    if (message.sequencerInfoList) {
      obj.sequencerInfoList = message.sequencerInfoList.map(e => e ? SequencerInfo.toAmino(e) : undefined);
    } else {
      obj.sequencerInfoList = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSequencerResponseAminoMsg): QueryAllSequencerResponse {
    return QueryAllSequencerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSequencerResponseProtoMsg): QueryAllSequencerResponse {
    return QueryAllSequencerResponse.decode(message.value);
  },
  toProto(message: QueryAllSequencerResponse): Uint8Array {
    return QueryAllSequencerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSequencerResponse): QueryAllSequencerResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencerResponse",
      value: QueryAllSequencerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSequencersByRollappRequest(): QueryGetSequencersByRollappRequest {
  return {
    rollappId: ""
  };
}
export const QueryGetSequencersByRollappRequest = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappRequest",
  encode(message: QueryGetSequencersByRollappRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rollappId !== "") {
      writer.uint32(10).string(message.rollappId);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetSequencersByRollappRequest {
    return {
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : ""
    };
  },
  fromPartial(object: Partial<QueryGetSequencersByRollappRequest>): QueryGetSequencersByRollappRequest {
    const message = createBaseQueryGetSequencersByRollappRequest();
    message.rollappId = object.rollappId ?? "";
    return message;
  },
  fromAmino(object: QueryGetSequencersByRollappRequestAmino): QueryGetSequencersByRollappRequest {
    const message = createBaseQueryGetSequencersByRollappRequest();
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    return message;
  },
  toAmino(message: QueryGetSequencersByRollappRequest): QueryGetSequencersByRollappRequestAmino {
    const obj: any = {};
    obj.rollappId = message.rollappId;
    return obj;
  },
  fromAminoMsg(object: QueryGetSequencersByRollappRequestAminoMsg): QueryGetSequencersByRollappRequest {
    return QueryGetSequencersByRollappRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSequencersByRollappRequestProtoMsg): QueryGetSequencersByRollappRequest {
    return QueryGetSequencersByRollappRequest.decode(message.value);
  },
  toProto(message: QueryGetSequencersByRollappRequest): Uint8Array {
    return QueryGetSequencersByRollappRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSequencersByRollappRequest): QueryGetSequencersByRollappRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappRequest",
      value: QueryGetSequencersByRollappRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSequencersByRollappResponse(): QueryGetSequencersByRollappResponse {
  return {
    rollappId: "",
    sequencerInfoList: []
  };
}
export const QueryGetSequencersByRollappResponse = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappResponse",
  encode(message: QueryGetSequencersByRollappResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rollappId !== "") {
      writer.uint32(10).string(message.rollappId);
    }
    for (const v of message.sequencerInfoList) {
      SequencerInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetSequencersByRollappResponse {
    return {
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : "",
      sequencerInfoList: Array.isArray(object?.sequencerInfoList) ? object.sequencerInfoList.map((e: any) => SequencerInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryGetSequencersByRollappResponse>): QueryGetSequencersByRollappResponse {
    const message = createBaseQueryGetSequencersByRollappResponse();
    message.rollappId = object.rollappId ?? "";
    message.sequencerInfoList = object.sequencerInfoList?.map(e => SequencerInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetSequencersByRollappResponseAmino): QueryGetSequencersByRollappResponse {
    const message = createBaseQueryGetSequencersByRollappResponse();
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    message.sequencerInfoList = object.sequencerInfoList?.map(e => SequencerInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetSequencersByRollappResponse): QueryGetSequencersByRollappResponseAmino {
    const obj: any = {};
    obj.rollappId = message.rollappId;
    if (message.sequencerInfoList) {
      obj.sequencerInfoList = message.sequencerInfoList.map(e => e ? SequencerInfo.toAmino(e) : undefined);
    } else {
      obj.sequencerInfoList = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetSequencersByRollappResponseAminoMsg): QueryGetSequencersByRollappResponse {
    return QueryGetSequencersByRollappResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSequencersByRollappResponseProtoMsg): QueryGetSequencersByRollappResponse {
    return QueryGetSequencersByRollappResponse.decode(message.value);
  },
  toProto(message: QueryGetSequencersByRollappResponse): Uint8Array {
    return QueryGetSequencersByRollappResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSequencersByRollappResponse): QueryGetSequencersByRollappResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappResponse",
      value: QueryGetSequencersByRollappResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSequencersByRollappRequest(): QueryAllSequencersByRollappRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllSequencersByRollappRequest = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappRequest",
  encode(message: QueryAllSequencersByRollappRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllSequencersByRollappRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllSequencersByRollappRequest>): QueryAllSequencersByRollappRequest {
    const message = createBaseQueryAllSequencersByRollappRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSequencersByRollappRequestAmino): QueryAllSequencersByRollappRequest {
    const message = createBaseQueryAllSequencersByRollappRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSequencersByRollappRequest): QueryAllSequencersByRollappRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSequencersByRollappRequestAminoMsg): QueryAllSequencersByRollappRequest {
    return QueryAllSequencersByRollappRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSequencersByRollappRequestProtoMsg): QueryAllSequencersByRollappRequest {
    return QueryAllSequencersByRollappRequest.decode(message.value);
  },
  toProto(message: QueryAllSequencersByRollappRequest): Uint8Array {
    return QueryAllSequencersByRollappRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSequencersByRollappRequest): QueryAllSequencersByRollappRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappRequest",
      value: QueryAllSequencersByRollappRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSequencersByRollappResponse(): QueryAllSequencersByRollappResponse {
  return {
    sequencersByRollapp: [],
    pagination: undefined
  };
}
export const QueryAllSequencersByRollappResponse = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappResponse",
  encode(message: QueryAllSequencersByRollappResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sequencersByRollapp) {
      QueryGetSequencersByRollappResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllSequencersByRollappResponse {
    return {
      sequencersByRollapp: Array.isArray(object?.sequencersByRollapp) ? object.sequencersByRollapp.map((e: any) => QueryGetSequencersByRollappResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllSequencersByRollappResponse>): QueryAllSequencersByRollappResponse {
    const message = createBaseQueryAllSequencersByRollappResponse();
    message.sequencersByRollapp = object.sequencersByRollapp?.map(e => QueryGetSequencersByRollappResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSequencersByRollappResponseAmino): QueryAllSequencersByRollappResponse {
    const message = createBaseQueryAllSequencersByRollappResponse();
    message.sequencersByRollapp = object.sequencersByRollapp?.map(e => QueryGetSequencersByRollappResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSequencersByRollappResponse): QueryAllSequencersByRollappResponseAmino {
    const obj: any = {};
    if (message.sequencersByRollapp) {
      obj.sequencersByRollapp = message.sequencersByRollapp.map(e => e ? QueryGetSequencersByRollappResponse.toAmino(e) : undefined);
    } else {
      obj.sequencersByRollapp = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSequencersByRollappResponseAminoMsg): QueryAllSequencersByRollappResponse {
    return QueryAllSequencersByRollappResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSequencersByRollappResponseProtoMsg): QueryAllSequencersByRollappResponse {
    return QueryAllSequencersByRollappResponse.decode(message.value);
  },
  toProto(message: QueryAllSequencersByRollappResponse): Uint8Array {
    return QueryAllSequencersByRollappResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSequencersByRollappResponse): QueryAllSequencersByRollappResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappResponse",
      value: QueryAllSequencersByRollappResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSchedulerRequest(): QueryGetSchedulerRequest {
  return {
    sequencerAddress: ""
  };
}
export const QueryGetSchedulerRequest = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerRequest",
  encode(message: QueryGetSchedulerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequencerAddress !== "") {
      writer.uint32(10).string(message.sequencerAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetSchedulerRequest {
    return {
      sequencerAddress: isSet(object.sequencerAddress) ? String(object.sequencerAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryGetSchedulerRequest>): QueryGetSchedulerRequest {
    const message = createBaseQueryGetSchedulerRequest();
    message.sequencerAddress = object.sequencerAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetSchedulerRequestAmino): QueryGetSchedulerRequest {
    const message = createBaseQueryGetSchedulerRequest();
    if (object.sequencerAddress !== undefined && object.sequencerAddress !== null) {
      message.sequencerAddress = object.sequencerAddress;
    }
    return message;
  },
  toAmino(message: QueryGetSchedulerRequest): QueryGetSchedulerRequestAmino {
    const obj: any = {};
    obj.sequencerAddress = message.sequencerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetSchedulerRequestAminoMsg): QueryGetSchedulerRequest {
    return QueryGetSchedulerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSchedulerRequestProtoMsg): QueryGetSchedulerRequest {
    return QueryGetSchedulerRequest.decode(message.value);
  },
  toProto(message: QueryGetSchedulerRequest): Uint8Array {
    return QueryGetSchedulerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSchedulerRequest): QueryGetSchedulerRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerRequest",
      value: QueryGetSchedulerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSchedulerResponse(): QueryGetSchedulerResponse {
  return {
    scheduler: Scheduler.fromPartial({})
  };
}
export const QueryGetSchedulerResponse = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerResponse",
  encode(message: QueryGetSchedulerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduler !== undefined) {
      Scheduler.encode(message.scheduler, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetSchedulerResponse {
    return {
      scheduler: isSet(object.scheduler) ? Scheduler.fromJSON(object.scheduler) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetSchedulerResponse>): QueryGetSchedulerResponse {
    const message = createBaseQueryGetSchedulerResponse();
    message.scheduler = object.scheduler !== undefined && object.scheduler !== null ? Scheduler.fromPartial(object.scheduler) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSchedulerResponseAmino): QueryGetSchedulerResponse {
    const message = createBaseQueryGetSchedulerResponse();
    if (object.scheduler !== undefined && object.scheduler !== null) {
      message.scheduler = Scheduler.fromAmino(object.scheduler);
    }
    return message;
  },
  toAmino(message: QueryGetSchedulerResponse): QueryGetSchedulerResponseAmino {
    const obj: any = {};
    obj.scheduler = message.scheduler ? Scheduler.toAmino(message.scheduler) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSchedulerResponseAminoMsg): QueryGetSchedulerResponse {
    return QueryGetSchedulerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSchedulerResponseProtoMsg): QueryGetSchedulerResponse {
    return QueryGetSchedulerResponse.decode(message.value);
  },
  toProto(message: QueryGetSchedulerResponse): Uint8Array {
    return QueryGetSchedulerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSchedulerResponse): QueryGetSchedulerResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerResponse",
      value: QueryGetSchedulerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSchedulerRequest(): QueryAllSchedulerRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllSchedulerRequest = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerRequest",
  encode(message: QueryAllSchedulerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllSchedulerRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllSchedulerRequest>): QueryAllSchedulerRequest {
    const message = createBaseQueryAllSchedulerRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSchedulerRequestAmino): QueryAllSchedulerRequest {
    const message = createBaseQueryAllSchedulerRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSchedulerRequest): QueryAllSchedulerRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSchedulerRequestAminoMsg): QueryAllSchedulerRequest {
    return QueryAllSchedulerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSchedulerRequestProtoMsg): QueryAllSchedulerRequest {
    return QueryAllSchedulerRequest.decode(message.value);
  },
  toProto(message: QueryAllSchedulerRequest): Uint8Array {
    return QueryAllSchedulerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSchedulerRequest): QueryAllSchedulerRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerRequest",
      value: QueryAllSchedulerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSchedulerResponse(): QueryAllSchedulerResponse {
  return {
    scheduler: [],
    pagination: undefined
  };
}
export const QueryAllSchedulerResponse = {
  typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerResponse",
  encode(message: QueryAllSchedulerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.scheduler) {
      Scheduler.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllSchedulerResponse {
    return {
      scheduler: Array.isArray(object?.scheduler) ? object.scheduler.map((e: any) => Scheduler.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllSchedulerResponse>): QueryAllSchedulerResponse {
    const message = createBaseQueryAllSchedulerResponse();
    message.scheduler = object.scheduler?.map(e => Scheduler.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSchedulerResponseAmino): QueryAllSchedulerResponse {
    const message = createBaseQueryAllSchedulerResponse();
    message.scheduler = object.scheduler?.map(e => Scheduler.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSchedulerResponse): QueryAllSchedulerResponseAmino {
    const obj: any = {};
    if (message.scheduler) {
      obj.scheduler = message.scheduler.map(e => e ? Scheduler.toAmino(e) : undefined);
    } else {
      obj.scheduler = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSchedulerResponseAminoMsg): QueryAllSchedulerResponse {
    return QueryAllSchedulerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSchedulerResponseProtoMsg): QueryAllSchedulerResponse {
    return QueryAllSchedulerResponse.decode(message.value);
  },
  toProto(message: QueryAllSchedulerResponse): Uint8Array {
    return QueryAllSchedulerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSchedulerResponse): QueryAllSchedulerResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerResponse",
      value: QueryAllSchedulerResponse.encode(message).finish()
    };
  }
};