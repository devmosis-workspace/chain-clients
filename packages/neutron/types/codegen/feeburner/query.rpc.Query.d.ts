import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryTotalBurnedNeutronsAmountRequest, QueryTotalBurnedNeutronsAmountResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** TotalBurnedNeutronsAmount queries total amount of burned neutron fees. */
    totalBurnedNeutronsAmount(request?: QueryTotalBurnedNeutronsAmountRequest): Promise<QueryTotalBurnedNeutronsAmountResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    totalBurnedNeutronsAmount(request?: QueryTotalBurnedNeutronsAmountRequest): Promise<QueryTotalBurnedNeutronsAmountResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    totalBurnedNeutronsAmount(request?: QueryTotalBurnedNeutronsAmountRequest): Promise<QueryTotalBurnedNeutronsAmountResponse>;
};
