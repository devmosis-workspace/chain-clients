import { DistributionStatus, DistributionType, Distribution, DistributionSDKType, DistributionRecords, DistributionRecordsSDKType, UserClaim, UserClaimSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryAllDistributionsRequest {
}
export interface QueryAllDistributionsRequestSDKType {
}
export interface QueryAllDistributionsResponse {
    distributions: Distribution[];
    height: Long;
}
export interface QueryAllDistributionsResponseSDKType {
    distributions: DistributionSDKType[];
    height: Long;
}
export interface QueryRecordsByDistributionNameRequest {
    distributionName: string;
    status: DistributionStatus;
}
export interface QueryRecordsByDistributionNameRequestSDKType {
    distribution_name: string;
    status: DistributionStatus;
}
export interface QueryRecordsByDistributionNameResponse {
    distributionRecords?: DistributionRecords;
    height: Long;
}
export interface QueryRecordsByDistributionNameResponseSDKType {
    distribution_records?: DistributionRecordsSDKType;
    height: Long;
}
export interface QueryRecordsByRecipientAddrRequest {
    address: string;
}
export interface QueryRecordsByRecipientAddrRequestSDKType {
    address: string;
}
export interface QueryRecordsByRecipientAddrResponse {
    distributionRecords?: DistributionRecords;
    height: Long;
}
export interface QueryRecordsByRecipientAddrResponseSDKType {
    distribution_records?: DistributionRecordsSDKType;
    height: Long;
}
export interface QueryClaimsByTypeRequest {
    userClaimType: DistributionType;
}
export interface QueryClaimsByTypeRequestSDKType {
    user_claim_type: DistributionType;
}
export interface QueryClaimsResponse {
    claims: UserClaim[];
    height: Long;
}
export interface QueryClaimsResponseSDKType {
    claims: UserClaimSDKType[];
    height: Long;
}
export declare const QueryAllDistributionsRequest: {
    encode(_: QueryAllDistributionsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAllDistributionsRequest;
    fromPartial(_: Partial<QueryAllDistributionsRequest>): QueryAllDistributionsRequest;
};
export declare const QueryAllDistributionsResponse: {
    encode(message: QueryAllDistributionsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllDistributionsResponse;
    fromPartial(object: Partial<QueryAllDistributionsResponse>): QueryAllDistributionsResponse;
};
export declare const QueryRecordsByDistributionNameRequest: {
    encode(message: QueryRecordsByDistributionNameRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRecordsByDistributionNameRequest;
    fromPartial(object: Partial<QueryRecordsByDistributionNameRequest>): QueryRecordsByDistributionNameRequest;
};
export declare const QueryRecordsByDistributionNameResponse: {
    encode(message: QueryRecordsByDistributionNameResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRecordsByDistributionNameResponse;
    fromPartial(object: Partial<QueryRecordsByDistributionNameResponse>): QueryRecordsByDistributionNameResponse;
};
export declare const QueryRecordsByRecipientAddrRequest: {
    encode(message: QueryRecordsByRecipientAddrRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRecordsByRecipientAddrRequest;
    fromPartial(object: Partial<QueryRecordsByRecipientAddrRequest>): QueryRecordsByRecipientAddrRequest;
};
export declare const QueryRecordsByRecipientAddrResponse: {
    encode(message: QueryRecordsByRecipientAddrResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRecordsByRecipientAddrResponse;
    fromPartial(object: Partial<QueryRecordsByRecipientAddrResponse>): QueryRecordsByRecipientAddrResponse;
};
export declare const QueryClaimsByTypeRequest: {
    encode(message: QueryClaimsByTypeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimsByTypeRequest;
    fromPartial(object: Partial<QueryClaimsByTypeRequest>): QueryClaimsByTypeRequest;
};
export declare const QueryClaimsResponse: {
    encode(message: QueryClaimsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimsResponse;
    fromPartial(object: Partial<QueryClaimsResponse>): QueryClaimsResponse;
};
