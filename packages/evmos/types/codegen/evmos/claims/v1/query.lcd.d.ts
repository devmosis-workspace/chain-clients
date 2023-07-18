import { LCDClient } from "@osmonauts/lcd";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryClaimsRecordsRequest, QueryClaimsRecordsResponseSDKType, QueryClaimsRecordRequest, QueryClaimsRecordResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    totalUnclaimed(_params?: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    claimsRecords(params?: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponseSDKType>;
    claimsRecord(params: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponseSDKType>;
}
