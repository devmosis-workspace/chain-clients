import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/quasarlabs.quasarnode.qvesting.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/quasarlabs.quasarnode.qvesting.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesRequest {
  /** address is the address to query spendable balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QuerySpendableBalancesRequestProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QuerySpendableBalancesRequest";
  value: Uint8Array;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesRequestAmino {
  /** address is the address to query spendable balances for. */
  address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QuerySpendableBalancesRequestAminoMsg {
  type: "/quasarlabs.quasarnode.qvesting.QuerySpendableBalancesRequest";
  value: QuerySpendableBalancesRequestAmino;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesResponse {
  /** balances is the spendable balances of all the coins. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QuerySpendableBalancesResponseProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QuerySpendableBalancesResponse";
  value: Uint8Array;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesResponseAmino {
  /** balances is the spendable balances of all the coins. */
  balances?: CoinAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QuerySpendableBalancesResponseAminoMsg {
  type: "/quasarlabs.quasarnode.qvesting.QuerySpendableBalancesResponse";
  value: QuerySpendableBalancesResponseAmino;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesResponseSDKType {
  balances: CoinSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryVestingAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryVestingAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryVestingAccountsRequestProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingAccountsRequest";
  value: Uint8Array;
}
/** QueryVestingAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryVestingAccountsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVestingAccountsRequestAminoMsg {
  type: "/quasarlabs.quasarnode.qvesting.QueryVestingAccountsRequest";
  value: QueryVestingAccountsRequestAmino;
}
/** QueryVestingAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryVestingAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryVestingAccountsResponse is the response type for the Query/Accounts RPC method. */
export interface QueryVestingAccountsResponse {
  /** accounts are the existing vesting accounts */
  accounts: (Any)[] | Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVestingAccountsResponseProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingAccountsResponse";
  value: Uint8Array;
}
export type QueryVestingAccountsResponseEncoded = Omit<QueryVestingAccountsResponse, "accounts"> & {
  /** accounts are the existing vesting accounts */accounts: (AnyProtoMsg)[];
};
/** QueryVestingAccountsResponse is the response type for the Query/Accounts RPC method. */
export interface QueryVestingAccountsResponseAmino {
  /** accounts are the existing vesting accounts */
  accounts?: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVestingAccountsResponseAminoMsg {
  type: "/quasarlabs.quasarnode.qvesting.QueryVestingAccountsResponse";
  value: QueryVestingAccountsResponseAmino;
}
/** QueryVestingAccountsResponse is the response type for the Query/Accounts RPC method. */
export interface QueryVestingAccountsResponseSDKType {
  accounts: (AnySDKType)[];
  pagination?: PageResponseSDKType;
}
/** QueryVestingLockedSupplyRequest is the request type for the Query/VestingLockedSupply RPC method. */
export interface QueryVestingLockedSupplyRequest {
  /** denom is the coin denom to query locked supply for. */
  denom: string;
}
export interface QueryVestingLockedSupplyRequestProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingLockedSupplyRequest";
  value: Uint8Array;
}
/** QueryVestingLockedSupplyRequest is the request type for the Query/VestingLockedSupply RPC method. */
export interface QueryVestingLockedSupplyRequestAmino {
  /** denom is the coin denom to query locked supply for. */
  denom?: string;
}
export interface QueryVestingLockedSupplyRequestAminoMsg {
  type: "/quasarlabs.quasarnode.qvesting.QueryVestingLockedSupplyRequest";
  value: QueryVestingLockedSupplyRequestAmino;
}
/** QueryVestingLockedSupplyRequest is the request type for the Query/VestingLockedSupply RPC method. */
export interface QueryVestingLockedSupplyRequestSDKType {
  denom: string;
}
/** QueryVestingAccountsResponse is the response type for the Query/VestingLockedSupply RPC method. */
export interface QueryVestingLockedSupplyResponse {
  /** amount is the supply of the coin. */
  amount: Coin;
}
export interface QueryVestingLockedSupplyResponseProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingLockedSupplyResponse";
  value: Uint8Array;
}
/** QueryVestingAccountsResponse is the response type for the Query/VestingLockedSupply RPC method. */
export interface QueryVestingLockedSupplyResponseAmino {
  /** amount is the supply of the coin. */
  amount?: CoinAmino;
}
export interface QueryVestingLockedSupplyResponseAminoMsg {
  type: "/quasarlabs.quasarnode.qvesting.QueryVestingLockedSupplyResponse";
  value: QueryVestingLockedSupplyResponseAmino;
}
/** QueryVestingAccountsResponse is the response type for the Query/VestingLockedSupply RPC method. */
export interface QueryVestingLockedSupplyResponseSDKType {
  amount: CoinSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryParamsRequest",
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
      typeUrl: "/quasarlabs.quasarnode.qvesting.QueryParamsRequest",
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
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryParamsResponse",
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
      typeUrl: "/quasarlabs.quasarnode.qvesting.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpendableBalancesRequest(): QuerySpendableBalancesRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QuerySpendableBalancesRequest = {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QuerySpendableBalancesRequest",
  encode(message: QuerySpendableBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySpendableBalancesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySpendableBalancesRequest>): QuerySpendableBalancesRequest {
    const message = createBaseQuerySpendableBalancesRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySpendableBalancesRequestAmino): QuerySpendableBalancesRequest {
    const message = createBaseQuerySpendableBalancesRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySpendableBalancesRequestAminoMsg): QuerySpendableBalancesRequest {
    return QuerySpendableBalancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpendableBalancesRequestProtoMsg): QuerySpendableBalancesRequest {
    return QuerySpendableBalancesRequest.decode(message.value);
  },
  toProto(message: QuerySpendableBalancesRequest): Uint8Array {
    return QuerySpendableBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qvesting.QuerySpendableBalancesRequest",
      value: QuerySpendableBalancesRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpendableBalancesResponse(): QuerySpendableBalancesResponse {
  return {
    balances: [],
    pagination: undefined
  };
}
export const QuerySpendableBalancesResponse = {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QuerySpendableBalancesResponse",
  encode(message: QuerySpendableBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySpendableBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QuerySpendableBalancesResponse>): QuerySpendableBalancesResponse {
    const message = createBaseQuerySpendableBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySpendableBalancesResponseAmino): QuerySpendableBalancesResponse {
    const message = createBaseQuerySpendableBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balances = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySpendableBalancesResponseAminoMsg): QuerySpendableBalancesResponse {
    return QuerySpendableBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpendableBalancesResponseProtoMsg): QuerySpendableBalancesResponse {
    return QuerySpendableBalancesResponse.decode(message.value);
  },
  toProto(message: QuerySpendableBalancesResponse): Uint8Array {
    return QuerySpendableBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qvesting.QuerySpendableBalancesResponse",
      value: QuerySpendableBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVestingAccountsRequest(): QueryVestingAccountsRequest {
  return {
    pagination: undefined
  };
}
export const QueryVestingAccountsRequest = {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingAccountsRequest",
  encode(message: QueryVestingAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVestingAccountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryVestingAccountsRequest>): QueryVestingAccountsRequest {
    const message = createBaseQueryVestingAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVestingAccountsRequestAmino): QueryVestingAccountsRequest {
    const message = createBaseQueryVestingAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVestingAccountsRequest): QueryVestingAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVestingAccountsRequestAminoMsg): QueryVestingAccountsRequest {
    return QueryVestingAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVestingAccountsRequestProtoMsg): QueryVestingAccountsRequest {
    return QueryVestingAccountsRequest.decode(message.value);
  },
  toProto(message: QueryVestingAccountsRequest): Uint8Array {
    return QueryVestingAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVestingAccountsRequest): QueryVestingAccountsRequestProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingAccountsRequest",
      value: QueryVestingAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVestingAccountsResponse(): QueryVestingAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}
export const QueryVestingAccountsResponse = {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingAccountsResponse",
  encode(message: QueryVestingAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Any.encode((v! as Any), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVestingAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryVestingAccountsResponse>): QueryVestingAccountsResponse {
    const message = createBaseQueryVestingAccountsResponse();
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVestingAccountsResponseAmino): QueryVestingAccountsResponse {
    const message = createBaseQueryVestingAccountsResponse();
    message.accounts = object.accounts?.map(e => VestingAccount_FromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVestingAccountsResponse): QueryVestingAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? VestingAccount_ToAmino((e as Any)) : undefined);
    } else {
      obj.accounts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVestingAccountsResponseAminoMsg): QueryVestingAccountsResponse {
    return QueryVestingAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVestingAccountsResponseProtoMsg): QueryVestingAccountsResponse {
    return QueryVestingAccountsResponse.decode(message.value);
  },
  toProto(message: QueryVestingAccountsResponse): Uint8Array {
    return QueryVestingAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVestingAccountsResponse): QueryVestingAccountsResponseProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingAccountsResponse",
      value: QueryVestingAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVestingLockedSupplyRequest(): QueryVestingLockedSupplyRequest {
  return {
    denom: ""
  };
}
export const QueryVestingLockedSupplyRequest = {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingLockedSupplyRequest",
  encode(message: QueryVestingLockedSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryVestingLockedSupplyRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryVestingLockedSupplyRequest>): QueryVestingLockedSupplyRequest {
    const message = createBaseQueryVestingLockedSupplyRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryVestingLockedSupplyRequestAmino): QueryVestingLockedSupplyRequest {
    const message = createBaseQueryVestingLockedSupplyRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryVestingLockedSupplyRequest): QueryVestingLockedSupplyRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryVestingLockedSupplyRequestAminoMsg): QueryVestingLockedSupplyRequest {
    return QueryVestingLockedSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVestingLockedSupplyRequestProtoMsg): QueryVestingLockedSupplyRequest {
    return QueryVestingLockedSupplyRequest.decode(message.value);
  },
  toProto(message: QueryVestingLockedSupplyRequest): Uint8Array {
    return QueryVestingLockedSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVestingLockedSupplyRequest): QueryVestingLockedSupplyRequestProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingLockedSupplyRequest",
      value: QueryVestingLockedSupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVestingLockedSupplyResponse(): QueryVestingLockedSupplyResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryVestingLockedSupplyResponse = {
  typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingLockedSupplyResponse",
  encode(message: QueryVestingLockedSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVestingLockedSupplyResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<QueryVestingLockedSupplyResponse>): QueryVestingLockedSupplyResponse {
    const message = createBaseQueryVestingLockedSupplyResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: QueryVestingLockedSupplyResponseAmino): QueryVestingLockedSupplyResponse {
    const message = createBaseQueryVestingLockedSupplyResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QueryVestingLockedSupplyResponse): QueryVestingLockedSupplyResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVestingLockedSupplyResponseAminoMsg): QueryVestingLockedSupplyResponse {
    return QueryVestingLockedSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVestingLockedSupplyResponseProtoMsg): QueryVestingLockedSupplyResponse {
    return QueryVestingLockedSupplyResponse.decode(message.value);
  },
  toProto(message: QueryVestingLockedSupplyResponse): Uint8Array {
    return QueryVestingLockedSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVestingLockedSupplyResponse): QueryVestingLockedSupplyResponseProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qvesting.QueryVestingLockedSupplyResponse",
      value: QueryVestingLockedSupplyResponse.encode(message).finish()
    };
  }
};
export const VestingAccount_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const VestingAccount_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const VestingAccount_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};