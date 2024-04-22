import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { BinaryWriter } from "../../binary";
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequest {
    path: string;
}
export interface QueryDataRequestProtoMsg {
    typeUrl: "/agoric.vstorage.QueryDataRequest";
    value: Uint8Array;
}
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequestAmino {
    path?: string;
}
export interface QueryDataRequestAminoMsg {
    type: "/agoric.vstorage.QueryDataRequest";
    value: QueryDataRequestAmino;
}
/** QueryDataRequest is the vstorage path data query. */
export interface QueryDataRequestSDKType {
    path: string;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponse {
    value: string;
}
export interface QueryDataResponseProtoMsg {
    typeUrl: "/agoric.vstorage.QueryDataResponse";
    value: Uint8Array;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponseAmino {
    value?: string;
}
export interface QueryDataResponseAminoMsg {
    type: "/agoric.vstorage.QueryDataResponse";
    value: QueryDataResponseAmino;
}
/** QueryDataResponse is the vstorage path data response. */
export interface QueryDataResponseSDKType {
    value: string;
}
/** QueryCapDataRequest contains a path and formatting configuration. */
export interface QueryCapDataRequest {
    path: string;
    /**
     * mediaType must be an actual media type in the registry at
     * https://www.iana.org/assignments/media-types/media-types.xhtml
     * or a special value that does not conflict with the media type syntax.
     * The only valid value is "JSON Lines", which is also the default.
     */
    mediaType: string;
    /**
     * itemFormat, if present, must be the special value "flat" to indicate that
     * the deep structure of each item should be flattened into a single level
     * with kebab-case keys (e.g., `{ "metrics": { "min": 0, "max": 88 } }` as
     * `{ "metrics-min": 0, "metrics-max": 88 }`).
     */
    itemFormat: string;
    /**
     * remotableValueFormat indicates how to transform references to opaque but
     * distinguishable Remotables into readable embedded representations.
     * * "object" represents each Remotable as an `{ id, allegedName }` object, e.g. `{ "id": "board007", "allegedName": "IST brand" }`.
     * * "string" represents each Remotable as a string with bracket-wrapped contents including its alleged name and id, e.g. "[Alleged: IST brand <board007>]".
     */
    remotableValueFormat: string;
}
export interface QueryCapDataRequestProtoMsg {
    typeUrl: "/agoric.vstorage.QueryCapDataRequest";
    value: Uint8Array;
}
/** QueryCapDataRequest contains a path and formatting configuration. */
export interface QueryCapDataRequestAmino {
    path?: string;
    /**
     * mediaType must be an actual media type in the registry at
     * https://www.iana.org/assignments/media-types/media-types.xhtml
     * or a special value that does not conflict with the media type syntax.
     * The only valid value is "JSON Lines", which is also the default.
     */
    media_type?: string;
    /**
     * itemFormat, if present, must be the special value "flat" to indicate that
     * the deep structure of each item should be flattened into a single level
     * with kebab-case keys (e.g., `{ "metrics": { "min": 0, "max": 88 } }` as
     * `{ "metrics-min": 0, "metrics-max": 88 }`).
     */
    item_format?: string;
    /**
     * remotableValueFormat indicates how to transform references to opaque but
     * distinguishable Remotables into readable embedded representations.
     * * "object" represents each Remotable as an `{ id, allegedName }` object, e.g. `{ "id": "board007", "allegedName": "IST brand" }`.
     * * "string" represents each Remotable as a string with bracket-wrapped contents including its alleged name and id, e.g. "[Alleged: IST brand <board007>]".
     */
    remotable_value_format?: string;
}
export interface QueryCapDataRequestAminoMsg {
    type: "/agoric.vstorage.QueryCapDataRequest";
    value: QueryCapDataRequestAmino;
}
/** QueryCapDataRequest contains a path and formatting configuration. */
export interface QueryCapDataRequestSDKType {
    path: string;
    media_type: string;
    item_format: string;
    remotable_value_format: string;
}
/**
 * QueryCapDataResponse represents the result with the requested formatting,
 * reserving space for future metadata such as media type.
 */
export interface QueryCapDataResponse {
    blockHeight: string;
    value: string;
}
export interface QueryCapDataResponseProtoMsg {
    typeUrl: "/agoric.vstorage.QueryCapDataResponse";
    value: Uint8Array;
}
/**
 * QueryCapDataResponse represents the result with the requested formatting,
 * reserving space for future metadata such as media type.
 */
export interface QueryCapDataResponseAmino {
    block_height?: string;
    value?: string;
}
export interface QueryCapDataResponseAminoMsg {
    type: "/agoric.vstorage.QueryCapDataResponse";
    value: QueryCapDataResponseAmino;
}
/**
 * QueryCapDataResponse represents the result with the requested formatting,
 * reserving space for future metadata such as media type.
 */
export interface QueryCapDataResponseSDKType {
    block_height: string;
    value: string;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequest {
    path: string;
    pagination?: PageRequest;
}
export interface QueryChildrenRequestProtoMsg {
    typeUrl: "/agoric.vstorage.QueryChildrenRequest";
    value: Uint8Array;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequestAmino {
    path?: string;
    pagination?: PageRequestAmino;
}
export interface QueryChildrenRequestAminoMsg {
    type: "/agoric.vstorage.QueryChildrenRequest";
    value: QueryChildrenRequestAmino;
}
/** QueryChildrenRequest is the vstorage path children query. */
export interface QueryChildrenRequestSDKType {
    path: string;
    pagination?: PageRequestSDKType;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponse {
    children: string[];
    pagination?: PageResponse;
}
export interface QueryChildrenResponseProtoMsg {
    typeUrl: "/agoric.vstorage.QueryChildrenResponse";
    value: Uint8Array;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponseAmino {
    children?: string[];
    pagination?: PageResponseAmino;
}
export interface QueryChildrenResponseAminoMsg {
    type: "/agoric.vstorage.QueryChildrenResponse";
    value: QueryChildrenResponseAmino;
}
/** QueryChildrenResponse is the vstorage path children response. */
export interface QueryChildrenResponseSDKType {
    children: string[];
    pagination?: PageResponseSDKType;
}
export declare const QueryDataRequest: {
    typeUrl: string;
    encode(message: QueryDataRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDataRequest;
    fromPartial(object: Partial<QueryDataRequest>): QueryDataRequest;
    fromAmino(object: QueryDataRequestAmino): QueryDataRequest;
    toAmino(message: QueryDataRequest): QueryDataRequestAmino;
    fromAminoMsg(object: QueryDataRequestAminoMsg): QueryDataRequest;
    fromProtoMsg(message: QueryDataRequestProtoMsg): QueryDataRequest;
    toProto(message: QueryDataRequest): Uint8Array;
    toProtoMsg(message: QueryDataRequest): QueryDataRequestProtoMsg;
};
export declare const QueryDataResponse: {
    typeUrl: string;
    encode(message: QueryDataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDataResponse;
    fromPartial(object: Partial<QueryDataResponse>): QueryDataResponse;
    fromAmino(object: QueryDataResponseAmino): QueryDataResponse;
    toAmino(message: QueryDataResponse): QueryDataResponseAmino;
    fromAminoMsg(object: QueryDataResponseAminoMsg): QueryDataResponse;
    fromProtoMsg(message: QueryDataResponseProtoMsg): QueryDataResponse;
    toProto(message: QueryDataResponse): Uint8Array;
    toProtoMsg(message: QueryDataResponse): QueryDataResponseProtoMsg;
};
export declare const QueryCapDataRequest: {
    typeUrl: string;
    encode(message: QueryCapDataRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCapDataRequest;
    fromPartial(object: Partial<QueryCapDataRequest>): QueryCapDataRequest;
    fromAmino(object: QueryCapDataRequestAmino): QueryCapDataRequest;
    toAmino(message: QueryCapDataRequest): QueryCapDataRequestAmino;
    fromAminoMsg(object: QueryCapDataRequestAminoMsg): QueryCapDataRequest;
    fromProtoMsg(message: QueryCapDataRequestProtoMsg): QueryCapDataRequest;
    toProto(message: QueryCapDataRequest): Uint8Array;
    toProtoMsg(message: QueryCapDataRequest): QueryCapDataRequestProtoMsg;
};
export declare const QueryCapDataResponse: {
    typeUrl: string;
    encode(message: QueryCapDataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCapDataResponse;
    fromPartial(object: Partial<QueryCapDataResponse>): QueryCapDataResponse;
    fromAmino(object: QueryCapDataResponseAmino): QueryCapDataResponse;
    toAmino(message: QueryCapDataResponse): QueryCapDataResponseAmino;
    fromAminoMsg(object: QueryCapDataResponseAminoMsg): QueryCapDataResponse;
    fromProtoMsg(message: QueryCapDataResponseProtoMsg): QueryCapDataResponse;
    toProto(message: QueryCapDataResponse): Uint8Array;
    toProtoMsg(message: QueryCapDataResponse): QueryCapDataResponseProtoMsg;
};
export declare const QueryChildrenRequest: {
    typeUrl: string;
    encode(message: QueryChildrenRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryChildrenRequest;
    fromPartial(object: Partial<QueryChildrenRequest>): QueryChildrenRequest;
    fromAmino(object: QueryChildrenRequestAmino): QueryChildrenRequest;
    toAmino(message: QueryChildrenRequest): QueryChildrenRequestAmino;
    fromAminoMsg(object: QueryChildrenRequestAminoMsg): QueryChildrenRequest;
    fromProtoMsg(message: QueryChildrenRequestProtoMsg): QueryChildrenRequest;
    toProto(message: QueryChildrenRequest): Uint8Array;
    toProtoMsg(message: QueryChildrenRequest): QueryChildrenRequestProtoMsg;
};
export declare const QueryChildrenResponse: {
    typeUrl: string;
    encode(message: QueryChildrenResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryChildrenResponse;
    fromPartial(object: Partial<QueryChildrenResponse>): QueryChildrenResponse;
    fromAmino(object: QueryChildrenResponseAmino): QueryChildrenResponse;
    toAmino(message: QueryChildrenResponse): QueryChildrenResponseAmino;
    fromAminoMsg(object: QueryChildrenResponseAminoMsg): QueryChildrenResponse;
    fromProtoMsg(message: QueryChildrenResponseProtoMsg): QueryChildrenResponse;
    toProto(message: QueryChildrenResponse): Uint8Array;
    toProtoMsg(message: QueryChildrenResponse): QueryChildrenResponseProtoMsg;
};
