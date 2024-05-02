import { Rpc } from "../../../helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryRateRequest, QueryRateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries all parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rate(request: QueryRateRequest): Promise<QueryRateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rate(request: QueryRateRequest): Promise<QueryRateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rate(request: QueryRateRequest): Promise<QueryRateResponse>;
};
