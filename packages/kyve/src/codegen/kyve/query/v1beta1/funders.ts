import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** FundingStatus ... */
export enum FundingStatus {
  /** FUNDING_STATUS_UNSPECIFIED - FundingStatusUnspecified ... */
  FUNDING_STATUS_UNSPECIFIED = 0,
  /** FUNDING_STATUS_ACTIVE - FundingStatusActive status is set when the funding is active. */
  FUNDING_STATUS_ACTIVE = 1,
  /** FUNDING_STATUS_INACTIVE - FundingStatusInactive status is set when the funding has been used up or refunded. */
  FUNDING_STATUS_INACTIVE = 2,
  UNRECOGNIZED = -1,
}
export const FundingStatusSDKType = FundingStatus;
export const FundingStatusAmino = FundingStatus;
export function fundingStatusFromJSON(object: any): FundingStatus {
  switch (object) {
    case 0:
    case "FUNDING_STATUS_UNSPECIFIED":
      return FundingStatus.FUNDING_STATUS_UNSPECIFIED;
    case 1:
    case "FUNDING_STATUS_ACTIVE":
      return FundingStatus.FUNDING_STATUS_ACTIVE;
    case 2:
    case "FUNDING_STATUS_INACTIVE":
      return FundingStatus.FUNDING_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FundingStatus.UNRECOGNIZED;
  }
}
export function fundingStatusToJSON(object: FundingStatus): string {
  switch (object) {
    case FundingStatus.FUNDING_STATUS_UNSPECIFIED:
      return "FUNDING_STATUS_UNSPECIFIED";
    case FundingStatus.FUNDING_STATUS_ACTIVE:
      return "FUNDING_STATUS_ACTIVE";
    case FundingStatus.FUNDING_STATUS_INACTIVE:
      return "FUNDING_STATUS_INACTIVE";
    case FundingStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Funder ... */
export interface Funder {
  /** address ... */
  address: string;
  /** moniker ... */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website ... */
  website: string;
  /** contact ... */
  contact: string;
  /** description ... */
  description: string;
  /** statistics about all the fundings of the funder. */
  stats?: FundingStats;
}
export interface FunderProtoMsg {
  typeUrl: "/kyve.query.v1beta1.Funder";
  value: Uint8Array;
}
/** Funder ... */
export interface FunderAmino {
  /** address ... */
  address?: string;
  /** moniker ... */
  moniker?: string;
  /** identity is the 64 bit keybase.io identity string */
  identity?: string;
  /** website ... */
  website?: string;
  /** contact ... */
  contact?: string;
  /** description ... */
  description?: string;
  /** statistics about all the fundings of the funder. */
  stats?: FundingStatsAmino;
}
export interface FunderAminoMsg {
  type: "/kyve.query.v1beta1.Funder";
  value: FunderAmino;
}
/** Funder ... */
export interface FunderSDKType {
  address: string;
  moniker: string;
  identity: string;
  website: string;
  contact: string;
  description: string;
  stats?: FundingStatsSDKType;
}
/** FundingStats ... */
export interface FundingStats {
  /** total_used_funds are the total funds that have been distributed by the funder. */
  totalUsedFunds: bigint;
  /** total_allocated_funds are the total funds that have been allocated by the funder. They can either get distributed or refunded. */
  totalAllocatedFunds: bigint;
  /** total_amount_per_bundle is the total amount per bundle of all fundings of the funder. */
  totalAmountPerBundle: bigint;
  /** pools_funded are the ids of the pools that have been funded by the funder. */
  poolsFunded: bigint[];
}
export interface FundingStatsProtoMsg {
  typeUrl: "/kyve.query.v1beta1.FundingStats";
  value: Uint8Array;
}
/** FundingStats ... */
export interface FundingStatsAmino {
  /** total_used_funds are the total funds that have been distributed by the funder. */
  total_used_funds?: string;
  /** total_allocated_funds are the total funds that have been allocated by the funder. They can either get distributed or refunded. */
  total_allocated_funds?: string;
  /** total_amount_per_bundle is the total amount per bundle of all fundings of the funder. */
  total_amount_per_bundle?: string;
  /** pools_funded are the ids of the pools that have been funded by the funder. */
  pools_funded?: string[];
}
export interface FundingStatsAminoMsg {
  type: "/kyve.query.v1beta1.FundingStats";
  value: FundingStatsAmino;
}
/** FundingStats ... */
export interface FundingStatsSDKType {
  total_used_funds: bigint;
  total_allocated_funds: bigint;
  total_amount_per_bundle: bigint;
  pools_funded: bigint[];
}
/** Funding ... */
export interface Funding {
  /** funder_address */
  funderAddress: string;
  /** pool_id ... */
  poolId: bigint;
  /** amount ... */
  amount: bigint;
  /** amount_per_bundle ... */
  amountPerBundle: bigint;
  /** total_funded ... */
  totalFunded: bigint;
}
export interface FundingProtoMsg {
  typeUrl: "/kyve.query.v1beta1.Funding";
  value: Uint8Array;
}
/** Funding ... */
export interface FundingAmino {
  /** funder_address */
  funder_address?: string;
  /** pool_id ... */
  pool_id?: string;
  /** amount ... */
  amount?: string;
  /** amount_per_bundle ... */
  amount_per_bundle?: string;
  /** total_funded ... */
  total_funded?: string;
}
export interface FundingAminoMsg {
  type: "/kyve.query.v1beta1.Funding";
  value: FundingAmino;
}
/** Funding ... */
export interface FundingSDKType {
  funder_address: string;
  pool_id: bigint;
  amount: bigint;
  amount_per_bundle: bigint;
  total_funded: bigint;
}
/** QueryFundersRequest is the request type for the Query/Funders RPC method. */
export interface QueryFundersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** search ... */
  search: string;
}
export interface QueryFundersRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFundersRequest";
  value: Uint8Array;
}
/** QueryFundersRequest is the request type for the Query/Funders RPC method. */
export interface QueryFundersRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  /** search ... */
  search?: string;
}
export interface QueryFundersRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryFundersRequest";
  value: QueryFundersRequestAmino;
}
/** QueryFundersRequest is the request type for the Query/Funders RPC method. */
export interface QueryFundersRequestSDKType {
  pagination?: PageRequestSDKType;
  search: string;
}
/** QueryFundersResponse is the response type for the Query/Funders RPC method. */
export interface QueryFundersResponse {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
  /** funders ... */
  funders: Funder[];
}
export interface QueryFundersResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFundersResponse";
  value: Uint8Array;
}
/** QueryFundersResponse is the response type for the Query/Funders RPC method. */
export interface QueryFundersResponseAmino {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  /** funders ... */
  funders?: FunderAmino[];
}
export interface QueryFundersResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryFundersResponse";
  value: QueryFundersResponseAmino;
}
/** QueryFundersResponse is the response type for the Query/Funders RPC method. */
export interface QueryFundersResponseSDKType {
  pagination?: PageResponseSDKType;
  funders: FunderSDKType[];
}
/** QueryFunderRequest is the request type for the Query/Funder RPC method. */
export interface QueryFunderRequest {
  /** address ... */
  address: string;
  /** status ... */
  status: FundingStatus;
}
export interface QueryFunderRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFunderRequest";
  value: Uint8Array;
}
/** QueryFunderRequest is the request type for the Query/Funder RPC method. */
export interface QueryFunderRequestAmino {
  /** address ... */
  address?: string;
  /** status ... */
  status?: FundingStatus;
}
export interface QueryFunderRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryFunderRequest";
  value: QueryFunderRequestAmino;
}
/** QueryFunderRequest is the request type for the Query/Funder RPC method. */
export interface QueryFunderRequestSDKType {
  address: string;
  status: FundingStatus;
}
/** QueryFunderResponse is the response type for the Query/Funder RPC method. */
export interface QueryFunderResponse {
  /** funder ... */
  funder?: Funder;
  /** fundings ... */
  fundings: Funding[];
}
export interface QueryFunderResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFunderResponse";
  value: Uint8Array;
}
/** QueryFunderResponse is the response type for the Query/Funder RPC method. */
export interface QueryFunderResponseAmino {
  /** funder ... */
  funder?: FunderAmino;
  /** fundings ... */
  fundings?: FundingAmino[];
}
export interface QueryFunderResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryFunderResponse";
  value: QueryFunderResponseAmino;
}
/** QueryFunderResponse is the response type for the Query/Funder RPC method. */
export interface QueryFunderResponseSDKType {
  funder?: FunderSDKType;
  fundings: FundingSDKType[];
}
/** QueryFundingsByFunderRequest is the request type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** address ... */
  address: string;
  /** status ... */
  status: FundingStatus;
}
export interface QueryFundingsByFunderRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFundingsByFunderRequest";
  value: Uint8Array;
}
/** QueryFundingsByFunderRequest is the request type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  /** address ... */
  address?: string;
  /** status ... */
  status?: FundingStatus;
}
export interface QueryFundingsByFunderRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryFundingsByFunderRequest";
  value: QueryFundingsByFunderRequestAmino;
}
/** QueryFundingsByFunderRequest is the request type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderRequestSDKType {
  pagination?: PageRequestSDKType;
  address: string;
  status: FundingStatus;
}
/** QueryFundingsByFunderResponse is the response type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderResponse {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
  /** fundings ... */
  fundings: Funding[];
}
export interface QueryFundingsByFunderResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFundingsByFunderResponse";
  value: Uint8Array;
}
/** QueryFundingsByFunderResponse is the response type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderResponseAmino {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  /** fundings ... */
  fundings?: FundingAmino[];
}
export interface QueryFundingsByFunderResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryFundingsByFunderResponse";
  value: QueryFundingsByFunderResponseAmino;
}
/** QueryFundingsByFunderResponse is the response type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderResponseSDKType {
  pagination?: PageResponseSDKType;
  fundings: FundingSDKType[];
}
/** QueryFundingsByPoolRequest is the request type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** pool_id ... */
  poolId: bigint;
  /** status ... */
  status: FundingStatus;
}
export interface QueryFundingsByPoolRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFundingsByPoolRequest";
  value: Uint8Array;
}
/** QueryFundingsByPoolRequest is the request type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  /** pool_id ... */
  pool_id?: string;
  /** status ... */
  status?: FundingStatus;
}
export interface QueryFundingsByPoolRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryFundingsByPoolRequest";
  value: QueryFundingsByPoolRequestAmino;
}
/** QueryFundingsByPoolRequest is the request type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolRequestSDKType {
  pagination?: PageRequestSDKType;
  pool_id: bigint;
  status: FundingStatus;
}
/** QueryFundingsByPoolResponse is the response type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolResponse {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
  /** fundings ... */
  fundings: Funding[];
}
export interface QueryFundingsByPoolResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryFundingsByPoolResponse";
  value: Uint8Array;
}
/** QueryFundingsByPoolResponse is the response type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolResponseAmino {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  /** fundings ... */
  fundings?: FundingAmino[];
}
export interface QueryFundingsByPoolResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryFundingsByPoolResponse";
  value: QueryFundingsByPoolResponseAmino;
}
/** QueryFundingsByPoolResponse is the response type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolResponseSDKType {
  pagination?: PageResponseSDKType;
  fundings: FundingSDKType[];
}
function createBaseFunder(): Funder {
  return {
    address: "",
    moniker: "",
    identity: "",
    website: "",
    contact: "",
    description: "",
    stats: undefined
  };
}
export const Funder = {
  typeUrl: "/kyve.query.v1beta1.Funder",
  encode(message: Funder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.contact !== "") {
      writer.uint32(42).string(message.contact);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.stats !== undefined) {
      FundingStats.encode(message.stats, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Funder {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      contact: isSet(object.contact) ? String(object.contact) : "",
      description: isSet(object.description) ? String(object.description) : "",
      stats: isSet(object.stats) ? FundingStats.fromJSON(object.stats) : undefined
    };
  },
  fromPartial(object: Partial<Funder>): Funder {
    const message = createBaseFunder();
    message.address = object.address ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    message.stats = object.stats !== undefined && object.stats !== null ? FundingStats.fromPartial(object.stats) : undefined;
    return message;
  },
  fromAmino(object: FunderAmino): Funder {
    const message = createBaseFunder();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = object.contact;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.stats !== undefined && object.stats !== null) {
      message.stats = FundingStats.fromAmino(object.stats);
    }
    return message;
  },
  toAmino(message: Funder): FunderAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.moniker = message.moniker;
    obj.identity = message.identity;
    obj.website = message.website;
    obj.contact = message.contact;
    obj.description = message.description;
    obj.stats = message.stats ? FundingStats.toAmino(message.stats) : undefined;
    return obj;
  },
  fromAminoMsg(object: FunderAminoMsg): Funder {
    return Funder.fromAmino(object.value);
  },
  fromProtoMsg(message: FunderProtoMsg): Funder {
    return Funder.decode(message.value);
  },
  toProto(message: Funder): Uint8Array {
    return Funder.encode(message).finish();
  },
  toProtoMsg(message: Funder): FunderProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.Funder",
      value: Funder.encode(message).finish()
    };
  }
};
function createBaseFundingStats(): FundingStats {
  return {
    totalUsedFunds: BigInt(0),
    totalAllocatedFunds: BigInt(0),
    totalAmountPerBundle: BigInt(0),
    poolsFunded: []
  };
}
export const FundingStats = {
  typeUrl: "/kyve.query.v1beta1.FundingStats",
  encode(message: FundingStats, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalUsedFunds !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalUsedFunds);
    }
    if (message.totalAllocatedFunds !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalAllocatedFunds);
    }
    if (message.totalAmountPerBundle !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalAmountPerBundle);
    }
    writer.uint32(34).fork();
    for (const v of message.poolsFunded) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): FundingStats {
    return {
      totalUsedFunds: isSet(object.totalUsedFunds) ? BigInt(object.totalUsedFunds.toString()) : BigInt(0),
      totalAllocatedFunds: isSet(object.totalAllocatedFunds) ? BigInt(object.totalAllocatedFunds.toString()) : BigInt(0),
      totalAmountPerBundle: isSet(object.totalAmountPerBundle) ? BigInt(object.totalAmountPerBundle.toString()) : BigInt(0),
      poolsFunded: Array.isArray(object?.poolsFunded) ? object.poolsFunded.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<FundingStats>): FundingStats {
    const message = createBaseFundingStats();
    message.totalUsedFunds = object.totalUsedFunds !== undefined && object.totalUsedFunds !== null ? BigInt(object.totalUsedFunds.toString()) : BigInt(0);
    message.totalAllocatedFunds = object.totalAllocatedFunds !== undefined && object.totalAllocatedFunds !== null ? BigInt(object.totalAllocatedFunds.toString()) : BigInt(0);
    message.totalAmountPerBundle = object.totalAmountPerBundle !== undefined && object.totalAmountPerBundle !== null ? BigInt(object.totalAmountPerBundle.toString()) : BigInt(0);
    message.poolsFunded = object.poolsFunded?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: FundingStatsAmino): FundingStats {
    const message = createBaseFundingStats();
    if (object.total_used_funds !== undefined && object.total_used_funds !== null) {
      message.totalUsedFunds = BigInt(object.total_used_funds);
    }
    if (object.total_allocated_funds !== undefined && object.total_allocated_funds !== null) {
      message.totalAllocatedFunds = BigInt(object.total_allocated_funds);
    }
    if (object.total_amount_per_bundle !== undefined && object.total_amount_per_bundle !== null) {
      message.totalAmountPerBundle = BigInt(object.total_amount_per_bundle);
    }
    message.poolsFunded = object.pools_funded?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: FundingStats): FundingStatsAmino {
    const obj: any = {};
    obj.total_used_funds = message.totalUsedFunds ? message.totalUsedFunds.toString() : undefined;
    obj.total_allocated_funds = message.totalAllocatedFunds ? message.totalAllocatedFunds.toString() : undefined;
    obj.total_amount_per_bundle = message.totalAmountPerBundle ? message.totalAmountPerBundle.toString() : undefined;
    if (message.poolsFunded) {
      obj.pools_funded = message.poolsFunded.map(e => e.toString());
    } else {
      obj.pools_funded = [];
    }
    return obj;
  },
  fromAminoMsg(object: FundingStatsAminoMsg): FundingStats {
    return FundingStats.fromAmino(object.value);
  },
  fromProtoMsg(message: FundingStatsProtoMsg): FundingStats {
    return FundingStats.decode(message.value);
  },
  toProto(message: FundingStats): Uint8Array {
    return FundingStats.encode(message).finish();
  },
  toProtoMsg(message: FundingStats): FundingStatsProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.FundingStats",
      value: FundingStats.encode(message).finish()
    };
  }
};
function createBaseFunding(): Funding {
  return {
    funderAddress: "",
    poolId: BigInt(0),
    amount: BigInt(0),
    amountPerBundle: BigInt(0),
    totalFunded: BigInt(0)
  };
}
export const Funding = {
  typeUrl: "/kyve.query.v1beta1.Funding",
  encode(message: Funding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funderAddress !== "") {
      writer.uint32(10).string(message.funderAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.amountPerBundle !== BigInt(0)) {
      writer.uint32(32).uint64(message.amountPerBundle);
    }
    if (message.totalFunded !== BigInt(0)) {
      writer.uint32(40).uint64(message.totalFunded);
    }
    return writer;
  },
  fromJSON(object: any): Funding {
    return {
      funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      amountPerBundle: isSet(object.amountPerBundle) ? BigInt(object.amountPerBundle.toString()) : BigInt(0),
      totalFunded: isSet(object.totalFunded) ? BigInt(object.totalFunded.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Funding>): Funding {
    const message = createBaseFunding();
    message.funderAddress = object.funderAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.amountPerBundle = object.amountPerBundle !== undefined && object.amountPerBundle !== null ? BigInt(object.amountPerBundle.toString()) : BigInt(0);
    message.totalFunded = object.totalFunded !== undefined && object.totalFunded !== null ? BigInt(object.totalFunded.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FundingAmino): Funding {
    const message = createBaseFunding();
    if (object.funder_address !== undefined && object.funder_address !== null) {
      message.funderAddress = object.funder_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.amount_per_bundle !== undefined && object.amount_per_bundle !== null) {
      message.amountPerBundle = BigInt(object.amount_per_bundle);
    }
    if (object.total_funded !== undefined && object.total_funded !== null) {
      message.totalFunded = BigInt(object.total_funded);
    }
    return message;
  },
  toAmino(message: Funding): FundingAmino {
    const obj: any = {};
    obj.funder_address = message.funderAddress;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.amount_per_bundle = message.amountPerBundle ? message.amountPerBundle.toString() : undefined;
    obj.total_funded = message.totalFunded ? message.totalFunded.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FundingAminoMsg): Funding {
    return Funding.fromAmino(object.value);
  },
  fromProtoMsg(message: FundingProtoMsg): Funding {
    return Funding.decode(message.value);
  },
  toProto(message: Funding): Uint8Array {
    return Funding.encode(message).finish();
  },
  toProtoMsg(message: Funding): FundingProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.Funding",
      value: Funding.encode(message).finish()
    };
  }
};
function createBaseQueryFundersRequest(): QueryFundersRequest {
  return {
    pagination: undefined,
    search: ""
  };
}
export const QueryFundersRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryFundersRequest",
  encode(message: QueryFundersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.search !== "") {
      writer.uint32(18).string(message.search);
    }
    return writer;
  },
  fromJSON(object: any): QueryFundersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      search: isSet(object.search) ? String(object.search) : ""
    };
  },
  fromPartial(object: Partial<QueryFundersRequest>): QueryFundersRequest {
    const message = createBaseQueryFundersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.search = object.search ?? "";
    return message;
  },
  fromAmino(object: QueryFundersRequestAmino): QueryFundersRequest {
    const message = createBaseQueryFundersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.search !== undefined && object.search !== null) {
      message.search = object.search;
    }
    return message;
  },
  toAmino(message: QueryFundersRequest): QueryFundersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.search = message.search;
    return obj;
  },
  fromAminoMsg(object: QueryFundersRequestAminoMsg): QueryFundersRequest {
    return QueryFundersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFundersRequestProtoMsg): QueryFundersRequest {
    return QueryFundersRequest.decode(message.value);
  },
  toProto(message: QueryFundersRequest): Uint8Array {
    return QueryFundersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFundersRequest): QueryFundersRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFundersRequest",
      value: QueryFundersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFundersResponse(): QueryFundersResponse {
  return {
    pagination: undefined,
    funders: []
  };
}
export const QueryFundersResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryFundersResponse",
  encode(message: QueryFundersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.funders) {
      Funder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFundersResponse {
    return {
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      funders: Array.isArray(object?.funders) ? object.funders.map((e: any) => Funder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryFundersResponse>): QueryFundersResponse {
    const message = createBaseQueryFundersResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.funders = object.funders?.map(e => Funder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryFundersResponseAmino): QueryFundersResponse {
    const message = createBaseQueryFundersResponse();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.funders = object.funders?.map(e => Funder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryFundersResponse): QueryFundersResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.funders) {
      obj.funders = message.funders.map(e => e ? Funder.toAmino(e) : undefined);
    } else {
      obj.funders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryFundersResponseAminoMsg): QueryFundersResponse {
    return QueryFundersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFundersResponseProtoMsg): QueryFundersResponse {
    return QueryFundersResponse.decode(message.value);
  },
  toProto(message: QueryFundersResponse): Uint8Array {
    return QueryFundersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFundersResponse): QueryFundersResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFundersResponse",
      value: QueryFundersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFunderRequest(): QueryFunderRequest {
  return {
    address: "",
    status: 0
  };
}
export const QueryFunderRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryFunderRequest",
  encode(message: QueryFunderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): QueryFunderRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      status: isSet(object.status) ? fundingStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<QueryFunderRequest>): QueryFunderRequest {
    const message = createBaseQueryFunderRequest();
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: QueryFunderRequestAmino): QueryFunderRequest {
    const message = createBaseQueryFunderRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = fundingStatusFromJSON(object.status);
    }
    return message;
  },
  toAmino(message: QueryFunderRequest): QueryFunderRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: QueryFunderRequestAminoMsg): QueryFunderRequest {
    return QueryFunderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFunderRequestProtoMsg): QueryFunderRequest {
    return QueryFunderRequest.decode(message.value);
  },
  toProto(message: QueryFunderRequest): Uint8Array {
    return QueryFunderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFunderRequest): QueryFunderRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFunderRequest",
      value: QueryFunderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFunderResponse(): QueryFunderResponse {
  return {
    funder: undefined,
    fundings: []
  };
}
export const QueryFunderResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryFunderResponse",
  encode(message: QueryFunderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funder !== undefined) {
      Funder.encode(message.funder, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fundings) {
      Funding.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFunderResponse {
    return {
      funder: isSet(object.funder) ? Funder.fromJSON(object.funder) : undefined,
      fundings: Array.isArray(object?.fundings) ? object.fundings.map((e: any) => Funding.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryFunderResponse>): QueryFunderResponse {
    const message = createBaseQueryFunderResponse();
    message.funder = object.funder !== undefined && object.funder !== null ? Funder.fromPartial(object.funder) : undefined;
    message.fundings = object.fundings?.map(e => Funding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryFunderResponseAmino): QueryFunderResponse {
    const message = createBaseQueryFunderResponse();
    if (object.funder !== undefined && object.funder !== null) {
      message.funder = Funder.fromAmino(object.funder);
    }
    message.fundings = object.fundings?.map(e => Funding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryFunderResponse): QueryFunderResponseAmino {
    const obj: any = {};
    obj.funder = message.funder ? Funder.toAmino(message.funder) : undefined;
    if (message.fundings) {
      obj.fundings = message.fundings.map(e => e ? Funding.toAmino(e) : undefined);
    } else {
      obj.fundings = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryFunderResponseAminoMsg): QueryFunderResponse {
    return QueryFunderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFunderResponseProtoMsg): QueryFunderResponse {
    return QueryFunderResponse.decode(message.value);
  },
  toProto(message: QueryFunderResponse): Uint8Array {
    return QueryFunderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFunderResponse): QueryFunderResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFunderResponse",
      value: QueryFunderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFundingsByFunderRequest(): QueryFundingsByFunderRequest {
  return {
    pagination: undefined,
    address: "",
    status: 0
  };
}
export const QueryFundingsByFunderRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryFundingsByFunderRequest",
  encode(message: QueryFundingsByFunderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): QueryFundingsByFunderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
      status: isSet(object.status) ? fundingStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<QueryFundingsByFunderRequest>): QueryFundingsByFunderRequest {
    const message = createBaseQueryFundingsByFunderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: QueryFundingsByFunderRequestAmino): QueryFundingsByFunderRequest {
    const message = createBaseQueryFundingsByFunderRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = fundingStatusFromJSON(object.status);
    }
    return message;
  },
  toAmino(message: QueryFundingsByFunderRequest): QueryFundingsByFunderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.address = message.address;
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: QueryFundingsByFunderRequestAminoMsg): QueryFundingsByFunderRequest {
    return QueryFundingsByFunderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFundingsByFunderRequestProtoMsg): QueryFundingsByFunderRequest {
    return QueryFundingsByFunderRequest.decode(message.value);
  },
  toProto(message: QueryFundingsByFunderRequest): Uint8Array {
    return QueryFundingsByFunderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFundingsByFunderRequest): QueryFundingsByFunderRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFundingsByFunderRequest",
      value: QueryFundingsByFunderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFundingsByFunderResponse(): QueryFundingsByFunderResponse {
  return {
    pagination: undefined,
    fundings: []
  };
}
export const QueryFundingsByFunderResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryFundingsByFunderResponse",
  encode(message: QueryFundingsByFunderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fundings) {
      Funding.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFundingsByFunderResponse {
    return {
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      fundings: Array.isArray(object?.fundings) ? object.fundings.map((e: any) => Funding.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryFundingsByFunderResponse>): QueryFundingsByFunderResponse {
    const message = createBaseQueryFundingsByFunderResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.fundings = object.fundings?.map(e => Funding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryFundingsByFunderResponseAmino): QueryFundingsByFunderResponse {
    const message = createBaseQueryFundingsByFunderResponse();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.fundings = object.fundings?.map(e => Funding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryFundingsByFunderResponse): QueryFundingsByFunderResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.fundings) {
      obj.fundings = message.fundings.map(e => e ? Funding.toAmino(e) : undefined);
    } else {
      obj.fundings = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryFundingsByFunderResponseAminoMsg): QueryFundingsByFunderResponse {
    return QueryFundingsByFunderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFundingsByFunderResponseProtoMsg): QueryFundingsByFunderResponse {
    return QueryFundingsByFunderResponse.decode(message.value);
  },
  toProto(message: QueryFundingsByFunderResponse): Uint8Array {
    return QueryFundingsByFunderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFundingsByFunderResponse): QueryFundingsByFunderResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFundingsByFunderResponse",
      value: QueryFundingsByFunderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFundingsByPoolRequest(): QueryFundingsByPoolRequest {
  return {
    pagination: undefined,
    poolId: BigInt(0),
    status: 0
  };
}
export const QueryFundingsByPoolRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryFundingsByPoolRequest",
  encode(message: QueryFundingsByPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): QueryFundingsByPoolRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      status: isSet(object.status) ? fundingStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<QueryFundingsByPoolRequest>): QueryFundingsByPoolRequest {
    const message = createBaseQueryFundingsByPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: QueryFundingsByPoolRequestAmino): QueryFundingsByPoolRequest {
    const message = createBaseQueryFundingsByPoolRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = fundingStatusFromJSON(object.status);
    }
    return message;
  },
  toAmino(message: QueryFundingsByPoolRequest): QueryFundingsByPoolRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: QueryFundingsByPoolRequestAminoMsg): QueryFundingsByPoolRequest {
    return QueryFundingsByPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFundingsByPoolRequestProtoMsg): QueryFundingsByPoolRequest {
    return QueryFundingsByPoolRequest.decode(message.value);
  },
  toProto(message: QueryFundingsByPoolRequest): Uint8Array {
    return QueryFundingsByPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFundingsByPoolRequest): QueryFundingsByPoolRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFundingsByPoolRequest",
      value: QueryFundingsByPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFundingsByPoolResponse(): QueryFundingsByPoolResponse {
  return {
    pagination: undefined,
    fundings: []
  };
}
export const QueryFundingsByPoolResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryFundingsByPoolResponse",
  encode(message: QueryFundingsByPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fundings) {
      Funding.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFundingsByPoolResponse {
    return {
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      fundings: Array.isArray(object?.fundings) ? object.fundings.map((e: any) => Funding.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryFundingsByPoolResponse>): QueryFundingsByPoolResponse {
    const message = createBaseQueryFundingsByPoolResponse();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.fundings = object.fundings?.map(e => Funding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryFundingsByPoolResponseAmino): QueryFundingsByPoolResponse {
    const message = createBaseQueryFundingsByPoolResponse();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.fundings = object.fundings?.map(e => Funding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryFundingsByPoolResponse): QueryFundingsByPoolResponseAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.fundings) {
      obj.fundings = message.fundings.map(e => e ? Funding.toAmino(e) : undefined);
    } else {
      obj.fundings = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryFundingsByPoolResponseAminoMsg): QueryFundingsByPoolResponse {
    return QueryFundingsByPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFundingsByPoolResponseProtoMsg): QueryFundingsByPoolResponse {
    return QueryFundingsByPoolResponse.decode(message.value);
  },
  toProto(message: QueryFundingsByPoolResponse): Uint8Array {
    return QueryFundingsByPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFundingsByPoolResponse): QueryFundingsByPoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryFundingsByPoolResponse",
      value: QueryFundingsByPoolResponse.encode(message).finish()
    };
  }
};