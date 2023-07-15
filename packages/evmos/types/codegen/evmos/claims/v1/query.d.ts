import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressSDKType, Claim, ClaimSDKType } from "./claims";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequest {
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
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryClaimsRecordsResponse is the response type for the Query/ClaimsRecords
 * RPC method.
 */
export interface QueryClaimsRecordsResponse {
    /** claims defines all claims records */
    claims: ClaimsRecordAddress[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryClaimsRecordsResponse is the response type for the Query/ClaimsRecords
 * RPC method.
 */
export interface QueryClaimsRecordsResponseSDKType {
    claims: ClaimsRecordAddressSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryClaimsRecordRequest is the request type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordRequest {
    /** address defines the user to query claims record for */
    address: string;
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
/**
 * QueryClaimsRecordResponse is the response type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordResponseSDKType {
    initial_claimable_amount: string;
    claims: ClaimSDKType[];
}
export declare const QueryTotalUnclaimedRequest: {
    encode(_: QueryTotalUnclaimedRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryTotalUnclaimedRequest;
    fromPartial(_: Partial<QueryTotalUnclaimedRequest>): QueryTotalUnclaimedRequest;
};
export declare const QueryTotalUnclaimedResponse: {
    encode(message: QueryTotalUnclaimedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalUnclaimedResponse;
    fromPartial(object: Partial<QueryTotalUnclaimedResponse>): QueryTotalUnclaimedResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryClaimsRecordsRequest: {
    encode(message: QueryClaimsRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimsRecordsRequest;
    fromPartial(object: Partial<QueryClaimsRecordsRequest>): QueryClaimsRecordsRequest;
};
export declare const QueryClaimsRecordsResponse: {
    encode(message: QueryClaimsRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimsRecordsResponse;
    fromPartial(object: Partial<QueryClaimsRecordsResponse>): QueryClaimsRecordsResponse;
};
export declare const QueryClaimsRecordRequest: {
    encode(message: QueryClaimsRecordRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimsRecordRequest;
    fromPartial(object: Partial<QueryClaimsRecordRequest>): QueryClaimsRecordRequest;
};
export declare const QueryClaimsRecordResponse: {
    encode(message: QueryClaimsRecordResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimsRecordResponse;
    fromPartial(object: Partial<QueryClaimsRecordResponse>): QueryClaimsRecordResponse;
};
