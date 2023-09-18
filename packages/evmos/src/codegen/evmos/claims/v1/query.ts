import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressAmino, ClaimsRecordAddressSDKType, Claim, ClaimAmino, ClaimSDKType } from "./claims";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequest {}
export interface QueryTotalUnclaimedRequestProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedRequest";
  value: Uint8Array;
}
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequestAmino {}
export interface QueryTotalUnclaimedRequestAminoMsg {
  type: "/evmos.claims.v1.QueryTotalUnclaimedRequest";
  value: QueryTotalUnclaimedRequestAmino;
}
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequestSDKType {}
/**
 * QueryTotalUnclaimedResponse is the response type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedResponse {
  /** coins defines the unclaimed coins */
  coins: Coin[];
}
export interface QueryTotalUnclaimedResponseProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedResponse";
  value: Uint8Array;
}
/**
 * QueryTotalUnclaimedResponse is the response type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedResponseAmino {
  /** coins defines the unclaimed coins */
  coins: CoinAmino[];
}
export interface QueryTotalUnclaimedResponseAminoMsg {
  type: "/evmos.claims.v1.QueryTotalUnclaimedResponse";
  value: QueryTotalUnclaimedResponseAmino;
}
/**
 * QueryTotalUnclaimedResponse is the response type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedResponseSDKType {
  coins: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/evmos.claims.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/evmos.claims.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryClaimsRecordsRequestProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordsRequest";
  value: Uint8Array;
}
/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryClaimsRecordsRequestAminoMsg {
  type: "/evmos.claims.v1.QueryClaimsRecordsRequest";
  value: QueryClaimsRecordsRequestAmino;
}
/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequestSDKType {
  pagination: PageRequestSDKType;
}
/**
 * QueryClaimsRecordsResponse is the response type for the Query/ClaimsRecords
 * RPC method.
 */
export interface QueryClaimsRecordsResponse {
  /** claims defines all claims records */
  claims: ClaimsRecordAddress[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryClaimsRecordsResponseProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordsResponse";
  value: Uint8Array;
}
/**
 * QueryClaimsRecordsResponse is the response type for the Query/ClaimsRecords
 * RPC method.
 */
export interface QueryClaimsRecordsResponseAmino {
  /** claims defines all claims records */
  claims: ClaimsRecordAddressAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryClaimsRecordsResponseAminoMsg {
  type: "/evmos.claims.v1.QueryClaimsRecordsResponse";
  value: QueryClaimsRecordsResponseAmino;
}
/**
 * QueryClaimsRecordsResponse is the response type for the Query/ClaimsRecords
 * RPC method.
 */
export interface QueryClaimsRecordsResponseSDKType {
  claims: ClaimsRecordAddressSDKType[];
  pagination: PageResponseSDKType;
}
/**
 * QueryClaimsRecordRequest is the request type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordRequest {
  /** address defines the user to query claims record for */
  address: string;
}
export interface QueryClaimsRecordRequestProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordRequest";
  value: Uint8Array;
}
/**
 * QueryClaimsRecordRequest is the request type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordRequestAmino {
  /** address defines the user to query claims record for */
  address: string;
}
export interface QueryClaimsRecordRequestAminoMsg {
  type: "/evmos.claims.v1.QueryClaimsRecordRequest";
  value: QueryClaimsRecordRequestAmino;
}
/**
 * QueryClaimsRecordRequest is the request type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordRequestSDKType {
  address: string;
}
/**
 * QueryClaimsRecordResponse is the response type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordResponse {
  /** initial_claimable_amount of the user */
  initialClaimableAmount: string;
  /** claims of the user */
  claims: Claim[];
}
export interface QueryClaimsRecordResponseProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordResponse";
  value: Uint8Array;
}
/**
 * QueryClaimsRecordResponse is the response type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordResponseAmino {
  /** initial_claimable_amount of the user */
  initial_claimable_amount: string;
  /** claims of the user */
  claims: ClaimAmino[];
}
export interface QueryClaimsRecordResponseAminoMsg {
  type: "/evmos.claims.v1.QueryClaimsRecordResponse";
  value: QueryClaimsRecordResponseAmino;
}
/**
 * QueryClaimsRecordResponse is the response type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordResponseSDKType {
  initial_claimable_amount: string;
  claims: ClaimSDKType[];
}
function createBaseQueryTotalUnclaimedRequest(): QueryTotalUnclaimedRequest {
  return {};
}
export const QueryTotalUnclaimedRequest = {
  typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedRequest",
  encode(_: QueryTotalUnclaimedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTotalUnclaimedRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTotalUnclaimedRequest>): QueryTotalUnclaimedRequest {
    const message = createBaseQueryTotalUnclaimedRequest();
    return message;
  },
  fromAmino(_: QueryTotalUnclaimedRequestAmino): QueryTotalUnclaimedRequest {
    return {};
  },
  toAmino(_: QueryTotalUnclaimedRequest): QueryTotalUnclaimedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalUnclaimedRequestAminoMsg): QueryTotalUnclaimedRequest {
    return QueryTotalUnclaimedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalUnclaimedRequestProtoMsg): QueryTotalUnclaimedRequest {
    return QueryTotalUnclaimedRequest.decode(message.value);
  },
  toProto(message: QueryTotalUnclaimedRequest): Uint8Array {
    return QueryTotalUnclaimedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalUnclaimedRequest): QueryTotalUnclaimedRequestProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedRequest",
      value: QueryTotalUnclaimedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalUnclaimedResponse(): QueryTotalUnclaimedResponse {
  return {
    coins: []
  };
}
export const QueryTotalUnclaimedResponse = {
  typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedResponse",
  encode(message: QueryTotalUnclaimedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalUnclaimedResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalUnclaimedResponse>): QueryTotalUnclaimedResponse {
    const message = createBaseQueryTotalUnclaimedResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalUnclaimedResponseAmino): QueryTotalUnclaimedResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalUnclaimedResponse): QueryTotalUnclaimedResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalUnclaimedResponseAminoMsg): QueryTotalUnclaimedResponse {
    return QueryTotalUnclaimedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalUnclaimedResponseProtoMsg): QueryTotalUnclaimedResponse {
    return QueryTotalUnclaimedResponse.decode(message.value);
  },
  toProto(message: QueryTotalUnclaimedResponse): Uint8Array {
    return QueryTotalUnclaimedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalUnclaimedResponse): QueryTotalUnclaimedResponseProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedResponse",
      value: QueryTotalUnclaimedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/evmos.claims.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/evmos.claims.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordsRequest(): QueryClaimsRecordsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryClaimsRecordsRequest = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordsRequest",
  encode(message: QueryClaimsRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsRecordsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimsRecordsRequest>): QueryClaimsRecordsRequest {
    const message = createBaseQueryClaimsRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimsRecordsRequestAmino): QueryClaimsRecordsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClaimsRecordsRequest): QueryClaimsRecordsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordsRequestAminoMsg): QueryClaimsRecordsRequest {
    return QueryClaimsRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordsRequestProtoMsg): QueryClaimsRecordsRequest {
    return QueryClaimsRecordsRequest.decode(message.value);
  },
  toProto(message: QueryClaimsRecordsRequest): Uint8Array {
    return QueryClaimsRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordsRequest): QueryClaimsRecordsRequestProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordsRequest",
      value: QueryClaimsRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordsResponse(): QueryClaimsRecordsResponse {
  return {
    claims: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryClaimsRecordsResponse = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordsResponse",
  encode(message: QueryClaimsRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claims) {
      ClaimsRecordAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsRecordsResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => ClaimsRecordAddress.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimsRecordsResponse>): QueryClaimsRecordsResponse {
    const message = createBaseQueryClaimsRecordsResponse();
    message.claims = object.claims?.map(e => ClaimsRecordAddress.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimsRecordsResponseAmino): QueryClaimsRecordsResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => ClaimsRecordAddress.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClaimsRecordsResponse): QueryClaimsRecordsResponseAmino {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? ClaimsRecordAddress.toAmino(e) : undefined);
    } else {
      obj.claims = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordsResponseAminoMsg): QueryClaimsRecordsResponse {
    return QueryClaimsRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordsResponseProtoMsg): QueryClaimsRecordsResponse {
    return QueryClaimsRecordsResponse.decode(message.value);
  },
  toProto(message: QueryClaimsRecordsResponse): Uint8Array {
    return QueryClaimsRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordsResponse): QueryClaimsRecordsResponseProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordsResponse",
      value: QueryClaimsRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordRequest(): QueryClaimsRecordRequest {
  return {
    address: ""
  };
}
export const QueryClaimsRecordRequest = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordRequest",
  encode(message: QueryClaimsRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsRecordRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryClaimsRecordRequest>): QueryClaimsRecordRequest {
    const message = createBaseQueryClaimsRecordRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryClaimsRecordRequestAmino): QueryClaimsRecordRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryClaimsRecordRequest): QueryClaimsRecordRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordRequestAminoMsg): QueryClaimsRecordRequest {
    return QueryClaimsRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordRequestProtoMsg): QueryClaimsRecordRequest {
    return QueryClaimsRecordRequest.decode(message.value);
  },
  toProto(message: QueryClaimsRecordRequest): Uint8Array {
    return QueryClaimsRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordRequest): QueryClaimsRecordRequestProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordRequest",
      value: QueryClaimsRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordResponse(): QueryClaimsRecordResponse {
  return {
    initialClaimableAmount: "",
    claims: []
  };
}
export const QueryClaimsRecordResponse = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordResponse",
  encode(message: QueryClaimsRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initialClaimableAmount !== "") {
      writer.uint32(10).string(message.initialClaimableAmount);
    }
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsRecordResponse {
    return {
      initialClaimableAmount: isSet(object.initialClaimableAmount) ? String(object.initialClaimableAmount) : "",
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryClaimsRecordResponse>): QueryClaimsRecordResponse {
    const message = createBaseQueryClaimsRecordResponse();
    message.initialClaimableAmount = object.initialClaimableAmount ?? "";
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryClaimsRecordResponseAmino): QueryClaimsRecordResponse {
    return {
      initialClaimableAmount: object.initial_claimable_amount,
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryClaimsRecordResponse): QueryClaimsRecordResponseAmino {
    const obj: any = {};
    obj.initial_claimable_amount = message.initialClaimableAmount;
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toAmino(e) : undefined);
    } else {
      obj.claims = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordResponseAminoMsg): QueryClaimsRecordResponse {
    return QueryClaimsRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordResponseProtoMsg): QueryClaimsRecordResponse {
    return QueryClaimsRecordResponse.decode(message.value);
  },
  toProto(message: QueryClaimsRecordResponse): Uint8Array {
    return QueryClaimsRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordResponse): QueryClaimsRecordResponseProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordResponse",
      value: QueryClaimsRecordResponse.encode(message).finish()
    };
  }
};