import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerSDKType, BasicPool, BasicPoolSDKType } from "./query";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequest {
  /** address ... */
  address: string;
}
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequestSDKType {
  address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponse {
  /** balance ... */
  balance: Long;
  /** protocol_staking ... */
  protocolSelfDelegation: Long;
  /** protocol_staking_unbonding */
  protocolSelfDelegationUnbonding: Long;
  /** protocol_delegation ... */
  protocolDelegation: Long;
  /** protocol_delegation_unbonding */
  protocolDelegationUnbonding: Long;
  /** protocol_rewards ... */
  protocolRewards: Long;
  /** protocol_funding ... */
  protocolFunding: Long;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponseSDKType {
  balance: Long;
  protocol_self_delegation: Long;
  protocol_self_delegation_unbonding: Long;
  protocol_delegation: Long;
  protocol_delegation_unbonding: Long;
  protocol_rewards: Long;
  protocol_funding: Long;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** address ... */
  address: string;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequestSDKType {
  pagination?: PageRequestSDKType;
  address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponse {
  /** balance ... */
  unbondings: DelegationUnbonding[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponseSDKType {
  unbondings: DelegationUnbondingSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbonding {
  /** amount */
  amount: Long;
  /** creation_time */
  creationTime: Long;
  /** staker */
  staker?: FullStaker;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbondingSDKType {
  amount: Long;
  creation_time: Long;
  staker?: FullStakerSDKType;
}
/** QueryAccountFundedListRequest is the request type for the account queries with pagination */
export interface QueryAccountFundedListRequest {
  /** address ... */
  address: string;
}
/** QueryAccountFundedListRequest is the request type for the account queries with pagination */
export interface QueryAccountFundedListRequestSDKType {
  address: string;
}
/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponse {
  /** funded ... */
  funded: Funded[];
}
/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponseSDKType {
  funded: FundedSDKType[];
}
/** Funded ... */
export interface Funded {
  /** amount ... */
  amount: Long;
  /** pool ... */
  pool?: BasicPool;
}
/** Funded ... */
export interface FundedSDKType {
  amount: Long;
  pool?: BasicPoolSDKType;
}
/** QueryAccountDelegationListRequest ... */
export interface QueryAccountRedelegationRequest {
  /** address ... */
  address: string;
}
/** QueryAccountDelegationListRequest ... */
export interface QueryAccountRedelegationRequestSDKType {
  address: string;
}
/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountRedelegationResponse {
  /** redelegation_cooldown_entries ... */
  redelegationCooldownEntries: RedelegationEntry[];
  /** availableSlots ... */
  availableSlots: Long;
}
/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountRedelegationResponseSDKType {
  redelegation_cooldown_entries: RedelegationEntrySDKType[];
  available_slots: Long;
}
/** RedelegationEntry ... */
export interface RedelegationEntry {
  /** creation_date ... */
  creationDate: Long;
  /** finish_date ... */
  finishDate: Long;
}
/** RedelegationEntry ... */
export interface RedelegationEntrySDKType {
  creation_date: Long;
  finish_date: Long;
}
function createBaseQueryAccountAssetsRequest(): QueryAccountAssetsRequest {
  return {
    address: ""
  };
}
export const QueryAccountAssetsRequest = {
  encode(message: QueryAccountAssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountAssetsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountAssetsRequest>): QueryAccountAssetsRequest {
    const message = createBaseQueryAccountAssetsRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryAccountAssetsResponse(): QueryAccountAssetsResponse {
  return {
    balance: Long.UZERO,
    protocolSelfDelegation: Long.UZERO,
    protocolSelfDelegationUnbonding: Long.UZERO,
    protocolDelegation: Long.UZERO,
    protocolDelegationUnbonding: Long.UZERO,
    protocolRewards: Long.UZERO,
    protocolFunding: Long.UZERO
  };
}
export const QueryAccountAssetsResponse = {
  encode(message: QueryAccountAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.balance.isZero()) {
      writer.uint32(8).uint64(message.balance);
    }
    if (!message.protocolSelfDelegation.isZero()) {
      writer.uint32(16).uint64(message.protocolSelfDelegation);
    }
    if (!message.protocolSelfDelegationUnbonding.isZero()) {
      writer.uint32(24).uint64(message.protocolSelfDelegationUnbonding);
    }
    if (!message.protocolDelegation.isZero()) {
      writer.uint32(32).uint64(message.protocolDelegation);
    }
    if (!message.protocolDelegationUnbonding.isZero()) {
      writer.uint32(40).uint64(message.protocolDelegationUnbonding);
    }
    if (!message.protocolRewards.isZero()) {
      writer.uint32(48).uint64(message.protocolRewards);
    }
    if (!message.protocolFunding.isZero()) {
      writer.uint32(56).uint64(message.protocolFunding);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountAssetsResponse {
    return {
      balance: isSet(object.balance) ? Long.fromValue(object.balance) : Long.UZERO,
      protocolSelfDelegation: isSet(object.protocolSelfDelegation) ? Long.fromValue(object.protocolSelfDelegation) : Long.UZERO,
      protocolSelfDelegationUnbonding: isSet(object.protocolSelfDelegationUnbonding) ? Long.fromValue(object.protocolSelfDelegationUnbonding) : Long.UZERO,
      protocolDelegation: isSet(object.protocolDelegation) ? Long.fromValue(object.protocolDelegation) : Long.UZERO,
      protocolDelegationUnbonding: isSet(object.protocolDelegationUnbonding) ? Long.fromValue(object.protocolDelegationUnbonding) : Long.UZERO,
      protocolRewards: isSet(object.protocolRewards) ? Long.fromValue(object.protocolRewards) : Long.UZERO,
      protocolFunding: isSet(object.protocolFunding) ? Long.fromValue(object.protocolFunding) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryAccountAssetsResponse>): QueryAccountAssetsResponse {
    const message = createBaseQueryAccountAssetsResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Long.fromValue(object.balance) : Long.UZERO;
    message.protocolSelfDelegation = object.protocolSelfDelegation !== undefined && object.protocolSelfDelegation !== null ? Long.fromValue(object.protocolSelfDelegation) : Long.UZERO;
    message.protocolSelfDelegationUnbonding = object.protocolSelfDelegationUnbonding !== undefined && object.protocolSelfDelegationUnbonding !== null ? Long.fromValue(object.protocolSelfDelegationUnbonding) : Long.UZERO;
    message.protocolDelegation = object.protocolDelegation !== undefined && object.protocolDelegation !== null ? Long.fromValue(object.protocolDelegation) : Long.UZERO;
    message.protocolDelegationUnbonding = object.protocolDelegationUnbonding !== undefined && object.protocolDelegationUnbonding !== null ? Long.fromValue(object.protocolDelegationUnbonding) : Long.UZERO;
    message.protocolRewards = object.protocolRewards !== undefined && object.protocolRewards !== null ? Long.fromValue(object.protocolRewards) : Long.UZERO;
    message.protocolFunding = object.protocolFunding !== undefined && object.protocolFunding !== null ? Long.fromValue(object.protocolFunding) : Long.UZERO;
    return message;
  }
};
function createBaseQueryAccountDelegationUnbondingsRequest(): QueryAccountDelegationUnbondingsRequest {
  return {
    pagination: undefined,
    address: ""
  };
}
export const QueryAccountDelegationUnbondingsRequest = {
  encode(message: QueryAccountDelegationUnbondingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountDelegationUnbondingsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountDelegationUnbondingsRequest>): QueryAccountDelegationUnbondingsRequest {
    const message = createBaseQueryAccountDelegationUnbondingsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryAccountDelegationUnbondingsResponse(): QueryAccountDelegationUnbondingsResponse {
  return {
    unbondings: [],
    pagination: undefined
  };
}
export const QueryAccountDelegationUnbondingsResponse = {
  encode(message: QueryAccountDelegationUnbondingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondings) {
      DelegationUnbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountDelegationUnbondingsResponse {
    return {
      unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e: any) => DelegationUnbonding.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAccountDelegationUnbondingsResponse>): QueryAccountDelegationUnbondingsResponse {
    const message = createBaseQueryAccountDelegationUnbondingsResponse();
    message.unbondings = object.unbondings?.map(e => DelegationUnbonding.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseDelegationUnbonding(): DelegationUnbonding {
  return {
    amount: Long.UZERO,
    creationTime: Long.UZERO,
    staker: undefined
  };
}
export const DelegationUnbonding = {
  encode(message: DelegationUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }
    if (!message.creationTime.isZero()) {
      writer.uint32(16).uint64(message.creationTime);
    }
    if (message.staker !== undefined) {
      FullStaker.encode(message.staker, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DelegationUnbonding {
    return {
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      creationTime: isSet(object.creationTime) ? Long.fromValue(object.creationTime) : Long.UZERO,
      staker: isSet(object.staker) ? FullStaker.fromJSON(object.staker) : undefined
    };
  },
  fromPartial(object: Partial<DelegationUnbonding>): DelegationUnbonding {
    const message = createBaseDelegationUnbonding();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.creationTime = object.creationTime !== undefined && object.creationTime !== null ? Long.fromValue(object.creationTime) : Long.UZERO;
    message.staker = object.staker !== undefined && object.staker !== null ? FullStaker.fromPartial(object.staker) : undefined;
    return message;
  }
};
function createBaseQueryAccountFundedListRequest(): QueryAccountFundedListRequest {
  return {
    address: ""
  };
}
export const QueryAccountFundedListRequest = {
  encode(message: QueryAccountFundedListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountFundedListRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountFundedListRequest>): QueryAccountFundedListRequest {
    const message = createBaseQueryAccountFundedListRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryAccountFundedListResponse(): QueryAccountFundedListResponse {
  return {
    funded: []
  };
}
export const QueryAccountFundedListResponse = {
  encode(message: QueryAccountFundedListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.funded) {
      Funded.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountFundedListResponse {
    return {
      funded: Array.isArray(object?.funded) ? object.funded.map((e: any) => Funded.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAccountFundedListResponse>): QueryAccountFundedListResponse {
    const message = createBaseQueryAccountFundedListResponse();
    message.funded = object.funded?.map(e => Funded.fromPartial(e)) || [];
    return message;
  }
};
function createBaseFunded(): Funded {
  return {
    amount: Long.UZERO,
    pool: undefined
  };
}
export const Funded = {
  encode(message: Funded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }
    if (message.pool !== undefined) {
      BasicPool.encode(message.pool, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Funded {
    return {
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      pool: isSet(object.pool) ? BasicPool.fromJSON(object.pool) : undefined
    };
  },
  fromPartial(object: Partial<Funded>): Funded {
    const message = createBaseFunded();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.pool = object.pool !== undefined && object.pool !== null ? BasicPool.fromPartial(object.pool) : undefined;
    return message;
  }
};
function createBaseQueryAccountRedelegationRequest(): QueryAccountRedelegationRequest {
  return {
    address: ""
  };
}
export const QueryAccountRedelegationRequest = {
  encode(message: QueryAccountRedelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountRedelegationRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountRedelegationRequest>): QueryAccountRedelegationRequest {
    const message = createBaseQueryAccountRedelegationRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryAccountRedelegationResponse(): QueryAccountRedelegationResponse {
  return {
    redelegationCooldownEntries: [],
    availableSlots: Long.UZERO
  };
}
export const QueryAccountRedelegationResponse = {
  encode(message: QueryAccountRedelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegationCooldownEntries) {
      RedelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.availableSlots.isZero()) {
      writer.uint32(16).uint64(message.availableSlots);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountRedelegationResponse {
    return {
      redelegationCooldownEntries: Array.isArray(object?.redelegationCooldownEntries) ? object.redelegationCooldownEntries.map((e: any) => RedelegationEntry.fromJSON(e)) : [],
      availableSlots: isSet(object.availableSlots) ? Long.fromValue(object.availableSlots) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryAccountRedelegationResponse>): QueryAccountRedelegationResponse {
    const message = createBaseQueryAccountRedelegationResponse();
    message.redelegationCooldownEntries = object.redelegationCooldownEntries?.map(e => RedelegationEntry.fromPartial(e)) || [];
    message.availableSlots = object.availableSlots !== undefined && object.availableSlots !== null ? Long.fromValue(object.availableSlots) : Long.UZERO;
    return message;
  }
};
function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    creationDate: Long.UZERO,
    finishDate: Long.UZERO
  };
}
export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.creationDate.isZero()) {
      writer.uint32(8).uint64(message.creationDate);
    }
    if (!message.finishDate.isZero()) {
      writer.uint32(16).uint64(message.finishDate);
    }
    return writer;
  },
  fromJSON(object: any): RedelegationEntry {
    return {
      creationDate: isSet(object.creationDate) ? Long.fromValue(object.creationDate) : Long.UZERO,
      finishDate: isSet(object.finishDate) ? Long.fromValue(object.finishDate) : Long.UZERO
    };
  },
  fromPartial(object: Partial<RedelegationEntry>): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.creationDate = object.creationDate !== undefined && object.creationDate !== null ? Long.fromValue(object.creationDate) : Long.UZERO;
    message.finishDate = object.finishDate !== undefined && object.finishDate !== null ? Long.fromValue(object.finishDate) : Long.UZERO;
    return message;
  }
};