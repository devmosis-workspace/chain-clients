import { Rpc } from "../../../helpers";
import { QueryParamsRequest, QueryParamsResponse, QuerySourceRequest, QueryRoutesResponse, QueryDestinationRequest, QueryRoutedEnergyResponse, QueryRouteRequest, QueryRouteResponse, QueryRoutesRequest } from "./query";
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    sourceRoutes(request: QuerySourceRequest): Promise<QueryRoutesResponse>;
    destinationRoutes(request: QueryDestinationRequest): Promise<QueryRoutesResponse>;
    destinationRoutedEnergy(request: QueryDestinationRequest): Promise<QueryRoutedEnergyResponse>;
    sourceRoutedEnergy(request: QuerySourceRequest): Promise<QueryRoutedEnergyResponse>;
    route(request: QueryRouteRequest): Promise<QueryRouteResponse>;
    routes(request?: QueryRoutesRequest): Promise<QueryRoutesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    sourceRoutes(request: QuerySourceRequest): Promise<QueryRoutesResponse>;
    destinationRoutes(request: QueryDestinationRequest): Promise<QueryRoutesResponse>;
    destinationRoutedEnergy(request: QueryDestinationRequest): Promise<QueryRoutedEnergyResponse>;
    sourceRoutedEnergy(request: QuerySourceRequest): Promise<QueryRoutedEnergyResponse>;
    route(request: QueryRouteRequest): Promise<QueryRouteResponse>;
    routes(request?: QueryRoutesRequest): Promise<QueryRoutesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    sourceRoutes(request: QuerySourceRequest): Promise<QueryRoutesResponse>;
    destinationRoutes(request: QueryDestinationRequest): Promise<QueryRoutesResponse>;
    destinationRoutedEnergy(request: QueryDestinationRequest): Promise<QueryRoutedEnergyResponse>;
    sourceRoutedEnergy(request: QuerySourceRequest): Promise<QueryRoutedEnergyResponse>;
    route(request: QueryRouteRequest): Promise<QueryRouteResponse>;
    routes(request?: QueryRoutesRequest): Promise<QueryRoutesResponse>;
};
