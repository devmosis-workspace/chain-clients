import { LCDClient } from "@osmonauts/lcd";
import { QueryGovernanceKeyRequest, QueryGovernanceKeyResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    governanceKey(_params?: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponseSDKType>;
}
