import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryZoneDropRequest, QueryZoneDropResponseSDKType, QueryAccountBalanceRequest, QueryAccountBalanceResponseSDKType, QueryZoneDropsRequest, QueryZoneDropsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordResponseSDKType, QueryClaimRecordsRequest, QueryClaimRecordsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    zoneDrop(params: QueryZoneDropRequest): Promise<QueryZoneDropResponseSDKType>;
    accountBalance(params: QueryAccountBalanceRequest): Promise<QueryAccountBalanceResponseSDKType>;
    zoneDrops(params: QueryZoneDropsRequest): Promise<QueryZoneDropsResponseSDKType>;
    claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType>;
    claimRecords(params: QueryClaimRecordsRequest): Promise<QueryClaimRecordsResponseSDKType>;
}
