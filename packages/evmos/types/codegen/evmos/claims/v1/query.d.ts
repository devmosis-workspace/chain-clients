import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressAmino, ClaimsRecordAddressSDKType, Claim, ClaimAmino, ClaimSDKType } from "./claims";
import { BinaryWriter } from "../../../binary";
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequest {
}
export interface QueryTotalUnclaimedRequestProtoMsg {
    typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedRequest";
    value: Uint8Array;
}
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequestAmino {
}
export interface QueryTotalUnclaimedRequestAminoMsg {
    type: "/evmos.claims.v1.QueryTotalUnclaimedRequest";
    value: QueryTotalUnclaimedRequestAmino;
}
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequestSDKType {
}
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
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/evmos.claims.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/evmos.claims.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryTotalUnclaimedRequest: {
    typeUrl: string;
    encode(_: QueryTotalUnclaimedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTotalUnclaimedRequest;
    fromPartial(_: Partial<QueryTotalUnclaimedRequest>): QueryTotalUnclaimedRequest;
    fromAmino(_: QueryTotalUnclaimedRequestAmino): QueryTotalUnclaimedRequest;
    toAmino(_: QueryTotalUnclaimedRequest): QueryTotalUnclaimedRequestAmino;
    fromAminoMsg(object: QueryTotalUnclaimedRequestAminoMsg): QueryTotalUnclaimedRequest;
    fromProtoMsg(message: QueryTotalUnclaimedRequestProtoMsg): QueryTotalUnclaimedRequest;
    toProto(message: QueryTotalUnclaimedRequest): Uint8Array;
    toProtoMsg(message: QueryTotalUnclaimedRequest): QueryTotalUnclaimedRequestProtoMsg;
};
export declare const QueryTotalUnclaimedResponse: {
    typeUrl: string;
    encode(message: QueryTotalUnclaimedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalUnclaimedResponse;
    fromPartial(object: Partial<QueryTotalUnclaimedResponse>): QueryTotalUnclaimedResponse;
    fromAmino(object: QueryTotalUnclaimedResponseAmino): QueryTotalUnclaimedResponse;
    toAmino(message: QueryTotalUnclaimedResponse): QueryTotalUnclaimedResponseAmino;
    fromAminoMsg(object: QueryTotalUnclaimedResponseAminoMsg): QueryTotalUnclaimedResponse;
    fromProtoMsg(message: QueryTotalUnclaimedResponseProtoMsg): QueryTotalUnclaimedResponse;
    toProto(message: QueryTotalUnclaimedResponse): Uint8Array;
    toProtoMsg(message: QueryTotalUnclaimedResponse): QueryTotalUnclaimedResponseProtoMsg;
};
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
export declare const QueryClaimsRecordsRequest: {
    typeUrl: string;
    encode(message: QueryClaimsRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimsRecordsRequest;
    fromPartial(object: Partial<QueryClaimsRecordsRequest>): QueryClaimsRecordsRequest;
    fromAmino(object: QueryClaimsRecordsRequestAmino): QueryClaimsRecordsRequest;
    toAmino(message: QueryClaimsRecordsRequest): QueryClaimsRecordsRequestAmino;
    fromAminoMsg(object: QueryClaimsRecordsRequestAminoMsg): QueryClaimsRecordsRequest;
    fromProtoMsg(message: QueryClaimsRecordsRequestProtoMsg): QueryClaimsRecordsRequest;
    toProto(message: QueryClaimsRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryClaimsRecordsRequest): QueryClaimsRecordsRequestProtoMsg;
};
export declare const QueryClaimsRecordsResponse: {
    typeUrl: string;
    encode(message: QueryClaimsRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimsRecordsResponse;
    fromPartial(object: Partial<QueryClaimsRecordsResponse>): QueryClaimsRecordsResponse;
    fromAmino(object: QueryClaimsRecordsResponseAmino): QueryClaimsRecordsResponse;
    toAmino(message: QueryClaimsRecordsResponse): QueryClaimsRecordsResponseAmino;
    fromAminoMsg(object: QueryClaimsRecordsResponseAminoMsg): QueryClaimsRecordsResponse;
    fromProtoMsg(message: QueryClaimsRecordsResponseProtoMsg): QueryClaimsRecordsResponse;
    toProto(message: QueryClaimsRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryClaimsRecordsResponse): QueryClaimsRecordsResponseProtoMsg;
};
export declare const QueryClaimsRecordRequest: {
    typeUrl: string;
    encode(message: QueryClaimsRecordRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimsRecordRequest;
    fromPartial(object: Partial<QueryClaimsRecordRequest>): QueryClaimsRecordRequest;
    fromAmino(object: QueryClaimsRecordRequestAmino): QueryClaimsRecordRequest;
    toAmino(message: QueryClaimsRecordRequest): QueryClaimsRecordRequestAmino;
    fromAminoMsg(object: QueryClaimsRecordRequestAminoMsg): QueryClaimsRecordRequest;
    fromProtoMsg(message: QueryClaimsRecordRequestProtoMsg): QueryClaimsRecordRequest;
    toProto(message: QueryClaimsRecordRequest): Uint8Array;
    toProtoMsg(message: QueryClaimsRecordRequest): QueryClaimsRecordRequestProtoMsg;
};
export declare const QueryClaimsRecordResponse: {
    typeUrl: string;
    encode(message: QueryClaimsRecordResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimsRecordResponse;
    fromPartial(object: Partial<QueryClaimsRecordResponse>): QueryClaimsRecordResponse;
    fromAmino(object: QueryClaimsRecordResponseAmino): QueryClaimsRecordResponse;
    toAmino(message: QueryClaimsRecordResponse): QueryClaimsRecordResponseAmino;
    fromAminoMsg(object: QueryClaimsRecordResponseAminoMsg): QueryClaimsRecordResponse;
    fromProtoMsg(message: QueryClaimsRecordResponseProtoMsg): QueryClaimsRecordResponse;
    toProto(message: QueryClaimsRecordResponse): Uint8Array;
    toProtoMsg(message: QueryClaimsRecordResponse): QueryClaimsRecordResponseProtoMsg;
};
