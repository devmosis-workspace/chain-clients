import { LCDClient } from "@osmonauts/lcd";
import { QueryMinGasPrice, QueryMinGasPriceResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    minGasPrice(_params?: QueryMinGasPrice): Promise<QueryMinGasPriceResponseSDKType>;
}
