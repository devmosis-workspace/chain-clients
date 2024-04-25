import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Pool, PoolAmino, PoolSDKType, PoolStatus, poolStatusFromJSON } from "../../pool/v1beta1/pool";
import { BundleProposal, BundleProposalAmino, BundleProposalSDKType } from "../../bundles/v1beta1/bundles";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
export interface QueryPoolsRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryPoolsRequest";
  value: Uint8Array;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  /** search ... */
  search?: string;
  /** runtime ... */
  runtime?: string;
  /** disabled ... */
  disabled?: boolean;
  /** storage_provider_id ... */
  storage_provider_id?: number;
}
export interface QueryPoolsRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryPoolsRequest";
  value: QueryPoolsRequestAmino;
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
export interface QueryPoolsResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryPoolsResponse";
  value: Uint8Array;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponseAmino {
  /** pools ... */
  pools?: PoolResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryPoolsResponse";
  value: QueryPoolsResponseAmino;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponseSDKType {
  pools: PoolResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** PoolResponse ... */
export interface PoolResponse {
  /** id ... */
  id: bigint;
  /** data ... */
  data?: Pool;
  /** bundle_proposal ... */
  bundleProposal?: BundleProposal;
  /** stakers ... */
  stakers: string[];
  /** total_stake ... */
  totalSelfDelegation: bigint;
  /** total_delegation ... */
  totalDelegation: bigint;
  /** status ... */
  status: PoolStatus;
  /** account ... */
  account: string;
  /** account_balance ... */
  accountBalance: bigint;
}
export interface PoolResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.PoolResponse";
  value: Uint8Array;
}
/** PoolResponse ... */
export interface PoolResponseAmino {
  /** id ... */
  id?: string;
  /** data ... */
  data?: PoolAmino;
  /** bundle_proposal ... */
  bundle_proposal?: BundleProposalAmino;
  /** stakers ... */
  stakers?: string[];
  /** total_stake ... */
  total_self_delegation?: string;
  /** total_delegation ... */
  total_delegation?: string;
  /** status ... */
  status?: PoolStatus;
  /** account ... */
  account?: string;
  /** account_balance ... */
  account_balance?: string;
}
export interface PoolResponseAminoMsg {
  type: "/kyve.query.v1beta1.PoolResponse";
  value: PoolResponseAmino;
}
/** PoolResponse ... */
export interface PoolResponseSDKType {
  id: bigint;
  data?: PoolSDKType;
  bundle_proposal?: BundleProposalSDKType;
  stakers: string[];
  total_self_delegation: bigint;
  total_delegation: bigint;
  status: PoolStatus;
  account: string;
  account_balance: bigint;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
  /** id defines the unique ID of the pool. */
  id: bigint;
}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryPoolRequest";
  value: Uint8Array;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequestAmino {
  /** id defines the unique ID of the pool. */
  id?: string;
}
export interface QueryPoolRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequestSDKType {
  id: bigint;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool ... */
  pool: PoolResponse;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryPoolResponse";
  value: Uint8Array;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponseAmino {
  /** pool ... */
  pool?: PoolResponseAmino;
}
export interface QueryPoolResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponseSDKType {
  pool: PoolResponseSDKType;
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
  typeUrl: "/kyve.query.v1beta1.QueryPoolsRequest",
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.search !== undefined && object.search !== null) {
      message.search = object.search;
    }
    if (object.runtime !== undefined && object.runtime !== null) {
      message.runtime = object.runtime;
    }
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = object.disabled;
    }
    if (object.storage_provider_id !== undefined && object.storage_provider_id !== null) {
      message.storageProviderId = object.storage_provider_id;
    }
    return message;
  },
  toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.search = message.search;
    obj.runtime = message.runtime;
    obj.disabled = message.disabled;
    obj.storage_provider_id = message.storageProviderId;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryPoolsResponse",
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => PoolResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolResponse.toAmino(e) : undefined);
    } else {
      obj.pools = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};
function createBasePoolResponse(): PoolResponse {
  return {
    id: BigInt(0),
    data: undefined,
    bundleProposal: undefined,
    stakers: [],
    totalSelfDelegation: BigInt(0),
    totalDelegation: BigInt(0),
    status: 0,
    account: "",
    accountBalance: BigInt(0)
  };
}
export const PoolResponse = {
  typeUrl: "/kyve.query.v1beta1.PoolResponse",
  encode(message: PoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
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
    if (message.totalSelfDelegation !== BigInt(0)) {
      writer.uint32(40).uint64(message.totalSelfDelegation);
    }
    if (message.totalDelegation !== BigInt(0)) {
      writer.uint32(48).uint64(message.totalDelegation);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.account !== "") {
      writer.uint32(66).string(message.account);
    }
    if (message.accountBalance !== BigInt(0)) {
      writer.uint32(72).uint64(message.accountBalance);
    }
    return writer;
  },
  fromJSON(object: any): PoolResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      data: isSet(object.data) ? Pool.fromJSON(object.data) : undefined,
      bundleProposal: isSet(object.bundleProposal) ? BundleProposal.fromJSON(object.bundleProposal) : undefined,
      stakers: Array.isArray(object?.stakers) ? object.stakers.map((e: any) => String(e)) : [],
      totalSelfDelegation: isSet(object.totalSelfDelegation) ? BigInt(object.totalSelfDelegation.toString()) : BigInt(0),
      totalDelegation: isSet(object.totalDelegation) ? BigInt(object.totalDelegation.toString()) : BigInt(0),
      status: isSet(object.status) ? poolStatusFromJSON(object.status) : -1,
      account: isSet(object.account) ? String(object.account) : "",
      accountBalance: isSet(object.accountBalance) ? BigInt(object.accountBalance.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PoolResponse>): PoolResponse {
    const message = createBasePoolResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.data = object.data !== undefined && object.data !== null ? Pool.fromPartial(object.data) : undefined;
    message.bundleProposal = object.bundleProposal !== undefined && object.bundleProposal !== null ? BundleProposal.fromPartial(object.bundleProposal) : undefined;
    message.stakers = object.stakers?.map(e => e) || [];
    message.totalSelfDelegation = object.totalSelfDelegation !== undefined && object.totalSelfDelegation !== null ? BigInt(object.totalSelfDelegation.toString()) : BigInt(0);
    message.totalDelegation = object.totalDelegation !== undefined && object.totalDelegation !== null ? BigInt(object.totalDelegation.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.account = object.account ?? "";
    message.accountBalance = object.accountBalance !== undefined && object.accountBalance !== null ? BigInt(object.accountBalance.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolResponseAmino): PoolResponse {
    const message = createBasePoolResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Pool.fromAmino(object.data);
    }
    if (object.bundle_proposal !== undefined && object.bundle_proposal !== null) {
      message.bundleProposal = BundleProposal.fromAmino(object.bundle_proposal);
    }
    message.stakers = object.stakers?.map(e => e) || [];
    if (object.total_self_delegation !== undefined && object.total_self_delegation !== null) {
      message.totalSelfDelegation = BigInt(object.total_self_delegation);
    }
    if (object.total_delegation !== undefined && object.total_delegation !== null) {
      message.totalDelegation = BigInt(object.total_delegation);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = poolStatusFromJSON(object.status);
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.account_balance !== undefined && object.account_balance !== null) {
      message.accountBalance = BigInt(object.account_balance);
    }
    return message;
  },
  toAmino(message: PoolResponse): PoolResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.data = message.data ? Pool.toAmino(message.data) : undefined;
    obj.bundle_proposal = message.bundleProposal ? BundleProposal.toAmino(message.bundleProposal) : undefined;
    if (message.stakers) {
      obj.stakers = message.stakers.map(e => e);
    } else {
      obj.stakers = [];
    }
    obj.total_self_delegation = message.totalSelfDelegation ? message.totalSelfDelegation.toString() : undefined;
    obj.total_delegation = message.totalDelegation ? message.totalDelegation.toString() : undefined;
    obj.status = message.status;
    obj.account = message.account;
    obj.account_balance = message.accountBalance ? message.accountBalance.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolResponseAminoMsg): PoolResponse {
    return PoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolResponseProtoMsg): PoolResponse {
    return PoolResponse.decode(message.value);
  },
  toProto(message: PoolResponse): Uint8Array {
    return PoolResponse.encode(message).finish();
  },
  toProtoMsg(message: PoolResponse): PoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.PoolResponse",
      value: PoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryPoolRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryPoolRequest",
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryPoolRequest): QueryPoolRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: PoolResponse.fromPartial({})
  };
}
export const QueryPoolResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryPoolResponse",
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = PoolResponse.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryPoolResponse): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? PoolResponse.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};