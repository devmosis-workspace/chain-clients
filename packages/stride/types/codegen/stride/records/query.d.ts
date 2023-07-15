import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, DepositRecord, DepositRecordSDKType, UserRedemptionRecord, UserRedemptionRecordSDKType, EpochUnbondingRecord, EpochUnbondingRecordSDKType } from "./genesis";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryGetDepositRecordRequest {
    id: Long;
}
export interface QueryGetDepositRecordRequestSDKType {
    id: Long;
}
export interface QueryGetDepositRecordResponse {
    depositRecord?: DepositRecord;
}
export interface QueryGetDepositRecordResponseSDKType {
    deposit_record?: DepositRecordSDKType;
}
export interface QueryAllDepositRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllDepositRecordRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllDepositRecordResponse {
    depositRecord: DepositRecord[];
    pagination?: PageResponse;
}
export interface QueryAllDepositRecordResponseSDKType {
    deposit_record: DepositRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryDepositRecordByHostRequest {
    hostZoneId: string;
}
export interface QueryDepositRecordByHostRequestSDKType {
    host_zone_id: string;
}
export interface QueryDepositRecordByHostResponse {
    depositRecord: DepositRecord[];
}
export interface QueryDepositRecordByHostResponseSDKType {
    deposit_record: DepositRecordSDKType[];
}
export interface QueryGetUserRedemptionRecordRequest {
    id: string;
}
export interface QueryGetUserRedemptionRecordRequestSDKType {
    id: string;
}
export interface QueryGetUserRedemptionRecordResponse {
    userRedemptionRecord?: UserRedemptionRecord;
}
export interface QueryGetUserRedemptionRecordResponseSDKType {
    user_redemption_record?: UserRedemptionRecordSDKType;
}
export interface QueryAllUserRedemptionRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllUserRedemptionRecordRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordResponse {
    userRedemptionRecord: UserRedemptionRecord[];
    pagination?: PageResponse;
}
export interface QueryAllUserRedemptionRecordResponseSDKType {
    user_redemption_record: UserRedemptionRecordSDKType[];
    pagination?: PageResponseSDKType;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequest {
    chainId: string;
    day: Long;
    address: string;
    limit: Long;
    pagination?: PageRequest;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequestSDKType {
    chain_id: string;
    day: Long;
    address: string;
    limit: Long;
    pagination?: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordForUserResponse {
    userRedemptionRecord: UserRedemptionRecord[];
    pagination?: PageResponse;
}
export interface QueryAllUserRedemptionRecordForUserResponseSDKType {
    user_redemption_record: UserRedemptionRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetEpochUnbondingRecordRequest {
    epochNumber: Long;
}
export interface QueryGetEpochUnbondingRecordRequestSDKType {
    epoch_number: Long;
}
export interface QueryGetEpochUnbondingRecordResponse {
    epochUnbondingRecord?: EpochUnbondingRecord;
}
export interface QueryGetEpochUnbondingRecordResponseSDKType {
    epoch_unbonding_record?: EpochUnbondingRecordSDKType;
}
export interface QueryAllEpochUnbondingRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllEpochUnbondingRecordRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllEpochUnbondingRecordResponse {
    epochUnbondingRecord: EpochUnbondingRecord[];
    pagination?: PageResponse;
}
export interface QueryAllEpochUnbondingRecordResponseSDKType {
    epoch_unbonding_record: EpochUnbondingRecordSDKType[];
    pagination?: PageResponseSDKType;
}
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
export declare const QueryGetDepositRecordRequest: {
    encode(message: QueryGetDepositRecordRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetDepositRecordRequest;
    fromPartial(object: Partial<QueryGetDepositRecordRequest>): QueryGetDepositRecordRequest;
};
export declare const QueryGetDepositRecordResponse: {
    encode(message: QueryGetDepositRecordResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetDepositRecordResponse;
    fromPartial(object: Partial<QueryGetDepositRecordResponse>): QueryGetDepositRecordResponse;
};
export declare const QueryAllDepositRecordRequest: {
    encode(message: QueryAllDepositRecordRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllDepositRecordRequest;
    fromPartial(object: Partial<QueryAllDepositRecordRequest>): QueryAllDepositRecordRequest;
};
export declare const QueryAllDepositRecordResponse: {
    encode(message: QueryAllDepositRecordResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllDepositRecordResponse;
    fromPartial(object: Partial<QueryAllDepositRecordResponse>): QueryAllDepositRecordResponse;
};
export declare const QueryDepositRecordByHostRequest: {
    encode(message: QueryDepositRecordByHostRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDepositRecordByHostRequest;
    fromPartial(object: Partial<QueryDepositRecordByHostRequest>): QueryDepositRecordByHostRequest;
};
export declare const QueryDepositRecordByHostResponse: {
    encode(message: QueryDepositRecordByHostResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDepositRecordByHostResponse;
    fromPartial(object: Partial<QueryDepositRecordByHostResponse>): QueryDepositRecordByHostResponse;
};
export declare const QueryGetUserRedemptionRecordRequest: {
    encode(message: QueryGetUserRedemptionRecordRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetUserRedemptionRecordRequest;
    fromPartial(object: Partial<QueryGetUserRedemptionRecordRequest>): QueryGetUserRedemptionRecordRequest;
};
export declare const QueryGetUserRedemptionRecordResponse: {
    encode(message: QueryGetUserRedemptionRecordResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetUserRedemptionRecordResponse;
    fromPartial(object: Partial<QueryGetUserRedemptionRecordResponse>): QueryGetUserRedemptionRecordResponse;
};
export declare const QueryAllUserRedemptionRecordRequest: {
    encode(message: QueryAllUserRedemptionRecordRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllUserRedemptionRecordRequest;
    fromPartial(object: Partial<QueryAllUserRedemptionRecordRequest>): QueryAllUserRedemptionRecordRequest;
};
export declare const QueryAllUserRedemptionRecordResponse: {
    encode(message: QueryAllUserRedemptionRecordResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllUserRedemptionRecordResponse;
    fromPartial(object: Partial<QueryAllUserRedemptionRecordResponse>): QueryAllUserRedemptionRecordResponse;
};
export declare const QueryAllUserRedemptionRecordForUserRequest: {
    encode(message: QueryAllUserRedemptionRecordForUserRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllUserRedemptionRecordForUserRequest;
    fromPartial(object: Partial<QueryAllUserRedemptionRecordForUserRequest>): QueryAllUserRedemptionRecordForUserRequest;
};
export declare const QueryAllUserRedemptionRecordForUserResponse: {
    encode(message: QueryAllUserRedemptionRecordForUserResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllUserRedemptionRecordForUserResponse;
    fromPartial(object: Partial<QueryAllUserRedemptionRecordForUserResponse>): QueryAllUserRedemptionRecordForUserResponse;
};
export declare const QueryGetEpochUnbondingRecordRequest: {
    encode(message: QueryGetEpochUnbondingRecordRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetEpochUnbondingRecordRequest;
    fromPartial(object: Partial<QueryGetEpochUnbondingRecordRequest>): QueryGetEpochUnbondingRecordRequest;
};
export declare const QueryGetEpochUnbondingRecordResponse: {
    encode(message: QueryGetEpochUnbondingRecordResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetEpochUnbondingRecordResponse;
    fromPartial(object: Partial<QueryGetEpochUnbondingRecordResponse>): QueryGetEpochUnbondingRecordResponse;
};
export declare const QueryAllEpochUnbondingRecordRequest: {
    encode(message: QueryAllEpochUnbondingRecordRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllEpochUnbondingRecordRequest;
    fromPartial(object: Partial<QueryAllEpochUnbondingRecordRequest>): QueryAllEpochUnbondingRecordRequest;
};
export declare const QueryAllEpochUnbondingRecordResponse: {
    encode(message: QueryAllEpochUnbondingRecordResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllEpochUnbondingRecordResponse;
    fromPartial(object: Partial<QueryAllEpochUnbondingRecordResponse>): QueryAllEpochUnbondingRecordResponse;
};
