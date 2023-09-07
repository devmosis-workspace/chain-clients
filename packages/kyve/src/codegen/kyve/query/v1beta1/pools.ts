import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Pool, PoolSDKType, PoolStatus, poolStatusFromJSON } from "../../pool/v1beta1/pool";
import { BundleProposal, BundleProposalSDKType } from "../../bundles/v1beta1/bundles";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** search ... */
  search: string;
  /** runtime ... */
  runtime: string;
  /** disabled ... */
  disabled: boolean;
  /** storage_provider_id ... */
  storageProviderId: number;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
  search: string;
  runtime: string;
  disabled: boolean;
  storage_provider_id: number;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponse {
  /** pools ... */
  pools: PoolResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponseSDKType {
  pools: PoolResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** PoolResponse ... */
export interface PoolResponse {
  /** id ... */
  id: Long;
  /** data ... */
  data?: Pool;
  /** bundle_proposal ... */
  bundleProposal?: BundleProposal;
  /** stakers ... */
  stakers: string[];
  /** total_stake ... */
  totalSelfDelegation: Long;
  /** total_delegation ... */
  totalDelegation: Long;
  /** status ... */
  status: PoolStatus;
  /** account ... */
  account: string;
  /** account_balance ... */
  accountBalance: Long;
}
/** PoolResponse ... */
export interface PoolResponseSDKType {
  id: Long;
  data?: PoolSDKType;
  bundle_proposal?: BundleProposalSDKType;
  stakers: string[];
  total_self_delegation: Long;
  total_delegation: Long;
  status: PoolStatus;
  account: string;
  account_balance: Long;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
  /** id defines the unique ID of the pool. */
  id: Long;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequestSDKType {
  id: Long;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool ... */
  pool?: PoolResponse;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponseSDKType {
  pool?: PoolResponseSDKType;
}
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined,
    search: "",
    runtime: "",
    disabled: false,
    storageProviderId: 0
  };
}
export const QueryPoolsRequest = {
  encode(message: QueryPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.search !== "") {
      writer.uint32(18).string(message.search);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    if (message.disabled === true) {
      writer.uint32(32).bool(message.disabled);
    }
    if (message.storageProviderId !== 0) {
      writer.uint32(40).uint32(message.storageProviderId);
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      search: isSet(object.search) ? String(object.search) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0
    };
  },
  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.search = object.search ?? "";
    message.runtime = object.runtime ?? "";
    message.disabled = object.disabled ?? false;
    message.storageProviderId = object.storageProviderId ?? 0;
    return message;
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  encode(message: QueryPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      PoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => PoolResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBasePoolResponse(): PoolResponse {
  return {
    id: Long.UZERO,
    data: undefined,
    bundleProposal: undefined,
    stakers: [],
    totalSelfDelegation: Long.UZERO,
    totalDelegation: Long.UZERO,
    status: 0,
    account: "",
    accountBalance: Long.UZERO
  };
}
export const PoolResponse = {
  encode(message: PoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.data !== undefined) {
      Pool.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.bundleProposal !== undefined) {
      BundleProposal.encode(message.bundleProposal, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.stakers) {
      writer.uint32(34).string(v!);
    }
    if (!message.totalSelfDelegation.isZero()) {
      writer.uint32(40).uint64(message.totalSelfDelegation);
    }
    if (!message.totalDelegation.isZero()) {
      writer.uint32(48).uint64(message.totalDelegation);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.account !== "") {
      writer.uint32(66).string(message.account);
    }
    if (!message.accountBalance.isZero()) {
      writer.uint32(72).uint64(message.accountBalance);
    }
    return writer;
  },
  fromJSON(object: any): PoolResponse {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      data: isSet(object.data) ? Pool.fromJSON(object.data) : undefined,
      bundleProposal: isSet(object.bundleProposal) ? BundleProposal.fromJSON(object.bundleProposal) : undefined,
      stakers: Array.isArray(object?.stakers) ? object.stakers.map((e: any) => String(e)) : [],
      totalSelfDelegation: isSet(object.totalSelfDelegation) ? Long.fromValue(object.totalSelfDelegation) : Long.UZERO,
      totalDelegation: isSet(object.totalDelegation) ? Long.fromValue(object.totalDelegation) : Long.UZERO,
      status: isSet(object.status) ? poolStatusFromJSON(object.status) : 0,
      account: isSet(object.account) ? String(object.account) : "",
      accountBalance: isSet(object.accountBalance) ? Long.fromValue(object.accountBalance) : Long.UZERO
    };
  },
  fromPartial(object: Partial<PoolResponse>): PoolResponse {
    const message = createBasePoolResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.data = object.data !== undefined && object.data !== null ? Pool.fromPartial(object.data) : undefined;
    message.bundleProposal = object.bundleProposal !== undefined && object.bundleProposal !== null ? BundleProposal.fromPartial(object.bundleProposal) : undefined;
    message.stakers = object.stakers?.map(e => e) || [];
    message.totalSelfDelegation = object.totalSelfDelegation !== undefined && object.totalSelfDelegation !== null ? Long.fromValue(object.totalSelfDelegation) : Long.UZERO;
    message.totalDelegation = object.totalDelegation !== undefined && object.totalDelegation !== null ? Long.fromValue(object.totalDelegation) : Long.UZERO;
    message.status = object.status ?? 0;
    message.account = object.account ?? "";
    message.accountBalance = object.accountBalance !== undefined && object.accountBalance !== null ? Long.fromValue(object.accountBalance) : Long.UZERO;
    return message;
  }
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryPoolRequest = {
  encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}
export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      PoolResponse.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? PoolResponse.fromJSON(object.pool) : undefined
    };
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? PoolResponse.fromPartial(object.pool) : undefined;
    return message;
  }
};