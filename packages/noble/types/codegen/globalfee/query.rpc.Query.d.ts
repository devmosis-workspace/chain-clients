import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest } from "./query";
import { Params } from "./genesis";
/** Query defines the gRPC querier service. */
export interface Query {
    params(request?: QueryParamsRequest): Promise<Params>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<Params>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<Params>;
};
