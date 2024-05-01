import { Rpc } from "../../../helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryInvestmintRequest, QueryInvestmintResponse } from "./query";
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    investmint(request: QueryInvestmintRequest): Promise<QueryInvestmintResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    investmint(request: QueryInvestmintRequest): Promise<QueryInvestmintResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    investmint(request: QueryInvestmintRequest): Promise<QueryInvestmintResponse>;
};
