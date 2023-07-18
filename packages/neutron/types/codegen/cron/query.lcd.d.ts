import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetScheduleRequest, QueryGetScheduleResponseSDKType, QuerySchedulesRequest, QuerySchedulesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    schedule(params: QueryGetScheduleRequest): Promise<QueryGetScheduleResponseSDKType>;
    schedules(params?: QuerySchedulesRequest): Promise<QuerySchedulesResponseSDKType>;
}
