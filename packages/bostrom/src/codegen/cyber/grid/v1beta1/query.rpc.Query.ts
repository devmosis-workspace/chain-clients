import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.sourceRoutes = this.sourceRoutes.bind(this);
    this.destinationRoutes = this.destinationRoutes.bind(this);
    this.destinationRoutedEnergy = this.destinationRoutedEnergy.bind(this);
    this.sourceRoutedEnergy = this.sourceRoutedEnergy.bind(this);
    this.route = this.route.bind(this);
    this.routes = this.routes.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.grid.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  sourceRoutes(request: QuerySourceRequest): Promise<QueryRoutesResponse> {
    const data = QuerySourceRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.grid.v1beta1.Query", "SourceRoutes", data);
    return promise.then(data => QueryRoutesResponse.decode(new BinaryReader(data)));
  }
  destinationRoutes(request: QueryDestinationRequest): Promise<QueryRoutesResponse> {
    const data = QueryDestinationRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.grid.v1beta1.Query", "DestinationRoutes", data);
    return promise.then(data => QueryRoutesResponse.decode(new BinaryReader(data)));
  }
  destinationRoutedEnergy(request: QueryDestinationRequest): Promise<QueryRoutedEnergyResponse> {
    const data = QueryDestinationRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.grid.v1beta1.Query", "DestinationRoutedEnergy", data);
    return promise.then(data => QueryRoutedEnergyResponse.decode(new BinaryReader(data)));
  }
  sourceRoutedEnergy(request: QuerySourceRequest): Promise<QueryRoutedEnergyResponse> {
    const data = QuerySourceRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.grid.v1beta1.Query", "SourceRoutedEnergy", data);
    return promise.then(data => QueryRoutedEnergyResponse.decode(new BinaryReader(data)));
  }
  route(request: QueryRouteRequest): Promise<QueryRouteResponse> {
    const data = QueryRouteRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.grid.v1beta1.Query", "Route", data);
    return promise.then(data => QueryRouteResponse.decode(new BinaryReader(data)));
  }
  routes(request: QueryRoutesRequest = {
    pagination: undefined
  }): Promise<QueryRoutesResponse> {
    const data = QueryRoutesRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.grid.v1beta1.Query", "Routes", data);
    return promise.then(data => QueryRoutesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    sourceRoutes(request: QuerySourceRequest): Promise<QueryRoutesResponse> {
      return queryService.sourceRoutes(request);
    },
    destinationRoutes(request: QueryDestinationRequest): Promise<QueryRoutesResponse> {
      return queryService.destinationRoutes(request);
    },
    destinationRoutedEnergy(request: QueryDestinationRequest): Promise<QueryRoutedEnergyResponse> {
      return queryService.destinationRoutedEnergy(request);
    },
    sourceRoutedEnergy(request: QuerySourceRequest): Promise<QueryRoutedEnergyResponse> {
      return queryService.sourceRoutedEnergy(request);
    },
    route(request: QueryRouteRequest): Promise<QueryRouteResponse> {
      return queryService.route(request);
    },
    routes(request?: QueryRoutesRequest): Promise<QueryRoutesResponse> {
      return queryService.routes(request);
    }
  };
};