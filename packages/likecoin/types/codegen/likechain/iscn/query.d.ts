import { Params, ParamsSDKType } from "./params";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryResponseRecord {
    ipld: string;
    data: Uint8Array;
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
    fromVersion: Long;
    /**
     * The final version in the resulting records.
     * If omitted or is 0, then it will be interpreted as the latest version.
     */
    toVersion: Long;
}
export interface QueryRecordsByIdRequestSDKType {
    iscn_id: string;
    from_version: Long;
    to_version: Long;
}
export interface QueryRecordsByIdResponse {
    owner: string;
    latestVersion: Long;
    records: QueryResponseRecord[];
}
export interface QueryRecordsByIdResponseSDKType {
    owner: string;
    latest_version: Long;
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
    fromSequence: Long;
}
export interface QueryRecordsByFingerprintRequestSDKType {
    fingerprint: string;
    from_sequence: Long;
}
export interface QueryRecordsByFingerprintResponse {
    records: QueryResponseRecord[];
    /** For pagination. */
    nextSequence: Long;
}
export interface QueryRecordsByFingerprintResponseSDKType {
    records: QueryResponseRecordSDKType[];
    next_sequence: Long;
}
export interface QueryRecordsByOwnerRequest {
    /** Owner address of the record(s) to be queried. */
    owner: string;
    /**
     * For pagination.
     * For the first query, fill in 0 or just omit this field.
     * For continuous queries, fill in the `next_sequence` field in the previous response.
     */
    fromSequence: Long;
}
export interface QueryRecordsByOwnerRequestSDKType {
    owner: string;
    from_sequence: Long;
}
export interface QueryRecordsByOwnerResponse {
    records: QueryResponseRecord[];
    nextSequence: Long;
}
export interface QueryRecordsByOwnerResponseSDKType {
    records: QueryResponseRecordSDKType[];
    next_sequence: Long;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryGetCidRequest {
    cid: string;
}
export interface QueryGetCidRequestSDKType {
    cid: string;
}
export interface QueryGetCidResponse {
    data: Uint8Array;
}
export interface QueryGetCidResponseSDKType {
    data: Uint8Array;
}
export interface QueryGetCidSizeRequest {
    cid: string;
}
export interface QueryGetCidSizeRequestSDKType {
    cid: string;
}
export interface QueryGetCidSizeResponse {
    size: Long;
}
export interface QueryGetCidSizeResponseSDKType {
    size: Long;
}
export interface QueryHasCidRequest {
    cid: string;
}
export interface QueryHasCidRequestSDKType {
    cid: string;
}
export interface QueryHasCidResponse {
    exist: boolean;
}
export interface QueryHasCidResponseSDKType {
    exist: boolean;
}
export declare const QueryResponseRecord: {
    encode(message: QueryResponseRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryResponseRecord;
    fromPartial(object: Partial<QueryResponseRecord>): QueryResponseRecord;
};
export declare const QueryRecordsByIdRequest: {
    encode(message: QueryRecordsByIdRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRecordsByIdRequest;
    fromPartial(object: Partial<QueryRecordsByIdRequest>): QueryRecordsByIdRequest;
};
export declare const QueryRecordsByIdResponse: {
    encode(message: QueryRecordsByIdResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRecordsByIdResponse;
    fromPartial(object: Partial<QueryRecordsByIdResponse>): QueryRecordsByIdResponse;
};
export declare const QueryRecordsByFingerprintRequest: {
    encode(message: QueryRecordsByFingerprintRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRecordsByFingerprintRequest;
    fromPartial(object: Partial<QueryRecordsByFingerprintRequest>): QueryRecordsByFingerprintRequest;
};
export declare const QueryRecordsByFingerprintResponse: {
    encode(message: QueryRecordsByFingerprintResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRecordsByFingerprintResponse;
    fromPartial(object: Partial<QueryRecordsByFingerprintResponse>): QueryRecordsByFingerprintResponse;
};
export declare const QueryRecordsByOwnerRequest: {
    encode(message: QueryRecordsByOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRecordsByOwnerRequest;
    fromPartial(object: Partial<QueryRecordsByOwnerRequest>): QueryRecordsByOwnerRequest;
};
export declare const QueryRecordsByOwnerResponse: {
    encode(message: QueryRecordsByOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRecordsByOwnerResponse;
    fromPartial(object: Partial<QueryRecordsByOwnerResponse>): QueryRecordsByOwnerResponse;
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
export declare const QueryGetCidRequest: {
    encode(message: QueryGetCidRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetCidRequest;
    fromPartial(object: Partial<QueryGetCidRequest>): QueryGetCidRequest;
};
export declare const QueryGetCidResponse: {
    encode(message: QueryGetCidResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetCidResponse;
    fromPartial(object: Partial<QueryGetCidResponse>): QueryGetCidResponse;
};
export declare const QueryGetCidSizeRequest: {
    encode(message: QueryGetCidSizeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetCidSizeRequest;
    fromPartial(object: Partial<QueryGetCidSizeRequest>): QueryGetCidSizeRequest;
};
export declare const QueryGetCidSizeResponse: {
    encode(message: QueryGetCidSizeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetCidSizeResponse;
    fromPartial(object: Partial<QueryGetCidSizeResponse>): QueryGetCidSizeResponse;
};
export declare const QueryHasCidRequest: {
    encode(message: QueryHasCidRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryHasCidRequest;
    fromPartial(object: Partial<QueryHasCidRequest>): QueryHasCidRequest;
};
export declare const QueryHasCidResponse: {
    encode(message: QueryHasCidResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryHasCidResponse;
    fromPartial(object: Partial<QueryHasCidResponse>): QueryHasCidResponse;
};
