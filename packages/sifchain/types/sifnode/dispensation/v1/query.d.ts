import { DistributionStatus, DistributionType, Distribution, DistributionAmino, DistributionSDKType, DistributionRecords, DistributionRecordsAmino, DistributionRecordsSDKType, UserClaim, UserClaimAmino, UserClaimSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface QueryAllDistributionsRequest {
}
export interface QueryAllDistributionsRequestProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.QueryAllDistributionsRequest";
    value: Uint8Array;
}
export interface QueryAllDistributionsRequestAmino {
}
export interface QueryAllDistributionsRequestAminoMsg {
    type: "/sifnode.dispensation.v1.QueryAllDistributionsRequest";
    value: QueryAllDistributionsRequestAmino;
}
export interface QueryAllDistributionsRequestSDKType {
}
export interface QueryAllDistributionsResponse {
    distributions: Distribution[];
    height: bigint;
}
export interface QueryAllDistributionsResponseProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.QueryAllDistributionsResponse";
    value: Uint8Array;
}
export interface QueryAllDistributionsResponseAmino {
    distributions?: DistributionAmino[];
    height?: string;
}
export interface QueryAllDistributionsResponseAminoMsg {
    type: "/sifnode.dispensation.v1.QueryAllDistributionsResponse";
    value: QueryAllDistributionsResponseAmino;
}
export interface QueryAllDistributionsResponseSDKType {
    distributions: DistributionSDKType[];
    height: bigint;
}
export interface QueryRecordsByDistributionNameRequest {
    distributionName: string;
    status: DistributionStatus;
}
export interface QueryRecordsByDistributionNameRequestProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameRequest";
    value: Uint8Array;
}
export interface QueryRecordsByDistributionNameRequestAmino {
    distribution_name?: string;
    status?: DistributionStatus;
}
export interface QueryRecordsByDistributionNameRequestAminoMsg {
    type: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameRequest";
    value: QueryRecordsByDistributionNameRequestAmino;
}
export interface QueryRecordsByDistributionNameRequestSDKType {
    distribution_name: string;
    status: DistributionStatus;
}
export interface QueryRecordsByDistributionNameResponse {
    distributionRecords?: DistributionRecords;
    height: bigint;
}
export interface QueryRecordsByDistributionNameResponseProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameResponse";
    value: Uint8Array;
}
export interface QueryRecordsByDistributionNameResponseAmino {
    distribution_records?: DistributionRecordsAmino;
    height?: string;
}
export interface QueryRecordsByDistributionNameResponseAminoMsg {
    type: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameResponse";
    value: QueryRecordsByDistributionNameResponseAmino;
}
export interface QueryRecordsByDistributionNameResponseSDKType {
    distribution_records?: DistributionRecordsSDKType;
    height: bigint;
}
export interface QueryRecordsByRecipientAddrRequest {
    address: string;
}
export interface QueryRecordsByRecipientAddrRequestProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrRequest";
    value: Uint8Array;
}
export interface QueryRecordsByRecipientAddrRequestAmino {
    address?: string;
}
export interface QueryRecordsByRecipientAddrRequestAminoMsg {
    type: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrRequest";
    value: QueryRecordsByRecipientAddrRequestAmino;
}
export interface QueryRecordsByRecipientAddrRequestSDKType {
    address: string;
}
export interface QueryRecordsByRecipientAddrResponse {
    distributionRecords?: DistributionRecords;
    height: bigint;
}
export interface QueryRecordsByRecipientAddrResponseProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrResponse";
    value: Uint8Array;
}
export interface QueryRecordsByRecipientAddrResponseAmino {
    distribution_records?: DistributionRecordsAmino;
    height?: string;
}
export interface QueryRecordsByRecipientAddrResponseAminoMsg {
    type: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrResponse";
    value: QueryRecordsByRecipientAddrResponseAmino;
}
export interface QueryRecordsByRecipientAddrResponseSDKType {
    distribution_records?: DistributionRecordsSDKType;
    height: bigint;
}
export interface QueryClaimsByTypeRequest {
    userClaimType: DistributionType;
}
export interface QueryClaimsByTypeRequestProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.QueryClaimsByTypeRequest";
    value: Uint8Array;
}
export interface QueryClaimsByTypeRequestAmino {
    user_claim_type?: DistributionType;
}
export interface QueryClaimsByTypeRequestAminoMsg {
    type: "/sifnode.dispensation.v1.QueryClaimsByTypeRequest";
    value: QueryClaimsByTypeRequestAmino;
}
export interface QueryClaimsByTypeRequestSDKType {
    user_claim_type: DistributionType;
}
export interface QueryClaimsResponse {
    claims: UserClaim[];
    height: bigint;
}
export interface QueryClaimsResponseProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.QueryClaimsResponse";
    value: Uint8Array;
}
export interface QueryClaimsResponseAmino {
    claims?: UserClaimAmino[];
    height?: string;
}
export interface QueryClaimsResponseAminoMsg {
    type: "/sifnode.dispensation.v1.QueryClaimsResponse";
    value: QueryClaimsResponseAmino;
}
export interface QueryClaimsResponseSDKType {
    claims: UserClaimSDKType[];
    height: bigint;
}
export declare const QueryAllDistributionsRequest: {
    typeUrl: string;
    encode(_: QueryAllDistributionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAllDistributionsRequest;
    fromPartial(_: Partial<QueryAllDistributionsRequest>): QueryAllDistributionsRequest;
    fromAmino(_: QueryAllDistributionsRequestAmino): QueryAllDistributionsRequest;
    toAmino(_: QueryAllDistributionsRequest): QueryAllDistributionsRequestAmino;
    fromAminoMsg(object: QueryAllDistributionsRequestAminoMsg): QueryAllDistributionsRequest;
    fromProtoMsg(message: QueryAllDistributionsRequestProtoMsg): QueryAllDistributionsRequest;
    toProto(message: QueryAllDistributionsRequest): Uint8Array;
    toProtoMsg(message: QueryAllDistributionsRequest): QueryAllDistributionsRequestProtoMsg;
};
export declare const QueryAllDistributionsResponse: {
    typeUrl: string;
    encode(message: QueryAllDistributionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllDistributionsResponse;
    fromPartial(object: Partial<QueryAllDistributionsResponse>): QueryAllDistributionsResponse;
    fromAmino(object: QueryAllDistributionsResponseAmino): QueryAllDistributionsResponse;
    toAmino(message: QueryAllDistributionsResponse): QueryAllDistributionsResponseAmino;
    fromAminoMsg(object: QueryAllDistributionsResponseAminoMsg): QueryAllDistributionsResponse;
    fromProtoMsg(message: QueryAllDistributionsResponseProtoMsg): QueryAllDistributionsResponse;
    toProto(message: QueryAllDistributionsResponse): Uint8Array;
    toProtoMsg(message: QueryAllDistributionsResponse): QueryAllDistributionsResponseProtoMsg;
};
export declare const QueryRecordsByDistributionNameRequest: {
    typeUrl: string;
    encode(message: QueryRecordsByDistributionNameRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRecordsByDistributionNameRequest;
    fromPartial(object: Partial<QueryRecordsByDistributionNameRequest>): QueryRecordsByDistributionNameRequest;
    fromAmino(object: QueryRecordsByDistributionNameRequestAmino): QueryRecordsByDistributionNameRequest;
    toAmino(message: QueryRecordsByDistributionNameRequest): QueryRecordsByDistributionNameRequestAmino;
    fromAminoMsg(object: QueryRecordsByDistributionNameRequestAminoMsg): QueryRecordsByDistributionNameRequest;
    fromProtoMsg(message: QueryRecordsByDistributionNameRequestProtoMsg): QueryRecordsByDistributionNameRequest;
    toProto(message: QueryRecordsByDistributionNameRequest): Uint8Array;
    toProtoMsg(message: QueryRecordsByDistributionNameRequest): QueryRecordsByDistributionNameRequestProtoMsg;
};
export declare const QueryRecordsByDistributionNameResponse: {
    typeUrl: string;
    encode(message: QueryRecordsByDistributionNameResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRecordsByDistributionNameResponse;
    fromPartial(object: Partial<QueryRecordsByDistributionNameResponse>): QueryRecordsByDistributionNameResponse;
    fromAmino(object: QueryRecordsByDistributionNameResponseAmino): QueryRecordsByDistributionNameResponse;
    toAmino(message: QueryRecordsByDistributionNameResponse): QueryRecordsByDistributionNameResponseAmino;
    fromAminoMsg(object: QueryRecordsByDistributionNameResponseAminoMsg): QueryRecordsByDistributionNameResponse;
    fromProtoMsg(message: QueryRecordsByDistributionNameResponseProtoMsg): QueryRecordsByDistributionNameResponse;
    toProto(message: QueryRecordsByDistributionNameResponse): Uint8Array;
    toProtoMsg(message: QueryRecordsByDistributionNameResponse): QueryRecordsByDistributionNameResponseProtoMsg;
};
export declare const QueryRecordsByRecipientAddrRequest: {
    typeUrl: string;
    encode(message: QueryRecordsByRecipientAddrRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRecordsByRecipientAddrRequest;
    fromPartial(object: Partial<QueryRecordsByRecipientAddrRequest>): QueryRecordsByRecipientAddrRequest;
    fromAmino(object: QueryRecordsByRecipientAddrRequestAmino): QueryRecordsByRecipientAddrRequest;
    toAmino(message: QueryRecordsByRecipientAddrRequest): QueryRecordsByRecipientAddrRequestAmino;
    fromAminoMsg(object: QueryRecordsByRecipientAddrRequestAminoMsg): QueryRecordsByRecipientAddrRequest;
    fromProtoMsg(message: QueryRecordsByRecipientAddrRequestProtoMsg): QueryRecordsByRecipientAddrRequest;
    toProto(message: QueryRecordsByRecipientAddrRequest): Uint8Array;
    toProtoMsg(message: QueryRecordsByRecipientAddrRequest): QueryRecordsByRecipientAddrRequestProtoMsg;
};
export declare const QueryRecordsByRecipientAddrResponse: {
    typeUrl: string;
    encode(message: QueryRecordsByRecipientAddrResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRecordsByRecipientAddrResponse;
    fromPartial(object: Partial<QueryRecordsByRecipientAddrResponse>): QueryRecordsByRecipientAddrResponse;
    fromAmino(object: QueryRecordsByRecipientAddrResponseAmino): QueryRecordsByRecipientAddrResponse;
    toAmino(message: QueryRecordsByRecipientAddrResponse): QueryRecordsByRecipientAddrResponseAmino;
    fromAminoMsg(object: QueryRecordsByRecipientAddrResponseAminoMsg): QueryRecordsByRecipientAddrResponse;
    fromProtoMsg(message: QueryRecordsByRecipientAddrResponseProtoMsg): QueryRecordsByRecipientAddrResponse;
    toProto(message: QueryRecordsByRecipientAddrResponse): Uint8Array;
    toProtoMsg(message: QueryRecordsByRecipientAddrResponse): QueryRecordsByRecipientAddrResponseProtoMsg;
};
export declare const QueryClaimsByTypeRequest: {
    typeUrl: string;
    encode(message: QueryClaimsByTypeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimsByTypeRequest;
    fromPartial(object: Partial<QueryClaimsByTypeRequest>): QueryClaimsByTypeRequest;
    fromAmino(object: QueryClaimsByTypeRequestAmino): QueryClaimsByTypeRequest;
    toAmino(message: QueryClaimsByTypeRequest): QueryClaimsByTypeRequestAmino;
    fromAminoMsg(object: QueryClaimsByTypeRequestAminoMsg): QueryClaimsByTypeRequest;
    fromProtoMsg(message: QueryClaimsByTypeRequestProtoMsg): QueryClaimsByTypeRequest;
    toProto(message: QueryClaimsByTypeRequest): Uint8Array;
    toProtoMsg(message: QueryClaimsByTypeRequest): QueryClaimsByTypeRequestProtoMsg;
};
export declare const QueryClaimsResponse: {
    typeUrl: string;
    encode(message: QueryClaimsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimsResponse;
    fromPartial(object: Partial<QueryClaimsResponse>): QueryClaimsResponse;
    fromAmino(object: QueryClaimsResponseAmino): QueryClaimsResponse;
    toAmino(message: QueryClaimsResponse): QueryClaimsResponseAmino;
    fromAminoMsg(object: QueryClaimsResponseAminoMsg): QueryClaimsResponse;
    fromProtoMsg(message: QueryClaimsResponseProtoMsg): QueryClaimsResponse;
    toProto(message: QueryClaimsResponse): Uint8Array;
    toProtoMsg(message: QueryClaimsResponse): QueryClaimsResponseProtoMsg;
};
