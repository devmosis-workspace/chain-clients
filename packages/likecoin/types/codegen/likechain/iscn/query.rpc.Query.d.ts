import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryRecordsByIdRequest, QueryRecordsByIdResponse, QueryRecordsByFingerprintRequest, QueryRecordsByFingerprintResponse, QueryRecordsByOwnerRequest, QueryRecordsByOwnerResponse, QueryParamsRequest, QueryParamsResponse, QueryGetCidRequest, QueryGetCidResponse, QueryHasCidRequest, QueryHasCidResponse, QueryGetCidSizeRequest, QueryGetCidSizeResponse } from "./query";
export interface Query {
    recordsById(request: QueryRecordsByIdRequest): Promise<QueryRecordsByIdResponse>;
    recordsByFingerprint(request: QueryRecordsByFingerprintRequest): Promise<QueryRecordsByFingerprintResponse>;
    recordsByOwner(request: QueryRecordsByOwnerRequest): Promise<QueryRecordsByOwnerResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getCid(request: QueryGetCidRequest): Promise<QueryGetCidResponse>;
    hasCid(request: QueryHasCidRequest): Promise<QueryHasCidResponse>;
    getCidSize(request: QueryGetCidSizeRequest): Promise<QueryGetCidSizeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    recordsById(request: QueryRecordsByIdRequest): Promise<QueryRecordsByIdResponse>;
    recordsByFingerprint(request: QueryRecordsByFingerprintRequest): Promise<QueryRecordsByFingerprintResponse>;
    recordsByOwner(request: QueryRecordsByOwnerRequest): Promise<QueryRecordsByOwnerResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getCid(request: QueryGetCidRequest): Promise<QueryGetCidResponse>;
    hasCid(request: QueryHasCidRequest): Promise<QueryHasCidResponse>;
    getCidSize(request: QueryGetCidSizeRequest): Promise<QueryGetCidSizeResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    recordsById(request: QueryRecordsByIdRequest): Promise<QueryRecordsByIdResponse>;
    recordsByFingerprint(request: QueryRecordsByFingerprintRequest): Promise<QueryRecordsByFingerprintResponse>;
    recordsByOwner(request: QueryRecordsByOwnerRequest): Promise<QueryRecordsByOwnerResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getCid(request: QueryGetCidRequest): Promise<QueryGetCidResponse>;
    hasCid(request: QueryHasCidRequest): Promise<QueryHasCidResponse>;
    getCidSize(request: QueryGetCidSizeRequest): Promise<QueryGetCidSizeResponse>;
};
