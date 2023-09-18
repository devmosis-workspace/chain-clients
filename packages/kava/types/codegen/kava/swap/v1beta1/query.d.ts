import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./swap";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest defines the request type for querying x/swap parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kava.swap.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/swap parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kava.swap.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/swap parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/swap parameters. */
export interface QueryParamsResponse {
    /** params represents the swap module parameters */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/kava.swap.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/swap parameters. */
export interface QueryParamsResponseAmino {
    /** params represents the swap module parameters */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/kava.swap.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/swap parameters. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
    /** pool_id filters pools by id */
    poolId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
    typeUrl: "/kava.swap.v1beta1.QueryPoolsRequest";
    value: Uint8Array;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequestAmino {
    /** pool_id filters pools by id */
    pool_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryPoolsRequestAminoMsg {
    type: "/kava.swap.v1beta1.QueryPoolsRequest";
    value: QueryPoolsRequestAmino;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequestSDKType {
    pool_id: string;
    pagination: PageRequestSDKType;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponse {
    /** pools represents returned pools */
    pools: PoolResponse[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
    typeUrl: "/kava.swap.v1beta1.QueryPoolsResponse";
    value: Uint8Array;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponseAmino {
    /** pools represents returned pools */
    pools: PoolResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
    type: "/kava.swap.v1beta1.QueryPoolsResponse";
    value: QueryPoolsResponseAmino;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponseSDKType {
    pools: PoolResponseSDKType[];
    pagination: PageResponseSDKType;
}
/** Pool represents the state of a single pool */
export interface PoolResponse {
    /** name represents the name of the pool */
    name: string;
    /** coins represents the total reserves of the pool */
    coins: Coin[];
    /** total_shares represents the total shares of the pool */
    totalShares: string;
}
export interface PoolResponseProtoMsg {
    typeUrl: "/kava.swap.v1beta1.PoolResponse";
    value: Uint8Array;
}
/** Pool represents the state of a single pool */
export interface PoolResponseAmino {
    /** name represents the name of the pool */
    name: string;
    /** coins represents the total reserves of the pool */
    coins: CoinAmino[];
    /** total_shares represents the total shares of the pool */
    total_shares: string;
}
export interface PoolResponseAminoMsg {
    type: "/kava.swap.v1beta1.PoolResponse";
    value: PoolResponseAmino;
}
/** Pool represents the state of a single pool */
export interface PoolResponseSDKType {
    name: string;
    coins: CoinSDKType[];
    total_shares: string;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** owner optionally filters deposits by owner */
    owner: string;
    /** pool_id optionally fitlers deposits by pool id */
    poolId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
    typeUrl: "/kava.swap.v1beta1.QueryDepositsRequest";
    value: Uint8Array;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
    /** owner optionally filters deposits by owner */
    owner: string;
    /** pool_id optionally fitlers deposits by pool id */
    pool_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
    type: "/kava.swap.v1beta1.QueryDepositsRequest";
    value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
    owner: string;
    pool_id: string;
    pagination: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    /** deposits returns the deposits matching the requested parameters */
    deposits: DepositResponse[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
    typeUrl: "/kava.swap.v1beta1.QueryDepositsResponse";
    value: Uint8Array;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
    /** deposits returns the deposits matching the requested parameters */
    deposits: DepositResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
    type: "/kava.swap.v1beta1.QueryDepositsResponse";
    value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
    deposits: DepositResponseSDKType[];
    pagination: PageResponseSDKType;
}
/** DepositResponse defines a single deposit query response type. */
export interface DepositResponse {
    /** depositor represents the owner of the deposit */
    depositor: string;
    /** pool_id represents the pool the deposit is for */
    poolId: string;
    /** shares_owned presents the shares owned by the depositor for the pool */
    sharesOwned: string;
    /** shares_value represents the coin value of the shares_owned */
    sharesValue: Coin[];
}
export interface DepositResponseProtoMsg {
    typeUrl: "/kava.swap.v1beta1.DepositResponse";
    value: Uint8Array;
}
/** DepositResponse defines a single deposit query response type. */
export interface DepositResponseAmino {
    /** depositor represents the owner of the deposit */
    depositor: string;
    /** pool_id represents the pool the deposit is for */
    pool_id: string;
    /** shares_owned presents the shares owned by the depositor for the pool */
    shares_owned: string;
    /** shares_value represents the coin value of the shares_owned */
    shares_value: CoinAmino[];
}
export interface DepositResponseAminoMsg {
    type: "/kava.swap.v1beta1.DepositResponse";
    value: DepositResponseAmino;
}
/** DepositResponse defines a single deposit query response type. */
export interface DepositResponseSDKType {
    depositor: string;
    pool_id: string;
    shares_owned: string;
    shares_value: CoinSDKType[];
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
export declare const QueryPoolsRequest: {
    typeUrl: string;
    encode(message: QueryPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolsRequest;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
    fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest;
    toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino;
    fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest;
    fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest;
    toProto(message: QueryPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg;
};
export declare const QueryPoolsResponse: {
    typeUrl: string;
    encode(message: QueryPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolsResponse;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
    fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse;
    toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino;
    fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse;
    fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse;
    toProto(message: QueryPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg;
};
export declare const PoolResponse: {
    typeUrl: string;
    encode(message: PoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolResponse;
    fromPartial(object: Partial<PoolResponse>): PoolResponse;
    fromAmino(object: PoolResponseAmino): PoolResponse;
    toAmino(message: PoolResponse): PoolResponseAmino;
    fromAminoMsg(object: PoolResponseAminoMsg): PoolResponse;
    fromProtoMsg(message: PoolResponseProtoMsg): PoolResponse;
    toProto(message: PoolResponse): Uint8Array;
    toProtoMsg(message: PoolResponse): PoolResponseProtoMsg;
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
export declare const DepositResponse: {
    typeUrl: string;
    encode(message: DepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DepositResponse;
    fromPartial(object: Partial<DepositResponse>): DepositResponse;
    fromAmino(object: DepositResponseAmino): DepositResponse;
    toAmino(message: DepositResponse): DepositResponseAmino;
    fromAminoMsg(object: DepositResponseAminoMsg): DepositResponse;
    fromProtoMsg(message: DepositResponseProtoMsg): DepositResponse;
    toProto(message: DepositResponse): Uint8Array;
    toProtoMsg(message: DepositResponse): DepositResponseProtoMsg;
};
