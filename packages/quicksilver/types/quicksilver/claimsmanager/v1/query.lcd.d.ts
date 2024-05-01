import { LCDClient } from "@cosmology/lcd";
import { QueryClaimsRequest, QueryClaimsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    claims(params: QueryClaimsRequest): Promise<QueryClaimsResponseSDKType>;
    lastEpochClaims(params: QueryClaimsRequest): Promise<QueryClaimsResponseSDKType>;
    userClaims(params: QueryClaimsRequest): Promise<QueryClaimsResponseSDKType>;
    userLastEpochClaims(params: QueryClaimsRequest): Promise<QueryClaimsResponseSDKType>;
}
