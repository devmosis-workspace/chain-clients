import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerAmino, FullStakerSDKType, BasicPool, BasicPoolAmino, BasicPoolSDKType } from "./query";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequest {
  /** address ... */
  address: string;
}
export interface QueryAccountAssetsRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryAccountAssetsRequest";
  value: Uint8Array;
}
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequestAmino {
  /** address ... */
  address?: string;
}
export interface QueryAccountAssetsRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryAccountAssetsRequest";
  value: QueryAccountAssetsRequestAmino;
}
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequestSDKType {
  address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponse {
  /** balance ... */
  balance: bigint;
  /** protocol_staking ... */
  protocolSelfDelegation: bigint;
  /** protocol_staking_unbonding */
  protocolSelfDelegationUnbonding: bigint;
  /** protocol_delegation ... */
  protocolDelegation: bigint;
  /** protocol_delegation_unbonding */
  protocolDelegationUnbonding: bigint;
  /** protocol_rewards ... */
  protocolRewards: bigint;
  /** protocol_funding ... */
  protocolFunding: bigint;
}
export interface QueryAccountAssetsResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryAccountAssetsResponse";
  value: Uint8Array;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponseAmino {
  /** balance ... */
  balance?: string;
  /** protocol_staking ... */
  protocol_self_delegation?: string;
  /** protocol_staking_unbonding */
  protocol_self_delegation_unbonding?: string;
  /** protocol_delegation ... */
  protocol_delegation?: string;
  /** protocol_delegation_unbonding */
  protocol_delegation_unbonding?: string;
  /** protocol_rewards ... */
  protocol_rewards?: string;
  /** protocol_funding ... */
  protocol_funding?: string;
}
export interface QueryAccountAssetsResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryAccountAssetsResponse";
  value: QueryAccountAssetsResponseAmino;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponseSDKType {
  balance: bigint;
  protocol_self_delegation: bigint;
  protocol_self_delegation_unbonding: bigint;
  protocol_delegation: bigint;
  protocol_delegation_unbonding: bigint;
  protocol_rewards: bigint;
  protocol_funding: bigint;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** address ... */
  address: string;
}
export interface QueryAccountDelegationUnbondingsRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsRequest";
  value: Uint8Array;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  /** address ... */
  address?: string;
}
export interface QueryAccountDelegationUnbondingsRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsRequest";
  value: QueryAccountDelegationUnbondingsRequestAmino;
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
export interface QueryAccountDelegationUnbondingsResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsResponse";
  value: Uint8Array;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponseAmino {
  /** balance ... */
  unbondings?: DelegationUnbondingAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAccountDelegationUnbondingsResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsResponse";
  value: QueryAccountDelegationUnbondingsResponseAmino;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponseSDKType {
  unbondings: DelegationUnbondingSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbonding {
  /** amount */
  amount: bigint;
  /** creation_time */
  creationTime: bigint;
  /** staker */
  staker?: FullStaker;
}
export interface DelegationUnbondingProtoMsg {
  typeUrl: "/kyve.query.v1beta1.DelegationUnbonding";
  value: Uint8Array;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbondingAmino {
  /** amount */
  amount?: string;
  /** creation_time */
  creation_time?: string;
  /** staker */
  staker?: FullStakerAmino;
}
export interface DelegationUnbondingAminoMsg {
  type: "/kyve.query.v1beta1.DelegationUnbonding";
  value: DelegationUnbondingAmino;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbondingSDKType {
  amount: bigint;
  creation_time: bigint;
  staker?: FullStakerSDKType;
}
/** QueryAccountFundedListRequest is the request type for the account queries with pagination */
export interface QueryAccountFundedListRequest {
  /** address ... */
  address: string;
}
export interface QueryAccountFundedListRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryAccountFundedListRequest";
  value: Uint8Array;
}
/** QueryAccountFundedListRequest is the request type for the account queries with pagination */
export interface QueryAccountFundedListRequestAmino {
  /** address ... */
  address?: string;
}
export interface QueryAccountFundedListRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryAccountFundedListRequest";
  value: QueryAccountFundedListRequestAmino;
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
export interface QueryAccountFundedListResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryAccountFundedListResponse";
  value: Uint8Array;
}
/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponseAmino {
  /** funded ... */
  funded?: FundedAmino[];
}
export interface QueryAccountFundedListResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryAccountFundedListResponse";
  value: QueryAccountFundedListResponseAmino;
}
/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponseSDKType {
  funded: FundedSDKType[];
}
/** Funded ... */
export interface Funded {
  /** amount ... */
  amount: bigint;
  /** pool ... */
  pool?: BasicPool;
}
export interface FundedProtoMsg {
  typeUrl: "/kyve.query.v1beta1.Funded";
  value: Uint8Array;
}
/** Funded ... */
export interface FundedAmino {
  /** amount ... */
  amount?: string;
  /** pool ... */
  pool?: BasicPoolAmino;
}
export interface FundedAminoMsg {
  type: "/kyve.query.v1beta1.Funded";
  value: FundedAmino;
}
/** Funded ... */
export interface FundedSDKType {
  amount: bigint;
  pool?: BasicPoolSDKType;
}
/** QueryAccountDelegationListRequest ... */
export interface QueryAccountRedelegationRequest {
  /** address ... */
  address: string;
}
export interface QueryAccountRedelegationRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryAccountRedelegationRequest";
  value: Uint8Array;
}
/** QueryAccountDelegationListRequest ... */
export interface QueryAccountRedelegationRequestAmino {
  /** address ... */
  address?: string;
}
export interface QueryAccountRedelegationRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryAccountRedelegationRequest";
  value: QueryAccountRedelegationRequestAmino;
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
  availableSlots: bigint;
}
export interface QueryAccountRedelegationResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryAccountRedelegationResponse";
  value: Uint8Array;
}
/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountRedelegationResponseAmino {
  /** redelegation_cooldown_entries ... */
  redelegation_cooldown_entries?: RedelegationEntryAmino[];
  /** availableSlots ... */
  available_slots?: string;
}
export interface QueryAccountRedelegationResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryAccountRedelegationResponse";
  value: QueryAccountRedelegationResponseAmino;
}
/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountRedelegationResponseSDKType {
  redelegation_cooldown_entries: RedelegationEntrySDKType[];
  available_slots: bigint;
}
/** RedelegationEntry ... */
export interface RedelegationEntry {
  /** creation_date ... */
  creationDate: bigint;
  /** finish_date ... */
  finishDate: bigint;
}
export interface RedelegationEntryProtoMsg {
  typeUrl: "/kyve.query.v1beta1.RedelegationEntry";
  value: Uint8Array;
}
/** RedelegationEntry ... */
export interface RedelegationEntryAmino {
  /** creation_date ... */
  creation_date?: string;
  /** finish_date ... */
  finish_date?: string;
}
export interface RedelegationEntryAminoMsg {
  type: "/kyve.query.v1beta1.RedelegationEntry";
  value: RedelegationEntryAmino;
}
/** RedelegationEntry ... */
export interface RedelegationEntrySDKType {
  creation_date: bigint;
  finish_date: bigint;
}
function createBaseQueryAccountAssetsRequest(): QueryAccountAssetsRequest {
  return {
    address: ""
  };
}
export const QueryAccountAssetsRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryAccountAssetsRequest",
  encode(message: QueryAccountAssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountAssetsRequestAmino): QueryAccountAssetsRequest {
    const message = createBaseQueryAccountAssetsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountAssetsRequest): QueryAccountAssetsRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountAssetsRequestAminoMsg): QueryAccountAssetsRequest {
    return QueryAccountAssetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountAssetsRequestProtoMsg): QueryAccountAssetsRequest {
    return QueryAccountAssetsRequest.decode(message.value);
  },
  toProto(message: QueryAccountAssetsRequest): Uint8Array {
    return QueryAccountAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAssetsRequest): QueryAccountAssetsRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryAccountAssetsRequest",
      value: QueryAccountAssetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountAssetsResponse(): QueryAccountAssetsResponse {
  return {
    balance: BigInt(0),
    protocolSelfDelegation: BigInt(0),
    protocolSelfDelegationUnbonding: BigInt(0),
    protocolDelegation: BigInt(0),
    protocolDelegationUnbonding: BigInt(0),
    protocolRewards: BigInt(0),
    protocolFunding: BigInt(0)
  };
}
export const QueryAccountAssetsResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryAccountAssetsResponse",
  encode(message: QueryAccountAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== BigInt(0)) {
      writer.uint32(8).uint64(message.balance);
    }
    if (message.protocolSelfDelegation !== BigInt(0)) {
      writer.uint32(16).uint64(message.protocolSelfDelegation);
    }
    if (message.protocolSelfDelegationUnbonding !== BigInt(0)) {
      writer.uint32(24).uint64(message.protocolSelfDelegationUnbonding);
    }
    if (message.protocolDelegation !== BigInt(0)) {
      writer.uint32(32).uint64(message.protocolDelegation);
    }
    if (message.protocolDelegationUnbonding !== BigInt(0)) {
      writer.uint32(40).uint64(message.protocolDelegationUnbonding);
    }
    if (message.protocolRewards !== BigInt(0)) {
      writer.uint32(48).uint64(message.protocolRewards);
    }
    if (message.protocolFunding !== BigInt(0)) {
      writer.uint32(56).uint64(message.protocolFunding);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountAssetsResponse {
    return {
      balance: isSet(object.balance) ? BigInt(object.balance.toString()) : BigInt(0),
      protocolSelfDelegation: isSet(object.protocolSelfDelegation) ? BigInt(object.protocolSelfDelegation.toString()) : BigInt(0),
      protocolSelfDelegationUnbonding: isSet(object.protocolSelfDelegationUnbonding) ? BigInt(object.protocolSelfDelegationUnbonding.toString()) : BigInt(0),
      protocolDelegation: isSet(object.protocolDelegation) ? BigInt(object.protocolDelegation.toString()) : BigInt(0),
      protocolDelegationUnbonding: isSet(object.protocolDelegationUnbonding) ? BigInt(object.protocolDelegationUnbonding.toString()) : BigInt(0),
      protocolRewards: isSet(object.protocolRewards) ? BigInt(object.protocolRewards.toString()) : BigInt(0),
      protocolFunding: isSet(object.protocolFunding) ? BigInt(object.protocolFunding.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryAccountAssetsResponse>): QueryAccountAssetsResponse {
    const message = createBaseQueryAccountAssetsResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? BigInt(object.balance.toString()) : BigInt(0);
    message.protocolSelfDelegation = object.protocolSelfDelegation !== undefined && object.protocolSelfDelegation !== null ? BigInt(object.protocolSelfDelegation.toString()) : BigInt(0);
    message.protocolSelfDelegationUnbonding = object.protocolSelfDelegationUnbonding !== undefined && object.protocolSelfDelegationUnbonding !== null ? BigInt(object.protocolSelfDelegationUnbonding.toString()) : BigInt(0);
    message.protocolDelegation = object.protocolDelegation !== undefined && object.protocolDelegation !== null ? BigInt(object.protocolDelegation.toString()) : BigInt(0);
    message.protocolDelegationUnbonding = object.protocolDelegationUnbonding !== undefined && object.protocolDelegationUnbonding !== null ? BigInt(object.protocolDelegationUnbonding.toString()) : BigInt(0);
    message.protocolRewards = object.protocolRewards !== undefined && object.protocolRewards !== null ? BigInt(object.protocolRewards.toString()) : BigInt(0);
    message.protocolFunding = object.protocolFunding !== undefined && object.protocolFunding !== null ? BigInt(object.protocolFunding.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAccountAssetsResponseAmino): QueryAccountAssetsResponse {
    const message = createBaseQueryAccountAssetsResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = BigInt(object.balance);
    }
    if (object.protocol_self_delegation !== undefined && object.protocol_self_delegation !== null) {
      message.protocolSelfDelegation = BigInt(object.protocol_self_delegation);
    }
    if (object.protocol_self_delegation_unbonding !== undefined && object.protocol_self_delegation_unbonding !== null) {
      message.protocolSelfDelegationUnbonding = BigInt(object.protocol_self_delegation_unbonding);
    }
    if (object.protocol_delegation !== undefined && object.protocol_delegation !== null) {
      message.protocolDelegation = BigInt(object.protocol_delegation);
    }
    if (object.protocol_delegation_unbonding !== undefined && object.protocol_delegation_unbonding !== null) {
      message.protocolDelegationUnbonding = BigInt(object.protocol_delegation_unbonding);
    }
    if (object.protocol_rewards !== undefined && object.protocol_rewards !== null) {
      message.protocolRewards = BigInt(object.protocol_rewards);
    }
    if (object.protocol_funding !== undefined && object.protocol_funding !== null) {
      message.protocolFunding = BigInt(object.protocol_funding);
    }
    return message;
  },
  toAmino(message: QueryAccountAssetsResponse): QueryAccountAssetsResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? message.balance.toString() : undefined;
    obj.protocol_self_delegation = message.protocolSelfDelegation ? message.protocolSelfDelegation.toString() : undefined;
    obj.protocol_self_delegation_unbonding = message.protocolSelfDelegationUnbonding ? message.protocolSelfDelegationUnbonding.toString() : undefined;
    obj.protocol_delegation = message.protocolDelegation ? message.protocolDelegation.toString() : undefined;
    obj.protocol_delegation_unbonding = message.protocolDelegationUnbonding ? message.protocolDelegationUnbonding.toString() : undefined;
    obj.protocol_rewards = message.protocolRewards ? message.protocolRewards.toString() : undefined;
    obj.protocol_funding = message.protocolFunding ? message.protocolFunding.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountAssetsResponseAminoMsg): QueryAccountAssetsResponse {
    return QueryAccountAssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountAssetsResponseProtoMsg): QueryAccountAssetsResponse {
    return QueryAccountAssetsResponse.decode(message.value);
  },
  toProto(message: QueryAccountAssetsResponse): Uint8Array {
    return QueryAccountAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAssetsResponse): QueryAccountAssetsResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryAccountAssetsResponse",
      value: QueryAccountAssetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountDelegationUnbondingsRequest(): QueryAccountDelegationUnbondingsRequest {
  return {
    pagination: undefined,
    address: ""
  };
}
export const QueryAccountDelegationUnbondingsRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsRequest",
  encode(message: QueryAccountDelegationUnbondingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountDelegationUnbondingsRequestAmino): QueryAccountDelegationUnbondingsRequest {
    const message = createBaseQueryAccountDelegationUnbondingsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountDelegationUnbondingsRequest): QueryAccountDelegationUnbondingsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountDelegationUnbondingsRequestAminoMsg): QueryAccountDelegationUnbondingsRequest {
    return QueryAccountDelegationUnbondingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountDelegationUnbondingsRequestProtoMsg): QueryAccountDelegationUnbondingsRequest {
    return QueryAccountDelegationUnbondingsRequest.decode(message.value);
  },
  toProto(message: QueryAccountDelegationUnbondingsRequest): Uint8Array {
    return QueryAccountDelegationUnbondingsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountDelegationUnbondingsRequest): QueryAccountDelegationUnbondingsRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsRequest",
      value: QueryAccountDelegationUnbondingsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountDelegationUnbondingsResponse(): QueryAccountDelegationUnbondingsResponse {
  return {
    unbondings: [],
    pagination: undefined
  };
}
export const QueryAccountDelegationUnbondingsResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsResponse",
  encode(message: QueryAccountDelegationUnbondingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountDelegationUnbondingsResponseAmino): QueryAccountDelegationUnbondingsResponse {
    const message = createBaseQueryAccountDelegationUnbondingsResponse();
    message.unbondings = object.unbondings?.map(e => DelegationUnbonding.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAccountDelegationUnbondingsResponse): QueryAccountDelegationUnbondingsResponseAmino {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map(e => e ? DelegationUnbonding.toAmino(e) : undefined);
    } else {
      obj.unbondings = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountDelegationUnbondingsResponseAminoMsg): QueryAccountDelegationUnbondingsResponse {
    return QueryAccountDelegationUnbondingsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountDelegationUnbondingsResponseProtoMsg): QueryAccountDelegationUnbondingsResponse {
    return QueryAccountDelegationUnbondingsResponse.decode(message.value);
  },
  toProto(message: QueryAccountDelegationUnbondingsResponse): Uint8Array {
    return QueryAccountDelegationUnbondingsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountDelegationUnbondingsResponse): QueryAccountDelegationUnbondingsResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryAccountDelegationUnbondingsResponse",
      value: QueryAccountDelegationUnbondingsResponse.encode(message).finish()
    };
  }
};
function createBaseDelegationUnbonding(): DelegationUnbonding {
  return {
    amount: BigInt(0),
    creationTime: BigInt(0),
    staker: undefined
  };
}
export const DelegationUnbonding = {
  typeUrl: "/kyve.query.v1beta1.DelegationUnbonding",
  encode(message: DelegationUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    if (message.creationTime !== BigInt(0)) {
      writer.uint32(16).uint64(message.creationTime);
    }
    if (message.staker !== undefined) {
      FullStaker.encode(message.staker, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DelegationUnbonding {
    return {
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      creationTime: isSet(object.creationTime) ? BigInt(object.creationTime.toString()) : BigInt(0),
      staker: isSet(object.staker) ? FullStaker.fromJSON(object.staker) : undefined
    };
  },
  fromPartial(object: Partial<DelegationUnbonding>): DelegationUnbonding {
    const message = createBaseDelegationUnbonding();
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.creationTime = object.creationTime !== undefined && object.creationTime !== null ? BigInt(object.creationTime.toString()) : BigInt(0);
    message.staker = object.staker !== undefined && object.staker !== null ? FullStaker.fromPartial(object.staker) : undefined;
    return message;
  },
  fromAmino(object: DelegationUnbondingAmino): DelegationUnbonding {
    const message = createBaseDelegationUnbonding();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.creation_time !== undefined && object.creation_time !== null) {
      message.creationTime = BigInt(object.creation_time);
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = FullStaker.fromAmino(object.staker);
    }
    return message;
  },
  toAmino(message: DelegationUnbonding): DelegationUnbondingAmino {
    const obj: any = {};
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.creation_time = message.creationTime ? message.creationTime.toString() : undefined;
    obj.staker = message.staker ? FullStaker.toAmino(message.staker) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegationUnbondingAminoMsg): DelegationUnbonding {
    return DelegationUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationUnbondingProtoMsg): DelegationUnbonding {
    return DelegationUnbonding.decode(message.value);
  },
  toProto(message: DelegationUnbonding): Uint8Array {
    return DelegationUnbonding.encode(message).finish();
  },
  toProtoMsg(message: DelegationUnbonding): DelegationUnbondingProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.DelegationUnbonding",
      value: DelegationUnbonding.encode(message).finish()
    };
  }
};
function createBaseQueryAccountFundedListRequest(): QueryAccountFundedListRequest {
  return {
    address: ""
  };
}
export const QueryAccountFundedListRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryAccountFundedListRequest",
  encode(message: QueryAccountFundedListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountFundedListRequestAmino): QueryAccountFundedListRequest {
    const message = createBaseQueryAccountFundedListRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountFundedListRequest): QueryAccountFundedListRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountFundedListRequestAminoMsg): QueryAccountFundedListRequest {
    return QueryAccountFundedListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountFundedListRequestProtoMsg): QueryAccountFundedListRequest {
    return QueryAccountFundedListRequest.decode(message.value);
  },
  toProto(message: QueryAccountFundedListRequest): Uint8Array {
    return QueryAccountFundedListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountFundedListRequest): QueryAccountFundedListRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryAccountFundedListRequest",
      value: QueryAccountFundedListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountFundedListResponse(): QueryAccountFundedListResponse {
  return {
    funded: []
  };
}
export const QueryAccountFundedListResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryAccountFundedListResponse",
  encode(message: QueryAccountFundedListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountFundedListResponseAmino): QueryAccountFundedListResponse {
    const message = createBaseQueryAccountFundedListResponse();
    message.funded = object.funded?.map(e => Funded.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAccountFundedListResponse): QueryAccountFundedListResponseAmino {
    const obj: any = {};
    if (message.funded) {
      obj.funded = message.funded.map(e => e ? Funded.toAmino(e) : undefined);
    } else {
      obj.funded = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAccountFundedListResponseAminoMsg): QueryAccountFundedListResponse {
    return QueryAccountFundedListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountFundedListResponseProtoMsg): QueryAccountFundedListResponse {
    return QueryAccountFundedListResponse.decode(message.value);
  },
  toProto(message: QueryAccountFundedListResponse): Uint8Array {
    return QueryAccountFundedListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountFundedListResponse): QueryAccountFundedListResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryAccountFundedListResponse",
      value: QueryAccountFundedListResponse.encode(message).finish()
    };
  }
};
function createBaseFunded(): Funded {
  return {
    amount: BigInt(0),
    pool: undefined
  };
}
export const Funded = {
  typeUrl: "/kyve.query.v1beta1.Funded",
  encode(message: Funded, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    if (message.pool !== undefined) {
      BasicPool.encode(message.pool, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Funded {
    return {
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      pool: isSet(object.pool) ? BasicPool.fromJSON(object.pool) : undefined
    };
  },
  fromPartial(object: Partial<Funded>): Funded {
    const message = createBaseFunded();
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.pool = object.pool !== undefined && object.pool !== null ? BasicPool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: FundedAmino): Funded {
    const message = createBaseFunded();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = BasicPool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: Funded): FundedAmino {
    const obj: any = {};
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.pool = message.pool ? BasicPool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: FundedAminoMsg): Funded {
    return Funded.fromAmino(object.value);
  },
  fromProtoMsg(message: FundedProtoMsg): Funded {
    return Funded.decode(message.value);
  },
  toProto(message: Funded): Uint8Array {
    return Funded.encode(message).finish();
  },
  toProtoMsg(message: Funded): FundedProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.Funded",
      value: Funded.encode(message).finish()
    };
  }
};
function createBaseQueryAccountRedelegationRequest(): QueryAccountRedelegationRequest {
  return {
    address: ""
  };
}
export const QueryAccountRedelegationRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryAccountRedelegationRequest",
  encode(message: QueryAccountRedelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountRedelegationRequestAmino): QueryAccountRedelegationRequest {
    const message = createBaseQueryAccountRedelegationRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountRedelegationRequest): QueryAccountRedelegationRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountRedelegationRequestAminoMsg): QueryAccountRedelegationRequest {
    return QueryAccountRedelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountRedelegationRequestProtoMsg): QueryAccountRedelegationRequest {
    return QueryAccountRedelegationRequest.decode(message.value);
  },
  toProto(message: QueryAccountRedelegationRequest): Uint8Array {
    return QueryAccountRedelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountRedelegationRequest): QueryAccountRedelegationRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryAccountRedelegationRequest",
      value: QueryAccountRedelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountRedelegationResponse(): QueryAccountRedelegationResponse {
  return {
    redelegationCooldownEntries: [],
    availableSlots: BigInt(0)
  };
}
export const QueryAccountRedelegationResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryAccountRedelegationResponse",
  encode(message: QueryAccountRedelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.redelegationCooldownEntries) {
      RedelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.availableSlots !== BigInt(0)) {
      writer.uint32(16).uint64(message.availableSlots);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountRedelegationResponse {
    return {
      redelegationCooldownEntries: Array.isArray(object?.redelegationCooldownEntries) ? object.redelegationCooldownEntries.map((e: any) => RedelegationEntry.fromJSON(e)) : [],
      availableSlots: isSet(object.availableSlots) ? BigInt(object.availableSlots.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryAccountRedelegationResponse>): QueryAccountRedelegationResponse {
    const message = createBaseQueryAccountRedelegationResponse();
    message.redelegationCooldownEntries = object.redelegationCooldownEntries?.map(e => RedelegationEntry.fromPartial(e)) || [];
    message.availableSlots = object.availableSlots !== undefined && object.availableSlots !== null ? BigInt(object.availableSlots.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAccountRedelegationResponseAmino): QueryAccountRedelegationResponse {
    const message = createBaseQueryAccountRedelegationResponse();
    message.redelegationCooldownEntries = object.redelegation_cooldown_entries?.map(e => RedelegationEntry.fromAmino(e)) || [];
    if (object.available_slots !== undefined && object.available_slots !== null) {
      message.availableSlots = BigInt(object.available_slots);
    }
    return message;
  },
  toAmino(message: QueryAccountRedelegationResponse): QueryAccountRedelegationResponseAmino {
    const obj: any = {};
    if (message.redelegationCooldownEntries) {
      obj.redelegation_cooldown_entries = message.redelegationCooldownEntries.map(e => e ? RedelegationEntry.toAmino(e) : undefined);
    } else {
      obj.redelegation_cooldown_entries = [];
    }
    obj.available_slots = message.availableSlots ? message.availableSlots.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountRedelegationResponseAminoMsg): QueryAccountRedelegationResponse {
    return QueryAccountRedelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountRedelegationResponseProtoMsg): QueryAccountRedelegationResponse {
    return QueryAccountRedelegationResponse.decode(message.value);
  },
  toProto(message: QueryAccountRedelegationResponse): Uint8Array {
    return QueryAccountRedelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountRedelegationResponse): QueryAccountRedelegationResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryAccountRedelegationResponse",
      value: QueryAccountRedelegationResponse.encode(message).finish()
    };
  }
};
function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    creationDate: BigInt(0),
    finishDate: BigInt(0)
  };
}
export const RedelegationEntry = {
  typeUrl: "/kyve.query.v1beta1.RedelegationEntry",
  encode(message: RedelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creationDate !== BigInt(0)) {
      writer.uint32(8).uint64(message.creationDate);
    }
    if (message.finishDate !== BigInt(0)) {
      writer.uint32(16).uint64(message.finishDate);
    }
    return writer;
  },
  fromJSON(object: any): RedelegationEntry {
    return {
      creationDate: isSet(object.creationDate) ? BigInt(object.creationDate.toString()) : BigInt(0),
      finishDate: isSet(object.finishDate) ? BigInt(object.finishDate.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RedelegationEntry>): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.creationDate = object.creationDate !== undefined && object.creationDate !== null ? BigInt(object.creationDate.toString()) : BigInt(0);
    message.finishDate = object.finishDate !== undefined && object.finishDate !== null ? BigInt(object.finishDate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RedelegationEntryAmino): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    if (object.creation_date !== undefined && object.creation_date !== null) {
      message.creationDate = BigInt(object.creation_date);
    }
    if (object.finish_date !== undefined && object.finish_date !== null) {
      message.finishDate = BigInt(object.finish_date);
    }
    return message;
  },
  toAmino(message: RedelegationEntry): RedelegationEntryAmino {
    const obj: any = {};
    obj.creation_date = message.creationDate ? message.creationDate.toString() : undefined;
    obj.finish_date = message.finishDate ? message.finishDate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RedelegationEntryAminoMsg): RedelegationEntry {
    return RedelegationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RedelegationEntryProtoMsg): RedelegationEntry {
    return RedelegationEntry.decode(message.value);
  },
  toProto(message: RedelegationEntry): Uint8Array {
    return RedelegationEntry.encode(message).finish();
  },
  toProtoMsg(message: RedelegationEntry): RedelegationEntryProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.RedelegationEntry",
      value: RedelegationEntry.encode(message).finish()
    };
  }
};