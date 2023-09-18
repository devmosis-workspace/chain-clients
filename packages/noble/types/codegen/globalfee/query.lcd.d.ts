import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest } from "./query";
import { ParamsSDKType } from "./genesis";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<ParamsSDKType>;
}
