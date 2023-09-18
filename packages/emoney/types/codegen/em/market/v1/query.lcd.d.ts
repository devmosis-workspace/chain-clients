import { LCDClient } from "@cosmology/lcd";
import { QueryByAccountRequest, QueryByAccountResponseSDKType, QueryInstrumentsRequest, QueryInstrumentsResponseSDKType, QueryInstrumentRequest, QueryInstrumentResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    byAccount(params: QueryByAccountRequest): Promise<QueryByAccountResponseSDKType>;
    instruments(_params?: QueryInstrumentsRequest): Promise<QueryInstrumentsResponseSDKType>;
    instrument(params: QueryInstrumentRequest): Promise<QueryInstrumentResponseSDKType>;
}
