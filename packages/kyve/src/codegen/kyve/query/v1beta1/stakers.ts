import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker, FullStakerAmino, FullStakerSDKType } from "./query";
import { Valaccount, ValaccountAmino, ValaccountSDKType } from "../../stakers/v1beta1/stakers";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
export const StakerStatusAmino = StakerStatus;
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
export interface QueryStakersRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryStakersRequest";
  value: Uint8Array;
}
/** QueryStakersRequest is the request type for the Query/Stakers RPC method. */
export interface QueryStakersRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  /** status looks whether a staker is participating in pools or not */
  status?: StakerStatus;
  /** search searches for moniker OR address */
  search?: string;
}
export interface QueryStakersRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryStakersRequest";
  value: QueryStakersRequestAmino;
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
export interface QueryStakersResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryStakersResponse";
  value: Uint8Array;
}
/** QueryStakersResponse is the response type for the Query/Stakers RPC method. */
export interface QueryStakersResponseAmino {
  /** stakers ... */
  stakers?: FullStakerAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryStakersResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryStakersResponse";
  value: QueryStakersResponseAmino;
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
export interface QueryStakerRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryStakerRequest";
  value: Uint8Array;
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequestAmino {
  /** address ... */
  address?: string;
}
export interface QueryStakerRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryStakerRequest";
  value: QueryStakerRequestAmino;
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequestSDKType {
  address: string;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponse {
  /** staker ... */
  staker: FullStaker;
}
export interface QueryStakerResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryStakerResponse";
  value: Uint8Array;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponseAmino {
  /** staker ... */
  staker?: FullStakerAmino;
}
export interface QueryStakerResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryStakerResponse";
  value: QueryStakerResponseAmino;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponseSDKType {
  staker: FullStakerSDKType;
}
/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequest {
  /** pool_id ... */
  poolId: bigint;
}
export interface QueryStakersByPoolRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolRequest";
  value: Uint8Array;
}
/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequestAmino {
  /** pool_id ... */
  pool_id?: string;
}
export interface QueryStakersByPoolRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryStakersByPoolRequest";
  value: QueryStakersByPoolRequestAmino;
}
/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequestSDKType {
  pool_id: bigint;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakersByPoolResponse {
  /** stakers ... */
  stakers: StakerPoolResponse[];
}
export interface QueryStakersByPoolResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolResponse";
  value: Uint8Array;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakersByPoolResponseAmino {
  /** stakers ... */
  stakers?: StakerPoolResponseAmino[];
}
export interface QueryStakersByPoolResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryStakersByPoolResponse";
  value: QueryStakersByPoolResponseAmino;
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
export interface StakerPoolResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.StakerPoolResponse";
  value: Uint8Array;
}
/** StakerPoolResponse ... */
export interface StakerPoolResponseAmino {
  /** staker ... */
  staker?: FullStakerAmino;
  /** valaccount ... */
  valaccount?: ValaccountAmino;
}
export interface StakerPoolResponseAminoMsg {
  type: "/kyve.query.v1beta1.StakerPoolResponse";
  value: StakerPoolResponseAmino;
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
export interface QueryStakersByPoolCountRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolCountRequest";
  value: Uint8Array;
}
/** QueryStakersByPoolCountRequest ... */
export interface QueryStakersByPoolCountRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryStakersByPoolCountRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryStakersByPoolCountRequest";
  value: QueryStakersByPoolCountRequestAmino;
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
export interface QueryStakersByPoolCountResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolCountResponse";
  value: Uint8Array;
}
/** QueryStakersByPoolCountResponse ... */
export interface QueryStakersByPoolCountResponseAmino {
  /** stakers ... */
  stakers?: FullStakerAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryStakersByPoolCountResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryStakersByPoolCountResponse";
  value: QueryStakersByPoolCountResponseAmino;
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
  typeUrl: "/kyve.query.v1beta1.QueryStakersRequest",
  encode(message: QueryStakersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      status: isSet(object.status) ? stakerStatusFromJSON(object.status) : -1,
      search: isSet(object.search) ? String(object.search) : ""
    };
  },
  fromPartial(object: Partial<QueryStakersRequest>): QueryStakersRequest {
    const message = createBaseQueryStakersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.status = object.status ?? 0;
    message.search = object.search ?? "";
    return message;
  },
  fromAmino(object: QueryStakersRequestAmino): QueryStakersRequest {
    const message = createBaseQueryStakersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = stakerStatusFromJSON(object.status);
    }
    if (object.search !== undefined && object.search !== null) {
      message.search = object.search;
    }
    return message;
  },
  toAmino(message: QueryStakersRequest): QueryStakersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.status = message.status;
    obj.search = message.search;
    return obj;
  },
  fromAminoMsg(object: QueryStakersRequestAminoMsg): QueryStakersRequest {
    return QueryStakersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakersRequestProtoMsg): QueryStakersRequest {
    return QueryStakersRequest.decode(message.value);
  },
  toProto(message: QueryStakersRequest): Uint8Array {
    return QueryStakersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakersRequest): QueryStakersRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryStakersRequest",
      value: QueryStakersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakersResponse(): QueryStakersResponse {
  return {
    stakers: [],
    pagination: undefined
  };
}
export const QueryStakersResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryStakersResponse",
  encode(message: QueryStakersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryStakersResponseAmino): QueryStakersResponse {
    const message = createBaseQueryStakersResponse();
    message.stakers = object.stakers?.map(e => FullStaker.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakersResponse): QueryStakersResponseAmino {
    const obj: any = {};
    if (message.stakers) {
      obj.stakers = message.stakers.map(e => e ? FullStaker.toAmino(e) : undefined);
    } else {
      obj.stakers = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakersResponseAminoMsg): QueryStakersResponse {
    return QueryStakersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakersResponseProtoMsg): QueryStakersResponse {
    return QueryStakersResponse.decode(message.value);
  },
  toProto(message: QueryStakersResponse): Uint8Array {
    return QueryStakersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakersResponse): QueryStakersResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryStakersResponse",
      value: QueryStakersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakerRequest(): QueryStakerRequest {
  return {
    address: ""
  };
}
export const QueryStakerRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryStakerRequest",
  encode(message: QueryStakerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryStakerRequestAmino): QueryStakerRequest {
    const message = createBaseQueryStakerRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryStakerRequest): QueryStakerRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryStakerRequestAminoMsg): QueryStakerRequest {
    return QueryStakerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakerRequestProtoMsg): QueryStakerRequest {
    return QueryStakerRequest.decode(message.value);
  },
  toProto(message: QueryStakerRequest): Uint8Array {
    return QueryStakerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakerRequest): QueryStakerRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryStakerRequest",
      value: QueryStakerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakerResponse(): QueryStakerResponse {
  return {
    staker: FullStaker.fromPartial({})
  };
}
export const QueryStakerResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryStakerResponse",
  encode(message: QueryStakerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryStakerResponseAmino): QueryStakerResponse {
    const message = createBaseQueryStakerResponse();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = FullStaker.fromAmino(object.staker);
    }
    return message;
  },
  toAmino(message: QueryStakerResponse): QueryStakerResponseAmino {
    const obj: any = {};
    obj.staker = message.staker ? FullStaker.toAmino(message.staker) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakerResponseAminoMsg): QueryStakerResponse {
    return QueryStakerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakerResponseProtoMsg): QueryStakerResponse {
    return QueryStakerResponse.decode(message.value);
  },
  toProto(message: QueryStakerResponse): Uint8Array {
    return QueryStakerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakerResponse): QueryStakerResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryStakerResponse",
      value: QueryStakerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakersByPoolRequest(): QueryStakersByPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryStakersByPoolRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolRequest",
  encode(message: QueryStakersByPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): QueryStakersByPoolRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryStakersByPoolRequest>): QueryStakersByPoolRequest {
    const message = createBaseQueryStakersByPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryStakersByPoolRequestAmino): QueryStakersByPoolRequest {
    const message = createBaseQueryStakersByPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryStakersByPoolRequest): QueryStakersByPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakersByPoolRequestAminoMsg): QueryStakersByPoolRequest {
    return QueryStakersByPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakersByPoolRequestProtoMsg): QueryStakersByPoolRequest {
    return QueryStakersByPoolRequest.decode(message.value);
  },
  toProto(message: QueryStakersByPoolRequest): Uint8Array {
    return QueryStakersByPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakersByPoolRequest): QueryStakersByPoolRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolRequest",
      value: QueryStakersByPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakersByPoolResponse(): QueryStakersByPoolResponse {
  return {
    stakers: []
  };
}
export const QueryStakersByPoolResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolResponse",
  encode(message: QueryStakersByPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryStakersByPoolResponseAmino): QueryStakersByPoolResponse {
    const message = createBaseQueryStakersByPoolResponse();
    message.stakers = object.stakers?.map(e => StakerPoolResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryStakersByPoolResponse): QueryStakersByPoolResponseAmino {
    const obj: any = {};
    if (message.stakers) {
      obj.stakers = message.stakers.map(e => e ? StakerPoolResponse.toAmino(e) : undefined);
    } else {
      obj.stakers = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryStakersByPoolResponseAminoMsg): QueryStakersByPoolResponse {
    return QueryStakersByPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakersByPoolResponseProtoMsg): QueryStakersByPoolResponse {
    return QueryStakersByPoolResponse.decode(message.value);
  },
  toProto(message: QueryStakersByPoolResponse): Uint8Array {
    return QueryStakersByPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakersByPoolResponse): QueryStakersByPoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolResponse",
      value: QueryStakersByPoolResponse.encode(message).finish()
    };
  }
};
function createBaseStakerPoolResponse(): StakerPoolResponse {
  return {
    staker: undefined,
    valaccount: undefined
  };
}
export const StakerPoolResponse = {
  typeUrl: "/kyve.query.v1beta1.StakerPoolResponse",
  encode(message: StakerPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: StakerPoolResponseAmino): StakerPoolResponse {
    const message = createBaseStakerPoolResponse();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = FullStaker.fromAmino(object.staker);
    }
    if (object.valaccount !== undefined && object.valaccount !== null) {
      message.valaccount = Valaccount.fromAmino(object.valaccount);
    }
    return message;
  },
  toAmino(message: StakerPoolResponse): StakerPoolResponseAmino {
    const obj: any = {};
    obj.staker = message.staker ? FullStaker.toAmino(message.staker) : undefined;
    obj.valaccount = message.valaccount ? Valaccount.toAmino(message.valaccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: StakerPoolResponseAminoMsg): StakerPoolResponse {
    return StakerPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StakerPoolResponseProtoMsg): StakerPoolResponse {
    return StakerPoolResponse.decode(message.value);
  },
  toProto(message: StakerPoolResponse): Uint8Array {
    return StakerPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: StakerPoolResponse): StakerPoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.StakerPoolResponse",
      value: StakerPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakersByPoolCountRequest(): QueryStakersByPoolCountRequest {
  return {
    pagination: undefined
  };
}
export const QueryStakersByPoolCountRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolCountRequest",
  encode(message: QueryStakersByPoolCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryStakersByPoolCountRequestAmino): QueryStakersByPoolCountRequest {
    const message = createBaseQueryStakersByPoolCountRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakersByPoolCountRequest): QueryStakersByPoolCountRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakersByPoolCountRequestAminoMsg): QueryStakersByPoolCountRequest {
    return QueryStakersByPoolCountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakersByPoolCountRequestProtoMsg): QueryStakersByPoolCountRequest {
    return QueryStakersByPoolCountRequest.decode(message.value);
  },
  toProto(message: QueryStakersByPoolCountRequest): Uint8Array {
    return QueryStakersByPoolCountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakersByPoolCountRequest): QueryStakersByPoolCountRequestProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolCountRequest",
      value: QueryStakersByPoolCountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakersByPoolCountResponse(): QueryStakersByPoolCountResponse {
  return {
    stakers: [],
    pagination: undefined
  };
}
export const QueryStakersByPoolCountResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolCountResponse",
  encode(message: QueryStakersByPoolCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryStakersByPoolCountResponseAmino): QueryStakersByPoolCountResponse {
    const message = createBaseQueryStakersByPoolCountResponse();
    message.stakers = object.stakers?.map(e => FullStaker.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakersByPoolCountResponse): QueryStakersByPoolCountResponseAmino {
    const obj: any = {};
    if (message.stakers) {
      obj.stakers = message.stakers.map(e => e ? FullStaker.toAmino(e) : undefined);
    } else {
      obj.stakers = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakersByPoolCountResponseAminoMsg): QueryStakersByPoolCountResponse {
    return QueryStakersByPoolCountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakersByPoolCountResponseProtoMsg): QueryStakersByPoolCountResponse {
    return QueryStakersByPoolCountResponse.decode(message.value);
  },
  toProto(message: QueryStakersByPoolCountResponse): Uint8Array {
    return QueryStakersByPoolCountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakersByPoolCountResponse): QueryStakersByPoolCountResponseProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.QueryStakersByPoolCountResponse",
      value: QueryStakersByPoolCountResponse.encode(message).finish()
    };
  }
};