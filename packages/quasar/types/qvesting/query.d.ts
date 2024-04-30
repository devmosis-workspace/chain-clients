import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qvesting.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/quasarlabs.quasarnode.qvesting.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
    /** accounts are the existing vesting accounts */ accounts: (AnyProtoMsg)[];
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
export declare const QuerySpendableBalancesRequest: {
    typeUrl: string;
    encode(message: QuerySpendableBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpendableBalancesRequest;
    fromPartial(object: Partial<QuerySpendableBalancesRequest>): QuerySpendableBalancesRequest;
    fromAmino(object: QuerySpendableBalancesRequestAmino): QuerySpendableBalancesRequest;
    toAmino(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestAmino;
    fromAminoMsg(object: QuerySpendableBalancesRequestAminoMsg): QuerySpendableBalancesRequest;
    fromProtoMsg(message: QuerySpendableBalancesRequestProtoMsg): QuerySpendableBalancesRequest;
    toProto(message: QuerySpendableBalancesRequest): Uint8Array;
    toProtoMsg(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestProtoMsg;
};
export declare const QuerySpendableBalancesResponse: {
    typeUrl: string;
    encode(message: QuerySpendableBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpendableBalancesResponse;
    fromPartial(object: Partial<QuerySpendableBalancesResponse>): QuerySpendableBalancesResponse;
    fromAmino(object: QuerySpendableBalancesResponseAmino): QuerySpendableBalancesResponse;
    toAmino(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseAmino;
    fromAminoMsg(object: QuerySpendableBalancesResponseAminoMsg): QuerySpendableBalancesResponse;
    fromProtoMsg(message: QuerySpendableBalancesResponseProtoMsg): QuerySpendableBalancesResponse;
    toProto(message: QuerySpendableBalancesResponse): Uint8Array;
    toProtoMsg(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseProtoMsg;
};
export declare const QueryVestingAccountsRequest: {
    typeUrl: string;
    encode(message: QueryVestingAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVestingAccountsRequest;
    fromPartial(object: Partial<QueryVestingAccountsRequest>): QueryVestingAccountsRequest;
    fromAmino(object: QueryVestingAccountsRequestAmino): QueryVestingAccountsRequest;
    toAmino(message: QueryVestingAccountsRequest): QueryVestingAccountsRequestAmino;
    fromAminoMsg(object: QueryVestingAccountsRequestAminoMsg): QueryVestingAccountsRequest;
    fromProtoMsg(message: QueryVestingAccountsRequestProtoMsg): QueryVestingAccountsRequest;
    toProto(message: QueryVestingAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryVestingAccountsRequest): QueryVestingAccountsRequestProtoMsg;
};
export declare const QueryVestingAccountsResponse: {
    typeUrl: string;
    encode(message: QueryVestingAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVestingAccountsResponse;
    fromPartial(object: Partial<QueryVestingAccountsResponse>): QueryVestingAccountsResponse;
    fromAmino(object: QueryVestingAccountsResponseAmino): QueryVestingAccountsResponse;
    toAmino(message: QueryVestingAccountsResponse): QueryVestingAccountsResponseAmino;
    fromAminoMsg(object: QueryVestingAccountsResponseAminoMsg): QueryVestingAccountsResponse;
    fromProtoMsg(message: QueryVestingAccountsResponseProtoMsg): QueryVestingAccountsResponse;
    toProto(message: QueryVestingAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryVestingAccountsResponse): QueryVestingAccountsResponseProtoMsg;
};
export declare const QueryVestingLockedSupplyRequest: {
    typeUrl: string;
    encode(message: QueryVestingLockedSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVestingLockedSupplyRequest;
    fromPartial(object: Partial<QueryVestingLockedSupplyRequest>): QueryVestingLockedSupplyRequest;
    fromAmino(object: QueryVestingLockedSupplyRequestAmino): QueryVestingLockedSupplyRequest;
    toAmino(message: QueryVestingLockedSupplyRequest): QueryVestingLockedSupplyRequestAmino;
    fromAminoMsg(object: QueryVestingLockedSupplyRequestAminoMsg): QueryVestingLockedSupplyRequest;
    fromProtoMsg(message: QueryVestingLockedSupplyRequestProtoMsg): QueryVestingLockedSupplyRequest;
    toProto(message: QueryVestingLockedSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryVestingLockedSupplyRequest): QueryVestingLockedSupplyRequestProtoMsg;
};
export declare const QueryVestingLockedSupplyResponse: {
    typeUrl: string;
    encode(message: QueryVestingLockedSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVestingLockedSupplyResponse;
    fromPartial(object: Partial<QueryVestingLockedSupplyResponse>): QueryVestingLockedSupplyResponse;
    fromAmino(object: QueryVestingLockedSupplyResponseAmino): QueryVestingLockedSupplyResponse;
    toAmino(message: QueryVestingLockedSupplyResponse): QueryVestingLockedSupplyResponseAmino;
    fromAminoMsg(object: QueryVestingLockedSupplyResponseAminoMsg): QueryVestingLockedSupplyResponse;
    fromProtoMsg(message: QueryVestingLockedSupplyResponseProtoMsg): QueryVestingLockedSupplyResponse;
    toProto(message: QueryVestingLockedSupplyResponse): Uint8Array;
    toProtoMsg(message: QueryVestingLockedSupplyResponse): QueryVestingLockedSupplyResponseProtoMsg;
};
export declare const VestingAccount_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const VestingAccount_FromAmino: (content: AnyAmino) => Any;
export declare const VestingAccount_ToAmino: (content: Any) => AnyAmino;
