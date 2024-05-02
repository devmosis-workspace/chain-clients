import { Rpc } from "../../../helpers";
import { QuerySwapRequest, QuerySwapResponse, QueryTerraPoolDeltaRequest, QueryTerraPoolDeltaResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Swap returns simulated swap amount. */
    swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
    /** TerraPoolDelta returns terra_pool_delta amount. */
    terraPoolDelta(request?: QueryTerraPoolDeltaRequest): Promise<QueryTerraPoolDeltaResponse>;
    /** Params queries all parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
    terraPoolDelta(request?: QueryTerraPoolDeltaRequest): Promise<QueryTerraPoolDeltaResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
    terraPoolDelta(request?: QueryTerraPoolDeltaRequest): Promise<QueryTerraPoolDeltaResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
