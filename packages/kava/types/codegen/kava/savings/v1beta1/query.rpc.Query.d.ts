import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse } from "./query";
/** Query defines the gRPC querier service for savings module */
export interface Query {
    /** Params queries all parameters of the savings module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Deposits queries savings deposits. */
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    /** TotalSupply returns the total sum of all coins currently locked into the savings module. */
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
};
