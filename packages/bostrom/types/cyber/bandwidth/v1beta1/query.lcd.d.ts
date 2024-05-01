import { LCDClient } from "@cosmology/lcd";
import { QueryLoadRequest, QueryLoadResponseSDKType, QueryPriceRequest, QueryPriceResponseSDKType, QueryTotalBandwidthRequest, QueryTotalBandwidthResponseSDKType, QueryNeuronBandwidthRequest, QueryNeuronBandwidthResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    load(_params?: QueryLoadRequest): Promise<QueryLoadResponseSDKType>;
    price(_params?: QueryPriceRequest): Promise<QueryPriceResponseSDKType>;
    totalBandwidth(_params?: QueryTotalBandwidthRequest): Promise<QueryTotalBandwidthResponseSDKType>;
    neuronBandwidth(params: QueryNeuronBandwidthRequest): Promise<QueryNeuronBandwidthResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
