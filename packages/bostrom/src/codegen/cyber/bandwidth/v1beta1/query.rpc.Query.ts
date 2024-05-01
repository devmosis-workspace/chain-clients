import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryLoadRequest, QueryLoadResponse, QueryPriceRequest, QueryPriceResponse, QueryTotalBandwidthRequest, QueryTotalBandwidthResponse, QueryNeuronBandwidthRequest, QueryNeuronBandwidthResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export interface Query {
  load(request?: QueryLoadRequest): Promise<QueryLoadResponse>;
  price(request?: QueryPriceRequest): Promise<QueryPriceResponse>;
  totalBandwidth(request?: QueryTotalBandwidthRequest): Promise<QueryTotalBandwidthResponse>;
  neuronBandwidth(request: QueryNeuronBandwidthRequest): Promise<QueryNeuronBandwidthResponse>;
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.load = this.load.bind(this);
    this.price = this.price.bind(this);
    this.totalBandwidth = this.totalBandwidth.bind(this);
    this.neuronBandwidth = this.neuronBandwidth.bind(this);
    this.params = this.params.bind(this);
  }
  load(request: QueryLoadRequest = {}): Promise<QueryLoadResponse> {
    const data = QueryLoadRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.bandwidth.v1beta1.Query", "Load", data);
    return promise.then(data => QueryLoadResponse.decode(new BinaryReader(data)));
  }
  price(request: QueryPriceRequest = {}): Promise<QueryPriceResponse> {
    const data = QueryPriceRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.bandwidth.v1beta1.Query", "Price", data);
    return promise.then(data => QueryPriceResponse.decode(new BinaryReader(data)));
  }
  totalBandwidth(request: QueryTotalBandwidthRequest = {}): Promise<QueryTotalBandwidthResponse> {
    const data = QueryTotalBandwidthRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.bandwidth.v1beta1.Query", "TotalBandwidth", data);
    return promise.then(data => QueryTotalBandwidthResponse.decode(new BinaryReader(data)));
  }
  neuronBandwidth(request: QueryNeuronBandwidthRequest): Promise<QueryNeuronBandwidthResponse> {
    const data = QueryNeuronBandwidthRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.bandwidth.v1beta1.Query", "NeuronBandwidth", data);
    return promise.then(data => QueryNeuronBandwidthResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.bandwidth.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    load(request?: QueryLoadRequest): Promise<QueryLoadResponse> {
      return queryService.load(request);
    },
    price(request?: QueryPriceRequest): Promise<QueryPriceResponse> {
      return queryService.price(request);
    },
    totalBandwidth(request?: QueryTotalBandwidthRequest): Promise<QueryTotalBandwidthResponse> {
      return queryService.totalBandwidth(request);
    },
    neuronBandwidth(request: QueryNeuronBandwidthRequest): Promise<QueryNeuronBandwidthResponse> {
      return queryService.neuronBandwidth(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};