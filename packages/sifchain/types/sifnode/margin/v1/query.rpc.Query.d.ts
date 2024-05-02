import { Rpc } from "../../../helpers";
import { MTPRequest, MTPResponse, PositionsRequest, PositionsResponse, PositionsForAddressRequest, PositionsForAddressResponse, PositionsByPoolRequest, PositionsByPoolResponse, ParamsRequest, ParamsResponse, StatusRequest, StatusResponse, GetSQParamsRequest, GetSQParamsResponse, WhitelistRequest, WhitelistResponse, IsWhitelistedRequest, IsWhitelistedResponse } from "./query";
export interface Query {
    getMTP(request: MTPRequest): Promise<MTPResponse>;
    getPositions(request?: PositionsRequest): Promise<PositionsResponse>;
    getPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse>;
    getPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse>;
    getParams(request?: ParamsRequest): Promise<ParamsResponse>;
    getStatus(request?: StatusRequest): Promise<StatusResponse>;
    getSQParams(request: GetSQParamsRequest): Promise<GetSQParamsResponse>;
    getWhitelist(request?: WhitelistRequest): Promise<WhitelistResponse>;
    isWhitelisted(request: IsWhitelistedRequest): Promise<IsWhitelistedResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    getMTP(request: MTPRequest): Promise<MTPResponse>;
    getPositions(request?: PositionsRequest): Promise<PositionsResponse>;
    getPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse>;
    getPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse>;
    getParams(request?: ParamsRequest): Promise<ParamsResponse>;
    getStatus(request?: StatusRequest): Promise<StatusResponse>;
    getSQParams(request: GetSQParamsRequest): Promise<GetSQParamsResponse>;
    getWhitelist(request?: WhitelistRequest): Promise<WhitelistResponse>;
    isWhitelisted(request: IsWhitelistedRequest): Promise<IsWhitelistedResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    getMTP(request: MTPRequest): Promise<MTPResponse>;
    getPositions(request?: PositionsRequest): Promise<PositionsResponse>;
    getPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse>;
    getPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse>;
    getParams(request?: ParamsRequest): Promise<ParamsResponse>;
    getStatus(request?: StatusRequest): Promise<StatusResponse>;
    getSQParams(request: GetSQParamsRequest): Promise<GetSQParamsResponse>;
    getWhitelist(request?: WhitelistRequest): Promise<WhitelistResponse>;
    isWhitelisted(request: IsWhitelistedRequest): Promise<IsWhitelistedResponse>;
};
