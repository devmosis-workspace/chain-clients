import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, DepositRecord, DepositRecordSDKType, UserRedemptionRecord, UserRedemptionRecordSDKType, EpochUnbondingRecord, EpochUnbondingRecordSDKType } from "./genesis";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryGetDepositRecordRequest {
  id: Long;
}
export interface QueryGetDepositRecordRequestSDKType {
  id: Long;
}
export interface QueryGetDepositRecordResponse {
  depositRecord?: DepositRecord;
}
export interface QueryGetDepositRecordResponseSDKType {
  deposit_record?: DepositRecordSDKType;
}
export interface QueryAllDepositRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllDepositRecordRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllDepositRecordResponse {
  depositRecord: DepositRecord[];
  pagination?: PageResponse;
}
export interface QueryAllDepositRecordResponseSDKType {
  deposit_record: DepositRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryDepositRecordByHostRequest {
  hostZoneId: string;
}
export interface QueryDepositRecordByHostRequestSDKType {
  host_zone_id: string;
}
export interface QueryDepositRecordByHostResponse {
  depositRecord: DepositRecord[];
}
export interface QueryDepositRecordByHostResponseSDKType {
  deposit_record: DepositRecordSDKType[];
}
export interface QueryGetUserRedemptionRecordRequest {
  id: string;
}
export interface QueryGetUserRedemptionRecordRequestSDKType {
  id: string;
}
export interface QueryGetUserRedemptionRecordResponse {
  userRedemptionRecord?: UserRedemptionRecord;
}
export interface QueryGetUserRedemptionRecordResponseSDKType {
  user_redemption_record?: UserRedemptionRecordSDKType;
}
export interface QueryAllUserRedemptionRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllUserRedemptionRecordRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordResponse {
  userRedemptionRecord: UserRedemptionRecord[];
  pagination?: PageResponse;
}
export interface QueryAllUserRedemptionRecordResponseSDKType {
  user_redemption_record: UserRedemptionRecordSDKType[];
  pagination?: PageResponseSDKType;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequest {
  chainId: string;
  day: Long;
  address: string;
  limit: Long;
  pagination?: PageRequest;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequestSDKType {
  chain_id: string;
  day: Long;
  address: string;
  limit: Long;
  pagination?: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordForUserResponse {
  userRedemptionRecord: UserRedemptionRecord[];
  pagination?: PageResponse;
}
export interface QueryAllUserRedemptionRecordForUserResponseSDKType {
  user_redemption_record: UserRedemptionRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetEpochUnbondingRecordRequest {
  epochNumber: Long;
}
export interface QueryGetEpochUnbondingRecordRequestSDKType {
  epoch_number: Long;
}
export interface QueryGetEpochUnbondingRecordResponse {
  epochUnbondingRecord?: EpochUnbondingRecord;
}
export interface QueryGetEpochUnbondingRecordResponseSDKType {
  epoch_unbonding_record?: EpochUnbondingRecordSDKType;
}
export interface QueryAllEpochUnbondingRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllEpochUnbondingRecordRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllEpochUnbondingRecordResponse {
  epochUnbondingRecord: EpochUnbondingRecord[];
  pagination?: PageResponse;
}
export interface QueryAllEpochUnbondingRecordResponseSDKType {
  epoch_unbonding_record: EpochUnbondingRecordSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryGetDepositRecordRequest(): QueryGetDepositRecordRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryGetDepositRecordRequest = {
  encode(message: QueryGetDepositRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetDepositRecordRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryGetDepositRecordRequest>): QueryGetDepositRecordRequest {
    const message = createBaseQueryGetDepositRecordRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetDepositRecordResponse(): QueryGetDepositRecordResponse {
  return {
    depositRecord: undefined
  };
}
export const QueryGetDepositRecordResponse = {
  encode(message: QueryGetDepositRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryAllDepositRecordRequest(): QueryAllDepositRecordRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllDepositRecordRequest = {
  encode(message: QueryAllDepositRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryAllDepositRecordResponse(): QueryAllDepositRecordResponse {
  return {
    depositRecord: [],
    pagination: undefined
  };
}
export const QueryAllDepositRecordResponse = {
  encode(message: QueryAllDepositRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryDepositRecordByHostRequest(): QueryDepositRecordByHostRequest {
  return {
    hostZoneId: ""
  };
}
export const QueryDepositRecordByHostRequest = {
  encode(message: QueryDepositRecordByHostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryDepositRecordByHostResponse(): QueryDepositRecordByHostResponse {
  return {
    depositRecord: []
  };
}
export const QueryDepositRecordByHostResponse = {
  encode(message: QueryDepositRecordByHostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryGetUserRedemptionRecordRequest(): QueryGetUserRedemptionRecordRequest {
  return {
    id: ""
  };
}
export const QueryGetUserRedemptionRecordRequest = {
  encode(message: QueryGetUserRedemptionRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryGetUserRedemptionRecordResponse(): QueryGetUserRedemptionRecordResponse {
  return {
    userRedemptionRecord: undefined
  };
}
export const QueryGetUserRedemptionRecordResponse = {
  encode(message: QueryGetUserRedemptionRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryAllUserRedemptionRecordRequest(): QueryAllUserRedemptionRecordRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllUserRedemptionRecordRequest = {
  encode(message: QueryAllUserRedemptionRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryAllUserRedemptionRecordResponse(): QueryAllUserRedemptionRecordResponse {
  return {
    userRedemptionRecord: [],
    pagination: undefined
  };
}
export const QueryAllUserRedemptionRecordResponse = {
  encode(message: QueryAllUserRedemptionRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryAllUserRedemptionRecordForUserRequest(): QueryAllUserRedemptionRecordForUserRequest {
  return {
    chainId: "",
    day: Long.UZERO,
    address: "",
    limit: Long.UZERO,
    pagination: undefined
  };
}
export const QueryAllUserRedemptionRecordForUserRequest = {
  encode(message: QueryAllUserRedemptionRecordForUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.day.isZero()) {
      writer.uint32(16).uint64(message.day);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (!message.limit.isZero()) {
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
      day: isSet(object.day) ? Long.fromValue(object.day) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserRedemptionRecordForUserRequest>): QueryAllUserRedemptionRecordForUserRequest {
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();
    message.chainId = object.chainId ?? "";
    message.day = object.day !== undefined && object.day !== null ? Long.fromValue(object.day) : Long.UZERO;
    message.address = object.address ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUserRedemptionRecordForUserResponse(): QueryAllUserRedemptionRecordForUserResponse {
  return {
    userRedemptionRecord: [],
    pagination: undefined
  };
}
export const QueryAllUserRedemptionRecordForUserResponse = {
  encode(message: QueryAllUserRedemptionRecordForUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryGetEpochUnbondingRecordRequest(): QueryGetEpochUnbondingRecordRequest {
  return {
    epochNumber: Long.UZERO
  };
}
export const QueryGetEpochUnbondingRecordRequest = {
  encode(message: QueryGetEpochUnbondingRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetEpochUnbondingRecordRequest {
    return {
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryGetEpochUnbondingRecordRequest>): QueryGetEpochUnbondingRecordRequest {
    const message = createBaseQueryGetEpochUnbondingRecordRequest();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetEpochUnbondingRecordResponse(): QueryGetEpochUnbondingRecordResponse {
  return {
    epochUnbondingRecord: undefined
  };
}
export const QueryGetEpochUnbondingRecordResponse = {
  encode(message: QueryGetEpochUnbondingRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryAllEpochUnbondingRecordRequest(): QueryAllEpochUnbondingRecordRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllEpochUnbondingRecordRequest = {
  encode(message: QueryAllEpochUnbondingRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryAllEpochUnbondingRecordResponse(): QueryAllEpochUnbondingRecordResponse {
  return {
    epochUnbondingRecord: [],
    pagination: undefined
  };
}
export const QueryAllEpochUnbondingRecordResponse = {
  encode(message: QueryAllEpochUnbondingRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};