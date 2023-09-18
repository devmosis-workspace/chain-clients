import { LCDClient } from "@cosmology/lcd";
import { QueryAccountsRequest, QueryAccountsResponseSDKType, QueryPaymentsRequest, QueryPaymentsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    accounts(params: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType>;
    payments(params: QueryPaymentsRequest): Promise<QueryPaymentsResponseSDKType>;
}
