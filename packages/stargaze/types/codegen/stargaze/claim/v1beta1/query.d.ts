import { Action, ClaimRecord, ClaimRecordSDKType } from "./claim_record";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponse {
    /** params defines the parameters of the module. */
    moduleAccountBalance: Coin[];
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponseSDKType {
    moduleAccountBalance: CoinSDKType[];
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
export interface QueryClaimRecordRequest {
    address: string;
}
export interface QueryClaimRecordRequestSDKType {
    address: string;
}
export interface QueryClaimRecordResponse {
    claimRecord?: ClaimRecord;
}
export interface QueryClaimRecordResponseSDKType {
    claim_record?: ClaimRecordSDKType;
}
export interface QueryClaimableForActionRequest {
    address: string;
    action: Action;
}
export interface QueryClaimableForActionRequestSDKType {
    address: string;
    action: Action;
}
export interface QueryClaimableForActionResponse {
    coins: Coin[];
}
export interface QueryClaimableForActionResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryTotalClaimableRequest {
    address: string;
}
export interface QueryTotalClaimableRequestSDKType {
    address: string;
}
export interface QueryTotalClaimableResponse {
    coins: Coin[];
}
export interface QueryTotalClaimableResponseSDKType {
    coins: CoinSDKType[];
}
export declare const QueryModuleAccountBalanceRequest: {
    encode(_: QueryModuleAccountBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryModuleAccountBalanceRequest;
    fromPartial(_: Partial<QueryModuleAccountBalanceRequest>): QueryModuleAccountBalanceRequest;
};
export declare const QueryModuleAccountBalanceResponse: {
    encode(message: QueryModuleAccountBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryModuleAccountBalanceResponse;
    fromPartial(object: Partial<QueryModuleAccountBalanceResponse>): QueryModuleAccountBalanceResponse;
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
export declare const QueryClaimRecordRequest: {
    encode(message: QueryClaimRecordRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimRecordRequest;
    fromPartial(object: Partial<QueryClaimRecordRequest>): QueryClaimRecordRequest;
};
export declare const QueryClaimRecordResponse: {
    encode(message: QueryClaimRecordResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimRecordResponse;
    fromPartial(object: Partial<QueryClaimRecordResponse>): QueryClaimRecordResponse;
};
export declare const QueryClaimableForActionRequest: {
    encode(message: QueryClaimableForActionRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimableForActionRequest;
    fromPartial(object: Partial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest;
};
export declare const QueryClaimableForActionResponse: {
    encode(message: QueryClaimableForActionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimableForActionResponse;
    fromPartial(object: Partial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse;
};
export declare const QueryTotalClaimableRequest: {
    encode(message: QueryTotalClaimableRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalClaimableRequest;
    fromPartial(object: Partial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest;
};
export declare const QueryTotalClaimableResponse: {
    encode(message: QueryTotalClaimableResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalClaimableResponse;
    fromPartial(object: Partial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse;
};
