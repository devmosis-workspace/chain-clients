import { LCDClient } from "@osmonauts/lcd";
import { QuerySupersRequest, QuerySupersResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    supers(params?: QuerySupersRequest): Promise<QuerySupersResponseSDKType>;
}
