import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequest {
    /** delegator is the address of the account to query */
    delegator: string;
}
export interface QueryDelegatedBalanceRequestProtoMsg {
    typeUrl: "/kava.liquid.v1beta1.QueryDelegatedBalanceRequest";
    value: Uint8Array;
}
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequestAmino {
    /** delegator is the address of the account to query */
    delegator: string;
}
export interface QueryDelegatedBalanceRequestAminoMsg {
    type: "/kava.liquid.v1beta1.QueryDelegatedBalanceRequest";
    value: QueryDelegatedBalanceRequestAmino;
}
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequestSDKType {
    delegator: string;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponse {
    /** vested is the amount of all delegated coins that have vested (ie not locked) */
    vested: Coin;
    /** vesting is the amount of all delegated coins that are still vesting (ie locked) */
    vesting: Coin;
}
export interface QueryDelegatedBalanceResponseProtoMsg {
    typeUrl: "/kava.liquid.v1beta1.QueryDelegatedBalanceResponse";
    value: Uint8Array;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponseAmino {
    /** vested is the amount of all delegated coins that have vested (ie not locked) */
    vested?: CoinAmino;
    /** vesting is the amount of all delegated coins that are still vesting (ie locked) */
    vesting?: CoinAmino;
}
export interface QueryDelegatedBalanceResponseAminoMsg {
    type: "/kava.liquid.v1beta1.QueryDelegatedBalanceResponse";
    value: QueryDelegatedBalanceResponseAmino;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponseSDKType {
    vested: CoinSDKType;
    vesting: CoinSDKType;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequest {
}
export interface QueryTotalSupplyRequestProtoMsg {
    typeUrl: "/kava.liquid.v1beta1.QueryTotalSupplyRequest";
    value: Uint8Array;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestAmino {
}
export interface QueryTotalSupplyRequestAminoMsg {
    type: "/kava.liquid.v1beta1.QueryTotalSupplyRequest";
    value: QueryTotalSupplyRequestAmino;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestSDKType {
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponse {
    /** Height is the block height at which these totals apply */
    height: bigint;
    /** Result is a list of coins supplied to liquid */
    result: Coin[];
}
export interface QueryTotalSupplyResponseProtoMsg {
    typeUrl: "/kava.liquid.v1beta1.QueryTotalSupplyResponse";
    value: Uint8Array;
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseAmino {
    /** Height is the block height at which these totals apply */
    height: string;
    /** Result is a list of coins supplied to liquid */
    result: CoinAmino[];
}
export interface QueryTotalSupplyResponseAminoMsg {
    type: "/kava.liquid.v1beta1.QueryTotalSupplyResponse";
    value: QueryTotalSupplyResponseAmino;
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseSDKType {
    height: bigint;
    result: CoinSDKType[];
}
export declare const QueryDelegatedBalanceRequest: {
    typeUrl: string;
    encode(message: QueryDelegatedBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegatedBalanceRequest;
    fromPartial(object: Partial<QueryDelegatedBalanceRequest>): QueryDelegatedBalanceRequest;
    fromAmino(object: QueryDelegatedBalanceRequestAmino): QueryDelegatedBalanceRequest;
    toAmino(message: QueryDelegatedBalanceRequest): QueryDelegatedBalanceRequestAmino;
    fromAminoMsg(object: QueryDelegatedBalanceRequestAminoMsg): QueryDelegatedBalanceRequest;
    fromProtoMsg(message: QueryDelegatedBalanceRequestProtoMsg): QueryDelegatedBalanceRequest;
    toProto(message: QueryDelegatedBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatedBalanceRequest): QueryDelegatedBalanceRequestProtoMsg;
};
export declare const QueryDelegatedBalanceResponse: {
    typeUrl: string;
    encode(message: QueryDelegatedBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegatedBalanceResponse;
    fromPartial(object: Partial<QueryDelegatedBalanceResponse>): QueryDelegatedBalanceResponse;
    fromAmino(object: QueryDelegatedBalanceResponseAmino): QueryDelegatedBalanceResponse;
    toAmino(message: QueryDelegatedBalanceResponse): QueryDelegatedBalanceResponseAmino;
    fromAminoMsg(object: QueryDelegatedBalanceResponseAminoMsg): QueryDelegatedBalanceResponse;
    fromProtoMsg(message: QueryDelegatedBalanceResponseProtoMsg): QueryDelegatedBalanceResponse;
    toProto(message: QueryDelegatedBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatedBalanceResponse): QueryDelegatedBalanceResponseProtoMsg;
};
export declare const QueryTotalSupplyRequest: {
    typeUrl: string;
    encode(_: QueryTotalSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTotalSupplyRequest;
    fromPartial(_: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
    fromAmino(_: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest;
    toAmino(_: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino;
    fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest;
    fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest;
    toProto(message: QueryTotalSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg;
};
export declare const QueryTotalSupplyResponse: {
    typeUrl: string;
    encode(message: QueryTotalSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalSupplyResponse;
    fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
    fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse;
    toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino;
    fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse;
    fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse;
    toProto(message: QueryTotalSupplyResponse): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg;
};
