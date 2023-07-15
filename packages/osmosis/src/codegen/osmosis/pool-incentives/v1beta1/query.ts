import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryGaugeIdsRequest {
  poolId: Long;
}
export interface QueryGaugeIdsRequestSDKType {
  pool_id: Long;
}
export interface QueryGaugeIdsResponse {
  gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
export interface QueryGaugeIdsResponseSDKType {
  gauge_ids_with_duration: QueryGaugeIdsResponse_GaugeIdWithDurationSDKType[];
}
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
  gaugeId: Long;
  duration?: Duration;
  gaugeIncentivePercentage: string;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationSDKType {
  gauge_id: Long;
  duration?: DurationSDKType;
  gauge_incentive_percentage: string;
}
export interface QueryDistrInfoRequest {}
export interface QueryDistrInfoRequestSDKType {}
export interface QueryDistrInfoResponse {
  distrInfo?: DistrInfo;
}
export interface QueryDistrInfoResponseSDKType {
  distr_info?: DistrInfoSDKType;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryLockableDurationsRequest {}
export interface QueryLockableDurationsRequestSDKType {}
export interface QueryLockableDurationsResponse {
  lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseSDKType {
  lockable_durations: DurationSDKType[];
}
export interface QueryIncentivizedPoolsRequest {}
export interface QueryIncentivizedPoolsRequestSDKType {}
export interface IncentivizedPool {
  poolId: Long;
  lockableDuration?: Duration;
  gaugeId: Long;
}
export interface IncentivizedPoolSDKType {
  pool_id: Long;
  lockable_duration?: DurationSDKType;
  gauge_id: Long;
}
export interface QueryIncentivizedPoolsResponse {
  incentivizedPools: IncentivizedPool[];
}
export interface QueryIncentivizedPoolsResponseSDKType {
  incentivized_pools: IncentivizedPoolSDKType[];
}
export interface QueryExternalIncentiveGaugesRequest {}
export interface QueryExternalIncentiveGaugesRequestSDKType {}
export interface QueryExternalIncentiveGaugesResponse {
  data: Gauge[];
}
export interface QueryExternalIncentiveGaugesResponseSDKType {
  data: GaugeSDKType[];
}
function createBaseQueryGaugeIdsRequest(): QueryGaugeIdsRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryGaugeIdsRequest = {
  encode(message: QueryGaugeIdsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): QueryGaugeIdsRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryGaugeIdsRequest>): QueryGaugeIdsRequest {
    const message = createBaseQueryGaugeIdsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGaugeIdsResponse(): QueryGaugeIdsResponse {
  return {
    gaugeIdsWithDuration: []
  };
}
export const QueryGaugeIdsResponse = {
  encode(message: QueryGaugeIdsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gaugeIdsWithDuration) {
      QueryGaugeIdsResponse_GaugeIdWithDuration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGaugeIdsResponse {
    return {
      gaugeIdsWithDuration: Array.isArray(object?.gaugeIdsWithDuration) ? object.gaugeIdsWithDuration.map((e: any) => QueryGaugeIdsResponse_GaugeIdWithDuration.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryGaugeIdsResponse>): QueryGaugeIdsResponse {
    const message = createBaseQueryGaugeIdsResponse();
    message.gaugeIdsWithDuration = object.gaugeIdsWithDuration?.map(e => QueryGaugeIdsResponse_GaugeIdWithDuration.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryGaugeIdsResponse_GaugeIdWithDuration(): QueryGaugeIdsResponse_GaugeIdWithDuration {
  return {
    gaugeId: Long.UZERO,
    duration: undefined,
    gaugeIncentivePercentage: ""
  };
}
export const QueryGaugeIdsResponse_GaugeIdWithDuration = {
  encode(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gaugeId.isZero()) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.gaugeIncentivePercentage !== "") {
      writer.uint32(26).string(message.gaugeIncentivePercentage);
    }
    return writer;
  },
  fromJSON(object: any): QueryGaugeIdsResponse_GaugeIdWithDuration {
    return {
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      gaugeIncentivePercentage: isSet(object.gaugeIncentivePercentage) ? String(object.gaugeIncentivePercentage) : ""
    };
  },
  fromPartial(object: Partial<QueryGaugeIdsResponse_GaugeIdWithDuration>): QueryGaugeIdsResponse_GaugeIdWithDuration {
    const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.gaugeIncentivePercentage = object.gaugeIncentivePercentage ?? "";
    return message;
  }
};
function createBaseQueryDistrInfoRequest(): QueryDistrInfoRequest {
  return {};
}
export const QueryDistrInfoRequest = {
  encode(_: QueryDistrInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryDistrInfoRequest {
    return {};
  },
  fromPartial(_: Partial<QueryDistrInfoRequest>): QueryDistrInfoRequest {
    const message = createBaseQueryDistrInfoRequest();
    return message;
  }
};
function createBaseQueryDistrInfoResponse(): QueryDistrInfoResponse {
  return {
    distrInfo: undefined
  };
}
export const QueryDistrInfoResponse = {
  encode(message: QueryDistrInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDistrInfoResponse {
    return {
      distrInfo: isSet(object.distrInfo) ? DistrInfo.fromJSON(object.distrInfo) : undefined
    };
  },
  fromPartial(object: Partial<QueryDistrInfoResponse>): QueryDistrInfoResponse {
    const message = createBaseQueryDistrInfoResponse();
    message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? DistrInfo.fromPartial(object.distrInfo) : undefined;
    return message;
  }
};
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
function createBaseQueryLockableDurationsRequest(): QueryLockableDurationsRequest {
  return {};
}
export const QueryLockableDurationsRequest = {
  encode(_: QueryLockableDurationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryLockableDurationsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  }
};
function createBaseQueryLockableDurationsResponse(): QueryLockableDurationsResponse {
  return {
    lockableDurations: []
  };
}
export const QueryLockableDurationsResponse = {
  encode(message: QueryLockableDurationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryLockableDurationsResponse {
    return {
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => Duration.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryIncentivizedPoolsRequest(): QueryIncentivizedPoolsRequest {
  return {};
}
export const QueryIncentivizedPoolsRequest = {
  encode(_: QueryIncentivizedPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryIncentivizedPoolsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryIncentivizedPoolsRequest>): QueryIncentivizedPoolsRequest {
    const message = createBaseQueryIncentivizedPoolsRequest();
    return message;
  }
};
function createBaseIncentivizedPool(): IncentivizedPool {
  return {
    poolId: Long.UZERO,
    lockableDuration: undefined,
    gaugeId: Long.UZERO
  };
}
export const IncentivizedPool = {
  encode(message: IncentivizedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lockableDuration !== undefined) {
      Duration.encode(message.lockableDuration, writer.uint32(18).fork()).ldelim();
    }
    if (!message.gaugeId.isZero()) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    return writer;
  },
  fromJSON(object: any): IncentivizedPool {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lockableDuration: isSet(object.lockableDuration) ? Duration.fromJSON(object.lockableDuration) : undefined,
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<IncentivizedPool>): IncentivizedPool {
    const message = createBaseIncentivizedPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lockableDuration = object.lockableDuration !== undefined && object.lockableDuration !== null ? Duration.fromPartial(object.lockableDuration) : undefined;
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryIncentivizedPoolsResponse(): QueryIncentivizedPoolsResponse {
  return {
    incentivizedPools: []
  };
}
export const QueryIncentivizedPoolsResponse = {
  encode(message: QueryIncentivizedPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentivizedPools) {
      IncentivizedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryIncentivizedPoolsResponse {
    return {
      incentivizedPools: Array.isArray(object?.incentivizedPools) ? object.incentivizedPools.map((e: any) => IncentivizedPool.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryIncentivizedPoolsResponse>): QueryIncentivizedPoolsResponse {
    const message = createBaseQueryIncentivizedPoolsResponse();
    message.incentivizedPools = object.incentivizedPools?.map(e => IncentivizedPool.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryExternalIncentiveGaugesRequest(): QueryExternalIncentiveGaugesRequest {
  return {};
}
export const QueryExternalIncentiveGaugesRequest = {
  encode(_: QueryExternalIncentiveGaugesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryExternalIncentiveGaugesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryExternalIncentiveGaugesRequest>): QueryExternalIncentiveGaugesRequest {
    const message = createBaseQueryExternalIncentiveGaugesRequest();
    return message;
  }
};
function createBaseQueryExternalIncentiveGaugesResponse(): QueryExternalIncentiveGaugesResponse {
  return {
    data: []
  };
}
export const QueryExternalIncentiveGaugesResponse = {
  encode(message: QueryExternalIncentiveGaugesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryExternalIncentiveGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryExternalIncentiveGaugesResponse>): QueryExternalIncentiveGaugesResponse {
    const message = createBaseQueryExternalIncentiveGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    return message;
  }
};