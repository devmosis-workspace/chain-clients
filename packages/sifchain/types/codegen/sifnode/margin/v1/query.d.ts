import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { MTP, MTPSDKType, Params, ParamsSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MTPRequest {
    address: string;
    id: Long;
}
export interface MTPRequestSDKType {
    address: string;
    id: Long;
}
export interface MTPResponse {
    mtp?: MTP;
}
export interface MTPResponseSDKType {
    mtp?: MTPSDKType;
}
export interface PositionsForAddressRequest {
    address: string;
    pagination?: PageRequest;
}
export interface PositionsForAddressRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface PositionsForAddressResponse {
    mtps: MTP[];
    pagination?: PageResponse;
}
export interface PositionsForAddressResponseSDKType {
    mtps: MTPSDKType[];
    pagination?: PageResponseSDKType;
}
export interface PositionsByPoolRequest {
    asset: string;
    pagination?: PageRequest;
}
export interface PositionsByPoolRequestSDKType {
    asset: string;
    pagination?: PageRequestSDKType;
}
export interface PositionsByPoolResponse {
    mtps: MTP[];
    pagination?: PageResponse;
}
export interface PositionsByPoolResponseSDKType {
    mtps: MTPSDKType[];
    pagination?: PageResponseSDKType;
}
export interface PositionsRequest {
    pagination?: PageRequest;
}
export interface PositionsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface PositionsResponse {
    mtps: MTP[];
    pagination?: PageResponse;
}
export interface PositionsResponseSDKType {
    mtps: MTPSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ParamsRequest {
}
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params?: Params;
}
export interface ParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface StatusRequest {
}
export interface StatusRequestSDKType {
}
export interface StatusResponse {
    openMtpCount: Long;
    lifetimeMtpCount: Long;
}
export interface StatusResponseSDKType {
    open_mtp_count: Long;
    lifetime_mtp_count: Long;
}
export interface WhitelistRequest {
    pagination?: PageRequest;
}
export interface WhitelistRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface WhitelistResponse {
    whitelist: string[];
    pagination?: PageResponse;
}
export interface WhitelistResponseSDKType {
    whitelist: string[];
    pagination?: PageResponseSDKType;
}
export interface GetSQParamsRequest {
    pool: string;
}
export interface GetSQParamsRequestSDKType {
    pool: string;
}
export interface GetSQParamsResponse {
    beginBlock: Long;
}
export interface GetSQParamsResponseSDKType {
    begin_block: Long;
}
export interface IsWhitelistedRequest {
    address: string;
}
export interface IsWhitelistedRequestSDKType {
    address: string;
}
export interface IsWhitelistedResponse {
    address: string;
    isWhitelisted: boolean;
}
export interface IsWhitelistedResponseSDKType {
    address: string;
    is_whitelisted: boolean;
}
export declare const MTPRequest: {
    encode(message: MTPRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MTPRequest;
    fromPartial(object: Partial<MTPRequest>): MTPRequest;
};
export declare const MTPResponse: {
    encode(message: MTPResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MTPResponse;
    fromPartial(object: Partial<MTPResponse>): MTPResponse;
};
export declare const PositionsForAddressRequest: {
    encode(message: PositionsForAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PositionsForAddressRequest;
    fromPartial(object: Partial<PositionsForAddressRequest>): PositionsForAddressRequest;
};
export declare const PositionsForAddressResponse: {
    encode(message: PositionsForAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PositionsForAddressResponse;
    fromPartial(object: Partial<PositionsForAddressResponse>): PositionsForAddressResponse;
};
export declare const PositionsByPoolRequest: {
    encode(message: PositionsByPoolRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PositionsByPoolRequest;
    fromPartial(object: Partial<PositionsByPoolRequest>): PositionsByPoolRequest;
};
export declare const PositionsByPoolResponse: {
    encode(message: PositionsByPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PositionsByPoolResponse;
    fromPartial(object: Partial<PositionsByPoolResponse>): PositionsByPoolResponse;
};
export declare const PositionsRequest: {
    encode(message: PositionsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PositionsRequest;
    fromPartial(object: Partial<PositionsRequest>): PositionsRequest;
};
export declare const PositionsResponse: {
    encode(message: PositionsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PositionsResponse;
    fromPartial(object: Partial<PositionsResponse>): PositionsResponse;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
};
export declare const StatusRequest: {
    encode(_: StatusRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): StatusRequest;
    fromPartial(_: Partial<StatusRequest>): StatusRequest;
};
export declare const StatusResponse: {
    encode(message: StatusResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StatusResponse;
    fromPartial(object: Partial<StatusResponse>): StatusResponse;
};
export declare const WhitelistRequest: {
    encode(message: WhitelistRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): WhitelistRequest;
    fromPartial(object: Partial<WhitelistRequest>): WhitelistRequest;
};
export declare const WhitelistResponse: {
    encode(message: WhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): WhitelistResponse;
    fromPartial(object: Partial<WhitelistResponse>): WhitelistResponse;
};
export declare const GetSQParamsRequest: {
    encode(message: GetSQParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GetSQParamsRequest;
    fromPartial(object: Partial<GetSQParamsRequest>): GetSQParamsRequest;
};
export declare const GetSQParamsResponse: {
    encode(message: GetSQParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GetSQParamsResponse;
    fromPartial(object: Partial<GetSQParamsResponse>): GetSQParamsResponse;
};
export declare const IsWhitelistedRequest: {
    encode(message: IsWhitelistedRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IsWhitelistedRequest;
    fromPartial(object: Partial<IsWhitelistedRequest>): IsWhitelistedRequest;
};
export declare const IsWhitelistedResponse: {
    encode(message: IsWhitelistedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IsWhitelistedResponse;
    fromPartial(object: Partial<IsWhitelistedResponse>): IsWhitelistedResponse;
};
