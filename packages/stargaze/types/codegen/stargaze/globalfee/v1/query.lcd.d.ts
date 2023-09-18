import { LCDClient } from "@cosmology/lcd";
import { QueryCodeAuthorizationRequest, QueryCodeAuthorizationResponseSDKType, QueryContractAuthorizationRequest, QueryContractAuthorizationResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryAuthorizationsRequest, QueryAuthorizationsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    codeAuthorization(params: QueryCodeAuthorizationRequest): Promise<QueryCodeAuthorizationResponseSDKType>;
    contractAuthorization(params: QueryContractAuthorizationRequest): Promise<QueryContractAuthorizationResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    authorizations(_params?: QueryAuthorizationsRequest): Promise<QueryAuthorizationsResponseSDKType>;
}
