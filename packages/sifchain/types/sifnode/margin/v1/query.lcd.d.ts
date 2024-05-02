import { LCDClient } from "@cosmology/lcd";
import { PositionsRequest, PositionsResponseSDKType, PositionsForAddressRequest, PositionsForAddressResponseSDKType, PositionsByPoolRequest, PositionsByPoolResponseSDKType, ParamsRequest, ParamsResponseSDKType, StatusRequest, StatusResponseSDKType, WhitelistRequest, WhitelistResponseSDKType, IsWhitelistedRequest, IsWhitelistedResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    getPositions(params?: PositionsRequest): Promise<PositionsResponseSDKType>;
    getPositionsForAddress(params: PositionsForAddressRequest): Promise<PositionsForAddressResponseSDKType>;
    getPositionsByPool(params: PositionsByPoolRequest): Promise<PositionsByPoolResponseSDKType>;
    getParams(_params?: ParamsRequest): Promise<ParamsResponseSDKType>;
    getStatus(_params?: StatusRequest): Promise<StatusResponseSDKType>;
    getWhitelist(params?: WhitelistRequest): Promise<WhitelistResponseSDKType>;
    isWhitelisted(params: IsWhitelistedRequest): Promise<IsWhitelistedResponseSDKType>;
}
