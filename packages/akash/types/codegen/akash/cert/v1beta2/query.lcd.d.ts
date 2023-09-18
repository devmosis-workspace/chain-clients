import { LCDClient } from "@cosmology/lcd";
import { QueryCertificatesRequest, QueryCertificatesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    certificates(params: QueryCertificatesRequest): Promise<QueryCertificatesResponseSDKType>;
}
