import { Rpc } from "../../../helpers";
import { QueryInflationRateRequest, QueryInflationRateResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse, QueryGenesisTimeRequest, QueryGenesisTimeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** InflationRate returns the current inflation rate. */
    inflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
    /** AnnualProvisions returns the current annual provisions. */
    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
    /** GenesisTime returns the genesis time. */
    genesisTime(request?: QueryGenesisTimeRequest): Promise<QueryGenesisTimeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    inflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
    genesisTime(request?: QueryGenesisTimeRequest): Promise<QueryGenesisTimeResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    inflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
    genesisTime(request?: QueryGenesisTimeRequest): Promise<QueryGenesisTimeResponse>;
};
