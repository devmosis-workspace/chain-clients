import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/**
 * QueryEpochsInfoRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryEpochsInfoRequestProtoMsg {
    typeUrl: "/evmos.epochs.v1.QueryEpochsInfoRequest";
    value: Uint8Array;
}
/**
 * QueryEpochsInfoRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryEpochsInfoRequestAminoMsg {
    type: "/evmos.epochs.v1.QueryEpochsInfoRequest";
    value: QueryEpochsInfoRequestAmino;
}
/**
 * QueryEpochsInfoRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoRequestSDKType {
    pagination: PageRequestSDKType;
}
/**
 * QueryEpochsInfoResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoResponse {
    /** epochs is a slice of all EpochInfos */
    epochs: EpochInfo[];
    /** pagination defines an optional pagination for the request. */
    pagination: PageResponse;
}
export interface QueryEpochsInfoResponseProtoMsg {
    typeUrl: "/evmos.epochs.v1.QueryEpochsInfoResponse";
    value: Uint8Array;
}
/**
 * QueryEpochsInfoResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoResponseAmino {
    /** epochs is a slice of all EpochInfos */
    epochs: EpochInfoAmino[];
    /** pagination defines an optional pagination for the request. */
    pagination?: PageResponseAmino;
}
export interface QueryEpochsInfoResponseAminoMsg {
    type: "/evmos.epochs.v1.QueryEpochsInfoResponse";
    value: QueryEpochsInfoResponseAmino;
}
/**
 * QueryEpochsInfoResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoResponseSDKType {
    epochs: EpochInfoSDKType[];
    pagination: PageResponseSDKType;
}
/**
 * QueryCurrentEpochRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochRequest {
    /** identifier of the current epoch */
    identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
    typeUrl: "/evmos.epochs.v1.QueryCurrentEpochRequest";
    value: Uint8Array;
}
/**
 * QueryCurrentEpochRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochRequestAmino {
    /** identifier of the current epoch */
    identifier: string;
}
export interface QueryCurrentEpochRequestAminoMsg {
    type: "/evmos.epochs.v1.QueryCurrentEpochRequest";
    value: QueryCurrentEpochRequestAmino;
}
/**
 * QueryCurrentEpochRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochRequestSDKType {
    identifier: string;
}
/**
 * QueryCurrentEpochResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochResponse {
    /** current_epoch is the number of the current epoch */
    currentEpoch: bigint;
}
export interface QueryCurrentEpochResponseProtoMsg {
    typeUrl: "/evmos.epochs.v1.QueryCurrentEpochResponse";
    value: Uint8Array;
}
/**
 * QueryCurrentEpochResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochResponseAmino {
    /** current_epoch is the number of the current epoch */
    current_epoch: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
    type: "/evmos.epochs.v1.QueryCurrentEpochResponse";
    value: QueryCurrentEpochResponseAmino;
}
/**
 * QueryCurrentEpochResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
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
