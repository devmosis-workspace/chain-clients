import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, ModuleAccount, ModuleAccountAmino, ModuleAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { Deposit, DepositAmino, DepositSDKType, TotalPrincipal, TotalPrincipalAmino, TotalPrincipalSDKType, TotalCollateral, TotalCollateralAmino, TotalCollateralSDKType } from "./cdp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kava.cdp.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export interface QueryAccountsRequest {
}
export interface QueryAccountsRequestProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.QueryAccountsRequest";
    value: Uint8Array;
}
/** QueryAccountsRequest defines the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequestAmino {
}
export interface QueryAccountsRequestAminoMsg {
    type: "/kava.cdp.v1beta1.QueryAccountsRequest";
    value: QueryAccountsRequestAmino;
}
/** QueryAccountsRequest defines the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequestSDKType {
}
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
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryAccountsRequest: {
    typeUrl: string;
    encode(_: QueryAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAccountsRequest;
    fromPartial(_: Partial<QueryAccountsRequest>): QueryAccountsRequest;
    fromAmino(_: QueryAccountsRequestAmino): QueryAccountsRequest;
    toAmino(_: QueryAccountsRequest): QueryAccountsRequestAmino;
    fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest;
    fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest;
    toProto(message: QueryAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg;
};
export declare const QueryAccountsResponse: {
    typeUrl: string;
    encode(message: QueryAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountsResponse;
    fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse;
    fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse;
    toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino;
    fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse;
    fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse;
    toProto(message: QueryAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg;
};
export declare const QueryCdpRequest: {
    typeUrl: string;
    encode(message: QueryCdpRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCdpRequest;
    fromPartial(object: Partial<QueryCdpRequest>): QueryCdpRequest;
    fromAmino(object: QueryCdpRequestAmino): QueryCdpRequest;
    toAmino(message: QueryCdpRequest): QueryCdpRequestAmino;
    fromAminoMsg(object: QueryCdpRequestAminoMsg): QueryCdpRequest;
    fromProtoMsg(message: QueryCdpRequestProtoMsg): QueryCdpRequest;
    toProto(message: QueryCdpRequest): Uint8Array;
    toProtoMsg(message: QueryCdpRequest): QueryCdpRequestProtoMsg;
};
export declare const QueryCdpResponse: {
    typeUrl: string;
    encode(message: QueryCdpResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCdpResponse;
    fromPartial(object: Partial<QueryCdpResponse>): QueryCdpResponse;
    fromAmino(object: QueryCdpResponseAmino): QueryCdpResponse;
    toAmino(message: QueryCdpResponse): QueryCdpResponseAmino;
    fromAminoMsg(object: QueryCdpResponseAminoMsg): QueryCdpResponse;
    fromProtoMsg(message: QueryCdpResponseProtoMsg): QueryCdpResponse;
    toProto(message: QueryCdpResponse): Uint8Array;
    toProtoMsg(message: QueryCdpResponse): QueryCdpResponseProtoMsg;
};
export declare const QueryCdpsRequest: {
    typeUrl: string;
    encode(message: QueryCdpsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCdpsRequest;
    fromPartial(object: Partial<QueryCdpsRequest>): QueryCdpsRequest;
    fromAmino(object: QueryCdpsRequestAmino): QueryCdpsRequest;
    toAmino(message: QueryCdpsRequest): QueryCdpsRequestAmino;
    fromAminoMsg(object: QueryCdpsRequestAminoMsg): QueryCdpsRequest;
    fromProtoMsg(message: QueryCdpsRequestProtoMsg): QueryCdpsRequest;
    toProto(message: QueryCdpsRequest): Uint8Array;
    toProtoMsg(message: QueryCdpsRequest): QueryCdpsRequestProtoMsg;
};
export declare const QueryCdpsResponse: {
    typeUrl: string;
    encode(message: QueryCdpsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCdpsResponse;
    fromPartial(object: Partial<QueryCdpsResponse>): QueryCdpsResponse;
    fromAmino(object: QueryCdpsResponseAmino): QueryCdpsResponse;
    toAmino(message: QueryCdpsResponse): QueryCdpsResponseAmino;
    fromAminoMsg(object: QueryCdpsResponseAminoMsg): QueryCdpsResponse;
    fromProtoMsg(message: QueryCdpsResponseProtoMsg): QueryCdpsResponse;
    toProto(message: QueryCdpsResponse): Uint8Array;
    toProtoMsg(message: QueryCdpsResponse): QueryCdpsResponseProtoMsg;
};
export declare const QueryDepositsRequest: {
    typeUrl: string;
    encode(message: QueryDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDepositsRequest;
    fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest;
    fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest;
    toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino;
    fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest;
    fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest;
    toProto(message: QueryDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg;
};
export declare const QueryDepositsResponse: {
    typeUrl: string;
    encode(message: QueryDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDepositsResponse;
    fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse;
    fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse;
    toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino;
    fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse;
    fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse;
    toProto(message: QueryDepositsResponse): Uint8Array;
    toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg;
};
export declare const QueryTotalPrincipalRequest: {
    typeUrl: string;
    encode(message: QueryTotalPrincipalRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalPrincipalRequest;
    fromPartial(object: Partial<QueryTotalPrincipalRequest>): QueryTotalPrincipalRequest;
    fromAmino(object: QueryTotalPrincipalRequestAmino): QueryTotalPrincipalRequest;
    toAmino(message: QueryTotalPrincipalRequest): QueryTotalPrincipalRequestAmino;
    fromAminoMsg(object: QueryTotalPrincipalRequestAminoMsg): QueryTotalPrincipalRequest;
    fromProtoMsg(message: QueryTotalPrincipalRequestProtoMsg): QueryTotalPrincipalRequest;
    toProto(message: QueryTotalPrincipalRequest): Uint8Array;
    toProtoMsg(message: QueryTotalPrincipalRequest): QueryTotalPrincipalRequestProtoMsg;
};
export declare const QueryTotalPrincipalResponse: {
    typeUrl: string;
    encode(message: QueryTotalPrincipalResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalPrincipalResponse;
    fromPartial(object: Partial<QueryTotalPrincipalResponse>): QueryTotalPrincipalResponse;
    fromAmino(object: QueryTotalPrincipalResponseAmino): QueryTotalPrincipalResponse;
    toAmino(message: QueryTotalPrincipalResponse): QueryTotalPrincipalResponseAmino;
    fromAminoMsg(object: QueryTotalPrincipalResponseAminoMsg): QueryTotalPrincipalResponse;
    fromProtoMsg(message: QueryTotalPrincipalResponseProtoMsg): QueryTotalPrincipalResponse;
    toProto(message: QueryTotalPrincipalResponse): Uint8Array;
    toProtoMsg(message: QueryTotalPrincipalResponse): QueryTotalPrincipalResponseProtoMsg;
};
export declare const QueryTotalCollateralRequest: {
    typeUrl: string;
    encode(message: QueryTotalCollateralRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalCollateralRequest;
    fromPartial(object: Partial<QueryTotalCollateralRequest>): QueryTotalCollateralRequest;
    fromAmino(object: QueryTotalCollateralRequestAmino): QueryTotalCollateralRequest;
    toAmino(message: QueryTotalCollateralRequest): QueryTotalCollateralRequestAmino;
    fromAminoMsg(object: QueryTotalCollateralRequestAminoMsg): QueryTotalCollateralRequest;
    fromProtoMsg(message: QueryTotalCollateralRequestProtoMsg): QueryTotalCollateralRequest;
    toProto(message: QueryTotalCollateralRequest): Uint8Array;
    toProtoMsg(message: QueryTotalCollateralRequest): QueryTotalCollateralRequestProtoMsg;
};
export declare const QueryTotalCollateralResponse: {
    typeUrl: string;
    encode(message: QueryTotalCollateralResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalCollateralResponse;
    fromPartial(object: Partial<QueryTotalCollateralResponse>): QueryTotalCollateralResponse;
    fromAmino(object: QueryTotalCollateralResponseAmino): QueryTotalCollateralResponse;
    toAmino(message: QueryTotalCollateralResponse): QueryTotalCollateralResponseAmino;
    fromAminoMsg(object: QueryTotalCollateralResponseAminoMsg): QueryTotalCollateralResponse;
    fromProtoMsg(message: QueryTotalCollateralResponseProtoMsg): QueryTotalCollateralResponse;
    toProto(message: QueryTotalCollateralResponse): Uint8Array;
    toProtoMsg(message: QueryTotalCollateralResponse): QueryTotalCollateralResponseProtoMsg;
};
export declare const CDPResponse: {
    typeUrl: string;
    encode(message: CDPResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CDPResponse;
    fromPartial(object: Partial<CDPResponse>): CDPResponse;
    fromAmino(object: CDPResponseAmino): CDPResponse;
    toAmino(message: CDPResponse): CDPResponseAmino;
    fromAminoMsg(object: CDPResponseAminoMsg): CDPResponse;
    fromProtoMsg(message: CDPResponseProtoMsg): CDPResponse;
    toProto(message: CDPResponse): Uint8Array;
    toProtoMsg(message: CDPResponse): CDPResponseProtoMsg;
};
