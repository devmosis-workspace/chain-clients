import { LCDClient } from "@cosmology/lcd";
import { QueryGovernanceKeyRequest, QueryGovernanceKeyResponseSDKType, ParamsRequest, ParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    governanceKey(_params?: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponseSDKType>;
    params(_params?: ParamsRequest): Promise<ParamsResponseSDKType>;
}
