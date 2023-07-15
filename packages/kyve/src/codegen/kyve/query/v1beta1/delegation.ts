import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerSDKType } from "./query";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequest {
  /** staker ... */
  staker: string;
  /** delegator ... */
  delegator: string;
}
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequestSDKType {
  staker: string;
  delegator: string;
}
/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponse {
  /** delegator ... */
  delegator?: StakerDelegatorResponse;
}
/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponseSDKType {
  delegator?: StakerDelegatorResponseSDKType;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponse {
  /** delegator ... */
  delegator: string;
  /** current_reward ... */
  currentReward: Long;
  /** delegation_amount ... */
  delegationAmount: Long;
  /** staker ... */
  staker: string;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponseSDKType {
  delegator: string;
  current_reward: Long;
  delegation_amount: Long;
  staker: string;
}
/** QueryDelegatorsByStakerRequest ... */
export interface QueryDelegatorsByStakerRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** staker ... */
  staker: string;
}
/** QueryDelegatorsByStakerRequest ... */
export interface QueryDelegatorsByStakerRequestSDKType {
  pagination?: PageRequestSDKType;
  staker: string;
}
/** QueryDelegatorsByStakerResponse ... */
export interface QueryDelegatorsByStakerResponse {
  /** delegators ... */
  delegators: StakerDelegatorResponse[];
  /** total_delegation ... (consider metadata object) */
  totalDelegation: Long;
  /** total_delegation ... */
  totalDelegatorCount: Long;
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryDelegatorsByStakerResponse ... */
export interface QueryDelegatorsByStakerResponseSDKType {
  delegators: StakerDelegatorResponseSDKType[];
  total_delegation: Long;
  total_delegator_count: Long;
  pagination?: PageResponseSDKType;
}
/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** delegator ... */
  delegator: string;
}
/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequestSDKType {
  pagination?: PageRequestSDKType;
  delegator: string;
}
/** QueryStakersByDelegatorResponse ... */
export interface QueryStakersByDelegatorResponse {
  /** delegator ... */
  delegator: string;
  /** stakers ... */
  stakers: DelegationForStakerResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryStakersByDelegatorResponse ... */
export interface QueryStakersByDelegatorResponseSDKType {
  delegator: string;
  stakers: DelegationForStakerResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponse {
  /** staker ... */
  staker?: FullStaker;
  /** current_reward ... */
  currentReward: Long;
  /** delegation_amount ... */
  delegationAmount: Long;
}
/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponseSDKType {
  staker?: FullStakerSDKType;
  current_reward: Long;
  delegation_amount: Long;
}
function createBaseQueryDelegatorRequest(): QueryDelegatorRequest {
  return {
    staker: "",
    delegator: ""
  };
}
export const QueryDelegatorRequest = {
  encode(message: QueryDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorRequest {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegatorRequest>): QueryDelegatorRequest {
    const message = createBaseQueryDelegatorRequest();
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    return message;
  }
};
function createBaseQueryDelegatorResponse(): QueryDelegatorResponse {
  return {
    delegator: undefined
  };
}
export const QueryDelegatorResponse = {
  encode(message: QueryDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== undefined) {
      StakerDelegatorResponse.encode(message.delegator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorResponse {
    return {
      delegator: isSet(object.delegator) ? StakerDelegatorResponse.fromJSON(object.delegator) : undefined
    };
  },
  fromPartial(object: Partial<QueryDelegatorResponse>): QueryDelegatorResponse {
    const message = createBaseQueryDelegatorResponse();
    message.delegator = object.delegator !== undefined && object.delegator !== null ? StakerDelegatorResponse.fromPartial(object.delegator) : undefined;
    return message;
  }
};
function createBaseStakerDelegatorResponse(): StakerDelegatorResponse {
  return {
    delegator: "",
    currentReward: Long.UZERO,
    delegationAmount: Long.UZERO,
    staker: ""
  };
}
export const StakerDelegatorResponse = {
  encode(message: StakerDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (!message.currentReward.isZero()) {
      writer.uint32(16).uint64(message.currentReward);
    }
    if (!message.delegationAmount.isZero()) {
      writer.uint32(24).uint64(message.delegationAmount);
    }
    if (message.staker !== "") {
      writer.uint32(34).string(message.staker);
    }
    return writer;
  },
  fromJSON(object: any): StakerDelegatorResponse {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      currentReward: isSet(object.currentReward) ? Long.fromValue(object.currentReward) : Long.UZERO,
      delegationAmount: isSet(object.delegationAmount) ? Long.fromValue(object.delegationAmount) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : ""
    };
  },
  fromPartial(object: Partial<StakerDelegatorResponse>): StakerDelegatorResponse {
    const message = createBaseStakerDelegatorResponse();
    message.delegator = object.delegator ?? "";
    message.currentReward = object.currentReward !== undefined && object.currentReward !== null ? Long.fromValue(object.currentReward) : Long.UZERO;
    message.delegationAmount = object.delegationAmount !== undefined && object.delegationAmount !== null ? Long.fromValue(object.delegationAmount) : Long.UZERO;
    message.staker = object.staker ?? "";
    return message;
  }
};
function createBaseQueryDelegatorsByStakerRequest(): QueryDelegatorsByStakerRequest {
  return {
    pagination: undefined,
    staker: ""
  };
}
export const QueryDelegatorsByStakerRequest = {
  encode(message: QueryDelegatorsByStakerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorsByStakerRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      staker: isSet(object.staker) ? String(object.staker) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegatorsByStakerRequest>): QueryDelegatorsByStakerRequest {
    const message = createBaseQueryDelegatorsByStakerRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.staker = object.staker ?? "";
    return message;
  }
};
function createBaseQueryDelegatorsByStakerResponse(): QueryDelegatorsByStakerResponse {
  return {
    delegators: [],
    totalDelegation: Long.UZERO,
    totalDelegatorCount: Long.UZERO,
    pagination: undefined
  };
}
export const QueryDelegatorsByStakerResponse = {
  encode(message: QueryDelegatorsByStakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegators) {
      StakerDelegatorResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.totalDelegation.isZero()) {
      writer.uint32(16).uint64(message.totalDelegation);
    }
    if (!message.totalDelegatorCount.isZero()) {
      writer.uint32(24).uint64(message.totalDelegatorCount);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorsByStakerResponse {
    return {
      delegators: Array.isArray(object?.delegators) ? object.delegators.map((e: any) => StakerDelegatorResponse.fromJSON(e)) : [],
      totalDelegation: isSet(object.totalDelegation) ? Long.fromValue(object.totalDelegation) : Long.UZERO,
      totalDelegatorCount: isSet(object.totalDelegatorCount) ? Long.fromValue(object.totalDelegatorCount) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDelegatorsByStakerResponse>): QueryDelegatorsByStakerResponse {
    const message = createBaseQueryDelegatorsByStakerResponse();
    message.delegators = object.delegators?.map(e => StakerDelegatorResponse.fromPartial(e)) || [];
    message.totalDelegation = object.totalDelegation !== undefined && object.totalDelegation !== null ? Long.fromValue(object.totalDelegation) : Long.UZERO;
    message.totalDelegatorCount = object.totalDelegatorCount !== undefined && object.totalDelegatorCount !== null ? Long.fromValue(object.totalDelegatorCount) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryStakersByDelegatorRequest(): QueryStakersByDelegatorRequest {
  return {
    pagination: undefined,
    delegator: ""
  };
}
export const QueryStakersByDelegatorRequest = {
  encode(message: QueryStakersByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    return writer;
  },
  fromJSON(object: any): QueryStakersByDelegatorRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      delegator: isSet(object.delegator) ? String(object.delegator) : ""
    };
  },
  fromPartial(object: Partial<QueryStakersByDelegatorRequest>): QueryStakersByDelegatorRequest {
    const message = createBaseQueryStakersByDelegatorRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.delegator = object.delegator ?? "";
    return message;
  }
};
function createBaseQueryStakersByDelegatorResponse(): QueryStakersByDelegatorResponse {
  return {
    delegator: "",
    stakers: [],
    pagination: undefined
  };
}
export const QueryStakersByDelegatorResponse = {
  encode(message: QueryStakersByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.stakers) {
      DelegationForStakerResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryStakersByDelegatorResponse {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      stakers: Array.isArray(object?.stakers) ? object.stakers.map((e: any) => DelegationForStakerResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryStakersByDelegatorResponse>): QueryStakersByDelegatorResponse {
    const message = createBaseQueryStakersByDelegatorResponse();
    message.delegator = object.delegator ?? "";
    message.stakers = object.stakers?.map(e => DelegationForStakerResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseDelegationForStakerResponse(): DelegationForStakerResponse {
  return {
    staker: undefined,
    currentReward: Long.UZERO,
    delegationAmount: Long.UZERO
  };
}
export const DelegationForStakerResponse = {
  encode(message: DelegationForStakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== undefined) {
      FullStaker.encode(message.staker, writer.uint32(10).fork()).ldelim();
    }
    if (!message.currentReward.isZero()) {
      writer.uint32(16).uint64(message.currentReward);
    }
    if (!message.delegationAmount.isZero()) {
      writer.uint32(24).uint64(message.delegationAmount);
    }
    return writer;
  },
  fromJSON(object: any): DelegationForStakerResponse {
    return {
      staker: isSet(object.staker) ? FullStaker.fromJSON(object.staker) : undefined,
      currentReward: isSet(object.currentReward) ? Long.fromValue(object.currentReward) : Long.UZERO,
      delegationAmount: isSet(object.delegationAmount) ? Long.fromValue(object.delegationAmount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<DelegationForStakerResponse>): DelegationForStakerResponse {
    const message = createBaseDelegationForStakerResponse();
    message.staker = object.staker !== undefined && object.staker !== null ? FullStaker.fromPartial(object.staker) : undefined;
    message.currentReward = object.currentReward !== undefined && object.currentReward !== null ? Long.fromValue(object.currentReward) : Long.UZERO;
    message.delegationAmount = object.delegationAmount !== undefined && object.delegationAmount !== null ? Long.fromValue(object.delegationAmount) : Long.UZERO;
    return message;
  }
};