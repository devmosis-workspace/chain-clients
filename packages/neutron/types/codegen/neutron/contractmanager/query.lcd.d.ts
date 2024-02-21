import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryFailuresRequest, QueryFailuresResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    addressFailure(params: QueryFailuresRequest): Promise<QueryFailuresResponseSDKType>;
    addressFailures(params: QueryFailuresRequest): Promise<QueryFailuresResponseSDKType>;
    failures(params: QueryFailuresRequest): Promise<QueryFailuresResponseSDKType>;
}
