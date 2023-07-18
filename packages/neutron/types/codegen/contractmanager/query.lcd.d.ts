import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryFailuresRequest, QueryFailuresResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    addressFailures(params: QueryFailuresRequest): Promise<QueryFailuresResponseSDKType>;
    failures(params: QueryFailuresRequest): Promise<QueryFailuresResponseSDKType>;
}
