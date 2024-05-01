import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySourceRequest, QueryRoutesResponseSDKType, QueryDestinationRequest, QueryRoutedEnergyResponseSDKType, QueryRouteRequest, QueryRouteResponseSDKType, QueryRoutesRequest } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    sourceRoutes(params: QuerySourceRequest): Promise<QueryRoutesResponseSDKType>;
    destinationRoutes(params: QueryDestinationRequest): Promise<QueryRoutesResponseSDKType>;
    destinationRoutedEnergy(params: QueryDestinationRequest): Promise<QueryRoutedEnergyResponseSDKType>;
    sourceRoutedEnergy(params: QuerySourceRequest): Promise<QueryRoutedEnergyResponseSDKType>;
    route(params: QueryRouteRequest): Promise<QueryRouteResponseSDKType>;
    routes(params?: QueryRoutesRequest): Promise<QueryRoutesResponseSDKType>;
}
