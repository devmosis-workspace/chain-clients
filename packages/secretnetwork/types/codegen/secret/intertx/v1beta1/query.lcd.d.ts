import { LCDClient } from "@osmonauts/lcd";
import { QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    interchainAccountFromAddress(params: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponseSDKType>;
}
