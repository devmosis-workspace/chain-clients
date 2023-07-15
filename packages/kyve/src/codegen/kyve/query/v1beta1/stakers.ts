import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerSDKType } from "./query";
import { Valaccount, ValaccountSDKType } from "../../stakers/v1beta1/stakers";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** StakerStatus ... */
export enum StakerStatus {
  /** STAKER_STATUS_UNSPECIFIED - STAKER_STATUS_UNSPECIFIED ... */
  STAKER_STATUS_UNSPECIFIED = 0,
  /** STAKER_STATUS_ACTIVE - STAKER_STATUS_ACTIVE ... */
  STAKER_STATUS_ACTIVE = 1,
  /** STAKER_STATUS_INACTIVE - STAKER_STATUS_INACTIVE ... */
  STAKER_STATUS_INACTIVE = 2,
  UNRECOGNIZED = -1,
}
export const StakerStatusSDKType = StakerStatus;
export function stakerStatusFromJSON(object: any): StakerStatus {
  switch (object) {
    case 0:
    case "STAKER_STATUS_UNSPECIFIED":
      return StakerStatus.STAKER_STATUS_UNSPECIFIED;
    case 1:
    case "STAKER_STATUS_ACTIVE":
      return StakerStatus.STAKER_STATUS_ACTIVE;
    case 2:
    case "STAKER_STATUS_INACTIVE":
      return StakerStatus.STAKER_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StakerStatus.UNRECOGNIZED;
  }
}
export function stakerStatusToJSON(object: StakerStatus): string {
  switch (object) {
    case StakerStatus.STAKER_STATUS_UNSPECIFIED:
      return "STAKER_STATUS_UNSPECIFIED";
    case StakerStatus.STAKER_STATUS_ACTIVE:
      return "STAKER_STATUS_ACTIVE";
    case StakerStatus.STAKER_STATUS_INACTIVE:
      return "STAKER_STATUS_INACTIVE";
    case StakerStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** QueryStakersRequest is the request type for the Query/Stakers RPC method. */
export interface QueryStakersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** status looks whether a staker is participating in pools or not */
  status: StakerStatus;
  /** search searches for moniker OR address */
  search: string;
}
/** QueryStakersRequest is the request type for the Query/Stakers RPC method. */
export interface QueryStakersRequestSDKType {
  pagination?: PageRequestSDKType;
  status: StakerStatus;
  search: string;
}
/** QueryStakersResponse is the response type for the Query/Stakers RPC method. */
export interface QueryStakersResponse {
  /** stakers ... */
  stakers: FullStaker[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryStakersResponse is the response type for the Query/Stakers RPC method. */
export interface QueryStakersResponseSDKType {
  stakers: FullStakerSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequest {
  /** address ... */
  address: string;
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequestSDKType {
  address: string;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponse {
  /** staker ... */
  staker?: FullStaker;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponseSDKType {
  staker?: FullStakerSDKType;
}
/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequest {
  /** pool_id ... */
  poolId: Long;
}
/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequestSDKType {
  pool_id: Long;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakersByPoolResponse {
  /** stakers ... */
  stakers: StakerPoolResponse[];
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakersByPoolResponseSDKType {
  stakers: StakerPoolResponseSDKType[];
}
/** StakerPoolResponse ... */
export interface StakerPoolResponse {
  /** staker ... */
  staker?: FullStaker;
  /** valaccount ... */
  valaccount?: Valaccount;
}
/** StakerPoolResponse ... */
export interface StakerPoolResponseSDKType {
  staker?: FullStakerSDKType;
  valaccount?: ValaccountSDKType;
}
/** QueryStakersByPoolCountRequest ... */
export interface QueryStakersByPoolCountRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryStakersByPoolCountRequest ... */
export interface QueryStakersByPoolCountRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryStakersByPoolCountResponse ... */
export interface QueryStakersByPoolCountResponse {
  /** stakers ... */
  stakers: FullStaker[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryStakersByPoolCountResponse ... */
export interface QueryStakersByPoolCountResponseSDKType {
  stakers: FullStakerSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryStakersRequest(): QueryStakersRequest {
  return {
    pagination: undefined,
    status: 0,
    search: ""
  };
}
export const QueryStakersRequest = {
  encode(message: QueryStakersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.search !== "") {
      writer.uint32(26).string(message.search);
    }
    return writer;
  },
  fromJSON(object: any): QueryStakersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      status: isSet(object.status) ? stakerStatusFromJSON(object.status) : 0,
      search: isSet(object.search) ? String(object.search) : ""
    };
  },
  fromPartial(object: Partial<QueryStakersRequest>): QueryStakersRequest {
    const message = createBaseQueryStakersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.status = object.status ?? 0;
    message.search = object.search ?? "";
    return message;
  }
};
function createBaseQueryStakersResponse(): QueryStakersResponse {
  return {
    stakers: [],
    pagination: undefined
  };
}
export const QueryStakersResponse = {
  encode(message: QueryStakersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakers) {
      FullStaker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryStakersResponse {
    return {
      stakers: Array.isArray(object?.stakers) ? object.stakers.map((e: any) => FullStaker.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryStakersResponse>): QueryStakersResponse {
    const message = createBaseQueryStakersResponse();
    message.stakers = object.stakers?.map(e => FullStaker.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryStakerRequest(): QueryStakerRequest {
  return {
    address: ""
  };
}
export const QueryStakerRequest = {
  encode(message: QueryStakerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryStakerRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryStakerRequest>): QueryStakerRequest {
    const message = createBaseQueryStakerRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryStakerResponse(): QueryStakerResponse {
  return {
    staker: undefined
  };
}
export const QueryStakerResponse = {
  encode(message: QueryStakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== undefined) {
      FullStaker.encode(message.staker, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryStakerResponse {
    return {
      staker: isSet(object.staker) ? FullStaker.fromJSON(object.staker) : undefined
    };
  },
  fromPartial(object: Partial<QueryStakerResponse>): QueryStakerResponse {
    const message = createBaseQueryStakerResponse();
    message.staker = object.staker !== undefined && object.staker !== null ? FullStaker.fromPartial(object.staker) : undefined;
    return message;
  }
};
function createBaseQueryStakersByPoolRequest(): QueryStakersByPoolRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryStakersByPoolRequest = {
  encode(message: QueryStakersByPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): QueryStakersByPoolRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryStakersByPoolRequest>): QueryStakersByPoolRequest {
    const message = createBaseQueryStakersByPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryStakersByPoolResponse(): QueryStakersByPoolResponse {
  return {
    stakers: []
  };
}
export const QueryStakersByPoolResponse = {
  encode(message: QueryStakersByPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakers) {
      StakerPoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryStakersByPoolResponse {
    return {
      stakers: Array.isArray(object?.stakers) ? object.stakers.map((e: any) => StakerPoolResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryStakersByPoolResponse>): QueryStakersByPoolResponse {
    const message = createBaseQueryStakersByPoolResponse();
    message.stakers = object.stakers?.map(e => StakerPoolResponse.fromPartial(e)) || [];
    return message;
  }
};
function createBaseStakerPoolResponse(): StakerPoolResponse {
  return {
    staker: undefined,
    valaccount: undefined
  };
}
export const StakerPoolResponse = {
  encode(message: StakerPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== undefined) {
      FullStaker.encode(message.staker, writer.uint32(10).fork()).ldelim();
    }
    if (message.valaccount !== undefined) {
      Valaccount.encode(message.valaccount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): StakerPoolResponse {
    return {
      staker: isSet(object.staker) ? FullStaker.fromJSON(object.staker) : undefined,
      valaccount: isSet(object.valaccount) ? Valaccount.fromJSON(object.valaccount) : undefined
    };
  },
  fromPartial(object: Partial<StakerPoolResponse>): StakerPoolResponse {
    const message = createBaseStakerPoolResponse();
    message.staker = object.staker !== undefined && object.staker !== null ? FullStaker.fromPartial(object.staker) : undefined;
    message.valaccount = object.valaccount !== undefined && object.valaccount !== null ? Valaccount.fromPartial(object.valaccount) : undefined;
    return message;
  }
};
function createBaseQueryStakersByPoolCountRequest(): QueryStakersByPoolCountRequest {
  return {
    pagination: undefined
  };
}
export const QueryStakersByPoolCountRequest = {
  encode(message: QueryStakersByPoolCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryStakersByPoolCountRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryStakersByPoolCountRequest>): QueryStakersByPoolCountRequest {
    const message = createBaseQueryStakersByPoolCountRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryStakersByPoolCountResponse(): QueryStakersByPoolCountResponse {
  return {
    stakers: [],
    pagination: undefined
  };
}
export const QueryStakersByPoolCountResponse = {
  encode(message: QueryStakersByPoolCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakers) {
      FullStaker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryStakersByPoolCountResponse {
    return {
      stakers: Array.isArray(object?.stakers) ? object.stakers.map((e: any) => FullStaker.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryStakersByPoolCountResponse>): QueryStakersByPoolCountResponse {
    const message = createBaseQueryStakersByPoolCountResponse();
    message.stakers = object.stakers?.map(e => FullStaker.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};