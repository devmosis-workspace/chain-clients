import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
export interface QueryResponseRecord {
    ipld: string;
    data: Uint8Array;
}
export interface QueryResponseRecordProtoMsg {
    typeUrl: "/likechain.iscn.QueryResponseRecord";
    value: Uint8Array;
}
export interface QueryResponseRecordAmino {
    ipld?: string;
    data?: string;
}
export interface QueryResponseRecordAminoMsg {
    type: "/likechain.iscn.QueryResponseRecord";
    value: QueryResponseRecordAmino;
}
export interface QueryResponseRecordSDKType {
    ipld: string;
    data: Uint8Array;
}
export interface QueryRecordsByIdRequest {
    /**
     * The ISCN ID of the record(s) to be queried.
     * Format: iscn://REGISTRY_NAME/CONTENT_ID[/VERSION]
     * If version part omitted, version is default to 0.
     * if non-zero version exists, then from_version and to_version are ignored.
     */
    iscnId: string;
    /**
     * The initial version in the resulting records.
     * If omitted or is 0, then it will be interpreted as the latest version.
     */
    fromVersion: bigint;
    /**
     * The final version in the resulting records.
     * If omitted or is 0, then it will be interpreted as the latest version.
     */
    toVersion: bigint;
}
export interface QueryRecordsByIdRequestProtoMsg {
    typeUrl: "/likechain.iscn.QueryRecordsByIdRequest";
    value: Uint8Array;
}
export interface QueryRecordsByIdRequestAmino {
    /**
     * The ISCN ID of the record(s) to be queried.
     * Format: iscn://REGISTRY_NAME/CONTENT_ID[/VERSION]
     * If version part omitted, version is default to 0.
     * if non-zero version exists, then from_version and to_version are ignored.
     */
    iscn_id?: string;
    /**
     * The initial version in the resulting records.
     * If omitted or is 0, then it will be interpreted as the latest version.
     */
    from_version?: string;
    /**
     * The final version in the resulting records.
     * If omitted or is 0, then it will be interpreted as the latest version.
     */
    to_version?: string;
}
export interface QueryRecordsByIdRequestAminoMsg {
    type: "/likechain.iscn.QueryRecordsByIdRequest";
    value: QueryRecordsByIdRequestAmino;
}
export interface QueryRecordsByIdRequestSDKType {
    iscn_id: string;
    from_version: bigint;
    to_version: bigint;
}
export interface QueryRecordsByIdResponse {
    owner: string;
    latestVersion: bigint;
    records: QueryResponseRecord[];
}
export interface QueryRecordsByIdResponseProtoMsg {
    typeUrl: "/likechain.iscn.QueryRecordsByIdResponse";
    value: Uint8Array;
}
export interface QueryRecordsByIdResponseAmino {
    owner?: string;
    latest_version?: string;
    records?: QueryResponseRecordAmino[];
}
export interface QueryRecordsByIdResponseAminoMsg {
    type: "/likechain.iscn.QueryRecordsByIdResponse";
    value: QueryRecordsByIdResponseAmino;
}
export interface QueryRecordsByIdResponseSDKType {
    owner: string;
    latest_version: bigint;
    records: QueryResponseRecordSDKType[];
}
export interface QueryRecordsByFingerprintRequest {
    /**
     * The fingerprint of the record(s) to be queried.
     * All fingerprints in records should be URIs.
     */
    fingerprint: string;
    /**
     * For pagination.
     * For the first query, fill in 0 or just omit this field.
     * For continuous queries, fill in the `next_sequence` field in the previous response.
     */
    fromSequence: bigint;
}
export interface QueryRecordsByFingerprintRequestProtoMsg {
    typeUrl: "/likechain.iscn.QueryRecordsByFingerprintRequest";
    value: Uint8Array;
}
export interface QueryRecordsByFingerprintRequestAmino {
    /**
     * The fingerprint of the record(s) to be queried.
     * All fingerprints in records should be URIs.
     */
    fingerprint?: string;
    /**
     * For pagination.
     * For the first query, fill in 0 or just omit this field.
     * For continuous queries, fill in the `next_sequence` field in the previous response.
     */
    from_sequence?: string;
}
export interface QueryRecordsByFingerprintRequestAminoMsg {
    type: "/likechain.iscn.QueryRecordsByFingerprintRequest";
    value: QueryRecordsByFingerprintRequestAmino;
}
export interface QueryRecordsByFingerprintRequestSDKType {
    fingerprint: string;
    from_sequence: bigint;
}
export interface QueryRecordsByFingerprintResponse {
    records: QueryResponseRecord[];
    /** For pagination. */
    nextSequence: bigint;
}
export interface QueryRecordsByFingerprintResponseProtoMsg {
    typeUrl: "/likechain.iscn.QueryRecordsByFingerprintResponse";
    value: Uint8Array;
}
export interface QueryRecordsByFingerprintResponseAmino {
    records?: QueryResponseRecordAmino[];
    /** For pagination. */
    next_sequence?: string;
}
export interface QueryRecordsByFingerprintResponseAminoMsg {
    type: "/likechain.iscn.QueryRecordsByFingerprintResponse";
    value: QueryRecordsByFingerprintResponseAmino;
}
export interface QueryRecordsByFingerprintResponseSDKType {
    records: QueryResponseRecordSDKType[];
    next_sequence: bigint;
}
export interface QueryRecordsByOwnerRequest {
    /** Owner address of the record(s) to be queried. */
    owner: string;
    /**
     * For pagination.
     * For the first query, fill in 0 or just omit this field.
     * For continuous queries, fill in the `next_sequence` field in the previous response.
     */
    fromSequence: bigint;
}
export interface QueryRecordsByOwnerRequestProtoMsg {
    typeUrl: "/likechain.iscn.QueryRecordsByOwnerRequest";
    value: Uint8Array;
}
export interface QueryRecordsByOwnerRequestAmino {
    /** Owner address of the record(s) to be queried. */
    owner?: string;
    /**
     * For pagination.
     * For the first query, fill in 0 or just omit this field.
     * For continuous queries, fill in the `next_sequence` field in the previous response.
     */
    from_sequence?: string;
}
export interface QueryRecordsByOwnerRequestAminoMsg {
    type: "/likechain.iscn.QueryRecordsByOwnerRequest";
    value: QueryRecordsByOwnerRequestAmino;
}
export interface QueryRecordsByOwnerRequestSDKType {
    owner: string;
    from_sequence: bigint;
}
export interface QueryRecordsByOwnerResponse {
    records: QueryResponseRecord[];
    nextSequence: bigint;
}
export interface QueryRecordsByOwnerResponseProtoMsg {
    typeUrl: "/likechain.iscn.QueryRecordsByOwnerResponse";
    value: Uint8Array;
}
export interface QueryRecordsByOwnerResponseAmino {
    records?: QueryResponseRecordAmino[];
    next_sequence?: string;
}
export interface QueryRecordsByOwnerResponseAminoMsg {
    type: "/likechain.iscn.QueryRecordsByOwnerResponse";
    value: QueryRecordsByOwnerResponseAmino;
}
export interface QueryRecordsByOwnerResponseSDKType {
    records: QueryResponseRecordSDKType[];
    next_sequence: bigint;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/likechain.iscn.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/likechain.iscn.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/likechain.iscn.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/likechain.iscn.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetCidRequest {
    cid: string;
}
export interface QueryGetCidRequestProtoMsg {
    typeUrl: "/likechain.iscn.QueryGetCidRequest";
    value: Uint8Array;
}
export interface QueryGetCidRequestAmino {
    cid?: string;
}
export interface QueryGetCidRequestAminoMsg {
    type: "/likechain.iscn.QueryGetCidRequest";
    value: QueryGetCidRequestAmino;
}
export interface QueryGetCidRequestSDKType {
    cid: string;
}
export interface QueryGetCidResponse {
    data: Uint8Array;
}
export interface QueryGetCidResponseProtoMsg {
    typeUrl: "/likechain.iscn.QueryGetCidResponse";
    value: Uint8Array;
}
export interface QueryGetCidResponseAmino {
    data?: string;
}
export interface QueryGetCidResponseAminoMsg {
    type: "/likechain.iscn.QueryGetCidResponse";
    value: QueryGetCidResponseAmino;
}
export interface QueryGetCidResponseSDKType {
    data: Uint8Array;
}
export interface QueryGetCidSizeRequest {
    cid: string;
}
export interface QueryGetCidSizeRequestProtoMsg {
    typeUrl: "/likechain.iscn.QueryGetCidSizeRequest";
    value: Uint8Array;
}
export interface QueryGetCidSizeRequestAmino {
    cid?: string;
}
export interface QueryGetCidSizeRequestAminoMsg {
    type: "/likechain.iscn.QueryGetCidSizeRequest";
    value: QueryGetCidSizeRequestAmino;
}
export interface QueryGetCidSizeRequestSDKType {
    cid: string;
}
export interface QueryGetCidSizeResponse {
    size: bigint;
}
export interface QueryGetCidSizeResponseProtoMsg {
    typeUrl: "/likechain.iscn.QueryGetCidSizeResponse";
    value: Uint8Array;
}
export interface QueryGetCidSizeResponseAmino {
    size?: string;
}
export interface QueryGetCidSizeResponseAminoMsg {
    type: "/likechain.iscn.QueryGetCidSizeResponse";
    value: QueryGetCidSizeResponseAmino;
}
export interface QueryGetCidSizeResponseSDKType {
    size: bigint;
}
export interface QueryHasCidRequest {
    cid: string;
}
export interface QueryHasCidRequestProtoMsg {
    typeUrl: "/likechain.iscn.QueryHasCidRequest";
    value: Uint8Array;
}
export interface QueryHasCidRequestAmino {
    cid?: string;
}
export interface QueryHasCidRequestAminoMsg {
    type: "/likechain.iscn.QueryHasCidRequest";
    value: QueryHasCidRequestAmino;
}
export interface QueryHasCidRequestSDKType {
    cid: string;
}
export interface QueryHasCidResponse {
    exist: boolean;
}
export interface QueryHasCidResponseProtoMsg {
    typeUrl: "/likechain.iscn.QueryHasCidResponse";
    value: Uint8Array;
}
export interface QueryHasCidResponseAmino {
    exist?: boolean;
}
export interface QueryHasCidResponseAminoMsg {
    type: "/likechain.iscn.QueryHasCidResponse";
    value: QueryHasCidResponseAmino;
}
export interface QueryHasCidResponseSDKType {
    exist: boolean;
}
export declare const QueryResponseRecord: {
    typeUrl: string;
    encode(message: QueryResponseRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResponseRecord;
    fromPartial(object: Partial<QueryResponseRecord>): QueryResponseRecord;
    fromAmino(object: QueryResponseRecordAmino): QueryResponseRecord;
    toAmino(message: QueryResponseRecord): QueryResponseRecordAmino;
    fromAminoMsg(object: QueryResponseRecordAminoMsg): QueryResponseRecord;
    fromProtoMsg(message: QueryResponseRecordProtoMsg): QueryResponseRecord;
    toProto(message: QueryResponseRecord): Uint8Array;
    toProtoMsg(message: QueryResponseRecord): QueryResponseRecordProtoMsg;
};
export declare const QueryRecordsByIdRequest: {
    typeUrl: string;
    encode(message: QueryRecordsByIdRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRecordsByIdRequest;
    fromPartial(object: Partial<QueryRecordsByIdRequest>): QueryRecordsByIdRequest;
    fromAmino(object: QueryRecordsByIdRequestAmino): QueryRecordsByIdRequest;
    toAmino(message: QueryRecordsByIdRequest): QueryRecordsByIdRequestAmino;
    fromAminoMsg(object: QueryRecordsByIdRequestAminoMsg): QueryRecordsByIdRequest;
    fromProtoMsg(message: QueryRecordsByIdRequestProtoMsg): QueryRecordsByIdRequest;
    toProto(message: QueryRecordsByIdRequest): Uint8Array;
    toProtoMsg(message: QueryRecordsByIdRequest): QueryRecordsByIdRequestProtoMsg;
};
export declare const QueryRecordsByIdResponse: {
    typeUrl: string;
    encode(message: QueryRecordsByIdResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRecordsByIdResponse;
    fromPartial(object: Partial<QueryRecordsByIdResponse>): QueryRecordsByIdResponse;
    fromAmino(object: QueryRecordsByIdResponseAmino): QueryRecordsByIdResponse;
    toAmino(message: QueryRecordsByIdResponse): QueryRecordsByIdResponseAmino;
    fromAminoMsg(object: QueryRecordsByIdResponseAminoMsg): QueryRecordsByIdResponse;
    fromProtoMsg(message: QueryRecordsByIdResponseProtoMsg): QueryRecordsByIdResponse;
    toProto(message: QueryRecordsByIdResponse): Uint8Array;
    toProtoMsg(message: QueryRecordsByIdResponse): QueryRecordsByIdResponseProtoMsg;
};
export declare const QueryRecordsByFingerprintRequest: {
    typeUrl: string;
    encode(message: QueryRecordsByFingerprintRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRecordsByFingerprintRequest;
    fromPartial(object: Partial<QueryRecordsByFingerprintRequest>): QueryRecordsByFingerprintRequest;
    fromAmino(object: QueryRecordsByFingerprintRequestAmino): QueryRecordsByFingerprintRequest;
    toAmino(message: QueryRecordsByFingerprintRequest): QueryRecordsByFingerprintRequestAmino;
    fromAminoMsg(object: QueryRecordsByFingerprintRequestAminoMsg): QueryRecordsByFingerprintRequest;
    fromProtoMsg(message: QueryRecordsByFingerprintRequestProtoMsg): QueryRecordsByFingerprintRequest;
    toProto(message: QueryRecordsByFingerprintRequest): Uint8Array;
    toProtoMsg(message: QueryRecordsByFingerprintRequest): QueryRecordsByFingerprintRequestProtoMsg;
};
export declare const QueryRecordsByFingerprintResponse: {
    typeUrl: string;
    encode(message: QueryRecordsByFingerprintResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRecordsByFingerprintResponse;
    fromPartial(object: Partial<QueryRecordsByFingerprintResponse>): QueryRecordsByFingerprintResponse;
    fromAmino(object: QueryRecordsByFingerprintResponseAmino): QueryRecordsByFingerprintResponse;
    toAmino(message: QueryRecordsByFingerprintResponse): QueryRecordsByFingerprintResponseAmino;
    fromAminoMsg(object: QueryRecordsByFingerprintResponseAminoMsg): QueryRecordsByFingerprintResponse;
    fromProtoMsg(message: QueryRecordsByFingerprintResponseProtoMsg): QueryRecordsByFingerprintResponse;
    toProto(message: QueryRecordsByFingerprintResponse): Uint8Array;
    toProtoMsg(message: QueryRecordsByFingerprintResponse): QueryRecordsByFingerprintResponseProtoMsg;
};
export declare const QueryRecordsByOwnerRequest: {
    typeUrl: string;
    encode(message: QueryRecordsByOwnerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRecordsByOwnerRequest;
    fromPartial(object: Partial<QueryRecordsByOwnerRequest>): QueryRecordsByOwnerRequest;
    fromAmino(object: QueryRecordsByOwnerRequestAmino): QueryRecordsByOwnerRequest;
    toAmino(message: QueryRecordsByOwnerRequest): QueryRecordsByOwnerRequestAmino;
    fromAminoMsg(object: QueryRecordsByOwnerRequestAminoMsg): QueryRecordsByOwnerRequest;
    fromProtoMsg(message: QueryRecordsByOwnerRequestProtoMsg): QueryRecordsByOwnerRequest;
    toProto(message: QueryRecordsByOwnerRequest): Uint8Array;
    toProtoMsg(message: QueryRecordsByOwnerRequest): QueryRecordsByOwnerRequestProtoMsg;
};
export declare const QueryRecordsByOwnerResponse: {
    typeUrl: string;
    encode(message: QueryRecordsByOwnerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRecordsByOwnerResponse;
    fromPartial(object: Partial<QueryRecordsByOwnerResponse>): QueryRecordsByOwnerResponse;
    fromAmino(object: QueryRecordsByOwnerResponseAmino): QueryRecordsByOwnerResponse;
    toAmino(message: QueryRecordsByOwnerResponse): QueryRecordsByOwnerResponseAmino;
    fromAminoMsg(object: QueryRecordsByOwnerResponseAminoMsg): QueryRecordsByOwnerResponse;
    fromProtoMsg(message: QueryRecordsByOwnerResponseProtoMsg): QueryRecordsByOwnerResponse;
    toProto(message: QueryRecordsByOwnerResponse): Uint8Array;
    toProtoMsg(message: QueryRecordsByOwnerResponse): QueryRecordsByOwnerResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetCidRequest: {
    typeUrl: string;
    encode(message: QueryGetCidRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetCidRequest;
    fromPartial(object: Partial<QueryGetCidRequest>): QueryGetCidRequest;
    fromAmino(object: QueryGetCidRequestAmino): QueryGetCidRequest;
    toAmino(message: QueryGetCidRequest): QueryGetCidRequestAmino;
    fromAminoMsg(object: QueryGetCidRequestAminoMsg): QueryGetCidRequest;
    fromProtoMsg(message: QueryGetCidRequestProtoMsg): QueryGetCidRequest;
    toProto(message: QueryGetCidRequest): Uint8Array;
    toProtoMsg(message: QueryGetCidRequest): QueryGetCidRequestProtoMsg;
};
export declare const QueryGetCidResponse: {
    typeUrl: string;
    encode(message: QueryGetCidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetCidResponse;
    fromPartial(object: Partial<QueryGetCidResponse>): QueryGetCidResponse;
    fromAmino(object: QueryGetCidResponseAmino): QueryGetCidResponse;
    toAmino(message: QueryGetCidResponse): QueryGetCidResponseAmino;
    fromAminoMsg(object: QueryGetCidResponseAminoMsg): QueryGetCidResponse;
    fromProtoMsg(message: QueryGetCidResponseProtoMsg): QueryGetCidResponse;
    toProto(message: QueryGetCidResponse): Uint8Array;
    toProtoMsg(message: QueryGetCidResponse): QueryGetCidResponseProtoMsg;
};
export declare const QueryGetCidSizeRequest: {
    typeUrl: string;
    encode(message: QueryGetCidSizeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetCidSizeRequest;
    fromPartial(object: Partial<QueryGetCidSizeRequest>): QueryGetCidSizeRequest;
    fromAmino(object: QueryGetCidSizeRequestAmino): QueryGetCidSizeRequest;
    toAmino(message: QueryGetCidSizeRequest): QueryGetCidSizeRequestAmino;
    fromAminoMsg(object: QueryGetCidSizeRequestAminoMsg): QueryGetCidSizeRequest;
    fromProtoMsg(message: QueryGetCidSizeRequestProtoMsg): QueryGetCidSizeRequest;
    toProto(message: QueryGetCidSizeRequest): Uint8Array;
    toProtoMsg(message: QueryGetCidSizeRequest): QueryGetCidSizeRequestProtoMsg;
};
export declare const QueryGetCidSizeResponse: {
    typeUrl: string;
    encode(message: QueryGetCidSizeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetCidSizeResponse;
    fromPartial(object: Partial<QueryGetCidSizeResponse>): QueryGetCidSizeResponse;
    fromAmino(object: QueryGetCidSizeResponseAmino): QueryGetCidSizeResponse;
    toAmino(message: QueryGetCidSizeResponse): QueryGetCidSizeResponseAmino;
    fromAminoMsg(object: QueryGetCidSizeResponseAminoMsg): QueryGetCidSizeResponse;
    fromProtoMsg(message: QueryGetCidSizeResponseProtoMsg): QueryGetCidSizeResponse;
    toProto(message: QueryGetCidSizeResponse): Uint8Array;
    toProtoMsg(message: QueryGetCidSizeResponse): QueryGetCidSizeResponseProtoMsg;
};
export declare const QueryHasCidRequest: {
    typeUrl: string;
    encode(message: QueryHasCidRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryHasCidRequest;
    fromPartial(object: Partial<QueryHasCidRequest>): QueryHasCidRequest;
    fromAmino(object: QueryHasCidRequestAmino): QueryHasCidRequest;
    toAmino(message: QueryHasCidRequest): QueryHasCidRequestAmino;
    fromAminoMsg(object: QueryHasCidRequestAminoMsg): QueryHasCidRequest;
    fromProtoMsg(message: QueryHasCidRequestProtoMsg): QueryHasCidRequest;
    toProto(message: QueryHasCidRequest): Uint8Array;
    toProtoMsg(message: QueryHasCidRequest): QueryHasCidRequestProtoMsg;
};
export declare const QueryHasCidResponse: {
    typeUrl: string;
    encode(message: QueryHasCidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryHasCidResponse;
    fromPartial(object: Partial<QueryHasCidResponse>): QueryHasCidResponse;
    fromAmino(object: QueryHasCidResponseAmino): QueryHasCidResponse;
    toAmino(message: QueryHasCidResponse): QueryHasCidResponseAmino;
    fromAminoMsg(object: QueryHasCidResponseAminoMsg): QueryHasCidResponse;
    fromProtoMsg(message: QueryHasCidResponseProtoMsg): QueryHasCidResponse;
    toProto(message: QueryHasCidResponse): Uint8Array;
    toProtoMsg(message: QueryHasCidResponse): QueryHasCidResponseProtoMsg;
};
