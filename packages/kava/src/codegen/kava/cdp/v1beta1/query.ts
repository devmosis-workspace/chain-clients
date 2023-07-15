import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ModuleAccount, ModuleAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { Deposit, DepositSDKType, TotalPrincipal, TotalPrincipalSDKType, TotalCollateral, TotalCollateralSDKType } from "./cdp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params?: Params;
}
/** QueryParamsResponse defines the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryAccountsRequest defines the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {}
/** QueryAccountsRequest defines the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequestSDKType {}
/** QueryAccountsResponse defines the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponse {
  accounts: ModuleAccount[];
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
/** QueryCdpRequest defines the request type for the Query/Cdp RPC method. */
export interface QueryCdpRequestSDKType {
  collateral_type: string;
  owner: string;
}
/** QueryCdpResponse defines the response type for the Query/Cdp RPC method. */
export interface QueryCdpResponse {
  cdp?: CDPResponse;
}
/** QueryCdpResponse defines the response type for the Query/Cdp RPC method. */
export interface QueryCdpResponseSDKType {
  cdp?: CDPResponseSDKType;
}
/** QueryCdpsRequest is the params for a filtered CDP query, the request type for the Query/Cdps RPC method. */
export interface QueryCdpsRequest {
  collateralType: string;
  owner: string;
  id: Long;
  /** sdk.Dec as a string */
  ratio: string;
  pagination?: PageRequest;
}
/** QueryCdpsRequest is the params for a filtered CDP query, the request type for the Query/Cdps RPC method. */
export interface QueryCdpsRequestSDKType {
  collateral_type: string;
  owner: string;
  id: Long;
  ratio: string;
  pagination?: PageRequestSDKType;
}
/** QueryCdpsResponse defines the response type for the Query/Cdps RPC method. */
export interface QueryCdpsResponse {
  cdps: CDPResponse[];
  pagination?: PageResponse;
}
/** QueryCdpsResponse defines the response type for the Query/Cdps RPC method. */
export interface QueryCdpsResponseSDKType {
  cdps: CDPResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryDepositsRequest defines the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  collateralType: string;
  owner: string;
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
/** QueryDepositsResponse defines the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
  deposits: DepositSDKType[];
}
/** QueryTotalPrincipalRequest defines the request type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalRequest {
  collateralType: string;
}
/** QueryTotalPrincipalRequest defines the request type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalRequestSDKType {
  collateral_type: string;
}
/** QueryTotalPrincipalResponse defines the response type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalResponse {
  totalPrincipal: TotalPrincipal[];
}
/** QueryTotalPrincipalResponse defines the response type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalResponseSDKType {
  total_principal: TotalPrincipalSDKType[];
}
/** QueryTotalCollateralRequest defines the request type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralRequest {
  collateralType: string;
}
/** QueryTotalCollateralRequest defines the request type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralRequestSDKType {
  collateral_type: string;
}
/** QueryTotalCollateralResponse defines the response type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralResponse {
  totalCollateral: TotalCollateral[];
}
/** QueryTotalCollateralResponse defines the response type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralResponseSDKType {
  total_collateral: TotalCollateralSDKType[];
}
/** CDPResponse defines the state of a single collateralized debt position. */
export interface CDPResponse {
  id: Long;
  owner: string;
  type: string;
  collateral?: Coin;
  principal?: Coin;
  accumulatedFees?: Coin;
  feesUpdated?: Timestamp;
  interestFactor: string;
  collateralValue?: Coin;
  collateralizationRatio: string;
}
/** CDPResponse defines the state of a single collateralized debt position. */
export interface CDPResponseSDKType {
  id: Long;
  owner: string;
  type: string;
  collateral?: CoinSDKType;
  principal?: CoinSDKType;
  accumulated_fees?: CoinSDKType;
  fees_updated?: TimestampSDKType;
  interest_factor: string;
  collateral_value?: CoinSDKType;
  collateralization_ratio: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {};
}
export const QueryAccountsRequest = {
  encode(_: QueryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAccountsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    return message;
  }
};
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryAccountsResponse = {
  encode(message: QueryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryCdpRequest(): QueryCdpRequest {
  return {
    collateralType: "",
    owner: ""
  };
}
export const QueryCdpRequest = {
  encode(message: QueryCdpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryCdpResponse(): QueryCdpResponse {
  return {
    cdp: undefined
  };
}
export const QueryCdpResponse = {
  encode(message: QueryCdpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryCdpsRequest(): QueryCdpsRequest {
  return {
    collateralType: "",
    owner: "",
    id: Long.UZERO,
    ratio: "",
    pagination: undefined
  };
}
export const QueryCdpsRequest = {
  encode(message: QueryCdpsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (!message.id.isZero()) {
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      ratio: isSet(object.ratio) ? String(object.ratio) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryCdpsRequest>): QueryCdpsRequest {
    const message = createBaseQueryCdpsRequest();
    message.collateralType = object.collateralType ?? "";
    message.owner = object.owner ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.ratio = object.ratio ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCdpsResponse(): QueryCdpsResponse {
  return {
    cdps: [],
    pagination: undefined
  };
}
export const QueryCdpsResponse = {
  encode(message: QueryCdpsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    collateralType: "",
    owner: ""
  };
}
export const QueryDepositsRequest = {
  encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: []
  };
}
export const QueryDepositsResponse = {
  encode(message: QueryDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryTotalPrincipalRequest(): QueryTotalPrincipalRequest {
  return {
    collateralType: ""
  };
}
export const QueryTotalPrincipalRequest = {
  encode(message: QueryTotalPrincipalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryTotalPrincipalResponse(): QueryTotalPrincipalResponse {
  return {
    totalPrincipal: []
  };
}
export const QueryTotalPrincipalResponse = {
  encode(message: QueryTotalPrincipalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryTotalCollateralRequest(): QueryTotalCollateralRequest {
  return {
    collateralType: ""
  };
}
export const QueryTotalCollateralRequest = {
  encode(message: QueryTotalCollateralRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryTotalCollateralResponse(): QueryTotalCollateralResponse {
  return {
    totalCollateral: []
  };
}
export const QueryTotalCollateralResponse = {
  encode(message: QueryTotalCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseCDPResponse(): CDPResponse {
  return {
    id: Long.UZERO,
    owner: "",
    type: "",
    collateral: undefined,
    principal: undefined,
    accumulatedFees: undefined,
    feesUpdated: undefined,
    interestFactor: "",
    collateralValue: undefined,
    collateralizationRatio: ""
  };
}
export const CDPResponse = {
  encode(message: CDPResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
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
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
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
  }
};