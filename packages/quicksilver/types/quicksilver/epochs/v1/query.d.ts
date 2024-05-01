import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
export interface QueryEpochsInfoRequest {
    pagination?: PageRequest;
}
export interface QueryEpochsInfoRequestProtoMsg {
    typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoRequest";
    value: Uint8Array;
}
export interface QueryEpochsInfoRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryEpochsInfoRequestAminoMsg {
    type: "/quicksilver.epochs.v1.QueryEpochsInfoRequest";
    value: QueryEpochsInfoRequestAmino;
}
export interface QueryEpochsInfoRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryEpochsInfoResponse {
    epochs: EpochInfo[];
    pagination?: PageResponse;
}
export interface QueryEpochsInfoResponseProtoMsg {
    typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoResponse";
    value: Uint8Array;
}
export interface QueryEpochsInfoResponseAmino {
    epochs?: EpochInfoAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryEpochsInfoResponseAminoMsg {
    type: "/quicksilver.epochs.v1.QueryEpochsInfoResponse";
    value: QueryEpochsInfoResponseAmino;
}
export interface QueryEpochsInfoResponseSDKType {
    epochs: EpochInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryCurrentEpochRequest {
    identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
    typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochRequest";
    value: Uint8Array;
}
export interface QueryCurrentEpochRequestAmino {
    identifier?: string;
}
export interface QueryCurrentEpochRequestAminoMsg {
    type: "/quicksilver.epochs.v1.QueryCurrentEpochRequest";
    value: QueryCurrentEpochRequestAmino;
}
export interface QueryCurrentEpochRequestSDKType {
    identifier: string;
}
export interface QueryCurrentEpochResponse {
    currentEpoch: bigint;
}
export interface QueryCurrentEpochResponseProtoMsg {
    typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochResponse";
    value: Uint8Array;
}
export interface QueryCurrentEpochResponseAmino {
    current_epoch?: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
    type: "/quicksilver.epochs.v1.QueryCurrentEpochResponse";
    value: QueryCurrentEpochResponseAmino;
}
export interface QueryCurrentEpochResponseSDKType {
    current_epoch: bigint;
}
export declare const QueryEpochsInfoRequest: {
    typeUrl: string;
    encode(message: QueryEpochsInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEpochsInfoRequest;
    fromPartial(object: Partial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest;
    fromAmino(object: QueryEpochsInfoRequestAmino): QueryEpochsInfoRequest;
    toAmino(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestAmino;
    fromAminoMsg(object: QueryEpochsInfoRequestAminoMsg): QueryEpochsInfoRequest;
    fromProtoMsg(message: QueryEpochsInfoRequestProtoMsg): QueryEpochsInfoRequest;
    toProto(message: QueryEpochsInfoRequest): Uint8Array;
    toProtoMsg(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestProtoMsg;
};
export declare const QueryEpochsInfoResponse: {
    typeUrl: string;
    encode(message: QueryEpochsInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEpochsInfoResponse;
    fromPartial(object: Partial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse;
    fromAmino(object: QueryEpochsInfoResponseAmino): QueryEpochsInfoResponse;
    toAmino(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseAmino;
    fromAminoMsg(object: QueryEpochsInfoResponseAminoMsg): QueryEpochsInfoResponse;
    fromProtoMsg(message: QueryEpochsInfoResponseProtoMsg): QueryEpochsInfoResponse;
    toProto(message: QueryEpochsInfoResponse): Uint8Array;
    toProtoMsg(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseProtoMsg;
};
export declare const QueryCurrentEpochRequest: {
    typeUrl: string;
    encode(message: QueryCurrentEpochRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCurrentEpochRequest;
    fromPartial(object: Partial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest;
    fromAmino(object: QueryCurrentEpochRequestAmino): QueryCurrentEpochRequest;
    toAmino(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAmino;
    fromAminoMsg(object: QueryCurrentEpochRequestAminoMsg): QueryCurrentEpochRequest;
    fromProtoMsg(message: QueryCurrentEpochRequestProtoMsg): QueryCurrentEpochRequest;
    toProto(message: QueryCurrentEpochRequest): Uint8Array;
    toProtoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestProtoMsg;
};
export declare const QueryCurrentEpochResponse: {
    typeUrl: string;
    encode(message: QueryCurrentEpochResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCurrentEpochResponse;
    fromPartial(object: Partial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse;
    fromAmino(object: QueryCurrentEpochResponseAmino): QueryCurrentEpochResponse;
    toAmino(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAmino;
    fromAminoMsg(object: QueryCurrentEpochResponseAminoMsg): QueryCurrentEpochResponse;
    fromProtoMsg(message: QueryCurrentEpochResponseProtoMsg): QueryCurrentEpochResponse;
    toProto(message: QueryCurrentEpochResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseProtoMsg;
};
