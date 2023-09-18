import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, ModuleAccount, ModuleAccountAmino, ModuleAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { Deposit, DepositAmino, DepositSDKType, TotalPrincipal, TotalPrincipalAmino, TotalPrincipalSDKType, TotalCollateral, TotalCollateralAmino, TotalCollateralSDKType } from "./cdp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kava.cdp.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kava.cdp.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryAccountsRequest defines the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {}
export interface QueryAccountsRequestProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryAccountsRequest";
  value: Uint8Array;
}
/** QueryAccountsRequest defines the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequestAmino {}
export interface QueryAccountsRequestAminoMsg {
  type: "/kava.cdp.v1beta1.QueryAccountsRequest";
  value: QueryAccountsRequestAmino;
}
/** QueryAccountsRequest defines the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequestSDKType {}
/** QueryAccountsResponse defines the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponse {
  accounts: ModuleAccount[];
}
export interface QueryAccountsResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryAccountsResponse";
  value: Uint8Array;
}
/** QueryAccountsResponse defines the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponseAmino {
  accounts: ModuleAccountAmino[];
}
export interface QueryAccountsResponseAminoMsg {
  type: "/kava.cdp.v1beta1.QueryAccountsResponse";
  value: QueryAccountsResponseAmino;
}
/** QueryAccountsResponse defines the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponseSDKType {
  accounts: ModuleAccountSDKType[];
}
/** QueryCdpRequest defines the request type for the Query/Cdp RPC method. */
export interface QueryCdpRequest {
  collateralType: string;
  owner: string;
}
export interface QueryCdpRequestProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryCdpRequest";
  value: Uint8Array;
}
/** QueryCdpRequest defines the request type for the Query/Cdp RPC method. */
export interface QueryCdpRequestAmino {
  collateral_type: string;
  owner: string;
}
export interface QueryCdpRequestAminoMsg {
  type: "/kava.cdp.v1beta1.QueryCdpRequest";
  value: QueryCdpRequestAmino;
}
/** QueryCdpRequest defines the request type for the Query/Cdp RPC method. */
export interface QueryCdpRequestSDKType {
  collateral_type: string;
  owner: string;
}
/** QueryCdpResponse defines the response type for the Query/Cdp RPC method. */
export interface QueryCdpResponse {
  cdp: CDPResponse;
}
export interface QueryCdpResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryCdpResponse";
  value: Uint8Array;
}
/** QueryCdpResponse defines the response type for the Query/Cdp RPC method. */
export interface QueryCdpResponseAmino {
  cdp?: CDPResponseAmino;
}
export interface QueryCdpResponseAminoMsg {
  type: "/kava.cdp.v1beta1.QueryCdpResponse";
  value: QueryCdpResponseAmino;
}
/** QueryCdpResponse defines the response type for the Query/Cdp RPC method. */
export interface QueryCdpResponseSDKType {
  cdp: CDPResponseSDKType;
}
/** QueryCdpsRequest is the params for a filtered CDP query, the request type for the Query/Cdps RPC method. */
export interface QueryCdpsRequest {
  collateralType: string;
  owner: string;
  id: bigint;
  /** sdk.Dec as a string */
  ratio: string;
  pagination: PageRequest;
}
export interface QueryCdpsRequestProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryCdpsRequest";
  value: Uint8Array;
}
/** QueryCdpsRequest is the params for a filtered CDP query, the request type for the Query/Cdps RPC method. */
export interface QueryCdpsRequestAmino {
  collateral_type: string;
  owner: string;
  id: string;
  /** sdk.Dec as a string */
  ratio: string;
  pagination?: PageRequestAmino;
}
export interface QueryCdpsRequestAminoMsg {
  type: "/kava.cdp.v1beta1.QueryCdpsRequest";
  value: QueryCdpsRequestAmino;
}
/** QueryCdpsRequest is the params for a filtered CDP query, the request type for the Query/Cdps RPC method. */
export interface QueryCdpsRequestSDKType {
  collateral_type: string;
  owner: string;
  id: bigint;
  ratio: string;
  pagination: PageRequestSDKType;
}
/** QueryCdpsResponse defines the response type for the Query/Cdps RPC method. */
export interface QueryCdpsResponse {
  cdps: CDPResponse[];
  pagination: PageResponse;
}
export interface QueryCdpsResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryCdpsResponse";
  value: Uint8Array;
}
/** QueryCdpsResponse defines the response type for the Query/Cdps RPC method. */
export interface QueryCdpsResponseAmino {
  cdps: CDPResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryCdpsResponseAminoMsg {
  type: "/kava.cdp.v1beta1.QueryCdpsResponse";
  value: QueryCdpsResponseAmino;
}
/** QueryCdpsResponse defines the response type for the Query/Cdps RPC method. */
export interface QueryCdpsResponseSDKType {
  cdps: CDPResponseSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryDepositsRequest defines the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  collateralType: string;
  owner: string;
}
export interface QueryDepositsRequestProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryDepositsRequest";
  value: Uint8Array;
}
/** QueryDepositsRequest defines the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
  collateral_type: string;
  owner: string;
}
export interface QueryDepositsRequestAminoMsg {
  type: "/kava.cdp.v1beta1.QueryDepositsRequest";
  value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest defines the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
  collateral_type: string;
  owner: string;
}
/** QueryDepositsResponse defines the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  deposits: Deposit[];
}
export interface QueryDepositsResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryDepositsResponse";
  value: Uint8Array;
}
/** QueryDepositsResponse defines the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
  deposits: DepositAmino[];
}
export interface QueryDepositsResponseAminoMsg {
  type: "/kava.cdp.v1beta1.QueryDepositsResponse";
  value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse defines the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
  deposits: DepositSDKType[];
}
/** QueryTotalPrincipalRequest defines the request type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalRequest {
  collateralType: string;
}
export interface QueryTotalPrincipalRequestProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryTotalPrincipalRequest";
  value: Uint8Array;
}
/** QueryTotalPrincipalRequest defines the request type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalRequestAmino {
  collateral_type: string;
}
export interface QueryTotalPrincipalRequestAminoMsg {
  type: "/kava.cdp.v1beta1.QueryTotalPrincipalRequest";
  value: QueryTotalPrincipalRequestAmino;
}
/** QueryTotalPrincipalRequest defines the request type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalRequestSDKType {
  collateral_type: string;
}
/** QueryTotalPrincipalResponse defines the response type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalResponse {
  totalPrincipal: TotalPrincipal[];
}
export interface QueryTotalPrincipalResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryTotalPrincipalResponse";
  value: Uint8Array;
}
/** QueryTotalPrincipalResponse defines the response type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalResponseAmino {
  total_principal: TotalPrincipalAmino[];
}
export interface QueryTotalPrincipalResponseAminoMsg {
  type: "/kava.cdp.v1beta1.QueryTotalPrincipalResponse";
  value: QueryTotalPrincipalResponseAmino;
}
/** QueryTotalPrincipalResponse defines the response type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalResponseSDKType {
  total_principal: TotalPrincipalSDKType[];
}
/** QueryTotalCollateralRequest defines the request type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralRequest {
  collateralType: string;
}
export interface QueryTotalCollateralRequestProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryTotalCollateralRequest";
  value: Uint8Array;
}
/** QueryTotalCollateralRequest defines the request type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralRequestAmino {
  collateral_type: string;
}
export interface QueryTotalCollateralRequestAminoMsg {
  type: "/kava.cdp.v1beta1.QueryTotalCollateralRequest";
  value: QueryTotalCollateralRequestAmino;
}
/** QueryTotalCollateralRequest defines the request type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralRequestSDKType {
  collateral_type: string;
}
/** QueryTotalCollateralResponse defines the response type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralResponse {
  totalCollateral: TotalCollateral[];
}
export interface QueryTotalCollateralResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.QueryTotalCollateralResponse";
  value: Uint8Array;
}
/** QueryTotalCollateralResponse defines the response type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralResponseAmino {
  total_collateral: TotalCollateralAmino[];
}
export interface QueryTotalCollateralResponseAminoMsg {
  type: "/kava.cdp.v1beta1.QueryTotalCollateralResponse";
  value: QueryTotalCollateralResponseAmino;
}
/** QueryTotalCollateralResponse defines the response type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralResponseSDKType {
  total_collateral: TotalCollateralSDKType[];
}
/** CDPResponse defines the state of a single collateralized debt position. */
export interface CDPResponse {
  id: bigint;
  owner: string;
  type: string;
  collateral: Coin;
  principal: Coin;
  accumulatedFees: Coin;
  feesUpdated: Timestamp;
  interestFactor: string;
  collateralValue: Coin;
  collateralizationRatio: string;
}
export interface CDPResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.CDPResponse";
  value: Uint8Array;
}
/** CDPResponse defines the state of a single collateralized debt position. */
export interface CDPResponseAmino {
  id: string;
  owner: string;
  type: string;
  collateral?: CoinAmino;
  principal?: CoinAmino;
  accumulated_fees?: CoinAmino;
  fees_updated?: TimestampAmino;
  interest_factor: string;
  collateral_value?: CoinAmino;
  collateralization_ratio: string;
}
export interface CDPResponseAminoMsg {
  type: "/kava.cdp.v1beta1.CDPResponse";
  value: CDPResponseAmino;
}
/** CDPResponse defines the state of a single collateralized debt position. */
export interface CDPResponseSDKType {
  id: bigint;
  owner: string;
  type: string;
  collateral: CoinSDKType;
  principal: CoinSDKType;
  accumulated_fees: CoinSDKType;
  fees_updated: TimestampSDKType;
  interest_factor: string;
  collateral_value: CoinSDKType;
  collateralization_ratio: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kava.cdp.v1beta1.QueryParamsRequest",
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
      typeUrl: "/kava.cdp.v1beta1.QueryParamsRequest",
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
  typeUrl: "/kava.cdp.v1beta1.QueryParamsResponse",
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
      typeUrl: "/kava.cdp.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {};
}
export const QueryAccountsRequest = {
  typeUrl: "/kava.cdp.v1beta1.QueryAccountsRequest",
  encode(_: QueryAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAccountsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    return message;
  },
  fromAmino(_: QueryAccountsRequestAmino): QueryAccountsRequest {
    return {};
  },
  toAmino(_: QueryAccountsRequest): QueryAccountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.decode(message.value);
  },
  toProto(message: QueryAccountsRequest): Uint8Array {
    return QueryAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryAccountsRequest",
      value: QueryAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryAccountsResponse = {
  typeUrl: "/kava.cdp.v1beta1.QueryAccountsResponse",
  encode(message: QueryAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      ModuleAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => ModuleAccount.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => ModuleAccount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => ModuleAccount.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? ModuleAccount.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.decode(message.value);
  },
  toProto(message: QueryAccountsResponse): Uint8Array {
    return QueryAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryAccountsResponse",
      value: QueryAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCdpRequest(): QueryCdpRequest {
  return {
    collateralType: "",
    owner: ""
  };
}
export const QueryCdpRequest = {
  typeUrl: "/kava.cdp.v1beta1.QueryCdpRequest",
  encode(message: QueryCdpRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): QueryCdpRequest {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<QueryCdpRequest>): QueryCdpRequest {
    const message = createBaseQueryCdpRequest();
    message.collateralType = object.collateralType ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryCdpRequestAmino): QueryCdpRequest {
    return {
      collateralType: object.collateral_type,
      owner: object.owner
    };
  },
  toAmino(message: QueryCdpRequest): QueryCdpRequestAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryCdpRequestAminoMsg): QueryCdpRequest {
    return QueryCdpRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCdpRequestProtoMsg): QueryCdpRequest {
    return QueryCdpRequest.decode(message.value);
  },
  toProto(message: QueryCdpRequest): Uint8Array {
    return QueryCdpRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCdpRequest): QueryCdpRequestProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryCdpRequest",
      value: QueryCdpRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCdpResponse(): QueryCdpResponse {
  return {
    cdp: CDPResponse.fromPartial({})
  };
}
export const QueryCdpResponse = {
  typeUrl: "/kava.cdp.v1beta1.QueryCdpResponse",
  encode(message: QueryCdpResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cdp !== undefined) {
      CDPResponse.encode(message.cdp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCdpResponse {
    return {
      cdp: isSet(object.cdp) ? CDPResponse.fromJSON(object.cdp) : undefined
    };
  },
  fromPartial(object: Partial<QueryCdpResponse>): QueryCdpResponse {
    const message = createBaseQueryCdpResponse();
    message.cdp = object.cdp !== undefined && object.cdp !== null ? CDPResponse.fromPartial(object.cdp) : undefined;
    return message;
  },
  fromAmino(object: QueryCdpResponseAmino): QueryCdpResponse {
    return {
      cdp: object?.cdp ? CDPResponse.fromAmino(object.cdp) : undefined
    };
  },
  toAmino(message: QueryCdpResponse): QueryCdpResponseAmino {
    const obj: any = {};
    obj.cdp = message.cdp ? CDPResponse.toAmino(message.cdp) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCdpResponseAminoMsg): QueryCdpResponse {
    return QueryCdpResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCdpResponseProtoMsg): QueryCdpResponse {
    return QueryCdpResponse.decode(message.value);
  },
  toProto(message: QueryCdpResponse): Uint8Array {
    return QueryCdpResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCdpResponse): QueryCdpResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryCdpResponse",
      value: QueryCdpResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCdpsRequest(): QueryCdpsRequest {
  return {
    collateralType: "",
    owner: "",
    id: BigInt(0),
    ratio: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryCdpsRequest = {
  typeUrl: "/kava.cdp.v1beta1.QueryCdpsRequest",
  encode(message: QueryCdpsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.ratio !== "") {
      writer.uint32(34).string(message.ratio);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCdpsRequest {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      ratio: isSet(object.ratio) ? String(object.ratio) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryCdpsRequest>): QueryCdpsRequest {
    const message = createBaseQueryCdpsRequest();
    message.collateralType = object.collateralType ?? "";
    message.owner = object.owner ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.ratio = object.ratio ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCdpsRequestAmino): QueryCdpsRequest {
    return {
      collateralType: object.collateral_type,
      owner: object.owner,
      id: BigInt(object.id),
      ratio: object.ratio,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryCdpsRequest): QueryCdpsRequestAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    obj.owner = message.owner;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.ratio = message.ratio;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCdpsRequestAminoMsg): QueryCdpsRequest {
    return QueryCdpsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCdpsRequestProtoMsg): QueryCdpsRequest {
    return QueryCdpsRequest.decode(message.value);
  },
  toProto(message: QueryCdpsRequest): Uint8Array {
    return QueryCdpsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCdpsRequest): QueryCdpsRequestProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryCdpsRequest",
      value: QueryCdpsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCdpsResponse(): QueryCdpsResponse {
  return {
    cdps: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryCdpsResponse = {
  typeUrl: "/kava.cdp.v1beta1.QueryCdpsResponse",
  encode(message: QueryCdpsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cdps) {
      CDPResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCdpsResponse {
    return {
      cdps: Array.isArray(object?.cdps) ? object.cdps.map((e: any) => CDPResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryCdpsResponse>): QueryCdpsResponse {
    const message = createBaseQueryCdpsResponse();
    message.cdps = object.cdps?.map(e => CDPResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCdpsResponseAmino): QueryCdpsResponse {
    return {
      cdps: Array.isArray(object?.cdps) ? object.cdps.map((e: any) => CDPResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryCdpsResponse): QueryCdpsResponseAmino {
    const obj: any = {};
    if (message.cdps) {
      obj.cdps = message.cdps.map(e => e ? CDPResponse.toAmino(e) : undefined);
    } else {
      obj.cdps = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCdpsResponseAminoMsg): QueryCdpsResponse {
    return QueryCdpsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCdpsResponseProtoMsg): QueryCdpsResponse {
    return QueryCdpsResponse.decode(message.value);
  },
  toProto(message: QueryCdpsResponse): Uint8Array {
    return QueryCdpsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCdpsResponse): QueryCdpsResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryCdpsResponse",
      value: QueryCdpsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    collateralType: "",
    owner: ""
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/kava.cdp.v1beta1.QueryDepositsRequest",
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositsRequest {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.collateralType = object.collateralType ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    return {
      collateralType: object.collateral_type,
      owner: object.owner
    };
  },
  toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message: QueryDepositsRequest): Uint8Array {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: []
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/kava.cdp.v1beta1.QueryDepositsResponse",
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message: QueryDepositsResponse): Uint8Array {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalPrincipalRequest(): QueryTotalPrincipalRequest {
  return {
    collateralType: ""
  };
}
export const QueryTotalPrincipalRequest = {
  typeUrl: "/kava.cdp.v1beta1.QueryTotalPrincipalRequest",
  encode(message: QueryTotalPrincipalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalPrincipalRequest {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : ""
    };
  },
  fromPartial(object: Partial<QueryTotalPrincipalRequest>): QueryTotalPrincipalRequest {
    const message = createBaseQueryTotalPrincipalRequest();
    message.collateralType = object.collateralType ?? "";
    return message;
  },
  fromAmino(object: QueryTotalPrincipalRequestAmino): QueryTotalPrincipalRequest {
    return {
      collateralType: object.collateral_type
    };
  },
  toAmino(message: QueryTotalPrincipalRequest): QueryTotalPrincipalRequestAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    return obj;
  },
  fromAminoMsg(object: QueryTotalPrincipalRequestAminoMsg): QueryTotalPrincipalRequest {
    return QueryTotalPrincipalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalPrincipalRequestProtoMsg): QueryTotalPrincipalRequest {
    return QueryTotalPrincipalRequest.decode(message.value);
  },
  toProto(message: QueryTotalPrincipalRequest): Uint8Array {
    return QueryTotalPrincipalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPrincipalRequest): QueryTotalPrincipalRequestProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryTotalPrincipalRequest",
      value: QueryTotalPrincipalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalPrincipalResponse(): QueryTotalPrincipalResponse {
  return {
    totalPrincipal: []
  };
}
export const QueryTotalPrincipalResponse = {
  typeUrl: "/kava.cdp.v1beta1.QueryTotalPrincipalResponse",
  encode(message: QueryTotalPrincipalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.totalPrincipal) {
      TotalPrincipal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalPrincipalResponse {
    return {
      totalPrincipal: Array.isArray(object?.totalPrincipal) ? object.totalPrincipal.map((e: any) => TotalPrincipal.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalPrincipalResponse>): QueryTotalPrincipalResponse {
    const message = createBaseQueryTotalPrincipalResponse();
    message.totalPrincipal = object.totalPrincipal?.map(e => TotalPrincipal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalPrincipalResponseAmino): QueryTotalPrincipalResponse {
    return {
      totalPrincipal: Array.isArray(object?.total_principal) ? object.total_principal.map((e: any) => TotalPrincipal.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalPrincipalResponse): QueryTotalPrincipalResponseAmino {
    const obj: any = {};
    if (message.totalPrincipal) {
      obj.total_principal = message.totalPrincipal.map(e => e ? TotalPrincipal.toAmino(e) : undefined);
    } else {
      obj.total_principal = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalPrincipalResponseAminoMsg): QueryTotalPrincipalResponse {
    return QueryTotalPrincipalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalPrincipalResponseProtoMsg): QueryTotalPrincipalResponse {
    return QueryTotalPrincipalResponse.decode(message.value);
  },
  toProto(message: QueryTotalPrincipalResponse): Uint8Array {
    return QueryTotalPrincipalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPrincipalResponse): QueryTotalPrincipalResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryTotalPrincipalResponse",
      value: QueryTotalPrincipalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalCollateralRequest(): QueryTotalCollateralRequest {
  return {
    collateralType: ""
  };
}
export const QueryTotalCollateralRequest = {
  typeUrl: "/kava.cdp.v1beta1.QueryTotalCollateralRequest",
  encode(message: QueryTotalCollateralRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalCollateralRequest {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : ""
    };
  },
  fromPartial(object: Partial<QueryTotalCollateralRequest>): QueryTotalCollateralRequest {
    const message = createBaseQueryTotalCollateralRequest();
    message.collateralType = object.collateralType ?? "";
    return message;
  },
  fromAmino(object: QueryTotalCollateralRequestAmino): QueryTotalCollateralRequest {
    return {
      collateralType: object.collateral_type
    };
  },
  toAmino(message: QueryTotalCollateralRequest): QueryTotalCollateralRequestAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    return obj;
  },
  fromAminoMsg(object: QueryTotalCollateralRequestAminoMsg): QueryTotalCollateralRequest {
    return QueryTotalCollateralRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalCollateralRequestProtoMsg): QueryTotalCollateralRequest {
    return QueryTotalCollateralRequest.decode(message.value);
  },
  toProto(message: QueryTotalCollateralRequest): Uint8Array {
    return QueryTotalCollateralRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalCollateralRequest): QueryTotalCollateralRequestProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryTotalCollateralRequest",
      value: QueryTotalCollateralRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalCollateralResponse(): QueryTotalCollateralResponse {
  return {
    totalCollateral: []
  };
}
export const QueryTotalCollateralResponse = {
  typeUrl: "/kava.cdp.v1beta1.QueryTotalCollateralResponse",
  encode(message: QueryTotalCollateralResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.totalCollateral) {
      TotalCollateral.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalCollateralResponse {
    return {
      totalCollateral: Array.isArray(object?.totalCollateral) ? object.totalCollateral.map((e: any) => TotalCollateral.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalCollateralResponse>): QueryTotalCollateralResponse {
    const message = createBaseQueryTotalCollateralResponse();
    message.totalCollateral = object.totalCollateral?.map(e => TotalCollateral.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalCollateralResponseAmino): QueryTotalCollateralResponse {
    return {
      totalCollateral: Array.isArray(object?.total_collateral) ? object.total_collateral.map((e: any) => TotalCollateral.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalCollateralResponse): QueryTotalCollateralResponseAmino {
    const obj: any = {};
    if (message.totalCollateral) {
      obj.total_collateral = message.totalCollateral.map(e => e ? TotalCollateral.toAmino(e) : undefined);
    } else {
      obj.total_collateral = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalCollateralResponseAminoMsg): QueryTotalCollateralResponse {
    return QueryTotalCollateralResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalCollateralResponseProtoMsg): QueryTotalCollateralResponse {
    return QueryTotalCollateralResponse.decode(message.value);
  },
  toProto(message: QueryTotalCollateralResponse): Uint8Array {
    return QueryTotalCollateralResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalCollateralResponse): QueryTotalCollateralResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.QueryTotalCollateralResponse",
      value: QueryTotalCollateralResponse.encode(message).finish()
    };
  }
};
function createBaseCDPResponse(): CDPResponse {
  return {
    id: BigInt(0),
    owner: "",
    type: "",
    collateral: Coin.fromPartial({}),
    principal: Coin.fromPartial({}),
    accumulatedFees: Coin.fromPartial({}),
    feesUpdated: Timestamp.fromPartial({}),
    interestFactor: "",
    collateralValue: Coin.fromPartial({}),
    collateralizationRatio: ""
  };
}
export const CDPResponse = {
  typeUrl: "/kava.cdp.v1beta1.CDPResponse",
  encode(message: CDPResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.principal !== undefined) {
      Coin.encode(message.principal, writer.uint32(42).fork()).ldelim();
    }
    if (message.accumulatedFees !== undefined) {
      Coin.encode(message.accumulatedFees, writer.uint32(50).fork()).ldelim();
    }
    if (message.feesUpdated !== undefined) {
      Timestamp.encode(message.feesUpdated, writer.uint32(58).fork()).ldelim();
    }
    if (message.interestFactor !== "") {
      writer.uint32(66).string(message.interestFactor);
    }
    if (message.collateralValue !== undefined) {
      Coin.encode(message.collateralValue, writer.uint32(74).fork()).ldelim();
    }
    if (message.collateralizationRatio !== "") {
      writer.uint32(82).string(message.collateralizationRatio);
    }
    return writer;
  },
  fromJSON(object: any): CDPResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      type: isSet(object.type) ? String(object.type) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      principal: isSet(object.principal) ? Coin.fromJSON(object.principal) : undefined,
      accumulatedFees: isSet(object.accumulatedFees) ? Coin.fromJSON(object.accumulatedFees) : undefined,
      feesUpdated: isSet(object.feesUpdated) ? fromJsonTimestamp(object.feesUpdated) : undefined,
      interestFactor: isSet(object.interestFactor) ? String(object.interestFactor) : "",
      collateralValue: isSet(object.collateralValue) ? Coin.fromJSON(object.collateralValue) : undefined,
      collateralizationRatio: isSet(object.collateralizationRatio) ? String(object.collateralizationRatio) : ""
    };
  },
  fromPartial(object: Partial<CDPResponse>): CDPResponse {
    const message = createBaseCDPResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.type = object.type ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.principal = object.principal !== undefined && object.principal !== null ? Coin.fromPartial(object.principal) : undefined;
    message.accumulatedFees = object.accumulatedFees !== undefined && object.accumulatedFees !== null ? Coin.fromPartial(object.accumulatedFees) : undefined;
    message.feesUpdated = object.feesUpdated !== undefined && object.feesUpdated !== null ? Timestamp.fromPartial(object.feesUpdated) : undefined;
    message.interestFactor = object.interestFactor ?? "";
    message.collateralValue = object.collateralValue !== undefined && object.collateralValue !== null ? Coin.fromPartial(object.collateralValue) : undefined;
    message.collateralizationRatio = object.collateralizationRatio ?? "";
    return message;
  },
  fromAmino(object: CDPResponseAmino): CDPResponse {
    return {
      id: BigInt(object.id),
      owner: object.owner,
      type: object.type,
      collateral: object?.collateral ? Coin.fromAmino(object.collateral) : undefined,
      principal: object?.principal ? Coin.fromAmino(object.principal) : undefined,
      accumulatedFees: object?.accumulated_fees ? Coin.fromAmino(object.accumulated_fees) : undefined,
      feesUpdated: object.fees_updated,
      interestFactor: object.interest_factor,
      collateralValue: object?.collateral_value ? Coin.fromAmino(object.collateral_value) : undefined,
      collateralizationRatio: object.collateralization_ratio
    };
  },
  toAmino(message: CDPResponse): CDPResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.owner = message.owner;
    obj.type = message.type;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.principal = message.principal ? Coin.toAmino(message.principal) : undefined;
    obj.accumulated_fees = message.accumulatedFees ? Coin.toAmino(message.accumulatedFees) : undefined;
    obj.fees_updated = message.feesUpdated;
    obj.interest_factor = message.interestFactor;
    obj.collateral_value = message.collateralValue ? Coin.toAmino(message.collateralValue) : undefined;
    obj.collateralization_ratio = message.collateralizationRatio;
    return obj;
  },
  fromAminoMsg(object: CDPResponseAminoMsg): CDPResponse {
    return CDPResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CDPResponseProtoMsg): CDPResponse {
    return CDPResponse.decode(message.value);
  },
  toProto(message: CDPResponse): Uint8Array {
    return CDPResponse.encode(message).finish();
  },
  toProtoMsg(message: CDPResponse): CDPResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.CDPResponse",
      value: CDPResponse.encode(message).finish()
    };
  }
};