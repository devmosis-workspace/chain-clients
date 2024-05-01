import { Rpc } from "../../../helpers";
import { QueryLoadRequest, QueryLoadResponse, QueryPriceRequest, QueryPriceResponse, QueryTotalBandwidthRequest, QueryTotalBandwidthResponse, QueryNeuronBandwidthRequest, QueryNeuronBandwidthResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export interface Query {
    load(request?: QueryLoadRequest): Promise<QueryLoadResponse>;
    price(request?: QueryPriceRequest): Promise<QueryPriceResponse>;
    totalBandwidth(request?: QueryTotalBandwidthRequest): Promise<QueryTotalBandwidthResponse>;
    neuronBandwidth(request: QueryNeuronBandwidthRequest): Promise<QueryNeuronBandwidthResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    load(request?: QueryLoadRequest): Promise<QueryLoadResponse>;
    price(request?: QueryPriceRequest): Promise<QueryPriceResponse>;
    totalBandwidth(request?: QueryTotalBandwidthRequest): Promise<QueryTotalBandwidthResponse>;
    neuronBandwidth(request: QueryNeuronBandwidthRequest): Promise<QueryNeuronBandwidthResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    load(request?: QueryLoadRequest): Promise<QueryLoadResponse>;
    price(request?: QueryPriceRequest): Promise<QueryPriceResponse>;
    totalBandwidth(request?: QueryTotalBandwidthRequest): Promise<QueryTotalBandwidthResponse>;
    neuronBandwidth(request: QueryNeuronBandwidthRequest): Promise<QueryNeuronBandwidthResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
