import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAPYRequest, QueryAPYResponse } from "./query";
/** Query defines the gRPC query service for the cork module. */
export interface Query {
    /** QueryParams queries the allocation module parameters. */
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** QueryAPY queries the APY returned from the incentives module. */
    queryAPY(request?: QueryAPYRequest): Promise<QueryAPYResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    queryAPY(request?: QueryAPYRequest): Promise<QueryAPYResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    queryAPY(request?: QueryAPYRequest): Promise<QueryAPYResponse>;
};
