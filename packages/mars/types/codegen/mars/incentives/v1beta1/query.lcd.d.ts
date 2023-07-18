import { LCDClient } from "@osmonauts/lcd";
import { QueryScheduleRequest, QueryScheduleResponseSDKType, QuerySchedulesRequest, QuerySchedulesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    schedule(params: QueryScheduleRequest): Promise<QueryScheduleResponseSDKType>;
    schedules(params?: QuerySchedulesRequest): Promise<QuerySchedulesResponseSDKType>;
}
