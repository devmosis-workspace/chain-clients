import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerAmino, FullStakerSDKType } from "./query";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequest {
  /** staker ... */
  staker: string;
  /** delegator ... */
  delegator: string;
}
export interface QueryDelegatorRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryDelegatorRequest";
  value: Uint8Array;
}
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequestAmino {
  /** staker ... */
  staker: string;
  /** delegator ... */
  delegator: string;
}
export interface QueryDelegatorRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryDelegatorRequest";
  value: QueryDelegatorRequestAmino;
}
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequestSDKType {
  staker: string;
  delegator: string;
}
/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponse {
  /** delegator ... */
  delegator: StakerDelegatorResponse;
}
export interface QueryDelegatorResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryDelegatorResponse";
  value: Uint8Array;
}
/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponseAmino {
  /** delegator ... */
  delegator?: StakerDelegatorResponseAmino;
}
export interface QueryDelegatorResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryDelegatorResponse";
  value: QueryDelegatorResponseAmino;
}
/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponseSDKType {
  delegator: StakerDelegatorResponseSDKType;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponse {
  /** delegator ... */
  delegator: string;
  /** current_reward ... */
  currentReward: bigint;
  /** delegation_amount ... */
  delegationAmount: bigint;
  /** staker ... */
  staker: string;
}
export interface StakerDelegatorResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.StakerDelegatorResponse";
  value: Uint8Array;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponseAmino {
  /** delegator ... */
  delegator: string;
  /** current_reward ... */
  current_reward: string;
  /** delegation_amount ... */
  delegation_amount: string;
  /** staker ... */
  staker: string;
}
export interface StakerDelegatorResponseAminoMsg {
  type: "/kyve.query.v1beta1.StakerDelegatorResponse";
  value: StakerDelegatorResponseAmino;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponseSDKType {
  delegator: string;
  current_reward: bigint;
  delegation_amount: bigint;
  staker: string;
}
/** QueryDelegatorsByStakerRequest ... */
export interface QueryDelegatorsByStakerRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  /** staker ... */
  staker: string;
}
export interface QueryDelegatorsByStakerRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryDelegatorsByStakerRequest";
  value: Uint8Array;
}
/** QueryDelegatorsByStakerRequest ... */
export interface QueryDelegatorsByStakerRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  /** staker ... */
  staker: string;
}
export interface QueryDelegatorsByStakerRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryDelegatorsByStakerRequest";
  value: QueryDelegatorsByStakerRequestAmino;
}
/** QueryDelegatorsByStakerRequest ... */
export interface QueryDelegatorsByStakerRequestSDKType {
  pagination: PageRequestSDKType;
  staker: string;
}
/** QueryDelegatorsByStakerResponse ... */
export interface QueryDelegatorsByStakerResponse {
  /** delegators ... */
  delegators: StakerDelegatorResponse[];
  /** total_delegation ... (consider metadata object) */
  totalDelegation: bigint;
  /** total_delegation ... */
  totalDelegatorCount: bigint;
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryDelegatorsByStakerResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryDelegatorsByStakerResponse";
  value: Uint8Array;
}
/** QueryDelegatorsByStakerResponse ... */
export interface QueryDelegatorsByStakerResponseAmino {
  /** delegators ... */
  delegators: StakerDelegatorResponseAmino[];
  /** total_delegation ... (consider metadata object) */
  total_delegation: string;
  /** total_delegation ... */
  total_delegator_count: string;
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorsByStakerResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryDelegatorsByStakerResponse";
  value: QueryDelegatorsByStakerResponseAmino;
}
/** QueryDelegatorsByStakerResponse ... */
export interface QueryDelegatorsByStakerResponseSDKType {
  delegators: StakerDelegatorResponseSDKType[];
  total_delegation: bigint;
  total_delegator_count: bigint;
  pagination: PageResponseSDKType;
}
/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  /** delegator ... */
  delegator: string;
}
export interface QueryStakersByDelegatorRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByDelegatorRequest";
  value: Uint8Array;
}
/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  /** delegator ... */
  delegator: string;
}
export interface QueryStakersByDelegatorRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryStakersByDelegatorRequest";
  value: QueryStakersByDelegatorRequestAmino;
}
/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequestSDKType {
  pagination: PageRequestSDKType;
  delegator: string;
}
/** QueryStakersByDelegatorResponse ... */
export interface QueryStakersByDelegatorResponse {
  /** delegator ... */
  delegator: string;
  /** stakers ... */
  stakers: DelegationForStakerResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryStakersByDelegatorResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByDelegatorResponse";
  value: Uint8Array;
}
/** QueryStakersByDelegatorResponse ... */
export interface QueryStakersByDelegatorResponseAmino {
  /** delegator ... */
  delegator: string;
  /** stakers ... */
  stakers: DelegationForStakerResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryStakersByDelegatorResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryStakersByDelegatorResponse";
  value: QueryStakersByDelegatorResponseAmino;
}
/** QueryStakersByDelegatorResponse ... */
export interface QueryStakersByDelegatorResponseSDKType {
  delegator: string;
  stakers: DelegationForStakerResponseSDKType[];
  pagination: PageResponseSDKType;
}
/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponse {
  /** staker ... */
  staker: FullStaker;
  /** current_reward ... */
  currentReward: bigint;
  /** delegation_amount ... */
  delegationAmount: bigint;
}
export interface DelegationForStakerResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.DelegationForStakerResponse";
  value: Uint8Array;
}
/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponseAmino {
  /** staker ... */
  staker?: FullStakerAmino;
  /** current_reward ... */
  current_reward: string;
  /** delegation_amount ... */
  delegation_amount: string;
}
export interface DelegationForStakerResponseAminoMsg {
  type: "/kyve.query.v1beta1.DelegationForStakerResponse";
  value: DelegationForStakerResponseAmino;
}
/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponseSDKType {
  staker: FullStakerSDKType;
  current_reward: bigint;
  delegation_amount: bigint;
}
function createBaseQueryDelegatorRequest(): QueryDelegatorRequest {
  return {
    staker: "",
    delegator: ""
  };
}
export const QueryDelegatorRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryDelegatorRequest",
  encode(message: QueryDelegatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDelegatorRequestAmino): QueryDelegatorRequest {
    return {
      staker: object.staker,
      delegator: object.delegator
    };
  },
  toAmino(message: QueryDelegatorRequest): QueryDelegatorRequestAmino {
    const obj: any = {};
    obj.staker = message.staker;
    obj.delegator = message.delegator;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorRequestAminoMsg): QueryDelegatorRequest {
    return QueryDelegatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorRequestProtoMsg): QueryDelegatorRequest {
    return QueryDelegatorRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorRequest): Uint8Array {
    return QueryDelegatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorRequest): QueryDelegatorRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryDelegatorRequest",
      value: QueryDelegatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorResponse(): QueryDelegatorResponse {
  return {
    delegator: StakerDelegatorResponse.fromPartial({})
  };
}
export const QueryDelegatorResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryDelegatorResponse",
  encode(message: QueryDelegatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDelegatorResponseAmino): QueryDelegatorResponse {
    return {
      delegator: object?.delegator ? StakerDelegatorResponse.fromAmino(object.delegator) : undefined
    };
  },
  toAmino(message: QueryDelegatorResponse): QueryDelegatorResponseAmino {
    const obj: any = {};
    obj.delegator = message.delegator ? StakerDelegatorResponse.toAmino(message.delegator) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorResponseAminoMsg): QueryDelegatorResponse {
    return QueryDelegatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorResponseProtoMsg): QueryDelegatorResponse {
    return QueryDelegatorResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorResponse): Uint8Array {
    return QueryDelegatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorResponse): QueryDelegatorResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryDelegatorResponse",
      value: QueryDelegatorResponse.encode(message).finish()
    };
  }
};
function createBaseStakerDelegatorResponse(): StakerDelegatorResponse {
  return {
    delegator: "",
    currentReward: BigInt(0),
    delegationAmount: BigInt(0),
    staker: ""
  };
}
export const StakerDelegatorResponse = {
  typeUrl: "/kyve.query.v1beta1.StakerDelegatorResponse",
  encode(message: StakerDelegatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.currentReward !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentReward);
    }
    if (message.delegationAmount !== BigInt(0)) {
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
      currentReward: isSet(object.currentReward) ? BigInt(object.currentReward.toString()) : BigInt(0),
      delegationAmount: isSet(object.delegationAmount) ? BigInt(object.delegationAmount.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : ""
    };
  },
  fromPartial(object: Partial<StakerDelegatorResponse>): StakerDelegatorResponse {
    const message = createBaseStakerDelegatorResponse();
    message.delegator = object.delegator ?? "";
    message.currentReward = object.currentReward !== undefined && object.currentReward !== null ? BigInt(object.currentReward.toString()) : BigInt(0);
    message.delegationAmount = object.delegationAmount !== undefined && object.delegationAmount !== null ? BigInt(object.delegationAmount.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    return message;
  },
  fromAmino(object: StakerDelegatorResponseAmino): StakerDelegatorResponse {
    return {
      delegator: object.delegator,
      currentReward: BigInt(object.current_reward),
      delegationAmount: BigInt(object.delegation_amount),
      staker: object.staker
    };
  },
  toAmino(message: StakerDelegatorResponse): StakerDelegatorResponseAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    obj.current_reward = message.currentReward ? message.currentReward.toString() : undefined;
    obj.delegation_amount = message.delegationAmount ? message.delegationAmount.toString() : undefined;
    obj.staker = message.staker;
    return obj;
  },
  fromAminoMsg(object: StakerDelegatorResponseAminoMsg): StakerDelegatorResponse {
    return StakerDelegatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StakerDelegatorResponseProtoMsg): StakerDelegatorResponse {
    return StakerDelegatorResponse.decode(message.value);
  },
  toProto(message: StakerDelegatorResponse): Uint8Array {
    return StakerDelegatorResponse.encode(message).finish();
  },
  toProtoMsg(message: StakerDelegatorResponse): StakerDelegatorResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.StakerDelegatorResponse",
      value: StakerDelegatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorsByStakerRequest(): QueryDelegatorsByStakerRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    staker: ""
  };
}
export const QueryDelegatorsByStakerRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryDelegatorsByStakerRequest",
  encode(message: QueryDelegatorsByStakerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDelegatorsByStakerRequestAmino): QueryDelegatorsByStakerRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      staker: object.staker
    };
  },
  toAmino(message: QueryDelegatorsByStakerRequest): QueryDelegatorsByStakerRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.staker = message.staker;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorsByStakerRequestAminoMsg): QueryDelegatorsByStakerRequest {
    return QueryDelegatorsByStakerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorsByStakerRequestProtoMsg): QueryDelegatorsByStakerRequest {
    return QueryDelegatorsByStakerRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorsByStakerRequest): Uint8Array {
    return QueryDelegatorsByStakerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorsByStakerRequest): QueryDelegatorsByStakerRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryDelegatorsByStakerRequest",
      value: QueryDelegatorsByStakerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorsByStakerResponse(): QueryDelegatorsByStakerResponse {
  return {
    delegators: [],
    totalDelegation: BigInt(0),
    totalDelegatorCount: BigInt(0),
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDelegatorsByStakerResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryDelegatorsByStakerResponse",
  encode(message: QueryDelegatorsByStakerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegators) {
      StakerDelegatorResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalDelegation !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalDelegation);
    }
    if (message.totalDelegatorCount !== BigInt(0)) {
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
      totalDelegation: isSet(object.totalDelegation) ? BigInt(object.totalDelegation.toString()) : BigInt(0),
      totalDelegatorCount: isSet(object.totalDelegatorCount) ? BigInt(object.totalDelegatorCount.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDelegatorsByStakerResponse>): QueryDelegatorsByStakerResponse {
    const message = createBaseQueryDelegatorsByStakerResponse();
    message.delegators = object.delegators?.map(e => StakerDelegatorResponse.fromPartial(e)) || [];
    message.totalDelegation = object.totalDelegation !== undefined && object.totalDelegation !== null ? BigInt(object.totalDelegation.toString()) : BigInt(0);
    message.totalDelegatorCount = object.totalDelegatorCount !== undefined && object.totalDelegatorCount !== null ? BigInt(object.totalDelegatorCount.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorsByStakerResponseAmino): QueryDelegatorsByStakerResponse {
    return {
      delegators: Array.isArray(object?.delegators) ? object.delegators.map((e: any) => StakerDelegatorResponse.fromAmino(e)) : [],
      totalDelegation: BigInt(object.total_delegation),
      totalDelegatorCount: BigInt(object.total_delegator_count),
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDelegatorsByStakerResponse): QueryDelegatorsByStakerResponseAmino {
    const obj: any = {};
    if (message.delegators) {
      obj.delegators = message.delegators.map(e => e ? StakerDelegatorResponse.toAmino(e) : undefined);
    } else {
      obj.delegators = [];
    }
    obj.total_delegation = message.totalDelegation ? message.totalDelegation.toString() : undefined;
    obj.total_delegator_count = message.totalDelegatorCount ? message.totalDelegatorCount.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorsByStakerResponseAminoMsg): QueryDelegatorsByStakerResponse {
    return QueryDelegatorsByStakerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorsByStakerResponseProtoMsg): QueryDelegatorsByStakerResponse {
    return QueryDelegatorsByStakerResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorsByStakerResponse): Uint8Array {
    return QueryDelegatorsByStakerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorsByStakerResponse): QueryDelegatorsByStakerResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryDelegatorsByStakerResponse",
      value: QueryDelegatorsByStakerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakersByDelegatorRequest(): QueryStakersByDelegatorRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    delegator: ""
  };
}
export const QueryStakersByDelegatorRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByDelegatorRequest",
  encode(message: QueryStakersByDelegatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryStakersByDelegatorRequestAmino): QueryStakersByDelegatorRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      delegator: object.delegator
    };
  },
  toAmino(message: QueryStakersByDelegatorRequest): QueryStakersByDelegatorRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.delegator = message.delegator;
    return obj;
  },
  fromAminoMsg(object: QueryStakersByDelegatorRequestAminoMsg): QueryStakersByDelegatorRequest {
    return QueryStakersByDelegatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakersByDelegatorRequestProtoMsg): QueryStakersByDelegatorRequest {
    return QueryStakersByDelegatorRequest.decode(message.value);
  },
  toProto(message: QueryStakersByDelegatorRequest): Uint8Array {
    return QueryStakersByDelegatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakersByDelegatorRequest): QueryStakersByDelegatorRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryStakersByDelegatorRequest",
      value: QueryStakersByDelegatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakersByDelegatorResponse(): QueryStakersByDelegatorResponse {
  return {
    delegator: "",
    stakers: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryStakersByDelegatorResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByDelegatorResponse",
  encode(message: QueryStakersByDelegatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryStakersByDelegatorResponseAmino): QueryStakersByDelegatorResponse {
    return {
      delegator: object.delegator,
      stakers: Array.isArray(object?.stakers) ? object.stakers.map((e: any) => DelegationForStakerResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryStakersByDelegatorResponse): QueryStakersByDelegatorResponseAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    if (message.stakers) {
      obj.stakers = message.stakers.map(e => e ? DelegationForStakerResponse.toAmino(e) : undefined);
    } else {
      obj.stakers = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakersByDelegatorResponseAminoMsg): QueryStakersByDelegatorResponse {
    return QueryStakersByDelegatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakersByDelegatorResponseProtoMsg): QueryStakersByDelegatorResponse {
    return QueryStakersByDelegatorResponse.decode(message.value);
  },
  toProto(message: QueryStakersByDelegatorResponse): Uint8Array {
    return QueryStakersByDelegatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakersByDelegatorResponse): QueryStakersByDelegatorResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryStakersByDelegatorResponse",
      value: QueryStakersByDelegatorResponse.encode(message).finish()
    };
  }
};
function createBaseDelegationForStakerResponse(): DelegationForStakerResponse {
  return {
    staker: FullStaker.fromPartial({}),
    currentReward: BigInt(0),
    delegationAmount: BigInt(0)
  };
}
export const DelegationForStakerResponse = {
  typeUrl: "/kyve.query.v1beta1.DelegationForStakerResponse",
  encode(message: DelegationForStakerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== undefined) {
      FullStaker.encode(message.staker, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentReward !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentReward);
    }
    if (message.delegationAmount !== BigInt(0)) {
      writer.uint32(24).uint64(message.delegationAmount);
    }
    return writer;
  },
  fromJSON(object: any): DelegationForStakerResponse {
    return {
      staker: isSet(object.staker) ? FullStaker.fromJSON(object.staker) : undefined,
      currentReward: isSet(object.currentReward) ? BigInt(object.currentReward.toString()) : BigInt(0),
      delegationAmount: isSet(object.delegationAmount) ? BigInt(object.delegationAmount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<DelegationForStakerResponse>): DelegationForStakerResponse {
    const message = createBaseDelegationForStakerResponse();
    message.staker = object.staker !== undefined && object.staker !== null ? FullStaker.fromPartial(object.staker) : undefined;
    message.currentReward = object.currentReward !== undefined && object.currentReward !== null ? BigInt(object.currentReward.toString()) : BigInt(0);
    message.delegationAmount = object.delegationAmount !== undefined && object.delegationAmount !== null ? BigInt(object.delegationAmount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DelegationForStakerResponseAmino): DelegationForStakerResponse {
    return {
      staker: object?.staker ? FullStaker.fromAmino(object.staker) : undefined,
      currentReward: BigInt(object.current_reward),
      delegationAmount: BigInt(object.delegation_amount)
    };
  },
  toAmino(message: DelegationForStakerResponse): DelegationForStakerResponseAmino {
    const obj: any = {};
    obj.staker = message.staker ? FullStaker.toAmino(message.staker) : undefined;
    obj.current_reward = message.currentReward ? message.currentReward.toString() : undefined;
    obj.delegation_amount = message.delegationAmount ? message.delegationAmount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegationForStakerResponseAminoMsg): DelegationForStakerResponse {
    return DelegationForStakerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationForStakerResponseProtoMsg): DelegationForStakerResponse {
    return DelegationForStakerResponse.decode(message.value);
  },
  toProto(message: DelegationForStakerResponse): Uint8Array {
    return DelegationForStakerResponse.encode(message).finish();
  },
  toProtoMsg(message: DelegationForStakerResponse): DelegationForStakerResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.DelegationForStakerResponse",
      value: DelegationForStakerResponse.encode(message).finish()
    };
  }
};