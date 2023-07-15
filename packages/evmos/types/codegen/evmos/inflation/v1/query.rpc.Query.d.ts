import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Period retrieves current period. */
    period(request?: QueryPeriodRequest): Promise<QueryPeriodResponse>;
    /** EpochMintProvision retrieves current minting epoch provision value. */
    epochMintProvision(request?: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponse>;
    /** SkippedEpochs retrieves the total number of skipped epochs. */
    skippedEpochs(request?: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponse>;
    /**
     * CirculatingSupply retrieves the total number of tokens that are in
     * circulation (i.e. excluding unvested tokens).
     */
    circulatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse>;
    /** InflationRate retrieves the inflation rate of the current period. */
    inflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
    /** Params retrieves the total set of minting parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    period(request?: QueryPeriodRequest): Promise<QueryPeriodResponse>;
    epochMintProvision(request?: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponse>;
    skippedEpochs(request?: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponse>;
    circulatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse>;
    inflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    period(request?: QueryPeriodRequest): Promise<QueryPeriodResponse>;
    epochMintProvision(request?: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponse>;
    skippedEpochs(request?: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponse>;
    circulatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse>;
    inflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
