import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { MTP, MTPAmino, MTPSDKType } from "./types";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface MTPRequest {
    address: string;
    id: bigint;
}
export interface MTPRequestProtoMsg {
    typeUrl: "/sifnode.margin.v1.MTPRequest";
    value: Uint8Array;
}
export interface MTPRequestAmino {
    address?: string;
    id?: string;
}
export interface MTPRequestAminoMsg {
    type: "/sifnode.margin.v1.MTPRequest";
    value: MTPRequestAmino;
}
export interface MTPRequestSDKType {
    address: string;
    id: bigint;
}
export interface MTPResponse {
    mtp?: MTP;
}
export interface MTPResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MTPResponse";
    value: Uint8Array;
}
export interface MTPResponseAmino {
    mtp?: MTPAmino;
}
export interface MTPResponseAminoMsg {
    type: "/sifnode.margin.v1.MTPResponse";
    value: MTPResponseAmino;
}
export interface MTPResponseSDKType {
    mtp?: MTPSDKType;
}
export interface PositionsForAddressRequest {
    address: string;
    pagination?: PageRequest;
}
export interface PositionsForAddressRequestProtoMsg {
    typeUrl: "/sifnode.margin.v1.PositionsForAddressRequest";
    value: Uint8Array;
}
export interface PositionsForAddressRequestAmino {
    address?: string;
    pagination?: PageRequestAmino;
}
export interface PositionsForAddressRequestAminoMsg {
    type: "/sifnode.margin.v1.PositionsForAddressRequest";
    value: PositionsForAddressRequestAmino;
}
export interface PositionsForAddressRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface PositionsForAddressResponse {
    mtps: MTP[];
    pagination?: PageResponse;
}
export interface PositionsForAddressResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.PositionsForAddressResponse";
    value: Uint8Array;
}
export interface PositionsForAddressResponseAmino {
    mtps?: MTPAmino[];
    pagination?: PageResponseAmino;
}
export interface PositionsForAddressResponseAminoMsg {
    type: "/sifnode.margin.v1.PositionsForAddressResponse";
    value: PositionsForAddressResponseAmino;
}
export interface PositionsForAddressResponseSDKType {
    mtps: MTPSDKType[];
    pagination?: PageResponseSDKType;
}
export interface PositionsByPoolRequest {
    asset: string;
    pagination?: PageRequest;
}
export interface PositionsByPoolRequestProtoMsg {
    typeUrl: "/sifnode.margin.v1.PositionsByPoolRequest";
    value: Uint8Array;
}
export interface PositionsByPoolRequestAmino {
    asset?: string;
    pagination?: PageRequestAmino;
}
export interface PositionsByPoolRequestAminoMsg {
    type: "/sifnode.margin.v1.PositionsByPoolRequest";
    value: PositionsByPoolRequestAmino;
}
export interface PositionsByPoolRequestSDKType {
    asset: string;
    pagination?: PageRequestSDKType;
}
export interface PositionsByPoolResponse {
    mtps: MTP[];
    pagination?: PageResponse;
}
export interface PositionsByPoolResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.PositionsByPoolResponse";
    value: Uint8Array;
}
export interface PositionsByPoolResponseAmino {
    mtps?: MTPAmino[];
    pagination?: PageResponseAmino;
}
export interface PositionsByPoolResponseAminoMsg {
    type: "/sifnode.margin.v1.PositionsByPoolResponse";
    value: PositionsByPoolResponseAmino;
}
export interface PositionsByPoolResponseSDKType {
    mtps: MTPSDKType[];
    pagination?: PageResponseSDKType;
}
export interface PositionsRequest {
    pagination?: PageRequest;
}
export interface PositionsRequestProtoMsg {
    typeUrl: "/sifnode.margin.v1.PositionsRequest";
    value: Uint8Array;
}
export interface PositionsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface PositionsRequestAminoMsg {
    type: "/sifnode.margin.v1.PositionsRequest";
    value: PositionsRequestAmino;
}
export interface PositionsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface PositionsResponse {
    mtps: MTP[];
    pagination?: PageResponse;
}
export interface PositionsResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.PositionsResponse";
    value: Uint8Array;
}
export interface PositionsResponseAmino {
    mtps?: MTPAmino[];
    pagination?: PageResponseAmino;
}
export interface PositionsResponseAminoMsg {
    type: "/sifnode.margin.v1.PositionsResponse";
    value: PositionsResponseAmino;
}
export interface PositionsResponseSDKType {
    mtps: MTPSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/sifnode.margin.v1.ParamsRequest";
    value: Uint8Array;
}
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "/sifnode.margin.v1.ParamsRequest";
    value: ParamsRequestAmino;
}
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params?: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "/sifnode.margin.v1.ParamsResponse";
    value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface StatusRequest {
}
export interface StatusRequestProtoMsg {
    typeUrl: "/sifnode.margin.v1.StatusRequest";
    value: Uint8Array;
}
export interface StatusRequestAmino {
}
export interface StatusRequestAminoMsg {
    type: "/sifnode.margin.v1.StatusRequest";
    value: StatusRequestAmino;
}
export interface StatusRequestSDKType {
}
export interface StatusResponse {
    openMtpCount: bigint;
    lifetimeMtpCount: bigint;
}
export interface StatusResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.StatusResponse";
    value: Uint8Array;
}
export interface StatusResponseAmino {
    open_mtp_count?: string;
    lifetime_mtp_count?: string;
}
export interface StatusResponseAminoMsg {
    type: "/sifnode.margin.v1.StatusResponse";
    value: StatusResponseAmino;
}
export interface StatusResponseSDKType {
    open_mtp_count: bigint;
    lifetime_mtp_count: bigint;
}
export interface WhitelistRequest {
    pagination?: PageRequest;
}
export interface WhitelistRequestProtoMsg {
    typeUrl: "/sifnode.margin.v1.WhitelistRequest";
    value: Uint8Array;
}
export interface WhitelistRequestAmino {
    pagination?: PageRequestAmino;
}
export interface WhitelistRequestAminoMsg {
    type: "/sifnode.margin.v1.WhitelistRequest";
    value: WhitelistRequestAmino;
}
export interface WhitelistRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface WhitelistResponse {
    whitelist: string[];
    pagination?: PageResponse;
}
export interface WhitelistResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.WhitelistResponse";
    value: Uint8Array;
}
export interface WhitelistResponseAmino {
    whitelist?: string[];
    pagination?: PageResponseAmino;
}
export interface WhitelistResponseAminoMsg {
    type: "/sifnode.margin.v1.WhitelistResponse";
    value: WhitelistResponseAmino;
}
export interface WhitelistResponseSDKType {
    whitelist: string[];
    pagination?: PageResponseSDKType;
}
export interface GetSQParamsRequest {
    pool: string;
}
export interface GetSQParamsRequestProtoMsg {
    typeUrl: "/sifnode.margin.v1.GetSQParamsRequest";
    value: Uint8Array;
}
export interface GetSQParamsRequestAmino {
    pool?: string;
}
export interface GetSQParamsRequestAminoMsg {
    type: "/sifnode.margin.v1.GetSQParamsRequest";
    value: GetSQParamsRequestAmino;
}
export interface GetSQParamsRequestSDKType {
    pool: string;
}
export interface GetSQParamsResponse {
    beginBlock: bigint;
}
export interface GetSQParamsResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.GetSQParamsResponse";
    value: Uint8Array;
}
export interface GetSQParamsResponseAmino {
    begin_block?: string;
}
export interface GetSQParamsResponseAminoMsg {
    type: "/sifnode.margin.v1.GetSQParamsResponse";
    value: GetSQParamsResponseAmino;
}
export interface GetSQParamsResponseSDKType {
    begin_block: bigint;
}
export interface IsWhitelistedRequest {
    address: string;
}
export interface IsWhitelistedRequestProtoMsg {
    typeUrl: "/sifnode.margin.v1.IsWhitelistedRequest";
    value: Uint8Array;
}
export interface IsWhitelistedRequestAmino {
    address?: string;
}
export interface IsWhitelistedRequestAminoMsg {
    type: "/sifnode.margin.v1.IsWhitelistedRequest";
    value: IsWhitelistedRequestAmino;
}
export interface IsWhitelistedRequestSDKType {
    address: string;
}
export interface IsWhitelistedResponse {
    address: string;
    isWhitelisted: boolean;
}
export interface IsWhitelistedResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.IsWhitelistedResponse";
    value: Uint8Array;
}
export interface IsWhitelistedResponseAmino {
    address?: string;
    is_whitelisted?: boolean;
}
export interface IsWhitelistedResponseAminoMsg {
    type: "/sifnode.margin.v1.IsWhitelistedResponse";
    value: IsWhitelistedResponseAmino;
}
export interface IsWhitelistedResponseSDKType {
    address: string;
    is_whitelisted: boolean;
}
export declare const MTPRequest: {
    typeUrl: string;
    encode(message: MTPRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MTPRequest;
    fromPartial(object: Partial<MTPRequest>): MTPRequest;
    fromAmino(object: MTPRequestAmino): MTPRequest;
    toAmino(message: MTPRequest): MTPRequestAmino;
    fromAminoMsg(object: MTPRequestAminoMsg): MTPRequest;
    fromProtoMsg(message: MTPRequestProtoMsg): MTPRequest;
    toProto(message: MTPRequest): Uint8Array;
    toProtoMsg(message: MTPRequest): MTPRequestProtoMsg;
};
export declare const MTPResponse: {
    typeUrl: string;
    encode(message: MTPResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MTPResponse;
    fromPartial(object: Partial<MTPResponse>): MTPResponse;
    fromAmino(object: MTPResponseAmino): MTPResponse;
    toAmino(message: MTPResponse): MTPResponseAmino;
    fromAminoMsg(object: MTPResponseAminoMsg): MTPResponse;
    fromProtoMsg(message: MTPResponseProtoMsg): MTPResponse;
    toProto(message: MTPResponse): Uint8Array;
    toProtoMsg(message: MTPResponse): MTPResponseProtoMsg;
};
export declare const PositionsForAddressRequest: {
    typeUrl: string;
    encode(message: PositionsForAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PositionsForAddressRequest;
    fromPartial(object: Partial<PositionsForAddressRequest>): PositionsForAddressRequest;
    fromAmino(object: PositionsForAddressRequestAmino): PositionsForAddressRequest;
    toAmino(message: PositionsForAddressRequest): PositionsForAddressRequestAmino;
    fromAminoMsg(object: PositionsForAddressRequestAminoMsg): PositionsForAddressRequest;
    fromProtoMsg(message: PositionsForAddressRequestProtoMsg): PositionsForAddressRequest;
    toProto(message: PositionsForAddressRequest): Uint8Array;
    toProtoMsg(message: PositionsForAddressRequest): PositionsForAddressRequestProtoMsg;
};
export declare const PositionsForAddressResponse: {
    typeUrl: string;
    encode(message: PositionsForAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PositionsForAddressResponse;
    fromPartial(object: Partial<PositionsForAddressResponse>): PositionsForAddressResponse;
    fromAmino(object: PositionsForAddressResponseAmino): PositionsForAddressResponse;
    toAmino(message: PositionsForAddressResponse): PositionsForAddressResponseAmino;
    fromAminoMsg(object: PositionsForAddressResponseAminoMsg): PositionsForAddressResponse;
    fromProtoMsg(message: PositionsForAddressResponseProtoMsg): PositionsForAddressResponse;
    toProto(message: PositionsForAddressResponse): Uint8Array;
    toProtoMsg(message: PositionsForAddressResponse): PositionsForAddressResponseProtoMsg;
};
export declare const PositionsByPoolRequest: {
    typeUrl: string;
    encode(message: PositionsByPoolRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PositionsByPoolRequest;
    fromPartial(object: Partial<PositionsByPoolRequest>): PositionsByPoolRequest;
    fromAmino(object: PositionsByPoolRequestAmino): PositionsByPoolRequest;
    toAmino(message: PositionsByPoolRequest): PositionsByPoolRequestAmino;
    fromAminoMsg(object: PositionsByPoolRequestAminoMsg): PositionsByPoolRequest;
    fromProtoMsg(message: PositionsByPoolRequestProtoMsg): PositionsByPoolRequest;
    toProto(message: PositionsByPoolRequest): Uint8Array;
    toProtoMsg(message: PositionsByPoolRequest): PositionsByPoolRequestProtoMsg;
};
export declare const PositionsByPoolResponse: {
    typeUrl: string;
    encode(message: PositionsByPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PositionsByPoolResponse;
    fromPartial(object: Partial<PositionsByPoolResponse>): PositionsByPoolResponse;
    fromAmino(object: PositionsByPoolResponseAmino): PositionsByPoolResponse;
    toAmino(message: PositionsByPoolResponse): PositionsByPoolResponseAmino;
    fromAminoMsg(object: PositionsByPoolResponseAminoMsg): PositionsByPoolResponse;
    fromProtoMsg(message: PositionsByPoolResponseProtoMsg): PositionsByPoolResponse;
    toProto(message: PositionsByPoolResponse): Uint8Array;
    toProtoMsg(message: PositionsByPoolResponse): PositionsByPoolResponseProtoMsg;
};
export declare const PositionsRequest: {
    typeUrl: string;
    encode(message: PositionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PositionsRequest;
    fromPartial(object: Partial<PositionsRequest>): PositionsRequest;
    fromAmino(object: PositionsRequestAmino): PositionsRequest;
    toAmino(message: PositionsRequest): PositionsRequestAmino;
    fromAminoMsg(object: PositionsRequestAminoMsg): PositionsRequest;
    fromProtoMsg(message: PositionsRequestProtoMsg): PositionsRequest;
    toProto(message: PositionsRequest): Uint8Array;
    toProtoMsg(message: PositionsRequest): PositionsRequestProtoMsg;
};
export declare const PositionsResponse: {
    typeUrl: string;
    encode(message: PositionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PositionsResponse;
    fromPartial(object: Partial<PositionsResponse>): PositionsResponse;
    fromAmino(object: PositionsResponseAmino): PositionsResponse;
    toAmino(message: PositionsResponse): PositionsResponseAmino;
    fromAminoMsg(object: PositionsResponseAminoMsg): PositionsResponse;
    fromProtoMsg(message: PositionsResponseProtoMsg): PositionsResponse;
    toProto(message: PositionsResponse): Uint8Array;
    toProtoMsg(message: PositionsResponse): PositionsResponseProtoMsg;
};
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
    fromAmino(_: ParamsRequestAmino): ParamsRequest;
    toAmino(_: ParamsRequest): ParamsRequestAmino;
    fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest;
    fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest;
    toProto(message: ParamsRequest): Uint8Array;
    toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
    fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse;
    fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse;
    toProto(message: ParamsResponse): Uint8Array;
    toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg;
};
export declare const StatusRequest: {
    typeUrl: string;
    encode(_: StatusRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): StatusRequest;
    fromPartial(_: Partial<StatusRequest>): StatusRequest;
    fromAmino(_: StatusRequestAmino): StatusRequest;
    toAmino(_: StatusRequest): StatusRequestAmino;
    fromAminoMsg(object: StatusRequestAminoMsg): StatusRequest;
    fromProtoMsg(message: StatusRequestProtoMsg): StatusRequest;
    toProto(message: StatusRequest): Uint8Array;
    toProtoMsg(message: StatusRequest): StatusRequestProtoMsg;
};
export declare const StatusResponse: {
    typeUrl: string;
    encode(message: StatusResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StatusResponse;
    fromPartial(object: Partial<StatusResponse>): StatusResponse;
    fromAmino(object: StatusResponseAmino): StatusResponse;
    toAmino(message: StatusResponse): StatusResponseAmino;
    fromAminoMsg(object: StatusResponseAminoMsg): StatusResponse;
    fromProtoMsg(message: StatusResponseProtoMsg): StatusResponse;
    toProto(message: StatusResponse): Uint8Array;
    toProtoMsg(message: StatusResponse): StatusResponseProtoMsg;
};
export declare const WhitelistRequest: {
    typeUrl: string;
    encode(message: WhitelistRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WhitelistRequest;
    fromPartial(object: Partial<WhitelistRequest>): WhitelistRequest;
    fromAmino(object: WhitelistRequestAmino): WhitelistRequest;
    toAmino(message: WhitelistRequest): WhitelistRequestAmino;
    fromAminoMsg(object: WhitelistRequestAminoMsg): WhitelistRequest;
    fromProtoMsg(message: WhitelistRequestProtoMsg): WhitelistRequest;
    toProto(message: WhitelistRequest): Uint8Array;
    toProtoMsg(message: WhitelistRequest): WhitelistRequestProtoMsg;
};
export declare const WhitelistResponse: {
    typeUrl: string;
    encode(message: WhitelistResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WhitelistResponse;
    fromPartial(object: Partial<WhitelistResponse>): WhitelistResponse;
    fromAmino(object: WhitelistResponseAmino): WhitelistResponse;
    toAmino(message: WhitelistResponse): WhitelistResponseAmino;
    fromAminoMsg(object: WhitelistResponseAminoMsg): WhitelistResponse;
    fromProtoMsg(message: WhitelistResponseProtoMsg): WhitelistResponse;
    toProto(message: WhitelistResponse): Uint8Array;
    toProtoMsg(message: WhitelistResponse): WhitelistResponseProtoMsg;
};
export declare const GetSQParamsRequest: {
    typeUrl: string;
    encode(message: GetSQParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GetSQParamsRequest;
    fromPartial(object: Partial<GetSQParamsRequest>): GetSQParamsRequest;
    fromAmino(object: GetSQParamsRequestAmino): GetSQParamsRequest;
    toAmino(message: GetSQParamsRequest): GetSQParamsRequestAmino;
    fromAminoMsg(object: GetSQParamsRequestAminoMsg): GetSQParamsRequest;
    fromProtoMsg(message: GetSQParamsRequestProtoMsg): GetSQParamsRequest;
    toProto(message: GetSQParamsRequest): Uint8Array;
    toProtoMsg(message: GetSQParamsRequest): GetSQParamsRequestProtoMsg;
};
export declare const GetSQParamsResponse: {
    typeUrl: string;
    encode(message: GetSQParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GetSQParamsResponse;
    fromPartial(object: Partial<GetSQParamsResponse>): GetSQParamsResponse;
    fromAmino(object: GetSQParamsResponseAmino): GetSQParamsResponse;
    toAmino(message: GetSQParamsResponse): GetSQParamsResponseAmino;
    fromAminoMsg(object: GetSQParamsResponseAminoMsg): GetSQParamsResponse;
    fromProtoMsg(message: GetSQParamsResponseProtoMsg): GetSQParamsResponse;
    toProto(message: GetSQParamsResponse): Uint8Array;
    toProtoMsg(message: GetSQParamsResponse): GetSQParamsResponseProtoMsg;
};
export declare const IsWhitelistedRequest: {
    typeUrl: string;
    encode(message: IsWhitelistedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IsWhitelistedRequest;
    fromPartial(object: Partial<IsWhitelistedRequest>): IsWhitelistedRequest;
    fromAmino(object: IsWhitelistedRequestAmino): IsWhitelistedRequest;
    toAmino(message: IsWhitelistedRequest): IsWhitelistedRequestAmino;
    fromAminoMsg(object: IsWhitelistedRequestAminoMsg): IsWhitelistedRequest;
    fromProtoMsg(message: IsWhitelistedRequestProtoMsg): IsWhitelistedRequest;
    toProto(message: IsWhitelistedRequest): Uint8Array;
    toProtoMsg(message: IsWhitelistedRequest): IsWhitelistedRequestProtoMsg;
};
export declare const IsWhitelistedResponse: {
    typeUrl: string;
    encode(message: IsWhitelistedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IsWhitelistedResponse;
    fromPartial(object: Partial<IsWhitelistedResponse>): IsWhitelistedResponse;
    fromAmino(object: IsWhitelistedResponseAmino): IsWhitelistedResponse;
    toAmino(message: IsWhitelistedResponse): IsWhitelistedResponseAmino;
    fromAminoMsg(object: IsWhitelistedResponseAminoMsg): IsWhitelistedResponse;
    fromProtoMsg(message: IsWhitelistedResponseProtoMsg): IsWhitelistedResponse;
    toProto(message: IsWhitelistedResponse): Uint8Array;
    toProtoMsg(message: IsWhitelistedResponse): IsWhitelistedResponseProtoMsg;
};
