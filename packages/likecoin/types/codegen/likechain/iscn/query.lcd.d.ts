import { LCDClient } from "@cosmology/lcd";
import { QueryRecordsByIdRequest, QueryRecordsByIdResponseSDKType, QueryRecordsByFingerprintRequest, QueryRecordsByFingerprintResponseSDKType, QueryRecordsByOwnerRequest, QueryRecordsByOwnerResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryGetCidRequest, QueryGetCidResponseSDKType, QueryHasCidRequest, QueryHasCidResponseSDKType, QueryGetCidSizeRequest, QueryGetCidSizeResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    recordsById(params: QueryRecordsByIdRequest): Promise<QueryRecordsByIdResponseSDKType>;
    recordsByFingerprint(params: QueryRecordsByFingerprintRequest): Promise<QueryRecordsByFingerprintResponseSDKType>;
    recordsByOwner(params: QueryRecordsByOwnerRequest): Promise<QueryRecordsByOwnerResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    getCid(params: QueryGetCidRequest): Promise<QueryGetCidResponseSDKType>;
    hasCid(params: QueryHasCidRequest): Promise<QueryHasCidResponseSDKType>;
    getCidSize(params: QueryGetCidSizeRequest): Promise<QueryGetCidSizeResponseSDKType>;
}
