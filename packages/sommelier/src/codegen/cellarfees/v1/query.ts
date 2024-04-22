import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { FeeAccrualCounters, FeeAccrualCountersAmino, FeeAccrualCountersSDKType } from "./cellarfees";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cellarfees.v1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/cellarfees.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cellarfees.v1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/cellarfees.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryModuleAccountsRequest {}
export interface QueryModuleAccountsRequestProtoMsg {
  typeUrl: "/cellarfees.v1.QueryModuleAccountsRequest";
  value: Uint8Array;
}
export interface QueryModuleAccountsRequestAmino {}
export interface QueryModuleAccountsRequestAminoMsg {
  type: "/cellarfees.v1.QueryModuleAccountsRequest";
  value: QueryModuleAccountsRequestAmino;
}
export interface QueryModuleAccountsRequestSDKType {}
export interface QueryModuleAccountsResponse {
  feesAddress: string;
}
export interface QueryModuleAccountsResponseProtoMsg {
  typeUrl: "/cellarfees.v1.QueryModuleAccountsResponse";
  value: Uint8Array;
}
export interface QueryModuleAccountsResponseAmino {
  fees_address?: string;
}
export interface QueryModuleAccountsResponseAminoMsg {
  type: "/cellarfees.v1.QueryModuleAccountsResponse";
  value: QueryModuleAccountsResponseAmino;
}
export interface QueryModuleAccountsResponseSDKType {
  fees_address: string;
}
export interface QueryLastRewardSupplyPeakRequest {}
export interface QueryLastRewardSupplyPeakRequestProtoMsg {
  typeUrl: "/cellarfees.v1.QueryLastRewardSupplyPeakRequest";
  value: Uint8Array;
}
export interface QueryLastRewardSupplyPeakRequestAmino {}
export interface QueryLastRewardSupplyPeakRequestAminoMsg {
  type: "/cellarfees.v1.QueryLastRewardSupplyPeakRequest";
  value: QueryLastRewardSupplyPeakRequestAmino;
}
export interface QueryLastRewardSupplyPeakRequestSDKType {}
export interface QueryLastRewardSupplyPeakResponse {
  lastRewardSupplyPeak: string;
}
export interface QueryLastRewardSupplyPeakResponseProtoMsg {
  typeUrl: "/cellarfees.v1.QueryLastRewardSupplyPeakResponse";
  value: Uint8Array;
}
export interface QueryLastRewardSupplyPeakResponseAmino {
  last_reward_supply_peak?: string;
}
export interface QueryLastRewardSupplyPeakResponseAminoMsg {
  type: "/cellarfees.v1.QueryLastRewardSupplyPeakResponse";
  value: QueryLastRewardSupplyPeakResponseAmino;
}
export interface QueryLastRewardSupplyPeakResponseSDKType {
  last_reward_supply_peak: string;
}
export interface QueryFeeAccrualCountersRequest {}
export interface QueryFeeAccrualCountersRequestProtoMsg {
  typeUrl: "/cellarfees.v1.QueryFeeAccrualCountersRequest";
  value: Uint8Array;
}
export interface QueryFeeAccrualCountersRequestAmino {}
export interface QueryFeeAccrualCountersRequestAminoMsg {
  type: "/cellarfees.v1.QueryFeeAccrualCountersRequest";
  value: QueryFeeAccrualCountersRequestAmino;
}
export interface QueryFeeAccrualCountersRequestSDKType {}
export interface QueryFeeAccrualCountersResponse {
  feeAccrualCounters: FeeAccrualCounters;
}
export interface QueryFeeAccrualCountersResponseProtoMsg {
  typeUrl: "/cellarfees.v1.QueryFeeAccrualCountersResponse";
  value: Uint8Array;
}
export interface QueryFeeAccrualCountersResponseAmino {
  fee_accrual_counters?: FeeAccrualCountersAmino;
}
export interface QueryFeeAccrualCountersResponseAminoMsg {
  type: "/cellarfees.v1.QueryFeeAccrualCountersResponse";
  value: QueryFeeAccrualCountersResponseAmino;
}
export interface QueryFeeAccrualCountersResponseSDKType {
  fee_accrual_counters: FeeAccrualCountersSDKType;
}
export interface QueryAPYRequest {}
export interface QueryAPYRequestProtoMsg {
  typeUrl: "/cellarfees.v1.QueryAPYRequest";
  value: Uint8Array;
}
export interface QueryAPYRequestAmino {}
export interface QueryAPYRequestAminoMsg {
  type: "/cellarfees.v1.QueryAPYRequest";
  value: QueryAPYRequestAmino;
}
export interface QueryAPYRequestSDKType {}
export interface QueryAPYResponse {
  apy: string;
}
export interface QueryAPYResponseProtoMsg {
  typeUrl: "/cellarfees.v1.QueryAPYResponse";
  value: Uint8Array;
}
export interface QueryAPYResponseAmino {
  apy?: string;
}
export interface QueryAPYResponseAminoMsg {
  type: "/cellarfees.v1.QueryAPYResponse";
  value: QueryAPYResponseAmino;
}
export interface QueryAPYResponseSDKType {
  apy: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cellarfees.v1.QueryParamsRequest",
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
      typeUrl: "/cellarfees.v1.QueryParamsRequest",
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
  typeUrl: "/cellarfees.v1.QueryParamsResponse",
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
      typeUrl: "/cellarfees.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAccountsRequest(): QueryModuleAccountsRequest {
  return {};
}
export const QueryModuleAccountsRequest = {
  typeUrl: "/cellarfees.v1.QueryModuleAccountsRequest",
  encode(_: QueryModuleAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryModuleAccountsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },
  fromAmino(_: QueryModuleAccountsRequestAmino): QueryModuleAccountsRequest {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },
  toAmino(_: QueryModuleAccountsRequest): QueryModuleAccountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountsRequestAminoMsg): QueryModuleAccountsRequest {
    return QueryModuleAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleAccountsRequestProtoMsg): QueryModuleAccountsRequest {
    return QueryModuleAccountsRequest.decode(message.value);
  },
  toProto(message: QueryModuleAccountsRequest): Uint8Array {
    return QueryModuleAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestProtoMsg {
    return {
      typeUrl: "/cellarfees.v1.QueryModuleAccountsRequest",
      value: QueryModuleAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAccountsResponse(): QueryModuleAccountsResponse {
  return {
    feesAddress: ""
  };
}
export const QueryModuleAccountsResponse = {
  typeUrl: "/cellarfees.v1.QueryModuleAccountsResponse",
  encode(message: QueryModuleAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feesAddress !== "") {
      writer.uint32(10).string(message.feesAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryModuleAccountsResponse {
    return {
      feesAddress: isSet(object.feesAddress) ? String(object.feesAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse {
    const message = createBaseQueryModuleAccountsResponse();
    message.feesAddress = object.feesAddress ?? "";
    return message;
  },
  fromAmino(object: QueryModuleAccountsResponseAmino): QueryModuleAccountsResponse {
    const message = createBaseQueryModuleAccountsResponse();
    if (object.fees_address !== undefined && object.fees_address !== null) {
      message.feesAddress = object.fees_address;
    }
    return message;
  },
  toAmino(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAmino {
    const obj: any = {};
    obj.fees_address = message.feesAddress;
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountsResponseAminoMsg): QueryModuleAccountsResponse {
    return QueryModuleAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleAccountsResponseProtoMsg): QueryModuleAccountsResponse {
    return QueryModuleAccountsResponse.decode(message.value);
  },
  toProto(message: QueryModuleAccountsResponse): Uint8Array {
    return QueryModuleAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseProtoMsg {
    return {
      typeUrl: "/cellarfees.v1.QueryModuleAccountsResponse",
      value: QueryModuleAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastRewardSupplyPeakRequest(): QueryLastRewardSupplyPeakRequest {
  return {};
}
export const QueryLastRewardSupplyPeakRequest = {
  typeUrl: "/cellarfees.v1.QueryLastRewardSupplyPeakRequest",
  encode(_: QueryLastRewardSupplyPeakRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryLastRewardSupplyPeakRequest {
    return {};
  },
  fromPartial(_: Partial<QueryLastRewardSupplyPeakRequest>): QueryLastRewardSupplyPeakRequest {
    const message = createBaseQueryLastRewardSupplyPeakRequest();
    return message;
  },
  fromAmino(_: QueryLastRewardSupplyPeakRequestAmino): QueryLastRewardSupplyPeakRequest {
    const message = createBaseQueryLastRewardSupplyPeakRequest();
    return message;
  },
  toAmino(_: QueryLastRewardSupplyPeakRequest): QueryLastRewardSupplyPeakRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLastRewardSupplyPeakRequestAminoMsg): QueryLastRewardSupplyPeakRequest {
    return QueryLastRewardSupplyPeakRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastRewardSupplyPeakRequestProtoMsg): QueryLastRewardSupplyPeakRequest {
    return QueryLastRewardSupplyPeakRequest.decode(message.value);
  },
  toProto(message: QueryLastRewardSupplyPeakRequest): Uint8Array {
    return QueryLastRewardSupplyPeakRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastRewardSupplyPeakRequest): QueryLastRewardSupplyPeakRequestProtoMsg {
    return {
      typeUrl: "/cellarfees.v1.QueryLastRewardSupplyPeakRequest",
      value: QueryLastRewardSupplyPeakRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastRewardSupplyPeakResponse(): QueryLastRewardSupplyPeakResponse {
  return {
    lastRewardSupplyPeak: ""
  };
}
export const QueryLastRewardSupplyPeakResponse = {
  typeUrl: "/cellarfees.v1.QueryLastRewardSupplyPeakResponse",
  encode(message: QueryLastRewardSupplyPeakResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastRewardSupplyPeak !== "") {
      writer.uint32(10).string(message.lastRewardSupplyPeak);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastRewardSupplyPeakResponse {
    return {
      lastRewardSupplyPeak: isSet(object.lastRewardSupplyPeak) ? String(object.lastRewardSupplyPeak) : ""
    };
  },
  fromPartial(object: Partial<QueryLastRewardSupplyPeakResponse>): QueryLastRewardSupplyPeakResponse {
    const message = createBaseQueryLastRewardSupplyPeakResponse();
    message.lastRewardSupplyPeak = object.lastRewardSupplyPeak ?? "";
    return message;
  },
  fromAmino(object: QueryLastRewardSupplyPeakResponseAmino): QueryLastRewardSupplyPeakResponse {
    const message = createBaseQueryLastRewardSupplyPeakResponse();
    if (object.last_reward_supply_peak !== undefined && object.last_reward_supply_peak !== null) {
      message.lastRewardSupplyPeak = object.last_reward_supply_peak;
    }
    return message;
  },
  toAmino(message: QueryLastRewardSupplyPeakResponse): QueryLastRewardSupplyPeakResponseAmino {
    const obj: any = {};
    obj.last_reward_supply_peak = message.lastRewardSupplyPeak;
    return obj;
  },
  fromAminoMsg(object: QueryLastRewardSupplyPeakResponseAminoMsg): QueryLastRewardSupplyPeakResponse {
    return QueryLastRewardSupplyPeakResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastRewardSupplyPeakResponseProtoMsg): QueryLastRewardSupplyPeakResponse {
    return QueryLastRewardSupplyPeakResponse.decode(message.value);
  },
  toProto(message: QueryLastRewardSupplyPeakResponse): Uint8Array {
    return QueryLastRewardSupplyPeakResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastRewardSupplyPeakResponse): QueryLastRewardSupplyPeakResponseProtoMsg {
    return {
      typeUrl: "/cellarfees.v1.QueryLastRewardSupplyPeakResponse",
      value: QueryLastRewardSupplyPeakResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeAccrualCountersRequest(): QueryFeeAccrualCountersRequest {
  return {};
}
export const QueryFeeAccrualCountersRequest = {
  typeUrl: "/cellarfees.v1.QueryFeeAccrualCountersRequest",
  encode(_: QueryFeeAccrualCountersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryFeeAccrualCountersRequest {
    return {};
  },
  fromPartial(_: Partial<QueryFeeAccrualCountersRequest>): QueryFeeAccrualCountersRequest {
    const message = createBaseQueryFeeAccrualCountersRequest();
    return message;
  },
  fromAmino(_: QueryFeeAccrualCountersRequestAmino): QueryFeeAccrualCountersRequest {
    const message = createBaseQueryFeeAccrualCountersRequest();
    return message;
  },
  toAmino(_: QueryFeeAccrualCountersRequest): QueryFeeAccrualCountersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeAccrualCountersRequestAminoMsg): QueryFeeAccrualCountersRequest {
    return QueryFeeAccrualCountersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeAccrualCountersRequestProtoMsg): QueryFeeAccrualCountersRequest {
    return QueryFeeAccrualCountersRequest.decode(message.value);
  },
  toProto(message: QueryFeeAccrualCountersRequest): Uint8Array {
    return QueryFeeAccrualCountersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeAccrualCountersRequest): QueryFeeAccrualCountersRequestProtoMsg {
    return {
      typeUrl: "/cellarfees.v1.QueryFeeAccrualCountersRequest",
      value: QueryFeeAccrualCountersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeAccrualCountersResponse(): QueryFeeAccrualCountersResponse {
  return {
    feeAccrualCounters: FeeAccrualCounters.fromPartial({})
  };
}
export const QueryFeeAccrualCountersResponse = {
  typeUrl: "/cellarfees.v1.QueryFeeAccrualCountersResponse",
  encode(message: QueryFeeAccrualCountersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeAccrualCounters !== undefined) {
      FeeAccrualCounters.encode(message.feeAccrualCounters, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFeeAccrualCountersResponse {
    return {
      feeAccrualCounters: isSet(object.feeAccrualCounters) ? FeeAccrualCounters.fromJSON(object.feeAccrualCounters) : undefined
    };
  },
  fromPartial(object: Partial<QueryFeeAccrualCountersResponse>): QueryFeeAccrualCountersResponse {
    const message = createBaseQueryFeeAccrualCountersResponse();
    message.feeAccrualCounters = object.feeAccrualCounters !== undefined && object.feeAccrualCounters !== null ? FeeAccrualCounters.fromPartial(object.feeAccrualCounters) : undefined;
    return message;
  },
  fromAmino(object: QueryFeeAccrualCountersResponseAmino): QueryFeeAccrualCountersResponse {
    const message = createBaseQueryFeeAccrualCountersResponse();
    if (object.fee_accrual_counters !== undefined && object.fee_accrual_counters !== null) {
      message.feeAccrualCounters = FeeAccrualCounters.fromAmino(object.fee_accrual_counters);
    }
    return message;
  },
  toAmino(message: QueryFeeAccrualCountersResponse): QueryFeeAccrualCountersResponseAmino {
    const obj: any = {};
    obj.fee_accrual_counters = message.feeAccrualCounters ? FeeAccrualCounters.toAmino(message.feeAccrualCounters) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeAccrualCountersResponseAminoMsg): QueryFeeAccrualCountersResponse {
    return QueryFeeAccrualCountersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeAccrualCountersResponseProtoMsg): QueryFeeAccrualCountersResponse {
    return QueryFeeAccrualCountersResponse.decode(message.value);
  },
  toProto(message: QueryFeeAccrualCountersResponse): Uint8Array {
    return QueryFeeAccrualCountersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeAccrualCountersResponse): QueryFeeAccrualCountersResponseProtoMsg {
    return {
      typeUrl: "/cellarfees.v1.QueryFeeAccrualCountersResponse",
      value: QueryFeeAccrualCountersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAPYRequest(): QueryAPYRequest {
  return {};
}
export const QueryAPYRequest = {
  typeUrl: "/cellarfees.v1.QueryAPYRequest",
  encode(_: QueryAPYRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAPYRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAPYRequest>): QueryAPYRequest {
    const message = createBaseQueryAPYRequest();
    return message;
  },
  fromAmino(_: QueryAPYRequestAmino): QueryAPYRequest {
    const message = createBaseQueryAPYRequest();
    return message;
  },
  toAmino(_: QueryAPYRequest): QueryAPYRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAPYRequestAminoMsg): QueryAPYRequest {
    return QueryAPYRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAPYRequestProtoMsg): QueryAPYRequest {
    return QueryAPYRequest.decode(message.value);
  },
  toProto(message: QueryAPYRequest): Uint8Array {
    return QueryAPYRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAPYRequest): QueryAPYRequestProtoMsg {
    return {
      typeUrl: "/cellarfees.v1.QueryAPYRequest",
      value: QueryAPYRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAPYResponse(): QueryAPYResponse {
  return {
    apy: ""
  };
}
export const QueryAPYResponse = {
  typeUrl: "/cellarfees.v1.QueryAPYResponse",
  encode(message: QueryAPYResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apy !== "") {
      writer.uint32(10).string(message.apy);
    }
    return writer;
  },
  fromJSON(object: any): QueryAPYResponse {
    return {
      apy: isSet(object.apy) ? String(object.apy) : ""
    };
  },
  fromPartial(object: Partial<QueryAPYResponse>): QueryAPYResponse {
    const message = createBaseQueryAPYResponse();
    message.apy = object.apy ?? "";
    return message;
  },
  fromAmino(object: QueryAPYResponseAmino): QueryAPYResponse {
    const message = createBaseQueryAPYResponse();
    if (object.apy !== undefined && object.apy !== null) {
      message.apy = object.apy;
    }
    return message;
  },
  toAmino(message: QueryAPYResponse): QueryAPYResponseAmino {
    const obj: any = {};
    obj.apy = message.apy;
    return obj;
  },
  fromAminoMsg(object: QueryAPYResponseAminoMsg): QueryAPYResponse {
    return QueryAPYResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAPYResponseProtoMsg): QueryAPYResponse {
    return QueryAPYResponse.decode(message.value);
  },
  toProto(message: QueryAPYResponse): Uint8Array {
    return QueryAPYResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAPYResponse): QueryAPYResponseProtoMsg {
    return {
      typeUrl: "/cellarfees.v1.QueryAPYResponse",
      value: QueryAPYResponse.encode(message).finish()
    };
  }
};