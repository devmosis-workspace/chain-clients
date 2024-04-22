import { LCDClient } from "@cosmology/lcd";
import { QueryAllProvidersAttributesRequest, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    allProvidersAttributes(params?: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponseSDKType>;
    providerAttributes(params: QueryProviderAttributesRequest): Promise<QueryProvidersResponseSDKType>;
    providerAuditorAttributes(params: QueryProviderAuditorRequest): Promise<QueryProvidersResponseSDKType>;
    auditorAttributes(params: QueryAuditorAttributesRequest): Promise<QueryProvidersResponseSDKType>;
}
