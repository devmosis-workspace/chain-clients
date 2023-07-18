import { LCDClient } from "@osmonauts/lcd";
import { SupplyRequest, SupplyResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    totalSupply(_params?: SupplyRequest): Promise<SupplyResponseSDKType>;
    liquidSupply(_params?: SupplyRequest): Promise<SupplyResponseSDKType>;
}
