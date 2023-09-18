import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetBlacklistedRequest, QueryGetBlacklistedResponseSDKType, QueryAllBlacklistedRequest, QueryAllBlacklistedResponseSDKType, QueryGetPausedRequest, QueryGetPausedResponseSDKType, QueryGetMasterMinterRequest, QueryGetMasterMinterResponseSDKType, QueryGetMintersRequest, QueryGetMintersResponseSDKType, QueryAllMintersRequest, QueryAllMintersResponseSDKType, QueryGetPauserRequest, QueryGetPauserResponseSDKType, QueryGetBlacklisterRequest, QueryGetBlacklisterResponseSDKType, QueryGetOwnerRequest, QueryGetOwnerResponseSDKType, QueryGetMinterControllerRequest, QueryGetMinterControllerResponseSDKType, QueryAllMinterControllerRequest, QueryAllMinterControllerResponseSDKType, QueryGetMintingDenomRequest, QueryGetMintingDenomResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    blacklisted(params: QueryGetBlacklistedRequest): Promise<QueryGetBlacklistedResponseSDKType>;
    blacklistedAll(params?: QueryAllBlacklistedRequest): Promise<QueryAllBlacklistedResponseSDKType>;
    paused(_params?: QueryGetPausedRequest): Promise<QueryGetPausedResponseSDKType>;
    masterMinter(_params?: QueryGetMasterMinterRequest): Promise<QueryGetMasterMinterResponseSDKType>;
    minters(params: QueryGetMintersRequest): Promise<QueryGetMintersResponseSDKType>;
    mintersAll(params?: QueryAllMintersRequest): Promise<QueryAllMintersResponseSDKType>;
    pauser(_params?: QueryGetPauserRequest): Promise<QueryGetPauserResponseSDKType>;
    blacklister(_params?: QueryGetBlacklisterRequest): Promise<QueryGetBlacklisterResponseSDKType>;
    owner(_params?: QueryGetOwnerRequest): Promise<QueryGetOwnerResponseSDKType>;
    minterController(params: QueryGetMinterControllerRequest): Promise<QueryGetMinterControllerResponseSDKType>;
    minterControllerAll(params?: QueryAllMinterControllerRequest): Promise<QueryAllMinterControllerResponseSDKType>;
    mintingDenom(_params?: QueryGetMintingDenomRequest): Promise<QueryGetMintingDenomResponseSDKType>;
}
