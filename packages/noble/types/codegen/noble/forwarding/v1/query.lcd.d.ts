import { LCDClient } from "@cosmology/lcd";
import { QueryAddress, QueryAddressResponseSDKType, QueryStatsByChannel, QueryStatsByChannelResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    address(params: QueryAddress): Promise<QueryAddressResponseSDKType>;
    statsByChannel(params: QueryStatsByChannel): Promise<QueryStatsByChannelResponseSDKType>;
}
