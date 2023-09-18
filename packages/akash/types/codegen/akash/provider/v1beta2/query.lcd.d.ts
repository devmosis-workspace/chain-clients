import { LCDClient } from "@cosmology/lcd";
import { QueryProvidersRequest, QueryProvidersResponseSDKType, QueryProviderRequest, QueryProviderResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    providers(params?: QueryProvidersRequest): Promise<QueryProvidersResponseSDKType>;
    provider(params: QueryProviderRequest): Promise<QueryProviderResponseSDKType>;
}
