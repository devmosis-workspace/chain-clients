import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, DepositRecord, DepositRecordAmino, DepositRecordSDKType, UserRedemptionRecord, UserRedemptionRecordAmino, UserRedemptionRecordSDKType, EpochUnbondingRecord, EpochUnbondingRecordAmino, EpochUnbondingRecordSDKType } from "./genesis";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/stride.records.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/stride.records.QueryParamsRequest";
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
  typeUrl: "/stride.records.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/stride.records.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetDepositRecordRequest {
  id: bigint;
}
export interface QueryGetDepositRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryGetDepositRecordRequest";
  value: Uint8Array;
}
export interface QueryGetDepositRecordRequestAmino {
  id: string;
}
export interface QueryGetDepositRecordRequestAminoMsg {
  type: "/stride.records.QueryGetDepositRecordRequest";
  value: QueryGetDepositRecordRequestAmino;
}
export interface QueryGetDepositRecordRequestSDKType {
  id: bigint;
}
export interface QueryGetDepositRecordResponse {
  depositRecord: DepositRecord;
}
export interface QueryGetDepositRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryGetDepositRecordResponse";
  value: Uint8Array;
}
export interface QueryGetDepositRecordResponseAmino {
  deposit_record?: DepositRecordAmino;
}
export interface QueryGetDepositRecordResponseAminoMsg {
  type: "/stride.records.QueryGetDepositRecordResponse";
  value: QueryGetDepositRecordResponseAmino;
}
export interface QueryGetDepositRecordResponseSDKType {
  deposit_record: DepositRecordSDKType;
}
export interface QueryAllDepositRecordRequest {
  pagination: PageRequest;
}
export interface QueryAllDepositRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryAllDepositRecordRequest";
  value: Uint8Array;
}
export interface QueryAllDepositRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDepositRecordRequestAminoMsg {
  type: "/stride.records.QueryAllDepositRecordRequest";
  value: QueryAllDepositRecordRequestAmino;
}
export interface QueryAllDepositRecordRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllDepositRecordResponse {
  depositRecord: DepositRecord[];
  pagination: PageResponse;
}
export interface QueryAllDepositRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryAllDepositRecordResponse";
  value: Uint8Array;
}
export interface QueryAllDepositRecordResponseAmino {
  deposit_record: DepositRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDepositRecordResponseAminoMsg {
  type: "/stride.records.QueryAllDepositRecordResponse";
  value: QueryAllDepositRecordResponseAmino;
}
export interface QueryAllDepositRecordResponseSDKType {
  deposit_record: DepositRecordSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryDepositRecordByHostRequest {
  hostZoneId: string;
}
export interface QueryDepositRecordByHostRequestProtoMsg {
  typeUrl: "/stride.records.QueryDepositRecordByHostRequest";
  value: Uint8Array;
}
export interface QueryDepositRecordByHostRequestAmino {
  host_zone_id: string;
}
export interface QueryDepositRecordByHostRequestAminoMsg {
  type: "/stride.records.QueryDepositRecordByHostRequest";
  value: QueryDepositRecordByHostRequestAmino;
}
export interface QueryDepositRecordByHostRequestSDKType {
  host_zone_id: string;
}
export interface QueryDepositRecordByHostResponse {
  depositRecord: DepositRecord[];
}
export interface QueryDepositRecordByHostResponseProtoMsg {
  typeUrl: "/stride.records.QueryDepositRecordByHostResponse";
  value: Uint8Array;
}
export interface QueryDepositRecordByHostResponseAmino {
  deposit_record: DepositRecordAmino[];
}
export interface QueryDepositRecordByHostResponseAminoMsg {
  type: "/stride.records.QueryDepositRecordByHostResponse";
  value: QueryDepositRecordByHostResponseAmino;
}
export interface QueryDepositRecordByHostResponseSDKType {
  deposit_record: DepositRecordSDKType[];
}
export interface QueryGetUserRedemptionRecordRequest {
  id: string;
}
export interface QueryGetUserRedemptionRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryGetUserRedemptionRecordRequest";
  value: Uint8Array;
}
export interface QueryGetUserRedemptionRecordRequestAmino {
  id: string;
}
export interface QueryGetUserRedemptionRecordRequestAminoMsg {
  type: "/stride.records.QueryGetUserRedemptionRecordRequest";
  value: QueryGetUserRedemptionRecordRequestAmino;
}
export interface QueryGetUserRedemptionRecordRequestSDKType {
  id: string;
}
export interface QueryGetUserRedemptionRecordResponse {
  userRedemptionRecord: UserRedemptionRecord;
}
export interface QueryGetUserRedemptionRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryGetUserRedemptionRecordResponse";
  value: Uint8Array;
}
export interface QueryGetUserRedemptionRecordResponseAmino {
  user_redemption_record?: UserRedemptionRecordAmino;
}
export interface QueryGetUserRedemptionRecordResponseAminoMsg {
  type: "/stride.records.QueryGetUserRedemptionRecordResponse";
  value: QueryGetUserRedemptionRecordResponseAmino;
}
export interface QueryGetUserRedemptionRecordResponseSDKType {
  user_redemption_record: UserRedemptionRecordSDKType;
}
export interface QueryAllUserRedemptionRecordRequest {
  pagination: PageRequest;
}
export interface QueryAllUserRedemptionRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordRequest";
  value: Uint8Array;
}
export interface QueryAllUserRedemptionRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllUserRedemptionRecordRequestAminoMsg {
  type: "/stride.records.QueryAllUserRedemptionRecordRequest";
  value: QueryAllUserRedemptionRecordRequestAmino;
}
export interface QueryAllUserRedemptionRecordRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordResponse {
  userRedemptionRecord: UserRedemptionRecord[];
  pagination: PageResponse;
}
export interface QueryAllUserRedemptionRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordResponse";
  value: Uint8Array;
}
export interface QueryAllUserRedemptionRecordResponseAmino {
  user_redemption_record: UserRedemptionRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllUserRedemptionRecordResponseAminoMsg {
  type: "/stride.records.QueryAllUserRedemptionRecordResponse";
  value: QueryAllUserRedemptionRecordResponseAmino;
}
export interface QueryAllUserRedemptionRecordResponseSDKType {
  user_redemption_record: UserRedemptionRecordSDKType[];
  pagination: PageResponseSDKType;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequest {
  chainId: string;
  day: bigint;
  address: string;
  limit: bigint;
  pagination: PageRequest;
}
export interface QueryAllUserRedemptionRecordForUserRequestProtoMsg {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserRequest";
  value: Uint8Array;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequestAmino {
  chain_id: string;
  day: string;
  address: string;
  limit: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllUserRedemptionRecordForUserRequestAminoMsg {
  type: "/stride.records.QueryAllUserRedemptionRecordForUserRequest";
  value: QueryAllUserRedemptionRecordForUserRequestAmino;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequestSDKType {
  chain_id: string;
  day: bigint;
  address: string;
  limit: bigint;
  pagination: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordForUserResponse {
  userRedemptionRecord: UserRedemptionRecord[];
  pagination: PageResponse;
}
export interface QueryAllUserRedemptionRecordForUserResponseProtoMsg {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserResponse";
  value: Uint8Array;
}
export interface QueryAllUserRedemptionRecordForUserResponseAmino {
  user_redemption_record: UserRedemptionRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllUserRedemptionRecordForUserResponseAminoMsg {
  type: "/stride.records.QueryAllUserRedemptionRecordForUserResponse";
  value: QueryAllUserRedemptionRecordForUserResponseAmino;
}
export interface QueryAllUserRedemptionRecordForUserResponseSDKType {
  user_redemption_record: UserRedemptionRecordSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryGetEpochUnbondingRecordRequest {
  epochNumber: bigint;
}
export interface QueryGetEpochUnbondingRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryGetEpochUnbondingRecordRequest";
  value: Uint8Array;
}
export interface QueryGetEpochUnbondingRecordRequestAmino {
  epoch_number: string;
}
export interface QueryGetEpochUnbondingRecordRequestAminoMsg {
  type: "/stride.records.QueryGetEpochUnbondingRecordRequest";
  value: QueryGetEpochUnbondingRecordRequestAmino;
}
export interface QueryGetEpochUnbondingRecordRequestSDKType {
  epoch_number: bigint;
}
export interface QueryGetEpochUnbondingRecordResponse {
  epochUnbondingRecord: EpochUnbondingRecord;
}
export interface QueryGetEpochUnbondingRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryGetEpochUnbondingRecordResponse";
  value: Uint8Array;
}
export interface QueryGetEpochUnbondingRecordResponseAmino {
  epoch_unbonding_record?: EpochUnbondingRecordAmino;
}
export interface QueryGetEpochUnbondingRecordResponseAminoMsg {
  type: "/stride.records.QueryGetEpochUnbondingRecordResponse";
  value: QueryGetEpochUnbondingRecordResponseAmino;
}
export interface QueryGetEpochUnbondingRecordResponseSDKType {
  epoch_unbonding_record: EpochUnbondingRecordSDKType;
}
export interface QueryAllEpochUnbondingRecordRequest {
  pagination: PageRequest;
}
export interface QueryAllEpochUnbondingRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryAllEpochUnbondingRecordRequest";
  value: Uint8Array;
}
export interface QueryAllEpochUnbondingRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllEpochUnbondingRecordRequestAminoMsg {
  type: "/stride.records.QueryAllEpochUnbondingRecordRequest";
  value: QueryAllEpochUnbondingRecordRequestAmino;
}
export interface QueryAllEpochUnbondingRecordRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllEpochUnbondingRecordResponse {
  epochUnbondingRecord: EpochUnbondingRecord[];
  pagination: PageResponse;
}
export interface QueryAllEpochUnbondingRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryAllEpochUnbondingRecordResponse";
  value: Uint8Array;
}
export interface QueryAllEpochUnbondingRecordResponseAmino {
  epoch_unbonding_record: EpochUnbondingRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllEpochUnbondingRecordResponseAminoMsg {
  type: "/stride.records.QueryAllEpochUnbondingRecordResponse";
  value: QueryAllEpochUnbondingRecordResponseAmino;
}
export interface QueryAllEpochUnbondingRecordResponseSDKType {
  epoch_unbonding_record: EpochUnbondingRecordSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/stride.records.QueryParamsRequest",
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
      typeUrl: "/stride.records.QueryParamsRequest",
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
  typeUrl: "/stride.records.QueryParamsResponse",
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
      typeUrl: "/stride.records.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDepositRecordRequest(): QueryGetDepositRecordRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetDepositRecordRequest = {
  typeUrl: "/stride.records.QueryGetDepositRecordRequest",
  encode(message: QueryGetDepositRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetDepositRecordRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetDepositRecordRequest>): QueryGetDepositRecordRequest {
    const message = createBaseQueryGetDepositRecordRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetDepositRecordRequestAmino): QueryGetDepositRecordRequest {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: QueryGetDepositRecordRequest): QueryGetDepositRecordRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDepositRecordRequestAminoMsg): QueryGetDepositRecordRequest {
    return QueryGetDepositRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDepositRecordRequestProtoMsg): QueryGetDepositRecordRequest {
    return QueryGetDepositRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetDepositRecordRequest): Uint8Array {
    return QueryGetDepositRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDepositRecordRequest): QueryGetDepositRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetDepositRecordRequest",
      value: QueryGetDepositRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDepositRecordResponse(): QueryGetDepositRecordResponse {
  return {
    depositRecord: DepositRecord.fromPartial({})
  };
}
export const QueryGetDepositRecordResponse = {
  typeUrl: "/stride.records.QueryGetDepositRecordResponse",
  encode(message: QueryGetDepositRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositRecord !== undefined) {
      DepositRecord.encode(message.depositRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetDepositRecordResponse {
    return {
      depositRecord: isSet(object.depositRecord) ? DepositRecord.fromJSON(object.depositRecord) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetDepositRecordResponse>): QueryGetDepositRecordResponse {
    const message = createBaseQueryGetDepositRecordResponse();
    message.depositRecord = object.depositRecord !== undefined && object.depositRecord !== null ? DepositRecord.fromPartial(object.depositRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDepositRecordResponseAmino): QueryGetDepositRecordResponse {
    return {
      depositRecord: object?.deposit_record ? DepositRecord.fromAmino(object.deposit_record) : undefined
    };
  },
  toAmino(message: QueryGetDepositRecordResponse): QueryGetDepositRecordResponseAmino {
    const obj: any = {};
    obj.deposit_record = message.depositRecord ? DepositRecord.toAmino(message.depositRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDepositRecordResponseAminoMsg): QueryGetDepositRecordResponse {
    return QueryGetDepositRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDepositRecordResponseProtoMsg): QueryGetDepositRecordResponse {
    return QueryGetDepositRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetDepositRecordResponse): Uint8Array {
    return QueryGetDepositRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDepositRecordResponse): QueryGetDepositRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetDepositRecordResponse",
      value: QueryGetDepositRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDepositRecordRequest(): QueryAllDepositRecordRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllDepositRecordRequest = {
  typeUrl: "/stride.records.QueryAllDepositRecordRequest",
  encode(message: QueryAllDepositRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllDepositRecordRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllDepositRecordRequest>): QueryAllDepositRecordRequest {
    const message = createBaseQueryAllDepositRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDepositRecordRequestAmino): QueryAllDepositRecordRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllDepositRecordRequest): QueryAllDepositRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDepositRecordRequestAminoMsg): QueryAllDepositRecordRequest {
    return QueryAllDepositRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDepositRecordRequestProtoMsg): QueryAllDepositRecordRequest {
    return QueryAllDepositRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllDepositRecordRequest): Uint8Array {
    return QueryAllDepositRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDepositRecordRequest): QueryAllDepositRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllDepositRecordRequest",
      value: QueryAllDepositRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDepositRecordResponse(): QueryAllDepositRecordResponse {
  return {
    depositRecord: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllDepositRecordResponse = {
  typeUrl: "/stride.records.QueryAllDepositRecordResponse",
  encode(message: QueryAllDepositRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.depositRecord) {
      DepositRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllDepositRecordResponse {
    return {
      depositRecord: Array.isArray(object?.depositRecord) ? object.depositRecord.map((e: any) => DepositRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllDepositRecordResponse>): QueryAllDepositRecordResponse {
    const message = createBaseQueryAllDepositRecordResponse();
    message.depositRecord = object.depositRecord?.map(e => DepositRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDepositRecordResponseAmino): QueryAllDepositRecordResponse {
    return {
      depositRecord: Array.isArray(object?.deposit_record) ? object.deposit_record.map((e: any) => DepositRecord.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllDepositRecordResponse): QueryAllDepositRecordResponseAmino {
    const obj: any = {};
    if (message.depositRecord) {
      obj.deposit_record = message.depositRecord.map(e => e ? DepositRecord.toAmino(e) : undefined);
    } else {
      obj.deposit_record = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDepositRecordResponseAminoMsg): QueryAllDepositRecordResponse {
    return QueryAllDepositRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDepositRecordResponseProtoMsg): QueryAllDepositRecordResponse {
    return QueryAllDepositRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllDepositRecordResponse): Uint8Array {
    return QueryAllDepositRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDepositRecordResponse): QueryAllDepositRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllDepositRecordResponse",
      value: QueryAllDepositRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRecordByHostRequest(): QueryDepositRecordByHostRequest {
  return {
    hostZoneId: ""
  };
}
export const QueryDepositRecordByHostRequest = {
  typeUrl: "/stride.records.QueryDepositRecordByHostRequest",
  encode(message: QueryDepositRecordByHostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositRecordByHostRequest {
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : ""
    };
  },
  fromPartial(object: Partial<QueryDepositRecordByHostRequest>): QueryDepositRecordByHostRequest {
    const message = createBaseQueryDepositRecordByHostRequest();
    message.hostZoneId = object.hostZoneId ?? "";
    return message;
  },
  fromAmino(object: QueryDepositRecordByHostRequestAmino): QueryDepositRecordByHostRequest {
    return {
      hostZoneId: object.host_zone_id
    };
  },
  toAmino(message: QueryDepositRecordByHostRequest): QueryDepositRecordByHostRequestAmino {
    const obj: any = {};
    obj.host_zone_id = message.hostZoneId;
    return obj;
  },
  fromAminoMsg(object: QueryDepositRecordByHostRequestAminoMsg): QueryDepositRecordByHostRequest {
    return QueryDepositRecordByHostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositRecordByHostRequestProtoMsg): QueryDepositRecordByHostRequest {
    return QueryDepositRecordByHostRequest.decode(message.value);
  },
  toProto(message: QueryDepositRecordByHostRequest): Uint8Array {
    return QueryDepositRecordByHostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositRecordByHostRequest): QueryDepositRecordByHostRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryDepositRecordByHostRequest",
      value: QueryDepositRecordByHostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRecordByHostResponse(): QueryDepositRecordByHostResponse {
  return {
    depositRecord: []
  };
}
export const QueryDepositRecordByHostResponse = {
  typeUrl: "/stride.records.QueryDepositRecordByHostResponse",
  encode(message: QueryDepositRecordByHostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.depositRecord) {
      DepositRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositRecordByHostResponse {
    return {
      depositRecord: Array.isArray(object?.depositRecord) ? object.depositRecord.map((e: any) => DepositRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDepositRecordByHostResponse>): QueryDepositRecordByHostResponse {
    const message = createBaseQueryDepositRecordByHostResponse();
    message.depositRecord = object.depositRecord?.map(e => DepositRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDepositRecordByHostResponseAmino): QueryDepositRecordByHostResponse {
    return {
      depositRecord: Array.isArray(object?.deposit_record) ? object.deposit_record.map((e: any) => DepositRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryDepositRecordByHostResponse): QueryDepositRecordByHostResponseAmino {
    const obj: any = {};
    if (message.depositRecord) {
      obj.deposit_record = message.depositRecord.map(e => e ? DepositRecord.toAmino(e) : undefined);
    } else {
      obj.deposit_record = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDepositRecordByHostResponseAminoMsg): QueryDepositRecordByHostResponse {
    return QueryDepositRecordByHostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositRecordByHostResponseProtoMsg): QueryDepositRecordByHostResponse {
    return QueryDepositRecordByHostResponse.decode(message.value);
  },
  toProto(message: QueryDepositRecordByHostResponse): Uint8Array {
    return QueryDepositRecordByHostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositRecordByHostResponse): QueryDepositRecordByHostResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryDepositRecordByHostResponse",
      value: QueryDepositRecordByHostResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserRedemptionRecordRequest(): QueryGetUserRedemptionRecordRequest {
  return {
    id: ""
  };
}
export const QueryGetUserRedemptionRecordRequest = {
  typeUrl: "/stride.records.QueryGetUserRedemptionRecordRequest",
  encode(message: QueryGetUserRedemptionRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetUserRedemptionRecordRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<QueryGetUserRedemptionRecordRequest>): QueryGetUserRedemptionRecordRequest {
    const message = createBaseQueryGetUserRedemptionRecordRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryGetUserRedemptionRecordRequestAmino): QueryGetUserRedemptionRecordRequest {
    return {
      id: object.id
    };
  },
  toAmino(message: QueryGetUserRedemptionRecordRequest): QueryGetUserRedemptionRecordRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserRedemptionRecordRequestAminoMsg): QueryGetUserRedemptionRecordRequest {
    return QueryGetUserRedemptionRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserRedemptionRecordRequestProtoMsg): QueryGetUserRedemptionRecordRequest {
    return QueryGetUserRedemptionRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetUserRedemptionRecordRequest): Uint8Array {
    return QueryGetUserRedemptionRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserRedemptionRecordRequest): QueryGetUserRedemptionRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetUserRedemptionRecordRequest",
      value: QueryGetUserRedemptionRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserRedemptionRecordResponse(): QueryGetUserRedemptionRecordResponse {
  return {
    userRedemptionRecord: UserRedemptionRecord.fromPartial({})
  };
}
export const QueryGetUserRedemptionRecordResponse = {
  typeUrl: "/stride.records.QueryGetUserRedemptionRecordResponse",
  encode(message: QueryGetUserRedemptionRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userRedemptionRecord !== undefined) {
      UserRedemptionRecord.encode(message.userRedemptionRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetUserRedemptionRecordResponse {
    return {
      userRedemptionRecord: isSet(object.userRedemptionRecord) ? UserRedemptionRecord.fromJSON(object.userRedemptionRecord) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetUserRedemptionRecordResponse>): QueryGetUserRedemptionRecordResponse {
    const message = createBaseQueryGetUserRedemptionRecordResponse();
    message.userRedemptionRecord = object.userRedemptionRecord !== undefined && object.userRedemptionRecord !== null ? UserRedemptionRecord.fromPartial(object.userRedemptionRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUserRedemptionRecordResponseAmino): QueryGetUserRedemptionRecordResponse {
    return {
      userRedemptionRecord: object?.user_redemption_record ? UserRedemptionRecord.fromAmino(object.user_redemption_record) : undefined
    };
  },
  toAmino(message: QueryGetUserRedemptionRecordResponse): QueryGetUserRedemptionRecordResponseAmino {
    const obj: any = {};
    obj.user_redemption_record = message.userRedemptionRecord ? UserRedemptionRecord.toAmino(message.userRedemptionRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserRedemptionRecordResponseAminoMsg): QueryGetUserRedemptionRecordResponse {
    return QueryGetUserRedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserRedemptionRecordResponseProtoMsg): QueryGetUserRedemptionRecordResponse {
    return QueryGetUserRedemptionRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetUserRedemptionRecordResponse): Uint8Array {
    return QueryGetUserRedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserRedemptionRecordResponse): QueryGetUserRedemptionRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetUserRedemptionRecordResponse",
      value: QueryGetUserRedemptionRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordRequest(): QueryAllUserRedemptionRecordRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllUserRedemptionRecordRequest = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordRequest",
  encode(message: QueryAllUserRedemptionRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserRedemptionRecordRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserRedemptionRecordRequest>): QueryAllUserRedemptionRecordRequest {
    const message = createBaseQueryAllUserRedemptionRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRedemptionRecordRequestAmino): QueryAllUserRedemptionRecordRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllUserRedemptionRecordRequest): QueryAllUserRedemptionRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRedemptionRecordRequestAminoMsg): QueryAllUserRedemptionRecordRequest {
    return QueryAllUserRedemptionRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRedemptionRecordRequestProtoMsg): QueryAllUserRedemptionRecordRequest {
    return QueryAllUserRedemptionRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllUserRedemptionRecordRequest): Uint8Array {
    return QueryAllUserRedemptionRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRedemptionRecordRequest): QueryAllUserRedemptionRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordRequest",
      value: QueryAllUserRedemptionRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordResponse(): QueryAllUserRedemptionRecordResponse {
  return {
    userRedemptionRecord: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllUserRedemptionRecordResponse = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordResponse",
  encode(message: QueryAllUserRedemptionRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userRedemptionRecord) {
      UserRedemptionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserRedemptionRecordResponse {
    return {
      userRedemptionRecord: Array.isArray(object?.userRedemptionRecord) ? object.userRedemptionRecord.map((e: any) => UserRedemptionRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserRedemptionRecordResponse>): QueryAllUserRedemptionRecordResponse {
    const message = createBaseQueryAllUserRedemptionRecordResponse();
    message.userRedemptionRecord = object.userRedemptionRecord?.map(e => UserRedemptionRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRedemptionRecordResponseAmino): QueryAllUserRedemptionRecordResponse {
    return {
      userRedemptionRecord: Array.isArray(object?.user_redemption_record) ? object.user_redemption_record.map((e: any) => UserRedemptionRecord.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllUserRedemptionRecordResponse): QueryAllUserRedemptionRecordResponseAmino {
    const obj: any = {};
    if (message.userRedemptionRecord) {
      obj.user_redemption_record = message.userRedemptionRecord.map(e => e ? UserRedemptionRecord.toAmino(e) : undefined);
    } else {
      obj.user_redemption_record = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRedemptionRecordResponseAminoMsg): QueryAllUserRedemptionRecordResponse {
    return QueryAllUserRedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRedemptionRecordResponseProtoMsg): QueryAllUserRedemptionRecordResponse {
    return QueryAllUserRedemptionRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllUserRedemptionRecordResponse): Uint8Array {
    return QueryAllUserRedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRedemptionRecordResponse): QueryAllUserRedemptionRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordResponse",
      value: QueryAllUserRedemptionRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordForUserRequest(): QueryAllUserRedemptionRecordForUserRequest {
  return {
    chainId: "",
    day: BigInt(0),
    address: "",
    limit: BigInt(0),
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllUserRedemptionRecordForUserRequest = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserRequest",
  encode(message: QueryAllUserRedemptionRecordForUserRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.day !== BigInt(0)) {
      writer.uint32(16).uint64(message.day);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(32).uint64(message.limit);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserRedemptionRecordForUserRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      day: isSet(object.day) ? BigInt(object.day.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserRedemptionRecordForUserRequest>): QueryAllUserRedemptionRecordForUserRequest {
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();
    message.chainId = object.chainId ?? "";
    message.day = object.day !== undefined && object.day !== null ? BigInt(object.day.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRedemptionRecordForUserRequestAmino): QueryAllUserRedemptionRecordForUserRequest {
    return {
      chainId: object.chain_id,
      day: BigInt(object.day),
      address: object.address,
      limit: BigInt(object.limit),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllUserRedemptionRecordForUserRequest): QueryAllUserRedemptionRecordForUserRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.day = message.day ? message.day.toString() : undefined;
    obj.address = message.address;
    obj.limit = message.limit ? message.limit.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRedemptionRecordForUserRequestAminoMsg): QueryAllUserRedemptionRecordForUserRequest {
    return QueryAllUserRedemptionRecordForUserRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRedemptionRecordForUserRequestProtoMsg): QueryAllUserRedemptionRecordForUserRequest {
    return QueryAllUserRedemptionRecordForUserRequest.decode(message.value);
  },
  toProto(message: QueryAllUserRedemptionRecordForUserRequest): Uint8Array {
    return QueryAllUserRedemptionRecordForUserRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRedemptionRecordForUserRequest): QueryAllUserRedemptionRecordForUserRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserRequest",
      value: QueryAllUserRedemptionRecordForUserRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordForUserResponse(): QueryAllUserRedemptionRecordForUserResponse {
  return {
    userRedemptionRecord: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllUserRedemptionRecordForUserResponse = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserResponse",
  encode(message: QueryAllUserRedemptionRecordForUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userRedemptionRecord) {
      UserRedemptionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserRedemptionRecordForUserResponse {
    return {
      userRedemptionRecord: Array.isArray(object?.userRedemptionRecord) ? object.userRedemptionRecord.map((e: any) => UserRedemptionRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserRedemptionRecordForUserResponse>): QueryAllUserRedemptionRecordForUserResponse {
    const message = createBaseQueryAllUserRedemptionRecordForUserResponse();
    message.userRedemptionRecord = object.userRedemptionRecord?.map(e => UserRedemptionRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRedemptionRecordForUserResponseAmino): QueryAllUserRedemptionRecordForUserResponse {
    return {
      userRedemptionRecord: Array.isArray(object?.user_redemption_record) ? object.user_redemption_record.map((e: any) => UserRedemptionRecord.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllUserRedemptionRecordForUserResponse): QueryAllUserRedemptionRecordForUserResponseAmino {
    const obj: any = {};
    if (message.userRedemptionRecord) {
      obj.user_redemption_record = message.userRedemptionRecord.map(e => e ? UserRedemptionRecord.toAmino(e) : undefined);
    } else {
      obj.user_redemption_record = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRedemptionRecordForUserResponseAminoMsg): QueryAllUserRedemptionRecordForUserResponse {
    return QueryAllUserRedemptionRecordForUserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRedemptionRecordForUserResponseProtoMsg): QueryAllUserRedemptionRecordForUserResponse {
    return QueryAllUserRedemptionRecordForUserResponse.decode(message.value);
  },
  toProto(message: QueryAllUserRedemptionRecordForUserResponse): Uint8Array {
    return QueryAllUserRedemptionRecordForUserResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRedemptionRecordForUserResponse): QueryAllUserRedemptionRecordForUserResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserResponse",
      value: QueryAllUserRedemptionRecordForUserResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochUnbondingRecordRequest(): QueryGetEpochUnbondingRecordRequest {
  return {
    epochNumber: BigInt(0)
  };
}
export const QueryGetEpochUnbondingRecordRequest = {
  typeUrl: "/stride.records.QueryGetEpochUnbondingRecordRequest",
  encode(message: QueryGetEpochUnbondingRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetEpochUnbondingRecordRequest {
    return {
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetEpochUnbondingRecordRequest>): QueryGetEpochUnbondingRecordRequest {
    const message = createBaseQueryGetEpochUnbondingRecordRequest();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetEpochUnbondingRecordRequestAmino): QueryGetEpochUnbondingRecordRequest {
    return {
      epochNumber: BigInt(object.epoch_number)
    };
  },
  toAmino(message: QueryGetEpochUnbondingRecordRequest): QueryGetEpochUnbondingRecordRequestAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochUnbondingRecordRequestAminoMsg): QueryGetEpochUnbondingRecordRequest {
    return QueryGetEpochUnbondingRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochUnbondingRecordRequestProtoMsg): QueryGetEpochUnbondingRecordRequest {
    return QueryGetEpochUnbondingRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetEpochUnbondingRecordRequest): Uint8Array {
    return QueryGetEpochUnbondingRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochUnbondingRecordRequest): QueryGetEpochUnbondingRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetEpochUnbondingRecordRequest",
      value: QueryGetEpochUnbondingRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochUnbondingRecordResponse(): QueryGetEpochUnbondingRecordResponse {
  return {
    epochUnbondingRecord: EpochUnbondingRecord.fromPartial({})
  };
}
export const QueryGetEpochUnbondingRecordResponse = {
  typeUrl: "/stride.records.QueryGetEpochUnbondingRecordResponse",
  encode(message: QueryGetEpochUnbondingRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochUnbondingRecord !== undefined) {
      EpochUnbondingRecord.encode(message.epochUnbondingRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetEpochUnbondingRecordResponse {
    return {
      epochUnbondingRecord: isSet(object.epochUnbondingRecord) ? EpochUnbondingRecord.fromJSON(object.epochUnbondingRecord) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetEpochUnbondingRecordResponse>): QueryGetEpochUnbondingRecordResponse {
    const message = createBaseQueryGetEpochUnbondingRecordResponse();
    message.epochUnbondingRecord = object.epochUnbondingRecord !== undefined && object.epochUnbondingRecord !== null ? EpochUnbondingRecord.fromPartial(object.epochUnbondingRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetEpochUnbondingRecordResponseAmino): QueryGetEpochUnbondingRecordResponse {
    return {
      epochUnbondingRecord: object?.epoch_unbonding_record ? EpochUnbondingRecord.fromAmino(object.epoch_unbonding_record) : undefined
    };
  },
  toAmino(message: QueryGetEpochUnbondingRecordResponse): QueryGetEpochUnbondingRecordResponseAmino {
    const obj: any = {};
    obj.epoch_unbonding_record = message.epochUnbondingRecord ? EpochUnbondingRecord.toAmino(message.epochUnbondingRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochUnbondingRecordResponseAminoMsg): QueryGetEpochUnbondingRecordResponse {
    return QueryGetEpochUnbondingRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochUnbondingRecordResponseProtoMsg): QueryGetEpochUnbondingRecordResponse {
    return QueryGetEpochUnbondingRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetEpochUnbondingRecordResponse): Uint8Array {
    return QueryGetEpochUnbondingRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochUnbondingRecordResponse): QueryGetEpochUnbondingRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetEpochUnbondingRecordResponse",
      value: QueryGetEpochUnbondingRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochUnbondingRecordRequest(): QueryAllEpochUnbondingRecordRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllEpochUnbondingRecordRequest = {
  typeUrl: "/stride.records.QueryAllEpochUnbondingRecordRequest",
  encode(message: QueryAllEpochUnbondingRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllEpochUnbondingRecordRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllEpochUnbondingRecordRequest>): QueryAllEpochUnbondingRecordRequest {
    const message = createBaseQueryAllEpochUnbondingRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllEpochUnbondingRecordRequestAmino): QueryAllEpochUnbondingRecordRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllEpochUnbondingRecordRequest): QueryAllEpochUnbondingRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEpochUnbondingRecordRequestAminoMsg): QueryAllEpochUnbondingRecordRequest {
    return QueryAllEpochUnbondingRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllEpochUnbondingRecordRequestProtoMsg): QueryAllEpochUnbondingRecordRequest {
    return QueryAllEpochUnbondingRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllEpochUnbondingRecordRequest): Uint8Array {
    return QueryAllEpochUnbondingRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEpochUnbondingRecordRequest): QueryAllEpochUnbondingRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllEpochUnbondingRecordRequest",
      value: QueryAllEpochUnbondingRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochUnbondingRecordResponse(): QueryAllEpochUnbondingRecordResponse {
  return {
    epochUnbondingRecord: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllEpochUnbondingRecordResponse = {
  typeUrl: "/stride.records.QueryAllEpochUnbondingRecordResponse",
  encode(message: QueryAllEpochUnbondingRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochUnbondingRecord) {
      EpochUnbondingRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllEpochUnbondingRecordResponse {
    return {
      epochUnbondingRecord: Array.isArray(object?.epochUnbondingRecord) ? object.epochUnbondingRecord.map((e: any) => EpochUnbondingRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllEpochUnbondingRecordResponse>): QueryAllEpochUnbondingRecordResponse {
    const message = createBaseQueryAllEpochUnbondingRecordResponse();
    message.epochUnbondingRecord = object.epochUnbondingRecord?.map(e => EpochUnbondingRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllEpochUnbondingRecordResponseAmino): QueryAllEpochUnbondingRecordResponse {
    return {
      epochUnbondingRecord: Array.isArray(object?.epoch_unbonding_record) ? object.epoch_unbonding_record.map((e: any) => EpochUnbondingRecord.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllEpochUnbondingRecordResponse): QueryAllEpochUnbondingRecordResponseAmino {
    const obj: any = {};
    if (message.epochUnbondingRecord) {
      obj.epoch_unbonding_record = message.epochUnbondingRecord.map(e => e ? EpochUnbondingRecord.toAmino(e) : undefined);
    } else {
      obj.epoch_unbonding_record = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEpochUnbondingRecordResponseAminoMsg): QueryAllEpochUnbondingRecordResponse {
    return QueryAllEpochUnbondingRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllEpochUnbondingRecordResponseProtoMsg): QueryAllEpochUnbondingRecordResponse {
    return QueryAllEpochUnbondingRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllEpochUnbondingRecordResponse): Uint8Array {
    return QueryAllEpochUnbondingRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEpochUnbondingRecordResponse): QueryAllEpochUnbondingRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllEpochUnbondingRecordResponse",
      value: QueryAllEpochUnbondingRecordResponse.encode(message).finish()
    };
  }
};