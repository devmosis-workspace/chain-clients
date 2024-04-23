import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StateInfoIndex, StateInfoIndexAmino, StateInfoIndexSDKType, StateInfo, StateInfoAmino, StateInfoSDKType, StateInfoSummary, StateInfoSummaryAmino, StateInfoSummarySDKType } from "./state_info";
import { Rollapp, RollappAmino, RollappSDKType, RollappSummary, RollappSummaryAmino, RollappSummarySDKType } from "./rollapp";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryParamsRequest";
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
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetRollappRequest {
  rollappId: string;
}
export interface QueryGetRollappRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappRequest";
  value: Uint8Array;
}
export interface QueryGetRollappRequestAmino {
  rollappId?: string;
}
export interface QueryGetRollappRequestAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryGetRollappRequest";
  value: QueryGetRollappRequestAmino;
}
export interface QueryGetRollappRequestSDKType {
  rollappId: string;
}
export interface QueryGetRollappByEIP155Request {
  eip155: bigint;
}
export interface QueryGetRollappByEIP155RequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappByEIP155Request";
  value: Uint8Array;
}
export interface QueryGetRollappByEIP155RequestAmino {
  eip155?: string;
}
export interface QueryGetRollappByEIP155RequestAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryGetRollappByEIP155Request";
  value: QueryGetRollappByEIP155RequestAmino;
}
export interface QueryGetRollappByEIP155RequestSDKType {
  eip155: bigint;
}
export interface QueryGetLatestStateIndexRequest {
  rollappId: string;
  finalized: boolean;
}
export interface QueryGetLatestStateIndexRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexRequest";
  value: Uint8Array;
}
export interface QueryGetLatestStateIndexRequestAmino {
  rollappId?: string;
  finalized?: boolean;
}
export interface QueryGetLatestStateIndexRequestAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexRequest";
  value: QueryGetLatestStateIndexRequestAmino;
}
export interface QueryGetLatestStateIndexRequestSDKType {
  rollappId: string;
  finalized: boolean;
}
export interface QueryGetLatestStateIndexResponse {
  stateIndex: StateInfoIndex;
}
export interface QueryGetLatestStateIndexResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexResponse";
  value: Uint8Array;
}
export interface QueryGetLatestStateIndexResponseAmino {
  stateIndex?: StateInfoIndexAmino;
}
export interface QueryGetLatestStateIndexResponseAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexResponse";
  value: QueryGetLatestStateIndexResponseAmino;
}
export interface QueryGetLatestStateIndexResponseSDKType {
  stateIndex: StateInfoIndexSDKType;
}
export interface QueryGetRollappResponse {
  rollapp: Rollapp;
  /** Defines the index of the last rollapp UpdateState. */
  latestStateIndex?: StateInfoIndex;
  /** Defines the index of the last rollapp UpdateState that was finalized. */
  latestFinalizedStateIndex?: StateInfoIndex;
}
export interface QueryGetRollappResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappResponse";
  value: Uint8Array;
}
export interface QueryGetRollappResponseAmino {
  rollapp?: RollappAmino;
  /** Defines the index of the last rollapp UpdateState. */
  latestStateIndex?: StateInfoIndexAmino;
  /** Defines the index of the last rollapp UpdateState that was finalized. */
  latestFinalizedStateIndex?: StateInfoIndexAmino;
}
export interface QueryGetRollappResponseAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryGetRollappResponse";
  value: QueryGetRollappResponseAmino;
}
export interface QueryGetRollappResponseSDKType {
  rollapp: RollappSDKType;
  latestStateIndex?: StateInfoIndexSDKType;
  latestFinalizedStateIndex?: StateInfoIndexSDKType;
}
export interface QueryAllRollappRequest {
  pagination?: PageRequest;
}
export interface QueryAllRollappRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllRollappRequest";
  value: Uint8Array;
}
export interface QueryAllRollappRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllRollappRequestAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryAllRollappRequest";
  value: QueryAllRollappRequestAmino;
}
export interface QueryAllRollappRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllRollappResponse {
  rollapp: RollappSummary[];
  pagination?: PageResponse;
}
export interface QueryAllRollappResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllRollappResponse";
  value: Uint8Array;
}
export interface QueryAllRollappResponseAmino {
  rollapp?: RollappSummaryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllRollappResponseAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryAllRollappResponse";
  value: QueryAllRollappResponseAmino;
}
export interface QueryAllRollappResponseSDKType {
  rollapp: RollappSummarySDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetStateInfoRequest {
  rollappId: string;
  index: bigint;
  height: bigint;
  finalized: boolean;
}
export interface QueryGetStateInfoRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoRequest";
  value: Uint8Array;
}
export interface QueryGetStateInfoRequestAmino {
  rollappId?: string;
  index?: string;
  height?: string;
  finalized?: boolean;
}
export interface QueryGetStateInfoRequestAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoRequest";
  value: QueryGetStateInfoRequestAmino;
}
export interface QueryGetStateInfoRequestSDKType {
  rollappId: string;
  index: bigint;
  height: bigint;
  finalized: boolean;
}
export interface QueryGetStateInfoResponse {
  stateInfo: StateInfo;
}
export interface QueryGetStateInfoResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoResponse";
  value: Uint8Array;
}
export interface QueryGetStateInfoResponseAmino {
  stateInfo?: StateInfoAmino;
}
export interface QueryGetStateInfoResponseAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoResponse";
  value: QueryGetStateInfoResponseAmino;
}
export interface QueryGetStateInfoResponseSDKType {
  stateInfo: StateInfoSDKType;
}
export interface QueryAllStateInfoRequest {
  rollappId: string;
  pagination?: PageRequest;
}
export interface QueryAllStateInfoRequestProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoRequest";
  value: Uint8Array;
}
export interface QueryAllStateInfoRequestAmino {
  rollappId?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllStateInfoRequestAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoRequest";
  value: QueryAllStateInfoRequestAmino;
}
export interface QueryAllStateInfoRequestSDKType {
  rollappId: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllStateInfoResponse {
  stateInfo: StateInfoSummary[];
  pagination?: PageResponse;
}
export interface QueryAllStateInfoResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoResponse";
  value: Uint8Array;
}
export interface QueryAllStateInfoResponseAmino {
  stateInfo?: StateInfoSummaryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllStateInfoResponseAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoResponse";
  value: QueryAllStateInfoResponseAmino;
}
export interface QueryAllStateInfoResponseSDKType {
  stateInfo: StateInfoSummarySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryParamsRequest",
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
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryParamsRequest",
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
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryParamsResponse",
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
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRollappRequest(): QueryGetRollappRequest {
  return {
    rollappId: ""
  };
}
export const QueryGetRollappRequest = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappRequest",
  encode(message: QueryGetRollappRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rollappId !== "") {
      writer.uint32(10).string(message.rollappId);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRollappRequest {
    return {
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : ""
    };
  },
  fromPartial(object: Partial<QueryGetRollappRequest>): QueryGetRollappRequest {
    const message = createBaseQueryGetRollappRequest();
    message.rollappId = object.rollappId ?? "";
    return message;
  },
  fromAmino(object: QueryGetRollappRequestAmino): QueryGetRollappRequest {
    const message = createBaseQueryGetRollappRequest();
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    return message;
  },
  toAmino(message: QueryGetRollappRequest): QueryGetRollappRequestAmino {
    const obj: any = {};
    obj.rollappId = message.rollappId;
    return obj;
  },
  fromAminoMsg(object: QueryGetRollappRequestAminoMsg): QueryGetRollappRequest {
    return QueryGetRollappRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRollappRequestProtoMsg): QueryGetRollappRequest {
    return QueryGetRollappRequest.decode(message.value);
  },
  toProto(message: QueryGetRollappRequest): Uint8Array {
    return QueryGetRollappRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRollappRequest): QueryGetRollappRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappRequest",
      value: QueryGetRollappRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetRollappByEIP155Request(): QueryGetRollappByEIP155Request {
  return {
    eip155: BigInt(0)
  };
}
export const QueryGetRollappByEIP155Request = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappByEIP155Request",
  encode(message: QueryGetRollappByEIP155Request, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eip155 !== BigInt(0)) {
      writer.uint32(8).uint64(message.eip155);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRollappByEIP155Request {
    return {
      eip155: isSet(object.eip155) ? BigInt(object.eip155.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetRollappByEIP155Request>): QueryGetRollappByEIP155Request {
    const message = createBaseQueryGetRollappByEIP155Request();
    message.eip155 = object.eip155 !== undefined && object.eip155 !== null ? BigInt(object.eip155.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetRollappByEIP155RequestAmino): QueryGetRollappByEIP155Request {
    const message = createBaseQueryGetRollappByEIP155Request();
    if (object.eip155 !== undefined && object.eip155 !== null) {
      message.eip155 = BigInt(object.eip155);
    }
    return message;
  },
  toAmino(message: QueryGetRollappByEIP155Request): QueryGetRollappByEIP155RequestAmino {
    const obj: any = {};
    obj.eip155 = message.eip155 ? message.eip155.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRollappByEIP155RequestAminoMsg): QueryGetRollappByEIP155Request {
    return QueryGetRollappByEIP155Request.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRollappByEIP155RequestProtoMsg): QueryGetRollappByEIP155Request {
    return QueryGetRollappByEIP155Request.decode(message.value);
  },
  toProto(message: QueryGetRollappByEIP155Request): Uint8Array {
    return QueryGetRollappByEIP155Request.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRollappByEIP155Request): QueryGetRollappByEIP155RequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappByEIP155Request",
      value: QueryGetRollappByEIP155Request.encode(message).finish()
    };
  }
};
function createBaseQueryGetLatestStateIndexRequest(): QueryGetLatestStateIndexRequest {
  return {
    rollappId: "",
    finalized: false
  };
}
export const QueryGetLatestStateIndexRequest = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexRequest",
  encode(message: QueryGetLatestStateIndexRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rollappId !== "") {
      writer.uint32(10).string(message.rollappId);
    }
    if (message.finalized === true) {
      writer.uint32(16).bool(message.finalized);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetLatestStateIndexRequest {
    return {
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : "",
      finalized: isSet(object.finalized) ? Boolean(object.finalized) : false
    };
  },
  fromPartial(object: Partial<QueryGetLatestStateIndexRequest>): QueryGetLatestStateIndexRequest {
    const message = createBaseQueryGetLatestStateIndexRequest();
    message.rollappId = object.rollappId ?? "";
    message.finalized = object.finalized ?? false;
    return message;
  },
  fromAmino(object: QueryGetLatestStateIndexRequestAmino): QueryGetLatestStateIndexRequest {
    const message = createBaseQueryGetLatestStateIndexRequest();
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    if (object.finalized !== undefined && object.finalized !== null) {
      message.finalized = object.finalized;
    }
    return message;
  },
  toAmino(message: QueryGetLatestStateIndexRequest): QueryGetLatestStateIndexRequestAmino {
    const obj: any = {};
    obj.rollappId = message.rollappId;
    obj.finalized = message.finalized;
    return obj;
  },
  fromAminoMsg(object: QueryGetLatestStateIndexRequestAminoMsg): QueryGetLatestStateIndexRequest {
    return QueryGetLatestStateIndexRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLatestStateIndexRequestProtoMsg): QueryGetLatestStateIndexRequest {
    return QueryGetLatestStateIndexRequest.decode(message.value);
  },
  toProto(message: QueryGetLatestStateIndexRequest): Uint8Array {
    return QueryGetLatestStateIndexRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLatestStateIndexRequest): QueryGetLatestStateIndexRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexRequest",
      value: QueryGetLatestStateIndexRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetLatestStateIndexResponse(): QueryGetLatestStateIndexResponse {
  return {
    stateIndex: StateInfoIndex.fromPartial({})
  };
}
export const QueryGetLatestStateIndexResponse = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexResponse",
  encode(message: QueryGetLatestStateIndexResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stateIndex !== undefined) {
      StateInfoIndex.encode(message.stateIndex, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetLatestStateIndexResponse {
    return {
      stateIndex: isSet(object.stateIndex) ? StateInfoIndex.fromJSON(object.stateIndex) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetLatestStateIndexResponse>): QueryGetLatestStateIndexResponse {
    const message = createBaseQueryGetLatestStateIndexResponse();
    message.stateIndex = object.stateIndex !== undefined && object.stateIndex !== null ? StateInfoIndex.fromPartial(object.stateIndex) : undefined;
    return message;
  },
  fromAmino(object: QueryGetLatestStateIndexResponseAmino): QueryGetLatestStateIndexResponse {
    const message = createBaseQueryGetLatestStateIndexResponse();
    if (object.stateIndex !== undefined && object.stateIndex !== null) {
      message.stateIndex = StateInfoIndex.fromAmino(object.stateIndex);
    }
    return message;
  },
  toAmino(message: QueryGetLatestStateIndexResponse): QueryGetLatestStateIndexResponseAmino {
    const obj: any = {};
    obj.stateIndex = message.stateIndex ? StateInfoIndex.toAmino(message.stateIndex) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetLatestStateIndexResponseAminoMsg): QueryGetLatestStateIndexResponse {
    return QueryGetLatestStateIndexResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLatestStateIndexResponseProtoMsg): QueryGetLatestStateIndexResponse {
    return QueryGetLatestStateIndexResponse.decode(message.value);
  },
  toProto(message: QueryGetLatestStateIndexResponse): Uint8Array {
    return QueryGetLatestStateIndexResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLatestStateIndexResponse): QueryGetLatestStateIndexResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexResponse",
      value: QueryGetLatestStateIndexResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRollappResponse(): QueryGetRollappResponse {
  return {
    rollapp: Rollapp.fromPartial({}),
    latestStateIndex: undefined,
    latestFinalizedStateIndex: undefined
  };
}
export const QueryGetRollappResponse = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappResponse",
  encode(message: QueryGetRollappResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rollapp !== undefined) {
      Rollapp.encode(message.rollapp, writer.uint32(10).fork()).ldelim();
    }
    if (message.latestStateIndex !== undefined) {
      StateInfoIndex.encode(message.latestStateIndex, writer.uint32(18).fork()).ldelim();
    }
    if (message.latestFinalizedStateIndex !== undefined) {
      StateInfoIndex.encode(message.latestFinalizedStateIndex, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRollappResponse {
    return {
      rollapp: isSet(object.rollapp) ? Rollapp.fromJSON(object.rollapp) : undefined,
      latestStateIndex: isSet(object.latestStateIndex) ? StateInfoIndex.fromJSON(object.latestStateIndex) : undefined,
      latestFinalizedStateIndex: isSet(object.latestFinalizedStateIndex) ? StateInfoIndex.fromJSON(object.latestFinalizedStateIndex) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetRollappResponse>): QueryGetRollappResponse {
    const message = createBaseQueryGetRollappResponse();
    message.rollapp = object.rollapp !== undefined && object.rollapp !== null ? Rollapp.fromPartial(object.rollapp) : undefined;
    message.latestStateIndex = object.latestStateIndex !== undefined && object.latestStateIndex !== null ? StateInfoIndex.fromPartial(object.latestStateIndex) : undefined;
    message.latestFinalizedStateIndex = object.latestFinalizedStateIndex !== undefined && object.latestFinalizedStateIndex !== null ? StateInfoIndex.fromPartial(object.latestFinalizedStateIndex) : undefined;
    return message;
  },
  fromAmino(object: QueryGetRollappResponseAmino): QueryGetRollappResponse {
    const message = createBaseQueryGetRollappResponse();
    if (object.rollapp !== undefined && object.rollapp !== null) {
      message.rollapp = Rollapp.fromAmino(object.rollapp);
    }
    if (object.latestStateIndex !== undefined && object.latestStateIndex !== null) {
      message.latestStateIndex = StateInfoIndex.fromAmino(object.latestStateIndex);
    }
    if (object.latestFinalizedStateIndex !== undefined && object.latestFinalizedStateIndex !== null) {
      message.latestFinalizedStateIndex = StateInfoIndex.fromAmino(object.latestFinalizedStateIndex);
    }
    return message;
  },
  toAmino(message: QueryGetRollappResponse): QueryGetRollappResponseAmino {
    const obj: any = {};
    obj.rollapp = message.rollapp ? Rollapp.toAmino(message.rollapp) : undefined;
    obj.latestStateIndex = message.latestStateIndex ? StateInfoIndex.toAmino(message.latestStateIndex) : undefined;
    obj.latestFinalizedStateIndex = message.latestFinalizedStateIndex ? StateInfoIndex.toAmino(message.latestFinalizedStateIndex) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRollappResponseAminoMsg): QueryGetRollappResponse {
    return QueryGetRollappResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRollappResponseProtoMsg): QueryGetRollappResponse {
    return QueryGetRollappResponse.decode(message.value);
  },
  toProto(message: QueryGetRollappResponse): Uint8Array {
    return QueryGetRollappResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRollappResponse): QueryGetRollappResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappResponse",
      value: QueryGetRollappResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllRollappRequest(): QueryAllRollappRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllRollappRequest = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllRollappRequest",
  encode(message: QueryAllRollappRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRollappRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRollappRequest>): QueryAllRollappRequest {
    const message = createBaseQueryAllRollappRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRollappRequestAmino): QueryAllRollappRequest {
    const message = createBaseQueryAllRollappRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRollappRequest): QueryAllRollappRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRollappRequestAminoMsg): QueryAllRollappRequest {
    return QueryAllRollappRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRollappRequestProtoMsg): QueryAllRollappRequest {
    return QueryAllRollappRequest.decode(message.value);
  },
  toProto(message: QueryAllRollappRequest): Uint8Array {
    return QueryAllRollappRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRollappRequest): QueryAllRollappRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllRollappRequest",
      value: QueryAllRollappRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllRollappResponse(): QueryAllRollappResponse {
  return {
    rollapp: [],
    pagination: undefined
  };
}
export const QueryAllRollappResponse = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllRollappResponse",
  encode(message: QueryAllRollappResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rollapp) {
      RollappSummary.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRollappResponse {
    return {
      rollapp: Array.isArray(object?.rollapp) ? object.rollapp.map((e: any) => RollappSummary.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRollappResponse>): QueryAllRollappResponse {
    const message = createBaseQueryAllRollappResponse();
    message.rollapp = object.rollapp?.map(e => RollappSummary.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRollappResponseAmino): QueryAllRollappResponse {
    const message = createBaseQueryAllRollappResponse();
    message.rollapp = object.rollapp?.map(e => RollappSummary.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRollappResponse): QueryAllRollappResponseAmino {
    const obj: any = {};
    if (message.rollapp) {
      obj.rollapp = message.rollapp.map(e => e ? RollappSummary.toAmino(e) : undefined);
    } else {
      obj.rollapp = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRollappResponseAminoMsg): QueryAllRollappResponse {
    return QueryAllRollappResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRollappResponseProtoMsg): QueryAllRollappResponse {
    return QueryAllRollappResponse.decode(message.value);
  },
  toProto(message: QueryAllRollappResponse): Uint8Array {
    return QueryAllRollappResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRollappResponse): QueryAllRollappResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllRollappResponse",
      value: QueryAllRollappResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetStateInfoRequest(): QueryGetStateInfoRequest {
  return {
    rollappId: "",
    index: BigInt(0),
    height: BigInt(0),
    finalized: false
  };
}
export const QueryGetStateInfoRequest = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoRequest",
  encode(message: QueryGetStateInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rollappId !== "") {
      writer.uint32(10).string(message.rollappId);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(16).uint64(message.index);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.finalized === true) {
      writer.uint32(32).bool(message.finalized);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetStateInfoRequest {
    return {
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : "",
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      finalized: isSet(object.finalized) ? Boolean(object.finalized) : false
    };
  },
  fromPartial(object: Partial<QueryGetStateInfoRequest>): QueryGetStateInfoRequest {
    const message = createBaseQueryGetStateInfoRequest();
    message.rollappId = object.rollappId ?? "";
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.finalized = object.finalized ?? false;
    return message;
  },
  fromAmino(object: QueryGetStateInfoRequestAmino): QueryGetStateInfoRequest {
    const message = createBaseQueryGetStateInfoRequest();
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.finalized !== undefined && object.finalized !== null) {
      message.finalized = object.finalized;
    }
    return message;
  },
  toAmino(message: QueryGetStateInfoRequest): QueryGetStateInfoRequestAmino {
    const obj: any = {};
    obj.rollappId = message.rollappId;
    obj.index = message.index ? message.index.toString() : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.finalized = message.finalized;
    return obj;
  },
  fromAminoMsg(object: QueryGetStateInfoRequestAminoMsg): QueryGetStateInfoRequest {
    return QueryGetStateInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStateInfoRequestProtoMsg): QueryGetStateInfoRequest {
    return QueryGetStateInfoRequest.decode(message.value);
  },
  toProto(message: QueryGetStateInfoRequest): Uint8Array {
    return QueryGetStateInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStateInfoRequest): QueryGetStateInfoRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoRequest",
      value: QueryGetStateInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetStateInfoResponse(): QueryGetStateInfoResponse {
  return {
    stateInfo: StateInfo.fromPartial({})
  };
}
export const QueryGetStateInfoResponse = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoResponse",
  encode(message: QueryGetStateInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stateInfo !== undefined) {
      StateInfo.encode(message.stateInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetStateInfoResponse {
    return {
      stateInfo: isSet(object.stateInfo) ? StateInfo.fromJSON(object.stateInfo) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetStateInfoResponse>): QueryGetStateInfoResponse {
    const message = createBaseQueryGetStateInfoResponse();
    message.stateInfo = object.stateInfo !== undefined && object.stateInfo !== null ? StateInfo.fromPartial(object.stateInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryGetStateInfoResponseAmino): QueryGetStateInfoResponse {
    const message = createBaseQueryGetStateInfoResponse();
    if (object.stateInfo !== undefined && object.stateInfo !== null) {
      message.stateInfo = StateInfo.fromAmino(object.stateInfo);
    }
    return message;
  },
  toAmino(message: QueryGetStateInfoResponse): QueryGetStateInfoResponseAmino {
    const obj: any = {};
    obj.stateInfo = message.stateInfo ? StateInfo.toAmino(message.stateInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStateInfoResponseAminoMsg): QueryGetStateInfoResponse {
    return QueryGetStateInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStateInfoResponseProtoMsg): QueryGetStateInfoResponse {
    return QueryGetStateInfoResponse.decode(message.value);
  },
  toProto(message: QueryGetStateInfoResponse): Uint8Array {
    return QueryGetStateInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStateInfoResponse): QueryGetStateInfoResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoResponse",
      value: QueryGetStateInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllStateInfoRequest(): QueryAllStateInfoRequest {
  return {
    rollappId: "",
    pagination: undefined
  };
}
export const QueryAllStateInfoRequest = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoRequest",
  encode(message: QueryAllStateInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rollappId !== "") {
      writer.uint32(10).string(message.rollappId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllStateInfoRequest {
    return {
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllStateInfoRequest>): QueryAllStateInfoRequest {
    const message = createBaseQueryAllStateInfoRequest();
    message.rollappId = object.rollappId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStateInfoRequestAmino): QueryAllStateInfoRequest {
    const message = createBaseQueryAllStateInfoRequest();
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStateInfoRequest): QueryAllStateInfoRequestAmino {
    const obj: any = {};
    obj.rollappId = message.rollappId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStateInfoRequestAminoMsg): QueryAllStateInfoRequest {
    return QueryAllStateInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStateInfoRequestProtoMsg): QueryAllStateInfoRequest {
    return QueryAllStateInfoRequest.decode(message.value);
  },
  toProto(message: QueryAllStateInfoRequest): Uint8Array {
    return QueryAllStateInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStateInfoRequest): QueryAllStateInfoRequestProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoRequest",
      value: QueryAllStateInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllStateInfoResponse(): QueryAllStateInfoResponse {
  return {
    stateInfo: [],
    pagination: undefined
  };
}
export const QueryAllStateInfoResponse = {
  typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoResponse",
  encode(message: QueryAllStateInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stateInfo) {
      StateInfoSummary.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllStateInfoResponse {
    return {
      stateInfo: Array.isArray(object?.stateInfo) ? object.stateInfo.map((e: any) => StateInfoSummary.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllStateInfoResponse>): QueryAllStateInfoResponse {
    const message = createBaseQueryAllStateInfoResponse();
    message.stateInfo = object.stateInfo?.map(e => StateInfoSummary.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStateInfoResponseAmino): QueryAllStateInfoResponse {
    const message = createBaseQueryAllStateInfoResponse();
    message.stateInfo = object.stateInfo?.map(e => StateInfoSummary.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStateInfoResponse): QueryAllStateInfoResponseAmino {
    const obj: any = {};
    if (message.stateInfo) {
      obj.stateInfo = message.stateInfo.map(e => e ? StateInfoSummary.toAmino(e) : undefined);
    } else {
      obj.stateInfo = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStateInfoResponseAminoMsg): QueryAllStateInfoResponse {
    return QueryAllStateInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStateInfoResponseProtoMsg): QueryAllStateInfoResponse {
    return QueryAllStateInfoResponse.decode(message.value);
  },
  toProto(message: QueryAllStateInfoResponse): Uint8Array {
    return QueryAllStateInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStateInfoResponse): QueryAllStateInfoResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoResponse",
      value: QueryAllStateInfoResponse.encode(message).finish()
    };
  }
};