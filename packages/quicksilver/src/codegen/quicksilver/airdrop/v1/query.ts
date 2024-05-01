import { Status, ZoneDrop, ZoneDropAmino, ZoneDropSDKType, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType, statusFromJSON } from "./airdrop";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryParamsRequest";
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
  typeUrl: "/quicksilver.airdrop.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryZoneDropRequest is the request type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropRequest {
  /** chain_id identifies the zone. */
  chainId: string;
}
export interface QueryZoneDropRequestProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropRequest";
  value: Uint8Array;
}
/** QueryZoneDropRequest is the request type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropRequestAmino {
  /** chain_id identifies the zone. */
  chain_id?: string;
}
export interface QueryZoneDropRequestAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryZoneDropRequest";
  value: QueryZoneDropRequestAmino;
}
/** QueryZoneDropRequest is the request type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropRequestSDKType {
  chain_id: string;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropResponse {
  zoneDrop: ZoneDrop;
}
export interface QueryZoneDropResponseProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropResponse";
  value: Uint8Array;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropResponseAmino {
  zone_drop?: ZoneDropAmino;
}
export interface QueryZoneDropResponseAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryZoneDropResponse";
  value: QueryZoneDropResponseAmino;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropResponseSDKType {
  zone_drop: ZoneDropSDKType;
}
/**
 * QueryAccountBalanceRequest is the request type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceRequest {
  /** chain_id identifies the zone. */
  chainId: string;
}
export interface QueryAccountBalanceRequestProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceRequest";
  value: Uint8Array;
}
/**
 * QueryAccountBalanceRequest is the request type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceRequestAmino {
  /** chain_id identifies the zone. */
  chain_id?: string;
}
export interface QueryAccountBalanceRequestAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryAccountBalanceRequest";
  value: QueryAccountBalanceRequestAmino;
}
/**
 * QueryAccountBalanceRequest is the request type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceRequestSDKType {
  chain_id: string;
}
/**
 * QueryAccountBalanceResponse is the response type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceResponse {
  accountBalance?: Coin;
}
export interface QueryAccountBalanceResponseProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse";
  value: Uint8Array;
}
/**
 * QueryAccountBalanceResponse is the response type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceResponseAmino {
  account_balance?: CoinAmino;
}
export interface QueryAccountBalanceResponseAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse";
  value: QueryAccountBalanceResponseAmino;
}
/**
 * QueryAccountBalanceResponse is the response type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceResponseSDKType {
  account_balance?: CoinSDKType;
}
/** QueryZoneDropsRequest is the request type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsRequest {
  /**
   * status enables to query zone airdrops matching a given status:
   *  - Active
   *  - Future
   *  - Expired
   */
  status: Status;
  pagination?: PageRequest;
}
export interface QueryZoneDropsRequestProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsRequest";
  value: Uint8Array;
}
/** QueryZoneDropsRequest is the request type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsRequestAmino {
  /**
   * status enables to query zone airdrops matching a given status:
   *  - Active
   *  - Future
   *  - Expired
   */
  status?: Status;
  pagination?: PageRequestAmino;
}
export interface QueryZoneDropsRequestAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryZoneDropsRequest";
  value: QueryZoneDropsRequestAmino;
}
/** QueryZoneDropsRequest is the request type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsRequestSDKType {
  status: Status;
  pagination?: PageRequestSDKType;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsResponse {
  zoneDrops: ZoneDrop[];
  pagination?: PageResponse;
}
export interface QueryZoneDropsResponseProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsResponse";
  value: Uint8Array;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsResponseAmino {
  zone_drops?: ZoneDropAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryZoneDropsResponseAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryZoneDropsResponse";
  value: QueryZoneDropsResponseAmino;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsResponseSDKType {
  zone_drops: ZoneDropSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryClaimRecordRequest is the request type for Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequest {
  chainId: string;
  address: string;
}
export interface QueryClaimRecordRequestProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordRequest";
  value: Uint8Array;
}
/** QueryClaimRecordRequest is the request type for Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequestAmino {
  chain_id?: string;
  address?: string;
}
export interface QueryClaimRecordRequestAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryClaimRecordRequest";
  value: QueryClaimRecordRequestAmino;
}
/** QueryClaimRecordRequest is the request type for Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequestSDKType {
  chain_id: string;
  address: string;
}
/**
 * QueryClaimRecordResponse is the response type for Query/ClaimRecord RPC
 * method.
 */
export interface QueryClaimRecordResponse {
  claimRecord?: ClaimRecord;
}
export interface QueryClaimRecordResponseProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordResponse";
  value: Uint8Array;
}
/**
 * QueryClaimRecordResponse is the response type for Query/ClaimRecord RPC
 * method.
 */
export interface QueryClaimRecordResponseAmino {
  claim_record?: ClaimRecordAmino;
}
export interface QueryClaimRecordResponseAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryClaimRecordResponse";
  value: QueryClaimRecordResponseAmino;
}
/**
 * QueryClaimRecordResponse is the response type for Query/ClaimRecord RPC
 * method.
 */
export interface QueryClaimRecordResponseSDKType {
  claim_record?: ClaimRecordSDKType;
}
/**
 * QueryClaimRecordsRequest is the request type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsRequest {
  chainId: string;
  pagination?: PageRequest;
}
export interface QueryClaimRecordsRequestProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest";
  value: Uint8Array;
}
/**
 * QueryClaimRecordsRequest is the request type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsRequestAmino {
  chain_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryClaimRecordsRequestAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest";
  value: QueryClaimRecordsRequestAmino;
}
/**
 * QueryClaimRecordsRequest is the request type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsRequestSDKType {
  chain_id: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryClaimRecordsResponse is the response type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsResponse {
  claimRecords: ClaimRecord[];
  pagination?: PageResponse;
}
export interface QueryClaimRecordsResponseProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse";
  value: Uint8Array;
}
/**
 * QueryClaimRecordsResponse is the response type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsResponseAmino {
  claim_records?: ClaimRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryClaimRecordsResponseAminoMsg {
  type: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse";
  value: QueryClaimRecordsResponseAmino;
}
/**
 * QueryClaimRecordsResponse is the response type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsResponseSDKType {
  claim_records: ClaimRecordSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/quicksilver.airdrop.v1.QueryParamsRequest",
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
    const message = createBaseQueryParamsRequest();
    return message;
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
      typeUrl: "/quicksilver.airdrop.v1.QueryParamsRequest",
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
  typeUrl: "/quicksilver.airdrop.v1.QueryParamsResponse",
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
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
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
      typeUrl: "/quicksilver.airdrop.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryZoneDropRequest(): QueryZoneDropRequest {
  return {
    chainId: ""
  };
}
export const QueryZoneDropRequest = {
  typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropRequest",
  encode(message: QueryZoneDropRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryZoneDropRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<QueryZoneDropRequest>): QueryZoneDropRequest {
    const message = createBaseQueryZoneDropRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryZoneDropRequestAmino): QueryZoneDropRequest {
    const message = createBaseQueryZoneDropRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryZoneDropRequest): QueryZoneDropRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryZoneDropRequestAminoMsg): QueryZoneDropRequest {
    return QueryZoneDropRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneDropRequestProtoMsg): QueryZoneDropRequest {
    return QueryZoneDropRequest.decode(message.value);
  },
  toProto(message: QueryZoneDropRequest): Uint8Array {
    return QueryZoneDropRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneDropRequest): QueryZoneDropRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropRequest",
      value: QueryZoneDropRequest.encode(message).finish()
    };
  }
};
function createBaseQueryZoneDropResponse(): QueryZoneDropResponse {
  return {
    zoneDrop: ZoneDrop.fromPartial({})
  };
}
export const QueryZoneDropResponse = {
  typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropResponse",
  encode(message: QueryZoneDropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.zoneDrop !== undefined) {
      ZoneDrop.encode(message.zoneDrop, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryZoneDropResponse {
    return {
      zoneDrop: isSet(object.zoneDrop) ? ZoneDrop.fromJSON(object.zoneDrop) : undefined
    };
  },
  fromPartial(object: Partial<QueryZoneDropResponse>): QueryZoneDropResponse {
    const message = createBaseQueryZoneDropResponse();
    message.zoneDrop = object.zoneDrop !== undefined && object.zoneDrop !== null ? ZoneDrop.fromPartial(object.zoneDrop) : undefined;
    return message;
  },
  fromAmino(object: QueryZoneDropResponseAmino): QueryZoneDropResponse {
    const message = createBaseQueryZoneDropResponse();
    if (object.zone_drop !== undefined && object.zone_drop !== null) {
      message.zoneDrop = ZoneDrop.fromAmino(object.zone_drop);
    }
    return message;
  },
  toAmino(message: QueryZoneDropResponse): QueryZoneDropResponseAmino {
    const obj: any = {};
    obj.zone_drop = message.zoneDrop ? ZoneDrop.toAmino(message.zoneDrop) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZoneDropResponseAminoMsg): QueryZoneDropResponse {
    return QueryZoneDropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneDropResponseProtoMsg): QueryZoneDropResponse {
    return QueryZoneDropResponse.decode(message.value);
  },
  toProto(message: QueryZoneDropResponse): Uint8Array {
    return QueryZoneDropResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneDropResponse): QueryZoneDropResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropResponse",
      value: QueryZoneDropResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountBalanceRequest(): QueryAccountBalanceRequest {
  return {
    chainId: ""
  };
}
export const QueryAccountBalanceRequest = {
  typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceRequest",
  encode(message: QueryAccountBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountBalanceRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountBalanceRequest>): QueryAccountBalanceRequest {
    const message = createBaseQueryAccountBalanceRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryAccountBalanceRequestAmino): QueryAccountBalanceRequest {
    const message = createBaseQueryAccountBalanceRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryAccountBalanceRequest): QueryAccountBalanceRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryAccountBalanceRequestAminoMsg): QueryAccountBalanceRequest {
    return QueryAccountBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountBalanceRequestProtoMsg): QueryAccountBalanceRequest {
    return QueryAccountBalanceRequest.decode(message.value);
  },
  toProto(message: QueryAccountBalanceRequest): Uint8Array {
    return QueryAccountBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountBalanceRequest): QueryAccountBalanceRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceRequest",
      value: QueryAccountBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountBalanceResponse(): QueryAccountBalanceResponse {
  return {
    accountBalance: undefined
  };
}
export const QueryAccountBalanceResponse = {
  typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse",
  encode(message: QueryAccountBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountBalance !== undefined) {
      Coin.encode(message.accountBalance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountBalanceResponse {
    return {
      accountBalance: isSet(object.accountBalance) ? Coin.fromJSON(object.accountBalance) : undefined
    };
  },
  fromPartial(object: Partial<QueryAccountBalanceResponse>): QueryAccountBalanceResponse {
    const message = createBaseQueryAccountBalanceResponse();
    message.accountBalance = object.accountBalance !== undefined && object.accountBalance !== null ? Coin.fromPartial(object.accountBalance) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountBalanceResponseAmino): QueryAccountBalanceResponse {
    const message = createBaseQueryAccountBalanceResponse();
    if (object.account_balance !== undefined && object.account_balance !== null) {
      message.accountBalance = Coin.fromAmino(object.account_balance);
    }
    return message;
  },
  toAmino(message: QueryAccountBalanceResponse): QueryAccountBalanceResponseAmino {
    const obj: any = {};
    obj.account_balance = message.accountBalance ? Coin.toAmino(message.accountBalance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountBalanceResponseAminoMsg): QueryAccountBalanceResponse {
    return QueryAccountBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountBalanceResponseProtoMsg): QueryAccountBalanceResponse {
    return QueryAccountBalanceResponse.decode(message.value);
  },
  toProto(message: QueryAccountBalanceResponse): Uint8Array {
    return QueryAccountBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountBalanceResponse): QueryAccountBalanceResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse",
      value: QueryAccountBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryZoneDropsRequest(): QueryZoneDropsRequest {
  return {
    status: 0,
    pagination: undefined
  };
}
export const QueryZoneDropsRequest = {
  typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsRequest",
  encode(message: QueryZoneDropsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryZoneDropsRequest {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryZoneDropsRequest>): QueryZoneDropsRequest {
    const message = createBaseQueryZoneDropsRequest();
    message.status = object.status ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryZoneDropsRequestAmino): QueryZoneDropsRequest {
    const message = createBaseQueryZoneDropsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = statusFromJSON(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryZoneDropsRequest): QueryZoneDropsRequestAmino {
    const obj: any = {};
    obj.status = message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZoneDropsRequestAminoMsg): QueryZoneDropsRequest {
    return QueryZoneDropsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneDropsRequestProtoMsg): QueryZoneDropsRequest {
    return QueryZoneDropsRequest.decode(message.value);
  },
  toProto(message: QueryZoneDropsRequest): Uint8Array {
    return QueryZoneDropsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneDropsRequest): QueryZoneDropsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsRequest",
      value: QueryZoneDropsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryZoneDropsResponse(): QueryZoneDropsResponse {
  return {
    zoneDrops: [],
    pagination: undefined
  };
}
export const QueryZoneDropsResponse = {
  typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsResponse",
  encode(message: QueryZoneDropsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.zoneDrops) {
      ZoneDrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryZoneDropsResponse {
    return {
      zoneDrops: Array.isArray(object?.zoneDrops) ? object.zoneDrops.map((e: any) => ZoneDrop.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryZoneDropsResponse>): QueryZoneDropsResponse {
    const message = createBaseQueryZoneDropsResponse();
    message.zoneDrops = object.zoneDrops?.map(e => ZoneDrop.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryZoneDropsResponseAmino): QueryZoneDropsResponse {
    const message = createBaseQueryZoneDropsResponse();
    message.zoneDrops = object.zone_drops?.map(e => ZoneDrop.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryZoneDropsResponse): QueryZoneDropsResponseAmino {
    const obj: any = {};
    if (message.zoneDrops) {
      obj.zone_drops = message.zoneDrops.map(e => e ? ZoneDrop.toAmino(e) : undefined);
    } else {
      obj.zone_drops = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZoneDropsResponseAminoMsg): QueryZoneDropsResponse {
    return QueryZoneDropsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneDropsResponseProtoMsg): QueryZoneDropsResponse {
    return QueryZoneDropsResponse.decode(message.value);
  },
  toProto(message: QueryZoneDropsResponse): Uint8Array {
    return QueryZoneDropsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneDropsResponse): QueryZoneDropsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsResponse",
      value: QueryZoneDropsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return {
    chainId: "",
    address: ""
  };
}
export const QueryClaimRecordRequest = {
  typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordRequest",
  encode(message: QueryClaimRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimRecordRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryClaimRecordRequest>): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    message.chainId = object.chainId ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryClaimRecordRequestAmino): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryClaimRecordRequest): QueryClaimRecordRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRecordRequestAminoMsg): QueryClaimRecordRequest {
    return QueryClaimRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRecordRequestProtoMsg): QueryClaimRecordRequest {
    return QueryClaimRecordRequest.decode(message.value);
  },
  toProto(message: QueryClaimRecordRequest): Uint8Array {
    return QueryClaimRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordRequest): QueryClaimRecordRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordRequest",
      value: QueryClaimRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return {
    claimRecord: undefined
  };
}
export const QueryClaimRecordResponse = {
  typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordResponse",
  encode(message: QueryClaimRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimRecordResponse {
    return {
      claimRecord: isSet(object.claimRecord) ? ClaimRecord.fromJSON(object.claimRecord) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimRecordResponse>): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimRecordResponseAmino): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    if (object.claim_record !== undefined && object.claim_record !== null) {
      message.claimRecord = ClaimRecord.fromAmino(object.claim_record);
    }
    return message;
  },
  toAmino(message: QueryClaimRecordResponse): QueryClaimRecordResponseAmino {
    const obj: any = {};
    obj.claim_record = message.claimRecord ? ClaimRecord.toAmino(message.claimRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRecordResponseAminoMsg): QueryClaimRecordResponse {
    return QueryClaimRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRecordResponseProtoMsg): QueryClaimRecordResponse {
    return QueryClaimRecordResponse.decode(message.value);
  },
  toProto(message: QueryClaimRecordResponse): Uint8Array {
    return QueryClaimRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordResponse): QueryClaimRecordResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordResponse",
      value: QueryClaimRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordsRequest(): QueryClaimRecordsRequest {
  return {
    chainId: "",
    pagination: undefined
  };
}
export const QueryClaimRecordsRequest = {
  typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest",
  encode(message: QueryClaimRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimRecordsRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimRecordsRequest>): QueryClaimRecordsRequest {
    const message = createBaseQueryClaimRecordsRequest();
    message.chainId = object.chainId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimRecordsRequestAmino): QueryClaimRecordsRequest {
    const message = createBaseQueryClaimRecordsRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClaimRecordsRequest): QueryClaimRecordsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRecordsRequestAminoMsg): QueryClaimRecordsRequest {
    return QueryClaimRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRecordsRequestProtoMsg): QueryClaimRecordsRequest {
    return QueryClaimRecordsRequest.decode(message.value);
  },
  toProto(message: QueryClaimRecordsRequest): Uint8Array {
    return QueryClaimRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordsRequest): QueryClaimRecordsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest",
      value: QueryClaimRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordsResponse(): QueryClaimRecordsResponse {
  return {
    claimRecords: [],
    pagination: undefined
  };
}
export const QueryClaimRecordsResponse = {
  typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse",
  encode(message: QueryClaimRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claimRecords) {
      ClaimRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimRecordsResponse {
    return {
      claimRecords: Array.isArray(object?.claimRecords) ? object.claimRecords.map((e: any) => ClaimRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimRecordsResponse>): QueryClaimRecordsResponse {
    const message = createBaseQueryClaimRecordsResponse();
    message.claimRecords = object.claimRecords?.map(e => ClaimRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimRecordsResponseAmino): QueryClaimRecordsResponse {
    const message = createBaseQueryClaimRecordsResponse();
    message.claimRecords = object.claim_records?.map(e => ClaimRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClaimRecordsResponse): QueryClaimRecordsResponseAmino {
    const obj: any = {};
    if (message.claimRecords) {
      obj.claim_records = message.claimRecords.map(e => e ? ClaimRecord.toAmino(e) : undefined);
    } else {
      obj.claim_records = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRecordsResponseAminoMsg): QueryClaimRecordsResponse {
    return QueryClaimRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRecordsResponseProtoMsg): QueryClaimRecordsResponse {
    return QueryClaimRecordsResponse.decode(message.value);
  },
  toProto(message: QueryClaimRecordsResponse): Uint8Array {
    return QueryClaimRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordsResponse): QueryClaimRecordsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse",
      value: QueryClaimRecordsResponse.encode(message).finish()
    };
  }
};