import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryEgressRequest, QueryEgressResponseSDKType, QueryMailboxRequest, QueryMailboxResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    egress(params: QueryEgressRequest): Promise<QueryEgressResponseSDKType>;
    mailbox(params: QueryMailboxRequest): Promise<QueryMailboxResponseSDKType>;
}
